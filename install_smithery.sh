#!/bin/bash

# Create necessary directories
mkdir -p ~/.smithery

# Install Smithery packages non-interactively
echo 'Installing Smithery packages...'

# Set environment variable to skip prompts
export SMITHERY_SKIP_PROMPTS=true

# Install packages one by one
npx -y @smithery/cli@latest install @smithery-ai/brave-search --client windsurf
npx -y @smithery/cli@latest install @smithery-ai/github --client windsurf
npx -y @smithery/cli@latest install @21st-dev/magic-mcp --client windsurf
npx -y @smithery/cli@latest install @browserbasehq/mcp-browserbase --client windsurf
npx -y @smithery/cli@latest install @showfive/playwright-mcp-server --client windsurf

echo 'Installation completed!'
