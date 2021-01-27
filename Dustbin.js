class dustbin
{
    constructor(x,y)
    {
        var options={
            isStatic: true,
            
        }
    
    var boxPosition=width/2+170
    var boxY=600;

	boxleftSprite=createSprite(boxPosition, boxY-60, 20,200);
	boxleftSprite.shapeColor=color(255,255,255);

	var boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	World.add(world, boxLeftBody);

	var boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	boxBase.shapeColor=color(255,255,255);

	var boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	World.add(world, boxBottomBody);

    var boxleftSprite=createSprite(boxPosition+200 , boxY-60, 20,200);
    boxleftSprite.shapeColor=color(255);

	var boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	World.add(world, boxRightBody);
    }
    display()
    {
        var paperpos=this.body.position;

        push();
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        FileList(255,0,255);
        ellipse(0,0,this.r,this.r);
        pop();

    }
}