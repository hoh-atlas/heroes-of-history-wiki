"use client";

import Container from "@/src/components/container/Container";
import { useRouter } from "next/navigation";
import layoutHeroes from "./sectionsDefinition";
import Intro from "./intro/Intro";
import { allHeroes } from "./data";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";
import ReactGA from "react-ga4";
import { updateMeta } from "@/src/shared-resources/utils/utils";
import { useEffect } from "react";

const HeroesPage = () => {

    const basePath = "heroes";

    const selectedTab = useTabHandler(layoutHeroes);

    ReactGA.send({
        hitType: "pageview",
        page: `/${basePath}`,
        title: `Heroes - ${selectedTab.name}`,
    });

    useEffect(() => {
        updateMeta("Heroes", selectedTab, basePath);
    }, [selectedTab]);

    const router = useRouter();

    let heroId = router.query;

    const hero = allHeroes.find(oneHero => oneHero.id == heroId);
    const heroName = hero ? hero.name : "";

    const pageName = heroName ? (
        <span>
            <a href={`/${basePath}`} className="text-link-white">Heroes</a> &gt; {heroName}
        </span>
    ) : "Heroes";

    const renderSelectedTab = () => {
        switch (selectedTab.url) {
            default:
                return <Intro />;
        }
    };

    return (
        <Container basePath={basePath} tabs={layoutHeroes.tabs} selectedTab={selectedTab} pageName={pageName}>
            {renderSelectedTab()}
        </Container>
    );
}

export default HeroesPage;
