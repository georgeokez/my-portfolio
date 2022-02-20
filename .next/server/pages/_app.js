"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
;// CONCATENATED MODULE: external "aos"
const external_aos_namespaceObject = require("aos");
// EXTERNAL MODULE: ./public/data.json
var data = __webpack_require__(2870);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/_app.tsx







function MyApp({ Component , pageProps  }) {
    if (false) {}
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.NextSeo, {
                title: data/* name */.u2,
                titleTemplate: data/* name */.u2,
                defaultTitle: data/* name */.u2,
                description: data/* about */.jZ,
                canonical: "https://www.avneesh.tech/",
                openGraph: {
                    url: "https://www.avneesh.tech/",
                    title: data/* name */.u2,
                    description: data/* about */.jZ,
                    images: [
                        {
                            url: "https://www.avneesh.tech/og-image.png",
                            width: 800,
                            height: 420,
                            alt: data/* name */.u2
                        }, 
                    ],
                    profile: {
                        firstName: "Avneesh",
                        gender: "Male",
                        lastName: "Agarwal",
                        username: "avneesh0612"
                    }
                },
                twitter: {
                    handle: "@avneesh0612",
                    site: "@avneesh0612",
                    cardType: "summary_large_image"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "alternate",
                        type: "application/rss+xml",
                        title: "RSS",
                        href: "https://www.avneesh.tech/rss.xml"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "https://www.avneesh.tech/og-image.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [870], () => (__webpack_exec__(4208)));
module.exports = __webpack_exports__;

})();