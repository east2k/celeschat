import { UserGroupIcon } from "@heroicons/react/24/solid";
import ProfileImage from "./Chat/ProfileImage";
import useHandleAuth from "@/hooks/useHandleAuth";

const Sidenav = ({ handleChangeChat, chatList, handleOpenAddTab }) => {
    const { handleSignout } = useHandleAuth();

    return (
        <div className="flex flex-col py-5 border-r w-3/12 min-w-xs max-w-sm h-full border-emerald-300 border-opacity-15">
            <div
                onClick={() => handleOpenAddTab("default")}
                className="mx-5 my-2 flex flex-row items-center gap-2 px-2 py-2 border border-opacity-20 border-ocean-50  hover:bg-ocean-400 rounded-lg"
            >
                <div className="flex cursor-pointer w-full text-base text-ellipsis text-nowrap overflow-hidden">
                    <UserGroupIcon className="w-5 h-5" />
                    <p className="text-sm">Friends</p>
                </div>
            </div>
            <h1 className="px-5 pb-5 text-2xl">Recent Messages:</h1>
            <ul className="flex flex-col gap-1 px-5 h-full">
                {chatList.map((item, index) => {
                    return (
                        <li
                            key={index}
                            onClick={() => handleChangeChat(item.id)}
                            className="cursor-pointer rounded-lg"
                        >
                            <div
                                className={`flex flex-row items-center gap-2 px-2 py-2 border border-opacity-5 border-vector-50  hover:bg-vector-400 rounded-lg transition-colors duration-75 ${
                                    item.active && "bg-vector-800"
                                }`}
                            >
                                <ProfileImage
                                    profile={item.profile}
                                    size="small"
                                />
                                <p className="text-base text-ellipsis text-nowrap overflow-hidden">
                                    {item.name}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <button
                onClick={handleSignout}
                className="text-center mt-auto border border-vector-400 border-opacity-25 hover:bg-vector-500 mx-5 py-2 rounded-lg text-white"
            >
                Logout
            </button>
        </div>
    );
};

export default Sidenav;
