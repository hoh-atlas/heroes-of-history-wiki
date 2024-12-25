import "./Intro.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import H1 from "@/src/components/h1/H1";
import TextBlock from "@/src/components/textblock/TextBlock";
import CardContainer from "@/src/components/card-container/CardContainer";
import Card from "@/src/components/card/Card";

const Intro = () => {

    const subreddit = "playHeroesOfHistory";
    const redditEmbedUrl = `https://www.redditmedia.com/r/${subreddit}?ref_source=embed&ref=share&embed=true`;
    const channelId = "playheroesofhistory";
    const youtubeEmbedUrl = `https://www.youtube.com/embed?listType=user_uploads&list=${channelId}`;

    return <>
        <Prologue imageSrc={"/community/intro/technology_alliance_members.webp"} alt="" maxHeight="80px">
            Heroes of History offers a wealth of community resources, providing a collaborative space dedicated to the game. Contribute to articles, share new insights, and join engaging discussions.
            Below, you'll find a list of all the popular communities and social media platforms for Heroes of History, giving you the opportunity to connect with players from all around the globe.
        </Prologue>

        <SectionDivider/>
        <TextBlock>

            <H1 center={true}>Official Community Spaces</H1>

            {/*<iframe src="https://discord.com/widget?id=1199677867341140049&amp;theme=dark&amp;username=null" width="320px" height="400px" allowtransparency="true" frameborder="0" title="Discord server widget"></iframe>*/}

            <CardContainer 
                card1={
                    <Card title={"<b>Discord</b>"} centered backgroundImage={"/home/intro/hoh_background.webp"} blurred={true} footer="<b>Join the community <a href='https://discord.com/invite/rsA24Hrzca' class='text-link-skin'>here</a>!</b>">
                        <div className="">
                            <a href="https://www.discord.com/invite/rsA24Hrzca" target="_blank" >
                            <img src={"/home/intro/social_discord.webp"} alt="Discord" />
                            </a>
                        </div>
                    </Card>
                }
                style={{ marginTop: '20px', marginBottom: '20px' }}>
            </CardContainer>

            <CardContainer 
                card1={
                    <Card title={"<b>Official Youtube</b>"} centered backgroundImage={"/home/intro/hoh_background.webp"} blurred={true} footer="<b>Watch the latest content <a href='https://www.youtube.com/@playheroesofhistory' class='text-link-skin'>here</a>!</b>">
                        <div className="">
                            <a href="https://www.youtube.com/@playheroesofhistory" target="_blank" >
                            <img src={"/home/intro/social_youtube.webp"} alt="Youtube" />
                            </a>
                        </div>
                    </Card>
                }
                style={{ marginTop: '20px', marginBottom: '20px' }}>
            </CardContainer>

            <H1 center={true} style={{ marginBottom: '20px' }}>Heroes of History is on Reddit too!</H1>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                Did you know? Heroes of History has its own subreddit! Dive into engaging posts and stay updated with the latest news firsthand!
            </div>

            <div style={{ marginTop: '30px', maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
                <iframe
                    src={`${redditEmbedUrl}&theme=dark`} // Add theme=dark
                    sandbox="allow-scripts allow-same-origin allow-popups"
                    style={{
                        border: "none",
                        width: "100%",
                        height: "510px",
                        borderRadius: "8px",
                    }}
                    title={`Subreddit Widget for ${subreddit}`}
                ></iframe>
            </div>

        </TextBlock>
    </>
}

export default Intro;