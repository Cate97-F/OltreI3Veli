Agisci come un Senior UI/UX Designer, Frontend Developer e Conversion Rate Optimization Specialist con esperienza nella realizzazione di landing page ad alta conversione per infoprodotti digitali.

Il tuo compito è realizzare una landing page moderna, elegante e altamente persuasiva per un progetto di esoterismo chiamato:

"Oltre i Tre Veli – Scuola di Tarocchi"

L'obiettivo NON è realizzare un normale sito web, ma una landing page progettata per:

1. catturare immediatamente l'attenzione
2. trasmettere mistero e autorevolezza
3. far desiderare di approfondire
4. raccogliere email
5. spingere progressivamente verso l'acquisto del prodotto.

L'utente deve percepire un'esperienza premium.

--------------------------------------------------
RIFERIMENTO VISIVO OBBLIGATORIO
--------------------------------------------------

Usa come riferimento estetico primario il file:

exampleDesign.jpg

(nella stessa cartella del progetto)

La landing generata deve avvicinarsi il più possibile a quel design in:

- atmosfera (mistica, alchemica, notturna, premium)
- tipografia (serif elegante per headline, sans-serif pulita per body)
- ritmo visivo (sezioni scure alternate a sezioni crema)
- dettagli (bordi sottili dorati, icone lineari celesti, CTA oro pieno)
- tono del copy (poetico, interiore, non sensazionalistico)
- tipo di immagini (usa SOLO le foto locali del progetto, assegnate sotto)

NON copiare layout diversi da quelli indicati nella sezione STRUTTURA.
Il riferimento serve per look & feel, colori, tipografia, copy e mood — non per cambiare l'ordine delle sezioni.

--------------------------------------------------
PUBBLICO TARGET
--------------------------------------------------

• Mercato italiano

• Persone interessate a:

- esoterismo
- spiritualità
- crescita personale
- tarocchi
- simbolismo
- astrologia
- archetipi
- percorsi interiori
- psicologia junghiana
- Cabala

Età indicativa:

25-55 anni.

--------------------------------------------------
STILE VISIVO
--------------------------------------------------

La landing NON deve sembrare un classico sito Bootstrap.

Deve ricordare le landing moderne utilizzate per:

• ebook
• corsi online
• masterclass
• funnel premium
• scuole spirituali di alto posizionamento

Lo stile deve essere:

- minimal
- elegante
- premium
- cinematografico
- misterioso
- mistico
- pulito
- artigianale (non "template generico")

Ispirazioni di qualità (struttura funnel + raffinatezza):

- Masterclass
- landing di infoprodotti premium
- look di exampleDesign.jpg (obbligatorio)

Atmosfera da evocare:

- notte
- costellazioni
- tarocchi
- candele
- oro antico / bronzo
- simboli esoterici (luna, stella, occhio, albero della vita)
- luce soffusa tipo chiarore di candela
- geometria sacra delicata (mandala sottili, non invadenti)

Alternanza sezioni:

- sezioni scure (nero / carbone) con testo chiaro
- sezioni chiare (crema / pergamena) con testo scuro e dettagli oro

--------------------------------------------------
REGOLE TECNICHE
--------------------------------------------------

Genera questi file nella stessa cartella:

1. index.html  (landing)
2. whatsapp-form.js    (OBBLIGATORIO — gestione form → WhatsApp)

Puoi utilizzare:

- Bootstrap 5 via CDN
oppure
- PicoCSS via CDN

È consentito aggiungere una piccola quantità di CSS personalizzato direttamente nel file HTML.

NON utilizzare librerie JavaScript (niente jQuery, React, ecc.).
È consentito UN SOLO file JavaScript vanilla locale: whatsapp-form.js
(linkato in fondo all’HTML con <script src="whatsapp-form.js" defer></script>).
Niente altro JS inline o aggiuntivo, salvo necessità strettamente legate a WhatsApp.

Il codice deve essere:

