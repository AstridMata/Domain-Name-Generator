var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];

for (let x = 0; x < pronoun.length; x++) {
    for (let y = 0; y < adj.length; y++) {
        for (let z = 0; z < noun.length; z++) {
            console.log(pronoun[y]+adj[x]+noun[z]+".com")
        }
    }
}

// para ver en la terminal
//git node app.js