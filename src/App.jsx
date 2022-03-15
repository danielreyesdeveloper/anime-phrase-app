import 'normalize.css';
import { useState, useEffect } from 'react';
import './app.css'
import Quote from './components/Quote/Quote';
import { motion } from "framer-motion"

function App() {
  const [quote, setQuote] = useState({})

  const functionAPI = async () => {
    const api = await fetch('https://animechan.vercel.app/api/random');
    const frase = await api.json()
    setQuote(frase);
  }

  useEffect(() => {
    functionAPI()
  }, []);

  return (
    <div className="App">
      <div className="main-title">
        <h1 className="title">Anime Quotes</h1>
      </div>
      <Quote quote={quote}/>
      <motion.div className="phrase-content"
        whileTap={{ scale: 0.9 }}
      >
        <button onClick={functionAPI} className="phrase-btn">New Phrase</button>
      </motion.div>
    </div>
  )
}

export default App
