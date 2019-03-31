export const get = url =>
new Promise(
  (resolve,reject) => {
    fetch(url)
    .then(response => response.json())
    .then(json => resolve(json))
  }
)

const apiCall = (url, method, body, resolve, reject) =>
fetch(url, {
  method: method,
  heders: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  body: JSON.stringify(body)
}).then(response => {
  if(response.ok) {
    response.json().then(json => resolve(json));
  } else {
    reject(response);
  }
})

export const post = (url, body) =>
new Promise(
  (resolve, reject) => apiCall(url, 'POST', body, resolve, reject)
)

export const remove = url =>
new Promise(
  (resolve, reject) => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset:utf-8'
      }
    })
  }
)

export const update = (url, body) =>
new Promise(
  (resolve, reject) => apiCall(url, 'PUT', body, resolve, reject)
)
