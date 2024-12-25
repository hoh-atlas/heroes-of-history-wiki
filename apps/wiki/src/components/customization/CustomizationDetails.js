import React from "react";
import { getItemIcon } from "@/src/shared-resources/utils/utils";

const CustomizationDetails = ({ customization }) => {
    return (
        <div className="responsive-table-container" style={{ width: '90%' }}>
            <img 
                src={customization.img} 
                alt={customization.name} 
                style={{ display: 'block', margin: '0 auto', maxHeight: '100px', marginTop: '10px' }} 
            />
            
            <table style={{ width: '90%', margin: '20px auto' }}>
                <thead>
                    <tr>
                        <th colSpan="2">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customization.production && <>
                            <tr>
                                <th>Production</th>
                                <td>
                                    {customization.production.resource
                                        ? getItemIcon(customization.production.resource)
                                        : customization.production.resources &&
                                        customization.production.resources.map((resourceItem, index) => {
                                            if (typeof resourceItem === 'string') {
                                            return (
                                                <span key={resourceItem}>
                                                {getItemIcon(resourceItem)}
                                                {index < customization.production.resources.length - 1 && " "}
                                                </span>
                                            );
                                            } else if (typeof resourceItem === 'object' && resourceItem.resource) {
                                            return (
                                                <span key={resourceItem.resource}>
                                                {getItemIcon(resourceItem.resource)} ({resourceItem.percentage}%)
                                                {index < customization.production.resources.length - 1 && " "}
                                                </span>
                                            );
                                            }
                                            return null;
                                        })
                                    }
                                </td>
                            </tr>
                            <tr>
                                <th>Time</th>
                                <td>{customization.production.time}</td>
                            </tr>
                            {
                                customization.production.amount && <>
                                    <tr>
                                        <th>Amount</th>
                                        <td>{customization.production.amount}</td>
                                    </tr>
                                </>
                            }
                        </>
                    }
                    {
                        customization.boost && <>
                            <tr>
                                <th>Boost</th>
                                <td>{getItemIcon(customization.boost.type)} ({customization.boost.amount})</td>
                            </tr>
                        </>
                    }
                    <tr>
                        <th>Duration</th>
                        <td>{customization.duration}</td>
                    </tr>
                    <tr>
                        <th>Apply To</th>
                        <td>{customization.applyTo}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CustomizationDetails;
