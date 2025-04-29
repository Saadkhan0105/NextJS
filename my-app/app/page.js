// import Image from "next/image";
// "use client"
// import { useState, useEffect, use} from 'react';
import fs from 'fs/promises';
import Navbar from "@/components/Navbar";
export default function Home() {
  // const [count, setCount] = useState(0);
  console.log('Home component rendered');
  let a = fs.readFile('.gitignore');
  a.then(e=>{console.log(e.toString())})
  return (
    <div>
      <Navbar />
      I am a component
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
    </div>
  );
}
