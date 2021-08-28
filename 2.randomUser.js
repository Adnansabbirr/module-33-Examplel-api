const randomUser=()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res=>res.json())
    .then(data=>userDisplay(data))
}
const userDisplay=users=>{
    const userData=users.results;

    
    for(const user of userData){
        console.log(user)
        const buddiesDiv=document.getElementById('buddies');
        const p=document.createElement('p');
        p.innerText=`Birthdate: ${user.dob.date} City:${user.location.city} name:${user.name.title} FirstName:${user.name.first} `
        buddiesDiv.appendChild(p);
    }
}
randomUser();