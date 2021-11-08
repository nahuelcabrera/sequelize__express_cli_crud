# Javascript Node Project - Sqlite & Sequelize

# run with: node
node_modules/.bin/sequelize init (initialize)
node_modules/.bin/sequelize model:generate --name Contact --attributes firstName:string,lastName:string,phone:string,email:string (generate model)
node_modules/.bin/sequelize db:migrate
node_modules/.bin/sequelize seed:generate --name seed-contact (generate seeders)
node_modules/.bin/sequelize db:seed:all (seed)

# execs
# node . --create:Contact --firstName=Trebor --lastName=Numesas --phone=443328 --city=Poliat
# node . --read:Contact