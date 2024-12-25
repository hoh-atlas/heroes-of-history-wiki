import "./GrandPrizes.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import H1 from "@/src/components/h1/H1";
import Image from "@/src/components/image/Image";
import TextBlock from "@/src/components/textblock/TextBlock";
import { getItemIcon } from "@/src/shared-resources/utils/utils";

import allEvents from "../data";

const GrandPrizes = (props) => {
  
    const getEvent = () => {
        return allEvents.find(oneEvent => oneEvent.id == props.selectedEvent);
    }

    const event = getEvent();
    
    return (
        <>
            <Prologue imageSrc={"/events/grand-prizes/EventPassGrandPriceChest.webp"} alt={"Events"} maxHeight={"65px"} >
                The lane of Grand Prizes is the main sequence of the event. The Free Lane is readily available for all, while the Premium Lane is only available after a one-time investment.<br/>
                Progress <img src={event.payback.image} style={{ maxHeight: '14px', verticalAlign: 'bottom' }}/> is obtained by playing the event's minigame.
            </Prologue>

            <SectionDivider />

            <TextBlock>

                <H1 center={true}>Grand Prizes</H1>

                <div style={{ overflowX: 'auto', marginTop: '20px' }} className="responsive-table-container">
                    <table style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '5%' }}>
                                    #
                                </th>
                                <th>
                                    Costs
                                </th>
                                <th>
                                    Free Lane
                                </th>
                                <th>
                                    Premium Lane
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th></th>
                                <td></td>
                                <td><Image src={"/events/grand-prizes/EventPassGrandPriceChest.webp"} maxHeight={'80px'}/></td>
                                <td><Image src={"/events/grand-prizes/EventPassPremiumPriceChest.webp"} maxHeight={'80px'}/></td>
                            </tr>
                            {
                                event.grandPrizes.map((oneReward) => (
                                    <tr style={{ height: '70px' }}>
                                        <th>{oneReward.id}</th>
                                        <td>{oneReward.cost} <img src={event.payback.image} style={{ maxHeight: '24px', verticalAlign: 'bottom' }}/></td>
                                        <td>{oneReward.free.amount}x {getItemIcon(oneReward.free.resource)}</td>
                                        <td>{oneReward.premium.amount}x {getItemIcon(oneReward.premium.resource)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </TextBlock>
            
        </>
    );
  };
  
  export default GrandPrizes;