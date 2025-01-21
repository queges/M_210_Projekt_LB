import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

// Supabase Client initialisieren
const supabase = createClient(
  "https://xesrjpwntzntpqvlfthg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhlc3JqcHdudHpudHBxdmxmdGhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NTI1NzQsImV4cCI6MjA1MzAyODU3NH0.Kfcas3TjxxHXRtlT3MDaoQm_-yFWqWtWROI1ruuqItc"
);

function App() {
  const [modules, setModules] = useState([]);
  const [grades, setGrades] = useState([]);
  const [user, setUser] = useState(null); // Zustand für den aktuellen Benutzer
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState(null); // Zustand für die Session
  const [moduleName, setModuleName] = useState("");
  const [moduleDescription, setModuleDescription] = useState("");
  const [note, setNote] = useState("");
  const [module, setModule] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        setUser(session.user);
        getGrades();
        getModules();
      }
    });
 
    return () => subscription.unsubscribe();
  }, []);

  // Funktion zum Abrufen der Module
async function getModules() {
  const { data, error } = await supabase.from("Modul").select("*");
  if (error) {
    console.log("Fehler beim Abrufen der Module:", error);
  } else {
    setModules(data);
  }
}
  
  // Funktion zum Abrufen der Noten
async function getGrades() {
  const { data, error } = await supabase
    .from("Note")
    .select("*")

  if (error) {
    console.error("Fehler beim Abrufen der Noten:", error);
  } else {
    setGrades(data);
  }
}

async function createModule() {
  const { error } = await supabase.from("Modul").insert([
    { bezeichnung: moduleName, beschreibung: moduleDescription },
  ]);
  if (error) {
    console.error("Fehler beim Erstellen des Moduls:", error);
  } else {
    getModules();
  }
}

async function createGrade() {
  const { error } = await supabase.from("Note").insert([
    { modul: module, grade: note },
  ]);
  if (error) {
    console.error("Fehler beim Erstellen der Note:", error);
  } else {
    getGrades();
  }
}

  async function logoutUser() {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
  }

  if (!session) {
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
      />
    );
  }

  async function deleteGrade() {
    const { error } = await supabase.from("Note").delete().eq("id", id);
    if (error) {
      console.error("Fehler beim Löschen der Note:", error);
    } else {
      getGrades();
    }
  }

return (
  <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
    <h1>Willkommen, {user.email}!</h1>
    <button 
      onClick={logoutUser} 
      style={{
        padding: "10px 20px",
        backgroundColor: "#ff4d4d",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Abmelden
    </button>

    <h2 style={{ marginTop: "30px" }}>Modulübersicht</h2>
    <ul style={{ listStyle: "none", padding: "0" }}>
      {grades.map((Note) => (
        <li 
          key={Note.id} 
          style={{
            border: "1px solid #ddd",
            borderRadius: "5px",
            marginBottom: "20px",
            padding: "15px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ flex: "1", marginRight: "20px" }}>
              <strong style={{ fontSize: "18px", color: "#333" }}>{Note.modul}</strong>
            </div>
            <div style={{ flex: "1" }}>
              <strong style={{ fontSize: "16px", color: "#333" }}>{Note.grade}</strong>
            </div>
            <button onClick={() => deleteGrade()} >Delete</button>
          </div>
        </li>
      ))}
    </ul>
            <input type="text" placeholder="Modulname" value={moduleName} onChange={(e) => setModuleName(e.target.value)} />
            <input type="text" placeholder="Modulbeschreibung" value={moduleDescription} onChange={(e) => setModuleDescription(e.target.value)} />
            <button 
              onClick={createModule} 
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Erstellen
            </button>
            <input type="number" placeholder="Note" value={note} onChange={(e) => setNote(e.target.value)} />
            <input type="dropdown" placeholder="Modul" value={module} onChange={(e) => setModule(e.target.value)} options={modules.map((module) => module.bezeichnung)} />
            <button 
              onClick={createGrade} 
              style={{ 
                padding: "10px 20px", 
                backgroundColor: "#28a745", 
                color: "white", 
                border: "none", 
                borderRadius: "5px", 
                cursor: "pointer" }}>
                  Erstellen
                </button>
  </div>
);
}


export default App;

