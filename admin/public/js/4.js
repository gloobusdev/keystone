webpackJsonp([4],{687:function(e,t,r){"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t]
return r}return Array.from(e)}function i(){return E++}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(7),u=n(o),p=r(1),c=n(p),d=r(20),h=n(d),f=r(1204),m=n(f),y=r(81),v=r(31),g=r(154),b=n(g),E=0,C=function(e){var t=e.name,r=e.id,n=e.onRemove,a=e.children
return c["default"].createElement("div",{style:{borderTop:"2px solid #eee",paddingTop:15}},t&&c["default"].createElement("input",{type:"hidden",name:t,value:r}),a,c["default"].createElement("div",{style:{textAlign:"right",paddingBottom:10}},c["default"].createElement(v.Button,{size:"xsmall",color:"danger",onClick:n},"remove")))}
e.exports=h["default"].create({displayName:"ListField",statics:{type:"List"},propTypes:{fields:c["default"].PropTypes.object.isRequired,label:c["default"].PropTypes.string,onChange:c["default"].PropTypes.func.isRequired,path:c["default"].PropTypes.string.isRequired,value:c["default"].PropTypes.array},addItem:function(){var e=this.props,t=e.path,r=e.value,n=e.onChange
n({path:t,value:[].concat(l(r),[{id:i(),_isNew:!0}])})},removeItem:function(e){var t=this.props,r=t.value,n=t.path,a=t.onChange,l=r.slice(0,e).concat(r.slice(e+1))
a({path:n,value:l})},handleFieldChange:function(e,t){var r=this.props,n=r.value,i=r.path,o=r.onChange,u=n.slice(0,e),p=s({},n[e],a({},t.path,t.value)),c=n.slice(e+1),d=[].concat(l(u),[p],l(c))
o({path:i,value:d})},renderFieldsForItem:function(e,t){var r=this
return Object.keys(this.props.fields).map(function(n){var a=r.props.fields[n]
if("function"!=typeof y.Fields[a.type])return c["default"].createElement(b["default"],{type:a.type,path:a.path,key:a.path})
var l=(0,u["default"])({},a)
return l.value=t[a.path],l.values=t,l.onChange=r.handleFieldChange.bind(r,e),l.mode="edit",l.inputNamePrefix=r.props.path+"["+e+"]",l.key=a.path,c["default"].createElement(y.Fields[a.type],l)},this)},renderItems:function(){var e=this,t=this.props,r=t.value,n=void 0===r?[]:r,a=t.path,l=this.addItem
return c["default"].createElement("div",null,n.map(function(t,r){var n=t.id,l=t._isNew,i=!l&&a+"["+r+"][id]",o=function(t){return e.removeItem(r)}
return c["default"].createElement(C,s({key:n},{id:n,name:i,onRemove:o}),e.renderFieldsForItem(r,t))}),c["default"].createElement(v.GlyphButton,{color:"success",glyph:"plus",position:"left",onClick:l},"Add"))},renderUI:function(){var e=this.props,t=e.label,r=e.value
return c["default"].createElement("div",null,c["default"].createElement("h3",{"data-things":"whatever"},t),this.shouldRenderField()?this.renderItems():c["default"].createElement(m["default"],{value:r}),this.renderNote())}})},711:function(e,t,r){"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var r=e?e.length:0,n=t?t.length:0
if(r!==n)return!1
for(var a=0;a<r;a++)if(e[a]!==t[a])return!1
return!0}var l=r(209),i=n(l),s=r(20),o=n(s),u=r(128),p=r(1),c=n(p),d=r(190),h=n(d),f=r(152),m=n(f),y=r(3),v=r(74),g=n(v)
e.exports=o["default"].create({displayName:"RelationshipField",statics:{type:"Relationship"},getInitialState:function(){return{value:null,createIsOpen:!1}},componentDidMount:function(){this._itemsCache={},this.loadValue(this.props.value)},componentWillReceiveProps:function(e){e.value===this.props.value||e.many&&a(this.props.value,e.value)||this.loadValue(e.value)},shouldCollapse:function(){return this.props.many?this.props.collapse&&!this.props.value.length:this.props.collapse&&!this.props.value},buildFilters:function(){var e=this,t={}
g["default"].forEach(this.props.filters,function(r,n){if(g["default"].isString(r)&&":"==r[0]){var a=r.slice(1),l=e.props.values[a]
if(l)return void(t[n]=l)
if(":_id"===a&&Keystone.item)return void(t[n]=Keystone.item.id)}else t[n]=r},this)
var r=[]
return g["default"].forEach(t,function(e,t){r.push("filters["+t+"][value]="+encodeURIComponent(e))}),r.join("&")},cacheItem:function(e){e.href=Keystone.adminPath+"/"+this.props.refList.path+"/"+e.id,this._itemsCache[e.id]=e},loadValue:function(e){var t=this
if(!e)return this.setState({loading:!1,value:null})
e=Array.isArray(e)?e:e.split(",")
var r=e.map(function(e){return t._itemsCache[e]}).filter(function(e){return e})
return r.length===e.length?void this.setState({loading:!1,value:this.props.many?r:r[0]}):(this.setState({loading:!0,value:null}),void i["default"].map(e,function(e,r){(0,m["default"])({url:Keystone.adminPath+"/api/"+t.props.refList.path+"/"+e+"?basic",responseType:"json"},function(e,n,a){return e||!a?r(e):(t.cacheItem(a),void r(e,a))})},function(e,r){t.isMounted()&&t.setState({loading:!1,value:t.props.many?r:r[0]})}))},loadOptionsCallback:{},loadOptions:function(e,t){var r=this
this.loadOptionsCallback=t
var n=this.buildFilters();(0,m["default"])({url:Keystone.adminPath+"/api/"+this.props.refList.path+"?basic&search="+e+"&"+n,responseType:"json"},function(e,n,a){return e?(console.error("Error loading items:",e),t(null,[])):(a.results.forEach(r.cacheItem),void t(null,{options:a.results,complete:a.results.length===a.count}))})},valueChanged:function(e){this.props.onChange({path:this.props.path,value:e})},openCreate:function(){this.setState({createIsOpen:!0})},closeCreate:function(){this.setState({createIsOpen:!1})},onCreate:function(e){var t=this
if(this.cacheItem(e),Array.isArray(this.state.value)){var r=this.state.value.map(function(e){return e.id})
r.push(e.id),this.valueChanged(r.join(","))}else this.valueChanged(e.id)
this.loadOptionsCallback(null,{complete:!0,options:Object.keys(this._itemsCache).map(function(e){return t._itemsCache[e]})}),this.closeCreate()},renderSelect:function(e){return c["default"].createElement(h["default"].Async,{multi:this.props.many,disabled:e,loadOptions:this.loadOptions,labelKey:"name",name:this.getInputName(this.props.path),onChange:this.valueChanged,simpleValue:!0,value:this.state.value,valueKey:"id"})},renderInputGroup:function(){var e=r(214)
return c["default"].createElement(y.InputGroup,null,c["default"].createElement(y.InputGroup.Section,{grow:!0},this.renderSelect()),c["default"].createElement(y.InputGroup.Section,null,c["default"].createElement(y.Button,{onClick:this.openCreate,type:"success"},"+")),c["default"].createElement(e,{list:u.listsByKey[this.props.refList.key],isOpen:this.state.createIsOpen,onCreate:this.onCreate,onCancel:this.closeCreate}))},renderValue:function(){return this.renderSelect(!0)},renderField:function(){return this.props.createInline?this.renderInputGroup():this.renderSelect()}})},1204:function(e,t,r){"use strict"
function n(e,t,r){var i=t?"span":"div",s=(t||0)+1,o=[]
if(r=r?a.createElement("span",{style:l.comma},","):null,"string"==typeof e)return a.createElement(i,{style:l.string},'"'+e+'"',r)
if("boolean"==typeof e||null===e||void 0===e)return a.createElement(i,{style:l.bool},String(e),r)
if("number"==typeof e)return a.createElement(i,{style:l.number},String(e),r)
if("[object Date]"===Object.prototype.toString.call(e))return a.createElement(i,{style:l.date},String(e),r)
if(Array.isArray(e)){if(!e.length)return a.createElement(i,{style:l.empty},"Array: []")
o.push(a.createElement(i,{key:"__array:open__",style:l.array},"Array: ["))
for(var u=0;u<e.length;u++)o.push(a.createElement("div",{key:"i"+u,style:{paddingLeft:"20px"}},n(e[u],s,u<e.length-1)))
o.push(a.createElement(i,{key:"__array:close__",style:l.array},"]"))}else if(e&&"object"==typeof e){var p=Object.keys(e).length
if(t&&!p)return a.createElement(i,{style:l.empty},"Object: {}")
t&&o.push(a.createElement(i,{key:"__object:open__",style:l.object},"Object: {"))
for(var c in e)"function"!=typeof e[c]&&o.push(a.createElement("div",{key:c,style:{paddingLeft:t?"20px":"0px"}},a.createElement("span",{style:{paddingRight:"5px",cursor:"default"}},c,":"),n(e[c],s)))
t&&o.push(a.createElement(i,{key:"__object:close__",style:l.object},"}"))}return a.createElement("div",null,o,r)}var a=r(1),l={string:{color:"#0e4889",cursor:"default"},bool:{color:"#06624b",cursor:"default",fontStyle:"italic"},number:{color:"#ca000a",cursor:"default"},date:{color:"#009f7b",cursor:"default"},empty:{color:"#999999",cursor:"default"},array:{color:"#666666",cursor:"default"},object:{color:"#0b89b6",cursor:"default"},comma:{color:"#999999",cursor:"default"}},i=a.createClass({displayName:"DOMify",render:function(){return a.createElement("div",{className:this.props.className,style:this.props.style},n(this.props.value))}})
e.exports=i}})
