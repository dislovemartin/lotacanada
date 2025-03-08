"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ToastDemoPage() {
  const { addToast, removeAllToasts } = useToast();
  const [title, setTitle] = useState("Toast Notification");
  const [description, setDescription] = useState("This is a toast notification example.");
  const [variant, setVariant] = useState<"default" | "success" | "error" | "warning" | "info">("default");
  const [duration, setDuration] = useState(5000);

  const handleShowToast = () => {
    addToast({
      title,
      description,
      variant,
      duration,
    });
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Toast Component Demo</h1>
      <p className="text-lg mb-8">
        This page demonstrates the Toast notification component that can be used throughout the application to provide feedback to users.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold">Toast Configuration</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">
                Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                rows={3}
              />
            </div>
            
            <div>
              <label htmlFor="variant" className="block text-sm font-medium mb-1">
                Variant
              </label>
              <select
                id="variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value as any)}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="default">Default</option>
                <option value="success">Success</option>
                <option value="error">Error</option>
                <option value="warning">Warning</option>
                <option value="info">Info</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="duration" className="block text-sm font-medium mb-1">
                Duration (ms)
              </label>
              <input
                id="duration"
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded-md"
                min={1000}
                step={1000}
              />
            </div>
          </div>
          
          <div className="flex space-x-4 pt-4">
            <button
              onClick={handleShowToast}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Show Toast
            </button>
            
            <button
              onClick={removeAllToasts}
              className="px-4 py-2 bg-muted text-muted-foreground rounded-md hover:bg-muted/90 transition-colors"
            >
              Clear All Toasts
            </button>
          </div>
        </div>
        
        <div className="space-y-6 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold">Usage Examples</h2>
          
          <div className="space-y-4">
            <button
              onClick={() => addToast({
                title: "Success",
                description: "Your changes have been saved successfully.",
                variant: "success",
              })}
              className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Success Toast
            </button>
            
            <button
              onClick={() => addToast({
                title: "Error",
                description: "There was an error processing your request.",
                variant: "error",
              })}
              className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Error Toast
            </button>
            
            <button
              onClick={() => addToast({
                title: "Warning",
                description: "Your session will expire in 5 minutes.",
                variant: "warning",
              })}
              className="w-full px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
            >
              Warning Toast
            </button>
            
            <button
              onClick={() => addToast({
                title: "Info",
                description: "A new version of the application is available.",
                variant: "info",
              })}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Info Toast
            </button>
            
            <button
              onClick={() => addToast({
                description: "This is a toast without a title.",
              })}
              className="w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Toast Without Title
            </button>
            
            <button
              onClick={() => {
                for (let i = 0; i < 3; i++) {
                  addToast({
                    title: `Multiple Toast ${i + 1}`,
                    description: `This is toast number ${i + 1} of 3.`,
                    variant: i === 0 ? "success" : i === 1 ? "warning" : "info",
                  });
                }
              }}
              className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Multiple Toasts
            </button>
          </div>
          
          <div className="mt-8 p-4 bg-muted rounded-md">
            <h3 className="text-lg font-medium mb-2">Code Example</h3>
            <pre className="text-sm bg-muted-foreground/10 p-4 rounded overflow-x-auto">
              <code>{`import { useToast } from "@/hooks/use-toast";

export function MyComponent() {
  const { addToast } = useToast();
  
  const handleAction = () => {
    // Show a success toast
    addToast({
      title: "Success",
      description: "Action completed successfully",
      variant: "success",
      duration: 5000, // Optional, defaults to 5000ms
    });
  };
  
  return (
    <button onClick={handleAction}>
      Perform Action
    </button>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
