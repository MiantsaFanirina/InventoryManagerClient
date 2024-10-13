

import { Metadata } from "next";
import NavbarComponent from "../../components/Navbar";
import { SidebarMenu } from "../../components/Sidebar";


export const metadata: Metadata = {
    title: 'Mon portefeuille',
    description: 'Mon portefeuille',
}
function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full h-screen flex flex-col overflow-hidden">
            <NavbarComponent />
            <div className="flex h-full flex-1 overflow-hidden">
                <div className="h-full hidden sm:block">
                    <SidebarMenu />
                </div>
                <main className="w-full h-full overflow-y-auto pb-10">{children}</main>
            </div>
        </div>
    );
}


export default RootLayout;
