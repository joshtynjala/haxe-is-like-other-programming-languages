import fs from "node:fs";
import path from "node:path";

const LANGUAGES = {"as3": "ActionScript 3.0", "csharp": "C#", "go": "Go", "haxe": "Haxe", "kotlin": "Kotlin", "swift": "Swift", "ts": "TypeScript"};

export default function () {
    const result = [];
    for (const dirname in LANGUAGES)
    {
        const languageName = LANGUAGES[dirname];
        const dirpath = path.join(process.cwd(), "snippets", dirname);
        console.log(languageName, dirpath);
        const snippets = [];
        const section = {name: languageName, id: dirname, snippets};
        result.push(section);
        for (const fileName of fs.readdirSync(dirpath))
        {
            const snippetName = fileName.substring(4, fileName.length - path.extname(fileName).length).split(".")[0].split("-").map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");
            const fileContents = fs.readFileSync(path.resolve(dirpath, fileName), "utf8");
            snippets.push({name: snippetName, text: fileContents});
        }
    }
    return result;
};

