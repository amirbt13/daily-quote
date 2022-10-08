import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
import "./App.css"

function App() {

  const [quotes, setQuotes] = useState("")
  
  useEffect( () => {
    const getQuote = async() => {
      const response = await axios.get('https://quotes.rest/qod')
      setQuotes(response.data.contents.quotes[0])
      console.log(response)
    }
    getQuote()
  }, [])
  

  return (
    <div className="App">
      <div className="quote-box">
        <h1>Today's Quote</h1>
          <h4>{quotes.quote}</h4>
          <h6>-{quotes.author}-</h6>
      </div>
    </div>
  );
}
          

export default App;
