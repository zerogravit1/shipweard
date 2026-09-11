package main

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestDemoHandler(t *testing.T) {
	request := httptest.NewRequest(http.MethodGet, "/api/v1/demo", nil)
	response := httptest.NewRecorder()

	demoHandler(response, request)

	if response.Code != http.StatusOK {
		t.Fatalf("expected status 200, got %d", response.Code)
	}

	expected := `{"service":"demo-go-service","message":"Hello from the Go demo service"}` + "\n"

	if response.Body.String() != expected {
		t.Fatalf(
			"expected body %q, got %q",
			expected,
			response.Body.String(),
		)
	}

	if response.Header().Get("Content-Type") != "application/json" {
		t.Fatalf(
			"expected Content-Type application/json, got %s",
			response.Header().Get("Content-Type"),
		)
	}
}

func TestDemoRoute(t *testing.T) {
	request := httptest.NewRequest(http.MethodGet, "/api/v1/demo", nil)
	response := httptest.NewRecorder()

	router := createRouter()
	router.ServeHTTP(response, request)

	if response.Code != http.StatusOK {
		t.Fatalf("expected status 200, got %d", response.Code)
	}
}