import { createGlobalStyle } from 'styled-components';
import NotoSansKRRegular from '../fonts/NotoSansKR-Regular.woff';
import NotoSansKRMedium from '../fonts/NotoSansKR-Medium.woff';
import NotoSansKRBold from '../fonts/NotoSansKR-Bold.woff';

const GlobalStyle = createGlobalStyle`
  /* reset */
  html,
  body,
  div,
  span,
  object,
  iframe,
  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  main,
  summary,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  form,
  fieldset,
  legend,
  input,
  label,
  button,
  textarea,
  select,
  textarea,
  input,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  b,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  abbr,
  address,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  samp,
  small,
  strong,
  sub,
  sup,
  var,
  data,
  time,
  mark,
  audio,
  video,
  a {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body :before,
  body :after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    background: #1a1b1e;
    line-height: 1.5;
    color: #fff;
    word-break: keep-all;
    -ms-text-size-adjust: 100%;
    -webkit-test-size-adjust: 100%;
    --webkit-font-smoothing: antialiased;
  }

  body,
  select,
  input,
  button,
  textarea,
  button,
  pre {
    font-size: 14px;
    font-family: 'NotoSansKR', sans-serif;
  }

  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  main,
  summary {
    display: block;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
  }

  cite,
  em,
  dfn,
  address {
    font-style: normal;
  }

  fieldset,
  iframe {
    border: 0 none;
    min-width: 0;
  }

  ins {
    text-decoration: none;
  }

  del {
    text-decoration: line-through;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  img,
  fieldset,
  iframe {
    border: 0 none;
  }

  img,
  video,
  audio,
  object,
  embed,
  iframe {
    max-width: 100%;
    height: auto;
  }

  legend,
  caption {
    width: 1px;
    height: 1px;
    margin: -1px;
    font-size: 1px;
    opacity: 0;
    white-space: nowrap;
  }

  i,
  em,
  address {
    font-style: normal;
  }

  input,
  select,
  textarea {
    border-radius: 0;
    box-shadow: none;
    background: transparent;
  }

  input,
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  label,
  button {
    cursor: pointer;
  }

  button {
    cursor: pointer;
    padding: 0;
    background: none;
    border: 0 none;
  }

  select::-ms-expand {
    display: none;
  }

  textarea {
    resize: vertical;
  }

  input[type="text"]::-ms-clear {
    display: none;
  }

  input[type="radio"],
  input[type="checkbox"],
  input[type="tel"],
  input[type="number"] {
    vertical-align: middle;
  }

  label>input[type="radio"],
  label>input[type="checkbox"] {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  input[type="number"] {
    -moz-appearace: textfield;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  table {
    width: 100%;
    empty-cells: show;
    border-spacing: 0;
    table-layout: fixed;
  }

  table th {
    font-weight: normal;
  }

  a,
  a:visited {
    color: #fff;
  }

  a:link,
  a:hover {
    text-decoration: none;
  }

  figure {
    img {
      max-width: 100%;
    }

    >a {
      cursor: zoom-in;
    }
  }

  /* fonts */
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 400;
    font-style: normal;
    src: url(${NotoSansKRRegular});
  }
  
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 500;
    font-style: normal;
    src: url(${NotoSansKRMedium});
  }
  
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 700;
    font-style: normal;
    src: url(${NotoSansKRBold});
  }

  /* common */
  a.link,
  button.link {
    text-decoration: underline;
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

  .is-locked {
    overflow: hidden;
  }
`;

export default GlobalStyle;
