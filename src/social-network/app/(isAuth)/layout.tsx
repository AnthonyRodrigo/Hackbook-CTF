import About from "../../components/about";
import DisableButtonModal from "@/components/disabledButtonModal";
import Header from "@/components/header";
import ScrollToTop from "@/components/scrollToTop";
import SideBar from "@/components/sidebar/sideBar";

import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: {
    default: "Hackbook",
    template: "%s | Hackbook",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Header />
        <div className="flex flex-row md:mt-32 px-4 md:px-12 lg:px-24 py-11  gap-24 w-full">
          <SideBar />
          <div className="md:ml-60 lg:ml-72 w-full md:w-9/12">{children}</div>
          <ScrollToTop />
        </div>
        <About />
      </Suspense>
      <DisableButtonModal />
    </div>
  );
}
