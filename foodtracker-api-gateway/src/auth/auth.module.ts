import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [ConfigModule],
  controllers: [AuthResolver],
  providers: [AuthService],
})
export class AuthModule {}