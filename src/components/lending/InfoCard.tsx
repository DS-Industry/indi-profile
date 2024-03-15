export default function InfoCard({
                                 img,
                                 title,
                                 text,
                             }:{
    img?: string;
    title: string;
    text: string;
}) {
    return (
        <div className="flex items-start gap-4">
            <img src={img}/>
            <div>
                <h2 className="text-lg font-bold">{title}</h2>

                <p className="mt-1 text-sm text-gray-300">
                    {text}
                </p>
            </div>
        </div>

    )
}