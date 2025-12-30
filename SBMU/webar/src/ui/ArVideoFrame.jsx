import SbmuUrbanBanner from './SbmuUrbanBanner'

export default function ArVideoFrame({ onVideoPlaying }) {
  // Only show SBMU video - no GSRTC, no swipe functionality
  return <SbmuUrbanBanner onVideoPlaying={onVideoPlaying} />
}

