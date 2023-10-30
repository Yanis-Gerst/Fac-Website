package main

import (
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Get("/api/pdf", func(c *fiber.Ctx) error {
		err := c.SendString("Et Yoo Buene")
		return err
	})

	app.Listen(":8080")
}
