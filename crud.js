// fazendo [CRUD] SOMENTE JS
const twitter = {
    user :[
        {
            username : 'vinicius'
        }
    ],
    
    tweets :[
        {   
            id: 1,
            owner: 'vinicius',
            content : 'Meu primeiro tweet'
        }
    ],
};

// [CREATE]
function createtweet(dados){
    twitter.tweets.push({
        id: twitter.tweets.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}

createtweet({owner:'vinicius',content:'segundo tweet'});
createtweet({owner:'vinicius',content:'terceiro tweet'});
//console.log(twitter.tweets) 
[{  owner:'vinicius',
    content:'My first tweet'}];

//READ
function pushtweets(){
    return twitter.tweets;
}
console.log(pushtweets());
//UPDATE
function newtweetcontent(id,newtweetcontent){
   const tweetatualizado = pushtweets().find((tweet)=>{
        return tweets.id === id ;
    })
   console.log(tweetatualizado)
   tweetatualizado = newtweetcontent 

}

newtweetcontent(1,'new tweet content')

//DELETE

function deletetweet(id){
const tweetatualizado = pushtweets().filter((atualtweet)=>{
    return atualtweet.id !==id;
})
twitter.tweets = tweetatualizado;

}
deletetweet(1);
deletetweet(2);
deletetweet(3);
console.log(pushtweets());