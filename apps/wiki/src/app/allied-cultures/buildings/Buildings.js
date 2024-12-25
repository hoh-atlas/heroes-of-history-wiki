import "./Buildings.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import allied_culture_buildings from "../_data/buildings";
import { egyptBuildings, chinaBuildings, vikingBuildings } from "../_data/buildingsImages";

import allAlliedCultures from "../data";
import BuildingsHandler from "@/src/components/buildings/BuildingsHandler";

const Buildings = (props) => {
  
    const getAlliedCulture = () => {
        return allAlliedCultures.find(oneAlliedCulture => oneAlliedCulture.id == props.selectedAlliedCulture);
    }

    const eventType = getAlliedCulture().type;
    let buildings;

    switch (eventType) {
        case "Egypt": buildings = egyptBuildings; break;
        case "China": buildings = chinaBuildings; break;
        case "Vikings": buildings = vikingBuildings; break;
    }
  
    return (
      <>
        <Prologue imageSrc={"/allied-cultures/buildings/buildings_icon.webp"} alt={"Event"} maxHeight={"65px"} >
            Use research of the Allied Culture to unlock exclusive buildings. These buildings offer unique workers and produce special resources essential for advancing within the Allied Culture.
        </Prologue>
        <SectionDivider />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px",marginBottom: "15px" }}>
            
        </div>

        <BuildingsHandler buildingsData={allied_culture_buildings} buildingsImages={buildings} cityType={eventType}/>
      </>
    );
}

export default Buildings;