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

	header, footer {
		background-color: var(--dark-green);
	}

	footer {
		text-align: center;
	}

	.background-darkGreen {
		background-color: var(--dark-green);
	}

	.font-green {
		color: var(--beige-green);
	}

	// pre { border: none; }
	// h1, h2, h3, h4, h5 { font-family: var(--head-font); }
	// p { line-height: 2; }
	// input { color: var(--dark-green2); }

	// nav.navbar
	// {
	// 	margin-top: 25px;
	// 	margin-bottom: 0;
	// 	float: right;

	// 	ul
	// 	{
	// 		margin: 0;
	// 		padding: 0;
	// 		list-style: none;
	// 		li
	// 		{
	// 			display: inline-block;

	// 			a
	// 			{
	// 				font-size: var(--large-font-size);
	// 				color: var(--beige-green);
	// 				padding: 5px;
	// 				border-radius: 14%;
	// 				border: 2px solid transparent;
	// 				text-decoration: none;

	// 				&:hover
	// 				{
	// 					text-decoration: none;
	// 					color: var(--beige-green);
	// 					border-color: var(--light-green);;
	// 					-webkit-transition: border-color 1s ease-out, color 1.5s ease-out;
	// 					transition: border-color 1s ease-out, color 1.5s ease-out;
	// 				}
	// 				&.active
	// 				{
	// 					border-color: var(--light-green);;
	// 				}
	// 			}
	// 		}
	// 	}
	// }

	.background-desk
	{
		background-color: transparent !important;
		background-image: url('/images/desk.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		height: 100vh;
		min-height: 500px;
	}

	// .info { padding-top: 20vh; }
	// ul.icons
	// {
	// 	list-style: none;
	// 	margin-top: 10px;
	// 	padding: 0;

	// 	li
	// 	{
	// 		display: inline-block;
	// 		margin-left: 5px;
	// 		margin-right: 5px;

	// 		a
	// 		{
	// 			color: var(--beige-green);
	// 			&:hover
	// 			{
	// 				color: var(--light-green);;
	// 				-webkit-transition: color .75s ease-out;
	// 				transition: color .75s ease-out;
	// 			}
	// 		}
	// 	}
	// }

	// .pad { padding: 20px 0; }
	.margin { margin-top: 30px; margin-bottom: 30px; }
	// .darkgreen2 { color: var(--dark-green2); }
	// .link-button
	// {
	// 	border: 1px solid var(--dark-green2);
	// 	padding: 10px;
	// 	border-radius: 4px;
	// 	text-decoration: none;
	// 	font-size: var(--large-font-size);
	// 	&:hover
	// 	{
	// 		text-decoration: none;
	// 		background-color: var(--dark-green2);
	// 		color: var(--light-green);;
	// 		-webkit-transition: background-color 0.5s ease-out, color 0.5s ease-out;
	// 		transition: background-color 0.5s ease-out, color 0.5s ease-out;
	// 	}
	// }

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

	// .notes{
	// 	a[href=notes] {
	//     text-decoration: none; color: inherit;
	//   }
	// 	.noteForm {
	//     display: none;
	//   }
	// 	.blackboard {
	// 		border: 10px solid var(--silver);
	// 		padding: 5%;
	// 		background: linear-gradient(to right, black, var(--chalk-gray) 50%, black);
	// 		position: relative;
	// 	}
	// 	.sticky-note {
	// 		background-color: var(--dark-green);
	// 		margin: 8px;
	// 		min-height: 100px;
	// 	}
	// 	.chalk {
	// 		position: absolute;
	// 		background-color: var(--beige-green);
	// 		border-radius: 2px;
	// 		bottom: 0px;
	// 	}
	// }

	// .display {
	//   display: block !important;
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

	// .logo-image { width: 75px; }
	// .comp-image { max-width: 400px; width: 100%; border-radius: 4px; }
	// .project-image { max-width: 100%; border-radius: 4px; margin: 20px auto; border: 2px groove $darkGreen; }
	// .fa-heart { color: red; animation: heartbeat 1s infinite; }
	// .fa-tint { color: $lightBlue; animation: teardrop 2s infinite ease-out; }
	// .fa-cutlery { color: $silver; animation: tools 1s infinite;}

	// @keyframes heartbeat
	// {
	//   50% { transform: scale(1.2); }
	// }

	// @keyframes teardrop
	// {
	//   0% { transform: translateY(-5px); opacity: 0.1; }
	//   50% { opacity: 1; }
	//   100% { transform: translateY(10px); opacity: 0.1; }
	// }

	// @keyframes tools
	// {
	//   0% { transform: rotate(-10deg); }
	//   50% { transform: rotate(20deg); }
	//   100% { transform: rotate(-20deg); }
	// }
`;

export default GlobalStyle;
