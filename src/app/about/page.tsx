import NavItem from "@/components/NavItem";
import AsciiArt from "@/components/AsciiArt"
import React from "react";
import Image from "next/image";


const ascii = '                                                  \n' +
    '           ▄▄                                     \n' +
    '           ██                              ██     \n' +
    '  ▄█████▄  ██▄███▄    ▄████▄   ██    ██  ███████  \n' +
    '  ▀ ▄▄▄██  ██▀  ▀██  ██▀  ▀██  ██    ██    ██     \n' +
    ' ▄██▀▀▀██  ██    ██  ██    ██  ██    ██    ██     \n' +
    ' ██▄▄▄███  ███▄▄██▀  ▀██▄▄██▀  ██▄▄▄███    ██▄▄▄  \n' +
    '  ▀▀▀▀ ▀▀  ▀▀ ▀▀▀      ▀▀▀▀     ▀▀▀▀ ▀▀     ▀▀▀▀  \n' +
    '                                                  \n' +
    '                                                  '


export default function About() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start pt-8 ">
            <header className="mt-8">
                <AsciiArt text={ascii} />
            </header>
            <main className="w-full pt-16 max-w-3xl px-4 mx-auto">
                <nav className="flex flex-col items-center gap-5 mb-10">
                    <NavItem href="/">&lt;- back</NavItem>
                </nav>

                <div className="p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-gray-700 dark:text-gray-300 flex gap-8 items-center shadow-lg dark:shadow-xl border border-zinc-200 dark:border-zinc-800">
                    <p className="leading-relaxed">{"I am Ian, a 23 years old student from Nykøbing F, Denmark. I am currently studying AP Computer" +
                    " Science at Zealand in Næstved. Since I was a kid, I've had a passion for computers and for solving" +
                    " problems. I guess those go hand in hand. On this site, you can find my previous projects as well as" +
                    " information about me."}</p>
                    <Image src="/me.png" alt={"Image"} height={1} width={120} className="rounded-md flex-shrink-0"></Image>
                </div>
            </main>
        </div>
    );
}