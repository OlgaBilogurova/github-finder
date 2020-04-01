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
                    ui.showAlert('User not found', 'failed');
                    // Clear profile
                    ui.clearProfile();
                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
        } else {
        // Clear profile
        ui.clearProfile();
    }
});
