# AdFloor

Ein kleines klickbares Browser-Spiel zum Trainieren von **Business-Englisch auf B2-Niveau** im Bereich **Advertising, Retail Media & Marketplace**.

## Spielen

Einfach [`index.html`](./index.html) im Browser öffnen — keine Installation, kein Build, keine Abhängigkeiten. Alles läuft clientseitig in einer einzigen HTML-Datei.

## Aufbau

- **Level 1 · The Bidding Floor** — ein Memory-artiges Zuordnungsspiel: 6 zentrale Fachbegriffe (z. B. *impression*, *click-through rate (CTR)*, *bid*, *retail media network*, *ROAS*) werden per Klick mit ihrer englischen Definition gepaart.
- **Level 2 · Campaign Report Builder** — 6 Sätze werden aus Bausteinen in der richtigen Reihenfolge zusammengeklickt. Nach jedem korrekten Satz erscheint eine kurze, auf Deutsch erklärte Grammatikregel (Present Simple, Present Perfect, Passive Voice, First Conditional, Comparative, Modalverben), damit die Satzstruktur zuverlässig sitzt.
- **Abschluss** — ein Vokabel- und Grammatik-Spickzettel fasst alles zum Nachschlagen zusammen, inklusive Punktestand.

Punkte und Streak werden oben im "Ticker" live mitgezählt.

# Verb First

Ein Sprechtrainer für Business-Englisch (B1 bis Business-Niveau) im Ordner [`verb-first/`](./verb-first/index.html). Die Grundregel lautet: Das Verb kommt in den ersten drei Wörtern, die Details folgen in den nächsten kurzen Sätzen.

- **Tägliche Runde, etwa 10 Minuten:** 3 Verben lernen und anhören, Sätze aus Bausteinen bauen, eine deutsche Situation auf Englisch beantworten und danach Details ergänzen.
- **80/20:** 100 zentrale Business-Verben und 5 Satzmuster mit Beispielen aus Advertising und Retail Media.
- **Feedback:** Regelprüfung für Verbposition, Satzlänge, Zielverb und deutsche Satzstellung. Über den claude.ai-Link gibt der Vogel-Coach zusätzlich Feedback mit Claude.
- **Wiederholung:** Schwache Verben kommen nach 1, 3 und 7 Tagen wieder, dazu eine Streak.
- **iPhone:** Klappt der Sprechen-Knopf im Browser nicht, nutzt du im Textfeld das Mikrofon auf der Tastatur.

Inhalte stehen in `verb-first/data.json`, die App in `verb-first/app.html`. `node verb-first/build.js` baut daraus `verb-first/index.html`.

# Stimmwerk

Ein Sprechtrainer für Meetings und Webinare im Ordner [`sprechen/`](./sprechen/index.html), nach den Techniken von Vinh Giang, in eigenen Worten.

- **Pfad mit 8 Säulen:** Tempo, Pause, Lautstärke, Melodie, Klangfarbe, Aufbau mit 3·2·1, Wertschätzung, Körper und Kamera. Zu jeder Säule zwei bis drei kurze Übungen.
- **Üben:** Aufgabe, eine kurze Anleitung mit Satzanfängen, dann Stoppuhr und Textfeld. Du diktierst mit Wispr Flow, die App zeigt dein Tempo, und der Coach gibt Feedback. Die Stimmmessung ist optional.
- **Coach mit Claude:** Über den claude.ai Link gibt Claude Feedback und stellt eine Rückfrage wie im Meeting.
- **Vor dem Meeting:** ein Schnellcheck in sechs Schritten.

Die App steht in `sprechen/app.html`. `node sprechen/build.js` baut daraus `sprechen/index.html`.
