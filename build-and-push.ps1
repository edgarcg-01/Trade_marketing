# Script para build y push de imágenes Docker a Docker Hub
# Uso: .\build-and-push.ps1

$ErrorActionPreference = "Stop"

$DOCKER_USERNAME = "edgarcg01"
$IMAGE_API = "$DOCKER_USERNAME/trade-marketing-api"
$IMAGE_VIEW = "$DOCKER_USERNAME/trade-marketing-view"
$TAG = "latest"

Write-Host "Building and pushing Trade Marketing images to Docker Hub" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan

# Login a Docker Hub (si no está logueado)
Write-Host ""
Write-Host "Checking Docker Hub authentication..." -ForegroundColor Yellow
try {
    $dockerInfo = docker info 2>&1
    if ($dockerInfo -match "Username:\s+$DOCKER_USERNAME") {
        Write-Host "Already logged in to Docker Hub" -ForegroundColor Green
    } else {
        Write-Host "Not logged in to Docker Hub. Please login:" -ForegroundColor Yellow
        docker login
    }
} catch {
    Write-Host "Docker not running or not installed" -ForegroundColor Red
    exit 1
}

# Build API image
Write-Host ""
Write-Host "Building API image..." -ForegroundColor Yellow
docker buildx build --file Dockerfile.api --tag "$IMAGE_API`:$TAG" --cache-from type=local,src="$env:TEMP\.buildx-cache" --cache-to type=local,dest="$env:TEMP\.buildx-cache" --load .

if ($LASTEXITCODE -eq 0) {
    Write-Host "API image built successfully" -ForegroundColor Green
} else {
    Write-Host "API image build failed" -ForegroundColor Red
    exit 1
}

# Push API image
Write-Host ""
Write-Host "Pushing API image to Docker Hub..." -ForegroundColor Yellow
docker push "$IMAGE_API`:$TAG"

if ($LASTEXITCODE -eq 0) {
    Write-Host "API image pushed successfully" -ForegroundColor Green
} else {
    Write-Host "API image push failed" -ForegroundColor Red
    exit 1
}

# Build View image
Write-Host ""
Write-Host "Building View image..." -ForegroundColor Yellow
docker buildx build --file Dockerfile.view --tag "$IMAGE_VIEW`:$TAG" --cache-from type=local,src="$env:TEMP\.buildx-cache" --cache-to type=local,dest="$env:TEMP\.buildx-cache" --load .

if ($LASTEXITCODE -eq 0) {
    Write-Host "View image built successfully" -ForegroundColor Green
} else {
    Write-Host "View image build failed" -ForegroundColor Red
    exit 1
}

# Push View image
Write-Host ""
Write-Host "Pushing View image to Docker Hub..." -ForegroundColor Yellow
docker push "$IMAGE_VIEW`:$TAG"

if ($LASTEXITCODE -eq 0) {
    Write-Host "View image pushed successfully" -ForegroundColor Green
} else {
    Write-Host "View image push failed" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "All images built and pushed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Images:" -ForegroundColor Cyan
Write-Host "  - $IMAGE_API`:$TAG" -ForegroundColor White
Write-Host "  - $IMAGE_VIEW`:$TAG" -ForegroundColor White
