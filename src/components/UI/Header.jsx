// external imports
import { NavLink, useLocation } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { mobileMenuAndContentAdjust } from "../../utility/mobileMenuAndContentAdjust";

export const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	const location = useLocation();

	useEffect(() => {
		if (showMenu) {
			mobileMenuAndContentAdjust(true);
		} else {
			mobileMenuAndContentAdjust(false);
		}
	}, [location, showMenu]);

	const handleHamMenuToggle = (e) => {
		if (e.target.tagName === "BUTTON") {
			const newShowMenu = !showMenu;
			setShowMenu(newShowMenu);
			mobileMenuAndContentAdjust(newShowMenu);
		}
	};

	return (
		<header>
			<div className="container">
				<div className="grid navbar-grid">
					<div id="logo">
						<NavLink to={"/"}>
							<h1>WorldAtlas</h1>
						</NavLink>
					</div>
					<nav className={showMenu ? "menu-mobile" : "menu-web"}>
						<ul>
							<li>
								<NavLink
									to={"/"}
									onClick={(e) => handleHamMenuToggle(e)}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/about"}
									onClick={(e) => handleHamMenuToggle(e)}
								>
									About
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/country"}
									onClick={(e) => handleHamMenuToggle(e)}
								>
									country
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/contact"}
									onClick={(e) => handleHamMenuToggle(e)}
								>
									Contact
								</NavLink>
							</li>
						</ul>
					</nav>
					<div className="ham-menu">
						<button onClick={(e) => handleHamMenuToggle(e)}>
							<GiHamburgerMenu />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};
