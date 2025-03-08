"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

// Define schemas for our MCP tools
const GetWebsiteDataSchema = z.object({
  section: z.enum(["products", "events", "blog"]),
  limit: z.number().min(1).max(20).optional(),
});

const GenerateUIComponentSchema = z.object({
  type: z.enum(["button", "card", "form"]),
  style: z.enum(["minimal", "fancy", "modern"]).optional(),
  content: z.string().optional(),
});

type GetWebsiteDataParams = z.infer<typeof GetWebsiteDataSchema>;
type GenerateUIComponentParams = z.infer<typeof GenerateUIComponentSchema>;

// Define the MCP client interface
interface MCPClient {
  getWebsiteData: (params: GetWebsiteDataParams) => Promise<any>;
  generateUIComponent: (params: GenerateUIComponentParams) => Promise<{ component: string }>;
}

// Create the MCP client
const createMCPClient = (): MCPClient => {
  const baseUrl = "http://localhost:3100";

  const createJob = async (tool: string, parameters: any) => {
    const response = await fetch(`${baseUrl}/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tool, parameters }),
    });

    if (!response.ok) {
      throw new Error(`Failed to create job: ${response.statusText}`);
    }

    const { jobId } = await response.json();
    return jobId;
  };

  const getJobResult = async (jobId: string) => {
    let job;

    // Poll for job completion
    do {
      const response = await fetch(`${baseUrl}/jobs/${jobId}`);

      if (!response.ok) {
        throw new Error(`Failed to get job status: ${response.statusText}`);
      }

      job = await response.json();

      if (job.status === "running") {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    } while (job.status === "running");

    if (job.status === "failed") {
      throw new Error(`Job failed: ${job.error}`);
    }

    return job.result;
  };

  return {
    getWebsiteData: async (params: GetWebsiteDataParams) => {
      const jobId = await createJob("get_website_data", params);
      return getJobResult(jobId);
    },

    generateUIComponent: async (params: GenerateUIComponentParams) => {
      const jobId = await createJob("generate_ui_component", params);
      return getJobResult(jobId);
    },
  };
};

// Create a React component to interact with the MCP server
export function MCPClient() {
  const [result, setResult] = useState<any>(null);
  const [generatedComponent, setGeneratedComponent] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"data" | "component">("data");

  const { addToast } = useToast();
  const mcpClient = createMCPClient();

  // Form for getting website data
  const dataForm = useForm<GetWebsiteDataParams>({
    resolver: zodResolver(GetWebsiteDataSchema),
    defaultValues: {
      section: "products",
      limit: 5,
    },
  });

  // Form for generating UI components
  const componentForm = useForm<GenerateUIComponentParams>({
    resolver: zodResolver(GenerateUIComponentSchema),
    defaultValues: {
      type: "button",
      style: "modern",
      content: "",
    },
  });

  const handleGetData = async (data: GetWebsiteDataParams) => {
    setLoading(true);
    try {
      const result = await mcpClient.getWebsiteData(data);
      setResult(result);
      setGeneratedComponent("");
      addToast({
        title: "Data Retrieved",
        description: `Successfully fetched ${data.section} data.`,
        variant: "success",
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      setResult({ error: String(error) });
      addToast({
        title: "Error",
        description: `Failed to fetch data: ${String(error)}`,
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateComponent = async (data: GenerateUIComponentParams) => {
    setLoading(true);
    try {
      const result = await mcpClient.generateUIComponent(data);
      setGeneratedComponent(result.component);
      setResult(null);
      addToast({
        title: "Component Generated",
        description: `Successfully generated ${data.type} component.`,
        variant: "success",
      });
    } catch (error) {
      console.error("Error generating component:", error);
      setGeneratedComponent(`<div class="text-red-500">Error: ${String(error)}</div>`);
      addToast({
        title: "Error",
        description: `Failed to generate component: ${String(error)}`,
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">LotaCanada MCP Client</h2>

      <div className="mb-6">
        <div className="flex border-b border-gray-200">
          <button
            className={`py-2 px-4 ${activeTab === "data" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("data")}
          >
            Get Website Data
          </button>
          <button
            className={`py-2 px-4 ${activeTab === "component" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("component")}
          >
            Generate UI Component
          </button>
        </div>
      </div>

      {activeTab === "data" ? (
        <div>
          <form onSubmit={dataForm.handleSubmit(handleGetData)} className="mb-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Section
              </label>
              <select
                {...dataForm.register("section")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="products">Products</option>
                <option value="events">Events</option>
                <option value="blog">Blog</option>
              </select>
              {dataForm.formState.errors.section && (
                <p className="text-red-500 text-xs italic">
                  {dataForm.formState.errors.section.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Limit
              </label>
              <input
                type="number"
                {...dataForm.register("limit", { valueAsNumber: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {dataForm.formState.errors.limit && (
                <p className="text-red-500 text-xs italic">
                  {dataForm.formState.errors.limit.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
              >
                {loading ? "Loading..." : "Get Data"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <form onSubmit={componentForm.handleSubmit(handleGenerateComponent)} className="mb-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Component Type
              </label>
              <select
                {...componentForm.register("type")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="button">Button</option>
                <option value="card">Card</option>
                <option value="form">Form</option>
              </select>
              {componentForm.formState.errors.type && (
                <p className="text-red-500 text-xs italic">
                  {componentForm.formState.errors.type.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Style
              </label>
              <select
                {...componentForm.register("style")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="minimal">Minimal</option>
                <option value="fancy">Fancy</option>
                <option value="modern">Modern</option>
              </select>
              {componentForm.formState.errors.style && (
                <p className="text-red-500 text-xs italic">
                  {componentForm.formState.errors.style.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Content
              </label>
              <input
                type="text"
                {...componentForm.register("content")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Optional content"
              />
              {componentForm.formState.errors.content && (
                <p className="text-red-500 text-xs italic">
                  {componentForm.formState.errors.content.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
              >
                {loading ? "Loading..." : "Generate Component"}
              </button>
            </div>
          </form>
        </div>
      )}

      {loading && (
        <div className="mt-6 flex justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
        </div>
      )}

      {result && (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">Result:</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-60">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}

      {generatedComponent && (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">Generated Component:</h3>
          <div className="mb-4 bg-gray-100 p-4 rounded overflow-auto max-h-60">
            <pre>{generatedComponent}</pre>
          </div>
          <div className="p-4 border rounded">
            <h4 className="text-lg font-bold mb-2">Preview:</h4>
            <div dangerouslySetInnerHTML={{ __html: generatedComponent }} />
          </div>
        </div>
      )}
    </div>
  );
}
