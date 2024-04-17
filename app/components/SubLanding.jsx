import Image from 'next/image';
import { FaRegCircle } from 'react-icons/fa';
export default function SubLanding() {
	return (
		<div className="bg-[#fff] flex align-middle justify-center mt-10 px-[30px] lg:px-0 lg:mt-10 h-[464px] mx-5 lg:mx-0 lg:h-[288px] shadow-sm">
			<div className="flex flex-col lg:flex-row items-center justify-center lg:items-center lg:gap-[56px] gap-[35px]">
				<div className="flex flex-row items-start w-[346px] lg:w-[356px] gap-[17px]">
					<img
						src="/images/landing2.png"
						className="rounded-[50%] h-[56px] w-[56px] border-2 border-gray-400 object-cover"
					/>
					<span className="ml-2 lg:w-[273px] text-[18px] leading-[24px] lg:leading-[32px] font-[400] text-[#000]">
						Our user friendly platform connects SMEs with
						expert auditors making audits efficient,
						transparent, and secure.
					</span>
				</div>
				<div className="flex flex-row items-start w-[356px] gap-[17px]">
					<img
						src="/images/landing.png"
						className="rounded-[50%] h-[56px] w-[56px] border-2 border-gray-400 object-cover"
					/>

					<span className="ml-2 lg:w-[273px] text-[18px] leading-[24px] lg:leading-[32px] font-[400] text-[#000]">
						With AuditMe, SMEs can easily upload documents
						securely, track and generate comprehensive
						reports.
					</span>
				</div>
				<div className="flex flex-row items-start w-[356px] gap-[17px]">
					<img
						src="/images/landing2.png"
						className="rounded-[50%] h-[56px] w-[56px] border-2 border-gray-400 object-cover"
					/>
					<span className="ml-2 lg:w-[273px] text-[18px] leading-[24px] lg:leading-[32px] font-[400] text-[#000]">
						Our platform empowers SMEs to identify
						opportunities for improvement, and make informed
						business decisions.
					</span>
				</div>
			</div>
		</div>
	);
}
