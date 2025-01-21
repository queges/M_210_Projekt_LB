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
