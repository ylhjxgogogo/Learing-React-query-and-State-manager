import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";
const config = `{
  defaultOptions: {
    queries: {
      retry: 3,
      gcTime: 300_000, //garbage collect 以前叫 cacheTime 表示的是多少毫秒后被回收
      staleTime: 10 * 1000, //确定数据需要多新鲜;表示每次请求的数据10秒内都是新鲜的
      refetchOnWindowFocus: false, //默认为true,代表离开窗口重新聚集时，要不要发送请求
      refetchOnMount: false, //组件挂载时发送请求
      refetchOnReconnect: false, //客户端重新连接后发送请求
    },
  },
}`;
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
