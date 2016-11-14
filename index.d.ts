declare var IDBStore: any;
declare class SNClientDB {
    static settings_default: {
        dbVersion: number;
        storeName: string;
        keyPath: string;
        autoIncrement: boolean;
        onStoreReady: () => void;
        onError: (error: any) => never;
    };
    static _singleton: any;
    static singleton: Promise<{}>;
    notes: {
        clear: Function;
        getAll: Function;
        put: Function;
        get: Function;
        remove: Function;
        batch: Function;
    };
    private constructor(settings_arg?);
}
