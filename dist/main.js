(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return require("sharp"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("canvas"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("electron/common"); } catch(e) {} }()));
	else if(typeof define === 'function' && define.amd)
		define(["sharp", "canvas", "electron/common"], factory);
	else if(typeof exports === 'object')
		exports["NyusNecroJobGauge"] = factory((function webpackLoadOptionalExternalModule() { try { return require("sharp"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("canvas"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("electron/common"); } catch(e) {} }()));
	else
		root["NyusNecroJobGauge"] = factory(root["sharp"], root["canvas"], root["electron/common"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_sharp__, __WEBPACK_EXTERNAL_MODULE_canvas__, __WEBPACK_EXTERNAL_MODULE_electron_common__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./asset/data/Bloated.data.png":
/*!*************************************!*\
  !*** ./asset/data/Bloated.data.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAASCSURBVDhPrdNpU5NXGMZxPktHQZQKIYGAEMGplE1CBQXRCgpBiEUNKIQ1LNIQ9p3EQEJIIEBUFhegSFxGxAUcLdNal1pHxRY7WusLZ7Sd+u8jvnj8AL64Xp7fXOfc9/FY8PDgc2YFTFc62BPXQ3xkB7FftdGedZ5jhhEGbuTQciqehtNRNExE0ur+GsOpSHbmb2XjF1oOpnTRYNQyf9/MWMU1Edwb04sqZghVlIs9kXaKD/TROLKN4j452h7px1j8Ke7dIIAxaK1x7N1aTI26m4V7RiaHpuiPeCqCqign6vAJ9ivcaBPH0NnCKLEFUmgNWEmx1Z8iASzqlVLSK6PMrqAgN4fp2Tqm3TZMwQ8YVP4ughlRg2g2XiBfcQFd13YBCBIaySi0SCn4AFmlQruP0Vr9VuDSY2G4LtdTGXQB4wcw4YkIqrcNURJxmcbd08KhUAp6fKmbDODGu1iqBmVU2CRUOqRU2GVY5xV0XgtewTNiCiiXX6R/212ma++IYEuum07lbax6i3C1ABrHZRx/HMrwMwXNp+Toh2QcaZOiH5aTkruKoi4/Su2BHKmJpXrLGYZz55nQ3xLB8pxhutVXMFd2oOsLoHLAlx1qL5Jz1pCy35NqZyDZpb5UO0JJVK0hU/clRwW81qWgQWOkM/karvpzIthfeZGx8tv0lU5RNuAvTNWXpCwvkrLXoNFLUOvWE524Cp0lhB37BbDUB8NJOQbnZszRD7DHP8FV+KMIjtdeZ679VybKblAzKsc4u5HUglXsPOQl7GAgBpeEyITV7CtZy9Z9nmSWedE4GUynMwfT5nuMZt5n9OBjEbTs/ImpvCUcyYtUDwTRdimEPJM3Na5gFt7Gc+ZJBGlH/Chu9sexGE6paz2mqwqsNgPW6CVGs54zqvpbBDsi73Es4hEd8qe0fOti9k0yMy9iaDsTzDu+Y+TOJjIO++J+pGTybjhX/4nHPBdEa1UdRz1/oc77Ia3STxpaYx7SLXtFl+8ypgDhPdyFvH1fgHFSTv+VIIpafUhM9abK4oum2Yub/ybRcTaEqf52rpvncOt+ZjDupQj2KpfoDX2NWfoXRskyXRH3GV+MpmFMQo2wHkVt6wVwLQUt67Bc3ID7ZaTwh5MZqhjH3TXDzcUmbi99/0nDqGX6wl9jCXyFyf9PLOHPsVvzKLH4oReWOq9JSsJuT3INPlQ6fbj0KprmtjT6j45QpuojPaOWprFMEXRq5nEkLWMJeUmX4hk27QKDdgNlVgkjVzZxuFGGcvdqZh+GozasZvyxApMllf6GEXKy64lL0aDcpRHBvDQn2qBZysNvUVs+g8N2lpH6kxjPy3lDMsfvbiBVs47/2ILWvA7zvIQqw3ZGT/ewK7WEuB0aEtLzRTDWu5sk6TBZKS4sJ4ZRp5rp2Xse+3wYr9+r+A0lL4gGfqDqhB8tM35kZ8dybq6FQ9XalXaNFr0IfiOzkRTmJH2PWZhkO3Ge9TSknGb4VgJP/8gVoHwhOiGztM9K0J+VkKaKZchko8VVzLf5Byhv+qTh54sH/wMdOr8/XUBZEQAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./asset/data/Necrosis.data.png":
/*!**************************************!*\
  !*** ./asset/data/Necrosis.data.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABsAAAAPCAYAAAAVk7TYAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAASuSURBVDhPvdPbT9N3GMfx/QeAWAwqcirQE4XSQo+0pUcpLVAKUlvAA1BWwAPKoUiGymmA5aCACDIQxaHiQnaIu1mWJctmsmS73JW72uX+gy3Le9+RLZD9Abt4rn4Xr9/neT7f9yIPM/m/5gCzSGcw5t1Bn5OgIncAXfYNyrKvoTlzlYmBGNsLCbaXR3i2Pc7a5m2mV/rpnonROhzG3mikKmrB1evB+b4Dc1CP1lFCmZhSezGF5YVkF+ccYpXSJKa8CQGOYsgdoSI7IcBBFKfqWL3Tw2ayn625QT5+MsX603Fm1ofoTIRxR63Y26wEJhvxTQTxDHhwd1RiO2/EFjairylDZVaQq8k/ii2ImcWcPynAuwIUKXNHUWRZWB6JsXYnzuZcP3sv5nn1Kknf2CUiVwJ4+73ULkbx3Y/iHfTi6TDjumzCedFEVYsJY60Olek/mL1wGVvhP6B0GpP0Q/QiZbPHz+14iKHLAbaWEuy9nGfx0RC3knGCnR5ccQeBhQi2PjeGei2WsB5rkwFTXTl6nxadu5QCXSH5ZdJDzCl/hF22LNAH2AoWxQ2TGPLHaQ84SLT76Q07SXQG2dkco/eDMDcm26lqMKLts6H2liCzyDkpgNKzZQeAIaBFY1cj08sEVkCRuNshpvwIl3wDl2wdR+FDrNL7YqWzVGksNLvLcVcoCDm0jMTqqGu3E4q7MTpLUBrE8a1y0tYipKw2k3begCqgw+DXUegWP2EoQmVRojarDjGf6jlnFTt45E9wFq2LdA9EulmKs8Sh9SoSG0lag1WM3bpAtNuLI2rEFNRxujyfFLHCU+8mKPhumNRGPcdEA82ddk62ViDzlaJwFKO2HsHqil/hU77Aq3iGU6SziXVWSu9RkitqLbDkwji7SyPMfthF71Aj3gsW0UIT6ZNWJA+b2f3zdzR/fE/ehJ+MvDMUXK8io8PA6boS0oNinWeLD7Gg+hP8ypci3TYO+WPsRUsi3RyaPCthdwURr54vt6a4N9nBteFz+Dqs1Io3ldWjF8ns5P+6QNE3A5wwKjkhz0EyX0dql/jWbSCtUY20+kiyBvU+/uIXeFTbuBUbojArWIsW0Msd3O1p4unMdV6vJHg83UN8uJHmgQAh8Yi9w9Ucu1pFWls5aS4BmeVIxqpJXaoldaWG9L0WUmqUSGoUh1h96b5Y5R41qh1cyk2qFGsH7TQpnCQH2/h6N8mewJ6sjNI7GqZhvIHozVr8CR/yT1s49UOMzLednF4XJVkPkbYZRPK2h8xQKSnOItJ8R5KFNJ9Rr35NQLVLtVilRzTTIVvDqHDx6G6c5/P9jA+0UhMws7E1TedKF+bVRurnwsi+iCL7qo2iby+R/dMVJO+GyPh5kKw1cT9NLscjBtJD4hT/Yk2aNzSU7BNQv6RGKZopf4pbtiEKYmPqRpTl0RiTfRG8Dg3mShW117yUbTWi3I+ifHMRqYCyfhlG8tsiGbVaJLp8JGaRaMBLWtzJ8fIjycJlbwT4uSjKa/x/pzvA1tFmd5GInePmhWouBy0E3Tr0osaVwXKsyyGC95pQ77SQ+2McyWqE4+JuEnUWku5K0qf8pMcEZFMhyckSWCZ/AVSOJuPEt+4fAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./asset/data/Putrid_Zombie-ability-gcd.data.png":
/*!*******************************************************!*\
  !*** ./asset/data/Putrid_Zombie-ability-gcd.data.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAsAAAAPCAYAAAAyPTUwAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAACfSURBVChTldBBFsMgCARQBdHk/gemYBwlJu17XczKP4gmbqcSF81EPSztCleLKNNK4sNwkYANOS4Dh0IqhlkWJkcT36cnYjaUNWeLT67HwFjFAtwRYDPoeBZ2PK7vuzpGAdO9EDHZzv7Qx2QUgLlWLafBjrcCSsD+G7LjGC8Ay45nCYnYYP/rtziMD/yKwq4L4yo/DH/6lsT0G8T8gUU/xRqs7RHdfeUAAAAASUVORK5CYII=")

/***/ }),

/***/ "./asset/data/Putrid_Zombie-ability.data.png":
/*!***************************************************!*\
  !*** ./asset/data/Putrid_Zombie-ability.data.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAImSURBVChTPZHfS9NhGMV3U4laadQcImw2N2uWGLm5ue/e77vNrMDqUoLoxrpREy11JsrILNIGEYZBRVBKQWFkvyRNwQxvyrJSWub8EUZFYfoXfHqn0cW5O5/nnIdj2BNd5ODoN/LKwyQZt5BsMpF77AIi9ATt8E28gQjuwlZc9lryLVUYSmLLmPILSNiUyrqNG1ifloboGEFv6UeUdaOVdFAYvIgru5588wkM6XlOElJTWKvMicbNyDuT6LfH0SPDiKr7eEuv4zlwGdc2BVgUkGK2kJSRQWK6iV3NncieT+h3P6JfGkHU9aKpFG/pNQq2N+CMV1pjNJKck8POyjr2Dc0iH0aRKkEqQG98iq+6B29ZF25HIy5LjUrwBXG3X+Ho1CJ7X86jP/+CfDCBvDWGuDqKaBtEq+nBEwcyT2FwhNs5PrFA+fQf9quEOCD6PiOeRdF7JxH33uOLDOGxh1aBQ29jVEW/UzOzTMnIV+RADP2F0sC0koL7p/B1v8FjrVOAqlQxu0RlbInSD7/xv1pAV9Cq5hHDc4hHk2hHbuDZWktB5kkMxXHju1/IsZ/or3+gjypocAbxOIoIq6ezQhRa63GrOitPy6E5ZN80/q5x/E19BIo78dvC6PZmNNvpFbPHunrdaanGUJQXoSi3jaCjlUB2i9IZpD2Mz9aEltXwr7syZ1bjNKsdgjvOE3CcI5h9FqnMQpmFuu6zNeK1hv53j4+221zBXx3zXFAv+/7YAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./asset/data/Putrid_Zombie.data.png":
/*!*******************************************!*\
  !*** ./asset/data/Putrid_Zombie.data.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect.imageDataFromBase64)("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")

/***/ }),

/***/ "./asset/data/Residual_Soul.data.png":
/*!*******************************************!*\
  !*** ./asset/data/Residual_Soul.data.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect.imageDataFromBase64)("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")

/***/ }),

/***/ "./asset/data/Skeleton_Warrior-ability-gcd.data.png":
/*!**********************************************************!*\
  !*** ./asset/data/Skeleton_Warrior-ability-gcd.data.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAGSSURBVChTXZLZcqswEEQpsWlDgLEdwNhm3+L7/5/Xd6RUcJKHLmA0R90a4SXXHsmlQ/LRIx82yKwEC0Kw9RNs2hHVD2hRQfELZHxCrDQ8U4/Q5YBk3pGNGxhjCMwZMdWjqkfU/IUMPL19IqLmeH+BheTAfChy5WWHiBS0tKGoCbo6SCQpPPX6B3+anIMVzy5Qt8FBcdki6AmS98MpFApeIMQBWPn9AtHN5NZCkvxhhMrekHMyVAxM8gbXHXxaoMhFkBit81NzxHNOfpbBvF7QzR1Ma7CNJjavUG0H8fyC4ssbCriA53bPM8iuR7is8AkKlw3pnZweTzA6U3S9QYqzg9z0jljf8hlCkyEnKL09HCSL+oAiG8821lWD9jnguuxQ1Q1BUVK8GaIhl8bGe0L8dHq0I+Zxx0i3X5GSbgEnILrPCBt6lj2k+iCgeDvV44ozjdk2axq1fk4QdE+C7klqauZfzd9y0zNFA20ojqLpcBvhd9NfRZL+PUGHtjllegLXqXu3NfttZZukyd1ayCWSvMB/OQbakshru44AAAAASUVORK5CYII=")

/***/ }),

/***/ "./asset/data/Skeleton_Warrior-ability.data.png":
/*!******************************************************!*\
  !*** ./asset/data/Skeleton_Warrior-ability.data.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAJfSURBVChTLZFdLNVxGMfPzfn/z6HJRLZkCSdvhdP/RF5CpKWyXHipNltCLkzR0lhLkaxF2VqpdNa5UpshzkpE5V1ICy2VxTKRl4veXzbbpx/HxbPn5vk83+/zfVSrUtOJN48Tc+UF4UUdRI3Mkdj3GVnWYL8/E/fybpxLW3G6dZ+dvpcJ8shBcU1BZVNpIqlnksjJbzj3TKGb+4F2rSMajRWh51rxLmrGpaQRO3Mbu/TlhHrlY3A9iurwzE/iFv6y/fc/rF+9FEoyaklmU1IuwRUd+Fx4hFuxGduWdqIDTAR5nhRgGqrkr4sk/Fpkja+vBVKrl7tN6yj65iGh2oByvh7rrm4C4+8S7JmLwS0Vlbb4ImGjH4nt7MVuz27UApI1WqTxL3gMvCO00Iy+6AHarh68Uo2EeC9ZFYpLIUhi2Coxgdjvfwg3mtBERCJPL+A8PEFIXSObq83Ind3oTt0RYJ7lRsnFB7XWGkmSkA8dJKCpBcexcaym51k3OkWcqQ6/e7Vonnaw4fQ1tvlmoWwUqa4+W7BsT62WlksSwUjChcZKi0NsPMl364irqEJ+8hzlWBmK/rjlHersHAGKmwRQfuk2DbWd5H+YJ6T0BrbphQTWjeBf2YaTsR9ddjV6vxMW0P3qTTR29lTV9zLcN0vfwCylgzNEPX6Ph4CcTK9xMA6xvqiFrYFnMLinW8Cs/k+k9Y1T1j1B1rMxopveEvnwDTtqBvG/3s6WkmaUiAIMHhko4g2KCEZxPYLqQFYNezOMxKQbCdtXQmBQHgE+mRh0YrNuZdAtbaUvQSki1RT+Az2DbQbDGVb8AAAAAElFTkSuQmCC")

/***/ }),

/***/ "./asset/data/Skeleton_Warrior.data.png":
/*!**********************************************!*\
  !*** ./asset/data/Skeleton_Warrior.data.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect.imageDataFromBase64)("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")

/***/ }),

/***/ "./asset/data/Vengeful_Ghost-ability-gcd.data.png":
/*!********************************************************!*\
  !*** ./asset/data/Vengeful_Ghost-ability-gcd.data.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAHvSURBVDhPZZLbsqowEER92BBIwk0BuchdEHD//+/16US0rH0eukJR02umJzmJsoMoWnh5BScpXlIxnOCMHy/Ejx/CjTL49QKvmSHDCtLLIN0UQoU4edeagB5ecYMgxD0XiOsdTpTC0QmBNOc9/GqGV0+Qcf0BuL4ygAZe2UJUFGHupURSbwgoJ+U0aQnJ7n4xsm6ATG4E5N8TsHPdQ9yoooGbVgjbDap7wB82+Oa8zQQMVvL8DdA4iQPg3gYITuJwItnv8PsVYtrgjSt8k50T+GaCSwN1AGwEkRdwOb5bddwD43R3eHcChtWaFSFqeEBWExQnUJf2AGSvCJqjy4ZLbDoogsJpRvjYoQ9jOK1Wql2guESVsc4AhAEwQjIuiIcJEXUZ78iWFZf1SdMGTUBEs5EeH9DdAl2NH4CNkLNb+dhQrjvqjdqfuG5PRHfeBI0BQea0AKN2hqL5NQEjVNsvqv0XBU9jzNg9WZ4ICNBGZhIrQnrG4DUagJGNELHYKFx2BDOzf8sAuEjds/N1gBY5jUbmIWVwTARLH49CI+bWXJg1BDVNV2jvehhf5jfA7iDwSvyvgqa3CCDk0/ktvgM/iP4Cio8+Zgv42z21EirgU9YR/DCGjM5W5tts9/1PJ3xxUsPU2doghorP9ltFCf4BNhwogV/EKpQAAAAASUVORK5CYII=")

/***/ }),

/***/ "./asset/data/Vengeful_Ghost-ability.data.png":
/*!****************************************************!*\
  !*** ./asset/data/Vengeful_Ghost-ability.data.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAANLSURBVDhPPZLrT9NXHIf7P7gxZDB6v7kIpRYslLY/KgwNM4PMJcsYZm4kIsNxUZAGbChSLqtBEFGzGg1C8G64CK4bIDCWTTHqdOpELFRkTDDTLXv97FSWvXhykpPzec75nHxlGt95FHXn0FS3srbIT3TJQeJKDvFmRgFv2HJRHujl7R0+oqXtmNofoDt1kyTpAGb1V5jkRci0nm6UjRdQ159BW91GTEEdMZ96ibJt462sz1izLps1pveJzSvH1HEPXZcQbPFj0ZZjjv8Smd59EkNNJ6qGS2i9ATRVh4j93Me2I8+J2VpMlDOfqPwK1lf3k9g2jaFjgqQP20nW7WWDfDcytXiBvuYk2uZeVP5elLVHiSts4pPDT3F1hoku9hK9uxFL+10SG0YxtgxjLjhGsr6SDfElyIzV7ej3f4PySB+K432ovCeI3dVKTs8zbGcfkTD4jHfPPSTx+A1M9VdZ7xvEvCNAskEI5EIQ88Ue1PuPoTh6GXlgEE1TD2tru7AMLGPqf4x6PIw+GCLh1A3MviCJjcNYdnaRYtiHJVIhblcNKrePd/w9xLVdwFgn6pydwnh9BdOVOYzfh0idDGMb+g1L2wQp3mHSCrvZaHSTLC9DlhAYwB64RFJXP7oTF7G1drNl7Bab76/gvBYm7dsZsidCYu8x1jO3Se2YxFZ2EWtEoKhAtnnqAfkjd/ho6Ae2Dk1SFLxO2d0QhbMvyBmfRxqeIW/8CbkCKTiD/fwd0v2jWLVVq4Kds89xzyzTdD9M0+zvHJ5foWPpFTXhP8n9eRHX2ByZE/O4roVwRATBR6R3T2NV7RUCUaFy4SX+xb84uPQPvoW/8cy/onT2JR/fe8GmnxaRpp7iEH/gmJzHPj6Hve9XbPkBrMo9pCjKkeWKg3mCDwQ5v6yQdWsZ6eYfOKeXcET4cQHHyBPsAw+xewZJV1eRqqpko7Ji9ROlMdEzwqhgZA7puxDSlRmk07eRaq+SkdWJpPHg0NZi01S/DltVq7db5KXIsg0tvGf4WiBWYwtZ65rJNDbi0jeQofMK6nBqPaRrarCp9/3XXYQVpVjixRxkGZuJkGloeh3cZGjAFUFXj1OE7SJsF7ena9ykqar+7x4ZInN8Mf8Ce1E3y8ox0h8AAAAASUVORK5CYII=")

/***/ }),

/***/ "./asset/data/Vengeful_Ghost.data.png":
/*!********************************************!*\
  !*** ./asset/data/Vengeful_Ghost.data.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect.imageDataFromBase64)("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")

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./css/jobgauge.css":
/*!*****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/jobgauge.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/resource/gauge-bg.png */ "./asset/resource/gauge-bg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/resource/skeleton-conjure.png */ "./asset/resource/skeleton-conjure.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/resource/zombie-conjure.png */ "./asset/resource/zombie-conjure.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/resource/ghost-conjure.png */ "./asset/resource/ghost-conjure.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/resource/bloat-bg-desat.png */ "./asset/resource/bloat-bg-desat.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/resource/bloat-bg.png */ "./asset/resource/bloat-bg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/resource/nis-imgbutton.png */ "./asset/resource/nis-imgbutton.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! data:font/opentype;base64,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 */ "data:font/opentype;base64,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"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --soul-bg-color:#52f9fa;
  --necrosis-default-bg-color:#9205e4;
  --necrosis-freecast-bg-color:#FFaf88;
  --necrosis-capped-bg-color:#FF0000;
  --bloat-notch-color:#FF0000;
}

body {
  background-color: #0F0F0F;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  color: #FFFFFF;
  overflow: hidden;
  margin: 0;
}

#Settings {
  display: none;
  background-color: #0f0f0f;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  color: #F1F1F1;
  position: absolute;
  width: 100%;
  height: 60%;
  z-index: 99;
  bottom: 0;
  left: 0;
  overflow-y: auto;
}

#Settings.visible {
  display: block;
}

#Settings .container {
  padding: 0 1rem 1rem;
}

#RevertDefaultColors {
  margin-top: 1.5rem;
}

#SettingsButton {
  position: absolute;
  bottom: 3px;
  right: 3px;
  z-index: 99;
  text-align: center;
  color: #c49431;
  font-size: 1.1rem;
}

#SettingsButton span {
  position: relative;
  bottom: 5px;
}

#SettingsButton.ghost {
  opacity: 0;
  transition: .3s ease 0s;
}

#SettingsButton.ghost:hover {
  opacity: 1;
}

#JobGauge {
  --scale: 100;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  transform: scale(calc(var(--scale) / 100));
  transform-origin: top;
}

#Conjures {
  --scale: 100;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  transform: scale(calc(var(--scale) / 100));
  margin-bottom: -.25rem;
  transform-origin: top;
}

#Conjures .conjure {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin: 2px;
  overflow: hidden;
  position: relative;
  border: solid 2px black;
}

#Conjures .conjure.active-timer::before {
  z-index: 3;
  font-family: 'trajan-pro-3', sans-serif;
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 14px;
  width: 90%;
  height: 100%;
  color: #FFFFFF;
  text-shadow: -1px -1px 0px #010101, -1px 1px 0px #010101, 1px -1px 0px #010101, 1px 1px 0px #010101;
  opacity: .95;
}

#Conjures .conjure.active.active-timer:not(.forced-active)::before {
  content: attr(data-timer);
}

#Conjures .conjure.active-timer.forced-active::before {
  content: attr(data-remaining);
}

#Conjures .conjure::after {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  content: '';
  border-radius: 50%;
}

.skeleton::after {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-position: 50% 50%;
}

.zombie::after {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-position: 50% 10%;
}

.ghost::after {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-position: 50% 50%;
}

.conjure:not(.active)::after {
  filter: grayscale(1);
  opacity: .65;
}

.conjure.forced-active::after {
  filter: none;
  opacity: 1;
}

#Souls {
  --scale: 100;
  width: 85%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0;
  padding: .65rem 0;
  transform: scale(calc(var(--scale) / 100));
  transform-origin: top;
}

#Souls .soul {
  background-color: var(--soul-bg-color);
  border-radius: 50%;
  width: 16px;
  height: 16px;
  margin: 0 .25rem;
  position: relative;
  border: solid 1px #FFFFFF;
}

#Souls[data-souls="0"] .soul {
  opacity: .3;
  background-color: #FFF;
}

#Souls[data-souls="1"] .soul:nth-child(n+2) {
  opacity: .3;
  background-color: #FFF;
}

#Souls[data-souls="2"] .soul:nth-child(n+3) {
  opacity: .3;
  background-color: #FFF;
}

#Souls[data-souls="3"] .soul:nth-child(n+4) {
  opacity: .3;
  background-color: #FFF;
}

#Souls[data-souls="4"] .soul:nth-child(n+5) {
  opacity: .3;
  background-color: #FFF;
}

#Souls[data-souls="5"] .soul {
  opacity: 1;
}

#Souls.t90 .soul:nth-child(n+4) {
  display: none;
}

#Bloat {
  --timer: 0;
  --scale: 100;
  min-width: 200px;
  height: 20px;
  background-color: #000;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  position: relative;
  transform: scale(calc(var(--scale) / 100));
  transform-origin: top;
}

#Bloat::before {
  background-color: #7a9f33;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
  position: absolute;
  height: 20px;
  top: 0;
  left: 0;
  z-index: 2;
  content: '';
  display: flex;
  flex-direction: row-reverse;
  opacity: .8;
  transition: .15s ease-in-out 0s;
  width: calc((var(--timer) / 0.6)  * 3.33%);
}

#Bloat::after {
  content: attr(data-timer);
  position: absolute;
  right: 5px;
  font-size: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #FFF;
  z-index: 3;
  font-family: 'trajan-pro-3', sans-serif;
  text-shadow: -1px -1px 1px black, -1px 1px 1px black, 1px -1px 1px black, 1px 1px 1px black;
}

#Notches {
  width: 100%;
  list-style:none;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
}

#Notches .notch {
  width: 2px;
  height: 8px;
  background-color: var(--bloat-notch-color);
  position: relative;
  z-index: 3;
  opacity: .5;
  margin-right: calc(10% - 2px);
}

#Necrosis {
  --scale: 100;
  min-width: 235px;
  width: 85%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0;
  padding: .65rem 0;
  transform: scale(calc(var(--scale) / 100));
  transform-origin: top;
}

#Necrosis > ul {
  padding: 0 1rem;
  position: relative;
  list-style: none;
}

#Necrosis.single > ul li:nth-child(2) {
  display: none;
}

#Necrosis ul .stack {
  position: relative;
  height: 18px;
  list-style-type: none;
}

#Necrosis .stack::before {
  display: block;
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  border: solid 1px #010101;
  background-color: var(--necrosis-default-bg-color);
  width: 12px;
  height: 12px;
}

#Necrosis[data-stacks="0"] .stack::before {
  opacity: .3;
  background-color: #FFF;
}

#Necrosis[data-stacks="2"] ul:nth-child(n+2) .stack::before {
  opacity: .3;
  background-color: #FFF;
}

#Necrosis[data-stacks="4"] ul:nth-child(n+3) .stack::before {
  opacity: .3;
  background-color: #FFF;
}

#Necrosis[data-stacks="6"] ul:nth-child(n+4) .stack::before {
  opacity: .3;
  background-color: #FFF;
}

#Necrosis[data-stacks="8"] ul:nth-child(n+5) .stack::before {
  opacity: .3;
  background-color: #FFF;
}

#Necrosis[data-stacks="10"] ul:nth-child(n+6) .stack::before {
  opacity: .3;
  background-color: #FFF;
}

#Necrosis[data-stacks="12"] ul:nth-child(n) .stack::before {
  opacity: 1;
}

