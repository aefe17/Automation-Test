const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const { pa11y } = require("@cypress-audit/pa11y");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  setupNodeEvents(on, config){
    require('cypress-mochawesome-reporter/plugin')(on);
    return config;
  },
  
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "reports/mochawesome-report",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },

  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
        pa11y: pa11y(console.log.bind(console)),
      });
    },
  },
});
