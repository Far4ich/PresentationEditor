//#region Types
type Presentation = {
    "title": string,
    "slides": Array<Slide> 
};
type Slide = {
    "backGround": string,
    "backImg": string,
    "texts": Array<TextElement>,
    "imgs": Array<Img>,
    "circles": Array<Circle>,
    "rectangles": Array<Rectangle>,
    "triangles": Array<Triangle>
};
type TextElement = {
    "str": string
    "layer": number,
    "font": string,
    "fontsSize": number,
    "leftTop": Point,
    "rightBottom": Point
};
type Point = {
    "x": number,
    "y": number
};
type Img = {
    "layer": number,
    "path": string,
    "pos": Point,
    "width": number,
    "height": number
};
type Circle = {
    "layer": number,
    "center": Point,
    "radius": number,
    "color": string,
    "borderColor": string
};
type Rectangle = {
    "layer": number,
    "leftTop": Point,
    "rightBottom": Point,
    "color": string,
    "borderColor": string
};
type Triangle = {
    "layer": number,
    "pos1": Point,
    "pos2": Point,
    "pos3": Point,
    "color": string,
    "borderColor": string
};
//#endregion

function setTitle(pres: Presentation, name: string)
{
    let tmpPres = pres;
    tmpPres.title = name;
    return tmpPres;
}
//#region slides
function addSlide(pres: Presentation)
{
    let tmpPres = pres;
    let newSlide: Slide | null;
    tmpPres.slides.push(newSlide);
    return tmpPres;
}
function deleteSlide(pres: Presentation, slideNumber: number)
{
    let tmpPres = pres;
    tmpPres.slides.splice(slideNumber, slideNumber)
    return tmpPres;
}
function moveSlide(pres: Presentation, slideNumber, targetNumber: number)
{
    let tmpPres = pres;
    let firstSlide = tmpPres.slides[slideNumber];
    let secondSlide = tmpPres.slides[targetNumber];
    tmpPres.slides[slideNumber] = secondSlide;
    tmpPres.slides[targetNumber] = firstSlide;
    return tmpPres;
}
function showSlide(pres: Presentation, slideNumber: number) { }
function hideSlide(pres: Presentation, slideNumber: number) { }
//#endregion
//#region Slide
function setBackColor(slide: Slide, color: string)
{
    let tmpSlide = slide;
    tmpSlide.backGround = color;
    return tmpSlide;
}
function setBackImg(slide: Slide, imgPath: string)
{
    let tmpSlide = slide;
    tmpSlide.backImg = imgPath;
    return tmpSlide;
}

function addText(slide: Slide)
{
    let tmpSlide = slide;
    let newText: TextElement | null;
    tmpSlide.texts.push(newText);
    return tmpSlide;
}
function deleteText(slide: Slide, textNumber: number)
{
    let tmpSlide = slide;
    tmpSlide.texts.splice(textNumber, textNumber)
    return tmpSlide;
}

function addImg(slide: Slide, path: string)
{
    let tmpSlide = slide;
    let newImg: Img | null;
    newImg.path = path;
    tmpSlide.imgs.push(newImg);
    return tmpSlide;
}
function deleteImg(slide: Slide, imgNumber: number)
{
    let tmpSlide = slide;
    tmpSlide.imgs.splice(imgNumber, imgNumber)
    return tmpSlide;
}

function addCircle(slide: Slide, center: Point, radius: number)
{
    let tmpSlide = slide;
    let newCircle: Circle | null;
    newCircle.center = center;
    newCircle.radius = radius;
    tmpSlide.circles.push(newCircle);
    return tmpSlide;
}
function deleteCircle(slide: Slide, circleNumber: number)
{
    let tmpSlide = slide;
    tmpSlide.circles.splice(circleNumber, circleNumber)
    return tmpSlide;
}
function addRectangle(slide: Slide, leftTop, rightBottom: Point)
{
    let tmpSlide = slide;
    let newRectangle: Rectangle | null;
    newRectangle.leftTop = leftTop;
    newRectangle.rightBottom = rightBottom;
    tmpSlide.rectangles.push(newRectangle);
    return tmpSlide;
}
function deleteRectangle(slide: Slide, rectNumber: number)
{
    let tmpSlide = slide;
    tmpSlide.rectangles.splice(rectNumber, rectNumber)
    return tmpSlide;
}

