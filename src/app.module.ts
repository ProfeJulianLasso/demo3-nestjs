import { ExampleServiceService } from './modules/main/services/example-service.service';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './modules/main/exception-filters/exception.filter';
import { Module } from '@nestjs/common';
import { MainModule } from './modules/main/main.module';
import { ConfigModule } from '@nestjs/config';
import { join } from 'node:path';

// console.log(process.cwd());
// console.log('a' + process.env.NODE_ENV?.trim() + 'a');
// console.log(
//   `${process.cwd()}/environments/.${process.env.NODE_ENV?.trim()}.env`,
// );
// console.log(
//   join(process.cwd(), 'environments', `.${process.env.NODE_ENV?.trim()}.env`),
// );

@Module({
  imports: [
    MainModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(
        process.cwd(),
        'environments',
        `.${process.env.NODE_ENV?.trim()}.env`,
      ),
    }),
  ],
  controllers: [],
  providers: [
    ExampleServiceService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
