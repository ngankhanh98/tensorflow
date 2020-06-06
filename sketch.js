let bodypix;
let segmentation;
let img;

const harriet = './images/harriet.jpg'
const ada = './images/ada.jpg'
const man = './images/man.jpg'
const woman = './images/woman.jpg'
function preload() {
    img = loadImage(woman);
    bodypix = ml5.bodyPix()
}

function setup() {
    createCanvas(480, 560);
    bodypix.segment(img, gotResults)
}

function gotResults(err, result) {
    if (err) {
        console.log(err)
        return
    }

    segmentation = result;

    background(0);
    image(segmentation.backgroundMask, 0, 0, width, height)

}