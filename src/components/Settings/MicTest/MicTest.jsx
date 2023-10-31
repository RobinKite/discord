import { useRef } from "react";
import { MainButton } from "../StyledElements";
import { Stack } from "@mui/system";

const MicTest = () => {
  const canvasRef = useRef(null);
  const audioContext = useRef(null);
  const analyser = useRef(null);

  const startMicTest = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContext.current = new AudioContext();
      analyser.current = audioContext.current.createAnalyser();
      analyser.current.fftSize = 256;

      const microphone = audioContext.current.createMediaStreamSource(stream);
      microphone.connect(analyser.current);

      const dataArray = new Uint8Array(analyser.current.frequencyBinCount);

      const canvas = canvasRef.current;
      const canvasCtx = canvas.getContext("2d");
      canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

      const draw = () => {
        analyser.current.getByteFrequencyData(dataArray);
        canvasCtx.fillStyle = "#1e1f22";
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

        const barWidth = (canvas.width / dataArray.length) * 2.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < dataArray.length; i++) {
          barHeight = dataArray[i];

          canvasCtx.fillStyle = `rgb(${barHeight + 100},50,50)`;
          canvasCtx.fillRect(
            x,
            canvas.height - barHeight / 2,
            barWidth,
            barHeight / 2
          );

          x += barWidth + 1;
        }

        requestAnimationFrame(draw);
      };

      draw();
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  return (
    <Stack direction="row" spacing={1}>
      <MainButton onClick={startMicTest}>Let&apos;s check</MainButton>
      <canvas ref={canvasRef} width={542} height={32} />
    </Stack>
  );
};

export default MicTest;
