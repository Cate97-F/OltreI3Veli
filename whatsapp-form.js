/**
 * WhatsApp helpers — form lead + CTA guida gratuita.
 * Nessuna libreria esterna.
 */
(function () {
  "use strict";

  var WHATSAPP_NUMBER = "393520942078";
  var FORM_ID = "lead-form";
  var GUIDE_CTA_ID = "cta-guida-gratuita";
  var GUIDE_CTA_CLASS = "js-cta-guida";

  var GUIDE_REQUEST_MESSAGE =
    "ciao Luna, vorrei avere la guida gratuita sui tarocchi marsigliesi";

  function buildLeadMessage(nome, cognome, email) {
    var lines = [
      "Ciao, vorrei iniziare il percorso con Oltre i Tre Veli.",
      "",
      "Nome: " + (nome || "—"),
      "Cognome: " + (cognome || "—"),
      "Email: " + (email || "—")
    ];
    return lines.join("\n");
  }

  function whatsappUrl(text) {
    return (
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(text)
    );
  }

  function openWhatsApp(text) {
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  }

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  onReady(function () {
    var form = document.getElementById(FORM_ID);
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.reportValidity()) {
          return;
        }

        var nome =
          (form.elements.nome && form.elements.nome.value.trim()) || "";
        var cognome =
          (form.elements.cognome && form.elements.cognome.value.trim()) || "";
        var email =
          (form.elements.email && form.elements.email.value.trim()) || "";

        openWhatsApp(buildLeadMessage(nome, cognome, email));
      });
    }

    var guideHref = whatsappUrl(GUIDE_REQUEST_MESSAGE);
    var guideCta = document.getElementById(GUIDE_CTA_ID);
    if (guideCta) {
      guideCta.setAttribute("href", guideHref);
    }
    var guideCtas = document.querySelectorAll("." + GUIDE_CTA_CLASS);
    for (var i = 0; i < guideCtas.length; i++) {
      guideCtas[i].setAttribute("href", guideHref);
    }
  });
})();
