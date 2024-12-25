"use client";

import { useEffect } from "react";
import Container from "@/src/components/container/Container";
import layoutHeroes from "../sectionsDefinition";
import Intro from "./intro/Intro";
import { allHeroes } from "../data";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";
import { useRouter } from "next/navigation";

const HeroPage = ({ params }) => {
    const { heroId } = params;
    const basePath = "heroes";

    const selectedTab = useTabHandler(layoutHeroes);

    const hero = allHeroes.find((oneHero) => oneHero.id === heroId);

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
            return <Intro heroId={heroId} />;
        }
    };

    return (
        <Container basePath={basePath} tabs={layoutHeroes.tabs} pageName={pageName}>
        {renderSelectedTab()}
        </Container>
    );
};

export default HeroPage;
