import { AuthModule } from './../auth/auth.module';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  imports: [TypeOrmModule.forFeature([Board]), AuthModule],
  exports: [TypeOrmModule],
  controllers: [BoardsController],
  providers: [BoardsService, BoardRepository],
})
export class BoardsModule {}
