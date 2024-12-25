import "./Intro.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import TextBlock from "@/src/components/textblock/TextBlock";
import Image from "@/src/components/image/Image";
import H1 from "@/src/components/h1/H1";
import ImageWideHeader from "@/src/components/image-wide-header/ImageWideHeader";
import { getItemIcon } from "@/src/shared-resources/utils/utils";

const Intro = () => {


    return <>
        <Prologue imageSrc={"/campaign/intro/icon-battle.webp"} alt="" maxHeight="80px">
            Campaign is the main PvE component of the game. It follows the main storyline, allows you to meet new heroes on the way and offers variety of rewards, that are both beneficial and necessary for your in-game progress.<br/>
            The primary way to obtain Expansions for your capital city and Research Materials to progress through the Research Tree is to play Campaign battles.
        </Prologue>

        <SectionDivider />

        <TextBlock>

            <H1 center={true}>Campaign</H1>

            <Image src={"/campaign/intro/deco_battle_mode_banner_campaign.webp"} alt="" roundedCorners={true} spacing={true} width={'400px'}/>

            Campaign comes with the main storyline of the game and offers a range rewards, such as Experiences {getItemIcon("xp_hero")} to level-up your Heroes, 
            Research Materials {getItemIcon("lapis_lazuli")} required to unlock specific technologies in the Research Tree,
            Antimatters {getItemIcon("antimatter")} to power the Time Portal and expansions {getItemIcon("expansion_regular")} to expand your Capital City.

            <ImageWideHeader imageUrl={"/campaign/intro/WorldMap_Fallback.webp"} style={{ height: '200px' }} centered={true} spacing={true}/>

            Each region of the World Map is associated with a unique era and a distinct set of heroes that you can encounter and unlock for your army. 
            Visit the <b>Provinces</b> tab for a detailed overview of the rewards available in each province. This can assist you in planning which encounters are worth prioritizing during your battles 
            and which ones offer the best chances of obtaining the items you need. Replaying battles is crucial for obtaining Experiences and Research Materials.

            <Image src={'https://www.innogames.com/fileadmin/user_upload/Screenshot_Column_Desktop_400x320_4.jpg'} alt="" roundedCorners={true} height={'250px'} spacing={true}/>
            
        </TextBlock>

        <TextBlock>

            <H1 center={true}>Stamina</H1>

            <Image src={"/shared/resources/CampaignEnergy.webp"} alt="" spacing={true} height={'70px'} marginTop={'10px'} />

            Stamina is essential for initiating battles on the Campaign Map, with each encounter costing 8 {getItemIcon("energy")} (regardless of the outcome).
            It regenerates at a rate of 1 per 2 minutes. You can earn more Stamina from Quests, Treasure Hunt encounters, by watching ads (one ad gives 8 {getItemIcon("energy")} and
            you have 3 available ads per day), from rewards of Allied City events or by purchasing it with gems (100 {getItemIcon("energy")} for 50 {getItemIcon("gems")}).<br/>
            Stamina is also required to initiate battles in Tesla Storms. It's important to manage your Stamina carefully and spread it between both features - Campaign gives you experiences to level-up your heroes, while
            Tesla Storms allow you to unlock their new levels.<br/> 

        </TextBlock>

        <TextBlock>

            <H1 center={true}>Automatic Battles</H1>

            <Image src={"/shared/resources/icon_campaign_battle_ticket.webp"} alt="" spacing={true} roundedCorners={true} height={'70px'} marginTop={'10px'} />

            Victory Tickets can be used to instantly receive a reward for the campaign encounter that has been completed with 3 stars. It can be received from Quests, by watching ads 
            (up to 6 {getItemIcon("victory_ticket")} per day) and most importantly, from completing daily quests in Season Pass (up to 23 {getItemIcon("victory_ticket")} daily).

        </TextBlock>
    </>
}

export default Intro;