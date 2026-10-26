const characters=[
    {
        title:"ninja",
        emoji:"🧑‍🎤",
        powers:['stealth','agility','martial arts']
    },
    {
        title:"wizard",
        emoji:"🧙‍♂️",
        powers:['magic','telekinesis','invisibility']
    },
    {
        title:"robot",
        emoji:"🤖",
        powers:['circuitry','programming','durability']
    }
]
characters.forEach(function(char){ 
    console.log(char.powers[0]);
})
characters.forEach(function(char){ 
    console.log(char.powers[1]);
})
characters.forEach(function(char1){ 
    char1.powers.forEach(function(power){
        console.log(power);
    });
});
characters.forEach(function(char, index){ 
    console.log(index, char.title);
})
