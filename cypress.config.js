const { defineConfig } = require("cypress",'cypress-iframe');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // chromeWebSecurity = true
      blockHosts = ['*pagead2.googlesyndication']
      //
      //
        module.exports = defineConfig({
        reporter: 'reporters/custom.js'})
          chromeWebSecurity= false
          video= false
          modifyObstructiveCode= false
          unhandledRejections=false
          viewportWidth= 1320
          viewportHeight= 800

          defaultCommandTimeout= 10000
          pageLoadTimeout= 60000

    },
  },
});
