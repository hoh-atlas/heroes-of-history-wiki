import "./Strategies.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import { getItemIcon } from "../../../shared-resources/utils/utils";
import Image from "@/src/components/image/Image";
import TextBlock from "@/src/components/textblock/TextBlock";
import H1 from "@/src/components/h1/H1";
import LayoutsBook from "../layouts/LayoutsBook";

import allAlliedCultures from "../data";

const Strategies = (props) => {
    
    const getAlliedCulture = () => {
        return allAlliedCultures.find(oneAlliedCulture => oneAlliedCulture.id == props.selectedAlliedCulture);
    }

    const alliedCulture = getAlliedCulture();

    const egyptCultures = ["egypt_cheops_pyramid", "egypt_great_sphinx", "egypt_abu_simbel"];
    const chinaCultures = ["china_terracotta_army", "china_great_wall", "china_forbidden_city"];
    const vikingsCultures = ["vikings_yggdrasil", "vikings_ellida", "vikings_valhalla"];
  
    return (
      <>
        <Prologue imageSrc={"/allied-cultures/strategies/icon_unitstat_movementspeed.webp"} alt={"Strategies"} maxHeight={"65px"} >
          This is an overview of strategies and layouts to help you efficiently progress in the Allied Culture and rank among the top players in the Leagues.
          Follow the flow from top to bottom, as the layout of your Allied City will evolve over time.
        </Prologue>
        
        <SectionDivider />

            <H1 center={true}>Strategies & Layouts</H1>

            <Image src={alliedCulture?.image} alt="" spacing={true} maxHeight={'150px'}/>

            {
                egyptCultures.includes(alliedCulture.id) ? (
                    <TextBlock>
                        When the Allied Culture event begins, you should keep the following goals in mind:

                        <ul>
                            <li>Build as many Small Houses as possible to produce a lot of Deben {getItemIcon("deben")}</li>
                            <li>Prioritize placing expansions near the river first, then continue expanding farther out</li>
                            <li>Sell the first Medium House required by the questline as soon as you complete the quest</li>
                            <li>Short productions are more effective than the long ones, so the shorter you choose, the faster you will progress</li>
                            <li>This guide will help you compete with Gold League players by maximizing the effectiveness of your city. To achieve that, you still need to play regularly of course</li>
                            <li>Although this guide is not yet fully complete, it offers a solid foundation for your Egypt city, which you can further build upon in the final stages of the event according to your specific needs</li>
                        </ul>

                        In the picture below, you can find the sketch of the Egypt city right at the beginning:

                        <Image src={"/allied-cultures/strategies/sketch_egypt_1.webp"} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        First, you want to maximize the number of expansions, so that you can place many Small Houses to keep unlocking technologies in the research tree quickly. Keep placing the Small Houses
                        right next to the river and build one of each production buildings and workshops. When you upgrade
                        the World Wonder to level 2, you will have 5 expansions in total. Place them as follows:

                        <Image src={"/allied-cultures/strategies/sketch_egypt_2.webp"} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        After you unlock 'Geometry', 'Egyptian Diplomacy' and 'Joists' technologies, make sure to upgrade all your houses and production buildings to level 2. Then, continue with the upper row of technologies
                        until you unlock 'Burial Rites'. At this point, start upgrading your Small Houses to level 3. Suggested layout for this state:

                        <LayoutsBook header={"Layout 1"} images={["/allied-cultures/strategies/layout_egypt_1_sector_1.webp","/allied-cultures/strategies/layout_egypt_1_sector_2.webp"]} />

                        Continue with the second row of technologies. Upgrade two Small Wells as soon as you unlock 'Hieroglyphs' - that will maximize the irrigation bonus for both workshops. Keep with this layout until
                        you upgrade the World Wonder to level 7. That will unlock a new set of expansions. Place them as follows:

                        <Image src={"/allied-cultures/strategies/sketch_egypt_3.webp"} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        Spam the free space with Small Houses, so that you can quickly navigate to 'Egyptian Consensus' technology. Also make sure to initiate the first construction
                        phases of the Nile Bridge at any time when you don't necessarily need Deben for other upgrades. The 'Egyptian Consensus' technology will unlock level 4 for Small Houses, so once unlocked, try to uprade your houses as soon as possible.
                        Next, unlock the remaining technologies of this column. Then, prioritize upgrading your production buildings (Papyrus Field and Gold Mine) to level 4, followed by your workshops (Papyrus Workshop and Goldsmith).
                        Suggested layout for this state:

                        <LayoutsBook header={"Layout 2"} images={["/allied-cultures/strategies/layout_egypt_2_sector_1.webp","/allied-cultures/strategies/layout_egypt_2_sector_2.webp"]} />

                        This layout contains maximized number of Small Houses, as collecting Deben is the priority for now. Keep upgrading the World Wonder, while focus on researching technologies so that you can
                        take your Small Houses to level 5. Therefore, 'Astrology' is the next goal in the research. Keep researching technologies and upgrading all your houses, production buildings, workshops as well as channels
                        to level 5. Once you upgrade the World Wonder to level 13 and 17, you will get 11 expansions (5+6) in total. Place the expansions as follows:

                        <Image src={"/allied-cultures/strategies/sketch_egypt_4.webp"} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        In the last column of technologies, unlock 'Astronomy' and 'Scaffolding' first. There is no need to push Small Houses to level 6, so it will be more beneficial to upgrade your workshops first.<br/><br/>
                        
                        Keep filling the space with more workshops (Papyrus Workshop and Goldsmith - add one of each) and more production buildings. Generally, the goal should be to have 4 workshops (2+2) and around 5 production buildings of each (Papyrus Fields
                        and Goldmines).<br/><br/>
                        
                        {
                            alliedCulture.id === "egypt_great_sphinx" ? (
                                <span>
                                    Because the World Wonder of this event offers a bonus for Gold Ore production, we will leave out some Gold Mines and build Papyrus Fields instead. Take a look at the Layout 3 to find the efficient way of use of our
                                    currently available space.

                                    <LayoutsBook header={"Layout 3"} images={["/allied-cultures/strategies/layout_egypt_3_sector_1.webp","/allied-cultures/strategies/layout_egypt_3_sector_2.webp","/allied-cultures/strategies/layout_egypt_3_sector_3.webp"]} />

                                    This layout is heavily focused on workshops. If you maximize the irrigation buildings, the workshops will receive the maximum possible irrigation boost. Not all Small Houses have full irrigation bonus, but that is not necessary
                                    now when all relevant technologies in the research are finished.<br/><br/>
                                </span>
                            ) : alliedCulture.id === "egypt_abu_simbel" ? (
                                <span>
                                    Because the World Wonder of this event offers a bonus for Papyrus production, you can leave out some Papyrus Fields and build Gold Mines instead. The layout 3 for this state is not yet available, but we will add it soon.<br/><br/>

                                </span>
                            ) : alliedCulture.id === "egypt_cheops_pyramid" ? (
                                <span>
                                    The layout 3 for this state is not yet available, but we will add it soon.<br/><br/>
                                </span>
                            ) : (
                                <span>
                                    Missing content!
                                </span>
                            )
                        }

                        Keep upgrading your World Wonder to level 24 to unlock the last set of expansions. Place them as follows:

                        <Image src={"/allied-cultures/strategies/sketch_egypt_5.webp"} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        Fill this space with additional production buildings, to make sure your workshops can run more consistently.<br/><br/>

                        {
                            alliedCulture.id === "egypt_great_sphinx" ? (
                                <span>
                                     Suggested layout for the final state, with all available expansions, is here:

                                    <LayoutsBook header={"Layout 4"} images={["/allied-cultures/strategies/layout_egypt_4_sector_1.webp","/allied-cultures/strategies/layout_egypt_4_sector_2.webp","/allied-cultures/strategies/layout_egypt_4_sector_3.webp"]} />
                                </span>
                            ) : alliedCulture.id === "egypt_abu_simbel" ? (
                                <span>
                                    We are currently working on the final section of this guide to help you with the final layouts of the Egypt city,
                                    and we plan to have it ready in the near future.

                                </span>
                            ) : alliedCulture.id === "egypt_cheops_pyramid" ? (
                                <span>
                                    We are currently working on the next sections of this guide to help you with the final layouts of the Egypt city,
                                    and we plan to have it ready in the near future.
                                </span>
                            ) : (
                                <span>
                                    Missing content!
                                </span>
                            )
                        }

                    </TextBlock>
                ) : chinaCultures.includes(alliedCulture.id) ? (
                    <TextBlock>
                        When the Allied Culture event begins, you should keep the following goals in mind:

                        <ul>
                            <li>Build as many Small Houses as possible to produce a lot of Wu Zhu {getItemIcon("wu_zhu")} and replace them with Medium Houses later to obtain more Workers {getItemIcon("china_worker")}</li>
                            <li>Find the shortest way to Kaolin Quarries, as they will produce a highly demanded Kaolin {getItemIcon("kaolin")} later in the event</li>
                            <li>On your way to Kaolin Quarries, unlock almost all the available Moth Glades</li>
                            <li>Sell the first Medium House required by the questline as soon as you complete the quest</li>
                            <li>Prioritize finishing the research tree before leveling your workshops</li>
                            <li>Short productions are more effective than the long ones, so the shorter you choose, the faster you will progress</li>
                            <li>This guide will help you compete with Gold League players by maximizing the effectiveness of your city. To achieve that, you still need to play regularly of course</li>
                        </ul>

                        In the picture below, you can find the sketch of the China city right at the beginning:

                        <Image src={"/allied-cultures/strategies/sketch_1.webp"} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        Your first goal should be to upgrade the World Wonder to level 7, in order to obtain the necessary expansions required to reach the second bridge. At level 7, you will have
                        11 expansions available in total. As soon as you unlock any of them, start placing it right away to create the path shown below.

                        <Image src={"/allied-cultures/strategies/sketch_2.webp"} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        During this process, spam the free space with Small Houses
                        and build one of each of the following production buildings: Rice Farm, Thread Processor, Silk Workshop. Keep all of these production buildings at level 1, while focusing on leveling up Small Houses as high as possible.
                        Also make sure to upgrade the first Moth Glade to level 2 at your earliest convenience - it will help you to complete the questline 'Silk Production' that gives a lot of Wu Zhu and Rice. Wu Zhu provided by this questline
                        will help you to construct the first bridge.
                        Also, it is not necessary to unlock the second Moth Glade before constructing the first bridge.<br/><br/>

                        As you can see, with this number of expansions, you will be able to reach the first Koaolin Quarry. Also, do not forget to construct the bridges on your way as soon as you get close to them!
                        The layout below will show you the current state:

                        <LayoutsBook header={"Layout 1"} images={["/allied-cultures/strategies/layout_1_sector_1.webp","/allied-cultures/strategies/layout_1_sector_2.webp","/allied-cultures/strategies/layout_1_sector_3.webp"]} />

                        Keep in mind - when at any point you unlock the 'Dedicated Workforce' technology in research, continue researching technologies only in the top branch. The goal is to unlock Small House and Kaolin Quarry upgrades first, so
                        do not research 'Iron Plough' technology before you research 'Urban Management'.<br/><br/>
                        
                        In the meantime, you need to unlock more expansions and for that you will need to upgrade the World Wonder to level 13. To keep leveling the World Wonder efficiently, it's time to upgrade your Rice Farm, Thread Processor and Silk Workshop
                        buildings to level 2. After you reach level 13, start placing the new expansions as follows:

                        <Image src={"/allied-cultures/strategies/sketch_3.webp"} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        All Kaolin Quarries are now available (start constructing and upgrading them!) and your World Wonder is at level 13. Your focus now is to complete the research tree and in the meantime,
                        add more production buildings into your city. In total, you should now have 3x Thread Processor, 2x Silk Workshop and 3x Rice Farm.
                        Suggested layout for this state is below:

                        <LayoutsBook header={"Layout 2"} images={["/allied-cultures/strategies/layout_2_sector_1.webp","/allied-cultures/strategies/layout_2_sector_2.webp","/allied-cultures/strategies/layout_2_sector_3.webp"]} />

                        Keep upgrading Small Houses to level 5. Once done, upgrade your workshops to level 3. When your World Wonder reach level 17 and you get new expansions, place them as follows:

                        <Image src={"/allied-cultures/strategies/sketch_4.webp"} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        Fill this space with more production buildings, so that you have 4x Thread Processor and 3x Silk Workshop. Also add more Rice Farms. Add these buildings by replacing Small Houses,
                        but only after you've completed the research tree and upgraded most of your workshops to level 6. Suggested layout for this state:

                        <LayoutsBook header={"Layout 3"} images={["/allied-cultures/strategies/layout_3_sector_1.webp","/allied-cultures/strategies/layout_3_sector_2.webp","/allied-cultures/strategies/layout_3_sector_3.webp"]} />

                        The reason why you can remove most of the Small Houses after you finish the research tree is that you won't need so much Wu Zhu {getItemIcon("wu_zhu")} anymore. Rearrange the city so that you include Clay Processors
                        and Porcelain Workshops. Some of the removed Small Houses replace with Medium Houses, which provide more Workers {getItemIcon("china_worker")} per tile. It's sufficient to keep them at level 1.
                        When you reach level 24, unlock the following expansions:

                        <Image src={"/allied-cultures/strategies/sketch_5.webp"} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        After you own this last set of free expansions, you can add more Clay Processors and Porcelain Workshops:

                        <LayoutsBook header={"Layout 4"} images={["/allied-cultures/strategies/layout_4_sector_1.webp","/allied-cultures/strategies/layout_4_sector_2.webp","/allied-cultures/strategies/layout_4_sector_3.webp"]} />

                        Note that this layout is only the first step towards producing Porcelain. As you produce more of it and upgrade the World Wonder further, you will need more Porcelain Workshops and Clay Processors (do it by replacing some of the Silk Workshops
                        and Thread Processors - or possibly all of them, if you have prepared a decent reserve of Silk Threads and Silk). You will also require an increased output of Rice.
                        Soon after reaching Layout 4, aim for the Layout 5, which will provide a good balance of resources until the end of the event:

                        <LayoutsBook header={"Layout 5"} images={["/allied-cultures/strategies/layout_5_sector_1.webp","/allied-cultures/strategies/layout_5_sector_2.webp","/allied-cultures/strategies/layout_5_sector_3.webp"]} />

                        Note that in Layout 5, all Thread Processors have been removed. Only do that if you have some reserve of Silk Threads, which you should have if you have collected resources consistently throughout the event.<br/><br/>

                        In this final part of the event, many of you will likely have slightly different reserves of primary resources (such as Rice or Silk Threads) depending on how long it took to reach certain layouts
                        and how consistently you collected productions. For this reason - if you find yourself needing a specific resource over time - you may need to make slight modifications to Layout 5 based on your particular needs. For example,
                        if the current World Wonder offers bonus for Rice, you may remove some of your Rice Farms and replace them by other production buildings you need.

                    </TextBlock>
                ) : vikingsCultures.includes(alliedCulture.id) ? (
                    <TextBlock>
                        When the Allied Culture event begins, you should keep the following goals in mind:

                        <ul>
                            <li>Build as many Worker Houses as possible to produce a lot of Pennies {getItemIcon("pennies")} and later, replace most of them with Sailor Houses, so that once the research is done, you can focus more
                                on producing Treasures {getItemIcon("gold_treasure")}</li>
                            <li>Place expansions in a checkerboard pattern to save time when placing adjoining expansions (take a look at the sketches below to learn more)</li>
                            <li>When progressing in research, always try to unlock the upgrades for Houses first</li>
                            <li>Short productions are more effective than the long ones, so the shorter you choose, the faster you will progress</li>
                            <li>This guide will help you compete with Gold League players by maximizing the effectiveness of your city. To achieve that, you still need to play regularly of course</li>
                        </ul>

                        In the picture below, you can find the sketch of the Vikings city right at the beginning:

                        <Image src={"/allied-cultures/strategies/sketch_vikings_1.webp"} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        Right when the Vikings culture begins, you will have 3 Land Expansions and 2 Water Expansions available. Place them as follows:

                        <Image src={"/allied-cultures/strategies/sketch_vikings_2.webp"} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        Maximize the number of Worker Homes and build a necessary amount of Sailor Homes. From production buildings, one from each (Beehive, Tavern, Fishing Pier and Expedition Pier) will be enough for now. Your first goal in research will be to unlock 'Jarldom' and 'Thralls and Karls'
                        technologies. Once done, upgrade all your houses to level 2. The layout below will show you the current state:

                        <LayoutsBook header={"Layout 1"} images={["/allied-cultures/strategies/layout_vikings_1_sector_1.webp"]} />

                        Next goal is to unlock the 'Improved Beekeeping' technology and upgrade your Beehive to level 2. Around this time, you should have your World Wonder at level 2. Place the new expansions as follows:

                        <Image src={"/allied-cultures/strategies/sketch_vikings_3.webp"} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        Note that you can start unlocking all of these expansions simultaneously. Next goal is to unlock 'Tar Ovens' technology, then 'Runic Writing' technology and then 'Fishing Nets' technology. Then, start upgrading your Worker Houses
                        to level 3. See the layout below for the current state:

                        <LayoutsBook header={"Layout 2"} images={["/allied-cultures/strategies/layout_vikings_2_sector_1.webp"]} />

                        When you upgrade your World Wonder to level 7, place the new expansions as displayed on the sketch below. Note, that thanks to the checkerboard pattern we follow, you can place them simultaneously and save time:

                        <Image src={"/allied-cultures/strategies/sketch_vikings_4.webp"} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        Fill this space with more Houses, unlock 'Fearing Mastery' technology and upgrade Tavern, Fishing Spots and Expedition Piers to level 2. Suggested layout for this state:

                        <LayoutsBook header={"Layout 3"} images={["/allied-cultures/strategies/layout_vikings_3_sector_1.webp","/allied-cultures/strategies/layout_vikings_3_sector_2.webp"]} />

                        Keep upgrading all the newly built Worker Houses to level 3. Then head for the 'Pictograms' technology and upgrade your Beehive to level 3. Once done, unlock 'Skaldic Poetry' and start upgrading your Sailor Houses to level 3.
                        Then, unlock 'Drift Nets'.<br/><br/>

                        When your World Wonder reach level 13, place the new expansions as follows:

                        <Image src={"/allied-cultures/strategies/sketch_vikings_5.webp"} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        As we will soon start heavily focusing on productions, we will need more advanced Sailor Houses. To achieve that, head for the 'Funeral At Sea' technology. Once unlocked, start upgrading your Sailor Houses to level 4. Upgrade your Taverns to level 3.
                        Take a look at the current state:

                        <LayoutsBook header={"Layout 4"} images={["/allied-cultures/strategies/layout_vikings_4_sector_1.webp","/allied-cultures/strategies/layout_vikings_4_sector_2.webp","/allied-cultures/strategies/layout_vikings_4_sector_3.webp"]} />

                        After reaching World Wonder level 17, we start exploring the second part of the playfield (behind the glacier). The first 5 expansions of this part are available right after creating the path along the glacier. Place the expansions you receive from
                        level 17 as follows:

                        <Image src={"/allied-cultures/strategies/sketch_vikings_6.webp"} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        Find the shortest path to 'Mead Mastery' technology (so for now, skip 'Glima Fighting'). Upgrade all Houses, Beehives and Fishing Piers to level 4. Upgrade your Taverns and Expedition Piers to level 3. It is sufficient to keep Sailors
                        at level 1 for now. See the layout below for the current state:

                        <LayoutsBook header={"Layout 5"} images={["/allied-cultures/strategies/layout_vikings_5_sector_1.webp","/allied-cultures/strategies/layout_vikings_5_sector_2.webp","/allied-cultures/strategies/layout_vikings_5_sector_3.webp"]} />

                        When you upgrade the World Wonder to level 24, you will unlock the last set of expansions. Place them as follows:

                        <Image src={"/allied-cultures/strategies/sketch_vikings_7.webp"} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        Suggested layout for the final set of expansions can be found below. We are now heavily focusing on productions, so we have replaced some of our Worker Homes with Sailor Homes, to obtain more Sailors.
                        You can stay with this layout until the end of the event. Note that depending on the boost from the World Wonder, you may want to slightly modify the
                        ratio of Houses and Beehives. We will elaborate on that as we will continue working on this guide in the future.

                        <LayoutsBook header={"Layout 6"} images={["/allied-cultures/strategies/layout_vikings_6_sector_1.webp","/allied-cultures/strategies/layout_vikings_6_sector_2.webp","/allied-cultures/strategies/layout_vikings_6_sector_3.webp","/allied-cultures/strategies/layout_vikings_6_sector_4.webp"]} />

                        {/* two issues currently: layout4_sector_3 contains Expedition Pier. Should be empty to build 2 Sailor Ports in those 3 expansions later
                        second issue: sketches 2,3,4,5 have water expansions too high. There is a gap of 3 fields from the top*/}
                    </TextBlock>
                ) : null
            }
      </>
    );
}

export default Strategies;