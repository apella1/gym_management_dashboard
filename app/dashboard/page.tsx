import ActivitiesCalendar from "@/components/dashboard/ActivitiesCalendar";
import Challenges from "@/components/dashboard/Challenges";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Timeline from "@/components/dashboard/Timeline";
import UserProfile from "@/components/dashboard/UserProfile";

export default function Dashboard() {
  return (
    <main className="flex space-x-10">
      <section className="basis-2/3 flex flex-col space-y-4 p-8">
        <DashboardHeader />
        <Challenges />
      </section>
      <section className="basis-1/3 flex flex-col space-y-4 bg-gray-100 p-8">
        <UserProfile />
        <ActivitiesCalendar />
      </section>
    </main>
  );
}
