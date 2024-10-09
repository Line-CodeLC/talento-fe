//@ts-nocheck
"use client";
import React, { useState } from "react";

import { EllipsisVertical, Paperclip, SendIcon } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RequestDocumentForm } from "../../components/RequestDocumentForm";
import { QuoteForm } from "../../components/QuoteForm";
export const CompanyChat = () => {
  const [modalContent, setModalContent] = useState<string | null>(null);

  const handleModalOpen = (content: string) => {
    setModalContent(content);
  };

  const renderModalContent = () => {
    switch (modalContent) {
      case "View":
        return <QuoteForm />;
      case "request":
        return (
          <div>
            <RequestDocumentForm />
          </div>
        );

      default:
        return null;
    }
  };
  const [selectedConvo, setSelectedConvo] = useState(null);
  const [message, setMessage] = useState("");

  const dummyConversations = [
    {
      id: "1",
      participants: [{ id: 1, name: "John Doe" }],
      messages: [
        {
          id: "m1",
          message: "Hello!",
          senderId: 1,
          timestamp: Date.now() - 10000,
        },
        {
          id: "m2",
          message: "How are you?",
          senderId: 1,
          timestamp: Date.now() - 5000,
        },
      ],
    },
    {
      id: "2",
      participants: [{ id: 2, name: "Jane Smith" }],
      messages: [
        {
          id: "m3",
          message: "Hey there!",
          senderId: 2,
          timestamp: Date.now() - 8000,
        },
      ],
    },
  ];

  return (
    <div className=" h-screen m-5">
      <div className="font-semibold text-2xl mb-5"> Driver- ABC Enterprise</div>
      <div className="grid grid-cols-4 h-[90vh]">
        <div className="bg-white  border border-[#D5DDE2] p-4 text-black">
          <div className="font-semibold text-xl">All Chats</div>
          <Input placeholder="Enter your Name" className="w-full mt-2" />
          <div className="mt-6 h-[90%]  overflow-auto">
            {dummyConversations.map((convo) => (
              <div
                key={convo.id}
                className={`cursor-pointer py-2 px-3 bg-white rounded-lg mb-2 hover:bg-gray-200 ${
                  selectedConvo?.id === convo.id ? "bg-[#EBEBEB]" : ""
                }`}
                onClick={() => setSelectedConvo(convo)}
              >
                <div className="flex gap-3 items-center  rounded-md">
                  <div className="">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Mangekyou_Sharingan_Sasuke_%28Eternal%29.svg/768px-Mangekyou_Sharingan_Sasuke_%28Eternal%29.svg.png"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                      {" "}
                      {convo.participants[0].name}{" "}
                      <span className="text-[#545454] text-xs"> 4:59 pm </span>{" "}
                    </div>
                    <div>
                      <span className="text-sm">You</span>:{" "}
                      <span className="text-[#64748B] text-sm">
                        {" "}
                        {convo.messages[convo.messages.length - 1].message}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedConvo ? (
          <div className="bg-white col-span-3 h-full  border border-[#D5DDE2]  flex flex-col">
            <div className="flex justify-between items-center">
              <div className=" text-blackl p-4 flex items-center gap-3">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Mangekyou_Sharingan_Sasuke_%28Eternal%29.svg/768px-Mangekyou_Sharingan_Sasuke_%28Eternal%29.svg.png"
                  alt=""
                  width={50}
                  height={50}
                />
                <div className="flex flex-col">
                  <div> {selectedConvo ? ` John Doe ` : ""} </div>
                  <div className="text-[#64748B] text-sm">
                    {" "}
                    Last Seen 18-09-23 at 12:00 pm{" "}
                  </div>
                </div>
              </div>
              <div className="mr-5">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <EllipsisVertical />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setModalContent("View")}>
                      Quote Candidate
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setModalContent("request")}
                    >
                      Schedule a meeting
                    </DropdownMenuItem>

                    <DropdownMenuItem>View Job</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <Separator className="mt-2 mb-4" />
            <div className="flex-1 p-4 overflow-y-auto">
              {selectedConvo?.messages?.map((msg) => (
                <div
                  key={msg.id}
                  className={`max-w-md p-2 rounded-lg mb-2  ${
                    1 === msg.senderId
                      ? "bg-blue-500 flex ml-[400px] text-white"
                      : "bg-[#EBEBEB] text-black"
                  }`}
                >
                  <div className="flex justify-between w-full">
                    <div>{msg.message}</div>
                    <div className="text-xs mt-6">
                      {new Date(msg?.timestamp).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white shadow-lg flex items-center  gap-2">
              <Paperclip className="cursor-pointer" />
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 border rounded-lg p-2 mr-2 focus:outline-none"
                placeholder="Type a message..."
              />
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
                <SendIcon />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">Click on the User You want to Chat</div>
        )}
      </div>
      {modalContent && (
        <Dialog
          open={!!modalContent}
          onOpenChange={(open) => !open && setModalContent(null)}
        >
          <DialogContent className="sm:max-w-[725px] max-h-[700px]">
            {renderModalContent()}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
