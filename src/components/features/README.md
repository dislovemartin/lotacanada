# Chat Interface Components

## Overview

This directory contains the chat interface components for the LotaXsolnAI application. These components follow the architectural principles outlined in our development guidelines, with a focus on component reusability, proper TypeScript typing, and performance optimization.

## Components Structure

### UI Components

Base UI components located in `@/components/ui/`:

- `chat-bubble.tsx` - Contains components for rendering chat messages:
  - `ChatBubble` - The container for a single chat message
  - `ChatBubbleAvatar` - Avatar component for the sender
  - `ChatBubbleMessage` - The actual message content

- `chat-message-list.tsx` - Container for displaying a list of chat messages

- `chat-input.tsx` - Input component for typing and sending messages

### Feature Components

Higher-level components that compose UI components into features:

- `chat-interface.tsx` - Complete chat interface that combines all UI components

## Usage

```tsx
import { ChatInterface } from '@/components/features/chat-interface';

function MyComponent() {
  // Sample initial messages
  const initialMessages = [
    {
      id: 1,
      content: "Hello! How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ];

  // Handler for sending messages
  const handleSendMessage = async (message: string) => {
    // Call your API here
    const response = await apiClient.sendMessage(message);
    return response.text;
  };

  return (
    <ChatInterface
      initialMessages={initialMessages}
      onSendMessage={handleSendMessage}
      userAvatar="/path/to/user-avatar.png" // Optional
      aiAvatar="/path/to/ai-avatar.png" // Optional
      className="h-[600px]" // Optional custom height
    />
  );
}
```

## Architecture Decisions

1. **Component Separation**
   - UI components are separated from feature components to promote reusability
   - Each component has a single responsibility

2. **Performance Optimizations**
   - `useCallback` for memoizing event handlers
   - State management optimized for chat interactions

3. **TypeScript Integration**
   - Comprehensive type definitions for all components and props
   - Proper use of generics and interfaces

4. **Accessibility**
   - Proper ARIA attributes and screen reader support
   - Keyboard navigation support

5. **Error Handling**
   - Graceful error handling for API calls
   - User-friendly error messages

## Demo

A demo of the chat interface is available at `/demo/chat` in the application.
