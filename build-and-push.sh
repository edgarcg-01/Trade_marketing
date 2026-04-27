#!/bin/bash

# Script para build y push de imágenes Docker a Docker Hub
# Uso: ./build-and-push.sh

set -e

DOCKER_USERNAME="edgarcg01"
IMAGE_API="${DOCKER_USERNAME}/trade-marketing-api"
IMAGE_VIEW="${DOCKER_USERNAME}/trade-marketing-view"
TAG="latest"

echo "🚀 Building and pushing Trade Marketing images to Docker Hub"
echo "============================================================"

# Login a Docker Hub (si no está logueado)
echo ""
echo "📝 Checking Docker Hub authentication..."
if ! docker info | grep -q "Username: ${DOCKER_USERNAME}"; then
    echo "⚠️  Not logged in to Docker Hub. Please login:"
    docker login
fi

# Build API image
echo ""
echo "📦 Building API image..."
docker buildx build \
  --file Dockerfile.api \
  --tag ${IMAGE_API}:${TAG} \
  --cache-from type=local,src=/tmp/.buildx-cache \
  --cache-to type=local,dest=/tmp/.buildx-cache \
  --load \
  .

echo "✅ API image built successfully"

# Push API image
echo ""
echo "📤 Pushing API image to Docker Hub..."
docker push ${IMAGE_API}:${TAG}
echo "✅ API image pushed successfully"

# Build View image
echo ""
echo "📦 Building View image..."
docker buildx build \
  --file Dockerfile.view \
  --tag ${IMAGE_VIEW}:${TAG} \
  --cache-from type=local,src=/tmp/.buildx-cache \
  --cache-to type=local,dest=/tmp/.buildx-cache \
  --load \
  .

echo "✅ View image built successfully"

# Push View image
echo ""
echo "📤 Pushing View image to Docker Hub..."
docker push ${IMAGE_VIEW}:${TAG}
echo "✅ View image pushed successfully"

echo ""
echo "============================================================"
echo "✅ All images built and pushed successfully!"
echo ""
echo "Images:"
echo "  - ${IMAGE_API}:${TAG}"
echo "  - ${IMAGE_VIEW}:${TAG}"
echo ""
echo "To pull and run:"
echo "  docker pull ${IMAGE_API}:${TAG}"
echo "  docker pull ${IMAGE_VIEW}:${TAG}"
