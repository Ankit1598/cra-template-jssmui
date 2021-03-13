import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	a{
		text-decoration: none;
	}

	p {
		color: #10285d;
		font-size: 16px;
		line-height: 30px;
		margin-bottom: 15px;
		font-weight: normal;
	}
	h1, h2, h3, h4, h5 {
		color: #4255A4;
		margin-top: 0px;
		font-style: normal;
		font-weight: 400;
	}
	ul, ol, li {
		margin: 0;
		padding: 0;
		list-style: none;
	}
`;

export default GlobalStyles;
