import WoodBackgroundComponent from "../components/WoodBackgroundComponent";
import GameTitleSVG from '../components/svg/GameTitleSvg';
import AudioComponent from '../components/AudioComponent';
import BackgroundMusic from "../assets/HomePageBackgroundMusic.mp3";

export default function Home() {
    return (
        <>
            <AudioComponent audio={BackgroundMusic} color={"black"} />
            <WoodBackgroundComponent className="wood-background" />
            <GameTitleSVG className="title-background" />
        </>
    )
}

