const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(userForm);

    const userInfo = {
        name: formData.get('name'),
        avatar: 'banana',
        hp: 50,
        gold: 50
    };

    const serialize = JSON.stringify(userInfo);
    window.localStorage.setItem('userInfo', serialize);

    window.location = 'map.html';
});

