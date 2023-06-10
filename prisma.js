
import { PrismaClient } from '@prisma/client';

let client;

// Middleware function to handle Prisma client initialization
function getPrismaClient() {
  if (!client) {
    client = new PrismaClient();
  }
  return client;
}

export default getPrismaClient;