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
        data() {
            return {
                paths: {
                    close: 'M9,8l5.8-5.8c0.3-0.3,0.3-0.7,0-1c-0.3-0.3-0.7-0.3-1,0L8,7L2.2,1.2c-0.3-0.3-0.7-0.3-1,0C1,1.5,1,1.9,1.3,2.2L7,8l-5.8,5.8  c-0.3,0.3-0.3,0.7,0,1c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2L8,9l5.8,5.8c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2  c0.3-0.3,0.3-0.7,0-1L9,8L9,8z',
                    add: 'M14.3,7.3H8.7V1.7C8.7,1.3,8.4,1,8,1S7.3,1.3,7.3,1.7v5.6H1.7C1.3,7.3,1,7.6,1,8s0.3,0.7,0.7,0.7h5.6v5.6  C7.3,14.7,7.6,15,8,15s0.7-0.3,0.7-0.7V8.7h5.6C14.7,8.7,15,8.4,15,8S14.7,7.3,14.3,7.3z',
                    back: 'M11.3,14.9c-0.2,0-0.3,0-0.4-0.2L4.3,8.3C4.2,8.2,4.1,8.1,4.1,7.9c0-0.2,0.1-0.3,0.2-0.4l6.6-6.4c0.2-0.2,0.6-0.2,0.8,0  s0.2,0.6,0,0.8l-6.2,6l6.2,6c0.2,0.2,0.2,0.6,0,0.8C11.6,14.9,11.4,14.9,11.3,14.9z'
                }
            }
        },
        computed: {
            path: function() {
                return this.paths[this.name];
            }
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
                    viewBox: "0 0 16 16",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [h('path', {
                attrs: {
                    d: this.path
                }
            })])
        }
    });
}