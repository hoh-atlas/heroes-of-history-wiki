import "./DropdownEra.css";

import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { getFromLocalStorage } from "@/src/shared-resources/utils/utils";

const DropdownEra = ({ dropdownItems }) => {
  	const [showDropdown, setShowDropdown] = useState(false);
  	const dropdownRef = useRef(null);

  	useEffect(() => {
		const handleOutsideClick = (event) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target)
		) {
			setShowDropdown(false);
		}
		};

		if (showDropdown) {
		document.addEventListener("mousedown", handleOutsideClick);
		} else {
		document.removeEventListener("mousedown", handleOutsideClick);
		}

		return () => {
		document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [showDropdown]);

	const handleItemClick = (text) => {
		localStorage.setItem("preset_era", text);
		window.location.reload();
	};

	return (
		<div className="dropdown-container" ref={dropdownRef}>
		<span
			className="nav-link text-white dropdown-toggle"
			role="button"
			aria-haspopup="true"
			aria-expanded={showDropdown}
			onClick={() => setShowDropdown(!showDropdown)}
		>
			<img
			src="https://riseofcultures.wiki.gg/images/thumb/2/20/Research.png/25px-Research.png"
			id="preset_chapter"
			style={{ width: "24px", position: "relative" }}
			alt="Era Selection"
			/>
			<span
				style={{
					marginLeft: "8px",
					marginRight: "2px",
					color: "white",
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis",
					display: "inline-block"
				}}
				>
				{
				(() => {
					const presetEra = getFromLocalStorage("preset_era");
					const matchingItem = dropdownItems.find(item => item.value === presetEra);
					let resultText = matchingItem ? matchingItem.text : "...";
					if (resultText.length > 10) {
						resultText = resultText.substring(0, 10) + "...";
					}
					return resultText;
				})()
				}
			</span>
			<FaChevronDown
				className={`dropdown-arrow ${showDropdown ? "rotate-arrow" : ""}`}
				style={{ position: "relative", top: "1px" }}
			/>
		</span>

		{showDropdown && (
			<ul
			className="dropdown-menu pre-scrollable animate-dropdown"
			aria-labelledby="chapters_dropdown_top"
			style={{ width: "max-content" }}
			>
			{dropdownItems.map((item) => (
				<li role="presentation" key={item.id} className="dropdown-item">
				{item.url ? (
					<a
					role="menuitem"
					href={item.url}
					className="dropdown-link"
					onClick={(e) => {
						e.preventDefault();
						handleItemClick(item.value);
					}}
					>
					<span
						className="dropdown-dot"
						style={{
						backgroundColor: item.dotColor,
						}}
					></span>
					{item.icon && (
						<img
						src={item.icon}
						alt={item.text}
						style={{
							marginRight: "3px",
							marginLeft: "3px",
							width: "20px",
						}}
						/>
					)}
					{item.text}
					</a>
				) : (
					<p
					role="menuitem"
					className="small pointer dropdown-link"
					onClick={() => handleItemClick(item.text)}
					>
					<span
						className="dropdown-dot"
						style={{
						backgroundColor: item.dotColor,
						}}
					></span>
					<img
						src={item.icon}
						alt={item.text}
						className="pointer"
						style={{
						marginLeft: "5px",
						width: "30px",
						}}
					/>
					{item.text}
					</p>
				)}
				</li>
			))}
			</ul>
		)}
		</div>
	);
};

export default DropdownEra;
