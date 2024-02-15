import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

interface DataTableProps {
	item: EventItem;
}

export default function EventsTableOptionsMenu({ item }: DataTableProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 p-0">
					<span className="sr-only">Open menu</span>
					<MoreHorizontal className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuItem
					onClick={() => navigator.clipboard.writeText(item.id.toString())}
				>
					Copy event item ID
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Edit Item</DropdownMenuItem>
				<DropdownMenuItem>Delete Item</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
