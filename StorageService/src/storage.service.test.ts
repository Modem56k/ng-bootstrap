import { InMemoryStorage } from './in-memory-storage.service';
import { StorageService, nameOf } from './storage.service';
import { should } from 'fuse-test-runner';

export class AppComponentTest {
  'stoarge service should be defined and instance of StorageService.'() {
    let storage = new StorageService(new InMemoryStorage());
    should(storage).beOkay().beInstanceOf(StorageService).beObject();
  }

  'given storage service, can store and retreive object'() {
    let storage = new StorageService(new InMemoryStorage());
    var FirstObject = new TestClassOne('One');

    storage.AddOrUpdate(FirstObject);

    var first = storage.Get('One', nameOf(TestClassOne));

    should(first).beObject().mutate(_ => _.id).equal('One');
  }

  'given storage service, can retreive all records of specified type'() {
    let storage = new StorageService(new InMemoryStorage());

    for (let index = 0; index < 10; index++) {
      var item = new TestClassOne(index.toString());
      storage.AddOrUpdate(item);
    }

    var items = storage.GetAll<TestClassOne>(function (item) { return item }, nameOf(TestClassOne));

    should(items).beOkay().beArray().haveLength(10);
  }

  'given storage, can delete object from storage'() {
    let storage = new StorageService(new InMemoryStorage());
    var obj = new TestClassOne('one');

    storage.AddOrUpdate(obj);

    var items = storage.GetAll<TestClassOne>(function (item) { return item }, nameOf(TestClassOne));

    should(items).beArray().haveLength(1);

    storage.Delete(obj);

    var response = storage.GetAll<TestClassOne>(function (item) { return item }, nameOf(TestClassOne));

    should(response).beOkay().haveLength(0);
  }
}

class TestClassOne {
  constructor(public id: string) { }
}

