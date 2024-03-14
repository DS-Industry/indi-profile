export default function PhotoCard({
                                 title,
                                 text,
                                 photo,
                                 pe,
                             }:{
    title?: string;
    text?: string;
    photo: string;
    pe?: string;
}) {
    const cn = `group p-2 ${pe}`;
    return (
        <article className={cn}>
            <img
                alt=""
                src={photo}
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {text}
                </p>
            </div>
        </article>

    )
}