class Github{
    constructor() {
        this.client_id = 'fd621b9ffc9c90225592';
        this.client_secret = '0e92da059d5d89ccdda70f03b05d2c33f83ecae1';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&
        client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}
