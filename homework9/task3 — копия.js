

        async function getTodo() {
            try {
              const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
              if (!response.ok) {
                throw new Error('Request failed');
              }
              const todo = await response.json();
              return todo;
            } catch (error) {
              console.error('An error occurred:', error);
              throw error;
            }
        }

    

    async function getUser() {
        try {
          const response = await fetch ('https://jsonplaceholder.typicode.com/users/1');
          if (!response.ok) {
            throw new Error('Request failed');
          }
          const todo = await response.json();
          return todo;
        } catch (error) {
          console.error('An error occurred:', error);
          throw error;
        }
      }

    
   
    




       
