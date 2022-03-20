
/**
 * Discord.js Language class
 */

 const fs = require("fs"),
 replacer = require("./console")
 
 class lang {
     /**
      * Discord.js Language class
      * @param {Client} client - Discord.js Client
      * @param {Object} options - Options ()
      */
     constructor(options = {}) {

 
         if (!Object.keys(options).length) return console.log(replacer("&3[Language] &cNo default options provided!"));
 

         this.options = options
         this.folder = options.folder
         this.lang = options.languages

 

     }

     say(message, lang){
        if (!fs.existsSync(this.folder)) return console.log(replacer("&3[Language] &cThe folder you provided does not exist!"));
        const files = fs.readdirSync(this.folder).filter(file => file.endsWith(".json"))
        if(!files[0]) return console.log(replacer("&3[Language] &cThe folder you provided does not contain .json files!"))
        var foldere = this.folder
        if(!foldere.endsWith("/")) foldere = foldere + "/"
        if(!message || !lang) return console.log(replacer("&3[Language] &cNo message and language provided!"));
        if (typeof lang !== 'string') return console.log(replacer("&3[Language] &cLang must be a string!"));
        var e, i, z, c;
        if (typeof message !== 'string') return console.log(replacer("&3[Language] &cMessage must be a string!"));
        
        let file = fs.readFileSync(foldere + lang +'.json');
        let filee = JSON.parse(file);
        i = message.split(".")
        z=filee
        c=0;
        i.forEach(x =>{
            z = z[i[c]]
            c++;
        })
        e = z
        return e;
        
    }

     
 
 }
 module.exports = lang;