- HTML5 semantico
- accessibile
- responsive
- ordinato
- commentato
- facilmente modificabile

--------------------------------------------------
DESTINAZIONE CTA — WHATSAPP (OBBLIGATORIO)
--------------------------------------------------

Numero WhatsApp del cliente (formato internazionale, senza + né spazi):

393520942078

(equivalente a +39 352 094 2078)

Link CTA semplici (Hero, CTA intermedie):

https://wa.me/393520942078

Con target="_blank" e rel="noopener noreferrer".
NON usare #ancoraggi interni per le CTA.
NON inserire link Privacy o Contatti nel footer.

--- CTA GUIDA GRATUITA → MESSAGGIO PRECOMPILATO ---

Nella sezione bonus (risorsa gratuita):
- Copy e pulsante usano “richiedi”, NON “scarica”
  (es. descrizione: “Richiedi la guida gratuita…”,
   pulsante: “RICHIEDI LA GUIDA GRATUITA”)
- Il link (id="cta-guida-gratuita") deve aprire WhatsApp con testo
  precompilato che indichi chiaramente la richiesta della guida, es.:

  ciao Luna, vorrei avere la guida gratuita sui tarocchi marsigliesi

- Implementazione: whatsapp-form.js imposta (o costruisce) l’href con
  https://wa.me/393520942078?text=… (encodeURIComponent)
  NON usare il wa.me “nudo” senza ?text= per questa CTA.

--- FORM LEAD → MESSAGGIO PRECOMPILATO ---

Il form (id="lead-form", campi name="nome" / "cognome" / "email") NON deve
fare un GET verso wa.me. Deve essere gestito da whatsapp-form.js:

1. intercept submit (preventDefault)
2. validare i campi required (usa reportValidity se vuoti)
3. costruire un messaggio multilinea, es.:

   Ciao, vorrei iniziare il percorso con Oltre i Tre Veli.

   Nome: …
   Cognome: …
   Email: …

4. aprire in nuova scheda:
   https://wa.me/393520942078?text=…  (testo encodeURIComponent)

L’utente dovrà comunque premere “Invia” in WhatsApp — il testo è solo precompilato.
Nessun backend email: WhatsApp è l’unica azione di conversione.

File whatsapp-form.js: vanilla, IIFE o equivalente, senza dipendenze.
Gestisce sia il form lead sia la CTA guida gratuita (messaggi diversi).
Numero e messaggi devono restare modificabili in un solo posto nel JS.

--------------------------------------------------
IMMAGINI (SOLO FILE LOCALI DEL PROGETTO)
--------------------------------------------------

Usa ESCLUSIVAMENTE le foto presenti nella stessa cartella dell’HTML.
NON usare Unsplash, Pexels, URL remote, foto stock esterne o immagini generate al volo.
NON inventare percorsi. NON lasciare placeholder.

Foto disponibili (hero / sezioni):

- photoSeduta.jpg
- photoTreccine.jpg
- photoTurbante.jpg
- photoScale.jpg   (scalinata / portale celeste — da exampleDesign)
- photoBook.jpg    (still life libro esoterico / La Luna — da exampleDesign)

Foto testimonianze (cartella testimonianze/ — OBBLIGATORIE per le card recensioni):

- testimonianze/matteo.jpg
- testimonianze/sara.jpg
- testimonianze/davide.jpg
- testimonianze/alessia.jpg

Percorsi relativi nel codice: stessi nomi file (es. photoScale.jpg, testimonianze/matteo.jpg).
NON usare iniziali al posto delle foto testimonianza quando i file sopra sono disponibili.

OBBLIGO RITRATTI (photoSeduta / photoTreccine / photoTurbante):
Devi usare almeno 2 delle 3 foto photoSeduta.jpg, photoTreccine.jpg, photoTurbante.jpg nella landing.
Usarne solo una non è accettabile. Usarne tutte e tre è consentito.
Ogni foto in uno slot distinto (niente collage / inset / mix nello stesso blocco).

