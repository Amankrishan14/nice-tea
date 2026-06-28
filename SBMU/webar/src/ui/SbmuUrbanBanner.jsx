import React from "react"
import ArFrame from "./ArFrame"

const video = "/videos/SBMU.mp4"

export default function SbmuUrbanBanner({ onVideoPlaying }) {
  return <ArFrame video={video} onVideoPlaying={onVideoPlaying} />
}



