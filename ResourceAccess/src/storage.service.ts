import * as _ from 'lodash';

export class StorageService {
    private localStorageSupported: boolean;

    constructor(private storage: Storage) {
        this.localStorageSupported = typeof storage != "undefined";
     }

    AddOrUpdate<T>(item: T): void {
        var storage = this.retreiveStorage(item.constructor.name) || [];
        var existing = _.find(storage, o => o['Id'] === item['Id']);
        if (existing) {
            _.remove(storage, o => o['Id'] == item['Id']);
        }
        storage.push(item);
        this.storage.setItem(item.constructor.name, JSON.stringify(storage));
    }

    Delete<T>(item: T): void {
        var storage = this.retreiveStorage(item.constructor.name);
        var existing = _.find(storage, o => o['Id'] === item['Id']);
        if (existing) {
            _.remove(storage, o => o['Id'] == item['Id']);
            this.storage.setItem(item.constructor.name, JSON.stringify(storage));
            return;
        }
        throw new Error('Item does not exist');
    }

    Get<T>(id: string): T {
        var storage = this.retreiveStorage((<T>{}).constructor.name);
        return <T>_.find(storage, o => o['Id'] === id);
    }

    GetAll<T>(callback: (n: T[]) => T[]): T[] {
        var storage = this.retreiveStorage((<T>{}).constructor.name);
        return <T[]>storage.filter(callback);
    }

    private retreiveStorage<T>(name: string): T[] {
        if (!this.localStorageSupported) {
            throw new Error("No local storage support");
        }
        return JSON.parse(this.storage.getItem(name));
    }
}