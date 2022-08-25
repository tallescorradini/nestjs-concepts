import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { RequestService } from 'src/request.service';

// A custom NestJS middleware is an @Injectable class that implements NestMiddleware interface
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly logger = new Logger(AuthMiddleware.name);
  // dependencies (from the same module this middleware is registered) can be injected here just as with providers and controllers
  constructor(private readonly requestService: RequestService) {
    // however if any dependency is injected, this class should rather not be manually instantiated
  }

  // the 'use' method takes in usual Express handlers
  use(req: Request, res: Response, next: NextFunction) {
    // do something like Authenticate the request
    this.logger.log(AuthMiddleware.name);
    const userId = '123';
    this.requestService.setUserId(userId);

    next(); // allow the request to continue
  }
}

// -> Middlewares can be:
//    - module scoped by calling a configure() method in the module class
//    - globally scoped by app.use(Middleware) in main.ts

// @Injectable class implements NestMiddleware -> use(req,res,next){s}
