import "./Intro.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import H1 from "@/src/components/h1/H1";
import { allHeroes, heroClassNames, unitNames, colorNames, positionNames, damageTypeNames, tacticalTypeNames } from "../data";
import HeroIcon from "./HeroIcon";
import MultiSelectBox from "@/src/components/multi-select-box/MultiSelectBox";
import resources from "@/src/shared-resources/data/resources";
import { useState, useEffect } from "react";

const Intro = (props) => {

    const [showFilters, setShowFilters] = useState(false);

    const sortedHeroes = allHeroes.slice().sort((a, b) => a.name.localeCompare(b.name));

    const classOptions = [...new Set(allHeroes.map(hero => hero.heroClass).filter(heroClass => heroClass))].map(heroClass => ({
        value: heroClass,
        label: heroClassNames[heroClass],
    }));

    const unitOptions = [...new Set(allHeroes.map(hero => hero.unit).filter(unit => unit))].map(unit => ({
        value: unit,
        label: unitNames[unit],
    }));

    const crestColorOptions = [...new Set(allHeroes.flatMap(hero =>
        hero.ascension ? Object.values(hero.ascension).flatMap(levels =>
            levels.flatMap(resource => 
                resources.find((dbResource) => dbResource.id === resource.resource && dbResource.category === 'crests_colors') ? resource.resource : []
            )
        ) : []
    ))].map(crestColor => ({
        value: crestColor,
        label: resources.find((dbResource) => dbResource.id === crestColor).name,
        image: resources.find((dbResource) => dbResource.id === crestColor).img,
    }));

    const crestFactionOptions = [...new Set(allHeroes.flatMap(hero =>
        hero.ascension ? Object.values(hero.ascension).flatMap(levels =>
            levels.flatMap(resource =>
                resources.find((dbResource) => dbResource.id === resource.resource && dbResource.category === 'crests_factions') ? resource.resource : []
            )
        ) : []
    ))].map(crestFaction => ({
        value: crestFaction,
        label: resources.find((dbResource) => dbResource.id === crestFaction).name,
    }));

    const colorOptions = [...new Set(allHeroes.map(hero => hero.color).filter(color => color))].map(color => ({
        value: color,
        label: colorNames[color],
    }));

    const ascensionMaterialOptions = [...new Set(allHeroes.flatMap(hero =>
        hero.ascension ? Object.values(hero.ascension).flatMap(levels =>
            levels.flatMap(resource =>
                resources.find((dbResource) => dbResource.id === resource.resource && dbResource.category === 'ascension_materials') ? resource.resource : []
            )
        ) : []
    ))].map(ascensionMaterial => ({
        value: ascensionMaterial,
        label: resources.find((dbResource) => dbResource.id === ascensionMaterial).name,
        image: resources.find((dbResource) => dbResource.id === ascensionMaterial).img,
    }));

    const positionOptions = [...new Set(allHeroes.map(hero => hero.position).filter(position => position))].map(position => ({
        value: position,
        label: positionNames[position],
    }));

    const damageTypeOptions = [...new Set(allHeroes.flatMap(hero => hero.damageType).filter(damageType => damageType))].map(damageType => ({
        value: damageType,
        label: damageTypeNames[damageType],
    }));

    const tacticalTypeOptions = [...new Set(allHeroes.flatMap(hero => hero.tacticalType).filter(tacticalType => tacticalType))].map(tacticalType => ({
        value: tacticalType,
        label: tacticalTypeNames[tacticalType],
    }));

    const [selectedClasses, setSelectedClasses] = useState([]);
    const [selectedUnits, setSelectedUnits] = useState([]);
    const [selectedCrestColors, setSelectedCrestColors] = useState([]);
    const [selectedCrestFactions, setSelectedCrestFactions] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedAscensionMaterials, setSelectedAscensionMaterials] = useState([]);
    const [selectedPositions, setSelectedPositions] = useState([]);
    const [selectedDamageTypes, setSelectedDamageTypes] = useState([]);
    const [selectedTacticalTypes, setSelectedTacticalTypes] = useState([]);
    const [searchedName, setSearchedName] = useState('');

    const updateUrlParams = (selectedClasses, selectedUnits, selectedCrestColors, selectedCrestFactions, selectedColors, selectedAscensionMaterials, selectedPositions, selectedDamageTypes, selectedTacticalTypes) => {
        const urlParams = new URLSearchParams();
        selectedClasses?.forEach(classOption => {
            urlParams.append('class', classOption.value);
        });
        selectedUnits?.forEach(unitOption => {
            urlParams.append('unit', unitOption.value);
        });
        selectedCrestColors?.forEach(crestColorOption => {
            urlParams.append('crestColor', crestColorOption.value);
        });
        selectedCrestFactions?.forEach(crestFactionOption => {
            urlParams.append('crestFaction', crestFactionOption.value);
        });
        selectedColors?.forEach(colorOption => {
            urlParams.append('color', colorOption.value);
        });
        selectedAscensionMaterials?.forEach(ascensionMaterialOption => {
            urlParams.append('ascensionMaterial', ascensionMaterialOption.value);
        });
        selectedPositions?.forEach(positionOption => {
            urlParams.append('position', positionOption.value);
        });
        selectedDamageTypes?.forEach(damageTypeOption => {
            urlParams.append('damageType', damageTypeOption.value);
        });
        selectedTacticalTypes?.forEach(tacticalTypeOption => {
            urlParams.append('tacticalType', tacticalTypeOption.value);
        });
    
        const hasFilters = selectedClasses?.length > 0 || selectedUnits?.length > 0 || selectedCrestColors?.length > 0 || selectedCrestFactions?.length > 0 || selectedColors?.length > 0 || selectedAscensionMaterials?.length > 0
            || selectedPositions?.length > 0 || selectedDamageTypes?.length > 0 || selectedTacticalTypes?.length > 0;
    
        const newUrl = hasFilters ? `${window.location.hash.split('?')[0]}?${urlParams.toString()}` : window.location.hash.split('?')[0];
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    const handleClassChange = (selectedOptions) => {
        setSelectedClasses(selectedOptions);
        updateUrlParams(selectedOptions, selectedUnits, selectedCrestColors, selectedCrestFactions, selectedColors, selectedAscensionMaterials, selectedPositions, selectedDamageTypes);
    };

    const handleUnitChange = (selectedOptions) => {
        setSelectedUnits(selectedOptions);
        updateUrlParams(selectedClasses, selectedOptions, selectedCrestColors, selectedCrestFactions, selectedColors, selectedAscensionMaterials, selectedPositions, selectedDamageTypes, selectedTacticalTypes);
    };

    const handleCrestColorChange = (selectedOptions) => {
        setSelectedCrestColors(selectedOptions);
        updateUrlParams(selectedClasses, selectedUnits, selectedOptions, selectedCrestFactions, selectedColors, selectedAscensionMaterials, selectedPositions, selectedDamageTypes, selectedTacticalTypes);
    };

    const handleCrestFactionChange = (selectedOptions) => {
        setSelectedCrestFactions(selectedOptions);
        updateUrlParams(selectedClasses, selectedUnits, selectedCrestColors, selectedOptions, selectedColors, selectedAscensionMaterials, selectedPositions, selectedDamageTypes, selectedTacticalTypes);
    };

    const handleColorChange = (selectedOptions) => {
        setSelectedColors(selectedOptions);
        updateUrlParams(selectedClasses, selectedUnits, selectedCrestColors, selectedCrestFactions, selectedOptions, selectedAscensionMaterials, selectedPositions, selectedDamageTypes, selectedTacticalTypes)
    }

    const handleAscensionMaterialChange = (selectedOptions) => {
        setSelectedAscensionMaterials(selectedOptions);
        updateUrlParams(selectedClasses, selectedUnits, selectedCrestColors, selectedCrestFactions, selectedColors, selectedOptions, selectedPositions, selectedDamageTypes, selectedTacticalTypes)
    }

    const handlePositionChange = (selectedOptions) => {
        setSelectedPositions(selectedOptions);
        updateUrlParams(selectedClasses, selectedUnits, selectedCrestColors, selectedCrestFactions, selectedColors, selectedAscensionMaterials, selectedOptions, selectedDamageTypes, selectedTacticalTypes);
    }

    const handleDamageTypeChange = (selectedOptions) => {
        setSelectedDamageTypes(selectedOptions);
        updateUrlParams(selectedClasses, selectedUnits, selectedCrestColors, selectedCrestFactions, selectedColors, selectedAscensionMaterials, selectedPositions, selectedOptions, selectedTacticalTypes);
    }

    const handleTacticalTypeChange = (selectedOptions) => {
        setSelectedTacticalTypes(selectedOptions);
        updateUrlParams(selectedClasses, selectedUnits, selectedCrestColors, selectedCrestFactions, selectedColors, selectedAscensionMaterials, selectedPositions, selectedDamageTypes, selectedOptions);
    }

    const handleSearch = (name) => {
        setSearchedName(name);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search || '');
        const classParams = urlParams.getAll('class');
        const unitParams = urlParams.getAll('unit');
        const crestColorParams = urlParams.getAll('crestColor');
        const crestFactionParams = urlParams.getAll('crestFaction');
        const colorParams = urlParams.getAll('color');
        const ascensionMaterialParams = urlParams.getAll('ascensionMaterial');
        const positionParams = urlParams.getAll('position');
        const damageTypeParams = urlParams.getAll('damageType');
        const tacticalTypeParams = urlParams.getAll('tacticalType');

        const foundClassOptions = classOptions.filter(option => classParams.includes(option.value));
        setSelectedClasses(foundClassOptions);

        const foundUnitOptions = unitOptions.filter(option => unitParams.includes(option.value));
        setSelectedUnits(foundUnitOptions);

        const foundCrestColorOptions = crestColorOptions.filter(option => crestColorParams.includes(option.value));
        setSelectedCrestColors(foundCrestColorOptions);

        const foundCrestFactionOptions = crestFactionOptions.filter(option => crestFactionParams.includes(option.value));
        setSelectedCrestFactions(foundCrestFactionOptions);

        const foundColorOptions = colorOptions.filter(option => colorParams.includes(option.value));
        setSelectedColors(foundColorOptions);

        const foundAscensionMaterialOptions = ascensionMaterialOptions.filter(option => ascensionMaterialParams.includes(option.value));
        setSelectedAscensionMaterials(foundAscensionMaterialOptions);

        const foundPositionOptions = positionOptions.filter(option => positionParams.includes(option.value));
        setSelectedPositions(foundPositionOptions);

        const foundDamageTypeOptions = damageTypeOptions.filter(option => damageTypeParams.includes(option.value));
        setSelectedDamageTypes(foundDamageTypeOptions);

        const foundTacticalTypeOptions = tacticalTypeOptions.filter(option => tacticalTypeParams.includes(option.value));
        setSelectedTacticalTypes(foundTacticalTypeOptions);
    }, []);

    const getFilteredHeroes = () => {
        let filteredHeroes = sortedHeroes;
        
        if (selectedClasses.length > 0) {
            filteredHeroes = filteredHeroes.filter(hero => selectedClasses.some(option => option.value === hero.heroClass));
        }

        if (selectedUnits.length > 0) {
            filteredHeroes = filteredHeroes.filter(hero => selectedUnits.some(option => option.value === hero.unit));
        }

        if (selectedCrestColors.length > 0) {
            filteredHeroes = filteredHeroes.filter(hero =>
                hero.ascension && Object.values(hero.ascension)
                    .flatMap(level => level)
                    .some(item =>
                        selectedCrestColors.some(crest =>
                            crest.value === item.resource
                        )
                    )
            );
        }

        if (selectedCrestFactions.length > 0) {
            filteredHeroes = filteredHeroes.filter(hero =>
                hero.ascension && Object.values(hero.ascension)
                    .flatMap(level => level)
                    .some(item =>
                        selectedCrestFactions.some(crest =>
                            crest.value === item.resource
                        )
                    )
            );
        }

        if (selectedColors.length > 0) {
            filteredHeroes = filteredHeroes.filter(hero => selectedColors.some(option => option.value === hero.color));
        }

        if (selectedAscensionMaterials.length > 0) {
            filteredHeroes = filteredHeroes.filter(hero =>
                hero.ascension && Object.values(hero.ascension)
                    .flatMap(level => level)
                    .some(item =>
                        selectedAscensionMaterials.some(ascensionMaterial =>
                            ascensionMaterial.value === item.resource
                        )
                    )
            );
        }

        if (selectedPositions.length > 0) {
            filteredHeroes = filteredHeroes.filter(hero => selectedPositions.some(option => option.value === hero.position));
        }

        if (selectedDamageTypes.length > 0) {
            filteredHeroes = filteredHeroes.filter(hero => 
                hero.damageType && Array.isArray(hero.damageType) &&
                selectedDamageTypes.some(option => 
                    hero.damageType.includes(option.value)
                )
            );
        }
        
        if (selectedTacticalTypes.length > 0) {
            filteredHeroes = filteredHeroes.filter(hero => 
                hero.tacticalType && Array.isArray(hero.tacticalType) &&
                selectedTacticalTypes.some(option => 
                    hero.tacticalType.includes(option.value)
                )
            );
        }

        filteredHeroes = filteredHeroes.filter((hero) =>
            hero.name.toLowerCase().includes(searchedName.toLowerCase())
        );

        return filteredHeroes;
    };

    const toggleFiltersVisibility = () => {
        setShowFilters(!showFilters);
    };

    const filteredHeroes = getFilteredHeroes();

    return (
        <>
            <Prologue imageSrc={"/heroes/intro/tutorial-host-cleopatra.webp"} alt={"Event"} maxHeight={"65px"}>
                Use the filters to refine your search and find heroes that match your preferred criteria. Whether you seek valiant defenders, powerful tanks, smart mages, or wise thinkers, you'll find them all here. 
                Filter by hero class, unit type, crest colors, and various tactical types to tailor your fights to your liking.
            </Prologue>
            <SectionDivider />
            <div className="select-boxes-container">
                <div className="select-box-column">
                    <H1 center={true}>Types</H1>
                    <MultiSelectBox
                    options={classOptions}
                    width={"80%"}
                    mobileWidth={"100%"}
                    height={"40px"}
                    color={"#F6F3EB"}
                    selectedOptions={selectedClasses}
                    onOptionsChange={handleClassChange}
                    placeholder="Hero Class"
                    style={{marginBottom: '10px'}}
                    />
                    <MultiSelectBox
                    options={colorOptions}
                    width={"80%"}
                    mobileWidth={"100%"}
                    height={"40px"}
                    color={"#F6F3EB"}
                    selectedOptions={selectedColors}
                    onOptionsChange={handleColorChange}
                    placeholder="Color Type"
                    style={{marginBottom: '10px'}}
                    />
                </div>
                <div className="select-box-column">
                    <H1 center={true}>Materials</H1>
                    <MultiSelectBox
                    options={crestColorOptions}
                    width={"80%"}
                    mobileWidth={"100%"}
                    height={"40px"}
                    color={"#F6F3EB"}
                    selectedOptions={selectedCrestColors}
                    onOptionsChange={handleCrestColorChange}
                    placeholder="Crest Colors"
                    style={{marginBottom: '10px'}}
                    />
                    <MultiSelectBox
                    options={ascensionMaterialOptions}
                    width={"80%"}
                    mobileWidth={"100%"}
                    height={"40px"}
                    color={"#F6F3EB"}
                    selectedOptions={selectedAscensionMaterials}
                    onOptionsChange={handleAscensionMaterialChange}
                    placeholder="Ascension Materials"
                    style={{marginBottom: '10px'}}
                    />
                </div>
            </div>

            <div className="btn-container">
                <button onClick={toggleFiltersVisibility} className="btn">
                    {showFilters ? 'Hide More Filters' : 'Show More Filters'}
                </button>
            </div>

            {showFilters && (<div className="select-boxes-container">
                <div className="select-box-column">
                    <MultiSelectBox
                    options={positionOptions}
                    width={"80%"}
                    mobileWidth={"100%"}
                    height={"40px"}
                    color={"#F6F3EB"}
                    selectedOptions={selectedPositions}
                    onOptionsChange={handlePositionChange}
                    placeholder="Recommended Position"
                    style={{marginBottom: '10px'}}
                    />
                    <MultiSelectBox
                    options={tacticalTypeOptions}
                    width={"80%"}
                    mobileWidth={"100%"}
                    height={"40px"}
                    color={"#F6F3EB"}
                    selectedOptions={selectedTacticalTypes}
                    onOptionsChange={handleTacticalTypeChange}
                    placeholder="Tactical Type"
                    style={{marginBottom: '10px'}}
                    />
                </div>
                <div className="select-box-column">
                    <MultiSelectBox
                    options={damageTypeOptions}
                    width={"80%"}
                    mobileWidth={"100%"}
                    height={"40px"}
                    color={"#F6F3EB"}
                    selectedOptions={selectedDamageTypes}
                    onOptionsChange={handleDamageTypeChange}
                    placeholder="Attack Type"
                    style={{marginBottom: '10px'}}
                    />
                    <MultiSelectBox
                    options={unitOptions}
                    width={"80%"}
                    mobileWidth={"100%"}
                    height={"40px"}
                    color={"#F6F3EB"}
                    selectedOptions={selectedUnits}
                    onOptionsChange={handleUnitChange}
                    placeholder="Unit Type"
                    style={{marginBottom: '10px'}}
                    />
                </div>
            </div>)}

            <SectionDivider />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px", marginBottom: "15px" }}>
            </div>

            <div className="hero-category">
                <H1 center={true}>5-star heroes</H1>
                <div className="hero-grid">
                    {filteredHeroes
                        .filter(oneHero => oneHero.stars === 5)
                        .map(oneHero => (
                            <HeroIcon key={oneHero.id} tab={props.tab} hero={oneHero} />
                        ))}
                </div>
            </div>

            <div className="hero-category">
                <H1 center={true}>4-star heroes</H1>
                <div className="hero-grid">
                    {filteredHeroes
                        .filter(oneHero => oneHero.stars === 4)
                        .map(oneHero => (
                            <HeroIcon key={oneHero.id} tab={props.tab} hero={oneHero} />
                        ))}
                </div>
            </div>

            <div className="hero-category">
                <H1 center={true}>3-star heroes</H1>
                <div className="hero-grid">
                    {filteredHeroes
                        .filter(oneHero => oneHero.stars === 3)
                        .map(oneHero => (
                            <HeroIcon key={oneHero.id} tab={props.tab} hero={oneHero} />
                        ))}
                </div>
            </div>

            <div className="hero-category">
                <H1 center={true}>2-star heroes</H1>
                <div className="hero-grid">
                    {filteredHeroes
                        .filter(oneHero => oneHero.stars === 2)
                        .map(oneHero => (
                            <HeroIcon key={oneHero.id} tab={props.tab} hero={oneHero} />
                        ))}
                </div>
            </div>
        </>
    );
}

export default Intro;