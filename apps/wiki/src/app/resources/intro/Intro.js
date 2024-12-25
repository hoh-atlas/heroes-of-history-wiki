import "./Intro.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import TextBlock from "@/src/components/textblock/TextBlock";
import H1 from "@/src/components/h1/H1";
import Image from "@/src/components/image/Image";
import Icon from "@/src/components/icon/Icon";
import { getItemIcon } from "../../../shared-resources/utils/utils";

const Intro = () => {

    return <>
        <Prologue imageSrc={"/resources/intro/icon-goldfood.webp"} alt={"Provinces"} maxHeight={"65px"}>
        The game offers a variety of resources that can be collected through different in-game features. These resources are essential for constructing new buildings, researching technologies, and leveling up your heroes.<br/>
        They are divided into several categories, each with unique methods of acquisition and distinct uses.
        {/*which resources are limited and which are not
        how to increase the storage (by progressing to the next era or purchasing a premium)*/}
        </Prologue>

        <SectionDivider/>
        <TextBlock>

            <H1 center={true}>Resources</H1>
            <br/>
            To follow your current state of resources, take a look at the top menu to find Coins {getItemIcon("coins")} and Food {getItemIcon("food")} (limited by the storage capacity of your current era)
            and most importantly, Goods <Icon resource={"/resources/intro/goods.webp"}/> button to track the unlimited resources you produced in workshops and collected on the campaign map.

            {<Image src={"/resources/intro/ui_top.webp"} alt="" roundedCorners={true} height={'180px'} heightMobile={'100px'} spacing={true}/>}

            The storage capacity for Coins and Food increases each time you unlock the first technology of a new era. If your storage is full, you won't be able to collect more from your houses and farms, 
            but you can still receive them from other sources where they stand as rewards. Further option to increase the storage is to purchase a monthly premium.

            <Image src={"/resources/intro/icon_storagecapreward_coins.webp"} alt="" roundedCorners={true} spacing={true} centered={true}/>

            Heroes of History contains a diverse range of resources and you can find them all within the Tabs at the top of this page.
            
        </TextBlock>
    </>
}

export default Intro;