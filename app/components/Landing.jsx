import Image from 'next/image';
import { MdCheckBox } from 'react-icons/md';
import { FiUsers } from "react-icons/fi";
import Link from 'next/link';


export default function Landing() {
	return (
		<div className="flex flex-col lg:flex-row items-start lg:items-center px-5 md:px-5 lg:px-0 max-w-7xl mx-auto">
			<div className="w-[381px] lg:w-2/3 pr-0 flex flex-col gap-[32px]">
				<h1 className="text-[32px] w-[343px] lg:w-[599px] lg:text-[56px] font-[700] leading-[40px] lg:leading-[64px] mb-1 lg:mb-4 text-[#121212]">
					Streamline your audit process with{' '}
					<br className="block md:hidden" />
					<span className="text-[#004AAD]">AuditMe</span>
				</h1>
				<p className="text-[18px] lg:text-[18px] w-[352px] lg:w-[469px] leading-[28px] font-[400] lg:font-[500] text-[#121212] mb-1 lg:mb-4">
					Empower your business with smart auditing
					solutions, unlock the power of digital auditing
					for SMEs. Elevate, simplify and secure your audits
					today.
				</p>
				<div className="mb-3 lg:mb-10 gap-[24px] lg:gap-[56px] flex flex-row items-center">
					<div className="w-[116px] lg:w-[117px] gap-[8px] flex flex-row items-center">
						<MdCheckBox size={24} color="#121212" />
						<p className="text-[14px] lg:text-[16px] text-[#121212CC]">
							Saves time
						</p>
					</div>
					<div className="w-[116px] lg:w-[117px] gap-[8px] flex flex-row items-center">
						<MdCheckBox size={24} color="#121212" />
						<p className="text-[14px] lg:text-[16px] text-[#121212CC]">
							Saves cost
						</p>
					</div>
					<div className="w-[116px] lg:w-[117px] gap-[8px] flex flex-row items-center">
						<MdCheckBox size={24} color="#121212" />
						<p className="text-[14px] lg:text-[16px] text-[#121212CC]">
							Accurate
						</p>
					</div>
				</div>
				<div>
					<Link
						href={'https://auditme-app.vercel.app/'}
						className="bg-[#121212] px-[32px] py-[10px] lg:px-[40px] lg:py-[16px] text-white rounded-lg text-[18px] font-[500] hover:bg-[#121212] hover:text-white leading-[28px]"
					>
						Get Started
					</Link>
				</div>
			</div>

			<div
				style={{
					position: 'relative',
				}}
				className="hidden md:block overflow-hidden rounded-tl-[64px] h-[512px] object-fill w-[468px] border-2  rounded-br-[64px]"
			>
				<Image
					alt="App screenshot"
					src="/images/landing5.png"
					fill={true}
					priority
					className="object-cover"
				/>
			</div>

			<div
				style={{
					position: 'relative',
				}}
				className="flex md:hidden overflow-hidden rounded-tl-[64px] mt-10 h-[397px] w-[357px] border-2  rounded-br-[64px] mx-auto"
			>
				<Image
					alt="App screenshot"
					src="/images/landing5.png"
					fill={true}
					priority
					className="object-cover"
				/>
			</div>
		</div>
	);
}
