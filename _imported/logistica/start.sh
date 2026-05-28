#!/bin/sh
echo "Running migrations..."
npx knex migrate:latest --knexfile database/knexfile.js

echo "Starting application..."
node dist/main.js
