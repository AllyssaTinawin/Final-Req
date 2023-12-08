const updateBtn = document.querySelector('#update');
const deleteBtn = document.querySelector('#delete');

const formatName = (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
document.querySelector('#firstName').value = formatName(currentUser.firstName);
document.querySelector('#lastName').value = formatName(currentUser.lastName);
document.querySelector('#email').value = currentUser.email || '';
const usernameForm = document.querySelector('#usernameForm');
usernameForm.value = currentUser.username;
const usernameSettings = document.querySelector('#usernameSettings')
usernameSettings.textContent = currentUser.username




updateBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users')) || [];


    const userIndex = users.findIndex((user) => user.email === currentUser.email);


    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;
        if(isChangePassword){
            if(password == ''){
                alert("Please Input the password Field.")
                } else if (password != confirmPassword){
                    alert("Password is not equal to confirm password.")
                } else {
            users[userIndex] = {
                ...users[userIndex],
                firstName: formatName(document.querySelector('#firstName').value),
                lastName: formatName(document.querySelector('#lastName').value),
                username: usernameForm.value,
                email: document.querySelector('#email').value,
                password: password, 
            };
         localStorage.setItem('users', JSON.stringify(users));
             localStorage.setItem(
                'currentUser',
                JSON.stringify({
                    ...currentUser,
                    firstName: formatName(document.querySelector('#firstName').value),
                    lastName: formatName(document.querySelector('#lastName').value),
                    password: password,
                    username: usernameForm.value,
                    email: document.querySelector('#email').value,
                })
            );
        
        
            currentUser.firstName = formatName(document.querySelector('#firstName').value);
            currentUser.lastName = formatName(document.querySelector('#lastName').value);
            currentUser.email = document.querySelector('#email').value;
            usernameSettings.value = currentUser.username
            isChangePassword = false
            alert('Update Success')
            location.reload();
            return
        }
        return

    } else {
        
    if(password === ''){
        alert("Please enter your password!")
        return
    }

    if(password !== currentUser.password){
        alert("Password Incorrect!")
        return
    }

    if (password !== confirmPassword) {
        alert('Password and Confirm Password do not match.');
        return;
    }

    }
    users[userIndex] = {
        ...users[userIndex],
        firstName: formatName(document.querySelector('#firstName').value),
        lastName: formatName(document.querySelector('#lastName').value),
        username: usernameForm.value,
        email: document.querySelector('#email').value,
        password: password, 
    };


    localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem(
            'currentUser',
            JSON.stringify({
                ...currentUser,
                    firstName: formatName(document.querySelector('#firstName').value),
                    lastName: formatName(document.querySelector('#lastName').value),
                    username: usernameForm.value,
                    email: document.querySelector('#email').value,
        })
    );


    currentUser.firstName = formatName(document.querySelector('#firstName').value);
    currentUser.lastName = formatName(document.querySelector('#lastName').value);
    currentUser.email = document.querySelector('#email').value;
    usernameSettings.value = currentUser.username
    isChangePassword = false
    alert('Updated Successfully')
    location.reload();
});


deleteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

   
    const userIndex = users.findIndex((user) => user.email === currentUser.email);

    if (userIndex !== -1) {
        
        users.splice(userIndex, 1);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.removeItem('currentUser');
        window.location.href = '/index.html';
        
    }

    
})