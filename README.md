# fresh_sequelize
Package to refresh database migrations and seeders with sequelize. Inspiration from laravel migrate:fresh

## Requirement
- node js and npm . because this is npm package.
- install sequelize and sequelize cli first, because this pakcage just work with sequelize.

## How To Install
better install it globally

```
npm install -g fresh_sequelize
```

## How To Use
open your terminal and run those command 
```
$ fresh 
// will run help

$ fresh migrate
// will run sequelize db:migrate:undo:all && sequelize db:migrate

$ fresh migrate seed
// will run sequelize db:migrate:undo:all && sequelize db:migrate && sequelize db:seed:all
```
