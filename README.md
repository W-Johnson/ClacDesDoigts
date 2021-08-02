API utilisant NodeJs et MongoDB.


Deux liens qui pourrez vous être utiles pour l'installation.


https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
https://nodejs.org/en/

Clonez le repos, puis npm install dans le dossier.

Dans un autre terminal lancez MongoDb avec "mongod".

Dans le dossier run le projet avec npm start.

Afin de tester vous pouvez utiliser Postman. 

Liste de tout les chickens :
Get http://localhost:3000/chicken

Incrémenter steps pour tout les chickens :
Get http://localhost:3000/chicken/run

Supprimer un chickens:
Delete http://localhost:3000/chicken/:chickenName

Ajouter un chicken:
Post ou Put http://localhost:3000/chicken + body ( vous pouvez voir le format dans chickenModel.js )

Modifier un chicken:
Patch ou Put http://localhost:3000/chicken/:chickenName + body
