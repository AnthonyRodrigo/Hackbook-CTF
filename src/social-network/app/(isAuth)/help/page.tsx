export const metadata = {
  title: "Help Center",
};

export default function Notifications() {
  return (
    <div className="mx-4 md:mx-0  md:w-9/12 mb-12 md:mb-0">
      <h1
        className="text-4xl font-bold mb-10 text-redColor relative 
            before:absolute before:rounded-lg before:content before:w-20 before:h-1 
            before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-red-200 to-redColor transition-all ease-in-out
            duration-100"
      >
        Help Center
      </h1>
      <div>
        <div className="my-10">
          <h2 className="text-2xl font-bold text-redColor">Your profile</h2>
          Everything on your profile is public. You don't have to be friends
          with someone to see their profile. Adding a friend allows you to
          message them afterwards.
        </div>
        <div className="my-10">
          <h2 className="text-2xl font-bold text-redColor">Privacy Policy</h2>
          You're privary is our top priority and we are GPDR complient. Click{" "}
          <a
            href="?"
            className="underline decoration-dotted decoration-red-800 underline-offset-4"
          >
            here
          </a>{" "}
          to get more info.
        </div>
        <div className="my-10">
          <h2 className="text-2xl font-bold text-redColor">
            Are you a developer ?
          </h2>
          We provide an REST api for developers who wish to retrieve data from
          HackBook. Here is the description of the main endpoints:
          <ul>
            <li>
              <span className="font-bold">/api/posts</span> (GET) - Retrieve a
              list of latest posts from all users.
            </li>
            <li>
              <span className="font-bold">/api/user/[user id]</span> (GET) -
              Retrieve information about the user specified in URL.
            </li>
            <li>
              <span className="font-bold">/api/user/[user id]/posts</span> (GET)
              - Retrieve posts published by the user specified in the URL.
            </li>
          </ul>
        </div>

        <div id="bonus_flag_1">
          <p className="opacity-0 ">
            MrDevHacker : Ahah they will never find this secret information ! I
            hide it in the client side !
            {"THCon23{^NeverHide1nform4tionInCl13ntSide!}"}
          </p>
        </div>
      </div>
    </div>
  );
}
