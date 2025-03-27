"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {

  const path = usePathname();
  console.log(path)

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">HOME</Link> {path === "/" ? "!!" : "" }
        </li>
        <li>
          <Link href="/about-as">About Us</Link> {path === "/about-as" ? "!!" : "" }
        </li>
      </ul>
    </nav>
  )
}