
## Universal language use

# Install
- NPM = `npm i universal-language`

# Github
- https://github.com/Morvicek/universal-language

# INFO
- Once you select a folder, you need to make a <language>.json file in that folder. Then you can continue working.

# Ussage

- index.js
```js
const plugin = require("./src/main.js")
const Client  = new plugin({
    folder: "./lang"
})
console.log(Client.say("welcome", "cz"))
console.log(Client.say("welcome", "en"))
console.log(Client.say("weather.cold", "cz"))
console.log(Client.say("weather.cold", "en"))
```

- /lang/cz.json

```json
{
    "welcome": "Ahoj!!",
    "weather": {
        "cold": "Zima",
        "warm": "Teplo"
    }
}
```
- /lang/en.json

```json
{
    "welcome": "Hello!!",
    "weather": {
        "cold": "Cold",
        "warm": "Warm"
    }
}
```