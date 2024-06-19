import SideBar from "@/components/SideBar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";
// import { useRouter } from "next/navigation";

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const loggedIn = await getLoggedInUser()

    if (!loggedIn) redirect('/sign-in')
    return (
        <main className="flex w-full font-inter h-screen">
            <SideBar user={loggedIn} />
            <div>
              <div>
                <Image 
                src="/icons/logo.svg" width={30} height={30} alt="menu icon"/>
                <div>
                  <MobileNav 
                  user={loggedIn}
                  />
                </div>
              </div>
              {children}
            </div>
        </main>
    );
  }