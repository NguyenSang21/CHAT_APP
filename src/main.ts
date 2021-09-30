import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

// var whitelist = ['http://localhost:3000'];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       console.log("allowed cors for:", origin)
//       callback(null, true)
//     } else {
//       console.log("blocked cors for:", origin)
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
//   allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
//   methods: "GET,PUT,POST,DELETE,UPDATE,OPTIONS",
//   credentials: true,
//   }

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({credentials: true, origin:'http://192.168.1.2:3000'}))
  await app.listen(3333);
}

bootstrap();
