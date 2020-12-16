class Start {

  constructor() {
    
    this.button = createButton('Play');
  }

  display(){
    this.title.html("INFINITY");
    this.title.position(displayWidth/2 - 50, 0);

    this.button.position(displayWidth/2 + 30, displayHeight/2);
    

    this.button.mousePressed(()=>{
      this.button.hide();
     
    })

    
   }
  }