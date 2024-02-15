import { useQueryGetEventListAsync } from "@/apis/events.api";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import EventsTableOptionsMenu from "./components/EventsTableOptionsMenu";

const columns: ColumnDef<EventItem>[] = [
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
		accessorKey: "eventDate",
		header: () => <div className="font-medium text-black">Event Date</div>,
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const eventItem = row.original;

			return <EventsTableOptionsMenu item={eventItem} />;
		},
	},
];

export default function EventsHome() {
	const { isPending, isFetching, data: events } = useQueryGetEventListAsync();

	if (isPending) return "Fetching new data...";

	if (isFetching) return "Fetching stale data...";

	return (
		<div>
			<div>Event Home</div>
			<DataTable columns={columns} data={events || []} />
		</div>
	);
}