#Necrosis[data-stacks="6"] .stack::before,
#Necrosis[data-stacks="8"] .stack::before,
#Necrosis[data-stacks="10"] .stack::before {
  background-color: var(--necrosis-freecast-bg-color);
}

#Necrosis[data-stacks="12"] .stack::before {
  background-color: var(--necrosis-capped-bg-color);
}

h3 {
  margin-bottom: 0;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

#Settings .setting {
  margin-bottom: .65rem;
}

input[type="color"] {
  margin-right: .5rem;
  width: 21px;
  height: 24px;
  background-color: transparent;
  padding: 0;
  border: none;
}

input[type="checkbox"] {
  margin-right: .5rem;
}

input[type="color"]:hover {
  cursor: pointer;
}

.nisimgbutton {
    width: 20px;
    height: 20px;
    border: 3px solid #212B2D;
    box-sizing: border-box;
    border-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) 3 fill;
    cursor: pointer;
}

.nisimgbutton:hover {
    filter: brightness(1.2);
}

/*font stolen from jagex*/
@font-face{
	font-family:'trajan-pro-3';
	src:url(${___CSS_LOADER_URL_REPLACEMENT_7___});
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./css/jobgauge.css":
/*!**************************!*\
  !*** ./css/jobgauge.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_jobgauge_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./jobgauge.css */ "../node_modules/css-loader/dist/cjs.js!./css/jobgauge.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_jobgauge_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_jobgauge_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_jobgauge_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_jobgauge_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "data:font/opentype;base64,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":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:font/opentype;base64,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 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:font/opentype;base64,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";

/***/ }),

/***/ "./appconfig.json":
/*!************************!*\
  !*** ./appconfig.json ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "appconfig.json";

/***/ }),

/***/ "./asset/resource/bloat-bg-desat.png":
/*!*******************************************!*\
  !*** ./asset/resource/bloat-bg-desat.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bloat-bg-desat.png";

/***/ }),

/***/ "./asset/resource/bloat-bg.png":
/*!*************************************!*\
  !*** ./asset/resource/bloat-bg.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bloat-bg.png";

/***/ }),

/***/ "./asset/resource/gauge-bg.png":
/*!*************************************!*\
  !*** ./asset/resource/gauge-bg.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "gauge-bg.png";

/***/ }),

/***/ "./asset/resource/ghost-conjure.png":
/*!******************************************!*\
  !*** ./asset/resource/ghost-conjure.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ghost-conjure.png";

/***/ }),

/***/ "./asset/resource/nis-imgbutton.png":
/*!******************************************!*\
  !*** ./asset/resource/nis-imgbutton.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "nis-imgbutton.png";

/***/ }),

/***/ "./asset/resource/skeleton-conjure.png":
/*!*********************************************!*\
  !*** ./asset/resource/skeleton-conjure.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "skeleton-conjure.png";

/***/ }),

/***/ "./asset/resource/zombie-conjure.png":
/*!*******************************************!*\
  !*** ./asset/resource/zombie-conjure.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "zombie-conjure.png";

/***/ }),

/***/ "./icon.png":
/*!******************!*\
  !*** ./icon.png ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon.png";

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "index.html";

/***/ }),

/***/ "canvas":
/*!*************************!*\
  !*** external "canvas" ***!
  \*************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_canvas__ === 'undefined') { var e = new Error("Cannot find module 'canvas'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_canvas__;

/***/ }),

/***/ "electron/common":
/*!**********************************!*\
  !*** external "electron/common" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_electron_common__ === 'undefined') { var e = new Error("Cannot find module 'electron/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_electron_common__;

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_sharp__ === 'undefined') { var e = new Error("Cannot find module 'sharp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_sharp__;

/***/ }),

/***/ "../node_modules/alt1/dist/base/index.js":
/*!***********************************************!*\
  !*** ../node_modules/alt1/dist/base/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! sharp */ "sharp"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! canvas */ "canvas"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! electron/common */ "electron/common"); } catch(e) {} }()));
	else {}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_sharp__, __WEBPACK_EXTERNAL_MODULE_canvas__, __WEBPACK_EXTERNAL_MODULE_electron_common__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base/alt1api.ts":
/*!*****************************!*\
  !*** ./src/base/alt1api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/base/declarations.ts":
/*!**********************************!*\
  !*** ./src/base/declarations.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/base/imagedata-extensions.ts":
/*!******************************************!*\
  !*** ./src/base/imagedata-extensions.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_2062__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageData = void 0;
const a1lib = __importStar(__nested_webpack_require_2062__(/*! ./index */ "./src/base/index.ts"));
const nodeimports = __importStar(__nested_webpack_require_2062__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
// //TODO revamp this madness a bit?
// (function () {
// 	var globalvar = (typeof self != "undefined" ? self : (typeof (global as any) != "undefined" ? (global as any) : null)) as any;
// 	//use the node-canvas version when on node
// 	if (typeof globalvar.ImageData == "undefined") {
// 		let nodecnv = requireNodeCanvas();
// 		globalvar.ImageData = nodecnv.ImageData;
// 	}
// 	var fill = typeof globalvar.ImageData == "undefined";
// 	//should never be reach anymore
// 	var constr = function (this: any) {
// 		var i = 0;
// 		var data = (arguments[i] instanceof Uint8ClampedArray ? arguments[i++] : null);
// 		var width = arguments[i++];
// 		var height = arguments[i++];
// 		if (fill) {
// 			if (!data) { data = new Uint8ClampedArray(width * height * 4); }
// 			this.width = width;
// 			this.height = height;
// 			this.data = data;
// 		}
// 		else if (oldconstr) {
// 			return (data ? new oldconstr(data, width, height) : new oldconstr(width, height));
// 		} else {
// 			var canvas = document.createElement('canvas');
// 			canvas.width = width;
// 			canvas.height = height;
// 			var ctx = canvas.getContext("2d")!;
// 			var imageData = ctx.createImageData(width, height);
// 			if (data) { imageData.data.set(data); }
// 			return imageData;
// 		}
// 	}
// 	var oldconstr = globalvar.ImageData;
// 	if (typeof document != "undefined") {
// 		try {
// 			new oldconstr(1, 1);
// 		} catch (e) {
// 			//direct constructor call not allowed in ie
// 			oldconstr = null;
// 		}
// 	}
// 	if (!fill) { constr.prototype = globalvar.ImageData.prototype; }
// 	globalvar.ImageData = constr;
// 	ImageData = constr as any;
// })();
(function () {
    var globalvar = (typeof self != "undefined" ? self : (typeof __nested_webpack_require_2062__.g != "undefined" ? __nested_webpack_require_2062__.g : null));
    var filltype = typeof globalvar.ImageData == "undefined" || typeof globalvar.document == "undefined";
    var fillconstr = filltype;
    if (!filltype) {
        var oldconstr = globalvar.ImageData;
        try {
            let data = new Uint8ClampedArray(4);
            data[0] = 1;
            let a = new globalvar.ImageData(data, 1, 1);
            fillconstr = a.data[0] != 1;
        }
        catch (e) {
            fillconstr = true;
        }
    }
    if (fillconstr) {
        var constr = function ImageDataShim() {
            var i = 0;
            var data = (arguments[i] instanceof Uint8ClampedArray ? arguments[i++] : null);
            var width = arguments[i++];
            var height = arguments[i++];
            if (filltype) {
                if (!data) {
                    data = new Uint8ClampedArray(width * height * 4);
                }
                this.width = width;
                this.height = height;
                this.data = data;
            }
            else if (fillconstr) {
                //WARNING This branch of code does not use the same pixel data backing store
                //(problem with wasm, however all wasm browser have a native constructor (unless asm.js is used))
                var canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext("2d");
                var imageData = ctx.createImageData(width, height);
                if (data) {
                    imageData.data.set(data);
                }
                return imageData;
            }
            // else {
            // 	//oh no...
            // 	//we need this monstrocity in order to call the native constructor with variable number of args
            // 	//when es5 transpile is enable (that strips the spread operator)
            // 	return new (Function.prototype.bind.apply(oldconstr, [null,...arguments]));
            // }
        };
        if (!filltype) {
            constr.prototype = globalvar.ImageData.prototype;
        }
        globalvar.ImageData = constr;
        exports.ImageData = constr;
    }
    else {
        exports.ImageData = globalvar.ImageData;
    }
})();
//Recast into a drawable imagedata class on all platforms, into a normal browser ImageData on browsers or a node-canvas imagedata on nodejs
exports.ImageData.prototype.toDrawableData = function () {
    if (typeof document == "undefined") {
        return nodeimports.imageDataToDrawable(this);
    }
    else {
        return this;
    }
};
exports.ImageData.prototype.putImageData = function (buf, cx, cy) {
    for (var dx = 0; dx < buf.width; dx++) {
        for (var dy = 0; dy < buf.height; dy++) {
            var i1 = (dx + cx) * 4 + (dy + cy) * 4 * this.width;
            var i2 = dx * 4 + dy * 4 * buf.width;
            this.data[i1] = buf.data[i2];
            this.data[i1 + 1] = buf.data[i2 + 1];
            this.data[i1 + 2] = buf.data[i2 + 2];
            this.data[i1 + 3] = buf.data[i2 + 3];
        }
    }
};
exports.ImageData.prototype.pixelOffset = function (x, y) {
    return x * 4 + y * this.width * 4;
};
//creates a hash of a portion of the buffer used to check for changes
exports.ImageData.prototype.getPixelHash = function (rect) {
    if (!rect) {
        rect = new a1lib.Rect(0, 0, this.width, this.height);
    }
    var hash = 0;
    for (var x = rect.x; x < rect.x + rect.width; x++) {
        for (var y = rect.y; y < rect.y + rect.height; y++) {
            var i = x * 4 + y * 4 * this.width;
            hash = (((hash << 5) - hash) + this.data[i]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 1]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 2]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 3]) | 0;
        }
    }
    return hash;
};
exports.ImageData.prototype.clone = function (rect) {
    return this.toImage(rect).getContext("2d").getImageData(0, 0, rect.width, rect.height);
};
exports.ImageData.prototype.show = function (x = 5, y = 5, zoom = 1) {
    if (typeof document == "undefined") {
        console.error("need a document to show an imagedata object");
        return;
    }
    var imgs = document.getElementsByClassName("debugimage");
    while (imgs.length > exports.ImageData.prototype.show.maxImages) {
        imgs[0].remove();
    }
    var el = this.toImage();
    el.classList.add("debugimage");
    el.style.position = "absolute";
    el.style.zIndex = "1000";
    el.style.left = x / zoom + "px";
    el.style.top = y / zoom + "px";
    el.style.background = "purple";
    el.style.cursor = "pointer";
    el.style.imageRendering = "pixelated";
    el.style.outline = "1px solid #0f0";
    el.style.width = (this.width == 1 ? 100 : this.width) * zoom + "px";
    el.style.height = (this.height == 1 ? 100 : this.height) * zoom + "px";
    el.onclick = function () { el.remove(); };
    document.body.appendChild(el);
    return el;
};
exports.ImageData.prototype.show.maxImages = 10;
exports.ImageData.prototype.toImage = function (rect) {
    if (!rect) {
        rect = new a1lib.Rect(0, 0, this.width, this.height);
    }
    if (typeof document != "undefined") {
        var el = document.createElement("canvas");
        el.width = rect.width;
        el.height = rect.height;
    }
    else {
        el = nodeimports.createCanvas(rect.width, rect.height);
    }
    var ctx = el.getContext("2d");
    ctx.putImageData(this.toDrawableData(), -rect.x, -rect.y);
    return el;
};
exports.ImageData.prototype.getPixel = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return [this.data[i], this.data[i + 1], this.data[i + 2], this.data[i + 3]];
};
exports.ImageData.prototype.getPixelValueSum = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return this.data[i] + this.data[i + 1] + this.data[i + 2];
};
exports.ImageData.prototype.getPixelInt = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return (this.data[i + 3] << 24) + (this.data[i + 0] << 16) + (this.data[i + 1] << 8) + (this.data[i + 2] << 0);
};
exports.ImageData.prototype.getColorDifference = function (x, y, r, g, b, a = 255) {
    var i = x * 4 + y * 4 * this.width;
    return Math.abs(this.data[i] - r) + Math.abs(this.data[i + 1] - g) + Math.abs(this.data[i + 2] - b) * a / 255;
};
exports.ImageData.prototype.setPixel = function (x, y, ...color) {
    var r, g, b, a;
    var [r, g, b, a] = (Array.isArray(color[0]) ? color[0] : color);
    var i = x * 4 + y * 4 * this.width;
    this.data[i] = r;
    this.data[i + 1] = g;
    this.data[i + 2] = b;
    this.data[i + 3] = a == undefined ? 255 : a;
};
exports.ImageData.prototype.setPixelInt = function (x, y, color) {
    var i = x * 4 + y * 4 * this.width;
    this.data[i] = (color >> 24) & 0xff;
    this.data[i + 1] = (color >> 16) & 0xff;
    this.data[i + 2] = (color >> 8) & 0xff;
    this.data[i + 3] = (color >> 0) & 0xff;
};
exports.ImageData.prototype.toFileBytes = function (format, quality) {
    if (typeof HTMLCanvasElement != "undefined") {
        return new Promise(d => this.toImage().toBlob(b => {
            var r = new FileReader();
            r.readAsArrayBuffer(b);
            r.onload = () => d(new Uint8Array(r.result));
        }, format, quality));
    }
    else {
        return nodeimports.imageDataToFileBytes(this, format, quality);
    }
};
exports.ImageData.prototype.toPngBase64 = function () {
    if (typeof HTMLCanvasElement != "undefined") {
        var str = this.toImage().toDataURL("image/png");
        return str.slice(str.indexOf(",") + 1);
    }
    else {
        throw new Error("synchronous image conversion not supported in nodejs, try using ImageData.prototype.toFileBytes");
    }
};
exports.ImageData.prototype.pixelCompare = function (buf, x = 0, y = 0, max) {
    return a1lib.ImageDetect.simpleCompare(this, buf, x, y, max);
};
exports.ImageData.prototype.copyTo = function (target, sourcex, sourcey, width, height, targetx, targety) {
    //convince v8 that these are 31bit uints
    const targetwidth = target.width | 0;
    const thiswidth = this.width | 0;
    const copywidth = width | 0;
    const fastwidth = Math.floor(width / 4) * 4;
    const thisdata = new Int32Array(this.data.buffer, this.data.byteOffset, this.data.byteLength / 4);
    const targetdata = new Int32Array(target.data.buffer, target.data.byteOffset, target.data.byteLength / 4);
    for (let cy = 0; cy < height; cy++) {
        let cx = 0;
        let it = (cx + targetx) + (cy + targety) * targetwidth;
        let is = (cx + sourcex) + (cy + sourcey) * thiswidth;
        //copy 4 pixels per iter (xmm)
        for (; cx < fastwidth; cx += 4) {
            targetdata[it] = thisdata[is];
            targetdata[it + 1] = thisdata[is + 1];
            targetdata[it + 2] = thisdata[is + 2];
            targetdata[it + 3] = thisdata[is + 3];
            it += 4;
            is += 4;
        }
        //copy remainder per pixel
        for (; cx < copywidth; cx++) {
            targetdata[it] = thisdata[is];
            it += 1;
            is += 1;
        }
    }
};
if (typeof HTMLImageElement != "undefined") {
    HTMLImageElement.prototype.toBuffer = function (x = 0, y = 0, w = this.width, h = this.height) {
        var cnv = document.createElement("canvas");
        cnv.width = w;
        cnv.height = h;
        var ctx = cnv.getContext("2d");
        ctx.drawImage(this, -x, -y);
        return ctx.getImageData(0, 0, w, h);
    };
    HTMLImageElement.prototype.toCanvas = function (x = 0, y = 0, w = this.width, h = this.height) {
        var cnv = document.createElement("canvas");
        cnv.width = w;
        cnv.height = h;
        var ctx = cnv.getContext("2d");
        ctx.drawImage(this, -x, -y);
        return cnv;
    };
}


/***/ }),

/***/ "./src/base/imagedetect.ts":
/*!*********************************!*\
  !*** ./src/base/imagedetect.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_15248__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageDataSet = exports.webpackImages = exports.asyncMap = exports.coldif = exports.simpleCompareRMSE = exports.simpleCompare = exports.findSubbuffer = exports.findSubimage = exports.clearPngColorspace = exports.isPngBuffer = exports.imageDataFromFileBuffer = exports.imageDataFromBase64 = exports.imageDataFromUrl = void 0;
const imgref_1 = __nested_webpack_require_15248__(/*! ./imgref */ "./src/base/imgref.ts");
const wapper = __importStar(__nested_webpack_require_15248__(/*! ./wrapper */ "./src/base/wrapper.ts"));
const nodeimports = __importStar(__nested_webpack_require_15248__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
const _1 = __nested_webpack_require_15248__(/*! . */ "./src/base/index.ts");
/**
* Downloads an image and returns the ImageData
* Make sure the png image does not have a sRGB chunk or the resulting pixels will differ for different users!!!
* @param url http(s) or data url to the image
*/
async function imageDataFromUrl(url) {
    if (typeof Image != "undefined") {
        var img = new Image();
        img.crossOrigin = "crossorigin";
        return await new Promise((done, fail) => {
            img.onload = function () { done(img.toBuffer()); };
            img.onerror = fail;
            img.src = url;
        });
    }
    else {
        var hdr = "data:image/png;base64,";
        if (url.startsWith(hdr)) {
            return imageDataFromBase64(url.slice(hdr.length));
        }
        throw new Error("loading remote images in nodejs has been disabled, load the raw bytes and use imageDataFromNodeBuffer instead");
    }
}
exports.imageDataFromUrl = imageDataFromUrl;
/**
* Loads an ImageData object from a base64 encoded png image
* Make sure the png image does not have a sRGB chunk or the resulting pixels will differ for different users!!!
* @param data a base64 encoded png image
*/
async function imageDataFromBase64(data) {
    if (typeof Image != "undefined") {
        return imageDataFromUrl("data:image/png;base64," + data);
    }
    else {
        return nodeimports.imageDataFromBase64(data);
    }
}
exports.imageDataFromBase64 = imageDataFromBase64;
/**
 * Loads an ImageData object directly from a png encoded file buffer
 * This method ensures that png color space headers are taken care off
 * @param data The bytes of a png file
 */
async function imageDataFromFileBuffer(data) {
    clearPngColorspace(data);
    if (typeof Image != "undefined") {
        let blob = new Blob([data], { type: "image/png" });
        let url = URL.createObjectURL(blob);
        let r = await imageDataFromUrl(url);
        URL.revokeObjectURL(url);
        return r;
    }
    else {
        return nodeimports.imageDataFromBuffer(data);
    }
}
exports.imageDataFromFileBuffer = imageDataFromFileBuffer;
/**
* Checks if a given byte array is a png file (by checking for ?PNG as first 4 bytes)
* @param bytes Raw bytes of the png file
*/
function isPngBuffer(bytes) {
    return bytes[0] == 137 && bytes[1] == 80 && bytes[2] == 78 && bytes[3] == 71;
}
exports.isPngBuffer = isPngBuffer;
/**
* Resets the colorspace data in the png file.
* This makes sure the browser renders the exact colors in the file instead of filtering it in order to obtain the best real life representation of
* what it looked like on the authors screen. (this feature is often broken and not supported)
* For example a round trip printscreen -> open in browser results in different colors than the original
* @param data Raw bytes of the png file
*/
function clearPngColorspace(data) {
    if (!isPngBuffer(data)) {
        throw new Error("non-png image received");
    }
    var i = 8;
    while (i < data.length) {
        var length = data[i++] * 0x1000000 + data[i++] * 0x10000 + data[i++] * 0x100 + data[i++];
        var ancillary = !!((data[i] >> 5) & 1);
        var chunkname = String.fromCharCode(data[i], data[i + 1], data[i + 2], data[i + 3]);
        var chunkid = chunkname.toLowerCase();
        if (chunkid != "trns" && ancillary) {
            data[i + 0] = "n".charCodeAt(0);
            data[i + 1] = "o".charCodeAt(0);
            data[i + 2] = "P".charCodeAt(0);
            data[i + 3] = "E".charCodeAt(0);
            //calculate new chunk checksum
            //http://www.libpng.org/pub/png/spec/1.2/PNG-CRCAppendix.html
            var end = i + 4 + length;
            var crc = 0xffffffff;
            //should be fast enough like this
            var bitcrc = function (bit) {
                for (var k = 0; k < 8; k++) {
                    if (bit & 1) {
                        bit = 0xedb88320 ^ (bit >>> 1);
                    }
                    else {
                        bit = bit >>> 1;
                    }
                }
                return bit;
            };
            for (var a = i; a < end; a++) {
                if (a >= i + 4) {
                    data[a] = 0;
                }
                var bit = data[a];
                crc = bitcrc((crc ^ bit) & 0xff) ^ (crc >>> 8);
            }
            crc = crc ^ 0xffffffff;
            //new chunk checksum
            data[i + 4 + length + 0] = (crc >> 24) & 0xff;
            data[i + 4 + length + 1] = (crc >> 16) & 0xff;
            data[i + 4 + length + 2] = (crc >> 8) & 0xff;
            data[i + 4 + length + 3] = (crc >> 0) & 0xff;
        }
        if (chunkname == "IEND") {
            break;
        }
        i += 4; //type
        i += length; //data
        i += 4; //crc
    }
}
exports.clearPngColorspace = clearPngColorspace;
/**
* finds the given needle ImageBuffer in the given haystack ImgRef this function uses the best optimized available
* code depending on the type of the haystack. It will use fast c# searching if the haystack is an ImgRefBind, js searching
* is used otherwise.
* the checklist argument is no longer used and should ignored or null/undefined
* The optional sx,sy,sw,sh arguments indicate a bounding rectangle in which to search the needle. The rectangle should be bigger than the needle
* @returns An array of points where the needle is found. The array is empty if none are found
*/
function findSubimage(haystackImgref, needleBuffer, sx = 0, sy = 0, sw = haystackImgref.width, sh = haystackImgref.height) {
    if (!haystackImgref) {
        throw new TypeError();
    }
    if (!needleBuffer) {
        throw new TypeError();
    }
    var max = 30;
    //check if we can do this in alt1
    if (haystackImgref instanceof imgref_1.ImgRefBind && wapper.hasAlt1 && alt1.bindFindSubImg) {
        var needlestr = wapper.encodeImageString(needleBuffer);
        var r = alt1.bindFindSubImg(haystackImgref.handle, needlestr, needleBuffer.width, sx, sy, sw, sh);
        if (!r) {
            throw new wapper.Alt1Error();
        }
        return JSON.parse(r);
    }
    return findSubbuffer(haystackImgref.read(), needleBuffer, sx, sy, sw, sh);
}
exports.findSubimage = findSubimage;
/**
* Uses js to find the given needle ImageBuffer in the given haystack ImageBuffer. It is better to use the alt1.bind- functions in
* combination with a1nxt.findsubimg.
* the optional sx,sy,sw,sh arguments indicate a bounding rectangle in which to search.
* @returns An array of points where the needle is found. The array is empty if none are found
*/
function findSubbuffer(haystack, needle, sx = 0, sy = 0, sw = haystack.width, sh = haystack.height) {
    var r = [];
    var maxdif = 30;
    var maxresults = 50;
    var needlestride = needle.width * 4;
    var heystackstride = haystack.width * 4;
    //built list of non trans pixel to check
    var checkList = [];
    for (var y = 0; y < needle.height; y++) {
        for (var x = 0; x < needle.width; x++) {
            var i = x * 4 + y * needlestride;
            if (needle.data[i + 3] == 255) {
                checkList.push({ x: x, y: y });
            }
            if (checkList.length == 10) {
                break;
            }
        }
        if (checkList.length == 10) {
            break;
        }
    }
    var cw = (sx + sw) - needle.width;
    var ch = (sy + sh) - needle.height;
    var checklength = checkList.length;
    for (var y = sy; y <= ch; y++) {
        outer: for (var x = sx; x <= cw; x++) {
            for (var a = 0; a < checklength; a++) {
                var i1 = (x + checkList[a].x) * 4 + (y + checkList[a].y) * heystackstride;
                var i2 = checkList[a].x * 4 + checkList[a].y * needlestride;
                var d = 0;
                d = d + Math.abs(haystack.data[i1 + 0] - needle.data[i2 + 0]) | 0;
                d = d + Math.abs(haystack.data[i1 + 1] - needle.data[i2 + 1]) | 0;
                d = d + Math.abs(haystack.data[i1 + 2] - needle.data[i2 + 2]) | 0;
                d *= 255 / needle.data[i2 + 3];
                if (d > maxdif) {
                    continue outer;
                }
            }
            if (simpleCompare(haystack, needle, x, y, maxdif) != Infinity) {
                r.push({ x, y });
                if (r.length > maxresults) {
                    return r;
                }
            }
        }
    }
    return r;
}
exports.findSubbuffer = findSubbuffer;
/**
* Compares two images and returns the average color difference per pixel between them
* @param max The max color difference at any point in the image before short circuiting the function and returning Infinity. set to -1 to always continue.
* @returns The average color difference per pixel or Infinity if the difference is more than max at any point in the image
*/
function simpleCompare(bigbuf, checkbuf, x, y, max = 30) {
    if (x < 0 || y < 0) {
        throw new RangeError();
    }
    if (x + checkbuf.width > bigbuf.width || y + checkbuf.height > bigbuf.height) {
        throw new RangeError();
    }
    if (max == -1) {
        max = 255 * 4;
    }
    var dif = 0;
    for (var step = 8; step >= 1; step /= 2) {
        for (var cx = 0; cx < checkbuf.width; cx += step) {
            for (var cy = 0; cy < checkbuf.height; cy += step) {
                var i1 = (x + cx) * 4 + (y + cy) * bigbuf.width * 4;
                var i2 = cx * 4 + cy * checkbuf.width * 4;
                var d = 0;
                d = d + Math.abs(bigbuf.data[i1 + 0] - checkbuf.data[i2 + 0]) | 0;
                d = d + Math.abs(bigbuf.data[i1 + 1] - checkbuf.data[i2 + 1]) | 0;
                d = d + Math.abs(bigbuf.data[i1 + 2] - checkbuf.data[i2 + 2]) | 0;
                d *= checkbuf.data[i2 + 3] / 255;
                if (step == 1) {
                    dif += d;
                }
                if (d > max) {
                    return Infinity;
                }
            }
        }
    }
    return dif / checkbuf.width / checkbuf.height;
}
exports.simpleCompare = simpleCompare;
/**
* Calculates the root mean square error between the two buffers at the given coordinate, this method can be used in situations with significant blur or
* transparency, it does not bail early on non-matching images like simpleCompare does so it can be expected to be much slower when called often.
* @returns The root mean square error beteen the images, high single pixel errors are penalized more than consisten low errors. return of 0 means perfect match.
*/
function simpleCompareRMSE(bigbuf, checkbuf, x, y) {
    if (x < 0 || y < 0) {
        throw new RangeError();
    }
    if (x + checkbuf.width > bigbuf.width || y + checkbuf.height > bigbuf.height) {
        throw new RangeError();
    }
    var dif = 0;
    var numpix = 0;
    for (var cx = 0; cx < checkbuf.width; cx++) {
        for (var cy = 0; cy < checkbuf.height; cy++) {
            var i1 = (x + cx) * 4 + (y + cy) * bigbuf.width * 4;
            var i2 = cx * 4 + cy * checkbuf.width * 4;
            var d = 0;
            d = d + Math.abs(bigbuf.data[i1 + 0] - checkbuf.data[i2 + 0]) | 0;
            d = d + Math.abs(bigbuf.data[i1 + 1] - checkbuf.data[i2 + 1]) | 0;
            d = d + Math.abs(bigbuf.data[i1 + 2] - checkbuf.data[i2 + 2]) | 0;
            var weight = checkbuf.data[i2 + 3] / 255;
            numpix += weight;
            dif += d * d * weight;
        }
    }
    return Math.sqrt(dif / numpix);
}
exports.simpleCompareRMSE = simpleCompareRMSE;
/**
* Returns the difference between two colors (scaled to the alpha of the second color)
*/
function coldif(r1, g1, b1, r2, g2, b2, a2) {
    return (Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2)) * a2 / 255; //only applies alpha for 2nd buffer!
}
exports.coldif = coldif;
/**
 * Turns map of promises into a map that contains the resolved values after loading.
 * @param input
 */
