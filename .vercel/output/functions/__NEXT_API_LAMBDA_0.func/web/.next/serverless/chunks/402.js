"use strict";
exports.id = 402;
exports.ids = [402];
exports.modules = {

/***/ 8898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1097);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);

const projectId = "uimvg3pl";
const dataset = "production";
const apiVersion = "v2021-10-21";
const apiKey = process.env.SANITY_API_DEPLOY_STUDIO;
const client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
    projectId,
    dataset,
    apiVersion,
    token: apiKey,
    useCdn: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);


/***/ }),

/***/ 817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ urlFor)
/* harmony export */ });
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8898);


const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_0___default()(_sanity_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
function urlFor(source) {
    const url = builder.image(source);
    return url;
}


/***/ }),

/***/ 4524:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5480);
/* harmony import */ var src_core_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1851);
/* harmony import */ var _pattern__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, src_hooks__WEBPACK_IMPORTED_MODULE_5__, src_core_components__WEBPACK_IMPORTED_MODULE_6__, _pattern__WEBPACK_IMPORTED_MODULE_7__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, src_hooks__WEBPACK_IMPORTED_MODULE_5__, src_core_components__WEBPACK_IMPORTED_MODULE_6__, _pattern__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// @mui


// hooks

// components

// pattern

// ----------------------------------------------------------------------
const styleIcon = {
    width: 40,
    height: 40,
    color: "common.black"
};
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box)(()=>({
        width: 564,
        height: 564,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
    }));
// ----------------------------------------------------------------------
function CareerHeroIllustration({ ...other }) {
    const theme = useTheme();
    const { offsetX , offsetY , onMouseMoveHandler , onMouseLeaveHandler  } = useHoverParallax();
    const BLUE = theme.palette.info.main;
    const GREEN = theme.palette.success.main;
    const YELLOW = theme.palette.warning.main;
    return /*#__PURE__*/ _jsxs(RootStyle, {
        component: m.div,
        onMouseMove: onMouseMoveHandler,
        onMouseLeave: onMouseLeaveHandler,
        ...other,
        children: [
            /*#__PURE__*/ _jsxs(_Fragment, {
                children: [
                    /*#__PURE__*/ _jsx(Character, {
                        front: true,
                        sx: {
                            position: "absolute",
                            bottom: 16,
                            zIndex: 10,
                            width: 300
                        }
                    }),
                    /*#__PURE__*/ _jsx(Box, {
                        sx: {
                            top: 170,
                            zIndex: 9,
                            position: "absolute",
                            transform: "translateX(-125px) rotate(-15deg)"
                        },
                        children: /*#__PURE__*/ _jsx(m.div, {
                            style: {
                                y: offsetY(-50)
                            },
                            children: /*#__PURE__*/ _jsx(Label, {
                                text: "Accounting",
                                icon: /*#__PURE__*/ _jsx(Image, {
                                    alt: "accounting",
                                    src: "https://zone-assets-api.vercel.app/assets/icons/ic_accounting.svg",
                                    sx: {
                                        width: 48,
                                        height: 48
                                    }
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx(Character, {
                        sx: {
                            position: "absolute",
                            bottom: 16,
                            zIndex: 8,
                            width: 300
                        }
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(Box, {
                sx: {
                    position: "absolute",
                    transform: "translate(175px, 90px) rotate(15deg)"
                },
                children: /*#__PURE__*/ _jsx(m.div, {
                    style: {
                        x: offsetX(80),
                        y: offsetY(80)
                    },
                    children: /*#__PURE__*/ _jsx(Label, {
                        text: "Banking",
                        icon: /*#__PURE__*/ _jsx(Image, {
                            alt: "banking",
                            src: "https://zone-assets-api.vercel.app/assets/icons/ic_banking_currency.svg",
                            sx: {
                                width: 48,
                                height: 48
                            }
                        })
                    })
                })
            }),
            /*#__PURE__*/ _jsx(Box, {
                sx: {
                    position: "absolute",
                    transform: "translate(170px, -110px) rotate(15deg)"
                },
                children: /*#__PURE__*/ _jsx(m.div, {
                    style: {
                        y: offsetY(80)
                    },
                    children: /*#__PURE__*/ _jsx(Label, {
                        text: "Health Care",
                        icon: /*#__PURE__*/ _jsx(Image, {
                            alt: "health care",
                            src: "https://zone-assets-api.vercel.app/assets/icons/ic_health_care.svg",
                            sx: {
                                width: 48,
                                height: 48
                            }
                        })
                    })
                })
            }),
            /*#__PURE__*/ _jsx(Box, {
                sx: {
                    zIndex: 10,
                    bottom: 160,
                    position: "absolute",
                    transform: "translateX(-110px)"
                },
                children: /*#__PURE__*/ _jsx(m.div, {
                    style: {
                        y: offsetY(-60)
                    },
                    children: /*#__PURE__*/ _jsx(Label, {
                        text: "Software",
                        icon: /*#__PURE__*/ _jsx(Image, {
                            alt: "software development",
                            src: "https://zone-assets-api.vercel.app/assets/icons/ic_software_development.svg",
                            sx: {
                                width: 48,
                                height: 48
                            }
                        })
                    })
                })
            }),
            /*#__PURE__*/ _jsx(Box, {
                sx: {
                    position: "absolute",
                    top: 16,
                    transform: "translateX(20px)"
                },
                children: /*#__PURE__*/ _jsx(m.div, {
                    style: {
                        x: offsetX(50),
                        y: offsetY(50)
                    },
                    children: /*#__PURE__*/ _jsx(Icon, {
                        color: YELLOW,
                        content: /*#__PURE__*/ _jsx(SvgIconStyle, {
                            src: "https://zone-assets-api.vercel.app/assets/icons/ic_creativity.svg",
                            sx: {
                                ...styleIcon
                            }
                        })
                    })
                })
            }),
            /*#__PURE__*/ _jsx(Box, {
                sx: {
                    position: "absolute",
                    bottom: 16,
                    transform: "translateX(40px)"
                },
                children: /*#__PURE__*/ _jsx(m.div, {
                    style: {
                        x: offsetX(-60),
                        y: offsetY(60)
                    },
                    children: /*#__PURE__*/ _jsx(Icon, {
                        color: GREEN,
                        content: /*#__PURE__*/ _jsx(SvgIconStyle, {
                            src: "https://zone-assets-api.vercel.app/assets/icons/ic_marketing_bullhorn.svg",
                            sx: {
                                ...styleIcon
                            }
                        })
                    })
                })
            }),
            /*#__PURE__*/ _jsx(Box, {
                sx: {
                    position: "absolute",
                    bottom: 220,
                    transform: "translateX(-220px)"
                },
                children: /*#__PURE__*/ _jsx(m.div, {
                    style: {
                        x: offsetX(70),
                        y: offsetY(70)
                    },
                    children: /*#__PURE__*/ _jsx(Icon, {
                        color: BLUE,
                        content: /*#__PURE__*/ _jsx(SvgIconStyle, {
                            src: "https://zone-assets-api.vercel.app/assets/icons/ic_customer_service.svg",
                            sx: {
                                ...styleIcon
                            }
                        })
                    })
                })
            }),
            /*#__PURE__*/ _jsx(Pattern01, {}),
            /*#__PURE__*/ _jsx(Pattern02, {})
        ]
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (memo(CareerHeroIllustration))));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6853:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_core_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1851);
/* harmony import */ var _pattern__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, src_core_components__WEBPACK_IMPORTED_MODULE_5__, _pattern__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, src_core_components__WEBPACK_IMPORTED_MODULE_5__, _pattern__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// @mui


// components

// pattern

// ----------------------------------------------------------------------
const varUp = {
    animate: {
        y: [
            -8,
            8,
            -8
        ],
        x: [
            -4,
            4,
            -4
        ]
    },
    transition: {
        duration: 8,
        repeat: Infinity
    }
};
const varDown = {
    animate: {
        y: [
            8,
            -8,
            8
        ],
        x: [
            4,
            -4,
            4
        ]
    },
    transition: {
        duration: 8,
        repeat: Infinity
    }
};
const varLeft = {
    animate: {
        x: [
            8,
            -8,
            8
        ],
        y: [
            4,
            -4,
            4
        ]
    },
    transition: {
        duration: 7,
        repeat: Infinity
    }
};
const varRight = {
    animate: {
        x: [
            8,
            -8,
            8
        ],
        y: [
            4,
            -4,
            4
        ]
    },
    transition: {
        duration: 7,
        repeat: Infinity
    }
};
const styleIconContent = {
    fontSize: 22,
    color: "common.black",
    fontWeight: "fontWeightBold"
};
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box)(()=>({
        width: 670,
        height: 670,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
    }));
// ----------------------------------------------------------------------
function ElearningHeroIllustration({ ...other }) {
    const theme = useTheme();
    const GREEN = theme.palette.success.main;
    const YELLOW = theme.palette.warning.main;
    const BLUE = "#355EC9";
    const PURPLE = "#9B3AB1";
    return /*#__PURE__*/ _jsxs(RootStyle, {
        ...other,
        children: [
            /*#__PURE__*/ _jsx(Box, {
                sx: {
                    position: "absolute",
                    right: 18,
                    bottom: 28,
                    zIndex: 8
                },
                children: /*#__PURE__*/ _jsx(Image, {
                    placeholderSrc: "",
                    alt: "teacher",
                    src: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_teacher_hero.png",
                    sx: {
                        width: 546,
                        height: 650
                    }
                })
            }),
            /*#__PURE__*/ _jsx(Box, {
                ...varDown,
                component: m.div,
                sx: {
                    position: "absolute",
                    left: 115,
                    bottom: 115,
                    zIndex: 8
                },
                children: /*#__PURE__*/ _jsx(Image, {
                    alt: "book icon",
                    src: "https://zone-assets-api.vercel.app/assets/icons/ic_book.png",
                    sx: {
                        width: 52,
                        height: 62
                    }
                })
            }),
            /*#__PURE__*/ _jsx(Box, {
                ...varRight,
                component: m.div,
                sx: {
                    position: "absolute",
                    left: 18,
                    top: 220,
                    zIndex: 8
                },
                children: /*#__PURE__*/ _jsx(Image, {
                    alt: "pencil icon",
                    src: "https://zone-assets-api.vercel.app/assets/icons/ic_pencil.png",
                    sx: {
                        width: 60,
                        height: 77
                    }
                })
            }),
            /*#__PURE__*/ _jsx(Box, {
                ...varUp,
                component: m.div,
                sx: {
                    zIndex: 9,
                    left: 120,
                    bottom: 168,
                    position: "absolute"
                },
                children: /*#__PURE__*/ _jsx(Label, {
                    text: "Python",
                    icon: /*#__PURE__*/ _jsx(Image, {
                        alt: "python",
                        src: "https://zone-assets-api.vercel.app/assets/icons/platform/ic_platform_python.svg",
                        sx: {
                            width: 56,
                            height: 56
                        }
                    }),
                    sx: {
                        py: 1.75,
                        typography: "h3",
                        color: "#2994FF",
                        boxShadow: `0px 24px 48px rgba(0, 0, 0, 0.24), inset 0px -4px 10px ${alpha(theme.palette.grey[600], 0.48)}`
                    }
                })
            }),
            /*#__PURE__*/ _jsx(Box, {
                ...varLeft,
                component: m.div,
                sx: {
                    top: 88,
                    right: 72,
                    zIndex: 8,
                    position: "absolute"
                },
                children: /*#__PURE__*/ _jsx(Icon, {
                    color: GREEN,
                    content: /*#__PURE__*/ _jsx(Typography, {
                        sx: {
                            ...styleIconContent
                        },
                        children: "Dw"
                    }),
                    sx: {
                        transform: "scale(1.2) rotate(15deg)"
                    }
                })
            }),
            /*#__PURE__*/ _jsx(Box, {
                ...varRight,
                component: m.div,
                sx: {
                    zIndex: 8,
                    bottom: 160,
                    position: "absolute"
                },
                children: /*#__PURE__*/ _jsx(Icon, {
                    color: YELLOW,
                    content: /*#__PURE__*/ _jsx(Typography, {
                        sx: {
                            ...styleIconContent
                        },
                        children: "Ai"
                    }),
                    sx: {
                        transform: "translateX(40px) scale(1.2) rotate(-15deg)"
                    }
                })
            }),
            /*#__PURE__*/ _jsx(Box, {
                ...varUp,
                component: m.div,
                sx: {
                    zIndex: 8,
                    right: 90,
                    position: "absolute"
                },
                children: /*#__PURE__*/ _jsx(Icon, {
                    color: PURPLE,
                    content: /*#__PURE__*/ _jsx(Typography, {
                        sx: {
                            ...styleIconContent,
                            color: "common.white"
                        },
                        children: "Ae"
                    }),
                    sx: {
                        transform: "scale(1.2) translateY(20px) rotate(15deg)"
                    }
                })
            }),
            /*#__PURE__*/ _jsx(Box, {
                ...varDown,
                component: m.div,
                sx: {
                    zIndex: 8,
                    position: "absolute"
                },
                children: /*#__PURE__*/ _jsx(Icon, {
                    color: BLUE,
                    content: /*#__PURE__*/ _jsx(Typography, {
                        sx: {
                            ...styleIconContent,
                            color: "common.white"
                        },
                        children: "Ps"
                    }),
                    sx: {
                        transform: "scale(1.2) translate(-135px, -75px) rotate(15deg)"
                    }
                })
            }),
            /*#__PURE__*/ _jsx(Pattern01, {
                sx: {
                    left: 0,
                    top: 0
                }
            }),
            /*#__PURE__*/ _jsx(Pattern02, {
                sx: {
                    top: 0,
                    left: 0,
                    opacity: 0.24,
                    transform: "scale(1.2)"
                }
            }),
            /*#__PURE__*/ _jsx(Shape, {
                sx: {
                    position: "absolute",
                    right: 32,
                    bottom: 32
                }
            })
        ]
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (memo(ElearningHeroIllustration))));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9663:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const IndigenousTourismLogo = ({ withText =false , isWhite =false , textColor  })=>{
    let logoColor;
    if (isWhite && textColor == null) {
        logoColor = "#fff";
        textColor = "#fff";
    }
    return withText ? /*#__PURE__*/ _jsxs("svg", {
        viewBox: "0 0 409 185",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsxs("g", {
                clipPath: "url(#clip0_144_888)",
                children: [
                    /*#__PURE__*/ _jsx("rect", {
                        width: "409",
                        height: "185",
                        fill: "none"
                    }),
                    /*#__PURE__*/ _jsxs("g", {
                        clipPath: "url(#clip1_144_888)",
                        children: [
                            /*#__PURE__*/ _jsx("path", {
                                d: "M204.25 65.34V39.54H207.29C208.54 39.54 209.55 40.55 209.55 41.8V65.35H204.25V65.34Z",
                                fill: textColor ? textColor : "#AB9F89"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M214 47.47C214.54 47.19 215.19 46.92 215.93 46.66C216.68 46.4 217.49 46.18 218.37 45.98C219.25 45.79 220.14 45.63 221.04 45.52C221.94 45.4 222.79 45.35 223.59 45.35C225.37 45.35 226.86 45.59 228.06 46.07C229.26 46.55 230.17 47.3 230.79 48.33C231.41 49.36 231.72 50.7 231.72 52.35V65.35H229.68C228.1 65.35 226.81 64.07 226.81 62.48V53.2C226.81 52.71 226.75 52.24 226.62 51.79C226.49 51.34 226.27 50.94 225.96 50.59C225.65 50.24 225.22 49.97 224.68 49.78C224.14 49.59 223.44 49.49 222.59 49.49C221.94 49.49 221.29 49.55 220.64 49.68C219.98 49.81 219.41 49.98 218.92 50.18V65.34H214V47.47Z",
                                fill: textColor ? textColor : "#AB9F89"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M244.95 65.92C243.61 65.92 242.33 65.76 241.12 65.44C239.91 65.12 238.84 64.57 237.91 63.8C236.98 63.03 236.25 61.96 235.72 60.59C235.19 59.22 234.93 57.5 234.93 55.41C234.93 52.29 235.69 49.83 237.21 48.02C238.73 46.22 241.04 45.31 244.13 45.31C244.57 45.31 245.14 45.36 245.83 45.45C246.53 45.54 247.24 45.72 247.98 45.97C248.71 46.23 249.35 46.6 249.89 47.09L248.81 48.68V40C248.81 38.76 249.81 37.76 251.05 37.76H253.68V60.74C253.68 61.62 253.42 62.38 252.91 63.04C252.39 63.7 251.72 64.23 250.88 64.65C250.04 65.06 249.11 65.38 248.08 65.6C247.05 65.81 246 65.92 244.95 65.92ZM245.14 61.74C246.17 61.74 247.04 61.6 247.75 61.33C248.46 61.06 248.81 60.69 248.81 60.23V50.33C248.24 50 247.64 49.75 246.99 49.6C246.34 49.45 245.73 49.37 245.13 49.37C243.97 49.37 243 49.58 242.21 50.01C241.42 50.44 240.84 51.11 240.47 52.02C240.1 52.94 239.91 54.1 239.91 55.52C239.91 56.73 240.06 57.8 240.37 58.73C240.68 59.66 241.21 60.39 241.98 60.93C242.75 61.47 243.8 61.74 245.14 61.74Z",
                                fill: textColor ? textColor : "#AB9F89"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M257.94 41.76V40.05C257.94 39.4 258.47 38.87 259.12 38.87H261.91C262.56 38.87 263.09 39.4 263.09 40.05V41.76C263.09 42.41 262.56 42.94 261.91 42.94H259.12C258.47 42.94 257.94 42.41 257.94 41.76ZM258.06 63.02V46.04H262.97L263.01 65.34H260.38C259.1 65.34 258.06 64.3 258.06 63.02Z",
                                fill: textColor ? textColor : "#AB9F89"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M274.96 65.92C273.13 65.84 271.57 65.44 270.28 64.7C268.99 63.97 268 62.88 267.32 61.45C266.64 60.02 266.29 58.26 266.29 56.17C266.29 53.98 266.56 52.18 267.1 50.77C267.64 49.36 268.4 48.27 269.36 47.48C270.33 46.69 271.46 46.14 272.76 45.82C274.06 45.5 275.46 45.34 276.96 45.34C278.46 45.34 279.79 45.53 280.96 45.92C282.13 46.31 283.06 46.88 283.75 47.64C284.43 48.4 284.78 49.35 284.78 50.48V65.72C284.78 66.93 284.59 68.02 284.22 68.99C283.85 69.96 283.27 70.79 282.48 71.49C281.69 72.19 280.7 72.72 279.5 73.1C278.3 73.47 276.89 73.66 275.26 73.66C273.71 73.66 272.37 73.54 271.24 73.31C270.1 73.08 269.2 72.82 268.53 72.54V68.13C268.92 68.28 269.45 68.47 270.14 68.69C270.82 68.91 271.59 69.1 272.44 69.25C273.29 69.4 274.14 69.48 274.99 69.48C276.36 69.48 277.39 69.3 278.1 68.94C278.81 68.58 279.29 68.11 279.55 67.53C279.81 66.95 279.94 66.3 279.94 65.58V62.52L281.06 63.37C280.62 63.86 280.09 64.3 279.45 64.69C278.82 65.08 278.12 65.38 277.36 65.6C276.62 65.81 275.82 65.92 274.96 65.92ZM276.01 62.09C276.73 62.09 277.43 62.01 278.1 61.84C278.77 61.67 279.39 61.42 279.96 61.09V51.53C279.96 50.91 279.8 50.45 279.48 50.16C279.16 49.86 278.73 49.66 278.2 49.54C277.67 49.42 277.11 49.37 276.52 49.37C275.13 49.37 274.05 49.65 273.29 50.22C272.53 50.79 272 51.57 271.7 52.58C271.4 53.59 271.26 54.71 271.26 55.95C271.26 57.81 271.67 59.3 272.5 60.42C273.31 61.53 274.49 62.09 276.01 62.09Z",
                                fill: textColor ? textColor : "#AB9F89"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M297.48 65.92C295.55 65.92 293.85 65.52 292.39 64.72C290.93 63.92 289.8 62.77 289 61.26C288.2 59.75 287.8 57.93 287.8 55.79C287.8 52.39 288.62 49.78 290.26 47.98C291.9 46.18 294.21 45.27 297.2 45.27C299.31 45.27 301.03 45.73 302.35 46.66C303.67 47.59 304.62 48.92 305.21 50.64C305.8 52.37 306.09 54.42 306.06 56.79H290.97L290.62 53.46H302.15L301.22 54.85C301.17 52.81 300.81 51.35 300.16 50.46C299.5 49.57 298.45 49.13 297.01 49.13C296.13 49.13 295.37 49.33 294.73 49.73C294.08 50.13 293.59 50.79 293.24 51.72C292.89 52.65 292.72 53.93 292.72 55.55C292.72 57.56 293.19 59.1 294.13 60.15C295.07 61.21 296.52 61.74 298.48 61.74C299.28 61.74 300.05 61.66 300.78 61.51C301.51 61.36 302.2 61.16 302.83 60.91C303.46 60.67 304.01 60.44 304.47 60.23V64.6C303.54 64.99 302.51 65.3 301.38 65.55C300.25 65.8 298.95 65.92 297.48 65.92Z",
                                fill: textColor ? textColor : "#AB9F89"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M309.28 47.47C309.82 47.19 310.47 46.92 311.21 46.66C311.96 46.4 312.77 46.18 313.65 45.98C314.53 45.79 315.42 45.63 316.32 45.52C317.22 45.4 318.07 45.35 318.87 45.35C320.65 45.35 322.14 45.59 323.34 46.07C324.54 46.55 325.45 47.3 326.07 48.33C326.69 49.36 327 50.7 327 52.35V65.35H324.78C323.29 65.35 322.08 64.14 322.08 62.65V53.2C322.08 52.71 322.02 52.24 321.89 51.79C321.76 51.34 321.54 50.94 321.23 50.59C320.92 50.24 320.5 49.97 319.95 49.78C319.41 49.59 318.71 49.49 317.86 49.49C317.22 49.49 316.56 49.55 315.91 49.68C315.25 49.81 314.68 49.98 314.19 50.18V65.34H309.28V47.47Z",
                                fill: textColor ? textColor : "#AB9F89"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M339.84 65.92C336.62 65.92 334.2 65.03 332.61 63.25C331.01 61.47 330.21 58.9 330.21 55.55C330.21 51.94 331.03 49.32 332.67 47.7C334.31 46.07 336.69 45.26 339.81 45.26C341.98 45.26 343.78 45.64 345.21 46.4C346.64 47.16 347.72 48.3 348.44 49.82C349.16 51.34 349.52 53.25 349.52 55.55C349.52 58.9 348.68 61.47 347.01 63.25C345.32 65.03 342.93 65.92 339.84 65.92ZM339.8 61.9C340.93 61.9 341.86 61.64 342.57 61.13C343.28 60.61 343.8 59.88 344.14 58.93C344.47 57.98 344.64 56.85 344.64 55.56C344.64 54.09 344.47 52.89 344.12 51.96C343.77 51.03 343.24 50.35 342.53 49.91C341.82 49.47 340.91 49.25 339.8 49.25C338.66 49.25 337.75 49.48 337.05 49.95C336.35 50.41 335.85 51.11 335.54 52.04C335.23 52.97 335.08 54.14 335.08 55.56C335.08 57.6 335.45 59.16 336.18 60.26C336.92 61.35 338.12 61.9 339.8 61.9Z",
                                fill: textColor ? textColor : "#AB9F89"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M361.58 65.92C359.8 65.92 358.24 65.63 356.9 65.05C355.56 64.47 354.52 63.6 353.79 62.44C353.06 61.28 352.69 59.8 352.69 57.99V45.84H354.58C356.25 45.84 357.6 47.19 357.6 48.86V57.45C357.6 58.89 357.92 59.96 358.57 60.66C359.21 61.36 360.23 61.7 361.63 61.7C363.03 61.7 364.03 61.35 364.67 60.66C365.3 59.96 365.62 58.89 365.62 57.45V45.84H370.3V57.99C370.3 60.67 369.53 62.66 367.98 63.97C366.42 65.27 364.29 65.92 361.58 65.92Z",
                                fill: textColor ? textColor : "#AB9F89"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M380.27 65.92C378.88 65.92 377.69 65.7701 376.71 65.4801C375.73 65.1801 374.79 64.83 373.89 64.42V59.9701C374.48 60.3601 375.11 60.7201 375.77 61.0701C376.43 61.4201 377.14 61.7001 377.9 61.9001C378.66 62.1101 379.49 62.21 380.4 62.21C381.41 62.21 382.16 62.0201 382.66 61.6301C383.16 61.2401 383.41 60.7501 383.41 60.1601C383.41 59.6401 383.22 59.24 382.83 58.94C382.44 58.64 381.94 58.39 381.32 58.19C380.7 57.98 380.04 57.7801 379.35 57.5701C378.71 57.4101 378.05 57.2101 377.4 56.9501C376.74 56.6901 376.14 56.3401 375.6 55.9101C375.06 55.4701 374.63 54.9101 374.3 54.2301C373.98 53.5501 373.82 52.7101 373.82 51.7301C373.82 50.5701 374.05 49.5901 374.52 48.7901C374.98 47.9901 375.6 47.3401 376.36 46.8401C377.12 46.3401 377.95 45.98 378.84 45.76C379.73 45.54 380.6 45.4401 381.45 45.4701C382.95 45.5001 385.07 45.4301 387.41 45.5601V47.1101C387.41 48.3701 386.34 49.36 385.09 49.26C383.81 49.15 382.79 49.1801 382.08 49.1801C381.07 49.1801 380.29 49.3501 379.74 49.7001C379.19 50.0501 378.91 50.5301 378.91 51.1501C378.91 51.6901 379.08 52.1201 379.41 52.4501C379.75 52.7701 380.19 53.0301 380.74 53.2201C381.29 53.4101 381.89 53.6 382.54 53.78C383.18 53.96 383.85 54.1601 384.53 54.3801C385.21 54.6001 385.86 54.9101 386.46 55.3101C387.07 55.7101 387.56 56.2601 387.93 56.9501C388.3 57.6501 388.49 58.5501 388.49 59.6601C388.46 61.1801 388.06 62.4 387.27 63.32C386.48 64.24 385.47 64.9 384.23 65.31C382.97 65.71 381.66 65.92 380.27 65.92Z",
                                fill: textColor ? textColor : "#AB9F89"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M212.03 102.31V80.72H204.25V76.5H225.14V77.9C225.14 79.45 223.88 80.71 222.33 80.71H217.29V102.3H212.03V102.31Z",
                                fill: textColor ? textColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M231.97 102.89C228.75 102.89 226.33 102 224.74 100.22C223.14 98.44 222.34 95.87 222.34 92.52C222.34 88.91 223.16 86.29 224.8 84.67C226.44 83.04 228.82 82.23 231.94 82.23C234.11 82.23 235.91 82.61 237.34 83.37C238.77 84.13 239.85 85.27 240.57 86.79C241.29 88.31 241.65 90.22 241.65 92.52C241.65 95.87 240.81 98.44 239.14 100.22C237.45 102 235.06 102.89 231.97 102.89ZM231.93 98.87C233.06 98.87 233.99 98.61 234.7 98.1C235.41 97.58 235.93 96.85 236.27 95.9C236.6 94.95 236.77 93.82 236.77 92.53C236.77 91.06 236.6 89.86 236.25 88.93C235.9 88 235.37 87.32 234.66 86.88C233.95 86.44 233.04 86.22 231.93 86.22C230.79 86.22 229.88 86.45 229.18 86.92C228.48 87.38 227.98 88.08 227.67 89.01C227.36 89.94 227.21 91.11 227.21 92.53C227.21 94.57 227.58 96.13 228.31 97.23C229.05 98.32 230.25 98.87 231.93 98.87Z",
                                fill: textColor ? textColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M266.67 102.31V84.71C269.18 81.48 277.12 82.38 277.68 82.52C278.23 82.66 278.68 82.84 279.01 83.04V86.75C278.49 86.67 277.91 86.61 277.25 86.56C276.59 86.51 275.92 86.49 275.24 86.5C274.56 86.51 273.9 86.55 273.27 86.6C272.64 86.65 272.08 86.72 271.59 86.79V102.3H266.67V102.31Z",
                                fill: textColor ? textColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M326.22 89.3101V102.31H323.99C322.51 102.31 321.3 101.11 321.3 99.6201V90.1601C321.3 89.6701 321.24 89.2001 321.11 88.7501C320.98 88.3001 320.76 87.9001 320.45 87.5501C320.14 87.2001 319.72 86.9301 319.17 86.7401C318.63 86.5501 317.93 86.4501 317.08 86.4501C316.43 86.4501 315.82 86.5101 315.22 86.6401C314.63 86.7701 314.08 86.9401 313.59 87.1401V102.3H308.68V84.4401C309.22 84.1601 309.87 83.8901 310.61 83.6301C311.36 83.3701 312.17 83.1501 313.05 82.9501C313.93 82.7601 314.82 82.6001 315.72 82.4901C316.62 82.3701 317.47 82.3201 318.27 82.3201C320.05 82.3201 321.53 82.5601 322.7 83.0401C323.87 83.5201 324.75 84.2701 325.33 85.3001C325.93 86.3201 326.22 87.6601 326.22 89.3101ZM320.92 85.6001C321.74 84.9001 322.69 84.3201 323.74 83.8401C324.8 83.3601 325.91 82.9901 327.09 82.7201C328.26 82.4501 329.38 82.3101 330.44 82.3101C332.22 82.3101 333.7 82.5501 334.87 83.0301C336.04 83.5101 336.92 84.2601 337.5 85.2901C338.08 86.3201 338.37 87.6601 338.37 89.3101V102.31H333.46V90.1601C333.46 89.6701 333.4 89.2001 333.27 88.7501C333.14 88.3001 332.92 87.9001 332.61 87.5501C332.3 87.2001 331.88 86.9301 331.33 86.7401C330.79 86.5501 330.09 86.4501 329.24 86.4501C328.59 86.4501 327.98 86.5401 327.38 86.7201C326.79 86.9001 326.24 87.1701 325.76 87.5301L320.92 85.6001Z",
                                fill: textColor ? textColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M297.03 102.9C295.64 102.9 294.45 102.75 293.47 102.46C292.49 102.16 291.55 101.81 290.65 101.4V96.95C291.24 97.34 291.87 97.7 292.53 98.05C293.19 98.4 293.9 98.68 294.66 98.88C295.42 99.09 296.25 99.19 297.16 99.19C298.17 99.19 298.92 99 299.42 98.61C299.92 98.22 300.17 97.73 300.17 97.14C300.17 96.62 299.98 96.22 299.59 95.92C299.2 95.62 298.7 95.37 298.08 95.17C297.46 94.96 296.8 94.76 296.11 94.55C295.47 94.39 294.81 94.19 294.16 93.93C293.5 93.67 292.9 93.32 292.36 92.89C291.82 92.45 291.39 91.89 291.06 91.21C290.74 90.53 290.58 89.69 290.58 88.71C290.58 87.55 290.81 86.57 291.28 85.77C291.74 84.97 292.36 84.32 293.12 83.82C293.88 83.32 294.71 82.96 295.6 82.74C296.49 82.52 297.36 82.42 298.21 82.45C299.71 82.48 301.83 82.41 304.17 82.54V86.56C301.77 86.09 299.94 86.16 298.83 86.16C297.82 86.16 297.04 86.33 296.49 86.68C295.94 87.03 295.66 87.51 295.66 88.13C295.66 88.67 295.83 89.1 296.16 89.43C296.5 89.75 296.94 90.01 297.49 90.2C298.04 90.39 298.64 90.58 299.29 90.76C299.93 90.94 300.6 91.14 301.28 91.36C301.96 91.58 302.61 91.89 303.21 92.29C303.82 92.69 304.31 93.24 304.68 93.93C305.05 94.63 305.24 95.53 305.24 96.64C305.21 98.16 304.81 99.38 304.02 100.3C303.23 101.22 302.22 101.88 300.98 102.29C299.74 102.69 298.43 102.9 297.03 102.9Z",
                                fill: textColor ? textColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M282.03 78.73V77.02C282.03 76.37 282.56 75.84 283.21 75.84H286C286.65 75.84 287.18 76.37 287.18 77.02V78.73C287.18 79.38 286.65 79.91 286 79.91H283.21C282.56 79.91 282.03 79.38 282.03 78.73ZM282.15 99.98V83H287.06L287.1 102.3H284.47C283.19 102.3 282.15 101.27 282.15 99.98Z",
                                fill: textColor ? textColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M254.07 102.9C252.29 102.9 250.73 102.61 249.39 102.03C248.05 101.45 247.01 100.58 246.28 99.4199C245.55 98.2599 245.18 96.7799 245.18 94.9699V82.8199H247.07C248.74 82.8199 250.09 84.1699 250.09 85.8399V94.4299C250.09 95.8699 250.41 96.9399 251.06 97.6399C251.7 98.3399 252.72 98.6799 254.12 98.6799C255.51 98.6799 256.52 98.3299 257.16 97.6399C257.79 96.9399 258.11 95.8699 258.11 94.4299V82.8199H262.79V94.9699C262.79 97.6499 262.02 99.6399 260.47 100.95C258.91 102.25 256.78 102.9 254.07 102.9Z",
                                fill: textColor ? textColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M204.15 136.98V111.18H209.57L218.62 124.18L215.68 124.37L225.12 111.18H230.42V136.98H227.97C226.42 136.98 225.16 135.72 225.16 134.17V115.36L226.36 116.75L217.04 129.4L207.99 116.71L209.23 115.63V136.98H204.15Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M242.18 137.56C241.07 137.56 240.03 137.46 239.05 137.25C238.07 137.04 237.19 136.7 236.42 136.21C235.65 135.72 235.03 135.06 234.58 134.22C234.13 133.38 233.9 132.34 233.9 131.11C233.9 129.77 234.17 128.64 234.71 127.73C235.25 126.81 236.04 126.12 237.09 125.64C238.13 125.16 239.42 124.96 240.94 124.92C241.99 124.89 242.22 124.89 243.63 124.93C244.45 124.95 245.27 125.03 246.09 125.17C246.79 125.29 247.18 125.52 247.59 125.85L249.19 129.16C248.65 128.8 246.65 128.51 245.68 128.41C244.69 128.31 243.7 128.35 242.84 128.36C241.47 128.38 240.45 128.58 239.78 129.02C239.11 129.46 238.77 130.14 238.77 131.07C238.77 131.69 238.95 132.22 239.31 132.66C239.67 133.1 240.14 133.42 240.7 133.63C241.27 133.84 241.86 133.94 242.48 133.94C243.9 133.94 244.92 133.84 245.56 133.65C246.19 133.46 246.51 133.04 246.51 132.39V124.73C246.51 123.47 246.11 122.54 245.31 121.96C244.51 121.38 243.39 121.09 241.94 121.09C240.83 121.09 239.7 121.28 238.54 121.65C237.38 122.02 236.44 122.51 235.72 123.1V118.65C236.42 118.19 237.46 117.79 238.85 117.47C240.24 117.15 241.74 116.99 243.34 116.99C244.01 116.99 244.72 117.05 245.47 117.16C246.22 117.28 246.94 117.48 247.64 117.76C248.34 118.04 248.97 118.44 249.54 118.96C250.11 119.48 250.56 120.11 250.89 120.87C251.22 121.63 251.39 122.55 251.39 123.64L251.35 132.89C251.35 134.08 250.97 135.01 250.21 135.69C249.45 136.37 248.38 136.86 247 137.14C245.61 137.42 244.01 137.56 242.18 137.56Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M255.64 119.11C256.18 118.83 256.83 118.56 257.57 118.3C258.32 118.04 259.13 117.82 260.01 117.62C260.89 117.43 261.78 117.27 262.68 117.16C263.58 117.04 264.43 116.99 265.23 116.99C267.01 116.99 268.5 117.23 269.7 117.71C270.9 118.19 271.81 118.94 272.43 119.97C273.05 121 273.36 122.34 273.36 123.99V136.99H268.45V124.84C268.45 124.35 268.39 123.88 268.26 123.43C268.13 122.98 267.91 122.58 267.6 122.23C267.29 121.88 266.87 121.61 266.32 121.42C265.78 121.23 265.08 121.13 264.23 121.13C263.59 121.13 262.93 121.19 262.28 121.32C261.62 121.45 261.05 121.62 260.56 121.82V136.98H255.65V119.11H255.64Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M294.48 137.6C292.47 137.6 290.93 137.1 289.88 136.11C288.82 135.12 288.29 133.68 288.29 131.8V121.35H287.37C286.21 121.35 285.27 120.41 285.27 119.25V117.48H288.29V112.06H293.4V117.48H297.89V121.35H293.4V131.02C293.4 131.79 293.55 132.37 293.85 132.76C294.15 133.15 294.68 133.34 295.46 133.34C295.87 133.34 296.3 133.28 296.76 133.15C297.21 133.02 297.59 132.85 297.9 132.65V136.91C297.41 137.17 296.86 137.35 296.26 137.45C295.63 137.55 295.04 137.6 294.48 137.6Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M309.87 137.56C306.65 137.56 304.23 136.67 302.64 134.89C301.04 133.11 300.24 130.54 300.24 127.19C300.24 123.58 301.06 120.96 302.7 119.34C304.34 117.71 306.72 116.9 309.84 116.9C312.01 116.9 313.81 117.28 315.24 118.04C316.67 118.8 317.75 119.94 318.47 121.46C319.19 122.98 319.55 124.89 319.55 127.19C319.55 130.54 318.71 133.11 317.04 134.89C315.35 136.67 312.97 137.56 309.87 137.56ZM309.84 133.54C310.97 133.54 311.9 133.28 312.61 132.77C313.32 132.25 313.84 131.52 314.18 130.57C314.51 129.62 314.68 128.49 314.68 127.2C314.68 125.73 314.51 124.53 314.16 123.6C313.81 122.67 313.28 121.99 312.57 121.55C311.86 121.11 310.95 120.89 309.84 120.89C308.7 120.89 307.79 121.12 307.09 121.59C306.39 122.05 305.89 122.75 305.58 123.68C305.27 124.61 305.12 125.78 305.12 127.2C305.12 129.24 305.49 130.8 306.22 131.9C306.95 132.99 308.16 133.54 309.84 133.54Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M331.31 137.56C330.25 137.56 329.21 137.49 328.18 137.35C327.15 137.21 326.23 136.96 325.41 136.62C324.59 136.28 323.95 135.8 323.46 135.19C322.97 134.58 322.73 133.79 322.73 132.81V112.55C322.73 111.14 323.88 109.99 325.29 109.99H327.56V120.55L326.52 119C326.98 118.54 327.58 118.16 328.32 117.86C329.05 117.56 329.8 117.34 330.54 117.2C331.29 117.06 331.92 116.99 332.44 116.99C335.35 116.99 337.56 117.86 339.06 119.6C340.56 121.34 341.3 123.84 341.3 127.09C341.3 129.13 341.03 130.82 340.49 132.18C339.95 133.53 339.22 134.6 338.3 135.39C337.38 136.18 336.33 136.74 335.13 137.07C333.92 137.39 332.65 137.56 331.31 137.56ZM331.19 133.38C332.51 133.38 333.54 133.12 334.29 132.59C335.04 132.06 335.57 131.34 335.88 130.42C336.19 129.5 336.34 128.48 336.34 127.34C336.34 125.87 336.15 124.67 335.76 123.74C335.37 122.81 334.82 122.12 334.1 121.67C333.38 121.22 332.49 120.99 331.43 120.99C330.84 120.99 330.19 121.07 329.5 121.22C328.8 121.38 328.16 121.62 327.57 121.95V131.51C327.57 132 327.74 132.38 328.09 132.65C328.44 132.92 328.89 133.11 329.44 133.21C329.98 133.33 330.57 133.38 331.19 133.38Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M351.96 137.49C350.85 137.49 349.81 137.39 348.83 137.18C347.85 136.97 346.97 136.63 346.2 136.14C345.43 135.65 344.81 134.99 344.36 134.15C343.91 133.31 343.68 132.27 343.68 131.04C343.68 129.7 343.95 128.57 344.49 127.66C345.03 126.74 345.82 126.05 346.87 125.57C347.91 125.09 349.2 124.89 350.72 124.85C351.77 124.82 352 124.82 353.41 124.86C354.23 124.88 355.05 124.96 355.87 125.1C356.57 125.22 356.96 125.45 357.37 125.78L358.97 129.09C358.43 128.73 356.43 128.44 355.46 128.34C354.47 128.24 353.48 128.28 352.62 128.29C351.25 128.31 350.23 128.51 349.56 128.95C348.89 129.39 348.55 130.07 348.55 131C348.55 131.62 348.73 132.15 349.09 132.59C349.45 133.03 349.92 133.35 350.48 133.56C351.05 133.77 351.64 133.87 352.26 133.87C353.68 133.87 354.7 133.77 355.34 133.58C355.97 133.39 356.29 132.97 356.29 132.32V124.66C356.29 123.4 355.89 122.47 355.09 121.89C354.29 121.31 353.17 121.02 351.72 121.02C350.61 121.02 349.48 121.21 348.32 121.58C347.16 121.95 346.22 122.44 345.5 123.03V118.58C346.2 118.12 347.24 117.72 348.63 117.4C350.02 117.08 351.52 116.92 353.12 116.92C353.79 116.92 354.5 116.98 355.25 117.09C356 117.21 356.72 117.41 357.42 117.69C358.12 117.97 358.75 118.37 359.32 118.89C359.89 119.41 360.34 120.04 360.67 120.8C361 121.56 361.17 122.48 361.17 123.57L361.13 132.82C361.13 134.01 360.75 134.94 359.99 135.62C359.23 136.3 358.16 136.79 356.78 137.07C355.39 137.35 353.79 137.49 351.96 137.49Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M276.78 113.39V111.68C276.78 111.03 277.31 110.5 277.96 110.5H280.75C281.4 110.5 281.93 111.03 281.93 111.68V113.39C281.93 114.04 281.4 114.57 280.75 114.57H277.96C277.3 114.57 276.78 114.04 276.78 113.39ZM276.89 134.65V117.67H281.8L281.84 136.97H279.21C277.93 136.97 276.89 135.93 276.89 134.65Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M210.33 161.54C210.21 161.16 210.07 160.76 209.93 160.35C209.79 159.94 209.65 159.54 209.51 159.14H205.18C205.04 159.55 204.9 159.95 204.76 160.36C204.62 160.77 204.49 161.16 204.37 161.54H201.78C202.2 160.35 202.59 159.24 202.97 158.23C203.34 157.22 203.71 156.26 204.07 155.37C204.43 154.47 204.78 153.62 205.13 152.82C205.48 152.01 205.84 151.23 206.21 150.46H208.58C208.94 151.23 209.3 152.01 209.66 152.82C210.01 153.62 210.37 154.48 210.73 155.37C211.09 156.27 211.46 157.22 211.83 158.23C212.21 159.24 212.6 160.35 213.02 161.54H210.33ZM207.33 152.96C207.27 153.12 207.19 153.34 207.09 153.62C206.98 153.9 206.86 154.22 206.72 154.58C206.58 154.94 206.43 155.34 206.26 155.78C206.09 156.22 205.92 156.67 205.74 157.15H208.91C208.74 156.67 208.58 156.21 208.42 155.77C208.26 155.33 208.11 154.93 207.97 154.57C207.83 154.21 207.7 153.89 207.59 153.61C207.49 153.34 207.4 153.12 207.33 152.96Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M221.21 161.26C221 161.32 220.75 161.39 220.47 161.44C220.19 161.5 219.9 161.55 219.6 161.59C219.3 161.63 218.99 161.67 218.67 161.69C218.35 161.71 218.05 161.73 217.77 161.73C217.08 161.73 216.46 161.63 215.91 161.43C215.37 161.23 214.91 160.94 214.53 160.56C214.16 160.18 213.87 159.72 213.67 159.18C213.47 158.64 213.37 158.04 213.37 157.36C213.37 156.68 213.45 156.06 213.63 155.51C213.8 154.96 214.05 154.49 214.37 154.11C214.69 153.73 215.08 153.43 215.55 153.23C216.01 153.03 216.54 152.93 217.14 152.93C217.47 152.93 217.77 152.96 218.03 153.03C218.29 153.09 218.55 153.19 218.82 153.3V149.49L221.2 149.11V161.26H221.21ZM215.82 157.26C215.82 158 215.99 158.59 216.32 159.04C216.65 159.49 217.14 159.71 217.79 159.71C218 159.71 218.2 159.7 218.38 159.69C218.56 159.67 218.71 159.65 218.83 159.63V155.29C218.68 155.19 218.49 155.11 218.25 155.05C218.01 154.99 217.77 154.95 217.52 154.95C216.39 154.96 215.82 155.73 215.82 157.26Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M225.19 161.54C224.64 160.47 224.09 159.23 223.53 157.8C222.97 156.37 222.44 154.81 221.93 153.13H224.46C224.57 153.55 224.69 154 224.84 154.48C224.98 154.97 225.13 155.46 225.29 155.95C225.45 156.44 225.6 156.93 225.76 157.4C225.92 157.87 226.07 158.3 226.22 158.68C226.36 158.3 226.51 157.87 226.67 157.4C226.83 156.93 226.99 156.45 227.14 155.95C227.29 155.45 227.44 154.96 227.59 154.48C227.73 154 227.86 153.54 227.97 153.13H230.44C229.94 154.82 229.4 156.37 228.84 157.8C228.28 159.23 227.72 160.48 227.18 161.54H225.19Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M230.77 157.39C230.77 156.64 230.88 155.99 231.11 155.43C231.34 154.87 231.64 154.4 232.01 154.03C232.38 153.66 232.81 153.37 233.3 153.18C233.79 152.99 234.28 152.89 234.8 152.89C235.99 152.89 236.94 153.26 237.63 153.99C238.32 154.72 238.67 155.8 238.67 157.21C238.67 157.35 238.67 157.5 238.65 157.67C238.64 157.84 238.63 157.98 238.62 158.11H233.21C233.26 158.6 233.49 158.99 233.9 159.28C234.31 159.57 234.85 159.71 235.53 159.71C235.97 159.71 236.4 159.67 236.82 159.59C237.24 159.51 237.59 159.41 237.85 159.29L238.17 161.23C238.04 161.29 237.87 161.36 237.66 161.42C237.45 161.48 237.21 161.54 236.95 161.59C236.69 161.64 236.41 161.68 236.11 161.71C235.81 161.74 235.51 161.76 235.21 161.76C234.45 161.76 233.79 161.65 233.23 161.42C232.67 161.2 232.21 160.89 231.84 160.5C231.47 160.11 231.2 159.65 231.02 159.12C230.84 158.59 230.77 158.01 230.77 157.39ZM236.37 156.48C236.36 156.28 236.32 156.08 236.27 155.89C236.21 155.7 236.12 155.53 236 155.38C235.88 155.23 235.72 155.11 235.54 155.01C235.35 154.91 235.12 154.87 234.84 154.87C234.57 154.87 234.34 154.91 234.15 155.01C233.96 155.1 233.8 155.22 233.67 155.37C233.54 155.52 233.44 155.69 233.37 155.89C233.3 156.09 233.25 156.29 233.22 156.49H236.37V156.48Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M240.2 153.41C240.61 153.29 241.13 153.18 241.77 153.08C242.41 152.98 243.08 152.93 243.79 152.93C244.5 152.93 245.1 153.02 245.57 153.21C246.04 153.4 246.42 153.66 246.7 154C246.98 154.34 247.17 154.75 247.29 155.22C247.41 155.69 247.47 156.21 247.47 156.79V161.54H245.09V157.08C245.09 156.31 244.99 155.77 244.79 155.45C244.59 155.13 244.21 154.97 243.65 154.97C243.48 154.97 243.3 154.98 243.11 154.99C242.92 155.01 242.75 155.02 242.6 155.05V161.55H240.22V153.41H240.2Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M249.24 151.03L251.62 150.65V153.13H254.48V155.11H251.62V158.07C251.62 158.57 251.71 158.97 251.88 159.27C252.06 159.57 252.41 159.72 252.94 159.72C253.2 159.72 253.46 159.7 253.73 159.65C254 159.6 254.25 159.54 254.47 159.45L254.81 161.31C254.52 161.43 254.2 161.53 253.85 161.61C253.5 161.69 253.06 161.74 252.55 161.74C251.9 161.74 251.36 161.65 250.93 161.48C250.5 161.3 250.16 161.06 249.91 160.74C249.66 160.42 249.48 160.04 249.37 159.6C249.26 159.16 249.22 158.66 249.22 158.11V151.03H249.24Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M263.31 161.25C262.9 161.37 262.38 161.48 261.74 161.58C261.1 161.68 260.43 161.73 259.72 161.73C259.01 161.73 258.41 161.63 257.93 161.44C257.46 161.25 257.08 160.98 256.8 160.63C256.52 160.28 256.32 159.87 256.21 159.39C256.09 158.91 256.03 158.38 256.03 157.81V153.12H258.41V157.52C258.41 158.29 258.51 158.84 258.71 159.18C258.91 159.52 259.29 159.69 259.84 159.69C260.01 159.69 260.19 159.68 260.38 159.67C260.57 159.65 260.74 159.64 260.89 159.61V153.11H263.27V161.25H263.31Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M270.32 155.23C270.11 155.18 269.86 155.12 269.57 155.06C269.28 155 268.97 154.97 268.64 154.97C268.49 154.97 268.31 154.98 268.1 155.01C267.89 155.04 267.73 155.07 267.63 155.1V161.53H265.25V153.56C265.68 153.41 266.18 153.27 266.76 153.14C267.34 153.01 267.99 152.94 268.7 152.94C268.83 152.94 268.98 152.95 269.16 152.96C269.34 152.98 269.52 153 269.7 153.02C269.88 153.05 270.06 153.08 270.24 153.12C270.42 153.16 270.58 153.2 270.7 153.26L270.32 155.23Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M271.13 157.39C271.13 156.64 271.24 155.99 271.47 155.43C271.7 154.87 272 154.4 272.37 154.03C272.74 153.66 273.17 153.37 273.66 153.18C274.14 152.99 274.64 152.89 275.16 152.89C276.35 152.89 277.3 153.26 277.99 153.99C278.68 154.72 279.03 155.8 279.03 157.21C279.03 157.35 279.03 157.5 279.01 157.67C279 157.84 278.99 157.98 278.98 158.11H273.57C273.62 158.6 273.85 158.99 274.26 159.28C274.67 159.57 275.21 159.71 275.89 159.71C276.33 159.71 276.76 159.67 277.18 159.59C277.6 159.51 277.95 159.41 278.21 159.29L278.53 161.23C278.4 161.29 278.23 161.36 278.02 161.42C277.81 161.48 277.57 161.54 277.31 161.59C277.05 161.64 276.77 161.68 276.47 161.71C276.17 161.74 275.87 161.76 275.57 161.76C274.81 161.76 274.15 161.65 273.59 161.42C273.03 161.2 272.57 160.89 272.2 160.5C271.83 160.11 271.56 159.65 271.38 159.12C271.22 158.59 271.13 158.01 271.13 157.39ZM276.73 156.48C276.72 156.28 276.68 156.08 276.63 155.89C276.57 155.7 276.48 155.53 276.36 155.38C276.24 155.23 276.08 155.11 275.9 155.01C275.71 154.91 275.48 154.87 275.2 154.87C274.93 154.87 274.7 154.91 274.51 155.01C274.32 155.1 274.16 155.22 274.03 155.37C273.9 155.52 273.8 155.69 273.73 155.89C273.66 156.09 273.61 156.29 273.58 156.49H276.73V156.48Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M283.23 151.03L285.61 150.65V153.13H288.47V155.11H285.61V158.07C285.61 158.57 285.7 158.97 285.87 159.27C286.05 159.57 286.4 159.72 286.93 159.72C287.19 159.72 287.45 159.7 287.72 159.65C287.99 159.6 288.24 159.54 288.46 159.45L288.8 161.31C288.51 161.43 288.19 161.53 287.84 161.61C287.49 161.69 287.06 161.74 286.54 161.74C285.89 161.74 285.35 161.65 284.92 161.48C284.49 161.31 284.15 161.06 283.9 160.74C283.65 160.42 283.46 160.04 283.36 159.6C283.26 159.16 283.21 158.66 283.21 158.11V151.03H283.23Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M297.66 157.31C297.66 157.97 297.56 158.58 297.37 159.13C297.18 159.68 296.9 160.15 296.54 160.54C296.18 160.93 295.74 161.23 295.24 161.44C294.73 161.65 294.17 161.76 293.54 161.76C292.92 161.76 292.36 161.65 291.85 161.44C291.34 161.23 290.91 160.93 290.55 160.54C290.19 160.15 289.9 159.68 289.7 159.13C289.5 158.58 289.4 157.98 289.4 157.31C289.4 156.64 289.5 156.05 289.71 155.5C289.92 154.95 290.21 154.49 290.57 154.11C290.94 153.73 291.38 153.43 291.88 153.21C292.39 153 292.94 152.89 293.54 152.89C294.15 152.89 294.71 153 295.21 153.21C295.72 153.42 296.15 153.72 296.51 154.11C296.87 154.5 297.16 154.96 297.36 155.5C297.56 156.05 297.66 156.65 297.66 157.31ZM295.23 157.31C295.23 156.57 295.08 156 294.79 155.57C294.5 155.15 294.08 154.94 293.53 154.94C292.99 154.94 292.56 155.15 292.27 155.57C291.97 155.99 291.82 156.57 291.82 157.31C291.82 158.05 291.97 158.63 292.27 159.06C292.57 159.49 292.99 159.71 293.53 159.71C294.07 159.71 294.49 159.49 294.79 159.06C295.08 158.63 295.23 158.05 295.23 157.31Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M306.43 161.76C305.65 161.76 304.98 161.65 304.41 161.43C303.84 161.21 303.38 160.91 303.01 160.52C302.64 160.13 302.37 159.67 302.19 159.13C302.01 158.59 301.93 158 301.93 157.35V150.45H304.43V157.14C304.43 157.59 304.48 157.97 304.58 158.28C304.68 158.59 304.82 158.85 305 159.05C305.18 159.25 305.39 159.39 305.64 159.47C305.89 159.56 306.17 159.6 306.46 159.6C307.07 159.6 307.56 159.41 307.94 159.04C308.32 158.67 308.51 158.03 308.51 157.14V150.45H311.01V157.35C311.01 158 310.92 158.6 310.74 159.14C310.56 159.68 310.28 160.15 309.91 160.54C309.54 160.93 309.06 161.23 308.49 161.44C307.9 161.65 307.22 161.76 306.43 161.76Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M312.94 153.41C313.35 153.29 313.87 153.18 314.51 153.08C315.15 152.98 315.82 152.93 316.53 152.93C317.24 152.93 317.84 153.02 318.31 153.21C318.78 153.4 319.16 153.66 319.44 154C319.72 154.34 319.91 154.75 320.03 155.22C320.15 155.69 320.21 156.21 320.21 156.79V161.54H317.83V157.08C317.83 156.31 317.73 155.77 317.53 155.45C317.33 155.13 316.95 154.97 316.4 154.97C316.23 154.97 316.05 154.98 315.86 154.99C315.67 155.01 315.5 155.02 315.35 155.05V161.55H312.97V153.41H312.94Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M329.48 161.26C329.27 161.32 329.02 161.39 328.74 161.44C328.46 161.49 328.17 161.55 327.87 161.59C327.57 161.63 327.26 161.67 326.94 161.69C326.62 161.71 326.32 161.73 326.04 161.73C325.35 161.73 324.73 161.63 324.18 161.43C323.64 161.23 323.18 160.94 322.8 160.56C322.43 160.18 322.14 159.72 321.94 159.18C321.74 158.64 321.64 158.04 321.64 157.36C321.64 156.68 321.72 156.06 321.9 155.51C322.07 154.96 322.32 154.49 322.64 154.11C322.96 153.73 323.35 153.43 323.82 153.23C324.28 153.03 324.81 152.93 325.41 152.93C325.74 152.93 326.04 152.96 326.3 153.03C326.56 153.09 326.82 153.19 327.09 153.3V149.49L329.47 149.11V161.26H329.48ZM324.09 157.26C324.09 158 324.26 158.59 324.59 159.04C324.92 159.49 325.41 159.71 326.06 159.71C326.27 159.71 326.47 159.7 326.65 159.69C326.83 159.67 326.98 159.65 327.1 159.63V155.29C326.95 155.19 326.76 155.11 326.52 155.05C326.28 154.99 326.04 154.95 325.79 154.95C324.66 154.96 324.09 155.73 324.09 157.26Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M331.02 157.39C331.02 156.64 331.13 155.99 331.36 155.43C331.59 154.87 331.89 154.4 332.26 154.03C332.63 153.66 333.06 153.37 333.55 153.18C334.03 152.99 334.53 152.89 335.05 152.89C336.24 152.89 337.19 153.26 337.88 153.99C338.57 154.72 338.92 155.8 338.92 157.21C338.92 157.35 338.92 157.5 338.9 157.67C338.89 157.84 338.88 157.98 338.87 158.11H333.46C333.51 158.6 333.74 158.99 334.15 159.28C334.56 159.57 335.1 159.71 335.78 159.71C336.22 159.71 336.65 159.67 337.07 159.59C337.49 159.51 337.84 159.41 338.1 159.29L338.42 161.23C338.29 161.29 338.12 161.36 337.91 161.42C337.7 161.48 337.46 161.54 337.2 161.59C336.94 161.64 336.66 161.68 336.36 161.71C336.06 161.74 335.76 161.76 335.46 161.76C334.7 161.76 334.04 161.65 333.48 161.42C332.92 161.2 332.46 160.89 332.09 160.5C331.72 160.11 331.45 159.65 331.27 159.12C331.11 158.59 331.02 158.01 331.02 157.39ZM336.62 156.48C336.61 156.28 336.57 156.08 336.52 155.89C336.46 155.7 336.37 155.53 336.25 155.38C336.13 155.23 335.97 155.11 335.79 155.01C335.6 154.91 335.37 154.87 335.09 154.87C334.82 154.87 334.59 154.91 334.4 155.01C334.21 155.1 334.05 155.22 333.92 155.37C333.79 155.52 333.69 155.69 333.62 155.89C333.55 156.09 333.5 156.29 333.47 156.49H336.62V156.48Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M345.53 155.23C345.32 155.18 345.07 155.12 344.78 155.06C344.49 155 344.18 154.97 343.85 154.97C343.7 154.97 343.52 154.98 343.31 155.01C343.1 155.04 342.94 155.07 342.84 155.1V161.53H340.46V153.56C340.89 153.41 341.39 153.27 341.97 153.14C342.55 153.01 343.2 152.94 343.91 152.94C344.04 152.94 344.19 152.95 344.37 152.96C344.55 152.98 344.73 153 344.91 153.02C345.09 153.04 345.27 153.08 345.45 153.12C345.63 153.16 345.79 153.2 345.91 153.26L345.53 155.23Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M349.32 159.83C349.76 159.83 350.07 159.79 350.25 159.7C350.43 159.61 350.52 159.45 350.52 159.2C350.52 159.01 350.4 158.84 350.17 158.7C349.94 158.56 349.58 158.39 349.1 158.21C348.73 158.07 348.39 157.93 348.08 157.78C347.78 157.63 347.52 157.45 347.3 157.24C347.09 157.03 346.92 156.78 346.8 156.5C346.68 156.22 346.62 155.87 346.62 155.46C346.62 154.67 346.91 154.05 347.5 153.59C348.09 153.13 348.89 152.9 349.92 152.9C350.43 152.9 350.92 152.94 351.39 153.04C351.86 153.13 352.23 153.23 352.51 153.34L352.09 155.2C351.81 155.1 351.51 155.02 351.19 154.94C350.86 154.87 350.5 154.83 350.09 154.83C349.34 154.83 348.97 155.04 348.97 155.45C348.97 155.55 348.99 155.63 349.02 155.71C349.05 155.79 349.12 155.86 349.21 155.93C349.3 156 349.44 156.07 349.6 156.15C349.77 156.23 349.98 156.32 350.23 156.42C350.75 156.61 351.19 156.8 351.53 156.99C351.87 157.18 352.14 157.38 352.34 157.6C352.54 157.82 352.68 158.06 352.76 158.33C352.84 158.6 352.88 158.91 352.88 159.26C352.88 160.09 352.57 160.72 351.94 161.14C351.32 161.56 350.43 161.78 349.29 161.78C348.54 161.78 347.92 161.72 347.42 161.59C346.92 161.46 346.58 161.36 346.39 161.27L346.79 159.33C347.19 159.49 347.61 159.62 348.04 159.71C348.48 159.78 348.91 159.83 349.32 159.83Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M354.28 151.03L356.66 150.65V153.13H359.52V155.11H356.66V158.07C356.66 158.57 356.75 158.97 356.92 159.27C357.1 159.57 357.45 159.72 357.98 159.72C358.24 159.72 358.5 159.7 358.77 159.65C359.04 159.6 359.29 159.54 359.51 159.45L359.85 161.31C359.56 161.43 359.24 161.53 358.89 161.61C358.54 161.69 358.1 161.74 357.59 161.74C356.94 161.74 356.4 161.65 355.97 161.48C355.54 161.3 355.2 161.06 354.95 160.74C354.7 160.42 354.52 160.04 354.41 159.6C354.3 159.16 354.26 158.66 354.26 158.11V151.03H354.28Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M363.87 152.9C364.57 152.9 365.16 152.98 365.63 153.14C366.1 153.3 366.48 153.53 366.76 153.83C367.04 154.13 367.24 154.49 367.36 154.92C367.48 155.35 367.54 155.82 367.54 156.34V161.3C367.2 161.38 366.72 161.46 366.12 161.56C365.51 161.66 364.78 161.71 363.91 161.71C363.37 161.71 362.87 161.66 362.43 161.57C361.99 161.47 361.61 161.32 361.29 161.1C360.97 160.88 360.72 160.6 360.55 160.24C360.38 159.89 360.29 159.46 360.29 158.94C360.29 158.45 360.39 158.03 360.59 157.69C360.79 157.35 361.05 157.08 361.38 156.87C361.71 156.67 362.09 156.52 362.52 156.43C362.95 156.34 363.39 156.29 363.85 156.29C364.16 156.29 364.43 156.3 364.67 156.33C364.91 156.36 365.1 156.39 365.25 156.43V156.21C365.25 155.8 365.13 155.48 364.88 155.23C364.63 154.98 364.21 154.86 363.6 154.86C363.19 154.86 362.79 154.89 362.4 154.95C362.01 155.01 361.66 155.09 361.38 155.2L361.08 153.28C361.22 153.24 361.39 153.19 361.6 153.14C361.81 153.09 362.03 153.05 362.28 153.01C362.52 152.97 362.78 152.94 363.06 152.91C363.31 152.91 363.59 152.9 363.87 152.9ZM364.06 159.87C364.29 159.87 364.52 159.87 364.73 159.85C364.94 159.84 365.11 159.82 365.24 159.8V158C365.14 157.98 365 157.96 364.81 157.94C364.62 157.92 364.44 157.91 364.28 157.91C364.06 157.91 363.85 157.92 363.65 157.95C363.45 157.98 363.28 158.03 363.13 158.1C362.98 158.18 362.86 158.28 362.78 158.4C362.69 158.53 362.65 158.69 362.65 158.88C362.65 159.25 362.77 159.51 363.03 159.66C363.28 159.8 363.62 159.87 364.06 159.87Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M369.38 153.41C369.79 153.29 370.31 153.18 370.95 153.08C371.59 152.98 372.26 152.93 372.97 152.93C373.68 152.93 374.28 153.02 374.75 153.21C375.22 153.4 375.6 153.66 375.88 154C376.16 154.34 376.35 154.75 376.47 155.22C376.59 155.69 376.65 156.21 376.65 156.79V161.54H374.27V157.08C374.27 156.31 374.17 155.77 373.97 155.45C373.77 155.13 373.39 154.97 372.83 154.97C372.66 154.97 372.48 154.98 372.29 154.99C372.1 155.01 371.93 155.02 371.78 155.05V161.55H369.4V153.41H369.38Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M385.93 161.26C385.72 161.32 385.47 161.39 385.19 161.44C384.91 161.5 384.62 161.55 384.32 161.59C384.02 161.63 383.71 161.67 383.39 161.69C383.07 161.71 382.77 161.73 382.49 161.73C381.8 161.73 381.18 161.63 380.63 161.43C380.09 161.23 379.63 160.94 379.25 160.56C378.88 160.18 378.59 159.72 378.39 159.18C378.19 158.64 378.1 158.04 378.1 157.36C378.1 156.68 378.18 156.06 378.36 155.51C378.53 154.96 378.78 154.49 379.1 154.11C379.42 153.73 379.81 153.43 380.28 153.23C380.74 153.03 381.27 152.93 381.87 152.93C382.2 152.93 382.5 152.96 382.76 153.03C383.02 153.09 383.28 153.19 383.55 153.3V149.49L385.93 149.11V161.26ZM380.54 157.26C380.54 158 380.71 158.59 381.04 159.04C381.37 159.49 381.86 159.71 382.51 159.71C382.72 159.71 382.92 159.7 383.1 159.69C383.28 159.67 383.43 159.65 383.55 159.63V155.29C383.4 155.19 383.21 155.11 382.97 155.05C382.73 154.99 382.49 154.95 382.24 154.95C381.1 154.96 380.54 155.73 380.54 157.26Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M390.47 150.69C390.47 151.13 390.33 151.47 390.05 151.72C389.77 151.97 389.43 152.1 389.05 152.1C388.67 152.1 388.33 151.98 388.05 151.72C387.77 151.47 387.63 151.13 387.63 150.69C387.63 150.25 387.77 149.91 388.05 149.66C388.33 149.41 388.67 149.28 389.05 149.28C389.43 149.28 389.77 149.4 390.05 149.66C390.33 149.91 390.47 150.25 390.47 150.69ZM390.25 161.54H387.87V153.12H390.25V161.54Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M392.19 153.41C392.59 153.29 393.12 153.18 393.76 153.08C394.4 152.98 395.07 152.93 395.78 152.93C396.49 152.93 397.09 153.02 397.56 153.21C398.03 153.4 398.41 153.66 398.69 154C398.97 154.34 399.16 154.75 399.28 155.22C399.4 155.69 399.46 156.21 399.46 156.79V161.54H397.08V157.08C397.08 156.31 396.98 155.77 396.78 155.45C396.58 155.13 396.2 154.97 395.64 154.97C395.47 154.97 395.29 154.98 395.1 154.99C394.91 155.01 394.74 155.02 394.59 155.05V161.55H392.21V153.41H392.19Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M408.57 160.48C408.57 161.86 408.22 162.88 407.52 163.54C406.82 164.2 405.74 164.54 404.28 164.54C403.77 164.54 403.25 164.5 402.74 164.4C402.23 164.3 401.75 164.19 401.32 164.04L401.74 162.04C402.11 162.19 402.51 162.31 402.92 162.39C403.33 162.47 403.8 162.52 404.32 162.52C405 162.52 405.49 162.37 405.77 162.07C406.05 161.77 406.19 161.39 406.19 160.92V160.62C405.93 160.74 405.67 160.83 405.4 160.88C405.13 160.94 404.83 160.97 404.51 160.97C403.35 160.97 402.46 160.63 401.84 159.94C401.22 159.25 400.91 158.29 400.91 157.05C400.91 156.43 401.01 155.87 401.2 155.36C401.39 154.85 401.67 154.42 402.04 154.06C402.41 153.7 402.86 153.42 403.39 153.22C403.92 153.02 404.53 152.92 405.2 152.92C405.49 152.92 405.78 152.93 406.09 152.96C406.39 152.99 406.7 153.02 406.99 153.06C407.28 153.1 407.57 153.15 407.85 153.21C408.12 153.27 408.37 153.33 408.58 153.39V160.48H408.57ZM403.34 157.06C403.34 158.39 403.88 159.06 404.96 159.06C405.2 159.06 405.43 159.03 405.65 158.96C405.86 158.9 406.04 158.82 406.19 158.74V154.93C406.07 154.91 405.93 154.89 405.77 154.87C405.61 154.85 405.42 154.85 405.21 154.85C404.58 154.85 404.11 155.06 403.8 155.47C403.49 155.89 403.34 156.42 403.34 157.06Z",
                                fill: textColor ? textColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M133.128 56.0699C132.818 59.4299 132.138 61.6999 130.408 60.7999C128.838 59.9899 126.648 63.1199 126.688 61.7699C126.818 57.09 124.668 59.9699 123.578 54.8699C123.368 53.9199 123.318 53.45 123.428 52.47C123.548 51.41 124.418 49.4599 127.298 48.7799C131.018 47.9099 131.588 50.3599 132.658 52.1099C132.918 52.5399 132.318 52.8899 132.658 53.1999C133.308 53.7899 133.338 53.7699 133.128 56.0699Z",
                                fill: logoColor ? logoColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M159.368 65.3701C159.088 66.8901 159.678 68.7901 161.118 70.5301C162.548 72.2701 163.948 72.8601 164.228 73.1901C165.018 74.1201 165.518 74.1701 164.148 78.9501C163.898 79.8301 156.918 68.4101 156.488 66.3501C155.748 62.8101 157.878 63.7201 155.748 60.0101C153.518 56.1401 156.808 57.2601 156.038 53.9701C155.808 52.9801 160.358 60.0201 159.368 65.3701Z",
                                fill: logoColor ? logoColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M112.138 46.66C112.138 46.66 113.878 45.13 116.948 45.48C123.858 46.27 121.608 46.75 123.598 46.95C128.458 47.43 128.378 47.65 127.268 47.77C125.188 48.01 124.398 48.77 124.398 48.77C124.398 48.77 123.648 48.54 123.978 47.5C123.978 47.5 122.998 47.3 122.418 47.86C121.208 49.06 113.568 50.05 113.578 48.06C113.588 47.15 112.138 46.66 112.138 46.66Z",
                                fill: logoColor ? logoColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M122.248 52.59C122.178 51.99 122.268 51.33 120.568 50.9C118.868 50.47 117.488 51.49 114.858 50.99C113.438 50.72 111.498 49.72 111.498 49.72C111.498 49.72 111.978 51.27 115.058 52.32C116.168 52.69 117.808 53.41 119.328 53.67C120.808 53.92 122.118 55.31 122.118 55.31C122.118 55.31 122.308 53.16 122.248 52.59Z",
                                fill: logoColor ? logoColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M153.428 58.92C153.428 58.92 152.588 65.56 157.738 74.79C160.468 79.69 164.238 82.76 164.678 91.59C165.358 105.39 166.448 105.37 165.698 107.98C164.948 110.59 163.268 116.5 163.268 116.5C163.268 116.5 162.438 99.8 161.688 92.15C160.938 84.5 158.818 82.25 156.758 78.89C154.698 75.53 152.118 68.74 151.748 65.46C151.558 63.71 151.768 62.31 151.728 61.42C151.698 60.71 152.008 60.04 152.568 59.6L153.428 58.92Z",
                                fill: "url(#paint0_linear_144_888)"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M149.178 62.05C149.178 62.05 149.638 68.5501 151.028 72.5501C152.418 76.5401 157.868 86.01 158.448 90.35C159.028 94.69 159.148 108.6 159.378 110.77C159.548 112.34 159.948 115.01 160.208 116.46C160.638 118.9 162.048 118.38 161.918 118.98L160.298 122.6C160.298 122.6 158.338 121.95 157.188 119.33C156.028 116.71 155.678 107.35 156.028 101.42C156.378 95.49 157.068 91.32 155.208 87.21C153.358 83.1 149.708 78.29 148.608 73.24C147.948 70.21 148.078 66.69 147.888 65.31C147.828 64.9 147.908 64.4801 148.098 64.1101L149.178 62.05Z",
                                fill: "url(#paint1_linear_144_888)"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M145.248 67.52C145.248 67.52 146.388 72.95 147.278 76.69C148.168 80.43 152.998 86.83 153.498 91.53C153.778 94.18 153.358 113.3 150.538 117.29C146.378 123.16 144.918 119.37 144.918 119.37C144.918 119.37 148.408 115.62 149.438 112.03C151.288 105.57 150.998 94.41 150.838 92.25C150.588 88.99 146.898 84.05 146.138 81.51C145.378 78.98 144.688 76.01 144.628 75.39C144.148 69.64 145.248 67.52 145.248 67.52Z",
                                fill: "url(#paint2_linear_144_888)"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M138.978 133.93C139.238 136.08 140.158 138.14 141.858 139.48C143.818 141.02 146.758 141.81 150.368 138.03C151.958 136.37 159.488 126.46 159.208 124.85C159.158 124.54 158.588 122.79 155.658 123.59C154.938 123.79 155.168 115.05 149.598 121.64C145.378 126.64 145.598 119.56 141.398 122.58C139.548 123.92 138.398 129.22 138.978 133.93Z",
                                fill: "url(#paint3_linear_144_888)"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M118.648 77.12C118.648 77.12 130.688 82.34 120.388 107.3C119.048 110.54 121.548 112.52 119.338 111.8C118.408 111.49 118.378 110.91 115.898 110.96C115.278 110.97 122.698 103.35 122.188 88.69C121.928 81.03 114.118 75.99 115.658 76.3C118.278 76.84 118.648 77.12 118.648 77.12Z",
                                fill: logoColor ? logoColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M98.3182 58.3599C97.6382 57.2399 96.2182 56.1599 95.6882 55.9399C93.4782 55.2399 91.0782 55.1199 91.3982 65.3299C91.4282 66.2899 92.2782 67.1299 93.2382 67.0699C95.0482 66.9499 96.1882 67.3599 97.1982 67.8299C95.5982 66.0499 95.5382 64.9599 95.9182 62.6499C96.2382 60.7099 96.5582 59.1199 98.3182 58.3599Z",
                                fill: logoColor ? logoColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M131.298 29.68C130.858 29.44 129.838 28.89 129.798 28.17C129.748 27.43 127.688 23.97 125.518 25.98C123.798 27.57 119.538 20.52 95.1782 18.67C73.6382 17.03 50.8182 32.32 46.9782 35.77C44.8482 37.68 45.5482 40.11 51.4582 37.27C56.1282 35.03 46.8583 48.19 52.6283 56.99C59.2683 67.12 54.7982 48.37 61.6382 49.43C60.9882 53.61 60.8483 59.12 60.8783 60.66C60.9683 65.55 63.4882 67.75 72.4482 67.84C77.2382 67.89 70.9683 61.66 71.1583 55.1C71.2483 52.02 73.8083 51.89 75.2483 50.6C74.4083 58.39 74.5883 68.18 80.6583 67.61C86.6083 67.05 88.3082 67.7 89.5382 64.43C90.2782 62.46 87.1583 63.32 86.8283 61.39C86.7783 61.12 84.6182 52.11 90.0982 49.71C93.4782 48.23 95.9882 51.33 98.4282 54.17C103.718 60.33 109.118 63.41 109.548 63.66C113.788 66.16 118.528 64.85 120.288 64.57C128.328 63.27 112.448 54.22 110.408 51.83C102.998 43.15 115.668 41.82 134.108 44.83C137.458 45.38 139.898 43.48 140.448 42.89C141.588 41.67 142.598 41.23 143.118 39.59C143.768 37.52 137.068 32.84 131.298 29.68ZM129.428 36.99C128.318 36.99 127.418 36.09 127.418 34.98C127.418 33.87 128.318 32.97 129.428 32.97C130.538 32.97 131.438 33.87 131.438 34.98C131.438 36.09 130.538 36.99 129.428 36.99Z",
                                fill: "url(#paint4_linear_144_888)"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M132.048 61.4201C132.048 61.4201 131.748 62.4101 131.218 62.7201C130.938 62.8801 130.298 63.2401 129.198 63.2201C128.098 63.2001 127.338 62.7801 127.188 62.7501C127.038 62.7301 126.788 63.5601 127.018 63.8001C127.238 64.0401 128.688 64.4701 129.128 64.5701C129.818 64.7401 130.448 64.8001 131.118 64.1901C131.788 63.5801 132.268 62.8601 132.288 62.5601C132.408 61.0101 132.048 61.4201 132.048 61.4201Z",
                                fill: logoColor ? logoColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M147.598 93.04C147.248 92.03 146.728 91.79 146.718 91.79C146.668 91.9 147.228 97.97 144.628 99.62C142.568 100.93 142.038 101.17 136.698 103.76C131.358 106.35 129.878 106.66 126.698 108.24C122.968 110.1 124.518 115.73 124.468 116.03C124.468 116.03 123.908 115.31 123.458 114.72C123.078 114.23 122.558 113.88 121.968 113.71L121.778 113.66C121.278 116.84 121.998 116.76 121.788 118.67C120.238 132.45 124.628 130.18 125.338 130.09C125.848 129.89 126.258 129.66 126.588 129.42C126.988 133.4 127.478 138.28 127.668 139.82C128.008 142.57 130.058 142.1 131.778 145.69C133.968 150.29 136.598 149 138.048 147.72C140.678 149.34 143.208 145.77 143.208 145.77C143.208 145.77 143.948 143.95 141.398 143.33C139.698 142.91 139.158 141.25 137.248 136.99C134.858 131.65 138.168 122.2 138.168 122.2L135.418 121.99C131.148 121.48 131.208 125.74 129.038 125.18L128.248 124.8C129.348 116.78 139.498 120.31 143.358 117.63C148.508 114.06 143.898 116 147.778 96.89C147.788 96.87 148.038 94.28 147.598 93.04Z",
                                fill: "url(#paint5_linear_144_888)"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M129.468 104.28C132.918 102.9 138.828 102.07 142.918 98.25C147.828 93.66 144.148 87.83 143.498 84.01C142.058 84.41 139.558 87.65 137.428 85.71C133.658 82.29 130.978 84.86 129.478 87.38C128.588 88.87 128.078 90.56 127.928 92.3C127.778 93.92 127.418 96.57 126.518 99.69C126.108 101.12 124.058 105.71 122.788 109.05C124.718 106.39 126.018 105.66 129.468 104.28Z",
                                fill: logoColor ? logoColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M149.658 45.4301C149.478 46.0601 150.088 47.4501 149.298 48.3001C148.458 49.2101 147.258 49.6301 145.748 49.9801C145.718 49.9901 145.698 49.9901 145.668 50.0001C146.868 51.2701 147.098 52.6301 147.608 53.2201C149.658 55.5901 134.698 58.2501 135.048 61.5901C135.058 61.7301 135.178 61.8301 135.318 61.8601C136.138 62.0401 138.908 62.8801 137.548 66.1601C133.148 76.7901 126.138 73.7901 124.268 70.1301C123.368 68.3801 123.978 66.8401 121.608 67.4201C117.318 68.4801 114.678 67.9201 111.818 67.4001C107.308 66.5701 105.378 64.9701 103.068 63.0801C101.758 62.0201 101.628 61.7601 100.298 60.3301C99.4783 59.4601 99.2283 59.5401 99.2283 59.5401C98.1983 61.6401 97.7383 63.36 98.2183 66.5201C98.4783 68.2601 98.7083 68.6501 102.218 69.4401C109.648 71.1201 118.878 73.5401 123.858 78.5201C128.038 82.7 126.998 87.3801 128.518 85.6801C130.018 83.9901 130.418 83.4301 133.608 82.1201C134.828 81.6201 136.418 81.3101 137.728 81.4101C143.608 81.8701 144.038 79.3201 143.918 78.0001C143.188 69.8101 141.708 68.3501 143.368 65.4401C146.158 60.5501 153.908 57.0001 153.698 54.2601C153.548 52.6101 151.488 48.3801 149.658 45.4301Z",
                                fill: logoColor ? logoColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M125.348 65.37C124.498 66.13 124.228 67.38 124.758 68.4C124.928 68.74 125.178 69.0899 125.538 69.4499C127.258 71.1699 128.768 72.3899 130.338 71.9499C131.908 71.5099 132.588 71.66 134.108 69.55C135.628 67.44 136.658 65.97 136.608 64.65C136.558 63.3299 135.988 62.8799 135.478 62.5699C134.838 62.1799 133.538 61.2499 133.078 62.4499C132.398 64.1999 132.638 66.2299 129.078 65.3799C127.598 65.0199 127.278 64.29 126.168 64.76C126.028 64.81 125.678 65.08 125.348 65.37Z",
                                fill: logoColor ? logoColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M143.058 44.47C143.968 44.47 144.458 43.95 145.088 43.08C145.488 42.54 145.768 41.28 144.878 40.72C142.718 40.26 143.538 43.28 140.948 44.24C140.758 44.31 140.698 44.45 140.738 44.65C141.888 44.63 142.408 44.47 143.058 44.47Z",
                                fill: logoColor ? logoColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M148.288 43.5999C147.688 42.8199 147.088 42.1599 146.538 41.6599C146.528 41.8299 146.528 42.0099 146.528 42.1999C146.528 43.0699 146.358 43.7299 145.588 44.5499C144.878 45.3099 143.758 45.5199 142.218 45.7999C141.958 45.8499 141.768 45.8999 141.628 45.9399C142.158 46.5299 143.328 46.4499 144.078 47.1799C144.428 47.6899 144.508 48.5099 146.378 48.0299C147.238 47.8099 147.338 47.0199 147.958 45.9599C148.258 45.4299 148.858 44.8399 148.288 43.5999Z",
                                fill: logoColor ? logoColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M45.7983 54.7C43.8583 50.51 43.2983 47.71 43.2483 46.82C43.1583 44.95 47.9383 43.34 47.9783 43.04C48.1983 41.38 47.5483 41.81 47.5483 41.81C47.5483 41.81 45.3183 42.87 42.3083 44.88C42.2383 44.47 42.1083 43.16 42.0583 42.68C42.0483 42.56 42.0383 42.45 42.0383 42.33C42.0383 42 42.0283 41.17 41.9183 40C41.8783 39.55 41.5983 39.48 41.1083 40.15C40.7483 40.64 40.7983 41.58 40.8983 42.93C40.9783 44.07 41.2083 45.03 41.3583 45.54C37.5183 48.23 32.7483 52.32 29.6683 57.63C26.2383 63.55 20.5083 73.76 20.4983 90.79C20.4883 100.63 22.3883 106.74 22.3883 106.74C25.9183 108.61 22.4083 94.94 36.3583 93.52C40.3283 93.11 41.5483 71.27 42.7983 73.48C47.0683 80.98 53.1383 89.18 58.4383 91.64C60.9183 92.79 63.8483 88.62 65.8083 82.81C68.8883 73.67 79.0283 71.68 78.8583 71.69C58.5683 72.84 50.5283 64.91 45.7983 54.7Z",
                                fill: "url(#paint6_linear_144_888)"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M122.888 133.82C119.828 134.18 119.768 135.29 118.148 135.07C115.008 134.63 117.628 124.22 118.148 122.38C119.998 115.81 115.718 114.79 113.518 114.34C112.978 114.23 114.948 115.56 113.288 119.66C109.658 128.65 107.208 128.17 102.318 127.07C96.2083 125.7 98.5783 130.98 98.6583 130.74C98.8383 130.19 99.2883 130.2 99.6883 130.27C102.758 130.75 105.768 140.47 96.6283 143.18C87.5583 145.88 76.8483 142.37 77.7383 143.06C83.3583 147.4 88.7583 148.31 95.1883 147.84C101.168 147.4 102.958 146.65 106.088 145.08C117.058 139.56 112.578 144 116.168 144.49C132.838 146.75 124.888 142.53 123.478 141.28C120.768 138.85 127.558 133.27 122.888 133.82ZM96.3583 143.89C96.0983 144.04 96.1383 144.01 96.3683 143.86C96.3683 143.87 96.3783 143.87 96.3783 143.88C96.3783 143.89 96.3683 143.89 96.3583 143.89Z",
                                fill: "url(#paint7_linear_144_888)"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M126.268 152.8C127.138 152.12 128.458 152.38 131.248 152.29C131.778 150.93 130.708 147.44 121.208 147.16C108.408 146.79 101.238 152.38 95.8282 150.54C94.1282 149.96 93.1782 150.25 90.5282 151.2L87.4382 152.35C87.0882 152.49 87.1782 152.8 87.4282 152.9C89.3782 153.7 90.8882 154.71 90.8882 154.71C90.8882 154.71 74.4382 160.78 68.2782 155.24C57.7282 145.77 67.5182 157.48 65.2082 158.86C66.2882 159.35 67.3682 159.8 68.4582 160.2C102.198 172.55 129.188 155.73 129.188 155.73C129.188 155.73 130.228 154.99 130.128 154.4C130.048 154.03 129.978 153.2 128.308 153.63C126.188 154.18 125.018 153.77 126.268 152.8ZM122.168 152.38C121.398 152.38 120.768 151.76 120.768 150.99C120.768 150.22 121.398 149.6 122.168 149.6C122.938 149.6 123.568 150.22 123.568 150.99C123.568 151.76 122.938 152.38 122.168 152.38Z",
                                fill: "url(#paint8_linear_144_888)"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M76.4183 1.44004C75.1983 1.66004 73.9783 1.90004 72.7783 2.16004C71.9683 2.34004 71.3983 3.06004 71.3983 3.89004V7.55004C71.3983 8.68004 72.4483 9.52004 73.5483 9.27004C74.7083 9.01004 75.8683 8.77004 77.0483 8.55004C77.8883 8.39004 78.5083 7.67004 78.5083 6.81004V3.18004C78.5083 2.07004 77.5083 1.25004 76.4183 1.44004Z",
                                fill: logoColor ? logoColor : "#DA5225"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M103.038 5.31V2.57C103.038 1.43 102.168 0.49 101.038 0.39C98.2683 0.13 95.4783 0 92.6583 0C90.2483 0 87.8683 0.1 85.5083 0.28C84.3583 0.37 83.4683 1.32 83.4683 2.47V5.21C83.4683 6.49 84.5583 7.49 85.8383 7.39C88.0883 7.21 90.3583 7.11 92.6483 7.11C95.3483 7.11 98.0083 7.24 100.638 7.49C101.928 7.6 103.038 6.59 103.038 5.31Z",
                                fill: logoColor ? logoColor : "#DA5225"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M113.678 2.43005C112.398 2.13005 111.108 1.86005 109.808 1.61005C108.868 1.43005 107.998 2.14005 107.998 3.09005V7.24005C107.998 7.97005 108.518 8.58005 109.228 8.72005C110.488 8.97005 111.738 9.25005 112.978 9.55005C113.928 9.78005 114.838 9.06005 114.838 8.08005V3.90005C114.838 3.20005 114.358 2.59005 113.678 2.43005Z",
                                fill: logoColor ? logoColor : "#DA5225"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M173.718 48.51C173.208 47.56 172.688 46.63 172.158 45.7C171.718 44.95 170.808 44.6 169.978 44.86L166.688 45.87C165.528 46.23 165.008 47.58 165.628 48.62C166.148 49.5 166.658 50.39 167.148 51.29C167.578 52.08 168.498 52.47 169.368 52.2L172.628 51.19C173.748 50.86 174.278 49.56 173.718 48.51Z",
                                fill: logoColor ? logoColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M182.388 71.75C181.238 66.63 179.668 61.68 177.708 56.92C177.278 55.87 176.128 55.32 175.048 55.65L172.398 56.47C171.168 56.85 170.538 58.2 171.038 59.39C172.928 63.92 174.428 68.64 175.508 73.53C175.788 74.77 177.058 75.51 178.268 75.14L180.908 74.33C181.998 73.98 182.638 72.86 182.388 71.75Z",
                                fill: logoColor ? logoColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M184.308 84.38C184.208 83.21 184.098 82.04 183.958 80.87C183.818 79.71 182.668 78.96 181.558 79.3L178.278 80.31C177.418 80.58 176.878 81.42 176.978 82.31C177.098 83.42 177.208 84.55 177.288 85.67C177.378 86.86 178.548 87.66 179.688 87.31L182.998 86.3C183.828 86.04 184.378 85.24 184.308 84.38Z",
                                fill: logoColor ? logoColor : "#610000"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M159.538 155.09C160.288 154.29 161.028 153.48 161.758 152.66C162.318 152.02 162.358 151.07 161.858 150.37L159.798 147.52C159.108 146.56 157.688 146.49 156.918 147.39C156.228 148.19 155.528 148.97 154.808 149.74C154.208 150.39 154.138 151.36 154.648 152.08L156.688 154.91C157.378 155.85 158.738 155.94 159.538 155.09Z",
                                fill: logoColor ? logoColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M140.318 170.63C144.748 167.94 148.938 164.88 152.838 161.5C153.708 160.75 153.868 159.47 153.198 158.54L151.598 156.32C150.838 155.27 149.348 155.1 148.378 155.95C144.668 159.19 140.668 162.11 136.428 164.67C135.328 165.33 135.028 166.79 135.778 167.83L137.378 170.04C138.058 170.99 139.338 171.23 140.318 170.63Z",
                                fill: logoColor ? logoColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M129.158 176.4C130.048 176.02 130.928 175.62 131.808 175.21C133.038 174.63 133.448 173.07 132.648 171.97L131.008 169.69C130.398 168.84 129.258 168.56 128.308 169C127.488 169.38 126.658 169.75 125.818 170.11C124.538 170.66 124.088 172.25 124.898 173.38L126.558 175.68C127.148 176.49 128.228 176.81 129.158 176.4Z",
                                fill: logoColor ? logoColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M54.2183 175.55C55.0983 175.96 55.9883 176.35 56.8883 176.73C57.8083 177.12 58.8883 176.81 59.4683 175.99L61.1383 173.67C61.9583 172.54 61.4983 170.94 60.2083 170.41C59.3583 170.06 58.5183 169.69 57.6883 169.32C56.7383 168.89 55.6283 169.17 55.0183 170.02L53.3683 172.31C52.5683 173.41 52.9783 174.97 54.2183 175.55Z",
                                fill: logoColor ? logoColor : "#456D90"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M32.9783 161.94C36.9483 165.33 41.2083 168.4 45.7283 171.08C46.6783 171.64 47.8983 171.4 48.5483 170.5L50.2283 168.17C50.9583 167.16 50.6583 165.74 49.5883 165.1C45.2783 162.56 41.2083 159.64 37.4283 156.4C36.4883 155.59 35.0583 155.76 34.3283 156.77L32.6483 159.09C32.0083 159.99 32.1483 161.23 32.9783 161.94Z",
                                fill: logoColor ? logoColor : "#456D90"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M24.2083 153.38C24.8383 154.08 25.4783 154.78 26.1383 155.46C27.0283 156.4 28.5583 156.29 29.3183 155.24L31.0883 152.79C31.6683 151.98 31.5883 150.88 30.8983 150.15C30.2883 149.5 29.6883 148.84 29.0883 148.17C28.2083 147.18 26.6383 147.25 25.8683 148.33L24.0883 150.8C23.5183 151.59 23.5583 152.67 24.2083 153.38Z",
                                fill: logoColor ? logoColor : "#456D90"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M1.2883 81.37C1.1783 82.31 1.0883 83.26 1.0083 84.21C0.918304 85.23 1.5683 86.17 2.5483 86.47L5.2083 87.29C6.5583 87.71 7.9383 86.76 8.0383 85.36C8.1083 84.46 8.1883 83.56 8.2883 82.67C8.4083 81.62 7.7383 80.64 6.7383 80.33L4.1183 79.52C2.8083 79.12 1.4483 80 1.2883 81.37Z",
                                fill: logoColor ? logoColor : "#E0AC0F"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M7.55831 57.0499C5.60831 61.7799 4.04831 66.7099 2.90831 71.7999C2.65831 72.9399 3.30831 74.0799 4.41831 74.4199L6.97831 75.2099C8.21831 75.5899 9.51831 74.8299 9.79831 73.5699C10.8683 68.7199 12.3683 64.0199 14.2283 59.5199C14.7283 58.3099 14.0883 56.9299 12.8383 56.5499L10.2783 55.7599C9.16831 55.4099 7.99831 55.9799 7.55831 57.0499Z",
                                fill: logoColor ? logoColor : "#E0AC0F"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M13.0483 45.9C12.5683 46.73 12.0883 47.58 11.6383 48.43C11.0283 49.56 11.6083 50.97 12.8383 51.35L15.7883 52.26C16.7183 52.55 17.7183 52.13 18.1883 51.27C18.6283 50.47 19.0783 49.68 19.5483 48.89C20.2183 47.75 19.6583 46.29 18.3983 45.9L15.4183 44.98C14.5083 44.71 13.5283 45.08 13.0483 45.9Z",
                                fill: logoColor ? logoColor : "#E0AC0F"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M19.3584 41.01C19.3584 41.01 21.5384 42.29 23.0484 40.3C42.0084 15.4 48.7784 17.3 65.0384 11.7C65.6384 11.49 66.8484 11.05 67.4684 10.49C67.7784 10.21 67.8184 9.72997 67.5884 9.37997L66.1584 7.14997C65.3584 6.07997 62.9184 6.55997 61.9084 6.88997C43.4884 13 30.9584 20.9 21.6184 35.37C19.7884 38.2 17.2384 40.57 19.3584 41.01Z",
                                fill: logoColor ? logoColor : "#AB9F89"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M93.8783 131.03C79.3483 133.56 62.6283 124.87 63.7483 117.49C64.4983 112.59 72.3283 109.97 67.3983 109.8C49.0083 109.16 57.5083 106.32 60.8383 103.11C68.1683 96.04 58.9283 99.84 56.1683 99.12C46.1883 96.52 52.7383 92.97 45.3883 84.32C44.8483 83.69 43.2283 97.15 35.7083 99.34C23.1483 103 42.1883 105.43 39.0683 106.31C29.8283 108.92 35.6483 112.98 26.1183 112.25C19.8983 111.77 33.5883 119.48 38.0483 117.26C41.8383 115.36 40.3583 120.67 30.4583 126.68C27.6083 128.41 46.5983 123.45 41.9983 127.88C39.0583 130.71 33.8383 130.2 31.1983 130.57C31.0483 130.59 32.6183 132.94 32.5983 133.09C33.7183 134.23 33.5783 134.53 35.3183 135.44C36.2783 135.95 38.5183 135.48 40.3483 134.9C41.3183 134.61 41.5083 134.37 42.2083 134.26C43.8683 133.66 45.4383 133.04 46.3983 132.89C50.1783 132.3 52.0583 132.97 52.0583 132.97C52.0583 132.97 52.7683 134.51 52.6983 136.52C52.3583 138.26 52.2683 140.29 48.0383 139.98C45.1583 139.77 43.0583 141.58 41.9283 142.87C45.4483 148.13 48.1983 149.24 49.0283 149.49C54.3583 151.09 53.4583 147.3 55.2483 148.07C63.6483 151.68 62.9083 147.52 63.7083 148.52C66.6283 152.2 70.3583 153.2 73.0683 152.34C77.5983 150.89 74.7183 150.41 79.5783 151.39C83.0283 152.08 86.4083 150.2 86.4083 150.2C84.1283 149.83 80.6583 149.57 78.5183 148.64C69.9783 144.92 69.4183 142.14 62.1683 138.54C58.9483 136.94 64.3583 132.46 63.9183 134.42C62.8483 139.24 83.4583 137.31 89.5983 135.45C97.0483 133.15 98.9283 130.15 93.8783 131.03ZM60.4683 129.1C58.2083 127.95 56.8583 127.13 55.8383 126.92C56.3183 127.56 56.7883 128.27 57.3583 129.44C59.2783 133.43 60.8983 136.5 56.4783 137.31C54.4083 137.69 56.5583 135.16 55.2883 131.08C54.8383 129.63 53.5483 127.36 52.0983 124.38C51.8183 124.6 51.4383 124.83 50.5283 125.55C44.4883 130.32 43.9183 129.54 43.9183 129.54C43.9183 129.54 48.2583 126.8 49.9483 124.93C50.7983 123.99 51.2183 123.48 51.4483 123.02C50.3183 120.61 49.2083 117.92 48.5283 115.18C47.9583 112.9 47.5983 111.58 47.2983 109.75L47.2483 109.49C47.2483 109.49 47.1483 108.78 45.5183 109.64C45.3083 109.75 45.0883 109.86 44.8683 109.96C43.7083 110.45 41.5883 111.34 41.5883 111.34C41.5883 111.34 40.5383 111.27 45.0983 109.21C46.3483 108.63 46.7383 108.37 46.9683 108.16C46.5083 105.08 46.3383 102.68 46.2483 101.67C45.8183 96.55 46.1083 94.37 46.2983 95.9C46.3583 96.38 46.7683 99.19 47.0983 101.56C47.2583 101.88 47.5283 101.92 48.7283 102.22C50.8483 102.75 52.0083 103.58 52.0083 103.58C52.0083 103.58 49.5683 103.04 48.7483 102.84C47.5383 102.54 47.2683 102.99 47.2683 102.99C47.2683 102.99 47.8883 108.02 48.9883 113.01C49.2983 113.25 49.9683 113.63 51.3583 114.06C53.3583 114.67 54.9583 114.42 54.9583 114.42C54.9583 114.42 55.0083 114.95 51.3883 115.03C50.4683 115.05 49.9083 115.1 49.5683 115.15C49.7583 115.75 49.9483 116.3 50.1483 116.76C52.4583 122.09 53.7783 124.19 54.7983 125.57C55.9383 125.8 57.9683 126.42 61.4183 128.49C63.3683 129.77 67.7383 130.31 67.7383 130.31C67.7383 130.31 63.8583 130.83 60.4683 129.1Z",
                                fill: "url(#paint9_linear_144_888)"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M119.578 7.04997C119.578 7.04997 119.008 10.02 121.498 10.29C136.048 11.83 151.838 26.73 162.608 40.15C163.008 40.65 163.578 42.39 164.308 42.66C164.698 42.81 165.378 42.31 165.918 41.81C166.458 41.31 166.698 41.19 167.858 40.81C169.018 40.43 168.698 39.61 168.468 38.98C167.998 37.69 164.558 34.74 163.988 34.24C155.138 26.46 149.008 15.38 125.168 7.02997C121.968 5.90997 119.278 4.90997 119.578 7.04997Z",
                                fill: logoColor ? logoColor : "#AB9F89"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M3.05837 90.49C3.05837 90.49 6.15837 90.81 5.60837 93.25C1.83837 109.9 12.6784 127.03 22.4584 141.18C22.8184 141.7 23.5284 142.77 23.6984 143.59C23.7784 144 23.6284 144.65 23.2384 144.8L21.4884 146.41C20.9584 146.82 20.2084 146.85 19.6584 146.45C18.5584 145.63 17.3984 143.87 17.0884 143.18C12.1684 132.47 2.61837 121.05 1.43837 95.82C1.27837 92.46 1.09837 89.59 3.05837 90.49Z",
                                fill: logoColor ? logoColor : "#AB9F89"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M63.4783 176.58C63.4783 176.58 64.4583 174.44 66.8983 175.01C97.2183 182.05 101.618 179.55 117.688 173.82C118.288 173.61 119.528 173.29 120.368 173.39C120.788 173.44 121.088 173.8 121.118 174.22L122.138 176.76C122.368 177.33 122.178 178 121.668 178.33C120.618 179.01 118.668 179.33 117.938 179.55C99.4083 185.32 88.7483 184.88 76.0183 182.88C72.6783 182.35 62.0083 178.17 63.4783 176.58Z",
                                fill: logoColor ? logoColor : "#AB9F89"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M183.378 90.37C182.888 90.26 182.378 90.36 181.948 90.61C180.868 91.23 178.828 92.67 178.908 94.68C179.818 118.45 173.078 126.92 163.308 141.07C162.948 141.59 162.238 142.66 162.068 143.48C161.988 143.89 162.138 144.54 162.528 144.69L164.278 146.3C164.808 146.71 165.558 146.74 166.108 146.34C167.208 145.52 168.368 143.76 168.678 143.07C173.598 132.36 183.148 120.94 184.328 95.71C184.468 92.65 185.538 90.84 183.378 90.37Z",
                                fill: logoColor ? logoColor : "#AB9F89"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M109.908 81.8699L105.828 83.3299C105.738 83.5699 105.388 83.7399 105.128 83.8299L96.4483 87.0799C96.1183 87.1899 95.7483 86.9999 95.6283 86.6499L95.4583 86.1499C95.3383 85.7999 95.5083 85.4199 95.8383 85.2999L104.858 82.4799C105.118 82.3899 105.398 82.2999 105.558 82.4499L109.508 81.0699C109.058 80.2699 108.538 79.4999 107.928 78.7799L107.298 78.0799C103.858 74.4799 98.3983 72.0999 92.1983 71.9399V73.5799C92.3883 73.6899 92.3983 73.9699 92.3983 74.2499L92.6983 83.6899C92.6983 84.0399 92.3983 84.3199 92.0183 84.3199H91.4883C91.1183 84.3199 90.8083 84.0399 90.8083 83.6899L91.0383 74.4299C91.0383 74.1599 91.0883 73.7699 91.2883 73.6099V71.9399C84.9683 71.9999 79.3683 74.3599 75.8483 77.9899L75.2083 78.6899C74.5583 79.4499 73.9983 80.2599 73.5283 81.1099L78.0083 82.6699C78.1683 82.5199 78.4483 82.6099 78.7083 82.6999L87.7283 85.5199C88.0583 85.6299 88.2283 86.0199 88.1083 86.3699L87.9383 86.8699C87.8183 87.2199 87.4483 87.4199 87.1183 87.2999L78.4383 84.0499C78.1783 83.9599 77.8283 83.7899 77.7383 83.5499L73.1283 81.8999C72.3783 83.4999 71.9683 85.2099 71.9683 86.9999C71.9683 90.3299 73.3683 93.4099 75.7483 95.9099L76.4283 96.5799C77.6083 97.6799 78.9883 98.6499 80.5183 99.4499L82.1483 97.6899C82.0783 97.4799 82.2683 97.2699 82.4583 97.0599L88.6383 89.9199C88.8783 89.6599 89.2883 89.6599 89.5683 89.9099L89.9583 90.2699C90.2383 90.5199 90.2683 90.9399 90.0283 91.1999L83.5783 97.8599C83.3983 98.0599 83.0883 98.3099 82.8383 98.2999L81.3583 99.8799C84.2283 101.23 87.5883 102.03 91.1883 102.08L92.0983 102.07C95.7583 101.99 99.1683 101.13 102.058 99.7099L100.808 98.3799C100.558 98.3999 100.258 98.1399 100.068 97.9399L93.6183 91.2799C93.3783 91.0199 93.4083 90.6099 93.6883 90.3499L94.0683 89.9999C94.3483 89.7499 94.7583 89.7499 94.9983 90.0099L101.178 97.1499C101.368 97.3599 101.558 97.5699 101.488 97.7799L102.878 99.2799C104.248 98.5299 105.488 97.6399 106.568 96.6399L107.248 95.9699C109.658 93.4599 111.088 90.3599 111.088 86.9999C111.088 85.1999 110.668 83.4699 109.908 81.8699Z",
                                fill: logoColor ? logoColor : "#AB9F89"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M96.5283 110.2C90.7183 118.1 88.5183 108.89 85.6983 109.71C81.7683 110.86 78.0283 116.73 76.6383 109.92C75.9783 106.68 75.7283 103.47 71.9983 106.39L72.2783 109.49C72.8183 117.46 79.3383 123.84 87.6483 124.61C88.9783 124.73 94.2583 124.91 95.0183 124.85C103.558 124.23 110.968 117.6 111.418 109.13L111.668 103.71C103.068 117.66 100.428 104.89 96.5283 110.2Z",
                                fill: logoColor ? logoColor : "#4C3B13"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M72.5983 102.83C72.1183 102.02 73.6683 100.22 73.6683 100.22C73.9683 99.76 73.6983 99.16 73.5283 98.8C72.7783 97.29 72.0183 96.4 71.7883 95.95L72.1483 103.01C72.1983 103.04 73.0683 103.63 72.5983 102.83Z",
                                fill: logoColor ? logoColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M81.8382 104.79C82.1682 104.76 79.0882 101.46 79.9882 102.68C80.4282 103.27 80.8782 105.22 80.8782 105.22C80.8782 105.22 81.5182 104.82 81.8382 104.79Z",
                                fill: logoColor ? logoColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M78.3882 107.23C78.0682 107.15 79.3682 108.95 79.7182 109.1C80.2082 109.32 80.7482 109.39 81.3182 109.27L80.5082 106.54C80.5182 106.55 79.6282 107.53 78.3882 107.23Z",
                                fill: logoColor ? logoColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M80.2682 105.52L79.2482 102.26C79.1082 101.79 78.7582 101.39 78.2882 101.24C77.8082 101.08 77.2182 101.09 76.4782 101.43C75.3882 101.94 74.6182 101.41 73.9882 100.81C73.9882 100.81 73.1482 102.26 73.4182 102.91C73.5282 103.18 73.7182 103.18 73.7582 103.18C75.2382 103.3 75.0582 101.98 76.0482 102.96C76.6582 103.57 77.4382 105.82 77.7482 106.02C78.3782 106.47 80.2682 105.52 80.2682 105.52Z",
                                fill: logoColor ? logoColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M93.1983 104.75C92.5383 104.15 92.0183 104.14 91.3783 104.08C90.6883 104.02 90.3083 104.15 89.8883 104.25C89.5783 104.32 89.6283 104.34 89.3883 104.34C89.8983 104.59 90.4483 104.83 90.9983 105.16C91.7283 105.6 92.3683 106.11 92.9283 106.55C93.0183 105.95 93.1083 105.35 93.1983 104.75Z",
                                fill: logoColor ? logoColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M93.0683 108.93C93.5883 108.89 95.7683 108.61 95.0283 108.61C94.2983 108.61 93.4683 107.87 93.4683 107.87C93.4683 107.87 93.4183 108.37 93.3183 108.58C93.1983 108.85 93.0683 108.93 93.0683 108.93Z",
                                fill: logoColor ? logoColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M92.7483 107.44L89.7183 105.15C88.8583 104.58 87.6983 104.73 86.8383 105.29C85.1083 106.42 83.0383 106.42 82.4383 105.62C82.1983 105.3 81.1483 106.13 81.1483 106.13L81.6583 107.87C81.8883 108.66 82.8183 109.05 83.5283 108.62C84.0783 108.28 84.6883 107.8 85.3883 107.15C86.8383 105.79 87.2283 107.9 90.1883 108.64C90.8083 108.79 91.3483 108.88 91.9183 108.92C92.2383 108.94 92.5183 108.7 92.5783 108.39L92.7483 107.44Z",
                                fill: logoColor ? logoColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M102.298 102.18C102.618 101.95 101.548 102.52 101.268 102.66C99.7684 103.41 98.6884 105.51 97.3384 105.77C96.6684 105.9 95.7484 104.91 94.2684 104.95C94.0484 104.95 93.8684 105.14 93.8284 105.36L93.5684 107.1L94.9584 107.94C95.4084 108.21 95.9884 108.22 96.4284 107.92C96.7384 107.71 97.0084 107.46 97.2084 107.2C98.2284 105.83 99.3384 106.19 100.208 105.68C101.078 105.17 101.078 103.08 102.298 102.18Z",
                                fill: logoColor ? logoColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M104.298 101.71C104.078 101.69 103.838 101.72 103.628 101.76C103.198 101.84 102.968 101.98 102.748 102.55C102.748 102.55 101.868 105.69 101.208 105.84C100.548 105.99 106.178 107.16 105.288 106.53C104.388 105.9 104.878 101.76 104.298 101.71Z",
                                fill: logoColor ? logoColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M108.868 101.01C108.608 100.97 108.348 101.07 108.188 101.28C107.788 101.83 107.518 102 107.108 102.15C106.378 102.41 104.368 100.96 105.218 101.82C106.068 102.68 105.868 105.82 105.868 105.82C105.748 106.56 106.578 106.73 107.078 106.48H107.088C108.648 105.69 109.198 103.92 109.528 102.96C109.798 102.18 109.878 101.48 109.788 101.16L108.868 101.01Z",
                                fill: logoColor ? logoColor : "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                d: "M111.438 101.16L111.628 92.27C111.368 94.8 110.098 97.55 108.378 100.13C108.378 100.13 109.288 99.94 109.718 99.98C110.568 100.06 111.438 101.16 111.438 101.16Z",
                                fill: logoColor ? logoColor : "#605E43"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("defs", {
                children: [
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint0_linear_144_888",
                        x1: "158.809",
                        y1: "58.9196",
                        x2: "158.809",
                        y2: "116.498",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.1927",
                                stopColor: "#610000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.5358",
                                stopColor: "#962718"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.9187",
                                stopColor: "#DA5225"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint1_linear_144_888",
                        x1: "154.893",
                        y1: "62.047",
                        x2: "154.893",
                        y2: "122.591",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.0989",
                                stopColor: "#610000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.1128",
                                stopColor: "#630001"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.445",
                                stopColor: "#9E2C1B"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.6825",
                                stopColor: "#C84723"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.8009",
                                stopColor: "#DA5225"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint2_linear_144_888",
                        x1: "149.041",
                        y1: "67.5201",
                        x2: "149.041",
                        y2: "120.57",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.0989",
                                stopColor: "#610000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.4351",
                                stopColor: "#952618"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.7333",
                                stopColor: "#C54623"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.8776",
                                stopColor: "#DA5225"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint3_linear_144_888",
                        x1: "141.365",
                        y1: "139.287",
                        x2: "153.073",
                        y2: "119.008",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.1778",
                                stopColor: "#610000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.1798",
                                stopColor: "#610000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.4126",
                                stopColor: "#9C2C1A"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.5788",
                                stopColor: "#C84723"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.6613",
                                stopColor: "#DA5225"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "1",
                                stopColor: "#E0AC0F"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint4_linear_144_888",
                        x1: "45.8744",
                        y1: "43.1873",
                        x2: "143.154",
                        y2: "43.1873",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.1969",
                                stopColor: "#331D00"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.2823",
                                stopColor: "#361C00"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.3955",
                                stopColor: "#3E1900"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.5242",
                                stopColor: "#4C1200"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.6636",
                                stopColor: "#5F0000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.6754",
                                stopColor: "#610000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "1",
                                stopColor: "#610000"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint5_linear_144_888",
                        x1: "134.663",
                        y1: "148.915",
                        x2: "134.663",
                        y2: "91.7912",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.0136",
                                stopColor: "#17629E"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.0844",
                                stopColor: "#385B8B"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.2316",
                                stopColor: "#554762"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.4406",
                                stopColor: "#62222B"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.5825",
                                stopColor: "#610000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "1",
                                stopColor: "#610000"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint6_linear_144_888",
                        x1: "49.6919",
                        y1: "39.6496",
                        x2: "49.6919",
                        y2: "106.897",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.2625",
                                stopColor: "#331D00"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.3119",
                                stopColor: "#402E10"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.3823",
                                stopColor: "#4F4226"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.4481",
                                stopColor: "#595135"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.5068",
                                stopColor: "#5E5A3F"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.5524",
                                stopColor: "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.9229",
                                stopColor: "#B4A890"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint7_linear_144_888",
                        x1: "88.1555",
                        y1: "155.476",
                        x2: "124.704",
                        y2: "124.808",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.1277",
                                stopColor: "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.1556",
                                stopColor: "#5D5E4B"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.3428",
                                stopColor: "#466176"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.4737",
                                stopColor: "#2B6292"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.5359",
                                stopColor: "#17629E"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.5841",
                                stopColor: "#246098"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.6455",
                                stopColor: "#375B8B"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.714",
                                stopColor: "#4A5177"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.7878",
                                stopColor: "#57445D"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.8657",
                                stopColor: "#60313F"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.946",
                                stopColor: "#62171E"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "1",
                                stopColor: "#610000"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint8_linear_144_888",
                        x1: "63.2785",
                        y1: "155.934",
                        x2: "131.361",
                        y2: "155.934",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.0179",
                                stopColor: "#4C3B13"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.0651",
                                stopColor: "#4F3F19"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.1418",
                                stopColor: "#574C2A"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.2185",
                                stopColor: "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.2633",
                                stopColor: "#5F5E48"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.3363",
                                stopColor: "#595F53"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.4285",
                                stopColor: "#506065"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.5363",
                                stopColor: "#3F617F"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.6453",
                                stopColor: "#17629E"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint9_linear_144_888",
                        x1: "60.623",
                        y1: "152.603",
                        x2: "60.623",
                        y2: "84.29",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.0159",
                                stopColor: "#4B311F"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.0501",
                                stopColor: "#4E3723"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.2116",
                                stopColor: "#5B5339"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.2922",
                                stopColor: "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.9892",
                                stopColor: "#B4A890"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("clipPath", {
                        id: "clip0_144_888",
                        children: /*#__PURE__*/ _jsx("rect", {
                            width: "409",
                            height: "185",
                            fill: "white"
                        })
                    }),
                    /*#__PURE__*/ _jsx("clipPath", {
                        id: "clip1_144_888",
                        children: /*#__PURE__*/ _jsx("rect", {
                            width: "408.57",
                            height: "184.23",
                            fill: "white"
                        })
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "400",
        height: "400",
        viewBox: "0 0 400 400",
        fill: "none",
        children: [
            /*#__PURE__*/ _jsx("rect", {
                width: "400",
                height: "400",
                fill: "white"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M287.741 122.033C287.051 129.243 285.535 134.114 281.68 132.183C278.182 130.445 273.302 137.162 273.391 134.265C273.681 124.222 268.89 130.402 266.461 119.458C265.993 117.419 265.881 116.411 266.126 114.308C266.394 112.033 268.332 107.848 274.75 106.389C283.04 104.522 284.31 109.78 286.694 113.535C287.273 114.458 285.936 115.209 286.694 115.874C288.143 117.14 288.209 117.097 287.741 122.033Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M344.654 142.164C344.041 145.491 345.333 149.651 348.487 153.46C351.618 157.27 354.684 158.562 355.297 159.284C357.027 161.32 358.122 161.429 355.122 171.894C354.575 173.821 339.289 148.819 338.347 144.309C336.726 136.559 341.391 138.551 336.726 130.429C331.843 121.956 339.048 124.408 337.362 117.206C336.858 115.038 346.822 130.451 344.654 142.164Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M242 101.616C242 101.616 245.756 98.3674 252.382 99.1105C267.297 100.788 262.441 101.807 266.736 102.232C277.226 103.251 277.054 103.718 274.658 103.973C270.168 104.482 268.463 106.096 268.463 106.096C268.463 106.096 266.844 105.607 267.556 103.399C267.556 103.399 265.441 102.975 264.189 104.164C261.577 106.712 245.087 108.814 245.108 104.588C245.13 102.656 242 101.616 242 101.616Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M263.974 114.161C263.818 112.873 264.018 111.456 260.227 110.533C256.436 109.61 253.358 111.8 247.493 110.726C244.326 110.147 240 108 240 108C240 108 241.07 111.327 247.939 113.581C250.415 114.376 254.072 115.921 257.462 116.479C260.762 117.016 263.684 120 263.684 120C263.684 120 264.108 115.385 263.974 114.161Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M331.821 128C331.821 128 329.998 142.415 341.175 162.452C347.1 173.089 355.282 179.754 356.237 198.923C357.713 228.881 360.078 228.838 358.451 234.504C356.823 240.17 353.177 253 353.177 253C353.177 253 351.376 216.746 349.748 200.139C348.12 183.531 343.519 178.647 339.048 171.353C334.578 164.059 328.978 149.318 328.175 142.198C327.763 138.399 328.219 135.359 328.132 133.427C328.067 131.886 328.74 130.431 329.955 129.476L331.821 128Z",
                fill: "url(#paint0_linear_139_828)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M321.888 135C321.888 135 322.902 149.063 325.967 157.717C329.033 166.349 341.051 186.837 342.33 196.227C343.609 205.617 343.873 235.711 344.38 240.406C344.755 243.802 345.637 249.579 346.211 252.716C347.159 257.995 350.268 256.87 349.981 258.168L346.409 266C346.409 266 342.087 264.594 339.551 258.925C336.993 253.257 336.221 233.007 336.993 220.177C337.765 207.347 339.286 198.326 335.185 189.434C331.105 180.542 323.057 170.135 320.631 159.21C319.176 152.654 319.462 145.039 319.043 142.053C318.911 141.166 319.087 140.257 319.506 139.457L321.888 135Z",
                fill: "url(#paint1_linear_139_828)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M313.635 147C313.635 147 316.151 158.77 318.114 166.877C320.078 174.984 330.734 188.857 331.837 199.044C332.455 204.789 331.528 246.233 325.307 254.882C316.128 267.606 312.907 259.391 312.907 259.391C312.907 259.391 320.607 251.262 322.88 243.48C326.961 229.478 326.321 205.287 325.968 200.605C325.417 193.539 317.276 182.831 315.599 177.325C313.922 171.841 312.4 165.403 312.268 164.059C311.209 151.595 313.635 147 313.635 147Z",
                fill: "url(#paint2_linear_139_828)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M300.326 291.13C300.887 295.813 302.873 300.299 306.541 303.217C310.771 306.571 317.116 308.292 324.906 300.059C328.338 296.444 344.588 274.862 343.984 271.356C343.876 270.681 342.646 266.87 336.322 268.612C334.769 269.047 335.265 250.013 323.245 264.365C314.138 275.254 314.612 259.835 305.549 266.412C301.556 269.33 299.074 280.873 300.326 291.13Z",
                fill: "url(#paint3_linear_139_828)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M256.015 167.8C256.015 167.8 282.484 179.071 259.84 232.965C256.894 239.961 262.39 244.236 257.532 242.681C255.487 242.012 255.421 240.76 249.969 240.868C248.606 240.889 264.919 224.436 263.797 192.782C263.226 176.242 246.056 165.36 249.442 166.029C255.202 167.195 256.015 167.8 256.015 167.8Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M212 126.759C210.532 124.365 207.467 122.056 206.323 121.586C201.552 120.09 196.372 119.833 197.062 141.656C197.127 143.708 198.962 145.504 201.034 145.376C204.941 145.119 207.402 145.995 209.582 147C206.129 143.195 205.999 140.866 206.819 135.928C207.51 131.782 208.201 128.383 212 126.759Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M283.268 64.1656C282.314 63.6446 280.101 62.4507 280.015 60.8878C279.906 59.2815 275.438 51.7709 270.732 56.134C267.001 59.5854 257.761 44.282 204.926 40.2662C158.207 36.7063 108.712 69.8962 100.383 77.3851C95.763 81.5312 97.2812 86.8059 110.1 80.6412C120.229 75.7788 100.123 104.345 112.637 123.447C127.039 145.436 117.344 104.736 132.18 107.037C130.77 116.11 130.466 128.071 130.531 131.414C130.726 142.028 136.192 146.804 155.626 146.999C166.015 147.108 152.416 133.584 152.828 119.345C153.023 112.659 158.576 112.377 161.699 109.577C159.877 126.486 160.267 147.737 173.433 146.5C186.338 145.285 190.025 146.695 192.693 139.597C194.298 135.321 187.531 137.188 186.815 132.998C186.707 132.412 182.022 112.854 193.908 107.645C201.239 104.432 206.683 111.161 211.975 117.326C223.449 130.697 235.161 137.383 236.094 137.926C245.29 143.353 255.571 140.509 259.388 139.901C276.826 137.079 242.383 117.434 237.959 112.247C221.887 93.4049 249.367 90.5178 289.363 97.0516C296.629 98.2455 301.921 94.1212 303.114 92.8405C305.586 90.1922 307.777 89.2371 308.905 85.6772C310.315 81.1838 295.783 71.025 283.268 64.1656ZM279.212 80.0334C276.805 80.0334 274.852 78.0797 274.852 75.6703C274.852 73.2608 276.805 71.3072 279.212 71.3072C281.62 71.3072 283.572 73.2608 283.572 75.6703C283.572 78.0797 281.62 80.0334 279.212 80.0334Z",
                fill: "url(#paint4_linear_139_828)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M285.411 133.118C285.411 133.118 284.743 135.508 283.562 136.256C282.939 136.642 281.513 137.511 279.063 137.463C276.613 137.415 274.92 136.401 274.586 136.329C274.252 136.28 273.695 138.284 274.207 138.863C274.697 139.442 277.927 140.48 278.907 140.721C280.444 141.132 281.847 141.276 283.339 139.804C284.832 138.332 285.901 136.594 285.945 135.87C286.213 132.129 285.411 133.118 285.411 133.118Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M318.439 201.735C317.683 199.525 316.561 199 316.539 199C316.431 199.241 317.64 212.522 312.026 216.132C307.578 218.999 306.434 219.524 294.904 225.191C283.374 230.858 280.178 231.536 273.312 234.993C265.258 239.063 268.605 251.382 268.497 252.038C268.497 252.038 267.288 250.463 266.316 249.172C265.496 248.099 264.373 247.334 263.099 246.962L262.689 246.852C261.609 253.81 263.164 253.635 262.71 257.814C259.364 287.965 268.843 282.999 270.376 282.802C271.477 282.364 272.362 281.861 273.075 281.336C273.938 290.044 274.996 300.722 275.407 304.091C276.141 310.108 280.567 309.08 284.281 316.935C289.009 327 294.688 324.177 297.819 321.377C303.498 324.921 308.96 317.11 308.96 317.11C308.96 317.11 310.558 313.128 305.052 311.771C301.382 310.852 300.216 307.22 296.092 297.899C290.931 286.215 298.078 265.538 298.078 265.538L292.14 265.079C282.921 263.963 283.05 273.284 278.365 272.058L276.659 271.227C279.034 253.679 300.95 261.403 309.284 255.539C320.404 247.727 310.45 251.972 318.828 210.159C318.849 210.115 319.389 204.448 318.439 201.735Z",
                fill: "url(#paint5_linear_139_828)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M279.455 226.713C286.92 223.737 299.709 221.947 308.559 213.709C319.184 203.811 311.221 191.238 309.814 183C306.698 183.863 301.288 190.85 296.679 186.666C288.521 179.291 282.722 184.833 279.476 190.268C277.551 193.481 276.447 197.125 276.122 200.878C275.798 204.371 275.019 210.086 273.071 216.815C272.184 219.899 267.748 229.797 265 237C269.176 231.264 271.989 229.689 279.455 226.713Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M323.211 99C322.819 100.365 324.145 103.377 322.428 105.219C320.603 107.191 317.995 108.102 314.713 108.86C314.648 108.882 314.604 108.882 314.539 108.903C317.147 111.656 317.647 114.603 318.755 115.881C323.211 121.017 290.697 126.782 291.458 134.02C291.48 134.323 291.741 134.54 292.045 134.605C293.827 134.995 299.847 136.815 296.891 143.923C287.329 166.959 272.094 160.458 268.03 152.526C266.074 148.734 267.399 145.397 262.248 146.654C252.925 148.951 247.187 147.737 240.971 146.61C231.17 144.812 226.975 141.344 221.955 137.249C219.108 134.951 218.825 134.388 215.935 131.289C214.152 129.404 213.609 129.577 213.609 129.577C211.371 134.128 210.371 137.855 211.414 144.703C211.979 148.474 212.479 149.319 220.107 151.031C236.255 154.672 256.315 159.916 267.138 170.708C276.223 179.766 273.963 189.908 277.266 186.224C280.526 182.562 281.396 181.348 288.329 178.509C290.98 177.426 294.436 176.754 297.283 176.971C310.062 177.968 310.996 172.442 310.736 169.581C309.149 151.833 305.933 148.669 309.54 142.363C315.604 131.766 332.447 124.073 331.991 118.135C331.665 114.559 327.188 105.393 323.211 99Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M270.848 141.934C269.026 143.65 268.447 146.474 269.583 148.778C269.948 149.545 270.484 150.336 271.256 151.149C274.945 155.034 278.183 157.79 281.55 156.796C284.917 155.802 286.375 156.141 289.635 151.375C292.895 146.609 295.103 143.289 294.996 140.307C294.889 137.326 293.667 136.31 292.573 135.609C291.2 134.728 288.412 132.628 287.426 135.338C285.968 139.291 286.482 143.876 278.848 141.956C275.674 141.143 274.987 139.494 272.607 140.556C272.307 140.669 271.556 141.279 270.848 141.934Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M308.914 96.6076C310.891 96.6076 311.956 95.4779 313.324 93.5879C314.193 92.4148 314.801 89.6776 312.868 88.461C308.176 87.4617 309.957 94.0224 304.33 96.1079C303.918 96.26 303.787 96.5641 303.874 96.9986C306.372 96.9552 307.502 96.6076 308.914 96.6076Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M320.276 94.7176C318.972 93.0231 317.669 91.5893 316.474 90.5031C316.452 90.8724 316.452 91.2634 316.452 91.6762C316.452 93.5662 316.083 95 314.41 96.7814C312.868 98.4324 310.435 98.8886 307.089 99.4969C306.525 99.6055 306.112 99.7141 305.808 99.801C306.959 101.083 309.501 100.909 311.13 102.495C311.89 103.603 312.064 105.384 316.127 104.341C317.995 103.863 318.212 102.147 319.559 99.8445C320.211 98.6931 321.514 97.4114 320.276 94.7176Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M97.6211 118.659C93.4328 109.564 92.2238 103.486 92.1158 101.554C91.9215 97.4948 102.241 94 102.328 93.3488C102.803 89.7455 101.399 90.6789 101.399 90.6789C101.399 90.6789 96.5848 92.9798 90.0864 97.3428C89.9353 96.4529 89.6546 93.6093 89.5467 92.5674C89.5251 92.3069 89.5035 92.0681 89.5035 91.8077C89.5035 91.0913 89.4819 89.2897 89.2444 86.75C89.1581 85.7732 88.5536 85.6213 87.4957 87.0756C86.7185 88.1393 86.8264 90.1797 87.0423 93.1101C87.215 95.5846 87.7116 97.6684 88.0354 98.7755C79.7451 104.615 69.447 113.492 62.7975 125.019C55.3924 137.869 43.0217 160.031 43.0001 196.997C42.9785 218.357 47.0805 231.619 47.0805 231.619C54.7015 235.678 47.1236 206.006 77.2408 202.923C85.8117 202.033 88.4456 154.626 91.1443 159.423C100.363 175.703 113.468 193.503 124.91 198.843C130.264 201.339 136.59 192.287 140.821 179.676C147.471 159.836 169.362 155.516 168.995 155.538C125.191 158.034 107.833 140.821 97.6211 118.659Z",
                fill: "url(#paint6_linear_139_828)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M264.946 290.314C258.315 291.096 258.185 293.506 254.675 293.028C247.871 292.073 253.548 269.468 254.675 265.472C258.683 251.206 249.409 248.991 244.642 248.014C243.472 247.775 247.741 250.663 244.144 259.566C236.278 279.087 230.97 278.045 220.374 275.656C207.134 272.681 212.27 284.147 212.443 283.626C212.833 282.431 213.808 282.453 214.675 282.605C221.327 283.647 227.849 304.754 208.044 310.639C188.391 316.502 165.184 308.88 167.113 310.378C179.29 319.802 190.991 321.779 204.924 320.758C217.882 319.802 221.76 318.174 228.543 314.765C252.313 302.778 242.605 312.419 250.384 313.484C286.506 318.391 269.279 309.227 266.224 306.513C260.352 301.236 275.065 289.12 264.946 290.314ZM207.459 312.181C206.896 312.506 206.983 312.441 207.481 312.115C207.481 312.137 207.503 312.137 207.503 312.159C207.503 312.181 207.481 312.181 207.459 312.181Z",
                fill: "url(#paint7_linear_139_828)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M272.008 332.224C273.887 330.755 276.737 331.317 282.761 331.122C283.906 328.184 281.595 320.643 261.083 320.038C233.445 319.239 217.964 331.317 206.283 327.341C202.612 326.088 200.561 326.715 194.839 328.767L188.167 331.252C187.411 331.555 187.606 332.224 188.145 332.44C192.356 334.169 195.616 336.351 195.616 336.351C195.616 336.351 160.097 349.467 146.797 337.496C124.017 317.035 145.156 342.336 140.168 345.318C142.5 346.377 144.832 347.349 147.185 348.213C220.037 374.898 278.313 338.555 278.313 338.555C278.313 338.555 280.559 336.956 280.343 335.681C280.17 334.882 280.019 333.089 276.413 334.018C271.836 335.206 269.309 334.32 272.008 332.224ZM263.156 331.317C261.493 331.317 260.133 329.977 260.133 328.314C260.133 326.65 261.493 325.31 263.156 325.31C264.818 325.31 266.179 326.65 266.179 328.314C266.179 329.977 264.818 331.317 263.156 331.317Z",
                fill: "url(#paint8_linear_139_828)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M164.297 3.05903C161.551 3.53235 158.806 4.04869 156.105 4.60806C154.283 4.99532 153 6.54434 153 8.33003V16.2043C153 18.6354 155.363 20.4426 157.838 19.9047C160.449 19.3453 163.059 18.829 165.714 18.3557C167.605 18.0114 169 16.4624 169 14.6122V6.80251C169 4.41443 166.75 2.65026 164.297 3.05903Z",
                fill: "#DA5225"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M222 11.3307V5.48398C222 3.0514 220.088 1.04558 217.606 0.832199C211.519 0.2774 205.389 0 199.193 0C193.897 0 188.668 0.213384 183.482 0.597476C180.956 0.789522 179 2.81667 179 5.27059V11.1173C179 13.8486 181.395 15.9825 184.207 15.7691C189.151 15.385 194.139 15.1716 199.171 15.1716C205.103 15.1716 210.948 15.449 216.727 15.9825C219.561 16.2172 222 14.062 222 11.3307Z",
                fill: "#DA5225"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M245.456 4.90539C242.649 4.23133 239.82 3.62467 236.969 3.06295C234.908 2.65851 233 4.2538 233 6.38834V15.7129C233 17.3531 234.14 18.7237 235.697 19.0383C238.461 19.6 241.202 20.2291 243.921 20.9032C246.004 21.42 248 19.8022 248 17.6003V8.20831C248 6.6355 246.947 5.2649 245.456 4.90539Z",
                fill: "#DA5225"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M375.501 105.455C374.372 103.304 373.22 101.199 372.047 99.0943C371.072 97.3967 369.057 96.6045 367.219 97.193L359.932 99.4791C357.363 100.294 356.212 103.35 357.585 105.704C358.736 107.696 359.866 109.71 360.951 111.747C361.903 113.536 363.941 114.418 365.868 113.807L373.087 111.521C375.568 110.774 376.742 107.831 375.501 105.455Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M393.883 155.562C391.4 144.635 388.009 134.072 383.776 123.914C382.848 121.673 380.364 120.5 378.032 121.204L372.309 122.954C369.653 123.765 368.292 126.646 369.372 129.185C373.453 138.852 376.693 148.925 379.025 159.36C379.63 162.007 382.373 163.586 384.986 162.796L390.687 161.068C393.041 160.321 394.423 157.931 393.883 155.562Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M398.987 183.366C398.769 180.79 398.53 178.214 398.225 175.638C397.92 173.084 395.416 171.433 392.999 172.181L385.857 174.405C383.984 175 382.808 176.849 383.026 178.809C383.287 181.253 383.527 183.741 383.701 186.207C383.897 188.827 386.445 190.588 388.927 189.818L396.134 187.594C397.942 187.021 399.139 185.26 398.987 183.366Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M344.918 336.754C346.627 335.05 348.313 333.324 349.976 331.577C351.252 330.214 351.344 328.191 350.204 326.699L345.511 320.629C343.938 318.584 340.703 318.434 338.949 320.352C337.376 322.056 335.781 323.717 334.141 325.357C332.774 326.742 332.614 328.808 333.776 330.342L338.424 336.37C339.997 338.373 343.095 338.564 344.918 336.754Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M302.859 370.305C312.57 364.596 321.755 358.102 330.304 350.928C332.211 349.337 332.561 346.62 331.093 344.647L327.585 339.935C325.92 337.707 322.653 337.346 320.527 339.15C312.395 346.026 303.626 352.223 294.332 357.656C291.921 359.057 291.263 362.155 292.907 364.362L296.415 369.053C297.905 371.069 300.711 371.578 302.859 370.305Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M278.803 383.61C280.672 382.781 282.521 381.907 284.37 381.012C286.954 379.745 287.815 376.338 286.134 373.936L282.689 368.957C281.408 367.101 279.013 366.489 277.017 367.45C275.294 368.28 273.551 369.088 271.786 369.874C269.097 371.075 268.152 374.548 269.853 377.015L273.341 382.038C274.58 383.807 276.849 384.506 278.803 383.61Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M115.79 381.055C117.736 381.951 119.704 382.804 121.694 383.634C123.729 384.487 126.117 383.809 127.4 382.017L131.093 376.945C132.906 374.475 131.889 370.977 129.036 369.819C127.157 369.054 125.299 368.245 123.464 367.436C121.363 366.496 118.908 367.108 117.559 368.966L113.91 373.972C112.141 376.377 113.048 379.787 115.79 381.055Z",
                fill: "#456D90"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M69.5893 351.892C78.2287 359.113 87.4993 365.652 97.3357 371.36C99.4031 372.553 102.058 372.042 103.473 370.125L107.129 365.162C108.717 363.011 108.064 359.986 105.736 358.623C96.3564 353.213 87.4993 346.993 79.2733 340.092C77.2277 338.366 74.1157 338.728 72.5271 340.88L68.8711 345.821C67.4784 347.738 67.783 350.38 69.5893 351.892Z",
                fill: "#456D90"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M51.1342 333.009C52.5097 334.55 53.9071 336.091 55.3481 337.588C57.2913 339.657 60.6319 339.415 62.2913 337.104L66.1559 331.71C67.4222 329.926 67.2475 327.505 65.741 325.897C64.4091 324.466 63.0991 323.013 61.7891 321.538C59.8677 319.359 56.4398 319.513 54.7586 321.89L50.8722 327.328C49.6277 329.068 49.715 331.445 51.1342 333.009Z",
                fill: "#456D90"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M0.63171 177.154C0.390687 179.16 0.193485 181.187 0.0181953 183.214C-0.179006 185.391 1.24523 187.396 3.39253 188.037L9.22092 189.786C12.1789 190.682 15.2027 188.655 15.4218 185.668C15.5752 183.748 15.7505 181.827 15.9696 179.928C16.2325 177.688 14.7645 175.597 12.5733 174.935L6.8326 173.207C3.96222 172.353 0.98229 174.231 0.63171 177.154Z",
                fill: "#E0AC0F"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M14.1858 124.048C9.96275 134.398 6.58433 145.186 4.11549 156.323C3.57407 158.818 4.98175 161.313 7.38562 162.056L12.9297 163.785C15.6151 164.617 18.4304 162.954 19.0368 160.197C21.3541 149.584 24.6026 139.3 28.6307 129.453C29.7135 126.805 28.3275 123.785 25.6204 122.954L20.0763 121.225C17.6725 120.459 15.1387 121.707 14.1858 124.048Z",
                fill: "#E0AC0F"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M26.5286 100.161C25.5049 101.941 24.4812 103.765 23.5215 105.588C22.2205 108.012 23.4575 111.037 26.0807 111.852L32.3722 113.804C34.3556 114.426 36.4883 113.525 37.4906 111.68C38.429 109.964 39.3887 108.27 40.3911 106.575C41.82 104.129 40.6257 100.997 37.9385 100.161L31.5831 98.1873C29.6423 97.6081 27.5523 98.4018 26.5286 100.161Z",
                fill: "#E0AC0F"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M39.7449 89.1182C39.7449 89.1182 44.488 91.9037 47.7733 87.5731C89.0251 33.3859 103.755 37.5206 139.132 25.3339C140.438 24.8769 143.07 23.9194 144.419 22.7007C145.094 22.0914 145.181 21.0468 144.68 20.2852L141.569 15.4323C139.828 13.1037 134.52 14.1483 132.322 14.8664C92.2452 28.163 64.9833 45.3549 44.662 76.8445C40.6805 83.0031 35.1323 88.1607 39.7449 89.1182Z",
                fill: "#AB9F89"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M201.846 284.902C170.242 290.419 133.876 271.47 136.312 255.377C137.943 244.692 154.974 238.979 144.251 238.608C104.252 237.213 122.74 231.02 129.983 224.02C145.926 208.603 125.828 216.889 119.825 215.319C98.1186 209.65 112.365 201.909 96.3786 183.047C95.2041 181.673 91.6806 211.024 75.3244 215.799C48.0061 223.78 89.4185 229.079 82.6325 230.998C62.5352 236.689 75.1939 245.542 54.4659 243.951C40.9372 242.904 70.7133 259.716 80.4139 254.875C88.6573 250.732 85.4382 262.311 63.9055 275.416C57.7067 279.189 99.0104 268.373 89.0053 278.033C82.6107 284.204 71.2571 283.092 65.515 283.899C65.1888 283.942 68.6035 289.067 68.56 289.394C70.9961 291.88 70.6916 292.534 74.4761 294.518C76.5641 295.63 81.4362 294.606 85.4165 293.341C87.5263 292.708 87.9395 292.185 89.462 291.945C93.0726 290.637 96.4874 289.285 98.5754 288.958C106.797 287.671 110.886 289.132 110.886 289.132C110.886 289.132 112.43 292.49 112.278 296.873C111.539 300.668 111.343 305.094 102.142 304.418C95.8784 303.96 91.3108 307.907 88.853 310.72C96.5091 322.19 102.49 324.61 104.296 325.156C115.889 328.645 113.931 320.38 117.824 322.059C136.095 329.931 134.485 320.86 136.225 323.04C142.576 331.065 150.689 333.246 156.583 331.37C166.436 328.208 160.172 327.162 170.743 329.299C178.247 330.803 185.598 326.704 185.598 326.704C180.639 325.897 173.092 325.33 168.437 323.302C149.862 315.19 148.644 309.128 132.876 301.278C125.872 297.789 137.639 288.02 136.682 292.294C134.355 302.805 179.182 298.596 192.536 294.54C208.74 289.525 212.829 282.983 201.846 284.902ZM129.178 280.693C124.262 278.186 121.326 276.398 119.108 275.94C120.152 277.335 121.174 278.884 122.414 281.435C126.59 290.135 130.113 296.83 120.5 298.596C115.997 299.425 120.674 293.908 117.911 285.011C116.933 281.849 114.127 276.899 110.973 270.401C110.364 270.881 109.538 271.382 107.558 272.952C94.4211 283.354 93.1813 281.653 93.1813 281.653C93.1813 281.653 102.621 275.678 106.297 271.6C108.145 269.551 109.059 268.438 109.559 267.435C107.101 262.18 104.687 256.314 103.208 250.34C101.968 245.368 101.185 242.49 100.533 238.499L100.424 237.932C100.424 237.932 100.207 236.384 96.6614 238.259C96.2046 238.499 95.7261 238.739 95.2476 238.957C92.7246 240.025 88.1135 241.966 88.1135 241.966C88.1135 241.966 85.8297 241.814 95.7479 237.322C98.4666 236.057 99.3149 235.49 99.8152 235.032C98.8146 228.316 98.4449 223.082 98.2491 220.88C97.3139 209.715 97.9446 204.962 98.3579 208.298C98.4884 209.345 99.3801 215.472 100.098 220.64C100.446 221.338 101.033 221.425 103.643 222.079C108.254 223.235 110.777 225.045 110.777 225.045C110.777 225.045 105.47 223.867 103.687 223.431C101.055 222.777 100.468 223.758 100.468 223.758C100.468 223.758 101.816 234.727 104.209 245.608C104.883 246.131 106.34 246.96 109.364 247.897C113.714 249.228 117.194 248.682 117.194 248.682C117.194 248.682 117.302 249.838 109.429 250.013C107.428 250.056 106.21 250.165 105.47 250.274C105.883 251.583 106.297 252.782 106.732 253.785C111.756 265.407 114.627 269.987 116.846 272.996C119.325 273.497 123.74 274.849 131.244 279.363C135.486 282.154 144.99 283.332 144.99 283.332C144.99 283.332 136.551 284.466 129.178 280.693Z",
                fill: "url(#paint9_linear_139_828)"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M258.122 15.7297C258.122 15.7297 256.882 22.1695 262.301 22.7549C293.964 26.094 328.326 58.401 351.764 87.499C352.634 88.5831 353.875 92.3559 355.464 92.9413C356.312 93.2666 357.792 92.1824 358.967 91.0983C360.142 90.0142 360.665 89.754 363.189 88.9301C365.713 88.1061 365.017 86.3282 364.517 84.9621C363.494 82.1651 356.008 75.7687 354.767 74.6846C335.508 57.8156 322.168 33.7913 270.287 15.6864C263.323 13.2579 257.469 11.0897 258.122 15.7297Z",
                fill: "#AB9F89"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M4.74893 196.365C4.74893 196.365 11.5385 197.062 10.3339 202.382C2.0769 238.686 25.8185 276.037 47.2386 306.889C48.027 308.023 49.5821 310.356 49.9544 312.144C50.1296 313.038 49.8011 314.455 48.9469 314.782L45.1141 318.293C43.9533 319.187 42.3106 319.252 41.106 318.38C38.6968 316.592 36.1562 312.755 35.4773 311.25C24.7015 287.898 3.78524 262.998 1.20082 207.986C0.850393 200.66 0.456159 194.402 4.74893 196.365Z",
                fill: "#AB9F89"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M136.3 383.794C136.3 383.794 138.43 379.263 143.733 380.47C209.63 395.376 219.193 390.083 254.119 377.95C255.423 377.506 258.118 376.828 259.943 377.04C260.856 377.146 261.508 377.908 261.573 378.797L263.79 384.176C264.29 385.382 263.877 386.801 262.769 387.5C260.486 388.94 256.248 389.617 254.662 390.083C214.389 402.3 191.221 401.369 163.554 397.134C156.295 396.012 133.105 387.161 136.3 383.794Z",
                fill: "#AB9F89"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M396.108 196.097C395.049 195.857 393.946 196.075 393.017 196.621C390.682 197.976 386.273 201.122 386.446 205.513C388.413 257.445 373.844 275.95 352.725 306.865C351.947 308.001 350.412 310.339 350.045 312.13C349.872 313.026 350.196 314.446 351.039 314.774L354.822 318.291C355.968 319.187 357.589 319.253 358.778 318.379C361.155 316.587 363.663 312.742 364.333 311.235C374.968 287.836 395.611 262.886 398.161 207.764C398.464 201.078 400.777 197.124 396.108 196.097Z",
                fill: "#AB9F89"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M236.436 177.745L227.571 180.942C227.376 181.467 226.615 181.839 226.05 182.036L207.19 189.153C206.473 189.394 205.669 188.978 205.408 188.212L205.039 187.117C204.778 186.35 205.148 185.518 205.865 185.255L225.463 179.08C226.028 178.883 226.637 178.686 226.984 179.015L235.567 175.993C234.589 174.241 233.459 172.555 232.134 170.978L230.765 169.445C223.291 161.562 211.427 156.35 197.956 156V159.591C198.369 159.832 198.39 160.445 198.39 161.058L199.042 181.73C199.042 182.496 198.39 183.109 197.565 183.109H196.413C195.609 183.109 194.936 182.496 194.936 181.73L195.435 161.453C195.435 160.861 195.544 160.007 195.979 159.657V156C182.246 156.131 170.079 161.299 162.43 169.248L161.04 170.781C159.628 172.445 158.411 174.219 157.39 176.08L167.124 179.496C167.471 179.168 168.08 179.365 168.645 179.562L188.243 185.737C188.96 185.978 189.33 186.832 189.069 187.599L188.7 188.693C188.439 189.46 187.635 189.898 186.918 189.635L168.058 182.518C167.493 182.321 166.733 181.949 166.537 181.423L156.52 177.81C154.891 181.314 154 185.058 154 188.978C154 196.27 157.042 203.015 162.213 208.489L163.691 209.956C166.255 212.365 169.253 214.489 172.577 216.241L176.119 212.387C175.967 211.927 176.38 211.467 176.793 211.007L190.221 195.372C190.742 194.803 191.633 194.803 192.241 195.35L193.089 196.139C193.697 196.686 193.762 197.606 193.241 198.175L179.226 212.759C178.835 213.197 178.162 213.745 177.618 213.723L174.403 217.182C180.639 220.139 187.939 221.891 195.761 222L197.738 221.978C205.691 221.803 213.1 219.92 219.38 216.81L216.664 213.898C216.12 213.942 215.469 213.372 215.056 212.934L201.041 198.35C200.52 197.781 200.585 196.883 201.193 196.314L202.019 195.547C202.627 195 203.518 195 204.04 195.569L217.468 211.204C217.88 211.664 218.293 212.124 218.141 212.584L221.161 215.869C224.138 214.226 226.832 212.277 229.179 210.088L230.656 208.62C235.893 203.124 239 196.336 239 188.978C239 185.036 238.087 181.248 236.436 177.745Z",
                fill: "#AB9F89"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M208.178 239.114C195.583 256.295 190.813 236.265 184.7 238.048C176.18 240.549 168.072 253.315 165.059 238.505C163.628 231.459 163.086 224.478 155 230.828L155.607 237.57C156.778 254.903 170.912 268.778 188.927 270.452C191.811 270.713 203.257 271.105 204.905 270.974C223.418 269.626 239.482 255.207 240.458 236.787L241 225C222.356 255.338 216.633 227.566 208.178 239.114Z",
                fill: "#4C3B13"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M155.608 223.084C154.655 221.308 157.732 217.362 157.732 217.362C158.328 216.353 157.792 215.038 157.454 214.249C155.965 210.938 154.457 208.987 154 208L154.715 223.479C154.814 223.545 156.541 224.838 155.608 223.084Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M175.951 227.929C176.598 227.854 170.56 219.635 172.324 222.674C173.187 224.143 174.069 229 174.069 229C174.069 229 175.324 228.004 175.951 227.929Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M168.423 232.949C167.728 232.775 170.552 236.686 171.313 237.012C172.377 237.49 173.55 237.642 174.789 237.381L173.029 231.45C173.051 231.472 171.117 233.601 168.423 232.949Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M172.507 229.234L170.292 222.152C169.987 221.131 169.227 220.262 168.206 219.936C167.163 219.589 165.882 219.61 164.274 220.349C161.906 221.457 160.233 220.306 158.865 219.002C158.865 219.002 157.04 222.152 157.626 223.564C157.865 224.151 158.278 224.151 158.365 224.151C161.58 224.412 161.189 221.544 163.34 223.673C164.665 224.998 166.359 229.886 167.033 230.321C168.402 231.298 172.507 229.234 172.507 229.234Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M201 227.379C199.441 226.171 198.213 226.151 196.701 226.031C195.071 225.91 194.173 226.171 193.181 226.373C192.449 226.513 192.567 226.554 192 226.554C193.205 227.057 194.504 227.54 195.803 228.203C197.528 229.089 199.039 230.115 200.362 231C200.575 229.793 200.787 228.586 201 227.379Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M200.315 236.642C201.444 236.555 206.18 235.947 204.573 235.947C202.987 235.947 201.184 234.339 201.184 234.339C201.184 234.339 201.075 235.426 200.858 235.882C200.597 236.468 200.315 236.642 200.315 236.642Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M199.619 233.405L193.037 228.43C191.169 227.192 188.649 227.518 186.78 228.734C183.022 231.189 178.525 231.189 177.222 229.451C176.7 228.756 174.419 230.559 174.419 230.559L175.527 234.339C176.027 236.056 178.047 236.903 179.59 235.969C180.785 235.23 182.11 234.187 183.63 232.775C186.78 229.821 187.628 234.404 194.058 236.012C195.405 236.338 196.578 236.533 197.816 236.62C198.511 236.664 199.12 236.142 199.25 235.469L199.619 233.405Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M219.872 222.117C220.564 221.62 218.251 222.851 217.646 223.154C214.403 224.774 212.068 229.31 209.15 229.872C207.701 230.153 205.713 228.014 202.513 228.101C202.038 228.101 201.649 228.511 201.562 228.986L201 232.745L204.005 234.56C204.978 235.143 206.231 235.165 207.183 234.517C207.853 234.063 208.436 233.523 208.869 232.961C211.074 230.002 213.473 230.779 215.354 229.678C217.235 228.576 217.235 224.061 219.872 222.117Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M224.69 221.014C224.222 220.97 223.711 221.036 223.264 221.124C222.349 221.299 221.86 221.607 221.392 222.858C221.392 222.858 219.519 229.75 218.115 230.08C216.71 230.409 228.69 232.977 226.796 231.594C224.881 230.211 225.924 221.124 224.69 221.014Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M234.639 219.437C234.074 219.35 233.509 219.567 233.162 220.023C232.293 221.218 231.706 221.587 230.815 221.913C229.23 222.478 224.863 219.328 226.71 221.196C228.556 223.064 228.122 229.886 228.122 229.886C227.861 231.493 229.664 231.863 230.75 231.32H230.772C234.161 229.603 235.356 225.758 236.073 223.673C236.659 221.978 236.833 220.458 236.638 219.762L234.639 219.437Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M240.222 219.762L240.635 200.45C240.07 205.946 237.311 211.92 233.574 217.525C233.574 217.525 235.551 217.112 236.485 217.199C238.332 217.373 240.222 219.762 240.222 219.762Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ _jsxs("defs", {
                children: [
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint0_linear_139_828",
                        x1: "343.499",
                        y1: "127.999",
                        x2: "343.499",
                        y2: "252.997",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.1927",
                                stopColor: "#610000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.5358",
                                stopColor: "#962718"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.9187",
                                stopColor: "#DA5225"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint1_linear_139_828",
                        x1: "334.489",
                        y1: "134.994",
                        x2: "334.489",
                        y2: "265.981",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.0989",
                                stopColor: "#610000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.1128",
                                stopColor: "#630001"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.445",
                                stopColor: "#9E2C1B"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.6825",
                                stopColor: "#C84723"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.8009",
                                stopColor: "#DA5225"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint2_linear_139_828",
                        x1: "322.003",
                        y1: "147",
                        x2: "322.003",
                        y2: "261.992",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.0989",
                                stopColor: "#610000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.4351",
                                stopColor: "#952618"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.7333",
                                stopColor: "#C54623"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.8776",
                                stopColor: "#DA5225"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint3_linear_139_828",
                        x1: "305.476",
                        y1: "302.796",
                        x2: "331.09",
                        y2: "258.835",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.1778",
                                stopColor: "#610000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.1798",
                                stopColor: "#610000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.4126",
                                stopColor: "#9C2C1A"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.5788",
                                stopColor: "#C84723"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.6613",
                                stopColor: "#DA5225"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "1",
                                stopColor: "#E0AC0F"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint4_linear_139_828",
                        x1: "97.9887",
                        y1: "93.4858",
                        x2: "308.983",
                        y2: "93.4858",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.1969",
                                stopColor: "#331D00"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.2823",
                                stopColor: "#361C00"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.3955",
                                stopColor: "#3E1900"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.5242",
                                stopColor: "#4C1200"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.6636",
                                stopColor: "#5F0000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.6754",
                                stopColor: "#610000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "1",
                                stopColor: "#610000"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint5_linear_139_828",
                        x1: "290.51",
                        y1: "323.991",
                        x2: "290.51",
                        y2: "199.003",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.0136",
                                stopColor: "#17629E"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.0844",
                                stopColor: "#385B8B"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.2316",
                                stopColor: "#554762"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.4406",
                                stopColor: "#62222B"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.5825",
                                stopColor: "#610000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "1",
                                stopColor: "#610000"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint6_linear_139_828",
                        x1: "106.027",
                        y1: "85.9894",
                        x2: "106.027",
                        y2: "231.961",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.2625",
                                stopColor: "#331D00"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.3119",
                                stopColor: "#402E10"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.3823",
                                stopColor: "#4F4226"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.4481",
                                stopColor: "#595135"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.5068",
                                stopColor: "#5E5A3F"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.5524",
                                stopColor: "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.9229",
                                stopColor: "#B4A890"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint7_linear_139_828",
                        x1: "189.685",
                        y1: "337.34",
                        x2: "269.021",
                        y2: "270.912",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.1277",
                                stopColor: "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.1556",
                                stopColor: "#5D5E4B"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.3428",
                                stopColor: "#466176"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.4737",
                                stopColor: "#2B6292"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.5359",
                                stopColor: "#17629E"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.5841",
                                stopColor: "#246098"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.6455",
                                stopColor: "#375B8B"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.714",
                                stopColor: "#4A5177"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.7878",
                                stopColor: "#57445D"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.8657",
                                stopColor: "#60313F"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.946",
                                stopColor: "#62171E"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "1",
                                stopColor: "#610000"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint8_linear_139_828",
                        x1: "136.001",
                        y1: "338.996",
                        x2: "283.005",
                        y2: "338.996",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.0179",
                                stopColor: "#4C3B13"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.0651",
                                stopColor: "#4F3F19"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.1418",
                                stopColor: "#574C2A"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.2185",
                                stopColor: "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.2633",
                                stopColor: "#5F5E48"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.3363",
                                stopColor: "#595F53"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.4285",
                                stopColor: "#506065"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.5363",
                                stopColor: "#3F617F"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.6453",
                                stopColor: "#17629E"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint9_linear_139_828",
                        x1: "129.514",
                        y1: "331.944",
                        x2: "129.514",
                        y2: "182.981",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.0159",
                                stopColor: "#4B311F"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.0501",
                                stopColor: "#4E3723"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.2116",
                                stopColor: "#5B5339"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.2922",
                                stopColor: "#605E43"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.9892",
                                stopColor: "#B4A890"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (IndigenousTourismLogo)));


/***/ }),

/***/ 9576:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _illustration_career_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4524);
/* harmony import */ var _illustration_elearning_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6853);
/* harmony import */ var _illustration_site_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9663);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_illustration_career_hero__WEBPACK_IMPORTED_MODULE_0__, _illustration_elearning_hero__WEBPACK_IMPORTED_MODULE_1__]);
([_illustration_career_hero__WEBPACK_IMPORTED_MODULE_0__, _illustration_elearning_hero__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9976:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _illustrations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9576);
/* harmony import */ var _pattern__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_illustrations__WEBPACK_IMPORTED_MODULE_0__, _pattern__WEBPACK_IMPORTED_MODULE_1__]);
([_illustrations__WEBPACK_IMPORTED_MODULE_0__, _pattern__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1000:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);



// @mui


// ----------------------------------------------------------------------
Character.propTypes = {
    front: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function Character({ front =false , ...other }) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    const PRIMARY_DARKER = theme.palette.primary.darker;
    const SECONDARY_MAIN = theme.palette.secondary.main;
    const SECONDARY_DARK = theme.palette.secondary.dark;
    const SECONDARY_DARKER = theme.palette.secondary.darker;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
        ...other,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "100%",
            height: "100%",
            fill: "none",
            viewBox: "0 0 349 450",
            children: [
                !front && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: "#FF928E",
                    fillRule: "evenodd",
                    d: "M156.262 105.782l-34.856-27.895c-5.073-8.737-10.352-15.758-15.836-21.064-1.763-1.128-5.005-2.195-2.866 3.867 2.139 6.062 4.116 12.534 2.232 13.953-1.885 1.42-5.419-1.65-7.808.838-1.592 1.66 4.637 5.822 18.686 12.489l25.687 26.531 14.761-8.719z",
                    clipRule: "evenodd"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: SECONDARY_MAIN,
                    fillRule: "evenodd",
                    d: "M175.877 104.395c-13.487-2.525-31.002-8.55-48.078-24.124l-10.514 15.478c10.944 15.478 27.686 29.562 44.07 31.979 12.912 1.905 22.214-12.453 14.522-23.333z",
                    clipRule: "evenodd"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: SECONDARY_DARK,
                    fillRule: "evenodd",
                    d: "M175.876 104.395c-13.487-2.525-31.002-8.55-48.078-24.124l-10.514 15.478c10.944 15.478 27.686 29.562 44.07 31.979 12.912 1.905 22.214-12.453 14.522-23.333z",
                    clipRule: "evenodd",
                    opacity: "0.24"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: "#FDBAB9",
                    d: "M196.465 52.565c-8.197 2.357-15.683 2.55-18.714.84-7.601-4.288-.362-34.307 9.105-44.37 9.466-10.062 43.312-6.484 38.708 17.245-1.598 8.235-6.931 14.538-13.531 19.079l-2.223 44.324-26.162-7.01 12.817-30.108z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: SECONDARY_DARKER,
                    fillRule: "evenodd",
                    d: "M197.714 13.62c3.167 2.933 4.73 7.4 6.508 13.226a6.764 6.764 0 012.512.19c3.612.968 5.757 4.676 4.79 8.282a6.73 6.73 0 01-3.222 4.144c.942 2.538 2.041 5.22 3.369 8.04 8.473-2.417 18.35-14.515 14.508-28.726-.359-6.554-4.992-10.222-9.867-13.13-3.795-2.93-8.177-4.32-12.208-4.253-7.509-1.338-14.662-.86-16.875-.03-1.859 6.938-1.064 9.357 10.485 12.258z",
                    clipRule: "evenodd"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: SECONDARY_DARKER,
                    fillRule: "evenodd",
                    d: "M202.988 22.984s-7.1 20.491-13.545 18.764c-6.446-1.727-10.819-7.277-13.647-8.035-2.062-.552-2.292 2.147-1.437 4.422.705 1.878 5.789 4.868 5.134 7.31-.654 2.443-4.486-.609-4.874.84-.642 2.396-2.612 6.697 1.554 7.814 4.216 1.13 16.714 2.834 20.46-2.858 3.745-5.692 9.686-25.627 9.686-25.627l-3.331-2.63z",
                    clipRule: "evenodd"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: "#FDBAB9",
                    fillRule: "evenodd",
                    d: "M201.813 179.982L117.959 319.95 55.092 438.28H41.55l105.334-258.298h54.928z",
                    clipRule: "evenodd"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "evenodd",
                    d: "M72.552 419.332l-26.114-7.887S63.6 360.223 88.506 298.708c24.907-61.514 53.497-118.726 53.497-118.726h73.754s-31.786 72.371-67.396 131.516c-35.609 59.145-75.81 107.834-75.81 107.834z",
                    clipRule: "evenodd"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: PRIMARY_DARK,
                    fillRule: "evenodd",
                    d: "M72.552 419.332l-26.113-7.887S63.6 360.223 88.507 298.708c24.906-61.514 53.497-118.726 53.497-118.726h73.754s-31.787 72.371-67.396 131.516c-35.61 59.145-75.81 107.834-75.81 107.834z",
                    clipRule: "evenodd",
                    opacity: "0.48"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: "#FDBAB9",
                    fillRule: "evenodd",
                    d: "M207.324 179.982c7.915 49.186 23.179 112.026 24.62 113.965.96 1.293 35.534 12.86 103.721 34.701l-2.925 11.922c-81.313-11.714-124.158-20.801-128.535-27.264-6.565-9.693-39.348-86.269-52.045-133.324h55.164z",
                    clipRule: "evenodd"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "evenodd",
                    d: "M311.696 318.343l-5.152 19.2c-60.817 5.326-98.081 1.478-111.792-11.544-13.711-13.022-29.337-61.694-46.879-146.017h70.329c11.114 69.049 17.327 105.023 18.64 107.922 1.313 2.898 26.264 13.045 74.854 30.439z",
                    clipRule: "evenodd"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: PRIMARY_DARKER,
                    fillRule: "evenodd",
                    d: "M60.5 431.444c1.07-.476 2.341.001 2.745 1.099.829 2.254 2.02 5.841 2.02 7.828 0 3.048-1.017 8.895-1.017 8.895H.598s-2.48-8.19 2.865-8.843c5.345-.653 8.88-1.179 8.88-1.179l29.706-13.221a1 1 0 011.331.531l1.952 4.728s4.948 2.305 8.042 2.305c1.965 0 5.1-1.239 7.127-2.143zM330.474 326.272c-.285-1.136.407-2.308 1.561-2.515 2.368-.423 6.11-.971 8.069-.626 3.007.529 8.597 2.544 8.597 2.544l-11.052 62.583s-8.509 1.018-8.225-4.352c.285-5.369.38-8.937.38-8.937l-7.883-31.5a.999.999 0 01.756-1.219l5.001-1.099s3.133-4.465 3.67-7.507c.341-1.93-.334-5.222-.874-7.372z",
                    clipRule: "evenodd"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: "#FF928E",
                    fillRule: "evenodd",
                    d: "M92.707 112.927L77.4 100.646s-1.177-14.178-6.122-15.137c-2.332-1.628.08 10.565-4.562 8.726-4.64-1.839-14.854-12.638-17.192-11.223-3.458 2.093-2.206 10.613.236 15.172 4.563 8.521 8.982 11.939 20.43 17.413 8.978 4.294 18.557 14.137 18.557 14.137l3.959-16.807z",
                    clipRule: "evenodd"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: SECONDARY_MAIN,
                    fillRule: "evenodd",
                    d: "M223.974 229.735c-19.389-7.489-82.66 2.035-89.043-21.421-12.624-46.395 35.276-99.074 47.57-146.758l30.836 5.438c3.382.596 18.608 48.635 13.591 77.215-4.582 26.099 16.815 46.961-2.954 85.526z",
                    clipRule: "evenodd"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: SECONDARY_MAIN,
                    fillRule: "evenodd",
                    d: "M185.568 62.096s-7.796 62.266-30.01 65.755c-22.214 3.489-72.564-25.065-72.564-25.065s-17.138 23.732-18.138 34.949c108.332 83.257 171.477 12.112 147.51-70.913l-26.798-4.726z",
                    clipRule: "evenodd"
                })
            ]
        })
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (memo(Character))));


/***/ }),

/***/ 7210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);



// @mui

// ----------------------------------------------------------------------
Circle.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
    hide: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function Circle({ children , hide =false , sx , ...other }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        sx: {
            width: 460,
            height: 460,
            position: "absolute",
            ...sx
        },
        ...other,
        children: [
            !hide && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "100%",
                height: "100%",
                viewBox: "0 0 520 520",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeDasharray: "3",
                    strokeWidth: "1",
                    opacity: "0.24",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                        stroke: "#919EAB",
                        strokeWidth: "2",
                        transform: "translate(-757 1.852)",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M1017 518c143.042 0 259-115.958 259-259S1160.042 0 1017 0 758 115.958 758 259s115.958 259 259 259z"
                        })
                    })
                })
            }),
            children
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(Circle));


/***/ }),

/***/ 6326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);



// @mui

// ----------------------------------------------------------------------
Dot.propTypes = {
    size: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error"
    ])
};
function Dot({ size =24 , color ="primary" , sx  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        sx: {
            width: size,
            height: size,
            zIndex: 10,
            position: "absolute",
            borderRadius: "50%",
            background: (theme)=>theme.palette.gradients[color],
            boxShadow: (theme)=>`inset 0px -2px 4px ${theme.palette[color].darker}`,
            ...sx
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(Dot));


/***/ }),

/***/ 7432:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);



// @mui


// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box)(({ theme  })=>({
        padding: theme.spacing(1.5),
        borderRadius: Number(theme.shape.borderRadius) * 2.5
    }));
const ContentStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")(({ theme  })=>({
        width: 56,
        height: 56,
        borderRadius: Number(theme.shape.borderRadius) * 1.5,
        position: "relative",
        display: "flex",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%, 0 25%)",
        boxShadow: `inset 0px -4px 6px rgba(0, 0, 0, 0.48)`
    }));
const Shape01Style = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")(()=>({
        top: -2,
        left: -2,
        width: 16,
        zIndex: 9,
        height: 16,
        borderRadius: "5px",
        position: "absolute",
        "&:before": {
            top: 0,
            left: 0,
            width: 16,
            height: 16,
            content: '" "',
            borderRadius: "5px",
            position: "absolute",
            backgroundColor: "rgba(255,255,255,0.4)"
        }
    }));
const Shape02Style = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")(({ theme  })=>({
        top: 2,
        left: -10,
        width: 18,
        zIndex: 8,
        height: 18,
        opacity: 0.24,
        position: "absolute",
        transform: "rotate(45deg)",
        backgroundColor: theme.palette.common.black
    }));
// ----------------------------------------------------------------------
Icon.propTypes = {
    color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    content: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function Icon({ content , color , sx , ...other }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        sx: {
            background: `linear-gradient(to bottom, ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.alpha)(color, 0.24)} -8%, ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.alpha)(color, 0)} 120%)`,
            ...sx
        },
        ...other,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
            sx: {
                bgcolor: color,
                borderRadius: 3,
                boxShadow: (theme)=>`0px 24px 48px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.alpha)(theme.palette.common.black, 0.4)}`
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ContentStyle, {
                sx: {
                    bgcolor: color
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Shape01Style, {
                        sx: {
                            bgcolor: color
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Shape02Style, {}),
                    content
                ]
            })
        })
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (memo(Icon))));


/***/ }),

/***/ 1383:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _pattern_01__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1811);
/* harmony import */ var _pattern_02__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1025);
/* harmony import */ var _dots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6326);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7432);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1357);
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9431);
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7210);
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1000);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pattern_01__WEBPACK_IMPORTED_MODULE_0__, _pattern_02__WEBPACK_IMPORTED_MODULE_1__]);
([_pattern_01__WEBPACK_IMPORTED_MODULE_0__, _pattern_02__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1357:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);



// @mui

// ----------------------------------------------------------------------
Label.propTypes = {
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
function Label({ icon , text , sx , ...other }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
        direction: "row",
        alignItems: "center",
        sx: {
            px: 2,
            py: 1.25,
            fontSize: 15,
            borderRadius: 2,
            letterSpacing: -0.5,
            color: "common.black",
            bgcolor: "common.white",
            fontWeight: "fontWeightBold",
            boxShadow: (theme)=>`0px 24px 48px rgba(0, 0, 0, 0.8), inset 0px -4px 10px ${theme.palette.grey[600]}`,
            "& > div": {
                lineHeight: 0
            },
            "& svg": {
                width: 44,
                height: 44
            },
            ...sx
        },
        ...other,
        children: [
            icon,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                sx: {
                    ml: 1
                },
                children: text
            })
        ]
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (memo(Label))));


/***/ }),

/***/ 1811:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// @mui


// ----------------------------------------------------------------------
const varUp = {
    animate: {
        y: [
            -12,
            12,
            -12
        ]
    },
    transition: {
        duration: 8,
        repeat: Infinity
    }
};
const varDown = {
    animate: {
        y: [
            12,
            -12,
            12
        ]
    },
    transition: {
        duration: 8,
        repeat: Infinity
    }
};
const varLeft = {
    animate: {
        x: [
            10,
            -10,
            10
        ]
    },
    transition: {
        duration: 7,
        repeat: Infinity
    }
};
const varRight = {
    animate: {
        x: [
            10,
            -10,
            10
        ]
    },
    transition: {
        duration: 7,
        repeat: Infinity
    }
};
// ----------------------------------------------------------------------
Pattern01.propTypes = {
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function Pattern01({ sx  }) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const PURPLE = "#DC8CFF";
    const BLUE = theme.palette.info.light;
    const RED = theme.palette.error.light;
    const CYAN = theme.palette.info.lighter;
    const GREEN = theme.palette.success.light;
    const ORANGE = theme.palette.warning.light;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
        sx: {
            width: 1,
            height: 1,
            position: "absolute",
            opacity: 0.32,
            ...sx
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "100%",
            height: "100%",
            fill: "none",
            viewBox: "0 0 640 640",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.polygon, {
                    ...varLeft,
                    fill: GREEN,
                    points: "79.6660954 466.5012 83.4706954 470.3062 87.2873954 466.4912 88.9182954 468.1212 85.1008954 471.9362 88.9077954 475.7412 87.2723954 477.3762 83.4651954 473.5712 79.6510954 477.3862 78.0202954 475.7562 81.8348954 471.9422 78.0306954 468.1362"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.polygon, {
                    ...varUp,
                    fill: GREEN,
                    points: "469.906195 75.0105 473.711195 78.8154 477.527195 75 479.158195 76.6304 475.341195 80.4452 479.148195 84.2498 477.512195 85.8847 473.705195 82.0805 469.891195 85.8952 468.260195 84.2648 472.075195 80.4507 468.271195 76.6454"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.polygon, {
                    ...varRight,
                    fill: PURPLE,
                    points: "400.526195 241.7992 404.331195 245.6042 408.148195 241.7882 409.778195 243.4192 405.961195 247.2342 409.768195 251.0382 408.133195 252.6732 404.325195 248.8692 400.511195 252.6842 398.880195 251.0532 402.695195 247.2392 398.891195 243.4342"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.path, {
                    ...varLeft,
                    d: "M204.688195,460.0412 L215.909195,471.2692 C216.698195,472.0482 217.486195,471.7982 217.686195,470.7102 L220.172195,457.3862 C220.242195,457.1642 220.250195,456.9272 220.195195,456.7002 C220.140195,456.4742 220.023195,456.2672 219.858195,456.1022 C219.694195,455.9382 219.487195,455.8212 219.260195,455.7662 C219.034195,455.7112 218.797195,455.7192 218.575195,455.7892 L205.237195,458.2642 C204.149195,458.4642 203.909195,459.2622 204.688195,460.0412 Z",
                    stroke: PURPLE,
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.path, {
                    ...varUp,
                    d: "M316.964195,555.3242 L320.830195,551.4592 C321.416195,550.8752 322.209195,550.5472 323.036195,550.5472 C323.863195,550.5472 324.657195,550.8752 325.243195,551.4592 L329.108195,555.3242 C329.400195,555.6142 329.631195,555.9582 329.789195,556.3372 C329.947195,556.7172 330.028195,557.1232 330.028195,557.5342 C330.028195,557.9452 329.947195,558.3512 329.789195,558.7302 C329.631195,559.1102 329.400195,559.4542 329.108195,559.7442 L325.243195,563.6082 C324.657195,564.1922 323.863195,564.5202 323.036195,564.5202 C322.209195,564.5202 321.416195,564.1922 320.830195,563.6082 L316.964195,559.7442 C316.673195,559.4542 316.442195,559.1102 316.284195,558.7302 C316.126195,558.3512 316.045195,557.9452 316.045195,557.5342 C316.045195,557.1232 316.126195,556.7172 316.284195,556.3372 C316.442195,555.9582 316.673195,555.6142 316.964195,555.3242 L316.964195,555.3242 Z",
                    stroke: CYAN,
                    strokeWidth: "2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.path, {
                    ...varDown,
                    d: "M488.678195,226.9562 L492.544195,223.0912 C493.130195,222.5072 493.923195,222.1792 494.750195,222.1792 C495.577195,222.1792 496.371195,222.5072 496.956195,223.0912 L500.822195,226.9562 C501.114195,227.2452 501.345195,227.5902 501.503195,227.9692 C501.660195,228.3482 501.742195,228.7552 501.742195,229.1652 C501.742195,229.5762 501.660195,229.9832 501.503195,230.3622 C501.345195,230.7412 501.114195,231.0862 500.822195,231.3752 L496.956195,235.2402 C496.371195,235.8242 495.577195,236.1522 494.750195,236.1522 C493.923195,236.1522 493.130195,235.8242 492.544195,235.2402 L488.678195,231.3752 C488.387195,231.0862 488.155195,230.7412 487.998195,230.3622 C487.840195,229.9832 487.759195,229.5762 487.759195,229.1652 C487.759195,228.7552 487.840195,228.3482 487.998195,227.9692 C488.155195,227.5902 488.387195,227.2452 488.678195,226.9562 L488.678195,226.9562 Z",
                    stroke: CYAN,
                    strokeWidth: "2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.path, {
                    ...varLeft,
                    d: "M605.025195,349.0122 L615.168195,359.1522 C615.947195,359.9312 616.736195,359.6912 616.945195,358.6032 L619.182195,346.5962 C619.250195,346.3742 619.257195,346.1382 619.201195,345.9132 C619.145195,345.6872 619.028195,345.4812 618.864195,345.3172 C618.700195,345.1532 618.494195,345.0362 618.268195,344.9802 C618.043195,344.9242 617.806195,344.9312 617.584195,344.9992 L605.574195,347.2352 C604.486195,347.4352 604.237195,348.2332 605.025195,349.0122 Z",
                    stroke: RED,
                    strokeWidth: "2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.path, {
                    ...varDown,
                    d: "M559.564195,533.7552 L569.707195,543.8952 C570.486195,544.6742 571.275195,544.4352 571.484195,543.3472 L573.721195,531.3402 C573.789195,531.1182 573.796195,530.8812 573.740195,530.6562 C573.684195,530.4312 573.567195,530.2252 573.403195,530.0602 C573.239195,529.8962 573.033195,529.7802 572.807195,529.7242 C572.582195,529.6682 572.345195,529.6742 572.123195,529.7432 L560.113195,531.9782 C559.025195,532.1782 558.776195,532.9772 559.564195,533.7552 Z",
                    stroke: ORANGE,
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.path, {
                    ...varUp,
                    d: "M30.9833954,422.9532 C30.9833954,423.9402 30.6905954,424.9052 30.1420954,425.7252 C29.5935954,426.5462 28.8139954,427.1862 27.9018954,427.5642 C26.9897954,427.9412 25.9861454,428.0402 25.0178554,427.8472 C24.0495654,427.6552 23.1601254,427.1802 22.4620254,426.4822 C21.7639254,425.7842 21.2885254,424.8952 21.0959154,423.9272 C20.9033154,422.9592 21.0021554,421.9552 21.3799654,421.0432 C21.7577754,420.1312 22.3975754,419.3522 23.2184454,418.8042 C24.0393254,418.2552 25.0044154,417.9622 25.9916854,417.9622 C27.3155954,417.9622 28.5851954,418.4882 29.5212954,419.4242 C30.4574954,420.3602 30.9833954,421.6292 30.9833954,422.9532 Z",
                    stroke: BLUE,
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.path, {
                    ...varDown,
                    d: "M321.193195,87.598 C321.193195,88.585 320.900195,89.5498 320.352195,90.3705 C319.803195,91.1911 319.024195,91.831 318.112195,92.2087 C317.200195,92.5864 316.196195,92.6849 315.228195,92.4924 C314.259195,92.2998 313.370195,91.8247 312.672195,91.1268 C311.974195,90.4289 311.498195,89.5397 311.306195,88.5717 C311.113195,87.6036 311.212195,86.5999 311.590195,85.6881 C311.968195,84.7762 312.607195,83.9971 313.428195,83.4487 C314.249195,82.9004 315.214195,82.6076 316.201195,82.6076 C317.525195,82.6076 318.795195,83.1332 319.731195,84.0691 C320.667195,85.005 321.193195,86.2744 321.193195,87.598 Z",
                    stroke: BLUE,
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.path, {
                    ...varUp,
                    d: "M296.550195,430.7782 C299.583195,430.7782 302.041195,428.3202 302.041195,425.2882 C302.041195,422.2562 299.583195,419.7992 296.550195,419.7992 C293.518195,419.7992 291.059195,422.2562 291.059195,425.2882 C291.059195,428.3202 293.518195,430.7782 296.550195,430.7782 Z",
                    stroke: RED,
                    strokeWidth: "2"
                })
            ]
        })
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (memo(Pattern01))));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1025:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dots__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6326);
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// @mui

//


// ----------------------------------------------------------------------
const animateDown = (duration = 60)=>({
        animate: {
            rotate: [
                360,
                0
            ]
        },
        transition: {
            duration,
            repeat: Infinity,
            ease: "linear"
        }
    });
const animateUp = (duration = 60)=>({
        animate: {
            rotate: [
                0,
                360
            ]
        },
        transition: {
            duration,
            repeat: Infinity,
            ease: "linear"
        }
    });
Pattern02.propTypes = {
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function Pattern02({ sx , ...other }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
        sx: {
            width: 1,
            height: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            ...sx
        },
        ...other,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_circle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                hide: true,
                component: framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.div,
                ...animateDown(),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_dots__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    sx: {
                        left: -12,
                        top: "50%",
                        mt: -1.5
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_circle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                hide: true,
                component: framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.div,
                ...animateUp(80),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_dots__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    size: 16,
                    color: "secondary",
                    sx: {
                        top: 80,
                        left: 42
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_circle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                hide: true,
                component: framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.div,
                ...animateUp(100),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_dots__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    size: 14,
                    color: "success",
                    sx: {
                        top: 22,
                        left: 112
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_circle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                component: framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.div,
                ...animateDown(120),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_dots__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    size: 12,
                    color: "warning",
                    sx: {
                        top: 54,
                        right: 70
                    }
                })
            })
        ]
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (memo(Pattern02))));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9431:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);


// @mui


// ----------------------------------------------------------------------
function Shape({ ...other }) {
    const theme = useTheme();
    const PRIMARY_LIGHT = theme.palette.primary.light;
    const PRIMARY_MAIN = theme.palette.primary.main;
    const SECONDARY_LIGHT = theme.palette.secondary.light;
    const SECONDARY_MAIN = theme.palette.secondary.main;
    return /*#__PURE__*/ _jsx(Box, {
        ...other,
        children: /*#__PURE__*/ _jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "505",
            height: "454",
            viewBox: "0 0 505 454",
            children: [
                /*#__PURE__*/ _jsxs("defs", {
                    children: [
                        /*#__PURE__*/ _jsxs("linearGradient", {
                            id: "linearGradient-1",
                            x1: "-9.342%",
                            x2: "107.911%",
                            y1: "42.109%",
                            y2: "42.109%",
                            children: [
                                /*#__PURE__*/ _jsx("stop", {
                                    offset: "0%",
                                    stopColor: SECONDARY_LIGHT
                                }),
                                /*#__PURE__*/ _jsx("stop", {
                                    offset: "100%",
                                    stopColor: SECONDARY_MAIN
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("linearGradient", {
                            id: "linearGradient-2",
                            x1: "-6.944%",
                            x2: "107.092%",
                            y1: "23.878%",
                            y2: "62.216%",
                            children: [
                                /*#__PURE__*/ _jsx("stop", {
                                    offset: "0%",
                                    stopColor: PRIMARY_LIGHT
                                }),
                                /*#__PURE__*/ _jsx("stop", {
                                    offset: "100%",
                                    stopColor: PRIMARY_MAIN
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: "1",
                    children: /*#__PURE__*/ _jsxs("g", {
                        fillRule: "nonzero",
                        transform: "translate(.17 .105)",
                        children: [
                            /*#__PURE__*/ _jsx("path", {
                                fill: "url(#linearGradient-1)",
                                d: "M23.436 261.525c-36.2-36.2-29.554-96.617 13.651-124.082L233.654 12.487c28.81-18.314 66.067-16.33 92.768 4.944l147.772 117.732c37.342 29.75 40.48 85.378 6.718 119.138l-175.78 175.782c-31.243 31.242-81.896 31.242-113.138 0L23.436 261.525z",
                                opacity: "0.2"
                            }),
                            /*#__PURE__*/ _jsx("path", {
                                fill: "url(#linearGradient-2)",
                                d: "M13.105 176.16C-7.718 129.39 20.14 75.37 70.316 65.214l228.291-46.214c33.46-6.773 67.531 8.432 84.835 37.86l95.765 162.87c24.201 41.157 7.195 94.213-36.423 113.632l-227.1 101.112c-40.363 17.97-87.652-.182-105.623-40.545L13.105 176.16z",
                                opacity: "0.48"
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (memo(Shape))));


/***/ }),

/***/ 914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ withBlitz)
/* harmony export */ });
/* unused harmony export authConfig */
/* harmony import */ var _blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7897);
/* harmony import */ var _blitzjs_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blitzjs_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1990);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5481);
/* harmony import */ var _blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__);



const authConfig = {
    cookiePrefix: "web"
};
const { withBlitz  } = (0,_blitzjs_next__WEBPACK_IMPORTED_MODULE_2__/* .setupBlitzClient */ .qd)({
    plugins: [
        (0,_blitzjs_auth__WEBPACK_IMPORTED_MODULE_0__.AuthClientPlugin)(authConfig),
        (0,_blitzjs_rpc__WEBPACK_IMPORTED_MODULE_1__.BlitzRpcPlugin)({})
    ]
});


/***/ }),

/***/ 6704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E0": () => (/* binding */ HOST_API),
/* harmony export */   "FD": () => (/* binding */ GOOGLE_API),
/* harmony export */   "he": () => (/* binding */ defaultSettings),
/* harmony export */   "pG": () => (/* binding */ DRAWER_WIDTH),
/* harmony export */   "w_": () => (/* binding */ HEADER_MOBILE_HEIGHT),
/* harmony export */   "zj": () => (/* binding */ HEADER_DESKTOP_HEIGHT)
/* harmony export */ });
/* unused harmony export defaultLocale */
// API
// ----------------------------------------------------------------------
const HOST_API = {
    dev: "http://localhost:3000",
    production: "http://your-production"
};
const GOOGLE_API = process.env.GOOGLE_API;
// LAYOUT
// ----------------------------------------------------------------------
const HEADER_MOBILE_HEIGHT = 92;
const HEADER_DESKTOP_HEIGHT = 112;
const DRAWER_WIDTH = 280;
// DEFAULT LOCALE
// ----------------------------------------------------------------------
// Also change in next.config.mjs
const defaultLocale = "en";
// SETTINGS
// ----------------------------------------------------------------------
const defaultSettings = {
    // light | dark
    themeMode: "light",
    // ltr | rtl
    themeDirection: "ltr",
    //  default | blueOrange | greenOrange | purpleTeal | cyanYellow | pinkCyan
    themeColorPresets: "default"
};


/***/ }),

/***/ 5425:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ SettingsContext),
/* harmony export */   "m": () => (/* binding */ SettingsProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5480);
/* harmony import */ var src_utils_getColorPresets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5981);
/* harmony import */ var src_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6704);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_hooks__WEBPACK_IMPORTED_MODULE_2__]);
src_hooks__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// hooks

// utils

// config

// ----------------------------------------------------------------------
const initialState = {
    ...src_config__WEBPACK_IMPORTED_MODULE_4__/* .defaultSettings */ .he,
    onToggleMode: ()=>{},
    onToggleDirection: ()=>{},
    onChangeColorPresets: ()=>{},
    onResetSetting: ()=>{},
    colorOption: [],
    setColor: src_utils_getColorPresets__WEBPACK_IMPORTED_MODULE_3__/* .colorPresets[0] */ .P[0]
};
const SettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);
function SettingsProvider({ children  }) {
    const [settings, setSettings] = (0,src_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useLocalStorage */ ._)("settings", {
        ...src_config__WEBPACK_IMPORTED_MODULE_4__/* .defaultSettings */ .he
    });
    const onToggleMode = ()=>{
        setSettings({
            ...settings,
            themeMode: settings.themeMode === "light" ? "dark" : "light"
        });
    };
    const onToggleDirection = ()=>{
        setSettings({
            ...settings,
            themeDirection: settings.themeDirection === "ltr" ? "rtl" : "ltr"
        });
    };
    const onChangeColorPresets = (event)=>{
        setSettings({
            ...settings,
            themeColorPresets: event.target.value
        });
    };
    const onResetSetting = ()=>{
        setSettings({
            ...src_config__WEBPACK_IMPORTED_MODULE_4__/* .defaultSettings */ .he
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingsContext.Provider, {
        value: {
            ...settings,
            // Mode
            onToggleMode,
            // Direction
            onToggleDirection,
            // Color Presets
            onChangeColorPresets,
            setColor: (0,src_utils_getColorPresets__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(settings.themeColorPresets),
            colorOption: src_utils_getColorPresets__WEBPACK_IMPORTED_MODULE_3__/* .colorPresets.map */ .P.map((color)=>({
                    name: color.name,
                    primary: color.primary.main,
                    secondary: color.secondary.main
                })),
            // Reset Setting
            onResetSetting
        },
        children: children
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7929:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AnimatedHoop)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// <g id="ITM_4CP_Hoop 1" clipPath="url(#clip0_205_739)">
// </g>
const draw = {
    hidden: {
        pathLength: 0,
        opacity: 0,
        rotate: 0
    },
    visible: (i)=>{
        const delay = 1 + i * 0.02;
        return {
            pathLength: 1,
            opacity: 1,
            rotate: 360,
            transition: {
                pathLength: {
                    delay,
                    type: "spring",
                    duration: 0.5,
                    bounce: 0
                },
                opacity: {
                    delay,
                    duration: 0.01
                },
                rotate: {
                    delay,
                    duration: 1
                }
            }
        };
    }
};
function AnimatedHoop({ children , position ="relative" , size ="185" , sx , viewBox  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.svg, {
        style: {
            pointerEvents: "none",
            ...sx
        },
        initial: "hidden",
        animate: "visible",
        width: size,
        height: size,
        viewBox: viewBox ? viewBox : `0 0 185 185`,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 1,
                id: "Vector",
                d: "M75.42 1.44C74.2 1.66 72.98 1.9 71.78 2.16C70.97 2.34 70.4 3.06 70.4 3.89V7.55C70.4 8.68 71.45 9.52 72.55 9.27C73.71 9.01 74.87 8.77 76.05 8.55C76.89 8.39 77.51 7.67 77.51 6.81V3.18C77.51 2.07 76.51 1.25 75.42 1.44Z",
                fill: "#DA5225"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 2,
                id: "Vector_2",
                d: "M102.04 5.31V2.57C102.04 1.43 101.17 0.49 100.04 0.39C97.27 0.13 94.48 0 91.66 0C89.25 0 86.87 0.1 84.51 0.28C83.36 0.37 82.47 1.32 82.47 2.47V5.21C82.47 6.49 83.56 7.49 84.84 7.39C87.09 7.21 89.36 7.11 91.65 7.11C94.35 7.11 97.01 7.24 99.64 7.49C100.93 7.6 102.04 6.59 102.04 5.31Z",
                fill: "#DA5225"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 3,
                id: "Vector_3",
                d: "M112.68 2.43C111.4 2.13 110.11 1.86 108.81 1.61C107.87 1.43 107 2.14 107 3.09V7.24C107 7.97 107.52 8.58 108.23 8.72C109.49 8.97 110.74 9.25 111.98 9.55C112.93 9.78 113.84 9.06 113.84 8.08V3.9C113.84 3.2 113.36 2.59 112.68 2.43Z",
                fill: "#DA5225"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 4,
                id: "Vector_4",
                d: "M172.72 48.51C172.21 47.56 171.69 46.63 171.16 45.7C170.72 44.95 169.81 44.6 168.98 44.86L165.69 45.87C164.53 46.23 164.01 47.58 164.63 48.62C165.15 49.5 165.66 50.39 166.15 51.29C166.58 52.08 167.5 52.47 168.37 52.2L171.63 51.19C172.75 50.86 173.28 49.56 172.72 48.51Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 5,
                id: "Vector_5",
                d: "M181.39 71.75C180.24 66.63 178.67 61.68 176.71 56.92C176.28 55.87 175.13 55.32 174.05 55.65L171.4 56.47C170.17 56.85 169.54 58.2 170.04 59.39C171.93 63.92 173.43 68.64 174.51 73.53C174.79 74.77 176.06 75.51 177.27 75.14L179.91 74.33C181 73.98 181.64 72.86 181.39 71.75Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 6,
                id: "Vector_6",
                d: "M183.31 84.38C183.21 83.21 183.1 82.04 182.96 80.87C182.82 79.71 181.67 78.96 180.56 79.3L177.28 80.31C176.42 80.58 175.88 81.42 175.98 82.31C176.1 83.42 176.21 84.55 176.29 85.67C176.38 86.86 177.55 87.66 178.69 87.31L182 86.3C182.83 86.04 183.38 85.24 183.31 84.38Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 7,
                id: "Vector_7",
                d: "M158.54 155.09C159.29 154.29 160.03 153.48 160.76 152.66C161.32 152.02 161.36 151.07 160.86 150.37L158.8 147.52C158.11 146.56 156.69 146.49 155.92 147.39C155.23 148.19 154.53 148.97 153.81 149.74C153.21 150.39 153.14 151.36 153.65 152.08L155.69 154.91C156.38 155.85 157.74 155.94 158.54 155.09Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 8,
                id: "Vector_8",
                d: "M139.32 170.63C143.75 167.94 147.94 164.88 151.84 161.5C152.71 160.75 152.87 159.47 152.2 158.54L150.6 156.32C149.84 155.27 148.35 155.1 147.38 155.95C143.67 159.19 139.67 162.11 135.43 164.67C134.33 165.33 134.03 166.79 134.78 167.83L136.38 170.04C137.06 170.99 138.34 171.23 139.32 170.63Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 9,
                id: "Vector_9",
                d: "M128.16 176.4C129.05 176.02 129.93 175.62 130.81 175.21C132.04 174.63 132.45 173.07 131.65 171.97L130.01 169.69C129.4 168.84 128.26 168.56 127.31 169C126.49 169.38 125.66 169.75 124.82 170.11C123.54 170.66 123.09 172.25 123.9 173.38L125.56 175.68C126.15 176.49 127.23 176.81 128.16 176.4Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 10,
                id: "Vector_10",
                d: "M53.22 175.55C54.1 175.96 54.99 176.35 55.89 176.73C56.81 177.12 57.89 176.81 58.47 175.99L60.14 173.67C60.96 172.54 60.5 170.94 59.21 170.41C58.36 170.06 57.52 169.69 56.69 169.32C55.74 168.89 54.63 169.17 54.02 170.02L52.37 172.31C51.57 173.41 51.98 174.97 53.22 175.55Z",
                fill: "#456D90"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 11,
                id: "Vector_11",
                d: "M31.98 161.94C35.95 165.33 40.21 168.4 44.73 171.08C45.68 171.64 46.9 171.4 47.55 170.5L49.23 168.17C49.96 167.16 49.66 165.74 48.59 165.1C44.28 162.56 40.21 159.64 36.43 156.4C35.49 155.59 34.06 155.76 33.33 156.77L31.65 159.09C31.01 159.99 31.15 161.23 31.98 161.94Z",
                fill: "#456D90"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 12,
                id: "Vector_12",
                d: "M23.21 153.38C23.84 154.08 24.48 154.78 25.14 155.46C26.03 156.4 27.56 156.29 28.32 155.24L30.09 152.79C30.67 151.98 30.59 150.88 29.9 150.15C29.29 149.5 28.69 148.84 28.09 148.17C27.21 147.18 25.64 147.25 24.87 148.33L23.09 150.8C22.52 151.59 22.56 152.67 23.21 153.38Z",
                fill: "#456D90"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 13,
                id: "Vector_13",
                d: "M0.29 81.37C0.18 82.31 0.0899997 83.26 0.0099997 84.21C-0.0800003 85.23 0.57 86.17 1.55 86.47L4.21 87.29C5.56 87.71 6.94 86.76 7.04 85.36C7.11 84.46 7.19 83.56 7.29 82.67C7.41 81.62 6.74 80.64 5.74 80.33L3.12 79.52C1.81 79.12 0.45 80 0.29 81.37Z",
                fill: "#E0AC0F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 14,
                id: "Vector_14",
                d: "M6.56 57.05C4.61 61.78 3.05 66.71 1.91 71.8C1.66 72.94 2.31 74.08 3.42 74.42L5.98 75.21C7.22 75.59 8.52 74.83 8.8 73.57C9.87 68.72 11.37 64.02 13.23 59.52C13.73 58.31 13.09 56.93 11.84 56.55L9.28 55.76C8.17 55.41 7 55.98 6.56 57.05Z",
                fill: "#E0AC0F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 15,
                id: "Vector_15",
                d: "M12.05 45.9C11.57 46.73 11.09 47.58 10.64 48.43C10.03 49.56 10.61 50.97 11.84 51.35L14.79 52.26C15.72 52.55 16.72 52.13 17.19 51.27C17.63 50.47 18.08 49.68 18.55 48.89C19.22 47.75 18.66 46.29 17.4 45.9L14.42 44.98C13.51 44.71 12.53 45.08 12.05 45.9Z",
                fill: "#E0AC0F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 15,
                id: "Vector_16",
                d: "M18.36 41.01C18.36 41.01 20.54 42.29 22.05 40.3C41.01 15.4 47.78 17.3 64.04 11.7C64.64 11.49 65.85 11.05 66.47 10.49C66.78 10.21 66.82 9.73 66.59 9.38L65.16 7.15C64.36 6.08 61.92 6.56 60.91 6.89C42.49 13 29.96 20.9 20.62 35.37C18.79 38.2 16.24 40.57 18.36 41.01Z",
                fill: "#B4A890"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 16,
                id: "Vector_17",
                d: "M118.58 7.05C118.58 7.05 118.01 10.02 120.5 10.29C135.05 11.83 150.84 26.73 161.61 40.15C162.01 40.65 162.83 41.63 163.57 42.03C163.94 42.23 164.61 42.27 164.86 41.94L166.91 40.72C167.46 40.33 167.7 39.62 167.47 38.98C167 37.69 163.56 34.74 162.99 34.24C154.14 26.46 148.01 15.38 124.17 7.03C120.97 5.91 118.28 4.91 118.58 7.05Z",
                fill: "#B4A890"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 17,
                id: "Vector_18",
                d: "M2.06 90.49C2.06 90.49 5.16 90.81 4.61 93.25C0.84 109.9 11.68 127.03 21.46 141.18C21.82 141.7 22.53 142.77 22.7 143.59C22.78 144 22.63 144.65 22.24 144.8L20.49 146.41C19.96 146.82 19.21 146.85 18.66 146.45C17.56 145.63 16.4 143.87 16.09 143.18C11.17 132.47 1.62 121.05 0.44 95.82C0.28 92.46 0.0999997 89.59 2.06 90.49Z",
                fill: "#B4A890"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 18,
                id: "Vector_19",
                d: "M62.48 176.58C62.48 176.58 63.46 174.44 65.9 175.01C96.22 182.05 100.62 179.55 116.69 173.82C117.29 173.61 118.53 173.29 119.37 173.39C119.79 173.44 120.09 173.8 120.12 174.22L121.14 176.76C121.37 177.33 121.18 178 120.67 178.33C119.62 179.01 117.67 179.33 116.94 179.55C98.41 185.32 87.75 184.88 75.02 182.88C71.68 182.35 61.01 178.17 62.48 176.58Z",
                fill: "#B4A890"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.path, {
                variants: draw,
                custom: 20,
                id: "Vector_20",
                d: "M181.71 90.37C181.71 90.37 179.55 90.66 179.16 93.13C172.18 136.91 172.09 126.91 162.31 141.06C161.95 141.58 161.24 142.65 161.07 143.47C160.99 143.88 161.14 144.53 161.53 144.68L163.28 146.29C163.81 146.7 164.56 146.73 165.11 146.33C166.21 145.51 167.37 143.75 167.68 143.06C172.6 132.35 182.15 120.93 183.33 95.7C183.48 92.34 183.67 89.47 181.71 90.37Z",
                fill: "#B4A890"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BgOverlay)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_utils_cssStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(727);
// @mui



// utils

const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    shouldForwardProp: (prop)=>prop !== "direction" && prop !== "startColor" && prop !== "endColor"
})(({ direction , startColor , endColor , theme  })=>({
        top: 0,
        left: 0,
        zIndex: 8,
        width: "100%",
        height: "100%",
        position: "absolute",
        ...(0,src_utils_cssStyles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(theme).bgGradient({
            direction,
            startColor,
            endColor
        })
    }));
// ----------------------------------------------------------------------
function BgOverlay({ direction , startColor , endColor , ...other }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.NoSsr, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
            direction: direction,
            startColor: startColor,
            endColor: endColor,
            ...other
        })
    });
};


/***/ }),

/***/ 7282:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2893);
/* harmony import */ var _iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_4__]);
_Iconify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// icons


// next

// @mui

//

function Breadcrumbs({ links , activeLast =false , onDark =false , ...other }) {
    const currentLink = links[links.length - 1]?.name;
    const listDefault = links.map((link)=>/*#__PURE__*/ _jsx(LinkItem, {
            link: link,
            onDark: onDark
        }, link.name));
    const listActiveLast = links.map((link)=>/*#__PURE__*/ _jsx("div", {
            children: link.name !== currentLink ? /*#__PURE__*/ _jsx(LinkItem, {
                link: link,
                onDark: onDark
            }) : /*#__PURE__*/ _jsx(Typography, {
                noWrap: true,
                variant: "body3",
                sx: {
                    color: "text.disabled",
                    ...onDark && {
                        opacity: 0.48,
                        color: "common.white"
                    }
                },
                children: currentLink || ""
            })
        }, link.name));
    return /*#__PURE__*/ _jsx(MUIBreadcrumbs, {
        separator: /*#__PURE__*/ _jsx(Iconify, {
            icon: chevronRight,
            sx: {
                width: 16,
                height: 16,
                ...onDark && {
                    opacity: 0.48,
                    color: "common.white"
                }
            }
        }),
        ...other,
        children: activeLast ? listDefault : listActiveLast
    });
};
function LinkItem({ link , onDark  }) {
    const { href ="" , name , icon  } = link;
    return /*#__PURE__*/ _jsx(NextLink, {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ _jsxs(Link, {
            variant: "body3",
            sx: {
                display: "flex",
                alignItems: "center",
                color: "text.primary",
                "& > div": {
                    display: "inherit"
                },
                ...onDark && {
                    color: "common.white"
                }
            },
            children: [
                icon && /*#__PURE__*/ _jsx(Box, {
                    sx: {
                        mr: 1,
                        "& svg": {
                            width: 20,
                            height: 20
                        }
                    },
                    children: icon
                }),
                name
            ]
        })
    }, name);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8668:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4009);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// @mui

function CountUpNumber({ threshold =1 , sx , ...other }) {
    const [ref, inView] = useInView({
        threshold,
        triggerOnce: true
    });
    return /*#__PURE__*/ _jsx(Box, {
        component: "span",
        ref: ref,
        sx: sx,
        children: inView && /*#__PURE__*/ _jsx(CountUp, {
            duration: 1,
            ...other
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5522:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_rotate_360__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3793);
/* harmony import */ var _iconify_icons_carbon_rotate_360__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_rotate_360__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8438);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_6__]);
_Iconify__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// icon


// next

// @mui


//


// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")(()=>({
        width: "100%",
        height: "100%",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    }));
function ErrorScreen({ title , description , ...other }) {
    const router = useRouter();
    const handleReload = ()=>{
        router.reload();
    };
    return /*#__PURE__*/ _jsx(RootStyle, {
        ...other,
        children: /*#__PURE__*/ _jsxs(Stack, {
            spacing: 5,
            alignItems: "center",
            children: [
                /*#__PURE__*/ _jsx(Image, {
                    alt: "500",
                    src: "https://zone-assets-api.vercel.app/assets/illustrations/illustration_500.svg",
                    sx: {
                        maxWidth: 240
                    }
                }),
                /*#__PURE__*/ _jsxs(Stack, {
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ _jsxs(Typography, {
                            variant: "h3",
                            children: [
                                " ",
                                title || "Failed To Load "
                            ]
                        }),
                        /*#__PURE__*/ _jsx(Typography, {
                            sx: {
                                color: "text.secondary"
                            },
                            children: description || "Unable to download data please try again"
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(Button, {
                    variant: "outlined",
                    size: "large",
                    color: "inherit",
                    startIcon: /*#__PURE__*/ _jsx(Iconify, {
                        icon: rotate360,
                        sx: {
                            width: 20,
                            height: 20
                        }
                    }),
                    onClick: handleReload,
                    children: "Reload"
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9131:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_favorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(967);
/* harmony import */ var _iconify_icons_carbon_favorite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_favorite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_favorite_filled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1779);
/* harmony import */ var _iconify_icons_carbon_favorite_filled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_favorite_filled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_4__]);
_Iconify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// icons



// @mui

//

// ----------------------------------------------------------------------
function FavoriteButton({ ...other }) {
    return /*#__PURE__*/ _jsx(Checkbox, {
        color: "error",
        icon: /*#__PURE__*/ _jsx(Iconify, {
            icon: favoriteIcon,
            sx: {
                width: 20,
                height: 20
            }
        }),
        checkedIcon: /*#__PURE__*/ _jsx(Iconify, {
            icon: favoriteFilled,
            sx: {
                width: 20,
                height: 20
            }
        }),
        ...other
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Hoop)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// <g id="ITM_4CP_Hoop 1" clipPath="url(#clip0_205_739)">
// </g>
function Hoop({ children , position ="relative" , size ="185" , sx , viewBox , ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        style: {
            pointerEvents: "none",
            ...sx
        },
        width: size,
        height: size,
        viewBox: viewBox ? viewBox : `0 0 185 185`,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector",
                d: "M75.42 1.44C74.2 1.66 72.98 1.9 71.78 2.16C70.97 2.34 70.4 3.06 70.4 3.89V7.55C70.4 8.68 71.45 9.52 72.55 9.27C73.71 9.01 74.87 8.77 76.05 8.55C76.89 8.39 77.51 7.67 77.51 6.81V3.18C77.51 2.07 76.51 1.25 75.42 1.44Z",
                fill: "#DA5225"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector_2",
                d: "M102.04 5.31V2.57C102.04 1.43 101.17 0.49 100.04 0.39C97.27 0.13 94.48 0 91.66 0C89.25 0 86.87 0.1 84.51 0.28C83.36 0.37 82.47 1.32 82.47 2.47V5.21C82.47 6.49 83.56 7.49 84.84 7.39C87.09 7.21 89.36 7.11 91.65 7.11C94.35 7.11 97.01 7.24 99.64 7.49C100.93 7.6 102.04 6.59 102.04 5.31Z",
                fill: "#DA5225"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector_3",
                d: "M112.68 2.43C111.4 2.13 110.11 1.86 108.81 1.61C107.87 1.43 107 2.14 107 3.09V7.24C107 7.97 107.52 8.58 108.23 8.72C109.49 8.97 110.74 9.25 111.98 9.55C112.93 9.78 113.84 9.06 113.84 8.08V3.9C113.84 3.2 113.36 2.59 112.68 2.43Z",
                fill: "#DA5225"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector_4",
                d: "M172.72 48.51C172.21 47.56 171.69 46.63 171.16 45.7C170.72 44.95 169.81 44.6 168.98 44.86L165.69 45.87C164.53 46.23 164.01 47.58 164.63 48.62C165.15 49.5 165.66 50.39 166.15 51.29C166.58 52.08 167.5 52.47 168.37 52.2L171.63 51.19C172.75 50.86 173.28 49.56 172.72 48.51Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector_5",
                d: "M181.39 71.75C180.24 66.63 178.67 61.68 176.71 56.92C176.28 55.87 175.13 55.32 174.05 55.65L171.4 56.47C170.17 56.85 169.54 58.2 170.04 59.39C171.93 63.92 173.43 68.64 174.51 73.53C174.79 74.77 176.06 75.51 177.27 75.14L179.91 74.33C181 73.98 181.64 72.86 181.39 71.75Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector_6",
                d: "M183.31 84.38C183.21 83.21 183.1 82.04 182.96 80.87C182.82 79.71 181.67 78.96 180.56 79.3L177.28 80.31C176.42 80.58 175.88 81.42 175.98 82.31C176.1 83.42 176.21 84.55 176.29 85.67C176.38 86.86 177.55 87.66 178.69 87.31L182 86.3C182.83 86.04 183.38 85.24 183.31 84.38Z",
                fill: "#610000"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector_7",
                d: "M158.54 155.09C159.29 154.29 160.03 153.48 160.76 152.66C161.32 152.02 161.36 151.07 160.86 150.37L158.8 147.52C158.11 146.56 156.69 146.49 155.92 147.39C155.23 148.19 154.53 148.97 153.81 149.74C153.21 150.39 153.14 151.36 153.65 152.08L155.69 154.91C156.38 155.85 157.74 155.94 158.54 155.09Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector_8",
                d: "M139.32 170.63C143.75 167.94 147.94 164.88 151.84 161.5C152.71 160.75 152.87 159.47 152.2 158.54L150.6 156.32C149.84 155.27 148.35 155.1 147.38 155.95C143.67 159.19 139.67 162.11 135.43 164.67C134.33 165.33 134.03 166.79 134.78 167.83L136.38 170.04C137.06 170.99 138.34 171.23 139.32 170.63Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector_9",
                d: "M128.16 176.4C129.05 176.02 129.93 175.62 130.81 175.21C132.04 174.63 132.45 173.07 131.65 171.97L130.01 169.69C129.4 168.84 128.26 168.56 127.31 169C126.49 169.38 125.66 169.75 124.82 170.11C123.54 170.66 123.09 172.25 123.9 173.38L125.56 175.68C126.15 176.49 127.23 176.81 128.16 176.4Z",
                fill: "#605E43"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector_10",
                d: "M53.22 175.55C54.1 175.96 54.99 176.35 55.89 176.73C56.81 177.12 57.89 176.81 58.47 175.99L60.14 173.67C60.96 172.54 60.5 170.94 59.21 170.41C58.36 170.06 57.52 169.69 56.69 169.32C55.74 168.89 54.63 169.17 54.02 170.02L52.37 172.31C51.57 173.41 51.98 174.97 53.22 175.55Z",
                fill: "#456D90"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector_11",
                d: "M31.98 161.94C35.95 165.33 40.21 168.4 44.73 171.08C45.68 171.64 46.9 171.4 47.55 170.5L49.23 168.17C49.96 167.16 49.66 165.74 48.59 165.1C44.28 162.56 40.21 159.64 36.43 156.4C35.49 155.59 34.06 155.76 33.33 156.77L31.65 159.09C31.01 159.99 31.15 161.23 31.98 161.94Z",
                fill: "#456D90"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector_12",
                d: "M23.21 153.38C23.84 154.08 24.48 154.78 25.14 155.46C26.03 156.4 27.56 156.29 28.32 155.24L30.09 152.79C30.67 151.98 30.59 150.88 29.9 150.15C29.29 149.5 28.69 148.84 28.09 148.17C27.21 147.18 25.64 147.25 24.87 148.33L23.09 150.8C22.52 151.59 22.56 152.67 23.21 153.38Z",
                fill: "#456D90"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector_13",
                d: "M0.29 81.37C0.18 82.31 0.0899997 83.26 0.0099997 84.21C-0.0800003 85.23 0.57 86.17 1.55 86.47L4.21 87.29C5.56 87.71 6.94 86.76 7.04 85.36C7.11 84.46 7.19 83.56 7.29 82.67C7.41 81.62 6.74 80.64 5.74 80.33L3.12 79.52C1.81 79.12 0.45 80 0.29 81.37Z",
                fill: "#E0AC0F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector_14",
                d: "M6.56 57.05C4.61 61.78 3.05 66.71 1.91 71.8C1.66 72.94 2.31 74.08 3.42 74.42L5.98 75.21C7.22 75.59 8.52 74.83 8.8 73.57C9.87 68.72 11.37 64.02 13.23 59.52C13.73 58.31 13.09 56.93 11.84 56.55L9.28 55.76C8.17 55.41 7 55.98 6.56 57.05Z",
                fill: "#E0AC0F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector_15",
                d: "M12.05 45.9C11.57 46.73 11.09 47.58 10.64 48.43C10.03 49.56 10.61 50.97 11.84 51.35L14.79 52.26C15.72 52.55 16.72 52.13 17.19 51.27C17.63 50.47 18.08 49.68 18.55 48.89C19.22 47.75 18.66 46.29 17.4 45.9L14.42 44.98C13.51 44.71 12.53 45.08 12.05 45.9Z",
                fill: "#E0AC0F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector_16",
                d: "M18.36 41.01C18.36 41.01 20.54 42.29 22.05 40.3C41.01 15.4 47.78 17.3 64.04 11.7C64.64 11.49 65.85 11.05 66.47 10.49C66.78 10.21 66.82 9.73 66.59 9.38L65.16 7.15C64.36 6.08 61.92 6.56 60.91 6.89C42.49 13 29.96 20.9 20.62 35.37C18.79 38.2 16.24 40.57 18.36 41.01Z",
                fill: "#B4A890"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector_17",
                d: "M118.58 7.05C118.58 7.05 118.01 10.02 120.5 10.29C135.05 11.83 150.84 26.73 161.61 40.15C162.01 40.65 162.83 41.63 163.57 42.03C163.94 42.23 164.61 42.27 164.86 41.94L166.91 40.72C167.46 40.33 167.7 39.62 167.47 38.98C167 37.69 163.56 34.74 162.99 34.24C154.14 26.46 148.01 15.38 124.17 7.03C120.97 5.91 118.28 4.91 118.58 7.05Z",
                fill: "#B4A890"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector_18",
                d: "M2.06 90.49C2.06 90.49 5.16 90.81 4.61 93.25C0.84 109.9 11.68 127.03 21.46 141.18C21.82 141.7 22.53 142.77 22.7 143.59C22.78 144 22.63 144.65 22.24 144.8L20.49 146.41C19.96 146.82 19.21 146.85 18.66 146.45C17.56 145.63 16.4 143.87 16.09 143.18C11.17 132.47 1.62 121.05 0.44 95.82C0.28 92.46 0.0999997 89.59 2.06 90.49Z",
                fill: "#B4A890"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector_19",
                d: "M62.48 176.58C62.48 176.58 63.46 174.44 65.9 175.01C96.22 182.05 100.62 179.55 116.69 173.82C117.29 173.61 118.53 173.29 119.37 173.39C119.79 173.44 120.09 173.8 120.12 174.22L121.14 176.76C121.37 177.33 121.18 178 120.67 178.33C119.62 179.01 117.67 179.33 116.94 179.55C98.41 185.32 87.75 184.88 75.02 182.88C71.68 182.35 61.01 178.17 62.48 176.58Z",
                fill: "#B4A890"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Vector_20",
                d: "M181.71 90.37C181.71 90.37 179.55 90.66 179.16 93.13C172.18 136.91 172.09 126.91 162.31 141.06C161.95 141.58 161.24 142.65 161.07 143.47C160.99 143.88 161.14 144.53 161.53 144.68L163.28 146.29C163.81 146.7 164.56 146.73 165.11 146.33C166.21 145.51 167.37 143.75 167.68 143.06C172.6 132.35 182.15 120.93 183.33 95.7C183.48 92.34 183.67 89.47 181.71 90.37Z",
                fill: "#B4A890"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                    id: "clip0_205_739",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        width: "183.42",
                        height: "184.23",
                        fill: "white"
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 9391:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_core_components_Hoop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2235);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const HoopButton = ({ children , sx , href  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const handleClick = (e)=>{
        e.preventDefault();
        router.push(href).catch((err)=>console.log(err));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "contained",
        size: "large",
        color: "primary",
        onClick: handleClick,
        sx: {
            ...sx,
            borderRadius: "50%",
            aspectRatio: "1/1",
            minWidth: "150px",
            minHeight: "150px"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div, {
                whileHover: {
                    scale: 1.05,
                    rotate: 40
                },
                whileTap: {
                    scale: 0.95,
                    rotate: -40
                },
                style: {
                    position: "absolute"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_Hoop__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HoopButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_core_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1851);
/* harmony import */ var src_core_components_AnimatedHoop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7929);
/* harmony import */ var integrations_sanityImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(817);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, src_core_components__WEBPACK_IMPORTED_MODULE_3__, src_core_components_AnimatedHoop__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, src_core_components__WEBPACK_IMPORTED_MODULE_3__, src_core_components_AnimatedHoop__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const createColorString = ({ r , g , b , a  })=>{
    const red = r;
    const green = g;
    const blue = b;
    const alpha = a;
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};
const HoopImage = ({ image , backgroundColor , headingOverlay , textOverlay  })=>{
    const imageSize = 290;
    const hoopSize = imageSize + 200;
    const imageUrlBuilder = (0,integrations_sanityImage__WEBPACK_IMPORTED_MODULE_5__/* .urlFor */ .u)(image);
    const imageUrl = imageUrlBuilder.width(imageSize).height(imageSize).url();
    const whileHover = {
        rotate: [
            0,
            15,
            0
        ],
        scale: 1.05,
        transition: {
            duration: 15,
            loop: Infinity,
            type: "spring"
        }
    };
    const backgroundColorString = backgroundColor ? createColorString(backgroundColor.rgb) : undefined;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        component: "div",
        sx: {
            padding: "20px",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                component: "span",
                sx: {
                    "& svg, & svg *": {
                        width: "100%"
                    }
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_core_components__WEBPACK_IMPORTED_MODULE_3__/* .Image */ .Ee, {
                    src: imageUrl,
                    alt: "",
                    backgroundColor: backgroundColorString,
                    sx: {
                        clipPath: "circle(50%)"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: "h3",
                            children: headingOverlay
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: "body1",
                            children: textOverlay
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div, {
                whileHover: whileHover,
                style: {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_AnimatedHoop__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    size: hoopSize,
                    sx: {
                        height: "100%",
                        width: "100%"
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HoopImage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 872:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Iconify)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5566);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_2__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// icons

// @mui

// ----------------------------------------------------------------------
Iconify.propTypes = {
    icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
        (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    ]),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function Iconify({ icon , sx , ...other }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        component: _iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon,
        icon: icon,
        sx: {
            ...sx
        },
        ...other
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9252);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



function Image({ ratio , disabledEffect =false , effect ="blur" , sx , children , backgroundColor , alt , ...other }) {
    if (ratio) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            component: "span",
            sx: {
                width: 1,
                lineHeight: 1,
                display: "block",
                overflow: "hidden",
                position: "relative",
                pt: getRatio(ratio),
                "& .wrapper": {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    lineHeight: 0,
                    position: "absolute",
                    backgroundSize: "cover !important"
                },
                ...sx
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        right: 0
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingLeft: "10px",
                            paddingRight: "5px",
                            height: "100%",
                            width: "100%",
                            backgroundColor: backgroundColor
                        },
                        children: children
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    component: react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage,
                    wrapperClassName: "wrapper",
                    effect: disabledEffect ? undefined : effect,
                    placeholderSrc: "https://zone-assets-api.vercel.app/assets/img_placeholder.svg",
                    sx: {
                        width: 1,
                        height: 1,
                        objectFit: "cover"
                    },
                    alt: alt,
                    ...other
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        component: "span",
        sx: {
            lineHeight: 0,
            display: "block",
            overflow: "hidden",
            position: "relative",
            "& .wrapper": {
                width: 1,
                height: 1,
                backgroundSize: "cover !important"
            },
            ...sx
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                component: react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage,
                wrapperClassName: "wrapper",
                effect: disabledEffect ? undefined : effect,
                placeholderSrc: "https://zone-assets-api.vercel.app/assets/img_placeholder.svg",
                sx: {
                    width: 1,
                    height: 1,
                    objectFit: "cover"
                },
                alt: alt,
                ...other
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    right: 0
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: "10px",
                        paddingRight: "5px",
                        height: "100%",
                        width: "100%",
                        backgroundColor: backgroundColor,
                        textAlign: "center"
                    },
                    children: children
                })
            })
        ]
    });
};
// ----------------------------------------------------------------------
function getRatio(ratio = "1/1") {
    return ({
        "4/3": "calc(100% / 4 * 3)",
        "3/4": "calc(100% / 3 * 4)",
        "6/4": "calc(100% / 6 * 4)",
        "4/6": "calc(100% / 4 * 6)",
        "16/9": "calc(100% / 16 * 9)",
        "9/16": "calc(100% / 9 * 16)",
        "21/9": "calc(100% / 21 * 9)",
        "9/21": "calc(100% / 9 * 21)",
        "1/1": "100%"
    })[ratio];
}


/***/ }),

/***/ 1849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);


const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("span")(({ theme , ownerState  })=>{
    const isLight = theme.palette.mode === "light";
    const { color , variant  } = ownerState;
    const styleFilled = (color)=>({
            color: theme.palette[color].contrastText,
            backgroundColor: theme.palette[color].main
        });
    const styleOutlined = (color)=>({
            color: theme.palette[color].main,
            backgroundColor: "transparent",
            border: `1px solid ${theme.palette[color].main}`
        });
    const styleGhost = (color)=>({
            color: theme.palette[color][isLight ? "dark" : "light"],
            backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette[color].main, 0.16)
        });
    return {
        height: 22,
        minWidth: 22,
        lineHeight: 0,
        borderRadius: 6,
        cursor: "default",
        alignItems: "center",
        whiteSpace: "nowrap",
        display: "inline-flex",
        justifyContent: "center",
        padding: theme.spacing(0, 1),
        color: theme.palette.grey[800],
        fontSize: theme.typography.pxToRem(12),
        fontFamily: theme.typography.fontFamily,
        backgroundColor: theme.palette.grey[300],
        fontWeight: theme.typography.fontWeightBold,
        ...color !== "default" ? {
            ...variant === "filled" && {
                ...styleFilled(color)
            },
            ...variant === "outlined" && {
                ...styleOutlined(color)
            },
            ...variant === "ghost" && {
                ...styleGhost(color)
            }
        } : {
            ...variant === "outlined" && {
                backgroundColor: "transparent",
                color: theme.palette.text.primary,
                border: `1px solid ${theme.palette.grey[50032]}`
            },
            ...variant === "ghost" && {
                color: isLight ? theme.palette.text.secondary : theme.palette.common.white,
                backgroundColor: theme.palette.grey[50016]
            }
        }
    };
});
function Label({ color ="default" , variant ="ghost" , children , sx  }) {
    const theme = useTheme();
    return /*#__PURE__*/ _jsx(RootStyle, {
        ownerState: {
            color,
            variant
        },
        sx: sx,
        theme: theme,
        children: children
    });
};


/***/ }),

/***/ 6821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4990);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);



// @mui


// ----------------------------------------------------------------------
function LightboxModalStyles() {
    const theme = useTheme();
    const isRTL = theme.direction === "rtl";
    const ICON_SIZE = 32;
    const ICON_COLOR = theme.palette.primary.main.replace("#", "");
    const getIcon = (icon)=>`url(https://api.iconify.design/carbon/${icon}.svg?color=%23${ICON_COLOR}&width=${ICON_SIZE}&height=${ICON_SIZE})`;
    const Icon = (icon)=>({
            opacity: 1,
            alignItems: "center",
            display: "inline-flex",
            justifyContent: "center",
            backgroundImage: `unset`,
            backgroundColor: "transparent",
            transition: theme.transitions.create("opacity"),
            "&:before": {
                display: "block",
                width: ICON_SIZE,
                height: ICON_SIZE,
                content: getIcon(icon)
            },
            "&:hover": {
                opacity: 0.72
            }
        });
    return /*#__PURE__*/ _jsx(GlobalStyles, {
        styles: {
            "& .ReactModalPortal": {
                "& .ril__outer": {
                    backgroundColor: theme.palette.grey[900]
                },
                // Toolbar
                "& .ril__toolbar": {
                    height: "auto !important",
                    padding: theme.spacing(2, 3),
                    backgroundColor: "transparent"
                },
                "& .ril__toolbarLeftSide": {
                    display: "none"
                },
                "& .ril__toolbarRightSide": {
                    height: "auto !important",
                    padding: 0,
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    "& li": {
                        display: "flex",
                        alignItems: "center"
                    },
                    "& li:first-of-type": {
                        flexGrow: 1
                    },
                    "& li:not(:first-of-type)": {
                        width: 40,
                        height: 40,
                        justifyContent: "center",
                        marginLeft: theme.spacing(2)
                    }
                },
                // Button
                "& button:focus": {
                    outline: "none"
                },
                "& .ril__toolbarRightSide button": {
                    width: "100%",
                    height: "100%",
                    "&.ril__zoomInButton": Icon("zoom-in"),
                    "&.ril__zoomOutButton": Icon("zoom-out"),
                    "&.ril__closeButton": Icon("close")
                },
                "& .ril__navButtons": {
                    padding: theme.spacing(3),
                    "&.ril__navButtonPrev": {
                        right: "auto",
                        left: theme.spacing(2),
                        ...Icon(isRTL ? "arrow-right" : "arrow-left")
                    },
                    "&.ril__navButtonNext": {
                        left: "auto",
                        right: theme.spacing(2),
                        ...Icon(isRTL ? "arrow-left" : "arrow-right")
                    }
                }
            }
        }
    });
}
function LightboxModal({ images , photoIndex , setPhotoIndex , isOpen , ...other }) {
    useEffect(()=>{
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [
        isOpen
    ]);
    const showIndex = /*#__PURE__*/ _jsx(Typography, {
        variant: "subtitle2",
        children: `${photoIndex + 1} / ${images.length}`
    });
    const toolbarButtons = [
        showIndex
    ];
    const customStyles = {
        overlay: {
            zIndex: 9999
        }
    };
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(LightboxModalStyles, {}),
            isOpen && /*#__PURE__*/ _jsx(Lightbox, {
                animationDuration: 240,
                nextSrc: images[(photoIndex + 1) % images.length],
                prevSrc: images[(photoIndex + images.length - 1) % images.length],
                onMovePrevRequest: ()=>setPhotoIndex((photoIndex + images.length - 1) % images.length),
                onMoveNextRequest: ()=>setPhotoIndex((photoIndex + 1) % images.length),
                toolbarButtons: toolbarButtons,
                reactModalStyle: customStyles,
                ...other
            })
        ]
    });
};


/***/ }),

/***/ 6469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_utils_cssStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(727);
// @mui



//

// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("div")(({ theme  })=>({
        ...(0,src_utils_cssStyles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(theme).bgBlur({
            opacity: 0.24,
            blur: 2
        }),
        top: 0,
        zIndex: 9999,
        position: "fixed",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }));
function LoadingScreen({ sx  }) {
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(RootStyle, {
                sx: sx,
                children: /*#__PURE__*/ _jsx(LinearProgress, {
                    sx: {
                        width: 1,
                        maxWidth: 320
                    }
                })
            }),
            /*#__PURE__*/ _jsx(Box, {
                sx: {
                    width: "100%",
                    height: "100vh"
                }
            })
        ]
    });
};


/***/ }),

/***/ 6808:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9976);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_assets__WEBPACK_IMPORTED_MODULE_4__]);
src_assets__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Logo({ isSimple =false , isScrolling , textColor , sx  }) {
    const theme = useTheme();
    const isLight = theme.palette.mode === "light";
    return /*#__PURE__*/ _jsx(Link, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/ _jsx(Box, {
            sx: {
                width: isScrolling ? 120 : 200,
                lineHeight: 0,
                cursor: "pointer",
                display: "inline-flex",
                transition: "width 0.3s ease-in-out",
                ...sx
            },
            children: isSimple ? /*#__PURE__*/ _jsx(IndigenousTourismLogo, {}) : /*#__PURE__*/ _jsx(IndigenousTourismLogo, {
                withText: true,
                isWhite: !isLight,
                textColor: textColor
            })
        })
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Logo)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6681:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2893);
/* harmony import */ var _iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8538);
/* harmony import */ var _iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1851);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_8__]);
___WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// icons


// next


// @mui


// components

const ListSubheaderStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.styled)((props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.ListSubheader, {
        disableSticky: true,
        disableGutters: true,
        ...props
    }))(({ theme  })=>({
        ...theme.typography.overline,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
        paddingLeft: theme.spacing(5),
        color: theme.palette.text.primary
    }));
const ListItemStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.ListItemButton, {
    shouldForwardProp: (prop)=>prop !== "activeRoot" && prop !== "activeSub"
})(({ activeRoot , activeSub , theme  })=>({
        ...theme.typography.body2,
        height: 48,
        position: "relative",
        textTransform: "capitalize",
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(2.5),
        color: theme.palette.text.secondary,
        ...activeRoot && {
            color: theme.palette.primary.main,
            fontWeight: theme.typography.fontWeightMedium,
            backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
            "&:before": {
                top: 0,
                right: 0,
                width: 3,
                bottom: 0,
                content: "''",
                display: "block",
                position: "absolute",
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
                backgroundColor: theme.palette.primary.main
            }
        },
        ...activeSub && {
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightMedium
        }
    }));
const ListItemIconStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.ListItemIcon)({
    width: 22,
    height: 22,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
        width: 22,
        height: 22
    }
});
const ListSubItemIconStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
    shouldForwardProp: (prop)=>prop !== "active"
})(({ active , theme  })=>({
        width: 4,
        height: 4,
        display: "flex",
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.text.disabled,
        transition: theme.transitions.create("transform"),
        ...active && {
            transform: "scale(2)",
            backgroundColor: theme.palette.primary.main
        }
    }));
function NavSection({ navConfig , ...other }) {
    return /*#__PURE__*/ _jsx(Box, {
        ...other,
        children: navConfig.map((list)=>/*#__PURE__*/ _jsxs(List, {
                disablePadding: true,
                sx: {
                    px: 0
                },
                children: [
                    /*#__PURE__*/ _jsx(ListSubheaderStyle, {
                        children: list.subheader
                    }),
                    list.items.map((item)=>/*#__PURE__*/ _jsx(NavSectionItem, {
                            item: item
                        }, item.title))
                ]
            }, list.subheader))
    });
};
function NavSectionItem({ item  }) {
    const { pathname , asPath  } = useRouter();
    const { title , path , icon , info , children  } = item;
    const isActiveRoot = pathname === path || asPath === path;
    const { 0: open , 1: setOpen  } = useState(isActiveRoot);
    const handleOpen = ()=>{
        setOpen(!open);
    };
    if (children) {
        return /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsxs(ListItemStyle, {
                    onClick: handleOpen,
                    activeRoot: isActiveRoot,
                    children: [
                        icon && /*#__PURE__*/ _jsx(ListItemIconStyle, {
                            children: icon
                        }),
                        /*#__PURE__*/ _jsx(ListItemText, {
                            disableTypography: true,
                            primary: title
                        }),
                        info && info,
                        /*#__PURE__*/ _jsx(Iconify, {
                            icon: open ? chevronDown : chevronRight,
                            sx: {
                                width: 16,
                                height: 16,
                                ml: 1
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(Collapse, {
                    in: open,
                    timeout: "auto",
                    unmountOnExit: true,
                    children: /*#__PURE__*/ _jsx(List, {
                        component: "div",
                        disablePadding: true,
                        children: children.map((item)=>{
                            const { title , path  } = item;
                            const isActiveSub = pathname === path || asPath === path;
                            return /*#__PURE__*/ _jsx(NextLink, {
                                href: path,
                                passHref: true,
                                children: /*#__PURE__*/ _jsxs(ListItemStyle, {
                                    activeSub: isActiveSub,
                                    children: [
                                        /*#__PURE__*/ _jsx(ListItemIconStyle, {
                                            children: /*#__PURE__*/ _jsx(ListSubItemIconStyle, {
                                                component: "span",
                                                active: isActiveSub
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx(ListItemText, {
                                            disableTypography: true,
                                            primary: title
                                        })
                                    ]
                                })
                            }, title);
                        })
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ _jsx(NextLink, {
        href: path,
        passHref: true,
        children: /*#__PURE__*/ _jsxs(ListItemStyle, {
            activeRoot: isActiveRoot,
            children: [
                icon && /*#__PURE__*/ _jsx(ListItemIconStyle, {
                    children: icon
                }),
                /*#__PURE__*/ _jsx(ListItemText, {
                    disableTypography: true,
                    primary: title
                }),
                info && info
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);



// @mui

const Page = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({ children , meta , title  }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `${title} | ITM`
                    }),
                    meta
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                ref: ref,
                children: children
            })
        ]
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);


/***/ }),

/***/ 5868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProgressBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4723);
/* harmony import */ var _mui_material_GlobalStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__);



// next

// @mui


// ----------------------------------------------------------------------
function ProgressBar() {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    nprogress__WEBPACK_IMPORTED_MODULE_2___default().configure({
        showSpinner: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleStart = ()=>{
            nprogress__WEBPACK_IMPORTED_MODULE_2___default().start();
        };
        const handleStop = ()=>{
            nprogress__WEBPACK_IMPORTED_MODULE_2___default().done();
        };
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleStop);
        router.events.on("routeChangeError", handleStop);
        return ()=>{
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleStop);
            router.events.off("routeChangeError", handleStop);
        };
    }, [
        router
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_GlobalStyles__WEBPACK_IMPORTED_MODULE_5___default()), {
        styles: {
            "#nprogress": {
                pointerEvents: "none",
                "& .bar": {
                    top: 0,
                    left: 0,
                    height: 2,
                    width: "100%",
                    position: "fixed",
                    zIndex: theme.zIndex.snackbar,
                    backgroundColor: theme.palette.primary.main,
                    boxShadow: `0 0 2px ${theme.palette.primary.main}`
                },
                "& .peg": {
                    right: 0,
                    opacity: 1,
                    width: 100,
                    height: "100%",
                    display: "block",
                    position: "absolute",
                    transform: "rotate(3deg) translate(0px, -4px)",
                    boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main}`
                }
            }
        }
    });
};


/***/ }),

/***/ 5343:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_star_filled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7140);
/* harmony import */ var _iconify_icons_carbon_star_filled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_star_filled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_utils_formatNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3162);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_4__]);
_Iconify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// icons


// @mui

// utils

//

function RatingLabel({ reviews , ratings , ...other }) {
    return /*#__PURE__*/ _jsxs(Stack, {
        spacing: 0.5,
        direction: "row",
        alignItems: "center",
        ...other,
        children: [
            /*#__PURE__*/ _jsx(Iconify, {
                icon: starFilled,
                sx: {
                    width: 20,
                    height: 20,
                    color: "warning.main"
                }
            }),
            /*#__PURE__*/ _jsx(Typography, {
                variant: "h6",
                children: Number.isInteger(ratings) ? `${ratings}.0` : ratings
            }),
            reviews && /*#__PURE__*/ _jsxs(Link, {
                variant: "body2",
                sx: {
                    color: "text.secondary"
                },
                children: [
                    "(",
                    fShortenNumber(reviews),
                    " reviews)"
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RtlLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3195);
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1913);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);


// rtl

// emotion


// @mui

function RtlLayout({ children  }) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.dir = theme.direction;
    }, [
        theme.direction
    ]);
    const cacheRtl = _emotion_cache__WEBPACK_IMPORTED_MODULE_3___default()({
        key: theme.direction === "rtl" ? "rtl" : "css",
        // @ts-ignore
        stylisPlugins: theme.direction === "rtl" ? [
            (stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_2___default())
        ] : []
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.CacheProvider, {
        value: cacheRtl,
        children: children
    });
};


/***/ }),

/***/ 1997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SanityImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



function SanityImage({ ratio , disabledEffect =false , effect ="blur" , sx , imageBuilder , ...other }) {
    const masterImage = imageBuilder.width(1920).height(900).url();
    const desktopImage = imageBuilder.width(768).height(632).url();
    const tabletImage = imageBuilder.width(600).height(600).url();
    const mobileImage = imageBuilder.width(320).height(427).url();
    const srcset = [
        `${mobileImage} 320w`,
        `${tabletImage} 680w`,
        `${desktopImage} 768w`,
        `${masterImage} 1080w`
    ];
    if (ratio) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            component: "span",
            sx: {
                width: 1,
                height: 1,
                lineHeight: 1,
                display: "block",
                overflow: "hidden",
                position: "relative",
                background: "black",
                pt: getRatio(ratio),
                "& .wrapper": {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    lineHeight: 0,
                    position: "absolute",
                    backgroundSize: "cover !important"
                },
                ...sx
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("picture", {
                children: [
                    srcset.map((src, index)=>{
                        const [url, media] = src.split(" ");
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                            media: `(min-width: ${media})`,
                            srcSet: url
                        }, `${media}-${index}`);
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: mobileImage,
                        alt: other.alt || "unbranded image"
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        component: "span",
        sx: {
            width: 1,
            height: 1,
            lineHeight: 0,
            display: "block",
            overflow: "hidden",
            backgroundSize: "cover !important",
            ...sx
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("picture", {
            style: {
                width: "100%"
            },
            children: [
                srcset.map((src, index)=>{
                    const [url, media] = src.split(" ");
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                        media: `(min-width: ${media})`,
                        srcSet: url
                    }, `${media}-${index}`);
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: mobileImage,
                    alt: other.alt || "unbranded image"
                })
            ]
        })
    });
};
// ----------------------------------------------------------------------
function getRatio(ratio = "1/1") {
    return ({
        "4/3": "calc(100% / 4 * 3)",
        "3/4": "calc(100% / 3 * 4)",
        "6/4": "calc(100% / 6 * 4)",
        "4/6": "calc(100% / 4 * 6)",
        "16/9": "calc(100% / 16 * 9)",
        "9/16": "calc(100% / 9 * 16)",
        "21/9": "calc(100% / 21 * 9)",
        "9/21": "calc(100% / 9 * 21)",
        "1/1": "100%"
    })[ratio];
}


/***/ }),

/***/ 2231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4172);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(simplebar_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);


// @mui


// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("div")(()=>({
        flexGrow: 1,
        height: "100%",
        overflow: "hidden"
    }));
const SimpleBarStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((simplebar_react__WEBPACK_IMPORTED_MODULE_1___default()))(({ theme  })=>({
        maxHeight: "100%",
        "& .simplebar-scrollbar": {
            "&:before": {
                backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.grey[600], 0.48)
            },
            "&.simplebar-visible:before": {
                opacity: 1
            }
        },
        "& .simplebar-track.simplebar-vertical": {
            width: 10
        },
        "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
            height: 6
        },
        "& .simplebar-mask": {
            zIndex: "inherit"
        }
    }));
function Scrollbar({ children , sx , ...other }) {
    const userAgent = typeof navigator === "undefined" ? "SSR" : navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    if (isMobile) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
            sx: {
                overflowX: "auto",
                ...sx
            },
            ...other,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SimpleBarStyle, {
            timeout: 500,
            clickOnTrack: false,
            sx: sx,
            ...other,
            children: children
        })
    });
};


/***/ }),

/***/ 8006:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9961);
/* harmony import */ var _iconify_icons_carbon_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_3__]);
_Iconify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// @mui

//

// ----------------------------------------------------------------------
function SearchInput({ sx , ...other }) {
    return /*#__PURE__*/ _jsx(FilledInput, {
        fullWidth: true,
        startAdornment: /*#__PURE__*/ _jsx(InputAdornment, {
            position: "start",
            children: /*#__PURE__*/ _jsx(Iconify, {
                icon: searchIcon,
                sx: {
                    width: 24,
                    height: 24,
                    color: "text.disabled"
                }
            })
        }),
        placeholder: "Search...",
        sx: {
            "& .MuiFilledInput-input": {
                py: "18px"
            },
            ...sx
        },
        ...other
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



// ----------------------------------------------------------------------
SearchNotFound.propTypes = {
    keyword: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
function SearchNotFound({ keyword ="" , ...other }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
        ...other,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                gutterBottom: true,
                align: "center",
                variant: "subtitle1",
                children: "Not Found"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "body2",
                align: "center",
                children: [
                    "No results found for",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                        children: ` ${keyword} `
                    }),
                    ".",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    " Try checking for typos or using complete words."
                ]
            })
        ]
    });
};


/***/ }),

/***/ 6940:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5086);
/* harmony import */ var _iconify_icons_carbon_share__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_share__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_logo_linkedin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9410);
/* harmony import */ var _iconify_icons_carbon_logo_linkedin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_linkedin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4602);
/* harmony import */ var _iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_carbon_logo_twitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4513);
/* harmony import */ var _iconify_icons_carbon_logo_twitter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_twitter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_carbon_logo_instagram__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4612);
/* harmony import */ var _iconify_icons_carbon_logo_instagram__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_instagram__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_core_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1851);
/* harmony import */ var src_core_components_animate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9539);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_core_components__WEBPACK_IMPORTED_MODULE_8__, src_core_components_animate__WEBPACK_IMPORTED_MODULE_9__]);
([src_core_components__WEBPACK_IMPORTED_MODULE_8__, src_core_components_animate__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


//icon





// @mui

// components


function ShareButton({ sx  }) {
    const { 0: open , 1: setOpen  } = useState(null);
    const handleOpen = (event)=>{
        setOpen(event.currentTarget);
    };
    const handleClose = ()=>{
        setOpen(null);
    };
    const SOCIALS = [
        {
            name: "FaceBook",
            icon: logoFacebook,
            socialColor: "#1877F2"
        },
        {
            name: "Instagram",
            icon: logoInstagram,
            socialColor: "#E02D69"
        },
        {
            name: "Linkedin",
            icon: logoLinkedin,
            socialColor: "#007EBB"
        },
        {
            name: "Twitter",
            icon: logoTwitter,
            socialColor: "#00AAEC"
        }, 
    ];
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(IconButtonAnimate, {
                onClick: handleOpen,
                sx: {
                    ...open && {
                        color: "primary.main"
                    },
                    ...sx
                },
                children: /*#__PURE__*/ _jsx(Iconify, {
                    icon: shareIcon,
                    sx: {
                        width: 20,
                        height: 20
                    }
                })
            }),
            /*#__PURE__*/ _jsx(Popover, {
                open: Boolean(open),
                onClose: handleClose,
                anchorEl: open,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "center"
                },
                PaperProps: {
                    sx: {
                        width: 220,
                        p: 1
                    }
                },
                children: SOCIALS.map((option)=>/*#__PURE__*/ _jsxs(MenuItem, {
                        onClick: handleClose,
                        sx: {
                            typography: "body3"
                        },
                        children: [
                            /*#__PURE__*/ _jsx(Iconify, {
                                icon: option.icon,
                                sx: {
                                    width: 24,
                                    height: 24,
                                    mr: 2,
                                    color: option.socialColor
                                }
                            }),
                            "Share via ",
                            option.name
                        ]
                    }, option.name))
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9349:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_logo_linkedin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9410);
/* harmony import */ var _iconify_icons_carbon_logo_linkedin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_linkedin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4602);
/* harmony import */ var _iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_logo_twitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4513);
/* harmony import */ var _iconify_icons_carbon_logo_twitter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_twitter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_carbon_logo_instagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4612);
/* harmony import */ var _iconify_icons_carbon_logo_instagram__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_instagram__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_7__]);
_Iconify__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// icons




// @mui


//

function SocialsButton({ initialColor =false , simple =true , links ={} , sx , ...other }) {
    const SOCIALS = [
        {
            name: "FaceBook",
            icon: logoFacebook,
            socialColor: "#1877F2",
            path: links.facebook || "#facebook-link"
        },
        {
            name: "Instagram",
            icon: logoInstagram,
            socialColor: "#E02D69",
            path: links.instagram || "#instagram-link"
        },
        {
            name: "Linkedin",
            icon: logoLinkedin,
            socialColor: "#007EBB",
            path: links.linkedin || "#linkedin-link"
        },
        {
            name: "Twitter",
            icon: logoTwitter,
            socialColor: "#00AAEC",
            path: links.twitter || "#twitter-link"
        }, 
    ];
    return /*#__PURE__*/ _jsx(Stack, {
        direction: "row",
        flexWrap: "wrap",
        alignItems: "center",
        spacing: 2,
        children: SOCIALS.map((social)=>{
            const { name , icon , path , socialColor  } = social;
            return simple ? /*#__PURE__*/ _jsx(Link, {
                href: path,
                children: /*#__PURE__*/ _jsx(IconButton, {
                    color: "inherit",
                    sx: {
                        ...initialColor && {
                            color: socialColor,
                            "&:hover": {
                                bgcolor: alpha(socialColor, 0.08)
                            }
                        },
                        ...sx
                    },
                    ...other,
                    children: /*#__PURE__*/ _jsx(Iconify, {
                        icon: icon,
                        sx: {
                            width: 20,
                            height: 20
                        }
                    })
                })
            }, name) : /*#__PURE__*/ _jsx(Button, {
                href: path,
                color: "inherit",
                variant: "outlined",
                size: "small",
                startIcon: /*#__PURE__*/ _jsx(Iconify, {
                    icon: icon
                }),
                sx: {
                    m: 0.5,
                    flexShrink: 0,
                    ...initialColor && {
                        color: socialColor,
                        borderColor: socialColor,
                        "&:hover": {
                            borderColor: socialColor,
                            bgcolor: alpha(socialColor, 0.08)
                        }
                    },
                    ...sx
                },
                ...other,
                children: name
            }, name);
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


function SvgIconStyle({ src , sx  }) {
    return /*#__PURE__*/ _jsx(Box, {
        component: "span",
        sx: {
            width: 24,
            height: 24,
            display: "inline-block",
            bgcolor: "currentColor",
            mask: `url(${src}) no-repeat center / contain`,
            WebkitMask: `url(${src}) no-repeat center / contain`,
            ...sx
        }
    });
};


/***/ }),

/***/ 6317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TextIconLabel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);

// @mui

function TextIconLabel({ icon , value , endIcon =false , sx , ...other }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        direction: "row",
        alignItems: "center",
        sx: {
            typography: "body2",
            ...sx
        },
        ...other,
        children: [
            !endIcon && icon,
            value,
            endIcon && icon
        ]
    });
};


/***/ }),

/***/ 6835:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9345);


// @mui

// utils

const TextMaxLine = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef(({ asLink , variant ="body1" , line =2 , persistent =false , children , sx , ...other }, ref)=>{
    const { lineHeight  } = GetFontValue(variant);
    const style = {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: line,
        WebkitBoxOrient: "vertical",
        ...persistent && {
            height: lineHeight * line
        },
        ...sx
    };
    if (asLink) {
        return /*#__PURE__*/ _jsx(Link, {
            color: "inherit",
            ref: ref,
            variant: variant,
            sx: {
                ...style
            },
            ...other,
            children: children
        });
    }
    return /*#__PURE__*/ _jsx(Typography, {
        ref: ref,
        variant: variant,
        sx: {
            ...style
        },
        ...other,
        children: children
    });
})));
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (TextMaxLine)));


/***/ }),

/***/ 1096:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ThemeColorPresets)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5480);
/* harmony import */ var src_utils_createGradient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8928);
/* harmony import */ var src_theme_overrides__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3812);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_hooks__WEBPACK_IMPORTED_MODULE_3__, src_theme_overrides__WEBPACK_IMPORTED_MODULE_4__]);
([src_hooks__WEBPACK_IMPORTED_MODULE_3__, src_theme_overrides__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// @mui

// hooks

// utils

//

function ThemeColorPresets({ children  }) {
    const defaultTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const { setColor  } = (0,src_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useSettings */ .rV)();
    const { primary , secondary  } = setColor;
    const themeOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            ...defaultTheme,
            palette: {
                ...defaultTheme.palette,
                primary: primary,
                secondary: secondary,
                gradients: {
                    ...defaultTheme.palette.gradients,
                    primary: (0,src_utils_createGradient__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(primary.light, primary.main),
                    secondary: (0,src_utils_createGradient__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(secondary.light, secondary.main)
                }
            },
            customShadows: {
                ...defaultTheme.customShadows,
                primary: `0 8px 16px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(primary.main, 0.24)}`,
                secondary: `0 8px 16px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(secondary.main, 0.24)}`
            }
        }), [
        defaultTheme,
        primary,
        secondary
    ]);
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.createTheme)(themeOptions);
    theme.components = (0,src_theme_overrides__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(theme);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
        theme: theme,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9080:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DialogAnimate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9467);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// @mui

//

// ----------------------------------------------------------------------
DialogAnimate.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    variants: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function DialogAnimate({ open =false , variants , onClose , children , sx , ...other }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
        children: open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
            fullWidth: true,
            maxWidth: "xs",
            open: open,
            onClose: onClose,
            PaperComponent: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    component: framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.div,
                    ...variants || (0,_variants__WEBPACK_IMPORTED_MODULE_4__/* .varFade */ .EU)({
                        distance: 120,
                        durationIn: 0.32,
                        durationOut: 0.24,
                        easeIn: "easeInOut"
                    }).inUp,
                    sx: {
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            onClick: onClose,
                            sx: {
                                width: "100%",
                                height: "100%",
                                position: "fixed"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {
                            sx: sx,
                            ...props,
                            children: props.children
                        })
                    ]
                }),
            ...other,
            children: children
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// @mui


const FabButtonAnimate = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(({ color ="primary" , size ="large" , children , sx , sxWrap , ...other }, ref)=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    if (color === "default" || color === "inherit" || color === "primary" || color === "secondary") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimateWrap, {
            size: size,
            sxWrap: sxWrap,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Fab, {
                ref: ref,
                size: size,
                color: color,
                sx: sx,
                ...other,
                children: children
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimateWrap, {
        size: size,
        sxWrap: sxWrap,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Fab, {
            ref: ref,
            size: size,
            sx: {
                boxShadow: theme.customShadows[color],
                color: theme.palette[color].contrastText,
                bgcolor: theme.palette[color].main,
                "&:hover": {
                    bgcolor: theme.palette[color].dark
                },
                ...sx
            },
            ...other,
            children: children
        })
    });
});
FabButtonAnimate.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "inherit",
        "default",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error", 
    ]),
    size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "small",
        "medium",
        "large"
    ]),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    sxWrap: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FabButtonAnimate);
const varSmall = {
    hover: {
        scale: 1.07
    },
    tap: {
        scale: 0.97
    }
};
const varMedium = {
    hover: {
        scale: 1.06
    },
    tap: {
        scale: 0.98
    }
};
const varLarge = {
    hover: {
        scale: 1.05
    },
    tap: {
        scale: 0.99
    }
};
AnimateWrap.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "small",
        "medium",
        "large"
    ]),
    sxWrap: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function AnimateWrap({ size , children , sxWrap  }) {
    const isSmall = size === "small";
    const isLarge = size === "large";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
        component: framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.div,
        whileTap: "tap",
        whileHover: "hover",
        variants: isSmall && varSmall || isLarge && varLarge || varMedium,
        sx: {
            display: "inline-flex",
            ...sxWrap
        },
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9920:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// @mui

const IconButtonAnimate = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({ children , size ="medium" , sxWrap , ...other }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimateWrap, {
        size: size,
        sxWrap: sxWrap,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
            size: size,
            ref: ref,
            ...other,
            children: children
        })
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconButtonAnimate);
// ----------------------------------------------------------------------
const varSmall = {
    hover: {
        scale: 1.1
    },
    tap: {
        scale: 0.95
    }
};
const varMedium = {
    hover: {
        scale: 1.09
    },
    tap: {
        scale: 0.97
    }
};
const varLarge = {
    hover: {
        scale: 1.08
    },
    tap: {
        scale: 0.99
    }
};
function AnimateWrap({ size , children , sxWrap  }) {
    const isSmall = size === "small";
    const isLarge = size === "large";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        component: framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div,
        whileTap: "tap",
        whileHover: "hover",
        variants: isSmall && varSmall || isLarge && varLarge || varMedium,
        sx: {
            display: "inline-flex",
            ...sxWrap
        },
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8704:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MotionContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9467);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// @mui

//

function MotionContainer({ animate , action =false , children , ...other }) {
    if (action) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            component: framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div,
            initial: false,
            animate: animate ? "animate" : "exit",
            variants: (0,_variants__WEBPACK_IMPORTED_MODULE_3__/* .varContainer */ .Ew)(),
            ...other,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        component: framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        variants: (0,_variants__WEBPACK_IMPORTED_MODULE_3__/* .varContainer */ .Ew)(),
        ...other,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8011:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MotionLazyContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// ----------------------------------------------------------------------
const loadFeatures = ()=>__webpack_require__.e(/* import() */ 822).then(__webpack_require__.bind(__webpack_require__, 9822)).then((res)=>res.default);
MotionLazyContainer.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
};
function MotionLazyContainer({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.LazyMotion, {
        strict: true,
        features: loadFeatures,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MotionViewport)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5102);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9539);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, ___WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, ___WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// @mui

// hooks

//

// ----------------------------------------------------------------------
MotionViewport.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    disableAnimatedMobile: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function MotionViewport({ children , disableAnimatedMobile =true , ...other }) {
    const isDesktop = (0,src_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)("up", "sm");
    if (!isDesktop && disableAnimatedMobile) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
            ...other,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
        component: framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.div,
        initial: "initial",
        whileInView: "animate",
        viewport: {
            once: true,
            amount: 0.5
        },
        variants: (0,___WEBPACK_IMPORTED_MODULE_6__/* .varContainer */ .Ew)(),
        ...other,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2350:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9467);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// @mui

//

// ----------------------------------------------------------------------
TextAnimate.propTypes = {
    text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    variants: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function TextAnimate({ text , variants , sx , ...other }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        component: framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.h1,
        sx: {
            typography: "h1",
            overflow: "hidden",
            display: "inline-flex",
            ...sx
        },
        ...other,
        children: text.split("").map((letter, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.span, {
                variants: variants || (0,_variants__WEBPACK_IMPORTED_MODULE_4__/* .varFade */ .EU)().inUp,
                children: letter
            }, index))
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9539:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BL": () => (/* reexport safe */ _variants__WEBPACK_IMPORTED_MODULE_0__.BL),
/* harmony export */   "DG": () => (/* reexport safe */ _MotionViewport__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "EU": () => (/* reexport safe */ _variants__WEBPACK_IMPORTED_MODULE_0__.EU),
/* harmony export */   "Ew": () => (/* reexport safe */ _variants__WEBPACK_IMPORTED_MODULE_0__.Ew),
/* harmony export */   "Kl": () => (/* reexport safe */ _DialogAnimate__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "NM": () => (/* reexport safe */ _MotionContainer__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "Wp": () => (/* reexport safe */ _variants__WEBPACK_IMPORTED_MODULE_0__.Wp),
/* harmony export */   "Y$": () => (/* reexport safe */ _FabButtonAnimate__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "bA": () => (/* reexport safe */ _MotionLazyContainer__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   "w_": () => (/* reexport safe */ _IconButtonAnimate__WEBPACK_IMPORTED_MODULE_4__.Z)
/* harmony export */ });
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9467);
/* harmony import */ var _DialogAnimate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9080);
/* harmony import */ var _TextAnimate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2350);
/* harmony import */ var _FabButtonAnimate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9534);
/* harmony import */ var _IconButtonAnimate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9920);
/* harmony import */ var _MotionViewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2125);
/* harmony import */ var _MotionContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8704);
/* harmony import */ var _MotionLazyContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8011);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DialogAnimate__WEBPACK_IMPORTED_MODULE_1__, _TextAnimate__WEBPACK_IMPORTED_MODULE_2__, _FabButtonAnimate__WEBPACK_IMPORTED_MODULE_3__, _IconButtonAnimate__WEBPACK_IMPORTED_MODULE_4__, _MotionViewport__WEBPACK_IMPORTED_MODULE_5__, _MotionContainer__WEBPACK_IMPORTED_MODULE_6__, _MotionLazyContainer__WEBPACK_IMPORTED_MODULE_7__]);
([_DialogAnimate__WEBPACK_IMPORTED_MODULE_1__, _TextAnimate__WEBPACK_IMPORTED_MODULE_2__, _FabButtonAnimate__WEBPACK_IMPORTED_MODULE_3__, _IconButtonAnimate__WEBPACK_IMPORTED_MODULE_4__, _MotionViewport__WEBPACK_IMPORTED_MODULE_5__, _MotionContainer__WEBPACK_IMPORTED_MODULE_6__, _MotionLazyContainer__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// ----------------------------------------------------------------------









__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Wp": () => (/* reexport */ varBounce),
  "Ew": () => (/* reexport */ varContainer),
  "EU": () => (/* reexport */ varFade),
  "BL": () => (/* reexport */ varZoom)
});

// UNUSED EXPORTS: TRANSITION, varBgColor, varBgKenburns, varBgPan, varFlip, varHover, varPath, varRotate, varScale, varSlide, varTranEnter, varTranExit, varTranHover

;// CONCATENATED MODULE: ./src/core/components/animate/variants/path.js
// ----------------------------------------------------------------------
const TRANSITION = {
    duration: 2,
    ease: [
        0.43,
        0.13,
        0.23,
        0.96
    ]
};
const varPath = {
    animate: {
        fillOpacity: [
            0,
            0,
            1
        ],
        pathLength: [
            1,
            0.4,
            0
        ],
        transition: TRANSITION
    }
};

;// CONCATENATED MODULE: ./src/core/components/animate/variants/transition.js
// ----------------------------------------------------------------------
const varTranHover = (props)=>{
    const duration = props?.duration || 0.32;
    const ease = props?.ease || [
        0.43,
        0.13,
        0.23,
        0.96
    ];
    return {
        duration,
        ease
    };
};
const varTranEnter = (props)=>{
    const duration = props?.durationIn || 0.64;
    const ease = props?.easeIn || [
        0.43,
        0.13,
        0.23,
        0.96
    ];
    return {
        duration,
        ease
    };
};
const varTranExit = (props)=>{
    const duration = props?.durationOut || 0.48;
    const ease = props?.easeOut || [
        0.43,
        0.13,
        0.23,
        0.96
    ];
    return {
        duration,
        ease
    };
};

;// CONCATENATED MODULE: ./src/core/components/animate/variants/fade.js
//

// ----------------------------------------------------------------------
const varFade = (props)=>{
    const distance = props?.distance || 120;
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        in: {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1,
                transition: varTranEnter
            },
            exit: {
                opacity: 0,
                transition: varTranExit
            }
        },
        inUp: {
            initial: {
                y: distance,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inDown: {
            initial: {
                y: -distance,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: -distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inLeft: {
            initial: {
                x: -distance,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: -distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inRight: {
            initial: {
                x: distance,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        out: {
            initial: {
                opacity: 1
            },
            animate: {
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outUp: {
            initial: {
                y: 0,
                opacity: 1
            },
            animate: {
                y: -distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outDown: {
            initial: {
                y: 0,
                opacity: 1
            },
            animate: {
                y: distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outLeft: {
            initial: {
                x: 0,
                opacity: 1
            },
            animate: {
                x: -distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outRight: {
            initial: {
                x: 0,
                opacity: 1
            },
            animate: {
                x: distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/core/components/animate/variants/zoom.js
//

// ----------------------------------------------------------------------
const varZoom = (props)=>{
    const distance = props?.distance || 720;
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        in: {
            initial: {
                scale: 0,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inUp: {
            initial: {
                scale: 0,
                opacity: 0,
                translateY: distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateY: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateY: distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inDown: {
            initial: {
                scale: 0,
                opacity: 0,
                translateY: -distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateY: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateY: -distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inLeft: {
            initial: {
                scale: 0,
                opacity: 0,
                translateX: -distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateX: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateX: -distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inRight: {
            initial: {
                scale: 0,
                opacity: 0,
                translateX: distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateX: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateX: distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        out: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        },
        outUp: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateY: -distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        },
        outDown: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateY: distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        },
        outLeft: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateX: -distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        },
        outRight: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateX: distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/core/components/animate/variants/bounce.js
//

// ----------------------------------------------------------------------
const varBounce = (props)=>{
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        in: {
            animate: {
                scale: [
                    0.3,
                    1.1,
                    0.9,
                    1.03,
                    0.97,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: [
                    0.9,
                    1.1,
                    0.3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        inUp: {
            animate: {
                y: [
                    720,
                    -24,
                    12,
                    -4,
                    0
                ],
                scaleY: [
                    4,
                    0.9,
                    0.95,
                    0.985,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: {
                    ...varTranEnter({
                        durationIn,
                        easeIn
                    })
                }
            },
            exit: {
                y: [
                    12,
                    -24,
                    720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inDown: {
            animate: {
                y: [
                    -720,
                    24,
                    -12,
                    4,
                    0
                ],
                scaleY: [
                    4,
                    0.9,
                    0.95,
                    0.985,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: [
                    -12,
                    24,
                    -720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inLeft: {
            animate: {
                x: [
                    -720,
                    24,
                    -12,
                    4,
                    0
                ],
                scaleX: [
                    3,
                    1,
                    0.98,
                    0.995,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: [
                    0,
                    24,
                    -720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inRight: {
            animate: {
                x: [
                    720,
                    -24,
                    12,
                    -4,
                    0
                ],
                scaleX: [
                    3,
                    1,
                    0.98,
                    0.995,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: [
                    0,
                    -24,
                    720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        out: {
            animate: {
                scale: [
                    0.9,
                    1.1,
                    0.3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outUp: {
            animate: {
                y: [
                    -12,
                    24,
                    -720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outDown: {
            animate: {
                y: [
                    12,
                    -24,
                    720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outLeft: {
            animate: {
                x: [
                    0,
                    24,
                    -720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outRight: {
            animate: {
                x: [
                    0,
                    -24,
                    720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/core/components/animate/variants/container.js
// ----------------------------------------------------------------------
const varContainer = (props)=>{
    const staggerIn = props?.staggerIn || 0.05;
    const delayIn = props?.staggerIn || 0.05;
    const staggerOut = props?.staggerIn || 0.05;
    return {
        animate: {
            transition: {
                staggerChildren: staggerIn,
                delayChildren: delayIn
            }
        },
        exit: {
            transition: {
                staggerChildren: staggerOut,
                staggerDirection: -1
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/core/components/animate/variants/index.js














/***/ }),

/***/ 397:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_direction_straight_right__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6342);
/* harmony import */ var _iconify_icons_carbon_direction_straight_right__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_direction_straight_right__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_core_components_Iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(872);
/* harmony import */ var src_core_components_animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9539);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_core_components_Iconify__WEBPACK_IMPORTED_MODULE_4__, src_core_components_animate__WEBPACK_IMPORTED_MODULE_5__]);
([src_core_components_Iconify__WEBPACK_IMPORTED_MODULE_4__, src_core_components_animate__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// icons

// @mui


//


// ----------------------------------------------------------------------
const BUTTON_SIZE = 40;
const ArrowStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(src_core_components_animate__WEBPACK_IMPORTED_MODULE_5__/* .IconButtonAnimate */ .w_)(({ theme  })=>({
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        cursor: "pointer",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
            color: theme.palette.text.primary
        }
    }));
function CarouselArrows({ customIcon , onNext , onPrevious , children , ...other }) {
    const theme = useTheme();
    const isRTL = theme.direction === "rtl";
    const style = {
        position: "absolute",
        mt: -2.5,
        top: "50%",
        zIndex: 9
    };
    if (children) {
        return /*#__PURE__*/ _jsxs(Box, {
            ...other,
            children: [
                /*#__PURE__*/ _jsx(Box, {
                    className: "arrow left",
                    sx: {
                        ...style,
                        left: 0
                    },
                    children: /*#__PURE__*/ _jsx(ArrowStyle, {
                        onClick: onPrevious,
                        children: leftIcon(customIcon, isRTL)
                    })
                }),
                children,
                /*#__PURE__*/ _jsx(Box, {
                    className: "arrow right",
                    sx: {
                        ...style,
                        right: 0
                    },
                    children: /*#__PURE__*/ _jsx(ArrowStyle, {
                        onClick: onNext,
                        children: rightIcon(customIcon, isRTL)
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ _jsxs(Stack, {
        direction: "row",
        spacing: 2,
        ...other,
        children: [
            /*#__PURE__*/ _jsx(ArrowStyle, {
                onClick: onPrevious,
                children: leftIcon(customIcon, isRTL)
            }),
            /*#__PURE__*/ _jsx(ArrowStyle, {
                onClick: onNext,
                children: rightIcon(customIcon, isRTL)
            })
        ]
    });
};
// ----------------------------------------------------------------------
const leftIcon = (customIcon, isRTL)=>/*#__PURE__*/ _jsx(Iconify, {
        icon: customIcon ? customIcon : directionStraightRight,
        sx: {
            width: 24,
            height: 24,
            transform: " scaleX(-1)",
            ...isRTL && {
                transform: " scaleX(1)"
            }
        }
    });
const rightIcon = (customIcon, isRTL)=>/*#__PURE__*/ _jsx(Iconify, {
        icon: customIcon ? customIcon : directionStraightRight,
        sx: {
            width: 24,
            height: 24,
            ...isRTL && {
                transform: " scaleX(-1)"
            }
        }
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7766:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_caret_right__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6222);
/* harmony import */ var _iconify_icons_carbon_caret_right__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_caret_right__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(872);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9539);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_4__, _animate__WEBPACK_IMPORTED_MODULE_5__]);
([_Iconify__WEBPACK_IMPORTED_MODULE_4__, _animate__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// icons


// @mui


//


// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(({ theme  })=>({
        zIndex: 9,
        display: "flex",
        alignItems: "center",
        position: "absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        color: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.grey[900], 0.48)
    }));
const ArrowStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(_animate__WEBPACK_IMPORTED_MODULE_5__/* .IconButtonAnimate */ .w_)(({ theme  })=>({
        padding: 6,
        opacity: 0.48,
        color: theme.palette.common.white,
        "&:hover": {
            opacity: 1
        }
    }));
function CarouselArrowsIndex({ customIcon , index , total , onNext , onPrevious , ...other }) {
    const theme = useTheme();
    const isRTL = theme.direction === "rtl";
    return /*#__PURE__*/ _jsxs(RootStyle, {
        ...other,
        children: [
            /*#__PURE__*/ _jsx(ArrowStyle, {
                size: "small",
                onClick: onPrevious,
                children: /*#__PURE__*/ _jsx(Iconify, {
                    icon: customIcon ? customIcon : caretRight,
                    sx: {
                        width: 20,
                        height: 20,
                        transform: " scaleX(-1)",
                        ...isRTL && {
                            transform: " scaleX(1)"
                        }
                    }
                })
            }),
            /*#__PURE__*/ _jsxs(Typography, {
                variant: "subtitle2",
                children: [
                    index + 1,
                    "/",
                    total
                ]
            }),
            /*#__PURE__*/ _jsx(ArrowStyle, {
                size: "small",
                onClick: onNext,
                children: /*#__PURE__*/ _jsx(Iconify, {
                    icon: customIcon ? customIcon : caretRight,
                    sx: {
                        width: 20,
                        height: 20,
                        ...isRTL && {
                            transform: " scaleX(-1)"
                        }
                    }
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);

// @mui


const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    shouldForwardProp: (prop)=>prop !== "rounded"
})(({ rounded  })=>({
        display: "flex",
        listStyle: "none",
        alignItems: "center",
        justifyContent: "center",
        "& li": {
            width: 18,
            height: 18,
            opacity: 0.32,
            cursor: "pointer"
        },
        "& li.slick-active": {
            opacity: 1,
            ...rounded && {
                "& .dotActive": {
                    width: 16,
                    borderRadius: 6
                }
            }
        }
    }));
const DotWrapStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("div")(()=>({
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }));
const DotStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("span")(({ theme  })=>({
        width: 8,
        height: 8,
        borderRadius: "50%",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.short
        })
    }));
function CarouselDots(props) {
    const color = props?.color;
    const rounded = props?.rounded || false;
    return {
        appendDots: (dots)=>/*#__PURE__*/ _jsx(_Fragment, {
                children: /*#__PURE__*/ _jsx(RootStyle, {
                    rounded: rounded,
                    component: "ul",
                    ...props,
                    children: dots
                })
            }),
        customPaging: ()=>/*#__PURE__*/ _jsx(DotWrapStyle, {
                children: /*#__PURE__*/ _jsx(DotStyle, {
                    className: "dotActive",
                    sx: {
                        bgcolor: color || "primary.main"
                    }
                })
            })
    };
};


/***/ }),

/***/ 8196:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _CarouselDots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2471);
/* harmony import */ var _CarouselArrows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(397);
/* harmony import */ var _CarouselArrowsIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7766);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CarouselArrows__WEBPACK_IMPORTED_MODULE_1__, _CarouselArrowsIndex__WEBPACK_IMPORTED_MODULE_2__]);
([_CarouselArrows__WEBPACK_IMPORTED_MODULE_1__, _CarouselArrowsIndex__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1851:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ee": () => (/* reexport safe */ _Image__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   "Ir": () => (/* reexport safe */ _Iconify__WEBPACK_IMPORTED_MODULE_12__.Z),
/* harmony export */   "T3": () => (/* reexport safe */ _Page__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   "Zt": () => (/* reexport safe */ _HoopImage__WEBPACK_IMPORTED_MODULE_9__.Z),
/* harmony export */   "bA": () => (/* reexport safe */ _animate__WEBPACK_IMPORTED_MODULE_2__.bA),
/* harmony export */   "dJ": () => (/* reexport safe */ _SanityImage__WEBPACK_IMPORTED_MODULE_10__.Z),
/* harmony export */   "uX": () => (/* reexport safe */ _HoopButton__WEBPACK_IMPORTED_MODULE_16__.Z)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4946);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9926);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9539);
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8196);
/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6198);
/* harmony import */ var _Hoop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2235);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6808);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(354);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8438);
/* harmony import */ var _HoopImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5186);
/* harmony import */ var _SanityImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1997);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1849);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(872);
/* harmony import */ var _BgOverlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7289);
/* harmony import */ var _Scrollbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2231);
/* harmony import */ var _NavSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6681);
/* harmony import */ var _HoopButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9391);
/* harmony import */ var _ErrorScreen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5522);
/* harmony import */ var _RatingLabel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5343);
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8006);
/* harmony import */ var _ShareButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6940);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7282);
/* harmony import */ var _TextMaxLine__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6835);
/* harmony import */ var _SvgIconStyle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(7882);
/* harmony import */ var _LightboxModal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(6821);
/* harmony import */ var _LoadingScreen__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(6469);
/* harmony import */ var _SocialsButton__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(9349);
/* harmony import */ var _TextIconLabel__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(6317);
/* harmony import */ var _CountUpNumber__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(8668);
/* harmony import */ var _FavoriteButton__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(9131);
/* harmony import */ var _SearchNotFound__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(8912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_map__WEBPACK_IMPORTED_MODULE_0__, _player__WEBPACK_IMPORTED_MODULE_1__, _animate__WEBPACK_IMPORTED_MODULE_2__, _carousel__WEBPACK_IMPORTED_MODULE_3__, _skeleton__WEBPACK_IMPORTED_MODULE_4__, _Logo__WEBPACK_IMPORTED_MODULE_6__, _HoopImage__WEBPACK_IMPORTED_MODULE_9__, _Iconify__WEBPACK_IMPORTED_MODULE_12__, _NavSection__WEBPACK_IMPORTED_MODULE_15__, _HoopButton__WEBPACK_IMPORTED_MODULE_16__, _ErrorScreen__WEBPACK_IMPORTED_MODULE_17__, _RatingLabel__WEBPACK_IMPORTED_MODULE_18__, _SearchInput__WEBPACK_IMPORTED_MODULE_19__, _ShareButton__WEBPACK_IMPORTED_MODULE_20__, _Breadcrumbs__WEBPACK_IMPORTED_MODULE_21__, _SocialsButton__WEBPACK_IMPORTED_MODULE_26__, _CountUpNumber__WEBPACK_IMPORTED_MODULE_28__, _FavoriteButton__WEBPACK_IMPORTED_MODULE_29__]);
([_map__WEBPACK_IMPORTED_MODULE_0__, _player__WEBPACK_IMPORTED_MODULE_1__, _animate__WEBPACK_IMPORTED_MODULE_2__, _carousel__WEBPACK_IMPORTED_MODULE_3__, _skeleton__WEBPACK_IMPORTED_MODULE_4__, _Logo__WEBPACK_IMPORTED_MODULE_6__, _HoopImage__WEBPACK_IMPORTED_MODULE_9__, _Iconify__WEBPACK_IMPORTED_MODULE_12__, _NavSection__WEBPACK_IMPORTED_MODULE_15__, _HoopButton__WEBPACK_IMPORTED_MODULE_16__, _ErrorScreen__WEBPACK_IMPORTED_MODULE_17__, _RatingLabel__WEBPACK_IMPORTED_MODULE_18__, _SearchInput__WEBPACK_IMPORTED_MODULE_19__, _ShareButton__WEBPACK_IMPORTED_MODULE_20__, _Breadcrumbs__WEBPACK_IMPORTED_MODULE_21__, _SocialsButton__WEBPACK_IMPORTED_MODULE_26__, _CountUpNumber__WEBPACK_IMPORTED_MODULE_28__, _FavoriteButton__WEBPACK_IMPORTED_MODULE_29__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
































__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4173:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8557);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6704);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5446);
/* harmony import */ var _Marker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3146);
/* harmony import */ var _MapStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Popup__WEBPACK_IMPORTED_MODULE_6__]);
_Popup__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// @mui

// config

//



// ----------------------------------------------------------------------
ContactMap.propTypes = {
    offices: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
function ContactMap({ offices , sx , ...other }) {
    const { 0: tooltip , 1: setTooltip  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: centerMap , 1: setCenterMap  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        lat: offices[0].latlng[0],
        lng: offices[0].latlng[1]
    });
    const handleOpen = (lat, lng, office)=>{
        setCenterMap({
            ...centerMap,
            lat: lat - 32,
            lng
        });
        setTooltip(office);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
        sx: {
            height: 480,
            overflow: "hidden",
            ...sx
        },
        ...other,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((google_map_react__WEBPACK_IMPORTED_MODULE_3___default()), {
            bootstrapURLKeys: {
                key: src_config__WEBPACK_IMPORTED_MODULE_5__/* .GOOGLE_API */ .FD
            },
            center: centerMap,
            zoom: 2,
            options: {
                styles: _MapStyle__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                disableDefaultUI: true
            },
            children: [
                offices.map((office, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Marker__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        lat: office.latlng[0],
                        lng: office.latlng[1],
                        onOpen: ()=>handleOpen(office.latlng[0], office.latlng[1], office)
                    }, index)),
                tooltip && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Popup__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    lat: tooltip.latlng[0],
                    lng: tooltip.latlng[1],
                    office: tooltip,
                    onClose: ()=>setTooltip(null)
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const FlatPaleTheme = [
    {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#6195a0"
            }
        ]
    },
    {
        featureType: "administrative.province",
        elementType: "geometry.stroke",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
            {
                lightness: "0"
            },
            {
                saturation: "0"
            },
            {
                color: "#f5f5f2"
            },
            {
                gamma: "1"
            }
        ]
    },
    {
        featureType: "landscape.man_made",
        elementType: "all",
        stylers: [
            {
                lightness: "-3"
            },
            {
                gamma: "1.00"
            }
        ]
    },
    {
        featureType: "landscape.natural.terrain",
        elementType: "all",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "all",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#bae5ce"
            },
            {
                visibility: "on"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "all",
        stylers: [
            {
                saturation: -100
            },
            {
                lightness: 45
            },
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#fac9a9"
            },
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "labels.text",
        stylers: [
            {
                color: "#4e4e4e"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#787878"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "transit",
        elementType: "all",
        stylers: [
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "transit.station.airport",
        elementType: "labels.icon",
        stylers: [
            {
                hue: "#0a00ff"
            },
            {
                saturation: "-77"
            },
            {
                gamma: "0.57"
            },
            {
                lightness: "0"
            }
        ]
    },
    {
        featureType: "transit.station.rail",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#43321e"
            }
        ]
    },
    {
        featureType: "transit.station.rail",
        elementType: "labels.icon",
        stylers: [
            {
                hue: "#ff6c00"
            },
            {
                lightness: "4"
            },
            {
                gamma: "0.75"
            },
            {
                saturation: "-68"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "all",
        stylers: [
            {
                color: "#eaf6f8"
            },
            {
                visibility: "on"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#c7eced"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
            {
                lightness: "-49"
            },
            {
                saturation: "-53"
            },
            {
                gamma: "0.79"
            }
        ]
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatPaleTheme);


/***/ }),

/***/ 3146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Marker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);


// @mui

// ----------------------------------------------------------------------
Marker.propTypes = {
    onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
function Marker({ onOpen  }) {
    const handleOpen = (event)=>{
        event.stopPropagation();
        onOpen();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        onClick: handleOpen,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, {
            sx: {
                color: "error.main",
                cursor: "pointer"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3 c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9 C20.1,15.8,20.2,15.8,20.2,15.7z"
            })
        })
    });
};


/***/ }),

/***/ 5446:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Popup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6413);
/* harmony import */ var _iconify_icons_carbon_email__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_email__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_carbon_phone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5732);
/* harmony import */ var _iconify_icons_carbon_phone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_phone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_carbon_close_filled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3203);
/* harmony import */ var _iconify_icons_carbon_close_filled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_close_filled__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8438);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(872);
/* harmony import */ var _TextIconLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6317);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9539);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_7__, _animate__WEBPACK_IMPORTED_MODULE_9__]);
([_Iconify__WEBPACK_IMPORTED_MODULE_7__, _animate__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// icons



//




// ----------------------------------------------------------------------
Popup.propTypes = {
    office: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        address: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        country: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        email: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        phoneNumber: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        photo: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    }),
    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
function Popup({ office , onClose  }) {
    const handleClose = (event)=>{
        event.stopPropagation();
        onClose();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
        sx: {
            width: 220,
            overflow: "hidden",
            borderRadius: 1.5,
            mt: 2,
            ml: 2,
            position: "relative"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    position: "absolute",
                    right: 4,
                    top: 4,
                    zIndex: 9
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animate__WEBPACK_IMPORTED_MODULE_9__/* .IconButtonAnimate */ .w_, {
                    size: "small",
                    onClick: handleClose,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        icon: (_iconify_icons_carbon_close_filled__WEBPACK_IMPORTED_MODULE_5___default()),
                        sx: {
                            width: 20,
                            height: 20,
                            opacity: 0.48,
                            color: "common.white",
                            "&:hover": {
                                opacity: 1
                            },
                            ...!office.photo && {
                                color: "text.disabled"
                            }
                        }
                    })
                })
            }),
            office.photo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                alt: "photo",
                src: office.photo,
                ratio: "4/3"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                spacing: 1,
                sx: {
                    p: 1.5,
                    wordBreak: "break-all",
                    ...!office.photo && {
                        p: 2,
                        pr: 3.5
                    }
                },
                children: [
                    office.country && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "subtitle2",
                        children: office.country
                    }),
                    office.address && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        component: "p",
                        variant: "caption",
                        children: office.address
                    }),
                    office.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextIconLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        alignItems: "flex-start",
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            icon: (_iconify_icons_carbon_email__WEBPACK_IMPORTED_MODULE_3___default()),
                            sx: {
                                mr: 0.5,
                                width: 18,
                                height: 18,
                                flexShrink: 0
                            }
                        }),
                        value: office.email,
                        sx: {
                            typography: "caption"
                        }
                    }),
                    office.phoneNumber && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextIconLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            icon: (_iconify_icons_carbon_phone__WEBPACK_IMPORTED_MODULE_4___default()),
                            sx: {
                                mr: 0.5,
                                width: 18,
                                height: 18,
                                flexShrink: 0
                            }
                        }),
                        value: office.phoneNumber,
                        sx: {
                            typography: "caption"
                        }
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4946:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _ContactMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4173);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContactMap__WEBPACK_IMPORTED_MODULE_0__]);
_ContactMap__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ReactPlayerStyle)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8924);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);


// @mui

// ----------------------------------------------------------------------
const ReactPlayerStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((react_player__WEBPACK_IMPORTED_MODULE_1___default()))(()=>({
        width: "100% !important",
        height: "100% !important",
        "& video": {
            objectFit: "cover"
        }
    }));
// ----------------------------------------------------------------------
// https://github.com/CookPete/react-player
function Player({ ...other }) {
    return /*#__PURE__*/ _jsx(ReactPlayerStyle, {
        ...other
    });
};


/***/ }),

/***/ 677:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5546);
/* harmony import */ var _iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9539);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7842);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_animate__WEBPACK_IMPORTED_MODULE_5__, _Iconify__WEBPACK_IMPORTED_MODULE_7__]);
([_animate__WEBPACK_IMPORTED_MODULE_5__, _Iconify__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// icons

// @mui

//



// ----------------------------------------------------------------------
PlayerWithButton.propTypes = {
    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
    open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
    videoPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};
function PlayerWithButton({ videoPath , open , onClose , ...other }) {
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const onReady = ()=>{
        setLoading(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_animate__WEBPACK_IMPORTED_MODULE_5__/* .DialogAnimate */ .Kl, {
        fullScreen: true,
        open: open,
        variants: {
            initial: {
                ...(0,_animate__WEBPACK_IMPORTED_MODULE_5__/* .varZoom */ .BL)().in.initial,
                scale: 0.64
            },
            animate: {
                ...(0,_animate__WEBPACK_IMPORTED_MODULE_5__/* .varZoom */ .BL)().in.animate,
                transition: {
                    ...(0,_animate__WEBPACK_IMPORTED_MODULE_5__/* .varZoom */ .BL)().in.animate.transition,
                    duration: 0.48
                }
            },
            exit: {
                ...(0,_animate__WEBPACK_IMPORTED_MODULE_5__/* .varZoom */ .BL)().in.exit,
                scale: 0.64
            }
        },
        sx: {
            bgcolor: "transparent"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                sx: {
                    position: "fixed",
                    top: 24,
                    right: 24,
                    zIndex: 9
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animate__WEBPACK_IMPORTED_MODULE_5__/* .IconButtonAnimate */ .w_, {
                    size: "large",
                    onClick: onClose,
                    sx: {
                        bgcolor: "common.white",
                        "&:hover": {
                            color: "primary.main",
                            bgcolor: "common.white"
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        icon: (_iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_3___default()),
                        sx: {
                            width: 24,
                            height: 24
                        }
                    })
                })
            }),
            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CircularProgress, {
                sx: {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    m: "auto",
                    zIndex: -1,
                    position: "absolute"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Player__WEBPACK_IMPORTED_MODULE_6__/* .ReactPlayerStyle */ .f, {
                url: videoPath,
                playing: !loading,
                onReady: onReady,
                ...other
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5460:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5546);
/* harmony import */ var _iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_carbon_play_filled_alt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9695);
/* harmony import */ var _iconify_icons_carbon_play_filled_alt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_play_filled_alt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7842);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9539);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8438);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(872);
/* harmony import */ var _BgOverlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7289);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_animate__WEBPACK_IMPORTED_MODULE_7__, _Iconify__WEBPACK_IMPORTED_MODULE_9__]);
([_animate__WEBPACK_IMPORTED_MODULE_7__, _Iconify__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// icons


// @mui

//





// ----------------------------------------------------------------------
PlayerWithImage.propTypes = {
    imgPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    videoPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    ratio: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "4/3",
        "3/4",
        "6/4",
        "4/6",
        "16/9",
        "9/16",
        "21/9",
        "9/21",
        "1/1"
    ])
};
function PlayerWithImage({ imgPath , ratio ="16/9" , videoPath  }) {
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    const onReady = ()=>{
        setLoading(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                sx: {
                    position: "relative",
                    borderRadius: 2,
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animate__WEBPACK_IMPORTED_MODULE_7__/* .FabButtonAnimate */ .Y$, {
                        size: "large",
                        color: "inherit",
                        onClick: handleOpen,
                        sx: {
                            width: 1,
                            height: 1,
                            bgcolor: "common.white"
                        },
                        sxWrap: {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: 64,
                            height: 64,
                            zIndex: 9,
                            m: "auto",
                            position: "absolute"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            icon: (_iconify_icons_carbon_play_filled_alt__WEBPACK_IMPORTED_MODULE_4___default()),
                            sx: {
                                color: "primary.main"
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BgOverlay__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        alt: "hero",
                        src: imgPath,
                        ratio: ratio
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_animate__WEBPACK_IMPORTED_MODULE_7__/* .DialogAnimate */ .Kl, {
                fullScreen: true,
                open: open,
                variants: {
                    initial: {
                        ...(0,_animate__WEBPACK_IMPORTED_MODULE_7__/* .varZoom */ .BL)().in.initial,
                        scale: 0.64
                    },
                    animate: {
                        ...(0,_animate__WEBPACK_IMPORTED_MODULE_7__/* .varZoom */ .BL)().in.animate,
                        transition: {
                            ...(0,_animate__WEBPACK_IMPORTED_MODULE_7__/* .varZoom */ .BL)().in.animate.transition,
                            duration: 0.48
                        }
                    },
                    exit: {
                        ...(0,_animate__WEBPACK_IMPORTED_MODULE_7__/* .varZoom */ .BL)().in.exit,
                        scale: 0.64
                    }
                },
                sx: {
                    bgcolor: "transparent"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        sx: {
                            position: "fixed",
                            top: 24,
                            right: 24,
                            zIndex: 9
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animate__WEBPACK_IMPORTED_MODULE_7__/* .IconButtonAnimate */ .w_, {
                            size: "large",
                            onClick: handleClose,
                            sx: {
                                bgcolor: "common.white",
                                "&:hover": {
                                    color: "primary.main",
                                    bgcolor: "common.white"
                                }
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                icon: (_iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_3___default()),
                                sx: {
                                    width: 24,
                                    height: 24
                                }
                            })
                        })
                    }),
                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CircularProgress, {
                        sx: {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            m: "auto",
                            zIndex: -1,
                            position: "absolute"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Player__WEBPACK_IMPORTED_MODULE_6__/* .ReactPlayerStyle */ .f, {
                        url: videoPath,
                        playing: !loading,
                        onReady: onReady
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9926:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7842);
/* harmony import */ var _PlayerWithButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(677);
/* harmony import */ var _PlayerWithImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5460);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PlayerWithButton__WEBPACK_IMPORTED_MODULE_1__, _PlayerWithImage__WEBPACK_IMPORTED_MODULE_2__]);
([_PlayerWithButton__WEBPACK_IMPORTED_MODULE_1__, _PlayerWithImage__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2558:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HeaderSetting)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5546);
/* harmony import */ var _iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5339);
/* harmony import */ var _iconify_icons_carbon_reset__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_reset__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(872);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9539);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_4__, _animate__WEBPACK_IMPORTED_MODULE_5__]);
([_Iconify__WEBPACK_IMPORTED_MODULE_4__, _animate__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// icons



// @mui

//


function HeaderSetting({ notDefault , onReset , onToggle  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
        direction: "row",
        alignItems: "center",
        justifyContent: "space-between",
        sx: {
            py: 2,
            px: 3
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                variant: "h6",
                children: "Settings"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    notDefault && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animate__WEBPACK_IMPORTED_MODULE_5__/* .IconButtonAnimate */ .w_, {
                        onClick: onReset,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            icon: (_iconify_icons_carbon_reset__WEBPACK_IMPORTED_MODULE_2___default()),
                            sx: {
                                width: 20,
                                height: 20
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animate__WEBPACK_IMPORTED_MODULE_5__/* .IconButtonAnimate */ .w_, {
                        onClick: onToggle,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            icon: (_iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_1___default()),
                            sx: {
                                width: 20,
                                height: 20
                            }
                        })
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3714:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SettingColorPresets)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5480);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_hooks__WEBPACK_IMPORTED_MODULE_3__]);
src_hooks__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @mui



// hooks

// ----------------------------------------------------------------------
const BOX_BORDER_RADIUS = 1.5;
const BoxWrapStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("div")(()=>({
        height: 104,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }));
const BoxPrimaryStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("div")(()=>({
        width: 64,
        height: 64,
        overflow: "hidden",
        borderRadius: "50%",
        position: "relative"
    }));
const BoxSecondaryStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("div")(({ theme  })=>({
        top: 0,
        bottom: 0,
        right: 0,
        margin: "auto",
        width: "50%",
        height: "120%",
        position: "absolute",
        borderRadius: "50%",
        [theme.breakpoints.up("md")]: {
            transition: theme.transitions.create("transform", {
                duration: theme.transitions.duration.complex,
                easing: theme.transitions.easing.sharp
            })
        }
    }));
// ----------------------------------------------------------------------
function SettingColorPresets() {
    const { themeColorPresets , onChangeColorPresets , colorOption  } = (0,src_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useSettings */ .rV)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.RadioGroup, {
        dir: "ltr",
        name: "themeColorPresets",
        value: themeColorPresets,
        onChange: onChangeColorPresets,
        sx: {
            px: 3
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            container: true,
            spacing: 2.5,
            children: colorOption.map((color)=>{
                const colorName = color.name;
                const primaryColor = color.primary;
                const secondaryColor = color.secondary;
                const isSelected = themeColorPresets === colorName;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
                        variant: isSelected ? "elevation" : "outlined",
                        sx: {
                            borderRadius: BOX_BORDER_RADIUS,
                            ...isSelected && {
                                bgcolor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(primaryColor, 0.08),
                                border: `solid 1px ${primaryColor}`,
                                boxShadow: `inset 0 4px 12px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(primaryColor, 0.32)}`
                            }
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardActionArea, {
                            sx: {
                                borderRadius: BOX_BORDER_RADIUS,
                                color: primaryColor
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BoxWrapStyle, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BoxPrimaryStyle, {
                                        sx: {
                                            bgcolor: primaryColor
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BoxSecondaryStyle, {
                                            sx: {
                                                bgcolor: secondaryColor,
                                                ...isSelected && {
                                                    transformOrigin: "left",
                                                    transform: "rotate(25deg)"
                                                }
                                            }
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControlLabel, {
                                    label: "",
                                    value: colorName,
                                    control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Radio, {
                                        sx: {
                                            display: "none"
                                        }
                                    }),
                                    sx: {
                                        top: 0,
                                        margin: 0,
                                        width: 1,
                                        height: 1,
                                        position: "absolute"
                                    }
                                })
                            ]
                        })
                    })
                }, colorName);
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SettingDirection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_align_horizontal_left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1972);
/* harmony import */ var _iconify_icons_carbon_align_horizontal_left__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_align_horizontal_left__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_align_horizontal_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1183);
/* harmony import */ var _iconify_icons_carbon_align_horizontal_right__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_align_horizontal_right__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5480);
/* harmony import */ var src_core_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1851);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_hooks__WEBPACK_IMPORTED_MODULE_5__, src_core_components__WEBPACK_IMPORTED_MODULE_6__]);
([src_hooks__WEBPACK_IMPORTED_MODULE_5__, src_core_components__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// icons



// @mui


// hooks

//

// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ToggleButton)(({ theme  })=>({
        border: 0,
        width: "100%",
        borderRadius: 0,
        padding: theme.spacing(3),
        justifyContent: "space-between",
        "& svg": {
            width: 28,
            height: 28,
            transition: theme.transitions.create("all")
        },
        "&.Mui-selected": {
            backgroundColor: "transparent"
        }
    }));
// ----------------------------------------------------------------------
function SettingDirection() {
    const { themeDirection , onToggleDirection  } = (0,src_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useSettings */ .rV)();
    const isRTL = themeDirection === "rtl";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RootStyle, {
        value: "check",
        selected: isRTL,
        onChange: onToggleDirection,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                variant: "subtitle2",
                children: "Direction"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components__WEBPACK_IMPORTED_MODULE_6__/* .Iconify */ .Ir, {
                icon: isRTL ? (_iconify_icons_carbon_align_horizontal_right__WEBPACK_IMPORTED_MODULE_2___default()) : (_iconify_icons_carbon_align_horizontal_left__WEBPACK_IMPORTED_MODULE_1___default())
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8638:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SettingMode)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_asleep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2627);
/* harmony import */ var _iconify_icons_carbon_asleep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_asleep__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_asleep_filled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6122);
/* harmony import */ var _iconify_icons_carbon_asleep_filled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_asleep_filled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5480);
/* harmony import */ var src_core_components_Iconify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_hooks__WEBPACK_IMPORTED_MODULE_5__, src_core_components_Iconify__WEBPACK_IMPORTED_MODULE_6__]);
([src_hooks__WEBPACK_IMPORTED_MODULE_5__, src_core_components_Iconify__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// icons



// @mui


// hooks

//

// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ToggleButton)(({ theme  })=>({
        border: 0,
        width: "100%",
        borderRadius: 0,
        padding: theme.spacing(3),
        justifyContent: "space-between",
        "& svg": {
            width: 28,
            height: 28,
            transition: theme.transitions.create("all")
        },
        "&.Mui-selected": {
            backgroundColor: "transparent"
        }
    }));
// ----------------------------------------------------------------------
function SettingMode() {
    const { themeMode , onToggleMode  } = (0,src_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useSettings */ .rV)();
    const isLight = themeMode === "light";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RootStyle, {
        value: "check",
        selected: !isLight,
        onChange: onToggleMode,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                variant: "subtitle2",
                children: "Mode"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_Iconify__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                icon: isLight ? (_iconify_icons_carbon_asleep__WEBPACK_IMPORTED_MODULE_1___default()) : (_iconify_icons_carbon_asleep_filled__WEBPACK_IMPORTED_MODULE_2___default())
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7851:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ToggleButtonSetting)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5546);
/* harmony import */ var _iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_settings_adjust__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7272);
/* harmony import */ var _iconify_icons_carbon_settings_adjust__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_settings_adjust__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(872);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9539);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_5__, _animate__WEBPACK_IMPORTED_MODULE_6__]);
([_Iconify__WEBPACK_IMPORTED_MODULE_5__, _animate__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// icons



// @mui


//


// ----------------------------------------------------------------------
const zIndex = 1999;
const ToggleButtonStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")(({ theme  })=>{
    const isLight = theme.palette.mode === "light";
    return {
        right: 32,
        bottom: 40,
        position: "fixed",
        zIndex: zIndex + 1,
        borderRadius: "50%",
        padding: theme.spacing(0.5),
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-12px 12px 32px -4px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.alpha)(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.8)}`
    };
});
const BadgeStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")(({ theme  })=>({
        top: 8,
        right: 10,
        width: 8,
        height: 8,
        borderRadius: "50%",
        position: "absolute",
        backgroundColor: theme.palette.error.main
    }));
function ToggleButtonSetting({ isOpen , onToggle , notDefault  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ToggleButtonStyle, {
        children: [
            notDefault && !isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BadgeStyle, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                title: "Settings",
                placement: "left",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animate__WEBPACK_IMPORTED_MODULE_6__/* .IconButtonAnimate */ .w_, {
                    color: isOpen ? "primary" : "inherit",
                    onClick: onToggle,
                    sx: {
                        ...isOpen && {
                            bgcolor: (theme)=>(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.alpha)(theme.palette.primary.main, theme.palette.action.hoverOpacity)
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        icon: isOpen ? (_iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_1___default()) : (_iconify_icons_carbon_settings_adjust__WEBPACK_IMPORTED_MODULE_2___default()),
                        sx: {
                            width: 22,
                            height: 22
                        }
                    })
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2928:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5480);
/* harmony import */ var src_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6704);
/* harmony import */ var src_core_components_Scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2231);
/* harmony import */ var src_core_components_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9539);
/* harmony import */ var _HeaderSetting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2558);
/* harmony import */ var _ToggleButtonSetting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7851);
/* harmony import */ var _SettingMode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8638);
/* harmony import */ var _SettingDirection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5340);
/* harmony import */ var _SettingColorPresets__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3714);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, src_hooks__WEBPACK_IMPORTED_MODULE_5__, src_core_components_animate__WEBPACK_IMPORTED_MODULE_8__, _HeaderSetting__WEBPACK_IMPORTED_MODULE_9__, _ToggleButtonSetting__WEBPACK_IMPORTED_MODULE_10__, _SettingMode__WEBPACK_IMPORTED_MODULE_11__, _SettingDirection__WEBPACK_IMPORTED_MODULE_12__, _SettingColorPresets__WEBPACK_IMPORTED_MODULE_13__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, src_hooks__WEBPACK_IMPORTED_MODULE_5__, src_core_components_animate__WEBPACK_IMPORTED_MODULE_8__, _HeaderSetting__WEBPACK_IMPORTED_MODULE_9__, _ToggleButtonSetting__WEBPACK_IMPORTED_MODULE_10__, _SettingMode__WEBPACK_IMPORTED_MODULE_11__, _SettingDirection__WEBPACK_IMPORTED_MODULE_12__, _SettingColorPresets__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// @mui


// hooks

// config

//


//





// ----------------------------------------------------------------------
const zIndex = 1999;
const clipX = "calc(100% - 55px)";
const clipY = "calc(100% - 64px)";
const varSidebar = {
    initial: {
        clipPath: `circle(28px at ${clipX} ${clipY})`,
        transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    },
    animate: {
        clipPath: `circle(${1000 * 2 + 200}px at ${clipX} ${clipY})`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    },
    exit: {
        clipPath: `circle(28px at ${clipX} ${clipY})`,
        transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};
const SidebarStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)((props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
        ...props
    }))(({ theme  })=>({
        top: 0,
        right: 0,
        bottom: 0,
        position: "fixed",
        zIndex: zIndex,
        width: src_config__WEBPACK_IMPORTED_MODULE_6__/* .DRAWER_WIDTH */ .pG,
        boxShadow: theme.customShadows.z24,
        backgroundColor: theme.palette.background.default
    }));
// ----------------------------------------------------------------------
function Settings() {
    const { themeMode , themeDirection , themeColorPresets , onResetSetting  } = (0,src_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useSettings */ .rV)();
    const [toggleOpen, setToggleOpen] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useCycle)(false, true);
    const notDefault = themeMode !== src_config__WEBPACK_IMPORTED_MODULE_6__/* .defaultSettings.themeMode */ .he.themeMode || themeDirection !== src_config__WEBPACK_IMPORTED_MODULE_6__/* .defaultSettings.themeDirection */ .he.themeDirection || themeColorPresets !== src_config__WEBPACK_IMPORTED_MODULE_6__/* .defaultSettings.themeColorPresets */ .he.themeColorPresets;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (toggleOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [
        toggleOpen
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ToggleButtonSetting__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                notDefault: notDefault,
                isOpen: toggleOpen,
                onToggle: ()=>setToggleOpen()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
                initial: false,
                children: toggleOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Backdrop, {
                            sx: {
                                zIndex: zIndex - 1
                            },
                            open: toggleOpen,
                            onClick: ()=>setToggleOpen()
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SidebarStyle, {
                            component: framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div,
                            ...varSidebar,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderSetting__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    notDefault: notDefault,
                                    onReset: onResetSetting,
                                    onToggle: ()=>setToggleOpen()
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_Scrollbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                        sx: {
                                            pb: 15
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div, {
                                                ...(0,src_core_components_animate__WEBPACK_IMPORTED_MODULE_8__/* .varFade */ .EU)().inUp,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SettingMode__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div, {
                                                ...(0,src_core_components_animate__WEBPACK_IMPORTED_MODULE_8__/* .varFade */ .EU)().inUp,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SettingDirection__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div, {
                                                ...(0,src_core_components_animate__WEBPACK_IMPORTED_MODULE_8__/* .varFade */ .EU)().inUp,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                        variant: "subtitle2",
                                                        sx: {
                                                            p: 3
                                                        },
                                                        children: "Presets"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SettingColorPresets__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4575:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5480);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_hooks__WEBPACK_IMPORTED_MODULE_2__]);
src_hooks__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @mui


// hooks

function CourseItemSkeleton({ vertical , ...other }) {
    const isDesktop = useResponsive("up", "sm");
    const verticalStyle = vertical || !isDesktop;
    return /*#__PURE__*/ _jsx(Card, {
        ...other,
        children: /*#__PURE__*/ _jsxs(Stack, {
            direction: verticalStyle ? "column" : "row",
            children: [
                /*#__PURE__*/ _jsx(Skeleton, {
                    variant: "rectangular",
                    sx: {
                        width: 240,
                        height: 346,
                        flexShrink: 0,
                        ...verticalStyle && {
                            width: 1
                        }
                    }
                }),
                /*#__PURE__*/ _jsxs(Stack, {
                    sx: {
                        p: 3,
                        flexGrow: 1
                    },
                    children: [
                        /*#__PURE__*/ _jsxs(Stack, {
                            direction: "row",
                            justifyContent: "space-between",
                            sx: {
                                mb: 3
                            },
                            children: [
                                /*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "text",
                                    sx: {
                                        height: 20,
                                        width: 72
                                    }
                                }),
                                /*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "text",
                                    sx: {
                                        height: 20,
                                        width: 48
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx(Stack, {
                            spacing: 1,
                            flexGrow: 1,
                            children: [
                                ...Array(3)
                            ].map((_, index)=>/*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "text",
                                    sx: {
                                        maxWidth: 1,
                                        height: 20 - index * 2,
                                        width: (5 - index) * 80
                                    }
                                }, index))
                        }),
                        /*#__PURE__*/ _jsxs(Stack, {
                            direction: "row",
                            alignItems: "center",
                            spacing: 1.5,
                            sx: {
                                mt: 3
                            },
                            children: [
                                /*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "rectangular",
                                    sx: {
                                        height: 16,
                                        width: 120,
                                        borderRadius: 0.5
                                    }
                                }),
                                /*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "rectangular",
                                    sx: {
                                        height: 16,
                                        width: 120,
                                        borderRadius: 0.5
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(Stack, {
                            direction: "row",
                            alignItems: "center",
                            spacing: 1.5,
                            sx: {
                                my: 3
                            },
                            children: [
                                /*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "circular",
                                    width: 40,
                                    height: 40
                                }),
                                /*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "text",
                                    sx: {
                                        height: 20,
                                        width: 48
                                    }
                                }),
                                /*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "text",
                                    sx: {
                                        height: 20,
                                        width: 24
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(Stack, {
                            direction: "row",
                            alignItems: "center",
                            spacing: 1.5,
                            children: [
                                /*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "rectangular",
                                    sx: {
                                        height: 16,
                                        width: 56,
                                        borderRadius: 0.5
                                    }
                                }),
                                /*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "rectangular",
                                    sx: {
                                        height: 16,
                                        width: 56,
                                        borderRadius: 0.5
                                    }
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
// @mui


// ----------------------------------------------------------------------
function JobItemSkeleton({ ...other }) {
    return /*#__PURE__*/ _jsxs(Card, {
        ...other,
        children: [
            /*#__PURE__*/ _jsxs(Stack, {
                spacing: 2,
                sx: {
                    p: 3
                },
                children: [
                    /*#__PURE__*/ _jsx(Skeleton, {
                        variant: "circular",
                        width: 48,
                        height: 48
                    }),
                    [
                        ...Array(4)
                    ].map((_, index)=>/*#__PURE__*/ _jsx(Skeleton, {
                            variant: "text",
                            sx: {
                                height: 20 - index * 2,
                                width: (5 - index) * 50
                            }
                        }, index))
                ]
            }),
            /*#__PURE__*/ _jsx(Divider, {
                sx: {
                    borderStyle: "dashed"
                }
            }),
            /*#__PURE__*/ _jsx(Box, {
                sx: {
                    p: 3,
                    display: "grid",
                    gap: 3,
                    gridTemplateColumns: "repeat(2, 1fr)"
                },
                children: [
                    ...Array(4)
                ].map((_, index)=>/*#__PURE__*/ _jsx(Skeleton, {
                        variant: "rectangular",
                        sx: {
                            width: 1,
                            height: 20,
                            borderRadius: 0.5
                        }
                    }, index))
            })
        ]
    });
};


/***/ }),

/***/ 6867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


// ----------------------------------------------------------------------
function TourItemSkeleton({ ...other }) {
    return /*#__PURE__*/ _jsxs(Card, {
        ...other,
        children: [
            /*#__PURE__*/ _jsx(Skeleton, {
                variant: "rectangular",
                sx: {
                    width: 1,
                    height: 240
                }
            }),
            /*#__PURE__*/ _jsxs(Stack, {
                spacing: 1,
                sx: {
                    p: 3
                },
                children: [
                    /*#__PURE__*/ _jsx(Skeleton, {
                        variant: "text",
                        sx: {
                            height: 20,
                            width: 50
                        }
                    }),
                    /*#__PURE__*/ _jsx(Skeleton, {
                        variant: "text",
                        sx: {
                            height: 20,
                            width: 1
                        }
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(Divider, {
                sx: {
                    borderStyle: "dashed"
                }
            }),
            /*#__PURE__*/ _jsxs(Stack, {
                direction: "row",
                justifyContent: "space-between",
                sx: {
                    p: 3
                },
                children: [
                    /*#__PURE__*/ _jsx(Skeleton, {
                        variant: "text",
                        sx: {
                            height: 20,
                            width: 100
                        }
                    }),
                    /*#__PURE__*/ _jsx(Skeleton, {
                        variant: "text",
                        sx: {
                            height: 20,
                            width: 50
                        }
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 6198:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _JobItemSkeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5487);
/* harmony import */ var _TourItemSkeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6867);
/* harmony import */ var _CourseItemSkeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4575);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CourseItemSkeleton__WEBPACK_IMPORTED_MODULE_2__]);
_CourseItemSkeleton__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const Header = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "../core/layouts/Layout.tsx -> " + "./header/Header"
        ]
    },
    ssr: false
});
const HeaderSimple = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "../core/layouts/Layout.tsx -> " + "./header/HeaderSimple"
        ]
    },
    ssr: false
});
const Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "../core/layouts/Layout.tsx -> " + "./footer/Footer"
        ]
    },
    ssr: false
});
const FooterSimple = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "../core/layouts/Layout.tsx -> " + "./footer/FooterSimple"
        ]
    },
    ssr: false
});
const Layout = ({ title , children , transparentHeader , disabledHeader , disabledFooter , simpleHeader , simpleFooter ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title || "web"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            disabledHeader ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: simpleHeader ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeaderSimple, {
                    transparent: transparentHeader
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                    transparent: transparentHeader
                })
            }),
            children,
            disabledFooter ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: simpleFooter ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterSimple, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ 5480:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* reexport safe */ _useLocalStorage__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "rV": () => (/* reexport safe */ _useSettings__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _useRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7112);
/* harmony import */ var _useSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(571);
/* harmony import */ var _useOffSetTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7627);
/* harmony import */ var _useResponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5102);
/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3698);
/* harmony import */ var _useHoverParallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4142);
/* harmony import */ var _useBoundingClientRect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6862);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useRequest__WEBPACK_IMPORTED_MODULE_0__, _useSettings__WEBPACK_IMPORTED_MODULE_1__, _useHoverParallax__WEBPACK_IMPORTED_MODULE_5__]);
([_useRequest__WEBPACK_IMPORTED_MODULE_0__, _useSettings__WEBPACK_IMPORTED_MODULE_1__, _useHoverParallax__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// ----------------------------------------------------------------------








__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useBoundingClientRect(containerRef) {
    const { 0: container , 1: setContainer  } = useState(null);
    const handleResize = useCallback(()=>{
        if (containerRef.current) {
            const value = containerRef.current.getBoundingClientRect();
            setContainer(value);
        }
    }, [
        containerRef
    ]);
    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        handleResize();
        return ()=>window.removeEventListener("resize", handleResize);
    }, [
        handleResize
    ]);
    return container;
};


/***/ }),

/***/ 4142:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_0__]);
framer_motion__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable react-hooks/rules-of-hooks */ 
// ----------------------------------------------------------------------
function useHoverParallax(stiffness = 250, damping = 20) {
    const x = useSpring(0, {
        stiffness,
        damping
    });
    const y = useSpring(0, {
        stiffness,
        damping
    });
    const offsetX = (force)=>useTransform(x, (event)=>event / force);
    const offsetY = (force)=>useTransform(y, (event)=>event / force);
    const onMouseMoveHandler = (event)=>{
        x.set(event.clientX);
        y.set(event.clientY);
    };
    const onMouseLeaveHandler = ()=>{
        x.set(0);
        y.set(0);
    };
    return {
        offsetX,
        offsetY,
        onMouseMoveHandler,
        onMouseLeaveHandler
    };
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (useHoverParallax)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useLocalStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function useLocalStorage(key, defaultValue) {
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const storedValue = window.localStorage.getItem(key);
        if (storedValue !== null) {
            setValue(JSON.parse(storedValue));
        }
    }, [
        key
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [
        key,
        value
    ]);
    return [
        value,
        setValue
    ];
};


/***/ }),

/***/ 7627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function useOffSetTop(top) {
    const { 0: offsetTop , 1: setOffSetTop  } = useState(false);
    const isTop = top || 100;
    useEffect(()=>{
        window.onscroll = ()=>{
            if (window.pageYOffset > isTop) {
                setOffSetTop(true);
            } else {
                setOffSetTop(false);
            }
        };
        return ()=>{
            window.onscroll = null;
        };
    }, [
        isTop
    ]);
    return offsetTop;
}; // Usage
 // const offset = useOffSetTop(100);


/***/ }),

/***/ 7112:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var src_utils_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1744);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);
swr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// utils

// ----------------------------------------------------------------------
const fetcher = (url)=>axios.get(url).then((res)=>res.data);
function useRequest(url, options) {
    const { data , error , isValidating , mutate  } = useSWR(url, fetcher, options);
    return {
        data,
        error,
        mutate,
        isValidating,
        isLoading: !error && !data
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useResponsive)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__);
// @mui


// ----------------------------------------------------------------------
function useResponsive(query, key, start, end) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    const mediaUp = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.up(key));
    const mediaDown = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.down(key));
    const mediaBetween = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.between(start, end));
    const mediaOnly = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.only(key));
    if (query === "up") {
        return mediaUp;
    }
    if (query === "down") {
        return mediaDown;
    }
    if (query === "between") {
        return mediaBetween;
    }
    if (query === "only") {
        return mediaOnly;
    }
};


/***/ }),

/***/ 571:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5425);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_1__]);
_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// ----------------------------------------------------------------------
const useSettings = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_1__/* .SettingsContext */ .J);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSettings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9622:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageNotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_core_layouts_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7389);
/* harmony import */ var src_core_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1851);
/* harmony import */ var src_core_components_animate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9539);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, src_core_components__WEBPACK_IMPORTED_MODULE_6__, src_core_components_animate__WEBPACK_IMPORTED_MODULE_7__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, src_core_components__WEBPACK_IMPORTED_MODULE_6__, src_core_components_animate__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// next

// @mui


// layouts

// components


// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")(({ theme  })=>({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: theme.spacing(15, 2.5),
        [theme.breakpoints.up("sm")]: {
            height: "100vh"
        }
    }));
// ----------------------------------------------------------------------
function PageNotFound() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_animate__WEBPACK_IMPORTED_MODULE_7__/* .MotionContainer */ .NM, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components__WEBPACK_IMPORTED_MODULE_6__/* .Page */ .T3, {
            title: "404 Page Not Found",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                    alignItems: "center",
                    sx: {
                        maxWidth: 480
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div, {
                            variants: (0,src_core_components_animate__WEBPACK_IMPORTED_MODULE_7__/* .varBounce */ .Wp)().in,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                variant: "h3",
                                paragraph: true,
                                children: "Page Not Found!"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                            sx: {
                                color: "text.secondary"
                            },
                            children: "Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div, {
                            variants: (0,src_core_components_animate__WEBPACK_IMPORTED_MODULE_7__/* .varBounce */ .Wp)().in,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components__WEBPACK_IMPORTED_MODULE_6__/* .Image */ .Ee, {
                                alt: "404",
                                src: "https://zone-assets-api.vercel.app/assets/illustrations/illustration_404.svg",
                                sx: {
                                    maxWidth: 320,
                                    my: {
                                        xs: 6,
                                        sm: 8
                                    }
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/",
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                size: "large",
                                variant: "contained",
                                children: "Go to Home"
                            })
                        })
                    ]
                })
            })
        })
    });
};
// ----------------------------------------------------------------------
PageNotFound.getLayout = function getLayout(page) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_layouts_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        simpleHeader: true,
        disabledFooter: true,
        children: page
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blitzjs_next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1990);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4405);
/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_blitz_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(914);
/* harmony import */ var _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4046);
/* harmony import */ var _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3280);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5425);
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6898);
/* harmony import */ var src_core_components_ThemeColorPresets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1096);
/* harmony import */ var src_core_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1851);
/* harmony import */ var src_core_components_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2928);
/* harmony import */ var src_core_components_ProgressBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5868);
/* harmony import */ var src_core_components_RtlLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9302);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_6__, src_theme__WEBPACK_IMPORTED_MODULE_7__, src_core_components_ThemeColorPresets__WEBPACK_IMPORTED_MODULE_8__, src_core_components__WEBPACK_IMPORTED_MODULE_9__, src_core_components_settings__WEBPACK_IMPORTED_MODULE_10__]);
([src_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_6__, src_theme__WEBPACK_IMPORTED_MODULE_7__, src_core_components_ThemeColorPresets__WEBPACK_IMPORTED_MODULE_8__, src_core_components__WEBPACK_IMPORTED_MODULE_9__, src_core_components_settings__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// scroll bar


//lightbox

//slick-carousel


// lazy image

















function RootErrorFallback({ error  }) {
    if (error instanceof blitz__WEBPACK_IMPORTED_MODULE_1__.AuthenticationError) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Error: You are not authenticated"
        });
    } else if (error instanceof blitz__WEBPACK_IMPORTED_MODULE_1__.AuthorizationError) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blitzjs_next__WEBPACK_IMPORTED_MODULE_13__/* .ErrorComponent */ .qz, {
            statusCode: error.statusCode,
            title: "Sorry, you are not authorized to access this"
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blitzjs_next__WEBPACK_IMPORTED_MODULE_13__/* .ErrorComponent */ .qz, {
            statusCode: error?.statusCode || 400,
            title: error.message || error.name
        });
    }
}
function MyApp({ Component , pageProps  }) {
    const getLayout = Component.getLayout || ((page)=>page);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blitzjs_next__WEBPACK_IMPORTED_MODULE_13__/* .ErrorBoundary */ .SV, {
            FallbackComponent: RootErrorFallback,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.LocalizationProvider, {
                dateAdapter: _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_4__.AdapterDateFns,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_6__/* .SettingsProvider */ .m, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_theme__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_ThemeColorPresets__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components__WEBPACK_IMPORTED_MODULE_9__/* .MotionLazyContainer */ .bA, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_RtlLayout__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_settings__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_ProgressBar__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                                            getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                                ...pageProps
                                            }))
                                        ]
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,src_blitz_client__WEBPACK_IMPORTED_MODULE_3__/* .withBlitz */ .p)(MyApp));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1913);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9552);
/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_theme_palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8187);






// theme

function createEmotionCache() {
    return _emotion_cache__WEBPACK_IMPORTED_MODULE_4___default()({
        key: "css"
    });
}
class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__["default"] {
    // Only uncomment if you need to customize this behaviour
    // static async getInitialProps(ctx: DocumentContext) {
    //   const initialProps = await Document.getInitialProps(ctx)
    //   return {...initialProps}
    // }
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "theme-color",
                            content: src_theme_palette__WEBPACK_IMPORTED_MODULE_6__/* ["default"].light.primary.main */ .Z.light.primary.main
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            href: `/fonts/NunitoSans.css`,
                            rel: "stylesheet"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);
MyDocument.getInitialProps = async (ctx)=>{
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();
    const { extractCriticalToChunks  } = _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_5___default()(cache);
    ctx.renderPage = ()=>originalRenderPage({
            enhanceApp: (App)=>(props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.CacheProvider, {
                        value: cache,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
                            ...props
                        })
                    })
        });
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1__["default"].getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
            "data-emotion": `${style.key} ${style.ids.join(" ")}`,
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML: {
                __html: style.css
            }
        }, style.key));
    return {
        ...initialProps,
        styles: [
            ...react__WEBPACK_IMPORTED_MODULE_2___default().Children.toArray(initialProps.styles),
            ...emotionStyleTags
        ]
    };
};


/***/ }),

/***/ 6898:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5480);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8187);
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3795);
/* harmony import */ var _overrides__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3812);
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(537);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_hooks__WEBPACK_IMPORTED_MODULE_4__, _overrides__WEBPACK_IMPORTED_MODULE_7__]);
([src_hooks__WEBPACK_IMPORTED_MODULE_4__, _overrides__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// @mui


// hooks

//




function ThemeProvider({ children  }) {
    const { themeMode , themeDirection  } = (0,src_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useSettings */ .rV)();
    const isLight = themeMode === "light";
    const themeOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            palette: isLight ? _palette__WEBPACK_IMPORTED_MODULE_5__/* ["default"].light */ .Z.light : _palette__WEBPACK_IMPORTED_MODULE_5__/* ["default"].dark */ .Z.dark,
            typography: _typography__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
            direction: themeDirection,
            shape: {
                borderRadius: 8
            },
            shadows: isLight ? _shadows__WEBPACK_IMPORTED_MODULE_8__/* ["default"].light */ .Z.light : _shadows__WEBPACK_IMPORTED_MODULE_8__/* ["default"].dark */ .Z.dark,
            customShadows: isLight ? _shadows__WEBPACK_IMPORTED_MODULE_8__/* .customShadows.light */ .k.light : _shadows__WEBPACK_IMPORTED_MODULE_8__/* .customShadows.dark */ .k.dark
        }), [
        isLight,
        themeDirection
    ]);
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.createTheme)(themeOptions);
    theme.components = (0,_overrides__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(theme);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default()), {}),
            children
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Accordion)
/* harmony export */ });
// ----------------------------------------------------------------------
function Accordion(theme) {
    return {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    borderRadius: "0 !important",
                    backgroundColor: "transparent",
                    "&:last-of-type": {
                        borderBottom: `solid 1px ${theme.palette.divider}`
                    },
                    "&.Mui-expanded": {
                        margin: 0,
                        "&:before": {
                            opacity: 1
                        }
                    },
                    "&.Mui-disabled": {
                        backgroundColor: "transparent"
                    }
                }
            }
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(0, 0, 2.5, 0)
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    padding: 0,
                    "&.Mui-disabled": {
                        opacity: 1,
                        color: theme.palette.action.disabled
                    }
                },
                content: {
                    alignItems: "center",
                    margin: theme.spacing(2.5, 0)
                }
            }
        }
    };
};


/***/ }),

/***/ 1663:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Alert)
/* harmony export */ });
/* harmony import */ var _CustomIcons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7292);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CustomIcons__WEBPACK_IMPORTED_MODULE_0__]);
_CustomIcons__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @mui
//

// ----------------------------------------------------------------------
function Alert(theme) {
    const isLight = theme.palette.mode === "light";
    const standardStyle = (color)=>({
            color: theme.palette[color][isLight ? "darker" : "lighter"],
            backgroundColor: theme.palette[color][isLight ? "lighter" : "darker"],
            "& .MuiAlert-icon": {
                color: theme.palette[color][isLight ? "dark" : "light"]
            }
        });
    const filledStyle = (color)=>({
            color: theme.palette[color].contrastText
        });
    const outlinedStyle = (color)=>({
            color: theme.palette[color][isLight ? "darker" : "lighter"],
            border: `solid 1px ${theme.palette[color][isLight ? "light" : "dark"]}`,
            backgroundColor: theme.palette[color][isLight ? "lighter" : "darker"],
            "& .MuiAlert-icon": {
                color: theme.palette[color][isLight ? "dark" : "light"]
            }
        });
    return {
        MuiAlert: {
            defaultProps: {
                iconMapping: {
                    error: _CustomIcons__WEBPACK_IMPORTED_MODULE_0__/* .ErrorIcon */ .Pz,
                    info: _CustomIcons__WEBPACK_IMPORTED_MODULE_0__/* .InfoIcon */ .sz,
                    success: _CustomIcons__WEBPACK_IMPORTED_MODULE_0__/* .SuccessIcon */ .tm,
                    warning: _CustomIcons__WEBPACK_IMPORTED_MODULE_0__/* .WarningIcon */ .aN
                }
            },
            styleOverrides: {
                message: {
                    "& .MuiAlertTitle-root": {
                        marginBottom: theme.spacing(0.5)
                    }
                },
                action: {
                    "& button:not(:first-of-type)": {
                        marginLeft: theme.spacing(1)
                    }
                },
                icon: {
                    "& svg": {
                        width: 24,
                        height: 24
                    }
                },
                standardInfo: standardStyle("info"),
                standardSuccess: standardStyle("success"),
                standardWarning: standardStyle("warning"),
                standardError: standardStyle("error"),
                filledInfo: filledStyle("info"),
                filledSuccess: filledStyle("success"),
                filledWarning: filledStyle("warning"),
                filledError: filledStyle("error"),
                outlinedInfo: outlinedStyle("info"),
                outlinedSuccess: outlinedStyle("success"),
                outlinedWarning: outlinedStyle("warning"),
                outlinedError: outlinedStyle("error")
            }
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5593:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Autocomplete)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7292);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CustomIcons__WEBPACK_IMPORTED_MODULE_1__]);
_CustomIcons__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

//

// ----------------------------------------------------------------------
function Autocomplete(theme) {
    return {
        MuiAutocomplete: {
            defaultProps: {
                popupIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomIcons__WEBPACK_IMPORTED_MODULE_1__/* .AutocompleteIcon */ .y0, {})
            },
            styleOverrides: {
                paper: {
                    paddingLeft: theme.spacing(1),
                    paddingRight: theme.spacing(1),
                    boxShadow: theme.customShadows.z24,
                    borderRadius: Number(theme.shape.borderRadius) * 2
                },
                option: {
                    ...theme.typography.body2,
                    borderRadius: theme.shape.borderRadius
                }
            }
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Avatar)
/* harmony export */ });
// ----------------------------------------------------------------------
function Avatar(theme) {
    return {
        MuiAvatar: {
            styleOverrides: {
                colorDefault: {
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.grey[400]
                }
            }
        },
        MuiAvatarGroup: {
            styleOverrides: {
                avatar: {
                    fontSize: 16,
                    fontWeight: theme.typography.fontWeightMedium,
                    "&:first-of-type": {
                        fontSize: 14,
                        color: theme.palette.primary.main,
                        backgroundColor: theme.palette.primary.lighter
                    }
                }
            }
        }
    };
};


/***/ }),

/***/ 5400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Backdrop)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function Backdrop(theme) {
    const varLow = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.grey[900], 0.48);
    const varHigh = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.grey[900], 1);
    return {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    background: [
                        `rgb(22,28,36)`,
                        `-moz-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
                        `-webkit-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
                        `linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`, 
                    ],
                    "&.MuiBackdrop-invisible": {
                        background: "transparent"
                    }
                }
            }
        }
    };
};


/***/ }),

/***/ 3407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Badge)
/* harmony export */ });
// ----------------------------------------------------------------------
function Badge() {
    return {
        MuiBadge: {
            styleOverrides: {
                dot: {
                    width: 10,
                    height: 10,
                    borderRadius: "50%"
                }
            }
        }
    };
};


/***/ }),

/***/ 1316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function Button(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiButton: {
            defaultProps: {
                disableElevation: true
            },
            styleOverrides: {
                sizeLarge: {
                    height: 48
                },
                containedInherit: {
                    color: isLight ? theme.palette.common.white : theme.palette.grey[800],
                    backgroundColor: isLight ? theme.palette.grey[800] : theme.palette.common.white,
                    "&:hover": {
                        backgroundColor: isLight ? theme.palette.grey[700] : theme.palette.grey[400]
                    }
                },
                outlinedInherit: {
                    borderColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.grey[500], 0.32),
                    "&:hover": {
                        backgroundColor: theme.palette.action.hover,
                        borderColor: theme.palette.text.primary
                    }
                },
                textInherit: {
                    "&:hover": {
                        backgroundColor: theme.palette.action.hover
                    }
                }
            }
        }
    };
};


/***/ }),

/***/ 9798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ButtonGroup)
/* harmony export */ });
// @mui
// ----------------------------------------------------------------------
function ButtonGroup(theme) {
    const styleContained = (color)=>({
            props: {
                variant: "contained",
                color
            },
            style: {
                boxShadow: theme.customShadows[color]
            }
        });
    return {
        MuiButtonGroup: {
            variants: [
                {
                    props: {
                        variant: "contained",
                        color: "inherit"
                    },
                    style: {
                        boxShadow: theme.customShadows.z8
                    }
                },
                styleContained("primary"),
                styleContained("secondary"),
                styleContained("info"),
                styleContained("success"),
                styleContained("warning"),
                styleContained("error"),
                {
                    props: {
                        disabled: true
                    },
                    style: {
                        boxShadow: "none",
                        "& .MuiButtonGroup-grouped.Mui-disabled": {
                            color: theme.palette.action.disabled,
                            borderColor: `${theme.palette.action.disabledBackground} !important`,
                            "&.MuiButton-contained": {
                                backgroundColor: theme.palette.action.disabledBackground
                            }
                        }
                    }
                }, 
            ],
            styleOverrides: {
                root: {
                    "&:hover": {
                        boxShadow: "none"
                    }
                }
            }
        }
    };
};


/***/ }),

/***/ 7594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card)
/* harmony export */ });
// ----------------------------------------------------------------------
function Card(theme) {
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: theme.customShadows.z16,
                    borderRadius: Number(theme.shape.borderRadius) * 2,
                    position: "relative",
                    zIndex: 0
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: "h6"
                },
                subheaderTypographyProps: {
                    variant: "body2",
                    marginTop: theme.spacing(0.5)
                }
            },
            styleOverrides: {
                root: {
                    padding: theme.spacing(3, 3, 0)
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3)
                }
            }
        }
    };
};


/***/ }),

/***/ 4146:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7292);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CustomIcons__WEBPACK_IMPORTED_MODULE_1__]);
_CustomIcons__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

//

// ----------------------------------------------------------------------
function Checkbox(theme) {
    return {
        MuiCheckbox: {
            defaultProps: {
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomIcons__WEBPACK_IMPORTED_MODULE_1__/* .CheckboxIcon */ .PD, {}),
                checkedIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomIcons__WEBPACK_IMPORTED_MODULE_1__/* .CheckboxCheckedIcon */ .u2, {}),
                indeterminateIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomIcons__WEBPACK_IMPORTED_MODULE_1__/* .CheckboxIndeterminateIcon */ .Yd, {})
            },
            styleOverrides: {
                root: {
                    padding: theme.spacing(1),
                    "&.Mui-checked.Mui-disabled, &.Mui-disabled": {
                        color: theme.palette.action.disabled
                    },
                    "& .MuiSvgIcon-fontSizeMedium": {
                        width: 24,
                        height: 24
                    },
                    "& .MuiSvgIcon-fontSizeSmall": {
                        width: 20,
                        height: 20
                    },
                    svg: {
                        fontSize: 24,
                        "&[font-size=small]": {
                            fontSize: 20
                        }
                    }
                }
            }
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1873:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Chip)
/* harmony export */ });
/* harmony import */ var _CustomIcons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7292);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CustomIcons__WEBPACK_IMPORTED_MODULE_0__]);
_CustomIcons__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @mui
//

// ----------------------------------------------------------------------
function Chip(theme) {
    return {
        MuiChip: {
            defaultProps: {
                deleteIcon: _CustomIcons__WEBPACK_IMPORTED_MODULE_0__/* .CloseIcon */ .Tw
            },
            styleOverrides: {
                root: {
                    ...theme.typography.body3,
                    borderRadius: theme.shape.borderRadius
                },
                colorDefault: {
                    color: theme.palette.text.secondary,
                    "& .MuiChip-avatarMedium, .MuiChip-avatarSmall": {
                        color: theme.palette.text.secondary
                    }
                },
                outlined: {
                    borderColor: theme.palette.grey[50032],
                    "&.MuiChip-colorPrimary": {
                        borderColor: theme.palette.primary.main
                    },
                    "&.MuiChip-colorSecondary": {
                        borderColor: theme.palette.secondary.main
                    }
                },
                //
                avatar: {
                    fontSize: theme.typography.subtitle2.fontSize,
                    fontWeight: theme.typography.subtitle2.fontWeight
                },
                avatarColorInfo: {
                    color: theme.palette.info.contrastText,
                    backgroundColor: theme.palette.info.dark
                },
                avatarColorSuccess: {
                    color: theme.palette.success.contrastText,
                    backgroundColor: theme.palette.success.dark
                },
                avatarColorWarning: {
                    color: theme.palette.warning.contrastText,
                    backgroundColor: theme.palette.warning.dark
                },
                avatarColorError: {
                    color: theme.palette.error.contrastText,
                    backgroundColor: theme.palette.error.dark
                }
            }
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Container)
/* harmony export */ });
// ----------------------------------------------------------------------
function Container() {
    return {
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: 20,
                    paddingRight: 20
                }
            }
        }
    };
};


/***/ }),

/***/ 5846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ControlLabel)
/* harmony export */ });
// ----------------------------------------------------------------------
function ControlLabel(theme) {
    return {
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    ...theme.typography.body2
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginTop: theme.spacing(1)
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.disabled
                }
            }
        }
    };
};


/***/ }),

/***/ 5191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CssBaseline)
/* harmony export */ });
// ----------------------------------------------------------------------
function CssBaseline() {
    return {
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    margin: 0,
                    padding: 0,
                    boxSizing: "border-box"
                },
                html: {
                    width: "100%",
                    height: "100%",
                    WebkitOverflowScrolling: "touch"
                },
                body: {
                    width: "100%",
                    height: "100%"
                },
                "#__next": {
                    width: "100%",
                    height: "100%"
                },
                "& ul, & ol": {
                    paddingLeft: 24,
                    "& li": {
                        lineHeight: 2
                    }
                }
            }
        }
    };
};


/***/ }),

/***/ 7292:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PD": () => (/* binding */ CheckboxIcon),
/* harmony export */   "Pz": () => (/* binding */ ErrorIcon),
/* harmony export */   "Tw": () => (/* binding */ CloseIcon),
/* harmony export */   "Xf": () => (/* binding */ RadioIcon),
/* harmony export */   "Yd": () => (/* binding */ CheckboxIndeterminateIcon),
/* harmony export */   "aN": () => (/* binding */ WarningIcon),
/* harmony export */   "eb": () => (/* binding */ TreeViewEndIcon),
/* harmony export */   "ft": () => (/* binding */ TreeViewExpandIcon),
/* harmony export */   "pE": () => (/* binding */ RadioCheckedIcon),
/* harmony export */   "r7": () => (/* binding */ StarIcon),
/* harmony export */   "sz": () => (/* binding */ InfoIcon),
/* harmony export */   "tm": () => (/* binding */ SuccessIcon),
/* harmony export */   "u2": () => (/* binding */ CheckboxCheckedIcon),
/* harmony export */   "vw": () => (/* binding */ InputSelectIcon),
/* harmony export */   "wn": () => (/* binding */ TreeViewCollapseIcon),
/* harmony export */   "y0": () => (/* binding */ AutocompleteIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_information__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3713);
/* harmony import */ var _iconify_icons_carbon_information__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_information__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_checkmark_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9954);
/* harmony import */ var _iconify_icons_carbon_checkmark_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_checkmark_outline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_warning_alt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6260);
/* harmony import */ var _iconify_icons_carbon_warning_alt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_warning_alt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_carbon_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7338);
/* harmony import */ var _iconify_icons_carbon_warning__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_warning__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_carbon_close_filled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3203);
/* harmony import */ var _iconify_icons_carbon_close_filled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_close_filled__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_core_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1851);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_core_components__WEBPACK_IMPORTED_MODULE_7__]);
src_core_components__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// icons






// @mui

// components

// ----------------------------------------------------------------------
// Close
const CloseIcon = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components__WEBPACK_IMPORTED_MODULE_7__/* .Iconify */ .Ir, {
    icon: (_iconify_icons_carbon_close_filled__WEBPACK_IMPORTED_MODULE_5___default())
});
// Alert
const ErrorIcon = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components__WEBPACK_IMPORTED_MODULE_7__/* .Iconify */ .Ir, {
    icon: (_iconify_icons_carbon_warning__WEBPACK_IMPORTED_MODULE_4___default())
});
const InfoIcon = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components__WEBPACK_IMPORTED_MODULE_7__/* .Iconify */ .Ir, {
    icon: (_iconify_icons_carbon_information__WEBPACK_IMPORTED_MODULE_1___default())
});
const SuccessIcon = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components__WEBPACK_IMPORTED_MODULE_7__/* .Iconify */ .Ir, {
    icon: (_iconify_icons_carbon_checkmark_outline__WEBPACK_IMPORTED_MODULE_2___default())
});
const WarningIcon = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components__WEBPACK_IMPORTED_MODULE_7__/* .Iconify */ .Ir, {
    icon: (_iconify_icons_carbon_warning_alt__WEBPACK_IMPORTED_MODULE_3___default())
});
// Using for Rating
function StarIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
            points: "12 1.5 8.5875 8.415 0.96 9.5175 6.48 14.9025 5.175 22.5 12 18.915 18.825 22.5 17.52 14.9025 23.04 9.525 15.4125 8.415"
        })
    });
}
// Using for Checkbox
function CheckboxIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M16.2169 2.25H7.7822C4.4649 2.25 2.25 4.6262 2.25 8.0264v7.9472c0 3.4034 2.209 5.7764 5.5322 5.7764h8.4337c3.3241 0 5.5341-2.373 5.5341-5.7764V8.0264c0-3.4032-2.2098-5.7764-5.5331-5.7764Zm-8.4347 1.5h8.4347c2.47 0 4.0331 1.6787 4.0331 4.2764v7.9472c0 2.5978-1.5632 4.2764-4.0341 4.2764H7.7822c-2.4698 0-4.0322-1.6784-4.0322-4.2764V8.0264C3.75 5.432 5.3178 3.75 7.7822 3.75Z"
        })
    });
}
function CheckboxCheckedIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M16.2169 2.25c3.3233 0 5.5331 2.3732 5.5331 5.7764v7.9472c0 3.4033-2.21 5.7764-5.5341 5.7764H7.7822c-3.3232 0-5.5322-2.373-5.5322-5.7764V8.0264C2.25 4.6262 4.4649 2.25 7.7822 2.25h8.4347Zm0 1.5H7.7822C5.3178 3.75 3.75 5.432 3.75 8.0264v7.9472c0 2.598 1.5624 4.2764 4.0322 4.2764h8.4337c2.4709 0 4.0341-1.6786 4.0341-4.2764V8.0264c0-2.5977-1.563-4.2764-4.0331-4.2764Zm-.127 5.3469a.7502.7502 0 0 1 .0725.9765l-.0726.0841-4.746 4.746a.7502.7502 0 0 1-.9764.0727l-.0841-.0726-2.374-2.373a.75.75 0 0 1 .9762-1.1334l.0842.0726 1.8433 1.8422 4.2162-4.2151a.75.75 0 0 1 1.0606 0Z"
        })
    });
}
function CheckboxIndeterminateIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M16.2169 2.25c3.3233 0 5.5331 2.3732 5.5331 5.7764v7.9472c0 3.4033-2.21 5.7764-5.5341 5.7764H7.7822c-3.3232 0-5.5322-2.373-5.5322-5.7764V8.0264C2.25 4.6262 4.4649 2.25 7.7822 2.25h8.4347Zm0 1.5H7.7822C5.3178 3.75 3.75 5.432 3.75 8.0264v7.9472c0 2.598 1.5624 4.2764 4.0322 4.2764h8.4337c2.4709 0 4.0341-1.6786 4.0341-4.2764V8.0264c0-2.5977-1.563-4.2764-4.0331-4.2764ZM15 11.25a.75.75 0 0 1 .1018 1.4932L15 12.75H9a.75.75 0 0 1-.1018-1.4932L9 11.25h6Z"
        })
    });
}
// Using for Radio Button
function RadioIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12.946 1.75c-5.66 0-10.25 4.59-10.25 10.25s4.59 10.25 10.25 10.25c5.661 0 10.25-4.59 10.25-10.25S18.607 1.75 12.946 1.75Zm0 1.5a8.75 8.75 0 1 1 0 17.5 8.75 8.75 0 0 1 0-17.5Z"
        })
    });
}
function RadioCheckedIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75Zm0 1.5a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"
        })
    });
}
// Using for Select Input
function InputSelectIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.SvgIcon, {
        ...props,
        sx: {
            width: 18,
            height: 18,
            right: 12,
            fontSize: "unset",
            position: "absolute",
            top: "calc(50% - 8px)",
            pointerEvents: "none"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12 16.5 4.5 9l1.05-1.05L12 14.4l6.45-6.45L19.5 9z"
        })
    });
}
// Using for Autocomplete DropDown
function AutocompleteIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.SvgIcon, {
        ...props,
        sx: {
            width: 18,
            height: 18
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12 16.5 4.5 9l1.05-1.05L12 14.4l6.45-6.45L19.5 9z"
        })
    });
}
//  Using for TreeView
function TreeViewCollapseIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M18,2.25 C20.0042592,2.25 21.6412737,3.82236105 21.744802,5.80084143 L21.75,6 L21.75,18 C21.75,20.0042592 20.1776389,21.6412737 18.1991586,21.744802 L18,21.75 L6,21.75 C3.99574083,21.75 2.35872626,20.1776389 2.25519801,18.1991586 L2.25,18 L2.25,6 C2.25,3.99574083 3.82236105,2.35872626 5.80084143,2.25519801 L6,2.25 L18,2.25 Z M18,3.75 L6,3.75 C4.80913601,3.75 3.83435508,4.67516159 3.75519081,5.84595119 L3.75,6 L3.75,18 C3.75,19.190864 4.67516159,20.1656449 5.84595119,20.2448092 L6,20.25 L18,20.25 C19.190864,20.25 20.1656449,19.3248384 20.2448092,18.1540488 L20.25,18 L20.25,6 C20.25,4.80913601 19.3248384,3.83435508 18.1540488,3.75519081 L18,3.75 Z M16,11 L16,12.6 L8,12.6 L8,11 L16,11 Z"
        })
    });
}
function TreeViewExpandIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M18,2.25 C20.0042592,2.25 21.6412737,3.82236105 21.744802,5.80084143 L21.75,6 L21.75,18 C21.75,20.0042592 20.1776389,21.6412737 18.1991586,21.744802 L18,21.75 L6,21.75 C3.99574083,21.75 2.35872626,20.1776389 2.25519801,18.1991586 L2.25,18 L2.25,6 C2.25,3.99574083 3.82236105,2.35872626 5.80084143,2.25519801 L6,2.25 L18,2.25 Z M18,3.75 L6,3.75 C4.80913601,3.75 3.83435508,4.67516159 3.75519081,5.84595119 L3.75,6 L3.75,18 C3.75,19.190864 4.67516159,20.1656449 5.84595119,20.2448092 L6,20.25 L18,20.25 C19.190864,20.25 20.1656449,19.3248384 20.2448092,18.1540488 L20.25,18 L20.25,6 C20.25,4.80913601 19.3248384,3.83435508 18.1540488,3.75519081 L18,3.75 Z M12.5,8 L12.5,11.25 L15.75,11.25 L15.75,12.75 L12.5,12.75 L12.5,16 L11,16 L11,12.75 L7.75,12.75 L7.75,11.25 L11,11.25 L11,8 L12.5,8 Z"
        })
    });
}
function TreeViewEndIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M18,2.25 C20.0042592,2.25 21.6412737,3.82236105 21.744802,5.80084143 L21.75,6 L21.75,18 C21.75,20.0042592 20.1776389,21.6412737 18.1991586,21.744802 L18,21.75 L6,21.75 C3.99574083,21.75 2.35872626,20.1776389 2.25519801,18.1991586 L2.25,18 L2.25,6 C2.25,3.99574083 3.82236105,2.35872626 5.80084143,2.25519801 L6,2.25 L18,2.25 Z M18,3.75 L6,3.75 C4.80913601,3.75 3.83435508,4.67516159 3.75519081,5.84595119 L3.75,6 L3.75,18 C3.75,19.190864 4.67516159,20.1656449 5.84595119,20.2448092 L6,20.25 L18,20.25 C19.190864,20.25 20.1656449,19.3248384 20.2448092,18.1540488 L20.25,18 L20.25,6 C20.25,4.80913601 19.3248384,3.83435508 18.1540488,3.75519081 L18,3.75 Z M14.048097,8.64124279 L15.1087572,9.70190296 L12.8106602,12 L15.1087572,14.298097 L14.048097,15.3587572 L11.75,13.0606602 L9.45190296,15.3587572 L8.39124279,14.298097 L10.6893398,12 L8.39124279,9.70190296 L9.45190296,8.64124279 L11.75,10.9393398 L14.048097,8.64124279 Z"
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Dialog)
/* harmony export */ });
// ----------------------------------------------------------------------
function Dialog(theme) {
    return {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.customShadows.z24,
                    "&.MuiPaper-rounded": {
                        borderRadius: Number(theme.shape.borderRadius) * 2
                    },
                    "&.MuiDialog-paperFullScreen": {
                        borderRadius: 0
                    },
                    "&.MuiDialog-paper .MuiDialogActions-root": {
                        padding: theme.spacing(3)
                    },
                    "@media (max-width: 600px)": {
                        margin: theme.spacing(2)
                    },
                    "@media (max-width: 663.95px)": {
                        "&.MuiDialog-paperWidthSm.MuiDialog-paperScrollBody": {
                            maxWidth: "100%"
                        }
                    }
                },
                paperFullWidth: {
                    width: "100%"
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3, 3, 0)
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    borderTop: 0,
                    borderBottom: 0,
                    padding: theme.spacing(3)
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    "& > :not(:first-of-type)": {
                        marginLeft: theme.spacing(1.5)
                    }
                }
            }
        }
    };
};


/***/ }),

/***/ 1062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Drawer)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function Drawer(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiDrawer: {
            styleOverrides: {
                modal: {
                    '&[role="presentation"]': {
                        "& .MuiDrawer-paperAnchorLeft": {
                            boxShadow: `8px 24px 24px 12px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.grey[900], isLight ? 0.16 : 0.48)}`
                        },
                        "& .MuiDrawer-paperAnchorRight": {
                            boxShadow: `-8px 24px 24px 12px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.grey[900], isLight ? 0.16 : 0.48)}`
                        }
                    }
                }
            }
        }
    };
};


/***/ }),

/***/ 6290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Fab)
/* harmony export */ });
// ----------------------------------------------------------------------
function Fab(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiFab: {
            defaultProps: {
                color: "primary"
            },
            variants: [
                {
                    props: {
                        color: "default"
                    },
                    style: {
                        color: isLight ? theme.palette.common.white : theme.palette.grey[800],
                        backgroundColor: theme.palette.text.primary,
                        "&:hover": {
                            backgroundColor: isLight ? theme.palette.grey[700] : theme.palette.grey[400]
                        }
                    }
                },
                {
                    props: {
                        color: "inherit"
                    },
                    style: {
                        backgroundColor: !isLight && theme.palette.grey[700],
                        "&:hover": {
                            backgroundColor: isLight ? theme.palette.grey[400] : theme.palette.grey[600]
                        }
                    }
                }, 
            ],
            styleOverrides: {
                root: {
                    boxShadow: theme.customShadows.z8,
                    "& svg": {
                        width: 24,
                        height: 24
                    },
                    "&:hover": {
                        boxShadow: "none"
                    }
                },
                primary: {
                    boxShadow: theme.customShadows.primary,
                    "&:hover": {
                        backgroundColor: theme.palette.primary.dark
                    }
                },
                secondary: {
                    boxShadow: theme.customShadows.secondary,
                    "&:hover": {
                        backgroundColor: theme.palette.secondary.dark
                    }
                },
                extended: {
                    "& svg": {
                        marginRight: theme.spacing(1)
                    }
                }
            }
        }
    };
};


/***/ }),

/***/ 7367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function Input(theme) {
    return {
        MuiTextField: {
            defaultProps: {
                variant: "filled"
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        "& svg": {
                            color: theme.palette.text.disabled
                        }
                    }
                },
                input: {
                    "&::placeholder": {
                        opacity: 1,
                        color: theme.palette.text.disabled
                    }
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                underline: {
                    "&:before": {
                        borderBottomColor: theme.palette.grey[50056]
                    }
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    ...theme.typography.body2
                }
            }
        },
        MuiFilledInput: {
            defaultProps: {
                disableUnderline: true
            },
            styleOverrides: {
                root: {
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: theme.palette.grey[5008],
                    "&:hover": {
                        backgroundColor: theme.palette.grey[50016]
                    },
                    "&.Mui-error": {
                        backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.error.main, 0.08)
                    },
                    "&.Mui-focused": {
                        backgroundColor: theme.palette.action.focus
                    },
                    "&.Mui-disabled": {
                        backgroundColor: theme.palette.action.disabledBackground
                    }
                },
                input: {
                    ...theme.typography.body2
                },
                underline: {
                    "&:before": {
                        borderBottomColor: theme.palette.grey[50056]
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.grey[50032]
                    },
                    "&.Mui-disabled": {
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: theme.palette.action.disabledBackground
                        }
                    }
                }
            }
        }
    };
};


/***/ }),

/***/ 7827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Link)
/* harmony export */ });
// ----------------------------------------------------------------------
function Link() {
    return {
        MuiLink: {
            defaultProps: {
                underline: "hover"
            },
            styleOverrides: {
                root: {
                    cursor: "pointer"
                }
            }
        }
    };
};


/***/ }),

/***/ 1659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Lists)
/* harmony export */ });
// ----------------------------------------------------------------------
function Lists(theme) {
    return {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: "inherit",
                    minWidth: "auto",
                    marginRight: theme.spacing(2)
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                root: {
                    minWidth: "auto",
                    marginRight: theme.spacing(2)
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    marginTop: 0,
                    marginBottom: 0
                },
                multiline: {
                    marginTop: 0,
                    marginBottom: 0
                }
            }
        }
    };
};


/***/ }),

/***/ 9726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LoadingButton)
/* harmony export */ });
// ----------------------------------------------------------------------
function LoadingButton() {
    return {
        MuiLoadingButton: {
            styleOverrides: {
                root: {
                    "&.MuiButton-text": {
                        "& .MuiLoadingButton-startIconPendingStart": {
                            marginLeft: 0
                        },
                        "& .MuiLoadingButton-endIconPendingEnd": {
                            marginRight: 0
                        }
                    }
                }
            }
        }
    };
};


/***/ }),

/***/ 9487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Menu)
/* harmony export */ });
// ----------------------------------------------------------------------
function Menu(theme) {
    return {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    ...theme.typography.body2,
                    padding: theme.spacing(1),
                    borderRadius: theme.shape.borderRadius,
                    "&.Mui-selected": {
                        backgroundColor: theme.palette.action.selected,
                        "&:hover": {
                            backgroundColor: theme.palette.action.hover
                        }
                    },
                    "& .MuiListItemIcon-root": {
                        minWidth: "unset"
                    }
                }
            }
        }
    };
};


/***/ }),

/***/ 2006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function Pagination(theme) {
    return {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        fontWeight: theme.typography.fontWeightBold
                    }
                },
                textPrimary: {
                    "&.Mui-selected": {
                        color: theme.palette.primary.main,
                        backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.primary.main, 0.08),
                        "&:hover, &.Mui-focusVisible": {
                            backgroundColor: `${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.primary.main, 0.24)} !important`
                        }
                    }
                },
                outlined: {
                    border: `1px solid ${theme.palette.grey[50032]}`
                },
                outlinedPrimary: {
                    "&.Mui-selected": {
                        backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.primary.main, 0.08),
                        border: `1px solid ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.primary.main, 0.24)}`
                    }
                }
            }
        }
    };
};


/***/ }),

/***/ 4218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Paper)
/* harmony export */ });
// ----------------------------------------------------------------------
function Paper() {
    return {
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundImage: "none"
                }
            }
        }
    };
};


/***/ }),

/***/ 7315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Popover)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function Popover(theme) {
    return {
        MuiPopover: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.customShadows.z24,
                    borderRadius: Number(theme.shape.borderRadius) * 1.5,
                    border: `solid 1px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.grey[500], 0.08)}`
                }
            }
        }
    };
};


/***/ }),

/***/ 1301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Progress)
/* harmony export */ });
// ----------------------------------------------------------------------
function Progress(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    overflow: "hidden"
                },
                bar: {
                    borderRadius: 4
                },
                colorPrimary: {
                    backgroundColor: theme.palette.primary[isLight ? "lighter" : "darker"]
                },
                buffer: {
                    backgroundColor: "transparent"
                }
            }
        }
    };
};


/***/ }),

/***/ 6941:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Radio)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7292);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CustomIcons__WEBPACK_IMPORTED_MODULE_1__]);
_CustomIcons__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

//

// ----------------------------------------------------------------------
function Radio(theme) {
    return {
        MuiRadio: {
            defaultProps: {
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomIcons__WEBPACK_IMPORTED_MODULE_1__/* .RadioIcon */ .Xf, {}),
                checkedIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomIcons__WEBPACK_IMPORTED_MODULE_1__/* .RadioCheckedIcon */ .pE, {})
            },
            styleOverrides: {
                root: {
                    padding: theme.spacing(1),
                    svg: {
                        fontSize: 24,
                        "&[font-size=small]": {
                            fontSize: 20
                        }
                    }
                }
            }
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8197:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Rating)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7292);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CustomIcons__WEBPACK_IMPORTED_MODULE_2__]);
_CustomIcons__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @mui


//

// ----------------------------------------------------------------------
const ICON_SMALL = {
    width: 20,
    height: 20
};
const ICON_LARGE = {
    width: 28,
    height: 28
};
function Rating(theme) {
    return {
        MuiRating: {
            defaultProps: {
                emptyIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomIcons__WEBPACK_IMPORTED_MODULE_2__/* .StarIcon */ .r7, {}),
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomIcons__WEBPACK_IMPORTED_MODULE_2__/* .StarIcon */ .r7, {})
            },
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        opacity: 0.48
                    }
                },
                iconEmpty: {
                    color: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.grey[500], 0.48)
                },
                sizeSmall: {
                    "& svg": {
                        ...ICON_SMALL
                    }
                },
                sizeLarge: {
                    "& svg": {
                        ...ICON_LARGE
                    }
                }
            }
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var _CustomIcons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7292);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CustomIcons__WEBPACK_IMPORTED_MODULE_0__]);
_CustomIcons__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// ----------------------------------------------------------------------
function Select() {
    return {
        MuiSelect: {
            defaultProps: {
                IconComponent: _CustomIcons__WEBPACK_IMPORTED_MODULE_0__/* .InputSelectIcon */ .vw
            }
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Skeleton)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function Skeleton(theme) {
    return {
        MuiSkeleton: {
            defaultProps: {
                animation: "wave"
            },
            styleOverrides: {
                root: {
                    backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.grey[500], 0.24)
                }
            }
        }
    };
};


/***/ }),

/***/ 9119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Slider)
/* harmony export */ });
// ----------------------------------------------------------------------
function Slider(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiSlider: {
            defaultProps: {
                size: "small"
            },
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        color: theme.palette.action.disabled
                    }
                },
                markLabel: {
                    fontSize: 13,
                    color: theme.palette.text.disabled
                },
                valueLabel: {
                    borderRadius: 8,
                    backgroundColor: theme.palette.grey[isLight ? 800 : 700]
                }
            }
        }
    };
};


/***/ }),

/***/ 8306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Stepper)
/* harmony export */ });
// ----------------------------------------------------------------------
function Stepper(theme) {
    return {
        MuiStepConnector: {
            styleOverrides: {
                line: {
                    borderColor: theme.palette.divider
                }
            }
        }
    };
};


/***/ }),

/***/ 5993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SvgIcon)
/* harmony export */ });
// ----------------------------------------------------------------------
function SvgIcon() {
    return {
        MuiSvgIcon: {
            styleOverrides: {
                fontSizeSmall: {
                    width: 20,
                    height: 20,
                    fontSize: "inherit"
                },
                fontSizeLarge: {
                    width: 32,
                    height: 32,
                    fontSize: "inherit"
                }
            }
        }
    };
};


/***/ }),

/***/ 658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Switch)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function Switch(theme) {
    return {
        MuiSwitch: {
            styleOverrides: {
                root: {
                    padding: "9px 13px 9px 12px",
                    width: 58,
                    height: 38
                },
                thumb: {
                    width: 14,
                    height: 14,
                    boxShadow: "none",
                    color: `${theme.palette.common.white} !important`
                },
                track: {
                    opacity: 1,
                    borderRadius: 10,
                    backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.grey[500], 0.48)
                },
                switchBase: {
                    padding: 12,
                    left: 3,
                    "&.Mui-checked": {
                        transform: "translateX(13px)",
                        "&+.MuiSwitch-track": {
                            opacity: 1
                        },
                        "&.Mui-disabled": {
                            "&+.MuiSwitch-track": {
                                opacity: 0.48
                            }
                        }
                    },
                    "&.Mui-disabled": {
                        "&+.MuiSwitch-track": {
                            opacity: 0.5
                        }
                    }
                }
            }
        }
    };
};


/***/ }),

/***/ 4045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Table)
/* harmony export */ });
// ----------------------------------------------------------------------
function Table(theme) {
    return {
        MuiTableRow: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: theme.palette.action.selected,
                        "&:hover": {
                            backgroundColor: theme.palette.action.hover
                        }
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: "none"
                },
                head: {
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.background.neutral,
                    "&:first-of-type": {
                        paddingLeft: theme.spacing(3),
                        borderTopLeftRadius: theme.shape.borderRadius,
                        borderBottomLeftRadius: theme.shape.borderRadius,
                        boxShadow: `inset 8px 0 0 ${theme.palette.background.paper}`
                    },
                    "&:last-of-type": {
                        paddingRight: theme.spacing(3),
                        borderTopRightRadius: theme.shape.borderRadius,
                        borderBottomRightRadius: theme.shape.borderRadius,
                        boxShadow: `inset -8px 0 0 ${theme.palette.background.paper}`
                    }
                },
                stickyHeader: {
                    backgroundColor: theme.palette.background.paper,
                    backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.neutral} 0%, ${theme.palette.background.neutral} 100%)`
                },
                body: {
                    "&:first-of-type": {
                        paddingLeft: theme.spacing(3)
                    },
                    "&:last-of-type": {
                        paddingRight: theme.spacing(3)
                    }
                }
            }
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    borderTop: `solid 1px ${theme.palette.divider}`
                },
                toolbar: {
                    height: 64
                },
                select: {
                    "&:focus": {
                        borderRadius: theme.shape.borderRadius
                    }
                },
                selectIcon: {
                    width: 20,
                    height: 20,
                    marginTop: 2
                }
            }
        }
    };
};


/***/ }),

/***/ 3995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Tabs)
/* harmony export */ });
// ----------------------------------------------------------------------
function Tabs(theme) {
    return {
        MuiTab: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    padding: 0,
                    minWidth: 48,
                    "&.Mui-selected": {
                        color: theme.palette.text.primary
                    },
                    "&:not(:last-of-type)": {
                        marginRight: theme.spacing(3),
                        "@media (min-width: 600px)": {
                            marginRight: theme.spacing(5)
                        }
                    }
                },
                labelIcon: {
                    minHeight: 48,
                    flexDirection: "row",
                    "& > *:first-of-type": {
                        marginBottom: 0,
                        marginRight: theme.spacing(1)
                    }
                },
                wrapper: {
                    flexDirection: "row",
                    whiteSpace: "nowrap"
                },
                textColorInherit: {
                    opacity: 1,
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiTabPanel: {
            styleOverrides: {
                root: {
                    padding: 0
                }
            }
        },
        MuiTabScrollButton: {
            styleOverrides: {
                root: {
                    width: 48,
                    borderRadius: "50%"
                }
            }
        }
    };
};


/***/ }),

/***/ 1471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Timeline)
/* harmony export */ });
// ----------------------------------------------------------------------
function Timeline(theme) {
    return {
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    width: 1,
                    backgroundColor: theme.palette.divider
                }
            }
        }
    };
};


/***/ }),

/***/ 7623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ToggleButton)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
// @mui

// ----------------------------------------------------------------------
function ToggleButton(theme) {
    const styleSelected = (color)=>({
            props: {
                color
            },
            style: {
                "&.Mui-selected": {
                    borderColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette[color].main, 0.48)
                }
            }
        });
    return {
        MuiToggleButton: {
            defaultProps: {
                color: "primary"
            },
            variants: [
                styleSelected("primary"),
                styleSelected("secondary"),
                styleSelected("info"),
                styleSelected("success"),
                styleSelected("warning"),
                styleSelected("error"), 
            ],
            styleOverrides: {
                root: {
                    color: theme.palette.text.primary,
                    "& svg": {
                        width: 24,
                        height: 24
                    }
                }
            }
        },
        MuiToggleButtonGroup: {
            defaultProps: {
                color: "primary"
            },
            styleOverrides: {
                root: {
                    boxShadow: theme.customShadows.z8,
                    border: `solid 1px ${theme.palette.grey[50012]}`,
                    "& .MuiToggleButton-root": {
                        border: "none",
                        margin: 4,
                        borderRadius: `${theme.shape.borderRadius}px !important`,
                        "&.Mui-disabled": {
                            border: "none"
                        }
                    }
                }
            }
        }
    };
};


/***/ }),

/***/ 5551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Tooltip)
/* harmony export */ });
// ----------------------------------------------------------------------
function Tooltip(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.grey[isLight ? 800 : 700]
                },
                arrow: {
                    color: theme.palette.grey[isLight ? 800 : 700]
                }
            }
        }
    };
};


/***/ }),

/***/ 6187:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TreeView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7292);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CustomIcons__WEBPACK_IMPORTED_MODULE_1__]);
_CustomIcons__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @mui

//

// ----------------------------------------------------------------------
function TreeView(theme) {
    return {
        MuiTreeView: {
            defaultProps: {
                defaultCollapseIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomIcons__WEBPACK_IMPORTED_MODULE_1__/* .TreeViewCollapseIcon */ .wn, {
                    sx: {
                        width: 20,
                        height: 20
                    }
                }),
                defaultExpandIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomIcons__WEBPACK_IMPORTED_MODULE_1__/* .TreeViewExpandIcon */ .ft, {
                    sx: {
                        width: 20,
                        height: 20
                    }
                }),
                defaultEndIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomIcons__WEBPACK_IMPORTED_MODULE_1__/* .TreeViewEndIcon */ .eb, {
                    sx: {
                        color: "text.secondary",
                        width: 20,
                        height: 20
                    }
                })
            }
        },
        MuiTreeItem: {
            styleOverrides: {
                label: {
                    ...theme.typography.body2
                },
                iconContainer: {
                    width: "auto"
                }
            }
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Typography)
/* harmony export */ });
// ----------------------------------------------------------------------
function Typography(theme) {
    return {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    body3: "p"
                }
            },
            styleOverrides: {
                paragraph: {
                    marginBottom: theme.spacing(2)
                },
                gutterBottom: {
                    marginBottom: theme.spacing(1)
                }
            }
        }
    };
};


/***/ }),

/***/ 3812:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ComponentsOverrides)
/* harmony export */ });
/* harmony import */ var _Fab__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(6290);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(7594);
/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1873);
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(3995);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(9487);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7827);
/* harmony import */ var _Lists__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(1659);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(4045);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1663);
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3407);
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4218);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7367);
/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6941);
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1062);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(432);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(919);
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8197);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(9119);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1316);
/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(658);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2208);
/* harmony import */ var _SvgIcon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5993);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(5551);
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7315);
/* harmony import */ var _Stepper__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(8306);
/* harmony import */ var _Skeleton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4099);
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5400);
/* harmony import */ var _Progress__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(1301);
/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(1471);
/* harmony import */ var _TreeView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6187);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4146);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7854);
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(5597);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(7374);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2006);
/* harmony import */ var _ButtonGroup__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(9798);
/* harmony import */ var _CssBaseline__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(5191);
/* harmony import */ var _Autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5593);
/* harmony import */ var _ToggleButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7623);
/* harmony import */ var _ControlLabel__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(5846);
/* harmony import */ var _LoadingButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(9726);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Chip__WEBPACK_IMPORTED_MODULE_0__, _Alert__WEBPACK_IMPORTED_MODULE_1__, _Radio__WEBPACK_IMPORTED_MODULE_3__, _Rating__WEBPACK_IMPORTED_MODULE_5__, _Select__WEBPACK_IMPORTED_MODULE_8__, _TreeView__WEBPACK_IMPORTED_MODULE_12__, _Checkbox__WEBPACK_IMPORTED_MODULE_13__, _Autocomplete__WEBPACK_IMPORTED_MODULE_15__]);
([_Chip__WEBPACK_IMPORTED_MODULE_0__, _Alert__WEBPACK_IMPORTED_MODULE_1__, _Radio__WEBPACK_IMPORTED_MODULE_3__, _Rating__WEBPACK_IMPORTED_MODULE_5__, _Select__WEBPACK_IMPORTED_MODULE_8__, _TreeView__WEBPACK_IMPORTED_MODULE_12__, _Checkbox__WEBPACK_IMPORTED_MODULE_13__, _Autocomplete__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









































// ----------------------------------------------------------------------
function ComponentsOverrides(theme) {
    return Object.assign((0,_Link__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(), (0,_Badge__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(), (0,_Paper__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)(), (0,_Select__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(), (0,_SvgIcon__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(), (0,_Container__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)(), (0,_CssBaseline__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)(), (0,_LoadingButton__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(), (0,_Fab__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z)(theme), (0,_Tabs__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(theme), (0,_Chip__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(theme), (0,_Card__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z)(theme), (0,_Menu__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(theme), (0,_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(theme), (0,_Radio__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(theme), (0,_Lists__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z)(theme), (0,_Table__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z)(theme), (0,_Alert__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(theme), (0,_Switch__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(theme), (0,_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(theme), (0,_Rating__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(theme), (0,_Dialog__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z)(theme), (0,_Avatar__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z)(theme), (0,_Slider__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z)(theme), (0,_Drawer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(theme), (0,_Stepper__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z)(theme), (0,_Tooltip__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z)(theme), (0,_Popover__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(theme), (0,_Checkbox__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(theme), (0,_Skeleton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(theme), (0,_Timeline__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z)(theme), (0,_TreeView__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(theme), (0,_Backdrop__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(theme), (0,_Progress__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z)(theme), (0,_Accordion__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z)(theme), (0,_Typography__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z)(theme), (0,_Pagination__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(theme), (0,_ButtonGroup__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z)(theme), (0,_Autocomplete__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(theme), (0,_ControlLabel__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .Z)(theme), (0,_ToggleButton__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(theme));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ contrastText),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8928);

// utils

// SETUP COLORS
const contrastText = {
    white: "#FFFFFF",
    black: "#212B36"
};
const PRIMARY = {
    yellow: "#e0ac0f",
    green: "#605e43",
    burgundy: "#610000",
    tan: "#ab9f89",
    lighter: "#FEE9D1",
    light: "#FDAB76",
    main: "#E0AC0F",
    dark: "#B3200E",
    darker: "#770508",
    contrastText: contrastText.white
};
const SECONDARY = {
    blue: "#456d90",
    darkBrown: "#321d00",
    brown: "#503b11",
    orange: "#da5225",
    lighter: "#D2FCF4",
    light: "#77F0ED",
    main: "#22B8CF",
    dark: "#116E95",
    darker: "#063963",
    contrastText: contrastText.white
};
const INFO = {
    lighter: "#CBFEFC",
    light: "#63E8F9",
    main: "#00B1ED",
    dark: "#0067AA",
    darker: "#003471",
    contrastText: contrastText.white
};
const SUCCESS = {
    lighter: "#CDFCD1",
    light: "#69F290",
    main: "#0CD66E",
    dark: "#069A6B",
    darker: "#02665B",
    contrastText: contrastText.black
};
const WARNING = {
    lighter: "#FFF8D1",
    light: "#FFE475",
    main: "#FFC81A",
    dark: "#B7860D",
    darker: "#7A5204",
    contrastText: contrastText.black
};
const ERROR = {
    lighter: "#FFE7D9",
    light: "#FFA48D",
    main: "#FF4842",
    dark: "#B72136",
    darker: "#7A0C2E",
    contrastText: contrastText.white
};
const GREY = {
    0: "#FFFFFF",
    100: "#F9FAFB",
    200: "#F4F6F8",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "#919EAB",
    600: "#637381",
    700: "#454F5B",
    800: "#212B36",
    900: "#161C24",
    5008: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.08),
    50012: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.12),
    50016: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.16),
    50024: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.24),
    50032: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.32),
    50048: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.48),
    50056: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.56),
    50080: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.8)
};
const GRADIENTS = {
    primary: (0,src_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(PRIMARY.light, PRIMARY.main),
    secondary: (0,src_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(SECONDARY.light, SECONDARY.main),
    info: (0,src_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(INFO.light, INFO.main),
    success: (0,src_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(SUCCESS.light, SUCCESS.main),
    warning: (0,src_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(WARNING.light, WARNING.main),
    error: (0,src_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(ERROR.light, ERROR.main)
};
const COMMON = {
    common: {
        black: "#000",
        white: "#fff"
    },
    primary: {
        ...PRIMARY,
        contrastText: "#fff"
    },
    secondary: {
        ...SECONDARY,
        contrastText: "#fff"
    },
    info: {
        ...INFO,
        contrastText: "#fff"
    },
    success: {
        ...SUCCESS,
        contrastText: GREY[800]
    },
    warning: {
        ...WARNING,
        contrastText: GREY[800]
    },
    error: {
        ...ERROR,
        contrastText: "#fff"
    },
    grey: GREY,
    gradients: GRADIENTS,
    divider: GREY[50024],
    action: {
        hover: GREY[5008],
        selected: GREY[50012],
        disabled: GREY[50080],
        disabledBackground: GREY[50024],
        focus: GREY[50024],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48
    }
};
const palette = {
    light: {
        ...COMMON,
        mode: "light",
        text: {
            primary: GREY[800],
            secondary: GREY[600],
            disabled: GREY[500],
            footer: {
                primary: GREY[200],
                secondary: GREY[100]
            }
        },
        background: {
            paper: "#fff",
            default: "#fff",
            neutral: GREY[100],
            footer: "#000"
        },
        action: {
            active: GREY[600],
            ...COMMON.action
        },
        footer: {
            background: "#000",
            text: GREY[600]
        }
    },
    dark: {
        ...COMMON,
        mode: "dark",
        text: {
            primary: "#fff",
            secondary: GREY[500],
            disabled: GREY[600],
            footer: {
                primary: GREY[600],
                secondary: GREY[500]
            }
        },
        background: {
            paper: GREY[800],
            default: GREY[900],
            neutral: GREY[50012],
            footer: "#fff"
        },
        action: {
            active: GREY[500],
            ...COMMON.action
        },
        footer: {
            background: "#fff",
            text: GREY[600]
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (palette);


/***/ }),

/***/ 537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "k": () => (/* binding */ customShadows)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8187);
// @mui

//

const LIGHT_MODE = _palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.grey[500] */ .Z.light.grey[500];
const DARK_MODE = _palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.common.black */ .Z.light.common.black;
const createShadow = (color)=>{
    const transparent1 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.2);
    const transparent2 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.14);
    const transparent3 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.12);
    const shadows = [
        "none",
        `0px 2px 1px -1px ${transparent1},0px 1px 1px 0px ${transparent2},0px 1px 3px 0px ${transparent3}`,
        `0px 3px 1px -2px ${transparent1},0px 2px 2px 0px ${transparent2},0px 1px 5px 0px ${transparent3}`,
        `0px 3px 3px -2px ${transparent1},0px 3px 4px 0px ${transparent2},0px 1px 8px 0px ${transparent3}`,
        `0px 2px 4px -1px ${transparent1},0px 4px 5px 0px ${transparent2},0px 1px 10px 0px ${transparent3}`,
        `0px 3px 5px -1px ${transparent1},0px 5px 8px 0px ${transparent2},0px 1px 14px 0px ${transparent3}`,
        `0px 3px 5px -1px ${transparent1},0px 6px 10px 0px ${transparent2},0px 1px 18px 0px ${transparent3}`,
        `0px 4px 5px -2px ${transparent1},0px 7px 10px 1px ${transparent2},0px 2px 16px 1px ${transparent3}`,
        `0px 5px 5px -3px ${transparent1},0px 8px 10px 1px ${transparent2},0px 3px 14px 2px ${transparent3}`,
        `0px 5px 6px -3px ${transparent1},0px 9px 12px 1px ${transparent2},0px 3px 16px 2px ${transparent3}`,
        `0px 6px 6px -3px ${transparent1},0px 10px 14px 1px ${transparent2},0px 4px 18px 3px ${transparent3}`,
        `0px 6px 7px -4px ${transparent1},0px 11px 15px 1px ${transparent2},0px 4px 20px 3px ${transparent3}`,
        `0px 7px 8px -4px ${transparent1},0px 12px 17px 2px ${transparent2},0px 5px 22px 4px ${transparent3}`,
        `0px 7px 8px -4px ${transparent1},0px 13px 19px 2px ${transparent2},0px 5px 24px 4px ${transparent3}`,
        `0px 7px 9px -4px ${transparent1},0px 14px 21px 2px ${transparent2},0px 5px 26px 4px ${transparent3}`,
        `0px 8px 9px -5px ${transparent1},0px 15px 22px 2px ${transparent2},0px 6px 28px 5px ${transparent3}`,
        `0px 8px 10px -5px ${transparent1},0px 16px 24px 2px ${transparent2},0px 6px 30px 5px ${transparent3}`,
        `0px 8px 11px -5px ${transparent1},0px 17px 26px 2px ${transparent2},0px 6px 32px 5px ${transparent3}`,
        `0px 9px 11px -5px ${transparent1},0px 18px 28px 2px ${transparent2},0px 7px 34px 6px ${transparent3}`,
        `0px 9px 12px -6px ${transparent1},0px 19px 29px 2px ${transparent2},0px 7px 36px 6px ${transparent3}`,
        `0px 10px 13px -6px ${transparent1},0px 20px 31px 3px ${transparent2},0px 8px 38px 7px ${transparent3}`,
        `0px 10px 13px -6px ${transparent1},0px 21px 33px 3px ${transparent2},0px 8px 40px 7px ${transparent3}`,
        `0px 10px 14px -6px ${transparent1},0px 22px 35px 3px ${transparent2},0px 8px 42px 7px ${transparent3}`,
        `0px 11px 14px -7px ${transparent1},0px 23px 36px 3px ${transparent2},0px 9px 44px 8px ${transparent3}`,
        `0px 11px 15px -7px ${transparent1},0px 24px 38px 3px ${transparent2},0px 9px 46px 8px ${transparent3}`, 
    ];
    return shadows;
};
const createCustomShadow = (color)=>({
        z1: `0 1px 2px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.24)}`,
        z4: `-4px 4px 24px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.08)}`,
        z8: `-8px 8px 24px -4px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.1)}`,
        z12: `-12px 12px 48px -4px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.12)}`,
        z16: `-16px 16px 56px -8px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.16)}`,
        z20: `-20px 20px 64px -8px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.2)}`,
        z24: `-24px 24px 72px -8px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.24)}`,
        primary: `0 8px 16px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(_palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.primary.main */ .Z.light.primary.main, 0.24)}`,
        secondary: `0 8px 16px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(_palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.secondary.main */ .Z.light.secondary.main, 0.24)}`,
        info: `0 8px 16px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(_palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.info.main */ .Z.light.info.main, 0.24)}`,
        success: `0 8px 16px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(_palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.success.main */ .Z.light.success.main, 0.24)}`,
        warning: `0 8px 16px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(_palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.warning.main */ .Z.light.warning.main, 0.24)}`,
        error: `0 8px 16px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(_palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.error.main */ .Z.light.error.main, 0.24)}`
    });
const customShadows = {
    light: createCustomShadow(LIGHT_MODE),
    dark: createCustomShadow(DARK_MODE)
};
const shadows = {
    light: createShadow(LIGHT_MODE),
    dark: createShadow(DARK_MODE)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shadows);


/***/ }),

/***/ 3795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9345);

const FONT_PRIMARY = "Nunito Sans, sans-serif";
const FONT_SECONDARY = "Ubuntu, sans-serif";
const typography = {
    fontFamily: FONT_PRIMARY,
    fontWeightSemiBold: 600,
    h1: {
        fontFamily: FONT_SECONDARY,
        fontWeight: 700,
        lineHeight: 80 / 64,
        fontSize: (0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(40),
        ...(0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .responsiveFontSizes */ .yE)({
            sm: 52,
            md: 58,
            lg: 64
        })
    },
    h2: {
        fontFamily: FONT_SECONDARY,
        fontWeight: 500,
        lineHeight: 64 / 48,
        fontSize: (0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(32),
        ...(0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .responsiveFontSizes */ .yE)({
            sm: 40,
            md: 44,
            lg: 48
        })
    },
    h3: {
        fontFamily: FONT_SECONDARY,
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: (0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(24),
        ...(0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .responsiveFontSizes */ .yE)({
            sm: 26,
            md: 30,
            lg: 32
        })
    },
    h4: {
        fontFamily: FONT_SECONDARY,
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: (0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(20),
        ...(0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .responsiveFontSizes */ .yE)({
            sm: 20,
            md: 24,
            lg: 24
        })
    },
    h5: {
        fontFamily: FONT_SECONDARY,
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: (0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(18),
        ...(0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .responsiveFontSizes */ .yE)({
            sm: 19,
            md: 20,
            lg: 20
        })
    },
    h6: {
        fontFamily: FONT_SECONDARY,
        fontWeight: 600,
        lineHeight: 28 / 18,
        fontSize: (0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(17),
        ...(0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .responsiveFontSizes */ .yE)({
            sm: 18,
            md: 18,
            lg: 18
        })
    },
    subtitle1: {
        fontWeight: 600,
        lineHeight: 28 / 16,
        fontSize: (0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(16)
    },
    subtitle2: {
        fontWeight: 600,
        lineHeight: 26 / 14,
        fontSize: (0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(14)
    },
    subtitle3: {
        fontWeight: 600,
        lineHeight: 24 / 13,
        fontSize: (0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(13)
    },
    body1: {
        lineHeight: 28 / 16,
        fontSize: (0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(16)
    },
    body2: {
        lineHeight: 26 / 14,
        fontSize: (0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(14)
    },
    body3: {
        lineHeight: 24 / 13,
        fontSize: (0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(13)
    },
    caption: {
        lineHeight: 20 / 12,
        fontSize: (0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(12)
    },
    overline: {
        fontWeight: 600,
        lineHeight: 20 / 12,
        fontSize: (0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(12),
        textTransform: "uppercase"
    },
    button: {
        fontWeight: 600,
        lineHeight: 24 / 14,
        fontSize: (0,src_utils_getFontValue__WEBPACK_IMPORTED_MODULE_0__/* .pxToRem */ .Q1)(14),
        textTransform: "capitalize"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typography);


/***/ }),

/***/ 1744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export basePath */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6704);

// config

// ----------------------------------------------------------------------
const basePath =  true ? src_config__WEBPACK_IMPORTED_MODULE_1__/* .HOST_API.production */ .E0.production : 0;
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: basePath
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (axiosInstance)));


/***/ }),

/***/ 8928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createGradient)
/* harmony export */ });
// ----------------------------------------------------------------------
function createGradient(color1, color2) {
    return `linear-gradient(to bottom, ${color1}, ${color2})`;
};


/***/ }),

/***/ 727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ cssStyles)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

function getDirection(value = "bottom") {
    return ({
        top: "to top",
        right: "to right",
        bottom: "to bottom",
        left: "to left"
    })[value];
}
function cssStyles(theme) {
    return {
        bgBlur: (props)=>{
            const color = props?.color || theme?.palette.background.default || "#000000";
            const blur = props?.blur || 6;
            const opacity = props?.opacity || 0.8;
            return {
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, opacity)
            };
        },
        bgGradient: (props)=>{
            const direction = getDirection(props?.direction);
            const startColor = props?.startColor || `${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#000000", 0)} 0%`;
            const endColor = props?.endColor || "#000000 75%";
            return {
                background: `linear-gradient(${direction}, ${startColor}, ${endColor});`
            };
        },
        bgImage: (props)=>{
            const url = props?.url || "https://zone-assets-api.vercel.app/assets/bg_gradient.jpg";
            const direction = getDirection(props?.direction);
            const startColor = props?.startColor || (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme?.palette.grey[900] || "#000000", 0.88);
            const endColor = props?.endColor || (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme?.palette.grey[900] || "#000000", 0.88);
            return {
                background: `linear-gradient(${direction}, ${startColor}, ${endColor}), url(${url})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
            };
        }
    };
};


/***/ }),

/***/ 3162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports fCurrency, fPercent, fNumber, fShortenNumber, fData */
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function fCurrency(number) {
    return numeral(number).format(Number.isInteger(number) ? "$0,0" : "$0,0.00");
}
function fPercent(number) {
    return numeral(number / 100).format("0.0%");
}
function fNumber(number) {
    return numeral(number).format();
}
function fShortenNumber(number) {
    return numeral(number).format("0.00a").replace(".00", "");
}
function fData(number) {
    return numeral(number).format("0.0 b");
}


/***/ }),

/***/ 5981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ colorPresets),
/* harmony export */   "Z": () => (/* binding */ getColorPresets)
/* harmony export */ });
/* harmony import */ var src_theme_palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8187);
// theme

// ----------------------------------------------------------------------
const presetsKey = {
    default: "default",
    blueOrange: "blueOrange",
    greenOrange: "greenOrange",
    purpleTeal: "purpleTeal",
    cyanYellow: "cyanYellow",
    pinkCyan: "pinkCyan"
};
const colorPresets = [
    // DEFAULT
    {
        name: presetsKey.default,
        primary: src_theme_palette__WEBPACK_IMPORTED_MODULE_0__/* ["default"].light.primary */ .Z.light.primary,
        secondary: src_theme_palette__WEBPACK_IMPORTED_MODULE_0__/* ["default"].light.secondary */ .Z.light.secondary
    },
    // PINK CYAN
    {
        name: presetsKey.pinkCyan,
        primary: {
            lighter: "#FEE7E4",
            light: "#FBAEB5",
            main: "#F2779A",
            dark: "#AE3B72",
            darker: "#741655",
            contrastText: src_theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        },
        secondary: {
            lighter: "#CAFDEB",
            light: "#61F4D9",
            main: "#00DCDA",
            dark: "#00849E",
            darker: "#004569",
            contrastText: src_theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        }
    },
    // CYAN YELLOW
    {
        name: presetsKey.cyanYellow,
        primary: {
            lighter: "#C8FAEC",
            light: "#5CE6D6",
            main: "#00A3AC",
            dark: "#00607B",
            darker: "#003252",
            contrastText: src_theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        },
        secondary: {
            lighter: "#FEF9DA",
            light: "#FEE992",
            main: "#FDD14A",
            dark: "#B68B25",
            darker: "#79540E",
            contrastText: src_theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.black */ .Y.black
        }
    },
    // PURPLE - TEAL
    {
        name: presetsKey.purpleTeal,
        primary: {
            lighter: "#EACCFF",
            light: "#B566FF",
            main: "#6E00FF",
            dark: "#3F00B7",
            darker: "#1F007A",
            contrastText: src_theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        },
        secondary: {
            lighter: "#CBFEFB",
            light: "#65F2FE",
            main: "#00C5FE",
            dark: "#0073B6",
            darker: "#003B79",
            contrastText: src_theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        }
    },
    // BLUE - ORANGE
    {
        name: presetsKey.blueOrange,
        primary: {
            lighter: "#CCEEFF",
            light: "#66BDFF",
            main: "#007AFF",
            dark: "#0046B7",
            darker: "#00237A",
            contrastText: src_theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        },
        secondary: {
            lighter: "#FFF3D8",
            light: "#FFD18B",
            main: "#FFA03F",
            dark: "#B75D1F",
            darker: "#7A2D0C",
            contrastText: src_theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.black */ .Y.black
        }
    },
    // GREEN - ORANGE
    {
        name: presetsKey.greenOrange,
        primary: {
            lighter: "#DBF7EE",
            light: "#8BD0C7",
            main: "#2D6365",
            dark: "#163E48",
            darker: "#082130",
            contrastText: src_theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        },
        secondary: {
            lighter: "#FEEFD5",
            light: "#FBC182",
            main: "#F37F31",
            dark: "#AE4318",
            darker: "#741B09",
            contrastText: src_theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        }
    }, 
];
// ----------------------------------------------------------------------
const getPreset = (presetsKey)=>colorPresets.filter((item)=>item.name === presetsKey)[0];
function getColorPresets(themeColorPresets) {
    let color;
    switch(themeColorPresets){
        // pinkCyan
        case presetsKey.pinkCyan:
            color = getPreset(presetsKey.pinkCyan);
            break;
        // cyanYellow
        case presetsKey.cyanYellow:
            color = getPreset(presetsKey.cyanYellow);
            break;
        // blueOrange
        case presetsKey.blueOrange:
            color = getPreset(presetsKey.blueOrange);
            break;
        // greenOrange
        case presetsKey.greenOrange:
            color = getPreset(presetsKey.greenOrange);
            break;
        // purpleTeal
        case presetsKey.purpleTeal:
            color = getPreset(presetsKey.purpleTeal);
            break;
        default:
            color = getPreset(presetsKey.default);
    }
    return color;
};


/***/ }),

/***/ 9345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q1": () => (/* binding */ pxToRem),
/* harmony export */   "yE": () => (/* binding */ responsiveFontSizes)
/* harmony export */ });
/* unused harmony exports default, remToPx */
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5102);
// material

// hooks

// ----------------------------------------------------------------------
function GetFontValue(variant) {
    const theme = useTheme();
    const breakpoints = useWidth();
    const key = theme.breakpoints.up(breakpoints === "xl" ? "lg" : breakpoints);
    const hasResponsive = variant === "h1" || variant === "h2" || variant === "h3" || variant === "h4" || variant === "h5" || variant === "h6";
    const getFont = hasResponsive && theme.typography[variant][key] ? theme.typography[variant][key] : theme.typography[variant];
    const fontSize = remToPx(getFont.fontSize);
    const lineHeight = Number(theme.typography[variant].lineHeight) * fontSize;
    const fontWeight = theme.typography[variant].fontWeight;
    const letterSpacing = theme.typography[variant].letterSpacing;
    return {
        fontSize,
        lineHeight,
        fontWeight,
        letterSpacing
    };
};
// ----------------------------------------------------------------------
function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
}
function pxToRem(value) {
    return `${value / 16}rem`;
}
function responsiveFontSizes({ sm , md , lg  }) {
    return {
        "@media (min-width:600px)": {
            fontSize: pxToRem(sm)
        },
        "@media (min-width:900px)": {
            fontSize: pxToRem(md)
        },
        "@media (min-width:1200px)": {
            fontSize: pxToRem(lg)
        }
    };
}
// ----------------------------------------------------------------------
function useWidth() {
    const theme = useTheme();
    const keys = [
        ...theme.breakpoints.keys
    ].reverse();
    return(// @ts-ignore not sure what is this
    keys.reduce((output, key)=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const matches = useResponsive("up", key);
        return !output && matches ? key : output;
    }, null) || "xs");
}


/***/ }),

/***/ 7020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-c67a75d1b6f99dc8.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/gfMdDWFaVLaCyab5tF7Ne/_buildManifest.js","static/gfMdDWFaVLaCyab5tF7Ne/_ssgManifest.js"],"rootMainFiles":[],"pages":{"/":["static/chunks/webpack-4faf860c995a2a85.js","static/chunks/framework-35a244ac51cb8401.js","static/chunks/main-633dc58b048e382c.js","static/chunks/pages/index-318c5b34489fdc38.js"],"/404":["static/chunks/webpack-4faf860c995a2a85.js","static/chunks/framework-35a244ac51cb8401.js","static/chunks/main-633dc58b048e382c.js","static/chunks/pages/404-a509810d3984b687.js"],"/_app":["static/chunks/webpack-4faf860c995a2a85.js","static/chunks/framework-35a244ac51cb8401.js","static/chunks/main-633dc58b048e382c.js","static/css/5ee728ebb8c00fad.css","static/chunks/pages/_app-52d8cd2e2b55881e.js"],"/_error":["static/chunks/webpack-4faf860c995a2a85.js","static/chunks/framework-35a244ac51cb8401.js","static/chunks/main-633dc58b048e382c.js","static/chunks/pages/_error-effe22be6ff34abe.js"],"/about-us":["static/chunks/webpack-4faf860c995a2a85.js","static/chunks/framework-35a244ac51cb8401.js","static/chunks/main-633dc58b048e382c.js","static/chunks/894-58f476f7dcd893b7.js","static/chunks/pages/about-us-decf07162060b03c.js"],"/membership":["static/chunks/webpack-4faf860c995a2a85.js","static/chunks/framework-35a244ac51cb8401.js","static/chunks/main-633dc58b048e382c.js","static/chunks/894-58f476f7dcd893b7.js","static/chunks/pages/membership-8ba14ed49aaffba7.js"],"/reconciliation":["static/chunks/webpack-4faf860c995a2a85.js","static/chunks/framework-35a244ac51cb8401.js","static/chunks/main-633dc58b048e382c.js","static/chunks/894-58f476f7dcd893b7.js","static/chunks/pages/reconciliation-714ce3ff1f08ea47.js"],"/what-we-do":["static/chunks/webpack-4faf860c995a2a85.js","static/chunks/framework-35a244ac51cb8401.js","static/chunks/main-633dc58b048e382c.js","static/chunks/894-58f476f7dcd893b7.js","static/chunks/pages/what-we-do-7e6dd439083b7f29.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 3978:
/***/ ((module) => {

module.exports = JSON.parse('{"../../node_modules/@blitzjs/rpc/dist/chunks/rpc.mjs -> debug":{"id":11227,"files":[]},"../../node_modules/@blitzjs/rpc/dist/index-browser.mjs -> debug":{"id":11227,"files":[]},"../core/components/animate/MotionLazyContainer.js -> ./features.js":{"id":69822,"files":["static/chunks/435.7bf275dbc0c97914.js","static/chunks/822.98c3893664debd7c.js"]},"../core/layouts/Layout.tsx -> ./footer/Footer":{"id":99804,"files":["static/chunks/804.76128588d35cd66e.js"]},"../core/layouts/Layout.tsx -> ./footer/FooterSimple":{"id":73442,"files":["static/chunks/442.073c8cf2dbe7cea6.js"]},"../core/layouts/Layout.tsx -> ./header/Header":{"id":16527,"files":["static/chunks/883.30836e85eec4a6bf.js","static/chunks/654.874439a4f6c0e573.js","static/chunks/527.ef395636e6504614.js"]},"../core/layouts/Layout.tsx -> ./header/HeaderSimple":{"id":45258,"files":["static/chunks/883.30836e85eec4a6bf.js","static/chunks/258.45543e85bd46c427.js"]}}');

/***/ }),

/***/ 9450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;