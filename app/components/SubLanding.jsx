import Image from 'next/image';
import { BsUpload } from 'react-icons/bs';
import { FiUpload, FiUsers } from 'react-icons/fi';
import { CiSearch } from 'react-icons/ci';


export default function SubLanding() {
	return (
		<div className="bg-[#fff] flex align-middle justify-center mt-0 px-[30px] lg:px-0 lg:my-20 h-[464px] mx-5 lg:mx-0 lg:h-[288px]">
			<div className="flex flex-col lg:flex-row  items-center justify-center lg:items-center lg:gap-[56px] gap-[35px]">
				<div className="flex flex-row items-start w-[346px] px-4 md:px-0 lg:w-[356px] gap-[17px]">
					<div className="rounded-[50%] p-3 md:p-0 flex justify-center items-center h-[56px] w-[56px] bg-[#004AAD] border-[#004AAD] ">
						<svg
							width="34"
							height="26"
							viewBox="0 0 34 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M28.5625 15.7656C30.6417 17.3191 32.5 21.2305 32.5 23.6405C32.5 24.3913 31.9522 25 31.2765 25H30.5312M22.6562 9.39798C24.0013 8.61991 24.9062 7.16564 24.9062 5.5C24.9062 3.83437 24.0013 2.38009 22.6562 1.60202M2.22353 25H23.7765C24.4522 25 25 24.3913 25 23.6405C25 18.9211 21.0571 15.0952 13 15.0952C4.94286 15.0952 1 18.9211 1 23.6405C1 24.3913 1.54779 25 2.22353 25ZM17.5 5.5C17.5 7.98528 15.4853 10 13 10C10.5147 10 8.5 7.98528 8.5 5.5C8.5 3.01472 10.5147 1 13 1C15.4853 1 17.5 3.01472 17.5 5.5Z"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
					</div>
					<span className="ml-2 lg:w-[273px] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[32px] font-[400] text-[#000]">
						With expert auditors, we make audits efficient,
						transparent & secure.
					</span>
				</div>
				<div className="hidden md:block">
					<svg
						width="3"
						height="74"
						viewBox="0 0 3 74"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="3" height="74" fill="#EC6767" />
					</svg>
				</div>
				<div className="block md:hidden">
					<svg
						width="74"
						height="3"
						viewBox="0 0 74 3"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							width="3"
							height="74"
							transform="translate(0 3) rotate(-90)"
							fill="#EC6767"
						/>
					</svg>
				</div>

				<div className="flex flex-row items-start w-[356px] px-5 md:px-0 gap-[17px]">
					<div className="rounded-[50%] p-4 md:p-0 flex justify-center items-center h-[56px] w-[56px] bg-[#004AAD] border-[#004AAD] ">
						<svg
							width="26"
							height="26"
							viewBox="0 0 26 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1 17.2725V22.19C1 22.9353 1.31607 23.65 1.87868 24.177C2.44129 24.7039 3.20435 25 4 25H22C22.7956 25 23.5587 24.7039 24.1213 24.177C24.6839 23.65 25 22.9353 25 22.19V17.2725M13.0011 16.9233L13.0011 1M13.0011 1L6.14397 7.08424M13.0011 1L19.8583 7.08424"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<span className="ml-2 lg:w-[273px] text-[16px] lg:text-[18px]  leading-[24px] lg:leading-[32px] font-[400] text-[#000]">
						Upload documents securely, track & generate
						comprehensive reports.
					</span>
				</div>
				<div className="hidden md:block">
					<svg
						width="3"
						height="74"
						viewBox="0 0 3 74"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="3" height="74" fill="#EC6767" />
					</svg>
				</div>
				<div className="block md:hidden">
					<svg
						width="74"
						height="3"
						viewBox="0 0 74 3"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							width="3"
							height="74"
							transform="translate(0 3) rotate(-90)"
							fill="#EC6767"
						/>
					</svg>
				</div>
				<div className="flex flex-row items-start w-[356px] px-5 md:px-0 gap-[17px]">
					<div className="rounded-[50%] p-4 md:p-0 flex justify-center items-center h-[56px] w-[56px] bg-[#004AAD] border-[#004AAD] ">
						<svg
							width="26"
							height="26"
							viewBox="0 0 26 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20.0384 20.2L25 25M12.1429 6.14286C14.9832 6.14286 17.2857 8.44539 17.2857 11.2857M23.4 12.2C23.4 18.3856 18.3856 23.4 12.2 23.4C6.01441 23.4 1 18.3856 1 12.2C1 6.01441 6.01441 1 12.2 1C18.3856 1 23.4 6.01441 23.4 12.2Z"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
					</div>

					<span className="ml-2 lg:w-[273px] text-[16px] lg:text-[18px]  leading-[24px] lg:leading-[32px] font-[400] text-[#000]">
						We empowers businesses to make informed business
						decisions.
					</span>
				</div>
			</div>
		</div>
	);
}
