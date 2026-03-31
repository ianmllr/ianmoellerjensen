import NavItem from "@/components/NavItem";
import AsciiArt from "@/components/AsciiArt"
import ProjectCard from "@/components/ProjectCard";

const ascii = "                                                                                \n" +
    "                                  ██                                            \n" +
    "                                  ▀▀                           ██               \n" +
    " ██▄███▄    ██▄████   ▄████▄    ████      ▄████▄    ▄█████▄  ███████   ▄▄█████▄ \n" +
    " ██▀  ▀██   ██▀      ██▀  ▀██     ██     ██▄▄▄▄██  ██▀    ▀    ██      ██▄▄▄▄ ▀ \n" +
    " ██    ██   ██       ██    ██     ██     ██▀▀▀▀▀▀  ██          ██       ▀▀▀▀██▄ \n" +
    " ███▄▄██▀   ██       ▀██▄▄██▀     ██     ▀██▄▄▄▄█  ▀██▄▄▄▄█    ██▄▄▄   █▄▄▄▄▄██ \n" +
    " ██ ▀▀▀     ▀▀         ▀▀▀▀       ██       ▀▀▀▀▀     ▀▀▀▀▀      ▀▀▀▀    ▀▀▀▀▀▀  \n" +
    " ██                            ████▀                                            \n" +
    "                                                                                "

export default function Projects() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start pt-4">
            <header>
                <AsciiArt text={ascii} />
            </header>
            <main className="w-full pt-10 max-w-3xl">
                <nav className="flex flex-col items-center gap-5">
                    <NavItem href="/">&lt;- back</NavItem>
                </nav>

                <nav className="flex flex-col items-center gap-5 mt-6">
                    <ProjectCard
                        title="Tech-tilbud"
                        href="https://www.tech-tilbud.com/"
                        description="Tech-tilbud is a Danish-language project that helps users find discounts on electronics
                        by comparing discounts that phone plan providers offer to new customers. In order to attract customers,
                        providers will offer discounts on new tech in exchange for you agreeing to be a customer with them for
                        6 months. Providers hope you will forget that and stay with them forever, but really, everyone
                        should switch every 6 months for their own benefit. Collecting all these discounts and offers and
                        comparing them to each other and to actual market prices provides a genuine view of when there
                        is money to be saved, and that is what Tech-tilbud helps users with."
                    />
                </nav>



            </main>

        </div>
    );
}
