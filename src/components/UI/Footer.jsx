//footer
//external inputs
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
// internal inputs
import footerData from "../../api/footerApi.json";

export const Footer = () => {
	const footerIcons = {
		MdPlace,
		IoCallSharp,
		TbMailPlus,
	};
	return (
		<footer className="footer-section">
			<div className="container grid grid-three-cols">
				{footerData.map((curFooter, index) => {
					const { icon, title, details } = curFooter;
					const IconComponent = footerIcons[icon];
					return (
						<div key={index} className="footer-contact">
							<div className="icon">{<IconComponent />}</div>
							<div>
								<p>{title}</p>
								<p>{details}</p>
							</div>
						</div>
					);
				})}
			</div>
		</footer>
	);
};
