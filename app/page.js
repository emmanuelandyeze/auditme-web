import Image from "next/image";
import Navbar from './components/Navbar';
import Landing from './components/Landing';

export default function Home() {
	return (
		<main className="min-h-screen bg-[#f8f8f8]">
			<div>
				<div className="border-b-[1px] border-[#12121233]">
					<Navbar />
				</div>
				<div className="max-w-[1240px] m-auto pt-10 lg:pt-20">
					<Landing />
				</div>
			</div>
		</main>
	);
}
