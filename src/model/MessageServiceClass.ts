import * as domain from './domain';

export class UserNotificationMessage {
  constructor(
    public message: string,
    public notificationType?: NotificationType,
    public options?: any,
    public notifier?: any
  ) { }
}
export type NotificationType = 'success' | 'info' | 'warning' | 'danger' | 'error';

abstract class DomainModelUpdateRequestMessage {
  constructor(
    public id: string,
    public domainModelObject: domain.IDomainModel,
    public newValue?: any,
    public oldValue?: any,
  ) { }
}

export class ProcedureUpdateNameOnClientRequestMessage extends DomainModelUpdateRequestMessage {
  public domainModelObject: domain.IProcedure;
}

export class CatMessage extends DomainModelUpdateRequestMessage {
  public domainModelObject: domain.IDomainModel;
}
