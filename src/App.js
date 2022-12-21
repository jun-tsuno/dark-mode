import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import MoonIcon from "./components/icons/MoonIcon";
import SunIcon from "./components/icons/SunIcon";
import Switch from "./components/Switch";

const StyledApp = styled.div`
	min-height: 100vh;
	text-align: center;
	padding-top: 10rem;
	background-color: ${(props) => props.theme.body};
	transition: all 0.25s ease;
`;

const Name = styled.h1`
	margin: 1rem;
	color: ${(props) => props.theme.title};
`;

const Info = styled.p`
	margin: 1rem;
	color: ${(props) => props.theme.subtitle};
`;

const darkTheme = {
	body: "#282c36",
	title: "lightpink",
	subtitle: "lavender",
	icon: "lavender",
};

const lightTheme = {
	body: "#fff",
	title: "#dc658b",
	subtitle: "#333",
	icon: "#1c1c1c",
};

function App() {
	const [theme, setTheme] = useState("light");
	const isDarkTheme = theme === "dark";

	const toggleTheme = () => {
		setTheme(isDarkTheme ? "light" : "dark");
	};

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<StyledApp>
				<SunIcon />
				<Switch toggleTheme={toggleTheme} />
				<MoonIcon />
				<Name>Hello👋 World.</Name>
				<Info>Light / Dark mode test</Info>
				<Info>With Styled Components</Info>
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;
