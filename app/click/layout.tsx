import Link from "next/link"
import { Children, ReactNode } from "react"

interface hey{
    children:ReactNode
}

export default function link({children}:hey){
    const links=[
        {href:"", label:""},
        {href:"", label:"showcase"},
        {href:"", label:"Docs"},
        {href:"", label:"Blog"},
        {href:"", label:"Analytics"},
        {href:"", label:"Templates"},
        {href:"", label:"Enterprise"}
        
        ]
        return (
            <>
            <div className="flex">
                <ul className=" flex justify-between mx-4 w-1/2">
                    <Link href="//image/image7.jpg">
                <img src="/image/image7.jpg" alt="" className="h-15 w-14 md:w-21 lg:w-21 mb-6 mr-6 ml-6 space-x-2">
                </img>
                         </Link>
                         <h1 className="text-gray-100 text-xl h-10 mt-4 ml-6 space-x-2">
                            /
                         </h1>
                         <Link href="/image 5.jpg">
                            
                         <img src="/image 5.jpg" alt=""className="h-8 w-24 mt-4 ml-6 space-x-2 ">

                         </img>
                         </Link>
                
                    
                    {links.map(({href,label})=>(
                        <li key={href}className="mt-4 text-gray-500">
                            <Link href={href}>{label}</Link>
                        </li>
                        ))}
                       
                        


                </ul>
                <div className="  ">
                <button className=" bg-gray-100 px-4 py-2 rounded-lg h-fit w-fit text-black mt- ml-64 mt-2">
                    search documentation...       
                    <button className="ml-4 bg-white py-2 px-2 rounded-lg ">
                      ctrlk
                    </button>
                </button>
                <button className="bg-[#5DADE2] text-black px-4 py-2 rounded-lg border-solid ml-4 ">
                    Deploy
                </button>
                <button className="bg-black text-white px-4 py-2  rounded-lg mr-2 ml-2">
                    learn
                </button>
                </div>
                
            </div>
            <div>
                {children}
            </div>
            
            
            </>
        )

}