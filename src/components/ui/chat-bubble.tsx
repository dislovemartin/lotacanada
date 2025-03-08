import React from "react";
import { cn } from "@/lib/utils";

/**
 * Chat bubble component for displaying messages in a chat interface
 * 
 * @component
 */
export interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary";
  align?: "start" | "end";
  children: React.ReactNode;
  as?: React.ElementType;
}

export const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ className, variant = "primary", align = "start", children, as: Component = "div", ...props }, ref) => {
    const Comp = Component as React.ElementType;
    return (
      <Comp
        ref={ref}
        className={cn(
          "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
          align === "start" ? "self-start" : "self-end",
          variant === "primary"
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground",
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

ChatBubble.displayName = "ChatBubble";

/**
 * Avatar component for chat bubbles
 * 
 * @component
 */
export interface ChatBubbleAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  fallback?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
}

export const ChatBubbleAvatar = React.forwardRef<HTMLDivElement, ChatBubbleAvatarProps>(
  ({ className, src, fallback, children, as: Component = "div", ...props }, ref) => {
    const Comp = Component as React.ElementType;
    return (
      <Comp
        ref={ref}
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full bg-muted",
          className
        )}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={fallback || "Avatar"}
            className="h-full w-full rounded-full object-cover"
          />
        ) : fallback ? (
          <span className="text-xs font-medium">{fallback}</span>
        ) : (
          children
        )}
      </Comp>
    );
  }
);

ChatBubbleAvatar.displayName = "ChatBubbleAvatar";

/**
 * Message component for chat bubbles
 * 
 * @component
 */
export interface ChatBubbleMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export const ChatBubbleMessage = React.forwardRef<HTMLDivElement, ChatBubbleMessageProps>(
  ({ className, children, as: Component = "div", ...props }, ref) => {
    const Comp = Component as React.ElementType;
    return (
      <Comp
        ref={ref}
        className={cn("text-sm", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

ChatBubbleMessage.displayName = "ChatBubbleMessage";
