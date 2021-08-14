export const drawRect = (detections, ctx) => {
    detections.forEach(prediction => {

        //Getting predictions results
        const [x,y,width,height] =prediction['bbox'];
        const text = prediction['class'];

        //Setting style
        const color = 'red'
        ctx.strokeStyle = color
        ctx.font = '18px Arial'
        ctx.fillStyle = color

        //Draw rectangle
        ctx.beginPath();
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()

    })
}