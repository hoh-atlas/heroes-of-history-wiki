import "./Intro.css";

import Image from "@/src/components/image/Image";
import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import H1 from "@/src/components/h1/H1";
import TextBlock from "@/src/components/textblock/TextBlock";
import { getItemIcon } from "../../../shared-resources/utils/utils";

const Intro = (props) => {

    return <>
        <Prologue imageSrc={"/treasure-hunt/intro/icon_ath_attempt.webp"} alt={"Treasure Hunt"} maxHeight={"65px"} >
        Alliance Treasure Hunt (ATH) is a weekly event that gives players the opportunity to earn special rewards.<br/>
        Your heroes embark on an adventure to a tropical island to battle against pirates. Each battle requires compasses, which are gained every 90 minutes.<br/>
        Rewards include premium items such as Fountain of Youth tokens, Mastery Points, and a truckload of customizations for your city buildings.
        </Prologue>
        <SectionDivider />

        <H1 center={true}>Treasure Hunt</H1>

        <Image src={"/treasure-hunt/intro/deco_battle_mode_banner_ath.webp"} alt="" roundedCorners={true} spacing={true} width={'400px'}/>

        <TextBlock>
            The Alliance Treasure Hunt (ATH) is a weekly event that begins on Friday at 2 PM (CET) and ends the following Thursday at 2 PM (CET). During this time, alliance members embark on an adventure 
            on a tropical island, where they battle pirates and earn a wealth of rewards, including special building customizations, Mastery Points and Tokens for the Fountain of Youth evolving building.
            Each completed encounter contributes to the alliance's overall progress. Alliances compete in rankings, which are adjusted weekly to ensure that only comparable alliances face off against each other.
        </TextBlock>

        <H1 center={true}>How to participate</H1>

        <Image src={"/images/treasure-hunt/intro/Technology_BronzeAge_Alliances.webp"} alt="" spacing={true} width={'100px'}/>

        <TextBlock>
            To participate in the ATH, you must have researched the Alliances technology (available at the beginning of the Bronze Age) and be a member of an alliance when the ATH starts.
            You can only play for one alliance during each ATH week, so if you leave your alliance, you will need to wait until the next ATH begins to participate with your new alliance.
            However, if you return to your previous alliance, you can continue playing in the ongoing ATH.
        </TextBlock>

        <H1 center={true}>Difficulties</H1>

        <Image src={"/treasure-hunt/intro/icon_ath_difficulty_0.webp"} alt={""} spacing={true} width={'100px'}/>

        <TextBlock>
            ATH features 9 difficulty levels, ensuring that you always face opponents of comparable strength and receive rewards relevant to your current in-game progress.
            Higher difficulties unlock as you advance through the ages and generally offer more valuable prizes, including more powerful completion rewards for finishing the first three stages.
            The fourth stage is a bonus stage that allows you to earn additional rewards and ranking points for your alliance. The higher difficulties also grant more ranking points for your alliance with each completed encounter.
            Once you select a difficulty for the week, it cannot be changed, but you can choose a different one when the next ATH begins.
        </TextBlock>

        <H1 center={true}>Compasses</H1>

        <Image src={"/treasure-hunt/intro/icon_ath_attempt.webp"} alt={""} spacing={true} width={'80px'}/>

        <TextBlock>
            Unlike in the Campaign, where Stamina {getItemIcon("energy")} is used, in ATH you need Compasses to initiate battles. Each encounter costs 1 Compass to start. The ATH week begins with 5 Compasses, which regenerate every 1.5 hours.
            There is a cap of 10 Compasses at a time, so it's important to play regularly to be able to complete the ATH. Additional Compasses can be purchased with Coins {getItemIcon("coins")} or Gems {getItemIcon("gems")}, but they are quite expensive.
            When playing actively and not losing to many battles, however, the free Compasses you generate should be sufficient to complete the event.
        </TextBlock>

        <H1 center={true}>Healing Shrines</H1>

        <Image src={"/treasure-hunt/checkpoints/icon_ath_encounter.webp"} alt={""} spacing={true} width={'100px'}/>

        <TextBlock>
            The most significant difference between the Campaign and ATH is that in ATH, your heroes carry over their health status from one encounter to the next. As you progress through the encounters,
            you'll notice your heroes becoming weaker, often ending up in a need to use heroes you don't regularly rely on.
            Fortunately, there's a solution: after each boss battle (every 5th encounter), you'll come across a Healing Shrine. Here, you'll meet a group of pirates
            who will demand resources in exchange for healing your heroes by 25%. To negotiate with them, you'll need to play a minigame - more details can be found in the Negotiation tab at the top of this page (coming soon).
            Once your heroes are healed, you can continue using them in ATH battles. Keep in mind that using healers in ATH battles is especially useful, as they too play a crucial role in keeping your heroes alive.
        </TextBlock>

        <H1 center={true}>Learn more tips & strategies</H1>

        <Image src={"/treasure-hunt/intro/Technology_KingdomOfSicily_MagnifyingGlass.webp"} alt={""} spacing={true} width={'100px'}/>

        <TextBlock>
            Visit the respective Tabs at the top of this page to learn more tips & strategies about the Alliance Treasure Hunt.
        </TextBlock>

    </>
}

export default Intro;