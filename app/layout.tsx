import WhatsappButton from "@/components/WhatsappButton";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}
