# M_210_Projekt_LB

## User Stories

### 1. Registrierung und Anmeldung
**Als Student möchte ich mich registrieren und anmelden können, damit nur ich meine Modulnoten sehen und bearbeiten kann.**

**Akzeptanzkriterien:**
- Erfolgreiche Registrierung mit E-Mail und Passwort.
- Authentifizierte Benutzer können sich anmelden.

### 2. Modul erstellen
**Als Benutzer möchte ich neue Module hinzufügen können, um meine Studienleistungen zu dokumentieren.**

**Akzeptanzkriterien:**
- Ein Modul enthält eine Bezeichnung und optional eine Beschreibung.
- Nach dem Speichern wird das Modul in meiner Übersicht angezeigt.

### 3. Noten hinzufügen
**Als Benutzer möchte ich Noten zu einem Modul hinzufügen können, um meinen Fortschritt nachzuverfolgen.**

**Akzeptanzkriterien:**
- Eine Note enthält Bewertung (Note) und Gewichtung (Weight).
- Die Durchschnittsnote wird automatisch berechnet.

### 4. Module und Noten bearbeiten
**Als Benutzer möchte ich Module und Noten bearbeiten können, falls ich Fehler gemacht habe.**

**Akzeptanzkriterien:**
- Änderungen werden gespeichert und in der Übersicht aktualisiert.

### 5. Module und Noten löschen
**Als Benutzer möchte ich Module oder spezifische Noten löschen können, um meine Übersicht aktuell zu halten.**

**Akzeptanzkriterien:**
- Nach Bestätigung werden die Daten endgültig gelöscht.

---

## Datenmodell

### Modul
- `id` (UUID, Primärschlüssel)
- `bezeichnung` (varchar) – Name des Moduls
- `beschreibung` (varchar, optional) – Beschreibung des Moduls
- `userId` (UUID, Fremdschlüssel → `auth.users.id`) – Verknüpfung zum Benutzer, der das Modul erstellt hat

### Note
- `id` (UUID, Primärschlüssel)
- `grade` (int) – Note des Moduls (1 bis 6)
- `weight` (int) – Gewichtung der Note (z.B. 30 für 30%)
- `modulId` (UUID, Fremdschlüssel → `Modul.id`) – Verknüpfung zum Modul, zu dem die Note gehört

---

# Arbeitsplan

## Vorarbeiten (8:00 – 10:00)

### Github Repository erstellen (8:00 – 8:30)
- Initialisierung des Repositories auf GitHub.
- Festlegung einer klaren Ordnerstruktur für das Projekt (Frontend, Backend, Dokumentation).
- Erstellung einer `.gitignore`-Datei, um unnötige Dateien auszuschließen.

### Supabase-Projekt einrichten und Datenbanken erstellen (8:30 – 9:30)
- Erstellen eines Supabase-Projekts und Einrichten der Datenbank.
- Anlegen der erforderlichen Tabellen (`Module`, `Noten`).
- Konfiguration von Row-Level-Security (RLS) für Datenzugriffsrechte.
- Testen der Supabase-Datenbankverbindung im Frontend.

### Git Merge Request und Git Actions (9:30 – 10:00)
- Erstellung des ersten Merge Requests für den initialen Code.
- Einrichtung von Git Actions für einfache CI/CD-Pipelines (z.B. automatische Tests bei jedem Push).
- Sicherstellen, dass der Merge Request korrekt dokumentiert wird (mit Commit-Beschreibungen und Änderungsnotizen).

## App mit allen Kriterien erstellen (10:30 – 12:00 / 13:00 – 14:30)

### Benutzerauthentifizierung mit Supabase (10:30 – 11:00)
- Erstellung der Login- und Registrierungsformulare für Benutzer.
- Verbindung der Formulare mit Supabase Auth für die Benutzerregistrierung und -anmeldung.
- Überprüfung, ob Benutzer sich korrekt anmelden, abmelden und ihr Passwort zurücksetzen können.

### CRUD-Operationen für Module (11:00 – 12:00)
- Implementierung der Frontend-Komponenten für die Verwaltung von Modulen (Erstellen, Bearbeiten, Löschen).
- Verknüpfung der Frontend-Komponenten mit Supabase, sodass Änderungen in der Datenbank gespeichert werden.
- Testen der CRUD-Operationen für Module und Sicherstellen, dass alle Operationen korrekt durchgeführt werden.

### CRUD-Operationen für Noten (13:00 – 14:00)
- Entwicklung von UI-Komponenten für die Notenverwaltung (Noten hinzufügen, bearbeiten und löschen).
- Logik für Notenoperationen implementieren (einschließlich Gewichtung und Berechnung des Notendurchschnitts).
- Testen der CRUD-Funktionen für Noten und ihre Synchronisierung mit der Supabase-Datenbank.

### Berechnung des Notendurchschnitts (14:00 – 14:30)
- Implementierung der Berechnungslogik für den Notendurchschnitt basierend auf den Noten und deren Gewichtung.
- Anzeige des berechneten Notendurchschnitts im Frontend.
- Sicherstellen, dass der Durchschnitt nach jeder Notenänderung automatisch aktualisiert wird.

## Dokumentation / Review (15:00 – 17:00)

### Dokumentation der Architektur und Implementierung (15:00 – 16:00)
- Detaillierte Beschreibung der Architektur des Projekts (Datenmodell, API-Endpunkte, Authentifizierung).
- Dokumentation der wichtigsten Frontend-Komponenten und ihrer Funktionen.
- Erstellung einer kurzen Installationsanleitung für die App (Voraussetzungen, Setup-Schritte).

### Deployment-Optionen und abschließender Review (16:00 – 17:00)
- Beschreibung der Deployment-Optionen (z.B. Hosting des Frontends auf Vercel oder Netlify, Supabase als Backend).
- Kritischer Review des Projekts: Welche Ziele wurden erreicht, welche nicht? Gab es technische Herausforderungen, die gelöst werden mussten?
- Überprüfung des Codes auf Sauberkeit, Struktur und Funktionalität, um sicherzustellen, dass alle Anforderungen erfüllt sind.

