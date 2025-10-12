const fs = require("fs")

const mods = Buffer.from(fs.readFileSync("licenses.csv")).toString()

const lines = mods.split("\n")

var out = `<details><summary><strong>Mod List</strong></summary><ul>`

lines.forEach(line => {
    const parts = line.split("|")
    const link = "\n<li><a href=" + parts[0] + ">" + parts[1] + "</a></li>"
    out += link
})

out += "</ul></details>"

fs.writeFileSync("modlist.md", Buffer.from(out))