# Makefile

# Variables
BACKEND_DIR = backend
FRONTEND_DIR = frontend
GO = go

# Phony targets
.PHONY: run-api build-api clean

# Default target
all: run-api install-frontend run-frontend

# Install frontend dependencies
install-frontend:
	@echo "Installing frontend dependencies..."
	@cd $(FRONTEND_DIR) && pnpm install

# Run frontend
run-frontend:
	@echo "Starting the frontend..."
	@cd $(FRONTEND_DIR) && pnpm dev

# Run the API
run-api:
	@echo "Starting the API..."
	@cd $(BACKEND_DIR) && $(GO) run cmd/api/main.go

# Build the API
build-api:
	@echo "Building the API..."
	@cd $(BACKEND_DIR) && $(GO) build -o api cmd/api/main.go

# Clean built binaries
clean:
	@echo "Cleaning up..."
	@cd $(BACKEND_DIR) && rm -f api

# Help target
help:
	@echo "Available targets:"
	@echo "  all         - Run the API and install frontend dependencies"
	@echo "  install-frontend - Install frontend dependencies"
	@echo "  run-frontend - Run the frontend"
	@echo "  run-api    - Run the API"
	@echo "  build-api  - Build the API binary"
	@echo "  clean      - Remove built binaries"
	@echo "  help       - Show this help message"
