# TiddlyWiki on Azure with Continuous Integration

This repo demonstrates how to create a TiddlyWiki Node.js server that runs on Microsoft Azure with continuous integration. Continuous integration means that changes to the `main` branch will automatically trigger Microsoft Azure to rebuild the application with the latest source code.

# Setting up Microsoft Azure

1. Create a new Web App, selecting Node.js v20 as the runtime stack
2. Select the GitHub repo containing the application as the deployment source, and let Azure set it up
3. Enable CORS with the following command in the Azure cloud shell:

```
az webapp cors add -g JermoTest7_group -n JermoTest7 --allowed-origins "*"
```

4. Set the following application configuration setting `WEBSITE_NODE_DEFAULT_VERSION` to `20.0`

# Notes

* Kudu new UI: https://jermotest6.scm.azurewebsites.net/newui/kududebug
* Map of NODE_MODULE_VERSION to human facing version numbers https://github.com/nodejs/node/blob/main/doc/abi_version_registry.json

