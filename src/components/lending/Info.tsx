export default function Info({
    title,
    text,
}:{
    title: string;
    text: string;
}) {
    return (
        <section className="bg-gray-50">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-4xl font-bold text-gray-900 md:text-3xl">
                        {title}
                    </h2>

                    <p className="hidden text-gray-500 sm:mt-4 sm:block">
                        {text}
                    </p>
                </div>
            </div>
        </section>

    )
}