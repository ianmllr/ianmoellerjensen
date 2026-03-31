import NavItem from "@/components/NavItem";
import AsciiName from "@/components/AsciiName"


export default function Projects() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-zinc-50 pt-4 dark:bg-black">
            <header>
                <AsciiName />
            </header>
            <main className="w-full pt-10 max-w-3xl">
                <nav className="flex flex-col items-center gap-5">
                    <NavItem href="https://www.tech-tilbud.com/">Tech-tilbud</NavItem>

                </nav>

                <span className={"block text-center mt-10 text-sm text-gray-200 dark:text-gray-200"}>
            ianmoellerjensen@gmail.com
          </span>



            </main>


        </div>
    );
}