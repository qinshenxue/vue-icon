import icons from './feather-icons'
export default  {
    props: {
        name: {
            type: String,
            required: true
        },
        baseClass: {
            type: String,
            default: 'icon'
        },
        classPrefix: {
            type: String,
            default: 'icon-'
        }
    },
    render (h) {
        const elms = [];

        const icon = icons[this.name]

        const shapeNameMap = {
            p: 'path',
            r: 'rect',
            c: 'circle',
            e: 'ellipse',
            l: 'line',
            g: 'polygon',
            b: 'polyline'
        }

        if (icon) {
            for (let i = 0, j = icon.length; i < j; i += 2) {

                var attrs = {}
                var shortName = icon[i]
                var attrVal = icon[i + 1]
                if (['r', 'c', 'e', 'l'].indexOf(shortName) > -1) {
                    attrVal = attrVal.split(' ')
                }
                switch (shortName) {
                    case 'p':
                        attrs.d = attrVal
                        break
                    case 'r':
                        attrs = {
                            x: attrVal[0],
                            y: attrVal[1],
                            width: attrVal[2],
                            height: attrVal[3]
                        }
                        if (attrVal[4] !== undefined) {
                            attrs.rx = attrVal[4]
                            attrs.ry = attrVal[5]
                        }
                        break
                    case 'c':
                        attrs = {
                            cx: attrVal[0],
                            cy: attrVal[1],
                            r: attrVal[2]
                        }
                        break
                    case 'e':
                        attrs = {
                            cx: attrVal[0],
                            cy: attrVal[1],
                            rx: attrVal[2],
                            ry: attrVal[3]
                        }
                        break
                    case 'l':
                        attrs = {
                            x1: attrVal[0],
                            x2: attrVal[1],
                            y1: attrVal[2],
                            y2: attrVal[3]
                        }
                        break
                    case 'g':
                    case 'b':
                        attrs.points = attrVal
                        break
                }


                elms.push(
                    h(shapeNameMap[icon[i]], {
                        attrs: attrs
                    })
                );
            }
        }

        return h(
            "svg",
            {
                class: [this.baseClass, this.classPrefix + this.name],
                attrs: {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            },
            elms
        );
    }
}
