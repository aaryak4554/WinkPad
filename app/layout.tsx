import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme_provider";
const inter = Inter({ subsets: ["latin"] });
import { AuthContextProvider } from "@/components/providers/Auth_context";

export const metadata: Metadata = {
  title: "Wink-Pad",
  description: "The Workspace where we write what you think",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
