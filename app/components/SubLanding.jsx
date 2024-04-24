import Image from 'next/image';
import { BsUpload } from 'react-icons/bs';
import { FiUpload, FiUsers } from 'react-icons/fi';
import { CiSearch } from 'react-icons/ci';


export default function SubLanding() {
	return (
		<div className="bg-[#fff] flex align-middle justify-center mt-10 px-[30px] lg:px-0 lg:my-20 h-[464px] mx-5 lg:mx-0 lg:h-[288px] border-2 border-[#12121233] rounded-[30px]">
			<div className="flex flex-col lg:flex-row  items-center justify-center lg:items-center lg:gap-[56px] gap-[35px]">
				<div className="flex flex-row items-start w-[346px] px-5 md:px-0 lg:w-[356px] gap-[17px]">
					<div className="rounded-[50%] p-2  border-2 bg-[#12121214] border-[#00000033] object-center">
						<FiUsers size={30} />
					</div>
					<span className="ml-2 lg:w-[273px] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[32px] font-[400] text-[#000]">
						Our user friendly platform connects SMEs with
						expert auditors making audits efficient,
						transparent, and secure.
					</span>
				</div>
				<div className="flex flex-row items-start w-[356px] px-5 md:px-0 gap-[17px]">
					<div className="rounded-[50%] p-2  border-2 bg-[#12121214] border-[#00000033] object-cover">
						<BsUpload size={30} />
					</div>
					<span className="ml-2 lg:w-[273px] text-[16px] lg:text-[18px]  leading-[24px] lg:leading-[32px] font-[400] text-[#000]">
						With AuditMe, SMEs can easily upload documents
						securely, track and generate comprehensive
						reports.
					</span>
				</div>
				<div className="flex flex-row items-start w-[356px] px-5 md:px-0 gap-[17px]">
					<div className="rounded-[50%] p-2  border-2 bg-[#12121214] border-[#00000033] object-cover">
						<CiSearch size={30} />
					</div>

					<span className="ml-2 lg:w-[273px] text-[16px] lg:text-[18px]  leading-[24px] lg:leading-[32px] font-[400] text-[#000]">
						Our platform empowers SMEs to identify
						opportunities for improvement, and make informed
						business decisions.
					</span>
				</div>
			</div>
		</div>
	);
}
