import { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";

function App() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false)

  async function fetchQuote(){
    try{
      // const response = await axios.get("http://localhost:3000/quotes");
      // setQuote(response.data.quote);     //! use this when backend is deployed
      setLoading(true);
      const response = await axios.get("https://quoteslate.vercel.app/api/quotes/random");
      setQuote(response.data.quote);
      setAuthor(response.data.author);
      // console.log(response.data.content);
    }catch(err){
      console.error("Error: ", err.message); 
    }finally{
      setLoading(false);
    }
  }


  useEffect(()=>{
    fetchQuote();
  }, [])

  return (
    <>
      <div className="h-dvh overflow-hidden w-full bg-gradient-to-t from-[#1d1d1d] to-[#020202] flex items-center justify-center lg:p-0 p-4">
        <div className="flex flex-col items-center gap-1 bg-gradient-to-t hover:from-[#182135] hover:to-[#080808] p-10 border-2 border-gray-200 rounded-xl transition-colors ease-linear duration-[800ms]">
          <div className='flex flex-col gap-14 items-center mt-6'>
            <h1 className='text-white lg:text-5xl text-4xl md:text-1xl font-medium'>Quote Deck</h1>
            <div className='bg-gray-800 p-6 rounded-md lg:w-[25rem] w-[17rem] h-full'>
              {loading ? (<h1 className='text-white text-xl text-center'>Wait Bitch...🙄</h1>) : (<h1 className='text-white text-xl'>{quote}</h1>)}
            </div>
          </div>

          <div className='text-white text-xl flex justify-end w-full gap-1'>
            ~
            <h1>{author}</h1>
          </div>

          <div className='flex h-full items-end mt-10'>
            {
              loading? (<button onClick={fetchQuote} className='text-xl text-white border-1 p-2 hover:cursor-pointer rounded-md hover:scale-105 ease-in-out duration-500 text-center'>Fetching...</button>):(<button onClick={fetchQuote} className='text-xl text-white border-1 p-2 hover:cursor-pointer rounded-md hover:scale-105 ease-in-out duration-500'>Fetch Quote</button>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
