import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import PropTypes from "prop-types";
import { blurple, darkServerIconBg } from "@/constants/designTokens";

const indicatorHeightMap = {
	active: "h-10",
	hover: "h-5",
	notification: "h-2",
	hidden: "h-0",
};

const ButtonServer = ({ children, title, bgcolor, color, fontSize }) => {
	const [indicatorState, setIndicatorState] = useState(null);
	const [notification, setNotification] = useState(false); //mock redux notification

	const handleEnter = () => {
		if (indicatorState === "active") return;
		setIndicatorState("hover");
	};

	const handleLeave = () => {
		if (indicatorState === "active") return;

		if (notification) {
			setIndicatorState("notification");
		} else if (indicatorState === "hover") setIndicatorState("hidden");
	};

	const handleActive = () => {
		setNotification(true);
		setIndicatorState("active");
	};

	// useEffect(() => {
	//   if (indicatorState === "active")
	//     setTimeout(() => {
	//       setIndicatorState(notification ? "notification" : null);
	//       if (!notification) setIndicator(false);
	//     }, 3000);
	// }, [indicatorState]);

	return (
		<div
			className="flex justify-center items-center w-full relative"
			onMouseEnter={handleEnter}
			onMouseLeave={handleLeave}
			onClick={handleActive}>
			<span
				className={`absolute top-1/2 -translate-y-1/2 left-0 w-1 bg-white rounded-r-lg transition-all duration-300 ${indicatorHeightMap[indicatorState]}`}
			/>
			<Tooltip
				title={title || children}
				arrow
				placement="right"
				componentsProps={{
					tooltip: {
						sx: {
							bgcolor: "common.black",
							"& .MuiTooltip-arrow": {
								color: "common.black",
							},
						},
					},
				}}>
				<Button
					variant="text"
					sx={{
						color,
						fontSize,
						textTransform: "initial",
						borderRadius: "50%",
						bgcolor: darkServerIconBg,
						whiteSpace: "nowrap",
						width: 48,
						height: 48,
						transition: "all 300ms",
						minWidth: "auto",
						"&:hover": {
							bgcolor,
							color: "#fff",
							borderRadius: 4,
						},
						"&:focus": {
							bgcolor,
							color: "#fff",
							borderRadius: 4,
						},
					}}>
					{children}
				</Button>
			</Tooltip>
		</div>
	);
};

export default ButtonServer;

ButtonServer.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
	title: PropTypes.string,
	color: PropTypes.string,
	bgcolor: PropTypes.string,
	fontSize: PropTypes.number,
};

ButtonServer.defaultProps = {
	title: "",
	color: "#fff",
	bgcolor: blurple,
	fontSize: 10,
};
