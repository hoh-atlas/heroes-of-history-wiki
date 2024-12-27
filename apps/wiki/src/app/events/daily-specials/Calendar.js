import React from 'react';
import { getItemData } from "@/src/shared-resources/utils/utils";
import { calculateHoursBetween, cleanDateString, normalizeToNoon } from '@/src/shared-resources/utils/utils';

import allEvents from "../data";

const Calendar = (props) => {
    const basePath = "events";
    const pageName = "Events";

    const getEvent = () => {
        return allEvents.find(oneEvent => oneEvent.id === props.eventId);
    };

    const event = getEvent();

    const today = new Date();
    const daysPassed = props.daysPassed;
    const hoursPassed = calculateHoursBetween(normalizeToNoon(cleanDateString(event.startDate)), today);
    const todaysDay = Math.floor(hoursPassed / 24) + 1;
    
    const showRevealNext = daysPassed < event.dailySpecials.length;

    const dailySpecialsToDisplay = showRevealNext
        ? [...event.dailySpecials.slice(0, daysPassed), { resource: "nextPrizePlaceholder" }]
        : event.dailySpecials.slice(0, daysPassed);

    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const dailySpecialChunks = chunkArray(dailySpecialsToDisplay, 7);

    return (
        <div style={{ width: '100%', marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%', overflowX: 'auto' }}>
                <table style={{
                    width: `${dailySpecialChunks[0]?.length * 142}px`,
                    margin: 'auto',
                    textAlign: 'center',
                    tableLayout: 'fixed',
                }}>
                    <tbody>
                        {dailySpecialChunks.map((week, weekIndex) => (
                            <React.Fragment key={weekIndex}>
                                <tr>
                                    {week.map((dailySpecial, dayIndex) => {
                                        const currentDay = weekIndex * 7 + dayIndex + 1;
                                        return (
                                            <th key={dayIndex} style={{ width: '142px', wordWrap: 'break-word' }}>
                                                <div>
                                                    {dailySpecial.resource === "nextPrizePlaceholder"
                                                        ? "?"
                                                        : (currentDay === todaysDay 
                                                            ? `⪼ Day ${currentDay} ⪻`
                                                            : `Day ${currentDay}`)}
                                                </div>
                                            </th>
                                        );
                                    })}
                                    {week.length < 7 && Array(7 - week.length).fill(null).map((_, index) => (
                                        <td key={`empty-${index}`} style={{ width: '142px' }} />
                                    ))}
                                </tr>
                                <tr>
                                    {week.map((dailySpecial, dayIndex) => (
                                        <td key={dayIndex} style={{ width: '142px', wordWrap: 'break-word' }}>
                                            <div>
                                                {dailySpecial.resource === "nextPrizePlaceholder"
                                                    ? <span style={{ fontSize: '11px', color: '#916a17', fontStyle: 'italic' }}>Reveals tomorrow</span>
                                                    : getItemData(dailySpecial.resource).name}
                                            </div>
                                        </td>
                                    ))}
                                    {week.length < 7 && Array(7 - week.length).fill(null).map((_, index) => (
                                        <td key={`empty-resources-${index}`} style={{ width: '142px' }} />
                                    ))}
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Calendar;
