import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateWay } from './chat.gateway';

@Module({
  imports: [MongooseModule.forRoot("")],
  controllers: [AppController],
  providers: [AppService, ChatGateWay],
})
export class AppModule {}
