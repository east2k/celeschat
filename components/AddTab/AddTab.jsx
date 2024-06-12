import {
    MagnifyingGlassIcon,
    PlusIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import ProfileImage from "../Chat/ProfileImage";

const AddTab = () => {
    const [expandProfile, setExpandProfile] = useState(false);

    const handleExpandProfile = () => {
        setExpandProfile(!expandProfile);
    };

    return (
        <div className="w-full">
            {expandProfile && (
                <div className="flex items-center justify-center fixed top-0 left-0 bg-opacity-50 bg-vector-800 w-screen h-screen">
                    <div className="relative max-w-screen-sm bg-vector-800 border border-ocean-50 border-opacity-15 rounded-lg px-8 py-6">
                        <div
                            onClick={handleExpandProfile}
                            className="absolute right-[2%] top-[2%] cursor-pointer rounded-full bg-vector-600 hover:bg-vector-500"
                        >
                            <XMarkIcon className="w-5 h-5" />
                        </div>
                        <div className="flex flex-row items-center">
                            <ProfileImage size="big" />
                            <p className="text-xl ml-3 text-ellipsis text-nowrap overflow-hidden">
                                Mister
                            </p>
                        </div>
                        <div className="mt-5 border-t border-ocean-50 border-opacity-25">
                            <h2 className="font-semibold py-2">Bio</h2>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Minus labore dolor recusandae
                                natus omnis eos in, tenetur quaerat dolores
                                voluptatum qui eaque ex asperiores cupiditate
                                quo voluptatem! Consectetur, sunt dignissimos.
                            </p>
                        </div>
                        <div className="flex justify-end mt-5 border-t border-ocean-50 border-opacity-25">
                            <button className="cursor-pointer bg-vector-500 hover:bg-vector-400 rounded-sm px-4 py-1 mt-2">
                                Add Friend
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <h1 className="text-3xl text-pink-50 px-8 mt-5">Add Friend</h1>
            <p className="mx-8">Start chatting now by adding friends!</p>
            <div className="flex flex-row mx-8 mt-5 pb-5 border-b border-ocean-50 border-opacity-15">
                <input
                    type="text"
                    className="w-full resize-none outline-none px-4 py-2 bg-vector-800 text-sm"
                />
                <button
                    onClick={() => handleSendMessage(chatID, currentMessage)}
                    className="text-sm px-5 bg-water-400 hover:bg-water-300 bg-vector-800 w-auto text-white"
                >
                    <MagnifyingGlassIcon className="mx-2 w-5 h-5" />
                </button>
            </div>
            <div className="px-8 mt-5">
                <h1 className="text-xl">Recommended Users:</h1>
                <ul className="mt-2">
                    <li
                        onClick={handleExpandProfile}
                        className="flex flex-row items-center gap-2 px-2 py-3 border-t border-opacity-5 border-ocean-50  group hover:bg-vector-500 cursor-pointer rounded-lg transition-colors duration-75"
                    >
                        <ProfileImage size="small" />
                        <p className="text-base text-ellipsis text-nowrap overflow-hidden">
                            Mister
                        </p>
                        {/* <PlusIcon className="w-5 h-5 ml-auto bg-vector-500 text-vector-100 group-hover:bg-vector-700  rounded-full" /> */}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AddTab;
