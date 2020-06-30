/**
 * @overview ccm component for the article layout
 * @author Felix Bröhl <broehl@everoo.io> 2020
 * @license The MIT License (MIT)
 */

( () => {

    const component = {

        name: 'article_layout',

        version: [1,0,0],

        ccm: 'https://ccmjs.github.io/ccm/versions/ccm-25.5.3.js',

        config: {
            "shadow": "open",
            "html": [ "ccm.load", "https://modularcms.github.io/modularcms-cabrare-theme/article_layout/resources/html/layout.html" ],
            "css": [ "ccm.load", "https://modularcms.github.io/modularcms-cabrare-theme/article_layout/resources/css/layout.css" ],
            "layout_core": [ "ccm.instance", "https://modularcms.github.io/modularcms-components/layout_core/versions/ccm.layout_core-1.0.0.js" ],
            // "layout": [...]
        },

        Instance: function () {

            this.start = async () => {
                this.theme_core.initContent({});
            };

        }

    };

    let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||["latest"])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){window.ccm[c].component(component);document.head.removeChild(a)};a.src=component.ccm.url}
} )();