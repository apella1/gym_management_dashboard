"use client";

import { SidebarNavItem } from "@/types/components/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFingerprint, FaSlideshare } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { GrAnalytics } from "react-icons/gr";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { PiCaretDown, PiUsersThreeLight } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import ClassItem from "../dashboard/ClassItem";

const sidebarNavItems: SidebarNavItem[] = [
  {
    title: "Dashboard",
    route: "/dashboard",
    icon: <RxDashboard />,
  },
  {
    title: "Community",
    route: "/community",
    icon: <FaSlideshare />,
  },
  {
    title: "Analytics",
    route: "/analytics",
    icon: <GrAnalytics />,
  },
  {
    title: "Members",
    route: "/members",
    icon: <PiUsersThreeLight />,
  },
];

const settingNavItem: SidebarNavItem = {
  title: "Settings",
  route: "/settings",
  icon: <FaGear />,
};

export default function SideBar() {
  const pathname = usePathname();
  return (
    <section className="min-h-screen px-4 py-12 flex flex-col justify-between space-y-8 bg-gray-100 text-gray-600">
      <section className="flex flex-col space-y-8">
        <div className="flex items-center space-x-4 px-2 pb-6">
          <FaFingerprint className="text-2xl" />
          <h1 className="font-semibold text-lg font-sen">Gym Name</h1>
        </div>
        <div className="flex flex-col space-y-4">
          {sidebarNavItems.map((navItem) => (
            <Link
              href={navItem.route}
              key={navItem.title}
              className={`w-full flex items-center justify-between px-3 py-3 hover:bg-blue-700 hover:text-white rounded-[4px] ${
                (pathname === navItem.route && "bg-blue-700 text-white") ||
                (pathname.includes(navItem.route) && "bg-blue-700 text-white")
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-xl">{navItem.icon}</div>
                <p className="text-sm">{navItem.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <section className="px-3 flex flex-col space-y-2 pt-8">
          <h3 className="text-xs font-medium text-gray-600">Classes</h3>
          <div className="flex flex-col space-y-1">
            <ClassItem classType="Swimming" numberOfClasses={10} />
            <ClassItem classType="Yoga" numberOfClasses={5} />
            <ClassItem classType="Pilates" numberOfClasses={3} />
            <ClassItem classType="Dance" numberOfClasses={2} />
            <ClassItem classType="Gymnastics" numberOfClasses={1} />
            <div className="flex items-center space-x-3 py-2">
              <PiCaretDown className="text-lg" />
              <p className="text-xs">Show more</p>
            </div>
          </div>
        </section>
        <section className="flex flex-col space-y-4 py-8">
          <Link
            href={settingNavItem.route}
            key={settingNavItem.title}
            className={`w-full flex items-center justify-between px-3 py-3 hover:bg-blue-700 hover:text-white rounded-[4px] ${
              (pathname === settingNavItem.route && "bg-blue-700 text-white") ||
              (pathname.includes(settingNavItem.route) &&
                "bg-blue-700 text-white")
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="text-xl">{settingNavItem.icon}</div>
              <p className="text-sm">{settingNavItem.title}</p>
            </div>
          </Link>
          <div className="flex items-center space-x-6 pl-6">
            <button>
              <IoSunnyOutline className="text-xl" />
            </button>
            <button>
              <IoMoonOutline className="text-xl" />
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}
