import { useQueryListTaskAsync } from "@/apis/tasks.api";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import TableOptionsMenu from "./components/TableOptionsMenu";

const columns: ColumnDef<TaskItem>[] = [
	{
		accessorKey: "name",
		header: () => <div className="font-medium text-black">Name</div>,
		cell: ({ row }) => {
			return <div className="font-medium">{row.getValue("name")}</div>;
		},
	},
	{
		accessorKey: "content",
		header: () => <div className="font-medium text-black">Content</div>,
	},
	{
		accessorKey: "dueDate",
		header: () => <div className="font-medium text-black">Due Date</div>,
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const task = row.original;

			return <TableOptionsMenu item={task} />;
		},
	},
];

export default function TasksHome() {
	const { isPending, isFetching, data: tasks } = useQueryListTaskAsync();

	if (isPending) return "Fetching new data...";

	if (isFetching) return "Fetching stale data...";

	return (
		<div>
			<h2 className="scroll-m-20 border-b pb-4 text-3xl font-semibold tracking-tight first:mt-0 ">
				Tasks
			</h2>
			<DataTable columns={columns} data={tasks || []} />
		</div>
	);
}
