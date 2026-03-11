import { useEffect, useState } from "react";

export default function Jocker() {
  let [joke, setJoke] = useState({});

  const API_Url = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let response = await fetch(API_Url);
    let jsonResponse = await response.json();
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(API_Url);
      let jsonResponse = await response.json();
      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getFirstJoke();
  }, []);
  return (
    <div>
      <h3>Jocker!</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>New Joke</button>
    </div>
  );
}
