import dotenv from 'dotenv';
import path from 'path';

const validation = async () => {
  const fileLocation = path.join(__dirname, '../../.env');
  const { error }: any = await dotenv.config({ path: fileLocation });
  if (error) throw new Error(`No .env file found in path ${error.path}`);
  console.log('System variables checked!');
};

export default {
  validation,
};
