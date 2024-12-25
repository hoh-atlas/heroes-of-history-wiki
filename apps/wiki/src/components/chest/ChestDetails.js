import React from "react";
import { getItemIcon } from "@/src/shared-resources/utils/utils";

const ChestDetails = ({ chest }) => {
    return (
        <div className="responsive-table-container" style={{ width: '90%' }}>
            <img 
                src={chest.img} 
                alt={chest.name} 
                style={{ maxHeight: '50px', display: 'block', margin: '0 auto', maxHeight: '100px', marginTop: '10px' }} 
            />
            
            <table style={{ width: '90%', margin: '20px auto' }}>
                <thead>
                    <tr>
                        <th colSpan="2">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Items</th>
                        <td>
                            {
                                chest.items.map((oneItem) => (
                                    <>
                                        {oneItem.amount}x {getItemIcon(oneItem.resource)} 
                                        {oneItem.percentage !== undefined && ` (${oneItem.percentage}%)`}
                                        <br />
                                    </>
                                ))
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ChestDetails;
