const Heading = (props) => {
	if (props.level === "1") {
		return <h1 {...props}>{props.children}</h1>;
	}

	switch (props.level) {
		case "1":
			return <h1 {...props}>{props.children}</h1>;
		case "2":
			return <h2 {...props}>{props.children}</h2>;
		case "3":
			return <h3 {...props}>{props.children}</h3>;
		case "4":
			return <h4 {...props}>{props.children}</h4>;
		default:
			return <h1 {...props}>{props.children}</h1>;
	}
};

export default Heading;
