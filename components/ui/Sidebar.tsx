"use client";

import { SidebarNavItem } from "@/types/components/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxDashboard } from "react-icons/rx";
import { PiUsersThreeLight } from "react-icons/pi";
import { GrAnalytics } from "react-icons/gr";
import { FaFingerprint, FaSlideshare } from "react-icons/fa";

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

export default function SideBar() {
  const pathname = usePathname();
  return (
    <section className="h-screen px-4 py-12 flex flex-col justify-between space-y-8 bg-gray-100 text-gray-600 font-productSans">
      <section className="col space-y-8">
        <div className="flex items-center space-x-4 px-2 pb-6">
          <FaFingerprint className="text-2xl" />
          <h1 className="font-semibold text-lg font-sen">Gym Name</h1>
        </div>
        <div className="flex flex-col space-y-4">
          {sidebarNavItems.map((navItem) => (
            <Link
              href={navItem.route}
              key={navItem.title}
              className={`w-full flex items-center justify-between px-[10px] py-3 hover:bg-orange font-productSans rounded-[4px] ${
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
      </section>
    </section>
  );
}
