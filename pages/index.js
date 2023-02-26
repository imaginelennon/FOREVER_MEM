import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";


export default function Home() {
  const [characterInput, setCharacterInput] = useState("");
  const [questionInput, setQuestionInput] = useState("");
  const [result, setResult] = useState();
  //const [audio, setAudio] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "animal": characterInput , "Question": questionInput}),
        
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setCharacterInput("");
      setQuestionInput("");
      
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  
  
    
  }


  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/HP-logo.png" />
      </Head>

      <main className={styles.main}>
        <img src="/HP-logo.png" className={styles.icon} />
        <h3>Enter the Harry potter character</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Full Name of the Character"
            value={characterInput}
            onChange={(e) => setCharacterInput(e.target.value)}
          />
          <input
            type="text"
            name="Question"
            placeholder="Question"
            value={questionInput}
            onChange={(k) => setQuestionInput(k.target.value)}
          />
        
          <input type="submit" value="Talk to me" />
        </form>
        <div className={styles.result}>{result}</div>
        <audio
        controls
        src="/media/cc0-audio/t-rex-roar.mp3">
            <a href="/media/cc0-audio/t-rex-roar.mp3">
            </a>
        </audio>

      </main>
    </div>
  );
  }
  
