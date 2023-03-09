"use strict";
exports.id = 879;
exports.ids = [879];
exports.modules = {

/***/ 9714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BlankSpace = ({ backgroundColor  })=>{
    const sectionBackground = backgroundColor ? backgroundColor.hex : "primary.main";
    const sectionSX = {
        backgroundColor: sectionBackground,
        height: "100px"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: sectionSX
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlankSpace);


/***/ }),

/***/ 4101:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_sections_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8281);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_sections_basic__WEBPACK_IMPORTED_MODULE_2__]);
src_sections_basic__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const DynamicGenericSections = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: props.sections.length > 0 && props.sections.map((section, index)=>{
            if (section.content == null) return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(src_sections_basic__WEBPACK_IMPORTED_MODULE_2__/* .BlankSpace */ .xW, {
                ...section,
                key: index
            });
            switch(section.type){
                case "heroImage":
                    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(src_sections_basic__WEBPACK_IMPORTED_MODULE_2__/* .HeroImage */ .ZG, {
                        ...section,
                        key: index
                    });
                case "sectionText":
                    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(src_sections_basic__WEBPACK_IMPORTED_MODULE_2__/* .SectionText */ .r4, {
                        ...section,
                        key: index
                    });
                case "sectionTextImage":
                    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(src_sections_basic__WEBPACK_IMPORTED_MODULE_2__/* .SectionTextImage */ .jF, {
                        ...section,
                        key: index
                    });
                default:
                    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(src_sections_basic__WEBPACK_IMPORTED_MODULE_2__/* .BlankSpace */ .xW, {
                        ...section,
                        key: index
                    });
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicGenericSections);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 174:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1851);
/* harmony import */ var integrations_sanityImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(817);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_core_components__WEBPACK_IMPORTED_MODULE_2__]);
src_core_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const HeroImage = ({ content , backgroundColor  })=>{
    const reducedContent = content.reduce((acc, cur)=>{
        acc = {
            ...acc,
            ...cur
        };
        return acc;
    }, {});
    const image = reducedContent.image;
    const imageBuilder = image ? (0,integrations_sanityImage__WEBPACK_IMPORTED_MODULE_3__/* .urlFor */ .u)(image).auto("format").fit("max") : null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "hero-image",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "hero-text",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                component: "div",
                sx: {
                    top: 0,
                    left: 0,
                    zIndex: 11,
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    backgroundColor: backgroundColor
                },
                children: imageBuilder ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components__WEBPACK_IMPORTED_MODULE_2__/* .SanityImage */ .dJ, {
                    imageBuilder: imageBuilder
                }) : null
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroImage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1421:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_core_components_animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9539);
/* harmony import */ var integrations_sanityImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(817);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, src_core_components_animate__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, src_core_components_animate__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("div")(({ theme  })=>({
        overflow: "hidden",
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(5),
        [theme.breakpoints.up("md")]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(5)
        }
    }));
const SectionText = ({ content , backgroundColor  })=>{
    const reducedContent = content.reduce((acc, cur)=>{
        acc = {
            ...acc,
            ...cur
        };
        return acc;
    }, {});
    const image = reducedContent.image;
    const imageBuilder = image ? (0,integrations_sanityImage__WEBPACK_IMPORTED_MODULE_5__/* .urlFor */ .u)(image).auto("format").fit("max") : null;
    const sectionBackground = backgroundColor ? backgroundColor.hex : "#fff";
    const sectionColor = backgroundColor ? "primary.contrastText" : "primary.burgundy";
    const sectionSX = {
        backgroundColor: sectionBackground,
        color: sectionColor
    };
    const { heading , headingColor , text , textColor ,  } = reducedContent;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        sx: sectionSX,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_animate__WEBPACK_IMPORTED_MODULE_4__/* .MotionViewport */ .DG, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
                maxWidth: "lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div, {
                    variants: (0,src_core_components_animate__WEBPACK_IMPORTED_MODULE_4__/* .varFade */ .EU)().inUp,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            sx: {
                                my: 10,
                                mx: "auto",
                                maxWidth: 750,
                                position: "relative"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                sx: {
                                    width: "160px",
                                    height: "200px",
                                    position: "absolute",
                                    display: "inline-block",
                                    top: 0,
                                    right: "50%",
                                    transform: "translateY(-100%)"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    src: "/bead_graphic.svg",
                                    alt: "ribbon"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            sx: {
                                my: 3,
                                mx: "auto",
                                maxWidth: 750,
                                color: "text.primary"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                    variant: "h2",
                                    sx: {
                                        py: 2,
                                        color: headingColor?.hex
                                    },
                                    children: heading
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                    variant: "body1",
                                    sx: {
                                        fontWeight: "800",
                                        color: textColor?.hex
                                    },
                                    children: text
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionText);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9756:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_core_components_animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9539);
/* harmony import */ var src_core_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1851);
/* harmony import */ var integrations_sanityImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(817);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, src_core_components_animate__WEBPACK_IMPORTED_MODULE_4__, src_core_components__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, src_core_components_animate__WEBPACK_IMPORTED_MODULE_4__, src_core_components__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("div")(({ theme  })=>({
        overflow: "hidden",
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(5),
        [theme.breakpoints.up("md")]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(5)
        }
    }));
