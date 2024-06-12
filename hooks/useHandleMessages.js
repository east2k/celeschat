import { chatListConstants } from "@/constants/chatListConstants";
import { useState } from "react";

const useHandleMessages = () => {
    const [chatList, setChatList] = useState(chatListConstants);
    const [currentMessage, setCurrentMessage] = useState("");
    const [showAddTab, setShowAddTab] = useState(false);

    const handleOpenAddTab = (tabState) => {
        console.log(tabState, showAddTab);
        if (tabState === "default") {
            setShowAddTab(!showAddTab);
        } else {
            setShowAddTab(false);
        }
    };

    const handleChangeChat = (id) => {
        handleOpenAddTab("custom");
        setChatList((prevState) => {
            return prevState.map((items) => {
                return {
                    ...items,
                    active: items.id === id ? true : false,
                };
            });
        });
    };

    const handleSendMessage = (id, message) => {
        if (!message) return;
        setChatList((prevState) => {
            return prevState.map((items) => {
                return {
                    ...items,
                    log:
                        items.id === id
                            ? [
                                  ...items.log,
                                  {
                                      profileImage:
                                          "/src/assets/profile-four.svg",
                                      message: message,
                                      sender: false,
                                  },
                              ]
                            : [...items.log],
                };
            });
        });
        setCurrentMessage("");
    };

    const handleMessage = (event) => {
        setCurrentMessage(event.target.value);
    };

    return {
        chatList,
        currentMessage,
        handleChangeChat,
        handleSendMessage,
        handleMessage,
        showAddTab,
        handleOpenAddTab,
    };
};

export default useHandleMessages;
