let myMark = 81;
let FriendsMark = 50;

if(myMark > 80){

    if(FriendsMark > 80){
        console.log('Go for a lunch.');
    }
    else if(FriendsMark < 80 && FriendsMark >= 60 ){
        console.log('Good luck next time');
    }
    

    else if(FriendsMark < 60 && FriendsMark >= 40){
        console.log("friend's message unseen");
    }
    

    else if(FriendsMark < 40){
        console.log('I will Block my friend')
    }

}
else{
    console.log('I go to home and sleep and act sad')
}
