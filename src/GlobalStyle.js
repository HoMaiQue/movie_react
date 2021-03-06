import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --grayLight: #eee;
        --darkGray: #1c1c1c;
        --medGray: #353535;
        --fontSuperBig: 2.5rem;
        --fontBig: 2rem;
        --fontMed: 1.5rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: "Abel", sans-serif;
    }

    body {
        padding: 0;
        margin: 0;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }
    }
`