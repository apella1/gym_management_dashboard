export default function ClassItem({
  classType,
  numberOfClasses,
}: {
  classType: string;
  numberOfClasses: number;
}) {
  return (
    <section className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="p-[6px] border border-gray-500 rounded-full"></div>
        <p className="text-sm">{classType}</p>
      </div>
      <p className="text-sm p-1 rounded-[2px] text-gray-700">
        {numberOfClasses}
      </p>
    </section>
  );
}
