import React from 'react';
import "./MenuGrid.css";

const MenuGrid = () => {
    const items = [
        { id: 1, text: "Campaign", icon: "/navbar/Navbar_Campaign.webp", link: "/campaign" },
        { id: 2, text: "Heroes", icon: "/navbar/Navbar_Heroes.webp", link: "/heroes" },
        { id: 3, text: "Resources", icon: "/navbar/Navbar_Resources.webp", link: "/resources" },
        { id: 4, text: "Treasure Hunt", icon: "/navbar/Navbar_TreasureHunt.webp", link: "/treasure-hunt" },
        { id: 5, text: "Allied Cultures", icon: "/navbar/Navbar_AlliedCultures.webp", link: "/allied-cultures" },
        { id: 6, text: "Season Pass", icon: "/navbar/Navbar_Seasons.webp", link: "/seasons" },
        { id: 7, text: "Events", icon: "/navbar/Navbar_Events.webp", link: "/events"},
    ];

    const lastRowItemsCount = items.length % 3;

    return (
        <div className="menu-grid">
            {items.map((item, index) => (
                <a 
                    key={item.id} 
                    href={item.link} 
                    className={`text-link-skin ${lastRowItemsCount === 1 && index === items.length - 1 ? 'single-item' : ''}`}
                >
                    <div className="menu-item">
                        <span className="menu-text">{item.text}</span>
                        <img src={item.icon ? item.icon : "/navbar/Navbar_Home.webp"} alt="Icon" className="menu-icon" />
                    </div>
                </a>
            ))}
        </div>
    );
};

export default MenuGrid;
