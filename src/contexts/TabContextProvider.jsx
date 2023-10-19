import { useState } from "react";
import PropTypes from "prop-types";
import { Tab } from "@/constants";
import { TabContext } from "@/contexts";

export function TabContextProvider({ children }) {
  const [tab, setTab] = useState(Tab.ONLINE);

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}

TabContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
