module.exports = {
  apps : [{
    name   : "Craftwork client copy",
    script : "yarn start",
    env_production: {}
  }],

  deploy : {
    production : {
      user : 'dimi',
      host : ['89.221.216.23'],
      ref  : 'origin/main',
      repo : 'git@github.com:simon1400/craftwork-client.git',
      path : '/home/dimi/app/craftwork/client-dev',
      'post-deploy' : 'yarn && yarn build && pm2 reload ecosystem.config.js --env production',
    },
  }
};
