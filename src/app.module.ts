import { Module } from '@nestjs/common';
import { LibrarianModule } from './infra/http/modules/librarian/librarian.module';
import { DatabaseModule } from './infra/database/prisma/database.module';
import { APP_GUARD } from '@nestjs/core';
import { JWTAuthGuard } from './infra/http/modules/auth/guards/jwtAuth.guard';
import { AuthModule } from './infra/http/modules/auth/auth.module';
import { BookshelfModule } from './infra/http/modules/bookshelf/bookshelf.module';
import { ShelfModule } from './infra/http/modules/shelf/shelf.module';
import { BookModule } from './infra/http/modules/book/book.module';

@Module({
  imports: [
    LibrarianModule,
    DatabaseModule,
    AuthModule,
    BookshelfModule,
    ShelfModule,
    BookModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JWTAuthGuard,
    },
  ],
})
export class AppModule {}
