import Footer from "@/components/footer";
import Image from "next/image";
import Logo from "./../../public/img/logo.png";

import { Suspense } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Loading from "./loading";

export const metadata = {
  title: {
    template: "%s | Hackbook",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <div className="fixed py-6 px-10 ">
          <label
            htmlFor="welcome-modal"
            className="opacity-100 w-12 h-12 md:w-16 md:h-16 cursor-pointer inline-flex  justify-center  items-center p-3 rounded-full sshadow-md shadow-gray-800 text-redColor bg-white transition-opacity hover:bg-redColor hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-redColor"
          >
            <BsFillInfoCircleFill
              className="h-7 w-7 md:h-8 md:w-8"
              aria-hidden="true"
            />
          </label>
        </div>

        <input type="checkbox" id="welcome-modal" className="modal-toggle" />
        <label htmlFor="welcome-modal" className="modal cursor-pointer">
          <label className="modal-box relative bg-white" htmlFor="">
            <h3 className="text-lg font-bold">
              Welcome to the CTF of the THC 2023
            </h3>
            <p className="py-4">
              Hello young ethical hacker, create your account to start !
            </p>
            <Footer />
          </label>
        </label>

        <div className="w-full h-full flex justify-center">
          <div className="flex md:py-20 justify-center flex-col md:mr-5 md:space-x-20 lg:space-x-32 md:flex-row md:justify-between items-center">
            <Image src={Logo} height={400} width={400} alt="" className="" />
            <div className="w-full">
              <div className="w-full flex flex-col items-center justify-center pb-10">
                {children}
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
