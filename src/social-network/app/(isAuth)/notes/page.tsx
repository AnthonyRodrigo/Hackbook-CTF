import Note from "@/components/notes/note";
import { getUserNotes } from "@/lib/dbRequests";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NotesInterface } from "@/types/types";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Notes",
};

export default async function Notes() {
  const session = await getServerSession(authOptions);
  const userId: number = session?.user.id;
  const notes: NotesInterface[] = await getUserNotes(userId);

  return (
    <div className="mx-4 md:mx-0 md:w-9/12 mb-12 md:mb-0">
      <h1
        className="text-4xl font-bold mb-10 text-redColor relative 
            before:absolute before:rounded-lg before:content before:w-20 before:h-1 
            before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-red-200 to-redColor transition-all ease-in-out
            duration-100"
      >
        My personal notes
      </h1>
      <div className="my-10">The notes you take here are personal.</div>
      <div className="my-10 flex flex-col gap-4">
        <textarea
          className="textarea textarea-error w-full max-w-2xl"
          placeholder="New note"
        ></textarea>
        <label htmlFor="button-disabled" className="btn bg-redColor max-w-xs">
          Save
        </label>
      </div>
      <div className="divider"></div>
      <div className="my-10">
        {notes.map((note, i) => (
          <Note key={i} {...note} />
        ))}
      </div>
    </div>
  );
}
