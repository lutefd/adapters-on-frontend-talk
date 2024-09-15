# Makefile

# Variables
BACKEND_DIR = backend
GO = go

# Phony targets
.PHONY: run-api build-api clean

# Default target
all: run-api

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
	@echo "  run-api    - Run the API"
	@echo "  build-api  - Build the API binary"
	@echo "  clean      - Remove built binaries"
	@echo "  help       - Show this help message"
