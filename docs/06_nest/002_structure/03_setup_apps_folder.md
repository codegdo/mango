# Convert the Project into a Monorepo

`nest g app api`

nest will turn project to monorepo

nest will create an "apps" folder and "api" and "nest"

nest move the orginal main src folder to "nest" folder

## update "nest-cli.json"

"sourceRoot": "apps/nest/src" to "apps/api/src"

"tsConfigPath": "apps/nest/tsconfig.app.json" to "apps/api/tsconfig.app.json"

"root": "apps/nest" to "root": "apps/api"

remove "nest" config section

remove "nest" folder in apps
