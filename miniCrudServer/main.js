const formGet = document.querySelector('#formGet');
const userGet = document.querySelector('#userGet');
const pGet = document.querySelector('.pGet');

const userid = document.querySelector('#userid');
const pDelet = document.querySelector('.pDelet');
const formDelet = document.querySelector('.formDelet');


 formGet.addEventListener('submit' , (event) => {
  event.preventDefault();
  if (userGet.value) {
 fetch(`http://localhost:5000/api/users?name=${userGet.value}`)
  .then(res => res.json())
  .then(data => {
   pGet.innerHTML = `id : ${data.id}  your name : ${data.name} and password is : ${data.password}`
  });
  } 
})


//  ..................


formDelet.addEventListener('submit' , (event) => {
 event.preventDefault();
  fetch(`http://localhost:5000/api/users/delet?id=${userid.value}`
  // {method : "DELET"}
  )
  .then(res => res.json())
  .then(data => {
    pDelet.innerHTML = 'user delet :)' 
  })
  .catch(res => {
    pDelet.innerHTML = res
  })
})