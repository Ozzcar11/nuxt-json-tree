import fs from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
  const filePath = path.resolve(process.cwd(), 'task_json.txt');
  const data = await fs.promises.readFile(filePath, 'utf-8');

  try {
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error) {
    return sendError(event, createError({ statusCode: 400, statusMessage: 'Invalid JSON format' }));
  }
});