class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
  addPlayer(){
    //This creates players root node will be created and player1 ,2 hirerachy created
    var playerIndex = "players/player"+this.index;
    
      if(this.index === 1){
        this.positionX = width/2 -100;
      }else{
        this.positionX = width/2 +100;
      }
      //writing the information got on the form to the database
      database.ref(playerIndex).set({
        name: this.name,
        positionX: this.positionX,
        positionY: this.positionY
      });

  }
  getCount(){
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data=>{
      playerCount = data.val();
    })
  }
  
  updateCount(count){
    database.ref("/").update({
      playerCount: count
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref("players");
    playerInfoRef.on();
  }
}
