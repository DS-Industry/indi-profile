import { BiInfoCircle } from "react-icons/bi";

export default function Success({
                                  title,
                                  body,
                              }: {
    title?: string;
    body: string;
}) {
    return (
        <div className=" w-full flex justify-center h-[72px]">
            <div className=" text-black-500 flex flex-row justify-start w-full items-start mt-2 bg-green-600 rounded-lg shadow-[0px_2px_3px_1px_rgb(0,0,0,0.3)]">
                <div className=" w-3 h-16 bg-green-300 rounded-l-lg">
                    <p className=" invisible ">T</p>
                </div>
                <div className=" h-14 w-8 flex items-center justify-center text-4xl ml-4 mr-4 text-green-300 pt-2">
                    <BiInfoCircle />
                </div>
                <div className=" flex flex-col items-start justify-center w-full h-16 pr-2 font-inter-regular text-md text-white-500">
                    <p>{title}</p>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    );
}