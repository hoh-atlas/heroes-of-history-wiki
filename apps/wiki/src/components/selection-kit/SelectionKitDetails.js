import React from "react";
import { getItemIcon } from "@/src/shared-resources/utils/utils";
import selectionKitsImages from "@/src/shared-resources/data/selectionKitsImages";

const SelectionKitDetails = ({ selectionKit }) => {
    return (
        <div className="responsive-table-container" style={{ width: '90%' }}>
            <img 
                src={selectionKitsImages[selectionKit.assetId]} 
                alt={selectionKit.id} 
                style={{ display: 'block', margin: '0 auto', maxHeight: '100px', marginTop: '10px' }} 
            />
            
            <table style={{ width: '90%', margin: '20px auto' }}>
                <thead>
                    <tr>
                        <th colSpan="2">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Selectable Rewards</th>
                        <td>{selectionKit.selectableRewardsAmount}</td>
                    </tr>
                    {
                        selectionKit.rewards.map((reward, index) => (
                            <tr key={index}>
                                <th>Reward</th>
                                <td>
                                    {reward.amount}x {getItemIcon(reward.resource)}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default SelectionKitDetails;
