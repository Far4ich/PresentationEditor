import {
    AppModel, History, Presentation, SelectionType,
    BackGround, TextElement, Point, Img,
    Circle, Rectangle, Triangle, Slide
} from './types';

function setTitle(model: AppModel, title: string): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            title: title
        }
    }
}
function GetSlideId(selection: SelectionType): number {
    selection.lastSlideId += 1;
    return selection.lastSlideId;
}
function GetElementsId(selection: SelectionType): number {
    selection.lastElementId += 1;
    return selection.lastElementId;
}
//#region slides
function createNewSlide(selection: SelectionType): Slide {
    return {
        ID: GetSlideId(selection),
        backGround: {
            backImg: '',
            color: '#FFFFFF',
        },
        texts: [],
        imgs: [],
        circles: [],
        rectangles: [],
        triangles: []
    };
}
function addSlide(model: AppModel): AppModel {
    const newSlide = createNewSlide(model.selection)
    const slides = [
        ...model.presentation.slides.slice(0, model.selection.slideIDs[-1]),
        newSlide,
        ...model.presentation.slides.slice(model.selection.slideIDs[-1])
    ]
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: slides
        }
    };
}
function deleteSlides(model: AppModel): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(element => {
                if (!model.selection.slideIDs.includes(element.ID)) {
                    return element
                }
            })
        }
    };
}
 function moveSlide(model: AppModel, targetNumber: number) {
     const slides = [
         ...model.presentation.slides.slice(0, targetNumber).map(element => {
             if (model.selection.slideIDs.find(item => { item == element.ID }) === undefined) {
                 return element
             }
         }),
         ...model.presentation.slides.map(element => {
             if (model.selection.slideIDs.find(item => { item == element.ID }) !== undefined) {
                 return element
             }
         }),
         ...model.presentation.slides.slice(targetNumber).map(element => {
             if (model.selection.slideIDs.find(item => { item == element.ID }) === undefined) {
                 return element
             }
         })
     ]
     return {
         ...model,
         presentation: {
             ...model.presentation,
             slides: slides
         }
     };
 }
 //#endregion
//#region slide
function setBackGround(model: AppModel, bg: BackGround): AppModel {
    const selection: SelectionType = model.selection
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == selection.slideIDs[0]) {
                    return {
                        ...slide,
                        backGround: bg
                    }
                }
                return slide
            })
        }
    };
}
function setBackColor(model: AppModel, color: string): AppModel {
    const selection: SelectionType = model.selection
     return {
         ...model,
         presentation: {
             ...model.presentation,
             slides: model.presentation.slides.map(slide => {
                     if (slide.ID == selection.slideIDs[0]) {
                         return {
                             ...slide,
                             backGround: {
                                 ...slide.backGround,
                                 color: color
                             }
                         }
                     }
                     return slide
                 })
         }
     };
 }
function setBackImg(model: AppModel, imgData: string): AppModel  {
    const selection: SelectionType = model.selection
     return {
         ...model,
         presentation: {
             ...model.presentation,
             slides: model.presentation.slides.map(slide => {
                 if (slide.ID == selection.slideIDs[0]) {
                     return {
                         ...slide,
                         backGround: {
                             ...slide.backGround,
                             backImg: imgData
                         }
                     }
                 }
                 return slide
             })
         }
         
     };
 }

function addText(model: AppModel): AppModel {
    const selection: SelectionType = model.selection
    const newText: TextElement = {
        id: GetElementsId(selection),
        layer: 0,
        str: '',
        font: 'Arial',
        fontSize: 14,
        leftTop:
        {
            x: 0,
            y: 0
        },
        rightBottom:
        {
            x: 20,
            y: 20
        }
    }
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == selection.slideIDs[0]) {
                    return {
                        ...slide,
                        texts: [
                            ...slide.texts.slice(0),
                            newText
                        ]
                    }
                }
                return slide
            })
        }
         
    };
 }

