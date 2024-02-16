import { Column } from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

interface DataTableColumnHeaderProps<TData, TValue>
	extends React.HTMLAttributes<HTMLDivElement> {
	column: Column<TData, TValue>;
	title: string;
}

export function DataTableColumnHeader<TData, TValue>({
	column,
	title,
	className,
}: DataTableColumnHeaderProps<TData, TValue>) {
	if (!column.getCanSort()) {
		return <div className={cn(className)}>{title}</div>;
	}

	return (
		<div
			className={cn("flex items-center space-x-2 cursor-pointer", className)}
			{...(column.getCanSort()
				? { onClick: column.getToggleSortingHandler() }
				: {})}
		>
			<span>{title}</span>
			{column.getIsSorted() === "asc" ? (
				<ArrowUp className="w-4 h-4" />
			) : column.getIsSorted() === "desc" ? (
				<ArrowDown className="w-4 h-4" />
			) : (
				<ArrowUpDown className="w-4 h-4" />
			)}
		</div>
	);
}
