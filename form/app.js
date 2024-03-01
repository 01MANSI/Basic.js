function form(event){
    event.preventDefault()
    const username=event.target.username.value
    const email=event.target.email.value
    const phone=event.target.phone.value

  const user={
    username,
    email,
    phone
  }  
  localStorage.setItem(user.email,JSON.stringify(user))
  showUserDetailsOnScreen(user)


}

function showUserDetailsOnScreen(user){
    const parentElem=document.getElementById('listOfItems')
    parentElem.innerHTML +=`<li> ${user.username} | ${user.email} | ${user.phone} </li>`
}