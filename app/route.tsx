
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'


const Get = async ()=>{
   const res = await fetch('prisma.io',
   {
    headers:{
        "content-type":"application/json",
        "api-key":"process.env.API_KEY"
    }
   }
   )
   
 const data = await res.json()

 return NextResponse.json({data})

}

