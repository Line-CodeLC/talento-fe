import ReactQueryProvider from "@/_middlewares/ReactQueryProvider";
import "./globals.css";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
