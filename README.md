# Combo DB
A simple database, used json

## Install
```bash
npm i combo-db
```

## Example
```js
const Database = require("combo-db")

const userId = 12345678910
const loves = ["cat", "dog"]

function main() {
    const db = new Database("users", { name: "TestUser", extension: "database" })
    //Generator file .database (Custom)

    //Set User
    db.set(userId, { xp: 0, coins: 0, loves: [] })

    //Add value on userId
    db.add(userId + ".xp", 2)
    db.add(userId + ".coins", 15)
    
    //Remove value on userId
    db.remove(userId + ".xp", 1)
    db.remove(userId + ".coins", 5)
   
    //Push on array
    for (const love of loves) {
        db.push(userId + ".loves", love)

    }
    
    //Get userId
    return db.get(userId)
}

console.log(main())
//Result: { xp: 1, coins: 10, loves: [ 'cat', 'dog' ] }
```

## :D