--------------------------------------------------
ASSEGNAZIONE OBBLIGATORIA PER SEZIONE
--------------------------------------------------

1. HERO — immagine centrale grande (OBBLIGATORIA):
   photoTurbante.jpg
   (scelta cliente: presenza calda / ritratto con turbante come visual principale)
   NON usare photoTreccine.jpg né photoSeduta.jpg nell’Hero.
   Opzionale: alone/mandala SVG dorato dietro l’immagine (solo grafica CSS/SVG,
   non una seconda foto).

2. SEZIONE BENEFICI — titolo
   "Oltre i Tre Veli è molto più di una scuola di Tarocchi."
   Visual obbligatorio:
   photoScale.jpg
   (scalinata verso il portale/luce celeste, come in exampleDesign.jpg)
   + almeno un’altra tra photoSeduta.jpg / photoTreccine.jpg / photoTurbante.jpg
     (diversa da quella usata nell’Hero), in uno slot separato
     (es. accanto al form o sotto i bullet — non nello stesso blocco di photoScale.jpg).

3. SEZIONE BONUS — parte superiore / risorsa gratuita
   ("PER INIZIARE IL TUO VIAGGIO")
   Visual obbligatorio:
   photoBook.jpg
   (libro esoterico aperto, emblem falena oro, pagina “LA LUNA”, cristallo)
   Opzionale: la terza tra photoSeduta / photoTreccine / photoTurbante in uno slot separato, se vuoi usare tutte e tre.

Una sola foto per slot. Niente collage, niente inset, niente due immagini
nello stesso blocco.

Trattamento immagini:

- object-fit: cover
- bordi sottili dorati o alone luminoso molto leggero
- niente cornici pesanti
- su mobile: altezza contenuta, non schiacciare il testo
--------------------------------------------------
RESPONSIVE
--------------------------------------------------

La pagina è progettata MOBILE FIRST.

Target principale:

iPhone 17.

Deve però adattarsi perfettamente anche a:

- tablet
  - desktop

Ogni sezione deve occupare circa il 100% della viewport.

Su desktop il contenuto NON deve risultare eccessivamente largo.

Utilizza una larghezza massima del contenuto di circa:

900-1100 px.

I pulsanti devono sempre risultare ben visibili.

Le sezioni NON devono avere enormi spazi vuoti.

--------------------------------------------------
COPYWRITING
--------------------------------------------------

NON utilizzare Lorem Ipsum.

Usa copy ispirato e, dove possibile, fedele ai testi di exampleDesign.jpg.

Brand / naming:

- Nome: Oltre i Tre Veli
- Descrizione: Scuola di Tarocchi

Lo stile deve essere:

- evocativo
- misterioso
- elegante
- rassicurante
- interiore (ascolto, archetipi, risveglio — non predizione del futuro)

Evita:

❌ promesse miracolose

❌ toni sensazionalistici

❌ linguaggio aggressivo

❌ tono "cartomante da fiera"

Le headline devono essere corte.

Ogni blocco testuale deve essere facilmente leggibile da smartphone.

Massimo 3-4 righe consecutive.

--------------------------------------------------
TESTI DA USARE (da exampleDesign.jpg)
--------------------------------------------------

Adatta questi testi alla struttura obbligatoria sotto.
Mantieni il significato e, dove calza, le formulazioni esatte.

HERO

Pre-headline (badge) — DUE badge affiancati (OBBLIGATORIO):

1. Scuola di Tarocchi
2. Consulenze private con i tarocchi

Entrambi con bordo dorato, stile .badge-gold, affiancati (flex + wrap su mobile).
NON usare "Scuola Esoterica" né "Risorsa gratuita" nei badge Hero.
NON omettere il secondo badge.

Headline:

Inizia ad ascoltarti davvero

Sottotitolo (in oro brillante — OBBLIGATORIO stile tipografico):

