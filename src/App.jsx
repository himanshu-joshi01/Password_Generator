import { useState } from "react"


function App() {

const [password , setPassword] = useState("");
const [length , setLength] = useState(6);
  return (
    <>
    <div className="h-screen w-full bg-black flex">
     <div className="p-10 bg-blue-500 max-w-[50%] m-auto gap-5 flex flex-col justify-center items-center "> 
      <h1>Password Generator</h1>
      <div>
      <input 
      type="text" 
      value={password}
      placeholder="Password"
      readOnly
      />
   
     <button
     className="px-4 py-1 text-white bg-black"
     >Copy</button>
       </div>
       <div>
       <input type="range" name="length" onChange={(e)=>setLength(e.target.value)} />
       <label htmlFor="length">Length ({length})</label>
       <input type="checkbox" name="number" id="number" />
       <label htmlFor="number">Include Numbers</label>
       <input type="checkbox" name="character" id="character" />
       <label htmlFor="character">Include Characters</label>
</div>

       </div>
     </div>
    </>
    
  )
}

export default App
