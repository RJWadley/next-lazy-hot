import { lazy } from "react";

const Sample = lazy(() => import("./sample"));

export default function Home() {
	return (
		<div>
			hello!!!
			<Sample />
		</div>
	);
}
