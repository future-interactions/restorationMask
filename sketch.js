var img, origImg, oldImg;
var imgClone;
var brushSize = 100;
var mk;
let moved = false;

function setup() {
	createCanvas(windowWidth, windowHeight);
	oldImg = loadImage('assets/before_artemesia3.png');
	origImg = loadImage('assets/after_artemesia2.png');
	img = createGraphics(811, 786);
	mk = createGraphics(811, 786);
}

function draw() {
	background(200);
	translate(width / 2 - oldImg.width / 2, height / 2 - oldImg.height / 2);
	if (moved = true) {
		for (let i = 0; i < 10; i++) {
			mk.noStroke();
			mk.fill(0, 0, 0, i*2)
			mk.ellipse(mouseX - width / 2 + oldImg.width / 2, mouseY - height / 2 + oldImg.height / 2, brushSize - (i * 6), brushSize - (i * 6));
			moved = false;
		}

	}
	(imgClone = origImg.get()).mask(mk.get());
	image(oldImg, 0, 0);
	image(imgClone, 0, 0);
	//image(mk, 0, 0);


}

function touchMoved() {
	return false;
}

function mouseMoved() {
	moved = true;
}