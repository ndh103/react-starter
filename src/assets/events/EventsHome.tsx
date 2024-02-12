import { getEventListAsync } from "@/apis/events.api";
import { useQuery } from "@tanstack/react-query";

export default function EventsHome() {
	const { isPending, data } = useQuery({
		queryKey: ["events"],
		queryFn: () => getEventListAsync(),
	});

	if (isPending) return "Loading...";

	const listItems = data?.map((event: EventItem) => (
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
