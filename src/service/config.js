import axios from "axios";

export const http = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn/api",
  timeout: 30000,
  headers: {
    tokenCyberSoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2OCIsIkhldEhhblN0cmluZyI6IjAzLzAyLzIwMjYiLCJIZXRIYW5UaW1lIjoiMTczODU0MDgwMDAwMCIsIm5iZiI6MTcwOTEzOTYwMCwiZXhwIjoxNzM4Njg4NDAwfQ.VqYVXUw3BdF9qomWwcX3sQPDGOUv0fkibw8n-qLHZ2I",
  },
});
