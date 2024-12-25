import "./Navbar.css";
import { useState, useEffect } from "react";
import { isMobile } from 'react-device-detect';
import Link from "next/link";

import links from "./links";
import dropdownItems from "./dropdownItems";
import { GiHamburgerMenu } from "react-icons/gi";
import DropdownEra from "./DropdownEra";
import DropdownMore from "./DropdownMore";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const handleClick = (event) => {
		if (window.innerWidth <= 700 && event.target.tagName === "A") {
		setShowMenu(false);
		}
	};

	const activeLinks = links.filter(link => link.show);

	const [linksToShow, setLinksToShow] = useState(() => {
        if (typeof window === "undefined") return 5;
		if (isMobile) return activeLinks.length;
		else if (window.innerWidth < 1100) return 5;
		else if (window.innerWidth < 1235) return 6;
		else if (window.innerWidth < 1332) return 7;
		else if (window.innerWidth < 1444) return 8;
		else if (window.innerWidth < 1600) return 9;
		else if (window.innerWidth < 1690) return 10;
		else if (window.innerWidth < 1703) return 11;
		else return activeLinks.length;
	});

	useEffect(() => {
		const handleResize = () => {
        if (typeof window === "undefined") return 5;
		if (isMobile) return activeLinks.length;
		else if (window.innerWidth < 1100) setLinksToShow(5);
		else if (window.innerWidth < 1235) setLinksToShow(6);
		else if (window.innerWidth < 1332) setLinksToShow(7);
		else if (window.innerWidth < 1444) setLinksToShow(8);
		else if (window.innerWidth < 1600) setLinksToShow(9);
		else if (window.innerWidth < 1690) setLinksToShow(10);
		else if (window.innerWidth < 1703) setLinksToShow(11);
		else setLinksToShow(activeLinks.length);
		};

		window.addEventListener('resize', handleResize);

		return () => {
		window.removeEventListener('resize', handleResize);
		};
	}, []);

	const visibleLinks = activeLinks.slice(0, linksToShow);
	const moreLinks = activeLinks.slice(linksToShow);

	return (
		<header>
		<nav onClick={handleClick}>
			<div className="navigation">
			<div className="nav-header">
				<a href="/">
				<img src={"/shared/logo.webp"} alt="Logo" />
				</a>

				<DropdownEra dropdownItems={dropdownItems} />

				<button onClick={() => setShowMenu(!showMenu)}>
				<GiHamburgerMenu className="hamburger-icon" />
				</button>
			</div>

			<div className={`${showMenu ? "nav-list show" : "nav-list hide"}`}>
				<ul>
				{visibleLinks.map((oneLink) => {
					const { id, text, url, img } = oneLink;

					return (
					<li key={id}>
						<a
						href={url}
						className={({ isActive }) =>
							isActive ? "activeLink" : "nonactiveLink"
						}
						>
						<img src={img} alt="" className="nav-icon" />
						{text}
						</a>
					</li>
					);
				})}
				{moreLinks.length > 0 && (
					<li>
					<DropdownMore moreLinks={moreLinks} />
					</li>
				)}
				</ul>
			</div>
			</div>
		</nav>
		</header>
	);
};

export default Navbar;
