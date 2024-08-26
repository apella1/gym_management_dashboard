import { FaUserCircle } from "react-icons/fa";

export default function UserProfile() {
  return (
    <section className="flex flex-col space-y-4 pb-8">
      <div className="flex items-center space-x-4 justify-between">
        <h2 className="text-base font-semibold">Profile</h2>
        <button className="py-1.5 px-4 text-xs bg-gray-500 rounded-[4px] text-white">
          Edit
        </button>
      </div>
      <div className="flex flex-col space-y-1 items-center justify-center">
        <div>
          <FaUserCircle className="text-[100px] text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-center">Jacob Smith</h3>
        <p className="text-sm font-medium text-center text-gray-500">
          Gym Manager
        </p>
      </div>
    </section>
  );
}
