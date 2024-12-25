import "./HeroIcon.css";
import Image from "@/src/components/image/Image";

import layoutHeroes from "../sectionsDefinition";

const HeroIcon = (props) => {

    return (
        <a href={`/heroes/${props.hero.id}`} key={props.hero.id} className="text-link hero-icon-container">
            <Image src={props.hero.icon ? props.hero.icon : "/heroes/intro/icons/Unit_Unknown.webp"} alt="" inline={false} maxWidth={'100px'} />
            <span>{props.hero.name}</span>
        </a>
    );
}

export default HeroIcon;
