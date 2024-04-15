import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
    return (
			<div className="max-w-[1240px] m-auto">
				<nav className="flex justify-between items-center py-4 ">
					<Image
						src="/images/logo.png"
						width={142}
						height={42}
						alt="AuditMe logo"
					/>
					<div className="flex items-center gap-[56px]">
						<Link
							href="/"
							className="px-[32px] py-[16px] border border-[#121212] rounded-md hover:bg-[#121212] hover:text-white"
						>
							<p className="font-[600] text-[18px] hover:text-white">
								Auditor
							</p>
						</Link>
						<Link
							href="/"
							className="px-[32px] py-[16px] border text-white bg-[#121212] rounded-md hover:bg-[#121212] hover:text-[#f8f8f8]"
						>
							<p className="font-[600] text-[18px] hover:text-white">
								Log In
							</p>
						</Link>
					</div>
				</nav>
			</div>
		);
}

export default Navbar;
