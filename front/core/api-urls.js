export const endpoints = 
    {
        "base_url": "http://host.docker.internal:8000/",
        "login": "api/get-token/",
        "get_user":"api/user/1/",
        "register":"api/register/",
    }
;

export function getEndpoint(string) {
    if (string in endpoints) {
        return endpoints.base_url + endpoints[string];
    }
    else {
        return null;
    }
    
  }
  
