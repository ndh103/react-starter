import { usePostTaskQuery } from "@/apis/tasks.api";
import { DataTable } from "@/components/ui/data-table/data-table";
import { ColumnDef } from "@tanstack/react-table";
import TableOptionsMenu from "./components/TableOptionsMenu";
import { usePagination } from "@/components/ui/data-table/use-pagination";
import { useSorting } from "@/components/ui/data-table/use-sorting.hook";
import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";

const columns: ColumnDef<TaskItem>[] = [
	{
		accessorKey: "name",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Name" />
		),
		cell: ({ row }) => {
			return <div className="font-medium">{row.getValue("name")}</div>;
		},
		enableSorting: true,
	},
	{
		accessorKey: "content",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Content" />
		),
		enableSorting: true,
	},
	{
		accessorKey: "dueDate",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Due Date" />
		),
		enableSorting: true,
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const task = row.original;

			return <TableOptionsMenu item={task} />;
		},
		enableSorting: false,
	},
];

export default function TasksHome() {
	const { limit, skip, pagination, onPaginationChange } = usePagination();
	const { sorting, onSortingChange, field, order } = useSorting();

	const {
		isPending,
		isFetching,
		data: taskQueryResponse,
	} = usePostTaskQuery({
		limit,
		offset: skip,
		sort: { field, order },
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
				sorting={sorting}
				onSortingChange={onSortingChange}
			/>
		</div>
	);
}
