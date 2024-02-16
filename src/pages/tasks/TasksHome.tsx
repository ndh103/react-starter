import { usePostTaskQuery } from "@/apis/tasks.api";
import { DataTable } from "@/components/ui/data-table/data-table";
import { ColumnDef } from "@tanstack/react-table";
import TableOptionsMenu from "./components/TableOptionsMenu";
import { usePagination } from "@/components/ui/data-table/use-pagination";
import { useSorting } from "@/components/ui/data-table/use-sorting.hook";
import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { TaskItem, TaskStatus } from "@/apis/types/task-item.type";
import clsx from "clsx";

function getTaskStatusDisplayText(taskStatus: TaskStatus) {
	switch (taskStatus) {
		case TaskStatus.NotStarted:
			return "Not Started";

		case TaskStatus.InProgress:
			return "In-Progress";

		case TaskStatus.Done:
			return "Done";

		default:
			return "";
	}
}

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
		accessorKey: "status",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Status" />
		),
		cell: ({ row }) => {
			const status: number = row.getValue("status");
			return (
				<Badge
					variant="outline"
					className={clsx({
						"bg-primary text-primary-foreground": status === TaskStatus.Done,
						"bg-green-400": status === TaskStatus.InProgress,
						"bg-gray-300": status === TaskStatus.NotStarted,
					})}
				>
					{getTaskStatusDisplayText(status)}
				</Badge>
			);
		},
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
