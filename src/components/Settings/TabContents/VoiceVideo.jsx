import SettingsLine from "../SettingsLine";

export const VoiceVideoTabContent = () => {
  return (
    <>
      <h2>Voice Settings</h2>
      <label htmlFor="inputDevice">Input Device</label>
      <select
        name="inputDevice"
        id="inputDevice">
        <option value="">Default</option>
      </select>
      <label htmlFor="inputVolume">Input Volume</label>
      <input
        type="range"
        name="inputVolume"
        id="inputVolume"
        min={0}
        max={100}
      />
      <label htmlFor="outputDevice">Output Device</label>
      <select
        name="outputDevice"
        id="outputDevice">
        <option value="">Default</option>
      </select>
      <label htmlFor="outputVolume">Output Volume</label>
      <input
        type="range"
        name="outputVolume"
        id="outputVolume"
        min={0}
        max={100}
      />
      <h3>Mic Test</h3>
      <p>
        Having mic issues? Start a test and say something fun—we&apos;ll play
        your voice back to you.
      </p>
      <button>Let&apos;s Check</button>
      <div>*progress bar*</div>
      <SettingsLine />
      <h2>Video Settings</h2>
      <div>*video preview*</div>
      <label htmlFor="camera">Camera</label>
      <select
        name="camera"
        id="camera">
        <option value="">Default</option>
      </select>
    </>
  );
};
