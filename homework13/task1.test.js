const axios = require('axios');

const axiosInstanse = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 1000,
    validateStatus: () => true,
})



test('GET /posts return status code is 200, posts are arrays', async () => {
    const response = await axios.get(`${baseURL}/posts`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true)
});

test('GET/post/1 return id 1 and status code is 200', async ()  => {
    const response = await axios.get(`${baseURL}/posts/1`);
    expect(response.status).toBe(200);  
    expect(response.data.id).toBe(1)
});

test('GET/users/1 return users data and status code is 200', async ()  => {
    const response = await axios.get(`${baseURL}/posts/1`); 
    expect(response.status).toBe(200);  
    expect(typeof response.data).toBe('object')
});

test('POST/create a new post and return status code 201', async ()  => {
    const newPost= {
        id: 101,
  title: 'foo',
  body: 'bar',
  userId: 1
    }
    const response = await axios.post(`${baseURL}/posts`, newPost);
    expect(response.status).toBe(201); 
    expect(response.data).toMatchObject(newPost)
    expect(response.data).toHaveProperty('id');
});

test('POST/not create a new user and return 404'), async() =>{
const newUser = {
    id: 1000,
    title: 'foo786ggh',
    body: 'bar',
    userId: 1
};
try {
    await axios.post(`${baseURL}/posts`, newUser);
} catch (error) {
    expect(error.responce.status).toBe(404);
}
}

