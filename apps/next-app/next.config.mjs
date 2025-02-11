import path from "path";
import { config } from "dotenv";


// load .env file from root of the project
const rootEnvVariables = config({
  path: path.resolve(new URL('.', import.meta.url).pathname, "../../.env"), 
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  env: rootEnvVariables.parsed
}

export default nextConfig
