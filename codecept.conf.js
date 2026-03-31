/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://automationpratice.com.br',
      show: true,
      waitForNavigation: "networkidle",
      smartWait: 5000
    }
  },
  include: {
    Eu: './steps_file.js'
  },
  plugins: {
    htmlReporter: {
      enabled: true
    }
  },
  name: 'codecept_js',
  translation: 'pt-BR'
}