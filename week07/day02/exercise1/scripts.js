async function getUsers() {
    let url = 'users.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function validateUsers() {
    let userNameInput = document.querySelector('#username');
    let userPasswordInput = document.querySelector('#password');
    let users = await getUsers();
    let flag = false;
    for (let i = 0; i < users.length; i++) {
        if ((userNameInput.value == users[i].username) && (userPasswordInput.value == users[i].password)) {
            flag = true;
            break;
        }
    }
    if (flag) {
        return alert("Welcome to The Page")
    } else {
        return alert("Please enter again")
    }
};