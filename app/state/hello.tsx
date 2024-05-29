"use client"

import { useState } from "react"



export default function Popularity (){
    const [likes,setLikes]=useState(0)


    return(
        <div  className="flex flex-col justify-center">   
            <div className="flex justify-center mb-4">Likes:{likes}</div>
            <div className="flex justify-center">
            <button onClick={()=>{setLikes(likes+1)}} className="ml-4 bg-indigo-500 px-4 py-2 rounded">Like</button>
            <button onClick={()=>{setLikes(likes-1)}}  className="ml-4 bg-indigo-500 px-4 py-2 rounded">unlike</button>
        
            </div>
        </ div>
    )
}