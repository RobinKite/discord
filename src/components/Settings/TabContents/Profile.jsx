import SettingsLine from "../SettingsLine";

export const ProfileTabContent = () => {
  return (
    <>
      <div>*preview*</div>
      <SettingsLine />
      <h3>Avatar</h3>
      <button>Change Avatar</button>
      <button>Remove Avatar</button>
      <SettingsLine />
      <label htmlFor="bannerColor">Banner Color</label>
      <input
        type="color"
        id="bannerColor"
      />
      <SettingsLine />
      <label htmlFor="aboutMe">About me</label>
      <p>You can use markdown and links if you&apos;d like.</p>
      <textarea
        name="aboutMe"
        id="aboutMe"
        cols="30"
        rows="10"
      />
      <SettingsLine />
      <label htmlFor="language">Language</label>
      <select
        name="language"
        id="language">
        <option value="en">English, US</option>
        <option value="ua">Ukrainian, UA</option>
      </select>
    </>
  );
};
