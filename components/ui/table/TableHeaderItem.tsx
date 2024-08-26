export default function TableHeaderItem({ item }: { item: string }) {
  return (
    <th className="whitespace-nowrap px-4 py-2 text-sm font-semibold uppercase text-gray-700">
      {item}
    </th>
  );
}
