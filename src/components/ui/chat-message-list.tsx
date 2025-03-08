import React from "react";
import { cn } from "@/lib/utils";

/**
 * Chat message list component for displaying a list of chat messages
 * 
 * @component
 */
export interface ChatMessageListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export const ChatMessageList = React.forwardRef<HTMLDivElement, ChatMessageListProps>(
  ({ className, children, as: Component = "div", ...props }, ref) => {
    const Comp = Component as React.ElementType;
    return (
      <Comp
        ref={ref}
        className={cn("flex flex-col gap-3 overflow-y-auto p-4", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

ChatMessageList.displayName = "ChatMessageList";
