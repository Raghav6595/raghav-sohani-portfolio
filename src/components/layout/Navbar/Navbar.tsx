import { useEffect, useState } from "react";
import Container from "../../common/Container/Container";
import { navigationItems } from "../../../content/navigation";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("hero");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 15);

            const sections = navigationItems.map((item) =>
                document.getElementById(item.href.substring(1))
            );

            const scrollPosition = window.scrollY + 120;

            for (const section of sections) {
                if (!section) continue;

                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;

                if (scrollPosition >= top && scrollPosition < bottom) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll(); // Set initial active section

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
      ${scrolled
                    ? "border-b border-gray-200 bg-white/90 shadow-lg backdrop-blur-md"
                    : "bg-white"
                }`}
        >
            <Container>
                <div className="flex h-20 items-center justify-between">

                    {/* Logo */}

                    <a
                        href="#hero"
                        className="flex items-center gap-4 transition hover:scale-[1.02]"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-md">
                            RS
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                Raghav Sohani
                            </h2>

                            <p className="text-sm text-gray-500">
                                Senior Engineering Lead
                            </p>
                        </div>
                    </a>

                    {/* Navigation */}

                    <nav className="hidden items-center gap-10 md:flex">
                        {navigationItems.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className={`relative font-medium transition duration-300 hover:text-blue-600
                ${activeSection === item.href.replace("#", "")
                                        ? "text-blue-600"
                                        : "text-gray-600"
                                    }`}
                            >
                                {item.title}

                                <span
                                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-blue-600 transition-all duration-300
                  ${activeSection === item.href.replace("#", "")
                                            ? "w-full"
                                            : "w-0"
                                        }`}
                                />
                            </a>
                        ))}
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Navbar;