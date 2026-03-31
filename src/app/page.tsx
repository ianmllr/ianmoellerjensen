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
      <div className="min-h-screen mt-5 flex flex-col items-center justify-start bg-zinc-50 pt-4 dark:bg-cyan-950">
          <header>
              <AsciiArt text={ascii} />
          </header>


          <main className="w-full pt-10 max-w-3xl">
              <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded text-sm text-gray-700 dark:text-gray-300 flex gap-10 items-center">
                  <p className={"pl-6"}>{"I am Ian, a 23 years old student from Nykøbing F, Denmark. I am currently studying AP Computer" +
                      " Science at Zealand in Næstved. Since I was a kid, I've had a passion for computers and for solving" +
                      " problems. I guess those go hand in hand. On this site, you can find my previous projects as well as" +
                      " information about me."}</p>
                  <Image src="/me.png" alt={"Image"} height={1} width={120}></Image>
              </div>
              <span className={"flex text-center mt-5 text-sm text-gray-200 dark:text-gray-200 gap-20 justify-center"}>
                      <p>ianmoellerjensen@gmail.com</p>
                  </span>
            <div className="flex mt-10 flex-col gap-5 items-center justify-start">
                <NavItem href="/projects">Projects</NavItem>
                <NavItem href="https://github.com/ianmllr">GitHub</NavItem>
                <NavItem href="https://www.linkedin.com/in/ianmoellerjensen/">LinkedIn</NavItem>
            </div>
        </main>
      </div>
  );
}
