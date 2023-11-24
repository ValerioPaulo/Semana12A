var juego = new Phaser.Game(370,550,Phaser.CANVAS, 'bloque_juego');
var fondoJuego;
var flappy;

var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;



var estadoPrincipal ={
	preload: function (){
		juego.load.image('fondo', 'img/bg.jpeg');
		//juego.load.image('pajaro','img/pajaro1.png');
		//juego.load.spritesheet('pajaros','img/pajaro.png',43,30);  //pajaro
		juego.load.spritesheet('pajaros','img/soldado.png',205,220); //Se cambió a soldado

	},
	create: function(){

		fondoJuego =  juego.add.tileSprite(0,0,370,550,'fondo');
		flappy     =  juego.add.sprite(juego.width/2, juego.height/2,'pajaros');
		flappy.anchor.setTo(0.5);
		//Animacion del pajaro
		flappy.frame=1;
		flappy.animations.add('vuelo',[0,1,2],5,true);
		//Movimientos de teclado
		teclaDerecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		teclaIzquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		teclaArriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
		teclaAbajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);


	},
	update: function(){
		fondoJuego.tilePosition.x-=1;
		flappy.animations.play('vuelo');		
		if(teclaDerecha.isDown){
			flappy.x+=2;
		}else if(teclaIzquierda.isDown){
			flappy.x-=2;
		}else if(teclaArriba.isDown){
			flappy.y-=2;
		}else if(teclaAbajo.isDown){
			flappy.y+=2;
		}
		

	}

};



juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');







