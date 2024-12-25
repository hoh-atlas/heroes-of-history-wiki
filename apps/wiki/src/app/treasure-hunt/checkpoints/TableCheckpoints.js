import "./TableCheckpoints.css";

import { getItemIcon } from "../../../shared-resources/utils/utils";
import Image from "@/src/components/image/Image";

const TableCheckpoints = (props) => {    

    let maxRewards = Math.max(...props.data.map(checkpoint => checkpoint.rewards.length));

    return (
        <div style={{ overflowX: 'auto' }} className="responsive-table-container">
            <table style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ width: '20%' }}>
                            Requirement<br/><Image src={"/treasure-hunt/checkpoints/icon_ath_encounter.webp"} maxHeight={'28px'}/>
                        </th>
                        <th colSpan={maxRewards} style={{ width: '80%' }}>
                            Rewards<br/><Image src={"/treasure-hunt/checkpoints/icon_mystery_chest_gold.webp"} maxHeight={'28px'}/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((checkpoint, checkpointIndex) => (
                            <>
                                <tr key={`row-${checkpointIndex}-main`} style={{ borderTop: '2px solid #e1cda4', borderBottom: '2px dotted #e1cda4'}}>
                                    <td rowSpan="2">
                                        {checkpoint.requirement}
                                    </td>
                                    {
                                        [...Array(maxRewards)].map((_, index) => {
                                            const reward = checkpoint.rewards[index];
                                            const resource = reward?.resource;
                                            return (
                                                <td key={`cell-${checkpointIndex}-${index}`} style={{ width: `${80 / maxRewards}%` }}>
                                                    {reward && resource ? (
                                                        <>
                                                            {reward.amount ? `${reward.amount}x ` : ""}
                                                            {getItemIcon(resource)}
                                                        </>
                                                    ) : ""}
                                                </td>
                                            );
                                        })
                                    }
                                </tr>
                                <tr key={`row-${checkpointIndex}-percent`}>
                                    {
                                        [...Array(maxRewards)].map((_, index) => {
                                            const reward = checkpoint.rewards[index];
                                            return (
                                                <td key={`percent-${checkpointIndex}-${index}`} style={{ fontSize: '11px', color: '#916a17', borderTop: 'none !important' }}>
                                                    {reward ? `${reward.percentage}%` : ""}
                                                </td>
                                            );
                                        })
                                    }
                                </tr>
                            </>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableCheckpoints;