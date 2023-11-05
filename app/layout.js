import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Josh Codes",
  description:
    "A Web Developer from Melbourne, Australia. Building Websites, React Apps, Showing the utilisation of Container Technologies like Docker, Kubernetes & Terraform and Cloud Services such as AWS and Azure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
