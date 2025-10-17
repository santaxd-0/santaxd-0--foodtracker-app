import { Module } from '@nestjs/common';
import { CoreModule } from './apps/core/core.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CoreModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(String(process.env.MONGO_DB_HOST))
  ],
})
export class AppModule {}
