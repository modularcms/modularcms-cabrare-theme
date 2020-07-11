/**
 * @overview ccm component for the articles list layout
 * @author Felix Bröhl <broehl@everoo.io> 2020
 * @license The MIT License (MIT)
 */

( () => {

    const component = {

        name: 'articles_list_layout',

        ccm: 'https://ccmjs.github.io/ccm/versions/ccm-25.5.3.min.js',

        config: {
            "helper": [ "ccm.load", "https://ccmjs.github.io/akless-components/modules/versions/helper-5.1.0.mjs" ],
            "html": [ "ccm.load", "https://modularcms.github.io/modularcms-cabrare-theme/articles_list_layout/resources/html/template.html" ],
            "css": ["ccm.load",
                "https://modularcms.github.io/modularcms-cabrare-theme/cabrare_theme/resources/css/global.css",
                "https://modularcms.github.io/modularcms-cabrare-theme/articles_list_layout/resources/css/style.css"
            ],
            "routing_sensor": ["ccm.instance", "https://modularcms.github.io/modularcms-components/routing_sensor/versions/ccm.routing_sensor-1.0.0.js"],
            "core": [ "ccm.instance", "https://modularcms.github.io/modularcms-components/theme_component_core/versions/ccm.theme_component_core-1.0.0.min.js" ]
        },

        Instance: function () {
            let $;

            this.ready = async () => {
                $ = Object.assign( {}, this.ccm.helper, this.helper );                 // set shortcut to help functions
            };

            this.start = async () => {
                await this.update();
            };

            this.update = async () => {
                this.core.initContent(this.html.main);
            };

        }

    };

    let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||["latest"])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){window.ccm[c].component(component);document.head.removeChild(a)};a.src=component.ccm.url}
} )();