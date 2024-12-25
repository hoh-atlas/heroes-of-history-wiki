import "./TextBlock.css";

const TextBlock = ({ centered = false, children }) => {
    return (
        <div className={`textblock ${centered ? 'centered' : ''}`}>
            {children}
        </div>
    );
}

export default TextBlock;