function asyncMap(input) {
    var raw = {};
    var promises = [];
    for (var a in input) {
        if (input.hasOwnProperty(a)) {
            raw[a] = null;
            promises.push(input[a].then(function (a, i) { raw[a] = i; r[a] = i; }.bind(null, a)));
        }
    }
    var r = {};
    var promise = Promise.all(promises).then(() => { r.loaded = true; return r; });
    Object.defineProperty(r, "loaded", { enumerable: false, value: false, writable: true });
    Object.defineProperty(r, "promise", { enumerable: false, value: promise });
    Object.defineProperty(r, "raw", { enumerable: false, value: raw });
    return Object.assign(r, raw);
}
exports.asyncMap = asyncMap;
/**
* Same as asyncMap, but casts the properties to ImageData in typescript
*/
function webpackImages(input) {
    return asyncMap(input);
}
exports.webpackImages = webpackImages;
class ImageDataSet {
    constructor() {
        this.buffers = [];
    }
    matchBest(img, x, y, max) {
        let best = null;
        let bestscore = max;
        for (let a = 0; a < this.buffers.length; a++) {
            let score = img.pixelCompare(this.buffers[a], x, y, bestscore);
            if (isFinite(score) && (bestscore == undefined || score < bestscore)) {
                bestscore = score;
                best = a;
            }
        }
        if (best == null) {
            return null;
        }
        return { index: best, score: bestscore };
    }
    static fromFilmStrip(baseimg, width) {
        if ((baseimg.width % width) != 0) {
            throw new Error("slice size does not fit in base img");
        }
        let r = new ImageDataSet();
        for (let x = 0; x < baseimg.width; x += width) {
            r.buffers.push(baseimg.clone(new _1.Rect(x, 0, width, baseimg.height)));
        }
        return r;
    }
    static fromFilmStripUneven(baseimg, widths) {
        let r = new ImageDataSet();
        let x = 0;
        for (let w of widths) {
            r.buffers.push(baseimg.clone(new _1.Rect(x, 0, w, baseimg.height)));
            x += w;
            if (x > baseimg.width) {
                throw new Error("sampling filmstrip outside bounds");
            }
        }
        if (x != baseimg.width) {
            throw new Error("unconsumed pixels left in film strip imagedata");
        }
        return r;
    }
    static fromAtlas(baseimg, slices) {
        let r = new ImageDataSet();
        for (let slice of slices) {
            r.buffers.push(baseimg.clone(slice));
        }
        return r;
    }
}
exports.ImageDataSet = ImageDataSet;


/***/ }),

/***/ "./src/base/imgref.ts":
/*!****************************!*\
  !*** ./src/base/imgref.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_31629__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImgRefData = exports.ImgRefBind = exports.ImgRefCtx = exports.ImgRef = void 0;
const index_1 = __nested_webpack_require_31629__(/*! ./index */ "./src/base/index.ts");
/**
 * Represents an image that might be in different types of memory
 * This is mostly used to represent images still in Alt1 memory that have
 * not been transfered to js yet. Various a1lib api's use this type and
 * choose the most efficient approach based on the memory type
 */
class ImgRef {
    constructor(x, y, w, h) {
        this.t = "none";
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        throw new Error("This imgref (" + this.t + ") does not support toData");
    }
    findSubimage(needle, sx = 0, sy = 0, w = this.width, h = this.height) {
        return index_1.ImageDetect.findSubimage(this, needle, sx, sy, w, h);
    }
    toData(x = this.x, y = this.y, w = this.width, h = this.height) {
        return this.read(x - this.x, y - this.y, w, h);
    }
    ;
    containsArea(rect) {
        return this.x <= rect.x && this.y <= rect.y && this.x + this.width >= rect.x + rect.width && this.y + this.height >= rect.y + rect.height;
    }
}
exports.ImgRef = ImgRef;
/**
 * Represents an image in js render memory (canvas/image tag)
 */
class ImgRefCtx extends ImgRef {
    constructor(img, x = 0, y = 0) {
        if (img instanceof CanvasRenderingContext2D) {
            super(x, y, img.canvas.width, img.canvas.height);
            this.ctx = img;
        }
        else {
            super(x, y, img.width, img.height);
            var cnv = (img instanceof HTMLCanvasElement ? img : img.toCanvas());
            this.ctx = cnv.getContext("2d");
        }
        this.t = "ctx";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        return this.ctx.getImageData(x, y, w, h);
    }
}
exports.ImgRefCtx = ImgRefCtx;
/**
 * Represents in image in Alt1 memory, This type of image can be searched for subimages
 * very efficiently and transfering the full image to js can be avoided this way
 */
class ImgRefBind extends ImgRef {
    constructor(handle, x = 0, y = 0, w = 0, h = 0) {
        super(x, y, w, h);
        this.handle = handle;
        this.t = "bind";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        return (0, index_1.transferImageData)(this.handle, x, y, w, h);
    }
}
exports.ImgRefBind = ImgRefBind;
/**
 * Represents an image in js memory
 */
class ImgRefData extends ImgRef {
    constructor(buf, x = 0, y = 0) {
        super(x, y, buf.width, buf.height);
        this.buf = buf;
        this.t = "data";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        if (x == 0 && y == 0 && w == this.width && h == this.height) {
            return this.buf;
        }
        var r = new ImageData(w, h);
        for (var b = y; b < y + h; b++) {
            for (var a = x; a < x + w; a++) {
                var i1 = (a - x) * 4 + (b - y) * w * 4;
                var i2 = a * 4 + b * 4 * this.buf.width;
                r.data[i1] = this.buf.data[i2];
                r.data[i1 + 1] = this.buf.data[i2 + 1];
                r.data[i1 + 2] = this.buf.data[i2 + 2];
                r.data[i1 + 3] = this.buf.data[i2 + 3];
            }
        }
        return r;
    }
}
exports.ImgRefData = ImgRefData;


/***/ }),

/***/ "./src/base/index.ts":
/*!***************************!*\
  !*** ./src/base/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_35283__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageDataSet = exports.findSubbuffer = exports.simpleCompare = exports.findSubimage = exports.webpackImages = exports.NodePolyfill = exports.ImageData = exports.Rect = exports.PasteInput = exports.ImageDetect = void 0;
__nested_webpack_require_35283__(/*! ./declarations */ "./src/base/declarations.ts");
exports.ImageDetect = __importStar(__nested_webpack_require_35283__(/*! ./imagedetect */ "./src/base/imagedetect.ts"));
exports.PasteInput = __importStar(__nested_webpack_require_35283__(/*! ./pasteinput */ "./src/base/pasteinput.ts"));
var rect_1 = __nested_webpack_require_35283__(/*! ./rect */ "./src/base/rect.ts");
Object.defineProperty(exports, "Rect", ({ enumerable: true, get: function () { return __importDefault(rect_1).default; } }));
var imagedata_extensions_1 = __nested_webpack_require_35283__(/*! ./imagedata-extensions */ "./src/base/imagedata-extensions.ts");
Object.defineProperty(exports, "ImageData", ({ enumerable: true, get: function () { return imagedata_extensions_1.ImageData; } }));
exports.NodePolyfill = __importStar(__nested_webpack_require_35283__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
__exportStar(__nested_webpack_require_35283__(/*! ./imgref */ "./src/base/imgref.ts"), exports);
__exportStar(__nested_webpack_require_35283__(/*! ./wrapper */ "./src/base/wrapper.ts"), exports);
var imagedetect_1 = __nested_webpack_require_35283__(/*! ./imagedetect */ "./src/base/imagedetect.ts");
Object.defineProperty(exports, "webpackImages", ({ enumerable: true, get: function () { return imagedetect_1.webpackImages; } }));
Object.defineProperty(exports, "findSubimage", ({ enumerable: true, get: function () { return imagedetect_1.findSubimage; } }));
Object.defineProperty(exports, "simpleCompare", ({ enumerable: true, get: function () { return imagedetect_1.simpleCompare; } }));
Object.defineProperty(exports, "findSubbuffer", ({ enumerable: true, get: function () { return imagedetect_1.findSubbuffer; } }));
Object.defineProperty(exports, "ImageDataSet", ({ enumerable: true, get: function () { return imagedetect_1.ImageDataSet; } }));


/***/ }),

/***/ "./src/base/nodepolyfill.ts":
/*!**********************************!*\
  !*** ./src/base/nodepolyfill.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_38931__) => {


//nodejs and electron polyfills for web api's
//commented out type info as that breaks webpack with optional dependencies
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.imageDataFromBuffer = exports.imageDataFromBase64 = exports.imageDataToFileBytes = exports.createCanvas = exports.imageDataToDrawable = exports.requireElectronCommon = exports.requireNodeCanvas = exports.requireSharp = exports.polyfillRequire = void 0;
const index_1 = __nested_webpack_require_38931__(/*! ./index */ "./src/base/index.ts");
const imagedetect_1 = __nested_webpack_require_38931__(/*! ./imagedetect */ "./src/base/imagedetect.ts");
var requirefunction = null;
/**
 * Call this function to let the libs require extra dependencies on nodejs in order
 * to polyfill some browser api's (mostly image compression/decompression)
 * `NodePolifill.polyfillRequire(require);` should solve most cases
 */
function polyfillRequire(requirefn) {
    requirefunction = requirefn;
}
exports.polyfillRequire = polyfillRequire;
function requireSharp() {
    try {
        if (requirefunction) {
            return requirefunction("sharp");
        }
        else {
            return __nested_webpack_require_38931__(/* webpackIgnore: true */ /*! sharp */ "sharp"); // as typeof import("sharp");
        }
    }
    catch (e) { }
    return null;
}
exports.requireSharp = requireSharp;
function requireNodeCanvas() {
    //attempt to require sharp first, after loading canvas the module sharp fails to load
    requireSharp();
    try {
        if (requirefunction) {
            return requirefunction("canvas");
        }
        else {
            return __nested_webpack_require_38931__(/* webpackIgnore: true */ /*! canvas */ "canvas"); // as typeof import("sharp");
        }
    }
    catch (e) { }
    return null;
}
exports.requireNodeCanvas = requireNodeCanvas;
function requireElectronCommon() {
    try {
        if (requirefunction) {
            return requirefunction("electron/common");
        }
        else {
            return __nested_webpack_require_38931__(/* webpackIgnore: true */ /*! electron/common */ "electron/common");
        }
    }
    catch (e) { }
    return null;
}
exports.requireElectronCommon = requireElectronCommon;
function imageDataToDrawable(buf) {
    let nodecnv = requireNodeCanvas();
    if (!nodecnv) {
        throw new Error("couldn't find built-in canvas or the module 'canvas'");
    }
    return new nodecnv.ImageData(buf.data, buf.width, buf.height);
}
exports.imageDataToDrawable = imageDataToDrawable;
function createCanvas(w, h) {
    let nodecnv = requireNodeCanvas();
    if (!nodecnv) {
        throw new Error("couldn't find built-in canvas or the module 'canvas'");
    }
    return nodecnv.createCanvas(w, h);
}
exports.createCanvas = createCanvas;
function flipBGRAtoRGBA(data) {
    for (let i = 0; i < data.length; i += 4) {
        let tmp = data[i + 2];
        data[i + 2] = data[i + 0];
        data[i + 0] = tmp;
    }
}
async function imageDataToFileBytes(buf, format, quality) {
    //use the electron API if we're in electron
    var electronCommon;
    var sharp;
    if (electronCommon = requireElectronCommon()) {
        let nativeImage = electronCommon.nativeImage;
        //need to copy the buffer in order to flip it without destroying the original
        let bufcpy = Buffer.from(buf.data.slice(buf.data.byteOffset, buf.data.byteLength));
        flipBGRAtoRGBA(bufcpy);
        let nativeimg = nativeImage.createFromBitmap(bufcpy, { width: buf.width, height: buf.height });
        return nativeimg.toPNG();
    }
    else if (sharp = requireSharp()) {
        let img = sharp(Buffer.from(buf.data.buffer), { raw: { width: buf.width, height: buf.height, channels: 4 } });
        if (format == "image/png") {
            img.png();
        }
        else if (format == "image/webp") {
            var opts = { quality: 80 };
            if (typeof quality == "number") {
                opts.quality = quality * 100;
            }
            img.webp(opts);
        }
        else {
            throw new Error("unknown image format: " + format);
        }
        return await img.toBuffer({ resolveWithObject: false }).buffer;
    }
    throw new Error("coulnd't find build-in image compression methods or the module 'electron/common' or 'sharp'");
}
exports.imageDataToFileBytes = imageDataToFileBytes;
function imageDataFromBase64(base64) {
    return imageDataFromBuffer(Buffer.from(base64, "base64"));
}
exports.imageDataFromBase64 = imageDataFromBase64;
async function imageDataFromBuffer(buffer) {
    (0, imagedetect_1.clearPngColorspace)(buffer);
    //use the electron API if we're in electron
    var electronCommon;
    var nodecnv;
    if (electronCommon = requireElectronCommon()) {
        let nativeImage = electronCommon.nativeImage;
        let img = nativeImage.createFromBuffer(buffer);
        let pixels = img.toBitmap();
        let size = img.getSize();
        let pixbuf = new Uint8ClampedArray(pixels.buffer, pixels.byteOffset, pixels.byteLength);
        flipBGRAtoRGBA(pixbuf);
        return new index_1.ImageData(pixbuf, size.width, size.height);
    }
    else if (nodecnv = requireNodeCanvas()) {
        return new Promise((done, err) => {
            let img = new nodecnv.Image();
            img.onerror = err;
            img.onload = () => {
                var cnv = nodecnv.createCanvas(img.naturalWidth, img.naturalHeight);
                var ctx = cnv.getContext("2d");
                ctx.drawImage(img, 0, 0);
                var data = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight);
                //use our own class
                done(new index_1.ImageData(data.data, data.width, data.height));
            };
            img.src = Buffer.from(buffer.buffer, buffer.byteOffset, buffer.byteLength);
        });
    }
    throw new Error("couldn't find built-in canvas, module 'electron/common' or the module 'canvas'");
}
exports.imageDataFromBuffer = imageDataFromBuffer;


/***/ }),

/***/ "./src/base/pasteinput.ts":
/*!********************************!*\
  !*** ./src/base/pasteinput.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_45123__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fileDialog = exports.start = exports.startDragNDrop = exports.triggerPaste = exports.unlisten = exports.listen = exports.lastref = void 0;
const index_1 = __nested_webpack_require_45123__(/*! ./index */ "./src/base/index.ts");
const ImageDetect = __importStar(__nested_webpack_require_45123__(/*! ./imagedetect */ "./src/base/imagedetect.ts"));
var listeners = [];
var started = false;
var dndStarted = false;
var pasting = false;
exports.lastref = null;
function listen(func, errorfunc, dragndrop) {
    listeners.push({ cb: func, error: errorfunc });
    if (!started) {
        start();
    }
    if (dragndrop && !dndStarted) {
        startDragNDrop();
    }
}
exports.listen = listen;
function unlisten(func) {
    let i = listeners.findIndex(c => c.cb == func);
    if (i != -1) {
        listeners.splice(i, 1);
    }
}
exports.unlisten = unlisten;
/**
 * currently used in multiple document situations (iframe), might be removed in the future
 */
function triggerPaste(img) {
    exports.lastref = img;
    for (var a in listeners) {
        listeners[a].cb(exports.lastref);
    }
}
exports.triggerPaste = triggerPaste;
function pasted(img) {
    pasting = false;
    let cnv = img instanceof HTMLCanvasElement ? img : img.toCanvas();
    triggerPaste(new index_1.ImgRefCtx(cnv));
}
function error(error, mes) {
    var _a, _b;
    pasting = false;
    for (var a in listeners) {
        (_b = (_a = listeners[a]).error) === null || _b === void 0 ? void 0 : _b.call(_a, mes, error);
    }
}
function startDragNDrop() {
    var getitem = function (items) {
        var foundimage = "";
        for (var a = 0; a < items.length; a++) {
            var item = items[a];
            var m = item.type.match(/^image\/(\w+)$/);
            if (m) {
                if (m[1] == "png") {
                    return item;
                }
                else {
                    foundimage = m[1];
                }
            }
        }
        if (foundimage) {
            error("notpng", "The image you uploaded is not a .png image. Other image type have compression noise and can't be used for image detection.");
        }
        return null;
    };
    window.addEventListener("dragover", function (e) {
        e.preventDefault();
    });
    window.addEventListener("drop", function (e) {
        if (!e.dataTransfer) {
            return;
        }
        var item = getitem(e.dataTransfer.items);
        e.preventDefault();
        if (!item) {
            return;
        }
        fromFile(item.getAsFile());
    });
}
exports.startDragNDrop = startDragNDrop;
function start() {
    if (started) {
        return;
    }
    started = true;
    //determine if we have a clipboard api
    //try{a=new Event("clipboard"); a="clipboardData" in a;}
    //catch(e){a=false;}
    var ischrome = !!navigator.userAgent.match(/Chrome/) && !navigator.userAgent.match(/Edge/);
    //old method breaks after chrome 41, revert to good old user agent sniffing
    //nvm, internet explorer (edge) decided that it wants to be chrome, however fails at delivering
    //turns out this one is interesting, edge is a hybrid between the paste api's
    var apipasted = function (e) {
        if (!e.clipboardData) {
            return;
        }
        for (var a = 0; a < e.clipboardData.items.length; a++) { //loop all data types
            if (e.clipboardData.items[a].type.indexOf("image") != -1) {
                var file = e.clipboardData.items[a].getAsFile();
                if (file) {
                    var img = new Image();
                    img.src = (window.URL || window.webkitURL).createObjectURL(file);
                    if (img.width > 0) {
                        pasted(img);
                    }
                    else {
                        img.onload = function () { pasted(img); };
                    }
                }
            }
        }
    };
    if (ischrome) {
        document.addEventListener("paste", apipasted);
    }
    else {
        var catcher = document.createElement("div");
        catcher.setAttribute("contenteditable", "");
        catcher.className = "forcehidden"; //retarded ie safety/bug, cant apply styles using js//TODO i don't even know what's going on
        catcher.onpaste = function (e) {
            if (e.clipboardData && e.clipboardData.items) {
                apipasted(e);
                return;
            }
            setTimeout(function () {
                var b = catcher.children[0];
                if (!b || b.tagName != "IMG") {
                    return;
                }
                var img = new Image();
                img.src = b.src;
                var a = img.src.match(/^data:([\w\/]+);/);
                if (img.width > 0) {
                    pasted(img);
                }
                else {
                    img.onload = function () { pasted(img); };
                }
                catcher.innerHTML = "";
            }, 1);
        };
        document.body.appendChild(catcher);
    }
    //detect if ctrl-v is pressed and focus catcher if needed
    document.addEventListener("keydown", function (e) {
        if (e.target.tagName == "INPUT") {
            return;
        }
        if (e.keyCode != "V".charCodeAt(0) || !e.ctrlKey) {
            return;
        }
        pasting = true;
        setTimeout(function () {
            if (pasting) {
                error("noimg", "You pressed Ctrl+V, but no image was pasted by your browser, make sure your clipboard contains an image, and not a link to an image.");
            }
        }, 1000);
        if (catcher) {
            catcher.focus();
        }
    });
}
exports.start = start;
function fileDialog() {
    var fileinput = document.createElement("input");
    fileinput.type = "file";
    fileinput.accept = "image/png";
    fileinput.onchange = function () { if (fileinput.files && fileinput.files[0]) {
        fromFile(fileinput.files[0]);
    } };
    fileinput.click();
    return fileinput;
}
exports.fileDialog = fileDialog;
function fromFile(file) {
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function () {
        var bytearray = new Uint8Array(reader.result);
        if (ImageDetect.isPngBuffer(bytearray)) {
            ImageDetect.clearPngColorspace(bytearray);
        }
        var blob = new Blob([bytearray], { type: "image/png" });
        var img = new Image();
        img.onerror = () => error("invalidfile", "The file you uploaded could not be opened as an image.");
        var bloburl = URL.createObjectURL(blob);
        img.src = bloburl;
        if (img.width > 0) {
            pasted(img);
            URL.revokeObjectURL(bloburl);
        }
        else {
            img.onload = function () { pasted(img); URL.revokeObjectURL(bloburl); };
        }
    };
    reader.readAsArrayBuffer(file);
}


/***/ }),

/***/ "./src/base/rect.ts":
/*!**************************!*\
  !*** ./src/base/rect.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


//util class for rectangle maths
//TODO shit this sucks can we remove it again?
//more of a shorthand to get {x,y,width,height} than a class
//kinda starting to like it again
//TODO remove rant
Object.defineProperty(exports, "__esModule", ({ value: true }));
;
/**
 * Simple rectangle class with some util functions
 */
class Rect {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    static fromArgs(...args) {
        if (typeof args[0] == "object") {
            return new Rect(args[0].x, args[0].y, args[0].width, args[0].height);
        }
        else if (typeof args[0] == "number" && args.length >= 4) {
            return new Rect(args[0], args[1], args[2], args[3]);
        }
        else {
            throw new Error("invalid rect args");
        }
    }
    /**
     * Resizes this Rect to include the full size of a given second rectangle
     */
    union(r2) {
        var x = Math.min(this.x, r2.x);
        var y = Math.min(this.y, r2.y);
        this.width = Math.max(this.x + this.width, r2.x + r2.width) - x;
        this.height = Math.max(this.y + this.height, r2.y + r2.height) - y;
        this.x = x;
        this.y = y;
        return this;
    }
    /**
     * Resizes this Rect to include a given point
     */
    includePoint(x, y) {
        this.union(new Rect(x, y, 0, 0));
    }
    /**
     * Grows the rectangle with the given dimensions
     */
    inflate(w, h) {
        this.x -= w;
        this.y -= h;
        this.width += 2 * w;
        this.height += 2 * h;
    }
    /**
     * Resizes this Rect to the area that overlaps a given Rect
     * width and height will be set to 0 if the intersection does not exist
     */
    intersect(r2) {
        if (this.x < r2.x) {
            this.width -= r2.x - this.x;
            this.x = r2.x;
        }
        if (this.y < r2.y) {
            this.height -= r2.y - this.y;
            this.y = r2.y;
        }
        this.width = Math.min(this.x + this.width, r2.x + r2.width) - this.x;
        this.height = Math.min(this.y + this.height, r2.y + r2.height) - this.y;
        if (this.width <= 0 || this.height <= 0) {
            this.width = 0;
            this.height = 0;
        }
    }
    /**
     * Returns wether this Rect has at least one pixel overlap with a given Rect
     */
    overlaps(r2) {
        return this.x < r2.x + r2.width && this.x + this.width > r2.x && this.y < r2.y + r2.height && this.y + this.height > r2.y;
    }
    /**
     * Returns wether a given Rect fits completely inside this Rect
     * @param r2
     */
    contains(r2) {
        return this.x <= r2.x && this.x + this.width >= r2.x + r2.width && this.y <= r2.y && this.y + this.height >= r2.y + r2.height;
    }
    /**
     * Returns wether a given point lies inside this Rect
     */
    containsPoint(x, y) {
        return this.x <= x && this.x + this.width > x && this.y <= y && this.y + this.height > y;
    }
}
exports["default"] = Rect;


/***/ }),

/***/ "./src/base/wrapper.ts":
/*!*****************************!*\
  !*** ./src/base/wrapper.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_56486__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.captureStream = exports.captureMultiAsync = exports.captureAsync = exports.ImageStreamReader = exports.once = exports.removeListener = exports.on = exports.addResizeElement = exports.getMousePosition = exports.hasAlt1Version = exports.resetEnvironment = exports.identifyApp = exports.unmixColor = exports.mixColor = exports.encodeImageString = exports.decodeImageString = exports.transferImageData = exports.captureHoldFullRs = exports.captureHoldScreen = exports.captureHold = exports.capture = exports.getdisplaybounds = exports.requireAlt1 = exports.openbrowser = exports.skinName = exports.hasAlt1 = exports.newestversion = exports.Alt1Error = exports.NoAlt1Error = void 0;
const rect_1 = __importDefault(__nested_webpack_require_56486__(/*! ./rect */ "./src/base/rect.ts"));
const imgref_1 = __nested_webpack_require_56486__(/*! ./imgref */ "./src/base/imgref.ts");
const imagedata_extensions_1 = __nested_webpack_require_56486__(/*! ./imagedata-extensions */ "./src/base/imagedata-extensions.ts");
__nested_webpack_require_56486__(/*! ./alt1api */ "./src/base/alt1api.ts");
/**
 * Thrown when a method is called that can not be used outside of Alt1
 */
class NoAlt1Error extends Error {
    constructor() {
        super();
        this.message = "This method can not be ran outside of Alt1";
    }
}
exports.NoAlt1Error = NoAlt1Error;
;
/**
 * Thrown when the Alt1 API returns an invalid result
 * Errors of a different type are throw when internal Alt1 errors occur
 */
class Alt1Error extends Error {
}
exports.Alt1Error = Alt1Error;
/**
 * The latest Alt1 version
 */
exports.newestversion = "1.5.5";
/**
 * Whether the Alt1 API is available
 */
exports.hasAlt1 = (typeof alt1 != "undefined");
/**
 * The name of the Alt1 interface skin. (Always "default" if running in a browser)
 */
exports.skinName = exports.hasAlt1 ? alt1.skinName : "default";
/**
 * Max number of bytes that can be sent by alt1 in one function
 * Not completely sure why this number is different than window.alt1.maxtranfer
 */
var maxtransfer = 4000000;
/**
 * Open a link in the default browser
 * @deprecated use window.open instead
 */
function openbrowser(url) {
    if (exports.hasAlt1) {
        alt1.openBrowser(url);
    }
    else {
        window.open(url, '_blank');
    }
}
exports.openbrowser = openbrowser;
/**
 * Throw if Alt1 API is not available
 */
function requireAlt1() {
    if (!exports.hasAlt1) {
        throw new NoAlt1Error();
    }
}
exports.requireAlt1 = requireAlt1;
/**
 * Returns an object with a rectangle that spans all screens
 */
function getdisplaybounds() {
    if (!exports.hasAlt1) {
        return false;
    }
    return new rect_1.default(alt1.screenX, alt1.screenY, alt1.screenWidth, alt1.screenHeight);
}
exports.getdisplaybounds = getdisplaybounds;
/**
 * gets an imagebuffer with pixel data about the requested region
 */
