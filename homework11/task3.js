

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

    async function getAllData (){
        try{
            const[todo,user] = await Promise.all([getTodo(), getUser()]);
        
        console.log('Todo:', todo);
        console.log('User:', user );
    } catch (error) {
        console.error('Error in Promise.all:', error)
    }
}

async function getRaceData (){
    try{
        const result = await Promise.race([getTodo(), getUser()]);
    
    console.log('First result', result);
    
} catch (error) {
    console.error('Error in Promise.race:', error)
}
}
getAllData ();
getRaceData ();






   
    




       
