import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa6';

function Navbar() {
    return (
			<div className="max-w-[1240px] m-auto">
				<nav className="flex justify-between items-center py-4 px-5 lg:px-0">
					<Image
						src="/images/logo.png"
						width={142}
						height={42}
						alt="AuditMe logo"
					/>
					<div className="hidden lg:flex items-center gap-[16px]">
						<Link
							href="/"
							className="px-[24px] py-[8px] border border-[#121212] rounded-md hover:bg-[#121212] hover:text-white"
						>
							<p className="font-[600] text-[18px] hover:text-white">
								Auditor
							</p>
						</Link>
						<Link
							href="/"
							className="px-[24px] py-[8px] border text-white bg-[#121212] rounded-md hover:bg-[#121212] hover:text-[#f8f8f8]"
						>
							<p className="font-[600] text-[18px] hover:text-white">
								Log In
							</p>
						</Link>
					</div>
					<div className="block lg:hidden">
						<FaBars size={30} color="#121212" />
					</div>
				</nav>
			</div>
		);
}

export default Navbar;
