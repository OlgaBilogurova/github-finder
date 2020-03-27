// Init GitHub
const github = new Github;

// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText !== ''){
        // Make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show alert message

                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                }
            })
        } else {
        // Clear profile
        document.getElementById('profile').innerHTML = '';
    }
});
