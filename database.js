// database.js
const Database = require('better-sqlite3');
const crypto = require('crypto');
const fs = require('fs');

let db_aux = null;
if(!fs.existsSync('database.db')){
    db_aux = new Database(':memory:'); // Para crear automáticamente la base de datos podemos cambiar :memory: por nuestro-archivo.db
    db_aux.exec("CREATE TABLE users (user TEXT PRIMARY KEY, password TEXT)");
    db_aux.exec("INSERT INTO users (user, password) VALUES ('admin', '81dc9bdb52d04dc20036dbd8313ed055')");
    db_aux.exec("INSERT INTO users (user, password) VALUES ('pikachu', '04dac8afe0ca501587bad66f6b5ce5ad')");
    db_aux.exec("INSERT INTO users (user, password) VALUES ('leet', '33da7a40473c1637f1a2e142f4925194')");
    db_aux.exec("INSERT INTO users (user, password) VALUES ('charmander', '03f690195f59c32d566cfb79383e01c8')");
    db_aux.exec("INSERT INTO users (user, password) VALUES ('pepe', '00d0761b89d5a45887ed77eb33da3d13')");
    db_aux.exec("INSERT INTO users (user, password) VALUES ('juan', '1f819792a60308e5cb2aa9dc1df24cd6')");
    db_aux.exec("INSERT INTO users (user, password) VALUES ('raven', '116bc7befefc590139bab6babc9c1449')");
    db_aux.exec("INSERT INTO users (user, password) VALUES ('aluru', '519f1234ad14e5fb02403df7027a905c')");
    db_aux.exec("INSERT INTO users (user, password) VALUES ('shorta', '026566e55afdefc19062a2b75b3e23ab')");
    db_aux.exec("INSERT INTO users (user, password) VALUES ('speaka', 'ea792484bb131763d99428c17963bb27')");
} else {
    db_aux = new Database('database.db');
}
const db = db_aux;
function createUser(user, password) {
    const insertUserStatement = db.prepare("INSERT INTO users (user, password) VALUES (?, ?)");
    const hash = crypto.createHash('md5').update(password).digest('hex');
    insertUserStatement.run(user, hash);
};

function getUser(user) {
    const getUserStatement = db.prepare("SELECT * FROM users WHERE user = ?");
    return getUserStatement.get(user);
};

module.exports = {
    createUser,
    getUser
};
