class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static countUsers() {
        console.log(`There are 50 users`);
    }

    register() {
        console.log(`${this.username} is now registered.`);
    }
}

class Member extends User {
    constructor(username, email, password) {
        super(username, email, password, memberPackage);
        this.memberPackage = memberPackage;
    }

    getPackage() {
        console.log(`${this.username} is subscribed to the ${this.memberPackage} package.`)
    }
}

// let bob = new User('bob1', 'bob@bob.com', 'abc123');
// bob.register();

let mike = new Member('mike', 'mike@email.com', 'abc123', 'Standard');
mike.getPackage();