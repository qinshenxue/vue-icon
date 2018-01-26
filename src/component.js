import icons from './icons'
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },

    render (h) {
        const children = [];

        const icon = icons[this.name]

        for (let i = 0, j = icon.length; i < j; i += 2) {
            children.push(
                h(icon[i], {
                    attrs: icon[i + 1]
                })
            );
        }

        return h(
            "svg",
            {
                class: ["icon", "icon-" + this.name],
                attrs: {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            },
            children
        );
    }
};
