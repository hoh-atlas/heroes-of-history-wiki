import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./DropdownMore.css";

const DropdownMore = ({ moreLinks }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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

  return (
    <div className="dropdown-more-container" ref={dropdownRef}>
      <button
        className="dropdown-more-toggle"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        More <FaChevronDown className={`dropdown-arrow ${showDropdown ? "rotate-arrow" : ""}`} />
      </button>

      {showDropdown && (
        <ul className="dropdown-more-menu">
          {moreLinks.map((link) => (
            <li key={link.id} className="dropdown-more-item">
              <a
                href={link.url}
                className={({ isActive }) =>
                  isActive ? "activeLink" : "nonactiveLink"
                }
              >
                <img src={link.img} alt="" className="nav-icon" />
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMore;
