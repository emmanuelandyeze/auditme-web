import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
	MdLocationPin,
	MdOutlineEmail,
} from 'react-icons/md';
import { VscCallOutgoing } from 'react-icons/vsc';

const Footer = () => {
	return (
		<div className="bg-[#004AAD] mt-10 pt-5 pb-10 lg:pt-10 lg:pb-20">
			<div className="items-start lg:items-center px-5 lg:px-0 justify-center align-middle flex flex-col gap-5 lg:gap-10">
				<h1 className="font-[600] text-[24px] lg:text-[40px] text-[#fff]">
					Contact Us
				</h1>
				<div className="flex flex-col gap-5 lg:gap-10 items-start lg:items-center">
					<div className="flex flex-row gap-5 items-center">
						<svg
							width="18"
							height="22"
							viewBox="0 0 18 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.99998 20.6C8.99998 20.6 16.513 13.9218 16.513 8.91307C16.513 4.76373 13.1493 1.40002 8.99998 1.40002C4.85064 1.40002 1.48694 4.76373 1.48694 8.91307C1.48694 13.9218 8.99998 20.6 8.99998 20.6Z"
								stroke="white"
								stroke-opacity="0.9"
								stroke-width="2"
							/>
							<path
								d="M11.4003 8.60018C11.4003 9.92566 10.3258 11.0002 9.00029 11.0002C7.67481 11.0002 6.60029 9.92566 6.60029 8.60018C6.60029 7.27469 7.67481 6.20018 9.00029 6.20018C10.3258 6.20018 11.4003 7.27469 11.4003 8.60018Z"
								stroke="white"
								stroke-opacity="0.9"
								stroke-width="2"
							/>
						</svg>

						<p className="text-[14px] lg:text-[16px] leading-[28px] text-left lg:text-center  text-[#fff]">
							8 Rockdrive, Lekki phase one, Lagos, Nigeria
						</p>
					</div>
					<div className="flex flex-row gap-5 items-center lg:items-center">
						<svg
							width="22"
							height="16"
							viewBox="0 0 22 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2.6875 2.18382L11 7.51103L19.9063 2.18382M3.875 15C2.56332 15 1.5 13.94 1.5 12.6324V3.36765C1.5 2.06003 2.56332 1 3.875 1H18.125C19.4367 1 20.5 2.06003 20.5 3.36765V12.6324C20.5 13.94 19.4367 15 18.125 15H3.875Z"
								stroke="white"
								stroke-opacity="0.9"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>

						<p className="text-[14px] leading-[28px] text-left lg:text-center lg:text-[16px] text-[#fff]">
							auditmenigeria@gmail.com
						</p>
					</div>
					<div className="flex flex-row gap-5 items-center lg:items-center">
						<svg
							width="22"
							height="22"
							viewBox="0 0 22 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15.0936 1.71594L20.5975 1.71594M20.5975 1.71594L20.6 6.57947M20.5975 1.71594L14.3445 7.96898M19.4365 18.0226C19.4365 18.0226 18.2445 19.1933 17.9524 19.5365C17.4766 20.0443 16.916 20.2841 16.181 20.2841C16.1104 20.2841 16.035 20.2841 15.9643 20.2794C14.5651 20.19 13.2648 19.6447 12.2896 19.1792C9.623 17.891 7.28153 16.062 5.33579 13.7442C3.72926 11.8118 2.65511 10.0252 1.94371 8.10695C1.50557 6.93625 1.34539 6.02414 1.41605 5.16375C1.46317 4.61366 1.67517 4.1576 2.0662 3.76737L3.67273 2.16413C3.90358 1.94785 4.14856 1.83031 4.38883 1.83031C4.68564 1.83031 4.92591 2.00897 5.07667 2.15943C5.08138 2.16413 5.0861 2.16883 5.09081 2.17353C5.37819 2.44152 5.65144 2.71892 5.93883 3.01512C6.08487 3.16557 6.23563 3.31602 6.38639 3.47117L7.67256 4.75471C8.17195 5.25308 8.17195 5.71383 7.67256 6.2122C7.53593 6.34855 7.40402 6.48489 7.26739 6.61654C6.87165 7.02088 7.18253 6.71063 6.77265 7.07736C6.76323 7.08676 6.75381 7.09146 6.74909 7.10086C6.34393 7.5052 6.41931 7.90014 6.50411 8.16813C6.50882 8.18223 6.51353 8.19634 6.51824 8.21044C6.85274 9.01912 7.32386 9.78077 8.03997 10.6882L8.04468 10.6929C9.34498 12.2914 10.7159 13.5373 12.2282 14.4918C12.4214 14.614 12.6193 14.7127 12.8077 14.8068C12.9773 14.8914 13.1375 14.9713 13.2741 15.056C13.293 15.0654 13.3118 15.0795 13.3307 15.0889C13.4909 15.1688 13.6416 15.2064 13.7971 15.2064C14.1881 15.2064 14.4331 14.9619 14.5132 14.882L15.4366 13.9604C15.5968 13.8006 15.8512 13.6078 16.148 13.6078C16.4401 13.6078 16.6804 13.7912 16.8265 13.951C16.8312 13.9557 16.8312 13.9557 16.8359 13.9604L19.4318 16.551C19.917 17.0306 19.4365 18.0226 19.4365 18.0226Z"
								stroke="white"
								stroke-opacity="0.9"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>

						<p className="text-[14px] leading-[28px] text-left underline-none lg:text-center lg:text-[16px] text-[#fff]">
							+2348024247865
						</p>
					</div>
					<div className="w-[170px] flex flex-row gap-[32px] lg:gap-[40px] items-center lg:items-center">
						<Link href="/">
							<Image
								src="/images/fb.png"
								width={50}
								height={50}
								alt="FB Logo"
							/>
						</Link>
						<Link href="/">
							<Image
								src="/images/instagram.png"
								width={70}
								height={70}
								alt="FB Logo"
							/>
						</Link>
						<Link href="/">
							<Image
								src="/images/linkedin.png"
								width={50}
								height={50}
								alt="FB Logo"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
