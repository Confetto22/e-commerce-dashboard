import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from 'generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(private readonly config: ConfigService) {
    const adapter = new PrismaPg({
      connectionString: config.get<string>('DATABASE_URL'),
    });
    super({ adapter });
  }

  onModuleInit() {
    this.$connect()
      .then(() => {
        console.log('Connected to database');
      })
      .catch((error) => {
        console.error('Error connecting to database:', error);
      });
  }
}
