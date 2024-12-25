import "./Customizations.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import H1 from "@/src/components/h1/H1";
import { customizations } from "../../../shared-resources/data/customizations";
import _customizations from "../_data/_customizations";
import CustomizationObject from "@/src/components/customization/CustomizationObject";
import { customizationsImages } from "../_data/customizationsImages";

import allEvents from "../data";

const Customizations = (props) => {
  
    const getEvent = () => {
        return allEvents.find(oneEvent => oneEvent.id == props.selectedEvent);
    }

    const event = getEvent();

    var eventCustomizations;

    if (props.customizationId) {
        eventCustomizations = customizations.filter((customization) => customization.id === props.customizationId);
    } else {
        eventCustomizations = customizations.filter((customization) => customization.id.includes(event.id));
    }

    let customizationImages = customizationsImages[getEvent().codeName];

    return (
        <>
            <Prologue imageSrc={"/events/customizations/icon_selection_kit_customizations_generic.webp"} alt={"Events"} maxHeight={"65px"} >
                This is the list of all new customizations introduced during this event.
            </Prologue>

            <SectionDivider />

            <H1 center={true}>Customizations</H1>

            <div style={{ textAlign: 'center' }}>
                <small style={{ fontSize: '11px', color: '#916a17' }}>
                    <i>Note: The rewards offered by these customizations vary depending on your current era. Be sure to set your era on the website using the dropdown menu in the navigation bar.</i>
                </small>
            </div>

            {Object.keys(customizationImages).map((oneCustomizationId) => (
                <CustomizationObject customizationId={oneCustomizationId} img={customizationImages[oneCustomizationId]} obtainableFrom={getEvent().name}/>
            ))}
        </>
    );
  };
  
  export default Customizations;