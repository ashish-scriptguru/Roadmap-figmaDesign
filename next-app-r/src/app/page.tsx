

import Link from "next/link";
import Contact from "./about/contact"

export default function Page(){
  return (
    <div>
      <h1>Ashish Panwar</h1>
      <Link href="/about">About us</Link>
      <Contact />
    </div>
  );
}