// external imports
import { NavLink } from "react-router";

export const CountryCards = ({ country }) => {
	const { name, capital, population, region, flags } = country;
	return (
		<li className="country-card  card ">
			<div className="container-card bg-white-box">
				<img src={flags.png} alt={flags.alt} />

				<div className="countryInfo">
					<p className="card-title">
						{name.common.length > 10
							? name.common.slice(0, 10) + "..."
							: name.common}
					</p>
					<p>
						<span className="card-description">Capital: </span>
						{capital[0]}
					</p>
					<p>
						<span className="card-description">Region: </span>
						{region}
					</p>
					<p>
						<span className="card-description">Population: </span>
						{population.toLocaleString()}
					</p>
					<NavLink to={`${name.common}`}>
						<button>Read More</button>
					</NavLink>
				</div>
			</div>
		</li>
	);
};
