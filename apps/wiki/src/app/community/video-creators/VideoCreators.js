import "./VideoCreators.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import H1 from "@/src/components/h1/H1";
import TextBlock from "@/src/components/textblock/TextBlock";
import Card from "@/src/components/card/Card";
import CardContainer from "@/src/components/card-container/CardContainer";

const VideoCreators = () => {

    return <>
        <Prologue imageSrc={"/community/icon_youtube.webp"} alt="" maxHeight="80px">
            On this page, we highlight some of the best content creators who are dedicated to bringing helpful and insightful resources for all things Heroes of History.
            Visit their platforms, engage with their content, and connect with others who share your passion for the game. These creators are here to help you master the game and enjoy the world of Heroes of History even more.
        </Prologue>

        <SectionDivider/>
        <TextBlock>

            <H1 center={true}>@TheRealBehemothPlays</H1>

            <CardContainer 
                card1={
                    <Card title={"<b>Content Creator: TheRealBehemoth</b>"} centered backgroundImage={"/home/intro/hoh_background.webp"} blurred={true} footer="<b>Dive into the latest strategies <a href='https://www.youtube.com/@therealbehemothplays' class='text-link-skin'>here</a>!</b>">
                        <div className="">
                            <a href="https://www.youtube.com/@therealbehemothplays" target="_blank" >
                            <img src={"/community/video-creators/theRealBehemothPlays.webp"} alt="Youtube" />
                            </a>
                        </div>
                    </Card>
                }
                style={{ marginTop: '20px', marginBottom: '20px' }}>
            </CardContainer>

        </TextBlock>
    </>
}

export default VideoCreators;