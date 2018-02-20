import * as _ from 'lodash';
export function nameOf(obj: any) {
  return obj.name;
}

export class StorageService {
  private localStorageSupported: boolean;

  constructor(private storage: Storage) {
    this.localStorageSupported = typeof storage != "undefined";
  }

  AddOrUpdate<T>(item: T): void {

    var storage = this.retreiveStorage(item.constructor.name) || [];
    var existing = _.find(storage, o => o['id'] === item['id']);
    if (existing) {
      _.remove(storage, o => o['id'] == item['id']);
    }
    storage.push(item);

    this.storage.setItem(item.constructor.name, JSON.stringify(storage));
  }

  Delete<T>(item: T): void {
    var storage = this.retreiveStorage(item.constructor.name);
    var existing = _.find(storage, o => o['id'] === item['id']);
    if (existing) {

      _.remove(storage, o => o['id'] == item['id']);
      this.storage.setItem(item.constructor.name, JSON.stringify(storage));
      return;
    }
    throw new Error('Item does not exist');
  }

  Get<T>(id: string, nameOfType: string): T {
    var storage = this.retreiveStorage(nameOfType);
    var item = <T>_.find(storage, o => o['id'] === id);
    return item;
  }

  GetAll<T>(callback: (n: T[]) => T[], nameOfType: string): T[] {
    var storage = this.retreiveStorage(nameOfType);
    return <T[]>storage.filter(callback);
  }

  private retreiveStorage<T>(name: string): T[] {
    if (!this.localStorageSupported) {
      throw new Error("No local storage support");
    }
    var items = this.storage.getItem(name);
    return items != null ? JSON.parse(this.storage.getItem(name)) : [];
  }
}
