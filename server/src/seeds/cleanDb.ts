// import models from '../models/index.js';
// import db from "../config/connection.js";
import { Question } from "../models/index.js";
import process from 'process';

const cleanDB = async (): Promise<void> => {
  try {
    // Delete documents from Questions collection
    await Question.deleteMany({});
    console.log('Cleaned Question collection.');
  } catch (err) {
    console.log('Error cleaning collections:', err);
    process.exit(1);
  }
};

export default cleanDB;
