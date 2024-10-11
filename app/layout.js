import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: 'AuditMe',
	description:
		'Streamline your audit process with AuditMe. Empower your business with smart auditing solutions, unlock the power of digital auditing for SMEs. Elevate, simplify and secure your audits today.',
};

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
