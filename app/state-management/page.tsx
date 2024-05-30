"use client"

import { useState } from "react";




export default function formj(){
  const [data,setdata] = useState("")

  function handletextarea ( e:any){
    return setdata(e.target.value )
  }
return(
  
  <form className="bg-black   h-screen w-screen ">
    
    <div className="  ">
    <img src="/image 9.jpg" alt="" className="  h-24 w-24 mb-48    space-x-2">
                </img>
    
                <h1 className="text-gray-500 text-8xl font-bold text-center mb-24">
                  welcome to pinterest
                </h1>
                <p className="text-gray-300 text-xl font-bold mb-10 text-center">
                  login your details to get started
                </p>
                
                </div>
                
               <div className="flex flex-col justify-center items-center bg-[url('/images/hero.png')] ">
                <input 
            
                    value={data}
                    onChange={handletextarea}
                />
    
                    <button className="bg-green-500 px-4 py-4 rounded-lg mt-6   ">
                      submit
                    </button>
        
                    </div>
              
  
      </form>
  

)

}