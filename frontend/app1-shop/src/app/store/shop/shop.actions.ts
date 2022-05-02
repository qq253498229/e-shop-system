export class Shop {
  id?: number;
  title?: string;
  storeName?: string;
  pic?: string;
  collect?: boolean;
}

export namespace Shop {
  const key = 'shop';

  export class Get {
    static readonly type = `获取${key}`;
  }

  export class Details {
    static readonly type = `获取${key}详情`;

    constructor(public id: number) {
    }
  }

  export class Add {
    static readonly type = `添加${key}`;

    constructor(public payload: Shop) {
    }
  }

  export class Remove {
    static readonly type = `移除${key}`;

    constructor() {
    }
  }

  export class Update {
    static readonly type = `修改${key}`;

    constructor(public payload: Shop) {
    }
  }
}