function capture(...args) {
    //TODO change null return on error into throw instead (x3)
    if (!exports.hasAlt1) {
        throw new NoAlt1Error();
    }
    var rect = rect_1.default.fromArgs(...args);
    if (alt1.capture) {
        return new imagedata_extensions_1.ImageData(alt1.capture(rect.x, rect.y, rect.width, rect.height), rect.width, rect.height);
    }
    var buf = new imagedata_extensions_1.ImageData(rect.width, rect.height);
    if (rect.width * rect.height * 4 <= maxtransfer) {
        var data = alt1.getRegion(rect.x, rect.y, rect.width, rect.height);
        if (!data) {
            return null;
        }
        decodeImageString(data, buf, 0, 0, rect.width, rect.height);
    }
    else {
        //split up the request to to exceed the single transfer limit (for now)
        var x1 = rect.x;
        var ref = alt1.bindRegion(rect.x, rect.y, rect.width, rect.height);
        if (ref <= 0) {
            return null;
        }
        while (x1 < rect.x + rect.width) {
            var x2 = Math.min(rect.x + rect.width, Math.floor(x1 + (maxtransfer / 4 / rect.height)));
            var data = alt1.bindGetRegion(ref, x1, rect.y, x2 - x1, rect.height);
            if (!data) {
                return null;
            }
            decodeImageString(data, buf, x1 - rect.x, 0, x2 - x1, rect.height);
            x1 = x2;
        }
    }
    return buf;
}
exports.capture = capture;
/**
 * Makes alt1 bind an area of the rs client in memory without sending it to the js client
 * returns an imgref object which can be used to get pixel data using the imgreftobuf function
 * currently only one bind can exist per app and the ref in (v) will always be 1
 */
function captureHold(x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    var r = alt1.bindRegion(x, y, w, h);
    if (r <= 0) {
        throw new Alt1Error("capturehold failed");
    }
    return new imgref_1.ImgRefBind(r, x, y, w, h);
}
exports.captureHold = captureHold;
/**
 * Same as captureHoldRegion, but captures the screen instead of the rs client. it also uses screen coordinates instead and can capture outside of the rs client
 */
function captureHoldScreen(x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    var r = alt1.bindScreenRegion(x, y, w, h);
    if (r <= 0) {
        return false;
    }
    return new imgref_1.ImgRefBind(r, x, y, w, h);
}
exports.captureHoldScreen = captureHoldScreen;
/**
 * bind the full rs window if the rs window can be detected by alt1, otherwise return the full screen
 */
function captureHoldFullRs() {
    return captureHold(0, 0, alt1.rsWidth, alt1.rsHeight);
}
exports.captureHoldFullRs = captureHoldFullRs;
/**
 * returns a subregion from a bound image
 * used internally in imgreftobuf if imgref is a bound image
 * @deprecated This should be handled internall by the imgrefbind.toData method
 */
function transferImageData(handle, x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    if (alt1.bindGetRegionBuffer) {
        return new imagedata_extensions_1.ImageData(alt1.bindGetRegionBuffer(handle, x, y, w, h), w, h);
    }
    var r = new imagedata_extensions_1.ImageData(w, h);
    var x1 = x;
    while (true) { //split up the request to to exceed the single transfer limit (for now)
        var x2 = Math.min(x + w, Math.floor(x1 + (maxtransfer / 4 / h)));
        var a = alt1.bindGetRegion(handle, x1, y, x2 - x1, h);
        if (!a) {
            throw new Alt1Error();
        }
        decodeImageString(a, r, x1 - x, 0, x2 - x1, h);
        x1 = x2;
        if (x1 == x + w) {
            break;
        }
        ;
    }
    return r;
}
exports.transferImageData = transferImageData;
/**
 * decodes a returned string from alt1 to an imagebuffer
 */
function decodeImageString(imagestring, target, x, y, w, h) {
    var bin = atob(imagestring);
    var bytes = target.data;
    w |= 0;
    h |= 0;
    var offset = 4 * x + 4 * y * target.width;
    var target_width = target.width | 0;
    for (var a = 0; a < w; a++) {
        for (var b = 0; b < h; b++) {
            var i1 = (offset + (a * 4 | 0) + (b * target_width * 4 | 0)) | 0;
            var i2 = ((a * 4 | 0) + (b * 4 * w | 0)) | 0;
            bytes[i1 + 0 | 0] = bin.charCodeAt(i2 + 2 | 0); //fix weird red/blue swap in c#
            bytes[i1 + 1 | 0] = bin.charCodeAt(i2 + 1 | 0);
            bytes[i1 + 2 | 0] = bin.charCodeAt(i2 + 0 | 0);
            bytes[i1 + 3 | 0] = bin.charCodeAt(i2 + 3 | 0);
        }
    }
    return target;
}
exports.decodeImageString = decodeImageString;
/**
 * encodes an imagebuffer to a string
 */
function encodeImageString(buf, sx = 0, sy = 0, sw = buf.width, sh = buf.height) {
    var raw = "";
    for (var y = sy; y < sy + sh; y++) {
        for (var x = sx; x < sx + sw; x++) {
            var i = 4 * x + 4 * buf.width * y | 0;
            raw += String.fromCharCode(buf.data[i + 2 | 0]);
            raw += String.fromCharCode(buf.data[i + 1 | 0]);
            raw += String.fromCharCode(buf.data[i + 0 | 0]);
            raw += String.fromCharCode(buf.data[i + 3 | 0]);
        }
    }
    return btoa(raw);
}
exports.encodeImageString = encodeImageString;
/**
 * mixes the given color into a single int. This format is used by alt1
 */
function mixColor(r, g, b, a = 255) {
    return (b << 0) + (g << 8) + (r << 16) + (a << 24);
}
exports.mixColor = mixColor;
function unmixColor(col) {
    var r = (col >> 16) & 0xff;
    var g = (col >> 8) & 0xff;
    var b = (col >> 0) & 0xff;
    return [r, g, b];
}
exports.unmixColor = unmixColor;
function identifyApp(url) {
    if (exports.hasAlt1) {
        alt1.identifyAppUrl(url);
    }
}
exports.identifyApp = identifyApp;
function resetEnvironment() {
    exports.hasAlt1 = (typeof alt1 != "undefined");
    exports.skinName = exports.hasAlt1 ? alt1.skinName : "default";
}
exports.resetEnvironment = resetEnvironment;
function convertAlt1Version(str) {
    var a = str.match(/^(\d+)\.(\d+)\.(\d+)$/);
    if (!a) {
        throw new RangeError("Invalid version string");
    }
    return (+a[1]) * 1000 * 1000 + (+a[2]) * 1000 + (+a[3]) * 1;
}
var cachedVersionInt = -1;
/**
 * checks if alt1 is running and at least the given version. versionstr should be a string with the version eg: 1.3.2
 * @param versionstr
 */
function hasAlt1Version(versionstr) {
    if (!exports.hasAlt1) {
        return false;
    }
    if (cachedVersionInt == -1) {
        cachedVersionInt = alt1.versionint;
    }
    return cachedVersionInt >= convertAlt1Version(versionstr);
}
exports.hasAlt1Version = hasAlt1Version;
/**
 * Gets the current cursor position in the game, returns null if the rs window is not active (alt1.rsActive)
 */
function getMousePosition() {
    var pos = alt1.mousePosition;
    if (pos == -1) {
        return null;
    }
    return { x: pos >>> 16, y: pos & 0xFFFF };
}
exports.getMousePosition = getMousePosition;
/**
 * Registers a given HTML element as a frame border, when this element is dragged by the user the Alt1 frame will resize accordingly
 * Use the direction arguements to make a given direction stick to the mouse. eg. Only set left to true to make the element behave as the left border
 * Or set all to true to move the whole window. Not all combinations are permitted
 */
function addResizeElement(el, left, top, right, bot) {
    if (!exports.hasAlt1 || !alt1.userResize) {
        return;
    }
    el.addEventListener("mousedown", function (e) {
        alt1.userResize(left, top, right, bot);
        e.preventDefault();
    });
}
exports.addResizeElement = addResizeElement;
/**
 * Add an event listener
 */
function on(type, listener) {
    if (!exports.hasAlt1) {
        return;
    }
    if (!alt1.events) {
        alt1.events = {};
    }
    if (!alt1.events[type]) {
        alt1.events[type] = [];
    }
    alt1.events[type].push(listener);
}
exports.on = on;
/**
 * Removes an event listener
 */
function removeListener(type, listener) {
    var elist = exports.hasAlt1 && alt1.events && alt1.events[type];
    if (!elist) {
        return;
    }
    var i = elist.indexOf(listener);
    if (i == -1) {
        return;
    }
    elist.splice(i, 1);
}
exports.removeListener = removeListener;
/**
 * Listens for the event to fire once and then stops listening
 * @param event
 * @param cb
 */
function once(type, listener) {
    var fn = (e) => {
        removeListener(type, fn);
        listener(e);
    };
    on(type, fn);
}
exports.once = once;
;
/**
 * Used to read a set of images from a binary stream returned by the Alt1 API
 */
class ImageStreamReader {
    constructor(reader, ...args) {
        this.framebuffer = null;
        this.pos = 0;
        this.reading = false;
        this.closed = false;
        //paused state
        this.pausedindex = -1;
        this.pausedbuffer = null;
        this.streamreader = reader;
        if (args[0] instanceof imagedata_extensions_1.ImageData) {
            this.setFrameBuffer(args[0]);
        }
        else if (typeof args[0] == "number") {
            this.setFrameBuffer(new imagedata_extensions_1.ImageData(args[0], args[1]));
        }
    }
    /**
     *
     */
    setFrameBuffer(buffer) {
        if (this.reading) {
            throw new Error("can't change framebuffer while reading");
        }
        this.framebuffer = buffer;
    }
    /**
     * Closes the underlying stream and ends reading
     */
    close() {
        this.streamreader.cancel();
    }
    /**
     * Reads a single image from the stream
     */
    async nextImage() {
        if (this.reading) {
            throw new Error("already reading from this stream");
        }
        if (!this.framebuffer) {
            throw new Error("framebuffer not set");
        }
        this.reading = true;
        var synctime = -Date.now();
        var starttime = Date.now();
        var r = false;
        while (!r) {
            if (this.pausedindex != -1 && this.pausedbuffer) {
                r = this.readChunk(this.pausedindex, this.framebuffer.data, this.pausedbuffer);
            }
            else {
                synctime += Date.now();
                var res = await this.streamreader.read();
                synctime -= Date.now();
                if (res.done) {
                    throw new Error("Stream closed while reading");
                }
                var data = res.value;
                r = this.readChunk(0, this.framebuffer.data, data);
            }
        }
        synctime += Date.now();
        //console.log("Decoded async image, " + this.framebuffer.width + "x" + this.framebuffer.height + " time: " + (Date.now() - starttime) + "ms (" + synctime + "ms main thread)");
        this.reading = false;
        return this.framebuffer;
    }
    readChunk(i, framedata, buffer) {
        //very hot code, explicit int32 casting with |0 speeds it up by ~ x2
        i = i | 0;
        var framesize = framedata.length | 0;
        var pos = this.pos;
        var datalen = buffer.length | 0;
        //var data32 = new Float64Array(buffer.buffer);
        //var framedata32 = new Float64Array(framedata.buffer);
        //fix possible buffer misalignment
        //align to 16 for extra loop unrolling
        while (i < datalen) {
            //slow loop, fix alignment and other issues
            while (i < datalen && pos < framesize && (pos % 16 != 0 || !((i + 16 | 0) <= datalen && (pos + 16 | 0) <= framesize))) {
                var rel = pos;
                if (pos % 4 == 0) {
                    rel = rel + 2 | 0;
                }
                if (pos % 4 == 2) {
                    rel = rel - 2 | 0;
                }
                framedata[rel | 0] = buffer[i | 0];
                i = i + 1 | 0;
                pos = pos + 1 | 0;
            }
            //fast unrolled loop for large chunks i wish js had some sort of memcpy
            if (pos % 16 == 0) {
                while ((i + 16 | 0) <= datalen && (pos + 16 | 0) <= framesize) {
                    framedata[pos + 0 | 0] = buffer[i + 2 | 0];
                    framedata[pos + 1 | 0] = buffer[i + 1 | 0];
                    framedata[pos + 2 | 0] = buffer[i + 0 | 0];
                    framedata[pos + 3 | 0] = buffer[i + 3 | 0];
                    framedata[pos + 4 | 0] = buffer[i + 6 | 0];
                    framedata[pos + 5 | 0] = buffer[i + 5 | 0];
                    framedata[pos + 6 | 0] = buffer[i + 4 | 0];
                    framedata[pos + 7 | 0] = buffer[i + 7 | 0];
                    framedata[pos + 8 | 0] = buffer[i + 10 | 0];
                    framedata[pos + 9 | 0] = buffer[i + 9 | 0];
                    framedata[pos + 10 | 0] = buffer[i + 8 | 0];
                    framedata[pos + 11 | 0] = buffer[i + 11 | 0];
                    framedata[pos + 12 | 0] = buffer[i + 14 | 0];
                    framedata[pos + 13 | 0] = buffer[i + 13 | 0];
                    framedata[pos + 14 | 0] = buffer[i + 12 | 0];
                    framedata[pos + 15 | 0] = buffer[i + 15 | 0];
                    //could speed it up another x2 but wouldn't be able to swap r/b swap and possible alignment issues
                    //framedata32[pos / 8 + 0 | 0] = data32[i / 8 + 0 | 0];
                    //framedata32[pos / 8 + 1 | 0] = data32[i / 8 + 1 | 0];
                    //framedata32[pos / 4 + 2 | 0] = data32[i / 4 + 2 | 0];
                    //framedata32[pos / 4 + 3 | 0] = data32[i / 4 + 3 | 0];
                    pos = pos + 16 | 0;
                    i = i + 16 | 0;
                }
            }
            if (pos >= framesize) {
                this.pausedbuffer = null;
                this.pausedindex = -1;
                this.pos = 0;
                if (i != buffer.length - 1) {
                    this.pausedbuffer = buffer;
                    this.pausedindex = i;
                }
                return true;
            }
        }
        this.pos = pos;
        this.pausedbuffer = null;
        this.pausedindex = -1;
        return false;
    }
}
exports.ImageStreamReader = ImageStreamReader;
/**
 * Asynchronously captures a section of the game screen
 */
async function captureAsync(...args) {
    requireAlt1();
    var rect = rect_1.default.fromArgs(...args);
    if (alt1.captureAsync) {
        let img = await alt1.captureAsync(rect.x, rect.y, rect.width, rect.height);
        return new imagedata_extensions_1.ImageData(img, rect.width, rect.height);
    }
    if (!hasAlt1Version("1.4.6")) {
        return capture(rect.x, rect.y, rect.width, rect.height);
    }
    var url = "https://alt1api/pixel/getregion/" + encodeURIComponent(JSON.stringify(Object.assign(Object.assign({}, rect), { format: "raw", quality: 1 })));
    var res = await fetch(url);
    var imgreader = new ImageStreamReader(res.body.getReader(), rect.width, rect.height);
    return imgreader.nextImage();
}
exports.captureAsync = captureAsync;
/**
 * Asynchronously captures multple area's. This method captures the images in the same render frame if possible
 * @param areas
 */
async function captureMultiAsync(areas) {
    requireAlt1();
    var r = {};
    if (alt1.captureMultiAsync) {
        let bufs = await alt1.captureMultiAsync(areas);
        for (let a in areas) {
            if (!bufs[a]) {
                r[a] = null;
            }
            r[a] = new imagedata_extensions_1.ImageData(bufs[a], areas[a].width, areas[a].height);
        }
        return r;
    }
    var capts = [];
    var captids = [];
    for (var id in areas) {
        if (areas[id]) {
            capts.push(areas[id]);
            captids.push(id);
        }
        else {
            r[id] = null;
        }
    }
    if (capts.length == 0) {
        return r;
    }
    if (!hasAlt1Version("1.5.1")) {
        var proms = [];
        for (var a = 0; a < capts.length; a++) {
            proms.push(captureAsync(capts[a]));
        }
        var results = await Promise.all(proms);
        for (var a = 0; a < capts.length; a++) {
            r[captids[a]] = results[a];
        }
    }
    else {
        var res = await fetch("https://alt1api/pixel/getregionmulti/" + encodeURIComponent(JSON.stringify({ areas: capts, format: "raw", quality: 1 })));
        var imgreader = new ImageStreamReader(res.body.getReader());
        for (var a = 0; a < capts.length; a++) {
            var capt = capts[a];
            imgreader.setFrameBuffer(new imagedata_extensions_1.ImageData(capt.width, capt.height));
            r[captids[a]] = await imgreader.nextImage();
        }
    }
    return r;
}
exports.captureMultiAsync = captureMultiAsync;
/**
 * Starts capturing a realtime stream of the game. Make sure you keep reading the stream and close it when you're done or Alt1 WILL crash
 * @param framecb Called whenever a new frame is decoded
 * @param errorcb Called whenever an error occurs, the error is rethrown if not defined
 * @param fps Maximum fps of the stream
 */
function captureStream(x, y, width, height, fps, framecb, errorcb) {
    requireAlt1();
    if (!hasAlt1Version("1.4.6")) {
        throw new Alt1Error("This function is not supported in this version of Alt1");
    }
    var url = "https://alt1api/pixel/streamregion/" + encodeURIComponent(JSON.stringify({ x, y, width, height, fps, format: "raw" }));
    var res = fetch(url).then(async (res) => {
        var reader = new ImageStreamReader(res.body.getReader(), width, height);
        try {
            while (!reader.closed && !state.closed) {
                var img = await reader.nextImage();
                if (!state.closed) {
                    framecb(img);
                    state.framenr++;
                }
            }
        }
        catch (e) {
            if (!state.closed) {
                reader.close();
                if (errorcb) {
                    errorcb(e);
                }
                else {
                    throw e;
                }
            }
        }
        if (!reader.closed && state.closed) {
            reader.close();
        }
    });
    var state = {
        x, y, width, height,
        framenr: 0,
        close: () => { state.closed = true; },
        closed: false,
    };
    return state;
}
exports.captureStream = captureStream;


/***/ }),

/***/ "canvas":
/*!*************************!*\
  !*** external "canvas" ***!
  \*************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_canvas__ === 'undefined') { var e = new Error("Cannot find module 'canvas'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_canvas__;

/***/ }),

/***/ "electron/common":
/*!**********************************!*\
  !*** external "electron/common" ***!
  \**********************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_electron_common__ === 'undefined') { var e = new Error("Cannot find module 'electron/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_electron_common__;

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_sharp__ === 'undefined') { var e = new Error("Cannot find module 'sharp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_sharp__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_79245__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_79245__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__nested_webpack_require_79245__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_79245__("./src/base/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "../node_modules/alt1/dist/buffs/index.js":
/*!************************************************!*\
  !*** ../node_modules/alt1/dist/buffs/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js"), __webpack_require__(/*! alt1/ocr */ "../node_modules/alt1/dist/ocr/index.js"));
	else {}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_alt1_base__, __WEBPACK_EXTERNAL_MODULE_alt1_ocr__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buffs/imgs/buffborder.data.png":
/*!********************************************!*\
  !*** ./src/buffs/imgs/buffborder.data.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_885__) => {

module.exports=(__nested_webpack_require_885__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAABCSURBVEhL7daxDQAgDANBwxasxmCsS4jECE8K5JdcX+s219iqKrGTXi+dfs2SjCEZQzKGZAzJGJIxJGNI/2KFj1gK6ntTCO2Nfp8AAAAASUVORK5CYII=")

/***/ }),

/***/ "./src/buffs/imgs/debuffborder.data.png":
/*!**********************************************!*\
  !*** ./src/buffs/imgs/debuffborder.data.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_1504__) => {

module.exports=(__nested_webpack_require_1504__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAABFSURBVEhL7daxDQAgDANBm5XYfwOYyUgoI5gUyFc51bfhAoQmNzYl1v3MJjVqt0jMIjGLxCwSs0jMIjGLxCz+jTV+xMAB3/oJlYh5IBUAAAAASUVORK5CYII=")

/***/ }),

/***/ "./src/buffs/index.ts":
/*!****************************!*\
  !*** ./src/buffs/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_2063__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BuffInfo = exports.Buff = void 0;
const a1lib = __importStar(__nested_webpack_require_2063__(/*! alt1/base */ "alt1/base"));
const OCR = __importStar(__nested_webpack_require_2063__(/*! alt1/ocr */ "alt1/ocr"));
const base_1 = __nested_webpack_require_2063__(/*! alt1/base */ "alt1/base");
var imgs = (0, base_1.webpackImages)({
    buff: __nested_webpack_require_2063__(/*! ./imgs/buffborder.data.png */ "./src/buffs/imgs/buffborder.data.png"),
    debuff: __nested_webpack_require_2063__(/*! ./imgs/debuffborder.data.png */ "./src/buffs/imgs/debuffborder.data.png"),
});
var font = __nested_webpack_require_2063__(/*! ../fonts/pixel_8px_digits.fontmeta.json */ "./src/fonts/pixel_8px_digits.fontmeta.json");
function negmod(a, b) {
    return ((a % b) + b) % b;
}
class Buff {
    constructor(buffer, x, y, isdebuff) {
        this.buffer = buffer;
        this.bufferx = x;
        this.buffery = y;
        this.isdebuff = isdebuff;
    }
    readArg(type) {
        return BuffReader.readArg(this.buffer, this.bufferx + 2, this.buffery + 23, type);
    }
    readTime() {
        return BuffReader.readTime(this.buffer, this.bufferx + 2, this.buffery + 23);
    }
    compareBuffer(img) {
        return BuffReader.compareBuffer(this.buffer, this.bufferx + 1, this.buffery + 1, img);
    }
    countMatch(img, aggressive) {
        return BuffReader.countMatch(this.buffer, this.bufferx + 1, this.buffery + 1, img, aggressive);
    }
}
exports.Buff = Buff;
class BuffReader {
    constructor() {
        this.pos = null;
        this.debuffs = false;
    }
    find(img) {
        if (!img) {
            img = a1lib.captureHoldFullRs();
        }
        if (!img) {
            return null;
        }
        var poslist = img.findSubimage(this.debuffs ? imgs.debuff : imgs.buff);
        if (poslist.length == 0) {
            return null;
        }
        var grids = [];
        for (var a in poslist) {
            var ongrid = false;
            for (var b in grids) {
                if (negmod(grids[b].x - poslist[a].x, BuffReader.gridsize) == 0 && negmod(grids[b].x - poslist[a].x, BuffReader.gridsize) == 0) {
                    grids[b].x = Math.min(grids[b].x, poslist[a].x);
                    grids[b].y = Math.min(grids[b].y, poslist[a].y);
                    grids[b].n++;
                    ongrid = true;
                    break;
                }
            }
            if (!ongrid) {
                grids.push({ x: poslist[a].x, y: poslist[a].y, n: 1 });
            }
        }
        var max = 0;
        var above2 = 0;
        var best = null;
        for (var a in grids) {
            console.log("buff grid [" + grids[a].x + "," + grids[a].y + "], n:" + grids[a].n);
            if (grids[a].n > max) {
                max = grids[a].n;
                best = grids[a];
            }
            if (grids[a].n >= 2) {
                above2++;
            }
        }
        if (above2 > 1) {
            console.log("Warning, more than one possible buff bar location");
        }
        if (!best) {
            return null;
        }
        this.pos = { x: best.x, y: best.y, maxhor: 5, maxver: 1 };
        return true;
    }
    getCaptRect() {
        if (!this.pos) {
            return null;
        }
        return new a1lib.Rect(this.pos.x, this.pos.y, (this.pos.maxhor + 1) * BuffReader.gridsize, (this.pos.maxver + 1) * BuffReader.gridsize);
    }
    read(buffer) {
        if (!this.pos) {
            throw new Error("no pos");
        }
        var r = [];
        var rect = this.getCaptRect();
        if (!rect) {
            return null;
        }
        if (!buffer) {
            buffer = a1lib.capture(rect.x, rect.y, rect.width, rect.height);
        }
        var maxhor = 0;
        var maxver = 0;
        for (var ix = 0; ix <= this.pos.maxhor; ix++) {
            for (var iy = 0; iy <= this.pos.maxver; iy++) {
                var x = ix * BuffReader.gridsize;
                var y = iy * BuffReader.gridsize;
                //Have to require exact match here as we get transparency bs otherwise
                var match = buffer.pixelCompare((this.debuffs ? imgs.debuff : imgs.buff), x, y) == 0;
                if (!match) {
                    break;
                }
                r.push(new Buff(buffer, x, y, this.debuffs));
                maxhor = Math.max(maxhor, ix);
                maxver = Math.max(maxver, iy);
            }
        }
        this.pos.maxhor = Math.max(5, maxhor + 2);
        this.pos.maxver = Math.max(1, maxver + 1);
        return r;
    }
    static compareBuffer(buffer, ox, oy, buffimg) {
        var r = BuffReader.countMatch(buffer, ox, oy, buffimg, true);
        if (r.failed > 0) {
            return false;
        }
        if (r.tested < 50) {
            return false;
        }
        return true;
    }
    static countMatch(buffer, ox, oy, buffimg, agressive) {
        var r = { tested: 0, failed: 0, skipped: 0, passed: 0 };
        var data1 = buffer.data;
        var data2 = buffimg.data;
        //var debug = new ImageData(buffimg.width, buffimg.height);
        for (var y = 0; y < buffimg.height; y++) {
            for (var x = 0; x < buffimg.width; x++) {
                var i1 = buffer.pixelOffset(ox + x, oy + y);
                var i2 = buffimg.pixelOffset(x, y);
                //debug.data[i2] = 255; debug.data[i2 + 1] = debug.data[i2 + 2] = 0; debug.data[i2 + 3] = 255;
                if (data2[i2 + 3] != 255) {
                    r.skipped++;
                    continue;
                } //transparent buff pixel
                if (data1[i1] == 255 && data1[i1 + 1] == 255 && data1[i1 + 2] == 255) {
                    r.skipped++;
                    continue;
                } //white pixel - part of buff time text
                if (data1[i1] == 0 && data1[i1 + 1] == 0 && data1[i1 + 2] == 0) {
                    r.skipped++;
                    continue;
                } //black pixel - part of buff time text
                var d = a1lib.ImageDetect.coldif(data1[i1], data1[i1 + 1], data1[i1 + 2], data2[i2], data2[i2 + 1], data2[i2 + 2], 255);
                r.tested++;
                //debug.data[i2] = debug.data[i2 + 1] = debug.data[i2 + 2] = d * 10;
                if (d > 35) {
                    //qw(pixelschecked); debug.show();
                    r.failed++;
                    if (agressive) {
                        return r;
                    }
                }
                else {
                    r.passed++;
                }
            }
        }
        //debug.show(); qw(pixelschecked);
        return r;
    }
    static isolateBuffer(buffer, ox, oy, buffimg) {
        var count = BuffReader.countMatch(buffer, ox, oy, buffimg);
        if (count.passed < 50) {
            return;
        }
        var removed = 0;
        var data1 = buffer.data;
        var data2 = buffimg.data;
        //var debug = new ImageData(buffimg.width, buffimg.height);
        for (var y = 0; y < buffimg.height; y++) {
            for (var x = 0; x < buffimg.width; x++) {
                var i1 = buffer.pixelOffset(ox + x, oy + y);
                var i2 = buffimg.pixelOffset(x, y);
                //debug.data[i2] = 255; debug.data[i2 + 1] = debug.data[i2 + 2] = 0; debug.data[i2 + 3] = 255;
                if (data2[i2 + 3] != 255) {
                    continue;
                } //transparent buff pixel
                //==== new buffer has text on it ====
                if (data1[i1] == 255 && data1[i1 + 1] == 255 && data1[i1 + 2] == 255 || data1[i1] == 0 && data1[i1 + 1] == 0 && data1[i1 + 2] == 0) {
                    continue;
                }
                //==== old buf has text on it, use the new one ====
                if (data2[i2] == 255 && data2[i2 + 1] == 255 && data2[i2 + 2] == 255 || data2[i2] == 0 && data2[i2 + 1] == 0 && data2[i2 + 2] == 0) {
                    data2[i2 + 0] = data1[i1 + 0];
                    data2[i2 + 1] = data1[i1 + 1];
                    data2[i2 + 2] = data1[i1 + 2];
                    data2[i2 + 3] = data1[i1 + 3];
                    removed++;
                }
                var d = a1lib.ImageDetect.coldif(data1[i1], data1[i1 + 1], data1[i1 + 2], data2[i2], data2[i2 + 1], data2[i2 + 2], 255);
                //debug.data[i2] = debug.data[i2 + 1] = debug.data[i2 + 2] = d * 10;
                if (d > 5) {
                    //qw(pixelschecked); debug.show();
                    data2[i2 + 0] = data2[i2 + 1] = data2[i2 + 2] = data2[i2 + 3] = 0;
                    removed++;
                }
            }
        }
        //debug.show(); qw(pixelschecked);
        if (removed > 0) {
            console.log(removed + " pixels remove from buff template image");
        }
    }
    static readArg(buffer, ox, oy, type) {
        var lines = [];
        for (var dy = -10; dy < 10; dy += 10) { //the timer can be spread to a second line at certain times (229m)
            var result = OCR.readLine(buffer, font, [255, 255, 255], ox, oy + dy, true);
            if (result.text) {
                lines.push(result.text);
            }
        }
        var r = { time: 0, arg: "" };
        if (type == "timearg" && lines.length > 1) {
            r.arg = lines.pop();
        }
        var str = lines.join("");
        if (type == "arg") {
            r.arg = str;
        }
        else {
            var m;
            if (m = str.match(/^(\d+)hr$/i)) {
                r.time = +m[1] * 60 * 60;
            }
            else if (m = str.match(/^(\d+)m$/i)) {
                r.time = +m[1] * 60;
            }
            else if (m = str.match(/^(\d+)$/)) {
                r.time = +m[1];
            }
        }
        return r;
    }
    static readTime(buffer, ox, oy) {
        return this.readArg(buffer, ox, oy, "time").time;
    }
    static matchBuff(state, buffimg) {
        for (var a in state) {
            if (state[a].compareBuffer(buffimg)) {
                return state[a];
            }
        }
        return null;
    }
    static matchBuffMulti(state, buffinfo) {
        if (buffinfo.final) { //cheap way if we known exactly what we're searching for
            return BuffReader.matchBuff(state, buffinfo.imgdata);
        }
        else { //expensive way if we are not sure the template is final
            var bestindex = -1;
            var bestscore = 0;
            if (buffinfo.imgdata) {
                for (var a = 0; a < state.length; a++) {
                    var count = BuffReader.countMatch(state[a].buffer, state[a].bufferx + 1, state[a].buffery + 1, buffinfo.imgdata, false);
                    if (count.passed > bestscore) {
                        bestscore = count.passed;
                        bestindex = a;
                    }
                }
            }
            if (bestscore < 50) {
                return null;
            }
            //update the isolated buff
            if (buffinfo.canimprove) {
                BuffReader.isolateBuffer(state[bestindex].buffer, state[bestindex].bufferx + 1, state[bestindex].buffery + 1, buffinfo.imgdata);
            }
            return state[bestindex];
        }
    }
}
BuffReader.buffsize = 27;
BuffReader.gridsize = 30;
exports["default"] = BuffReader;
class BuffInfo {
    constructor(imgdata, debuff, id, canimprove) {
        this.imgdata = imgdata;
        this.isdebuff = debuff;
        this.buffid = id;
        this.final = !!id && !canimprove;
        this.canimprove = canimprove;
    }
}
exports.BuffInfo = BuffInfo;


