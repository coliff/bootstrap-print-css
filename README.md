[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/coliff/bootstrap-print-css/master/LICENSE)
[![GitHub Super-Linter](https://github.com/coliff/bootstrap-print-css/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![GitHub Stars](https://img.shields.io/github/stars/coliff/bootstrap-print-css.svg?label=github%20stars)](https://github.com/coliff/bootstrap-print-css)
[![NPM Version](https://img.shields.io/npm/v/bootstrap-print-css)](https://www.npmjs.com/package/bootstrap-print-css)

# Bootstrap Print CSS 🖨️

Bootstrap 5 no longer includes custom CSS for printing - with the CSS in this project you can add it back.

Note: This should improve the experience when printing, but there are [bugs and inconsistencies](https://github.com/twbs/bootstrap/issues?page=2&q=is%3Aissue+sort%3Aupdated-desc+print) with the way that browsers handle printing so testing is recommended.

## Quick Start

- [Download the latest release](https://github.com/coliff/bootstrap-print-css/)
- Clone the repo `git clone https://github.com/coliff/bootstrap-print-css.git`
- Install with [npm](https://www.npmjs.com/package/bootstrap-print-css) `npm install bootstrap-print-css`
- Install with [yarn](https://yarnpkg.com/package/bootstrap-print-css) `yarn add bootstrap-print-css`

## Usage

You can include the CSS with one of the following:

1. Import the `bootstrap-print.css` to your main CSS. This will mean one less HTTP request compared to loading it separately.

2. Load it as a separate CSS file `<link rel="stylesheet" href="/css/bootstrap-print.min.css" media="print">`

## Credits & Thanks

All credit for the CSS work goes to the HTML5 Boilerplate and Bootstrap teams. I've just copied the [Bootstrap 4 print styles](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_print.scss) and packaged them up for Bootstrap 5.
