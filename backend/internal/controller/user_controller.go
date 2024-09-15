package controller

import (
	"net/http"

	"github.com/Lutefd/adapters-on-frontend-talk/internal/service"
	"github.com/Lutefd/adapters-on-frontend-talk/internal/utils"
)

type UserController struct {
	userService *service.UserService
}

func NewUserController() *UserController {
	return &UserController{
		userService: service.NewUserService(),
	}
}

func (c *UserController) GetUsers(w http.ResponseWriter, r *http.Request) {
	users := c.userService.GetUsers()
	utils.JSONResponse(w, http.StatusOK, users)
}

func (c *UserController) GetUsersAlternative(w http.ResponseWriter, r *http.Request) {
	users := c.userService.GetUsersAlternative()
	utils.JSONResponse(w, http.StatusOK, users)
}
