import "./Crests.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import { leftJoinArrays, getItemIcon } from "../../../shared-resources/utils/utils";
import resources from "@/src/shared-resources/data/resources";

const Crests = () => {

    const crestsAdditionalData = [
        {id: "red_crest_common", description1: "Red Tesla Storms 1 - 6", description2: "Ascension of _", link: <a href="/heroes?color=red" className="text-link">Red Heroes</a>},
        {id: "yellow_crest_common", description1: "Yellow Tesla Storms 1 - 6", description2: "Ascension of _", link: <a href="/heroes?color=yellow" className="text-link">Yellow Heroes</a>},
        {id: "green_crest_common", description1: "Green Tesla Storms 1 - 6", description2: "Ascension of _", link: <a href="/heroes?color=green" className="text-link">Green Heroes</a>},
        {id: "blue_crest_common", description1: "Blue Tesla Storms 1 - 6", description2: "Ascension of _", link: <a href="/heroes?color=blue" className="text-link">Blue Heroes</a>},
        {id: "purple_crest_common", description1: "Purple Tesla Storms 1 - 6", description2: "Ascension of _", link: <a href="/heroes?color=purple" className="text-link">Purple Heroes</a>},
        {id: "red_crest_enhanced", description1: "Red Tesla Storms 6 - 9", description2: "Ascension of _", link: <a href="/heroes?color=red" className="text-link">Red Heroes</a>},
        {id: "yellow_crest_enhanced", description1: "Yellow Tesla Storms 6 - 9", description2: "Ascension of _", link: <a href="/heroes?color=yellow" className="text-link">Yellow Heroes</a>},
        {id: "green_crest_enhanced", description1: "Green Tesla Storms 6 - 9", description2: "Ascension of _", link: <a href="/heroes?color=green" className="text-link">Green Heroes</a>},
        {id: "blue_crest_enhanced", description1: "Blue Tesla Storms 6 - 9", description2: "Ascension of _", link: <a href="/heroes?color=blue" className="text-link">Blue Heroes</a>},
        {id: "purple_crest_enhanced", description1: "Purple Tesla Storms 6 - 9", description2: "Ascension of _", link: <a href="/heroes?color=purple" className="text-link">Purple Heroes</a>},
        {id: "red_crest_superior", description1: "Red Tesla Storms 9 - 15", description2: "Ascension of _", link: <a href="/heroes?color=red" className="text-link">Red Heroes</a>},
        {id: "yellow_crest_superior", description1: "Yellow Tesla Storms 9 - 15", description2: "Ascension of _", link: <a href="/heroes?color=yellow" className="text-link">Yellow Heroes</a>},
        {id: "green_crest_superior", description1: "Green Tesla Storms 9 - 15", description2: "Ascension of _", link: <a href="/heroes?color=green" className="text-link">Green Heroes</a>},
        {id: "blue_crest_superior", description1: "Blue Tesla Storms 9 - 15", description2: "Ascension of _", link: <a href="/heroes?color=blue" className="text-link">Blue Heroes</a>},
        {id: "purple_crest_superior", description1: "Purple Tesla Storms 9 - 15", description2: "Ascension of _", link: <a href="/heroes?color=purple" className="text-link">Purple Heroes</a>},
        /*{id: "commander_crest_common", description1: "", description2: "Ascension of _", link: <a href="/heroes?class=commander" className="text-link">Commanders</a>},
        {id: "manipulator_crest_common", description1: "", description2: "Ascension of _", link: <a href="/heroes?class=manipulator" className="text-link">Manipulators</a>},
        {id: "champion_crest_common", description1: "", description2: "Ascension of _", link: <a href="/heroes?class=champion" className="text-link">Champions</a>},
        {id: "greatleader_crest_common", description1: "", description2: "Ascension of _", link: <a href="/heroes?class=great-leader" className="text-link">Great Leaders</a>},
        {id: "genius_crest_common", description1: "", description2: "Ascension of _", link: <a href="/heroes?class=genius" className="text-link">Geniuses</a>},
        {id: "commander_crest_enhanced", description1: "", description2: "Ascension of _", link: <a href="/heroes?class=commander" className="text-link">Commanders</a>},
        {id: "manipulator_crest_enhanced", description1: "", description2: "Ascension of _", link: <a href="/heroes?class=manipulator" className="text-link">Manipulators</a>},
        {id: "champion_crest_enhanced", description1: "", description2: "Ascension of _", link: <a href="/heroes?class=champion" className="text-link">Champions</a>},
        {id: "greatleader_crest_enhanced", description1: "", description2: "Ascension of _", link: <a href="/heroes?class=great-leader" className="text-link">Great Leaders</a>},
        {id: "genius_crest_enhanced", description1: "", description2: "Ascension of _", link: <a href="/heroes?class=genius" className="text-link">Geniuses</a>},
        {id: "commander_crest_superior", description1: "", description2: "Ascension of _", link: <a href="/heroes?class=commander" className="text-link">Commanders</a>},
        {id: "manipulator_crest_superior", description1: "", description2: "Ascension of _", link: <a href="/heroes?class=manipulator" className="text-link">Manipulators</a>},
        {id: "champion_crest_superior", description1: "", description2: "Ascension of _", link: <a href="/heroes?class=champion" className="text-link">Champions</a>},
        {id: "greatleader_crest_superior", description1: "", description2: "Ascension of _", link: <a href="/heroes?class=great-leader" className="text-link">Great Leaders</a>},
        {id: "genius_crest_superior", description1: "", description2: "Ascension of _", link: <a href="/heroes?class=genius" className="text-link">Geniuses</a>},*/
    ]

    const goodsExpanded = leftJoinArrays(crestsAdditionalData, resources);

    const separatedByCrestTypes = goodsExpanded.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    const crestTypes = ["crests_colors", "crests_factions"];

    return <>
        <Prologue imageSrc={"/shared/resources/icon_manipulator_crest_common.webp"} alt={"Provinces"} maxHeight={"65px"}>
        Each color and faction of heroes possesses its unique set of crests - common, enhanced, and superior. Crests are essential for ascending your heroes to higher levels. 
        While you can collect them through campaign provinces, the primary source of crests is the Tesla Storms feature, providing even more valuable crests for your heroes. 
        To discover which heroes require specific crests, refer to the <a href="/heroes" className="text-link">Heroes Page</a>.
        </Prologue>
        <SectionDivider/>
        {separatedByCrestTypes[crestTypes[0]]?.length > 0 && <table style={{width: '80%'}}>
            <thead>
                <tr>
                    <th colSpan={4}>
                        Crests - Colors
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th style={{width: '30%'}}>Name</th>
                    <th style={{width: '10%'}}>Icon</th>
                    <th style={{width: '30%'}}>Where to get</th>
                    <th style={{width: '30%'}}>Usage</th>
                </tr>
                {
                    separatedByCrestTypes[crestTypes[0]].map((crest) => (
                        <tr>
                            <td>{crest.name}</td>
                            <td>{getItemIcon(crest.id)}</td>
                            <td>{crest.description1}</td>
                            <td>{crest.description2.split("_")[0]}{crest.link}{crest.description2.split("_")[1]}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table> }
        {separatedByCrestTypes[crestTypes[1]]?.length > 0 && <table style={{width: '80%', marginTop: '10px'}}>
            <thead>
                <tr>
                    <th colSpan={4}>
                        Crests - Factions
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th style={{width: '30%'}}>Name</th>
                    <th style={{width: '10%'}}>Icon</th>
                    <th style={{width: '30%'}}>Where to get</th>
                    <th style={{width: '30%'}}>Usage</th>
                </tr>
                {
                    separatedByCrestTypes[crestTypes[1]].map((crest) => (
                        <tr>
                            <td>{crest.name}</td>
                            <td>{getItemIcon(crest.id)}</td>
                            <td>{crest.description1}</td>
                            <td>{crest.description2.split("_")[0]}{crest.link}{crest.description2.split("_")[1]}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table> }
    </>
}

export default Crests;