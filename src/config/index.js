import fs from "fs";

const defaultEnv = "development";
const env = process.env.NODE_ENV || defaultEnv;
const configFile = fs.readFileSync( `./src/config/environments/${ env }.json`, "utf8" );
const config = JSON.parse( configFile );

export default config;
