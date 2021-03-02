scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f . . . . f f f f . . 
    . f e e e e f . . f e e e e f . 
    . f e e e e e f . f e e e e e f 
    . f e d d e e f . f e d d e e f 
    f e e d f d f . f e e d e d f . 
    f e e d 1 d f . f e e d 1 d f . 
    f f 2 d d d f . f f c d d d f . 
    . f 3 3 3 3 f . . f a a a a f . 
    . f 3 3 3 2 f . . f a a a c f . 
    . . f 2 3 f . . . . f c a f . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level_0`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorDarkDiamond)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
