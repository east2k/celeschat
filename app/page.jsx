import readUserSession from "@/auth-actions/readUserSession";
import Body from "@/components/Body";
import Header from "@/components/Header";
import { redirect } from "next/navigation";

export default async function Home() {
    const { data } = await readUserSession();
    if (!data.user) {
        redirect("/login");
    }

    return (
        <main className="font-main bg-vector-950 text-white">
            <div className="flex flex-col h-screen">
                <Header />
                <Body />
            </div>
        </main>
    );
}
