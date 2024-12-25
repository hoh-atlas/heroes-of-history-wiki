import allBuildings from "../data";
import { stoneAgeBuildings, bronzeAgeBuildings, minoanEraBuildings, classicGreeceBuildings, earlyRomeBuildings, romanEmpireBuildings, byzantineEraBuildings, ageOfTheFranksBuildings, feudalAgeBuildings, iberianEraBuildings, kingdomOfSicilyBuildings } from "../_data/buildingsImages";
import BuildingsHandler from "@/src/components/buildings/BuildingsHandler";

const Buildings = (props) => {

    const selectedEra = props.selectedEra;
    let buildings;
    let previousBuildings;

    switch (selectedEra.value) {
        case "StoneAge": buildings = stoneAgeBuildings; break;
        case "BronzeAge": buildings = bronzeAgeBuildings; previousBuildings = stoneAgeBuildings; break;
        case "MinoanEra": buildings = minoanEraBuildings; previousBuildings = bronzeAgeBuildings; break;
        case "ClassicGreece": buildings = classicGreeceBuildings; previousBuildings = minoanEraBuildings; break;
        case "EarlyRome": buildings = earlyRomeBuildings; previousBuildings = classicGreeceBuildings; break;
        case "RomanEmpire": buildings = romanEmpireBuildings; previousBuildings = earlyRomeBuildings; break;
        case "ByzantineEra": buildings = byzantineEraBuildings; previousBuildings = romanEmpireBuildings; break;
        case "AgeOfTheFranks": buildings = ageOfTheFranksBuildings; previousBuildings = byzantineEraBuildings; break;
        case "FeudalAge": buildings = feudalAgeBuildings; previousBuildings = ageOfTheFranksBuildings; break;
        case "IberianEra": buildings = iberianEraBuildings; previousBuildings = feudalAgeBuildings; break;
        case "KingdomOfSicily": buildings = kingdomOfSicilyBuildings; previousBuildings = iberianEraBuildings; break;
    }
  
    return (
      <>
        <BuildingsHandler buildingsData={allBuildings} buildingsImages={buildings} previousBuildingsImages={previousBuildings} cityType={'capitalCity'}/>
      </>
    );
}

export default Buildings;