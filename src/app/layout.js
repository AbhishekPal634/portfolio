import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Abhishek Pal",
  description: "",
  icons: {
    icon: "/code-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.className} ${ovo.className} scroll-smooth`}
    >
      <body className="antialiased leading-8 overflow-x-hidden dark:bg-dark-theme dark:text-white">
        {children}
      </body>
    </html>
  );
}
