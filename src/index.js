import { getDogs } from './api/dogApi';

//Populate table of dogs via API call.
getDogs().then(result => {
    let dogsBody = "";

    result.forEach(dog => {
        dogsBody += `<tr>
        <td><a href="#" data-id="${dog.id}" class="deleteDog">Delete</a></td>
        <td>${dog.id}</td>
        <td>${dog.firstName}</td>
        <td>${dog.lastName}</td>
        <td>${dog.email}</td>
            </tr>`
    });

    global.document.getElementById('dogs').innerHTML = dogsBody;

});