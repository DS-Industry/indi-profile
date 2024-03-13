import Logo from '../../assets/logo_title.png';
import LogoSmall from '../../assets/logo_small.png'


export default function UnauthorizedLayout({ children }: { children: React.ReactNode; }) {

    return (
        <div className="w-screen h-screen flex flex-col justify-between">
            <header className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 md:flex md:items-center md:gap-12">
                            <a className="block text-teal-600" href="#">
                                <span className="sr-only">Home</span>
                                <img
                                    src={Logo}
                                    alt="logo"
                                    className="pl-5"
                                    height="120"
                                    width="190"
                                />
                            </a>
                        </div>

                        <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75"
                                           href="#"> About </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75"
                                           href="#"> Services </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75"
                                           href="#"> Pricing </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75"
                                           href="#"> Contacts </a>
                                    </li>
                                </ul>
                            </nav>

                            <div className="flex items-center gap-4">
                                <div className="sm:flex sm:gap-4">
                                    <a
                                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                        href="#"
                                    >
                                        Login
                                    </a>
                                </div>

                                <div className="block md:hidden">
                                    <button
                                        className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M4 6h16M4 12h16M4 18h16"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex w-full h-full flex-col">{children}</main>

            {/*<footer className=" bg-[#9E9E9E] bg-opacity-20">*/}
            {/*    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">*/}
            {/*        <div className="flex justify-center">*/}
            {/*            <img*/}
            {/*                src={LogoSmall}*/}
            {/*                className="object-contain"*/}
            {/*                width="38"*/}
            {/*                height="38"*/}
            {/*            />*/}
            {/*        </div>*/}

            {/*        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-[#9E9E9E] font-thin">*/}
            {/*            © All Rights Reserved. Powered by DSMOYKA PRIVATE LIMITED*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</footer>*/}
        </div>
    )
}
