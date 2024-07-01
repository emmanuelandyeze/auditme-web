"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';

function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	 const [loginDropdownOpen, setLoginDropdownOpen] =
			useState(false);
		const [signupDropdownOpen, setSignupDropdownOpen] =
			useState(false);

		const toggleLoginDropdown = () =>
			setLoginDropdownOpen(!loginDropdownOpen);
		const toggleSignupDropdown = () =>
			setSignupDropdownOpen(!signupDropdownOpen);

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
					className={`lg:hidden fixed top-0 right-0 h-screen w-[70%] pt-1 bg-white z-50 transition-transform transform ${
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
						<Link
							href="https://app.auditme.com.ng/auditor/login"
							passHref
						>
							<p className="px-8 py-2 hover:bg-gray-200">
								Auditor Log In
							</p>
						</Link>
						<Link
							href="https://app.auditme.com.ng/login"
							passHref
						>
							<p className="px-8 py-2 hover:bg-gray-200">
								SME Log In
							</p>
						</Link>
					</div>
				</div>
				<div className="hidden lg:flex items-center gap-[16px]">
					<ul className="flex justify-around gap-5">
						<li className="relative">
							<button
								onClick={toggleLoginDropdown}
								className="text-black flex gap-1 items-center"
							>
								<p className="font-[500] text-[18px]">
									Log in
								</p>
								<RiArrowDropDownLine size={24} />
							</button>
							{loginDropdownOpen && (
								<ul className="absolute mt-2 w-40 bg-white border border-gray-200 shadow-lg">
									<Link
										href={
											'https://app.auditme.com.ng/login'
										}
										target="_blank"
									>
										<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
											SMEs
										</li>
									</Link>
									<Link
										href={
											'https://app.auditme.com.ng/auditor/login'
										}
										target="_blank"
									>
										<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
											Auditor
										</li>
									</Link>
								</ul>
							)}
						</li>
						<li className="relative">
							<button
								onClick={toggleSignupDropdown}
								className="text-black flex gap-1 items-center"
							>
								<p className="font-[500] text-[18px]">
									Sign up
								</p>
								<RiArrowDropDownLine size={24} />
							</button>
							{signupDropdownOpen && (
								<ul className="absolute mt-2 w-40 bg-white border border-gray-200 shadow-lg">
									<Link
										href={
											'https://app.auditme.com.ng/register'
										}
										target="_blank"
									>
										<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
											SMEs
										</li>
									</Link>
									<Link
										href={
											'https://app.auditme.com.ng/register-auditor'
										}
										target='_blank'
									>
										<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
											Auditor
										</li>
									</Link>
								</ul>
							)}
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
