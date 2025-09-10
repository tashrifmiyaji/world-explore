import { useState } from "react";

export const Searching = ({
	search,
	setSearch,
	filter,
	setFilter,
	countries,
	setCountries,
}) => {
	// options for select dropdown
	const selectOptions = [
		"All",
		"Africa",
		"Americas",
		"Asia",
		"Europe",
		"Oceania",
	];

	const sorting = ["Asc", "Des"];

	// handle search values
	const handleSearchingValue = (e) => {
		setSearch(e.target.value);
	};

	// handle filter values
	const handleFilteringValue = (e) => {
		setFilter(e.target.value);
	};

	// handle sorting
	const sortingCountries = (curSort) => {
		const sortedCountry = [...countries]; 
		sortedCountry.sort((a, b) => {
			return curSort === "Asc"
				? a.name.common.localeCompare(b.name.common)
				: b.name.common.localeCompare(a.name.common);
		});
		setCountries(sortedCountry);
	};
	return (
		// search input
		<section className="section-searchFilter container">
			<input
				type="text"
				placeholder="Search"
				value={search}
				onChange={handleSearchingValue}
			/>

			{/* sort button */}
			{sorting.map((curSort, index) => {
				return (
					<div key={index}>
						<button onClick={() => sortingCountries(curSort)}>
							{curSort}
						</button>
					</div>
				);
			})}

			{/* select Options */}
			<div>
				<select
					className="select-section"
					value={filter}
					onChange={handleFilteringValue}
				>
					{selectOptions.map((curOption, index) => {
						return (
							<option key={index} value={curOption}>
								{curOption}
							</option>
						);
					})}
				</select>
			</div>
		</section>
	);
};
