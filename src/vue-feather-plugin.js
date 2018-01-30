import feather from './vue-feather'
/**
 * Vue plugins
 * @param Vue
 * @param componentName  specify the component name
 */
export default function install(Vue, componentName) {
    Vue.component(typeof componentName === 'string' ? componentName : 'icon', feather)
}
