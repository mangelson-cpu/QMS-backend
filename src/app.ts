import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { sequelize, connectDB } from './config/db';

dotenv.config();

const app = express();

// Connect to Database
connectDB();

// Sync Database Models (Only for dev)
if (process.env.NODE_ENV === 'development') {
  sequelize.sync({ alter: true })
    .then(() => console.log('Database synced'))
    .catch(err => console.log('Error syncing database: ', err));
}

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic Route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to QMS Backend API (TypeScript)' });
});

// Error Handling Middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
