 //merge parent conf object + add new changes in uat conf(baseurl, connectiontimeour) for UAT env
const merge = require('deepmerge')
const wdioConf = require('./wdio.conf.js')
exports.config = merge(wdioConf.config, {
baseUrl : 'http://automationpractice.com/',
waitforTimeout: 5000,
mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    grep:"sanity"
 
},
})
