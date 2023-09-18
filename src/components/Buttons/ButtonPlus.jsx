import Button from "@mui/material/Button";
import { LiaPlusSolid } from "react-icons/lia";

const ButtonPlus = () => {
	return (
		<Button
			variant="text"
			sx={{
				color: "#23a14b",
				fontSize: 28,
				width: 48,
				height: 48,
				borderRadius: "50%",
				bgcolor: "#2c2f33",
				transition: "all 300ms",
				minWidth: "auto",
				"&:hover": {
					bgcolor: "#23a14b",
					color: "#fff",
					borderRadius: 5,
				},
			}}>
			<LiaPlusSolid />
		</Button>
	);
};

export default ButtonPlus;
