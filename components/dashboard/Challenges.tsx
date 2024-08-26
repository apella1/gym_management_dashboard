import ChallengeCard from "./ChallengeCard";

export default function Challenges() {
  return (
    <section className="flex flex-col space-y-8 pb-8">
      <h2 className="text-base font-semibold">Challenges</h2>
      <div className="flex flex-col space-y-2">
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
      </div>
    </section>
  );
}
