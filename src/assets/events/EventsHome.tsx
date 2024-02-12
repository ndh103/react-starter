import { useQueryGetEventListAsync } from "@/apis/events.api";

export default function EventsHome() {
	const { isPending, data: events } = useQueryGetEventListAsync();

	if (isPending) return "Loading...";

	const listItems = events?.map((event: EventItem) => (
		<li key={event.id}>
			<h1>{event.name}</h1>
			<div>{event.content}</div>
			<div>-----------</div>
		</li>
	));

	return (
		<div>
			<div>Event Home</div>
			<ul>{listItems}</ul>
		</div>
	);
}
