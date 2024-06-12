import Image from "next/image";

import profileImage from "@/public/images/default-profile-image.png";

const ProfileImage = ({ profile, size }) => {
    const small = "w-8 h-8 min-w-[2rem] min-h-[2rem] max-w-[2rem] max-h-[2rem]";
    const big = "w-12 h-12 min-w-[3rem] min-h-[3rem] max-w-[3rem] max-h-[3rem]";

    return (
        <div
            className={`flex w- items-center justify-center rounded-full border border-ocean-50 border-opacity-15 overflow-hidden ${
                size === "small" ? small : big
            }`}
        >
            <Image
                width={50}
                height={50}
                className="h-full w-full bg-ocean-950"
                src={!profile ? profileImage : profile}
                alt="Profile Image"
            />
        </div>
    );
};

export default ProfileImage;
