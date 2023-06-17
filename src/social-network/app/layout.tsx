import SessionProvider from "@/context/NextAuthContext/sessionProvider";

import "@/styles/globals.css";

export const metadata = {
  title: "Hackbook",
  description: "Stay connected with your hacker friends",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  <script src="./debugReactDevelopperTools.js"></script>;
  return (
    <html lang="en">
      <head />
      <body className="w-full h-full flex flex-col bg-white text-textColor font-body">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
