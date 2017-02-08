import svg from './svg';
export default function install(Vue) {
    Vue.component('vui-icon', {
        props: {
            name: {
                type: String,
                required: true
            },
            w: Number,
            h: Number
        },

        render: function(h) {
            var style = {};
            if (this.w) {
                style.width = this.w + 'px';
            }
            if (this.h) {
                style.height = this.h + 'px';
            }

            return h('svg', {
                class: ["vui-icon", "icon-" + this.name],
                style: style,
                attrs: {
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, svg[this.name].slice(0).map(p => {
                return h('path', {
                    attrs: {
                        d: p
                    }
                })
            }))
        }
    });
}