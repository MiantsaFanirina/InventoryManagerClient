import HeaderMobile from "@/components/header-mobile";
import Sidebar from "@/components/sidebar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen">
      <Sidebar />

      <main className="md:w-2/3 h-full flex items-center justify-center xl:w-5/6 container px-6 overflow-y-scroll bg-white bg-[url('/img/bg.svg')] bg-no-repeat bg-cover bg-center bg-opacity-5">
        <HeaderMobile/>
        {children}
      </main>
    </div>
  );
}
