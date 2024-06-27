"use client";

import { useRef, useEffect, useState } from "react";
import "./style.scss";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillPauseCircle } from "react-icons/ai";

import { GoUnmute } from "react-icons/go";
import { GoMute } from "react-icons/go";

export default function AudioVisualizer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [sensitivity, setSensitivity] = useState<number>(0.2);
  const [barColor, setBarColor] = useState<string>("#d92e1c");
  const [visualMode, setVisualMode] = useState<"bar" | "wave">("bar");

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const updateCanvasSize = () => {
      if (canvasRef.current) {
        const { offsetWidth, offsetHeight } = canvasRef.current;
        canvasRef.current.width = offsetWidth * window.devicePixelRatio;
        canvasRef.current.height = offsetHeight * window.devicePixelRatio;

        // Force a redraw
        if (audioSrc) {
          const event = new Event("resize");
          window.dispatchEvent(event);
        }
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, [audioSrc]);

  useEffect(() => {
    if (!audioSrc || !canvasRef.current || !audioRef.current) return;

    const audio = audioRef.current;
    const canvas = canvasRef.current;
    if (!audio || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
    }

    if (!analyserRef.current) {
      analyserRef.current = audioContextRef.current.createAnalyser();
    }

    if (!sourceRef.current) {
      sourceRef.current =
        audioContextRef.current.createMediaElementSource(audio);
      sourceRef.current.connect(analyserRef.current);
      analyserRef.current.connect(audioContextRef.current.destination);
    }

    const analyser = analyserRef.current;
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    let animationFrameId: number;

    const draw = () => {
      const { width, height } = canvas;
      context.clearRect(0, 0, width, height);

      analyser.getByteFrequencyData(dataArray);

      if (visualMode === "bar") {
        // Bar visualization (keep this as is)
        const barWidth = (width / bufferLength) * 2.5;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const barHeight = (dataArray[i] / 255) * height * sensitivity;
          context.fillStyle = barColor;
          context.fillRect(x, height - barHeight, barWidth, barHeight);
          x += barWidth + 1;
        }
      } else {
        // Wave visualization
        context.fillStyle = barColor;
        context.beginPath();
        context.moveTo(0, height);

        const sliceWidth = (width / bufferLength) * 2; // Increase sliceWidth for wider wave
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const v = dataArray[i] / 255.0;
          const y = height - v * height * sensitivity * 2; // Adjust this multiplier for wave height

          if (i === 0) {
            context.moveTo(x, y);
          } else {
            const prevV = dataArray[i - 1] / 255.0;
            const prevY = height - prevV * height * sensitivity * 2;
            const cpX = x - sliceWidth / 2;
            context.quadraticCurveTo(cpX, prevY, x, y);
          }

          x += sliceWidth;
        }

        // Draw the bottom line
        context.lineTo(width, height);
        context.lineTo(0, height);
        context.closePath();
        context.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [audioSrc, sensitivity, barColor, visualMode]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    setIsMuted(false);

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleDurationChange = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("durationchange", handleDurationChange);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);

      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("durationchange", handleDurationChange);
    };
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAudioSrc(url);
      setFileName(file.name);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSensitivityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSensitivity(parseFloat(event.target.value));
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBarColor(event.target.value);
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (audio.paused) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !audio.muted;
      setIsMuted(audio.muted);
    }
  };

  return (
    <section id="AudioVisualizer">
      <h2>Audio Visualizer</h2>
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileUpload}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <button className="uploadBtn" onClick={handleUploadClick}>
        {audioSrc ? "Change Audio" : "Upload Audio"}
      </button>
      <div className="canvas-cont">
        <canvas ref={canvasRef} />
      </div>
      <p className="fileName">{fileName ? fileName : "Upload an audio"}</p>

      <audio ref={audioRef} src={audioSrc || ""} controls />
      <div className={`audioBtns ${!audioSrc ? "disabled" : ""}`}>
        <button className="play" onClick={togglePlay} disabled={!audioSrc}>
          {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
        </button>
        <div className="progress">
          <p>
            {formatTime(currentTime)} / {formatTime(duration)}
          </p>
          <input
            type="range"
            value={currentTime}
            max={duration || 0}
            onChange={(e) => {
              const time = parseFloat(e.target.value);
              setCurrentTime(time);
              if (audioRef.current) {
                audioRef.current.currentTime = time;
              }
            }}
          />
        </div>
        <button className="mute" onClick={toggleMute}>
          {isMuted ? <GoMute /> : <GoUnmute />}
        </button>
      </div>
      <div className={`settings ${!audioSrc ? "disabled" : ""}`}>
        <h3>Settings</h3>
        <div className="sensitivity">
          <label htmlFor="sensitivity">Sensitivity: </label>
          <input
            id="sensitivity"
            type="range"
            min="0.1"
            max={visualMode === "wave" ? "0.5" : "1"}
            step="0.05"
            value={sensitivity}
            onChange={handleSensitivityChange}
          />
        </div>

        <div className="bottom">
          <div className="visualMode">
            <label htmlFor="visualMode">Mode: </label>
            <div
              className={`buttons ${
                visualMode === "bar" ? "bar-active" : "wave-active"
              }`}
            >
              <button className="bar" onClick={() => setVisualMode("bar")}>
                Bar
              </button>
              <button className="wave" onClick={() => setVisualMode("wave")}>
                Wave
              </button>
            </div>
          </div>
          <div className="barColor">
            <label htmlFor="barColor">Color: </label>
            <input
              id="barColor"
              type="color"
              value={barColor}
              onChange={handleColorChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
