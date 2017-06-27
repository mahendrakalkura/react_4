import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  #app {
    min-height: 100%;
    min-width: 100%;
  }
  p {
    margin-bottom: 20px;
  }
  footer {
    border-top: 1px solid #e5e5e5;
    color: #777;
    padding-top: 19px;
  }
`;
