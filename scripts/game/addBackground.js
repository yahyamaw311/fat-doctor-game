
export function addBackground(app){
    const background = PIXI.Sprite.from('background')

    background.anchor.set(0.5)

    if (app.screen.width > app.screen.height)
        {
            background.width = app.screen.width;
            background.height = app.screen.height;
        }
    
        else
        {
            background.height = app.screen.height * 1.2;
            background.scale.x = background.scale.y;
        }
    
        background.x = app.screen.width / 2;
        background.y = app.screen.height / 2;
    
        app.stage.addChild(background); 
}