import Container from "../../common/Container/Container";
import { navigation } from "../../../content/navigation";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
            <Container>
                <div className="flex h-[72px] items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">

                            RS

                        </div>

                        <div>

                            <h2 className="font-bold text-xl">

                                Raghav Sohani

                            </h2>

                            <p className="text-sm text-gray-500">

                                Senior Frontend Engineer

                            </p>

                        </div>

                    </div>
                    {/* Navigation */}
                    <nav>
                        <ul className="flex items-center gap-8">
                            {navigation.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors duration-200 hover:text-blue-600"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Navbar;