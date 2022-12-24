const Database = require("../index.js")

const db = new Database("errors", { log: true })
db.set("12345678910", { gg: { coins: 0, loves: [] } })
db.add("12345678910.gg.loves", 1)
db.push("12345678910.gg.coins", "dog")
db.set()
db.delete("1")

console.log(db.get("12345678910.gg.fdysg"))