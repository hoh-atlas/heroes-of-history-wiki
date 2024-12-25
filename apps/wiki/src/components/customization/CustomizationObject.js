import { getItemIcon, formatDuration, getItemData } from "@/src/shared-resources/utils/utils";
import _customizations from "@/src/app/events/_data/_customizations";
import customizationsApplyTo from "@/src/shared-resources/data/customizationsApplyTo";

const CustomizationObject = ({ customizationId, img, obtainableFrom, showHeader = true, imageMaxHeight = '200px' }) => {

    const foundCustomization = _customizations.find(elem => elem.id === customizationId);

    const productionComponents = foundCustomization?.components?.filter(component => component["@type"].includes("ProductionComponentDTO")) || [];
    const cultureBoostComponent = foundCustomization?.components?.find(component => component["@type"].includes("CultureBoostComponentDTO"));
    const boostResourceComponent = foundCustomization?.components?.find(component => component["@type"].includes("BoostResourceComponentDTO"));

    const numberOfColumns = 4 + (productionComponents.length > 0 ? 1 : 0) + (cultureBoostComponent ? 1 : 0) + (boostResourceComponent ? 1 : 0);

    /*const numberOfColumns = 4 + (customization.boost ? 1 : 0) + (customization.production ? 2 : 0) + (customization.production?.resources ? customization.production?.resources.length : 0);
    const numberOfBodyRows = customization.production ? 3 : 1;*/

    return ( 
        <>        
        <div className="customization-object-container" style={{ width: '100%', overflowX: 'auto' }}>
            <table style={{ width: '100%', marginTop: '10px' }}>
                {showHeader && (
                    <thead>
                        <tr>
                            <th colSpan={numberOfColumns} style={{ padding: '5px' }}>
                                {foundCustomization.name}
                            </th>
                        </tr>
                    </thead>
                )}
                <tbody>
                    <tr>
                        <th style={{ width: '25%' }}>Image</th>
                        <th style={{ width: '15%' }}>Obtainable From</th>
                        <th style={{ width: '10%' }}>Duration</th>
                        {productionComponents.length > 0 && <th>Production</th>}
                        {cultureBoostComponent && <th>Culture Boost</th>}
                        {boostResourceComponent && <th>Resource Boost</th>}
                        <th style={{ width: '15%' }}>Apply To</th>
                    </tr>

                    <tr>
                        <td rowSpan={2}>
                            <img src={img} style={{ maxHeight: imageMaxHeight }}/>
                        </td>
                        <td rowSpan={2}>
                            {obtainableFrom}
                        </td>
                        <td rowSpan={2}>
                            {formatDuration(foundCustomization.duration)}
                        </td>
                        {productionComponents && productionComponents.length > 0 && (() => {
                            const finish = productionComponents[0].finish;
                            const finishRewards = finish?.rewards;

                            if (finishRewards) {
                                return (
                                    <td colSpan={1}>
                                        {finishRewards[0].amount + "x"}&nbsp;
                                        {getItemIcon(finishRewards[0].resource)}
                                    </td>
                                );
                            } else if (finish?.dynamicChangeDefinitionId) {
                                const itemData = getItemData(finish.dynamicChangeDefinitionId);
                                return (
                                    <td colSpan={1}>
                                        {itemData.rewards.map((oneItem, index) => (
                                            <span key={oneItem.resource}>
                                                {oneItem.amount}x {getItemIcon(oneItem.resource)} {itemData.chances && "("+itemData.chances[index]+"%)"}
                                                {index < itemData.rewards.length - 1 && (itemData.chances ? " / " : " ")}
                                            </span>
                                        ))}
                                    </td>
                                );
                            } else {
                                return null;
                            }
                        })()}
                        {cultureBoostComponent && <td rowSpan={2}>
                            {cultureBoostComponent.cultureBoost*100}% {getItemIcon("culture_bonus")}
                            </td>}
                        {boostResourceComponent && <td rowSpan={2}>
                            {boostResourceComponent.modifier*100}% {getItemIcon(boostResourceComponent.resourceType || boostResourceComponent.resourceDefinitionId)}
                            </td>}
                        <td rowSpan={2}>{customizationsApplyTo[foundCustomization.buildingGroup]}</td>
                    </tr>
                    <tr>
                        {productionComponents && productionComponents.length > 0 && (() => {
                            const duration = productionComponents[0].duration;
                            return (
                                <td colSpan={1}>
                                    {formatDuration(duration)}
                                </td>
                            );
                        })()}
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    );
};

export default CustomizationObject;
