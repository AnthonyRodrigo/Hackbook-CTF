import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

import Footer from "@/components/footer";

import { XMarkIcon } from "@heroicons/react/24/outline";
import Script from "next/script";
import { BsFillInfoCircleFill } from "react-icons/bs";

async function About() {
  const session = await getServerSession(authOptions);
  const userId: number = session?.user.id;

  return (
    <div>
      <Script id="show-help-modal" strategy="afterInteractive">
        {`document.getElementById('help-modal').checked = true;`}
      </Script>
      <input type="checkbox" id="help-modal" className="modal-toggle" />
      <label htmlFor="help-modal" className="modal cursor-pointer">
        <label className="modal-box relative max-w-2xl bg-white" htmlFor="">
          <label
            htmlFor="help-modal"
            className="btn btn-xs btn-circle border-none absolute right-2 top-2 bg-redColor"
          >
            <XMarkIcon className="w-4" />
          </label>
          <h3 className="text-lg font-bold">About</h3>
          {(userId === 1 && (
            <p className="py-4">
              Welcome to Léa's (@lea31) account !
              <br />
              Well done! You have successfully completed this challenge. In the
              notes section, you will find what you are looking for ;)
              <br />
              Now, don't forget your goal! Go and see what's hidden on your
              girlfriend Alexia's account to see if she really cheats on you!
              <br />
              For that, the account of Kevin, Alexia's brother, can surely help
              you to find more information to find Alexia's credentials.
              <br />
              But if you are not afraid to go through difficult places and you
              are an OSINT expert, you can surely stay on this account to reach
              your goal!
            </p>
          )) ||
            (userId === 2 && (
              <p className="py-4">
                Welcome to Kevin's (@Keke) account !
                <br />
                Well done! You have successfully completed this challenge. In
                the notes section, you will find what you are looking for ;)
                <br />
                Now, don't forget your goal! Go and see what's hidden on your
                girlfriend Alexia's account to see if she really cheats on you!
                <br />
                Maybe if you pretend to be the real Kevin (her brother) in the
                messages, Alexia will answer you with love! Imagine you ask her
                the password of her account... it would be incredible that she
                answers...
              </p>
            )) ||
            (userId === 3 && (
              <p className="py-4">
                Welcome to Alexia's (@YourGirlfriend) account !
                <br />
                Well done! You have successfully completed this challenge. In
                the notes section, you will find what you are looking for ;)
                <br />
                Now you'll have to look into her account if she's cheating on
                you! Unfortunately, the messages with probably her boyfriend
                have been deleted...
              </p>
            )) ||
            (userId === 4 && (
              <p className="py-4">
                Welcome to Alexis's (@MrDevHacker) account !
                <br />
                Well done! You have successfully completed this challenge. In
                the notes section, you will find what you are looking for ;)
                <br />
                If you haven't been through Lea's, Kevin's and Alexia's accounts
                then you are very good! However, you won't have the associated
                flags because you need everyone's passwords. <br />
                Thank you for participating, don't hesitate to give us feedback!
              </p>
            )) ||
            (userId > 4 && (
              <p className="py-4">
                Hello{" "}
                <span className="font-bold">
                  {session?.user ? session.user.name : "..."}
                </span>
                , you suspect that your girlfriend Alexia is cheating on you,
                you would like to know what is hidden in her Hackbook account.
                Surely the account of her friends could allow you to access
                Alexia's account.
              </p>
            ))}
          <Footer />
        </label>
      </label>

      <div className="fixed z-20 bottom-7 right-4 py-6 md:px-8 lg:px-20">
        <label
          htmlFor="help-modal"
          className="opacity-100 w-12 h-12 md:w-16 md:h-16 cursor-pointer inline-flex border border-textColor justify-center  items-center p-3 rounded-full sshadow-md shadow-gray-800 text-redColor bg-white transition-opacity hover:bg-redColor hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-redColor"
        >
          <BsFillInfoCircleFill
            className="h-7 w-7 md:h-8 md:w-8"
            aria-hidden="true"
          />
        </label>
      </div>
    </div>
  );
}

export default About;
