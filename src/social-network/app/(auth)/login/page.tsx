import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

import SignInForm from "@/components/form/signInForm";

import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const metadata = {
  title: "Login",
};

const Login = async () => {
  const session = await getServerSession(authOptions);

  // If already connected, can not access to `/signin`.
  if (session?.user) redirect("/");

  return (
    <div className=" w-[90%]  md:w-[100%] border border-redColor  rounded-lg p-4 flex flex-col items-center justify-center gap-4">
      <div className="mt-1 text-xl font-semibold items-center justify-center ">
        Connection
      </div>
      <SignInForm />
    </div>
  );
};

export default Login;
