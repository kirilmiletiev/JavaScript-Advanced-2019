class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    set clientId(clientId) {
        let reg = /^\d{6}$/;
        if (!reg.test(clientId)) {
            throw new TypeError('Client ID must be a 6-digit number');
        }
        return clientId;
    }

    set email(email) {
        let regex = /[a-zA-Z]+@([a-zA-Z.]+)/;
        if (!regex.test(email)) {
            throw new TypeError("Invalid e-mail");
        }
        return email;
    }

    set firstName(firstName) {
        //let regex = /^[a-zA-Z]{3,20};
        if (firstName.length < 3 || firstName.length > 20) {
            throw TypeError("First name must be between 3 and 20 characters long");
        }
        let regex2 = /^[a-zA-Z]/;
        if (!regex2.test(firstName)) {
            throw TypeError("First name must contain only Latin characters");
        }
        return firstName;
    }

    set lastName(lastName) {
        //let regex = /^[a-zA-Z]{3,20};
        if (lastName.length < 3 || lastName.length > 20) {
            throw TypeError("Last name must be between 3 and 20 characters long");
        }

        let regex2 = /^[a-zA-Z]/;
        if (!regex2.test(lastName)) {
            throw TypeError("Last name must contain only Latin characters");
        }
        return lastName;
    }
}