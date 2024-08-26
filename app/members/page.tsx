import MembersList from "@/components/members/MembersList";
import UsersSearch from "./UsersSearch";
import MemberDetails from "@/components/members/MemberDetails";

export default function Members() {
  return (
    <main className="flex flex-col space-y-8">
      <section className="flex items-center justify-between p-8">
        <h2 className="text-2xl font-semibold">Members</h2>
        <UsersSearch />
      </section>
      <section className="px-8 flex space-x-8">
        <div className="basis-2/3 min-w-[65%]">
          <MembersList />
        </div>
        <div className="basis-1/3">
          <MemberDetails />
        </div>
      </section>
    </main>
  );
}
