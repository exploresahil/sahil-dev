import Footer from "@/components/projects/website-sections/footer/Footer";
import Header from "@/components/projects/website-sections/header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
