import { useState } from "react";

const songs = [
  {
    id: 1,
    title: "oh yeah",
    artist: "Steve Lacy",
    url: "/songs/videoplayback.webm",
    duration: "2:51",
  },
  {
    id: 2,
    title: "Gone,Gone,Gone",
    artist: "Phillip Philips",
    url: "/songs/videoplayback (2).webm",
    duration: "3:43",
  },
  {
    id: 2,
    title: "I Love You So",
    artist: "The Walters",
    url: "/songs/videoplayback (3).webm",
    duration: "2:50",
  },
];
export const useMusic = () => {
  const [allSongs, setAllSongs] = useState(songs);
  const [currentTrack, setCurrentTrack] = useState(songs[0]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlaysong = (song, index) => {
    setCurrentTrack(song);
    setCurrentTrackIndex(index);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => {
      const nextIndex = (prev + 1) % allSongs.length
      setCurrentTrack(allSongs[nextIndex])
      return nextIndex
    })
  }

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => {
      const prevIndex = prev === 0 ? allSongs.length - 1 : prev - 1
      setCurrentTrack(allSongs[prevIndex])
      return prevIndex
    })
  }

  const formatTime = (time) => {
    if (isNaN(time) || time === undefined) return "0:00";
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  };
  return {
    allSongs,
    handlePlaysong,
    currentTrackIndex,
    currentTrack,
    setCurrentTime,
    currentTime,
    formatTime,
    duration,
    setDuration,
    nextTrack,
    prevTrack
  };
};
