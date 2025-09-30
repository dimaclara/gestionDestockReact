#!/bin/bash

echo "Starting Inventory Management Development Environment..."

# Start Spring Boot backend
echo "Starting Spring Boot backend..."
cd Spring-Boot-Final-Project
./mvnw spring-boot:run &
BACKEND_PID=$!

# Wait for backend to start
echo "Waiting for backend to start..."
sleep 10

# Start React frontend
echo "Starting React frontend..."
cd ..
if command -v npm >/dev/null 2>&1; then
    npm run dev &
    FRONTEND_PID=$!
elif command -v yarn >/dev/null 2>&1; then
    yarn dev &
    FRONTEND_PID=$!
else
    echo "❌ Node.js/npm not found. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

echo "Backend PID: $BACKEND_PID"
echo "Frontend PID: $FRONTEND_PID"
echo "Backend running on: http://localhost:8888"
echo "Frontend running on: http://localhost:5173"
echo "Press Ctrl+C to stop both services"

# Wait for user to stop
wait