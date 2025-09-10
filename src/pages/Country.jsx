// external input
import { useEffect, useState, useTransition } from "react";
// internal inputs
import { getCountryData } from "../api/postApi";
import { CountryCards } from "../Components/layOut/CountryCard";
import { Loader } from "../Components/UI/Loader";
import { Searching } from "../Components/UI/Searching";

export const Country = () => {
	// hooks
	const [isPending, startTransition] = useTransition();
	const [countries, setCountries] = useState([]);
	// hooks for searching and filtering
	const [search, setSearch] = useState();
	const [filter, setFilter] = useState("All");

	useEffect(() => {
		startTransition(async () => {
			const res = await getCountryData();
			setCountries(res.data);
		});
	}, []);

	if (isPending) {
		return <Loader />;
	}

	// after search and filter
	const handleSearchCountry = (country) => {
		if (search) {
			return country.name.common
				.toLowerCase()
				.includes(search.toLowerCase());
		}

		return true;
	};

	const handleFilterCountry = (country) => {
		if (filter === "All") return country;

		return filter === country.region;
	};

	const searchingCountries = countries.filter(
		(country) =>
			handleSearchCountry(country) && handleFilterCountry(country)
	);

	return (
		<section className="country-section">
			<Searching
				search={search}
				setSearch={setSearch}
				filter={filter}
				setFilter={setFilter}
				countries={countries}
				setCountries={setCountries}
			/>
			<ul className="grid grid-four-cols">
				{searchingCountries.map((curCountries, index) => {
					return <CountryCards key={index} country={curCountries} />;
				})}
			</ul>
		</section>
	);
};
