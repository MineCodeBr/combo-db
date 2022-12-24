const fs = require("node:fs")
const lodash = require("lodash")

module.exports = {
	read: function (options) {
	  return JSON.parse(fs.readFileSync(`./${options.name}/${options?.filename}.json`))
	},
	write: function (data, options) {
     return fs.writeFileSync(`./${options.name}/${options.filename}.json`, JSON.stringify(data, null, 2))
	}
}