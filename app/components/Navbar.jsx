"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	const closeNav = () => {
		setIsNavOpen(false);
	};

	return (
		<div className="max-w-[1240px] mx-auto relative">
			<nav className="flex justify-between items-center py-4 px-5 lg:px-0 relative">
				<Image
					src="/images/logo.png"
					width={142}
					height={42}
					alt="AuditMe logo"
				/>
				<div className="lg:hidden">
					<FaBars
						size={30}
						color="#121212"
						onClick={toggleNav}
					/>
				</div>
				<div
					className={`lg:hidden fixed top-0 right-0 h-screen w-[70%] pt-1 bg-white transition-transform transform ${
						isNavOpen ? 'translate-x-0' : 'translate-x-full'
					}`}
				>
					<div className="flex justify-end items-center h-16">
						<button
							onClick={closeNav}
							className="mr-4 focus:outline-none"
						>
							<FaTimes size={30} color="#121212" />
						</button>
					</div>
					<div className="flex flex-col justify-start items-start h-full py-4">
						<Link href="/" passHref>
							<p className="px-8 py-2 hover:bg-gray-200">
								Auditor
							</p>
						</Link>
						<Link href="/" passHref>
							<p className="px-8 py-2 hover:bg-gray-200">
								Log In
							</p>
						</Link>
					</div>
				</div>
				<div className="hidden lg:flex items-center gap-[16px]">
					<Link
						href="/"
						className="px-[24px] py-[8px] border border-[#121212] rounded-md hover:bg-[#121212] hover:text-white"
					>
						<p className="font-semibold text-[18px] hover:text-white">
							Auditor
						</p>
					</Link>
					<Link
						href="/"
						className="px-[24px] py-[8px] border text-white bg-[#121212] rounded-md hover:bg-[#121212] hover:text-[#f8f8f8]"
					>
						<p className="font-semibold text-[18px] hover:text-white">
							Log In
						</p>
					</Link>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
