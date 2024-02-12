import { getEventListAsync } from "@/apis/events.api";
import { useEffect, useState } from "react";

export default function EventsHome() {
	const [data, dataSet] = useState<EventItem[]>([]);

	useEffect(() => {
		async function fetchMyAPI() {
			const events = await getEventListAsync();
			dataSet(events);
		}

		fetchMyAPI()
			// make sure to catch any error
			.catch(console.error);
	}, []);

	const listItems = data.map((event: EventItem) => <li>{event.Name}</li>);

	return (
		<div>
			<div>Event Home</div>
			<ul>{listItems}</ul>
		</div>
	);
}
