import Link from "next/link";

export default function Home() {
  return (
    <main className="  flex flex-col items-center justify-center bg-black h-screen  w-screen text-white ">
      <div className="">
        Welcome to the best todo-list manager
      </div>
      <Link href="/sub-app">
       <button className="bg-blue-500 px-4 py-2 rounded-lg">Get Started</button>
      </Link>
    </main>
  );
}