/***/ }),

/***/ "alt1/base":
/*!**************************************************************************************************!*\
  !*** external {"root":"A1lib","commonjs2":"alt1/base","commonjs":"alt1/base","amd":"alt1/base"} ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_base__;

/***/ }),

/***/ "alt1/ocr":
/*!*********************************************************************************************!*\
  !*** external {"root":"OCR","commonjs2":"alt1/ocr","commonjs":"alt1/ocr","amd":"alt1/ocr"} ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_ocr__;

/***/ }),

/***/ "./src/fonts/pixel_8px_digits.fontmeta.json":
/*!**************************************************!*\
  !*** ./src/fonts/pixel_8px_digits.fontmeta.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"chars":[{"width":7,"bonus":120,"chr":"0","pixels":[0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,1,1,255,255,1,3,255,0,1,4,255,0,1,5,255,0,1,6,255,255,2,0,255,255,2,2,255,0,2,7,255,255,3,1,255,255,3,6,255,255,3,8,255,0,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,7,255,0,5,3,255,0,5,4,255,0,5,5,255,0,5,6,255,0],"secondary":false},{"width":4,"bonus":95,"chr":"1","pixels":[0,1,255,255,0,7,255,255,1,0,255,255,1,1,255,255,1,2,255,255,1,3,255,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,0,2,1,255,0,2,2,255,0,2,3,255,0,2,4,255,0,2,5,255,0,2,6,255,0,2,7,255,255,2,8,255,0],"secondary":false},{"width":7,"bonus":140,"chr":"2","pixels":[0,1,255,255,0,6,255,255,0,7,255,255,1,0,255,255,1,2,255,0,1,5,255,255,1,7,255,255,1,8,255,0,2,0,255,255,2,1,255,0,2,4,255,255,2,6,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,3,255,255,3,5,255,0,3,7,255,255,3,8,255,0,4,1,255,255,4,2,255,255,4,4,255,0,4,7,255,255,4,8,255,0,5,2,255,0,5,3,255,0,5,8,255,0],"secondary":false},{"width":6,"bonus":115,"chr":"3","pixels":[0,1,255,255,0,6,255,255,1,0,255,255,1,2,255,0,1,3,255,255,1,7,255,255,2,0,255,255,2,1,255,0,2,3,255,255,2,4,255,0,2,7,255,255,2,8,255,0,3,1,255,255,3,2,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,8,255,0,4,2,255,0,4,3,255,0,4,5,255,0,4,6,255,0,4,7,255,0],"secondary":false},{"width":5,"bonus":110,"chr":"4","pixels":[0,0,255,255,0,1,255,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,1,1,255,0,1,2,255,0,1,3,255,0,1,4,255,0,1,5,255,255,1,6,255,0,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,3,4,255,0,3,5,255,255,3,6,255,0,3,7,255,0,3,8,255,0],"secondary":false},{"width":6,"bonus":135,"chr":"5","pixels":[0,0,255,255,0,1,255,255,0,2,255,255,0,3,255,255,0,6,255,255,1,0,255,255,1,1,255,0,1,2,255,0,1,3,255,255,1,4,255,0,1,7,255,255,2,0,255,255,2,1,255,0,2,3,255,255,2,4,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,4,255,255,3,5,255,255,3,6,255,255,3,8,255,0,4,1,255,0,4,5,255,0,4,6,255,0,4,7,255,0],"secondary":false},{"width":7,"bonus":160,"chr":"6","pixels":[0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,1,1,255,255,1,3,255,0,1,4,255,255,1,5,255,0,1,6,255,0,1,7,255,255,2,0,255,255,2,2,255,0,2,3,255,255,2,5,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,3,255,255,3,4,255,0,3,7,255,255,3,8,255,0,4,1,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,8,255,0,5,2,255,0,5,5,255,0,5,6,255,0,5,7,255,0],"secondary":false},{"width":6,"bonus":105,"chr":"7","pixels":[0,0,255,255,0,6,255,255,0,7,255,255,1,0,255,255,1,1,255,0,1,4,255,255,1,5,255,255,1,7,255,0,1,8,255,0,2,0,255,255,2,1,255,0,2,2,255,255,2,3,255,255,2,5,255,0,2,6,255,0,3,0,255,255,3,1,255,255,3,3,255,0,3,4,255,0,4,1,255,0,4,2,255,0],"secondary":false},{"width":7,"bonus":170,"chr":"8","pixels":[0,1,255,255,0,2,255,255,0,4,255,255,0,5,255,255,0,6,255,255,1,0,255,255,1,2,255,0,1,3,255,255,1,5,255,0,1,6,255,0,1,7,255,255,2,0,255,255,2,1,255,0,2,3,255,255,2,4,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,3,255,255,3,4,255,0,3,7,255,255,3,8,255,0,4,1,255,255,4,2,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,8,255,0,5,2,255,0,5,3,255,0,5,5,255,0,5,6,255,0,5,7,255,0],"secondary":false},{"width":7,"bonus":130,"chr":"9","pixels":[0,1,255,255,0,2,255,255,1,0,255,255,1,2,255,0,1,3,255,255,2,0,255,255,2,1,255,0,2,4,255,255,3,0,255,255,3,1,255,0,3,4,255,255,3,5,255,0,4,1,255,255,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,5,2,255,0,5,3,255,0,5,4,255,0,5,5,255,0,5,6,255,0,5,7,255,0,5,8,255,0],"secondary":false},{"width":7,"bonus":130,"chr":"m","pixels":[0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,3,255,255,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,3,3,255,255,3,5,255,0,3,6,255,0,3,7,255,0,3,8,255,0,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,5,5,255,0,5,6,255,0,5,7,255,0,5,8,255,0],"secondary":false},{"width":3,"bonus":85,"chr":"(","pixels":[0,1,255,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,0,8,255,25,1,0,255,255,1,2,255,0,1,3,255,0,1,4,255,0,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,255,2,1,255,0],"secondary":false},{"width":2,"bonus":70,"chr":")","pixels":[0,1,255,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,2,255,0,1,3,255,0,1,4,255,0,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0],"secondary":false},{"width":6,"bonus":135,"chr":"h","pixels":[0,0,255,255,0,1,255,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,1,255,0,1,2,255,0,1,3,255,255,1,4,255,0,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0,2,3,255,255,2,4,255,0,2,5,255,0,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,4,5,255,0,4,6,255,0,4,7,255,0,4,8,255,0],"secondary":false},{"width":5,"bonus":65,"chr":"r","pixels":[0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,4,255,255,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0,2,3,255,255,2,5,255,0,3,4,255,0],"secondary":false}],"width":7,"spacewidth":4,"shadow":true,"height":9,"basey":7}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_20993__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_20993__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_20993__("./src/buffs/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "../node_modules/alt1/dist/ocr/index.js":
/*!**********************************************!*\
  !*** ../node_modules/alt1/dist/ocr/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js"));
	else {}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_alt1_base__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ocr/index.ts":
/*!**************************!*\
  !*** ./src/ocr/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_728__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generatefont = exports.readChar = exports.readSmallCapsBackwards = exports.readLine = exports.getChatColor = exports.GetChatColorMono = exports.findReadLine = exports.findChar = exports.decompose3col = exports.decomposeblack = exports.decompose2col = exports.canblend = exports.unblendTrans = exports.unblendKnownBg = exports.unblendBlackBackground = exports.debugFont = exports.debugout = exports.debug = void 0;
const base_1 = __nested_webpack_require_728__(/*! alt1/base */ "alt1/base");
exports.debug = {
    printcharscores: false,
    trackread: false
};
exports.debugout = {};
/**
 * draws the font definition to a buffer and displays it in the dom for debugging purposes
 * @param font
 */
function debugFont(font) {
    var spacing = font.width + 2;
    var buf = new base_1.ImageData(spacing * font.chars.length, font.height + 1);
    for (var a = 0; a < buf.data.length; a += 4) {
        buf.data[a] = buf.data[a + 1] = buf.data[a + 2] = 0;
        buf.data[a + 3] = 255;
    }
    for (var a = 0; a < font.chars.length; a++) {
        var bx = a * spacing;
        var chr = font.chars[a];
        for (var b = 0; b < chr.pixels.length; b += (font.shadow ? 4 : 3)) {
            buf.setPixel(bx + chr.pixels[b], chr.pixels[b + 1], [chr.pixels[b + 2], chr.pixels[b + 2], chr.pixels[b + 2], 255]);
            if (font.shadow) {
                buf.setPixel(bx + chr.pixels[b], chr.pixels[b + 1], [chr.pixels[b + 3], 0, 0, 255]);
            }
        }
    }
    buf.show();
}
exports.debugFont = debugFont;
function unblendBlackBackground(img, r, g, b) {
    var rimg = new base_1.ImageData(img.width, img.height);
    for (var i = 0; i < img.data.length; i += 4) {
        var col = decomposeblack(img.data[i], img.data[i + 1], img.data[i + 2], r, g, b);
        rimg.data[i + 0] = col[0] * 255;
        rimg.data[i + 1] = rimg.data[i + 0];
        rimg.data[i + 2] = rimg.data[i + 0];
        rimg.data[i + 3] = 255;
    }
    return rimg;
}
exports.unblendBlackBackground = unblendBlackBackground;
/**
 * unblends a imagebuffer into match strength with given color
 * the bgimg argument should contain a second image with pixel occluded by the font visible.
 * @param img
 * @param shadow detect black as second color
 * @param bgimg optional second image to
 */
function unblendKnownBg(img, bgimg, shadow, r, g, b) {
    if (bgimg && (img.width != bgimg.width || img.height != bgimg.height)) {
        throw "bgimg size doesn't match";
    }
    var rimg = new base_1.ImageData(img.width, img.height);
    var totalerror = 0;
    for (var i = 0; i < img.data.length; i += 4) {
        var col = decompose2col(img.data[i], img.data[i + 1], img.data[i + 2], r, g, b, bgimg.data[i + 0], bgimg.data[i + 1], bgimg.data[i + 2]);
        if (shadow) {
            if (col[2] > 0.01) {
                console.log("high error component: " + (col[2] * 100).toFixed(1) + "%");
            }
            totalerror += col[2];
            var m = 1 - col[1] - Math.abs(col[2]); //main color+black=100%-bg-error
            rimg.data[i + 0] = m * 255;
            rimg.data[i + 1] = col[0] / m * 255;
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        else {
            rimg.data[i + 0] = col[0] * 255;
            rimg.data[i + 1] = rimg.data[i + 0];
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        rimg.data[i + 3] = 255;
    }
    return rimg;
}
exports.unblendKnownBg = unblendKnownBg;
/**
 * Unblends a font image that is already conpletely isolated to the raw image used ingame. This is the easiest mode for pixel fonts where alpha is 0 or 255, or for extracted font files.
 * @param img
 * @param r
 * @param g
 * @param b
 * @param shadow whether the font has a black shadow
 */
function unblendTrans(img, shadow, r, g, b) {
    var rimg = new base_1.ImageData(img.width, img.height);
    var pxlum = r + g + b;
    for (var i = 0; i < img.data.length; i += 4) {
        if (shadow) {
            var lum = img.data[i + 0] + img.data[i + 1] + img.data[i + 2];
            rimg.data[i + 0] = img.data[i + 3];
            rimg.data[i + 1] = lum / pxlum * 255;
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        else {
            rimg.data[i + 0] = img.data[i + 3];
            rimg.data[i + 1] = rimg.data[i + 0];
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        rimg.data[i + 3] = 255;
    }
    return rimg;
}
exports.unblendTrans = unblendTrans;
/**
 * Determised wether color [rgb]m can be a result of a blend with color [rgb]1 that is p (0-1) of the mix
 * It returns the number that the second color has to lie outside of the possible color ranges
 * @param rm resulting color
 * @param r1 first color of the mix (the other color is unknown)
 * @param p the portion of the [rgb]1 in the mix (0-1)
 */
function canblend(rm, gm, bm, r1, g1, b1, p) {
    var m = Math.min(50, p / (1 - p));
    var r = rm + (rm - r1) * m;
    var g = gm + (gm - g1) * m;
    var b = bm + (bm - b1) * m;
    return Math.max(0, -r, -g, -b, r - 255, g - 255, b - 255);
}
exports.canblend = canblend;
/**
 * decomposes a color in 2 given component colors and returns the amount of each color present
 * also return a third (noise) component which is the the amount leftover orthagonal from the 2 given colors
 */
function decompose2col(rp, gp, bp, r1, g1, b1, r2, g2, b2) {
    //get the normal of the error (cross-product of both colors)
    var r3 = g1 * b2 - g2 * b1;
    var g3 = b1 * r2 - b2 * r1;
    var b3 = r1 * g2 - r2 * g1;
    //normalize to length 255
    var norm = 255 / Math.sqrt(r3 * r3 + g3 * g3 + b3 * b3);
    r3 *= norm;
    g3 *= norm;
    b3 *= norm;
    return decompose3col(rp, gp, bp, r1, g1, b1, r2, g2, b2, r3, g3, b3);
}
exports.decompose2col = decompose2col;
/**
 * decomposes a pixel in a given color component and black and returns what proportion of the second color it contains
 * this is not as formal as decompose 2/3 and only give a "good enough" number
 */
function decomposeblack(rp, gp, bp, r1, g1, b1) {
    var dr = Math.abs(rp - r1);
    var dg = Math.abs(gp - g1);
    var db = Math.abs(bp - b1);
    var maxdif = Math.max(dr, dg, db);
    return [1 - maxdif / 255];
}
exports.decomposeblack = decomposeblack;
/**
 * decomposes a color in 3 given component colors and returns the amount of each color present
 */
function decompose3col(rp, gp, bp, r1, g1, b1, r2, g2, b2, r3, g3, b3) {
    //P=x*C1+y*C2+z*C3
    //assemble as matrix 
    //M*w=p
    //get inverse of M
    //dirty written out version of cramer's rule
    var A = g2 * b3 - b2 * g3;
    var B = g3 * b1 - b3 * g1;
    var C = g1 * b2 - b1 * g2;
    var D = b2 * r3 - r2 * b3;
    var E = b3 * r1 - r3 * b1;
    var F = b1 * r2 - r1 * b2;
    var G = r2 * g3 - g2 * r3;
    var H = r3 * g1 - g3 * r1;
    var I = r1 * g2 - g1 * r2;
    var det = r1 * A + g1 * D + b1 * G;
    //M^-1*p=w
    var x = (A * rp + D * gp + G * bp) / det;
    var y = (B * rp + E * gp + H * bp) / det;
    var z = (C * rp + F * gp + I * bp) / det;
    return [x, y, z];
}
exports.decompose3col = decompose3col;
/**
 * brute force to the exact position of the text
 */
function findChar(buffer, font, col, x, y, w, h) {
    if (x < 0) {
        return null;
    }
    if (y - font.basey < 0) {
        return null;
    }
    if (x + w + font.width > buffer.width) {
        return null;
    }
    if (y + h - font.basey + font.height > buffer.height) {
        return null;
    }
    var best = 1000; //TODO finetune score constants
    var bestchar = null;
    for (var cx = x; cx < x + w; cx++) {
        for (var cy = y; cy < y + h; cy++) {
            var chr = readChar(buffer, font, col, cx, cy, false, false);
            if (chr != null && chr.sizescore < best) {
                best = chr.sizescore;
                bestchar = chr;
            }
        }
    }
    return bestchar;
}
exports.findChar = findChar;
/**
 * reads text with unknown exact coord or color. The given coord should be inside the text
 * color selection not implemented yet
 */
function findReadLine(buffer, font, cols, x, y, w = -1, h = -1) {
    if (w == -1) {
        w = font.width + font.spacewidth;
        x -= Math.ceil(w / 2);
    }
    if (h == -1) {
        h = 7;
        y -= 1;
    }
    var chr = null;
    if (cols.length > 1) {
        //TODO use getChatColor() instead for non-mono?
        var sorted = GetChatColorMono(buffer, new base_1.Rect(x, y - font.basey, w, h), cols);
        //loop until we have a match (max 2 cols)
        for (var a = 0; a < 2 && a < sorted.length && chr == null; a++) {
            chr = findChar(buffer, font, sorted[a].col, x, y, w, h);
        }
    }
    else {
        chr = findChar(buffer, font, cols[0], x, y, w, h);
    }
    if (chr == null) {
        return { debugArea: { x, y, w, h }, text: "", fragments: [] };
    }
    return readLine(buffer, font, cols, chr.x, chr.y, true, true);
}
exports.findReadLine = findReadLine;
function GetChatColorMono(buf, rect, colors) {
    var colormap = colors.map(c => ({ col: c, score: 0 }));
    if (rect.x < 0 || rect.y < 0 || rect.x + rect.width > buf.width || rect.y + rect.height > buf.height) {
        return colormap;
    }
    var data = buf.data;
    var maxd = 50;
    for (var colobj of colormap) {
        var score = 0;
        var col = colobj.col;
        for (var y = rect.y; y < rect.y + rect.height; y++) {
            for (var x = rect.x; x < rect.x + rect.width; x++) {
                var i = x * 4 + y * 4 * buf.width;
                var d = Math.abs(data[i] - col[0]) + Math.abs(data[i + 1] - col[1]) + Math.abs(data[i + 2] - col[2]);
                if (d < maxd) {
                    score += maxd - d;
                }
            }
        }
        colobj.score = score;
    }
    return colormap.sort((a, b) => b.score - a.score);
}
exports.GetChatColorMono = GetChatColorMono;
function unblend(r, g, b, R, G, B) {
    var m = Math.sqrt(r * r + g * g + b * b);
    var n = Math.sqrt(R * R + G * G + B * B);
    var x = (r * R + g * G + b * B) / n;
    var y = Math.sqrt(Math.max(0, m * m - x * x));
    var r1 = Math.max(0, (63.75 - y) * 4);
    var r2 = x / n * 255;
    if (r2 > 255) //brighter than refcol
     {
        r1 = Math.max(0, r1 - r2 + 255);
        r2 = 255;
    }
    return [r1, r2];
}
function getChatColor(buf, rect, colors) {
    var bestscore = -1.0;
    var best = null;
    var b2 = 0.0;
    var data = buf.data;
    for (let col of colors) {
        var score = 0.0;
        for (var y = rect.y; y < rect.y + rect.height; y++) {
            for (var x = rect.x; x < rect.x + rect.width; x++) {
                if (x < 0 || x + 1 >= buf.width) {
                    continue;
                }
                if (y < 0 || y + 1 >= buf.width) {
                    continue;
                }
                let i1 = buf.pixelOffset(x, y);
                let i2 = buf.pixelOffset(x + 1, y + 1);
                var pixel1 = unblend(data[i1 + 0], data[i1 + 1], data[i1 + 2], col[0], col[1], col[2]);
                var pixel2 = unblend(data[i2 + 0], data[i2 + 1], data[i2 + 2], col[0], col[1], col[2]);
                //TODO this is from c# can simplify a bit
                var s = (pixel1[0] / 255 * pixel1[1] / 255) * (pixel2[0] / 255 * (255.0 - pixel2[1]) / 255);
                score += s;
            }
        }
        if (score > bestscore) {
            b2 = bestscore;
            bestscore = score;
            best = col;
        }
        else if (score > b2) {
            b2 = score;
        }
    }
    //Console.WriteLine("color: " + bestcol + " - " + (bestscore - b2));
    //bestscore /= rect.width * rect.height;
    return best;
}
exports.getChatColor = getChatColor;
/**
 * reads a line of text with exactly known position and color. y should be the y coord of the text base line, x should be the first pixel of a new character
 */
function readLine(buffer, font, colors, x, y, forward, backward = false) {
    if (typeof colors[0] != "number" && colors.length == 1) {
        colors = colors[0];
    }
    var multicol = typeof colors[0] != "number";
    var allcolors = multicol ? colors : [colors];
    var detectcolor = function (sx, sy, backward) {
        var w = Math.floor(font.width * 1.5);
        if (backward) {
            sx -= w;
        }
        sy -= font.basey;
        return getChatColor(buffer, { x: sx, y: sy, width: w, height: font.height }, allcolors);
    };
    var fragments = [];
    var x1 = x;
    var x2 = x;
    var maxspaces = (typeof font.maxspaces == "number" ? font.maxspaces : 1);
    let fragtext = "";
    let fraghadprimary = false;
    var lastcol = null;
    let addfrag = (forward) => {
        if (!fragtext) {
            return;
        }
        let frag = {
            text: fragtext,
            color: lastcol,
            index: 0,
            xstart: x + (forward ? fragstartdx : fragenddx),
            xend: x + (forward ? fragenddx : fragstartdx)
        };
        if (forward) {
            fragments.push(frag);
        }
        else {
            fragments.unshift(frag);
        }
        fragtext = "";
        fragstartdx = dx;
        fraghadprimary = false;
    };
    for (var dirforward of [true, false]) {
        //init vars
        if (dirforward && !forward) {
            continue;
        }
        if (!dirforward && !backward) {
            continue;
        }
        var dx = 0;
        var fragstartdx = dx;
        var fragenddx = dx;
        var triedspaces = 0;
        var triedrecol = false;
        var col = multicol ? null : colors;
        while (true) {
            col = col || detectcolor(x + dx, y, !dirforward);
            var chr = (col ? readChar(buffer, font, col, x + dx, y, !dirforward, true) : null);
            if (col == null || chr == null) {
                if (triedspaces < maxspaces) {
                    dx += (dirforward ? 1 : -1) * font.spacewidth;
                    triedspaces++;
                    continue;
                }
                if (multicol && !triedrecol && fraghadprimary) {
                    dx -= (dirforward ? 1 : -1) * triedspaces * font.spacewidth;
                    triedspaces = 0;
                    col = null;
                    triedrecol = true;
                    continue;
                }
                if (dirforward) {
                    x2 = x + dx - font.spacewidth;
                }
                else {
                    x1 = x + dx + font.spacewidth;
                }
                break;
            }
            else {
                if (lastcol && (col[0] != lastcol[0] || col[1] != lastcol[1] || col[2] != lastcol[2])) {
                    addfrag(dirforward);
                }
                var spaces = "";
                for (var a = 0; a < triedspaces; a++) {
                    spaces += " ";
                }
                if (dirforward) {
                    fragtext += spaces + chr.chr;
                }
                else {
                    fragtext = chr.chr + spaces + fragtext;
                }
                if (!chr.basechar.secondary) {
                    fraghadprimary = true;
                }
                triedspaces = 0;
                triedrecol = false;
                dx += (dirforward ? 1 : -1) * chr.basechar.width;
                fragenddx = dx;
                lastcol = col;
            }
        }
        if (lastcol && fraghadprimary) {
            addfrag(dirforward);
        }
    }
    fragments.forEach((f, i) => f.index = i);
    return {
        debugArea: { x: x1, y: y - 9, w: x2 - x1, h: 10 },
        text: fragments.map(f => f.text).join(""),
        fragments
    };
}
exports.readLine = readLine;
/**
 * Reads a line of text that uses a smallcaps font, these fonts can have duplicate chars that only have a different amount of
 * empty space after the char before the next char starts.
 * The coordinates should be near the end of the string, or a rectangle with high 1 containing all points where the string can end.
 */
function readSmallCapsBackwards(buffer, font, cols, x, y, w = -1, h = -1) {
    if (w == -1) {
        w = font.width + font.spacewidth;
        x -= Math.ceil(w / 2);
    }
    if (h == -1) {
        h = 7;
        y -= 1;
    }
    var matchedchar = null;
    var sorted = (cols.length == 1 ? [{ col: cols[0], score: 1 }] : GetChatColorMono(buffer, new base_1.Rect(x, y - font.basey, w, h), cols));
    //loop until we have a match (max 2 cols)
    for (var a = 0; a < 2 && a < sorted.length && matchedchar == null; a++) {
        for (var cx = x + w - 1; cx >= x; cx--) {
            var best = 1000; //TODO finetune score constants
            var bestchar = null;
            for (var cy = y; cy < y + h; cy++) {
                var chr = readChar(buffer, font, sorted[a].col, cx, cy, true, false);
                if (chr != null && chr.sizescore < best) {
                    best = chr.sizescore;
                    bestchar = chr;
                }
            }
            if (bestchar) {
                matchedchar = bestchar;
                break;
            }
        }
    }
    if (matchedchar == null) {
        return { text: "", debugArea: { x, y, w, h } };
    }
    return readLine(buffer, font, cols, matchedchar.x, matchedchar.y, false, true);
}
exports.readSmallCapsBackwards = readSmallCapsBackwards;
/**
 * Reads a single character at the exact given location
 * @param x exact x location of the start of the character domain (includes part of the spacing between characters)
 * @param y exact y location of the baseline pixel of the character
 * @param backwards read in backwards direction, the x location should be the first pixel after the character domain in that case
 */
function readChar(buffer, font, col, x, y, backwards, allowSecondary) {
    y -= font.basey;
    var shiftx = 0;
    var shifty = font.basey;
    var shadow = font.shadow;
    var debugobj = null;
    var debugimg = null;
    if (exports.debug.trackread) {
        var name = x + ";" + y + " " + JSON.stringify(col);
        if (!exports.debugout[name]) {
            exports.debugout[name] = [];
        }
        debugobj = exports.debugout[name];
    }
    //===== make sure the full domain is inside the bitmap/buffer ======
    if (y < 0 || y + font.height >= buffer.height) {
        return null;
    }
    if (!backwards) {
        if (x < 0 || x + font.width > buffer.width) {
            return null;
        }
    }
    else {
        if (x - font.width < 0 || x > buffer.width) {
            return null;
        }
    }
    //====== start reading the char ======
    var scores = [];
    for (var chr = 0; chr < font.chars.length; chr++) {
        var chrobj = font.chars[chr];
        if (chrobj.secondary && !allowSecondary) {
            continue;
        }
        scores[chr] = { score: 0, sizescore: 0, chr: chrobj };
        var chrx = (backwards ? x - chrobj.width : x);
        if (exports.debug.trackread) {
            debugimg = new base_1.ImageData(font.width, font.height);
        }
        for (var a = 0; a < chrobj.pixels.length;) {
            var i = (chrx + chrobj.pixels[a]) * 4 + (y + chrobj.pixels[a + 1]) * buffer.width * 4;
            var penalty = 0;
            if (!shadow) {
                penalty = canblend(buffer.data[i], buffer.data[i + 1], buffer.data[i + 2], col[0], col[1], col[2], chrobj.pixels[a + 2] / 255);
                a += 3;
            }
            else {
                var lum = chrobj.pixels[a + 3] / 255;
                penalty = canblend(buffer.data[i], buffer.data[i + 1], buffer.data[i + 2], col[0] * lum, col[1] * lum, col[2] * lum, chrobj.pixels[a + 2] / 255);
                a += 4;
            }
            scores[chr].score += Math.max(0, penalty);
            //TODO add compiler flag to this to remove it for performance
            if (debugimg) {
                debugimg.setPixel(chrobj.pixels[a], chrobj.pixels[a + 1], [penalty, penalty, penalty, 255]);
            }
        }
        scores[chr].sizescore = scores[chr].score - chrobj.bonus;
        if (debugobj) {
            debugobj.push({ chr: chrobj.chr, score: scores[chr].sizescore, rawscore: scores[chr].score, img: debugimg });
        }
    }
    scores.sort((a, b) => a.sizescore - b.sizescore);
    if (exports.debug.printcharscores) {
        scores.slice(0, 5).forEach(q => console.log(q.chr.chr, q.score.toFixed(3), q.sizescore.toFixed(3)));
    }
    var winchr = scores[0];
    if (!winchr || winchr.score > 400) {
        return null;
    }
    return { chr: winchr.chr.chr, basechar: winchr.chr, x: x + shiftx, y: y + shifty, score: winchr.score, sizescore: winchr.sizescore };
}
exports.readChar = readChar;
/**
 * Generates a font json description to use in reader functions
 * @param unblended A source image with all characters lined up. The image should be unblended into components using the unblend functions
 * The lowest pixel line of this image is used to mark the location and size of the charecters if the red component is 255 it means there is a character on that pixel column
 * @param chars A string containing all the characters of the image in the same order
 * @param seconds A string with characters that are considered unlikely and should only be detected if no other character is possible.
 * For example the period (.) character matches positive inside many other characters and should be marked as secondary
 * @param bonusses An object that contains bonus scores for certain difficult characters to make the more likely to be red.
 * @param basey The y position of the baseline pixel of the font
 * @param spacewidth the number of pixels a space takes
 * @param treshold minimal color match proportion (0-1) before a pixel is used for the font
 * @param shadow whether this font also uses the black shadow some fonts have. The "unblended" image should be unblended correspondingly
 * @returns a javascript object describing the font which is used as input for the different read functions
 */
function generatefont(unblended, chars, seconds, bonusses, basey, spacewidth, treshold, shadow) {
    //settings vars
    treshold *= 255;
    //initial vars
    var miny = unblended.height - 1;
    var maxy = 0;
    var font = { chars: [], width: 0, spacewidth: spacewidth, shadow: shadow, height: 0, basey: 0 };
    var ds = false;
    var chardata = [];
    //index all chars
    for (var dx = 0; dx < unblended.width; dx++) {
        var i = 4 * dx + 4 * unblended.width * (unblended.height - 1);
        if (unblended.data[i] == 255 && unblended.data[i + 3] == 255) {
            if (ds === false) {
                ds = dx;
            }
        }
        else {
            if (ds !== false) {
                //char found, start detection
                var de = dx;
                var char = chars[chardata.length];
                var chr = {
                    ds: ds,
                    de: de,
                    width: de - ds,
                    chr: char,
                    bonus: (bonusses && bonusses[char]) || 0,
                    secondary: seconds.indexOf(chars[chardata.length]) != -1,
                    pixels: []
                };
                chardata.push(chr);
                font.width = Math.max(font.width, chr.width);
                for (x = 0; x < de - ds; x++) {
                    for (y = 0; y < unblended.height - 1; y++) {
                        var i = (x + ds) * 4 + y * unblended.width * 4;
                        if (unblended.data[i] >= treshold) {
                            miny = Math.min(miny, y);
                            maxy = Math.max(maxy, y);
                        }
                    }
                }
                ds = false;
            }
        }
    }
    font.height = maxy + 1 - miny;
    font.basey = basey - miny;
    //detect all pixels
    for (var a in chardata) {
        var chr = chardata[a];
        for (var x = 0; x < chr.width; x++) {
            for (var y = 0; y < maxy + 1 - miny; y++) {
                var i = (x + chr.ds) * 4 + (y + miny) * unblended.width * 4;
                if (unblended.data[i] >= treshold) {
                    chr.pixels.push(x, y);
                    chr.pixels.push(unblended.data[i]);
                    if (shadow) {
                        chr.pixels.push(unblended.data[i + 1]);
                    }
                    chr.bonus += 5;
                }
            }
        }
        //prevent js from doing the thing with unnecessary output precision
        chr.bonus = +chr.bonus.toFixed(3);
        font.chars.push({ width: chr.width, bonus: chr.bonus, chr: chr.chr, pixels: chr.pixels, secondary: chr.secondary });
    }
    return font;
}
exports.generatefont = generatefont;


/***/ }),

/***/ "alt1/base":
/*!**************************************************************************************************!*\
  !*** external {"root":"A1lib","commonjs2":"alt1/base","commonjs":"alt1/base","amd":"alt1/base"} ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_base__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_26177__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_26177__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_26177__("./src/ocr/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "../node_modules/alt1/dist/targetmob/index.js":
/*!****************************************************!*\
  !*** ../node_modules/alt1/dist/targetmob/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js"), __webpack_require__(/*! alt1/ocr */ "../node_modules/alt1/dist/ocr/index.js"));
	else {}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_alt1_base__, __WEBPACK_EXTERNAL_MODULE_alt1_ocr__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/targetmob/imgs/detectimg.data.png":
