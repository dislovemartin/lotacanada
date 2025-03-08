import { MCPClient } from "@/components/ui/mcp-client";

export const metadata = {
  title: "LotaCanada MCP | Model Context Protocol",
  description: "Interact with the LotaCanada Model Context Protocol server",
};

export default function MCPPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Model Context Protocol</h1>
      <p className="text-lg mb-8">
        This page demonstrates the integration with our custom MCP server, which provides AI assistants with additional capabilities to interact with the LotaCanada website.
      </p>
      
      <MCPClient />
    </div>
  );
}
