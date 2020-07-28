import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import { media } from './media';
import mixins from './mixins';

const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.navy};
    color: ${colors.slate};
    line-height: 1.3;
    font-family: ${fonts.Montserrat};
    font-size: ${fontSizes.xl};
    ${media.phablet`font-size: ${fontSizes.lg};`}
    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      #root > #content > * {
        filter: blur(5px) brightness(0.7);
        transition: ${theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  ::selection {
    background-color: ${colors.slate};
    color: ${colors.lightestSlate};
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    color: ${colors.lightestSlate};
    margin: 0 0 10px 0;
  }

  h1 {
    &.big-title {
      color: ${colors.white} !important;
      font-size: 80px;
      line-height: 1.1;
      margin-bottom: 2.5rem;
      ${media.desktop`font-size: 70px;`};
      ${media.tablet`font-size: 60px;`};
      ${media.phablet`font-size: 50px;`};
      ${media.phone`font-size: 40px;`};
    }
    &.medium-title {
      color: ${colors.white} !important;
      font-size: 60px;
      line-height: 1.1;
      margin-bottom: 1rem;
      ${media.desktop`font-size: 50px;`};
      ${media.tablet`font-size: 40px;`};
    }
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:focus {
      color: ${colors.green};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    &:focus,
    &:active {
      outline-color: ${colors.lightblue};
    }
  }
  input, textarea {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    line-height: 150%;

    & > code {
      background-color: ${colors.lightNavy};
      color: ${colors.white};
      font-size: ${fontSizes.sm};
      border-radius: ${theme.borderRadius};
      padding: 0.3em 0.5em;
    }
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
    line-height: 150%;

    & > a {
      ${mixins.inlineLink};
    }
    & > code {
      background-color: ${colors.lightNavy};
      color: ${colors.white};
      font-size: ${fontSizes.sm};
      border-radius: ${theme.borderRadius};
      padding: 0.3em 0.5em;
    }
  }
  ul {
    li {
      font-size: 17px;
      color: ${colors.white};
      padding-bottom: 1rem;
      & > code {
        background-color: ${colors.lightNavy};
        color: ${colors.white};
        font-size: ${fontSizes.sm};
        border-radius: ${theme.borderRadius};
        padding: 0.3em 0.5em;
      }
    }
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: ${fontSizes.lg};
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: ${colors.green};
        }
      }
    }
  }
  blockquote {
    border-left-color: ${colors.green};
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;
    p {
      font-style: italic;
      font-size: 24px;
    }
  }
  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    width: 50%;
    border-top: 2px solid rgba(255, 255, 255, 0.1);
  }

  code {
    font-family: ${fonts.SpaceMono};
    font-size: ${fontSizes.md};
  }

  #logo {
    color: ${colors.green};
  }

  .overline {
    color: ${colors.green};
    font-family: ${fonts.SpaceMono};
    font-size: ${fontSizes.md};
    font-weight: normal;
  }

  .section-title {
    text-align: center;
  }

  .subtitle {
    color: ${colors.green};
    margin: 0 0 20px 0;
    font-size: ${fontSizes.md};
    font-family: ${fonts.SpaceMono};
    font-weight: normal;
    line-height: 1.5;
    ${media.desktop`font-size: ${fontSizes.sm};`};
    ${media.tablet`font-size: ${fontSizes.smish};`};
    a {
      ${mixins.inlineLink};
      line-height: 1.5;
    }
  }

  .breadcrumb {
    align-items: center;
    margin-bottom: 50px;
    color: ${colors.green};
    background-color: transparent !important;
    .arrow {
      display: block;
      margin-right: 10px;
      padding-bottom: 4px;
    }
    a {
      ${mixins.inlineLink};
      font-family: ${fonts.SpaceMono};
      font-size: ${fontSizes.sm};
      font-weight: bold;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
`;

export default GlobalStyle;
