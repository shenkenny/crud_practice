/**
 * front end UI
 * > create a user and input username and data
 * > 4 input fields - each variable in schema
 * > get users
 */

document.addEventListener("DOMContentLoaded", () => {
    //this js will fire once index.html is loaded
    const App = document.querySelector('#app'); // get the page/section we are adding to?
    const title = document.createElement('h2'); // html paragraph element
    title.innerHTML = 'Put your username here: '; // html paragraph text
    const username = document.createElement('input'); // html input 
    username.setAttribute('id','username_input');
    App.appendChild(title);
    App.appendChild(username);

    const title2 = document.createElement('h2'); // html paragraph element
    title2.innerHTML = 'Put your password here: '; // html paragraph text
    const password = document.createElement('input'); // html input 
    password.setAttribute('id','password_input');
    App.appendChild(title2);
    App.appendChild(password);
    
    const title3 = document.createElement('h2'); // html paragraph element
    title3.innerHTML = 'Put your fave ice cream here: '; // html paragraph text
    const iceCream = document.createElement('input'); // html input 
    iceCream.setAttribute('id','fave_ice_cream_input');
    App.appendChild(title3);
    App.appendChild(iceCream);

    const title4 = document.createElement('h2'); // html paragraph element
    title4.innerHTML = 'Put your fave algo here: '; // html paragraph text
    const algo = document.createElement('input'); // html input 
    algo.setAttribute('id','fave_algo_input');
    App.appendChild(title4);
    App.appendChild(algo);

    const spacer = document.createElement('hr');
    App.appendChild(spacer);

    const submit = document.createElement('button');
    submit.innerText = "Send it to the backend!";
    submit.setAttribute('id', 'submit_data');
    App.appendChild(submit);
    App.appendChild(spacer);

    const result = document.createElement('h2');
    // result.innerText = `${username.value} loves ${iceCream.value} ice cream and ${algo.value} algo!`;
    App.appendChild(result);
    

    submit.addEventListener("click", async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/user/new', {
            username: username.value,
            password: password.value,
            favorite_icecream: iceCream.value,
            favorite_algo: algo.value
        })
        .then ((res) => {
            console.log(res.data);
            result.innerHTML = res.data.username;
        })
        .catch (err => console.log(err));
    });

    //search user button

    const title5 = document.createElement('h2'); // html paragraph element
    title5.innerHTML = 'search for a user'; // html paragraph text
    title5.setAttribute('style', 'color:blue;text-align:center');
    const userSearch = document.createElement('input');
    userSearch.innerHTML = "search";
    userSearch.setAttribute('id', 'search_user');
    App.appendChild(title5);
    App.appendChild(userSearch);
    App.appendChild(spacer);

    const search = document.createElement('button');
    search.innerText = "Show the secrets!";
    search.setAttribute('id', 'user_search');
    App.appendChild(search);
    App.appendChild(spacer);

    const searchResult = document.createElement('h2');
    // result.innerText = `${username.value} loves ${iceCream.value} ice cream and ${algo.value} algo!`;
    App.appendChild(searchResult);

    search.addEventListener("click", async (e) => {
        e.preventDefault();
        await axios.get("http://localhost:3000/user/" + userSearch.value)
        .then ((res) => {
            console.log(res.data);
            searchResult.innerHTML = res.data.username + "'s favorite ice cream is " + res.data.favorite_icecream + " and favorite algo is " + res.data.favorite_algo;
        })
        .catch (err => console.log(err));
    });

})