import Image from 'next/image';
import { MdCheckBox } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import Link from 'next/link';

export default function Landing() {
	return (
		<div className="flex flex-col lg:flex-row items-start lg:items-center px-5 bg-[#F8FBFF] md:px-5 lg:px-0 max-w-7xl mx-auto">
			<div className="w-[381px] lg:w-2/3 pr-0 flex flex-col gap-[32px]">
				<h1 className="text-[32px] w-[343px] lg:w-[599px] lg:text-[56px] font-[700] leading-[40px] lg:leading-[64px] mb-1 lg:mb-4 text-[#121212]">
					Streamline your audit process with{' '}
					<br className="block md:hidden" />
					<span className="text-[#004AAD]">AuditMe</span>
				</h1>
				<p className="text-[18px] lg:text-[18px] w-[352px] lg:w-[469px] leading-[28px] font-[400] lg:font-[500] text-[#121212] mb-1 lg:mb-4">
					Empower your business with smart auditing
					solutions, unlock the power of digital auditing
					for SMEs. Elevate, simplify and secure your audits
					today.
				</p>
				<div className="mb-3 w-[368px] md:w-[490px] lg:mb-10 gap-[16px] md:gap-[24px] lg:gap-[56px] flex flex-row justify-between items-center">
					<div className="gap-[4px] md:gap-[8px] flex flex-row items-center">
						<svg
							width="40"
							height="41"
							viewBox="0 0 40 41"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20 37.75C16.5388 37.75 13.1554 36.7237 10.2775 34.8007C7.39967 32.8778 5.15665 30.1447 3.83212 26.947C2.50758 23.7493 2.16102 20.2306 2.83627 16.8359C3.51151 13.4413 5.17822 10.3231 7.62564 7.87564C10.0731 5.42822 13.1913 3.76151 16.5859 3.08627C19.9806 2.41102 23.4993 2.75758 26.697 4.08212C29.8947 5.40665 32.6278 7.64967 34.5507 10.5275C36.4737 13.4054 37.5 16.7888 37.5 20.25C37.5 24.8913 35.6563 29.3425 32.3744 32.6244C29.0925 35.9063 24.6413 37.75 20 37.75ZM20 5.25001C17.0333 5.25001 14.1332 6.12974 11.6665 7.77796C9.19972 9.42618 7.27713 11.7689 6.14181 14.5098C5.0065 17.2506 4.70945 20.2666 5.28823 23.1764C5.86701 26.0861 7.29562 28.7588 9.39341 30.8566C11.4912 32.9544 14.1639 34.383 17.0737 34.9618C19.9834 35.5406 22.9994 35.2435 25.7403 34.1082C28.4811 32.9729 30.8238 31.0503 32.472 28.5836C34.1203 26.1168 35 23.2167 35 20.25C35 16.2718 33.4197 12.4565 30.6066 9.64341C27.7936 6.83036 23.9783 5.25001 20 5.25001Z"
								fill="#121212"
							/>
							<path
								d="M25.7375 27.75L18.75 20.7625V9H21.25V19.725L27.5 25.9875L25.7375 27.75Z"
								fill="#141414"
							/>
						</svg>

						<p className="text-[14px] lg:text-[16px] text-[#121212CC]">
							Saves time
						</p>
					</div>
					<div className=" gap-[8px] flex flex-row items-center">
						<svg
							width="40"
							height="41"
							viewBox="0 0 40 41"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.85627 33.8538C7.45757 33.8538 7.94502 33.5213 7.94502 33.1113C7.94502 32.7012 7.45757 32.3688 6.85627 32.3688C6.25497 32.3688 5.76752 32.7012 5.76752 33.1113C5.76752 33.5213 6.25497 33.8538 6.85627 33.8538Z"
								fill="#121212"
							/>
							<path
								d="M38.75 29.4181L38.3413 29.1781C38.31 29.16 35.1869 27.3069 34.4106 25.0581L34.2375 24.56L33.9175 24.9781C33.9075 24.9912 33.4637 25.54 32.2219 26.1838C31.3025 20.9506 28.175 14.7031 24.065 12.0394C25.24 12.1344 26.4188 12.0369 27.5562 11.6231C28.2413 11.3744 27.9456 10.2581 27.2544 10.5106C26.3219 10.85 25.3875 10.9425 24.455 10.895C26.7444 8.79687 28.5419 5.58125 28.5419 3.23C28.5419 2.665 28.5419 1.61312 27.7044 1.61312C27.3681 1.61312 27.0962 1.82312 26.7206 2.11312C26.1444 2.5575 25.2744 3.23 23.9963 3.23C23.5094 3.23 22.6181 2.71625 21.9019 2.30375C21.0362 1.80563 20.4831 1.5 20.0181 1.5C19.2481 1.5 18.1163 2.1225 17.1175 2.67188C16.7113 2.895 16.1556 3.20125 16.0406 3.23063C14.5931 3.23063 13.7525 2.56313 13.195 2.12125C12.87 1.8625 12.6344 1.675 12.32 1.675C11.4963 1.675 11.4962 2.66312 11.4962 3.8075C11.4962 6.01625 13.1788 8.93187 15.3819 10.8912C13.9937 10.9906 12.625 11.41 11.6631 12.3419C11.1319 12.8556 11.9369 13.6706 12.4662 13.1581C13.2656 12.3831 14.3137 12.0512 15.435 11.9869C15.4669 12.1012 15.5056 12.2137 15.5531 12.3244C10.8556 15.7 7.51875 23.7156 7.51875 29.1269C7.51875 29.6606 7.56 30.1437 7.62375 30.5987C6.4125 30.0606 5.97062 29.5887 5.96187 29.5781L5.63937 29.2063L5.48063 29.675C4.77875 31.74 1.7275 33.5312 1.69687 33.5494L1.25 33.8088L1.70437 34.0544C1.86375 34.1406 2.02188 34.2163 2.18125 34.2981L1.89375 34.4975L2.04562 36.3975L13.9538 39L18.4688 36.1119C18.9244 36.1144 19.3856 36.1156 19.855 36.1156L25.1325 39L37.0631 35.25V33.2444L36.7475 33.055C36.905 32.955 37.0625 32.8531 37.2194 32.7481L37.6375 32.4688L37.5456 32.4237L38.0775 32.2781L38.1675 30.1931L37.86 29.975C38.0238 29.8769 38.1869 29.7769 38.3506 29.6731L38.75 29.4181ZM12.6331 3.8075C12.6331 3.53 12.6369 3.31375 12.6425 3.14562C12.7381 3.22062 12.8494 3.3025 12.9681 3.38688C13.3325 4.25938 14.0219 5.51562 15.1906 6.30688C16.6106 7.26937 16.4219 6.16313 17.1794 5.15312C17.9369 4.14375 18.4494 3.615 19.7181 6.21125C20.2712 7.34312 21.1931 4.18 22.0694 3.71812C22.3013 3.84437 22.5325 3.96187 22.7594 4.06187C24.3306 6.61687 25.0588 5.82 26.4544 3.69625C26.8381 3.47125 27.1531 3.23 27.4038 3.03688C27.405 3.095 27.4062 3.15937 27.4062 3.23125C27.4062 5.2375 25.7669 8.115 23.7594 9.99187C23.6646 9.751 23.5288 9.52834 23.3581 9.33375C22.5475 8.41563 21.2806 9.43375 20.68 10.1019C19.6144 9.75937 17.8781 8.81625 16.7469 9.35625C16.4651 9.48695 16.2064 9.66233 15.9806 9.87562C14.1306 8.18937 12.6331 5.755 12.6331 3.8075ZM22.7606 10.6663C22.4804 10.6068 22.2018 10.5401 21.925 10.4663C22.2738 10.1656 22.5938 10.0606 22.7281 10.5075C22.7425 10.5563 22.7512 10.6119 22.7606 10.6663ZM18.0106 11.0544C17.8037 11.015 17.5912 10.9794 17.3725 10.9513C17.2066 10.8473 17.0442 10.7378 16.8856 10.6231C17.4569 10.24 18.4419 10.4437 19.3831 10.7631C18.9188 10.81 18.4606 10.9113 18.0106 11.0544ZM18.2944 12.7044C17.9444 12.7919 17.5631 12.7569 17.2337 12.6256C17.3675 12.555 17.5025 12.4937 17.6375 12.4319C17.8562 12.5375 18.075 12.6256 18.2944 12.7044ZM6.73375 35.4869C5.24305 35.0552 3.79659 34.4832 2.41375 33.7788C3.26187 33.2213 5.10938 31.8731 5.86062 30.2531C6.37563 30.6575 7.56437 31.395 9.87938 31.9613C9.84 32.025 9.79187 32.0931 9.74563 32.16C7.76938 31.6425 6.64563 30.9881 6.6275 30.9769L6.355 30.8144L6.22437 31.1062C6.0525 31.4887 5.64937 31.5463 5.425 31.5463C5.3625 31.5463 5.32062 31.5419 5.315 31.5413L5.09188 31.5088L5.01063 31.7225C4.84438 32.1587 4.16188 32.7288 3.91187 32.9119L3.49437 33.2181L3.97187 33.4137C4.14937 33.4862 4.1975 33.5531 4.2 33.5706C4.20625 33.6138 4.13063 33.7275 4.05 33.7931L3.68625 34.0863L4.10938 34.2819C4.97625 34.6819 5.95813 35.0131 6.94 35.2862C6.86188 35.3631 6.79437 35.4288 6.73375 35.4869ZM11.7737 33.1581C12.6475 33.2806 13.6156 33.3581 14.6731 33.3581H14.6737C14.8938 33.3581 15.1169 33.3544 15.3444 33.3475C15.3595 33.3947 15.3812 33.4395 15.4087 33.4806C15.4644 33.565 15.5394 33.635 15.6344 33.6894L14.0394 35.0525C14.009 35.0512 13.9786 35.0506 13.9481 35.0506C13.2375 35.0506 12.7075 35.3119 12.4531 35.7769C11.4894 35.6539 10.53 35.4982 9.57687 35.31C10.3431 34.6282 11.0762 33.9101 11.7737 33.1581ZM4.68062 33.9062C4.74312 33.7881 4.78375 33.645 4.76187 33.4888C4.7411 33.3478 4.67352 33.2179 4.57 33.12C4.85062 32.8794 5.2375 32.5081 5.45 32.1238C5.93313 32.1169 6.33187 31.9337 6.58313 31.61C7.00625 31.8312 7.95937 32.2781 9.3675 32.6656C8.79187 33.3875 8.01625 34.2062 7.41313 34.815C6.47312 34.5662 5.52625 34.2663 4.68062 33.9062ZM13.5875 36.5369L13.4594 36.5375C12.9213 36.5375 11.1381 36.4938 8.7825 36.0031C8.865 35.9331 8.95062 35.8613 9.03 35.7925C10.9412 36.1919 12.4825 36.3631 12.5981 36.3762L12.8269 36.4006L12.8975 36.1787C13.0519 35.7 13.6213 35.6294 13.9475 35.6294C14.0369 35.6294 14.0963 35.635 14.1031 35.6356L14.2244 35.6488L16.995 33.2812L16.2544 33.2569C16.0069 33.2481 15.9025 33.1925 15.8769 33.1544L16.0337 32.7438L15.6 32.7619C15.2837 32.7756 14.975 32.7825 14.6731 32.7825C13.8006 32.7825 12.9906 32.725 12.2425 32.6344L12.4162 32.4294C13.9262 32.6313 15.7344 32.7556 17.9175 32.74C17.3962 33.4713 16.0962 35.0256 13.5875 36.5369ZM19.8525 33.8213V34.9619C19.4969 34.9619 19.1506 34.9606 18.8119 34.9581L18.71 33.6744L17.8638 33.7431C18.4338 33.0694 18.6769 32.62 18.6987 32.5794L18.9281 32.1456L18.4438 32.1544C13.8075 32.2394 10.7837 31.6869 8.875 31.0731C8.73562 30.5094 8.655 29.8719 8.655 29.1275C8.655 24.0506 11.8994 16.3769 16.2069 13.2669C16.97 14.005 18.1275 14.3281 19.2275 13.61C19.4688 13.4525 19.6788 13.2463 19.8756 13.0269C19.9225 13.0281 19.9706 13.0387 20.0181 13.0387C20.1756 13.0387 20.3356 13.0256 20.495 13.0056C20.6969 13.0863 20.8944 13.1675 21.0775 13.2481C21.9544 13.6344 22.7031 13.3944 23.2144 12.8619C27.16 15.2494 30.3213 21.565 31.1531 26.67C29.3494 27.3912 26.4881 28.095 22.0969 28.2188C22.9631 27.7237 23.6131 26.8913 23.3794 25.7975C23.1338 24.6412 22.1675 24.3163 21.1669 24.2631C21.1644 23.72 21.1644 23.1781 21.1681 22.635C21.475 22.7706 21.7694 22.9269 22.0369 23.0938C22.5094 23.3906 22.9369 22.6213 22.4675 22.3244C22.0605 22.0685 21.6261 21.8591 21.1725 21.7C21.1787 21.0712 21.1819 20.4438 21.1819 19.8162C21.1825 19.2412 20.3281 19.2412 20.3281 19.8162C20.3281 20.3681 20.3244 20.9194 20.3194 21.47C19.8646 21.3908 19.4003 21.383 18.9431 21.4469C18.8688 21.0332 18.7787 20.6225 18.6731 20.2156C18.5319 19.6619 17.7069 19.8963 17.85 20.4519C17.955 20.8513 18.0406 21.2488 18.1112 21.6519C18.075 21.6656 18.0356 21.6725 18 21.6887C16.8425 22.1469 16.1363 23.315 16.9831 24.4044C17.3775 24.9119 17.8931 25.1169 18.4575 25.185C18.4881 25.9369 18.5075 26.6894 18.5294 27.4406C18.1512 27.195 17.8069 26.88 17.495 26.5469C17.1088 26.1394 16.5056 26.7688 16.8912 27.1756C17.4156 27.7338 17.9662 28.1556 18.5631 28.4256C18.59 29.0675 18.6281 29.7113 18.6906 30.35C18.7456 30.9169 19.6006 30.92 19.545 30.35C19.4923 29.7975 19.4534 29.2438 19.4281 28.6894C19.7531 28.7456 20.0944 28.76 20.4569 28.7256C20.4975 29.3169 20.545 29.9081 20.6125 30.4994C20.6512 30.8381 20.975 30.9712 21.2138 30.9025L21.1606 32.13C20.7844 32.1637 20.4006 32.195 20.0006 32.2212L19.5244 32.2525L19.7781 32.6625C19.8038 32.7038 20.0919 33.1594 20.735 33.8225H19.8525V33.8213ZM35.4075 29.7075C34.6219 30.0769 33.6281 30.4156 32.6156 30.7113C31.9931 30.0681 31.1969 29.21 30.6025 28.4487C31.9269 28.0475 32.6681 27.6338 33.0025 27.4106C33.2669 27.6438 33.6169 27.765 34.0312 27.7644C34.1688 27.7644 34.2906 27.7513 34.3844 27.7362C34.6844 28.125 35.1681 28.5738 35.4706 28.8419C35.3275 28.9888 35.2581 29.1512 35.2638 29.3269C35.2687 29.4769 35.3288 29.6044 35.4075 29.7075ZM30.9356 31.7612C31.0631 31.8737 31.195 31.9887 31.3294 32.105C28.7956 32.7769 26.91 32.85 26.4994 32.8569C23.8756 31.2563 22.5156 29.5625 21.9913 28.8C24.1869 28.745 26.0019 28.5462 27.5156 28.2725C27.5772 28.3481 27.6395 28.4231 27.7025 28.4975C26.4858 28.687 25.2596 28.8086 24.0294 28.8619L23.525 28.8831L23.8025 29.3075C23.8019 29.3081 23.7456 29.4131 23.3731 29.4856L22.7675 29.6038L25.745 32.0144L25.8838 31.9769C25.8869 31.9762 26.1494 31.9056 26.4669 31.9056C26.925 31.9056 27.2381 32.045 27.3956 32.3175L27.4956 32.49L27.69 32.4556C28.7787 32.2572 29.861 32.0256 30.9356 31.7612ZM22.125 29.9244L21.4137 29.8856C21.3806 29.5306 21.3475 29.1756 21.3225 28.8206C21.4475 29.0281 21.7038 29.4181 22.125 29.9244ZM21.245 27.6362C21.204 26.7949 21.1792 25.9529 21.1706 25.1106C21.2731 25.1144 21.3744 25.1238 21.4706 25.1375C22.5756 25.305 22.8644 26.5338 22.0019 27.225C21.7769 27.4031 21.5175 27.5338 21.245 27.6362ZM27.7694 31.8563C27.4894 31.5106 27.0437 31.3294 26.4675 31.3294C26.2269 31.3294 26.015 31.3619 25.8813 31.3881L24.0094 29.8713C24.165 29.7819 24.27 29.6687 24.3275 29.53C24.3417 29.4955 24.3525 29.4597 24.36 29.4231C25.8438 29.3419 27.0938 29.1938 28.1506 29.0125C28.6631 29.5844 29.4163 30.3731 30.415 31.29C29.1881 31.5819 28.165 31.7819 27.7694 31.8563ZM20.3156 25.1331C20.3275 26.0387 20.35 26.9469 20.3981 27.8519C20.3175 27.8644 20.2381 27.88 20.1588 27.8881C19.89 27.9188 19.635 27.8963 19.3925 27.835C19.3619 26.96 19.3419 26.0831 19.3088 25.2075C19.645 25.1919 19.9856 25.1588 20.3156 25.1331ZM19.2656 24.3425C19.2266 23.6557 19.162 22.9707 19.0719 22.2887C19.4861 22.2318 19.9074 22.2532 20.3137 22.3519C20.3093 22.9908 20.3082 23.6298 20.3106 24.2687C20.0363 24.2838 19.7756 24.31 19.5462 24.3306C19.4529 24.3379 19.3593 24.3419 19.2656 24.3425ZM18.4081 24.2331C18.355 24.2188 18.3025 24.2075 18.2481 24.1894C17.998 24.1046 17.7716 23.9618 17.5875 23.7725C17.0538 23.2744 17.7863 22.7856 18.2481 22.5538C18.3206 23.11 18.3706 23.6713 18.4081 24.2331ZM25.3063 36.3994C22.5931 35.0131 21.1375 33.4725 20.5594 32.7588C20.975 32.7275 21.3681 32.69 21.7575 32.6506L26.2062 35.5381L35.9625 32.8581C30.9312 35.8906 25.9606 36.3525 25.3063 36.3994ZM33.3638 31.4681C33.2837 31.3881 33.1881 31.2931 33.075 31.1787C34.185 30.8425 35.2588 30.4525 36.0594 30.0238L36.5462 29.7619L36.0525 29.5106C35.9419 29.4538 35.8338 29.3494 35.8319 29.31C35.8331 29.295 35.8769 29.215 36.0662 29.1062L36.4275 28.8988L36.1063 28.6313C36.0962 28.6231 35.0944 27.7913 34.7425 27.2556L34.6263 27.0806L34.4269 27.1388C34.425 27.1388 34.2537 27.1881 34.0312 27.1881C33.6875 27.1888 33.43 27.0763 33.265 26.855L33.0825 26.6131L32.8538 26.81C32.8419 26.82 32.1338 27.4006 30.2344 27.9494C30.1718 27.8593 30.1116 27.7676 30.0537 27.6744C32.3569 26.9763 33.5338 26.1312 34.0438 25.6687C34.8625 27.44 36.8119 28.8669 37.6581 29.4263C36.2986 30.2489 34.86 30.933 33.3638 31.4681Z"
								fill="#121212"
							/>
							<path
								d="M27.7375 29.6981C27.1144 29.5287 26.4112 29.6443 26.165 29.9537C25.9206 30.2643 26.2294 30.6556 26.8519 30.8262C27.4756 30.9956 28.1781 30.8793 28.4244 30.5693C28.6687 30.2587 28.3612 29.8687 27.7375 29.6981Z"
								fill="#121212"
							/>
						</svg>

						<p className="text-[14px] lg:text-[16px] text-[#121212CC]">
							Saves cost
						</p>
					</div>
					<div className="w-[116px] lg:w-[117px] gap-[8px] flex flex-row items-center">
						<svg
							width="40"
							height="41"
							viewBox="0 0 40 41"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M35.924 10.8679C35.9998 11.0506 36.0198 11.2517 35.9813 11.4457C35.9429 11.6397 35.8478 11.818 35.708 11.9579L31.708 15.9579C31.615 16.0507 31.5045 16.1243 31.3831 16.1744C31.2616 16.2245 31.1314 16.2502 31 16.2499H25.414L22.708 18.9559C23.013 19.5945 23.0825 20.3204 22.9041 21.0052C22.7257 21.6901 22.3109 22.2898 21.7331 22.6984C21.1553 23.107 20.4516 23.2982 19.7464 23.2382C19.0413 23.1781 18.3801 22.8707 17.8796 22.3703C17.3792 21.8699 17.0718 21.2087 17.0118 20.5035C16.9517 19.7984 17.1429 19.0947 17.5515 18.5169C17.9601 17.939 18.5599 17.5243 19.2447 17.3459C19.9295 17.1675 20.6554 17.2369 21.294 17.5419L24 14.8359V9.24994C23.9998 9.11853 24.0254 8.98836 24.0755 8.86688C24.1256 8.74539 24.1992 8.63498 24.292 8.54194L28.292 4.54194C28.4319 4.40173 28.6102 4.3062 28.8044 4.26746C28.9986 4.22873 29.2 4.24854 29.3829 4.32437C29.5659 4.40021 29.7222 4.52865 29.832 4.69343C29.9419 4.85821 30.0004 5.0519 30 5.24994V10.2499H35C35.1979 10.25 35.3913 10.3087 35.5558 10.4187C35.7203 10.5287 35.8484 10.6851 35.924 10.8679ZM32.586 12.2499H29C28.7348 12.2499 28.4804 12.1446 28.2929 11.957C28.1054 11.7695 28 11.5152 28 11.2499V7.66394L26 9.66394V14.2499H30.586L32.586 12.2499ZM35.214 15.2799C35.724 16.8439 36 18.5159 36 20.2499C35.9993 23.6298 34.9282 26.9226 32.9405 29.6562C30.9528 32.3898 28.1504 34.4237 24.9354 35.4663C21.7203 36.5088 18.2577 36.5065 15.044 35.4596C11.8304 34.4126 9.03079 32.3749 7.04676 29.6387C5.06273 26.9024 3.99616 23.6081 4.00001 20.2282C4.00386 16.8484 5.07792 13.5565 7.06818 10.8248C9.05843 8.09304 11.8626 6.06172 15.0787 5.02212C18.2947 3.98253 21.7573 3.98807 24.97 5.03794L23.354 6.65394C20.3852 5.92193 17.2583 6.18201 14.4513 7.39444C11.6442 8.60687 9.31121 10.705 7.80884 13.3682C6.30647 16.0314 5.71732 19.1132 6.13141 22.1428C6.5455 25.1723 7.94005 27.983 10.102 30.1454C12.2639 32.3077 15.0743 33.7028 18.1038 34.1175C21.1333 34.5322 24.2152 33.9436 26.8787 32.4418C29.5422 30.9399 31.6408 28.6074 32.8538 25.8005C34.0667 22.9937 34.3274 19.8669 33.596 16.8979L35.214 15.2799ZM29.8 18.2499C29.9333 18.8979 30 19.5646 30 20.2499C29.9996 22.3135 29.3608 24.3264 28.1712 26.0126C26.9816 27.6987 25.2996 28.9756 23.3557 29.6681C21.4118 30.3605 19.3012 30.4347 17.3135 29.8803C15.3259 29.3259 13.5583 28.1702 12.2534 26.5717C10.9484 24.9731 10.17 23.01 10.0248 20.9516C9.87958 18.8931 10.3747 16.8402 11.4423 15.0743C12.51 13.3083 14.0977 11.9159 15.9879 11.088C17.8781 10.2601 19.9781 10.0372 22 10.4499V12.5019C20.3009 12.0636 18.5049 12.1961 16.8885 12.8789C15.2721 13.5617 13.9251 14.757 13.0548 16.2807C12.1846 17.8044 11.8394 19.5719 12.0725 21.311C12.3056 23.0502 13.104 24.6644 14.3448 25.9052C15.5855 27.1459 17.1998 27.9443 18.9389 28.1774C20.678 28.4105 22.4456 28.0654 23.9693 27.1951C25.4929 26.3249 26.6882 24.9778 27.3711 23.3614C28.0539 21.745 28.1863 19.949 27.748 18.2499H29.8Z"
								fill="#121212"
							/>
						</svg>

						<p className="text-[14px] lg:text-[16px] text-[#121212CC]">
							Accurate
						</p>
					</div>
				</div>
				<div className="flex gap-[12px] md:gap-3 items-center">
					<Link
						href={'https://auditme-app.vercel.app/'}
						className="bg-[#004AAD] px-[24px] md:px-[32px] py-[10px] lg:px-[40px] lg:py-[16px] text-white rounded-lg text-[16px] md:text-[18px] font-[500] hover:bg-[#004AAD] hover:text-white leading-[28px]"
					>
						Log in as an SME
					</Link>
					<Link
						href={'https://auditme-app.vercel.app/'}
						className="bg-[#fff] px-[24px] md:px-[32px] py-[10px] lg:px-[40px] lg:py-[16px] text-[#004AAD] rounded-lg text-[16px] md:text-[18px] font-[500] hover:bg-[#004AAD] border border-[#004AAD] hover:text-white leading-[28px]"
					>
						Sign up as an SME
					</Link>
				</div>
			</div>

			<div
				style={{
					position: 'relative',
				}}
				className="hidden md:block overflow-hidden h-[512px] object-fill w-[527px] rounded-[60px]"
			>
				<Image
					alt="App screenshot"
					src="/images/landing.jpeg"
					fill={true}
					priority
					className="object-cover"
				/>
			</div>

			<div
				style={{
					position: 'relative',
				}}
				className="flex md:hidden overflow-hidden mt-10 h-[397px] w-[357px]  rounded-[60px] mx-auto"
			>
				<Image
					alt="App screenshot"
					src="/images/landing.jpeg"
					fill={true}
					priority
					className="object-cover"
				/>
			</div>
		</div>
	);
}
