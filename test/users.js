const Database = require("../index.js")

const db = new Database("users", { name: "Test", extension: "database" })
db.set("12345678910", {coins: 0, xp: 0, loves: []})
db.add("12345678910.coins", 1)
db.push("12345678910.loves", "cat")
db.delete("12345678910.xp")

console.log(db.get("12345678910"))