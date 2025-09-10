// external imports
import { useEffect, useState, useTransition } from "react";
import { useParams, NavLink } from "react-router";
// internal imports
import { getIndividualCountry } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryIndividualCard = () => {
	// hooks
	const params = useParams();
	const [isPending, startTransition] = useTransition();
	const [country, setCountry] = useState();

	useEffect(() => {
		startTransition(async () => {
			const res = await getIndividualCountry(params.id);
			if (res.status === 200) {
				setCountry(res.data[0]);
			}

			// console.log("Obj to arr", Object.keys(res.data[0].name.nativeName));
		});
	}, []);

	if (isPending || !country) return <Loader />;

	console.log("country", country);

	const {
		name,
		capital,
		region,
		subregion,
		currencies,
		languages,
		population,
		tld,
		flags,
	} = country;

	return (
		<section className="card country-details-card container">
			<div className="container-card bg-white-box">
				{country && (
					<div className="country-image grid grid-two-cols">
						<img src={flags.svg} alt={flags.alt} className="flag" />
						<div className="country-content">
							<p className="card-title">{name.official}</p>

							<div className="infoContainer">
								<p>
									<span className="card-description">
										Native Names:{" "}
									</span>
									{Object.keys(name.nativeName)
										.map((key) => {
											return name.nativeName[key].common;
										})
										.join(", ")}
								</p>
								<p>
									<span className="card-description">
										Capital:{" "}
									</span>
									{capital}
								</p>
								<p>
									<span className="card-description">
										Population:{" "}
									</span>
									{population.toLocaleString()}
								</p>
								<p>
									<span className="card-description">
										Region:{" "}
									</span>
									{region}
								</p>
								<p>
									<span className="card-description">
										Sub Region:{" "}
									</span>
									{subregion}
								</p>
								<p>
									<span className="card-description">
										Top Level Domain:{" "}
									</span>
									{tld[0]}
								</p>
								<p>
									<span className="card-description">
										Currencies:{" "}
									</span>
									{Object.keys(currencies)
										.map((key) => currencies[key].name)
										.join(", ")}
								</p>
								<p>
									<span className="card-description">
										Currencies Symbol:{" "}
									</span>
									{Object.keys(currencies)
										.map((key) => currencies[key].symbol)
										.join(", ")}
								</p>
								<p>
									<span className="card-description">
										Languages:{" "}
									</span>
									{Object.keys(languages)
										.map((key) => languages[key])
										.join(", ")}
								</p>
							</div>
						</div>
					</div>
				)}
				<div className="country-card-backBtn">
					<NavLink to="/country" className="backBtn">
						<button>Go Back</button>
					</NavLink>
				</div>
			</div>
		</section>
	);
};
