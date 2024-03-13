import UnauthorizedLayout from "../layouts/UnauthorizedLayout";


export default function Landing() {

    return (
        <UnauthorizedLayout>
            { /* banner */}
            <section
                class="relative bg-banner-main bg-cover bg-top bg-no-repeat  py-20"
            >
                <div
                    class="absolute inset-0 bg-blue-500/35 sm:bg-transparent sm:from-blue-500/75 sm:to-blue-500/15 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div class="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
                        <h1 class="text-3xl font-extrabold sm:text-5xl text-white-500">
                            DS Moyka & Zixdo
                        </h1>

                        <p class="mt-4 max-w-lg sm:text-xl/relaxed text-white-500">
                            First self-service car wash chain in India
                        </p>

                        <div class="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                class="block w-full rounded bg-red-400 px-12 py-3 text-sm font-medium text-white-500 shadow hover:bg-white-500/95 focus:outline-none focus:ring active:bg-white-500 sm:w-auto"
                            >
                                Pay Online
                            </a>

                            <a
                                href="#"
                                class="block w-full rounded border-white-500 border-2 px-12 py-3 text-sm font-medium text-white-500 shadow hover:bg-white-500/95 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Services
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            About Us
                        </h2>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            DS Moyka & Zixdo is the pure result and cost savings. DS Moyka & Zixdo, the pleasure of taking care of your car on your own, service in details.
                            We are pleased to provide car owners with a complete set of technologies and means for high-quality self-care of the car. We guarantee affordable prices for basic car wash programs: exterior and wheel washing soap, protective wax and spot free rinsing, interior cleaning with a vacuum cleaner
                        </p>
                    </div>
                </div>
            </section>

        {/*    <section className="bg-gray-900 text-white">*/}
        {/*        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">*/}
        {/*            <div className="max-w-xl">*/}
        {/*                <h2 className="text-3xl font-bold sm:text-4xl">What makes us special</h2>*/}

        {/*                <p className="mt-4 text-gray-300">*/}
        {/*                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam*/}
        {/*                    iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur*/}
        {/*                    quibusdam, quos fuga minima.*/}
        {/*                </p>*/}
        {/*            </div>*/}

        {/*            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">*/}
        {/*                <div className="flex items-start gap-4">*/}
        {/*<span className="shrink-0 rounded-lg bg-gray-800 p-4">*/}
        {/*  <svg*/}
        {/*      className="h-5 w-5"*/}
        {/*      fill="none"*/}
        {/*      stroke="currentColor"*/}
        {/*      viewBox="0 0 24 24"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*  >*/}
        {/*    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>*/}
        {/*    <path*/}
        {/*        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"*/}
        {/*    ></path>*/}
        {/*    <path*/}
        {/*        stroke-linecap="round"*/}
        {/*        stroke-linejoin="round"*/}
        {/*        stroke-width="2"*/}
        {/*        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"*/}
        {/*    ></path>*/}
        {/*  </svg>*/}
        {/*</span>*/}

        {/*                    <div>*/}
        {/*                        <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>*/}

        {/*                        <p className="mt-1 text-sm text-gray-300">*/}
        {/*                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab*/}
        {/*                            possimus quisquam reiciendis tempora animi! Quaerat, saepe?*/}
        {/*                        </p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}

        {/*                <div className="flex items-start gap-4">*/}
        {/*<span className="shrink-0 rounded-lg bg-gray-800 p-4">*/}
        {/*  <svg*/}
        {/*      className="h-5 w-5"*/}
        {/*      fill="none"*/}
        {/*      stroke="currentColor"*/}
        {/*      viewBox="0 0 24 24"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*  >*/}
        {/*    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>*/}
        {/*    <path*/}
        {/*        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"*/}
        {/*    ></path>*/}
        {/*    <path*/}
        {/*        stroke-linecap="round"*/}
        {/*        stroke-linejoin="round"*/}
        {/*        stroke-width="2"*/}
        {/*        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"*/}
        {/*    ></path>*/}
        {/*  </svg>*/}
        {/*</span>*/}

        {/*                    <div>*/}
        {/*                        <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>*/}

        {/*                        <p className="mt-1 text-sm text-gray-300">*/}
        {/*                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab*/}
        {/*                            possimus quisquam reiciendis tempora animi! Quaerat, saepe?*/}
        {/*                        </p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}

        {/*                <div className="flex items-start gap-4">*/}
        {/*<span className="shrink-0 rounded-lg bg-gray-800 p-4">*/}
        {/*  <svg*/}
        {/*      className="h-5 w-5"*/}
        {/*      fill="none"*/}
        {/*      stroke="currentColor"*/}
        {/*      viewBox="0 0 24 24"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*  >*/}
        {/*    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>*/}
        {/*    <path*/}
        {/*        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"*/}
        {/*    ></path>*/}
        {/*    <path*/}
        {/*        stroke-linecap="round"*/}
        {/*        stroke-linejoin="round"*/}
        {/*        stroke-width="2"*/}
        {/*        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"*/}
        {/*    ></path>*/}
        {/*  </svg>*/}
        {/*</span>*/}

        {/*                    <div>*/}
        {/*                        <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>*/}

        {/*                        <p className="mt-1 text-sm text-gray-300">*/}
        {/*                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab*/}
        {/*                            possimus quisquam reiciendis tempora animi! Quaerat, saepe?*/}
        {/*                        </p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}

        {/*                <div className="flex items-start gap-4">*/}
        {/*<span className="shrink-0 rounded-lg bg-gray-800 p-4">*/}
        {/*  <svg*/}
        {/*      className="h-5 w-5"*/}
        {/*      fill="none"*/}
        {/*      stroke="currentColor"*/}
        {/*      viewBox="0 0 24 24"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*  >*/}
        {/*    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>*/}
        {/*    <path*/}
        {/*        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"*/}
        {/*    ></path>*/}
        {/*    <path*/}
        {/*        stroke-linecap="round"*/}
        {/*        stroke-linejoin="round"*/}
        {/*        stroke-width="2"*/}
        {/*        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"*/}
        {/*    ></path>*/}
        {/*  </svg>*/}
        {/*</span>*/}

        {/*                    <div>*/}
        {/*                        <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>*/}

        {/*                        <p className="mt-1 text-sm text-gray-300">*/}
        {/*                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab*/}
        {/*                            possimus quisquam reiciendis tempora animi! Quaerat, saepe?*/}
        {/*                        </p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}

        {/*                <div className="flex items-start gap-4">*/}
        {/*<span className="shrink-0 rounded-lg bg-gray-800 p-4">*/}
        {/*  <svg*/}
        {/*      className="h-5 w-5"*/}
        {/*      fill="none"*/}
        {/*      stroke="currentColor"*/}
        {/*      viewBox="0 0 24 24"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*  >*/}
        {/*    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>*/}
        {/*    <path*/}
        {/*        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"*/}
        {/*    ></path>*/}
        {/*    <path*/}
        {/*        stroke-linecap="round"*/}
        {/*        stroke-linejoin="round"*/}
        {/*        stroke-width="2"*/}
        {/*        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"*/}
        {/*    ></path>*/}
        {/*  </svg>*/}
        {/*</span>*/}

        {/*                    <div>*/}
        {/*                        <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>*/}

        {/*                        <p className="mt-1 text-sm text-gray-300">*/}
        {/*                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab*/}
        {/*                            possimus quisquam reiciendis tempora animi! Quaerat, saepe?*/}
        {/*                        </p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}

        {/*                <div className="flex items-start gap-4">*/}
        {/*<span className="shrink-0 rounded-lg bg-gray-800 p-4">*/}
        {/*  <svg*/}
        {/*      className="h-5 w-5"*/}
        {/*      fill="none"*/}
        {/*      stroke="currentColor"*/}
        {/*      viewBox="0 0 24 24"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*  >*/}
        {/*    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>*/}
        {/*    <path*/}
        {/*        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"*/}
        {/*    ></path>*/}
        {/*    <path*/}
        {/*        stroke-linecap="round"*/}
        {/*        stroke-linejoin="round"*/}
        {/*        stroke-width="2"*/}
        {/*        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"*/}
        {/*    ></path>*/}
        {/*  </svg>*/}
        {/*</span>*/}

        {/*                    <div>*/}
        {/*                        <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>*/}

        {/*                        <p className="mt-1 text-sm text-gray-300">*/}
        {/*                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab*/}
        {/*                            possimus quisquam reiciendis tempora animi! Quaerat, saepe?*/}
        {/*                        </p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </section>*/}
        </UnauthorizedLayout>
    )
}
