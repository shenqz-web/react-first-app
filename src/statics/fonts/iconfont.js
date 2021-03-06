import { injectGlobal } from 'styled-components';
injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1533616212979'); /* IE9*/
    src: url('./iconfont.eot?t=1533616212979#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1533616212979') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1533616212979#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
