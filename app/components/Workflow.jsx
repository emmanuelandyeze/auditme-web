import Link from 'next/link';
import React from 'react';

const Workflow = () => {
	return (
		<div className="bg-[#fff] mt-10 pt-5 pb-10 lg:pt-10 lg:pb-20">
			<div className="items-start lg:items-center px-5 lg:px-0 justify-center align-middle flex flex-col gap-5 lg:gap-10">
				<h1 className="font-[500] text-[24px] w-full md:w-[40%] text-left md:text-center lg:text-[40px] text-[#121212]">
					Enhance Your Auditing Workflow with AuditMe
				</h1>
				<div>
					<p className="font-[400] text-[18px] leading-[28px] text-left lg:text-center w-full lg:w-[640px] lg:text-[18px] text-[#121212]">
						Our platform help Auditors optimize their Audit
						workflow, deliver more value to businesses with
						seamless audit management.
					</p>
					<br />
					{/* <p className="font-[400] text-[18px] leading-[28px] text-left lg:text-center w-full lg:w-[440px] lg:text-[18px] text-[#121212]">
						AuditMe is your trusted partner for driving
						business success.
					</p> */}
				</div>
				<div className="flex flex-col md:flex-row gap-[12px] w-full md:w-[60%] justify-center md:gap-3 items-start md:items-center">
					<Link
						href={'https://app.auditme.com.ng/register'}
						className="bg-[#004AAD] flex flex-col text-center justify-center px-4 md:px-0 w-[60%] md:w-[30%] py-[10px] h-[3.5rem] lg:px-[40px] lg:py-[16px] text-white rounded-lg text-[14px] md:text-[18px] font-[500] hover:bg-[#004AAD] hover:text-white leading-[28px]"
					>
						Sign up as a business
					</Link>
					<Link
						href={
							'https://app.auditme.com.ng/register-auditor'
						}
						className="bg-[#fff] flex flex-col text-center justify-center md:px-[32px] w-[60%] md:w-[30%] py-[10px] h-[3.5rem] lg:px-[40px] lg:py-[16px] text-[#004AAD] rounded-lg text-[14px] md:text-[18px] font-[500] hover:bg-[#004AAD] border border-[#004AAD] hover:text-white leading-[28px]"
					>
						Sign up as an auditor
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Workflow;
