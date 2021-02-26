import mainSrc from "./images/home1.jpg";

const size = {
	mobile: "770px",
	tablet: "1024px",
	laptop: "1280px",
};

const config = {
	mainColor: "#ffb400",

	mobile: `(max-width: ${size.mobile})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,

	mainSrc: mainSrc,
};

export default config;
