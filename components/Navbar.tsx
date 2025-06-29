"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
    {name: "🛹Dashboard", href: "/"},
    {name: "📦Products", href: "/products"},
    {name: "〽️Analytics", href: "/analytics"}
]

const Navbar = () => {
    const pathname = usePathname(); 

    return(
        <nav>
            <div className=" bg-blue-950 px-5 py-4 min-h-dvh">
                <div className="flex flex-row items-center text-5xl mb-4">
                    😎
                    <div>
                        <p className="text-white text-base">admin</p>
                        <p className="text-gray-600 text-base">Administrator</p>
                    </div>
                </div>
                <div className="flex flex-col">
                <p className="text-gray-300">Pages</p>
                {pages.map((page) => (
                    <Link
                    key={page.href}
                    href={page.href}
                    className={`pl-4 pr-45 text-xl my-2 font-semibold py-3.5 rounded text-white transition ${pathname === page.href ? "bg-gray-400/50 " : ""}`}
                    >
                    {page.name}
                    </Link>
                ))}
                </div>
                
            </div>
        </nav>
    )

}

export default Navbar;