import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

/* Custom Properties */

:root {
	--ff-primary: 'Lora', serif;
	--ff-secondary: 'Roboto Slab', serif;
	--ff-third: 'Roboto', sans-serif;

	--fw-reg: 500;
	--fw-bold: 700;

	--clr-light: #fff;
	--bg-black: #000000;
	--clr-dark: #303030;
	--clr-lightBlue: #1877f2;
	--clr-accent: #f8333c;
	--dark-bg: #262626;
	--gray-1: #b6b8c9;
	--deep-dark: #1e1e1e;
	--gray-2: #363636;
	--gray-3: #dedfec;
	--gray-4: #bdbec1;
	--light-blue: #377cff;
	--lighter-blue: #3ec6ff;
	--sky-blue: #356dfb;
	--darker-sky-blue: #073cc2;
	--dark-gray: #777;
	--crimson: crimson;
	--dark-purple: #3f51b5;
	--cream: #e5e5e5;

	--fs-h1: 2.5rem;
	--fs-h2: 2.25rem;
	--fs-h3: 1.25rem;
	--fs-body: 1rem;
}

html{
	font-size: 16px;
}

@media (max-width: 420px){
		html{
			font-size: 14px;
		}
	}
@media (max-width: 280px){
		html{
			font-size: 10px;
		}
	}

/* @media (min-width: 800px) {
	:root {
		--fs-h1: 2.5rem;
		--fs-h2: 2rem;
		--fs-h3: 1.5rem;
		--fs-body: 1.125rem;
	}
} */

@media (max-width: 500px) {
	:root {
		/* --fs-h1: 1.5rem; */
		/* --fs-h2: 2rem;
		--fs-h3: 1.5rem;
		--fs-body: 1.125rem; */
	}
}

/* General styles */

body {
	background-color: var(--clr-light);
	color: var(--clr-dark);
	font-family: var(--ff-third);
  max-width: 2000px;
  width: 100%;
  margin: 0 auto;
}

ul,
li {
	text-decoration: none;
	margin: 0;
	padding: 0;
  list-style: none;
}

button {
	outline: none;
	cursor: pointer;
	border: none;
}

a {
	text-decoration: none;
}

input {
	outline: none;
}

/* Typography */

/* h1,
h2,
h3 {
	line-height: 1;
	margin: 0;
}

h1 {
	font-size: var(--fs-h1);
}
h2 {
	font-size: var(--fs-h2);
}
h3 {
	font-size: var(--fs-h3);
} */

`;