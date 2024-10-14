import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import ReactPlayer from 'react-player';
import { Pause, Play, Volume2, VolumeOff } from 'lucide-react';
// import "./Park1Hero.css"

const texts = {
  en: {
    heading: 'Osiris Park',
    subheading: '',
  },
  es: {
    heading: 'Parque Osiris',
    subheading: '',
  },
  fr: {
    heading: 'Parc Osiris',
    subheading: '',
  },
  de: {
    heading: 'Osiris Park',
    subheading: '',
  },
  ja: {
    heading: 'オシリスパーク',
    // subheading: 'オシリス',
    subheading: '',
  },
  zh: {
    heading: '工业园区',
    // subheading: '奥西里斯公园',
    subheading: '',
  },
  ko: {
    heading: '오시리스 공원',
    subheading: '',
  },
};



export default function Park2Hero() {
  // Determine the current language from cookies or fallback to 'en'
  const [lang, setlang] = useState(Cookies.get('language') || 'en');
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

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setlang(savedLanguage);
      }

    }, 1);

    return () => clearInterval(interval);
  }, []);

  const { heading, subheading } = texts[lang];

  return (
    <div
      className=" boxShadowPrimary roundedBR"
      style={{
        // backgroundImage: `url(../assets/Park2.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        // height: '77vh',
        aspectRatio: '16/9',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        // borderBottom: '5px solid #efbcbc',
        position: "relative",

      }}
    >

      <ReactPlayer
        ref={playerRef}
        url="https://youtu.be/SAwwz6D2q1M"
        playing={playing}
        loop={true}
        muted={muted}
        controls={false}
        width="100%"
        height="auto"
        style={{
          borderBottomRightRadius: "16%",
          position: "absolute",
          top: "0",
          left: "0",
          // objectFit:"cover",
          overflow: "hidden",
          width: "100vw",
          aspectRatio: "16 / 9",
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
      {/* <h3
        className="hero-heading"
        style={{
          marginTop: "-20%"
        }}
      >{heading}</h3> */}
      {/* <h1 className="hero-subheading">{subheading}</h1> */}

    </div>
  );
}
