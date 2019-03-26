const serverUrl = "https://jsonplaceholder.typicode.com";

export const toDoItemsApiUrl = id =>
id ? `${serverUrl}/todos/${id}` : `${serverUrl}/todos/`
