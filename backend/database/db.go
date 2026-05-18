package database

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func Connect() {
	dsn := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
	)

	var err error
	DB, err = sql.Open("postgres", dsn)
	if err != nil {
		log.Fatal("Gagal membuka koneksi database:", err)
	}
	if err = DB.Ping(); err != nil {
		log.Fatal("Gagal terhubung ke database:", err)
	}
	log.Println("Berhasil terhubung ke PostgreSQL")
	createTables()
}

func createTables() {
	query := `
	CREATE TABLE IF NOT EXISTS users (
		id         SERIAL PRIMARY KEY,
		name       VARCHAR(100) NOT NULL,
		email      VARCHAR(150) UNIQUE NOT NULL,
		password   VARCHAR(255) NOT NULL,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);`
	if _, err := DB.Exec(query); err != nil {
		log.Fatal("Gagal membuat tabel users:", err)
	}
	log.Println("Tabel users siap")
}