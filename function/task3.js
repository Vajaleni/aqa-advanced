
function checkOrder(available,ordered ) {
    if (ordered ===0) {
    return 'Your order is empty';
  } 
  else if(available < ordered) {
    return 'Your order is too large, we do not have enough goods.';
     }
      else { 
      return 'Your order is accepted'
      }
      
  }
  console.log(checkOrder(10,0))
  console.log(checkOrder(5,10))
  console.log(checkOrder(10,5))

  function checkOrder1(available,ordered ) {
    if (ordered ===0) 
    return 'Your order is empty';
   
  else if(available < ordered) 
    return 'Your order is too large, we do not have enough goods.';
     
      else  
      return 'Your order is accepted'
    }
  console.log(checkOrder1(10,0))
  console.log(checkOrder1(5,10))
  console.log(checkOrder(10,5))