/*!***********************************************!*\
  !*** ./src/targetmob/imgs/detectimg.data.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_905__) => {

module.exports=(__nested_webpack_require_905__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABoAAAARCAYAAADDjbwNAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAAYbm9QRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFYtZUsAAACJSURBVDhPtc09CoNAGIThZSEuG3KHLVKJCIJgfpAYxG5vkDL3v8NIAjZmCJ/CFE/zFjMOwG5VP8HHE0J9xzGVf9EBq3Pbf48Oj4xweSJ0A4rr+OPT6YDVcmRBB6xSc4MVHVCgUYFGBRoVaFSgUYFGBRoVaFSgUYFGBZdfb2yxHrByvoiw2n8ENwOqvL/qtsOgigAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/targetmob/index.ts":
/*!********************************!*\
  !*** ./src/targetmob/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_1620__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const a1lib = __importStar(__nested_webpack_require_1620__(/*! alt1/base */ "alt1/base"));
const OCR = __importStar(__nested_webpack_require_1620__(/*! alt1/ocr */ "alt1/ocr"));
const base_1 = __nested_webpack_require_1620__(/*! alt1/base */ "alt1/base");
var chatfont = __nested_webpack_require_1620__(/*! ../fonts/aa_8px.fontmeta.json */ "./src/fonts/aa_8px.fontmeta.json");
var imgs = (0, base_1.webpackImages)({
    detectimg: __nested_webpack_require_1620__(/*! ./imgs/detectimg.data.png */ "./src/targetmob/imgs/detectimg.data.png")
});
class TargetMobReader {
    constructor() {
        this.state = null;
        this.lastpos = null;
    }
    read(img) {
        if (!img) {
            img = a1lib.captureHoldFullRs();
        }
        var pos = img.findSubimage(imgs.detectimg);
        if (pos.length != 0) {
            var data = img.toData(pos[0].x - 151, pos[0].y - 16, 220, 44);
            var mobname = OCR.findReadLine(data, chatfont, [[255, 255, 255]], 62, 18, 20, 1);
            var mobhp = OCR.findReadLine(data, chatfont, [[255, 203, 5]], 92, 39, 20, 1);
            this.lastpos = pos[0];
            this.state = {
                name: mobname.text,
                hp: +mobhp.text
            };
        }
        else {
            this.state = null;
        }
        return this.state;
    }
}
exports["default"] = TargetMobReader;


/***/ }),

/***/ "alt1/base":
/*!**************************************************************************************************!*\
  !*** external {"root":"A1lib","commonjs2":"alt1/base","commonjs":"alt1/base","amd":"alt1/base"} ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_base__;

/***/ }),

/***/ "alt1/ocr":
/*!*********************************************************************************************!*\
  !*** external {"root":"OCR","commonjs2":"alt1/ocr","commonjs":"alt1/ocr","amd":"alt1/ocr"} ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_ocr__;

/***/ }),

