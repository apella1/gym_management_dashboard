import { FaUserCircle } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";

export default function MemberDetails() {
  return (
    <section className="flex flex-col space-y-6 border border-gray-200 rounded-md px-8 py-4 shadow-md">
      <button className="flex items-center space-x-2">
        <GoArrowLeft className="text-xl text-gray-500" />
        <p className="text-sm font-medium text-gray-500">Back</p>
      </button>
      <div className="flex flex-col space-y-1 pb-8">
        <div>
          <FaUserCircle className="text-[100px] text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold">Jane Cooper</h3>
        <p className="text-sm font-medium text-gray-500">cooper@example.com</p>
      </div>
    </section>
  );
}
