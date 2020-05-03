module.exports = {
  apps: [
    {
      name: 'blog-fe',
      script: 'node_modules/.bin/next start',
      watch: ['./.next'],
      ignore_watch: ['node_modules'],
      autorestart: true,
      max_memory_restart: '1G',
      instances: 1,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],

  // deploy: {
  //   production: {
  //     user: 'SSH_USERNAME',
  //     host: 'SSH_HOSTMACHINE',
  //     ref: 'origin/master',
  //     repo: 'https://github.com/Yancey-Blog/blog-be-next',
  //     path: 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': '',
  //   },
  // },
}
