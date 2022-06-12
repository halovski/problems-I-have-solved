class Story {

    constructor(title, creator) {

        this.title = title
        this.creator = creator
        this.comments = []
        this.likess = []
        //this.likeNum = (this.likes).length
    }

    like(username) {
        if(this.creator == username){
            return "You can't like your own story!"
        }
        this.likess.push(username)

        return `${username} liked ${this.title}!`
    }


    likes() {
     //  console.log((this.likess).length);

        if ((this.likess).length == 0) {
            // console.log(`0likes`);
            return `has 0 likes`
        }
        if ((this.likess).length == 1) {
            // console.log(`1 like`);
          
            return `${this.likess[0]} likes this story!`
        }

        if ((this.likess).length > 1) {
            console.log(`${(this.likess).length} likes`);
          
            return `${this.likess[0]} likes this story!`
        }

    }

}

let art = new Story("My Story", "Anny");
console.log(art.likes());

console.log(art.like(`Anny`));
console.log(art.likes());
art.like(`john`)
console.log(art.likes());
art.like(`john`)
console.log(art.likes());

// art.like("John");
// console.log(art.likes);
// art.dislike("John");
// console.log(art.likes);
// art.comment("Sammy", "Some Content");
// console.log(art.comment("Ammy", "New Content"));
// art.comment("Zane", "Reply", 1);
// art.comment("Jessy", "Nice :)");
// console.log(art.comment("SAmmy", "Reply@", 1));
// console.log()
// console.log(art.toString('username'));
// console.log()
// art.like("Zane");
// console.log(art.toString('desc'));
