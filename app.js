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
                    // Clear input
                    searchUser.value = '';
                    // Clear profile
                    ui.clearProfile();
                } else {
                    // Show profile and repos
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
            .catch(error => {
                // Clear input
                searchUser.value = '';
                // Show alert message
                ui.showAlert(error, 'failed');
                // Clear profile
                ui.clearProfile();
            });
        } else {
        // Clear profile
        ui.clearProfile();
    }
});