const SectionTextImage = ({ content , backgroundColor  })=>{
    const reducedContent = content.reduce((acc, cur)=>{
        if (cur.type == "hoopImage") {
            if (!acc.hoopImages) {
                acc.hoopImages = [];
            }
            acc.hoopImages.push(cur);
        } else {
            acc = {
                ...acc,
                ...cur
            };
        }
        return acc;
    }, {});
    const image = reducedContent.image;
    const backgroundImageUrl = image ? (0,integrations_sanityImage__WEBPACK_IMPORTED_MODULE_6__/* .urlFor */ .u)(image).url() : null;
    const sectionBackground = backgroundColor ? backgroundColor.hex : "primary.main";
    const sectionColor = backgroundColor ? "primary.contrastText" : "primary.burgundy";
    const sectionSX = {
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : null,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: sectionBackground,
        color: sectionColor
    };
    const { heading , headingColor , text , textColor , hoopImages ,  } = reducedContent;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        sx: sectionSX,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_animate__WEBPACK_IMPORTED_MODULE_4__/* .MotionViewport */ .DG, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
                maxWidth: "lg",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div, {
                        variants: (0,src_core_components_animate__WEBPACK_IMPORTED_MODULE_4__/* .varFade */ .EU)().inUp,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            sx: {
                                my: 3,
                                mx: "auto",
                                maxWidth: 750
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                    variant: "h2",
                                    sx: {
                                        py: 2,
                                        color: headingColor
                                    },
                                    children: heading
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                    variant: "body1",
                                    sx: {
                                        fontWeight: "800",
                                        color: textColor
                                    },
                                    children: text
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                        direction: "row",
                        spacing: 12,
                        sx: {
                            justifyContent: "center",
                            my: 5
                        },
                        children: hoopImages && hoopImages.map((hoopimage, index)=>{
                            if (!hoopimage.image) return null;
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components__WEBPACK_IMPORTED_MODULE_5__/* .HoopImage */ .Zt, {
                                ...hoopimage
                            }, `hi${index}`);
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTextImage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8281:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZG": () => (/* reexport safe */ _HeroImage__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "aN": () => (/* reexport safe */ _DynamicGenericSections__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "jF": () => (/* reexport safe */ _SectionTextImage__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "r4": () => (/* reexport safe */ _SectionText__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "xW": () => (/* reexport safe */ _BlankSpace__WEBPACK_IMPORTED_MODULE_2__.Z)
/* harmony export */ });
/* harmony import */ var _HeroImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var _SectionText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1421);
/* harmony import */ var _BlankSpace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9714);
/* harmony import */ var _SectionTextImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9756);
/* harmony import */ var _DynamicGenericSections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HeroImage__WEBPACK_IMPORTED_MODULE_0__, _SectionText__WEBPACK_IMPORTED_MODULE_1__, _SectionTextImage__WEBPACK_IMPORTED_MODULE_3__, _DynamicGenericSections__WEBPACK_IMPORTED_MODULE_4__]);
([_HeroImage__WEBPACK_IMPORTED_MODULE_0__, _SectionText__WEBPACK_IMPORTED_MODULE_1__, _SectionTextImage__WEBPACK_IMPORTED_MODULE_3__, _DynamicGenericSections__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ groqPageQuery)
/* harmony export */ });
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1360);
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_0__);

const groqPageQuery = (groq__WEBPACK_IMPORTED_MODULE_0___default())`
    *[ _type == "page" &&
    !(_id in path('drafts.**')) &&
    slug.current == $slug][0]{
      title,
      description,
      sections[]->{
        'type': sectionType,
        title,
        description,
        backgroundColor,
        content[] -> {
          _type == 'sectionImage' => {
            'type': _type,
            title,
            image
          },
          _type == 'sectionHeading' => {
            'type': _type,
            title,
            heading,
            headingColor
          },
          _type == 'sectionText' => {
            'type': _type,
            title,
            text,
            textColor
          },
          _type == 'hoopImage' => {
            'type': _type,
            title,
            headingOverlay,
            textOverlay,
            image,
            backgroundColor
          }
        }
      }
    }
    `;


/***/ })

};
;