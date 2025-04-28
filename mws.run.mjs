#!/usr/bin/env node
//@ts-check
import startServer from "@tiddlywiki/mws";
startServer({
  passwordMasterKeyFile: "./localpass.key",
  wikiPath: "./wiki",
  listeners: [{
    // key: "./localhost.key",
    // cert: "./localhost.crt",
    // host: "::",
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 8080
  }],
}).catch(console.log);