function addTriangle(slide: Slide, pos1, pos2, pos3: Point)
{
    let tmpSlide = slide;
    let newTriangle: Triangle | null;
    newTriangle.pos1 = pos1;
    newTriangle.pos2 = pos2;
    newTriangle.pos3 = pos3;
    tmpSlide.triangles.push(newTriangle);
    return tmpSlide;
}
function deleteTriangle(slide: Slide, triangleNumber: number)
{
    let tmpSlide = slide;
    tmpSlide.triangles.splice(triangleNumber, triangleNumber)
    return tmpSlide;
}
//#endregion
//#region text
function setStr(text: TextElement, str: string)
{
    let tmpElement = text;
    tmpElement.str = str;
    return tmpElement;
}
function setFont(text: TextElement, str: string)
{
    let tmpElement = text;
    tmpElement.font = str;
    return tmpElement;
}
function setFontSize(text: TextElement, num: number)
{
    let tmpElement = text;
    tmpElement.fontsSize = num;
    return tmpElement;
}
function setTextLayer(text: TextElement, num: number)
{
    let tmpElement = text;
    tmpElement.layer = num;
    return tmpElement;
}
function moveText(text: TextElement, leftTop: Point)
{
    let tmpElement = text;
    let rightBottom: Point | null;
    rightBottom.x = leftTop.x + text.rightBottom.x - tmpElement.leftTop.x;
    rightBottom.y = leftTop.y + text.rightBottom.y - tmpElement.leftTop.y;
    tmpElement.leftTop = leftTop;
    tmpElement.rightBottom = rightBottom;
    return tmpElement;
}
function setLeftTop(text: TextElement, leftTop: Point)
{
    let tmpElement = text;
    tmpElement.leftTop = leftTop;
    return tmpElement;
}
function setRightBottom(text: TextElement, rightBottom: Point)
{
    let tmpElement = text;
    tmpElement.rightBottom = rightBottom;
    return tmpElement;
}
//#endregion
//#region img
function moveImg(img: Img, pos: Point)
{
    let tmpImg = img;
    tmpImg.pos = pos;
    return tmpImg;
}
function setImgWidth(img: Img, width: number)
{
    let tmpImg = img;
    tmpImg.width = width;
    return tmpImg;
}
function setImgHeight(img: Img, height: number)
{
    let tmpImg = img;
    tmpImg.height = height;
    return tmpImg;
}
function setImgLayer(img: Img, layer: number)
{
    let tmpImg = img;
    tmpImg.layer = layer;
    return tmpImg;
}
//#endregion
//#region circle
function moveCircle(circle: Circle, pos: Point)
{
    let tmpCircle = circle;
    tmpCircle.center = pos;
    return tmpCircle;
}
function setRadius(circle: Circle, radius: number)
{
    let tmpCircle = circle;
    tmpCircle.radius = radius;
    return tmpCircle;
}
function setCircleColor(circle: Circle, color: string)
{
    let tmpCircle = circle;
    tmpCircle.color = color;
    return tmpCircle;
}
function setCircleBorderColor(circle: Circle, borderColor: string)
{
    let tmpCircle = circle;
    tmpCircle.borderColor = borderColor;
    return tmpCircle;
}
function setCircleLayer(circle: Circle, layer: number)
{
    let tmpCircle = circle;
    tmpCircle.layer = layer;
    return tmpCircle;
}
//#endregion
//#region rectangle
function moveRect(rect: Rectangle, pos: Point)
{
    let tmpRect = rect;
    let rightBottom: Point | null;
    rightBottom.x = pos.x + tmpRect.rightBottom.x - tmpRect.leftTop.x;
    rightBottom.y = pos.y + tmpRect.rightBottom.y - tmpRect.leftTop.y;
    tmpRect.leftTop = pos;
    tmpRect.rightBottom = rightBottom;
    return tmpRect;
}
function setRectLeftTop(rect: Rectangle, leftTop: Point)
{
    let tmpRect = rect;
    tmpRect.leftTop = leftTop;
    return tmpRect;
}
function setRectRightBottom(rect: Rectangle, rightBottom: Point)
{
    let tmpRect = rect;
    tmpRect.rightBottom = rightBottom;
    return tmpRect;
}
function setRectColor(rect: Rectangle, color: string)
{
    let tmpRect = rect;
    tmpRect.color = color;
    return tmpRect;
}
function setRectBorderColor(rect: Rectangle, borderColor: string)
{
    let tmpRect = rect;
    tmpRect.borderColor = borderColor;
    return tmpRect;
}
function setRectLayer(rect: Rectangle, layer: number)
{
    let tmpRect = rect;
    tmpRect.layer = layer;
    return tmpRect;
}
//#endregion
//#region triangle
function moveTrian(trian: Triangle, pos: Point)
{
    let tmpTrian = trian;
    let pos2: Point | null;
    let pos3: Point | null;
    pos2.x = pos.x + tmpTrian.pos1.x - tmpTrian.pos2.x;
    pos2.y = pos.y + tmpTrian.pos1.y - tmpTrian.pos2.y;
    pos3.x = pos.x + tmpTrian.pos1.x - tmpTrian.pos3.x;
    pos3.y = pos.y + tmpTrian.pos1.y - tmpTrian.pos3.y;
    tmpTrian.pos1 = pos;
    tmpTrian.pos2 = pos2;
    tmpTrian.pos3 = pos3;
    return tmpTrian;
}
function setTrianPos1(trian: Triangle, pos: Point)
{
    let tmpTrian = trian;
    tmpTrian.pos1 = pos;
    return tmpTrian;
}
function setTrianPos2(trian: Triangle, pos: Point)
{
    let tmpTrian = trian;
    tmpTrian.pos2 = pos;
    return tmpTrian;
}
function setTrianPos3(trian: Triangle, pos: Point)
{
    let tmpTrian = trian;
    tmpTrian.pos3 = pos;
    return tmpTrian;
}   
function setTrianColor(trian: Triangle, color: string)
{
    let tmpTrian = trian;
    tmpTrian.color = color;
    return tmpTrian;
}
function setTrianBorderColor(trian: Triangle, borderColor: string)
{
    let tmpTrian = trian;
    tmpTrian.borderColor = borderColor;
    return tmpTrian;
}
function setTrianLayer(trian: Triangle, layer: number)
{
    let tmpTrian = trian;
    tmpTrian.layer = layer;
    return tmpTrian;
}
//#endregion