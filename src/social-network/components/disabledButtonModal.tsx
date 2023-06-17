import { XMarkIcon } from "@heroicons/react/24/outline";

export default function DisableButtonModal() {
  return (
    <>
      <input type="checkbox" id="button-disabled" className="modal-toggle" />
      <label htmlFor="button-disabled" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="button-disabled"
            className="btn btn-xs btn-circle absolute right-2 top-2 bg-redColor"
          >
            <XMarkIcon className="w-4" />
          </label>
          <h3 className="text-lg font-bold">Feature disabled</h3>
          <p className="py-4">This feature has been disabled for the CTF... </p>
        </label>
      </label>
    </>
  );
}
