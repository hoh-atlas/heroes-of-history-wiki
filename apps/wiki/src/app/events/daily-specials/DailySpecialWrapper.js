import "./DailySpecialWrapper.css";

import resources from "@/src/shared-resources/data/resources";
import chests from "@/src/shared-resources/data/chests";
import H1 from "@/src/components/h1/H1";
import { getItemIcon, getItemData } from "@/src/shared-resources/utils/utils";
import CustomizationObject from "@/src/components/customization/CustomizationObject";
import dynamicDefinitions from "@/src/shared-resources/data/dynamicDefinitions";
import _customizations from "../_data/_customizations";

const DailySpecialWrapper = (props) => {

    const { dailySpecial, amount, note, day, customizationsImages } = props;
    const itemData = getItemData(dailySpecial);

    return (
        <>
            <div className="customization-object-container" style={{ width: '100%' }}>
                {resources.some(item => item.id === dailySpecial) ? (
                    <>
                        <H1 center={true} style={{ marginTop: '10px' }}>Day {day}: {itemData.name}</H1>
                        <table style={{ width: '100%', marginTop: '10px' }}>
                            <tbody>
                                <tr>
                                    <th style={{ width: '20%' }}>
                                        Image
                                    </th>
                                    <th style={{ width: '20%' }}>
                                        Type
                                    </th>
                                    <th>
                                        Amount
                                    </th>
                                    {note && (
                                        <th style={{ width: '20%' }}>
                                            Note
                                        </th>
                                    )}
                                </tr>
                                <tr>
                                    <td>
                                        <img src={itemData.img} style={{ maxHeight: '70px' }} />
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        Resource
                                    </td>
                                    <td>
                                        {amount}x {getItemIcon(itemData.id)}
                                    </td>
                                    {note && (
                                        <td style={{ width: '20%' }}>
                                            <small>{note}</small>
                                        </td>
                                    )}
                                </tr>
                            </tbody>
                        </table>
                    </>
                ) : chests.some(item => item.id === dailySpecial) ? (
                    <>
                        <H1 center={true} style={{ marginTop: '10px' }}>Day {day}: {itemData.name}</H1>
                        <table style={{ width: '100%', marginTop: '10px' }}>
                            <tbody>
                                <tr>
                                    <th style={{ width: '20%' }}>
                                        Image
                                    </th>
                                    <th style={{ width: '20%' }}>
                                        Type
                                    </th>
                                    <th>
                                        Possible Rewards
                                    </th>
                                    {note && (
                                        <th style={{ width: '20%' }}>
                                            Note
                                        </th>
                                    )}
                                </tr>
                                <tr>
                                    <td>
                                        <img src={itemData.img} style={{ maxHeight: '60px', verticalAlign: 'middle' }} />
                                    </td>
                                    <td>
                                        Chest
                                    </td>
                                    <td>
                                        {itemData.items.map((oneItem, index) => (
                                            <span key={oneItem.resource}>
                                                {oneItem.amount}x {getItemIcon(oneItem.resource)} ({oneItem.percentage}%)
                                                {index < itemData.items.length - 1 && " / "}
                                            </span>
                                        ))}
                                    </td>
                                    {note && (
                                        <td style={{ width: '20%' }}>
                                            <small>{note}</small>
                                        </td>
                                    )}
                                </tr>
                            </tbody>
                        </table>
                    </>
                ) : _customizations.some(item => item.id === dailySpecial) ? (
                    <>
                        <H1 center={true} style={{ marginTop: '10px' }}>Day {day}: {itemData.name}</H1>
                        <CustomizationObject customizationId={dailySpecial} img={customizationsImages[dailySpecial]} showHeader={false} imageMaxHeight={"100px"}/>
                    </>
                ) : dynamicDefinitions.some(item => item.id === dailySpecial) ? (
                    <>
                        <H1 center={true} style={{ marginTop: '10px' }}>Day {day}: {itemData.name}</H1>
                        <table style={{ width: '100%', marginTop: '10px' }}>
                            <tbody>
                                <tr>
                                    <th style={{ width: '20%' }}>
                                        Image
                                    </th>
                                    <th style={{ width: '20%' }}>
                                        Type
                                    </th>
                                    <th>
                                        Possible Rewards
                                    </th>
                                    {note && (
                                        <th style={{ width: '20%' }}>
                                            Note
                                        </th>
                                    )}
                                </tr>
                                <tr>
                                    <td>
                                    {itemData.rewards.map((reward, index) => (
                                        <img
                                            key={index}
                                            src={getItemData(reward.resource).img}
                                            alt={reward.name}
                                            style={{
                                                maxHeight: '40px',
                                                maxWidth: '40px',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    ))}
                                    </td>
                                    <td>
                                        Chest
                                    </td>
                                    <td>
                                        {itemData.rewards.map((oneItem, index) => (
                                            <span key={oneItem.resource}>
                                                {oneItem.amount}x {getItemIcon(oneItem.resource)} {itemData.chances && "("+itemData.chances[index]+"%)"}
                                                {index < itemData.rewards.length - 1 && " / "}
                                            </span>
                                        ))}
                                    </td>
                                    {note && (
                                        <td style={{ width: '20%' }}>
                                            <small>{note}</small>
                                        </td>
                                    )}
                                </tr>
                            </tbody>
                        </table>
                    </>
                ) : (
                    <div>No valid daily special found for Day {day}.</div>
                )}
            </div>
        </>
    );
}

export default DailySpecialWrapper;
