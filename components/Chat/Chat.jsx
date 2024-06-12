import { useEffect, useRef } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import ProfileImage from "./ProfileImage";

const Chat = ({
    chatID,
    chatLog,
    name,
    image,
    handleSendMessage,
    handleMessage,
    currentMessage,
}) => {
    const chatBottomRef = useRef(null);

    useEffect(() => {
        if (chatBottomRef.current) {
            chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [chatLog]);

    return (
        <div className="flex flex-col w-full justify-between">
            <div className="flex flex-row items-center justify-between py-2 px-8 w-full mb-5 shadow-sm shadow-emerald-200/40 shadow-opaci">
                <div className="flex flex-row items-center gap-2">
                    <ProfileImage profile={image} size="big" />
                    <h1 className="text-2xl">{name}</h1>
                </div>
                <div className="cursor-pointer text-3xl ml-auto hover:bg-ocean-950 p-2 rounded-full flex justify-center items-center">
                    <Bars3Icon className="text-white w-5 h-5" />
                </div>
            </div>
            <div className="px-8 h-full overflow-auto">
                <div className="">
                    {chatLog?.map((item, index) => {
                        let check = true;
                        if (chatLog[index - 1]?.sender === item.sender) {
                            check = false;
                        }
                        return (
                            <div
                                key={index}
                                className={`flex items-start gap-2 w-2/3 ${
                                    item.sender
                                        ? "flex-row mr-auto"
                                        : "flex-row-reverse ml-auto"
                                }`}
                            >
                                <div
                                    className={`${
                                        check ? "opacity-100" : "opacity-0"
                                    }`}
                                >
                                    <ProfileImage
                                        profile={item.profileImage}
                                        size="small"
                                    />
                                </div>
                                <p
                                    className={`py-1 ${
                                        item.sender ? "text-left" : "text-right"
                                    }`}
                                >
                                    {item.message}
                                </p>
                            </div>
                        );
                    })}
                    <div ref={chatBottomRef} />
                </div>
            </div>
            <div className="w-full mt-auto py-5 px-8 border-t border-emerald-300 border-opacity-25 pt-4">
                <div className="flex flex-row w-full border border-ocean-50 border-opacity-15 rounded-md">
                    <textarea
                        onChange={handleMessage}
                        value={currentMessage}
                        className="w-full resize-none outline-none px-4 py-2 bg-vector-800"
                    />
                    <button
                        onClick={() =>
                            handleSendMessage(chatID, currentMessage)
                        }
                        className="px-5 py-2 bg-water-400 hover:bg-water-300 text-white"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
