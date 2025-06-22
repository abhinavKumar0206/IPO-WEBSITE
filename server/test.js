const bcrypt = require("bcryptjs");

// const plain = "Web-Admin";
// const hash = "$2a$10$KcNV52zGTn1pgKVmUl5x7OER8jpxxDQ3x2IQpM7yOj8PjU55u9SRK";

// bcrypt.compare(plain, hash).then(console.log);

bcrypt.hash("Web-Admin", 10).then(console.log);