/***/ "./src/fonts/aa_8px.fontmeta.json":
/*!****************************************!*\
  !*** ./src/fonts/aa_8px.fontmeta.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"chars":[{"width":7,"bonus":140,"chr":"a","pixels":[0,7,187,255,1,3,221,255,1,6,169,255,1,7,164,132,1,8,255,255,2,3,255,255,2,4,221,0,2,5,196,243,2,7,170,0,2,8,255,255,2,9,255,0,3,3,255,255,3,4,255,0,3,5,255,255,3,6,187,0,3,8,221,255,3,9,255,0,4,4,254,239,4,5,255,255,4,6,254,204,4,7,255,255,4,8,240,253,4,9,221,0,5,5,240,36,5,6,255,34,5,7,211,41,5,8,255,34,5,9,238,0],"secondary":false},{"width":7,"bonus":175,"chr":"b","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,248,209,1,4,243,178,1,5,230,75,1,6,230,75,1,7,243,178,1,8,246,194,1,9,204,0,2,3,255,255,2,4,204,0,2,5,170,0,2,8,255,255,2,9,187,0,3,3,255,255,3,4,255,0,3,8,255,255,3,9,255,0,4,3,169,255,4,4,254,171,4,7,169,255,4,9,255,0,5,4,204,128,5,5,232,205,5,6,205,233,5,8,170,0,6,6,187,0,6,7,187,0],"secondary":false},{"width":7,"bonus":95,"chr":"c","pixels":[0,5,169,255,0,6,187,255,1,4,187,255,1,6,193,90,1,7,237,201,1,8,164,185,2,3,255,255,2,5,187,0,2,8,255,255,3,3,255,255,3,4,255,0,3,8,255,255,3,9,255,0,4,3,221,255,4,4,255,34,4,8,221,255,4,9,255,0,5,4,226,39,5,9,221,0],"secondary":false},{"width":7,"bonus":180,"chr":"d","pixels":[0,5,187,255,0,6,187,255,1,4,169,255,1,6,205,85,1,7,232,187,1,8,203,213,2,3,255,255,2,5,170,0,2,8,255,255,2,9,170,0,3,3,255,255,3,4,255,0,3,8,255,255,3,9,255,0,4,3,203,255,4,4,254,171,4,7,169,255,4,8,187,255,4,9,255,0,5,1,203,255,5,2,225,251,5,3,225,251,5,4,248,227,5,5,244,231,5,6,230,245,5,7,230,245,5,8,237,219,5,9,187,0,6,2,204,0,6,3,221,0,6,4,221,0,6,5,221,0,6,6,221,0,6,7,221,0,6,8,221,0,6,9,204,0],"secondary":false},{"width":7,"bonus":135,"chr":"e","pixels":[0,5,187,255,0,6,169,255,1,4,187,255,1,5,255,255,1,6,209,104,1,7,237,219,2,3,255,255,2,5,255,255,2,6,255,0,2,8,255,255,3,3,255,255,3,4,255,0,3,5,255,255,3,6,255,0,3,8,255,255,3,9,255,0,4,3,187,255,4,4,255,119,4,5,255,255,4,6,255,0,4,8,221,255,4,9,255,0,5,4,224,155,5,5,227,229,5,6,255,0,5,9,221,0,6,6,204,0],"secondary":false},{"width":4,"bonus":90,"chr":"f","pixels":[0,3,203,255,1,2,221,255,1,3,255,255,1,4,248,227,1,5,225,251,1,6,225,251,1,7,225,251,1,8,210,247,2,1,255,255,2,3,255,255,2,4,255,0,2,5,221,0,2,6,221,0,2,7,221,0,2,8,221,0,2,9,204,0,3,2,255,0,3,4,255,0],"secondary":false},{"width":7,"bonus":200,"chr":"g","pixels":[0,5,187,255,0,6,187,255,1,3,169,255,1,4,153,255,1,5,155,112,1,6,205,85,1,7,232,187,1,8,184,189,1,11,153,255,2,3,255,255,2,4,170,0,2,5,153,0,2,8,255,255,2,11,245,247,3,3,255,255,3,4,255,0,3,8,255,255,3,9,255,0,3,11,221,255,4,3,221,255,4,4,255,136,4,7,153,255,4,8,221,255,4,9,255,85,4,10,203,255,5,3,203,255,5,4,250,226,5,5,239,236,5,6,230,245,5,7,230,245,5,8,241,234,5,9,243,178,5,11,204,0,6,4,204,0,6,5,221,0,6,6,221,0,6,7,221,0,6,8,221,0,6,9,221,0,6,10,170,0],"secondary":false},{"width":7,"bonus":165,"chr":"h","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,243,178,1,4,248,209,1,5,230,75,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,255,255,2,4,170,0,2,5,204,0,3,3,255,255,3,4,255,0,4,3,169,255,4,4,255,221,4,5,221,255,4,6,221,255,4,7,221,255,4,8,203,255,5,4,175,25,5,5,226,39,5,6,226,39,5,7,226,39,5,8,226,39,5,9,204,0],"secondary":false},{"width":3,"bonus":70,"chr":"i","pixels":[0,1,237,255,0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,238,0,1,4,211,41,1,5,226,39,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0],"secondary":false},{"width":4,"bonus":90,"chr":"j","pixels":[0,11,153,255,1,11,169,255,2,1,203,255,2,3,203,255,2,4,225,251,2,5,225,251,2,6,225,251,2,7,225,251,2,8,225,251,2,9,225,251,3,2,204,0,3,4,204,0,3,5,221,0,3,6,221,0,3,7,221,0,3,8,221,0,3,9,221,0,3,10,221,0],"secondary":false},{"width":6,"bonus":130,"chr":"k","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,4,166,235,2,5,255,255,2,6,255,221,3,3,203,255,3,5,153,0,3,6,255,51,3,7,250,226,3,8,160,217,4,4,204,0,4,8,239,145],"secondary":false},{"width":3,"bonus":75,"chr":"l","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,255,255,2,9,255,0],"secondary":false},{"width":10,"bonus":210,"chr":"m","pixels":[0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,4,248,227,1,5,230,75,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,237,255,2,5,221,0,3,3,255,255,3,4,238,0,4,3,153,255,4,4,255,255,4,5,221,255,4,6,221,255,4,7,221,255,4,8,203,255,5,4,228,209,5,5,255,68,5,6,226,39,5,7,226,39,5,8,226,39,5,9,204,0,6,3,255,255,6,5,187,0,7,3,237,255,7,4,255,85,8,4,249,174,8,5,232,243,8,6,225,251,8,7,225,251,8,8,210,247,9,5,170,0,9,6,221,0,9,7,221,0,9,8,221,0,9,9,204,0],"secondary":false},{"width":7,"bonus":140,"chr":"n","pixels":[0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,4,248,227,1,5,232,93,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,237,255,2,5,221,0,3,3,255,255,3,4,238,0,4,3,237,255,4,4,255,85,5,4,249,174,5,5,232,243,5,6,225,251,5,7,225,251,5,8,210,247,6,5,170,0,6,6,221,0,6,7,221,0,6,8,221,0,6,9,204,0],"secondary":false},{"width":8,"bonus":120,"chr":"o","pixels":[0,5,187,255,0,6,169,255,1,4,203,255,1,6,209,104,1,7,244,231,2,3,237,255,2,5,204,0,2,8,252,241,3,3,255,255,3,4,238,0,3,8,255,255,3,9,238,0,4,3,237,255,4,4,255,0,4,8,255,255,4,9,255,0,5,4,251,207,5,7,221,255,5,9,255,0,6,5,237,183,6,6,192,225,6,8,221,0,7,6,170,0,7,7,170,0],"secondary":false},{"width":6,"bonus":170,"chr":"p","pixels":[0,3,237,255,0,4,255,255,0,5,187,255,0,6,203,255,0,7,255,255,0,8,221,255,0,9,221,255,0,10,221,255,1,3,255,255,1,4,240,36,1,5,255,0,1,6,187,0,1,7,211,41,1,8,254,239,1,9,221,0,1,10,221,0,1,11,221,0,2,3,255,255,2,4,255,0,2,8,255,255,2,9,238,0,3,3,237,255,3,4,255,34,3,8,237,255,3,9,255,0,4,4,253,240,4,5,255,255,4,6,255,255,4,7,237,255,4,9,238,0,5,5,239,18,5,6,255,17,5,7,255,0,5,8,238,0],"secondary":false},{"width":7,"bonus":165,"chr":"q","pixels":[0,5,187,255,0,6,187,255,1,3,169,255,1,4,153,255,1,5,155,112,1,6,205,85,1,7,228,171,1,8,209,207,2,3,255,255,2,4,170,0,2,5,153,0,2,8,255,255,2,9,170,0,3,3,237,255,3,4,255,17,3,8,237,255,3,9,255,0,4,3,255,255,4,4,255,255,4,5,191,250,4,6,187,255,4,7,255,255,4,8,239,254,4,9,253,223,4,10,221,255,5,4,255,34,5,5,255,34,5,6,196,45,5,7,196,45,5,8,255,34,5,9,240,36,5,10,226,39,5,11,221,0],"secondary":false},{"width":4,"bonus":85,"chr":"r","pixels":[0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,3,187,255,1,4,244,213,1,5,232,93,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,255,255,2,4,187,0,2,5,204,0,3,4,255,0],"secondary":false},{"width":6,"bonus":100,"chr":"s","pixels":[0,4,187,255,1,3,255,255,1,5,250,243,1,8,255,255,2,3,255,255,2,4,255,0,2,5,155,196,2,6,246,123,2,8,255,255,2,9,255,0,3,3,255,255,3,4,255,0,3,6,245,247,3,7,164,132,3,8,255,255,3,9,255,0,4,4,255,17,4,7,250,191,4,9,255,0,5,8,187,0],"secondary":false},{"width":5,"bonus":80,"chr":"t","pixels":[1,2,221,255,1,3,255,255,1,4,235,240,1,5,221,255,1,6,221,255,1,7,169,255,2,3,255,255,2,4,255,34,2,5,226,39,2,6,226,39,2,7,232,93,2,8,249,243,3,4,255,0,3,8,187,209,3,9,238,0,4,9,153,0],"secondary":false},{"width":6,"bonus":135,"chr":"u","pixels":[0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,169,255,1,4,211,41,1,5,226,39,1,6,226,39,1,7,232,93,1,8,249,243,2,8,255,255,2,9,238,0,3,8,203,255,3,9,255,0,4,3,203,255,4,4,221,255,4,5,221,255,4,6,203,255,4,7,255,255,4,8,228,247,4,9,204,0,5,4,211,41,5,5,226,39,5,6,226,39,5,7,211,41,5,8,255,34,5,9,221,0],"secondary":false},{"width":6,"bonus":95,"chr":"v","pixels":[0,3,237,255,1,4,247,141,1,5,245,247,1,6,203,255,2,6,241,54,2,7,255,255,2,8,255,255,3,5,153,255,3,6,255,255,3,7,173,226,3,8,255,51,3,9,255,0,4,3,237,255,4,4,203,255,4,6,153,0,4,7,255,0,4,8,153,0,5,4,238,0,5,5,204,0],"secondary":false},{"width":10,"bonus":170,"chr":"w","pixels":[1,3,153,255,1,4,243,249,1,5,187,255,2,4,153,0,2,5,243,71,2,6,228,171,2,7,243,249,2,8,187,255,3,6,217,239,3,7,248,244,3,8,248,157,3,9,187,0,4,3,169,255,4,4,255,255,4,7,204,0,4,8,238,0,4,9,153,0,5,4,244,231,5,5,255,221,5,6,191,159,6,5,223,19,6,6,237,128,6,7,255,255,6,8,223,253,7,6,239,254,7,7,227,229,7,8,255,119,7,9,221,0,8,3,237,255,8,4,203,255,8,7,238,0,8,8,204,0,9,4,238,0,9,5,204,0],"secondary":false},{"width":6,"bonus":95,"chr":"x","pixels":[0,8,169,255,1,3,169,255,1,4,224,232,1,7,221,255,1,9,170,0,2,4,193,90,2,5,255,255,2,6,240,253,2,8,221,0,3,4,255,255,3,5,155,196,3,6,255,187,3,7,250,191,4,3,221,255,4,5,255,0,4,7,209,104,4,8,255,255,5,4,221,0,5,9,255,0],"secondary":false},{"width":6,"bonus":110,"chr":"y","pixels":[0,3,255,255,0,4,153,255,0,11,221,255,1,4,255,85,1,5,234,222,1,6,228,247,1,11,196,243,2,6,207,21,2,7,246,194,2,8,255,255,2,9,237,255,3,6,237,255,3,7,191,250,3,8,205,85,3,9,255,0,3,10,238,0,4,3,203,255,4,4,221,255,4,7,238,0,4,8,187,0,5,4,204,0,5,5,221,0],"secondary":false},{"width":6,"bonus":130,"chr":"z","pixels":[0,3,153,255,0,8,203,255,1,3,255,255,1,4,153,0,1,7,221,255,1,8,255,255,1,9,204,0,2,3,255,255,2,4,255,0,2,6,255,255,2,8,255,255,2,9,255,0,3,3,255,255,3,4,254,171,3,5,169,255,3,7,255,0,3,8,255,255,3,9,255,0,4,3,255,255,4,4,255,119,4,5,170,0,4,6,170,0,4,8,255,255,4,9,255,0,5,4,255,0,5,9,255,0],"secondary":false},{"width":8,"bonus":155,"chr":"A","pixels":[0,8,153,255,1,6,221,255,1,7,237,255,1,9,153,0,2,3,169,255,2,4,255,255,2,5,187,255,2,6,255,255,2,7,221,0,2,8,238,0,3,1,255,255,3,2,255,255,3,4,170,0,3,5,255,0,3,6,255,255,3,7,255,0,4,2,255,255,4,3,254,239,4,4,184,189,4,6,255,255,4,7,255,0,5,3,255,34,5,4,247,141,5,5,255,255,5,6,255,255,5,7,255,102,6,6,255,85,6,7,255,187,6,8,255,255,7,8,187,0,7,9,255,0],"secondary":false},{"width":7,"bonus":225,"chr":"B","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,255,255,1,5,226,39,1,6,226,39,1,7,226,39,1,8,255,255,1,9,204,0,2,1,255,255,2,2,255,0,2,4,255,255,2,5,255,0,2,8,255,255,2,9,255,0,3,1,255,255,3,2,255,0,3,4,255,255,3,5,255,0,3,8,255,255,3,9,255,0,4,1,221,255,4,2,255,85,4,4,255,255,4,5,254,171,4,8,203,255,4,9,255,0,5,2,243,178,5,3,198,219,5,5,255,102,5,6,232,205,5,7,180,217,5,9,204,0,6,3,170,0,6,4,170,0,6,7,187,0,6,8,153,0],"secondary":false},{"width":9,"bonus":155,"chr":"C","pixels":[0,4,187,255,0,5,187,255,1,2,221,255,1,3,153,255,1,4,155,112,1,5,205,85,1,6,228,171,1,7,224,232,2,1,169,255,2,3,221,0,2,4,153,0,2,7,194,135,2,8,237,183,3,1,255,255,3,2,170,0,3,8,255,255,3,9,170,0,4,1,255,255,4,2,255,0,4,8,255,255,4,9,255,0,5,1,255,255,5,2,255,0,5,8,255,255,5,9,255,0,6,1,169,255,6,2,255,102,6,8,169,255,6,9,255,0,7,2,181,48,7,9,170,0],"secondary":false},{"width":8,"bonus":200,"chr":"D","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,255,255,1,9,204,0,2,1,255,255,2,2,255,0,2,8,255,255,2,9,255,0,3,1,255,255,3,2,255,0,3,8,255,255,3,9,255,0,4,1,203,255,4,2,255,68,4,8,203,255,4,9,255,0,5,2,248,227,5,3,168,207,5,7,221,255,5,9,204,0,6,3,237,128,6,4,223,214,6,5,205,233,6,6,155,196,6,8,221,0,7,5,187,0,7,6,187,0],"secondary":false},{"width":6,"bonus":180,"chr":"E","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,255,255,1,9,204,0,2,1,255,255,2,2,255,0,2,5,255,255,2,6,255,0,2,8,255,255,2,9,255,0,3,1,255,255,3,2,255,0,3,5,255,255,3,6,255,0,3,8,255,255,3,9,255,0,4,1,153,255,4,2,255,0,4,6,255,0,4,8,221,255,4,9,255,0,5,2,153,0,5,9,221,0],"secondary":false},{"width":6,"bonus":135,"chr":"F","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,1,255,255,2,2,255,0,2,5,255,255,2,6,255,0,3,1,255,255,3,2,255,0,3,5,255,255,3,6,255,0,4,2,255,0,4,6,255,0],"secondary":false},{"width":9,"bonus":200,"chr":"G","pixels":[0,4,169,255,0,5,187,255,1,2,203,255,1,3,153,255,1,5,193,90,1,6,224,155,1,7,237,238,2,1,169,255,2,3,204,0,2,4,153,0,2,7,175,124,2,8,246,194,3,1,255,255,3,2,170,0,3,8,255,255,3,9,187,0,4,1,255,255,4,2,255,0,4,8,255,255,4,9,255,0,5,1,255,255,5,2,255,0,5,8,237,255,5,9,255,0,6,1,169,255,6,2,255,85,6,5,255,255,6,7,153,255,6,8,169,255,6,9,238,0,7,2,175,25,7,5,153,255,7,6,255,221,7,7,225,251,7,8,234,222,7,9,170,0,8,6,153,0,8,7,221,0,8,8,221,0,8,9,204,0],"secondary":false},{"width":8,"bonus":200,"chr":"H","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,5,255,255,2,6,255,0,3,5,255,255,3,6,255,0,4,5,255,255,4,6,255,0,5,5,255,255,5,6,255,34,6,1,203,255,6,2,225,251,6,3,225,251,6,4,225,251,6,5,225,251,6,6,255,221,6,7,225,251,6,8,210,247,7,2,204,0,7,3,221,0,7,4,221,0,7,5,221,0,7,6,221,0,7,7,221,0,7,8,221,0,7,9,204,0],"secondary":false},{"width":4,"bonus":110,"chr":"I","pixels":[0,1,191,255,0,8,191,255,1,1,255,255,1,2,255,255,1,3,255,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,191,0,2,1,191,255,2,2,255,0,2,3,255,0,2,4,255,0,2,5,255,0,2,6,255,0,2,7,255,0,2,8,255,191,2,9,255,0,3,2,192,0,3,9,191,0],"secondary":false},{"width":6,"bonus":130,"chr":"J","pixels":[0,6,153,255,0,7,153,255,1,7,194,135,1,8,234,222,2,1,221,255,2,8,255,255,2,9,204,0,3,1,255,255,3,2,226,39,3,8,203,255,3,9,255,0,4,1,203,255,4,2,255,221,4,3,225,251,4,4,225,251,4,5,225,251,4,6,225,251,4,7,166,235,4,9,204,0,5,2,204,0,5,3,221,0,5,4,221,0,5,5,221,0,5,6,221,0,5,7,221,0,5,8,153,0],"secondary":false},{"width":7,"bonus":155,"chr":"K","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,226,39,1,4,255,255,1,5,226,39,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,4,255,255,2,5,255,102,3,3,221,255,3,5,254,171,3,6,224,232,4,1,203,255,4,2,153,255,4,4,221,0,4,6,193,90,4,7,251,242,4,8,173,226,5,2,204,0,5,3,153,0,5,8,247,141,5,9,153,0],"secondary":false},{"width":6,"bonus":115,"chr":"L","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,255,255,1,9,204,0,2,8,255,255,2,9,255,0,3,8,255,255,3,9,255,0,4,8,255,255,4,9,255,0,5,9,255,0],"secondary":false},{"width":9,"bonus":240,"chr":"M","pixels":[0,1,245,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,0,8,255,255,1,2,251,173,1,3,255,225,1,4,255,85,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0,1,9,255,0,2,3,191,83,2,4,249,212,2,5,212,229,3,5,226,119,3,6,249,237,3,7,165,227,4,6,241,245,4,7,245,155,4,8,155,32,5,4,207,255,5,5,191,254,5,7,232,0,6,2,169,255,6,3,223,255,6,5,207,0,6,6,190,0,7,1,245,255,7,2,255,255,7,3,255,255,7,4,255,255,7,5,255,255,7,6,255,255,7,7,255,255,7,8,255,255,8,2,245,0,8,3,255,0,8,4,255,0,8,5,255,0,8,6,255,0,8,7,255,0,8,8,255,0,8,9,255,0],"secondary":false},{"width":8,"bonus":200,"chr":"N","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,255,255,1,3,235,111,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,255,221,2,4,163,160,3,4,246,194,3,5,214,223,4,5,214,122,4,6,246,229,5,6,163,160,5,7,255,255,6,1,203,255,6,2,225,251,6,3,225,251,6,4,225,251,6,5,225,251,6,6,225,251,6,7,235,240,6,8,254,204,7,2,204,0,7,3,221,0,7,4,221,0,7,5,221,0,7,6,221,0,7,7,221,0,7,8,221,0,7,9,204,0],"secondary":false},{"width":10,"bonus":200,"chr":"O","pixels":[0,4,187,255,0,5,169,255,1,2,203,255,1,3,153,255,1,5,205,85,1,6,226,192,1,7,224,232,2,1,153,255,2,3,204,0,2,4,153,0,2,7,209,145,2,8,234,167,3,1,255,255,3,2,153,0,3,8,255,255,3,9,153,0,4,1,255,255,4,2,255,0,4,8,255,255,4,9,255,0,5,1,255,255,5,2,255,0,5,8,255,255,5,9,255,0,6,1,153,255,6,2,255,102,6,8,153,255,6,9,255,0,7,2,234,222,7,3,194,201,7,6,169,255,7,7,203,255,7,9,153,0,8,3,225,116,8,4,228,209,8,5,192,225,8,7,170,0,8,8,204,0,9,5,187,0,9,6,170,0],"secondary":false},{"width":7,"bonus":165,"chr":"P","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,1,255,255,2,2,255,0,2,5,255,255,2,6,255,0,3,1,255,255,3,2,255,0,3,5,255,255,3,6,255,0,4,1,187,255,4,2,255,136,4,5,187,255,4,6,255,0,5,2,224,155,5,3,239,236,5,6,187,0,6,4,221,0],"secondary":false},{"width":9,"bonus":185,"chr":"Q","pixels":[0,4,187,255,0,5,187,255,1,2,221,255,1,4,155,112,1,5,205,85,1,6,228,171,1,7,235,240,2,1,187,255,2,3,221,0,2,7,187,116,2,8,243,178,3,1,255,255,3,2,187,0,3,8,255,255,3,9,170,0,4,1,255,255,4,2,255,0,4,8,255,255,4,9,255,0,5,1,237,255,5,2,255,0,5,8,237,255,5,9,255,0,6,2,251,207,6,7,255,255,6,9,238,0,7,3,255,255,7,4,203,255,7,5,221,255,7,6,255,255,7,7,155,196,7,8,254,204,8,4,255,17,8,5,207,21,8,6,221,0,8,7,255,0,8,9,204,0],"secondary":false},{"width":7,"bonus":180,"chr":"R","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,1,255,255,2,2,255,0,2,5,255,255,2,6,255,0,3,1,255,255,3,2,255,0,3,5,255,255,3,6,255,187,4,2,254,239,4,3,203,255,4,4,255,255,4,6,255,68,4,7,250,243,4,8,181,239,5,3,239,18,5,4,204,0,5,5,255,0,5,8,245,107,5,9,170,0],"secondary":false},{"width":6,"bonus":130,"chr":"S","pixels":[0,2,153,255,0,3,169,255,1,1,203,255,1,3,187,116,1,4,244,231,1,8,243,249,2,1,255,255,2,2,204,0,2,4,198,219,2,5,232,93,2,8,255,255,2,9,238,0,3,1,255,255,3,2,255,0,3,5,255,255,3,8,255,255,3,9,255,0,4,1,169,255,4,2,255,68,4,5,160,217,4,6,255,221,4,7,237,255,4,9,255,0,5,2,170,0,5,7,223,19,5,8,238,0],"secondary":false},{"width":8,"bonus":125,"chr":"T","pixels":[0,1,255,255,1,1,255,255,1,2,255,0,2,1,255,255,2,2,255,34,3,1,255,255,3,2,255,221,3,3,225,251,3,4,225,251,3,5,225,251,3,6,225,251,3,7,225,251,3,8,210,247,4,1,255,255,4,2,255,0,4,3,221,0,4,4,221,0,4,5,221,0,4,6,221,0,4,7,221,0,4,8,221,0,4,9,204,0,5,1,255,255,5,2,255,0,6,2,255,0],"secondary":false},{"width":8,"bonus":165,"chr":"U","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,187,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,226,39,1,6,230,75,1,7,232,187,1,8,184,189,2,8,255,255,3,8,255,255,3,9,255,0,4,8,221,255,4,9,255,0,5,1,203,255,5,2,221,255,5,3,221,255,5,4,221,255,5,5,221,255,5,6,255,255,5,7,237,255,5,9,221,0,6,2,211,41,6,3,226,39,6,4,226,39,6,5,226,39,6,6,223,19,6,7,255,0,6,8,238,0],"secondary":false},{"width":7,"bonus":125,"chr":"V","pixels":[0,1,255,255,0,2,187,255,1,2,255,68,1,3,228,171,1,4,255,255,1,5,153,255,2,4,153,0,2,5,255,85,2,6,228,209,2,7,242,251,3,6,164,185,3,7,255,255,3,8,251,207,4,4,203,255,4,5,237,255,4,8,255,0,4,9,204,0,5,1,169,255,5,2,255,255,5,3,153,255,5,5,204,0,5,6,238,0,6,2,170,0,6,3,255,0,6,4,153,0],"secondary":false},{"width":10,"bonus":245,"chr":"W","pixels":[0,1,255,255,0,2,221,255,1,2,255,17,1,3,237,128,1,4,223,214,1,5,255,255,1,6,203,255,2,5,191,23,2,6,255,136,2,7,255,255,2,8,255,255,3,3,153,255,3,4,237,255,3,5,221,255,3,7,168,103,3,8,255,0,3,9,255,0,4,1,255,255,4,2,255,255,4,3,187,209,4,4,153,0,4,5,238,0,4,6,221,0,5,2,255,102,5,3,254,171,5,4,248,244,5,5,203,255,6,4,170,0,6,5,241,54,6,6,231,150,6,7,255,255,6,8,255,255,7,4,153,255,7,5,237,255,7,6,241,252,7,7,207,188,7,8,255,85,7,9,255,0,8,1,237,255,8,2,237,255,8,3,153,255,8,4,153,171,8,5,153,0,8,6,238,0,8,7,238,0,8,8,153,0,9,2,238,0,9,3,238,0,9,4,153,0],"secondary":false},{"width":7,"bonus":130,"chr":"X","pixels":[0,8,169,255,1,1,187,255,1,2,220,236,1,7,237,255,1,9,170,0,2,2,205,85,2,3,248,227,2,4,166,235,2,5,255,255,2,6,153,255,2,8,238,0,3,3,155,196,3,4,255,255,3,5,248,244,3,6,255,51,3,7,153,0,4,2,237,255,4,5,255,51,4,6,251,207,4,7,186,233,5,1,203,255,5,3,238,0,5,7,225,116,5,8,255,255,6,2,204,0,6,9,255,0],"secondary":false},{"width":7,"bonus":90,"chr":"Y","pixels":[0,1,169,255,1,2,249,243,2,3,248,157,2,4,255,255,3,4,241,234,3,5,254,204,3,6,232,243,3,7,225,251,3,8,210,247,4,3,255,255,4,5,221,0,4,6,204,0,4,7,221,0,4,8,221,0,4,9,204,0,5,1,237,255,5,4,255,0,6,2,238,0],"secondary":false},{"width":7,"bonus":140,"chr":"Z","pixels":[0,8,187,255,1,1,255,255,1,7,221,255,1,8,255,255,1,9,187,0,2,1,255,255,2,2,255,0,2,5,203,255,2,8,255,255,2,9,255,0,3,1,255,255,3,2,255,0,3,4,203,255,3,6,204,0,3,8,255,255,3,9,255,0,4,1,255,255,4,2,255,221,4,5,204,0,4,8,255,255,4,9,255,0,5,1,187,255,5,2,255,34,5,3,221,0,5,8,153,255,5,9,255,0,6,2,187,0,6,9,153,0],"secondary":false},{"width":7,"bonus":170,"chr":"0","pixels":[0,2,153,255,0,3,221,255,0,4,255,255,0,5,255,255,0,6,237,255,0,7,169,255,1,1,187,255,1,3,153,0,1,4,221,0,1,5,255,0,1,6,255,0,1,7,243,71,1,8,237,219,2,1,187,255,2,2,187,0,2,8,205,233,2,9,211,41,3,1,221,255,3,2,205,85,3,8,203,255,3,9,187,0,4,2,243,178,4,3,255,255,4,4,187,255,4,5,187,255,4,6,237,255,4,7,169,255,4,9,204,0,5,3,170,0,5,4,255,0,5,5,187,0,5,6,187,0,5,7,238,0,5,8,170,0],"secondary":false},{"width":7,"bonus":100,"chr":"1","pixels":[1,8,187,255,2,1,203,255,2,2,224,232,2,3,219,218,2,4,187,255,2,5,187,255,2,6,187,255,2,7,187,255,2,8,237,255,2,9,187,0,3,2,218,80,3,3,218,80,3,4,205,85,3,5,205,85,3,6,205,85,3,7,205,85,3,8,241,215,3,9,238,0,4,8,168,207,4,9,204,0],"secondary":false},{"width":7,"bonus":105,"chr":"2","pixels":[1,8,255,255,2,1,187,255,2,6,153,255,2,8,223,214,2,9,255,0,3,1,203,255,3,2,187,0,3,5,153,255,3,7,153,0,3,8,219,218,3,9,187,0,4,1,187,255,4,2,234,167,4,4,203,255,4,6,153,0,4,8,187,255,4,9,187,0,5,2,214,122,5,3,200,152,5,5,204,0,5,9,187,0],"secondary":false},{"width":7,"bonus":105,"chr":"3","pixels":[0,8,203,255,1,1,187,255,1,8,191,250,1,9,204,0,2,1,187,255,2,2,196,45,2,4,187,255,2,5,174,150,2,8,203,255,2,9,187,0,3,2,246,229,3,3,210,247,3,5,241,215,3,6,173,175,3,7,169,255,3,9,204,0,4,3,227,57,4,4,204,0,4,6,228,133,4,7,174,150,4,8,170,0],"secondary":false},{"width":7,"bonus":150,"chr":"4","pixels":[0,6,237,255,1,4,187,255,1,6,219,218,1,7,238,0,2,3,169,255,2,5,187,0,2,6,219,218,2,7,187,0,3,1,187,255,3,2,153,255,3,3,155,112,3,4,193,90,3,6,203,255,3,7,205,85,4,1,187,255,4,2,237,201,4,3,228,209,4,4,205,233,4,5,205,233,4,6,242,251,4,7,241,198,4,8,205,233,5,2,187,0,5,3,187,0,5,4,187,0,5,5,187,0,5,6,224,155,5,7,238,0,5,8,187,0,5,9,187,0],"secondary":false},{"width":7,"bonus":130,"chr":"5","pixels":[1,1,237,255,1,2,187,255,1,3,187,255,1,4,187,255,1,8,207,251,2,1,187,255,2,2,238,0,2,3,187,0,2,4,237,201,2,5,187,0,2,8,187,255,2,9,204,0,3,1,187,255,3,2,187,0,3,4,203,255,3,5,191,23,3,8,203,255,3,9,187,0,4,2,187,0,4,5,251,242,4,6,191,250,4,7,221,255,4,9,204,0,5,6,243,71,5,7,191,23,5,8,221,0],"secondary":false},{"width":7,"bonus":150,"chr":"6","pixels":[0,3,169,255,0,4,255,255,0,5,255,255,0,6,237,255,0,7,153,255,1,2,187,255,1,4,209,145,1,5,255,68,1,6,255,0,1,7,246,123,1,8,228,209,2,1,203,255,2,3,187,0,2,4,200,238,2,8,219,218,2,9,187,0,3,1,187,255,3,2,204,0,3,4,203,255,3,5,205,85,3,8,187,255,3,9,187,0,4,2,187,0,4,5,248,227,4,6,255,255,4,7,187,255,4,9,187,0,5,6,221,0,5,7,255,0,5,8,187,0],"secondary":false},{"width":7,"bonus":105,"chr":"7","pixels":[0,1,187,255,1,1,187,255,1,2,187,0,1,8,203,255,2,1,187,255,2,2,187,0,2,6,237,255,2,7,153,255,2,9,204,0,3,1,187,255,3,2,205,85,3,3,153,255,3,4,221,255,3,7,238,0,3,8,153,0,4,1,255,255,4,2,237,201,4,4,153,0,4,5,221,0,5,2,255,0,5,3,187,0],"secondary":false},{"width":7,"bonus":165,"chr":"8","pixels":[1,2,237,255,1,3,221,255,1,6,203,255,1,7,228,247,2,1,203,255,2,3,241,54,2,4,248,209,2,5,186,233,2,7,207,21,2,8,250,226,3,1,187,255,3,2,204,0,3,4,186,233,3,5,221,98,3,6,170,0,3,8,191,250,3,9,221,0,4,1,221,255,4,2,209,104,4,4,169,255,4,5,237,219,4,8,187,255,4,9,187,0,5,2,243,178,5,3,187,209,5,5,204,128,5,6,251,242,5,7,240,253,5,9,187,0,6,3,170,0,6,4,153,0,6,7,238,0,6,8,238,0],"secondary":false},{"width":7,"bonus":160,"chr":"9","pixels":[1,2,221,255,1,3,191,250,1,4,242,251,1,8,153,255,2,1,203,255,2,3,221,0,2,4,191,23,2,5,253,223,2,8,191,250,2,9,153,0,3,1,187,255,3,2,204,0,3,5,191,250,3,6,221,0,3,8,203,255,3,9,187,0,4,1,187,255,4,2,218,139,4,6,200,65,4,7,169,255,4,9,204,0,5,2,228,171,5,3,245,247,5,4,255,255,5,5,255,255,5,6,223,214,5,8,170,0,6,3,153,0,6,4,238,0,6,5,255,0,6,6,255,0,6,7,187,0],"secondary":false},{"width":8,"bonus":130,"chr":"%","pixels":[0,3,255,255,0,8,255,255,1,2,255,255,1,4,255,255,1,7,255,255,1,9,255,0,2,3,255,255,2,5,255,41,2,6,255,255,2,8,255,0,3,4,255,41,3,5,255,255,3,7,255,0,4,4,255,255,4,6,255,92,4,7,255,255,5,3,255,255,5,5,255,0,5,6,255,255,5,8,255,255,6,2,255,255,6,4,255,0,6,7,255,255,6,9,255,0,7,3,255,0,7,8,255,0],"secondary":false},{"width":4,"bonus":80,"chr":"/","pixels":[0,7,153,255,0,8,237,255,0,9,221,255,1,4,187,255,1,5,237,255,1,6,169,255,1,8,153,0,1,9,238,0,1,10,221,0,2,1,221,255,2,2,221,255,2,5,187,0,2,6,238,0,2,7,170,0,3,2,221,0,3,3,221,0],"secondary":false},{"width":7,"bonus":110,"chr":"+","pixels":[0,5,221,255,1,5,255,255,1,6,221,0,2,5,255,255,2,6,255,34,3,2,153,255,3,3,223,253,3,4,225,251,3,5,255,255,3,6,255,221,3,7,225,251,3,8,210,247,4,3,153,0,4,4,221,0,4,5,255,255,4,6,255,0,4,7,221,0,4,8,221,0,4,9,204,0,5,5,255,255,5,6,255,0,6,6,255,0],"secondary":false},{"width":5,"bonus":75,"chr":"?","pixels":[0,1,169,255,1,1,255,255,1,2,170,0,1,6,221,255,1,8,255,255,2,1,255,255,2,2,255,0,2,5,169,255,2,7,221,0,2,9,255,0,3,2,255,255,3,3,221,255,3,6,170,0,4,3,255,17,4,4,221,0],"secondary":false},{"width":2,"bonus":70,"chr":"!","pixels":[0,1,169,255,0,2,187,255,0,3,187,255,0,4,187,255,0,5,187,255,0,6,169,255,0,8,255,255,1,2,181,48,1,3,196,45,1,4,196,45,1,5,196,45,1,6,196,45,1,7,170,0,1,9,255,0],"secondary":false},{"width":8,"bonus":230,"chr":"@","pixels":[0,4,255,255,0,5,255,255,0,6,221,255,0,7,255,255,0,8,187,255,1,3,221,255,1,5,255,0,1,6,255,34,1,7,221,0,1,8,255,68,1,9,250,243,2,2,221,255,2,4,232,93,2,5,255,255,2,6,237,255,2,7,255,255,2,10,248,157,3,2,255,255,3,3,221,0,3,4,255,255,3,6,255,0,3,7,241,54,3,8,254,204,3,10,214,223,3,11,153,0,4,2,237,255,4,3,255,0,4,4,255,255,4,5,255,0,4,8,255,255,4,9,204,0,4,11,187,0,5,3,253,240,5,4,255,255,5,5,255,221,5,6,221,255,5,7,221,255,5,8,237,255,5,9,255,0,6,4,240,36,6,5,255,34,6,6,226,39,6,7,226,39,6,8,250,226,6,9,238,0,7,9,221,0],"secondary":false},{"width":8,"bonus":200,"chr":"#","pixels":[0,6,255,255,1,3,255,255,1,6,255,255,1,7,254,171,1,8,237,255,2,1,169,255,2,2,237,255,2,3,255,255,2,4,255,221,2,5,175,247,2,6,255,255,2,7,255,85,2,8,170,0,2,9,238,0,3,2,170,0,3,3,255,255,3,4,255,0,3,5,221,0,3,6,255,255,3,7,255,0,4,3,255,255,4,4,255,153,4,5,203,255,4,6,255,255,4,7,254,239,4,8,187,255,5,1,255,255,5,2,187,255,5,3,255,255,5,4,255,85,5,5,159,27,5,6,255,255,5,7,255,0,5,8,238,0,5,9,187,0,6,2,255,0,6,3,255,255,6,4,255,0,6,7,255,0,7,4,255,0],"secondary":false},{"width":6,"bonus":130,"chr":"$","pixels":[0,2,153,255,0,3,169,255,1,1,203,255,1,3,187,116,1,4,244,231,1,8,243,249,2,0,203,255,2,1,237,255,2,2,204,0,2,4,176,197,2,5,237,128,2,8,240,253,2,9,251,207,3,1,251,242,3,2,239,18,3,5,247,245,3,6,164,132,3,8,255,255,3,9,240,36,3,10,204,0,4,2,240,36,4,6,249,174,4,7,198,219,4,9,255,0,5,7,170,0,5,8,170,0],"secondary":false},{"width":6,"bonus":75,"chr":"^","pixels":[0,4,153,255,0,5,237,255,1,2,203,255,1,3,221,255,1,5,153,0,1,6,238,0,2,1,221,255,2,2,230,245,2,3,218,80,2,4,221,0,3,2,227,57,3,3,246,194,3,4,230,245,4,4,187,0,4,5,239,145],"secondary":false},{"width":6,"bonus":35,"chr":"~","pixels":[1,5,255,255,2,5,221,255,2,6,255,51,3,6,250,226,4,5,203,255,4,7,221,0,5,6,204,0],"secondary":false},{"width":7,"bonus":175,"chr":"&","pixels":[0,6,187,255,1,2,237,255,1,3,255,255,1,4,191,250,1,5,187,255,1,7,224,155,1,8,223,214,2,1,255,255,2,3,238,0,2,4,255,255,2,5,191,23,2,6,187,0,2,8,255,255,2,9,187,0,3,1,255,255,3,2,255,0,3,4,255,255,3,5,255,0,3,8,255,255,3,9,255,0,4,2,255,0,4,4,255,255,4,5,255,34,4,8,187,255,4,9,255,0,5,3,203,255,5,4,255,255,5,5,255,221,5,6,196,243,5,7,155,196,5,9,187,0,6,4,234,167,6,5,255,0,6,6,221,0,6,7,187,0],"secondary":false},{"width":6,"bonus":70,"chr":"*","pixels":[0,2,169,255,1,2,169,255,1,3,237,219,1,4,255,255,2,1,203,255,2,2,240,253,2,3,255,255,2,4,228,133,2,5,255,0,3,2,237,183,3,3,245,107,3,4,255,153,4,3,170,0,4,5,153,0],"secondary":false},{"width":4,"bonus":100,"chr":"(","pixels":[0,3,173,255,0,4,239,255,0,5,253,255,0,6,229,255,0,7,171,255,1,1,193,255,1,2,203,255,1,4,188,64,1,5,241,25,1,6,252,46,1,7,240,112,1,8,238,218,1,9,210,232,2,0,209,255,2,2,194,2,2,3,204,0,2,9,223,111,2,10,245,224,3,1,210,0,3,11,216,0],"secondary":false},{"width":4,"bonus":75,"chr":")","pixels":[1,0,211,255,1,10,215,255,2,1,244,203,2,2,222,234,2,8,203,255,2,9,191,255,2,11,216,0,3,2,213,94,3,3,238,186,3,4,246,248,3,5,253,255,3,6,231,253,3,7,186,234,3,9,203,1,3,10,191,0],"secondary":false},{"width":7,"bonus":60,"chr":"_","pixels":[0,9,153,255,1,9,255,255,1,10,153,0,2,9,255,255,2,10,255,0,3,9,255,255,3,10,255,0,4,9,255,255,4,10,255,0,5,9,255,255,5,10,255,0,6,10,255,0],"secondary":false},{"width":4,"bonus":30,"chr":"-","pixels":[0,5,255,255,1,5,255,255,1,6,255,0,2,5,255,255,2,6,255,0,3,6,255,0],"secondary":true},{"width":8,"bonus":100,"chr":"=","pixels":[0,4,255,255,0,6,255,255,1,4,255,255,1,5,255,0,1,6,255,255,1,7,255,0,2,4,255,255,2,5,255,0,2,6,255,255,2,7,255,0,3,4,255,255,3,5,255,0,3,6,255,255,3,7,255,0,4,4,255,255,4,5,255,0,4,6,255,255,4,7,255,0,5,5,255,0,5,7,255,0],"secondary":false},{"width":3,"bonus":105,"chr":"[","pixels":[0,0,203,255,0,1,221,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,0,237,255,1,1,211,41,1,2,226,39,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,252,241,1,9,204,0,2,1,238,0,2,9,238,0],"secondary":false},{"width":3,"bonus":105,"chr":"]","pixels":[0,0,237,255,0,8,237,255,1,0,203,255,1,1,253,223,1,2,225,251,1,3,225,251,1,4,225,251,1,5,225,251,1,6,225,251,1,7,225,251,1,8,210,247,1,9,238,0,2,1,204,0,2,2,221,0,2,3,221,0,2,4,221,0,2,5,221,0,2,6,221,0,2,7,221,0,2,8,221,0,2,9,204,0],"secondary":false},{"width":5,"bonus":90,"chr":"{","pixels":[0,5,153,255,1,2,169,255,1,3,221,255,1,4,221,255,1,5,203,255,1,6,255,255,1,7,221,255,1,8,169,255,2,1,237,255,2,3,181,48,2,4,223,19,2,5,221,0,2,6,207,21,2,7,255,34,2,8,232,93,2,9,249,243,3,2,238,0,3,10,238,0],"secondary":false},{"width":5,"bonus":90,"chr":"}","pixels":[1,1,237,255,1,9,237,255,2,2,249,174,2,3,232,243,2,4,225,251,2,5,207,251,2,6,255,255,2,7,223,253,2,8,181,239,2,10,238,0,3,3,170,0,3,4,221,0,3,5,241,162,3,6,204,0,3,7,255,0,3,8,221,0,3,9,170,0,4,6,153,0],"secondary":false},{"width":3,"bonus":20,"chr":":","pixels":[1,3,255,255,1,7,255,255,2,4,255,0,2,8,255,0],"secondary":true},{"width":3,"bonus":40,"chr":";","pixels":[0,9,201,255,1,3,255,255,1,7,241,255,1,8,255,255,1,10,201,0,2,4,255,0,2,8,241,0,2,9,255,0],"secondary":true},{"width":3,"bonus":30,"chr":"\\"","pixels":[0,1,255,255,0,2,255,255,1,2,255,0,1,3,255,0,2,1,255,255,2,2,255,255],"secondary":true},{"width":2,"bonus":20,"chr":"\'","pixels":[0,1,255,255,0,2,177,255,1,2,255,30,1,3,177,0],"secondary":true},{"width":7,"bonus":70,"chr":"<","pixels":[0,5,203,255,1,5,255,255,1,6,228,133,2,4,237,255,2,6,254,239,3,4,169,255,3,5,238,0,3,6,175,247,3,7,243,89,4,3,221,255,4,5,170,0,4,7,244,231,5,4,221,0,5,8,221,0],"secondary":false},{"width":7,"bonus":80,"chr":">","pixels":[0,3,203,255,0,7,203,255,1,4,228,133,1,7,187,255,1,8,204,0,2,4,247,245,2,6,255,255,2,8,187,0,3,4,175,247,3,5,248,157,3,6,203,255,3,7,255,0,4,5,255,255,4,6,173,75,4,7,204,0,5,6,255,0],"secondary":false},{"width":5,"bonus":70,"chr":"\\\\","pixels":[1,1,153,255,1,2,255,255,1,3,203,255,2,2,153,0,2,3,255,51,2,4,231,150,2,5,255,255,2,6,203,255,3,6,255,34,3,7,231,150,3,8,255,255,3,9,207,251,4,9,255,0,4,10,204,0],"secondary":false},{"width":2,"bonus":10,"chr":".","pixels":[0,8,255,255,1,9,255,0],"secondary":true},{"width":3,"bonus":30,"chr":",","pixels":[0,9,205,255,1,7,205,255,1,8,255,255,1,10,205,0,2,8,205,0,2,9,255,0],"secondary":true},{"width":3,"bonus":100,"chr":"|","pixels":[0,1,221,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,221,255,0,9,221,255,0,10,203,255,1,2,226,39,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,226,39,1,9,226,39,1,10,226,39,1,11,204,0],"secondary":false}],"width":10,"spacewidth":3,"shadow":true,"height":12,"basey":8}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_37481__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_37481__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_37481__("./src/targetmob/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startJobGauge: () => (/* binding */ startJobGauge)
