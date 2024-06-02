import { type FullConfig } from '@playwright/test';
import configEnv from '../appconfig/executiondetails.json'
async function globalSetup(config: FullConfig) {
    console.log("I am checking global setup here....!!!!!")
    process.env.UAT_URL = "https://www.google.com"
    process.env.EXECUTION_ENVIRONMENT = configEnv.env
    let configDetail = require('fs')
    process.env.appconfig = JSON.parse(configDetail.readFileSync(`appconfig/${configEnv.env}/${configEnv.env}.json`))


}

export default globalSetup;