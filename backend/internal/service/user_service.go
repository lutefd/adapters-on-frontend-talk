package service

import "github.com/Lutefd/adapters-on-frontend-talk/internal/model"

type UserService struct{}

func NewUserService() *UserService {
	return &UserService{}
}

func (s *UserService) GetUsers() []model.User {
	return []model.User{
		{ID: 1, Name: "John Doe", Email: "john@example.com"},
		{ID: 2, Name: "Jane Smith", Email: "jane@example.com"},
	}
}

func (s *UserService) GetUsersAlternative() []model.UserAlternative {
	return []model.UserAlternative{
		{UserID: 1, FullName: "John Doe", Contact: "john@example.com"},
		{UserID: 2, FullName: "Jane Smith", Contact: "jane@example.com"},
	}
}
