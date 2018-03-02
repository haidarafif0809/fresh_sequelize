#!/usr/bin/env node
const shell = require('shelljs');
const argv = process.argv;
const migrate = argv[2];
const seed = argv[3];
if (migrate == 'migrate') {
  console.log('drop all table and migrate all');
  if (shell.exec('sequelize db:migrate:undo:all').code !== 0) {
    shell.echo('Error: Sequelize Migrate Undo All Failed');
    shell.exit(1);
  }
  if (shell.exec('sequelize db:migrate').code !== 0) {
    shell.echo('Error: Sequelize Migrate All Failed');
    shell.exit(1);
  }
  console.log('Success drop all table and migrate all');
}
if (seed == 'seed') {
  console.log('seed all');
  if (shell.exec('sequelize db:seed:undo:all').code !== 0) {
    shell.echo('Error: Sequelize Seed Undo All Failed');
    shell.exit(1);
  }
  if (shell.exec('sequelize db:seed:all').code !== 0) {
    shell.echo('Error: Sequelize Seed All Failed');
    shell.exit(1);
  }
  console.log('Success Seed All');
}

if (migrate == undefined) {
  console.log('run : fresh migrate | refresh the database, drop all tables and run all migrations');
  console.log('run : fresh migrate seed | refresh the database, drop all tables, run all migrations and run all seeders');
  console.log('run : fresh seed | drop all data and run all seeders');
  console.log('NOTES==================== This Package need sequelize to be installed in your apps');
}
