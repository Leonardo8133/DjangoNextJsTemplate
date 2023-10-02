const DUMMY_USERS = [
    {
      "id": 1,
      "last_login": null,
      "username": "leo",
      "isActive": true,
      "date_joined": "2021-09-05T22:20:26.108260",
      "name": "Leonardo",
      "confirmed": true,
      "email": "leonardo2sc@gmail.com",
      "first_name": "Leonardo",
      "last_name": "de Souza",
      "company_name": null,
      "max_products": 50,
    },
  ];
  
  export function getActiveUsers() {
    return DUMMY_USERS.filter((users) => users.isActive);
  }
  
  export function getAllUsers() {
    return DUMMY_USERS;
  }
      
  export function getUserById(id) {
    return DUMMY_USERS.find((users) => users.id == id);
  }