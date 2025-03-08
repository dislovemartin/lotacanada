import React from 'react';
import { ChatInterface } from '@/components/features/chat-interface';

/**
 * Demo page for the Chat Interface component
 * 
 * This page demonstrates the usage of the ChatInterface component
 * with sample initial messages and styling.
 */
export default function ChatDemo() {
  // Sample initial messages for the demo
  const initialMessages = [
    {
      id: 1,
      content: "Hello! Welcome to the LotaXsolnAI chat interface. How can I help you today?",
      sender: "ai" as const,
      timestamp: new Date(),
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Chat Interface Demo</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Real-time message exchange</li>
            <li>Support for user and AI avatars</li>
            <li>Enhanced loading states with animated SVG indicators</li>
            <li>File attachment support (placeholder)</li>
            <li>Voice input support (placeholder)</li>
            <li>Responsive design for all screen sizes</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Implementation Notes</h2>
          <p className="text-muted-foreground">
            This component follows the architecture principles outlined in our development guidelines,
            with a focus on component reusability, proper TypeScript typing, and performance optimization
            through the use of React hooks like useCallback.
          </p>
        </div>
        
        <div>
          <ChatInterface 
            initialMessages={initialMessages}
            onSendMessage={async (message) => {
              // Simulate API call delay with a longer time to showcase the loading animation
              await new Promise(resolve => setTimeout(resolve, 2000));
              return `You said: "${message}". This is a simulated response from the AI.`;
            }}
          />
        </div>
      </div>
    </div>
  );
}
