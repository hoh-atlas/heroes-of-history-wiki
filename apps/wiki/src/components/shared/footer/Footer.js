import "./Footer.css";

const Footer = () => {

    const textsLeft = [];
    const textsMiddle = ["Heroes of History Wiki © Copyright 2024"];
    const textsRight = [];
    
    return (
        <footer className="footer">
            <div className="text-container">
                <div className="text-group">
                    {textsLeft.map((text, index) => (
                        <div key={index} className="text left" dangerouslySetInnerHTML={{ __html: text }}></div>
                    ))}
                </div>
                <div className="text-group">
                    {textsMiddle.map((text, index) => (
                        <div key={index} className="text middle" dangerouslySetInnerHTML={{ __html: text }}></div>
                    ))}
                </div>
                <div className="text-group">
                    {textsRight.map((text, index) => (
                        <div key={index} className="text right" dangerouslySetInnerHTML={{ __html: text }}></div>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
