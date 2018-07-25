const path = window.require('path');
const fs = window.require('fs');
const {remote} = window.require('electron');

const dbFile = path.join(remote.app.getAppPath(), 'homicide.db');
const tempDbFile = path.join(remote.app.getAppPath(), 'homicide.temp');
const loadDb = () =>
    fs.existsSync(dbFile)
        ? JSON.parse(fs.readFileSync(dbFile))
        : [];

const saveDb = db => {
    fs.writeFileSync(tempDbFile, JSON.stringify(db));
    fs.renameSync(tempDbFile, dbFile);
};
