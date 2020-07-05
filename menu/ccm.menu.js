/**
 * @overview ccm component for the menu
 * @author Felix Bröhl <broehl@everoo.io> 2020
 * @license The MIT License (MIT)
 */

( () => {

    const component = {

        name: 'menu',

        ccm: 'https://ccmjs.github.io/ccm/versions/ccm-25.5.3.js',

        config: {
            "helper": [ "ccm.load", "https://ccmjs.github.io/akless-components/modules/versions/helper-5.1.0.mjs" ],
            "html": [ "ccm.load", "https://modularcms.github.io/modularcms-cabrare-theme/menu/resources/html/template.html" ],
            "css": ["ccm.load",
                "https://modularcms.github.io/modularcms-cabrare-theme/cabrare_theme/resources/css/global.css",
                "https://modularcms.github.io/modularcms-cabrare-theme/menu/resources/css/style.css"
            ],
            "routing_sensor": ["ccm.instance", "https://modularcms.github.io/modularcms-components/routing_sensor/versions/ccm.routing_sensor-1.0.0.js"],
            "data_controller": [ "ccm.instance", "https://modularcms.github.io/modularcms-components/data_controller/versions/ccm.data_controller-1.0.0.js" ],
            "entryPageUrl": "/",
            "live": true
        },

        Instance: function () {
            let $;

            let _menuItems = [];
            let _startPage = null;
            let _startPageUrl = '';

            this.ready = async () => {
                $ = Object.assign( {}, this.ccm.helper, this.helper );                 // set shortcut to help functions
            };

            this.start = async () => {
                this.initMenuItems();
                const currentPageUrl = await this.data_controller.getFullPageUrl(this.websiteKey, this.page.pageKey);

                if (!this.element.querySelector('#menu-item-container')) {
                    $.setContent(this.element, $.html(this.html.main, {}));

                    // hamburger button
                    const menu = this.element.querySelector('nav');
                    const hamburger = this.element.querySelector('#hamburger-button');
                    hamburger.onclick = () => {
                        if (hamburger.classList.contains('active')) {
                            menu.classList.remove('active');
                            hamburger.classList.remove('active');
                        } else {
                            menu.classList.add('active');
                            hamburger.classList.add('active');
                        }
                    };
                }

                this.element.querySelector('#menu-item-container').innerHTML = '';
                for (let item of _menuItems) {
                    let itemElement = $.html(this.html.menuItem, item);
                    if (item.route == currentPageUrl) { // TODO base url
                        itemElement.classList.add('active');
                    }
                    $.append(this.element.querySelector('#menu-item-container'), itemElement);
                }
            };

            this.initMenuItems = async () => {
                if (_menuItems.length == 0) {
                    _startPage = await this.data_controller.getPageByUrl(this.websiteKey, this.entryPageUrl, this.live);
                    _startPageUrl = await this.data_controller.getFullPageUrl(this.websiteKey, startPage.pageKey);
                    this.addMenuPage(_startPage);
                    const pageChildren = await this.data_controller.getPageChildren(this.websiteKey, startPage.pageKey);
                    for (let pageChild of pageChildren) {
                        this.addMenuPage(pageChild);
                    }
                }
            };

            this.addMenuPage = (page) => {
                _menuItems.push({
                    text: page.title,
                    route: (_startPageUrl == '/' ? '' : _startPageUrl) + page.urlPart
                });
            };
        }

    };

    let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||["latest"])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){window.ccm[c].component(component);document.head.removeChild(a)};a.src=component.ccm.url}
} )();