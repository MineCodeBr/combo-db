const Database = require("combo-db")

const userId = 12345678910
const loves = ["cat", "dog"]

function main() {
    const db = new Database("users", { name: "TestUser" })

    db.set(userId, { xp: 0, coins: 0, loves: [] })

    db.add(userId + ".xp", 1)
    db.add(userId + ".coins", 10)

    for (const love of loves) {
        db.push(userId + ".loves", love)

    }

    return db.get(userId)
}

console.log(main())
//Result: { xp: 1, coins: 10, loves: [ 'cat', 'dog' ] }