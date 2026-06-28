import { useState, useEffect, useCallback } from 'react'
import ArVideoFrame from './ui/ArVideoFrame'
import FloatingCTA from './ui/FloatingCTA'
import './ui/styles.css'
import './ui/frame-wrapper.css'

const SPIN_AND_WIN_URL = 'https://lucky-spin-fortune.vercel.app/'

export default function Scene() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)

  // Memoize the onVideoPlaying callback to prevent video restart
  const handleVideoPlaying = useCallback(() => {
    setVideoPlaying(true)
  }, [])

  // Track when video is loaded
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* DOM-based UI Overlay */}
      <div 
        className="ar-ui-layer"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 3,
          pointerEvents: "none",
          overflow: "visible"
        }}
      >
        {/* Frame Wrapper - contains canvas and learn button */}
        <div className="frame-wrapper">
          {/* Canvas Holder - contains the video card (banner + video) */}
          <div className="canvas-holder">
            <ArVideoFrame onVideoPlaying={handleVideoPlaying} />
          </div>

          {/* Spin and Win Button */}
          <FloatingCTA 
            url={SPIN_AND_WIN_URL}
            text="spin and win"
            videoLoaded={videoLoaded}
          />
        </div>
      </div>
    </>
  )
}

