"use client";

import Sidenav from "./Sidenav";
import Chat from "./Chat/Chat";
import React from "react";
import useHandleMessages from "@/hooks/useHandleMessages";
import AddTab from "./AddTab/AddTab";

const Body = () => {
    const {
        chatList,
        currentMessage,
        handleChangeChat,
        handleSendMessage,
        handleMessage,
        showAddTab,
        handleOpenAddTab,
    } = useHandleMessages();
    return (
        <div className="flex flex-row h-[90%]">
            <Sidenav
                chatList={chatList}
                handleChangeChat={handleChangeChat}
                handleOpenAddTab={handleOpenAddTab}
            />
            {showAddTab ? (
                <AddTab />
            ) : (
                <Chat
                    handleMessage={handleMessage}
                    currentMessage={currentMessage}
                    chatID={
                        chatList[chatList.find((item) => item.active).id - 1].id
                    }
                    chatLog={
                        chatList[chatList.find((item) => item.active).id - 1]
                            .log
                    }
                    name={
                        chatList[chatList.find((item) => item.active).id - 1]
                            .name
                    }
                    image={
                        chatList[chatList.find((item) => item.active).id - 1]
                            .profile
                    }
                    handleSendMessage={handleSendMessage}
                    showAddTab={showAddTab}
                />
            )}
        </div>
    );
};

export default Body;
