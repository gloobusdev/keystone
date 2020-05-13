webpackJsonp([10],{40:function(e,t){"use strict"
var r={}
r.container={background:"rgba(0, 0, 0, 0.8)",gutter:{horizontal:10,vertical:10},zIndex:2001},r.header={height:40},r.close={fill:"white",height:20,width:20},r.footer={color:"white",count:{color:"rgba(255, 255, 255, 0.75)",fontSize:"0.85em"},height:40,gutter:{horizontal:0,vertical:5}},r.thumbnail={activeBorderColor:"white",size:50,gutter:2},r.arrow={background:"black",fill:"white",height:120},e.exports=r},52:function(e,t,r){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}var n=r(338),i=o(n),a=r(339),l=o(a),u=r(340),s=o(u),c=r(341),p=o(c)
e.exports={bindFunctions:i.default,bodyScroll:l.default,canUseDom:s.default,deepMerge:p.default}},106:function(e,t,r){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={}
for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])
return r}function i(e){var t=e.style,r=e.color,o=n(e,["style","color"]),i=a({marginRight:10,minWidth:0},t)
return"default"!==r&&(i.backgroundColor=(0,c.fade)(f.default.color[r],10),i.borderColor=(0,c.fade)(f.default.color[r],30),i.color=f.default.color[r]),u.default.createElement(s.FormInput,a({noedit:!0,style:i},o))}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},l=r(1),u=o(l),s=r(3),c=r(67),p=r(20),f=o(p)
i.propTypes={color:l.PropTypes.oneOf(["danger","default","success"])},i.defaultProps={color:"default"},e.exports=i},107:function(e,t,r){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={}
for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])
return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),c=r(1),p=o(c),f=function(e){function t(){i(this,t)
var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))
return e.clearValue=e.clearValue.bind(e),e.clickDomNode=e.clickDomNode.bind(e),e.hasValue=e.hasValue.bind(e),e}return l(t,e),s(t,[{key:"clearValue",value:function(){this.target.value=""}},{key:"clickDomNode",value:function(){this.target.click()}},{key:"hasValue",value:function(){return!!this.target.value}},{key:"render",value:function(){var e=this,t=this.props,r=t.style,o=n(t,["style"]),i=function(t){return e.target=t},a=u({left:-9999,position:"absolute"},r)
return p.default.createElement("input",u({},o,{style:a,ref:i,tabIndex:"-1",type:"file"}))}}]),t}(c.Component)
f.propTypes={onChange:c.PropTypes.func.isRequired},e.exports=f},166:function(e,t,r){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={}
for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])
return r}function i(e,t){var r=e.direction,o=e.icon,i=e.onClick,l=e.size,c=n(e,["direction","icon","onClick","size"]),d=t.theme,g=s.StyleSheet.create((0,f.deepMerge)(m,d))
return u.default.createElement("button",a({type:"button",className:(0,s.css)(g.arrow,g["arrow__direction__"+r],l&&g["arrow__size__"+l]),onClick:i,onTouchEnd:i},c),u.default.createElement(h.default,{fill:!!d.arrow&&d.arrow.fill||p.default.arrow.fill,type:o}))}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},l=r(1),u=o(l),s=r(7),c=r(40),p=o(c),f=r(52),d=r(167),h=o(d)
i.propTypes={direction:l.PropTypes.oneOf(["left","right"]),icon:l.PropTypes.string,onClick:l.PropTypes.func.isRequired,size:l.PropTypes.oneOf(["medium","small"]).isRequired},i.defaultProps={size:"medium"},i.contextTypes={theme:l.PropTypes.object.isRequired}
var m={arrow:{background:"none",border:"none",borderRadius:4,cursor:"pointer",outline:"none",padding:10,position:"absolute",top:"50%",WebkitTouchCallout:"none",userSelect:"none"},arrow__size__medium:{height:p.default.arrow.height,marginTop:p.default.arrow.height/-2,width:40,"@media (min-width: 768px)":{width:70}},arrow__size__small:{height:p.default.thumbnail.size,marginTop:p.default.thumbnail.size/-2,width:30,"@media (min-width: 500px)":{width:40}},arrow__direction__right:{right:p.default.container.gutter.horizontal},arrow__direction__left:{left:p.default.container.gutter.horizontal}}
e.exports=i},167:function(e,t,r){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={}
for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])
return r}Object.defineProperty(t,"__esModule",{value:!0})
var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=r(1),l=o(a),u=r(337),s=o(u),c=function(e){var t=e.fill,r=e.type,o=n(e,["fill","type"]),a=s.default[r]
return l.default.createElement("span",i({dangerouslySetInnerHTML:{__html:a(t)}},o))}
c.propTypes={fill:a.PropTypes.string,type:a.PropTypes.oneOf(Object.keys(s.default))},c.defaultProps={fill:"white"},t.default=c,e.exports=t.default},253:function(e,t,r){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return!(!e||!u)&&(0,l.default)(e,i({cloud_name:u,quality:80},t))}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=r(286),l=o(a),u=window.Keystone.cloudinary.cloud_name
e.exports=n},256:function(e,t,r){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={}
for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])
return r}function i(e){var t=e.children,r=e.className,o=e.component,i=e.mask,a=n(e,["children","className","component","mask"]),u=i?s.default.createElement("div",{className:(0,l.css)(g.mask)+(" "+d[i])},"loading"===i?s.default.createElement(c.Spinner,{color:"inverted"}):null):null
return a.className=(0,l.css)(g.base,"a"===o?g.anchor:null,r),a.children=[].concat(t,[u]),s.default.createElement(o,a)}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},l=r(7),u=r(1),s=o(u),c=r(34),p=r(20),f=o(p),d={loading:"",remove:"mega-octicon octicon-trashcan",upload:"mega-octicon octicon-cloud-upload"}
i.propTypes={component:u.PropTypes.oneOfType([u.PropTypes.string,u.PropTypes.func]),mask:u.PropTypes.oneOf(["loading","remove","upload"])},i.defaultProps={component:"span"}
var h=4,m={borderColor:f.default.input.border.colorFocus,outline:"none"},g=l.StyleSheet.create({base:{backgroundColor:"white",borderRadius:f.default.borderRadius.default,border:"1px solid "+f.default.input.border.color,display:"inline-block",height:"auto",lineHeight:"1",maxWidth:"100%",padding:h,position:"relative"},anchor:{":hover":m,":focus":a({},m,{boxShadow:f.default.input.boxShadowFocus})},mask:{alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.5)",bottom:h,color:"white",display:"flex",justifyContent:"center",left:h,lineHeight:90,overflow:"hidden",position:"absolute",right:h,textAlign:"center",top:h}})
e.exports=i},286:function(e,t){var r=[{name:"crop",prefix:"c"},{name:"effect",prefix:"e"},{name:"fetch_format",prefix:"f"},{name:"flags",prefix:"fl"},{name:"gravity",prefix:"g"},{name:"height",prefix:"h"},{name:"radius",prefix:"r"},{name:"quality",prefix:"q"},{name:"width",prefix:"w"}]
e.exports=function(e,t){t||(t={})
var o=t.secure?"https":"http",n=t.cloud_name
if(!n)throw Error("Missing required options.cloud_name")
for(var i=[],a=0;a<r.length;a++){var l=r[a].name,u=r[a].prefix
Array.isArray(t[l])?t[l].forEach(function(e){i.push(u+"_"+e)}):null!=t[l]&&i.push(u+"_"+t[l])}var s=i.length?i.join(",")+"/":""
return o+"://res.cloudinary.com/"+encodeURIComponent(t.cloud_name)+"/image/upload/"+s+encodeURIComponent(e)}},326:function(e,t,r){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),l=function(e,t,r){for(var o=!0;o;){var n=e,i=t,a=r
o=!1,null===n&&(n=Function.prototype)
var l=Object.getOwnPropertyDescriptor(n,i)
if(void 0!==l){if("value"in l)return l.value
var u=l.get
if(void 0===u)return
return u.call(a)}var s=Object.getPrototypeOf(n)
if(null===s)return
e=s,t=i,r=a,o=!0,l=s=void 0}},u=r(1),s=o(u),c=r(7),p=r(40),f=o(p),d=r(166),h=o(d),m=r(327),g=o(m),y=r(328),v=o(y),b=r(329),w=o(b),x=r(330),P=o(x),O=r(332),T=o(O),k=r(52),C=function(e){function t(){n(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),k.bindFunctions.call(this,["gotoNext","gotoPrev","handleKeyboardInput"])}return i(t,e),a(t,[{key:"getChildContext",value:function(){return{theme:this.props.theme}}},{key:"componentWillReceiveProps",value:function(e){if(k.canUseDom){if(e.preloadNextImage){var t=this.props.currentImage,r=e.currentImage+1,o=e.currentImage-1,n=void 0
t&&e.currentImage>t?n=r:t&&e.currentImage<t&&(n=o),n?this.preloadImage(n):(this.preloadImage(o),this.preloadImage(r))}e.enableKeyboardInput?window.addEventListener("keydown",this.handleKeyboardInput):window.removeEventListener("keydown",this.handleKeyboardInput),e.isOpen?k.bodyScroll.blockScroll():k.bodyScroll.allowScroll()}}},{key:"preloadImage",value:function(e){var t=this.props.images[e]
if(t){var r=new Image
r.src=t.src,t.srcset&&(r.srcset=t.srcset.join())}}},{key:"gotoNext",value:function(e){this.props.currentImage!==this.props.images.length-1&&(e&&(e.preventDefault(),e.stopPropagation()),this.props.onClickNext())}},{key:"gotoPrev",value:function(e){0!==this.props.currentImage&&(e&&(e.preventDefault(),e.stopPropagation()),this.props.onClickPrev())}},{key:"handleKeyboardInput",value:function(e){return 37===e.keyCode?(this.gotoPrev(e),!0):39===e.keyCode?(this.gotoNext(e),!0):27===e.keyCode&&(this.props.onClose(),!0)}},{key:"renderArrowPrev",value:function(){return 0===this.props.currentImage?null:s.default.createElement(h.default,{direction:"left",icon:"arrowLeft",onClick:this.gotoPrev,title:"Previous (Left arrow key)",type:"button"})}},{key:"renderArrowNext",value:function(){return this.props.currentImage===this.props.images.length-1?null:s.default.createElement(h.default,{direction:"right",icon:"arrowRight",onClick:this.gotoNext,title:"Previous (Right arrow key)",type:"button"})}},{key:"renderDialog",value:function(){var e=this.props,t=e.backdropClosesModal,r=e.customControls,o=e.isOpen,n=e.onClose,i=e.showCloseButton,a=e.showThumbnails,l=e.width
if(!o)return s.default.createElement("span",{key:"closed"})
var u=0
return a&&(u=f.default.thumbnail.size+f.default.container.gutter.vertical),s.default.createElement(g.default,{key:"open",onClick:!!t&&n,onTouchEnd:!!t&&n},s.default.createElement("div",{className:(0,c.css)(_.content),style:{marginBottom:u,maxWidth:l}},s.default.createElement(w.default,{customControls:r,onClose:n,showCloseButton:i}),this.renderImages()),this.renderThumbnails(),this.renderArrowPrev(),this.renderArrowNext())}},{key:"renderImages",value:function(){var e=this.props,t=e.currentImage,r=e.images,o=e.imageCountSeparator,n=e.onClickImage,i=e.showImageCount,a=e.showThumbnails
if(!r||!r.length)return null
var l=r[t],u=void 0,p=void 0
l.srcset&&(u=l.srcset.join(),p="100vw")
var d=a?f.default.thumbnail.size:0,h=f.default.header.height+f.default.footer.height+d+f.default.container.gutter.vertical+"px"
return s.default.createElement("figure",{className:(0,c.css)(_.figure)},s.default.createElement("img",{className:(0,c.css)(_.image),onClick:!!n&&n,sizes:p,src:l.src,srcSet:u,style:{cursor:this.props.onClickImage?"pointer":"auto",maxHeight:"calc(100vh - "+h+")"}}),s.default.createElement(v.default,{caption:r[t].caption,countCurrent:t+1,countSeparator:o,countTotal:r.length,showCount:i}))}},{key:"renderThumbnails",value:function(){var e=this.props,t=e.images,r=e.currentImage,o=e.onClickThumbnail,n=e.showThumbnails,i=e.thumbnailOffset
if(n)return s.default.createElement(P.default,{currentImage:r,images:t,offset:i,onClickThumbnail:o})}},{key:"render",value:function(){return s.default.createElement(T.default,null,this.renderDialog())}}]),t}(u.Component)
C.propTypes={backdropClosesModal:u.PropTypes.bool,currentImage:u.PropTypes.number,customControls:u.PropTypes.arrayOf(u.PropTypes.node),enableKeyboardInput:u.PropTypes.bool,imageCountSeparator:u.PropTypes.string,images:u.PropTypes.arrayOf(u.PropTypes.shape({src:u.PropTypes.string.isRequired,srcset:u.PropTypes.array,caption:u.PropTypes.oneOfType([u.PropTypes.string,u.PropTypes.element]),thumbnail:u.PropTypes.string})).isRequired,isOpen:u.PropTypes.bool,onClickImage:u.PropTypes.func,onClickNext:u.PropTypes.func,onClickPrev:u.PropTypes.func,onClose:u.PropTypes.func.isRequired,preloadNextImage:u.PropTypes.bool,sheet:u.PropTypes.object,showCloseButton:u.PropTypes.bool,showImageCount:u.PropTypes.bool,showThumbnails:u.PropTypes.bool,theme:u.PropTypes.object,thumbnailOffset:u.PropTypes.number,width:u.PropTypes.number},C.defaultProps={currentImage:0,enableKeyboardInput:!0,imageCountSeparator:" of ",onClickShowNextImage:!0,preloadNextImage:!0,showCloseButton:!0,showImageCount:!0,theme:{},thumbnailOffset:2,width:1024},C.childContextTypes={theme:u.PropTypes.object.isRequired}
var _=c.StyleSheet.create({content:{position:"relative"},figure:{margin:0},image:{display:"block",height:"auto",margin:"0 auto",maxWidth:"100%",WebkitTouchCallout:"none",userSelect:"none"}})
t.default=C,e.exports=t.default},327:function(e,t,r){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={}
for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])
return r}function i(e,t){var r=n(e,[]),o=t.theme,i=s.StyleSheet.create((0,f.deepMerge)(d,o))
return u.default.createElement("div",a({className:(0,s.css)(i.container)},r))}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},l=r(1),u=o(l),s=r(7),c=r(40),p=o(c),f=r(52)
i.contextTypes={theme:l.PropTypes.object.isRequired}
var d={container:{alignItems:"center",backgroundColor:p.default.container.background,boxSizing:"border-box",display:"flex",height:"100%",justifyContent:"center",left:0,paddingBottom:p.default.container.gutter.vertical,paddingLeft:p.default.container.gutter.horizontal,paddingRight:p.default.container.gutter.horizontal,paddingTop:p.default.container.gutter.vertical,position:"fixed",top:0,width:"100%",zIndex:p.default.container.zIndex}}
e.exports=i},328:function(e,t,r){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={}
for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])
return r}function i(e,t){var r=e.caption,o=e.countCurrent,i=e.countSeparator,l=e.countTotal,c=e.showCount,p=n(e,["caption","countCurrent","countSeparator","countTotal","showCount"]),h=t.theme
if(!r&&!c)return null
var m=s.StyleSheet.create((0,f.deepMerge)(d,h)),g=c?u.default.createElement("div",{className:(0,s.css)(m.footerCount)},o,i,l):u.default.createElement("span",null)
return u.default.createElement("div",a({className:(0,s.css)(m.footer)},p),r?u.default.createElement("figcaption",{className:(0,s.css)(m.footerCaption)},r):u.default.createElement("span",null),g)}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},l=r(1),u=o(l),s=r(7),c=r(40),p=o(c),f=r(52)
i.propTypes={caption:l.PropTypes.oneOfType([l.PropTypes.string,l.PropTypes.element]),countCurrent:l.PropTypes.number,countSeparator:l.PropTypes.string,countTotal:l.PropTypes.number,showCount:l.PropTypes.bool},i.contextTypes={theme:l.PropTypes.object.isRequired}
var d={footer:{boxSizing:"border-box",color:p.default.footer.color,cursor:"auto",display:"flex",justifyContent:"space-between",left:0,lineHeight:1.3,paddingBottom:p.default.footer.gutter.vertical,paddingLeft:p.default.footer.gutter.horizontal,paddingRight:p.default.footer.gutter.horizontal,paddingTop:p.default.footer.gutter.vertical},footerCount:{color:p.default.footer.count.color,fontSize:p.default.footer.count.fontSize,paddingLeft:"1em"},footerCaption:{flex:"1 1 0"}}
e.exports=i},329:function(e,t,r){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={}
for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])
return r}function i(e,t){var r=e.customControls,o=e.onClose,i=e.showCloseButton,l=n(e,["customControls","onClose","showCloseButton"]),c=t.theme,d=s.StyleSheet.create((0,f.deepMerge)(m,c))
return u.default.createElement("div",a({className:(0,s.css)(d.header)},l),r?r:u.default.createElement("span",null),!!i&&u.default.createElement("button",{title:"Close (Esc)",className:(0,s.css)(d.close),onClick:o},u.default.createElement(h.default,{fill:!!c.close&&c.close.fill||p.default.close.fill,type:"close"})))}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},l=r(1),u=o(l),s=r(7),c=r(40),p=o(c),f=r(52),d=r(167),h=o(d)
i.propTypes={customControls:l.PropTypes.array,onClose:l.PropTypes.func.isRequired,showCloseButton:l.PropTypes.bool},i.contextTypes={theme:l.PropTypes.object.isRequired}
var m={header:{display:"flex",justifyContent:"space-between",height:p.default.header.height},close:{background:"none",border:"none",cursor:"pointer",outline:"none",position:"relative",top:0,verticalAlign:"bottom",height:p.default.close.height+20,marginRight:-10,padding:10,width:p.default.close.width+20}}
e.exports=i},330:function(e,t,r){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=function(e,t,r){for(var o=!0;o;){var n=e,i=t,a=r
o=!1,null===n&&(n=Function.prototype)
var l=Object.getOwnPropertyDescriptor(n,i)
if(void 0!==l){if("value"in l)return l.value
var u=l.get
if(void 0===u)return
return u.call(a)}var s=Object.getPrototypeOf(n)
if(null===s)return
e=s,t=i,r=a,o=!0,l=s=void 0}},s=r(1),c=o(s),p=r(7),f=r(333),d=o(f),h=r(166),m=o(h),g=r(40),y=o(g),v=p.StyleSheet.create({paginatedThumbnails:{bottom:y.default.container.gutter.vertical,height:y.default.thumbnail.size,padding:"0 50px",position:"absolute",textAlign:"center",whiteSpace:"nowrap"}}),b={height:y.default.thumbnail.size+2*y.default.thumbnail.gutter,width:40},w=function(e){function t(e){n(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={hasCustomPage:!1},this.gotoPrev=this.gotoPrev.bind(this),this.gotoNext=this.gotoNext.bind(this)}return i(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){e.currentImage!==this.props.currentImage&&this.setState({hasCustomPage:!1})}},{key:"getFirst",value:function(){var e=this.props,t=e.currentImage,r=e.offset
return this.state.hasCustomPage?this.clampFirst(this.state.first):this.clampFirst(t-r)}},{key:"setFirst",value:function(e,t){var r=this.state.first
e&&(e.preventDefault(),e.stopPropagation()),r!==t&&this.setState({hasCustomPage:!0,first:t})}},{key:"gotoPrev",value:function(e){this.setFirst(e,this.getFirst()-this.props.offset)}},{key:"gotoNext",value:function(e){this.setFirst(e,this.getFirst()+this.props.offset)}},{key:"clampFirst",value:function(e){var t=this.props,r=t.images,o=t.offset,n=2*o+1
return e<0?0:e+n>r.length?r.length-n:e}},{key:"renderArrowPrev",value:function(){return this.getFirst()<=0?null:c.default.createElement(m.default,{direction:"left",size:"small",icon:"arrowLeft",onClick:this.gotoPrev,style:b,title:"Previous (Left arrow key)",type:"button"})}},{key:"renderArrowNext",value:function(){var e=this.props,t=e.offset,r=e.images,o=2*t+1
return this.getFirst()+o>=r.length?null:c.default.createElement(m.default,{direction:"right",size:"small",icon:"arrowRight",onClick:this.gotoNext,style:b,title:"Previous (Right arrow key)",type:"button"})}},{key:"render",value:function(){var e=this.props,t=e.images,r=e.currentImage,o=e.onClickThumbnail,n=e.offset,i=2*n+1,l=[],u=0
return t.length<=i?l=t:(u=this.getFirst(),l=t.slice(u,u+i)),c.default.createElement("div",{className:(0,p.css)(v.paginatedThumbnails)},this.renderArrowPrev(),l.map(function(e,t){return c.default.createElement(d.default,a({key:u+t},e,{index:u+t,onClick:o,active:u+t===r}))}),this.renderArrowNext())}}]),t}(s.Component)
t.default=w,w.propTypes={currentImage:s.PropTypes.number,images:s.PropTypes.array,offset:s.PropTypes.number,onClickThumbnail:s.PropTypes.func.isRequired},e.exports=t.default},331:function(e,t,r){"use strict"
function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),a=function(e,t,r){for(var o=!0;o;){var n=e,i=t,a=r
o=!1,null===n&&(n=Function.prototype)
var l=Object.getOwnPropertyDescriptor(n,i)
if(void 0!==l){if("value"in l)return l.value
var u=l.get
if(void 0===u)return
return u.call(a)}var s=Object.getPrototypeOf(n)
if(null===s)return
e=s,t=i,r=a,o=!0,l=s=void 0}},l=r(1),u=function(e){function t(){o(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return n(t,e),i(t,[{key:"getChildContext",value:function(){return this.props.context}},{key:"render",value:function(){return l.Children.only(this.props.children)}}]),t}(l.Component)
u.propTypes={context:l.PropTypes.object.isRequired},u.childContextTypes={theme:l.PropTypes.object},t.default=u,e.exports=t.default},332:function(e,t,r){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=function(e,t,r){for(var o=!0;o;){var n=e,i=t,a=r
o=!1,null===n&&(n=Function.prototype)
var l=Object.getOwnPropertyDescriptor(n,i)
if(void 0!==l){if("value"in l)return l.value
var u=l.get
if(void 0===u)return
return u.call(a)}var s=Object.getPrototypeOf(n)
if(null===s)return
e=s,t=i,r=a,o=!0,l=s=void 0}},s=r(1),c=o(s),p=r(97),f=o(p),d=r(15),h=r(331),m=o(h),g=function(e){function t(){n(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.portalElement=null}return i(t,e),l(t,[{key:"componentDidMount",value:function(){var e=document.createElement("div")
document.body.appendChild(e),this.portalElement=e,this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var e=200,t="\n\t\t\t\t.fade-enter { opacity: 0.01; }\n\t\t\t\t.fade-enter.fade-enter-active { opacity: 1; transition: opacity "+e+"ms; }\n\t\t\t\t.fade-leave { opacity: 1; }\n\t\t\t\t.fade-leave.fade-leave-active { opacity: 0.01; transition: opacity "+e+"ms; }\n\t\t";(0,d.render)(c.default.createElement(m.default,{context:this.context},c.default.createElement("div",null,c.default.createElement("style",null,t),c.default.createElement(f.default,a({component:"div",transitionName:"fade",transitionEnterTimeout:e,transitionLeaveTimeout:e},this.props)))),this.portalElement)}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.portalElement)}},{key:"render",value:function(){return null}}]),t}(s.Component)
t.default=g,g.contextTypes={theme:s.PropTypes.object.isRequired},e.exports=t.default},333:function(e,t,r){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r=e.index,o=e.src,n=e.thumbnail,i=e.active,u=e.onClick,s=t.theme,f=n?n:o,d=l.StyleSheet.create((0,c.deepMerge)(p,s))
return a.default.createElement("div",{className:(0,l.css)(d.thumbnail,i&&d.thumbnail__active),onClick:function(){return u(r)},style:{backgroundImage:'url("'+f+'")'}})}Object.defineProperty(t,"__esModule",{value:!0})
var i=r(1),a=o(i),l=r(7),u=r(40),s=o(u),c=r(52)
n.propTypes={active:i.PropTypes.bool,index:i.PropTypes.number,onClick:i.PropTypes.func.isRequired,src:i.PropTypes.string,thumbnail:i.PropTypes.string},n.contextTypes={theme:i.PropTypes.object.isRequired}
var p={thumbnail:{backgroundPosition:"center",backgroundSize:"cover",borderRadius:2,boxShadow:"inset 0 0 0 1px hsla(0,0%,100%,.2)",cursor:"pointer",display:"inline-block",height:s.default.thumbnail.size,margin:s.default.thumbnail.gutter,overflow:"hidden",width:s.default.thumbnail.size},thumbnail__active:{boxShadow:"inset 0 0 0 2px "+s.default.thumbnail.activeBorderColor}}
t.default=n,e.exports=t.default},334:function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return'<svg fill="'+e+'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" xml:space="preserve">\n\t\t<path d="M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z"/>\n\t</svg>'},e.exports=t.default},335:function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return'<svg fill="'+e+'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" xml:space="preserve">\n\t\t<path d="M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z"/>\n\t</svg>'},e.exports=t.default},336:function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return'<svg fill="'+e+'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\t\t<path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/>\n\t</svg>'},e.exports=t.default},337:function(e,t,r){"use strict"
e.exports={arrowLeft:r(334),arrowRight:r(335),close:r(336)}},338:function(e,t){"use strict"
e.exports=function(e){var t=this
e.forEach(function(e){return t[e]=t[e].bind(t)})}},339:function(e,t){"use strict"
var r=!1,o=function(){if("undefined"!=typeof window&&r)try{var e=document.body
e.style.paddingRight="",e.style.overflowY="",r=!1}catch(e){console.error("Failed to find body element. Err:",e)}},n=function(){if("undefined"!=typeof window&&!r)try{var e=window.innerWidth-document.body.clientWidth,t=document.body
t.style.paddingRight=e+"px",t.style.overflowY="hidden",r=!0}catch(e){console.error("Failed to find body element. Err:",e)}}
e.exports={allowScroll:o,blockScroll:n}},340:function(e,t){"use strict"
e.exports=!("undefined"==typeof window||!window.document||!window.document.createElement)},341:function(e,t){"use strict"
function r(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=o({},e)
return Object.keys(t).forEach(function(o){"object"==typeof t[o]&&t[o]&&e[o]?n[o]=r(e[o],t[o]):n[o]=t[o]}),n}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}
e.exports=r},750:function(e,t,r){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t]
return r}return Array.from(e)}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=r(44),l=o(a),u=r(246),s=o(u),c=r(1),p=o(c),f=r(18),d=o(f),h=r(3),m=r(34),g=r(326),y=o(g),v=r(253),b=o(v),w=r(752),x=o(w),P=r(107),O=o(P),T=r(106),k=o(T),C=["image/*","application/pdf","application/postscript"],_=new RegExp(/^image\/|application\/pdf|application\/postscript/g),j={crop:"fit",format:"jpg"},I=1e3
e.exports=d.default.create({displayName:"CloudinaryImagesField",statics:{type:"CloudinaryImages"},getInitialState:function(){return this.buildInitialState(this.props)},componentWillUpdate:function(e){var t=l.default.map(this.props.value,"public_id").join(),r=l.default.map(e.value,"public_id").join()
t!==r&&this.setState(this.buildInitialState(e))},buildInitialState:function(e){var t=this,r="CloudinaryImages-"+e.path+"-"+ ++I,o=e.value.map(function(e,r){return t.getThumbnail({value:e,imageSourceSmall:(0,b.default)(e.public_id,i({},j,{height:90})),imageSourceLarge:(0,b.default)(e.public_id,i({},j,{height:600,width:900}))},r)})
return{thumbnails:o,uploadFieldPath:r}},getThumbnail:function(e,t){var r=this
return p.default.createElement(x.default,i({key:"thumbnail-"+t,inputName:this.getInputName(this.props.path),openLightbox:function(e){return r.openLightbox(e,t)},shouldRenderActionButton:this.shouldRenderField(),toggleDelete:this.removeImage.bind(this,t)},e))},triggerFileBrowser:function(){this.refs.fileInput.clickDomNode()},hasFiles:function(){return this.refs.fileInput&&this.refs.fileInput.hasValue()},openLightbox:function(e,t){e.preventDefault(),this.setState({lightboxIsVisible:!0,lightboxImageIndex:t})},closeLightbox:function(){this.setState({lightboxIsVisible:!1,lightboxImageIndex:null})},lightboxPrevious:function(){this.setState({lightboxImageIndex:this.state.lightboxImageIndex-1})},lightboxNext:function(){this.setState({lightboxImageIndex:this.state.lightboxImageIndex+1})},removeImage:function(e){var t=[].concat(n(this.state.thumbnails)),r=t[e]
t.splice(e,1,(0,c.cloneElement)(r,{isDeleted:!r.props.isDeleted})),this.setState({thumbnails:t})},getCount:function(e){var t=0
return this.state.thumbnails.forEach(function(r){r&&r.props[e]&&t++}),t},clearFiles:function(){this.refs.fileInput.clearValue(),this.setState({thumbnails:this.state.thumbnails.filter(function(e){return!e.props.isQueued})})},uploadFile:function(e){var t=this
if(!window.FileReader)return alert("File reader not supported by browser.")
for(var r=[],o=0;o<e.target.files.length;o++){var i=e.target.files[o]
if(!i.type.match(_))return alert("Unsupported file type. Supported formats are: GIF, PNG, JPG, BMP, ICO, PDF, TIFF, EPS, PSD, SVG")
r.push(i)}var a=this.state.thumbnails.length
s.default.mapSeries(r,function(e,r){var o=new FileReader
o.readAsDataURL(e),o.onload=function(e){r(null,t.getThumbnail({isQueued:!0,imageSourceSmall:e.target.result},a++))}},function(e,r){t.setState({thumbnails:[].concat(n(t.state.thumbnails),n(r))})})},renderFileInput:function(){return this.shouldRenderField()?p.default.createElement(O.default,{accept:C.join(),key:this.state.uploadFieldPath,multiple:!0,name:this.state.uploadFieldPath,onChange:this.uploadFile,ref:"fileInput"}):null},renderValueInput:function(){return this.shouldRenderField()?this.hasFiles()?p.default.createElement("input",{name:this.getInputName(this.props.path),value:"upload:"+this.state.uploadFieldPath,type:"hidden"}):this.getCount("isDeleted")===this.props.value.length?p.default.createElement("input",{name:this.getInputName(this.props.path),value:"",type:"hidden"}):void 0:null},renderLightbox:function(){var e=this.props.value
if(e&&e.length){var t=e.map(function(e){return{src:(0,b.default)(e.public_id,i({},j,{height:600,width:900}))}})
return p.default.createElement(y.default,{images:t,currentImage:this.state.lightboxImageIndex,isOpen:this.state.lightboxIsVisible,onClickPrev:this.lightboxPrevious,onClickNext:this.lightboxNext,onClose:this.closeLightbox})}},renderToolbar:function(){if(!this.shouldRenderField())return null
var e=this.getCount("isQueued"),t=this.getCount("isDeleted"),r=this.hasFiles()?{}:{marginRight:10},o=e||t?p.default.createElement(k.default,null,e&&t?e+" added and "+t+" removed":null,e&&!t?e+" image added":null,!e&&t?t+" image removed":null):null,n=e||t?p.default.createElement(k.default,{color:t?"danger":"success"},"Save to ",t?"Confirm":"Upload"):null,i={clear:"both"}
return p.default.createElement("div",{style:i},p.default.createElement(m.Button,{onClick:this.triggerFileBrowser,style:r,"data-e2e-upload-button":"true"},"Upload Images"),this.hasFiles()&&p.default.createElement(m.Button,{variant:"link",color:"cancel",onClick:this.clearFiles},"Clear selection"),o,n)},renderUI:function(){var e=this.props,t=e.label,r=e.note,o=e.path,n=this.state.thumbnails
return p.default.createElement(h.FormField,{label:t,className:"field-type-cloudinaryimages",htmlFor:o},p.default.createElement("div",null,n),this.renderValueInput(),this.renderFileInput(),this.renderToolbar(),!!r&&p.default.createElement(h.FormNote,{note:r}),this.renderLightbox())}})},752:function(e,t,r){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={}
for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])
return r}function i(e){var t=e.isDeleted,r=e.imageSourceLarge,o=e.imageSourceSmall,i=e.inputName,a=e.isQueued,s=e.openLightbox,p=e.shouldRenderActionButton,f=e.toggleDelete,d=e.value,h=(n(e,["isDeleted","imageSourceLarge","imageSourceSmall","inputName","isQueued","openLightbox","shouldRenderActionButton","toggleDelete","value"]),void 0)
a?h="upload":t&&(h="remove")
var m=p&&!a?l.default.createElement(u.Button,{variant:"link",color:t?"default":"cancel",block:!0,onClick:f},t?"Undo":"Remove"):null,g=a||t||!d?null:l.default.createElement("input",{type:"hidden",name:i,value:JSON.stringify(d)}),y={float:"left",marginBottom:10,marginRight:10}
return l.default.createElement("div",{style:y},l.default.createElement(c.default,{component:r?"a":"span",href:!!r&&r,onClick:!!r&&s,mask:h,target:!!r&&"__blank"},l.default.createElement("img",{src:o,style:{height:90}})),m,g)}var a=r(1),l=o(a),u=r(34),s=r(256),c=o(s)
i.propTypes={imageSourceLarge:a.PropTypes.string,imageSourceSmall:a.PropTypes.string.isRequired,isDeleted:a.PropTypes.bool,isQueued:a.PropTypes.bool,openLightbox:a.PropTypes.func.isRequired,shouldRenderActionButton:a.PropTypes.bool,toggleDelete:a.PropTypes.func.isRequired},e.exports=i}})
