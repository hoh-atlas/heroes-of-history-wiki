import "./Intro.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import H1 from "@/src/components/h1/H1";
import Image from "@/src/components/image/Image";
import TextBlock from "@/src/components/textblock/TextBlock";
import { getItemIcon } from "@/src/shared-resources/utils/utils";

import allAlliedCultures from "../data";

const Intro = (props) => {
  
    const getAlliedCulture = () => {
        return allAlliedCultures.find(oneAlliedCulture => oneAlliedCulture.id == props.selectedAlliedCulture);
    }

    const alliedCulture = getAlliedCulture();

    const egyptCultures = ["egypt_cheops_pyramid", "egypt_great_sphinx", "egypt_abu_simbel"];
    const chinaCultures = ["china_terracotta_army", "china_great_wall", "china_forbidden_city"];
    const vikingsCultures = ["vikings_yggdrasil", "vikings_ellida", "vikings_valhalla"];
  
    return (
        <>
            <Prologue imageSrc={"/allied-cultures/intro/icon_feature_eventcities.webp"} alt={"Allied Cultures"} maxHeight={"65px"} >
                Allied Cultures are weekly events that unlock a special playfield, allowing players to build a city representing an allied culture. 
                Each event features a questline that provides an immersive introduction to the culture, along with exclusive buildings to construct, resources to produce, and valuable rewards to earn.<br/>
                Every Allied Culture event is centered around a distinct World Wonder. Upgrading this World Wonder enables players to earn special rewards and advance in Leagues, 
                where they compete with thousands of players worldwide.
            </Prologue>

            <SectionDivider />

            <H1 center={true}>{alliedCulture.name}</H1>

            <Image src={alliedCulture?.image} alt="" spacing={true} maxHeight={'150px'}/>

            {
                egyptCultures.includes(alliedCulture.id) ? (
                    <TextBlock>
                        {alliedCulture.name} is one of the weekly events in the theme of Egypt culture. The World Wonder is the {alliedCulture.wonder.name} - a majestic structure located next to the allied city. 
                        It contains 50 levels, each offering a unique reward including a special bonus for collecting {alliedCulture.wonder.boostedResources.map((resource, index) => (
                            <>
                                {index > 0 && index === alliedCulture.wonder.boostedResources.length - 1 ? ' and ' : index > 0 ? ', ' : ''}
                                {resource.name} {getItemIcon(resource.id)}
                            </>
                        ))}
                        &nbsp;that helps you to progress in the Allied Culture faster.

                        <Image src={"/allied-cultures/intro/egypt_city.webp"} alt="" roundedCorners={true} spacing={true} maxHeight={'300px'}/>

                        The core buildings include Houses (Small, Medium and Luxurious) that provide Egypt Workers {getItemIcon("egypt_worker")} and
                        Deben {getItemIcon("deben")}. Production buildings consist of the Papyrus Field, which produces Papyrus {getItemIcon("papyrus")} and
                        the Gold Mine, which yields Gold Ore {getItemIcon("gold_ore")}. These resources are essential for creating the final event products: 
                        Papyrus Scrolls {getItemIcon("papyrus_scroll")} and Ankhs {getItemIcon("ankh")}, 
                        which are produced in the Papyrus Press and Goldsmith buildings, respectively. Starting from level 4, these production buildings can also create 
                        Ceremonial Dresses {getItemIcon("ceremonial_dress")} and Golden Masks {getItemIcon("golden_mask")},
                        necessary for upgrading the Cheops Pyramid from level 21 onward.

                        <Image src={"/shared/resources/irrigation_3.webp"} alt="" spacing={true} maxHeight={'100px'}/>
                        
                        An important part of Egypt Culture is the irrigation system - a similar to the culture you know from your capital city. You can find a range of irrigation buildings in the Buildings Menu.
                        Place these buildings next to your production buildings and make their output increase permanently!

                        <Image src={"/allied-cultures/intro/egypt_bridge.webp"} alt="" roundedCorners={true} spacing={true} maxHeight={'200px'}/>

                        Another vital water source is the Nile River, which flows through the center of your Egyptian city, providing free irrigation. To construct buildings on the opposite side of the Nile, you'll need to build a bridge. 
                        This is crucial not only for completing the questline but also for efficiently producing resources at higher levels of your World Wonder. The construction process consists of 3 phases, each requiring Deben and some time.

                        <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
                            <table style={{ marginTop: '20px', marginBottom: '20px' }}>
                                <thead>
                                    <tr>
                                        <th colSpan={3}>Nile Bridge</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Level</th>
                                        <th>Requirements</th>
                                        <th>Time</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>5000 {getItemIcon("deben")}</td>
                                        <td>30m</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>30000 {getItemIcon("deben")}</td>
                                        <td>2h</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>60000 {getItemIcon("deben")}</td>
                                        <td>6h</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        Visit the <b>Quests</b> tab to see all the quests that await you, the <b>Buildings</b> tab to find an overview of all buildings and their productions, and the <b>World Wonder</b> tab to find all the requirements, rewards and
                        bonuses of the {alliedCulture.wonder.name}!
                    </TextBlock>
                ) : chinaCultures.includes(alliedCulture.id) ? (
                    <TextBlock>
                        {alliedCulture.name} is one of the weekly events in the theme of China culture. The World Wonder is the {alliedCulture.wonder.name} - a majestic structure located next to the allied city. 
                        It contains 50 levels, each offering a unique reward including a special bonus for collecting {alliedCulture.wonder.boostedResources.map((resource, index) => (
                            <>
                                {index > 0 && index === alliedCulture.wonder.boostedResources.length - 1 ? ' and ' : index > 0 ? ', ' : ''}
                                {resource.name} {getItemIcon(resource.id)}
                            </>
                        ))}
                        &nbsp;that helps you to progress in the Allied Culture faster.

                        <Image src={"/allied-cultures/intro/china_city.webp"} alt="" roundedCorners={true} spacing={true} maxHeight={'300px'}/>

                        The core buildings include Houses (Small, Medium and Luxurious) that provide China Workers {getItemIcon("china_worker")} and
                        Wu Zhu {getItemIcon("wu_zhu")}. Production buildings consist of the Rice Farm, which produces Rice {getItemIcon("rice")} and
                        2 special buildings that are obtainable only by unlocking the expansions in the allied city - Moth Glade and Kaolin Quarry, producing Moth Cocoon {getItemIcon("moth_cocoon")} and
                        Kaolin {getItemIcon("kaolin")}, respectively. Secondary production buildings include Thread Processor, which produces Threads {getItemIcon("silk_threads")} and
                        Clay Processor, which produces Clay {getItemIcon("clay")}. These resources are essential for creating the final event products:
                        Silk {getItemIcon("silk")} and Porcelain {getItemIcon("porcelain")}, which are produced in the Silk Workshop and Porcelain Workshop,
                        respectively. The production chain leading to Porcelain is unlocked later in the research of the allied city and is required to upgrade the World Wonder from level 21 onward.

                        <Image src={"/allied-cultures/intro/china_bridge.webp"} alt="" roundedCorners={true} spacing={true} maxHeight={'200px'}/>

                        China does not contain a cultural system. Instead, the challenge lies in managing space and solving a puzzle-like mechanic. This is due to the large building shapes and the relatively small area available to fit them into. To expand your city, you need to
                        repair 2 bridges on the way. Each has 3 stages of construction:
                        
                        <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
                            <table style={{ marginTop: '20px', marginBottom: '20px' }}>
                                <thead>
                                    <tr>
                                        <th colSpan={3}>Southern Bridge</th>
                                        <th colSpan={3}>Eastern Bridge</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Level</th>
                                        <th>Requirements</th>
                                        <th>Time</th>
                                        <th>Level</th>
                                        <th>Requirements</th>
                                        <th>Time</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>1500 {getItemIcon("wu_zhu")}</td>
                                        <td>1m</td>
                                        <td>1</td>
                                        <td>5000 {getItemIcon("wu_zhu")}</td>
                                        <td>30m</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2500 {getItemIcon("wu_zhu")}</td>
                                        <td>10m</td>
                                        <td>2</td>
                                        <td>15000 {getItemIcon("wu_zhu")}</td>
                                        <td>1h</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>5000 {getItemIcon("wu_zhu")}</td>
                                        <td>1h</td>
                                        <td>3</td>
                                        <td>30000 {getItemIcon("wu_zhu")}</td>
                                        <td>2h</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        Visit the <b>Quests</b> tab to see all the quests that await you, the <b>Buildings</b> tab to find an overview of all buildings and their productions, and the <b>World Wonder</b> tab to find all the requirements, rewards and
                        bonuses of the {alliedCulture.wonder.name}!
                    </TextBlock>
                ) : vikingsCultures.includes(alliedCulture.id) ? (
                    <TextBlock>
                        {alliedCulture.name} is one of the weekly events in the theme of Vikings culture. The World Wonder is the {alliedCulture.wonder.name} - a majestic structure located next to the allied city. 
                        It contains 50 levels, each offering a unique reward including a special bonus for collecting {alliedCulture.wonder.boostedResources.map((resource, index) => (
                            <>
                                {index > 0 && index === alliedCulture.wonder.boostedResources.length - 1 ? ' and ' : index > 0 ? ', ' : ''}
                                {resource.name} {getItemIcon(resource.id)}
                            </>
                        ))}
                        &nbsp;that helps you to progress in the Allied Culture faster.

                        <Image src={"/allied-cultures/intro/vikings_city.webp"} alt="" roundedCorners={true} spacing={true} maxHeight={'300px'}/>

                        The core buildings in the game include Houses, which come in three types: Worker Houses, Sailor Houses, and Luxurious Houses. These provide Workers {getItemIcon("viking_worker")}, Sailors {getItemIcon("viking_sailor")}, or both, respectively, along with Pennies {getItemIcon("pennies")}.

                        Production buildings consist of the Beehive, which produces Honey {getItemIcon("honey")}, and the Fishing Pier, which produces Fish {getItemIcon("fish")}.

                        Secondary production buildings include the Tavern, where Honey is turned into Mead {getItemIcon("mead")} and, later, Honey and Fish are processed into Stockfish {getItemIcon("stockfish")}.

                        Finally, there are two advanced production buildings:

                        1) Expedition Pier, which converts Mead and Fish into Ceramic Treasure {getItemIcon("ceramic_treasure")} and Gold Treasure {getItemIcon("gold_treasure")},
                        2) Sailor Port, which processes Mead and Stockfish into Spice Treasure {getItemIcon("spice_treasure")} and Gem Treasure {getItemIcon("gem_treasure")}.
                        To progress further, visit the World Wonder tab to review the requirements for upgrading the {alliedCulture.wonder.name}.

                        <Image src={"/allied-cultures/intro/vikings_glacier.webp"} alt="" roundedCorners={true} spacing={true} maxHeight={'200px'}/>

                        Vikings do not contain a cultural system. Instead, they bring 2 types of expansions: Land Expansions {getItemIcon("expansion_vikings_land")} and Water Expansions {getItemIcon("expansion_vikings_water")}. Some buildings can only be placed on water
                        (such as Fishing Pier, Expedition Pier and Sailor Port). To obtain any of these expansions, simply upgrade the World Wonder to higher levels.<br/><br/>

                        Once you unlock the technology 'Glacier Mastery', you will be able to explore the second part of the playfield. You will need to create a path along the glacier:
                        
                        <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
                            <table style={{ marginTop: '20px', marginBottom: '20px' }}>
                                <thead>
                                    <tr>
                                        <th colSpan={3}>Glacier</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Level</th>
                                        <th>Requirements</th>
                                        <th>Time</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Glacier Mastery</td>
                                        <td>0s</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>100000 {getItemIcon("pennies")}</td>
                                        <td>4h</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        Visit the <b>Quests</b> tab to see all the quests that await you, the <b>Buildings</b> tab to find an overview of all buildings and their productions, and the <b>World Wonder</b> tab to find all the requirements, rewards and
                        bonuses of the {alliedCulture.wonder.name}!
                    </TextBlock>
                ) : null
            }

            <H1 center={true}>Allied Cultures in general</H1>

            <Image src={"/allied-cultures/intro/icon_feature_eventcities.webp"} alt="" spacing={true} maxHeight={'150px'}/>

            <TextBlock>
                Allied Cultures are weekly events where you build a temporary city, accessible via a banner in the bottom-right corner of your screen. These events start on Thursday at 2 PM (CET) and end the following Tuesday at 2 PM (CET).
                After the event is over, next time you start developing your city from scratch and have the possibility to collect all the prizes again!<br/><br/>
                Currently, the game features two Allied Cities: Egypt and China. Each city hosts three distinct events, each centered around different World Wonders. Depending on the event and the featured World Wonder, 
                a unique resource from the Allied City will be boosted, offering varied strategies for city development each time.<br/><br/>
                The sequence of Allied Cultures is as follows: 'The Visionary Invitation' (featuring Egypt and the Abu Simbel wonder), 'Guardian of Heritage' (featuring China and the Great Wall wonder), 
                'The Grand Celebration' (featuring Egypt and the Cheops Pyramid wonder), 'The Festival of Warriors' (featuring China and the Terracotta Army wonder), 'The Trade Exhibition' (featuring Egypt and the Great Sphinx wonder)
                and 'The Festival of Lights' (featuring China and the Forbidden City wonder). Explore all available Allied Cultures using the Select Box at the top of this page.
            </TextBlock>
        </> 
    ); // viking ice glacier: stage 1 is completed by unlocking the technology, stage 2 costs: 100000 pennies, 4h of time
  };
  
  export default Intro;