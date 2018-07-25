webpackJsonp([11],{779:function(e,t,a){"use strict"
function r(e){return e&&e.__esModule?e:{default:e}}var l=a(1),u=r(l),s=a(29),p=r(s),o=a(30),n=r(o),d=a(125),i=u.default.createClass({displayName:"ListColumn",propTypes:{col:u.default.PropTypes.object,data:u.default.PropTypes.object},getValue:function(){var e=this.props.data.fields[this.props.col.path]
return Array.isArray(e)?(0,d.plural)(e.length,"* Value","* Values"):""},render:function(){var e=this.getValue()
return u.default.createElement(p.default,null,u.default.createElement(n.default,{padded:!0,interior:!0,field:this.props.col.type},e))}})
e.exports=i}})
