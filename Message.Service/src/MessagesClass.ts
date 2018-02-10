export interface IDomainModel {
  Id: string;
  Name: string;
}

export class Procedure implements IDomainModel{
  Id:string;
  Name: string;
}

export type NotificationType = 'success' | 'info' | 'warning' | 'danger' | 'error';

export abstract class UserNotificationMessage {
  constructor(
    public message: string,
    public notificationType?: NotificationType,
    public options?: any,
    public notifier?: any
  ) { }
}
export abstract class DomainModelUpdateRequestMessage {
  constructor(
    public id: string,
    public domainModelObject: IDomainModel,
    public newValue?: any,
    public oldValue?: any,
  ) { }
}

export class ProcedureUpdateNameOnClientRequestMessage extends DomainModelUpdateRequestMessage {
  public domainModelObject: Procedure;
}

export class DomainModelMessage extends DomainModelUpdateRequestMessage {
  public domainModelObject: IDomainModel;
}