function addImg(model: AppModel, path: string): AppModel {
    const selection: SelectionType = model.selection
    const newImg: Img = {
        id: GetElementsId(selection),
        layer: 0,
        imgData: path,
        position:
        {
            x: 0,
            y: 0
        },
        width: 250,
        height: 250
     }
     return {
         ...model,
         presentation: {
             ...model.presentation,
             slides: model.presentation.slides.map(slide => {
                 if (slide.ID == selection.slideIDs[0]) {
                     return {
                         ...slide,
                         imgs: [
                             ...slide.imgs.slice(0),
                             newImg
                         ]
                     }
                 }
                 return slide
             })
         }

     };
 }

function addCircle(model: AppModel, center: Point, radius: number): AppModel  {
    const selection: SelectionType = model.selection
    const newCircle: Circle = {
        id: GetElementsId(selection),
        layer: 0,
        radius: radius,
        position: center,
        color: 'ffffff',
        borderColor: '000000'
     }
     return {
         ...model,
         presentation: {
             ...model.presentation,
             slides: model.presentation.slides.map(slide => {
                 if (slide.ID == selection.slideIDs[0]) {
                     return {
                         ...slide,
                         circles: [
                             ...slide.circles.slice(0),
                             newCircle
                         ]
                     }
                 }
                 return slide
             })
         }

     };
 }
 function addRectangle(model: AppModel, leftTop, rightBottom: Point): AppModel  {
    const selection: SelectionType = model.selection
    const newRectangle: Rectangle = {
        id: GetElementsId(selection),
        layer: 0,
        leftTop: leftTop,
        rightBottom: rightBottom,
        color: 'ffffff',
        borderColor: '000000'
    }
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == selection.slideIDs[0]) {
                    return {
                        ...slide,
                        rectangles: [
                            ...slide.rectangles.slice(0),
                            newRectangle
                        ]
                    }
                }
                return slide
            })
        }

    };
}

function addTriangle(model: AppModel, pos1, pos2, pos3: Point): AppModel  {
    const selection: SelectionType = model.selection
    const newTriangle: Triangle = {
        id: GetElementsId(selection),
        layer: 0,
        position1: pos1,
        position2: pos2,
        position3: pos3,
        color: 'ffffff',
        borderColor: '000000'
    }
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == selection.slideIDs[0]) {
                    return {
                        ...slide,
                        triangles: [
                            ...slide.triangles.slice(0),
                            newTriangle
                        ]
                    }
                }
                return slide
            })
        }

    };
}
function deleteElements(model: AppModel): AppModel {
    const selection: SelectionType = model.selection
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == selection.slideIDs[0]) {
                    return {
                        ...slide,
                        circles: slide.circles.map(element => {
                            if (!selection.elementIDs.includes(element.id)) {
                                return element
                            }
                        }),
                        rectangles: slide.rectangles.map(element => {
                            if (!selection.elementIDs.includes(element.id)) {
                                return element
                            }
                        }),
                        texts: slide.texts.map(element => {
                            if (!selection.elementIDs.includes(element.id)) {
                                return element
                            }
                        }),
                        triangles: slide.triangles.map(element => {
                            if (!selection.elementIDs.includes(element.id)) {
                                return element
                            }
                        }),
                        imgs: slide.imgs.map(element => {
                            if (!selection.elementIDs.includes(element.id)) {
                                return element
                            }
                        }),
                    }
                }
                return slide
            })
        }
    };
 }
 //#endregion
