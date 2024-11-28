import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

describe('MongoDB Connection Test', () => {
  const MONGO_URI = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/oz-tech-test?authSource=admin`;

  beforeAll(async () => {
    try {
      await mongoose.connect(MONGO_URI);
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should connect to MongoDB successfully', async () => {
    expect(mongoose.connection.readyState).toBe(1); // 1 significa conectado
  });
});
