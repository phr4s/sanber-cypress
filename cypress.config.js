const { defineConfig } = require("cypress");
const moment = require("moment");

moment.locale('id');

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 20000,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
      reportFilename: `[name]-run-${moment().format('DD-MM-YYYY-HH.mm')}`,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});
