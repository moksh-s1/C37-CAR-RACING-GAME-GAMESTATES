class Game {
  constructor() {}

  getState(){
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value",function(data){
      gameState = data.val();
    });

  }

  update(state){
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    form = new Form();
    form.display();

    player = new Player();
    playerCount = player.getCount();

    car1=createSprite(width/2 -50,height -100);
    car1.addImage("car1",car1Img);
    car1.scale=0.07;
    
    car2=createSprite(width/2 +100,height -100);
    car2.addImage("car2",car2Img);
    car2.scale=0.07;

    cars=[car1,car2];

  }

}
