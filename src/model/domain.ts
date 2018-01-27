import { IDomainModel } from './domain';
export interface IDomainModel {
  Id: string;
  Name: string;
}

export interface IViewModel {
  Title: string;
}

export class IProcedure implements IDomainModel {
  Id: string;
  Name: string;
}

export class Link {
  constructor(public name: string, public route: string, public icon: string) {
  }
}

/**
 * @description generates a new guid, may not be unique use with caution
 * @example let id = Guid.NewGuid();
 */
class Guid {
  static NewGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