/* harmony export */ });
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! alt1 */ "../node_modules/alt1/dist/base/index.js");
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(alt1__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var alt1_buffs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! alt1/buffs */ "../node_modules/alt1/dist/buffs/index.js");
/* harmony import */ var alt1_buffs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(alt1_buffs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var alt1_targetmob__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! alt1/targetmob */ "../node_modules/alt1/dist/targetmob/index.js");
/* harmony import */ var alt1_targetmob__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(alt1_targetmob__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _appconfig_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appconfig.json */ "./appconfig.json");
/* harmony import */ var _icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.png */ "./icon.png");
/* harmony import */ var _css_jobgauge_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/jobgauge.css */ "./css/jobgauge.css");
// alt1 base libs, provides all the commonly used methods for image matching and capture
// also gives your editor info about the window.alt1 api



// tell webpack that this file relies index.html, appconfig.json and icon.png, this makes webpack
// add these files to the output directory
// this works because in /webpack.config.js we told webpack to treat all html, json and imageimports
// as assets




var buffs = new (alt1_buffs__WEBPACK_IMPORTED_MODULE_4___default())();
var output = document.getElementById('output');
var settings = document.getElementById('Settings');
var settingsButton = document.getElementById('SettingsButton');
var jobGauge = document.getElementById('JobGauge');
var conjures = document.getElementById('Conjures');
var skeleton_conjure = document.getElementById('Skeleton');
var zombie_conjure = document.getElementById('Zombie');
var ghost_conjure = document.getElementById('Ghost');
var souls = document.getElementById('Souls');
var bloat = document.getElementById('Bloat');
var necrosis = document.getElementById('Necrosis');
// loads all images as raw pixel data async, images have to be saved as *.data.png
// this also takes care of metadata headers in the image that make browser load the image
// with slightly wrong colors
// this function is async, so you cant acccess the images instantly but generally takes <20ms
// use `await imgs.promise` if you want to use the images as soon as they are loaded
var buffImages = alt1__WEBPACK_IMPORTED_MODULE_5__.webpackImages({
    necrosis: __webpack_require__(/*! ./asset/data/Necrosis.data.png */ "./asset/data/Necrosis.data.png"),
    residual_soul: __webpack_require__(/*! ./asset/data/Residual_Soul.data.png */ "./asset/data/Residual_Soul.data.png"),
    skeleton_warrior: __webpack_require__(/*! ./asset/data/Skeleton_Warrior.data.png */ "./asset/data/Skeleton_Warrior.data.png"),
    putrid_zombie: __webpack_require__(/*! ./asset/data/Putrid_Zombie.data.png */ "./asset/data/Putrid_Zombie.data.png"),
    vengeful_ghost: __webpack_require__(/*! ./asset/data/Vengeful_Ghost.data.png */ "./asset/data/Vengeful_Ghost.data.png"),
    bloated: __webpack_require__(/*! ./asset/data/Bloated.data.png */ "./asset/data/Bloated.data.png"),
});
var abilityImgs = alt1__WEBPACK_IMPORTED_MODULE_5__.webpackImages({
    skeleton_warrior_ability: __webpack_require__(/*! ./asset/data/Skeleton_Warrior-ability.data.png */ "./asset/data/Skeleton_Warrior-ability.data.png"),
    skeleton_warrior_ability_gcd: __webpack_require__(/*! ./asset/data/Skeleton_Warrior-ability-gcd.data.png */ "./asset/data/Skeleton_Warrior-ability-gcd.data.png"),
    putrid_zombie_ability: __webpack_require__(/*! ./asset/data/Putrid_Zombie-ability.data.png */ "./asset/data/Putrid_Zombie-ability.data.png"),
    putrid_zombie_ability_gcd: __webpack_require__(/*! ./asset/data/Putrid_Zombie-ability-gcd.data.png */ "./asset/data/Putrid_Zombie-ability-gcd.data.png"),
    vengeful_ghost_ability: __webpack_require__(/*! ./asset/data/Vengeful_Ghost-ability.data.png */ "./asset/data/Vengeful_Ghost-ability.data.png"),
    vengeful_ghost_ability_gcd: __webpack_require__(/*! ./asset/data/Vengeful_Ghost-ability-gcd.data.png */ "./asset/data/Vengeful_Ghost-ability-gcd.data.png"),
});
function startJobGauge() {
    if (!window.alt1) {
        output.insertAdjacentHTML('beforeend', "<div>You need to run this page in alt1 to capture the screen</div>");
        return;
    }
    if (!alt1.permissionPixel) {
        output.insertAdjacentHTML('beforeend', "<div>Page is not installed as app or capture permission is not enabled</div>");
        return;
    }
    var img = alt1__WEBPACK_IMPORTED_MODULE_5__.captureHoldFullRs();
    setInterval(function () {
        getNecrosisStacks();
    }, 150);
    setInterval(function () {
        getSoulsValue();
    }, 150);
    setInterval(function () {
        getConjures();
    }, 200);
    setInterval(function () {
        checkBloat(img);
    }, 200);
}
function initSettings() {
    if (!localStorage.nyusNecroJobGauge) {
        setDefaultSettings();
        loadSettings();
    }
    else {
        loadSettings();
    }
}
function setDefaultSettings() {
    localStorage.setItem('nyusNecroJobGauge', JSON.stringify({
        buffsLocation: getBuffsLocation,
        offhand95: false,
        forcedConjures: true,
        ghostSettings: false,
        singleNecrosis: false,
        jobGaugeScale: 100,
        conjureScale: 100,
        soulScale: 100,
        bloatScale: 100,
        necrosisScale: 100,
        soulBgColor: '#52f9fa',
        necrosisDefaultBgColor: '#9205e4',
        necrosisFreecastBgColor: '#fd7d00',
        necrosisCappedBgColor: '#ff0000',
        bloatNotchColor: '#ff0000',
        activeConjureTimers: true
    }));
}
function loadSettings() {
    setOffhand();
    setConjureTimers();
    setForcedConjures();
    setGhostSettingsButton();
    setSingleNecrosis();
    setCustomColors();
    setCustomScale();
}
function setOffhand() {
    offhand.checked = Boolean(getSetting('offhand95'));
    souls.classList.toggle('t90', !Boolean(getSetting('offhand95')));
}
function setConjureTimers() {
    conjureTimers.checked = Boolean(getSetting('activeConjureTimers'));
    skeleton_conjure.classList.toggle('active-timer', getSetting('activeConjureTimers'));
    zombie_conjure.classList.toggle('active-timer', getSetting('activeConjureTimers'));
    ghost_conjure.classList.toggle('active-timer', getSetting('activeConjureTimers'));
}
function setForcedConjures() {
    forcedConjures.checked = Boolean(getSetting('forcedConjures'));
}
function setGhostSettingsButton() {
    ghostSettings.checked = Boolean(getSetting('ghostSettings'));
    settingsButton.classList.toggle('ghost', Boolean(getSetting('ghostSettings')));
}
function setSingleNecrosis() {
    singleNecrosis.checked = Boolean(getSetting('singleNecrosis'));
    necrosis.classList.toggle('single', Boolean(getSetting('singleNecrosis')));
}
function setDefaultColors() {
    var currentSoulBgColor = '#52f9fa';
    var currentNecrosisDefaultBgColor = '#9205e4';
    var currentNecrosisFreecastBgColor = '#fd7d00';
    var currentNecrosisCappedBgColor = '#ff0000';
    var currentBloatNotchColor = '#ff0000';
    document.documentElement.style.setProperty('--soul-bg-color', currentSoulBgColor);
    document.documentElement.style.setProperty('--necrosis-default-bg-color', currentNecrosisDefaultBgColor);
    document.documentElement.style.setProperty('--necrosis-freecast-bg-color', currentNecrosisFreecastBgColor);
    document.documentElement.style.setProperty('--necrosis-capped-bg-color', currentNecrosisCappedBgColor);
    document.documentElement.style.setProperty('--bloat-notch-color', currentBloatNotchColor);
    document
        .getElementById('SoulBgColor')
        .setAttribute('value', currentSoulBgColor);
    document
        .getElementById('NecrosisDefaultBgColor')
        .setAttribute('value', currentNecrosisDefaultBgColor);
    document
        .getElementById('NecrosisFreestyleBgColor')
        .setAttribute('value', currentNecrosisFreecastBgColor);
    document
        .getElementById('NecrosisCappedBgColor')
        .setAttribute('value', currentNecrosisCappedBgColor);
    document
        .getElementById('BloatNotchColor')
        .setAttribute('value', currentBloatNotchColor);
    for (var _i = 0, colorFields_2 = colorFields; _i < colorFields_2.length; _i++) {
        var color = colorFields_2[_i];
        updateSetting(color.dataset.setting, color.value);
    }
}
var revertDefaultColorButton = document.getElementById('RevertDefaultColors');
revertDefaultColorButton.addEventListener('click', function () {
    setDefaultColors();
});
function setCustomColors() {
    var currentSoulBgColor = getSetting('soulBgColor');
    var currentNecrosisDefaultBgColor = getSetting('necrosisDefaultBgColor');
    var currentNecrosisFreecastBgColor = getSetting('necrosisFreecastBgColor');
    var currentNecrosisCappedBgColor = getSetting('necrosisCappedBgColor');
    var currentBloatNotchColor = getSetting('bloatNotchColor');
    document.documentElement.style.setProperty('--soul-bg-color', currentSoulBgColor);
    document.documentElement.style.setProperty('--necrosis-default-bg-color', currentNecrosisDefaultBgColor);
    document.documentElement.style.setProperty('--necrosis-freecast-bg-color', currentNecrosisFreecastBgColor);
    document.documentElement.style.setProperty('--necrosis-capped-bg-color', currentNecrosisCappedBgColor);
    document.documentElement.style.setProperty('--bloat-notch-color', currentBloatNotchColor);
    document
        .getElementById('SoulBgColor')
        .setAttribute('value', currentSoulBgColor);
    document
        .getElementById('NecrosisDefaultBgColor')
        .setAttribute('value', currentNecrosisDefaultBgColor);
    document
        .getElementById('NecrosisFreestyleBgColor')
        .setAttribute('value', currentNecrosisFreecastBgColor);
    document
        .getElementById('NecrosisCappedBgColor')
        .setAttribute('value', currentNecrosisCappedBgColor);
    document
        .getElementById('BloatNotchColor')
        .setAttribute('value', currentBloatNotchColor);
}
function setCustomScale() {
    jobGauge.style.setProperty('--scale', getSetting('jobGaugeScale'));
    conjures.style.setProperty('--scale', getSetting('conjureScale'));
    souls.style.setProperty('--scale', getSetting('soulScale'));
    bloat.style.setProperty('--scale', getSetting('bloatScale'));
    necrosis.style.setProperty('--scale', getSetting('necrosisScale'));
    document
        .getElementById('JobGaugeScale')
        .setAttribute('value', getSetting('jobGaugeScale'));
    document
        .getElementById('ConjuresScale')
        .setAttribute('value', getSetting('conjureScale'));
    document
        .getElementById('SoulsScale')
        .setAttribute('value', getSetting('soulScale'));
    document
        .getElementById('BloatScale')
        .setAttribute('value', getSetting('bloatScale'));
    document
        .getElementById('NecrosisScale')
        .setAttribute('value', getSetting('necrosisScale'));
    var JobGaugeScaleValue = document.querySelector('#JobGaugeScaleOutput');
    var JobGaugeScaleInput = document.querySelector('#JobGaugeScale');
    JobGaugeScaleValue.textContent = JobGaugeScaleInput.value;
    var ConjuresScaleValue = document.querySelector('#ConjuresScaleOutput');
    var ConjuresScaleInput = document.querySelector('#ConjuresScale');
    ConjuresScaleValue.textContent = ConjuresScaleInput.value;
    var SoulsScaleValue = document.querySelector('#SoulsScaleOutput');
    var SoulsScaleInput = document.querySelector('#SoulsScale');
    SoulsScaleValue.textContent = SoulsScaleInput.value;
    var BloatScaleValue = document.querySelector('#BloatScaleOutput');
    var BloatScaleInput = document.querySelector('#BloatScale');
    BloatScaleValue.textContent = BloatScaleInput.value;
    var NecrosisScaleValue = document.querySelector('#NecrosisScaleOutput');
    var NecrosisScaleInput = document.querySelector('#NecrosisScale');
    NecrosisScaleValue.textContent = NecrosisScaleInput.value;
}
function getSetting(setting) {
    if (!localStorage.nyusNecroJobGauge) {
        initSettings();
    }
    return JSON.parse(localStorage.getItem('nyusNecroJobGauge'))[setting];
}
function updateSetting(setting, value) {
    if (!localStorage.getItem('nyusNecroJobGauge')) {
        localStorage.setItem('nyusNecroJobGauge', JSON.stringify({}));
    }
    var save_data = JSON.parse(localStorage.getItem('nyusNecroJobGauge'));
    save_data[setting] = value;
    localStorage.setItem('nyusNecroJobGauge', JSON.stringify(save_data));
    loadSettings();
}
function getBuffsLocation() {
    if (buffs.find()) {
        return buffs.getCaptRect();
    }
    else {
        getBuffsLocation();
    }
}
function getActiveBuffs() {
    if (buffs.find()) {
        return buffs.read();
    }
    else {
        getActiveBuffs();
    }
}
function checkBloat(img) {
    var targetDisplay = new (alt1_targetmob__WEBPACK_IMPORTED_MODULE_6___default())();
    targetDisplay.read();
    if (targetDisplay.lastpos === null) {
        return;
    }
    var target_display_loc = {
        x: (targetDisplay === null || targetDisplay === void 0 ? void 0 : targetDisplay.lastpos.x) - 120,
        y: (targetDisplay === null || targetDisplay === void 0 ? void 0 : targetDisplay.lastpos.y) + 20,
        w: 150,
        h: 60,
    };
    var targetDebuffs = alt1__WEBPACK_IMPORTED_MODULE_5__.captureHold(target_display_loc.x, target_display_loc.y, target_display_loc.w, target_display_loc.h);
    var targetIsBloated = targetDebuffs.findSubimage(buffImages.bloated).length;
    var bloatTimer = parseFloat(parseFloat(bloat.dataset.timer).toFixed(2));
    if (targetIsBloated && bloatTimer == 0) {
        bloat.dataset.timer = '18';
        for (var i = 0; i < 30; i++) {
            setTimeout(function () {
                if (!targetIsBloated) {
                    bloat.style.setProperty('--timer', (0.0).toString());
                    bloat.dataset.timer = (0.0).toString();
                }
                else {
                    var currentTick = roundedToFixed(bloat.dataset.timer, 1);
                    var nextTick = roundedToFixed(parseFloat(currentTick) - 0.6, 1);
                    if (parseInt(nextTick, 10) > 0) {
                        bloat.style.setProperty('--timer', nextTick);
                        bloat.dataset.timer = nextTick;
                    }
                }
            }, 600 * i);
        }
    }
    else if (!targetIsBloated) {
        bloat.style.setProperty('--timer', (0.0).toString());
        bloat.dataset.timer = (0.0).toString();
    }
}
function roundedToFixed(input, digits) {
    var rounder = Math.pow(10, digits);
    return (Math.round(input * rounder) / rounder).toFixed(digits);
}
alt1__WEBPACK_IMPORTED_MODULE_5__.on('rsfocus', startJobGauge);
function findNecrosisCount() {
    var allBuffs = getActiveBuffs();
    var necrosisCount = 0;
    for (var _i = 0, _a = Object.entries(allBuffs); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var necrosisBuff = value.countMatch(buffImages.necrosis, false);
        if (necrosisBuff.passed > 140) {
            necrosisCount = value.readTime();
        }
    }
    return necrosisCount;
}
function getNecrosisStacks() {
    var necrosisStackValue = findNecrosisCount();
    necrosis.dataset.stacks = necrosisStackValue.toString();
}
function findSoulCount() {
    var allBuffs = getActiveBuffs();
    var soulsCount = 0;
    for (var _i = 0, _a = Object.entries(allBuffs); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var soulsBuff = value.countMatch(buffImages.residual_soul, false);
        if (soulsBuff.passed > 200) {
            soulsCount = value.readTime();
        }
    }
    return soulsCount;
}
function getSoulsValue() {
    var residualSoulsValue = findSoulCount();
    souls.dataset.souls = residualSoulsValue.toString();
}
function trackConjures() {
    var allBuffs = getActiveBuffs();
    var foundSkeleton = false;
    var foundZombie = false;
    var foundGhost = false;
    for (var _i = 0, _a = Object.entries(allBuffs); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var skeletonCheck = value.countMatch(buffImages.skeleton_warrior, false);
        if (skeletonCheck.passed > 70) {
            foundSkeleton = true;
            skeleton_conjure.dataset.timer = value.readTime().toString();
        }
        var zombieCheck = value.countMatch(buffImages.putrid_zombie, false);
        if (zombieCheck.passed > 100) {
            foundZombie = true;
            zombie_conjure.dataset.timer = value.readTime().toString();
        }
        var ghostCheck = value.countMatch(buffImages.vengeful_ghost, false);
        if (ghostCheck.passed > 200) {
            foundGhost = true;
            ghost_conjure.dataset.timer = value.readTime().toString();
        }
    }
    return [foundSkeleton, foundZombie, foundGhost];
}
var startedSkeleton12sTimer = false;
var startedZombie12sTimer = false;
var startedGhost12sTimer = false;
function getConjures() {
    var foundConjures = trackConjures();
    skeleton_conjure.classList.toggle('active', foundConjures[0]);
    zombie_conjure.classList.toggle('active', foundConjures[1]);
    ghost_conjure.classList.toggle('active', foundConjures[2]);
    if (forcedConjures.checked) {
        var skeletonFinal12 = skeleton_conjure.dataset.timer;
        var zombieFinal12 = zombie_conjure.dataset.timer;
        var ghostFinal12 = ghost_conjure.dataset.timer;
        if (skeletonFinal12 == '12') {
            skeleton_conjure.classList.add('forced-active');
            if (startedSkeleton12sTimer === false) {
                startedSkeleton12sTimer = true;
                finalCountdown(skeleton_conjure);
            }
            setTimeout(function () {
                skeleton_conjure.classList.remove('forced-active');
                skeleton_conjure.classList.remove('active');
                skeleton_conjure.dataset.remaining = '12';
                startedSkeleton12sTimer = false;
            }, 11000);
        }
        if (zombieFinal12 == '12') {
            zombie_conjure.classList.add('forced-active');
            if (startedZombie12sTimer === false) {
                startedZombie12sTimer = true;
                finalCountdown(zombie_conjure);
            }
            setTimeout(function () {
                zombie_conjure.classList.remove('forced-active');
                zombie_conjure.classList.remove('active');
                zombie_conjure.dataset.remaining = '12';
                startedZombie12sTimer = false;
            }, 11000);
        }
        if (ghostFinal12 == '12') {
            ghost_conjure.classList.add('forced-active');
            if (startedGhost12sTimer === false) {
                startedGhost12sTimer = true;
                finalCountdown(ghost_conjure);
            }
            setTimeout(function () {
                ghost_conjure.classList.remove('forced-active');
                ghost_conjure.classList.remove('active');
                ghost_conjure.dataset.remaining = '12';
                startedGhost12sTimer = false;
            }, 11000);
        }
    }
}
function finalCountdown(conjure) {
    conjure.classList.add('forced-active');
    for (var i = 0; i < 12; i++) {
        setTimeout(function () {
            if (parseInt(conjure.dataset.remaining) > 0) {
                var newValue = parseInt(conjure.dataset.remaining) - 1;
                conjure.dataset.remaining = newValue.toString();
            }
        }, 1000 * i);
    }
}
/* Settings */
function toggleSettings() {
    settings.classList.toggle('visible');
}
settingsButton.addEventListener('click', toggleSettings);
var offhand = document.getElementById('Offhand');
var conjureTimers = (document.getElementById('ActiveConjureTimers'));
var forcedConjures = (document.getElementById('ForcedConjures'));
var ghostSettings = document.getElementById('GhostSettings');
var singleNecrosis = (document.getElementById('SingleRowNecrosis'));
var colorFields = document.getElementsByClassName('colors');
offhand.addEventListener('click', function () {
    updateSetting('offhand95', offhand.checked);
});
conjureTimers.addEventListener('click', function () {
    updateSetting('activeConjureTimers', conjureTimers.checked);
});
forcedConjures.addEventListener('click', function () {
    updateSetting('forcedConjures', forcedConjures.checked);
});
ghostSettings.addEventListener('click', function () {
    updateSetting('ghostSettings', ghostSettings.checked);
});
singleNecrosis.addEventListener('click', function () {
    updateSetting('singleNecrosis', singleNecrosis.checked);
});
for (var _i = 0, colorFields_1 = colorFields; _i < colorFields_1.length; _i++) {
    var color = colorFields_1[_i];
    color.addEventListener('input', function (e) {
        updateSetting(e.target.dataset.setting, e.target.value);
    });
}
var JobGaugeScaleValue = document.querySelector('#JobGaugeScaleOutput');
var JobGaugeScaleInput = document.querySelector('#JobGaugeScale');
JobGaugeScaleValue.textContent = JobGaugeScaleInput.value;
JobGaugeScaleInput.addEventListener('input', function (event) {
    JobGaugeScaleValue.textContent = event.target.value;
    updateSetting('jobGaugeScale', event.target.value);
});
var ConjuresScaleValue = document.querySelector('#ConjuresScaleOutput');
var ConjuresScaleInput = document.querySelector('#ConjuresScale');
ConjuresScaleValue.textContent = ConjuresScaleInput.value;
ConjuresScaleInput.addEventListener('input', function (event) {
    ConjuresScaleValue.textContent = event.target.value;
    updateSetting('conjureScale', event.target.value);
});
var SoulsScaleValue = document.querySelector('#SoulsScaleOutput');
var SoulsScaleInput = document.querySelector('#SoulsScale');
SoulsScaleValue.textContent = SoulsScaleInput.value;
SoulsScaleInput.addEventListener('input', function (event) {
    SoulsScaleValue.textContent = event.target.value;
    updateSetting('soulScale', event.target.value);
});
var BloatScaleValue = document.querySelector('#BloatScaleOutput');
var BloatScaleInput = document.querySelector('#BloatScale');
BloatScaleValue.textContent = BloatScaleInput.value;
BloatScaleInput.addEventListener('input', function (event) {
    BloatScaleValue.textContent = event.target.value;
    updateSetting('bloatScale', event.target.value);
});
var NecrosisScaleValue = document.querySelector('#NecrosisScaleOutput');
var NecrosisScaleInput = document.querySelector('#NecrosisScale');
NecrosisScaleValue.textContent = NecrosisScaleInput.value;
NecrosisScaleInput.addEventListener('input', function (event) {
    NecrosisScaleValue.textContent = event.target.value;
    updateSetting('necrosisScale', event.target.value);
});
/* End Settings */
//check if we are running inside alt1 by checking if the alt1 global exists
if (window.alt1) {
    //tell alt1 about the app
    //this makes alt1 show the add app button when running inside the embedded browser
    //also updates app settings if they are changed
    alt1.identifyAppUrl('./appconfig.json');
    initSettings();
    startJobGauge();
}
else {
    var addappurl = "alt1://addapp/".concat(new URL('./appconfig.json', document.location.href).href);
    output.insertAdjacentHTML('beforeend', "\n\t\tAlt1 not detected, click <a href='".concat(addappurl, "'>here</a> to add this app to Alt1\n\t"));
}

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});