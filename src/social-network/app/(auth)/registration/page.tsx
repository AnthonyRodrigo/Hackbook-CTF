import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

import SignUpForm from "@/components/form/signUpForm";

import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const metadata = {
  title: "Register",
};

const Registration = async () => {
  const session = await getServerSession(authOptions);

  // If already connected, can not access to `/signin`.
  if (session?.user) redirect("/");

  return (
    <div
      className=" w-[90%]  md:w-[100%] border border-redColor 
            rounded-lg p-4 flex flex-col items-center justify-center gap-4"
    >
      <div className="mt-1 text-xl font-semibold text-bgFooterLow items-center justify-center ">
        Registration
      </div>
      <SignUpForm />
    </div>
  );
};

export default Registration;
