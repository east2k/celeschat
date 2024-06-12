import profileOne from "@/public/images//profile-one.svg";
import profileTwo from "@/public/images//profile-two.svg";
import profileThree from "@/public/images//profile-three.svg";
import profileFour from "@/public/images//profile-four.svg";

export const chatListConstants = [
    {
        id: 1,
        profile: profileOne,
        name: "Womp womp",
        active: true,
        log: [
            {
                profileImage: profileOne,
                message:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci nihil impedit, qui quo distinctio aperiam illo autem deleniti quisquam deserunt ea aut itaque, unde, culpa quam voluptatem consequatur amet.",
                sender: true,
            },
            {
                profileImage: profileOne,
                message:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci nihil impedit, qui quo distinctio aperiam illo autem deleniti quisquam deserunt ea aut itaque, unde, culpa quam voluptatem consequatur amet.",
                sender: true,
            },
            {
                profileImage: profileFour,
                message: "Meow MEow .",
                sender: false,
            },
            {
                profileImage: profileFour,
                message: "Meow MEow .",
                sender: false,
            },
        ],
    },
    {
        id: 2,
        profile: profileTwo,
        name: "Tudor",
        active: false,
        log: [
            {
                profileImage: profileTwo,
                message:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci nihil impedit, qui quo distinctio aperiam illo autem deleniti quisquam deserunt ea aut itaque, unde, culpa quam voluptatem consequatur amet.",
                sender: true,
            },
            {
                profileImage: profileTwo,
                message:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci nihil impedit, qui quo distinctio aperiam illo autem deleniti quisquam deserunt ea aut itaque, unde, culpa quam voluptatem consequatur amet.",
                sender: true,
            },
            {
                profileImage: profileFour,
                message: "Meow MEow .",
                sender: false,
            },
        ],
    },
    {
        id: 3,
        profile: profileThree,
        name: "Testing User",
        active: false,
        log: [
            {
                profileImage: profileFour,
                message: "Meow MEow .",
                sender: false,
            },
            {
                profileImage: profileThree,
                message:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci nihil impedit, qui quo distinctio aperiam illo autem deleniti quisquam deserunt ea aut itaque, unde, culpa quam voluptatem consequatur amet.",
                sender: true,
            },
            {
                profileImage: profileFour,
                message: "Meow MEow .",
                sender: false,
            },
            {
                profileImage: profileFour,
                message: "Meow MEow .",
                sender: false,
            },
        ],
    },
];
