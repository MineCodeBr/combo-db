## Combo DB
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
[Examples](https://github.com/MineCodeBr/combo-db/examples)



## Docs
```js
const options = {
    log: true, // return errors on terminal
    name: "Database", // set name of database
    extension: "json" //generator file custom
}

new Database("name", options)
```

# add
```js
  db.add("path", number)
```

# remove
```js
 db.remove("path", number)
```

# delete
```js
 db.delete("path")
```

# get
```js
 db.get("path")
```

# push
```js
 db.push("path", { object: true })
 db.push("path", { string: true })
```

# set
```js 
 const value = {
    string: "abc",
    number: 10
 }
 db.set("path", value)
```