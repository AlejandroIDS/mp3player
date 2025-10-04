import { useRef, useState, useEffect } from 'react';
import '../styles/globalStyles.css';

const AudioPlayer = () => {

    const audioElement = useRef<HTMLAudioElement | null>(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const handlePlay = () => {
        audioElement.current?.play();
    }

    const handlePause = () => {
        audioElement?.current?.pause();
    }

    const handleTimeUpdate = () => {
        if (audioElement.current) {
            setCurrentTime(audioElement.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioElement.current) {
            setDuration(audioElement.current.duration);
        }
    };

    const formatTime = (seconds: number) => {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec.toString().padStart(2, '0')}`;
    };

    const handleChangeTime = (event: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(event.target.value);
        if (audioElement.current) {
            audioElement.current.currentTime = time;
        }
    };

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const volume = parseFloat(event.target.value);
        if (audioElement.current) {
            audioElement.current.volume = volume;
        }
    }


    return (

        // se pueden hacer fragmentos en react con <> </> o con <React.Fragment></React.Fragment> 
        // y poder incluir multiples div o hijos separados
        <div className='background'>

            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>

            <span>{formatTime(currentTime)} / {formatTime(duration)}</span>

            <input type="range" min="0" max={duration} step="0.1" value={currentTime} onChange={handleChangeTime} />

            <input type="range" min="0" max="1" step="0.01" onChange={handleVolumeChange} />


            <audio className='hidden' ref={audioElement} controls src="/TheSenseOfMe.mp3" onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata}></audio>
        </div>
    );
}

export default AudioPlayer;
