const fs = require("node:fs")
const lodash = require("lodash")
const chalk = require("chalk")

const utils = require("./utils.js")

/*
 * Set options
 */

class Database {
    constructor(filename, options) {
        if (!filename) return console.error("No set model")

        this.options = {
            filename: filename.toLowerCase(),
            ...options
        }

        this.options.log ||= true
        this.options.name ||= "database"

        if (!fs.existsSync(`./${this.options.name}`)) fs.mkdirSync(`./${this.options.name}`)


        if (!fs.existsSync(`./${this.options.name}/${filename}.json`)) utils.write({}, this.options)
        this.data = utils.read(this.options)
    }
}

/*
 * Add number on value
 */

Database.prototype.add = function(name, value) {
    if (!name || !value) return console.error(chalk.red("[ERROR]") + chalk.yellow("(ADD)") + " The 2 parameters are required")
    if (typeof lodash.get(this.data, name, null) != "number" && this.options.log) return console.error(`${chalk.red("[ERROR]")}${chalk.yellow("(ADD)")} ${chalk.bgGray(`${name}`)} no number type`)

    lodash.set(this.data, name, Number(lodash.get(this.data, name, null) + value))
    utils.write(this.data, this.options)
}

/*
 * Renove number on value
 */

Database.prototype.remove = function(name, value) {
    if (!name || !value) return console.error(chalk.red("[ERROR]") + chalk.yellow("(ADD)") + " The 2 parameters are required")
    if (typeof lodash.get(this.data, name, null) != "number" && this.options.log) return console.error(`${chalk.red("[ERROR]")}${chalk.yellow("(ADD)")} ${chalk.bgGray(`${name}`)} no number type`)

    lodash.set(this.data, name, Number(lodash.get(this.data, name, null) - value))
    utils.write(this.data, this.options)
}

/*
 * Delete value
 */

Database.prototype.delete = function(name) {
    if (!name) return console.error(chalk.red("[ERROR]") + chalk.yellow("(SET)") + " The parameter are required")

    lodash.unset(this.data, name)
    utils.write(this.data, this.options)
}

/*
 * Get value
 */

Database.prototype.get = function(name) {
    if (!name) return console.error(chalk.red("[ERROR]") + chalk.yellow("(GET)") + " The parameter are required")
    if (!lodash.get(this.data, name, null)) {
        if (this.options.log) console.error(`${chalk.red("[ERROR]")}${chalk.yellow("(GET)")} ${chalk.bgGray(`${name}`)} value no exist on ${this.options.filename}`)
        return false
    }

    return lodash.get(this.data, name, null);
}

/*
 * Array push
 */

Database.prototype.push = function(name, value) {
    if (!name || !value) return console.error(chalk.red("[ERROR]") + chalk.yellow("(PUSH)") + " The 2 parameters are required")
    if (typeof lodash.get(this.data, name, []) != "object" && this.options.log) return console.error(`${chalk.red("[ERROR]")}${chalk.yellow("(PUSH)")} ${chalk.bgGray(`${name}`)} no array type`)

    var result = lodash.get(this.data, name, [])

    result.push(value)
    lodash.set(this.data, name, result)
    utils.write(this.data, this.options)
}

/*
 * Set value (or replace)
 */

Database.prototype.set = function(name, value) {
    if (!name || !value) return console.error(chalk.red("[ERROR]") + chalk.yellow("(SET)") + " The 2 parameters are required")
    lodash.set(this.data, name, value)
    utils.write(this.data, this.options)
}

module.exports = Database
