class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background("Yellow");
    fill(0);
    textSize(30);
    text("Result of the Quiz",340, 50);
    text("----------------------------",320, 65);
    
    Contestant.getContestantInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;
      fill("purple");
      textSize(15);
      text("*NOTE: Contestant who answered correct are highlighted in green color!",130,385);
      fill("Blue");
      textSize(20);
      text("Contestant\t\t\t\tAnswer",250,225);
      text("--------------------------------",250,240);

      for(var plr in allContestants){
        debugger;
        var correctAns = "3";
        if (correctAns === allContestants[plr].answer)
          fill("Green")
        else
          fill("red");

        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ":\t\t\t\t\t\t\t\t" + allContestants[plr].answer, 270,display_Answers)
      }
    }
  }
    //write code here to hide question elements

    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }
