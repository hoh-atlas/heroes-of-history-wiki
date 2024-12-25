import "./Customizations.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import H1 from "@/src/components/h1/H1";
import _customizations from "../../events/_data/_customizations";
import CustomizationObject from "@/src/components/customization/CustomizationObject";
import { customizationsImages } from "../../events/_data/customizationsImages";

const Customizations = (props) => {

    let customizationImages = customizationsImages["TreasureHunt"];    

    return (
        <>
            <Prologue imageSrc={"/events/customizations/icon_selection_kit_customizations_generic.webp"} alt={"Treasure Hunt"} maxHeight={"65px"} >
                This is the list of all customizations you can obtain during Alliance Treasure Hunt.
            </Prologue>

            <SectionDivider />

            <H1 center={true}>Customizations</H1>

            <div style={{ textAlign: 'center' }}>
                <small style={{ fontSize: '11px', color: '#916a17' }}>
                    <i>Note: The rewards offered by these customizations vary depending on your current era. Be sure to set your era on the website using the dropdown menu in the navigation bar.</i>
                </small>
            </div>

            {Object.keys(customizationImages).map((oneCustomizationId) => (
                <CustomizationObject customizationId={oneCustomizationId} img={customizationImages[oneCustomizationId]} obtainableFrom={"Treasure Hunt"}/>
            ))}
        </>
    );
  };
  
  export default Customizations;