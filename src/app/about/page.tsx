import NavItem from "@/components/NavItem";
import AsciiName from "@/components/AsciiName"


export default function Page() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-zinc-50 pt-4 dark:bg-black">
            <header>
                <AsciiName/>
            </header>

            <main>
                <nav className="flex flex-col items-center gap-5 mt-6">
                    <NavItem href="/">&lt;- back</NavItem>
                </nav>
                <p className="mt-8 max-w-2xl px-6 text-center text-base leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg">
                I am Ian, a Computer Science student from Nykøbing F, Denmark.
            </p>
            </main>

        </div>
    );
}