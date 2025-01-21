  import { useEffect, useState } from "react";
  import { createClient } from "@supabase/supabase-js";

  const supabase = createClient("https://xesrjpwntzntpqvlfthg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhlc3JqcHdudHpudHBxdmxmdGhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NTI1NzQsImV4cCI6MjA1MzAyODU3NH0.Kfcas3TjxxHXRtlT3MDaoQm_-yFWqWtWROI1ruuqItc");

  function App() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
      getCountries();
    }, []);

    async function getCountries() {
      const { data } = await supabase.from("countries").select();
      setCountries(data);
    }

    return (
      <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    );
  }

  export default App;
