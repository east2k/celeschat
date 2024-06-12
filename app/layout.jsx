import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const schib = Schibsted_Grotesk({ subsets: ["latin"] });

export const metadata = {
    title: "CelesChat",
    description: "Chat with your friends",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={schib.className}>{children}</body>
        </html>
    );
}
