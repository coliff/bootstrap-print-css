export default {
  extends: ['stylelint-config-twbs-bootstrap'],
  ignoreFiles: ['**/*.min.css'],
  rules: {
    'declaration-no-important': null,
    'selector-no-qualifying-type': null,
  },
};
