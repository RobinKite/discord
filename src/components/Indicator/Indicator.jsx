import PropTypes from "prop-types";
import { IndicatorState } from "@/constants";

const indicatorHeightMap = {
  [IndicatorState.ACTIVE]: "h-10",
  [IndicatorState.HOVER]: "h-5",
  [IndicatorState.NOTIFICATION]: "h-2",
  [IndicatorState.HIDDEN]: "h-0",
};

export function Indicator({ state }) {
  return (
    <span
      className={`absolute left-0 top-1/2 w-1 -translate-y-1/2 rounded-r-lg bg-white transition-all duration-300 ${indicatorHeightMap[state]}`}
    />
  );
}

Indicator.propTypes = {
  state: PropTypes.string.isRequired,
};
