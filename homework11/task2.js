function getTodo() {
    return fetch ('https://jsonplaceholder.typicode.com/todos/1')
    .then (response => response.json())
    .catch (error =>
        console.log ('Помилка при отриманні даних todo', error))
    }

    function getUser() {
        return fetch ('https://jsonplaceholder.typicode.com/users/1')
        .then (response => response.json())
        .catch (error =>
            console.log ('Помилка при отриманні даних user', error))
        }

        Promise.all ([getTodo(), getUser()])
        .then (([todo,user]) => {
            console.log ('Todo:', todo)
            console.log ('User:', user);
        })
        .catch (error => {
console.log ('Помилка:', error)
        })

        Promise.race ([getTodo(), getUser()])
                .then (result =>{
                    console.log('Відповідь:' ,result);
                })
                .catch (error => {
        console.log ('Помилка:', error)
                })
       



