package model

type User struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

type UserAlternative struct {
	UserID   int    `json:"user_id"`
	FullName string `json:"full_name"`
	Contact  string `json:"contact"`
}
