package model

type User struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

type UserAlternative struct {
	UserID   int    `json:"userId"`
	FullName string `json:"fullName"`
	Contact  string `json:"contact"`
}
