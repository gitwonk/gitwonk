"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

export function RootWrapper({ children }) {
  return (
    // TODO: remove forcedTheme and enableSystem when dark mode is ready
    <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false}>
      <Toaster position="top-center" />
      {children}
      <VercelAnalytics />
    </ThemeProvider>
  );
}
