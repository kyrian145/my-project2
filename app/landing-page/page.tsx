import Link from "next/link";

export default function home(){
    return (
        <main className="flex flex-row items-center justify-center bg-black w-screen h-screen">
            <div>
                <h1 className="mb-4 text-white">
                    welcome to next.js
                </h1>
                <Link href="/click">
            <button  className="flex place-content-center bg-yellow-500 px-4 py-3  rounded-lg text-black ">
                click- Now
                
                    
                </button>

            </Link>


            </div>
            
        </main>
    )
}