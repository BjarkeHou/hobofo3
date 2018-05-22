# Install

## Install packages:
	npm install
	yarn install

	cd client/
	npm install

## Fix mysql-model
- Go to /node_modules/mysql-model/node_modules and delete the mysql folder (deprecated version).
- Change .createConnection to .createPool in mysql-model.js line7

# Run

`yarn dev` for development.