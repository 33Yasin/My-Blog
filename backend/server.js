import express from 'express';
import dotenv from 'dotenv';
import blogRoutes from './routes/blogRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => res.send('📝 Blog API Çalışıyor'));
app.use('/blogs', blogRoutes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`✅ Server ${PORT} portunda çalışıyor`));