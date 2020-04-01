class UI {
    constructor() {
        this.profile = document.getElementById('profile');
        this.msgBox = document.getElementById('message');
    }

    showProfile(user){
        // Remove all alerts
        this.clearAlert();

        // Validate fields
        if (user.company === null) user.company = '-';
        if (user.blog === '') user.blog = '-';
        if (user.location === null) user.location = '-';

        // Convert Date Format
        let created_at = new Date(user.created_at).toLocaleDateString();

        // Build UI for profile
        this.profile.innerHTML = `
            <div class="profile-info-wrap">
                <div class="profile-img">
                    <img src="${user.avatar_url}" alt="avatar">
                    <a class="view-link" href="${user.html_url}" target="_blank">View Profile</a>
                </div>
            </div>
            
            <div class="profile-badges-wrap">
                <div class="profile-badges">
                    <span class="badge badge-blue">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-yellow">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-purple">Followers: ${user.followers}</span>
                    <span class="badge badge-green">Following: ${user.following}</span>
                </div>
                
                <ul class="profile-about">
                    <li class="profile-about-item">Company: ${user.company}</li>
                    <li class="profile-about-item">Website/Blog: ${user.blog}</li>
                    <li class="profile-about-item">Location: ${user.location}</li>
                    <li class="profile-about-item">Member Since: ${created_at}</li>
                </ul>
            </div>            
        `;

        // Add border to profile section
        this.profile.style.border = '1px solid lightgray';
    }

    showAlert(message, className) {
        this.msgBox = document.getElementById('message');
        this.msgBox.classList.add(className);
        this.msgBox.innerText = message;

        // Remove alert after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        // Remove class
        if (this.msgBox.classList.contains('failed')) this.msgBox.classList.remove('failed');

        // Clear message-box
        this.msgBox.innerText = '';
    }

    clearProfile() {
        this.profile.innerHTML = '';

        // Remove border to profile section
        this.profile.style.border = 'none';
    }
}
