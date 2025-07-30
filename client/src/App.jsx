import { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";

function App() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  async function fetchQuote(){
    try{
      const response = await axios.get("http://localhost:3000/quotes");
      setQuote(response.data.quote);
      setAuthor(response.data.author);
      // console.log(response.data.content);
    }catch(err){
      console.error("Error: ", err.message); 
    }
  }


  useEffect(()=>{
    fetchQuote();
  }, [])

  return (
    <>
      <div className="h-dvh w-full bg-zinc-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 h-[30rem] p-10 border-1 border-gray-200 rounded-xl">
          <div className='flex flex-col gap-16 items-center'>
            <h1 className='text-white text-4xl'>Quote Deck</h1>
            <div className='bg-gray-800 p-6 rounded-md w-[30rem]'>
              <h1 className='text-white text-xl'>{quote}</h1>
            </div>
          </div>

          <div className='text-white text-xl flex justify-end w-full gap-1'>
            ~
            <h1>{author}</h1>
          </div>

          <div className='flex h-full items-end pb-4'>
            <button onClick={fetchQuote} className='text-xl text-white border-1 p-2 hover:cursor-pointer rounded-md hover:scale-105 ease-in-out duration-500'>Fetch Quotes</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
