webpackJsonp([3],{254:function(e,t,o){"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}var l=o(1),r=n(l),a=o(12),s=n(a),i=o(4),u=n(i),p=o(67),d=o(149),c=n(d),h=r.default.createClass({displayName:"Checkbox",propTypes:{checked:r.default.PropTypes.bool,component:r.default.PropTypes.node,onChange:r.default.PropTypes.func,readonly:r.default.PropTypes.bool},getDefaultProps:function(){return{component:"button"}},getInitialState:function(){return{active:null,focus:null,hover:null}},componentDidMount:function(){window.addEventListener("mouseup",this.handleMouseUp,!1)},componentWillUnmount:function(){window.removeEventListener("mouseup",this.handleMouseUp,!1)},getStyles:function(){var e=this.props,t=e.checked,o=e.readonly,n=this.state,l=n.active,r=n.focus,a=n.hover,s="#3999fc",i=t&&!o?s:"white",u=t&&!o?"rgba(0,0,0,0.15) rgba(0,0,0,0.1) rgba(0,0,0,0.05)":"rgba(0,0,0,0.3) rgba(0,0,0,0.2) rgba(0,0,0,0.15)",d=t&&!o?"0 1px 0 rgba(255,255,255,0.33)":"inset 0 1px 0 rgba(0,0,0,0.06)",h=t&&!o?"white":"#bbb",f=t&&!o?"0 1px 0 rgba(0,0,0,0.2)":null
return!a||r||o||(u=t?"rgba(0,0,0,0.1) rgba(0,0,0,0.15) rgba(0,0,0,0.2)":"rgba(0,0,0,0.35) rgba(0,0,0,0.3) rgba(0,0,0,0.25)"),l&&(i=t&&!o?(0,p.darken)(s,20):"#eee",u=t&&!o?"rgba(0,0,0,0.25) rgba(0,0,0,0.3) rgba(0,0,0,0.35)":"rgba(0,0,0,0.4) rgba(0,0,0,0.35) rgba(0,0,0,0.3)",d=t&&!o?"0 1px 0 rgba(255,255,255,0.33)":"inset 0 1px 3px rgba(0,0,0,0.2)"),r&&!l&&(u=t&&!o?"rgba(0,0,0,0.25) rgba(0,0,0,0.3) rgba(0,0,0,0.35)":s,d=t&&!o?"0 0 0 3px "+(0,p.fade)(s,15):"inset 0 1px 2px rgba(0,0,0,0.15), 0 0 0 3px "+(0,p.fade)(s,15)),o&&(i="rgba(255,255,255,0.5)",u="rgba(0,0,0,0.1)",d="none",h=t?s:"#bbb"),{alignItems:"center",background:i,border:"1px solid",borderColor:u,borderRadius:c.default.borderRadius.sm,boxShadow:d,color:h,display:"inline-block",fontSize:14,height:16,lineHeight:"15px",outline:"none",padding:0,textAlign:"center",textShadow:f,verticalAlign:"middle",width:16,msTransition:"all 120ms ease-out",MozTransition:"all 120ms ease-out",WebkitTransition:"all 120ms ease-out",transition:"all 120ms ease-out"}},handleKeyDown:function(e){32===e.keyCode&&this.toggleActive(!0)},handleKeyUp:function(){this.toggleActive(!1)},handleMouseOver:function(){this.toggleHover(!0)},handleMouseDown:function(){this.toggleActive(!0),this.toggleFocus(!0)},handleMouseUp:function(){this.toggleActive(!1)},handleMouseOut:function(){this.toggleHover(!1)},toggleActive:function(e){this.setState({active:e})},toggleHover:function(e){this.setState({hover:e})},toggleFocus:function(e){this.setState({focus:e})},handleChange:function(){this.props.onChange(!this.props.checked)},render:function(){var e=this,t=this.props,o=t.checked,n=t.readonly,l=(0,s.default)(this.props,"checked","component","onChange","readonly")
l.style=this.getStyles(),l.ref="checkbox",l.className=(0,u.default)("octicon",{"octicon-check":o,"octicon-x":"boolean"==typeof o&&!o&&n}),l.type=n?null:"button",l.onKeyDown=this.handleKeyDown,l.onKeyUp=this.handleKeyUp,l.onMouseDown=this.handleMouseDown,l.onMouseUp=this.handleMouseUp,l.onMouseOver=this.handleMouseOver,l.onMouseOut=this.handleMouseOut,l.onClick=n?null:this.handleChange,l.onFocus=n?null:function(){return e.toggleFocus(!0)},l.onBlur=n?null:function(){return e.toggleFocus(!1)}
var a=n?"span":this.props.component
return r.default.createElement(a,l)}})
e.exports=h},744:function(e,t,o){"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}var l=o(1),r=n(l),a=o(254),s=n(a),i=o(29),u=n(i),p=o(30),d=n(p),c=r.default.createClass({displayName:"BooleanColumn",propTypes:{col:r.default.PropTypes.object,data:r.default.PropTypes.object},renderValue:function(){return r.default.createElement(d.default,{truncate:!1,field:this.props.col.type},r.default.createElement(s.default,{readonly:!0,checked:this.props.data.fields[this.props.col.path]}))},render:function(){return r.default.createElement(u.default,null,this.renderValue())}})
e.exports=c},760:function(e,t,o){"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=o(1),a=n(r),s=o(29),i=n(s),u=o(30),p=n(u),d=o(213),c=n(d),h=a.default.createClass({displayName:"Custom Type",propTypes:{col:a.default.PropTypes.object,data:a.default.PropTypes.object,linkTo:a.default.PropTypes.string},renderVirtualVal:function(e){return e?Array.isArray(e)?e.reduce(function(e,t){return e+", "+JSON.stringify(t)},""):"object"==("undefined"==typeof e?"undefined":l(e))?JSON.stringify(e):e:""},getValue:function(){if("templateContent"===this.props.col.path&&!this.props.col.virtualPath){var e=c.default.get(this.props,"col.currentColumnNumber")
this.props.col.label=c.default.get(this.props,"list.expandedDefaultColumns."+e+".label"),this.props.col.path=c.default.get(this.props,"list.expandedDefaultColumns."+e+".path"),this.props.col.type=c.default.get(this.props,"list.expandedDefaultColumns."+e+".type"),this.props.col.virtualPath=c.default.get(this.props,"list.expandedDefaultColumns."+e+".virtualPath"),this.props.col.virtualLabel=c.default.get(this.props,"list.expandedDefaultColumns."+e+".virtualLabel"),this.props.col.width=c.default.get(this.props,"list.expandedDefaultColumns."+e+".width")}var t=this.props.data.fields[this.props.col.path],o=t?JSON.parse(t):{},n=null
if(this.props.col.virtualPath){n=o[this.props.col.virtualPath]
var l=c.default.get(this.props,"col.field.options.modules.values"),r={}
if(l&&Array.isArray(l)&&l.length>0&&l.forEach(function(e){r[e.value]=e.label}),"module"==this.props.col.virtualPath&&(n=c.default.get(r,n)||n),"recipients"==this.props.col.virtualPath&&(n=n&&Array.isArray(n)&&n.length>0&&n.reduce(function(e,t){return e+(e?", ":"")+t.label},"")||""),"content.*.independents.indextype"==this.props.col.virtualPath){n=[]
var a=c.default.get(o,"content.willemotProduction.independents.indextype.type"),s=c.default.get(o,"content.willemotClaims.independents.indextype.type"),i=c.default.get(o,"content.thirdParties.independents.indextype.type")
a&&n.push(a),s&&n.push(s),i&&n.push(i),n=n.join(", ")}}return t?this.props.col.virtualPath?this.renderVirtualVal(n):t:null},render:function(){var e=this.getValue(),t=!(e||!this.props.linkTo)
return a.default.createElement(i.default,null,a.default.createElement(p.default,{to:this.props.linkTo,empty:t,padded:!0,interior:!0,field:this.props.col.type},e))}})
e.exports=h},803:function(e,t,o){"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}var l=o(1),r=n(l),a=o(518),s=n(a),i=o(29),u=n(i),p=o(30),d=n(p),c=r.default.createClass({displayName:"NumberColumn",propTypes:{col:r.default.PropTypes.object,data:r.default.PropTypes.object},renderValue:function(){var e=this.props.data.fields[this.props.col.path]
if(!e||isNaN(e))return null
var t="money"===this.props.col.path?(0,s.default)(e).format("$0,0.00"):e
return t},render:function(){return r.default.createElement(u.default,null,r.default.createElement(d.default,{field:this.props.col.type},this.renderValue()))}})
e.exports=c}})
