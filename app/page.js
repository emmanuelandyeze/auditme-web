import Image from "next/image";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import SubLanding from './components/SubLanding';
import Process from './components/Process';
import Workflow from './components/Workflow';
import Footer from './components/Footer';

export default function Home() {
	return (
		<main className="min-h-screen bg-[#ffffff]">
			<div>
				<div className="border-b-[1px] border-[#12121233]">
					<Navbar />
				</div>
				<div className=" pt-10 lg:pt-20">
					<div className="max-w-[1240px] m-auto">
						<Landing />
					</div>
					<div className="max-w-[1240px] m-auto">
						<SubLanding />
					</div>

					<Process />
					<Workflow />
					<Footer />
				</div>
			</div>
		</main>
	);
}
