const language = {
    set current(name){
        this.log.push(name);
    },
    log : []

};

language.current=("bg");
language.current=("en");
console.log(language.log);


const girlfriends = {
    set newGirl(name){
        this.girls.push(name);
    },
    girls:[]
}

girlfriends.newGirl = "Alex";
girlfriends.newGirl = "Daniele";

console.log(girlfriends.girls);