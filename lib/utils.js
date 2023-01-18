const fs = require("node:fs")
const lodash = require("lodash")

module.exports = {
	read: function (options) {
	  return JSON.parse(fs.readFileSync(`./${options.name}/${options?.filename}.${options.extension}`))
	},
	write: function (data, options) {
     return fs.writeFileSync(`./${options.name}/${options.filename}.${options.extension}`, JSON.stringify(data, null, 2))
	}
}