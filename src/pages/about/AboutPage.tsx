import { Button } from "@/components/ui/button";

export default function AboutPage() {
	return (
		<div className="p-5">
			<h1 className="text-xl py-5">About Us!</h1>
			<div>
				<div className="py-5">Buttons</div>
				<Button variant="default" className="mx-5">
					Default
				</Button>

				<Button variant="outline" className="mx-5">
					outline
				</Button>

				<Button variant="secondary" className="mx-5">
					secondary
				</Button>

				<Button variant="destructive" className="mx-5">
					destructive
				</Button>

				<Button variant="ghost" className="mx-5">
					ghost
				</Button>

				<Button variant="link" className="mx-5">
					link
				</Button>
			</div>
		</div>
	);
}
