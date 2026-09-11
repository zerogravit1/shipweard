package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type DemoResponse struct {
	Service string `json:"service"`
	Message string `json:"message"`
}

func demoHandler(w http.ResponseWriter, r *http.Request) {
	response := DemoResponse{
		Service: "demo-go-service",
		Message: "Hello from the Go demo service",
	}

	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(w, "failed to encode response", http.StatusInternalServerError)
	}
}

func createRouter() http.Handler {
	mux := http.NewServeMux()

	mux.HandleFunc("/api/v1/demo", demoHandler)

	return mux
}

func main() {
	router := createRouter()

	log.Println("Go demo service is running on port 3004")

	if err := http.ListenAndServe(":3004", router); err != nil {
		log.Fatal(err)
	}
}