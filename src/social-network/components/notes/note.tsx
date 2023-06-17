import { NotesInterface } from "@/types/types";

export default function Note(note: NotesInterface) {
  const date = new Date(note.createdOn.toString());

  return (
    <div className="card bg-base-100 shadow-xl m-4">
      <div className="card-body">
        <p className="text-lg whitespace-pre-wrap">{note.text}</p>
        <span className="text-sm">- {date.toLocaleString("en-UK")}</span>
      </div>
    </div>
  );
}
