type AppModel = {
    readonly presentation: Presentation,
    selection: SelectionType,
    history: History
}

type History = {
    current: number,
    presStates: Array<Presentation>
}

type Presentation = {
    readonly title: string,
    readonly slides: Array<Slide>,
}

type SelectionType = {
    slideIDs: number[],
    elementIDs: number[],
    lastSlideId: number,
    lastElementId: number,
}

type Slide = {
    readonly "ID": number,
    readonly "backGround": BackGround,
    readonly "texts": Array<TextElement>,
    readonly "imgs": Array<Img>,
    readonly "circles": Array<Circle>,
    readonly "rectangles": Array<Rectangle>,
    readonly "triangles": Array<Triangle>
}

type BackGround = {
    readonly "color": string,
    readonly "backImg": string
}

type TextElement = {
    readonly "id": number,
    readonly "layer": number,
    readonly "str": string,
    readonly "font": string,
    readonly "fontSize": number,
    readonly "leftTop": Point,
    readonly "rightBottom": Point
}

type Point = {
    readonly "x": number,
    readonly "y": number
}

type Img = {
    readonly "id": number,
    readonly "layer": number,
    readonly "imgData": string,
    readonly "position": Point,
    readonly "width": number,
    readonly "height": number
}

type Circle = {
    readonly "id": number,
    readonly "layer": number,
    readonly "radius": number,
    readonly "position": Point,
    readonly "color": string,
    readonly "borderColor": string
}

type Rectangle = {
    readonly "id": number,
    readonly "layer": number,
    readonly "leftTop": Point,
    readonly "rightBottom": Point,
    readonly "color": string,
    readonly "borderColor": string
}

type Triangle = {
    readonly "id": number,
    readonly "layer": number,
    readonly "position1": Point,
    readonly "position2": Point,
    readonly "position3": Point,
    readonly "color": string,
    readonly "borderColor": string
}

export {
    AppModel, History, Presentation, SelectionType,
    BackGround, TextElement, Point, Img,
    Circle, Rectangle, Triangle, Slide
}