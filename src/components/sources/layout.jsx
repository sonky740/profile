import React from "react";
import { Link } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import "./fonts/font.css";
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, object, iframe,
  article, aside, canvas, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, main, summary,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  form, fieldset, legend, input, label, button, textarea, select, textarea, input,
  table, caption, tbody, tfoot, thead, tr, th, td,
  b, i, dl, dt, dd, ol, ul, li,
  abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, data,
  time, mark, audio, video, a {margin:0;padding:0;box-sizing:border-box;}
  body :before, body :after {box-sizing:border-box;}

  html {font-size:62.5%;}
  html, body {width:100%;height:100%;}
  body {background:#000;line-height:1.43;color:#fff;word-break:keep-all;-ms-text-size-adjust:100%;-webkit-test-size-adjust:100%;--webkit-font-smoothing:antialiased;}
  body, select, input, button, textarea, button, pre {font-size:14px;font-family:'NotoSansKR', sans-serif;}
  article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, main, summary {display:block;}
  blockquote, q {quotes:none;}
  blockquote:before, blockquote:after, q:before, q:after {content:none;}

  h1, h2, h3, h4, h5, h6 {font-size:100%;}
  cite, em, dfn, address {font-style:normal;}
  fieldset, iframe {border:0 none;min-width:0;}
  ins {text-decoration:none;}
  del {text-decoration:line-through;}

  ol, ul, li{list-style:none;}
  img, fieldset, iframe {border:0 none;}
  img, video, audio, object, embed, iframe {max-width:100%;height:auto;}

  legend, caption {width:1px;height:1px;margin:-1px;font-size:1px;opacity:0;white-space:nowrap;}
  i, em, address {font-style:normal;}

  input, select, textarea {border-radius:0;box-shadow:none;background:transparent;}
  input, select {-webkit-appearance:none;-moz-appearance:none;appearance:none;}
  label, button {cursor:pointer;}
  button {cursor:pointer;padding:0;background:none;border:0 none;}
  select::-ms-expand {display:none;}
  textarea {resize:vertical;}
  input[type="text"]::-ms-clear {display:none;}
  input[type="radio"], input[type="checkbox"], input[type="tel"], input[type="number"] {vertical-align:middle;}
  label>input[type="radio"], label>input[type="checkbox"] {position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;opacity:0;}
  input[type="number"] {-moz-appearace:textfield;}
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {-webkit-appearance:none;}

  table {width:100%;empty-cells:show;border-spacing:0;table-layout:fixed;}
  table th {font-weight:normal;}

  a, a:visited {color:#fff;}
  a:link, a:hover {text-decoration:none;}

  figure {
    img {
      max-width: 100%;
    }

    >a {
      cursor: zoom-in;
    }
  }

  .blind {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    white-space: nowrap;
    clip: rect(0, 0, 0, 0);
  }
`;

const SkyLayout = styled.div`
  min-width: 320px;
`;

const SkyHeader = styled.header`
  display: flex;
  max-width: 1200px;
  margin: 0 auto 24px;
  padding: 8px 24px;
  font-size: 24px;
  align-items: center;
  justify-content: space-between;

  svg {
    text {
      stroke-width: 1;
      fill: #fff;
      stroke: #fff;
      font-size: 24px;
      animation: stroke 5s linear;
      letter-spacing: 1px;

      @keyframes stroke {
        0% {
          fill: rgba(72, 138, 20, 0);
          stroke: #fff;
          stroke-dashoffset: 25%;
          stroke-dasharray: 0 50%;
          stroke-width: 2;
        }

        70% {
          fill: rgba(72, 138, 20, 0);
          stroke: #fff;
        }

        80% {
          fill: rgba(72, 138, 20, 0);
          stroke: #fff;
          stroke-width: 3;
        }

        100% {
          fill: #fff;
          stroke: rgba(54, 95, 160, 0);
          stroke-dashoffset: -25%;
          stroke-dasharray: 50% 0;
          stroke-width: 2;
        }
      }
    }
  }

  > nav {
    font-size: 18px;

    .test {
      color: transparent;
    }

    a {
      &:hover {
        color: #ffbd39;
      }

      +a {
        margin-left: 8px;
      }
    }
  }

  @media screen and (max-width: 1120px) {
    width: 100%;
    font-size: 21px;

    > nav {
      font-size: 16px;
    }
  }
`;

const SkyContainer = styled.div`
  margin: auto;
  max-width: 1200px;
  padding: 0 24px 24px;

  text-align: ${(props) => (props.align === "center" ? "center" : "left")};

  > section {
    + section {
      margin-top: 24px;
    }
  }

  @media screen and (max-width: 1120px) {
    width: 100%;
  }
`;

export default function Layout({ children, align, title }) {
  return (
    <>
      <Helmet>
        <title>{title || "손기연"}</title>
      </Helmet>
      <GlobalStyle />
      <SkyLayout>
        {/* <!-- ### 헤더 ### --> */}
        <SkyHeader>
          <h1>
            <Link to="/" className="home-link" data-text="Sonky">
              {/* 손기연 */}
              <svg width="72" hegiht="36" viewBox="0 0 72 36">
                <text x="0" y="85%">
                  손기연
                </text>
              </svg>
            </Link>
          </h1>
          <nav>
            {/* <Link to="/test" className="test">
              Test
            </Link> */}
            <a
              href="https://sonky740.github.io/Guide_es6/dist/"
              target="_blank"
              rel="noreferrer"
            >
              Guide_ES6
            </a>
            {/* <a
              href="https://sonky740.github.io/Guide/"
              target="_blank"
              rel="noreferrer"
            >
              Guide_ES5
            </a> */}
            <Link to="/about">About</Link>
          </nav>
        </SkyHeader>

        <SkyContainer align={align}>{children}</SkyContainer>
      </SkyLayout>
    </>
  );
}
