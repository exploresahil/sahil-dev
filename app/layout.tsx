import type { Metadata } from "next";
import "./scss/globals.scss";
import Header from "@/components/default/header/Header";

export const metadata: Metadata = {
  title: "Sahil Satpute | Fullstack Designer",
  description:
    "full-stack designer, personal portfolio, Sahil Satpute, projects, front-end developer, react developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
