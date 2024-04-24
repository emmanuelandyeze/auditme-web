import React from 'react';
import {
	FaCircleArrowDown,
	FaCircleArrowRight,
    FaRecycle,
} from 'react-icons/fa6';
import { CiSaveUp2 } from 'react-icons/ci';
import { BiSolidReport } from 'react-icons/bi';
import { RiUpload2Fill } from 'react-icons/ri';
import { LuFileBarChart } from 'react-icons/lu';


const Process = () => {
	return (
		<div className="bg-[#004AAD0A] mt-10 pt-5 pb-10 lg:pt-10 lg:pb-20">
			<div className="items-center justify-center align-middle flex flex-col gap-5 lg:gap-10">
				<h1 className="font-[600] text-[24px] lg:text-[40px] text-[#121212]">
					How it works
				</h1>
				<div className="flex flex-col lg:flex-row items-center justify-center gap-[20px]">
					<div className="h-[300px] flex flex-col items-center align-middle justify-center bg-[#fff] w-[300px] rounded-[24px] border-[1px] border-[#12121233]">
						<RiUpload2Fill
							color="#004AAD"
							size={54}
							className="text-center mb-5"
						/>
						<h1 className="fofnt-[400] text-[20px] text-center w-40">
							Upload documents
						</h1>
					</div>
					<FaCircleArrowRight
						size={34}
						color="#BDBDBD"
						className="hidden lg:block"
					/>
					<FaCircleArrowDown
						size={34}
						color="#BDBDBD"
						className="block lg:hidden"
					/>
					<div className="h-[300px] flex flex-col items-center align-middle justify-center bg-[#fff] w-[300px] rounded-[24px] border-[1px] border-[#12121233]">
						<FaRecycle
							color="#004AAD"
							size={54}
							className="text-center mb-5"
						/>
						<h1 className="fofnt-[400] text-[20px] text-center w-40">
							Process documents
						</h1>
					</div>
					<FaCircleArrowRight
						size={34}
						color="#BDBDBD"
						className="hidden lg:block"
					/>
					<FaCircleArrowDown
						size={34}
						color="#BDBDBD"
						className="block lg:hidden"
					/>
					<div className="h-[300px] flex flex-col items-center align-middle justify-center bg-[#fff] w-[300px] rounded-[24px] border-[1px] border-[#12121233]">
						<LuFileBarChart
							color="#004AAD"
							size={54}
							className="text-center mb-5"
						/>
						<h1 className="fofnt-[400] text-[20px] text-center w-36">
							Audit report in 7 days
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Process;
