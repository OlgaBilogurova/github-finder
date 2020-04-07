// Init GitHub
const github = new Github;

// Init UI
const ui = new UI;

// Search input, btn
const searchUser = document.getElementById('searchUser');
const searchBtn = document.getElementById('searchBtn');

// Search input event listener
searchBtn.addEventListener('click', (e) => {
    const userText = searchUser.value;

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
                    // Show profile and repos
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
            .catch(error => {
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
