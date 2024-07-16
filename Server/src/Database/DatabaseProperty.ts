import * as database_config from '../../ormconfig.json';

class DatabaseProperty {
    type = '';
    host = '';
    port = 0;
    username = '';
    password = '';
    database = '';

    constructor() {
        this.type = database_config.type;
        this.host = database_config.host;
        this.port = database_config.port;
        this.username = database_config.username;
        this.password = database_config.password;
        this.database = database_config.database;
    }

    // type = 'postgres';
    // host = 'localhost';
    // port = 5432;
    // username = 'postgres';
    // password = 'admin123';
    // database = 'vmt_database_senjata_sby_web';
}

export default new DatabaseProperty();