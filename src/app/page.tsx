import NavItem from "@/components/NavItem";
import AsciiName from "@/components/AsciiName"

export default function Home() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-start bg-zinc-50 pt-4 dark:bg-black">
        <header>
            <AsciiName />
        </header>
        <main className="w-full pt-10 max-w-3xl">
          <nav className="flex flex-col items-center gap-5">
            <NavItem href="/about">about</NavItem>
            <NavItem href="/contact">contact</NavItem>
            <NavItem href="/projects">projects</NavItem>
          </nav>
          <div className="flex items-center space-x-5 mt-10 justify-center">
            <NavItem href="https://www.linkedin.com/in/ianmoellerjensen/">LinkedIn</NavItem>
            <NavItem href="https://github.com/ianmllr">GitHub</NavItem>
          </div>
          <span className={"block text-center mt-10 text-sm text-gray-200 dark:text-gray-200"}>
            ianmoellerjensen@gmail.com
          </span>



        </main>
      </div>
  );
}
