import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './authors/authors.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthorsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
