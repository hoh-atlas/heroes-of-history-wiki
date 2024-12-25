import "./OneQuest.css";

import { getItemIcon } from "@/src/shared-resources/utils/utils";
import QuestPlusDivider from "./QuestPlusDivider";
import QuestOrDivider from "./QuestOrDivider";
import QuestConnector from "./QuestConnector";
import QuestlineRewards from "./QuestlineRewards";

const OneQuest = (props) => {

    // prev right color: #329CB3
    //<span><Icon resource={resources.find((resource) => resource.id === "food")} /> 400</span>
    const {questId, questline, headerColor} = props;
    //console.log(questline);

    return (
        <div className="quest">
        <div className="quest-header" style={{ background: `linear-gradient(to right, ${headerColor}, #3e7bad 100%)`}}>
            <div className="quest-header-label">{questline?.questgiver && <img src={questline?.questgiver} alt="Questgiver" style={{width: '30px', marginBottom: '-5px', verticalAlign: 'center'}}/>}{questline.name} {questId}/{questline.quests.length}</div>
            <div className="quest-header-reward"></div>
        </div>
        <div className="quest-background-divider"></div>
        <div className="quest-content">
            <div className="quest-tasks">
            {
                questline.quests[questId - 1].tasks.length > 1 ? (
                questline.quests[questId - 1].relation === "plus" ? (
                    <>
                    <div className="quest-task">
                        <span dangerouslySetInnerHTML={{ __html: questline.quests[questId - 1].tasks[0] }} />
                    </div>
                    <QuestPlusDivider />
                    <div className="quest-task">
                        <span dangerouslySetInnerHTML={{ __html: questline.quests[questId - 1].tasks[1] }} />
                    </div>
                    </>
                ) : (
                    <>
                    <div className="quest-task">
                        <span dangerouslySetInnerHTML={{ __html: questline.quests[questId - 1].tasks[0] }} />
                    </div>
                    <QuestOrDivider />
                    <div className="quest-task">
                        <span dangerouslySetInnerHTML={{ __html: questline.quests[questId - 1].tasks[1] }} />
                    </div>
                    </>
                )
                ) : (
                <div className="quest-task">
                    <span dangerouslySetInnerHTML={{ __html: questline.quests[questId - 1].tasks[0] }} />
                </div>
                )
            }
            </div>
            <div className="quest-reward"><span>{getItemIcon(questline.quests[questId-1].reward.resource)} {questline.quests[questId-1].reward.amount}</span></div>
        </div>
        {questId !== questline.quests.length ? (
            <QuestConnector />
        ) : (
            <><QuestConnector />
            <QuestlineRewards finalRewards={questline.rewards}/></>
        )}
        </div>
    );
};

export default OneQuest;
