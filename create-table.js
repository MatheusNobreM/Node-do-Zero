import {nodeZ} from './db.js'

nodeZ `
CREATE TABLE videos (
    title       TEXT,
    description TEXT,
    duration    INTEGER
);
`.then(() => {
    console.log('Tabela criada!')
})