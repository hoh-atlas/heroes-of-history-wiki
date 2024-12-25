import "./Quests.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import OneQuestline from "@/src/components/quests/OneQuestline";

import allAlliedCultures from "../data";

const Quests = (props) => {

    const getAlliedCulture = () => {
        return allAlliedCultures.find(oneAlliedCulture => oneAlliedCulture.id == props.selectedAlliedCulture);
    }
  
    return (
        <>
            <Prologue imageSrc={"/allied-cultures/quests/quests_icon.webp"} alt={"Event"} maxHeight={"65px"} >
                Quests introduce players to the story of the allied culture and offer a variety of rewards.
            </Prologue>
            <SectionDivider />
            <div className="questlines-container">
                {
                    getAlliedCulture().questlines?.map((oneQuestline) => (
                        <OneQuestline questline={oneQuestline} headerColor={getAlliedCulture().questlineColor} />
                    ))
                }
            </div>
        </>
    );
}

export default Quests;
