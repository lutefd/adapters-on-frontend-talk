package main

import (
	"log"
	"net/http"

	"github.com/Lutefd/adapters-on-frontend-talk/internal/controller"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
)

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300,
	}))

	userController := controller.NewUserController()
	r.Route("/api", func(r chi.Router) {
		r.Route("/v1", func(r chi.Router) {
			r.Get("/users", userController.GetUsers)
		})
		r.Route("/v2", func(r chi.Router) {
			r.Get("/users", userController.GetUsersAlternative)
		})
	})

	log.Println("Server starting on port 23940")
	log.Fatal(http.ListenAndServe(":23940", r))
}
