import './QuestlineRewards.css';

import { getItemIcon } from '@/src/shared-resources/utils/utils';

const QuestlineRewards = (props) => {
    return (
        <div className="questline-container">
            <div className="questline-rewards">
                <b>Final Rewards:</b>
                {props.finalRewards && props.finalRewards.map((finalReward, index) => (
                    <div key={index} className="reward-item">
                        {finalReward.amount}x {getItemIcon(finalReward.resource)}
                    </div>
                ))}
            </div>
        </div>
    );    
};

export default QuestlineRewards;
