import { Injectable, Scope } from '@nestjs/common';

// this service is going to be shared with the whole app, because it will be a singleton
// to make sure this class is scoped to each incoming request instead of application-wide
// we pass in options to @Injectable
@Injectable({ scope: Scope.REQUEST })
export class RequestService {
  private userId: string;

  setUserId(userId: string) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }
}
