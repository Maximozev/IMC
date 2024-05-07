"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/IMC_logo.svg";
import { usePathname } from "next/navigation";
import { CiHeart } from "react-icons/ci";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Tv Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Watchlist", href: "/home/user/watchlist" },
  { name: "Profile", href: "/home/user/profile" },
];

export default function Navbar() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="w-full max-w-8xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#0C0011_40%,#63e_100%)]" />
      <div className="flex items-center">
        <Link href="/home" className="w-45">
          <Image src={Logo} alt="IMC logo" priority />
        </Link>
        <ul className="lg:flex gap-x-9 ml-14 hidden">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-white font-semibold underline text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    className="text-gray-300 font-normal text-sm"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
