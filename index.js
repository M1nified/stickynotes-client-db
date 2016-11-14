class SNClientDB {
    constructor(settings_arg) {
        let settings = {};
        Object.assign(Object.assign(settings, SNClientDB.settings_default), settings_arg);
        this.notes = new IDBStore(settings);
    }
    static get singleton() {
        return new Promise((resolve, reject) => {
            // console.log('Promise')
            if (!SNClientDB._singleton) {
                // console.log('if1');
                let settings = {};
                Object.assign(settings, SNClientDB.settings_default);
                // console.log(settings);
                // console.log('go');
                settings.onStoreReady = () => {
                    resolve(SNClientDB._singleton);
                };
                settings.onError = (error) => {
                    reject(error);
                };
                // console.log(settings);
                SNClientDB._singleton = new SNClientDB(settings);
            }
            else {
                // console.log('if2');
                resolve(SNClientDB._singleton);
            }
        });
    }
    static set singleton(val) {
        console.warn("Setting singleton property is not allowed.");
    }
}
// Settings
SNClientDB.settings_default = {
    dbVersion: 2,
    storeName: 'stickynotes',
    keyPath: 'id',
    autoIncrement: true,
    onStoreReady: function () {
        console.log('Store ready!');
    },
    onError: function (error) {
        console.error(error);
        throw error;
    }
};
// Singleton
SNClientDB._singleton = undefined;
//# sourceMappingURL=index.js.map