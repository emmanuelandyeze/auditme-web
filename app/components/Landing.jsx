import Image from 'next/image';
import { MdCheckBox } from 'react-icons/md';

export default function Landing() {
	return (
		<div className="flex items-center max-w-7xl mx-auto">
			<div className="w-2/3 pr-0 flex flex-col gap-[32px]">
				<h1 className="text-[56px] font-[700] leading-[64px] mb-4 text-[#121212] w-full">
					Streamline your audit <br /> process with <br />{' '}
					AuditMe
				</h1>
				<p className="text-[18px] leading-[28px] font-[500] text-[#121212] mb-4">
					Empower your business with smart auditing
					solutions,
					<br /> unlock the power of digital auditing for
					SMEs. <br /> Elevate, simplify and secure your
					audits today.
				</p>
				<div className="mb-10 gap-[56px] flex flex-row items-center">
					<div className="w-[117px] gap-[8px] flex flex-row items-center">
						<MdCheckBox size={24} color="#121212" />
						<p className="text-[16px]">Saves time</p>
					</div>
					<div className="w-[117px] gap-[8px] flex flex-row items-center">
						<MdCheckBox size={24} color="#121212" />
						<p className="text-[16px]">Saves cost</p>
					</div>
					<div className="w-[117px] gap-[8px] flex flex-row items-center">
						<MdCheckBox size={24} color="#121212" />
						<p className="text-[16px]">Accurate</p>
					</div>
				</div>
				<div>
					<button className="bg-[#121212] px-[48px] py-[20px] text-white rounded-lg text-[18px] font-[600] hover:bg-[#121212] hover:text-white leading-[28px]">
						Get Started
					</button>
				</div>
			</div>

			<div
				style={{
					width: '50%',
					height: '50%',
					position: 'relative',
				}}
			>
				<Image
					alt="App screenshot"
					src="/images/landing.png"
					width={700}
					height={700}
					objectFit="contain"
				/>
			</div>
		</div>
	);
}
