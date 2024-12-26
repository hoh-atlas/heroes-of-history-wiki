"use client";

import { useEffect } from "react";
import Container from "@/src/components/container/Container";
import layoutHeroes from "../sectionsDefinition";
import Intro from "./intro/Intro";
import { allHeroes } from "../data";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";
import { useRouter } from "next/navigation";
import ReactGA from "react-ga4";
import { updateMeta } from "@/src/shared-resources/utils/utils";

const HeroPage = ({ params }) => {
    const { heroId } = params;
    const basePath = "heroes";

    const selectedTab = useTabHandler(layoutHeroes);

    let filteredHeroes = [];
    if (typeof window !== "undefined") {
        const storedHeroIds = JSON.parse(localStorage.getItem('filteredHeroes') || '[]');
        filteredHeroes = storedHeroIds.map(heroId => allHeroes.find(hero => hero.id === heroId)).filter(Boolean);
    }

    const hero = allHeroes.find((oneHero) => oneHero.id === heroId);

    ReactGA.send({
        hitType: "pageview",
        page: `/${basePath}`,
        title: `Heroes - ${hero.name}`,
    });

    useEffect(() => {
        updateMeta("Heroes", selectedTab, basePath);
    }, [selectedTab]);

    const router = useRouter();

    useEffect(() => {
        if (!hero) {
        router.replace(`/${basePath}`);
        }
    }, [hero, router]);

    if (!hero) {
        return null;
    }

    const heroName = hero.name;

    const pageName = (
        <span>
        <a href={`/${basePath}`} className="text-link-white">Heroes</a> &gt; {heroName}
        </span>
    );

    const renderSelectedTab = () => {
        switch (selectedTab.url) {
        default:
            return <Intro heroId={heroId} filteredHeroes={filteredHeroes} />;
        }
    };

    return (
        <Container basePath={basePath} tabs={layoutHeroes.tabs} pageName={pageName}>
        {renderSelectedTab()}
        </Container>
    );
};

export default HeroPage;
