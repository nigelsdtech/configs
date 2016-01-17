var cfg   = require('config')
var defer = require('config/defer').deferConfig;

module.exports = {

  appName: process.env.npm_package_config_appName,

  auth: {
    credentialsDir: process.env.HOME+"/.credentials",
    clientSecretFile: defer( function (cfg) { return cfg.auth.credentialsDir+"/client_secret.json" } ),
    tokenFileDir: defer( function (cfg) { return cfg.auth.credentialsDir } ),
    tokenFile: defer( function (cfg) { return "access_token_"+cfg.appName+".json" } ),
    scopes: function () { return split(process.env.npm_package_config_googleAuthScopes , ",") }
  },

  log : {
    appName: defer(function (cfg) { return cfg.appName } ),
    level: "DEBUG",
    log4jsConfigs: {
      appenders: [
      	{
      	  type: "console"
      	},
      	{
      	  type: "file",
	  filename: defer(function (cfg) { return cfg.log.logDir.concat("/" , cfg.appName , ".log" ) }),
      	  category: defer(function (cfg) { return cfg.appName }),
      	  reloadSecs: 60,
      	  maxLogSize: 1024000
      	}
      ],
      replaceConsole: true
    },
    logDir: "./logs"
  }
} 