//#region text
function setStr(model: AppModel, str: string): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        texts: slide.texts.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    str: str
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
                return slide
            })
        }
    }
}
function setFont(model: AppModel, font: string): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        texts: slide.texts.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    font: font
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
                return slide
            })
        }
    }
}
function setFontSize(model: AppModel, num: number): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        texts: slide.texts.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    fontSize: num
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
                return slide
            })
        }
    }
}
function setTextLayer(model: AppModel, num: number): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        texts: slide.texts.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    layer: num
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
                return slide
            })
        }
    }
}
function moveText(model: AppModel, leftTop, rightBottom: Point): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        texts: slide.texts.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    leftTop: leftTop,
                                    rightBottom: rightBottom
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
                return slide
            })
        }
    }
}
function setLeftTop(model: AppModel, leftTop: Point): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        texts: slide.texts.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    leftTop: leftTop,
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
                return slide
            })
        }
    }
}
function setRightBottom(model: AppModel, rightBottom: Point): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        texts: slide.texts.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    rightBottom: rightBottom
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
                return slide
            })
        }
    }
}
//#endregion
//#region img
function moveImg(model: AppModel, pos: Point): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        imgs: slide.imgs.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    position: pos
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
function setImgWidth(model: AppModel, width: number): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        imgs: slide.imgs.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    width: width
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
function setImgHeight(model: AppModel, height: number): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        imgs: slide.imgs.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    height: height
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
function setImgLayer(model: AppModel, layer: number): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        imgs: slide.imgs.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    layer: layer
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
//#endregion
//#region circle
function moveCircle(model: AppModel, pos: Point): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        circles: slide.circles.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    position: pos
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
function setRadius(model: AppModel, radius: number): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        circles: slide.circles.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    radius: radius
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
function setCircleColor(model: AppModel, color: string): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        circles: slide.circles.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    color: color
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
function setCircleBorderColor(model: AppModel, borderColor: string): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        circles: slide.circles.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    borderColor: borderColor
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
function setCircleLayer(model: AppModel, layer: number): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        circles: slide.circles.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    layer: layer
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
//#endregion
//#region rectangle
function moveRect(model: AppModel, leftTop, rightBottom: Point): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        rectangles: slide.rectangles.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    leftTop: leftTop,
                                    rightBottom: rightBottom
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
function setRectLeftTop(model: AppModel, leftTop: Point): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        rectangles: slide.rectangles.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    leftTop: leftTop
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
function setRectRightBottom(model: AppModel, rightBottom: Point): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        rectangles: slide.rectangles.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    rightBottom: rightBottom
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
function setRectColor(model: AppModel, color: string): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        rectangles: slide.rectangles.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    color: color
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
function setRectBorderColor(model: AppModel, borderColor: string): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        rectangles: slide.rectangles.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    borderColor: borderColor
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
function setRectLayer(model: AppModel, layer: number): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        rectangles: slide.rectangles.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    layer: layer
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
//#endregion
//#region triangle
function moveTrian(model: AppModel, pos1, pos2, pos3: Point): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        triangles: slide.triangles.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    position1: pos1,
                                    position2: pos2,
                                    position3: pos3
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
function setTrianPos1(model: AppModel, pos: Point): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        triangles: slide.triangles.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    position1: pos
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
function setTrianPos2(model: AppModel, pos: Point): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        triangles: slide.triangles.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    position2: pos
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
function setTrianPos3(model: AppModel, pos: Point): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        triangles: slide.triangles.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    position3: pos
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
function setTrianColor(model: AppModel, color: string): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        triangles: slide.triangles.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    color: color
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
function setTrianBorderColor(model: AppModel, borderColor: string): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        triangles: slide.triangles.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    borderColor: borderColor
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
function setTrianLayer(model: AppModel, layer: number): AppModel {
    return {
        ...model,
        presentation: {
            ...model.presentation,
            slides: model.presentation.slides.map(slide => {
                if (slide.ID == model.selection.slideIDs[0]) {
                    return {
                        ...slide,
                        triangles: slide.triangles.map(element => {
                            if (element.id == model.selection.elementIDs[0]) {
                                return {
                                    ...element,
                                    layer: layer
                                }
                            }
                            else {
                                return element
                            }
                        })
                    }
                }
            })
        }
    }
}
//#endregion
//#region History
function postToHistory(model: AppModel, history: History): void {
    model.history.presStates.push(model.presentation);
    model.history.current += 1;
}
function undo(model: AppModel, history:History): AppModel {
    if (model.history.current > 0) {
        model.history.current -= 1
        return {
            ...model,
            presentation: {
                ...model.history.presStates[model.history.current]
            }
        }
    }    
}
function redo(model: AppModel, history:History): AppModel {
    if (model.history.current < model.history.presStates.length - 1) {
        model.history.current += 1
        return {
            ...model,
            presentation: {
                ...model.history.presStates[model.history.current]
            }
        }
    }    
}
//#endregion