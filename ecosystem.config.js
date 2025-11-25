module.exports = {
  apps : [{
    name: "craftwork-client",
    script: "npm",
    args: "start",
    cwd: "/opt/craftwork/client",
    exec_mode: "fork",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "1G",
    env_production: {
      NODE_ENV: "production"
    }
  }]
};
