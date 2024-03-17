import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Ensure req.session is initialized
    if (!req.session) {
      // throw new Error('Session middleware is not properly initialized');
    }

    // Initialize session properties if not set
    console.log(req.headers, req.headers.cookie);

    next();
  }
}
