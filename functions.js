function setTitle(pres:presentation, name:strring) {} 
//slides
function addSlide(pres:presentation) {} 
function deleteSlide(pres:presentation, slideNumber:number) {}
function moveSlide(pres:presentation, slideNumber, targetNumber:number) {}//чекнуть в typescript
function showSlide(pres:presentation, slideNumber:number) {}
function hideSlide(pres:presentation, slideNumber:number) {}
//slide
function setBackColor(slide:slide, color:string) {}
function setBackImg(slide:slide, imgPath:string) {}

function addText(slide:slide, leftTop, rightBottom:point) {}
function deleteText(slide:slide, textNumber:number) {}

function addImg(slide:slide, path:string, leftTop, rightBottom:point) {}
function deleteImg(slide:slide, imgNumber:number) {}

function addCircle(slide:slide, center:point, radius: number) {}
function deleteCircle(slide:slide, circleNumber:number) {}

function addRectangle(slide:slide, leftTop, rightBottom:point) {}
function deleteRectangle(slide:slide, rectNumber:number) {}

function addTriangle(slide:slide, pos1, pos2, pos3:point) {}
function deleteTriangle(slide:slide, triangleNumber:number) {}
//text
function setStr(text:text, str:string) {}
function setFont(text:text, str:string) {}
function setFontSize(text:text, str:string) {}
function setLayer(text:text, str:string) {}
function moveText(text:text, leftTop:point) {}
function setLeftTop(text:text, leftTop:point) {} 
function setRightBottom(text:text, rightBottom:point) {}
//img
function moveImg(img:img, pos:point) {}
function setWidth(img:img, width:number) {}
function setHeight(img:img, height:number) {}
function setLayer(img:img, layer:number) {}
//circle
function moveCircle(circle:circle, pos:point) {}
function setRadius(circle:circle, radius:number) {}
function setColor(circle:circle, color:string) {}
function setBorderColor(circle:circle, borderColor:string) {}
function setLayer(circle:circle, layer:number) {}
//rectangle
function moveRect(rect:rectanagle, pos:point) {}
function setWidth(rect:rectanagle, width:number) {}
function setHeight(rect:rectanagle, height:number) {}
function setColor(rect:rectanagle, color:string) {}
function setBorderColor(rect:rectanagle, borderColor:string) {}
function setLayer(rect:rectanagle, layer:number) {}
//triangle
function moveTrian(trian:triangle, pos:point) {}
function setPos1(trian:triangle, pos:point) {}
function setPos2(trian:triangle, pos:point) {}
function setPos3(trian:triangle, pos:point) {}
function setColor(trian:triangle, color:string) {}
function setBorderColor(trian:triangle, borderColor:string) {}
function setLayer(trian:triangle, layer:number) {}

