import React from 'react';

const Workflow = () => {
	return (
		<div className="bg-[#fff] mt-10 pt-5 pb-10 lg:pt-10 lg:pb-20">
			<div className="items-start lg:items-center px-5 lg:px-0 justify-center align-middle flex flex-col gap-5 lg:gap-10">
				<h1 className="font-[600] text-[24px] lg:text-[40px] text-[#121212]">
					Workflow Optimization
				</h1>
				<div>
					<p className="font-[400] text-[18px] leading-[28px] text-left lg:text-center w-full lg:w-[440px] lg:text-[18px] text-[#121212]">
						Our platform helps auditors optimize their
						workflow, expand their client base, and deliver
						exceptional services to SMEs.
					</p>
					<br />
					<p className="font-[400] text-[18px] leading-[28px] text-left lg:text-center w-full lg:w-[440px] lg:text-[18px] text-[#121212]">
						AuditMe is your trusted partner for driving
						business success.
					</p>
				</div>
				<div>
					<button className="bg-[#121212] px-[32px] py-[10px] lg:px-[40px] lg:py-[16px] text-white rounded-lg text-[18px] font-[500] hover:bg-[#121212] hover:text-white leading-[28px]">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Workflow;
