import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	:root {
		--head-font: 'Patua One', sans-serif;
		--body-font: 'Open Sans', sans-serif;

		--large-font-size  : 18px;
		--medium-font-size : 16px;
		--small-font-size  : 14px;

		--beige: #e3c691;
		--beige-green: #dee7c6;
		--chalk-gray: #515156;
		--dark-green: #053b00;
		--dark-green2: #01260c;
		--light-blue: #4dd0e1;
		--light-green: #28dc18;
		--green: #19b76e;
		--silver: #c0c0c0;
	}

	body {
		color: var(--beige-green) !important;
		font-size: var(--medium-font-size);
		background-color: var(--dark-green) !important;
	}

	.link-button {
		border: 1px solid var(--dark-green2);
		border-radius: 4px;
		font-size: var(--large-font-size);
		padding: 10px;
		text-decoration: none;

		&:hover	{
			text-decoration: none;
			background-color: var(--dark-green2);
			color: var(--light-green);;
			-webkit-transition: background-color 0.5s ease-out, color 0.5s ease-out;
			transition: background-color 0.5s ease-out, color 0.5s ease-out;
		}
	}

	// .contact, .notes {
	// 	form {
	// 		margin-bottom: 0;
	// 		padding: 20px 0;
	// 		width: 75%;
	// 	}

	// 	fieldset {
	// 		padding: 20px;
	// 		border: 2px groove var(--beige-green);
	// 		float: none;
	// 	}

	// 	input, textarea {
	// 		font-size: var(--medium-font-size);
	// 	}

	// 	legend {
	// 		color: var(--beige-green);
	// 		width: initial;
	// 		border-bottom: 0;
	// 	}

	// 	input[type="text"], input[type="email"], input[type="tel"], input[type="file"], textarea {
	// 		background-color: var(--beige-green);
	// 		border: 1px solid #e5e5e5;
	// 		padding: 8px 10px;
	// 		box-sizing: border-box;
	// 		width: 100%;
	// 		margin: 0 0 25px;
	// 		color: black;
	// 	}

	// 	textarea {
	// 		font: 100% Verdana, Helvetica, sans-serif;
	// 		min-height: 100px;
	// 		resize: vertical;
	// 		white-space: pre-wrap;
	// 	}

	// 	input[type="submit"] {
	// 		float: right;
	// 		background-color: var(--light-green);;
	// 		padding: 10px 20px;
	// 		color: white;
	// 		border: none;
	// 		border-radius: 4px;
	// 		cursor: pointer;
	// 	}
	// }

	// .projects {
	// 	color: var(--dark-green2);
	// 	.background-blueGradient {
	//     background: linear-gradient(to bottom right, #95DAE7, #89B4CA, #437C9E);
	//   }
	// 	.background-grayGradient {
	//     background: linear-gradient(to bottom, #F1F1F1 , #999999, #F1F1F1);
	//   }
	// 	.background-lightBlue {
	//     background-color: var(--light-blue);
	//   }
	// 	.background-green {
	//     background-color: var(--green);
	//   }
	// }
`;

export default GlobalStyle;
