import Image from "next/image";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import SubLanding from './components/SubLanding';
import Process from './components/Process';
import Workflow from './components/Workflow';
import Footer from './components/Footer';

export default function Home() {
	return (
		<main className="min-h-screen max-w-full overflow-hidden bg-[#ffffff]">
			<div>
				<div className="">
					<Navbar />
				</div>
				<div className="">
					<div className="bg-[#F8FBFF]  pt-10 lg:pt-20 pb-10 lg:pb-20">
						<div className="max-w-[1240px] m-auto">
							<Landing />
						</div>
					</div>
					<div className="max-w-[1240px] pt-10 md:pt-0 m-auto">
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
