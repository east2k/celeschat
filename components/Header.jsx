import Image from "next/image";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";

const Header = () => {
    return (
        <header className="flex justify-between items-center p-5 border-b border-opacity-15 border-emerald-300 w-full shadow-md bg-ocean-800 h-[10%]">
            <Image
                src="/images/logo.png"
                width={50}
                height={50}
                className="w-auto h-14"
                alt="Logo"
            />
            <div className="flex flex-row gap-4 items-center justify-center py-2 px-5 rounded-lg bg-ocean-950">
                <div>
                    <p className="text-emerald-300 text-sm">Christian</p>
                    <Cog6ToothIcon className="cursor-pointer w-5 h-5 mt-1" />
                </div>
                <div className="flex items-center justify-center rounded-full w-[40px] h-[40px] overflow-hidden">
                    <Image
                        src="/images/profile-pic.jpg"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                        alt="Profile Pic"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
