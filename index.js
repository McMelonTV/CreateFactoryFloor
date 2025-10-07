import * as fs from "fs"
import {setDefaultAutoSelectFamilyAttemptTimeout} from 'node:net';

setDefaultAutoSelectFamilyAttemptTimeout(50000)

var out = ""

const files = fs.readdirSync("mods")
files.forEach(async (modfilename) => {
    setDefaultAutoSelectFamilyAttemptTimeout(50000)

    const modfile = fs.readFileSync("mods/" + modfilename)
    const modid = Buffer.from(modfile).toString().split("mod-id = \"")[1]?.split("\"")[0]

    try {
        setDefaultAutoSelectFamilyAttemptTimeout(50000)

        const res = await fetch("https://api.modrinth.com/v2/project/" + modid)
        const json = await res.json()

        console.log("https://modrinth.com/mod/" + json.id + "|" + json.title + "|" + json.license.id + "|" + json.source_url)
    } catch (e) {
        console.log("ERROR " + modfilename)
    }
})