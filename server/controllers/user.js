const User = require("./../models/user");
const bcrypt = require("bcrypt");

const encryptionKey = process.env.SECRETKEY;
const usernameRegex = /^(U|I|u|i)(18|19|20|21|22|23|24)([A-Za-z]{2})(0[0-9]{2}|1[0-9]{2}|2[0-9]{2}|300)$/;

// Helper function
function encrypt(text, key) {
    let encryptedText = "";
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        encryptedText += String.fromCharCode(charCode + key);
    }
    return encryptedText;
}

function decrypt(text, key) {
    let decryptedText = "";
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        decryptedText += String.fromCharCode(charCode - key);
    }
    return decryptedText;
}

function generateAuthToken({ username, password }) {
    return encrypt(username + password, encryptionKey)
}

module.exports.register = async (req, res, next) => {
    try {
        const { photo, username, password, firstname, lastname, email, mobile, address } = req.body;

        // Validate the username format using the regular expression
        if (!username.match(usernameRegex)) {
            return res.json({ message: "Invalid username format, example: u20ec050", status: false });
        }

        // check if already used.
        const usernameCheck = await User.findOne({ username });
        if (usernameCheck) {
            return res.json({ message: "Username already used.", status: false });
        }

        // email check
        const emailCheck = await User.findOne({ email });
        if (emailCheck) {
            return res.json({ message: "Email already used.", status: false });
        }

        // encrypt password
        const hashedPassword = await bcrypt.hash(password, 10);
        const lowercasedUsername = username.toLowerCase();
        const lowercasedEmail = email.toLowerCase();

        // send data
        const user = await User.create({
            photo,
            username: lowercasedUsername,
            password: hashedPassword,
            firstname,
            lastname,
            email: lowercasedEmail,
            mobile,
            address,
        });

        delete user.password;
        return res.json({ message: "Registration Successful.", status: true, user });
    } catch (ex) {
        next(ex);
    }
};

module.exports.sessionLogin = async (req, res, next) => {
    try {
        let { authtoken } = req.body;
        authtoken = decrypt(authtoken, encryptionKey);

        const username = authtoken.substring(0, 8);
        const password = authtoken.substring(8, authtoken.length + 1);

        const user = await User.findOne({ username });

        if (!user)
            return res.json({ message: "Incorrect Username or Password.", status: false });
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid)
            return res.json({ message: "Incorrect Username or Password.", status: false });

        const userData = {
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            mobile: user.mobile,
            address: user.address,
            authtoken: generateAuthToken({ username, password })
        };

        delete user.password;
        return res.json({ message: "You have successfully login.", status: true, userData });
    }
    catch (error) {
        next(error);
    }
}

module.exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user)
            return res.json({ message: "Incorrect Username or Password.", status: false });
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid)
            return res.json({ message: "Incorrect Username or Password.", status: false });

        const userData = {
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            mobile: user.mobile,
            address: user.address,
            authtoken: generateAuthToken({ username, password })
        };

        delete user.password;
        return res.json({ message: "You have successfully login.", status: true, userData });
    } catch (ex) {
        next(ex);
    }
};

module.exports.update = async (req, res, next) => {
    try {
        if (!req.params.id) return res.status(400).json({ message: "User id is required " });

        const { firstname, lastname, email, mobile, address } = req.body;

        const user = await User.findByIdAndUpdate(req.params.id, { firstname, lastname, email, mobile, address }, { new: true });

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        res.status(200).json(user);
    } catch (ex) {
        console.error(ex);
        res.status(500).json({ message: "Server error." });
    }
};