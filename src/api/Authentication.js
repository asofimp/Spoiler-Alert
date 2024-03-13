import { useState } from "react";

export function Authentication(){

    const [permission, setPermission] = useState(false)
    const [response, setResponse] = useState(null)

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDE5MDA2NTE2ZjhjMDExMzEzOTQyZjc3MTJiMTg4YiIsInN1YiI6IjY1ZjBkODBjZmJlMzZmMDE2MmVjZWVlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.owja1vV93dsSGpCBb-IEd6ZiWyWkXxQu5hRRwcdJUuE'
        }
    };

    fetch('https://api.themoviedb.org/3/authentication', options)
        .then(response => response.json())
        .then(response => setResponse(response) | setPermission(true))
        .catch(err => console.error(err));
    
    return {permission, response}
}