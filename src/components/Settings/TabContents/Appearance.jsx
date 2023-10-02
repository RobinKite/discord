import SettingsLine from "../SettingsLine";

export const AppearanceTabContainer = () => {
  return (
    <>
      <div>*preview*</div>
      <h3>Theme</h3>
      <label htmlFor="theme_light">Light</label>
      <input
        id="theme_light"
        type="radio"
      />
      <label htmlFor="theme_dark">Dark</label>
      <input
        id="theme_dark"
        type="radio"
      />
      <SettingsLine />
      <h3>Chat Font Scaling</h3>
      <input
        type="range"
        id="chatFontSize"
        min={12}
        max={24}
        step={1}
        // value={16}
        list="fontMarkers"
      />
      <datalist id="fontMarkers">
        <option
          value={12}
          label="12px"
        />
        <option
          value={14}
          label="14px"
        />
        <option
          value={15}
          label="15px"
        />
        <option
          value={16}
          label="16px"
        />
        <option
          value={18}
          label="18px"
        />
        <option
          value={20}
          label="20px"
        />
        <option
          value={24}
          label="24px"
        />
      </datalist>
      <h3>Space Between Message Groups</h3>
      <input
        type="range"
        id="messageGroupsSpace"
        min={0}
        max={24}
        step={4}
        // value={16}
        list="spaceMarkers"
      />
      <datalist id="spaceMarkers">
        <option
          value={0}
          label="0px"
        />
        <option
          value={4}
          label="4px"
        />
        <option
          value={8}
          label="8px"
        />
        <option
          value={16}
          label="16px"
        />
        <option
          value={24}
          label="24px"
        />
      </datalist>
      <SettingsLine />
      <label htmlFor="imagesPreview">Images preview</label>
      <input
        type="checkbox"
        id="imagesPreview"
      />
    </>
  );
};
