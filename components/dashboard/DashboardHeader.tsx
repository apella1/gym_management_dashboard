import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { TbExternalLink } from "react-icons/tb";
import MembersGraph from "./MembersGraph";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Link from "next/link";

export default function DashboardHeader() {
  return (
    <header className="flex flex-col space-y-8">
      <section className="flex justify-between">
        <div className="flex flex-col space-y-1">
          <h1 className="text-lg font-semibold">Welcome Jacob!</h1>
          <p className="text-sm text-gray-500 font-medium">10th Feb, Monday</p>
        </div>
        <div className="flex space-x-4 items-center">
          <IoMdNotificationsOutline className="text-xl" />
          <MdOutlineEmail className="text-xl" />
        </div>
      </section>
      <section className="flex space-x-8 w-full">
        <div className="basis-3/5">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold">Members Counting</h2>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Weekly" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="annually">Annually</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <MembersGraph />
          </div>
        </div>
        <div className="basis-2/5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold">Popular Classes</h2>
            <Link href="">
              <TbExternalLink className="text-xl" />
            </Link>
          </div>
          <div>List of popular classes</div>
        </div>
      </section>
    </header>
  );
}
