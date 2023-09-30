import { useState, useEffect } from "react";
import AudioOnSVG from '../components/svg/AudioOnSvg';
import AudioOffSVG from '../components/svg/AudioOffSvg';
import useSound from "use-sound";

export default function AudioComponent({ audio, color }) {
    const [play, { stop } ] = useSound(audio);
    const [isPlaying, setisPlaying] = useState(true);

    useEffect(() => {
        return () => {
            stop();
        }
    }, [stop]);

    return (
        <>
            <div className="audio-player-container" onClick={() => setisPlaying(!isPlaying)}>
                { isPlaying ? (
                    <AudioOnSVG className="audio" height={50} width={50} play={play} color={color} /> 
                ) : ( 
                    <AudioOffSVG className="audio" height={50} width={50} stop={stop} color={color} /> 
                )}
            </div>
        </>
    )
}