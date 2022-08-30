import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LogggingInterceptor } from './interceptors/logging.interceptor';
import { FreezePipe } from './pipes/freeze.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @UseInterceptors(LogggingInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  examplePost(@Body(new FreezePipe()) body: any) {
    // body.test = 32; // this would result in a server error since FreezePipe is applied
  }

  @Get('error')
  throwError() {
    throw new InternalServerErrorException();
  }
}
