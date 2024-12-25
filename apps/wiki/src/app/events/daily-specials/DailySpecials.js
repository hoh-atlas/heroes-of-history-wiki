import "./DailySpecials.css";
import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import H1 from "@/src/components/h1/H1";
import { calculateDaysBetween } from "@/src/shared-resources/utils/utils";
import Calendar from "./Calendar";
import DailySpecialWrapper from "./DailySpecialWrapper";
import { customizationsImages } from "../_data/customizationsImages";

import allEvents from "../data";

const DailySpecials = (props) => {

    const getEvent = () => {
        return allEvents.find(oneEvent => oneEvent.id === props.selectedEvent);
    };

    const event = getEvent();

    const today = new Date();
    const todayString = today.toLocaleString('en-US', { timeZone: 'CET', month: 'long', day: 'numeric', year: 'numeric' });

    const daysPassed = calculateDaysBetween(event.betaStartDate, todayString) + 1;
    const dailySpecialsToDisplay = event.dailySpecials.slice(0, daysPassed);
    
    let customizationImages = customizationsImages[getEvent().codeName];

    return (
        <>
            <Prologue imageSrc={"/events/daily-specials/calendar.webp"} alt={"Events"} maxHeight={"65px"}>
                This is the calendar of prizes that appear as Daily Specials during the event. You can look ahead to see which prizes are awaiting you and save your Event Currency for the particular days.
            </Prologue>

            <SectionDivider />

            <H1 center={true}>Calendar</H1>

            <Calendar eventId={event.id} daysPassed={daysPassed} />

            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <small style={{ fontSize: '11px', color: '#916a17' }}>
                    <i>Note: Daily specials vary depending on your current era. Be sure to set your era on the website using the dropdown menu in the navigation bar, to see the accurate data for your current in-game progress.</i>
                </small>
            </div>

            {
                dailySpecialsToDisplay.map((oneDailySpecial, index) => (
                    <DailySpecialWrapper
                        key={index}
                        dailySpecial={oneDailySpecial.resource}
                        amount={oneDailySpecial.amount}
                        note={oneDailySpecial.note}
                        day={index + 1}
                        customizationsImages={customizationImages}
                    />
                ))
            }
        </>
    );
};

export default DailySpecials;