import {
  useAudioTrack,
  useDaily,
  useLocalParticipant,
  useScreenShare,
  useVideoTrack,
} from "@daily-co/daily-react";

const useDailyStreaming = () => {
  const callObject = useDaily();
  const { isSharingScreen, startScreenShare, stopScreenShare } =
    useScreenShare();

  const localParticipant = useLocalParticipant();
  const localVideo = useVideoTrack(localParticipant?.session_id);
  const localAudio = useAudioTrack(localParticipant?.session_id);
  const mutedVideo = localVideo.isOff;
  const mutedAudio = localAudio.isOff;

  const toggleScreenShare = () =>
    isSharingScreen ? stopScreenShare() : startScreenShare();

  return {
    callObject,
    isSharingScreen,
    startScreenShare,
    stopScreenShare,
    localParticipant,
    localVideo,
    localAudio,
    mutedVideo,
    mutedAudio,
    toggleScreenShare,
  };
};

export default useDailyStreaming;
