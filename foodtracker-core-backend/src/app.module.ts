import { Module } from '@nestjs/common';
import { CoreController } from './apps/core/core.controller';
import { CoreService } from './apps/core/core.service';

@Module({
  imports: [],
  controllers: [CoreController],
  providers: [CoreService],
})
export class AppModule {}
