import NavItem from "@/components/NavItem";
import AsciiArt from "@/components/AsciiArt"
import React from "react";

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
      <div className="min-h-screen flex flex-col items-center justify-start pt-8 ">
          <header className="mt-8">
              <AsciiArt text={ascii} />
          </header>

          <main className="w-full pt-16 max-w-3xl px-4">
              <nav className="flex flex-col gap-6 items-center justify-start mt-5 mb-10">
                  <div className="flex flex-col gap-3 items-center">
                      <NavItem href={"/about"}>About</NavItem>
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
