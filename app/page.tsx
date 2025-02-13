import { lazy } from "react";

const Sample = lazy(() => import("./sample"));

export default function Home() {
	return (
		<div>
			This is the main page. Hot reloading works fine here
			<Sample />
		</div>
	);
}
