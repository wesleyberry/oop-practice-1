class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    register() {
        console.log(`${this.username} is now registered.`);
    }

}

let bob = new User('bob1', 'bob@bob.com', 'abc123');
bob.register();