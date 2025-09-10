import axios from "axios";

const api = axios.create({
	baseURL: "https://restcountries.com/v3.1",
});

// https get method
export const getCountryData = () => {
	return api.get("/all?fields=name,population,region,capital,flags");
};

// https get method for the individual country
export const getIndividualCountry = (name) => {
	return api.get(`https://restcountries.com/v3.1/name/${name}/?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
}