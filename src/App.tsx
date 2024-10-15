// src/App.tsx
import React from "react";
import PageRoutes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PageRoutes />
    </QueryClientProvider>
  );
};

export default App;
