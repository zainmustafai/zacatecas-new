import { Pause, Play, Volume2, VolumeOff } from "lucide-react";
import { useRef, useState } from "react";
import ReactPlayer from "react-player"
import "./HomeHero.css"

const HomeHero = () => {
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(true);
    const [muted, setMuted] = useState(true);

    const playPauseVideo = () => {
        setPlaying(!playing);

    }
    const muteUnmuteVideo = () => {
        //toggle audio if video is muted unmute it and vice versa
        setMuted(!muted);

    }
    return (
        <div
            className="relative flex w-full min-h-min home_hero_section boxShadowPrimary"
        >
            <ReactPlayer
                ref={playerRef}
                url="../assets/home video.mp4"
                playing={playing}
                loop={true}
                muted={muted}
                controls={false}
                width="100%"
                height="auto"
                style={{
                    borderBottomRightRadius: "16%",
                    position: "",
                    top: "0",
                    left: "0",
                    // objectFit:"cover",
                    overflow: "hidden",
                }}
            />


            <div
                className="hero_controls"
            >
                <button
                    className="bg-white hero_audio_controller btn btn-sm"
                    onClick={muteUnmuteVideo}
                >
                    {
                        muted ? <VolumeOff size={20} /> : <Volume2 size={20} />
                    }
                </button>

                <button
                    className="bg-white hero_audio_controller btn btn-sm"
                    onClick={playPauseVideo}
                >
                    {
                        playing ? <Pause size={20} /> : <Play size={20} />
                    }
                </button>
            </div>
        </div>
    )
}

export default HomeHero
