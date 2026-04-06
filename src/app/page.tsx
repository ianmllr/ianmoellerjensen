import NavItem from "@/components/NavItem";
import AsciiArt from "@/components/AsciiArt"
import React from "react";
import Image from "next/image";

const ascii = '                                                                                                                                                                          \n' +
    '    ██                                                       ▄▄▄▄      ▄▄▄▄                                       ██                                                      \n' +
    '    ▀▀                                                       ▀▀██      ▀▀██                                       ▀▀                                                      \n' +
    '  ████      ▄█████▄  ██▄████▄            ████▄██▄   ▄██████    ██        ██       ▄████▄    ██▄████             ████      ▄████▄   ██▄████▄  ▄▄█████▄   ▄████▄   ██▄████▄ \n' +
    '    ██      ▀ ▄▄▄██  ██▀   ██            ██ ██ ██  ██▀ ▄███    ██        ██      ██▄▄▄▄██   ██▀                   ██     ██▄▄▄▄██  ██▀   ██  ██▄▄▄▄ ▀  ██▄▄▄▄██  ██▀   ██ \n' +
    '    ██     ▄██▀▀▀██  ██    ██            ██ ██ ██  ██▄█▀ ██    ██        ██      ██▀▀▀▀▀▀   ██                    ██     ██▀▀▀▀▀▀  ██    ██   ▀▀▀▀██▄  ██▀▀▀▀▀▀  ██    ██ \n' +
    ' ▄▄▄██▄▄▄  ██▄▄▄███  ██    ██            ██ ██ ██  ███▄▄██▀    ██▄▄▄     ██▄▄▄   ▀██▄▄▄▄█   ██                    ██     ▀██▄▄▄▄█  ██    ██  █▄▄▄▄▄██  ▀██▄▄▄▄█  ██    ██ \n' +
    ' ▀▀▀▀▀▀▀▀   ▀▀▀▀ ▀▀  ▀▀    ▀▀            ▀▀ ▀▀ ▀▀  ▀ ▀▀▀▀       ▀▀▀▀      ▀▀▀▀     ▀▀▀▀▀    ▀▀                    ██       ▀▀▀▀▀   ▀▀    ▀▀   ▀▀▀▀▀▀     ▀▀▀▀▀   ▀▀    ▀▀ \n' +
    '                                                                                                               ████▀                                                      \n' +
    '                                                                                                                                                                          '




export default function Home() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-start pt-8 dark:bg-cyan-950">
          <header className="mt-8">
              <AsciiArt text={ascii} />
          </header>

          <main className="w-full pt-16 max-w-3xl px-4">
              <div className="p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-gray-700 dark:text-gray-300 flex gap-8 items-center shadow-lg dark:shadow-xl border border-zinc-200 dark:border-zinc-800">
                  <p className="leading-relaxed">{"I am Ian, a 23 years old student from Nykøbing F, Denmark. I am currently studying AP Computer" +
                      " Science at Zealand in Næstved. Since I was a kid, I've had a passion for computers and for solving" +
                      " problems. I guess those go hand in hand. On this site, you can find my previous projects as well as" +
                      " information about me."}</p>
                  <Image src="/me.png" alt={"Image"} height={1} width={120} className="rounded-md flex-shrink-0"></Image>
              </div>
              <nav className="flex flex-col gap-6 items-center justify-start mt-12 mb-10">
                  <div className="flex flex-col gap-3 items-center">
                      <NavItem href="/projects">Projects</NavItem>
                      <NavItem href="https://github.com/ianmllr">GitHub</NavItem>
                      <NavItem href="https://www.linkedin.com/in/ianmoellerjensen/">LinkedIn</NavItem>
                  </div>
              </nav>

              <div className="mt-10 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Contact</p>
                  <a href="mailto:ianmoellerjensen@gmail.com" className="text-gray-200 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors hover:underline">
                      ianmoellerjensen@gmail.com
                  </a>
              </div>
          </main>
      </div>
  );
}
