const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  const baseURL = 'https://randomuser.me/api/';
  const button = document.querySelector('button')
  console.log(button);

  function showData(data) {
    console.log(data.results[0])
    const user = data.results[0];
    document.getElementById('fullname').innerText = user.name.title + ' ' + user.name.first + ' ' + user.name.last;
    document.getElementById('email').innerText = user.email;
    document.getElementById('street').innerText = user.location.street.number + ' ' + user.location.street.name;
    document.getElementById('city').innerText = user.location.city;
    document.getElementById('state').innerText = user.location.state;
    document.getElementById('postcode').innerText = user.location.postcode;
    document.getElementById('phone').innerText = user.phone;
    document.getElementById('cell').innerText = user.cell;
    document.getElementById('date_of_birth').innerText = user.dob.date;
    return data;
  }

  button.addEventListener('click', (event) => {
    fetch(baseURL)
      .then(res => res.json())
      .then(showData)
  })
});