attraverso i Tarocchi

Il .hero-sub DEVE essere più grande e in risalto rispetto al body/lead:
- font-size circa clamp(1.85rem, 5.8vw, 2.75rem) — nettamente più grande del lead,
  vicino (ma inferiore) alla headline
- colore: oro chiaro brillante (#E6D3A3 / --gold-light), NON l’oro medio (#C4A574)
- font-weight 500, italic serif
- leggero text-shadow dorato soft (glow candela, non neon) per dare luminosità
- letter-spacing leggero (~0.02em)

Spiegazione:

Un viaggio di trasformazione interiore tra simboli, archetipi e saggezza antica.
I Tarocchi non predicono il futuro. Ti aiutano a ricordare chi sei.

CTA principale (Hero — OBBLIGATORIO):

PRENOTA IL TUO CONSULTO
→ link WhatsApp obbligatorio: https://wa.me/393520942078
NON usare "INIZIA IL TUO VIAGGIO" come CTA Hero.

Micro-benefici sotto la CTA (se c'è spazio, max 3):

- Percorsi trasformativi
- Supporto e community
- Crescita personale

SEZIONE BENEFICI — titolo:

OLTRE I TRE VELI È MOLTO PIÙ DI UNA SCUOLA DI TAROCCHI.

Introduzione benefici (breve):

È un percorso di risveglio dell'anima, un cammino iniziatico che unisce la psicologia junghiana, la Cabala e i Tarocchi per guidarti oltre le illusioni, verso la verità più profonda: TE STESSA.

Bullet benefici (massimo 5 — usa questi, in questo ordine):

1. I TAROCCHI — Uno strumento sacro per esplorare il tuo mondo interiore.
2. PSICOLOGIA JUNGHIANA — Per comprendere i tuoi archetipi e integrare le tue ombre.
3. CABALA — La chiave per comprendere la struttura dell'universo, il senso della nostra esistenza e il viaggio dell'anima attraverso i Tarocchi.
4. TRASFORMAZIONE — Un viaggio che ti insegna ad ascoltarti davvero e manifestare la tua luce nel mondo.
5. UN PERCORSO PER OGNI ANIMA — Adatto a principianti, appassionati e a chiunque senta il richiamo di un viaggio di conoscenza interiore e di studiare in modo diverso i tarocchi.

CTA intermedie (su WhatsApp):

- ENTRA NELLA SCUOLA  (unica CTA intermedia dopo l’Hero / prima dei benefici)

NON includere il pulsante "ENTRA ANCHE TU NELLA NOSTRA COMMUNITY"
(né una seconda CTA intermedia tra benefici e sezione bonus).

Ogni CTA semplice → https://wa.me/393520942078 (target _blank)
Form lead → whatsapp-form.js apre wa.me con ?text= precompilato (vedi sezione WhatsApp)

SEZIONE BONUS — parte superiore:

Etichetta (corsivo/script se possibile via Google Fonts CDN, altrimenti serif elegante):

Risorsa gratuita

Titolo:

PER INIZIARE IL TUO VIAGGIO

Descrizione:

Richiedi la guida gratuita per iniziare a entrare in contatto con i Tarocchi e con il tuo mondo interiore.

Pulsante:

RICHIEDI LA GUIDA GRATUITA
oppure
Richiedi il materiale gratuito

→ WhatsApp con messaggio precompilato (OBBLIGATORIO), gestito da whatsapp-form.js
  sul link id="cta-guida-gratuita", es. testo:
  “ciao Luna, vorrei avere la guida gratuita sui tarocchi marsigliesi”
  URL: https://wa.me/393520942078?text=…
  NON usare “scarica” in copy o CTA di questa sezione.

SEZIONE BONUS — parte inferiore:

Titolo:

Dicono di noi
oppure (titolo principale OBBLIGATORIO)
Un'esperienza inaspettata

Il titolo della sezione testimonianze DEVE essere:
Un'esperienza inaspettata
(non usare più "Una community che trasforma")

Recensioni (OBBLIGATORIE — usa ESATTAMENTE queste 4, in questo ordine.
Ogni card: foto locale + link Instagram + testo + stelle ★★★★★):

1. Matteo
   - foto: testimonianze/matteo.jpg
   - IG: https://www.instagram.com/fallalibera?igsh=NGwweDhvZDZzd2t6
     (mostra handle @fallalibera con icona Instagram)
   - testo: Ero molto scettico nei confronti della cartomanzia, ma grazie a Luna ho scoperto che non si tratta di qualcosa da ciarlatani, bensì di un potente strumento di conoscenza psicologica e spirituale.

2. Sara
   - foto: testimonianze/sara.jpg
   - IG: https://www.instagram.com/viviti_arrenditiallavita?igsh=MXh1MXZ4bzk3ZDY0dA==
     (mostra handle @viviti_arrenditiallavita)
   - testo: Farmi leggere i tarocchi da Luna mi ha aiutato in modo pratico. Perchè dopo aver individuato il problema, mi ha subito detto come risolverlo

3. Davide Pacal
   - foto: testimonianze/davide.jpg
   - IG: https://www.instagram.com/datti.valore.ora?igsh=OThnbmhnbXlheHU1
     (mostra handle @datti.valore.ora)
   - testo: Luna ha la capacità di mettere chiunque a proprio agio. Mi sono sentito libero di parlarle anche di questioni importanti e molto intime, senza mai sentirmi giudicato.

4. Alessia
   - foto: testimonianze/alessia.jpg
   - IG: https://www.instagram.com/alessia_papetti?igsh=MXFsOGxzcWU5cTZzcA==
     (mostra handle @alessia_papetti)
   - testo: Grazie a Luna sono riuscita a fare chiarezza su situazioni che non riuscivo a comprendere e, soprattutto, a capire quale insegnamento potevo trarre da ciò che stavo vivendo.

NON inventare altre testimonianze. NON usare avatar con sole iniziali.
I link IG aprono in nuova scheda (target="_blank" rel="noopener noreferrer").
Mantieni sempre le 5 stelle nella card.

FOOTER

Logo / nome:

OLTRE I TRE VELI – SCUOLA DI TAROCCHI

Copyright:

© 2024 Oltre i Tre Veli – Scuola di Tarocchi. Tutti i diritti riservati.

NON includere link Privacy né Contatti nel footer.

--------------------------------------------------
TIPOGRAFIA
--------------------------------------------------

Le headline devono essere molto grandi.

Il testo secondario deve essere molto più piccolo.

Gerarchia:

Headline

↓

Sottotitolo

↓

Spiegazione

↓

CTA

L'utente deve comprendere il messaggio in meno di 3 secondi.

Font (via Google Fonts CDN, consentito):

- Headlines: serif elegante (es. Cormorant Garamond, Playfair Display o Cinzel)
- Body: sans-serif pulita (es. Manrope, DM Sans o Outfit)
- Eventuale accento script solo per etichette tipo "Risorsa gratuita" (es. Great Vibes) — uso minimo

NON usare Inter, Roboto, Arial o system-ui come font principale.
NON usare font fantasy o fraktur.

Headline in sezioni crema: scure.
Headline in sezioni scure: bianche, con sottotitoli in oro.

--------------------------------------------------
PALETTE COLORI
--------------------------------------------------

Allinea la palette a exampleDesign.jpg (oro su nero / crema), NON a un tema viola generico.

Sfondo Principale (notte)

#0B0A09
oppure
#000000

Sfondo Secondario scuro

#161311

Sfondo Sezioni chiare (crema / pergamena)

#F7F2EA
oppure
#F9F6F1

Testo su fondo scuro

#F3EFE8

Testo su fondo chiaro

#1A1714

Testo Secondario (su scuro)

#A39B90

Testo Secondario (su chiaro)

#5C554C

Accento Oro (CTA pieni, icone, bordi)

#C4A574

Oro Chiaro / highlight

#E6D3A3

Oro Scuro / testo su CTA oro

#2A2118

Bordi dorati sottili

rgba(196, 165, 116, 0.45)

Bordi su sezioni scure

#2A261F

Nota:
Il viola NON è più il colore primario delle CTA.
Le CTA devono essere oro pieno (come in exampleDesign.jpg), con testo scuro.
Un eventuale viola molto discreto può apparire solo come riverbero ambient, non come bottone.

--------------------------------------------------
COMPONENTI GRAFICI
--------------------------------------------------

Utilizza:

✔ card con angoli arrotondati moderati (non eccessivi)

✔ ombre morbide e profonde sulle sezioni scure

✔ bordi luminosi dorati sottili

✔ icone Bootstrap Icons (stelle, luna, occhio, check) in oro

✔ effetti glow leggeri tipo luce di candela (mai neon)

✔ CTA oro pieno (non viola)

✔ dettagli dorati e divisori sottili

✔ su sezioni crema: cornice sottile dorata con leggeri ornamenti agli angoli (CSS semplice, senza immagini decorative pesanti)

Mai utilizzare:

❌ gradienti eccessivi o rainbow

❌ animazioni

❌ elementi kitsch (stelle che lampeggiano, glitter, cristalli clipart)

❌ font fantasy

❌ CTA viola come elemento dominante

❌ look "Bootstrap default"

--------------------------------------------------
STRUTTURA DELLA LANDING
--------------------------------------------------

Mantieni ESATTAMENTE questa struttura e questo ordine.
Non aggiungere navbar complete, sezioni corsi a livelli, o layout diversi da quelli sotto — anche se presenti in exampleDesign.jpg.
Il design di esempio influenza aspetto e testi, non l'architettura delle sezioni.

# HERO

Contiene:

Pre-headline

(DUE badge con bordo dorato, affiancati:
 "Scuola di Tarocchi" + "Consulenze private con i tarocchi")

↓

Grande immagine centrale
(OBBLIGATORIA: photoTurbante.jpg — unica foto nello slot Hero)

+ elemento grafico opzionale:
  alone/mandala geometrico dorato SVG dietro l’immagine
  — NON aggiungere una seconda foto nello stesso slot

↓

Headline
("Inizia ad ascoltarti davvero")

↓

Sottotitolo in oro chiaro brillante (#E6D3A3), tipografia grande e in risalto
("attraverso i Tarocchi" — vedi regole tipografiche Hero sopra)

↓

Breve spiegazione

↓

Card con dettaglio del beneficio principale
(OBBLIGATORIO — entrambi i blocchi di testo):

1. Titolo + intro:
   I Tarocchi come linguaggio dell’anima.
   Un ascolto interiore guidato da simboli, non da promesse facili.

2. Testo aggiuntivo (OBBLIGATORIO):
   Uno spazio dedicato ad ascoltare ciò che i Tarocchi hanno da rivelare,
   per fare chiarezza, comprendere i tuoi schemi interiori e affrontare
   con maggiore consapevolezza il tuo percorso di vita.

↓

Pulsante CTA
("PRENOTA IL TUO CONSULTO")
→ WhatsApp https://wa.me/393520942078
NON usare "INIZIA IL TUO VIAGGIO" nell’Hero.

Opzionale sotto la CTA: 3 micro-benefici con icona (Percorsi trasformativi · Supporto e community · Crescita personale)

--------------------------------------------------
CTA INTERMEDIA

Un pulsante centrato.

Non deve occupare tutta la schermata.

Deve separare visivamente una sezione dall'altra.

Testo suggerito: ENTRA NELLA SCUOLA

--------------------------------------------------
SEZIONE BENEFICI

Titolo centrato.

Massimo 5 bullet point.

Ogni bullet:

✔ icona check (o icona tematica in oro)

✔ frase breve (usa i 5 benefici elencati sopra)

Accanto ai benefici inserisci una card contenente il form.

Il form deve contenere:

- Nome

- Cognome

- Email

- Pulsante
  (es. "INIZIA IL TUO VIAGGIO" oppure "Ricevi l'accesso")
  → gestito da whatsapp-form.js: apre WhatsApp con messaggio
    precompilato (Nome, Cognome, Email) su 393520942078
  → form id="lead-form"; NON usare action GET verso wa.me

Su mobile: benefici sopra, form sotto.
Su desktop: benefici a sinistra, form a destra (o viceversa se migliora l'equilibrio con la foto di supporto).

Foto di supporto in questa sezione:
- photoScale.jpg (obbligatoria — visual principale della sezione)
- + almeno una tra photoSeduta.jpg / photoTreccine.jpg / photoTurbante.jpg diversa dall’Hero,
  in uno slot separato (es. vicino al form). Non nello stesso blocco di photoScale.
- Non rompere il layout a due colonne benefici + form.

--------------------------------------------------
SEZIONE BONUS

(NON inserire una CTA intermedia "ENTRA ANCHE TU NELLA NOSTRA COMMUNITY"
tra la sezione benefici e questa sezione.)

Dividi la schermata in due metà.

Parte superiore:

Grande promessa di valore.
(etichetta "Risorsa gratuita" + titolo "PER INIZIARE IL TUO VIAGGIO")

Breve descrizione.

Pulsante:

"Richiedi il materiale gratuito"
(o "RICHIEDI LA GUIDA GRATUITA")
→ id="cta-guida-gratuita"; WhatsApp con ?text= che indica
  la richiesta specifica della guida gratuita (vedi sezione WhatsApp)
→ NON usare “scarica”

Visual di supporto (OBBLIGATORIO — una sola):
- photoBook.jpg
- Non usare altre foto in questo blocco.

Parte inferiore:

Titolo

"Un'esperienza inaspettata"
(sottotitolo opzionale: "Dicono di noi")
NON usare "Una community che trasforma" / "UNA COMMUNITY CHE TRASFORMA"

Slider orizzontale con le 4 testimonianze obbligatorie (Matteo, Sara, Davide Pacal, Alessia).
(Poiché NON sono consentite librerie JavaScript — solo whatsapp-form.js per WhatsApp:
realizza lo slider con CSS puro — overflow-x: auto / scroll-snap — oppure una riga scorribile orizzontale touch-friendly.)

Ogni recensione contiene:

- foto avatar da testimonianze/*.jpg (object-fit: cover, cerchio con bordo oro)
- nome
- link Instagram (handle + icona; URL esatti dalla sezione TESTI)
- valutazione ⭐⭐⭐⭐⭐ (mantieni sempre)
- testimonianza (testo esatto dalla sezione TESTI)

--------------------------------------------------
FOOTER

Molto minimale.

Logo / nome scuola

Copyright

NON includere Privacy né Contatti.

Sfondo scuro, testo chiaro, linea dorata sottile di separazione.

--------------------------------------------------
LINEE GUIDA UX
--------------------------------------------------

Ogni schermata deve comunicare UNA SOLA IDEA.

Le CTA devono essere sempre immediatamente riconoscibili (oro pieno).

Il ritmo della pagina deve seguire questa sequenza:

Attira

↓

Coinvolgi

↓

Genera curiosità

↓

Riduci le obiezioni

↓

Invita all'azione

Ogni sezione deve avere molto respiro ma senza creare grandi spazi vuoti.

Su sezioni chiare e scure, mantieni contrasto AA dove possibile.

--------------------------------------------------
OUTPUT
--------------------------------------------------

Genera nella stessa cartella:

1. index.html
2. whatsapp-form.js  (form lead + CTA guida gratuita → messaggi WhatsApp precompilati)
   e linkalo nell’HTML: <script src="whatsapp-form.js" defer></script>
