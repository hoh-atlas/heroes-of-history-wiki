"use client";

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
import ReactGA from "react-ga4";
import { useEffect } from "react";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export default function RootLayout({ children }) {
	useEffect(() => {
		ReactGA.initialize("G-TH20891YX2");
	}, []);
	
	return (
		<html lang="en">
		<head>
			<title>Heroes of History Wiki</title>
			<meta name="description" content={"Heroes of History Wiki is a place where you can find information about heroes, battles, events, allied cultures and many written guides to help you better navigate in the game."} />
		</head>
		<body className={`${geistSans.variable} ${geistMono.variable}`}>
			<Navbar />
			{children}
			<Footer />
		</body>
		</html>
	);
}
