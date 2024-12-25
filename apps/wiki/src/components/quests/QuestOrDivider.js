import "./QuestOrDivider.css";

const QuestOrDivider = () => {

    return <div className="quest-or-container">
        <div className="quest-or-line"></div>
        <div className="quest-or-icon-container">
            <div className="quest-or-icon"></div>
        </div>
        <div className="quest-or-label-container">
            <div className="quest-or-label"><b>OR</b></div>
        </div>
    </div>
}

export default QuestOrDivider;