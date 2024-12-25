import "./Intro.css";
import Card from "@/src/components/card/Card";
import CardContainer from "@/src/components/card-container/CardContainer";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import H1 from "@/src/components/h1/H1";
import MenuGrid from "./MenuGrid";
import TextContainer from "@/src/components/text-container/TextContainer";

const Intro = () => {
    return <>
    <TextContainer 
        centered={true} 
        headerTexts={['Welcome to the Heroes of History Wiki, the home of all things Heroes of History!']}
        texts={[``]}
        style={{ marginBottom: '20px', marginTop: '5px' }}
        textRectangleHeight={'150px'}
        imageUrls={["/home/intro/hoh_banner.webp"]}>
    </TextContainer>

    <SectionDivider />

    <H1 center={true} style={{marginBottom: '0px'}} >Frequently Used Menu</H1>

    <MenuGrid />

    {/*<SectionDivider />
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Ag9u6cDam8w"
            title="Heroes of History - Global Launch Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>*/}

    <SectionDivider />
    <TextContainer
        centered={true}
        headerTexts={[`Dynamic Rewards on the Wiki (Dec 14th 2024)`,`The Winter Event is running! (Dec 11th 2024)`]}
        texts={[`Introducing Dynamic Rewards for the Wiki! What does this mean? You can now use a new dropdown menu in the navigation bar of the website to preset your current era from the game.
This information will be used throughout the Wiki to ensure the values we display are always accurate to your current in-game progress. From Daily Specials for events to customizations and more, everything will now be 100% precise for you.`,``]}
        style={{ marginBottom: '20px', marginTop: '5px' }}
        textRectangleHeight={'150px'}
        imageUrls={['',"/events/intro/EventBackgroundWinterEvent.webp"]}
        links={[`https://heroesofhistory.wiki/#/events/daily-specials`,`https://heroesofhistory.wiki/#/events`]}
        pulsate={false}
        autoSlideSeconds={10}>
    </TextContainer>

    {/*<TextContainer
        centered={true}
        headerTexts={['The Trade Exhibition has started!']}
        texts={[``]}
        style={{ marginBottom: '20px', marginTop: '5px' }}
        textRectangleHeight={'150px'}
        imageUrls={[news_egypt_banner]}
        links={['https://hoh-atlas.com/#/allied-cultures/?id=egypt_great_sphinx']}
        pulsate={true}>
    </TextContainer>*/}
    {/*<TextContainer
        centered={true}
        headerTexts={['The Festival of Warriors has started!']}
        texts={[``]}
        style={{ marginBottom: '20px', marginTop: '5px' }}
        textRectangleHeight={'150px'}
        imageUrls={[news_china_banner]}
        links={['https://hoh-atlas.com/#/allied-cultures/?id=china_terracotta_army']}
        pulsate={true}>
    </TextContainer>*/}

    <SectionDivider />

    <CardContainer 
        card1={
            <Card title={"<b>Where to play?</b>"} centered backgroundImage={"/home/intro/hoh_background.webp"} blurred={true} footer="<b>Or play in browser: <a href='https://un-play.heroesofhistorygame.com/' class='text-link-skin'>Heroes of History</a></b>">
                <div className="store-links">
                    <a href="https://apps.apple.com/us/app/heroes-of-history-epic-empire/id6468993261" target="_blank">
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" /> {/*<img src={app_store} alt="App Store" /> */}
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.innogames.heroesofhistory&gl=US" target="_blank" >
                    <img src="https://i.ibb.co/sV03Rwp/Google-Play.png" style={{height: '50px', width: '167px'}} alt="Google Play" /> {/* <img src={google_play} alt="Google Play" /> */}
                    </a>
                </div>
            </Card>
        }
        card2={
            <Card title={"<b>Social Media</b>"} centered backgroundImage={"/home/intro/hoh_background.webp"} blurred={true} footer="<b>&nbsp;</b>">
                <div className="">
                    <a href="https://www.facebook.com/playheroesofhistory/" target="_blank">
                    <img src={"/home/intro/social_facebook.webp"} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/playheroesofhistory" target="_blank" >
                    <img src={"/home/intro/social_instagram.webp"} alt="Instagram" />
                    </a>
                    <a href="https://www.youtube.com/@playheroesofhistory" target="_blank" >
                    <img src={"/home/intro/social_youtube.webp"} alt="Youtube" />
                    </a>
                    <a href="https://www.discord.com/invite/rsA24Hrzca" target="_blank" >
                    <img src={"/home/intro/social_discord.webp"} alt="Discord" />
                    </a>
                </div>
            </Card>
        }
        style={{ marginTop: '20px', marginBottom: '20px' }}>
    </CardContainer>

    <SectionDivider />
    
    <TextContainer 
        centered={true} 
        headerTexts={['About the game']}
        texts={[`The Heroes of History are ready for your command!
                Forge your city through time - from the stone age to the future in the strategic city-building game. Start a legendary journey through history and ancient cultures, 
                as you collect powerful heroes from each era. Engage in thrilling PvE combat or challenge your friends in PvP. It's time to rise your empire and become the world's greatest leader in history.`]}
        style={{ marginBottom: '20px' }}
        textRectangleHeight={'80px'}
        autoSlideSeconds={3}>
    </TextContainer>
    </>
}

export default Intro;
