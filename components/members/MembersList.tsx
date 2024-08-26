import TableHeaderItem from "../ui/table/TableHeaderItem";
import TableRowDataItem from "../ui/table/TableRowDataItem";

const MembersTableRow = () => {
  return (
    <tr className="bg-gray-100 border border-gray-200 rounded-md">
      <TableRowDataItem item="Jane Cooper" />
      <TableRowDataItem item="cooper@example.com" />
      <TableRowDataItem item="Active" />
    </tr>
  );
};

export default function MembersList() {
  return (
    <table className="text-left w-full">
      <thead>
        <tr>
          <TableHeaderItem item="User" />
          <TableHeaderItem item="Email Address" />
          <TableHeaderItem item="Status" />
        </tr>
      </thead>
      <tbody>
        <MembersTableRow />
        <MembersTableRow />
        <MembersTableRow />
        <MembersTableRow />
      </tbody>
    </table>
  );
}
