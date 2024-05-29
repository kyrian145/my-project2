"use client"

import { useState } from "react";




export default function formj(){
  const [data,setdata] = useState("")

  function handletextarea ( e:any){
    return setdata(e.target.value )
  }
return(
  
  <form className="bg-black   items-center h-screen w-screen ">
    <div className="  mr-96">
    <img src="/image 9.jpg" alt="" className="  h-24 w-24 mb-48    space-x-2">
                </img>
    </div>
                <h1 className="text-gray-500 text-8xl font-bold text-center mb-24">
                  welcome to pinterest
                </h1>
                <p className="text-gray-300 text-xl font-bold mb-10 text-center">
                  login your details to get started
                </p>
                <div className="flex flex-col justify-center items-center">
                <input 
                    value={data}
                    onChange={handletextarea}
                />
                <div className="text-white">data:{data}</div>
                    <button className="bg-green-500 px-4 py-4 items-center rounded-lg mt-7">
                      submit
                    </button>
                  
                  </div>            
  
    
      
  
      </form>
    
  


)

}