import Link from "next/link"

export default function home(){
  return (
    <main className="flex flex-row  items-center justify-center bg-black w-screen h-screen text-white">
      <div className="mx-8">
        <img src=" https://th.bing.com/th/id/OIP.PAvuw5KKwpTNJYFKurr8iAHaEK?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
      </div>
      
      <div>
      <h1 className=" mb-4">
        welcome to best todo-list
      </h1>
      <p className=" mb-4  bg-blue-500">
        Hello you can write your tasks for the day
      </p>
      <Link href="/sub-app">
        <button className="bg-blue-300 px-4 py-2 rounded-lg">
          Get Started
        </button>
      </Link>
      </div>

      <div className="mx-8 ">
        <img src="https://th.bing.com/th?id=OIP.CbZJTIUkJ1Bax7wGidZuhAHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt=""/>
      </div>


    </main>
  )
}
