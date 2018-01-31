import feather from './vue-feather'
/**
 * Vue plugins
 * @param Vue
 * @param componentName  specify the component name
 */
export default function install(Vue, options) {

    var type = Object.prototype.toString.call(options)
    if (type === '[object String]') {
        Vue.component(options, feather)
    } else if (type === '[object Object]') {
        if (options.props) {
            if (options.props.baseClass) {
                feather.props.baseClass = options.props.baseClass
            }
            if (options.props.classPrefix) {
                feather.props.classPrefix = options.props.classPrefix
            }
        }
        feather.mixins = [options]
        Vue.component(options.name || 'icon', feather)
    } else {
        Vue.component('icon', feather)
    }

}
