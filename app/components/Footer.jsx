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
		<div className="bg-[#121212] mt-10 pt-5 pb-10 lg:pt-10 lg:pb-20">
			<div className="items-start lg:items-center px-5 lg:px-0 justify-center align-middle flex flex-col gap-5 lg:gap-10">
				<h1 className="font-[600] text-[24px] lg:text-[40px] text-[#fff]">
					Contact Us
				</h1>
				<div className="flex flex-col gap-5 lg:gap-10 items-start lg:items-center">
					<div className="flex flex-row gap-5 items-center">
						<MdLocationPin color="#fff" size={24} />
						<p className="text-[14px] lg:text-[16px] leading-[28px] text-left lg:text-center  text-[#fff]">
							8 Rockdrive, Lekki phase one, Lagos, Nigeria
						</p>
					</div>
					<div className="flex flex-row gap-5 items-start lg:items-center">
						<MdOutlineEmail color="#fff" size={24} />
						<p className="text-[14px] leading-[28px] text-left lg:text-center lg:text-[16px] text-[#fff]">
							ploutospage38@gmail.com
						</p>
					</div>
					<div className="flex flex-row gap-5 items-start lg:items-center">
						<VscCallOutgoing color="#fff" size={24} />
						<p className="text-[14px] leading-[28px] text-left lg:text-center lg:text-[16px] text-[#fff]">
							+2348024247865
						</p>
					</div>
					<div className='w-[170px] flex flex-row gap-[32px] lg:gap-[40px] items-center lg:items-center'>
						<Link href="/">
							<Image
								src="/images/fb.png"
								width={30}
								height={30}
								alt="FB Logo"
							/>
						</Link>
						<Link href="/">
							<Image
								src="/images/instagram.png"
								width={50}
								height={50}
								alt="FB Logo"
							/>
						</Link>
						<Link href="/">
							<Image
								src="/images/linkedin.png"
								width={30}
								height={30}
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
