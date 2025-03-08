import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Paperclip, Mic, CornerDownLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Chat input component for typing and sending messages
 * 
 * @component
 */
export interface ChatInputProps extends React.HTMLAttributes<HTMLFormElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  placeholder?: string;
  isLoading?: boolean;
  onAttachFile?: () => void;
  onMicrophoneClick?: () => void;
  as?: React.ElementType;
}

export const ChatInput = forwardRef<HTMLFormElement, ChatInputProps>(
  ({
    className,
    value,
    onChange,
    onSubmit,
    placeholder = "Type a message...",
    isLoading = false,
    onAttachFile,
    onMicrophoneClick,
    as: Component = "form",
    ...props
  }, ref) => {
    const Comp = Component as React.ElementType;
    return (
      <Comp
        ref={ref}
        className={cn("flex items-center gap-2 border-t bg-background p-4", className)}
        onSubmit={onSubmit}
        {...props}
      >
        {onAttachFile && (
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={onAttachFile}
            className="flex-shrink-0"
          >
            <Paperclip className="h-5 w-5" />
            <span className="sr-only">Attach file</span>
          </Button>
        )}
        
        <div className="relative flex-1">
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isLoading}
          />
        </div>
        
        {onMicrophoneClick && (
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={onMicrophoneClick}
            className="flex-shrink-0"
          >
            <Mic className="h-5 w-5" />
            <span className="sr-only">Use microphone</span>
          </Button>
        )}
        
        <Button
          type="submit"
          size="icon"
          disabled={!value.trim() || isLoading}
          className="flex-shrink-0"
        >
          <CornerDownLeft className="h-5 w-5" />
          <span className="sr-only">Send message</span>
        </Button>
      </Comp>
    );
  }
);

ChatInput.displayName = "ChatInput";
