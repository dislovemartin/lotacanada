"use client";

import { useState, FormEvent, useCallback, ReactNode } from "react";
import { Paperclip, Mic } from "lucide-react";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleProps,
  ChatBubbleAvatarProps,
  ChatBubbleMessageProps
} from "@/components/ui/chat-bubble";
import { ChatMessageList, ChatMessageListProps } from "@/components/ui/chat-message-list";
import { ChatInput, ChatInputProps } from "@/components/ui/chat-input";
import { MessageLoading } from "@/components/ui/message-loading";

/**
 * Message type definition for chat messages
 */
export interface ChatMessage {
  id: number | string;
  content: string;
  sender: "user" | "ai";
  timestamp?: Date;
}

/**
 * Props for the ChatInterface component
 */
export interface ChatInterfaceProps {
  initialMessages?: ChatMessage[];
  onSendMessage?: (message: string) => Promise<string>;
  userAvatar?: string;
  aiAvatar?: string;
  className?: string;
}

/**
 * ChatInterface component for displaying a complete chat interface with messages and input
 * 
 * @component
 */
export function ChatInterface({
  initialMessages = [],
  onSendMessage,
  userAvatar,
  aiAvatar,
  className,
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Handle form submission for sending a new message
   */
  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      let aiResponse = "I'm processing your request...";
      
      if (onSendMessage) {
        aiResponse = await onSendMessage(input);
      } else {
        // Simulate AI response if no handler is provided
        await new Promise((resolve) => setTimeout(resolve, 1000));
        aiResponse = "This is a simulated AI response to your message.";
      }

      const aiMessage: ChatMessage = {
        id: Date.now() + 1,
        content: aiResponse,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      
      // Add error message
      const errorMessage: ChatMessage = {
        id: Date.now() + 1,
        content: "Sorry, there was an error processing your request. Please try again.",
        sender: "ai",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, onSendMessage]);

  /**
   * Handle file attachment (placeholder implementation)
   */
  const handleAttachFile = useCallback(() => {
    // Placeholder for file attachment functionality
    console.log("File attachment clicked");
  }, []);

  /**
   * Handle microphone click (placeholder implementation)
   */
  const handleMicrophoneClick = useCallback(() => {
    // Placeholder for microphone functionality
    console.log("Microphone clicked");
  }, []);

  return (
    <div className={`h-[500px] border bg-background rounded-lg flex flex-col ${className}`}>
      <div className="flex-1 overflow-hidden">
        <ChatMessageList as="div">
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              variant={message.sender === "user" ? "primary" : "secondary"}
              align={message.sender === "user" ? "end" : "start"}
              as="div"
            >
              <div className="flex items-start gap-2.5">
                {message.sender === "ai" && (
                  <ChatBubbleAvatar 
                    src={aiAvatar} 
                    fallback="AI"
                    className="bg-primary/10"
                    as="div"
                  />
                )}
                <ChatBubbleMessage as="div">
                  {message.content}
                </ChatBubbleMessage>
                {message.sender === "user" && (
                  <ChatBubbleAvatar 
                    src={userAvatar} 
                    fallback="You"
                    className="bg-primary"
                    as="div"
                  />
                )}
              </div>
            </ChatBubble>
          ))}
          {isLoading && (
            <ChatBubble variant="secondary" align="start" as="div">
              <div className="flex items-start gap-2.5">
                <ChatBubbleAvatar 
                  src={aiAvatar} 
                  fallback="AI"
                  className="bg-primary/10"
                  as="div"
                />
                <ChatBubbleMessage as="div">
                  <div className="flex items-center justify-center p-2">
                    <MessageLoading />
                  </div>
                </ChatBubbleMessage>
              </div>
            </ChatBubble>
          )}
        </ChatMessageList>
      </div>
      <ChatInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        onAttachFile={handleAttachFile}
        onMicrophoneClick={handleMicrophoneClick}
        placeholder="Type your message..."
        as="form"
      />
    </div>
  );
}
