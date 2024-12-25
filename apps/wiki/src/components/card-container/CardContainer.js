import "./CardContainer.css";

const CardContainer = (props) => {
    
    return (
        <div className="card-container" style={props.style}>
            {props.card1}
            {props.card2}
        </div>
    );
}

export default CardContainer;
