-- Crear la tabla 'users' con columnas para 'user' y 'password'
CREATE TABLE users (
    user TEXT PRIMARY KEY,
    password TEXT
);

-- Insertar usuarios y sus contraseñas en formato hash
INSERT INTO users (user, password) VALUES ('admin', '81dc9bdb52d04dc20036dbd8313ed055');
INSERT INTO users (user, password) VALUES ('pikachu', '04dac8afe0ca501587bad66f6b5ce5ad');
INSERT INTO users (user, password) VALUES ('leet', '33da7a40473c1637f1a2e142f4925194');
INSERT INTO users (user, password) VALUES ('charmander', '03f690195f59c32d566cfb79383e01c8');
INSERT INTO users (user, password) VALUES ('pepe', '00d0761b89d5a45887ed77eb33da3d13');
INSERT INTO users (user, password) VALUES ('juan', '1f819792a60308e5cb2aa9dc1df24cd6');
INSERT INTO users (user, password) VALUES ('raven', '116bc7befefc590139bab6babc9c1449');
INSERT INTO users (user, password) VALUES ('aluru', '519f1234ad14e5fb02403df7027a905c');
INSERT INTO users (user, password) VALUES ('shorta', '026566e55afdefc19062a2b75b3e23ab');
INSERT INTO users (user, password) VALUES ('speaka', 'ea792484bb131763d99428c17963bb27');
