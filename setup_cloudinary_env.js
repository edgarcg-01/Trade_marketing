const fs = require('fs');
const path = require('path');

// Read the cloudinary config
const cloudinaryConfig = fs.readFileSync(path.join(__dirname, '.env.cloudinary'), 'utf8');

// Read the main .env file (or create it if it doesn't exist)
let mainEnv = '';
const mainEnvPath = path.join(__dirname, '.env');
if (fs.existsSync(mainEnvPath)) {
  mainEnv = fs.readFileSync(mainEnvPath, 'utf8');
}

// Check if Cloudinary variables already exist
const cloudinaryVars = [
  'CLOUDINARY_CLOUD_NAME',
  'CLOUDINARY_API_KEY',
  'CLOUDINARY_API_SECRET',
  'CLOUDINARY_URL'
];

const hasCloudinaryVars = cloudinaryVars.some(varName => mainEnv.includes(varName));

if (!hasCloudinaryVars) {
  // Add Cloudinary variables to main .env
  const updatedEnv = mainEnv + '\n\n# Cloudinary Configuration\n' + cloudinaryConfig;
  fs.writeFileSync(mainEnvPath, updatedEnv);
  console.log('✅ Cloudinary variables added to .env file');
} else {
  console.log('✅ Cloudinary variables already exist in .env file');
}

console.log('📋 Environment variables configured for both development and production');
