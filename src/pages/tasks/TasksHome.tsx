import { usePostTaskQuery } from "@/apis/tasks.api";
import { DataTable } from "@/components/ui/data-table/data-table";
import { ColumnDef } from "@tanstack/react-table";
import TableOptionsMenu from "./components/TableOptionsMenu";
import { usePagination } from "@/components/ui/data-table/usePagination.hook";

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
	const { limit, skip, pagination, onPaginationChange } = usePagination();

	const {
		isPending,
		isFetching,
		data: taskQueryResponse,
	} = usePostTaskQuery({
		limit,
		offset: skip,
	});

	let totalRecords = 0;
	if (taskQueryResponse) {
		totalRecords = taskQueryResponse.totalRecords;
	}

	const pageCount = Math.round(totalRecords / limit);

	return (
		<div>
			<h2 className="scroll-m-20 border-b pb-4 text-3xl font-semibold tracking-tight first:mt-0 ">
				Tasks
			</h2>
			<DataTable
				pageCount={pageCount}
				columns={columns}
				pagination={pagination}
				loading={isPending || isFetching}
				onPaginationChange={onPaginationChange}
				data={taskQueryResponse?.tasks || []}
			/>
		</div>
	);
}
