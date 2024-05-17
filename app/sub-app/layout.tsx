import { ReactNode } from "react";
import Link from "next/link";

interface child{
    children:ReactNode
}

export default function link ({children}:child){
    const links = [
        {href:"",label:"Todo"},
        {href:"",label:"About"},
        {href:"",label:"Docs"}
    ]

    return(
        <>
            <div className="bg-blue-300 ">
                <ul className="flex justify-between mx-48 ">
                    {links.map(({href , label})=>{
                            return(
                                <li key={href} className="">
                                <Link href={href}>{label}</Link>
                                </li>
                            )
                        })}
                </ul>
            
            </div>
        
        <div>{children}</div>
        </>


        
    )
}