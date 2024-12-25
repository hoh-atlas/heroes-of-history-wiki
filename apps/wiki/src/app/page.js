"use client";

import Container from "@/src/components/container/Container";

import layoutHome from "./sectionsDefinition";
import Intro from "./intro/Intro";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";
import ReactGA from "react-ga4";

const HomePage = (props) => {

    const basePath = "";

    const selectedTab = useTabHandler(layoutHome);

    ReactGA.send({
        hitType: "pageview",
        page: `/${basePath}`,
        title: `Home - ${selectedTab.name}`,
    });

    const pageName = selectedTab.url ? (
        <span>
            <a href={`/${basePath}`} className="text-link-white">Heroes of History Wiki</a> &gt; {selectedTab.name}
        </span>
    ) : "Heroes of History Wiki";

    const renderSelectedTab = () => {
        switch (selectedTab.url) {
            default:
                return <Intro tab={props.tab} />;
        }
    };

    return <Container basePath={basePath} tabs={layoutHome.tabs} pageName={pageName}>
        {renderSelectedTab()}
    </Container>
}

export default HomePage;