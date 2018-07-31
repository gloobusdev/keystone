webpackJsonp([10],{150:function(e,t){e.exports=function(){var e=[]
return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t]
r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]])
for(var n={},i=0;i<this.length;i++){var o=this[i][0]
"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var l=t[i]
"number"==typeof l[0]&&n[l[0]]||(r&&!l[2]?l[2]=r:r&&(l[2]="("+l[2]+") and ("+r+")"),e.push(l))}},e}},174:function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],i=h[n.id]
if(i){i.refs++
for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o])
for(;o<n.parts.length;o++)i.parts.push(u(n.parts[o],t))}else{for(var l=[],o=0;o<n.parts.length;o++)l.push(u(n.parts[o],t))
h[n.id]={id:n.id,refs:1,parts:l}}}}function i(e){for(var t=[],r={},n=0;n<e.length;n++){var i=e[n],o=i[0],l=i[1],s=i[2],a=i[3],u={css:l,media:s,sourceMap:a}
r[o]?r[o].parts.push(u):t.push(r[o]={id:o,parts:[u]})}return t}function o(e,t){var r=v(),n=b[b.length-1]
if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),b.push(t)
else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.")
r.appendChild(t)}}function l(e){e.parentNode.removeChild(e)
var t=b.indexOf(e)
t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style")
return t.type="text/css",o(e,t),t}function a(e){var t=document.createElement("link")
return t.rel="stylesheet",o(e,t),t}function u(e,t){var r,n,i
if(t.singleton){var o=y++
r=m||(m=s(t)),n=c.bind(null,r,o,!1),i=c.bind(null,r,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=a(t),n=d.bind(null,r),i=function(){l(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(t),n=f.bind(null,r),i=function(){l(r)})
return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return
n(e=t)}else i()}}function c(e,t,r,n){var i=r?"":n.css
if(e.styleSheet)e.styleSheet.cssText=w(t,i)
else{var o=document.createTextNode(i),l=e.childNodes
l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(o,l[t]):e.appendChild(o)}}function f(e,t){var r=t.css,n=t.media
if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r
else{for(;e.firstChild;)e.removeChild(e.firstChild)
e.appendChild(document.createTextNode(r))}}function d(e,t){var r=t.css,n=t.sourceMap
n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */")
var i=new Blob([r],{type:"text/css"}),o=e.href
e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var h={},p=function(e){var t
return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},g=p(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),v=p(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,y=0,b=[]
e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=g()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom")
var r=i(e)
return n(r,t),function(e){for(var o=[],l=0;l<r.length;l++){var s=r[l],a=h[s.id]
a.refs--,o.push(a)}if(e){var u=i(e)
n(u,t)}for(var l=0;l<o.length;l++){var a=o[l]
if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]()
delete h[a.id]}}}}
var w=function(){var e=[]
return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},755:function(e,t,r){"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(833),l=n(o),s=r(20),a=n(s),u=r(1),c=n(u),f=r(16),d=r(3),h=r(4),p=n(h)
r(1708),e.exports=a.default.create({displayName:"CodeField",statics:{type:"Code"},getInitialState:function(){return{isFocused:!1}},componentDidMount:function(){if(this.refs.codemirror){var e=i({lineNumbers:!0,readOnly:!this.shouldRenderField()},this.props.editor)
this.codeMirror=l.default.fromTextArea((0,f.findDOMNode)(this.refs.codemirror),e),this.codeMirror.setSize(null,this.props.height),this.codeMirror.on("change",this.codemirrorValueChanged),this.codeMirror.on("focus",this.focusChanged.bind(this,!0)),this.codeMirror.on("blur",this.focusChanged.bind(this,!1)),this._currentCodemirrorValue=this.props.value}},componentWillUnmount:function(){this.codeMirror&&this.codeMirror.toTextArea()},componentWillReceiveProps:function(e){this.codeMirror&&this._currentCodemirrorValue!==e.value&&this.codeMirror.setValue(e.value)},focus:function(){this.codeMirror&&this.codeMirror.focus()},focusChanged:function(e){this.setState({isFocused:e})},codemirrorValueChanged:function(e,t){var r=e.getValue()
this._currentCodemirrorValue=r,this.props.onChange({path:this.props.path,value:r})},renderCodemirror:function(){var e=(0,p.default)("CodeMirror-container",{"is-focused":this.state.isFocused&&this.shouldRenderField()})
return c.default.createElement("div",{className:e},c.default.createElement(d.FormInput,{autoComplete:"off",multiline:!0,name:this.getInputName(this.props.path),onChange:this.valueChanged,ref:"codemirror",value:this.props.value}))},renderValue:function(){return this.renderCodemirror()},renderField:function(){return this.renderCodemirror()}})},833:function(e,t,r){!function(t,r){e.exports=r()}(this,function(){"use strict"
function e(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}function t(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild)
return e}function r(e,r){return t(e).appendChild(r)}function n(e,t,r,n){var i=document.createElement(e)
if(r&&(i.className=r),n&&(i.style.cssText=n),"string"==typeof t)i.appendChild(document.createTextNode(t))
else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o])
return i}function i(e,t,r,i){var o=n(e,t,r,i)
return o.setAttribute("role","presentation"),o}function o(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t)
do if(11==t.nodeType&&(t=t.host),t==e)return!0
while(t=t.parentNode)}function l(){var e
try{e=document.activeElement}catch(t){e=document.body||null}for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement
return e}function s(t,r){var n=t.className
e(r).test(n)||(t.className+=(n?" ":"")+r)}function a(t,r){for(var n=t.split(" "),i=0;i<n.length;i++)n[i]&&!e(n[i]).test(r)&&(r+=" "+n[i])
return r}function u(e){var t=Array.prototype.slice.call(arguments,1)
return function(){return e.apply(null,t)}}function c(e,t,r){t||(t={})
for(var n in e)!e.hasOwnProperty(n)||r===!1&&t.hasOwnProperty(n)||(t[n]=e[n])
return t}function f(e,t,r,n,i){null==t&&(t=e.search(/[^\s\u00a0]/),t==-1&&(t=e.length))
for(var o=n||0,l=i||0;;){var s=e.indexOf("\t",o)
if(s<0||s>=t)return l+(t-o)
l+=s-o,l+=r-l%r,o=s+1}}function d(e,t){for(var r=0;r<e.length;++r)if(e[r]==t)return r
return-1}function h(e,t,r){for(var n=0,i=0;;){var o=e.indexOf("\t",n)
o==-1&&(o=e.length)
var l=o-n
if(o==e.length||i+l>=t)return n+Math.min(l,t-i)
if(i+=o-n,i+=r-i%r,n=o+1,i>=t)return n}}function p(e){for(;$l.length<=e;)$l.push(g($l)+" ")
return $l[e]}function g(e){return e[e.length-1]}function v(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n)
return r}function m(e,t,r){for(var n=0,i=r(t);n<e.length&&r(e[n])<=i;)n++
e.splice(n,0,t)}function y(){}function b(e,t){var r
return Object.create?r=Object.create(e):(y.prototype=e,r=new y),t&&c(t,r),r}function w(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||Zl.test(e))}function x(e,t){return t?!!(t.source.indexOf("\\w")>-1&&w(e))||t.test(e):w(e)}function C(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1
return!0}function S(e){return e.charCodeAt(0)>=768&&Jl.test(e)}function k(e,t,r){for(;(r<0?t>0:t<e.length)&&S(e.charAt(t));)t+=r
return t}function L(e,t,r){for(var n=t>r?-1:1;;){if(t==r)return t
var i=(t+r)/2,o=n<0?Math.ceil(i):Math.floor(i)
if(o==t)return e(o)?t:r
e(o)?r=o:t=o+n}}function M(e,t,r){var o=this
this.input=r,o.scrollbarFiller=n("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=n("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=i("div",null,"CodeMirror-code"),o.selectionDiv=n("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=n("div",null,"CodeMirror-cursors"),o.measure=n("div",null,"CodeMirror-measure"),o.lineMeasure=n("div",null,"CodeMirror-measure"),o.lineSpace=i("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none")
var l=i("div",[o.lineSpace],"CodeMirror-lines")
o.mover=n("div",[l],null,"position: relative"),o.sizer=n("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=n("div",null,null,"position: absolute; height: "+jl+"px; width: 1px;"),o.gutters=n("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=n("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=n("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),xl&&Cl<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),Sl||ml&&Wl||(o.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(o.wrapper):e(o.wrapper)),o.viewFrom=o.viewTo=t.first,o.reportedViewFrom=o.reportedViewTo=t.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1,o.selForContextMenu=null,o.activeTouch=null,r.init(o)}function T(e,t){if(t-=e.first,t<0||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.")
for(var r=e;!r.lines;)for(var n=0;;++n){var i=r.children[n],o=i.chunkSize()
if(t<o){r=i
break}t-=o}return r.lines[t]}function N(e,t,r){var n=[],i=t.line
return e.iter(t.line,r.line+1,function(e){var o=e.text
i==r.line&&(o=o.slice(0,r.ch)),i==t.line&&(o=o.slice(t.ch)),n.push(o),++i}),n}function O(e,t,r){var n=[]
return e.iter(t,r,function(e){n.push(e.text)}),n}function A(e,t){var r=t-e.height
if(r)for(var n=e;n;n=n.parent)n.height+=r}function D(e){if(null==e.parent)return null
for(var t=e.parent,r=d(t.lines,e),n=t.parent;n;t=n,n=n.parent)for(var i=0;n.children[i]!=t;++i)r+=n.children[i].chunkSize()
return r+t.first}function W(e,t){var r=e.first
e:do{for(var n=0;n<e.children.length;++n){var i=e.children[n],o=i.height
if(t<o){e=i
continue e}t-=o,r+=i.chunkSize()}return r}while(!e.lines)
for(var l=0;l<e.lines.length;++l){var s=e.lines[l],a=s.height
if(t<a)break
t-=a}return r+l}function H(e,t){return t>=e.first&&t<e.first+e.size}function F(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function z(e,t,r){return void 0===r&&(r=null),this instanceof z?(this.line=e,this.ch=t,void(this.sticky=r)):new z(e,t,r)}function P(e,t){return e.line-t.line||e.ch-t.ch}function E(e,t){return e.sticky==t.sticky&&0==P(e,t)}function R(e){return z(e.line,e.ch)}function I(e,t){return P(e,t)<0?t:e}function B(e,t){return P(e,t)<0?e:t}function U(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function G(e,t){if(t.line<e.first)return z(e.first,0)
var r=e.first+e.size-1
return t.line>r?z(r,T(e,r).text.length):V(t,T(e,t.line).text.length)}function V(e,t){var r=e.ch
return null==r||r>t?z(e.line,t):r<0?z(e.line,0):e}function K(e,t){for(var r=[],n=0;n<t.length;n++)r[n]=G(e,t[n])
return r}function j(){Ql=!0}function X(){es=!0}function Y(e,t,r){this.marker=e,this.from=t,this.to=r}function _(e,t){if(e)for(var r=0;r<e.length;++r){var n=e[r]
if(n.marker==t)return n}}function q(e,t){for(var r,n=0;n<e.length;++n)e[n]!=t&&(r||(r=[])).push(e[n])
return r}function $(e,t){e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],t.marker.attachLine(e)}function Z(e,t,r){var n
if(e)for(var i=0;i<e.length;++i){var o=e[i],l=o.marker,s=null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t)
if(s||o.from==t&&"bookmark"==l.type&&(!r||!o.marker.insertLeft)){var a=null==o.to||(l.inclusiveRight?o.to>=t:o.to>t);(n||(n=[])).push(new Y(l,o.from,a?null:o.to))}}return n}function J(e,t,r){var n
if(e)for(var i=0;i<e.length;++i){var o=e[i],l=o.marker,s=null==o.to||(l.inclusiveRight?o.to>=t:o.to>t)
if(s||o.from==t&&"bookmark"==l.type&&(!r||o.marker.insertLeft)){var a=null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t);(n||(n=[])).push(new Y(l,a?null:o.from-t,null==o.to?null:o.to-t))}}return n}function Q(e,t){if(t.full)return null
var r=H(e,t.from.line)&&T(e,t.from.line).markedSpans,n=H(e,t.to.line)&&T(e,t.to.line).markedSpans
if(!r&&!n)return null
var i=t.from.ch,o=t.to.ch,l=0==P(t.from,t.to),s=Z(r,i,l),a=J(n,o,l),u=1==t.text.length,c=g(t.text).length+(u?i:0)
if(s)for(var f=0;f<s.length;++f){var d=s[f]
if(null==d.to){var h=_(a,d.marker)
h?u&&(d.to=null==h.to?null:h.to+c):d.to=i}}if(a)for(var p=0;p<a.length;++p){var v=a[p]
if(null!=v.to&&(v.to+=c),null==v.from){var m=_(s,v.marker)
m||(v.from=c,u&&(s||(s=[])).push(v))}else v.from+=c,u&&(s||(s=[])).push(v)}s&&(s=ee(s)),a&&a!=s&&(a=ee(a))
var y=[s]
if(!u){var b,w=t.text.length-2
if(w>0&&s)for(var x=0;x<s.length;++x)null==s[x].to&&(b||(b=[])).push(new Y(s[x].marker,null,null))
for(var C=0;C<w;++C)y.push(b)
y.push(a)}return y}function ee(e){for(var t=0;t<e.length;++t){var r=e[t]
null!=r.from&&r.from==r.to&&r.marker.clearWhenEmpty!==!1&&e.splice(t--,1)}return e.length?e:null}function te(e,t,r){var n=null
if(e.iter(t.line,r.line+1,function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var r=e.markedSpans[t].marker
!r.readOnly||n&&d(n,r)!=-1||(n||(n=[])).push(r)}}),!n)return null
for(var i=[{from:t,to:r}],o=0;o<n.length;++o)for(var l=n[o],s=l.find(0),a=0;a<i.length;++a){var u=i[a]
if(!(P(u.to,s.from)<0||P(u.from,s.to)>0)){var c=[a,1],f=P(u.from,s.from),h=P(u.to,s.to);(f<0||!l.inclusiveLeft&&!f)&&c.push({from:u.from,to:s.from}),(h>0||!l.inclusiveRight&&!h)&&c.push({from:s.to,to:u.to}),i.splice.apply(i,c),a+=c.length-3}}return i}function re(e){var t=e.markedSpans
if(t){for(var r=0;r<t.length;++r)t[r].marker.detachLine(e)
e.markedSpans=null}}function ne(e,t){if(t){for(var r=0;r<t.length;++r)t[r].marker.attachLine(e)
e.markedSpans=t}}function ie(e){return e.inclusiveLeft?-1:0}function oe(e){return e.inclusiveRight?1:0}function le(e,t){var r=e.lines.length-t.lines.length
if(0!=r)return r
var n=e.find(),i=t.find(),o=P(n.from,i.from)||ie(e)-ie(t)
if(o)return-o
var l=P(n.to,i.to)||oe(e)-oe(t)
return l?l:t.id-e.id}function se(e,t){var r,n=es&&e.markedSpans
if(n)for(var i=void 0,o=0;o<n.length;++o)i=n[o],i.marker.collapsed&&null==(t?i.from:i.to)&&(!r||le(r,i.marker)<0)&&(r=i.marker)
return r}function ae(e){return se(e,!0)}function ue(e){return se(e,!1)}function ce(e,t){var r,n=es&&e.markedSpans
if(n)for(var i=0;i<n.length;++i){var o=n[i]
o.marker.collapsed&&(null==o.from||o.from<t)&&(null==o.to||o.to>t)&&(!r||le(r,o.marker)<0)&&(r=o.marker)}return r}function fe(e,t,r,n,i){var o=T(e,t),l=es&&o.markedSpans
if(l)for(var s=0;s<l.length;++s){var a=l[s]
if(a.marker.collapsed){var u=a.marker.find(0),c=P(u.from,r)||ie(a.marker)-ie(i),f=P(u.to,n)||oe(a.marker)-oe(i)
if(!(c>=0&&f<=0||c<=0&&f>=0)&&(c<=0&&(a.marker.inclusiveRight&&i.inclusiveLeft?P(u.to,r)>=0:P(u.to,r)>0)||c>=0&&(a.marker.inclusiveRight&&i.inclusiveLeft?P(u.from,n)<=0:P(u.from,n)<0)))return!0}}}function de(e){for(var t;t=ae(e);)e=t.find(-1,!0).line
return e}function he(e){for(var t;t=ue(e);)e=t.find(1,!0).line
return e}function pe(e){for(var t,r;t=ue(e);)e=t.find(1,!0).line,(r||(r=[])).push(e)
return r}function ge(e,t){var r=T(e,t),n=de(r)
return r==n?t:D(n)}function ve(e,t){if(t>e.lastLine())return t
var r,n=T(e,t)
if(!me(e,n))return t
for(;r=ue(n);)n=r.find(1,!0).line
return D(n)+1}function me(e,t){var r=es&&t.markedSpans
if(r)for(var n=void 0,i=0;i<r.length;++i)if(n=r[i],n.marker.collapsed){if(null==n.from)return!0
if(!n.marker.widgetNode&&0==n.from&&n.marker.inclusiveLeft&&ye(e,t,n))return!0}}function ye(e,t,r){if(null==r.to){var n=r.marker.find(1,!0)
return ye(e,n.line,_(n.line.markedSpans,r.marker))}if(r.marker.inclusiveRight&&r.to==t.text.length)return!0
for(var i=void 0,o=0;o<t.markedSpans.length;++o)if(i=t.markedSpans[o],i.marker.collapsed&&!i.marker.widgetNode&&i.from==r.to&&(null==i.to||i.to!=r.from)&&(i.marker.inclusiveLeft||r.marker.inclusiveRight)&&ye(e,t,i))return!0}function be(e){e=de(e)
for(var t=0,r=e.parent,n=0;n<r.lines.length;++n){var i=r.lines[n]
if(i==e)break
t+=i.height}for(var o=r.parent;o;r=o,o=r.parent)for(var l=0;l<o.children.length;++l){var s=o.children[l]
if(s==r)break
t+=s.height}return t}function we(e){if(0==e.height)return 0
for(var t,r=e.text.length,n=e;t=ae(n);){var i=t.find(0,!0)
n=i.from.line,r+=i.from.ch-i.to.ch}for(n=e;t=ue(n);){var o=t.find(0,!0)
r-=n.text.length-o.from.ch,n=o.to.line,r+=n.text.length-o.to.ch}return r}function xe(e){var t=e.display,r=e.doc
t.maxLine=T(r,r.first),t.maxLineLength=we(t.maxLine),t.maxLineChanged=!0,r.iter(function(e){var r=we(e)
r>t.maxLineLength&&(t.maxLineLength=r,t.maxLine=e)})}function Ce(e,t,r,n){if(!e)return n(t,r,"ltr",0)
for(var i=!1,o=0;o<e.length;++o){var l=e[o];(l.from<r&&l.to>t||t==r&&l.to==t)&&(n(Math.max(l.from,t),Math.min(l.to,r),1==l.level?"rtl":"ltr",o),i=!0)}i||n(t,r,"ltr")}function Se(e,t,r){var n
ts=null
for(var i=0;i<e.length;++i){var o=e[i]
if(o.from<t&&o.to>t)return i
o.to==t&&(o.from!=o.to&&"before"==r?n=i:ts=i),o.from==t&&(o.from!=o.to&&"before"!=r?n=i:ts=i)}return null!=n?n:ts}function ke(e,t){var r=e.order
return null==r&&(r=e.order=rs(e.text,t)),r}function Le(e,t){return e._handlers&&e._handlers[t]||ns}function Me(e,t,r){if(e.removeEventListener)e.removeEventListener(t,r,!1)
else if(e.detachEvent)e.detachEvent("on"+t,r)
else{var n=e._handlers,i=n&&n[t]
if(i){var o=d(i,r)
o>-1&&(n[t]=i.slice(0,o).concat(i.slice(o+1)))}}}function Te(e,t){var r=Le(e,t)
if(r.length)for(var n=Array.prototype.slice.call(arguments,2),i=0;i<r.length;++i)r[i].apply(null,n)}function Ne(e,t,r){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),Te(e,r||t.type,e,t),Fe(t)||t.codemirrorIgnore}function Oe(e){var t=e._handlers&&e._handlers.cursorActivity
if(t)for(var r=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),n=0;n<t.length;++n)d(r,t[n])==-1&&r.push(t[n])}function Ae(e,t){return Le(e,t).length>0}function De(e){e.prototype.on=function(e,t){is(this,e,t)},e.prototype.off=function(e,t){Me(this,e,t)}}function We(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function He(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function Fe(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function ze(e){We(e),He(e)}function Pe(e){return e.target||e.srcElement}function Ee(e){var t=e.which
return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),Hl&&e.ctrlKey&&1==t&&(t=3),t}function Re(e){if(null==Vl){var t=n("span","​")
r(e,n("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(Vl=t.offsetWidth<=1&&t.offsetHeight>2&&!(xl&&Cl<8))}var i=Vl?n("span","​"):n("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px")
return i.setAttribute("cm-text",""),i}function Ie(e){if(null!=Kl)return Kl
var n=r(e,document.createTextNode("AخA")),i=El(n,0,1).getBoundingClientRect(),o=El(n,1,2).getBoundingClientRect()
return t(e),!(!i||i.left==i.right)&&(Kl=o.right-i.right<3)}function Be(e){if(null!=us)return us
var t=r(e,n("span","x")),i=t.getBoundingClientRect(),o=El(t,0,1).getBoundingClientRect()
return us=Math.abs(i.left-o.left)>1}function Ue(e,t){arguments.length>2&&(t.dependencies=Array.prototype.slice.call(arguments,2)),cs[e]=t}function Ge(e,t){fs[e]=t}function Ve(e){if("string"==typeof e&&fs.hasOwnProperty(e))e=fs[e]
else if(e&&"string"==typeof e.name&&fs.hasOwnProperty(e.name)){var t=fs[e.name]
"string"==typeof t&&(t={name:t}),e=b(t,e),e.name=t.name}else{if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Ve("application/xml")
if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Ve("application/json")}return"string"==typeof e?{name:e}:e||{name:"null"}}function Ke(e,t){t=Ve(t)
var r=cs[t.name]
if(!r)return Ke(e,"text/plain")
var n=r(e,t)
if(ds.hasOwnProperty(t.name)){var i=ds[t.name]
for(var o in i)i.hasOwnProperty(o)&&(n.hasOwnProperty(o)&&(n["_"+o]=n[o]),n[o]=i[o])}if(n.name=t.name,t.helperType&&(n.helperType=t.helperType),t.modeProps)for(var l in t.modeProps)n[l]=t.modeProps[l]
return n}function je(e,t){var r=ds.hasOwnProperty(e)?ds[e]:ds[e]={}
c(t,r)}function Xe(e,t){if(t===!0)return t
if(e.copyState)return e.copyState(t)
var r={}
for(var n in t){var i=t[n]
i instanceof Array&&(i=i.concat([])),r[n]=i}return r}function Ye(e,t){for(var r;e.innerMode&&(r=e.innerMode(t),r&&r.mode!=e);)t=r.state,e=r.mode
return r||{mode:e,state:t}}function _e(e,t,r){return!e.startState||e.startState(t,r)}function qe(e,t,r,n){var i=[e.state.modeGen],o={}
nt(e,t.text,e.doc.mode,r,function(e,t){return i.push(e,t)},o,n)
for(var l=r.state,s=function(n){r.baseTokens=i
var s=e.state.overlays[n],a=1,u=0
r.state=!0,nt(e,t.text,s.mode,r,function(e,t){for(var r=a;u<e;){var n=i[a]
n>e&&i.splice(a,1,e,i[a+1],n),a+=2,u=Math.min(e,n)}if(t)if(s.opaque)i.splice(r,a-r,e,"overlay "+t),a=r+2
else for(;r<a;r+=2){var o=i[r+1]
i[r+1]=(o?o+" ":"")+"overlay "+t}},o),r.state=l,r.baseTokens=null,r.baseTokenPos=1},a=0;a<e.state.overlays.length;++a)s(a)
return{styles:i,classes:o.bgClass||o.textClass?o:null}}function $e(e,t,r){if(!t.styles||t.styles[0]!=e.state.modeGen){var n=Ze(e,D(t)),i=t.text.length>e.options.maxHighlightLength&&Xe(e.doc.mode,n.state),o=qe(e,t,n)
i&&(n.state=i),t.stateAfter=n.save(!i),t.styles=o.styles,o.classes?t.styleClasses=o.classes:t.styleClasses&&(t.styleClasses=null),r===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return t.styles}function Ze(e,t,r){var n=e.doc,i=e.display
if(!n.mode.startState)return new gs(n,!0,t)
var o=it(e,t,r),l=o>n.first&&T(n,o-1).stateAfter,s=l?gs.fromSaved(n,l,o):new gs(n,_e(n.mode),o)
return n.iter(o,t,function(r){Je(e,r.text,s)
var n=s.line
r.stateAfter=n==t-1||n%5==0||n>=i.viewFrom&&n<i.viewTo?s.save():null,s.nextLine()}),r&&(n.modeFrontier=s.line),s}function Je(e,t,r,n){var i=e.doc.mode,o=new hs(t,e.options.tabSize,r)
for(o.start=o.pos=n||0,""==t&&Qe(i,r.state);!o.eol();)et(i,o,r.state),o.start=o.pos}function Qe(e,t){if(e.blankLine)return e.blankLine(t)
if(e.innerMode){var r=Ye(e,t)
return r.mode.blankLine?r.mode.blankLine(r.state):void 0}}function et(e,t,r,n){for(var i=0;i<10;i++){n&&(n[0]=Ye(e,r).mode)
var o=e.token(t,r)
if(t.pos>t.start)return o}throw new Error("Mode "+e.name+" failed to advance stream.")}function tt(e,t,r,n){var i,o=e.doc,l=o.mode
t=G(o,t)
var s,a=T(o,t.line),u=Ze(e,t.line,r),c=new hs(a.text,e.options.tabSize,u)
for(n&&(s=[]);(n||c.pos<t.ch)&&!c.eol();)c.start=c.pos,i=et(l,c,u.state),n&&s.push(new vs(c,i,Xe(o.mode,u.state)))
return n?s:new vs(c,i,u.state)}function rt(e,t){if(e)for(;;){var r=e.match(/(?:^|\s+)line-(background-)?(\S+)/)
if(!r)break
e=e.slice(0,r.index)+e.slice(r.index+r[0].length)
var n=r[1]?"bgClass":"textClass"
null==t[n]?t[n]=r[2]:new RegExp("(?:^|s)"+r[2]+"(?:$|s)").test(t[n])||(t[n]+=" "+r[2])}return e}function nt(e,t,r,n,i,o,l){var s=r.flattenSpans
null==s&&(s=e.options.flattenSpans)
var a,u=0,c=null,f=new hs(t,e.options.tabSize,n),d=e.options.addModeClass&&[null]
for(""==t&&rt(Qe(r,n.state),o);!f.eol();){if(f.pos>e.options.maxHighlightLength?(s=!1,l&&Je(e,t,n,f.pos),f.pos=t.length,a=null):a=rt(et(r,f,n.state,d),o),d){var h=d[0].name
h&&(a="m-"+(a?h+" "+a:h))}if(!s||c!=a){for(;u<f.start;)u=Math.min(f.start,u+5e3),i(u,c)
c=a}f.start=f.pos}for(;u<f.pos;){var p=Math.min(f.pos,u+5e3)
i(p,c),u=p}}function it(e,t,r){for(var n,i,o=e.doc,l=r?-1:t-(e.doc.mode.innerMode?1e3:100),s=t;s>l;--s){if(s<=o.first)return o.first
var a=T(o,s-1),u=a.stateAfter
if(u&&(!r||s+(u instanceof ps?u.lookAhead:0)<=o.modeFrontier))return s
var c=f(a.text,null,e.options.tabSize);(null==i||n>c)&&(i=s-1,n=c)}return i}function ot(e,t){if(e.modeFrontier=Math.min(e.modeFrontier,t),!(e.highlightFrontier<t-10)){for(var r=e.first,n=t-1;n>r;n--){var i=T(e,n).stateAfter
if(i&&(!(i instanceof ps)||n+i.lookAhead<t)){r=n+1
break}}e.highlightFrontier=Math.min(e.highlightFrontier,r)}}function lt(e,t,r,n){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),re(e),ne(e,r)
var i=n?n(e):1
i!=e.height&&A(e,i)}function st(e){e.parent=null,re(e)}function at(e,t){if(!e||/^\s*$/.test(e))return null
var r=t.addModeClass?ws:bs
return r[e]||(r[e]=e.replace(/\S+/g,"cm-$&"))}function ut(e,t){var r=i("span",null,null,Sl?"padding-right: .1px":null),n={pre:i("pre",[r],"CodeMirror-line"),content:r,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:(xl||Sl)&&e.getOption("lineWrapping")}
t.measure={}
for(var o=0;o<=(t.rest?t.rest.length:0);o++){var l=o?t.rest[o-1]:t.line,s=void 0
n.pos=0,n.addToken=ft,Ie(e.display.measure)&&(s=ke(l,e.doc.direction))&&(n.addToken=ht(n.addToken,s)),n.map=[]
var u=t!=e.display.externalMeasured&&D(l)
gt(l,n,$e(e,l,u)),l.styleClasses&&(l.styleClasses.bgClass&&(n.bgClass=a(l.styleClasses.bgClass,n.bgClass||"")),l.styleClasses.textClass&&(n.textClass=a(l.styleClasses.textClass,n.textClass||""))),0==n.map.length&&n.map.push(0,0,n.content.appendChild(Re(e.display.measure))),0==o?(t.measure.map=n.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(n.map),(t.measure.caches||(t.measure.caches=[])).push({}))}if(Sl){var c=n.content.lastChild;(/\bcm-tab\b/.test(c.className)||c.querySelector&&c.querySelector(".cm-tab"))&&(n.content.className="cm-tab-wrap-hack")}return Te(e,"renderLine",e,t.line,n.pre),n.pre.className&&(n.textClass=a(n.pre.className,n.textClass||"")),n}function ct(e){var t=n("span","•","cm-invalidchar")
return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function ft(e,t,r,i,o,l,s){if(t){var a,u=e.splitSpaces?dt(t,e.trailingSpace):t,c=e.cm.state.specialChars,f=!1
if(c.test(t)){a=document.createDocumentFragment()
for(var d=0;;){c.lastIndex=d
var h=c.exec(t),g=h?h.index-d:t.length-d
if(g){var v=document.createTextNode(u.slice(d,d+g))
xl&&Cl<9?a.appendChild(n("span",[v])):a.appendChild(v),e.map.push(e.pos,e.pos+g,v),e.col+=g,e.pos+=g}if(!h)break
d+=g+1
var m=void 0
if("\t"==h[0]){var y=e.cm.options.tabSize,b=y-e.col%y
m=a.appendChild(n("span",p(b),"cm-tab")),m.setAttribute("role","presentation"),m.setAttribute("cm-text","\t"),e.col+=b}else"\r"==h[0]||"\n"==h[0]?(m=a.appendChild(n("span","\r"==h[0]?"␍":"␤","cm-invalidchar")),m.setAttribute("cm-text",h[0]),e.col+=1):(m=e.cm.options.specialCharPlaceholder(h[0]),m.setAttribute("cm-text",h[0]),xl&&Cl<9?a.appendChild(n("span",[m])):a.appendChild(m),e.col+=1)
e.map.push(e.pos,e.pos+1,m),e.pos++}}else e.col+=t.length,a=document.createTextNode(u),e.map.push(e.pos,e.pos+t.length,a),xl&&Cl<9&&(f=!0),e.pos+=t.length
if(e.trailingSpace=32==u.charCodeAt(t.length-1),r||i||o||f||s){var w=r||""
i&&(w+=i),o&&(w+=o)
var x=n("span",[a],w,s)
return l&&(x.title=l),e.content.appendChild(x)}e.content.appendChild(a)}}function dt(e,t){if(e.length>1&&!/  /.test(e))return e
for(var r=t,n="",i=0;i<e.length;i++){var o=e.charAt(i)
" "!=o||!r||i!=e.length-1&&32!=e.charCodeAt(i+1)||(o=" "),n+=o,r=" "==o}return n}function ht(e,t){return function(r,n,i,o,l,s,a){i=i?i+" cm-force-border":"cm-force-border"
for(var u=r.pos,c=u+n.length;;){for(var f=void 0,d=0;d<t.length&&(f=t[d],!(f.to>u&&f.from<=u));d++);if(f.to>=c)return e(r,n,i,o,l,s,a)
e(r,n.slice(0,f.to-u),i,o,null,s,a),o=null,n=n.slice(f.to-u),u=f.to}}}function pt(e,t,r,n){var i=!n&&r.widgetNode
i&&e.map.push(e.pos,e.pos+t,i),!n&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",r.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t,e.trailingSpace=!1}function gt(e,t,r){var n=e.markedSpans,i=e.text,o=0
if(n)for(var l,s,a,u,c,f,d,h=i.length,p=0,g=1,v="",m=0;;){if(m==p){a=u=c=f=s="",d=null,m=1/0
for(var y=[],b=void 0,w=0;w<n.length;++w){var x=n[w],C=x.marker
"bookmark"==C.type&&x.from==p&&C.widgetNode?y.push(C):x.from<=p&&(null==x.to||x.to>p||C.collapsed&&x.to==p&&x.from==p)?(null!=x.to&&x.to!=p&&m>x.to&&(m=x.to,u=""),C.className&&(a+=" "+C.className),C.css&&(s=(s?s+";":"")+C.css),C.startStyle&&x.from==p&&(c+=" "+C.startStyle),C.endStyle&&x.to==m&&(b||(b=[])).push(C.endStyle,x.to),C.title&&!f&&(f=C.title),C.collapsed&&(!d||le(d.marker,C)<0)&&(d=x)):x.from>p&&m>x.from&&(m=x.from)}if(b)for(var S=0;S<b.length;S+=2)b[S+1]==m&&(u+=" "+b[S])
if(!d||d.from==p)for(var k=0;k<y.length;++k)pt(t,0,y[k])
if(d&&(d.from||0)==p){if(pt(t,(null==d.to?h+1:d.to)-p,d.marker,null==d.from),null==d.to)return
d.to==p&&(d=!1)}}if(p>=h)break
for(var L=Math.min(h,m);;){if(v){var M=p+v.length
if(!d){var T=M>L?v.slice(0,L-p):v
t.addToken(t,T,l?l+a:a,c,p+T.length==m?u:"",f,s)}if(M>=L){v=v.slice(L-p),p=L
break}p=M,c=""}v=i.slice(o,o=r[g++]),l=at(r[g++],t.cm.options)}}else for(var N=1;N<r.length;N+=2)t.addToken(t,i.slice(o,o=r[N]),at(r[N+1],t.cm.options))}function vt(e,t,r){this.line=t,this.rest=pe(t),this.size=this.rest?D(g(this.rest))-r+1:1,this.node=this.text=null,this.hidden=me(e,t)}function mt(e,t,r){for(var n,i=[],o=t;o<r;o=n){var l=new vt(e.doc,T(e.doc,o),o)
n=o+l.size,i.push(l)}return i}function yt(e){xs?xs.ops.push(e):e.ownsGroup=xs={ops:[e],delayedCallbacks:[]}}function bt(e){var t=e.delayedCallbacks,r=0
do{for(;r<t.length;r++)t[r].call(null)
for(var n=0;n<e.ops.length;n++){var i=e.ops[n]
if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm)}}while(r<t.length)}function wt(e,t){var r=e.ownsGroup
if(r)try{bt(r)}finally{xs=null,t(r)}}function xt(e,t){var r=Le(e,t)
if(r.length){var n,i=Array.prototype.slice.call(arguments,2)
xs?n=xs.delayedCallbacks:Cs?n=Cs:(n=Cs=[],setTimeout(Ct,0))
for(var o=function(e){n.push(function(){return r[e].apply(null,i)})},l=0;l<r.length;++l)o(l)}}function Ct(){var e=Cs
Cs=null
for(var t=0;t<e.length;++t)e[t]()}function St(e,t,r,n){for(var i=0;i<t.changes.length;i++){var o=t.changes[i]
"text"==o?Tt(e,t):"gutter"==o?Ot(e,t,r,n):"class"==o?Nt(e,t):"widget"==o&&At(e,t,n)}t.changes=null}function kt(e){return e.node==e.text&&(e.node=n("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),xl&&Cl<8&&(e.node.style.zIndex=2)),e.node}function Lt(e,t){var r=t.bgClass?t.bgClass+" "+(t.line.bgClass||""):t.line.bgClass
if(r&&(r+=" CodeMirror-linebackground"),t.background)r?t.background.className=r:(t.background.parentNode.removeChild(t.background),t.background=null)
else if(r){var i=kt(t)
t.background=i.insertBefore(n("div",null,r),i.firstChild),e.display.input.setUneditable(t.background)}}function Mt(e,t){var r=e.display.externalMeasured
return r&&r.line==t.line?(e.display.externalMeasured=null,t.measure=r.measure,r.built):ut(e,t)}function Tt(e,t){var r=t.text.className,n=Mt(e,t)
t.text==t.node&&(t.node=n.pre),t.text.parentNode.replaceChild(n.pre,t.text),t.text=n.pre,n.bgClass!=t.bgClass||n.textClass!=t.textClass?(t.bgClass=n.bgClass,t.textClass=n.textClass,Nt(e,t)):r&&(t.text.className=r)}function Nt(e,t){Lt(e,t),t.line.wrapClass?kt(t).className=t.line.wrapClass:t.node!=t.text&&(t.node.className="")
var r=t.textClass?t.textClass+" "+(t.line.textClass||""):t.line.textClass
t.text.className=r||""}function Ot(e,t,r,i){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var o=kt(t)
t.gutterBackground=n("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(t.gutterBackground),o.insertBefore(t.gutterBackground,t.text)}var l=t.line.gutterMarkers
if(e.options.lineNumbers||l){var s=kt(t),a=t.gutter=n("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px")
if(e.display.input.setUneditable(a),s.insertBefore(a,t.text),t.line.gutterClass&&(a.className+=" "+t.line.gutterClass),!e.options.lineNumbers||l&&l["CodeMirror-linenumbers"]||(t.lineNumber=a.appendChild(n("div",F(e.options,r),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),l)for(var u=0;u<e.options.gutters.length;++u){var c=e.options.gutters[u],f=l.hasOwnProperty(c)&&l[c]
f&&a.appendChild(n("div",[f],"CodeMirror-gutter-elt","left: "+i.gutterLeft[c]+"px; width: "+i.gutterWidth[c]+"px"))}}}function At(e,t,r){t.alignable&&(t.alignable=null)
for(var n=t.node.firstChild,i=void 0;n;n=i)i=n.nextSibling,"CodeMirror-linewidget"==n.className&&t.node.removeChild(n)
Wt(e,t,r)}function Dt(e,t,r,n){var i=Mt(e,t)
return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),Nt(e,t),Ot(e,t,r,n),Wt(e,t,n),t.node}function Wt(e,t,r){if(Ht(e,t.line,t,r,!0),t.rest)for(var n=0;n<t.rest.length;n++)Ht(e,t.rest[n],t,r,!1)}function Ht(e,t,r,i,o){if(t.widgets)for(var l=kt(r),s=0,a=t.widgets;s<a.length;++s){var u=a[s],c=n("div",[u.node],"CodeMirror-linewidget")
u.handleMouseEvents||c.setAttribute("cm-ignore-events","true"),Ft(u,c,r,i),e.display.input.setUneditable(c),o&&u.above?l.insertBefore(c,r.gutter||r.text):l.appendChild(c),xt(u,"redraw")}}function Ft(e,t,r,n){if(e.noHScroll){(r.alignable||(r.alignable=[])).push(t)
var i=n.wrapperWidth
t.style.left=n.fixedPos+"px",e.coverGutter||(i-=n.gutterTotalWidth,t.style.paddingLeft=n.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-n.gutterTotalWidth+"px"))}function zt(e){if(null!=e.height)return e.height
var t=e.doc.cm
if(!t)return 0
if(!o(document.body,e.node)){var i="position: relative;"
e.coverGutter&&(i+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(i+="width: "+t.display.wrapper.clientWidth+"px;"),r(t.display.measure,n("div",[e.node],null,i))}return e.height=e.node.parentNode.offsetHeight}function Pt(e,t){for(var r=Pe(t);r!=e.wrapper;r=r.parentNode)if(!r||1==r.nodeType&&"true"==r.getAttribute("cm-ignore-events")||r.parentNode==e.sizer&&r!=e.mover)return!0}function Et(e){return e.lineSpace.offsetTop}function Rt(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function It(e){if(e.cachedPaddingH)return e.cachedPaddingH
var t=r(e.measure,n("pre","x")),i=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,o={left:parseInt(i.paddingLeft),right:parseInt(i.paddingRight)}
return isNaN(o.left)||isNaN(o.right)||(e.cachedPaddingH=o),o}function Bt(e){return jl-e.display.nativeBarWidth}function Ut(e){return e.display.scroller.clientWidth-Bt(e)-e.display.barWidth}function Gt(e){return e.display.scroller.clientHeight-Bt(e)-e.display.barHeight}function Vt(e,t,r){var n=e.options.lineWrapping,i=n&&Ut(e)
if(!t.measure.heights||n&&t.measure.width!=i){var o=t.measure.heights=[]
if(n){t.measure.width=i
for(var l=t.text.firstChild.getClientRects(),s=0;s<l.length-1;s++){var a=l[s],u=l[s+1]
Math.abs(a.bottom-u.bottom)>2&&o.push((a.bottom+u.top)/2-r.top)}}o.push(r.bottom-r.top)}}function Kt(e,t,r){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache}
for(var n=0;n<e.rest.length;n++)if(e.rest[n]==t)return{map:e.measure.maps[n],cache:e.measure.caches[n]}
for(var i=0;i<e.rest.length;i++)if(D(e.rest[i])>r)return{map:e.measure.maps[i],cache:e.measure.caches[i],before:!0}}function jt(e,t){t=de(t)
var n=D(t),i=e.display.externalMeasured=new vt(e.doc,t,n)
i.lineN=n
var o=i.built=ut(e,i)
return i.text=o.pre,r(e.display.lineMeasure,o.pre),i}function Xt(e,t,r,n){return qt(e,_t(e,t),r,n)}function Yt(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[Mr(e,t)]
var r=e.display.externalMeasured
return r&&t>=r.lineN&&t<r.lineN+r.size?r:void 0}function _t(e,t){var r=D(t),n=Yt(e,r)
n&&!n.text?n=null:n&&n.changes&&(St(e,n,r,xr(e)),e.curOp.forceUpdate=!0),n||(n=jt(e,t))
var i=Kt(n,t,r)
return{line:t,view:n,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function qt(e,t,r,n,i){t.before&&(r=-1)
var o,l=r+(n||"")
return t.cache.hasOwnProperty(l)?o=t.cache[l]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(Vt(e,t.view,t.rect),t.hasHeights=!0),o=Jt(e,t,r,n),o.bogus||(t.cache[l]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}function $t(e,t,r){for(var n,i,o,l,s,a,u=0;u<e.length;u+=3)if(s=e[u],a=e[u+1],t<s?(i=0,o=1,l="left"):t<a?(i=t-s,o=i+1):(u==e.length-3||t==a&&e[u+3]>t)&&(o=a-s,i=o-1,t>=a&&(l="right")),null!=i){if(n=e[u+2],s==a&&r==(n.insertLeft?"left":"right")&&(l=r),"left"==r&&0==i)for(;u&&e[u-2]==e[u-3]&&e[u-1].insertLeft;)n=e[(u-=3)+2],l="left"
if("right"==r&&i==a-s)for(;u<e.length-3&&e[u+3]==e[u+4]&&!e[u+5].insertLeft;)n=e[(u+=3)+2],l="right"
break}return{node:n,start:i,end:o,collapse:l,coverStart:s,coverEnd:a}}function Zt(e,t){var r=Ss
if("left"==t)for(var n=0;n<e.length&&(r=e[n]).left==r.right;n++);else for(var i=e.length-1;i>=0&&(r=e[i]).left==r.right;i--);return r}function Jt(e,t,r,n){var i,o=$t(t.map,r,n),l=o.node,s=o.start,a=o.end,u=o.collapse
if(3==l.nodeType){for(var c=0;c<4;c++){for(;s&&S(t.line.text.charAt(o.coverStart+s));)--s
for(;o.coverStart+a<o.coverEnd&&S(t.line.text.charAt(o.coverStart+a));)++a
if(i=xl&&Cl<9&&0==s&&a==o.coverEnd-o.coverStart?l.parentNode.getBoundingClientRect():Zt(El(l,s,a).getClientRects(),n),i.left||i.right||0==s)break
a=s,s-=1,u="right"}xl&&Cl<11&&(i=Qt(e.display.measure,i))}else{s>0&&(u=n="right")
var f
i=e.options.lineWrapping&&(f=l.getClientRects()).length>1?f["right"==n?f.length-1:0]:l.getBoundingClientRect()}if(xl&&Cl<9&&!s&&(!i||!i.left&&!i.right)){var d=l.parentNode.getClientRects()[0]
i=d?{left:d.left,right:d.left+wr(e.display),top:d.top,bottom:d.bottom}:Ss}for(var h=i.top-t.rect.top,p=i.bottom-t.rect.top,g=(h+p)/2,v=t.view.measure.heights,m=0;m<v.length-1&&!(g<v[m]);m++);var y=m?v[m-1]:0,b=v[m],w={left:("right"==u?i.right:i.left)-t.rect.left,right:("left"==u?i.left:i.right)-t.rect.left,top:y,bottom:b}
return i.left||i.right||(w.bogus=!0),e.options.singleCursorHeightPerLine||(w.rtop=h,w.rbottom=p),w}function Qt(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!Be(e))return t
var r=screen.logicalXDPI/screen.deviceXDPI,n=screen.logicalYDPI/screen.deviceYDPI
return{left:t.left*r,right:t.right*r,top:t.top*n,bottom:t.bottom*n}}function er(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function tr(e){e.display.externalMeasure=null,t(e.display.lineMeasure)
for(var r=0;r<e.display.view.length;r++)er(e.display.view[r])}function rr(e){tr(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function nr(){return Ll&&Dl?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}function ir(){return Ll&&Dl?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop}function or(e){var t=0
if(e.widgets)for(var r=0;r<e.widgets.length;++r)e.widgets[r].above&&(t+=zt(e.widgets[r]))
return t}function lr(e,t,r,n,i){if(!i){var o=or(t)
r.top+=o,r.bottom+=o}if("line"==n)return r
n||(n="local")
var l=be(t)
if("local"==n?l+=Et(e.display):l-=e.display.viewOffset,"page"==n||"window"==n){var s=e.display.lineSpace.getBoundingClientRect()
l+=s.top+("window"==n?0:ir())
var a=s.left+("window"==n?0:nr())
r.left+=a,r.right+=a}return r.top+=l,r.bottom+=l,r}function sr(e,t,r){if("div"==r)return t
var n=t.left,i=t.top
if("page"==r)n-=nr(),i-=ir()
else if("local"==r||!r){var o=e.display.sizer.getBoundingClientRect()
n+=o.left,i+=o.top}var l=e.display.lineSpace.getBoundingClientRect()
return{left:n-l.left,top:i-l.top}}function ar(e,t,r,n,i){return n||(n=T(e.doc,t.line)),lr(e,n,Xt(e,n,t.ch,i),r)}function ur(e,t,r,n,i,o){function l(t,l){var s=qt(e,i,t,l?"right":"left",o)
return l?s.left=s.right:s.right=s.left,lr(e,n,s,r)}function s(e,t,r){var n=a[t],i=1==n.level
return l(r?e-1:e,i!=r)}n=n||T(e.doc,t.line),i||(i=_t(e,n))
var a=ke(n,e.doc.direction),u=t.ch,c=t.sticky
if(u>=n.text.length?(u=n.text.length,c="before"):u<=0&&(u=0,c="after"),!a)return l("before"==c?u-1:u,"before"==c)
var f=Se(a,u,c),d=ts,h=s(u,f,"before"==c)
return null!=d&&(h.other=s(u,d,"before"!=c)),h}function cr(e,t){var r=0
t=G(e.doc,t),e.options.lineWrapping||(r=wr(e.display)*t.ch)
var n=T(e.doc,t.line),i=be(n)+Et(e.display)
return{left:r,right:r,top:i,bottom:i+n.height}}function fr(e,t,r,n,i){var o=z(e,t,r)
return o.xRel=i,n&&(o.outside=!0),o}function dr(e,t,r){var n=e.doc
if(r+=e.display.viewOffset,r<0)return fr(n.first,0,null,!0,-1)
var i=W(n,r),o=n.first+n.size-1
if(i>o)return fr(n.first+n.size-1,T(n,o).text.length,null,!0,1)
t<0&&(t=0)
for(var l=T(n,i);;){var s=vr(e,l,i,t,r),a=ce(l,s.ch+(s.xRel>0?1:0))
if(!a)return s
var u=a.find(1)
if(u.line==i)return u
l=T(n,i=u.line)}}function hr(e,t,r,n){n-=or(t)
var i=t.text.length,o=L(function(t){return qt(e,r,t-1).bottom<=n},i,0)
return i=L(function(t){return qt(e,r,t).top>n},o,i),{begin:o,end:i}}function pr(e,t,r,n){r||(r=_t(e,t))
var i=lr(e,t,qt(e,r,n),"line").top
return hr(e,t,r,i)}function gr(e,t,r,n){return!(e.bottom<=r)&&(e.top>r||(n?e.left:e.right)>t)}function vr(e,t,r,n,i){i-=be(t)
var o=_t(e,t),l=or(t),s=0,a=t.text.length,u=!0,c=ke(t,e.doc.direction)
if(c){var f=(e.options.lineWrapping?yr:mr)(e,t,r,o,c,n,i)
u=1!=f.level,s=u?f.from:f.to-1,a=u?f.to:f.from-1}var d,h,p=null,g=null,v=L(function(t){var r=qt(e,o,t)
return r.top+=l,r.bottom+=l,!!gr(r,n,i,!1)&&(r.top<=i&&r.left<=n&&(p=t,g=r),!0)},s,a),m=!1
if(g){var y=n-g.left<g.right-n,b=y==u
v=p+(b?0:1),h=b?"after":"before",d=y?g.left:g.right}else{u||v!=a&&v!=s||v++,h=0==v?"after":v==t.text.length?"before":qt(e,o,v-(u?1:0)).bottom+l<=i==u?"after":"before"
var w=ur(e,z(r,v,h),"line",t,o)
d=w.left,m=i<w.top||i>=w.bottom}return v=k(t.text,v,1),fr(r,v,h,m,n-d)}function mr(e,t,r,n,i,o,l){var s=L(function(s){var a=i[s],u=1!=a.level
return gr(ur(e,z(r,u?a.to:a.from,u?"before":"after"),"line",t,n),o,l,!0)},0,i.length-1),a=i[s]
if(s>0){var u=1!=a.level,c=ur(e,z(r,u?a.from:a.to,u?"after":"before"),"line",t,n)
gr(c,o,l,!0)&&c.top>l&&(a=i[s-1])}return a}function yr(e,t,r,n,i,o,l){var s=hr(e,t,n,l),a=s.begin,u=s.end;/\s/.test(t.text.charAt(u-1))&&u--
for(var c=null,f=null,d=0;d<i.length;d++){var h=i[d]
if(!(h.from>=u||h.to<=a)){var p=1!=h.level,g=qt(e,n,p?Math.min(u,h.to)-1:Math.max(a,h.from)).right,v=g<o?o-g+1e9:g-o;(!c||f>v)&&(c=h,f=v)}}return c||(c=i[i.length-1]),c.from<a&&(c={from:a,to:c.to,level:c.level}),c.to>u&&(c={from:c.from,to:u,level:c.level}),c}function br(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight
if(null==ys){ys=n("pre")
for(var i=0;i<49;++i)ys.appendChild(document.createTextNode("x")),ys.appendChild(n("br"))
ys.appendChild(document.createTextNode("x"))}r(e.measure,ys)
var o=ys.offsetHeight/50
return o>3&&(e.cachedTextHeight=o),t(e.measure),o||1}function wr(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth
var t=n("span","xxxxxxxxxx"),i=n("pre",[t])
r(e.measure,i)
var o=t.getBoundingClientRect(),l=(o.right-o.left)/10
return l>2&&(e.cachedCharWidth=l),l||10}function xr(e){for(var t=e.display,r={},n={},i=t.gutters.clientLeft,o=t.gutters.firstChild,l=0;o;o=o.nextSibling,++l)r[e.options.gutters[l]]=o.offsetLeft+o.clientLeft+i,n[e.options.gutters[l]]=o.clientWidth
return{fixedPos:Cr(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:r,gutterWidth:n,wrapperWidth:t.wrapper.clientWidth}}function Cr(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function Sr(e){var t=br(e.display),r=e.options.lineWrapping,n=r&&Math.max(5,e.display.scroller.clientWidth/wr(e.display)-3)
return function(i){if(me(e.doc,i))return 0
var o=0
if(i.widgets)for(var l=0;l<i.widgets.length;l++)i.widgets[l].height&&(o+=i.widgets[l].height)
return r?o+(Math.ceil(i.text.length/n)||1)*t:o+t}}function kr(e){var t=e.doc,r=Sr(e)
t.iter(function(e){var t=r(e)
t!=e.height&&A(e,t)})}function Lr(e,t,r,n){var i=e.display
if(!r&&"true"==Pe(t).getAttribute("cm-not-content"))return null
var o,l,s=i.lineSpace.getBoundingClientRect()
try{o=t.clientX-s.left,l=t.clientY-s.top}catch(e){return null}var a,u=dr(e,o,l)
if(n&&1==u.xRel&&(a=T(e.doc,u.line).text).length==u.ch){var c=f(a,a.length,e.options.tabSize)-a.length
u=z(u.line,Math.max(0,Math.round((o-It(e.display).left)/wr(e.display))-c))}return u}function Mr(e,t){if(t>=e.display.viewTo)return null
if(t-=e.display.viewFrom,t<0)return null
for(var r=e.display.view,n=0;n<r.length;n++)if(t-=r[n].size,t<0)return n}function Tr(e){e.display.input.showSelection(e.display.input.prepareSelection())}function Nr(e,t){void 0===t&&(t=!0)
for(var r=e.doc,n={},i=n.cursors=document.createDocumentFragment(),o=n.selection=document.createDocumentFragment(),l=0;l<r.sel.ranges.length;l++)if(t||l!=r.sel.primIndex){var s=r.sel.ranges[l]
if(!(s.from().line>=e.display.viewTo||s.to().line<e.display.viewFrom)){var a=s.empty();(a||e.options.showCursorWhenSelecting)&&Or(e,s.head,i),a||Dr(e,s,o)}}return n}function Or(e,t,r){var i=ur(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),o=r.appendChild(n("div"," ","CodeMirror-cursor"))
if(o.style.left=i.left+"px",o.style.top=i.top+"px",o.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",i.other){var l=r.appendChild(n("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"))
l.style.display="",l.style.left=i.other.left+"px",l.style.top=i.other.top+"px",l.style.height=.85*(i.other.bottom-i.other.top)+"px"}}function Ar(e,t){return e.top-t.top||e.left-t.left}function Dr(e,t,r){function i(e,t,r,i){t<0&&(t=0),t=Math.round(t),i=Math.round(i),a.appendChild(n("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px;\n                             top: "+t+"px; width: "+(null==r?f-e:r)+"px;\n                             height: "+(i-t)+"px"))}function o(t,r,n){function o(r,n){return ar(e,z(t,r),"div",h,n)}function l(t,r,n){var i=pr(e,h,null,t),l="ltr"==r==("after"==n)?"left":"right",s="after"==n?i.begin:i.end-(/\s/.test(h.text.charAt(i.end-1))?2:1)
return o(s,l)[l]}var a,u,h=T(s,t),p=h.text.length,g=ke(h,s.direction)
return Ce(g,r||0,null==n?p:n,function(e,t,s,h){var v="ltr"==s,m=o(e,v?"left":"right"),y=o(t-1,v?"right":"left"),b=null==r&&0==e,w=null==n&&t==p,x=0==h,C=!g||h==g.length-1
if(y.top-m.top<=3){var S=(d?b:w)&&x,k=(d?w:b)&&C,L=S?c:(v?m:y).left,M=k?f:(v?y:m).right
i(L,m.top,M-L,m.bottom)}else{var T,N,O,A
v?(T=d&&b&&x?c:m.left,N=d?f:l(e,s,"before"),O=d?c:l(t,s,"after"),A=d&&w&&C?f:y.right):(T=d?l(e,s,"before"):c,N=!d&&b&&x?f:m.right,O=!d&&w&&C?c:y.left,A=d?l(t,s,"after"):f),i(T,m.top,N-T,m.bottom),m.bottom<y.top&&i(c,m.bottom,null,y.top),i(O,y.top,A-O,y.bottom)}(!a||Ar(m,a)<0)&&(a=m),Ar(y,a)<0&&(a=y),(!u||Ar(m,u)<0)&&(u=m),Ar(y,u)<0&&(u=y)}),{start:a,end:u}}var l=e.display,s=e.doc,a=document.createDocumentFragment(),u=It(e.display),c=u.left,f=Math.max(l.sizerWidth,Ut(e)-l.sizer.offsetLeft)-u.right,d="ltr"==s.direction,h=t.from(),p=t.to()
if(h.line==p.line)o(h.line,h.ch,p.ch)
else{var g=T(s,h.line),v=T(s,p.line),m=de(g)==de(v),y=o(h.line,h.ch,m?g.text.length+1:null).end,b=o(p.line,m?0:null,p.ch).start
m&&(y.top<b.top-2?(i(y.right,y.top,null,y.bottom),i(c,b.top,b.left,b.bottom)):i(y.right,y.top,b.left-y.right,y.bottom)),y.bottom<b.top&&i(c,y.bottom,null,b.top)}r.appendChild(a)}function Wr(e){if(e.state.focused){var t=e.display
clearInterval(t.blinker)
var r=!0
t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval(function(){return t.cursorDiv.style.visibility=(r=!r)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function Hr(e){e.state.focused||(e.display.input.focus(),zr(e))}function Fr(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,Pr(e))},100)}function zr(e,t){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(Te(e,"focus",e,t),e.state.focused=!0,s(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),Sl&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Wr(e))}function Pr(e,t){e.state.delayingBlurEvent||(e.state.focused&&(Te(e,"blur",e,t),e.state.focused=!1,Bl(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function Er(e){for(var t=e.display,r=t.lineDiv.offsetTop,n=0;n<t.view.length;n++){var i=t.view[n],o=void 0
if(!i.hidden){if(xl&&Cl<8){var l=i.node.offsetTop+i.node.offsetHeight
o=l-r,r=l}else{var s=i.node.getBoundingClientRect()
o=s.bottom-s.top}var a=i.line.height-o
if(o<2&&(o=br(t)),(a>.005||a<-.005)&&(A(i.line,o),Rr(i.line),i.rest))for(var u=0;u<i.rest.length;u++)Rr(i.rest[u])}}}function Rr(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t){var r=e.widgets[t],n=r.node.parentNode
n&&(r.height=n.offsetHeight)}}function Ir(e,t,r){var n=r&&null!=r.top?Math.max(0,r.top):e.scroller.scrollTop
n=Math.floor(n-Et(e))
var i=r&&null!=r.bottom?r.bottom:n+e.wrapper.clientHeight,o=W(t,n),l=W(t,i)
if(r&&r.ensure){var s=r.ensure.from.line,a=r.ensure.to.line
s<o?(o=s,l=W(t,be(T(t,s))+e.wrapper.clientHeight)):Math.min(a,t.lastLine())>=l&&(o=W(t,be(T(t,a))-e.wrapper.clientHeight),l=a)}return{from:o,to:Math.max(l,o+1)}}function Br(e){var t=e.display,r=t.view
if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var n=Cr(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=n+"px",l=0;l<r.length;l++)if(!r[l].hidden){e.options.fixedGutter&&(r[l].gutter&&(r[l].gutter.style.left=o),r[l].gutterBackground&&(r[l].gutterBackground.style.left=o))
var s=r[l].alignable
if(s)for(var a=0;a<s.length;a++)s[a].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=n+i+"px")}}function Ur(e){if(!e.options.lineNumbers)return!1
var t=e.doc,r=F(e.options,t.first+t.size-1),i=e.display
if(r.length!=i.lineNumChars){var o=i.measure.appendChild(n("div",[n("div",r)],"CodeMirror-linenumber CodeMirror-gutter-elt")),l=o.firstChild.offsetWidth,s=o.offsetWidth-l
return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(l,i.lineGutter.offsetWidth-s)+1,i.lineNumWidth=i.lineNumInnerWidth+s,i.lineNumChars=i.lineNumInnerWidth?r.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",Hn(e),!0}return!1}function Gr(e,t){if(!Ne(e,"scrollCursorIntoView")){var r=e.display,i=r.sizer.getBoundingClientRect(),o=null
if(t.top+i.top<0?o=!0:t.bottom+i.top>(window.innerHeight||document.documentElement.clientHeight)&&(o=!1),null!=o&&!Ol){var l=n("div","​",null,"position: absolute;\n                         top: "+(t.top-r.viewOffset-Et(e.display))+"px;\n                         height: "+(t.bottom-t.top+Bt(e)+r.barHeight)+"px;\n                         left: "+t.left+"px; width: "+Math.max(2,t.right-t.left)+"px;")
e.display.lineSpace.appendChild(l),l.scrollIntoView(o),e.display.lineSpace.removeChild(l)}}}function Vr(e,t,r,n){null==n&&(n=0)
var i
e.options.lineWrapping||t!=r||(t=t.ch?z(t.line,"before"==t.sticky?t.ch-1:t.ch,"after"):t,r="before"==t.sticky?z(t.line,t.ch+1,"before"):t)
for(var o=0;o<5;o++){var l=!1,s=ur(e,t),a=r&&r!=t?ur(e,r):s
i={left:Math.min(s.left,a.left),top:Math.min(s.top,a.top)-n,right:Math.max(s.left,a.left),bottom:Math.max(s.bottom,a.bottom)+n}
var u=jr(e,i),c=e.doc.scrollTop,f=e.doc.scrollLeft
if(null!=u.scrollTop&&(Jr(e,u.scrollTop),Math.abs(e.doc.scrollTop-c)>1&&(l=!0)),null!=u.scrollLeft&&(en(e,u.scrollLeft),Math.abs(e.doc.scrollLeft-f)>1&&(l=!0)),!l)break}return i}function Kr(e,t){var r=jr(e,t)
null!=r.scrollTop&&Jr(e,r.scrollTop),null!=r.scrollLeft&&en(e,r.scrollLeft)}function jr(e,t){var r=e.display,n=br(e.display)
t.top<0&&(t.top=0)
var i=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:r.scroller.scrollTop,o=Gt(e),l={}
t.bottom-t.top>o&&(t.bottom=t.top+o)
var s=e.doc.height+Rt(r),a=t.top<n,u=t.bottom>s-n
if(t.top<i)l.scrollTop=a?0:t.top
else if(t.bottom>i+o){var c=Math.min(t.top,(u?s:t.bottom)-o)
c!=i&&(l.scrollTop=c)}var f=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:r.scroller.scrollLeft,d=Ut(e)-(e.options.fixedGutter?r.gutters.offsetWidth:0),h=t.right-t.left>d
return h&&(t.right=t.left+d),t.left<10?l.scrollLeft=0:t.left<f?l.scrollLeft=Math.max(0,t.left-(h?0:10)):t.right>d+f-3&&(l.scrollLeft=t.right+(h?0:10)-d),l}function Xr(e,t){null!=t&&($r(e),e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+t)}function Yr(e){$r(e)
var t=e.getCursor()
e.curOp.scrollToPos={from:t,to:t,margin:e.options.cursorScrollMargin}}function _r(e,t,r){null==t&&null==r||$r(e),null!=t&&(e.curOp.scrollLeft=t),null!=r&&(e.curOp.scrollTop=r)}function qr(e,t){$r(e),e.curOp.scrollToPos=t}function $r(e){var t=e.curOp.scrollToPos
if(t){e.curOp.scrollToPos=null
var r=cr(e,t.from),n=cr(e,t.to)
Zr(e,r,n,t.margin)}}function Zr(e,t,r,n){var i=jr(e,{left:Math.min(t.left,r.left),top:Math.min(t.top,r.top)-n,right:Math.max(t.right,r.right),bottom:Math.max(t.bottom,r.bottom)+n})
_r(e,i.scrollLeft,i.scrollTop)}function Jr(e,t){Math.abs(e.doc.scrollTop-t)<2||(ml||Dn(e,{top:t}),Qr(e,t,!0),ml&&Dn(e),kn(e,100))}function Qr(e,t,r){t=Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,t),(e.display.scroller.scrollTop!=t||r)&&(e.doc.scrollTop=t,e.display.scrollbars.setScrollTop(t),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t))}function en(e,t,r,n){t=Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth),(r?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)&&!n||(e.doc.scrollLeft=t,Br(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}function tn(e){var t=e.display,r=t.gutters.offsetWidth,n=Math.round(e.doc.height+Rt(e.display))
return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?r:0,docHeight:n,scrollHeight:n+Bt(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:r}}function rn(e,t){t||(t=tn(e))
var r=e.display.barWidth,n=e.display.barHeight
nn(e,t)
for(var i=0;i<4&&r!=e.display.barWidth||n!=e.display.barHeight;i++)r!=e.display.barWidth&&e.options.lineWrapping&&Er(e),nn(e,tn(e)),r=e.display.barWidth,n=e.display.barHeight}function nn(e,t){var r=e.display,n=r.scrollbars.update(t)
r.sizer.style.paddingRight=(r.barWidth=n.right)+"px",r.sizer.style.paddingBottom=(r.barHeight=n.bottom)+"px",r.heightForcer.style.borderBottom=n.bottom+"px solid transparent",n.right&&n.bottom?(r.scrollbarFiller.style.display="block",r.scrollbarFiller.style.height=n.bottom+"px",r.scrollbarFiller.style.width=n.right+"px"):r.scrollbarFiller.style.display="",n.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(r.gutterFiller.style.display="block",r.gutterFiller.style.height=n.bottom+"px",r.gutterFiller.style.width=t.gutterWidth+"px"):r.gutterFiller.style.display=""}function on(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&Bl(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new Ms[e.options.scrollbarStyle](function(t){e.display.wrapper.insertBefore(t,e.display.scrollbarFiller),is(t,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),t.setAttribute("cm-not-content","true")},function(t,r){"horizontal"==r?en(e,t):Jr(e,t)},e),e.display.scrollbars.addClass&&s(e.display.wrapper,e.display.scrollbars.addClass)}function ln(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:null,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Ts},yt(e.curOp)}function sn(e){var t=e.curOp
wt(t,function(e){for(var t=0;t<e.ops.length;t++)e.ops[t].cm.curOp=null
an(e)})}function an(e){for(var t=e.ops,r=0;r<t.length;r++)un(t[r])
for(var n=0;n<t.length;n++)cn(t[n])
for(var i=0;i<t.length;i++)fn(t[i])
for(var o=0;o<t.length;o++)dn(t[o])
for(var l=0;l<t.length;l++)hn(t[l])}function un(e){var t=e.cm,r=t.display
Mn(t),e.updateMaxLine&&xe(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<r.viewFrom||e.scrollToPos.to.line>=r.viewTo)||r.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new Ns(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function cn(e){e.updatedDisplay=e.mustUpdate&&On(e.cm,e.update)}function fn(e){var t=e.cm,r=t.display
e.updatedDisplay&&Er(t),e.barMeasure=tn(t),r.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=Xt(t,r.maxLine,r.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(r.scroller.clientWidth,r.sizer.offsetLeft+e.adjustWidthTo+Bt(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,r.sizer.offsetLeft+e.adjustWidthTo-Ut(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=r.input.prepareSelection())}function dn(e){var t=e.cm
null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&en(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1)
var r=e.focus&&e.focus==l()
e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,r),(e.updatedDisplay||e.startHeight!=t.doc.height)&&rn(t,e.barMeasure),e.updatedDisplay&&Fn(t,e.barMeasure),e.selectionChanged&&Wr(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),r&&Hr(e.cm)}function hn(e){var t=e.cm,r=t.display,n=t.doc
if(e.updatedDisplay&&An(t,e.update),null==r.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(r.wheelStartX=r.wheelStartY=null),null!=e.scrollTop&&Qr(t,e.scrollTop,e.forceScroll),null!=e.scrollLeft&&en(t,e.scrollLeft,!0,!0),e.scrollToPos){var i=Vr(t,G(n,e.scrollToPos.from),G(n,e.scrollToPos.to),e.scrollToPos.margin)
Gr(t,i)}var o=e.maybeHiddenMarkers,l=e.maybeUnhiddenMarkers
if(o)for(var s=0;s<o.length;++s)o[s].lines.length||Te(o[s],"hide")
if(l)for(var a=0;a<l.length;++a)l[a].lines.length&&Te(l[a],"unhide")
r.wrapper.offsetHeight&&(n.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&Te(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function pn(e,t){if(e.curOp)return t()
ln(e)
try{return t()}finally{sn(e)}}function gn(e,t){return function(){if(e.curOp)return t.apply(e,arguments)
ln(e)
try{return t.apply(e,arguments)}finally{sn(e)}}}function vn(e){return function(){if(this.curOp)return e.apply(this,arguments)
ln(this)
try{return e.apply(this,arguments)}finally{sn(this)}}}function mn(e){return function(){var t=this.cm
if(!t||t.curOp)return e.apply(this,arguments)
ln(t)
try{return e.apply(this,arguments)}finally{sn(t)}}}function yn(e,t,r,n){null==t&&(t=e.doc.first),null==r&&(r=e.doc.first+e.doc.size),n||(n=0)
var i=e.display
if(n&&r<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)es&&ge(e.doc,t)<i.viewTo&&wn(e)
else if(r<=i.viewFrom)es&&ve(e.doc,r+n)>i.viewFrom?wn(e):(i.viewFrom+=n,i.viewTo+=n)
else if(t<=i.viewFrom&&r>=i.viewTo)wn(e)
else if(t<=i.viewFrom){var o=xn(e,r,r+n,1)
o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=n):wn(e)}else if(r>=i.viewTo){var l=xn(e,t,t,-1)
l?(i.view=i.view.slice(0,l.index),i.viewTo=l.lineN):wn(e)}else{var s=xn(e,t,t,-1),a=xn(e,r,r+n,1)
s&&a?(i.view=i.view.slice(0,s.index).concat(mt(e,s.lineN,a.lineN)).concat(i.view.slice(a.index)),i.viewTo+=n):wn(e)}var u=i.externalMeasured
u&&(r<u.lineN?u.lineN+=n:t<u.lineN+u.size&&(i.externalMeasured=null))}function bn(e,t,r){e.curOp.viewChanged=!0
var n=e.display,i=e.display.externalMeasured
if(i&&t>=i.lineN&&t<i.lineN+i.size&&(n.externalMeasured=null),!(t<n.viewFrom||t>=n.viewTo)){var o=n.view[Mr(e,t)]
if(null!=o.node){var l=o.changes||(o.changes=[])
d(l,r)==-1&&l.push(r)}}}function wn(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function xn(e,t,r,n){var i,o=Mr(e,t),l=e.display.view
if(!es||r==e.doc.first+e.doc.size)return{index:o,lineN:r}
for(var s=e.display.viewFrom,a=0;a<o;a++)s+=l[a].size
if(s!=t){if(n>0){if(o==l.length-1)return null
i=s+l[o].size-t,o++}else i=s-t
t+=i,r+=i}for(;ge(e.doc,r)!=r;){if(o==(n<0?0:l.length-1))return null
r+=n*l[o-(n<0?1:0)].size,o+=n}return{index:o,lineN:r}}function Cn(e,t,r){var n=e.display,i=n.view
0==i.length||t>=n.viewTo||r<=n.viewFrom?(n.view=mt(e,t,r),n.viewFrom=t):(n.viewFrom>t?n.view=mt(e,t,n.viewFrom).concat(n.view):n.viewFrom<t&&(n.view=n.view.slice(Mr(e,t))),n.viewFrom=t,n.viewTo<r?n.view=n.view.concat(mt(e,n.viewTo,r)):n.viewTo>r&&(n.view=n.view.slice(0,Mr(e,r)))),n.viewTo=r}function Sn(e){for(var t=e.display.view,r=0,n=0;n<t.length;n++){var i=t[n]
i.hidden||i.node&&!i.changes||++r}return r}function kn(e,t){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(t,u(Ln,e))}function Ln(e){var t=e.doc
if(!(t.highlightFrontier>=e.display.viewTo)){var r=+new Date+e.options.workTime,n=Ze(e,t.highlightFrontier),i=[]
t.iter(n.line,Math.min(t.first+t.size,e.display.viewTo+500),function(o){if(n.line>=e.display.viewFrom){var l=o.styles,s=o.text.length>e.options.maxHighlightLength?Xe(t.mode,n.state):null,a=qe(e,o,n,!0)
s&&(n.state=s),o.styles=a.styles
var u=o.styleClasses,c=a.classes
c?o.styleClasses=c:u&&(o.styleClasses=null)
for(var f=!l||l.length!=o.styles.length||u!=c&&(!u||!c||u.bgClass!=c.bgClass||u.textClass!=c.textClass),d=0;!f&&d<l.length;++d)f=l[d]!=o.styles[d]
f&&i.push(n.line),o.stateAfter=n.save(),n.nextLine()}else o.text.length<=e.options.maxHighlightLength&&Je(e,o.text,n),o.stateAfter=n.line%5==0?n.save():null,n.nextLine()
if(+new Date>r)return kn(e,e.options.workDelay),!0}),t.highlightFrontier=n.line,t.modeFrontier=Math.max(t.modeFrontier,n.line),i.length&&pn(e,function(){for(var t=0;t<i.length;t++)bn(e,i[t],"text")})}}function Mn(e){var t=e.display
!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=Bt(e)+"px",t.sizer.style.marginBottom=-t.nativeBarWidth+"px",t.sizer.style.borderRightWidth=Bt(e)+"px",t.scrollbarsClipped=!0)}function Tn(e){if(e.hasFocus())return null
var t=l()
if(!t||!o(e.display.lineDiv,t))return null
var r={activeElt:t}
if(window.getSelection){var n=window.getSelection()
n.anchorNode&&n.extend&&o(e.display.lineDiv,n.anchorNode)&&(r.anchorNode=n.anchorNode,r.anchorOffset=n.anchorOffset,r.focusNode=n.focusNode,r.focusOffset=n.focusOffset)}return r}function Nn(e){if(e&&e.activeElt&&e.activeElt!=l()&&(e.activeElt.focus(),e.anchorNode&&o(document.body,e.anchorNode)&&o(document.body,e.focusNode))){var t=window.getSelection(),r=document.createRange()
r.setEnd(e.anchorNode,e.anchorOffset),r.collapse(!1),t.removeAllRanges(),t.addRange(r),t.extend(e.focusNode,e.focusOffset)}}function On(e,r){var n=e.display,i=e.doc
if(r.editorIsHidden)return wn(e),!1
if(!r.force&&r.visible.from>=n.viewFrom&&r.visible.to<=n.viewTo&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo)&&n.renderedView==n.view&&0==Sn(e))return!1
Ur(e)&&(wn(e),r.dims=xr(e))
var o=i.first+i.size,l=Math.max(r.visible.from-e.options.viewportMargin,i.first),s=Math.min(o,r.visible.to+e.options.viewportMargin)
n.viewFrom<l&&l-n.viewFrom<20&&(l=Math.max(i.first,n.viewFrom)),n.viewTo>s&&n.viewTo-s<20&&(s=Math.min(o,n.viewTo)),es&&(l=ge(e.doc,l),s=ve(e.doc,s))
var a=l!=n.viewFrom||s!=n.viewTo||n.lastWrapHeight!=r.wrapperHeight||n.lastWrapWidth!=r.wrapperWidth
Cn(e,l,s),n.viewOffset=be(T(e.doc,n.viewFrom)),e.display.mover.style.top=n.viewOffset+"px"
var u=Sn(e)
if(!a&&0==u&&!r.force&&n.renderedView==n.view&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo))return!1
var c=Tn(e)
return u>4&&(n.lineDiv.style.display="none"),Wn(e,n.updateLineNumbers,r.dims),u>4&&(n.lineDiv.style.display=""),n.renderedView=n.view,Nn(c),t(n.cursorDiv),t(n.selectionDiv),n.gutters.style.height=n.sizer.style.minHeight=0,a&&(n.lastWrapHeight=r.wrapperHeight,n.lastWrapWidth=r.wrapperWidth,kn(e,400)),n.updateLineNumbers=null,!0}function An(e,t){for(var r=t.viewport,n=!0;(n&&e.options.lineWrapping&&t.oldDisplayWidth!=Ut(e)||(r&&null!=r.top&&(r={top:Math.min(e.doc.height+Rt(e.display)-Gt(e),r.top)}),t.visible=Ir(e.display,e.doc,r),!(t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)))&&On(e,t);n=!1){Er(e)
var i=tn(e)
Tr(e),rn(e,i),Fn(e,i),t.force=!1}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function Dn(e,t){var r=new Ns(e,t)
if(On(e,r)){Er(e),An(e,r)
var n=tn(e)
Tr(e),rn(e,n),Fn(e,n),r.finish()}}function Wn(e,r,n){function i(t){var r=t.nextSibling
return Sl&&Hl&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),r}for(var o=e.display,l=e.options.lineNumbers,s=o.lineDiv,a=s.firstChild,u=o.view,c=o.viewFrom,f=0;f<u.length;f++){var h=u[f]
if(h.hidden);else if(h.node&&h.node.parentNode==s){for(;a!=h.node;)a=i(a)
var p=l&&null!=r&&r<=c&&h.lineNumber
h.changes&&(d(h.changes,"gutter")>-1&&(p=!1),St(e,h,c,n)),p&&(t(h.lineNumber),h.lineNumber.appendChild(document.createTextNode(F(e.options,c)))),a=h.node.nextSibling}else{var g=Dt(e,h,c,n)
s.insertBefore(g,a)}c+=h.size}for(;a;)a=i(a)}function Hn(e){var t=e.display.gutters.offsetWidth
e.display.sizer.style.marginLeft=t+"px"}function Fn(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+Bt(e)+"px"}function zn(e){var r=e.display.gutters,i=e.options.gutters
t(r)
for(var o=0;o<i.length;++o){var l=i[o],s=r.appendChild(n("div",null,"CodeMirror-gutter "+l))
"CodeMirror-linenumbers"==l&&(e.display.lineGutter=s,s.style.width=(e.display.lineNumWidth||1)+"px")}r.style.display=o?"":"none",Hn(e)}function Pn(e){var t=d(e.gutters,"CodeMirror-linenumbers")
t==-1&&e.lineNumbers?e.gutters=e.gutters.concat(["CodeMirror-linenumbers"]):t>-1&&!e.lineNumbers&&(e.gutters=e.gutters.slice(0),e.gutters.splice(t,1))}function En(e){var t=e.wheelDeltaX,r=e.wheelDeltaY
return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==r&&e.detail&&e.axis==e.VERTICAL_AXIS?r=e.detail:null==r&&(r=e.wheelDelta),{x:t,y:r}}function Rn(e){var t=En(e)
return t.x*=As,t.y*=As,t}function In(e,t){var r=En(t),n=r.x,i=r.y,o=e.display,l=o.scroller,s=l.scrollWidth>l.clientWidth,a=l.scrollHeight>l.clientHeight
if(n&&s||i&&a){if(i&&Hl&&Sl)e:for(var u=t.target,c=o.view;u!=l;u=u.parentNode)for(var f=0;f<c.length;f++)if(c[f].node==u){e.display.currentWheelTarget=u
break e}if(n&&!ml&&!Ml&&null!=As)return i&&a&&Jr(e,Math.max(0,l.scrollTop+i*As)),en(e,Math.max(0,l.scrollLeft+n*As)),(!i||i&&a)&&We(t),void(o.wheelStartX=null)
if(i&&null!=As){var d=i*As,h=e.doc.scrollTop,p=h+o.wrapper.clientHeight
d<0?h=Math.max(0,h+d-50):p=Math.min(e.doc.height,p+d+50),Dn(e,{top:h,bottom:p})}Os<20&&(null==o.wheelStartX?(o.wheelStartX=l.scrollLeft,o.wheelStartY=l.scrollTop,o.wheelDX=n,o.wheelDY=i,setTimeout(function(){if(null!=o.wheelStartX){var e=l.scrollLeft-o.wheelStartX,t=l.scrollTop-o.wheelStartY,r=t&&o.wheelDY&&t/o.wheelDY||e&&o.wheelDX&&e/o.wheelDX
o.wheelStartX=o.wheelStartY=null,r&&(As=(As*Os+r)/(Os+1),++Os)}},200)):(o.wheelDX+=n,o.wheelDY+=i))}}function Bn(e,t){var r=e[t]
e.sort(function(e,t){return P(e.from(),t.from())}),t=d(e,r)
for(var n=1;n<e.length;n++){var i=e[n],o=e[n-1]
if(P(o.to(),i.from())>=0){var l=B(o.from(),i.from()),s=I(o.to(),i.to()),a=o.empty()?i.from()==i.head:o.from()==o.head
n<=t&&--t,e.splice(--n,2,new Ws(a?s:l,a?l:s))}}return new Ds(e,t)}function Un(e,t){return new Ds([new Ws(e,t||e)],0)}function Gn(e){return e.text?z(e.from.line+e.text.length-1,g(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}function Vn(e,t){if(P(e,t.from)<0)return e
if(P(e,t.to)<=0)return Gn(t)
var r=e.line+t.text.length-(t.to.line-t.from.line)-1,n=e.ch
return e.line==t.to.line&&(n+=Gn(t).ch-t.to.ch),z(r,n)}function Kn(e,t){for(var r=[],n=0;n<e.sel.ranges.length;n++){var i=e.sel.ranges[n]
r.push(new Ws(Vn(i.anchor,t),Vn(i.head,t)))}return Bn(r,e.sel.primIndex)}function jn(e,t,r){return e.line==t.line?z(r.line,e.ch-t.ch+r.ch):z(r.line+(e.line-t.line),e.ch)}function Xn(e,t,r){for(var n=[],i=z(e.first,0),o=i,l=0;l<t.length;l++){var s=t[l],a=jn(s.from,i,o),u=jn(Gn(s),i,o)
if(i=s.to,o=u,"around"==r){var c=e.sel.ranges[l],f=P(c.head,c.anchor)<0
n[l]=new Ws(f?u:a,f?a:u)}else n[l]=new Ws(a,a)}return new Ds(n,e.sel.primIndex)}function Yn(e){e.doc.mode=Ke(e.options,e.doc.modeOption),_n(e)}function _n(e){e.doc.iter(function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,kn(e,100),e.state.modeGen++,e.curOp&&yn(e)}function qn(e,t){return 0==t.from.ch&&0==t.to.ch&&""==g(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function $n(e,t,r,n){function i(e){return r?r[e]:null}function o(e,r,i){lt(e,r,i,n),xt(e,"change",e,t)}function l(e,t){for(var r=[],o=e;o<t;++o)r.push(new ms(u[o],i(o),n))
return r}var s=t.from,a=t.to,u=t.text,c=T(e,s.line),f=T(e,a.line),d=g(u),h=i(u.length-1),p=a.line-s.line
if(t.full)e.insert(0,l(0,u.length)),e.remove(u.length,e.size-u.length)
else if(qn(e,t)){var v=l(0,u.length-1)
o(f,f.text,h),p&&e.remove(s.line,p),v.length&&e.insert(s.line,v)}else if(c==f)if(1==u.length)o(c,c.text.slice(0,s.ch)+d+c.text.slice(a.ch),h)
else{var m=l(1,u.length-1)
m.push(new ms(d+c.text.slice(a.ch),h,n)),o(c,c.text.slice(0,s.ch)+u[0],i(0)),e.insert(s.line+1,m)}else if(1==u.length)o(c,c.text.slice(0,s.ch)+u[0]+f.text.slice(a.ch),i(0)),e.remove(s.line+1,p)
else{o(c,c.text.slice(0,s.ch)+u[0],i(0)),o(f,d+f.text.slice(a.ch),h)
var y=l(1,u.length-1)
p>1&&e.remove(s.line+1,p-1),e.insert(s.line+1,y)}xt(e,"change",e,t)}function Zn(e,t,r){function n(e,i,o){if(e.linked)for(var l=0;l<e.linked.length;++l){var s=e.linked[l]
if(s.doc!=i){var a=o&&s.sharedHist
r&&!a||(t(s.doc,a),n(s.doc,e,a))}}}n(e,null,!0)}function Jn(e,t){if(t.cm)throw new Error("This document is already in use.")
e.doc=t,t.cm=e,kr(e),Yn(e),Qn(e),e.options.lineWrapping||xe(e),e.options.mode=t.modeOption,yn(e)}function Qn(e){("rtl"==e.doc.direction?s:Bl)(e.display.lineDiv,"CodeMirror-rtl")}function ei(e){pn(e,function(){Qn(e),yn(e)})}function ti(e){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1}function ri(e,t){var r={from:R(t.from),to:Gn(t),text:N(e,t.from,t.to)}
return ui(e,r,t.from.line,t.to.line+1),Zn(e,function(e){return ui(e,r,t.from.line,t.to.line+1)},!0),r}function ni(e){for(;e.length;){var t=g(e)
if(!t.ranges)break
e.pop()}}function ii(e,t){return t?(ni(e.done),g(e.done)):e.done.length&&!g(e.done).ranges?g(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),g(e.done)):void 0}function oi(e,t,r,n){var i=e.history
i.undone.length=0
var o,l,s=+new Date
if((i.lastOp==n||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&i.lastModTime>s-(e.cm?e.cm.options.historyEventDelay:500)||"*"==t.origin.charAt(0)))&&(o=ii(i,i.lastOp==n)))l=g(o.changes),0==P(t.from,t.to)&&0==P(t.from,l.to)?l.to=Gn(t):o.changes.push(ri(e,t))
else{var a=g(i.done)
for(a&&a.ranges||ai(e.sel,i.done),o={changes:[ri(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(r),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=s,i.lastOp=i.lastSelOp=n,i.lastOrigin=i.lastSelOrigin=t.origin,l||Te(e,"historyAdded")}function li(e,t,r,n){var i=t.charAt(0)
return"*"==i||"+"==i&&r.ranges.length==n.ranges.length&&r.somethingSelected()==n.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function si(e,t,r,n){var i=e.history,o=n&&n.origin
r==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||li(e,o,g(i.done),t))?i.done[i.done.length-1]=t:ai(t,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=r,n&&n.clearRedo!==!1&&ni(i.undone)}function ai(e,t){var r=g(t)
r&&r.ranges&&r.equals(e)||t.push(e)}function ui(e,t,r,n){var i=t["spans_"+e.id],o=0
e.iter(Math.max(e.first,r),Math.min(e.first+e.size,n),function(r){r.markedSpans&&((i||(i=t["spans_"+e.id]={}))[o]=r.markedSpans),++o})}function ci(e){if(!e)return null
for(var t,r=0;r<e.length;++r)e[r].marker.explicitlyCleared?t||(t=e.slice(0,r)):t&&t.push(e[r])
return t?t.length?t:null:e}function fi(e,t){var r=t["spans_"+e.id]
if(!r)return null
for(var n=[],i=0;i<t.text.length;++i)n.push(ci(r[i]))
return n}function di(e,t){var r=fi(e,t),n=Q(e,t)
if(!r)return n
if(!n)return r
for(var i=0;i<r.length;++i){var o=r[i],l=n[i]
if(o&&l)e:for(var s=0;s<l.length;++s){for(var a=l[s],u=0;u<o.length;++u)if(o[u].marker==a.marker)continue e
o.push(a)}else l&&(r[i]=l)}return r}function hi(e,t,r){for(var n=[],i=0;i<e.length;++i){var o=e[i]
if(o.ranges)n.push(r?Ds.prototype.deepCopy.call(o):o)
else{var l=o.changes,s=[]
n.push({changes:s})
for(var a=0;a<l.length;++a){var u=l[a],c=void 0
if(s.push({from:u.from,to:u.to,text:u.text}),t)for(var f in u)(c=f.match(/^spans_(\d+)$/))&&d(t,Number(c[1]))>-1&&(g(s)[f]=u[f],delete u[f])}}}return n}function pi(e,t,r,n){if(n){var i=e.anchor
if(r){var o=P(t,i)<0
o!=P(r,i)<0?(i=t,t=r):o!=P(t,r)<0&&(t=r)}return new Ws(i,t)}return new Ws(r||t,t)}function gi(e,t,r,n,i){null==i&&(i=e.cm&&(e.cm.display.shift||e.extend)),xi(e,new Ds([pi(e.sel.primary(),t,r,i)],0),n)}function vi(e,t,r){for(var n=[],i=e.cm&&(e.cm.display.shift||e.extend),o=0;o<e.sel.ranges.length;o++)n[o]=pi(e.sel.ranges[o],t[o],null,i)
var l=Bn(n,e.sel.primIndex)
xi(e,l,r)}function mi(e,t,r,n){var i=e.sel.ranges.slice(0)
i[t]=r,xi(e,Bn(i,e.sel.primIndex),n)}function yi(e,t,r,n){xi(e,Un(t,r),n)}function bi(e,t,r){var n={ranges:t.ranges,update:function(t){var r=this
this.ranges=[]
for(var n=0;n<t.length;n++)r.ranges[n]=new Ws(G(e,t[n].anchor),G(e,t[n].head))},origin:r&&r.origin}
return Te(e,"beforeSelectionChange",e,n),e.cm&&Te(e.cm,"beforeSelectionChange",e.cm,n),n.ranges!=t.ranges?Bn(n.ranges,n.ranges.length-1):t}function wi(e,t,r){var n=e.history.done,i=g(n)
i&&i.ranges?(n[n.length-1]=t,Ci(e,t,r)):xi(e,t,r)}function xi(e,t,r){Ci(e,t,r),si(e,e.sel,e.cm?e.cm.curOp.id:NaN,r)}function Ci(e,t,r){(Ae(e,"beforeSelectionChange")||e.cm&&Ae(e.cm,"beforeSelectionChange"))&&(t=bi(e,t,r))
var n=r&&r.bias||(P(t.primary().head,e.sel.primary().head)<0?-1:1)
Si(e,Li(e,t,n,!0)),r&&r.scroll===!1||!e.cm||Yr(e.cm)}function Si(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=e.cm.curOp.selectionChanged=!0,Oe(e.cm)),xt(e,"cursorActivity",e))}function ki(e){Si(e,Li(e,e.sel,null,!1))}function Li(e,t,r,n){for(var i,o=0;o<t.ranges.length;o++){var l=t.ranges[o],s=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],a=Ti(e,l.anchor,s&&s.anchor,r,n),u=Ti(e,l.head,s&&s.head,r,n);(i||a!=l.anchor||u!=l.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new Ws(a,u))}return i?Bn(i,t.primIndex):t}function Mi(e,t,r,n,i){var o=T(e,t.line)
if(o.markedSpans)for(var l=0;l<o.markedSpans.length;++l){var s=o.markedSpans[l],a=s.marker
if((null==s.from||(a.inclusiveLeft?s.from<=t.ch:s.from<t.ch))&&(null==s.to||(a.inclusiveRight?s.to>=t.ch:s.to>t.ch))){if(i&&(Te(a,"beforeCursorEnter"),a.explicitlyCleared)){if(o.markedSpans){--l
continue}break}if(!a.atomic)continue
if(r){var u=a.find(n<0?1:-1),c=void 0
if((n<0?a.inclusiveRight:a.inclusiveLeft)&&(u=Ni(e,u,-n,u&&u.line==t.line?o:null)),u&&u.line==t.line&&(c=P(u,r))&&(n<0?c<0:c>0))return Mi(e,u,t,n,i)}var f=a.find(n<0?-1:1)
return(n<0?a.inclusiveLeft:a.inclusiveRight)&&(f=Ni(e,f,n,f.line==t.line?o:null)),f?Mi(e,f,t,n,i):null}}return t}function Ti(e,t,r,n,i){var o=n||1,l=Mi(e,t,r,o,i)||!i&&Mi(e,t,r,o,!0)||Mi(e,t,r,-o,i)||!i&&Mi(e,t,r,-o,!0)
return l?l:(e.cantEdit=!0,z(e.first,0))}function Ni(e,t,r,n){return r<0&&0==t.ch?t.line>e.first?G(e,z(t.line-1)):null:r>0&&t.ch==(n||T(e,t.line)).text.length?t.line<e.first+e.size-1?z(t.line+1,0):null:new z(t.line,t.ch+r)}function Oi(e){e.setSelection(z(e.firstLine(),0),z(e.lastLine()),Yl)}function Ai(e,t,r){var n={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){return n.canceled=!0}}
return r&&(n.update=function(t,r,i,o){t&&(n.from=G(e,t)),r&&(n.to=G(e,r)),i&&(n.text=i),void 0!==o&&(n.origin=o)}),Te(e,"beforeChange",e,n),e.cm&&Te(e.cm,"beforeChange",e.cm,n),n.canceled?null:{from:n.from,to:n.to,text:n.text,origin:n.origin}}function Di(e,t,r){if(e.cm){if(!e.cm.curOp)return gn(e.cm,Di)(e,t,r)
if(e.cm.state.suppressEdits)return}if(!(Ae(e,"beforeChange")||e.cm&&Ae(e.cm,"beforeChange"))||(t=Ai(e,t,!0))){var n=Ql&&!r&&te(e,t.from,t.to)
if(n)for(var i=n.length-1;i>=0;--i)Wi(e,{from:n[i].from,to:n[i].to,text:i?[""]:t.text,origin:t.origin})
else Wi(e,t)}}function Wi(e,t){if(1!=t.text.length||""!=t.text[0]||0!=P(t.from,t.to)){var r=Kn(e,t)
oi(e,t,r,e.cm?e.cm.curOp.id:NaN),zi(e,t,r,Q(e,t))
var n=[]
Zn(e,function(e,r){r||d(n,e.history)!=-1||(Bi(e.history,t),n.push(e.history)),zi(e,t,null,Q(e,t))})}}function Hi(e,t,r){var n=e.cm&&e.cm.state.suppressEdits
if(!n||r){for(var i,o=e.history,l=e.sel,s="undo"==t?o.done:o.undone,a="undo"==t?o.undone:o.done,u=0;u<s.length&&(i=s[u],r?!i.ranges||i.equals(e.sel):i.ranges);u++);if(u!=s.length){for(o.lastOrigin=o.lastSelOrigin=null;;){if(i=s.pop(),!i.ranges){if(n)return void s.push(i)
break}if(ai(i,a),r&&!i.equals(e.sel))return void xi(e,i,{clearRedo:!1})
l=i}var c=[]
ai(l,a),a.push({changes:c,generation:o.generation}),o.generation=i.generation||++o.maxGeneration
for(var f=Ae(e,"beforeChange")||e.cm&&Ae(e.cm,"beforeChange"),h=function(r){var n=i.changes[r]
if(n.origin=t,f&&!Ai(e,n,!1))return s.length=0,{}
c.push(ri(e,n))
var o=r?Kn(e,n):g(s)
zi(e,n,o,di(e,n)),!r&&e.cm&&e.cm.scrollIntoView({from:n.from,to:Gn(n)})
var l=[]
Zn(e,function(e,t){t||d(l,e.history)!=-1||(Bi(e.history,n),l.push(e.history)),zi(e,n,null,di(e,n))})},p=i.changes.length-1;p>=0;--p){var v=h(p)
if(v)return v.v}}}}function Fi(e,t){if(0!=t&&(e.first+=t,e.sel=new Ds(v(e.sel.ranges,function(e){return new Ws(z(e.anchor.line+t,e.anchor.ch),z(e.head.line+t,e.head.ch))}),e.sel.primIndex),e.cm)){yn(e.cm,e.first,e.first-t,t)
for(var r=e.cm.display,n=r.viewFrom;n<r.viewTo;n++)bn(e.cm,n,"gutter")}}function zi(e,t,r,n){if(e.cm&&!e.cm.curOp)return gn(e.cm,zi)(e,t,r,n)
if(t.to.line<e.first)return void Fi(e,t.text.length-1-(t.to.line-t.from.line))
if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line)
Fi(e,i),t={from:z(e.first,0),to:z(t.to.line+i,t.to.ch),text:[g(t.text)],origin:t.origin}}var o=e.lastLine()
t.to.line>o&&(t={from:t.from,to:z(o,T(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=N(e,t.from,t.to),r||(r=Kn(e,t)),e.cm?Pi(e.cm,t,n):$n(e,t,n),Ci(e,r,Yl)}}function Pi(e,t,r){var n=e.doc,i=e.display,o=t.from,l=t.to,s=!1,a=o.line
e.options.lineWrapping||(a=D(de(T(n,o.line))),n.iter(a,l.line+1,function(e){if(e==i.maxLine)return s=!0,!0})),n.sel.contains(t.from,t.to)>-1&&Oe(e),$n(n,t,r,Sr(e)),e.options.lineWrapping||(n.iter(a,o.line+t.text.length,function(e){var t=we(e)
t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,s=!1)}),s&&(e.curOp.updateMaxLine=!0)),ot(n,o.line),kn(e,400)
var u=t.text.length-(l.line-o.line)-1
t.full?yn(e):o.line!=l.line||1!=t.text.length||qn(e.doc,t)?yn(e,o.line,l.line+1,u):bn(e,o.line,"text")
var c=Ae(e,"changes"),f=Ae(e,"change")
if(f||c){var d={from:o,to:l,text:t.text,removed:t.removed,origin:t.origin}
f&&xt(e,"change",e,d),c&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(d)}e.display.selForContextMenu=null}function Ei(e,t,r,n,i){if(n||(n=r),P(n,r)<0){var o
o=[n,r],r=o[0],n=o[1]}"string"==typeof t&&(t=e.splitLines(t)),Di(e,{from:r,to:n,text:t,origin:i})}function Ri(e,t,r,n){r<e.line?e.line+=n:t<e.line&&(e.line=t,e.ch=0)}function Ii(e,t,r,n){for(var i=0;i<e.length;++i){var o=e[i],l=!0
if(o.ranges){o.copied||(o=e[i]=o.deepCopy(),o.copied=!0)
for(var s=0;s<o.ranges.length;s++)Ri(o.ranges[s].anchor,t,r,n),Ri(o.ranges[s].head,t,r,n)}else{for(var a=0;a<o.changes.length;++a){var u=o.changes[a]
if(r<u.from.line)u.from=z(u.from.line+n,u.from.ch),u.to=z(u.to.line+n,u.to.ch)
else if(t<=u.to.line){l=!1
break}}l||(e.splice(0,i+1),i=0)}}}function Bi(e,t){var r=t.from.line,n=t.to.line,i=t.text.length-(n-r)-1
Ii(e.done,r,n,i),Ii(e.undone,r,n,i)}function Ui(e,t,r,n){var i=t,o=t
return"number"==typeof t?o=T(e,U(e,t)):i=D(t),null==i?null:(n(o,i)&&e.cm&&bn(e.cm,i,r),o)}function Gi(e){var t=this
this.lines=e,this.parent=null
for(var r=0,n=0;n<e.length;++n)e[n].parent=t,r+=e[n].height
this.height=r}function Vi(e){var t=this
this.children=e
for(var r=0,n=0,i=0;i<e.length;++i){var o=e[i]
r+=o.chunkSize(),n+=o.height,o.parent=t}this.size=r,this.height=n,this.parent=null}function Ki(e,t,r){be(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Xr(e,r)}function ji(e,t,r,n){var i=new Hs(e,r,n),o=e.cm
return o&&i.noHScroll&&(o.display.alignWidgets=!0),Ui(e,t,"widget",function(t){var r=t.widgets||(t.widgets=[])
if(null==i.insertAt?r.push(i):r.splice(Math.min(r.length-1,Math.max(0,i.insertAt)),0,i),i.line=t,o&&!me(e,t)){var n=be(t)<e.scrollTop
A(t,t.height+zt(i)),n&&Xr(o,i.height),o.curOp.forceUpdate=!0}return!0}),o&&xt(o,"lineWidgetAdded",o,i,"number"==typeof t?t:D(t)),i}function Xi(e,t,r,n,o){if(n&&n.shared)return Yi(e,t,r,n,o)
if(e.cm&&!e.cm.curOp)return gn(e.cm,Xi)(e,t,r,n,o)
var l=new zs(e,o),s=P(t,r)
if(n&&c(n,l,!1),s>0||0==s&&l.clearWhenEmpty!==!1)return l
if(l.replacedWith&&(l.collapsed=!0,l.widgetNode=i("span",[l.replacedWith],"CodeMirror-widget"),n.handleMouseEvents||l.widgetNode.setAttribute("cm-ignore-events","true"),n.insertLeft&&(l.widgetNode.insertLeft=!0)),l.collapsed){if(fe(e,t.line,t,r,l)||t.line!=r.line&&fe(e,r.line,t,r,l))throw new Error("Inserting collapsed marker partially overlapping an existing one")
X()}l.addToHistory&&oi(e,{from:t,to:r,origin:"markText"},e.sel,NaN)
var a,u=t.line,f=e.cm
if(e.iter(u,r.line+1,function(e){f&&l.collapsed&&!f.options.lineWrapping&&de(e)==f.display.maxLine&&(a=!0),l.collapsed&&u!=t.line&&A(e,0),$(e,new Y(l,u==t.line?t.ch:null,u==r.line?r.ch:null)),++u}),l.collapsed&&e.iter(t.line,r.line+1,function(t){me(e,t)&&A(t,0)}),l.clearOnEnter&&is(l,"beforeCursorEnter",function(){return l.clear()}),l.readOnly&&(j(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),l.collapsed&&(l.id=++Fs,l.atomic=!0),f){if(a&&(f.curOp.updateMaxLine=!0),l.collapsed)yn(f,t.line,r.line+1)
else if(l.className||l.title||l.startStyle||l.endStyle||l.css)for(var d=t.line;d<=r.line;d++)bn(f,d,"text")
l.atomic&&ki(f.doc),xt(f,"markerAdded",f,l)}return l}function Yi(e,t,r,n,i){n=c(n),n.shared=!1
var o=[Xi(e,t,r,n,i)],l=o[0],s=n.widgetNode
return Zn(e,function(e){s&&(n.widgetNode=s.cloneNode(!0)),o.push(Xi(e,G(e,t),G(e,r),n,i))
for(var a=0;a<e.linked.length;++a)if(e.linked[a].isParent)return
l=g(o)}),new Ps(o,l)}function _i(e){return e.findMarks(z(e.first,0),e.clipPos(z(e.lastLine())),function(e){return e.parent})}function qi(e,t){for(var r=0;r<t.length;r++){var n=t[r],i=n.find(),o=e.clipPos(i.from),l=e.clipPos(i.to)
if(P(o,l)){var s=Xi(e,o,l,n.primary,n.primary.type)
n.markers.push(s),s.parent=n}}}function $i(e){for(var t=function(t){var r=e[t],n=[r.primary.doc]
Zn(r.primary.doc,function(e){return n.push(e)})
for(var i=0;i<r.markers.length;i++){var o=r.markers[i]
d(n,o.doc)==-1&&(o.parent=null,r.markers.splice(i--,1))}},r=0;r<e.length;r++)t(r)}function Zi(e){var t=this
if(eo(t),!Ne(t,e)&&!Pt(t.display,e)){We(e),xl&&(Is=+new Date)
var r=Lr(t,e,!0),n=e.dataTransfer.files
if(r&&!t.isReadOnly())if(n&&n.length&&window.FileReader&&window.File)for(var i=n.length,o=Array(i),l=0,s=function(e,n){if(!t.options.allowDropFileTypes||d(t.options.allowDropFileTypes,e.type)!=-1){var s=new FileReader
s.onload=gn(t,function(){var e=s.result
if(/[\x00-\x08\x0e-\x1f]{2}/.test(e)&&(e=""),o[n]=e,++l==i){r=G(t.doc,r)
var a={from:r,to:r,text:t.doc.splitLines(o.join(t.doc.lineSeparator())),origin:"paste"}
Di(t.doc,a),wi(t.doc,Un(r,Gn(a)))}}),s.readAsText(e)}},a=0;a<i;++a)s(n[a],a)
else{if(t.state.draggingText&&t.doc.sel.contains(r)>-1)return t.state.draggingText(e),void setTimeout(function(){return t.display.input.focus()},20)
try{var u=e.dataTransfer.getData("Text")
if(u){var c
if(t.state.draggingText&&!t.state.draggingText.copy&&(c=t.listSelections()),Ci(t.doc,Un(r,r)),c)for(var f=0;f<c.length;++f)Ei(t.doc,"",c[f].anchor,c[f].head,"drag")
t.replaceSelection(u,"around","paste"),t.display.input.focus()}}catch(e){}}}}function Ji(e,t){if(xl&&(!e.state.draggingText||+new Date-Is<100))return void ze(t)
if(!Ne(e,t)&&!Pt(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!Tl)){var r=n("img",null,null,"position: fixed; left: 0; top: 0;")
r.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",Ml&&(r.width=r.height=1,e.display.wrapper.appendChild(r),r._top=r.offsetTop),t.dataTransfer.setDragImage(r,0,0),Ml&&r.parentNode.removeChild(r)}}function Qi(e,t){var i=Lr(e,t)
if(i){var o=document.createDocumentFragment()
Or(e,i,o),e.display.dragCursor||(e.display.dragCursor=n("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),r(e.display.dragCursor,o)}}function eo(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function to(e){if(document.getElementsByClassName)for(var t=document.getElementsByClassName("CodeMirror"),r=0;r<t.length;r++){var n=t[r].CodeMirror
n&&e(n)}}function ro(){Bs||(no(),Bs=!0)}function no(){var e
is(window,"resize",function(){null==e&&(e=setTimeout(function(){e=null,to(io)},100))}),is(window,"blur",function(){return to(Pr)})}function io(e){var t=e.display
t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize()}function oo(e){var t=e.split(/-(?!$)/)
e=t[t.length-1]
for(var r,n,i,o,l=0;l<t.length-1;l++){var s=t[l]
if(/^(cmd|meta|m)$/i.test(s))o=!0
else if(/^a(lt)?$/i.test(s))r=!0
else if(/^(c|ctrl|control)$/i.test(s))n=!0
else{if(!/^s(hift)?$/i.test(s))throw new Error("Unrecognized modifier name: "+s)
i=!0}}return r&&(e="Alt-"+e),n&&(e="Ctrl-"+e),o&&(e="Cmd-"+e),i&&(e="Shift-"+e),e}function lo(e){var t={}
for(var r in e)if(e.hasOwnProperty(r)){var n=e[r]
if(/^(name|fallthrough|(de|at)tach)$/.test(r))continue
if("..."==n){delete e[r]
continue}for(var i=v(r.split(" "),oo),o=0;o<i.length;o++){var l=void 0,s=void 0
o==i.length-1?(s=i.join(" "),l=n):(s=i.slice(0,o+1).join(" "),l="...")
var a=t[s]
if(a){if(a!=l)throw new Error("Inconsistent bindings for "+s)}else t[s]=l}delete e[r]}for(var u in t)e[u]=t[u]
return e}function so(e,t,r,n){t=fo(t)
var i=t.call?t.call(e,n):t[e]
if(i===!1)return"nothing"
if("..."===i)return"multi"
if(null!=i&&r(i))return"handled"
if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return so(e,t.fallthrough,r,n)
for(var o=0;o<t.fallthrough.length;o++){var l=so(e,t.fallthrough[o],r,n)
if(l)return l}}}function ao(e){var t="string"==typeof e?e:Us[e.keyCode]
return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t}function uo(e,t,r){var n=e
return t.altKey&&"Alt"!=n&&(e="Alt-"+e),(Rl?t.metaKey:t.ctrlKey)&&"Ctrl"!=n&&(e="Ctrl-"+e),(Rl?t.ctrlKey:t.metaKey)&&"Cmd"!=n&&(e="Cmd-"+e),!r&&t.shiftKey&&"Shift"!=n&&(e="Shift-"+e),e}function co(e,t){if(Ml&&34==e.keyCode&&e.char)return!1
var r=Us[e.keyCode]
return null!=r&&!e.altGraphKey&&(3==e.keyCode&&e.code&&(r=e.code),uo(r,e,t))}function fo(e){return"string"==typeof e?js[e]:e}function ho(e,t){for(var r=e.doc.sel.ranges,n=[],i=0;i<r.length;i++){for(var o=t(r[i]);n.length&&P(o.from,g(n).to)<=0;){var l=n.pop()
if(P(l.from,o.from)<0){o.from=l.from
break}}n.push(o)}pn(e,function(){for(var t=n.length-1;t>=0;t--)Ei(e.doc,"",n[t].from,n[t].to,"+delete")
Yr(e)})}function po(e,t,r){var n=k(e.text,t+r,r)
return n<0||n>e.text.length?null:n}function go(e,t,r){var n=po(e,t.ch,r)
return null==n?null:new z(t.line,n,r<0?"after":"before")}function vo(e,t,r,n,i){if(e){var o=ke(r,t.doc.direction)
if(o){var l,s=i<0?g(o):o[0],a=i<0==(1==s.level),u=a?"after":"before"
if(s.level>0||"rtl"==t.doc.direction){var c=_t(t,r)
l=i<0?r.text.length-1:0
var f=qt(t,c,l).top
l=L(function(e){return qt(t,c,e).top==f},i<0==(1==s.level)?s.from:s.to-1,l),"before"==u&&(l=po(r,l,1))}else l=i<0?s.to:s.from
return new z(n,l,u)}}return new z(n,i<0?r.text.length:0,i<0?"before":"after")}function mo(e,t,r,n){var i=ke(t,e.doc.direction)
if(!i)return go(t,r,n)
r.ch>=t.text.length?(r.ch=t.text.length,r.sticky="before"):r.ch<=0&&(r.ch=0,r.sticky="after")
var o=Se(i,r.ch,r.sticky),l=i[o]
if("ltr"==e.doc.direction&&l.level%2==0&&(n>0?l.to>r.ch:l.from<r.ch))return go(t,r,n)
var s,a=function(e,r){return po(t,e instanceof z?e.ch:e,r)},u=function(r){return e.options.lineWrapping?(s=s||_t(e,t),pr(e,t,s,r)):{begin:0,end:t.text.length}},c=u("before"==r.sticky?a(r,-1):r.ch)
if("rtl"==e.doc.direction||1==l.level){var f=1==l.level==n<0,d=a(r,f?1:-1)
if(null!=d&&(f?d<=l.to&&d<=c.end:d>=l.from&&d>=c.begin)){var h=f?"before":"after"
return new z(r.line,d,h)}}var p=function(e,t,n){for(var o=function(e,t){return t?new z(r.line,a(e,1),"before"):new z(r.line,e,"after")};e>=0&&e<i.length;e+=t){var l=i[e],s=t>0==(1!=l.level),u=s?n.begin:a(n.end,-1)
if(l.from<=u&&u<l.to)return o(u,s)
if(u=s?l.from:a(l.to,-1),n.begin<=u&&u<n.end)return o(u,s)}},g=p(o+n,n,c)
if(g)return g
var v=n>0?c.end:a(c.begin,-1)
return null==v||n>0&&v==t.text.length||!(g=p(n>0?0:i.length-1,n,u(v)))?null:g}function yo(e,t){var r=T(e.doc,t),n=de(r)
return n!=r&&(t=D(n)),vo(!0,e,n,t,1)}function bo(e,t){var r=T(e.doc,t),n=he(r)
return n!=r&&(t=D(n)),vo(!0,e,r,t,-1)}function wo(e,t){var r=yo(e,t.line),n=T(e.doc,r.line),i=ke(n,e.doc.direction)
if(!i||0==i[0].level){var o=Math.max(0,n.text.search(/\S/)),l=t.line==r.line&&t.ch<=o&&t.ch
return z(r.line,l?0:o,r.sticky)}return r}function xo(e,t,r){if("string"==typeof t&&(t=Xs[t],!t))return!1
e.display.input.ensurePolled()
var n=e.display.shift,i=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),r&&(e.display.shift=!1),i=t(e)!=Xl}finally{e.display.shift=n,e.state.suppressEdits=!1}return i}function Co(e,t,r){for(var n=0;n<e.state.keyMaps.length;n++){var i=so(t,e.state.keyMaps[n],r,e)
if(i)return i}return e.options.extraKeys&&so(t,e.options.extraKeys,r,e)||so(t,e.options.keyMap,r,e)}function So(e,t,r,n){var i=e.state.keySeq
if(i){if(ao(t))return"handled"
if(/\'$/.test(t)?e.state.keySeq=null:Ys.set(50,function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset())}),ko(e,i+" "+t,r,n))return!0}return ko(e,t,r,n)}function ko(e,t,r,n){var i=Co(e,t,n)
return"multi"==i&&(e.state.keySeq=t),"handled"==i&&xt(e,"keyHandled",e,t,r),"handled"!=i&&"multi"!=i||(We(r),Wr(e)),!!i}function Lo(e,t){var r=co(t,!0)
return!!r&&(t.shiftKey&&!e.state.keySeq?So(e,"Shift-"+r,t,function(t){return xo(e,t,!0)})||So(e,r,t,function(t){if("string"==typeof t?/^go[A-Z]/.test(t):t.motion)return xo(e,t)}):So(e,r,t,function(t){return xo(e,t)}))}function Mo(e,t,r){return So(e,"'"+r+"'",t,function(t){return xo(e,t,!0)})}function To(e){var t=this
if(t.curOp.focus=l(),!Ne(t,e)){xl&&Cl<11&&27==e.keyCode&&(e.returnValue=!1)
var r=e.keyCode
t.display.shift=16==r||e.shiftKey
var n=Lo(t,e)
Ml&&(_s=n?r:null,!n&&88==r&&!as&&(Hl?e.metaKey:e.ctrlKey)&&t.replaceSelection("",null,"cut")),18!=r||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||No(t)}}function No(e){function t(e){18!=e.keyCode&&e.altKey||(Bl(r,"CodeMirror-crosshair"),Me(document,"keyup",t),Me(document,"mouseover",t))}var r=e.display.lineDiv
s(r,"CodeMirror-crosshair"),is(document,"keyup",t),is(document,"mouseover",t)}function Oo(e){16==e.keyCode&&(this.doc.sel.shift=!1),Ne(this,e)}function Ao(e){var t=this
if(!(Pt(t.display,e)||Ne(t,e)||e.ctrlKey&&!e.altKey||Hl&&e.metaKey)){var r=e.keyCode,n=e.charCode
if(Ml&&r==_s)return _s=null,void We(e)
if(!Ml||e.which&&!(e.which<10)||!Lo(t,e)){var i=String.fromCharCode(null==n?r:n)
"\b"!=i&&(Mo(t,e,i)||t.display.input.onKeyPress(e))}}}function Do(e,t){var r=+new Date
return Js&&Js.compare(r,e,t)?(Zs=Js=null,"triple"):Zs&&Zs.compare(r,e,t)?(Js=new $s(r,e,t),Zs=null,"double"):(Zs=new $s(r,e,t),Js=null,"single")}function Wo(e){var t=this,r=t.display
if(!(Ne(t,e)||r.activeTouch&&r.input.supportsTouch())){if(r.input.ensurePolled(),r.shift=e.shiftKey,Pt(r,e))return void(Sl||(r.scroller.draggable=!1,setTimeout(function(){return r.scroller.draggable=!0},100)))
if(!Uo(t,e)){var n=Lr(t,e),i=Ee(e),o=n?Do(n,i):"single"
window.focus(),1==i&&t.state.selectingText&&t.state.selectingText(e),n&&Ho(t,i,n,o,e)||(1==i?n?zo(t,n,o,e):Pe(e)==r.scroller&&We(e):2==i?(n&&gi(t.doc,n),setTimeout(function(){return r.input.focus()},20)):3==i&&(Il?Go(t,e):Fr(t)))}}}function Ho(e,t,r,n,i){var o="Click"
return"double"==n?o="Double"+o:"triple"==n&&(o="Triple"+o),o=(1==t?"Left":2==t?"Middle":"Right")+o,So(e,uo(o,i),i,function(t){if("string"==typeof t&&(t=Xs[t]),!t)return!1
var n=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),n=t(e,r)!=Xl}finally{e.state.suppressEdits=!1}return n})}function Fo(e,t,r){var n=e.getOption("configureMouse"),i=n?n(e,t,r):{}
if(null==i.unit){var o=Fl?r.shiftKey&&r.metaKey:r.altKey
i.unit=o?"rectangle":"single"==t?"char":"double"==t?"word":"line"}return(null==i.extend||e.doc.extend)&&(i.extend=e.doc.extend||r.shiftKey),null==i.addNew&&(i.addNew=Hl?r.metaKey:r.ctrlKey),null==i.moveOnDrag&&(i.moveOnDrag=!(Hl?r.altKey:r.ctrlKey)),i}function zo(e,t,r,n){xl?setTimeout(u(Hr,e),0):e.curOp.focus=l()
var i,o=Fo(e,r,n),s=e.doc.sel
e.options.dragDrop&&os&&!e.isReadOnly()&&"single"==r&&(i=s.contains(t))>-1&&(P((i=s.ranges[i]).from(),t)<0||t.xRel>0)&&(P(i.to(),t)>0||t.xRel<0)?Po(e,n,t,o):Ro(e,n,t,o)}function Po(e,t,r,n){var i=e.display,o=!1,l=gn(e,function(t){Sl&&(i.scroller.draggable=!1),e.state.draggingText=!1,Me(i.wrapper.ownerDocument,"mouseup",l),Me(i.wrapper.ownerDocument,"mousemove",s),Me(i.scroller,"dragstart",a),Me(i.scroller,"drop",l),o||(We(t),n.addNew||gi(e.doc,r,null,null,n.extend),Sl||xl&&9==Cl?setTimeout(function(){i.wrapper.ownerDocument.body.focus(),i.input.focus()},20):i.input.focus())}),s=function(e){o=o||Math.abs(t.clientX-e.clientX)+Math.abs(t.clientY-e.clientY)>=10},a=function(){return o=!0}
Sl&&(i.scroller.draggable=!0),e.state.draggingText=l,l.copy=!n.moveOnDrag,i.scroller.dragDrop&&i.scroller.dragDrop(),is(i.wrapper.ownerDocument,"mouseup",l),is(i.wrapper.ownerDocument,"mousemove",s),is(i.scroller,"dragstart",a),is(i.scroller,"drop",l),Fr(e),setTimeout(function(){return i.input.focus()},20)}function Eo(e,t,r){if("char"==r)return new Ws(t,t)
if("word"==r)return e.findWordAt(t)
if("line"==r)return new Ws(z(t.line,0),G(e.doc,z(t.line+1,0)))
var n=r(e,t)
return new Ws(n.from,n.to)}function Ro(e,t,r,n){function i(t){if(0!=P(m,t))if(m=t,"rectangle"==n.unit){for(var i=[],o=e.options.tabSize,l=f(T(u,r.line).text,r.ch,o),s=f(T(u,t.line).text,t.ch,o),a=Math.min(l,s),g=Math.max(l,s),v=Math.min(r.line,t.line),y=Math.min(e.lastLine(),Math.max(r.line,t.line));v<=y;v++){var b=T(u,v).text,w=h(b,a,o)
a==g?i.push(new Ws(z(v,w),z(v,w))):b.length>w&&i.push(new Ws(z(v,w),z(v,h(b,g,o))))}i.length||i.push(new Ws(r,r)),xi(u,Bn(p.ranges.slice(0,d).concat(i),d),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t)}else{var x,C=c,S=Eo(e,t,n.unit),k=C.anchor
P(S.anchor,k)>0?(x=S.head,k=B(C.from(),S.anchor)):(x=S.anchor,k=I(C.to(),S.head))
var L=p.ranges.slice(0)
L[d]=Io(e,new Ws(G(u,k),x)),xi(u,Bn(L,d),_l)}}function o(t){var r=++b,s=Lr(e,t,!0,"rectangle"==n.unit)
if(s)if(0!=P(s,m)){e.curOp.focus=l(),i(s)
var c=Ir(a,u);(s.line>=c.to||s.line<c.from)&&setTimeout(gn(e,function(){b==r&&o(t)}),150)}else{var f=t.clientY<y.top?-20:t.clientY>y.bottom?20:0
f&&setTimeout(gn(e,function(){b==r&&(a.scroller.scrollTop+=f,o(t))}),50)}}function s(t){e.state.selectingText=!1,b=1/0,We(t),a.input.focus(),Me(a.wrapper.ownerDocument,"mousemove",w),Me(a.wrapper.ownerDocument,"mouseup",x),u.history.lastSelOrigin=null}var a=e.display,u=e.doc
We(t)
var c,d,p=u.sel,g=p.ranges
if(n.addNew&&!n.extend?(d=u.sel.contains(r),c=d>-1?g[d]:new Ws(r,r)):(c=u.sel.primary(),d=u.sel.primIndex),"rectangle"==n.unit)n.addNew||(c=new Ws(r,r)),r=Lr(e,t,!0,!0),d=-1
else{var v=Eo(e,r,n.unit)
c=n.extend?pi(c,v.anchor,v.head,n.extend):v}n.addNew?d==-1?(d=g.length,xi(u,Bn(g.concat([c]),d),{scroll:!1,origin:"*mouse"})):g.length>1&&g[d].empty()&&"char"==n.unit&&!n.extend?(xi(u,Bn(g.slice(0,d).concat(g.slice(d+1)),0),{scroll:!1,origin:"*mouse"}),p=u.sel):mi(u,d,c,_l):(d=0,xi(u,new Ds([c],0),_l),p=u.sel)
var m=r,y=a.wrapper.getBoundingClientRect(),b=0,w=gn(e,function(e){0!==e.buttons&&Ee(e)?o(e):s(e)}),x=gn(e,s)
e.state.selectingText=x,is(a.wrapper.ownerDocument,"mousemove",w),is(a.wrapper.ownerDocument,"mouseup",x)}function Io(e,t){var r=t.anchor,n=t.head,i=T(e.doc,r.line)
if(0==P(r,n)&&r.sticky==n.sticky)return t
var o=ke(i)
if(!o)return t
var l=Se(o,r.ch,r.sticky),s=o[l]
if(s.from!=r.ch&&s.to!=r.ch)return t
var a=l+(s.from==r.ch==(1!=s.level)?0:1)
if(0==a||a==o.length)return t
var u
if(n.line!=r.line)u=(n.line-r.line)*("ltr"==e.doc.direction?1:-1)>0
else{var c=Se(o,n.ch,n.sticky),f=c-l||(n.ch-r.ch)*(1==s.level?-1:1)
u=c==a-1||c==a?f<0:f>0}var d=o[a+(u?-1:0)],h=u==(1==d.level),p=h?d.from:d.to,g=h?"after":"before"
return r.ch==p&&r.sticky==g?t:new Ws(new z(r.line,p,g),n)}function Bo(e,t,r,n){var i,o
if(t.touches)i=t.touches[0].clientX,o=t.touches[0].clientY
else try{i=t.clientX,o=t.clientY}catch(e){return!1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1
n&&We(t)
var l=e.display,s=l.lineDiv.getBoundingClientRect()
if(o>s.bottom||!Ae(e,r))return Fe(t)
o-=s.top-l.viewOffset
for(var a=0;a<e.options.gutters.length;++a){var u=l.gutters.childNodes[a]
if(u&&u.getBoundingClientRect().right>=i){var c=W(e.doc,o),f=e.options.gutters[a]
return Te(e,r,e,c,f,t),Fe(t)}}}function Uo(e,t){return Bo(e,t,"gutterClick",!0)}function Go(e,t){Pt(e.display,t)||Vo(e,t)||Ne(e,t,"contextmenu")||e.display.input.onContextMenu(t)}function Vo(e,t){return!!Ae(e,"gutterContextMenu")&&Bo(e,t,"gutterContextMenu",!1)}function Ko(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),rr(e)}function jo(e){function t(t,n,i,o){e.defaults[t]=n,i&&(r[t]=o?function(e,t,r){r!=Qs&&i(e,t,r)}:i)}var r=e.optionHandlers
e.defineOption=t,e.Init=Qs,t("value","",function(e,t){return e.setValue(t)},!0),t("mode",null,function(e,t){e.doc.modeOption=t,Yn(e)},!0),t("indentUnit",2,Yn,!0),t("indentWithTabs",!1),t("smartIndent",!0),t("tabSize",4,function(e){_n(e),rr(e),yn(e)},!0),t("lineSeparator",null,function(e,t){if(e.doc.lineSep=t,t){var r=[],n=e.doc.first
e.doc.iter(function(e){for(var i=0;;){var o=e.text.indexOf(t,i)
if(o==-1)break
i=o+t.length,r.push(z(n,o))}n++})
for(var i=r.length-1;i>=0;i--)Ei(e.doc,t,r[i],z(r[i].line,r[i].ch+t.length))}}),t("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,function(e,t,r){e.state.specialChars=new RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),r!=Qs&&e.refresh()}),t("specialCharPlaceholder",ct,function(e){return e.refresh()},!0),t("electricChars",!0),t("inputStyle",Wl?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),t("spellcheck",!1,function(e,t){return e.getInputField().spellcheck=t},!0),t("rtlMoveVisually",!zl),t("wholeLineUpdateBefore",!0),t("theme","default",function(e){Ko(e),Xo(e)},!0),t("keyMap","default",function(e,t,r){var n=fo(t),i=r!=Qs&&fo(r)
i&&i.detach&&i.detach(e,n),n.attach&&n.attach(e,i||null)}),t("extraKeys",null),t("configureMouse",null),t("lineWrapping",!1,_o,!0),t("gutters",[],function(e){Pn(e.options),Xo(e)},!0),t("fixedGutter",!0,function(e,t){e.display.gutters.style.left=t?Cr(e.display)+"px":"0",e.refresh()},!0),t("coverGutterNextToScrollbar",!1,function(e){return rn(e)},!0),t("scrollbarStyle","native",function(e){on(e),rn(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)},!0),t("lineNumbers",!1,function(e){Pn(e.options),Xo(e)},!0),t("firstLineNumber",1,Xo,!0),t("lineNumberFormatter",function(e){return e},Xo,!0),t("showCursorWhenSelecting",!1,Tr,!0),t("resetSelectionOnContextMenu",!0),t("lineWiseCopyCut",!0),t("pasteLinesPerSelection",!0),t("readOnly",!1,function(e,t){"nocursor"==t&&(Pr(e),e.display.input.blur()),e.display.input.readOnlyChanged(t)}),t("disableInput",!1,function(e,t){t||e.display.input.reset()},!0),t("dragDrop",!0,Yo),t("allowDropFileTypes",null),t("cursorBlinkRate",530),t("cursorScrollMargin",0),t("cursorHeight",1,Tr,!0),t("singleCursorHeightPerLine",!0,Tr,!0),t("workTime",100),t("workDelay",100),t("flattenSpans",!0,_n,!0),t("addModeClass",!1,_n,!0),t("pollInterval",100),t("undoDepth",200,function(e,t){return e.doc.history.undoDepth=t}),t("historyEventDelay",1250),t("viewportMargin",10,function(e){return e.refresh()},!0),t("maxHighlightLength",1e4,_n,!0),t("moveInputWithCursor",!0,function(e,t){t||e.display.input.resetPosition()}),t("tabindex",null,function(e,t){return e.display.input.getField().tabIndex=t||""}),t("autofocus",null),t("direction","ltr",function(e,t){return e.doc.setDirection(t)},!0)}function Xo(e){zn(e),yn(e),Br(e)}function Yo(e,t,r){var n=r&&r!=Qs
if(!t!=!n){var i=e.display.dragFunctions,o=t?is:Me
o(e.display.scroller,"dragstart",i.start),o(e.display.scroller,"dragenter",i.enter),o(e.display.scroller,"dragover",i.over),o(e.display.scroller,"dragleave",i.leave),o(e.display.scroller,"drop",i.drop)}}function _o(e){e.options.lineWrapping?(s(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(Bl(e.display.wrapper,"CodeMirror-wrap"),xe(e)),kr(e),yn(e),rr(e),setTimeout(function(){return rn(e)},100)}function qo(e,t){var r=this
if(!(this instanceof qo))return new qo(e,t)
this.options=t=t?c(t):{},c(ea,t,!1),Pn(t)
var n=t.value
"string"==typeof n?n=new Rs(n,t.mode,null,t.lineSeparator,t.direction):t.mode&&(n.modeOption=t.mode),this.doc=n
var i=new qo.inputStyles[t.inputStyle](this),o=this.display=new M(e,n,i)
o.wrapper.CodeMirror=this,zn(this),Ko(this),t.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),on(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,selectingText:!1,draggingText:!1,highlight:new Gl,keySeq:null,specialChars:null},t.autofocus&&!Wl&&o.input.focus(),xl&&Cl<11&&setTimeout(function(){return r.display.input.reset(!0)},20),$o(this),ro(),ln(this),this.curOp.forceUpdate=!0,Jn(this,n),t.autofocus&&!Wl||this.hasFocus()?setTimeout(u(zr,this),20):Pr(this)
for(var l in ta)ta.hasOwnProperty(l)&&ta[l](r,t[l],Qs)
Ur(this),t.finishInit&&t.finishInit(this)
for(var s=0;s<ra.length;++s)ra[s](r)
sn(this),Sl&&t.lineWrapping&&"optimizelegibility"==getComputedStyle(o.lineDiv).textRendering&&(o.lineDiv.style.textRendering="auto")}function $o(e){function t(){i.activeTouch&&(o=setTimeout(function(){return i.activeTouch=null},1e3),l=i.activeTouch,l.end=+new Date)}function r(e){if(1!=e.touches.length)return!1
var t=e.touches[0]
return t.radiusX<=1&&t.radiusY<=1}function n(e,t){if(null==t.left)return!0
var r=t.left-e.left,n=t.top-e.top
return r*r+n*n>400}var i=e.display
is(i.scroller,"mousedown",gn(e,Wo)),xl&&Cl<11?is(i.scroller,"dblclick",gn(e,function(t){if(!Ne(e,t)){var r=Lr(e,t)
if(r&&!Uo(e,t)&&!Pt(e.display,t)){We(t)
var n=e.findWordAt(r)
gi(e.doc,n.anchor,n.head)}}})):is(i.scroller,"dblclick",function(t){return Ne(e,t)||We(t)}),Il||is(i.scroller,"contextmenu",function(t){return Go(e,t)})
var o,l={end:0}
is(i.scroller,"touchstart",function(t){if(!Ne(e,t)&&!r(t)&&!Uo(e,t)){i.input.ensurePolled(),clearTimeout(o)
var n=+new Date
i.activeTouch={start:n,moved:!1,prev:n-l.end<=300?l:null},1==t.touches.length&&(i.activeTouch.left=t.touches[0].pageX,i.activeTouch.top=t.touches[0].pageY)}}),is(i.scroller,"touchmove",function(){i.activeTouch&&(i.activeTouch.moved=!0)}),is(i.scroller,"touchend",function(r){var o=i.activeTouch
if(o&&!Pt(i,r)&&null!=o.left&&!o.moved&&new Date-o.start<300){var l,s=e.coordsChar(i.activeTouch,"page")
l=!o.prev||n(o,o.prev)?new Ws(s,s):!o.prev.prev||n(o,o.prev.prev)?e.findWordAt(s):new Ws(z(s.line,0),G(e.doc,z(s.line+1,0))),e.setSelection(l.anchor,l.head),e.focus(),We(r)}t()}),is(i.scroller,"touchcancel",t),is(i.scroller,"scroll",function(){i.scroller.clientHeight&&(Jr(e,i.scroller.scrollTop),en(e,i.scroller.scrollLeft,!0),Te(e,"scroll",e))}),is(i.scroller,"mousewheel",function(t){return In(e,t)}),is(i.scroller,"DOMMouseScroll",function(t){return In(e,t)}),is(i.wrapper,"scroll",function(){return i.wrapper.scrollTop=i.wrapper.scrollLeft=0}),i.dragFunctions={enter:function(t){Ne(e,t)||ze(t)},over:function(t){Ne(e,t)||(Qi(e,t),ze(t))},start:function(t){return Ji(e,t)},drop:gn(e,Zi),leave:function(t){Ne(e,t)||eo(e)}}
var s=i.input.getField()
is(s,"keyup",function(t){return Oo.call(e,t)}),is(s,"keydown",gn(e,To)),is(s,"keypress",gn(e,Ao)),is(s,"focus",function(t){return zr(e,t)}),is(s,"blur",function(t){return Pr(e,t)})}function Zo(e,t,r,n){var i,o=e.doc
null==r&&(r="add"),"smart"==r&&(o.mode.indent?i=Ze(e,t).state:r="prev")
var l=e.options.tabSize,s=T(o,t),a=f(s.text,null,l)
s.stateAfter&&(s.stateAfter=null)
var u,c=s.text.match(/^\s*/)[0]
if(n||/\S/.test(s.text)){if("smart"==r&&(u=o.mode.indent(i,s.text.slice(c.length),s.text),u==Xl||u>150)){if(!n)return
r="prev"}}else u=0,r="not"
"prev"==r?u=t>o.first?f(T(o,t-1).text,null,l):0:"add"==r?u=a+e.options.indentUnit:"subtract"==r?u=a-e.options.indentUnit:"number"==typeof r&&(u=a+r),u=Math.max(0,u)
var d="",h=0
if(e.options.indentWithTabs)for(var g=Math.floor(u/l);g;--g)h+=l,d+="\t"
if(h<u&&(d+=p(u-h)),d!=c)return Ei(o,d,z(t,0),z(t,c.length),"+input"),s.stateAfter=null,!0
for(var v=0;v<o.sel.ranges.length;v++){var m=o.sel.ranges[v]
if(m.head.line==t&&m.head.ch<c.length){var y=z(t,c.length)
mi(o,v,new Ws(y,y))
break}}}function Jo(e){na=e}function Qo(e,t,r,n,i){var o=e.doc
e.display.shift=!1,n||(n=o.sel)
var l=e.state.pasteIncoming||"paste"==i,s=ls(t),a=null
if(l&&n.ranges.length>1)if(na&&na.text.join("\n")==t){if(n.ranges.length%na.text.length==0){a=[]
for(var u=0;u<na.text.length;u++)a.push(o.splitLines(na.text[u]))}}else s.length==n.ranges.length&&e.options.pasteLinesPerSelection&&(a=v(s,function(e){return[e]}))
for(var c,f=n.ranges.length-1;f>=0;f--){var d=n.ranges[f],h=d.from(),p=d.to()
d.empty()&&(r&&r>0?h=z(h.line,h.ch-r):e.state.overwrite&&!l?p=z(p.line,Math.min(T(o,p.line).text.length,p.ch+g(s).length)):na&&na.lineWise&&na.text.join("\n")==t&&(h=p=z(h.line,0))),c=e.curOp.updateInput
var m={from:h,to:p,text:a?a[f%a.length]:s,origin:i||(l?"paste":e.state.cutIncoming?"cut":"+input")}
Di(e.doc,m),xt(e,"inputRead",e,m)}t&&!l&&tl(e,t),Yr(e),e.curOp.updateInput=c,e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=!1}function el(e,t){var r=e.clipboardData&&e.clipboardData.getData("Text")
if(r)return e.preventDefault(),t.isReadOnly()||t.options.disableInput||pn(t,function(){return Qo(t,r,0,null,"paste")}),!0}function tl(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var r=e.doc.sel,n=r.ranges.length-1;n>=0;n--){var i=r.ranges[n]
if(!(i.head.ch>100||n&&r.ranges[n-1].head.line==i.head.line)){var o=e.getModeAt(i.head),l=!1
if(o.electricChars){for(var s=0;s<o.electricChars.length;s++)if(t.indexOf(o.electricChars.charAt(s))>-1){l=Zo(e,i.head.line,"smart")
break}}else o.electricInput&&o.electricInput.test(T(e.doc,i.head.line).text.slice(0,i.head.ch))&&(l=Zo(e,i.head.line,"smart"))
l&&xt(e,"electricInput",e,i.head.line)}}}function rl(e){for(var t=[],r=[],n=0;n<e.doc.sel.ranges.length;n++){var i=e.doc.sel.ranges[n].head.line,o={anchor:z(i,0),head:z(i+1,0)}
r.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:r}}function nl(e,t){e.setAttribute("autocorrect","off"),e.setAttribute("autocapitalize","off"),e.setAttribute("spellcheck",!!t)}function il(){var e=n("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),t=n("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;")
return Sl?e.style.width="1000px":e.setAttribute("wrap","off"),Al&&(e.style.border="1px solid black"),nl(e),t}function ol(e,t,r,n,i){function o(){var n=t.line+r
return!(n<e.first||n>=e.first+e.size)&&(t=new z(n,t.ch,t.sticky),u=T(e,n))}function l(n){var l
if(l=i?mo(e.cm,u,t,r):go(u,t,r),null==l){if(n||!o())return!1
t=vo(i,e.cm,u,t.line,r)}else t=l
return!0}var s=t,a=r,u=T(e,t.line)
if("char"==n)l()
else if("column"==n)l(!0)
else if("word"==n||"group"==n)for(var c=null,f="group"==n,d=e.cm&&e.cm.getHelper(t,"wordChars"),h=!0;!(r<0)||l(!h);h=!1){var p=u.text.charAt(t.ch)||"\n",g=x(p,d)?"w":f&&"\n"==p?"n":!f||/\s/.test(p)?null:"p"
if(!f||h||g||(g="s"),c&&c!=g){r<0&&(r=1,l(),t.sticky="after")
break}if(g&&(c=g),r>0&&!l(!h))break}var v=Ti(e,t,s,a,!0)
return E(s,v)&&(v.hitSide=!0),v}function ll(e,t,r,n){var i,o=e.doc,l=t.left
if("page"==n){var s=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight),a=Math.max(s-.5*br(e.display),3)
i=(r>0?t.bottom:t.top)+r*a}else"line"==n&&(i=r>0?t.bottom+3:t.top-3)
for(var u;u=dr(e,l,i),u.outside;){if(r<0?i<=0:i>=o.height){u.hitSide=!0
break}i+=5*r}return u}function sl(e,t){var r=Yt(e,t.line)
if(!r||r.hidden)return null
var n=T(e.doc,t.line),i=Kt(r,n,t.line),o=ke(n,e.doc.direction),l="left"
if(o){var s=Se(o,t.ch)
l=s%2?"right":"left"}var a=$t(i.map,t.ch,l)
return a.offset="right"==a.collapse?a.end:a.start,a}function al(e){for(var t=e;t;t=t.parentNode)if(/CodeMirror-gutter-wrapper/.test(t.className))return!0
return!1}function ul(e,t){return t&&(e.bad=!0),e}function cl(e,t,r,n,i){function o(e){return function(t){return t.id==e}}function l(){c&&(u+=f,d&&(u+=f),c=d=!1)}function s(e){e&&(l(),u+=e)}function a(t){if(1==t.nodeType){var r=t.getAttribute("cm-text")
if(r)return void s(r)
var u,h=t.getAttribute("cm-marker")
if(h){var p=e.findMarks(z(n,0),z(i+1,0),o(+h))
return void(p.length&&(u=p[0].find(0))&&s(N(e.doc,u.from,u.to).join(f)))}if("false"==t.getAttribute("contenteditable"))return
var g=/^(pre|div|p|li|table|br)$/i.test(t.nodeName)
if(!/^br$/i.test(t.nodeName)&&0==t.textContent.length)return
g&&l()
for(var v=0;v<t.childNodes.length;v++)a(t.childNodes[v]);/^(pre|p)$/i.test(t.nodeName)&&(d=!0),g&&(c=!0)}else 3==t.nodeType&&s(t.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(var u="",c=!1,f=e.doc.lineSeparator(),d=!1;a(t),t!=r;)t=t.nextSibling,d=!1
return u}function fl(e,t,r){var n
if(t==e.display.lineDiv){if(n=e.display.lineDiv.childNodes[r],!n)return ul(e.clipPos(z(e.display.viewTo-1)),!0)
t=null,r=0}else for(n=t;;n=n.parentNode){if(!n||n==e.display.lineDiv)return null
if(n.parentNode&&n.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i]
if(o.node==n)return dl(o,t,r)}}function dl(e,t,r){function n(t,r,n){for(var i=-1;i<(f?f.length:0);i++)for(var o=i<0?c.map:f[i],l=0;l<o.length;l+=3){var s=o[l+2]
if(s==t||s==r){var a=D(i<0?e.line:e.rest[i]),u=o[l]+n
return(n<0||s!=t)&&(u=o[l+(n?1:0)]),z(a,u)}}}var i=e.text.firstChild,l=!1
if(!t||!o(i,t))return ul(z(D(e.line),0),!0)
if(t==i&&(l=!0,t=i.childNodes[r],r=0,!t)){var s=e.rest?g(e.rest):e.line
return ul(z(D(s),s.text.length),l)}var a=3==t.nodeType?t:null,u=t
for(a||1!=t.childNodes.length||3!=t.firstChild.nodeType||(a=t.firstChild,r&&(r=a.nodeValue.length));u.parentNode!=i;)u=u.parentNode
var c=e.measure,f=c.maps,d=n(a,u,r)
if(d)return ul(d,l)
for(var h=u.nextSibling,p=a?a.nodeValue.length-r:0;h;h=h.nextSibling){if(d=n(h,h.firstChild,0))return ul(z(d.line,d.ch-p),l)
p+=h.textContent.length}for(var v=u.previousSibling,m=r;v;v=v.previousSibling){if(d=n(v,v.firstChild,-1))return ul(z(d.line,d.ch+m),l)
m+=v.textContent.length}}function hl(e,t){function r(){e.value=a.getValue()}if(t=t?c(t):{},t.value=e.value,!t.tabindex&&e.tabIndex&&(t.tabindex=e.tabIndex),!t.placeholder&&e.placeholder&&(t.placeholder=e.placeholder),null==t.autofocus){var n=l()
t.autofocus=n==e||null!=e.getAttribute("autofocus")&&n==document.body}var i
if(e.form&&(is(e.form,"submit",r),!t.leaveSubmitMethodAlone)){var o=e.form
i=o.submit
try{var s=o.submit=function(){r(),o.submit=i,o.submit(),o.submit=s}}catch(e){}}t.finishInit=function(t){t.save=r,t.getTextArea=function(){return e},t.toTextArea=function(){t.toTextArea=isNaN,r(),e.parentNode.removeChild(t.getWrapperElement()),e.style.display="",e.form&&(Me(e.form,"submit",r),"function"==typeof e.form.submit&&(e.form.submit=i))}},e.style.display="none"
var a=qo(function(t){return e.parentNode.insertBefore(t,e.nextSibling)},t)
return a}function pl(e){e.off=Me,e.on=is,e.wheelEventPixels=Rn,e.Doc=Rs,e.splitLines=ls,e.countColumn=f,e.findColumn=h,e.isWordChar=w,e.Pass=Xl,e.signal=Te,e.Line=ms,e.changeEnd=Gn,e.scrollbarModel=Ms,e.Pos=z,e.cmpPos=P,e.modes=cs,e.mimeModes=fs,e.resolveMode=Ve,e.getMode=Ke,e.modeExtensions=ds,e.extendMode=je,e.copyState=Xe,e.startState=_e,e.innerMode=Ye,e.commands=Xs,e.keyMap=js,e.keyName=co,e.isModifierKey=ao,e.lookupKey=so,e.normalizeKeyMap=lo,e.StringStream=hs,e.SharedTextMarker=Ps,e.TextMarker=zs,e.LineWidget=Hs,e.e_preventDefault=We,e.e_stopPropagation=He,e.e_stop=ze,e.addClass=s,e.contains=o,e.rmClass=Bl,e.keyNames=Us}var gl=navigator.userAgent,vl=navigator.platform,ml=/gecko\/\d/i.test(gl),yl=/MSIE \d/.test(gl),bl=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(gl),wl=/Edge\/(\d+)/.exec(gl),xl=yl||bl||wl,Cl=xl&&(yl?document.documentMode||6:+(wl||bl)[1]),Sl=!wl&&/WebKit\//.test(gl),kl=Sl&&/Qt\/\d+\.\d+/.test(gl),Ll=!wl&&/Chrome\//.test(gl),Ml=/Opera\//.test(gl),Tl=/Apple Computer/.test(navigator.vendor),Nl=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(gl),Ol=/PhantomJS/.test(gl),Al=!wl&&/AppleWebKit/.test(gl)&&/Mobile\/\w+/.test(gl),Dl=/Android/.test(gl),Wl=Al||Dl||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(gl),Hl=Al||/Mac/.test(vl),Fl=/\bCrOS\b/.test(gl),zl=/win/i.test(vl),Pl=Ml&&gl.match(/Version\/(\d*\.\d*)/)
Pl&&(Pl=Number(Pl[1])),Pl&&Pl>=15&&(Ml=!1,Sl=!0)
var El,Rl=Hl&&(kl||Ml&&(null==Pl||Pl<12.11)),Il=ml||xl&&Cl>=9,Bl=function(t,r){var n=t.className,i=e(r).exec(n)
if(i){var o=n.slice(i.index+i[0].length)
t.className=n.slice(0,i.index)+(o?i[1]+o:"")}}
El=document.createRange?function(e,t,r,n){var i=document.createRange()
return i.setEnd(n||e,r),i.setStart(e,t),i}:function(e,t,r){var n=document.body.createTextRange()
try{n.moveToElementText(e.parentNode)}catch(e){return n}return n.collapse(!0),n.moveEnd("character",r),n.moveStart("character",t),n}
var Ul=function(e){e.select()}
Al?Ul=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:xl&&(Ul=function(e){try{e.select()}catch(e){}})
var Gl=function(){this.id=null}
Gl.prototype.set=function(e,t){clearTimeout(this.id),this.id=setTimeout(t,e)}
var Vl,Kl,jl=30,Xl={toString:function(){return"CodeMirror.Pass"}},Yl={scroll:!1},_l={origin:"*mouse"},ql={origin:"+move"},$l=[""],Zl=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,Jl=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,Ql=!1,es=!1,ts=null,rs=function(){function e(e){return e<=247?r.charAt(e):1424<=e&&e<=1524?"R":1536<=e&&e<=1785?n.charAt(e-1536):1774<=e&&e<=2220?"r":8192<=e&&e<=8203?"w":8204==e?"b":"L"}function t(e,t,r){this.level=e,this.from=t,this.to=r}var r="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111",i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,o=/[stwN]/,l=/[LRr]/,s=/[Lb1n]/,a=/[1n]/
return function(r,n){var u="ltr"==n?"L":"R"
if(0==r.length||"ltr"==n&&!i.test(r))return!1
for(var c=r.length,f=[],d=0;d<c;++d)f.push(e(r.charCodeAt(d)))
for(var h=0,p=u;h<c;++h){var v=f[h]
"m"==v?f[h]=p:p=v}for(var m=0,y=u;m<c;++m){var b=f[m]
"1"==b&&"r"==y?f[m]="n":l.test(b)&&(y=b,"r"==b&&(f[m]="R"))}for(var w=1,x=f[0];w<c-1;++w){var C=f[w]
"+"==C&&"1"==x&&"1"==f[w+1]?f[w]="1":","!=C||x!=f[w+1]||"1"!=x&&"n"!=x||(f[w]=x),x=C}for(var S=0;S<c;++S){var k=f[S]
if(","==k)f[S]="N"
else if("%"==k){var L=void 0
for(L=S+1;L<c&&"%"==f[L];++L);for(var M=S&&"!"==f[S-1]||L<c&&"1"==f[L]?"1":"N",T=S;T<L;++T)f[T]=M
S=L-1}}for(var N=0,O=u;N<c;++N){var A=f[N]
"L"==O&&"1"==A?f[N]="L":l.test(A)&&(O=A)}for(var D=0;D<c;++D)if(o.test(f[D])){var W=void 0
for(W=D+1;W<c&&o.test(f[W]);++W);for(var H="L"==(D?f[D-1]:u),F="L"==(W<c?f[W]:u),z=H==F?H?"L":"R":u,P=D;P<W;++P)f[P]=z
D=W-1}for(var E,R=[],I=0;I<c;)if(s.test(f[I])){var B=I
for(++I;I<c&&s.test(f[I]);++I);R.push(new t(0,B,I))}else{var U=I,G=R.length
for(++I;I<c&&"L"!=f[I];++I);for(var V=U;V<I;)if(a.test(f[V])){U<V&&R.splice(G,0,new t(1,U,V))
var K=V
for(++V;V<I&&a.test(f[V]);++V);R.splice(G,0,new t(2,K,V)),U=V}else++V
U<I&&R.splice(G,0,new t(1,U,I))}return"ltr"==n&&(1==R[0].level&&(E=r.match(/^\s+/))&&(R[0].from=E[0].length,R.unshift(new t(0,0,E[0].length))),1==g(R).level&&(E=r.match(/\s+$/))&&(g(R).to-=E[0].length,R.push(new t(0,c-E[0].length,c)))),"rtl"==n?R.reverse():R}}(),ns=[],is=function(e,t,r){if(e.addEventListener)e.addEventListener(t,r,!1)
else if(e.attachEvent)e.attachEvent("on"+t,r)
else{var n=e._handlers||(e._handlers={})
n[t]=(n[t]||ns).concat(r)}},os=function(){if(xl&&Cl<9)return!1
var e=n("div")
return"draggable"in e||"dragDrop"in e}(),ls=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,r=[],n=e.length;t<=n;){var i=e.indexOf("\n",t)
i==-1&&(i=e.length)
var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),l=o.indexOf("\r")
l!=-1?(r.push(o.slice(0,l)),t+=l+1):(r.push(o),t=i+1)}return r}:function(e){return e.split(/\r\n?|\n/)},ss=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(e){return!1}}:function(e){var t
try{t=e.ownerDocument.selection.createRange()}catch(e){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},as=function(){var e=n("div")
return"oncopy"in e||(e.setAttribute("oncopy","return;"),"function"==typeof e.oncopy)}(),us=null,cs={},fs={},ds={},hs=function(e,t,r){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=r}
hs.prototype.eol=function(){return this.pos>=this.string.length},hs.prototype.sol=function(){return this.pos==this.lineStart},hs.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},hs.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},hs.prototype.eat=function(e){var t,r=this.string.charAt(this.pos)
if(t="string"==typeof e?r==e:r&&(e.test?e.test(r):e(r)))return++this.pos,r},hs.prototype.eatWhile=function(e){for(var t=this.pos;this.eat(e););return this.pos>t},hs.prototype.eatSpace=function(){for(var e=this,t=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++e.pos
return this.pos>t},hs.prototype.skipToEnd=function(){this.pos=this.string.length},hs.prototype.skipTo=function(e){var t=this.string.indexOf(e,this.pos)
if(t>-1)return this.pos=t,!0},hs.prototype.backUp=function(e){this.pos-=e},hs.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=f(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?f(this.string,this.lineStart,this.tabSize):0)},hs.prototype.indentation=function(){return f(this.string,null,this.tabSize)-(this.lineStart?f(this.string,this.lineStart,this.tabSize):0)},hs.prototype.match=function(e,t,r){if("string"!=typeof e){var n=this.string.slice(this.pos).match(e)
return n&&n.index>0?null:(n&&t!==!1&&(this.pos+=n[0].length),n)}var i=function(e){return r?e.toLowerCase():e},o=this.string.substr(this.pos,e.length)
if(i(o)==i(e))return t!==!1&&(this.pos+=e.length),!0},hs.prototype.current=function(){return this.string.slice(this.start,this.pos)},hs.prototype.hideFirstChars=function(e,t){this.lineStart+=e
try{return t()}finally{this.lineStart-=e}},hs.prototype.lookAhead=function(e){var t=this.lineOracle
return t&&t.lookAhead(e)},hs.prototype.baseToken=function(){var e=this.lineOracle
return e&&e.baseToken(this.pos)}
var ps=function(e,t){this.state=e,this.lookAhead=t},gs=function(e,t,r,n){this.state=t,this.doc=e,this.line=r,this.maxLookAhead=n||0,this.baseTokens=null,this.baseTokenPos=1}
gs.prototype.lookAhead=function(e){var t=this.doc.getLine(this.line+e)
return null!=t&&e>this.maxLookAhead&&(this.maxLookAhead=e),t},gs.prototype.baseToken=function(e){var t=this
if(!this.baseTokens)return null
for(;this.baseTokens[this.baseTokenPos]<=e;)t.baseTokenPos+=2
var r=this.baseTokens[this.baseTokenPos+1]
return{type:r&&r.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},gs.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},gs.fromSaved=function(e,t,r){return t instanceof ps?new gs(e,Xe(e.mode,t.state),r,t.lookAhead):new gs(e,Xe(e.mode,t),r)},gs.prototype.save=function(e){var t=e!==!1?Xe(this.doc.mode,this.state):this.state
return this.maxLookAhead>0?new ps(t,this.maxLookAhead):t}
var vs=function(e,t,r){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=t||null,this.state=r},ms=function(e,t,r){this.text=e,ne(this,t),this.height=r?r(this):1}
ms.prototype.lineNo=function(){return D(this)},De(ms)
var ys,bs={},ws={},xs=null,Cs=null,Ss={left:0,right:0,top:0,bottom:0},ks=function(e,t,r){this.cm=r
var i=this.vert=n("div",[n("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),o=this.horiz=n("div",[n("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar")
i.tabIndex=o.tabIndex=-1,e(i),e(o),is(i,"scroll",function(){i.clientHeight&&t(i.scrollTop,"vertical")}),is(o,"scroll",function(){o.clientWidth&&t(o.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,xl&&Cl<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")}
ks.prototype.update=function(e){var t=e.scrollWidth>e.clientWidth+1,r=e.scrollHeight>e.clientHeight+1,n=e.nativeBarWidth
if(r){this.vert.style.display="block",this.vert.style.bottom=t?n+"px":"0"
var i=e.viewHeight-(t?n:0)
this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0"
if(t){this.horiz.style.display="block",this.horiz.style.right=r?n+"px":"0",this.horiz.style.left=e.barLeft+"px"
var o=e.viewWidth-e.barLeft-(r?n:0)
this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+o)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0"
return!this.checkedZeroWidth&&e.clientHeight>0&&(0==n&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:r?n:0,bottom:t?n:0}},ks.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},ks.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},ks.prototype.zeroWidthHack=function(){var e=Hl&&!Nl?"12px":"18px"
this.horiz.style.height=this.vert.style.width=e,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new Gl,this.disableVert=new Gl},ks.prototype.enableZeroWidthBar=function(e,t,r){function n(){var i=e.getBoundingClientRect(),o="vert"==r?document.elementFromPoint(i.right-1,(i.top+i.bottom)/2):document.elementFromPoint((i.right+i.left)/2,i.bottom-1)
o!=e?e.style.pointerEvents="none":t.set(1e3,n)}e.style.pointerEvents="auto",t.set(1e3,n)},ks.prototype.clear=function(){var e=this.horiz.parentNode
e.removeChild(this.horiz),e.removeChild(this.vert)}
var Ls=function(){}
Ls.prototype.update=function(){return{bottom:0,right:0}},Ls.prototype.setScrollLeft=function(){},Ls.prototype.setScrollTop=function(){},Ls.prototype.clear=function(){}
var Ms={native:ks,null:Ls},Ts=0,Ns=function(e,t,r){var n=e.display
this.viewport=t,this.visible=Ir(n,e.doc,t),this.editorIsHidden=!n.wrapper.offsetWidth,this.wrapperHeight=n.wrapper.clientHeight,this.wrapperWidth=n.wrapper.clientWidth,this.oldDisplayWidth=Ut(e),this.force=r,this.dims=xr(e),this.events=[]}
Ns.prototype.signal=function(e,t){Ae(e,t)&&this.events.push(arguments)},Ns.prototype.finish=function(){for(var e=this,t=0;t<this.events.length;t++)Te.apply(null,e.events[t])}
var Os=0,As=null
xl?As=-.53:ml?As=15:Ll?As=-.7:Tl&&(As=-1/3)
var Ds=function(e,t){this.ranges=e,this.primIndex=t}
Ds.prototype.primary=function(){return this.ranges[this.primIndex]},Ds.prototype.equals=function(e){var t=this
if(e==this)return!0
if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1
for(var r=0;r<this.ranges.length;r++){var n=t.ranges[r],i=e.ranges[r]
if(!E(n.anchor,i.anchor)||!E(n.head,i.head))return!1}return!0},Ds.prototype.deepCopy=function(){for(var e=this,t=[],r=0;r<this.ranges.length;r++)t[r]=new Ws(R(e.ranges[r].anchor),R(e.ranges[r].head))
return new Ds(t,this.primIndex)},Ds.prototype.somethingSelected=function(){for(var e=this,t=0;t<this.ranges.length;t++)if(!e.ranges[t].empty())return!0
return!1},Ds.prototype.contains=function(e,t){var r=this
t||(t=e)
for(var n=0;n<this.ranges.length;n++){var i=r.ranges[n]
if(P(t,i.from())>=0&&P(e,i.to())<=0)return n}return-1}
var Ws=function(e,t){this.anchor=e,this.head=t}
Ws.prototype.from=function(){return B(this.anchor,this.head)},Ws.prototype.to=function(){return I(this.anchor,this.head)},Ws.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch},Gi.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var r=this,n=e,i=e+t;n<i;++n){var o=r.lines[n]
r.height-=o.height,st(o),xt(o,"delete")}this.lines.splice(e,t)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,t,r){var n=this
this.height+=r,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e))
for(var i=0;i<t.length;++i)t[i].parent=n},iterN:function(e,t,r){for(var n=this,i=e+t;e<i;++e)if(r(n.lines[e]))return!0}},Vi.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){var r=this
this.size-=t
for(var n=0;n<this.children.length;++n){var i=r.children[n],o=i.chunkSize()
if(e<o){var l=Math.min(t,o-e),s=i.height
if(i.removeInner(e,l),r.height-=s-i.height,o==l&&(r.children.splice(n--,1),i.parent=null),0==(t-=l))break
e=0}else e-=o}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof Gi))){var a=[]
this.collapse(a),this.children=[new Gi(a)],this.children[0].parent=this}},collapse:function(e){for(var t=this,r=0;r<this.children.length;++r)t.children[r].collapse(e)},insertInner:function(e,t,r){var n=this
this.size+=t.length,this.height+=r
for(var i=0;i<this.children.length;++i){var o=n.children[i],l=o.chunkSize()
if(e<=l){if(o.insertInner(e,t,r),o.lines&&o.lines.length>50){for(var s=o.lines.length%25+25,a=s;a<o.lines.length;){var u=new Gi(o.lines.slice(a,a+=25))
o.height-=u.height,n.children.splice(++i,0,u),u.parent=n}o.lines=o.lines.slice(0,s),n.maybeSpill()}break}e-=l}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this
do{var t=e.children.splice(e.children.length-5,5),r=new Vi(t)
if(e.parent){e.size-=r.size,e.height-=r.height
var n=d(e.parent.children,e)
e.parent.children.splice(n+1,0,r)}else{var i=new Vi(e.children)
i.parent=e,e.children=[i,r],e=i}r.parent=e.parent}while(e.children.length>10)
e.parent.maybeSpill()}},iterN:function(e,t,r){for(var n=this,i=0;i<this.children.length;++i){var o=n.children[i],l=o.chunkSize()
if(e<l){var s=Math.min(t,l-e)
if(o.iterN(e,s,r))return!0
if(0==(t-=s))break
e=0}else e-=l}}}
var Hs=function(e,t,r){var n=this
if(r)for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])
this.doc=e,this.node=t}
Hs.prototype.clear=function(){var e=this,t=this.doc.cm,r=this.line.widgets,n=this.line,i=D(n)
if(null!=i&&r){for(var o=0;o<r.length;++o)r[o]==e&&r.splice(o--,1)
r.length||(n.widgets=null)
var l=zt(this)
A(n,Math.max(0,n.height-l)),t&&(pn(t,function(){Ki(t,n,-l),bn(t,i,"widget")}),xt(t,"lineWidgetCleared",t,this,i))}},Hs.prototype.changed=function(){var e=this,t=this.height,r=this.doc.cm,n=this.line
this.height=null
var i=zt(this)-t
i&&(me(this.doc,n)||A(n,n.height+i),r&&pn(r,function(){r.curOp.forceUpdate=!0,Ki(r,n,i),xt(r,"lineWidgetChanged",r,e,D(n))}))},De(Hs)
var Fs=0,zs=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++Fs}
zs.prototype.clear=function(){var e=this
if(!this.explicitlyCleared){var t=this.doc.cm,r=t&&!t.curOp
if(r&&ln(t),Ae(this,"clear")){var n=this.find()
n&&xt(this,"clear",n.from,n.to)}for(var i=null,o=null,l=0;l<this.lines.length;++l){var s=e.lines[l],a=_(s.markedSpans,e)
t&&!e.collapsed?bn(t,D(s),"text"):t&&(null!=a.to&&(o=D(s)),null!=a.from&&(i=D(s))),s.markedSpans=q(s.markedSpans,a),null==a.from&&e.collapsed&&!me(e.doc,s)&&t&&A(s,br(t.display))}if(t&&this.collapsed&&!t.options.lineWrapping)for(var u=0;u<this.lines.length;++u){var c=de(e.lines[u]),f=we(c)
f>t.display.maxLineLength&&(t.display.maxLine=c,t.display.maxLineLength=f,t.display.maxLineChanged=!0)}null!=i&&t&&this.collapsed&&yn(t,i,o+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,t&&ki(t.doc)),t&&xt(t,"markerCleared",t,this,i,o),r&&sn(t),this.parent&&this.parent.clear()}},zs.prototype.find=function(e,t){var r=this
null==e&&"bookmark"==this.type&&(e=1)
for(var n,i,o=0;o<this.lines.length;++o){var l=r.lines[o],s=_(l.markedSpans,r)
if(null!=s.from&&(n=z(t?l:D(l),s.from),e==-1))return n
if(null!=s.to&&(i=z(t?l:D(l),s.to),1==e))return i}return n&&{from:n,to:i}},zs.prototype.changed=function(){var e=this,t=this.find(-1,!0),r=this,n=this.doc.cm
t&&n&&pn(n,function(){var i=t.line,o=D(t.line),l=Yt(n,o)
if(l&&(er(l),n.curOp.selectionChanged=n.curOp.forceUpdate=!0),n.curOp.updateMaxLine=!0,!me(r.doc,i)&&null!=r.height){var s=r.height
r.height=null
var a=zt(r)-s
a&&A(i,i.height+a)}xt(n,"markerChanged",n,e)})},zs.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp
t.maybeHiddenMarkers&&d(t.maybeHiddenMarkers,this)!=-1||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},zs.prototype.detachLine=function(e){if(this.lines.splice(d(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}},De(zs)
var Ps=function(e,t){var r=this
this.markers=e,this.primary=t
for(var n=0;n<e.length;++n)e[n].parent=r}
Ps.prototype.clear=function(){var e=this
if(!this.explicitlyCleared){this.explicitlyCleared=!0
for(var t=0;t<this.markers.length;++t)e.markers[t].clear()
xt(this,"clear")}},Ps.prototype.find=function(e,t){return this.primary.find(e,t)},De(Ps)
var Es=0,Rs=function(e,t,r,n,i){if(!(this instanceof Rs))return new Rs(e,t,r,n,i)
null==r&&(r=0),Vi.call(this,[new Gi([new ms("",null)])]),this.first=r,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=r
var o=z(r,0)
this.sel=Un(o),this.history=new ti(null),this.id=++Es,this.modeOption=t,this.lineSep=n,this.direction="rtl"==i?"rtl":"ltr",this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),$n(this,{from:o,to:o,text:e}),xi(this,Un(o),Yl)}
Rs.prototype=b(Vi.prototype,{constructor:Rs,iter:function(e,t,r){r?this.iterN(e-this.first,t-e,r):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var r=0,n=0;n<t.length;++n)r+=t[n].height
this.insertInner(e-this.first,t,r)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=O(this,this.first,this.first+this.size)
return e===!1?t:t.join(e||this.lineSeparator())},setValue:mn(function(e){var t=z(this.first,0),r=this.first+this.size-1
Di(this,{from:t,to:z(r,T(this,r).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&_r(this.cm,0,0),xi(this,Un(t),Yl)}),replaceRange:function(e,t,r,n){t=G(this,t),r=r?G(this,r):t,Ei(this,e,t,r,n)},getRange:function(e,t,r){var n=N(this,G(this,e),G(this,t))
return r===!1?n:n.join(r||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e)
return t&&t.text},getLineHandle:function(e){if(H(this,e))return T(this,e)},getLineNumber:function(e){return D(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=T(this,e)),de(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return G(this,e)},getCursor:function(e){var t,r=this.sel.primary()
return t=null==e||"head"==e?r.head:"anchor"==e?r.anchor:"end"==e||"to"==e||e===!1?r.to():r.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:mn(function(e,t,r){yi(this,G(this,"number"==typeof e?z(e,t||0):e),null,r)}),setSelection:mn(function(e,t,r){yi(this,G(this,e),G(this,t||e),r)}),extendSelection:mn(function(e,t,r){gi(this,G(this,e),t&&G(this,t),r)}),extendSelections:mn(function(e,t){vi(this,K(this,e),t)}),extendSelectionsBy:mn(function(e,t){var r=v(this.sel.ranges,e)
vi(this,K(this,r),t)}),setSelections:mn(function(e,t,r){var n=this
if(e.length){for(var i=[],o=0;o<e.length;o++)i[o]=new Ws(G(n,e[o].anchor),G(n,e[o].head))
null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),xi(this,Bn(i,t),r)}}),addSelection:mn(function(e,t,r){var n=this.sel.ranges.slice(0)
n.push(new Ws(G(this,e),G(this,t||e))),xi(this,Bn(n,n.length-1),r)}),getSelection:function(e){for(var t,r=this,n=this.sel.ranges,i=0;i<n.length;i++){var o=N(r,n[i].from(),n[i].to())
t=t?t.concat(o):o}return e===!1?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=this,r=[],n=this.sel.ranges,i=0;i<n.length;i++){var o=N(t,n[i].from(),n[i].to())
e!==!1&&(o=o.join(e||t.lineSeparator())),r[i]=o}return r},replaceSelection:function(e,t,r){for(var n=[],i=0;i<this.sel.ranges.length;i++)n[i]=e
this.replaceSelections(n,t,r||"+input")},replaceSelections:mn(function(e,t,r){for(var n=this,i=[],o=this.sel,l=0;l<o.ranges.length;l++){var s=o.ranges[l]
i[l]={from:s.from(),to:s.to(),text:n.splitLines(e[l]),origin:r}}for(var a=t&&"end"!=t&&Xn(this,i,t),u=i.length-1;u>=0;u--)Di(n,i[u])
a?wi(this,a):this.cm&&Yr(this.cm)}),undo:mn(function(){Hi(this,"undo")}),redo:mn(function(){Hi(this,"redo")}),undoSelection:mn(function(){Hi(this,"undo",!0)}),redoSelection:mn(function(){Hi(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,r=0,n=0;n<e.done.length;n++)e.done[n].ranges||++t
for(var i=0;i<e.undone.length;i++)e.undone[i].ranges||++r
return{undo:t,redo:r}},clearHistory:function(){this.history=new ti(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:hi(this.history.done),undone:hi(this.history.undone)}},setHistory:function(e){var t=this.history=new ti(this.history.maxGeneration)
t.done=hi(e.done.slice(0),null,!0),t.undone=hi(e.undone.slice(0),null,!0)},setGutterMarker:mn(function(e,t,r){return Ui(this,e,"gutter",function(e){var n=e.gutterMarkers||(e.gutterMarkers={})
return n[t]=r,!r&&C(n)&&(e.gutterMarkers=null),!0})}),clearGutter:mn(function(e){var t=this
this.iter(function(r){r.gutterMarkers&&r.gutterMarkers[e]&&Ui(t,r,"gutter",function(){return r.gutterMarkers[e]=null,C(r.gutterMarkers)&&(r.gutterMarkers=null),!0})})}),lineInfo:function(e){var t
if("number"==typeof e){if(!H(this,e))return null
if(t=e,e=T(this,e),!e)return null}else if(t=D(e),null==t)return null
return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:mn(function(t,r,n){return Ui(this,t,"gutter"==r?"gutter":"class",function(t){var i="text"==r?"textClass":"background"==r?"bgClass":"gutter"==r?"gutterClass":"wrapClass"
if(t[i]){if(e(n).test(t[i]))return!1
t[i]+=" "+n}else t[i]=n
return!0})}),removeLineClass:mn(function(t,r,n){return Ui(this,t,"gutter"==r?"gutter":"class",function(t){var i="text"==r?"textClass":"background"==r?"bgClass":"gutter"==r?"gutterClass":"wrapClass",o=t[i]
if(!o)return!1
if(null==n)t[i]=null
else{var l=o.match(e(n))
if(!l)return!1
var s=l.index+l[0].length
t[i]=o.slice(0,l.index)+(l.index&&s!=o.length?" ":"")+o.slice(s)||null}return!0})}),addLineWidget:mn(function(e,t,r){return ji(this,e,t,r)}),removeLineWidget:function(e){e.clear()},markText:function(e,t,r){return Xi(this,G(this,e),G(this,t),r,r&&r.type||"range")},setBookmark:function(e,t){var r={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents}
return e=G(this,e),Xi(this,e,e,r,"bookmark")},findMarksAt:function(e){e=G(this,e)
var t=[],r=T(this,e.line).markedSpans
if(r)for(var n=0;n<r.length;++n){var i=r[n];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(e,t,r){e=G(this,e),t=G(this,t)
var n=[],i=e.line
return this.iter(e.line,t.line+1,function(o){var l=o.markedSpans
if(l)for(var s=0;s<l.length;s++){var a=l[s]
null!=a.to&&i==e.line&&e.ch>=a.to||null==a.from&&i!=e.line||null!=a.from&&i==t.line&&a.from>=t.ch||r&&!r(a.marker)||n.push(a.marker.parent||a.marker)}++i}),n},getAllMarks:function(){var e=[]
return this.iter(function(t){var r=t.markedSpans
if(r)for(var n=0;n<r.length;++n)null!=r[n].from&&e.push(r[n].marker)}),e},posFromIndex:function(e){var t,r=this.first,n=this.lineSeparator().length
return this.iter(function(i){var o=i.text.length+n
return o>e?(t=e,!0):(e-=o,void++r)}),G(this,z(r,t))},indexFromPos:function(e){e=G(this,e)
var t=e.ch
if(e.line<this.first||e.ch<0)return 0
var r=this.lineSeparator().length
return this.iter(this.first,e.line,function(e){t+=e.text.length+r}),t},copy:function(e){var t=new Rs(O(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction)
return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={})
var t=this.first,r=this.first+this.size
null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<r&&(r=e.to)
var n=new Rs(O(this,t,r),e.mode||this.modeOption,t,this.lineSep,this.direction)
return e.sharedHist&&(n.history=this.history),(this.linked||(this.linked=[])).push({doc:n,sharedHist:e.sharedHist}),n.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],qi(n,_i(this)),n},unlinkDoc:function(e){var t=this
if(e instanceof qo&&(e=e.doc),this.linked)for(var r=0;r<this.linked.length;++r){var n=t.linked[r]
if(n.doc==e){t.linked.splice(r,1),e.unlinkDoc(t),$i(_i(t))
break}}if(e.history==this.history){var i=[e.id]
Zn(e,function(e){return i.push(e.id)},!0),e.history=new ti(null),e.history.done=hi(this.history.done,i),e.history.undone=hi(this.history.undone,i)}},iterLinkedDocs:function(e){Zn(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):ls(e)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:mn(function(e){"rtl"!=e&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(e){return e.order=null}),this.cm&&ei(this.cm))})}),Rs.prototype.eachLine=Rs.prototype.iter
for(var Is=0,Bs=!1,Us={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",127:"Delete",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},Gs=0;Gs<10;Gs++)Us[Gs+48]=Us[Gs+96]=String(Gs)
for(var Vs=65;Vs<=90;Vs++)Us[Vs]=String.fromCharCode(Vs)
for(var Ks=1;Ks<=12;Ks++)Us[Ks+111]=Us[Ks+63235]="F"+Ks
var js={}
js.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},js.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},js.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},js.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},js.default=Hl?js.macDefault:js.pcDefault
var Xs={selectAll:Oi,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),Yl)},killLine:function(e){return ho(e,function(t){if(t.empty()){var r=T(e.doc,t.head.line).text.length
return t.head.ch==r&&t.head.line<e.lastLine()?{from:t.head,to:z(t.head.line+1,0)}:{from:t.head,to:z(t.head.line,r)}}return{from:t.from(),to:t.to()}})},deleteLine:function(e){return ho(e,function(t){return{from:z(t.from().line,0),to:G(e.doc,z(t.to().line+1,0))}})},delLineLeft:function(e){return ho(e,function(e){return{from:z(e.from().line,0),to:e.from()}})},delWrappedLineLeft:function(e){return ho(e,function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:0,top:r},"div")
return{from:n,to:t.from()}})},delWrappedLineRight:function(e){return ho(e,function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")
return{from:t.from(),to:n}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(z(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(z(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(t){return yo(e,t.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(t){return wo(e,t.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(t){return bo(e,t.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(t){var r=e.cursorCoords(t.head,"div").top+5
return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")},ql)},goLineLeft:function(e){return e.extendSelectionsBy(function(t){var r=e.cursorCoords(t.head,"div").top+5
return e.coordsChar({left:0,top:r},"div")},ql)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(t){var r=e.cursorCoords(t.head,"div").top+5,n=e.coordsChar({left:0,top:r},"div")
return n.ch<e.getLine(n.line).search(/\S/)?wo(e,t.head):n},ql)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"char")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],r=e.listSelections(),n=e.options.tabSize,i=0;i<r.length;i++){var o=r[i].from(),l=f(e.getLine(o.line),o.ch,n)
t.push(p(n-l%n))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return pn(e,function(){for(var t=e.listSelections(),r=[],n=0;n<t.length;n++)if(t[n].empty()){var i=t[n].head,o=T(e.doc,i.line).text
if(o)if(i.ch==o.length&&(i=new z(i.line,i.ch-1)),i.ch>0)i=new z(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),z(i.line,i.ch-2),i,"+transpose")
else if(i.line>e.doc.first){var l=T(e.doc,i.line-1).text
l&&(i=new z(i.line,1),e.replaceRange(o.charAt(0)+e.doc.lineSeparator()+l.charAt(l.length-1),z(i.line-1,l.length-1),i,"+transpose"))}r.push(new Ws(i,i))}e.setSelections(r)})},newlineAndIndent:function(e){return pn(e,function(){for(var t=e.listSelections(),r=t.length-1;r>=0;r--)e.replaceRange(e.doc.lineSeparator(),t[r].anchor,t[r].head,"+input")
t=e.listSelections()
for(var n=0;n<t.length;n++)e.indentLine(t[n].from().line,null,!0)
Yr(e)})},openLine:function(e){return e.replaceSelection("\n","start")},toggleOverwrite:function(e){return e.toggleOverwrite()}},Ys=new Gl,_s=null,qs=400,$s=function(e,t,r){this.time=e,this.pos=t,this.button=r}
$s.prototype.compare=function(e,t,r){return this.time+qs>e&&0==P(t,this.pos)&&r==this.button}
var Zs,Js,Qs={toString:function(){return"CodeMirror.Init"}},ea={},ta={}
qo.defaults=ea,qo.optionHandlers=ta
var ra=[]
qo.defineInitHook=function(e){return ra.push(e)}
var na=null,ia=function(e){var t=e.optionHandlers,r=e.helpers={}
e.prototype={constructor:e,focus:function(){window.focus(),this.display.input.focus()},setOption:function(e,r){var n=this.options,i=n[e]
n[e]==r&&"mode"!=e||(n[e]=r,t.hasOwnProperty(e)&&gn(this,t[e])(this,r,i),Te(this,"optionChange",this,e))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](fo(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,r=0;r<t.length;++r)if(t[r]==e||t[r].name==e)return t.splice(r,1),!0},addOverlay:vn(function(t,r){var n=t.token?t:e.getMode(this.options,t)
if(n.startState)throw new Error("Overlays may not be stateful.")
m(this.state.overlays,{mode:n,modeSpec:t,opaque:r&&r.opaque,priority:r&&r.priority||0},function(e){return e.priority}),this.state.modeGen++,yn(this)}),removeOverlay:vn(function(e){for(var t=this,r=this.state.overlays,n=0;n<r.length;++n){var i=r[n].modeSpec
if(i==e||"string"==typeof e&&i.name==e)return r.splice(n,1),t.state.modeGen++,void yn(t)}}),indentLine:vn(function(e,t,r){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),H(this.doc,e)&&Zo(this,e,t,r)}),indentSelection:vn(function(e){for(var t=this,r=this.doc.sel.ranges,n=-1,i=0;i<r.length;i++){var o=r[i]
if(o.empty())o.head.line>n&&(Zo(t,o.head.line,e,!0),n=o.head.line,i==t.doc.sel.primIndex&&Yr(t))
else{var l=o.from(),s=o.to(),a=Math.max(n,l.line)
n=Math.min(t.lastLine(),s.line-(s.ch?0:1))+1
for(var u=a;u<n;++u)Zo(t,u,e)
var c=t.doc.sel.ranges
0==l.ch&&r.length==c.length&&c[i].from().ch>0&&mi(t.doc,i,new Ws(l,c[i].to()),Yl)}}}),getTokenAt:function(e,t){return tt(this,e,t)},getLineTokens:function(e,t){return tt(this,z(e),t,!0)},getTokenTypeAt:function(e){e=G(this.doc,e)
var t,r=$e(this,T(this.doc,e.line)),n=0,i=(r.length-1)/2,o=e.ch
if(0==o)t=r[2]
else for(;;){var l=n+i>>1
if((l?r[2*l-1]:0)>=o)i=l
else{if(!(r[2*l+1]<o)){t=r[2*l+2]
break}n=l+1}}var s=t?t.indexOf("overlay "):-1
return s<0?t:0==s?null:t.slice(0,s-1)},getModeAt:function(t){var r=this.doc.mode
return r.innerMode?e.innerMode(r,this.getTokenAt(t).state).mode:r},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var n=this,i=[]
if(!r.hasOwnProperty(t))return i
var o=r[t],l=this.getModeAt(e)
if("string"==typeof l[t])o[l[t]]&&i.push(o[l[t]])
else if(l[t])for(var s=0;s<l[t].length;s++){var a=o[l[t][s]]
a&&i.push(a)}else l.helperType&&o[l.helperType]?i.push(o[l.helperType]):o[l.name]&&i.push(o[l.name])
for(var u=0;u<o._global.length;u++){var c=o._global[u]
c.pred(l,n)&&d(i,c.val)==-1&&i.push(c.val)}return i},getStateAfter:function(e,t){var r=this.doc
return e=U(r,null==e?r.first+r.size-1:e),Ze(this,e+1,t).state},cursorCoords:function(e,t){var r,n=this.doc.sel.primary()
return r=null==e?n.head:"object"==typeof e?G(this.doc,e):e?n.from():n.to(),ur(this,r,t||"page")},charCoords:function(e,t){return ar(this,G(this.doc,e),t||"page")},coordsChar:function(e,t){return e=sr(this,e,t||"page"),dr(this,e.left,e.top)},lineAtHeight:function(e,t){return e=sr(this,{top:e,left:0},t||"page").top,W(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t,r){var n,i=!1
if("number"==typeof e){var o=this.doc.first+this.doc.size-1
e<this.doc.first?e=this.doc.first:e>o&&(e=o,i=!0),n=T(this.doc,e)}else n=e
return lr(this,n,{top:0,left:0},t||"page",r||i).top+(i?this.doc.height-be(n):0)},defaultTextHeight:function(){return br(this.display)},defaultCharWidth:function(){return wr(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,r,n,i){var o=this.display
e=ur(this,G(this.doc,e))
var l=e.bottom,s=e.left
if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),o.sizer.appendChild(t),"over"==n)l=e.top
else if("above"==n||"near"==n){var a=Math.max(o.wrapper.clientHeight,this.doc.height),u=Math.max(o.sizer.clientWidth,o.lineSpace.clientWidth);("above"==n||e.bottom+t.offsetHeight>a)&&e.top>t.offsetHeight?l=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=a&&(l=e.bottom),s+t.offsetWidth>u&&(s=u-t.offsetWidth)}t.style.top=l+"px",t.style.left=t.style.right="","right"==i?(s=o.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?s=0:"middle"==i&&(s=(o.sizer.clientWidth-t.offsetWidth)/2),t.style.left=s+"px"),r&&Kr(this,{left:s,top:l,right:s+t.offsetWidth,bottom:l+t.offsetHeight})},triggerOnKeyDown:vn(To),triggerOnKeyPress:vn(Ao),triggerOnKeyUp:Oo,triggerOnMouseDown:vn(Wo),execCommand:function(e){if(Xs.hasOwnProperty(e))return Xs[e].call(null,this)},triggerElectric:vn(function(e){tl(this,e)}),findPosH:function(e,t,r,n){var i=this,o=1
t<0&&(o=-1,t=-t)
for(var l=G(this.doc,e),s=0;s<t&&(l=ol(i.doc,l,o,r,n),!l.hitSide);++s);return l},moveH:vn(function(e,t){var r=this
this.extendSelectionsBy(function(n){return r.display.shift||r.doc.extend||n.empty()?ol(r.doc,n.head,e,t,r.options.rtlMoveVisually):e<0?n.from():n.to()},ql)}),deleteH:vn(function(e,t){var r=this.doc.sel,n=this.doc
r.somethingSelected()?n.replaceSelection("",null,"+delete"):ho(this,function(r){var i=ol(n,r.head,e,t,!1)
return e<0?{from:i,to:r.head}:{from:r.head,to:i}})}),findPosV:function(e,t,r,n){var i=this,o=1,l=n
t<0&&(o=-1,t=-t)
for(var s=G(this.doc,e),a=0;a<t;++a){var u=ur(i,s,"div")
if(null==l?l=u.left:u.left=l,s=ll(i,u,o,r),s.hitSide)break}return s},moveV:vn(function(e,t){var r=this,n=this.doc,i=[],o=!this.display.shift&&!n.extend&&n.sel.somethingSelected()
if(n.extendSelectionsBy(function(l){if(o)return e<0?l.from():l.to()
var s=ur(r,l.head,"div")
null!=l.goalColumn&&(s.left=l.goalColumn),i.push(s.left)
var a=ll(r,s,e,t)
return"page"==t&&l==n.sel.primary()&&Xr(r,ar(r,a,"div").top-s.top),a},ql),i.length)for(var l=0;l<n.sel.ranges.length;l++)n.sel.ranges[l].goalColumn=i[l]}),findWordAt:function(e){var t=this.doc,r=T(t,e.line).text,n=e.ch,i=e.ch
if(r){var o=this.getHelper(e,"wordChars")
"before"!=e.sticky&&i!=r.length||!n?++i:--n
for(var l=r.charAt(n),s=x(l,o)?function(e){return x(e,o)}:/\s/.test(l)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!x(e)};n>0&&s(r.charAt(n-1));)--n
for(;i<r.length&&s(r.charAt(i));)++i}return new Ws(z(e.line,n),z(e.line,i))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?s(this.display.cursorDiv,"CodeMirror-overwrite"):Bl(this.display.cursorDiv,"CodeMirror-overwrite"),Te(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==l()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:vn(function(e,t){_r(this,e,t)}),getScrollInfo:function(){var e=this.display.scroller
return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-Bt(this)-this.display.barHeight,width:e.scrollWidth-Bt(this)-this.display.barWidth,clientHeight:Gt(this),clientWidth:Ut(this)}},scrollIntoView:vn(function(e,t){null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:z(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line?qr(this,e):Zr(this,e.from,e.to,e.margin)}),setSize:vn(function(e,t){var r=this,n=function(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e}
null!=e&&(this.display.wrapper.style.width=n(e)),null!=t&&(this.display.wrapper.style.height=n(t)),this.options.lineWrapping&&tr(this)
var i=this.display.viewFrom
this.doc.iter(i,this.display.viewTo,function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){bn(r,i,"widget")
break}++i}),this.curOp.forceUpdate=!0,Te(this,"refresh",this)}),operation:function(e){return pn(this,e)},startOperation:function(){return ln(this)},endOperation:function(){return sn(this)},refresh:vn(function(){var e=this.display.cachedTextHeight
yn(this),this.curOp.forceUpdate=!0,rr(this),_r(this,this.doc.scrollLeft,this.doc.scrollTop),Hn(this),(null==e||Math.abs(e-br(this.display))>.5)&&kr(this),Te(this,"refresh",this)}),swapDoc:vn(function(e){var t=this.doc
return t.cm=null,Jn(this,e),rr(this),this.display.input.reset(),_r(this,e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,xt(this,"swapDoc",this,t),t}),getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},De(e),e.registerHelper=function(t,n,i){r.hasOwnProperty(t)||(r[t]=e[t]={_global:[]}),r[t][n]=i},e.registerGlobalHelper=function(t,n,i,o){e.registerHelper(t,n,o),r[t]._global.push({pred:i,val:o})}},oa=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new Gl,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null}
oa.prototype.init=function(e){function t(e){if(!Ne(i,e)){if(i.somethingSelected())Jo({lineWise:!1,text:i.getSelections()}),"cut"==e.type&&i.replaceSelection("",null,"cut")
else{if(!i.options.lineWiseCopyCut)return
var t=rl(i)
Jo({lineWise:!0,text:t.text}),"cut"==e.type&&i.operation(function(){i.setSelections(t.ranges,0,Yl),i.replaceSelection("",null,"cut")})}if(e.clipboardData){e.clipboardData.clearData()
var r=na.text.join("\n")
if(e.clipboardData.setData("Text",r),e.clipboardData.getData("Text")==r)return void e.preventDefault()}var l=il(),s=l.firstChild
i.display.lineSpace.insertBefore(l,i.display.lineSpace.firstChild),s.value=na.text.join("\n")
var a=document.activeElement
Ul(s),setTimeout(function(){i.display.lineSpace.removeChild(l),a.focus(),a==o&&n.showPrimarySelection()},50)}}var r=this,n=this,i=n.cm,o=n.div=e.lineDiv
nl(o,i.options.spellcheck),is(o,"paste",function(e){Ne(i,e)||el(e,i)||Cl<=11&&setTimeout(gn(i,function(){return r.updateFromDOM()}),20)}),is(o,"compositionstart",function(e){r.composing={data:e.data,done:!1}}),is(o,"compositionupdate",function(e){r.composing||(r.composing={data:e.data,done:!1})}),is(o,"compositionend",function(e){r.composing&&(e.data!=r.composing.data&&r.readFromDOMSoon(),r.composing.done=!0)}),is(o,"touchstart",function(){return n.forceCompositionEnd()}),is(o,"input",function(){r.composing||r.readFromDOMSoon()}),is(o,"copy",t),is(o,"cut",t)},oa.prototype.prepareSelection=function(){var e=Nr(this.cm,!1)
return e.focus=this.cm.state.focused,e},oa.prototype.showSelection=function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e))},oa.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},oa.prototype.showPrimarySelection=function(){var e=this.getSelection(),t=this.cm,r=t.doc.sel.primary(),n=r.from(),i=r.to()
if(t.display.viewTo==t.display.viewFrom||n.line>=t.display.viewTo||i.line<t.display.viewFrom)return void e.removeAllRanges()
var o=fl(t,e.anchorNode,e.anchorOffset),l=fl(t,e.focusNode,e.focusOffset)
if(!o||o.bad||!l||l.bad||0!=P(B(o,l),n)||0!=P(I(o,l),i)){var s=t.display.view,a=n.line>=t.display.viewFrom&&sl(t,n)||{node:s[0].measure.map[2],offset:0},u=i.line<t.display.viewTo&&sl(t,i)
if(!u){var c=s[s.length-1].measure,f=c.maps?c.maps[c.maps.length-1]:c.map
u={node:f[f.length-1],offset:f[f.length-2]-f[f.length-3]}}if(!a||!u)return void e.removeAllRanges()
var d,h=e.rangeCount&&e.getRangeAt(0)
try{d=El(a.node,a.offset,u.offset,u.node)}catch(e){}d&&(!ml&&t.state.focused?(e.collapse(a.node,a.offset),d.collapsed||(e.removeAllRanges(),e.addRange(d))):(e.removeAllRanges(),e.addRange(d)),h&&null==e.anchorNode?e.addRange(h):ml&&this.startGracePeriod()),this.rememberSelection()}},oa.prototype.startGracePeriod=function(){var e=this
clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},oa.prototype.showMultipleSelections=function(e){r(this.cm.display.cursorDiv,e.cursors),r(this.cm.display.selectionDiv,e.selection)},oa.prototype.rememberSelection=function(){var e=this.getSelection()
this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},oa.prototype.selectionInEditor=function(){var e=this.getSelection()
if(!e.rangeCount)return!1
var t=e.getRangeAt(0).commonAncestorContainer
return o(this.div,t)},oa.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()||this.showSelection(this.prepareSelection(),!0),this.div.focus())},oa.prototype.blur=function(){this.div.blur()},oa.prototype.getField=function(){return this.div},oa.prototype.supportsTouch=function(){return!0},oa.prototype.receivedFocus=function(){function e(){t.cm.state.focused&&(t.pollSelection(),t.polling.set(t.cm.options.pollInterval,e))}var t=this
this.selectionInEditor()?this.pollSelection():pn(this.cm,function(){return t.cm.curOp.selectionChanged=!0}),this.polling.set(this.cm.options.pollInterval,e)},oa.prototype.selectionChanged=function(){var e=this.getSelection()
return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},oa.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var e=this.getSelection(),t=this.cm
if(Dl&&Ll&&this.cm.options.gutters.length&&al(e.anchorNode))return this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),void this.focus()
if(!this.composing){this.rememberSelection()
var r=fl(t,e.anchorNode,e.anchorOffset),n=fl(t,e.focusNode,e.focusOffset)
r&&n&&pn(t,function(){xi(t.doc,Un(r,n),Yl),(r.bad||n.bad)&&(t.curOp.selectionChanged=!0)})}}},oa.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null)
var e=this.cm,t=e.display,r=e.doc.sel.primary(),n=r.from(),i=r.to()
if(0==n.ch&&n.line>e.firstLine()&&(n=z(n.line-1,T(e.doc,n.line-1).length)),i.ch==T(e.doc,i.line).text.length&&i.line<e.lastLine()&&(i=z(i.line+1,0)),n.line<t.viewFrom||i.line>t.viewTo-1)return!1
var o,l,s
n.line==t.viewFrom||0==(o=Mr(e,n.line))?(l=D(t.view[0].line),s=t.view[0].node):(l=D(t.view[o].line),s=t.view[o-1].node.nextSibling)
var a,u,c=Mr(e,i.line)
if(c==t.view.length-1?(a=t.viewTo-1,u=t.lineDiv.lastChild):(a=D(t.view[c+1].line)-1,u=t.view[c+1].node.previousSibling),!s)return!1
for(var f=e.doc.splitLines(cl(e,s,u,l,a)),d=N(e.doc,z(l,0),z(a,T(e.doc,a).text.length));f.length>1&&d.length>1;)if(g(f)==g(d))f.pop(),d.pop(),a--
else{if(f[0]!=d[0])break
f.shift(),d.shift(),l++}for(var h=0,p=0,v=f[0],m=d[0],y=Math.min(v.length,m.length);h<y&&v.charCodeAt(h)==m.charCodeAt(h);)++h
for(var b=g(f),w=g(d),x=Math.min(b.length-(1==f.length?h:0),w.length-(1==d.length?h:0));p<x&&b.charCodeAt(b.length-p-1)==w.charCodeAt(w.length-p-1);)++p
if(1==f.length&&1==d.length&&l==n.line)for(;h&&h>n.ch&&b.charCodeAt(b.length-p-1)==w.charCodeAt(w.length-p-1);)h--,p++
f[f.length-1]=b.slice(0,b.length-p).replace(/^\u200b+/,""),f[0]=f[0].slice(h).replace(/\u200b+$/,"")
var C=z(l,h),S=z(a,d.length?g(d).length-p:0)
return f.length>1||f[0]||P(C,S)?(Ei(e.doc,f,C,S,"+input"),!0):void 0},oa.prototype.ensurePolled=function(){this.forceCompositionEnd()},oa.prototype.reset=function(){this.forceCompositionEnd()},oa.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},oa.prototype.readFromDOMSoon=function(){var e=this
null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing){if(!e.composing.done)return
e.composing=null}e.updateFromDOM()},80))},oa.prototype.updateFromDOM=function(){var e=this
!this.cm.isReadOnly()&&this.pollContent()||pn(this.cm,function(){return yn(e.cm)})},oa.prototype.setUneditable=function(e){e.contentEditable="false"},oa.prototype.onKeyPress=function(e){0==e.charCode||this.composing||(e.preventDefault(),this.cm.isReadOnly()||gn(this.cm,Qo)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0))},oa.prototype.readOnlyChanged=function(e){this.div.contentEditable=String("nocursor"!=e)},oa.prototype.onContextMenu=function(){},oa.prototype.resetPosition=function(){},oa.prototype.needsContentAttribute=!0
var la=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new Gl,this.hasSelection=!1,this.composing=null}
la.prototype.init=function(e){function t(e){if(!Ne(i,e)){if(i.somethingSelected())Jo({lineWise:!1,text:i.getSelections()})
else{if(!i.options.lineWiseCopyCut)return
var t=rl(i)
Jo({lineWise:!0,text:t.text}),"cut"==e.type?i.setSelections(t.ranges,null,Yl):(n.prevInput="",o.value=t.text.join("\n"),Ul(o))}"cut"==e.type&&(i.state.cutIncoming=!0)}}var r=this,n=this,i=this.cm
this.createField(e)
var o=this.textarea
e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),Al&&(o.style.width="0px"),is(o,"input",function(){xl&&Cl>=9&&r.hasSelection&&(r.hasSelection=null),n.poll()}),is(o,"paste",function(e){Ne(i,e)||el(e,i)||(i.state.pasteIncoming=!0,n.fastPoll())}),is(o,"cut",t),is(o,"copy",t),is(e.scroller,"paste",function(t){Pt(e,t)||Ne(i,t)||(i.state.pasteIncoming=!0,n.focus())}),is(e.lineSpace,"selectstart",function(t){Pt(e,t)||We(t)}),is(o,"compositionstart",function(){var e=i.getCursor("from")
n.composing&&n.composing.range.clear(),n.composing={start:e,range:i.markText(e,i.getCursor("to"),{className:"CodeMirror-composing"})}}),is(o,"compositionend",function(){n.composing&&(n.poll(),n.composing.range.clear(),n.composing=null)})},la.prototype.createField=function(e){this.wrapper=il(),this.textarea=this.wrapper.firstChild},la.prototype.prepareSelection=function(){var e=this.cm,t=e.display,r=e.doc,n=Nr(e)
if(e.options.moveInputWithCursor){var i=ur(e,r.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),l=t.lineDiv.getBoundingClientRect()
n.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+l.top-o.top)),n.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+l.left-o.left))}return n},la.prototype.showSelection=function(e){var t=this.cm,n=t.display
r(n.cursorDiv,e.cursors),r(n.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},la.prototype.reset=function(e){if(!this.contextMenuPending&&!this.composing){var t=this.cm
if(t.somethingSelected()){this.prevInput=""
var r=t.getSelection()
this.textarea.value=r,t.state.focused&&Ul(this.textarea),xl&&Cl>=9&&(this.hasSelection=r)}else e||(this.prevInput=this.textarea.value="",xl&&Cl>=9&&(this.hasSelection=null))}},la.prototype.getField=function(){return this.textarea},la.prototype.supportsTouch=function(){return!1},la.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!Wl||l()!=this.textarea))try{this.textarea.focus()}catch(e){}},la.prototype.blur=function(){this.textarea.blur()},la.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},la.prototype.receivedFocus=function(){this.slowPoll()},la.prototype.slowPoll=function(){var e=this
this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},la.prototype.fastPoll=function(){function e(){var n=r.poll()
n||t?(r.pollingFast=!1,r.slowPoll()):(t=!0,r.polling.set(60,e))}var t=!1,r=this
r.pollingFast=!0,r.polling.set(20,e)},la.prototype.poll=function(){var e=this,t=this.cm,r=this.textarea,n=this.prevInput
if(this.contextMenuPending||!t.state.focused||ss(r)&&!n&&!this.composing||t.isReadOnly()||t.options.disableInput||t.state.keySeq)return!1
var i=r.value
if(i==n&&!t.somethingSelected())return!1
if(xl&&Cl>=9&&this.hasSelection===i||Hl&&/[\uf700-\uf7ff]/.test(i))return t.display.input.reset(),!1
if(t.doc.sel==t.display.selForContextMenu){var o=i.charCodeAt(0)
if(8203!=o||n||(n="​"),8666==o)return this.reset(),this.cm.execCommand("undo")}for(var l=0,s=Math.min(n.length,i.length);l<s&&n.charCodeAt(l)==i.charCodeAt(l);)++l
return pn(t,function(){Qo(t,i.slice(l),n.length-l,null,e.composing?"*compose":null),i.length>1e3||i.indexOf("\n")>-1?r.value=e.prevInput="":e.prevInput=i,e.composing&&(e.composing.range.clear(),e.composing.range=t.markText(e.composing.start,t.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},la.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},la.prototype.onKeyPress=function(){xl&&Cl>=9&&(this.hasSelection=null),this.fastPoll()},la.prototype.onContextMenu=function(e){function t(){if(null!=l.selectionStart){var e=i.somethingSelected(),t="​"+(e?l.value:"")
l.value="⇚",l.value=t,n.prevInput=e?"":"​",l.selectionStart=1,l.selectionEnd=t.length,o.selForContextMenu=i.doc.sel}}function r(){if(n.contextMenuPending=!1,n.wrapper.style.cssText=f,l.style.cssText=c,xl&&Cl<9&&o.scrollbars.setScrollTop(o.scroller.scrollTop=a),null!=l.selectionStart){(!xl||xl&&Cl<9)&&t()
var e=0,r=function(){o.selForContextMenu==i.doc.sel&&0==l.selectionStart&&l.selectionEnd>0&&"​"==n.prevInput?gn(i,Oi)(i):e++<10?o.detectingSelectAll=setTimeout(r,500):(o.selForContextMenu=null,o.input.reset())}
o.detectingSelectAll=setTimeout(r,200)}}var n=this,i=n.cm,o=i.display,l=n.textarea,s=Lr(i,e),a=o.scroller.scrollTop
if(s&&!Ml){var u=i.options.resetSelectionOnContextMenu
u&&i.doc.sel.contains(s)==-1&&gn(i,xi)(i.doc,Un(s),Yl)
var c=l.style.cssText,f=n.wrapper.style.cssText
n.wrapper.style.cssText="position: absolute"
var d=n.wrapper.getBoundingClientRect()
l.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-d.top-5)+"px; left: "+(e.clientX-d.left-5)+"px;\n      z-index: 1000; background: "+(xl?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"
var h
if(Sl&&(h=window.scrollY),o.input.focus(),Sl&&window.scrollTo(null,h),o.input.reset(),i.somethingSelected()||(l.value=n.prevInput=" "),n.contextMenuPending=!0,o.selForContextMenu=i.doc.sel,clearTimeout(o.detectingSelectAll),xl&&Cl>=9&&t(),Il){ze(e)
var p=function(){Me(window,"mouseup",p),setTimeout(r,20)}
is(window,"mouseup",p)}else setTimeout(r,50)}},la.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled="nocursor"==e},la.prototype.setUneditable=function(){},la.prototype.needsContentAttribute=!1,jo(qo),ia(qo)
var sa="iter insert remove copy getEditor constructor".split(" ")
for(var aa in Rs.prototype)Rs.prototype.hasOwnProperty(aa)&&d(sa,aa)<0&&(qo.prototype[aa]=function(e){return function(){return e.apply(this.doc,arguments)}}(Rs.prototype[aa]))
return De(Rs),qo.inputStyles={textarea:la,contenteditable:oa},qo.defineMode=function(e){qo.defaults.mode||"null"==e||(qo.defaults.mode=e),Ue.apply(this,arguments)},qo.defineMIME=Ge,qo.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),qo.defineMIME("text/plain","null"),qo.defineExtension=function(e,t){qo.prototype[e]=t},qo.defineDocExtension=function(e,t){Rs.prototype[e]=t},qo.fromTextArea=hl,pl(qo),qo.version="5.39.2",qo})},1035:function(e,t,r){t=e.exports=r(150)(),t.push([e.id,'.CodeMirror{font-family:monospace;height:300px;color:#000;direction:ltr}.CodeMirror-lines{padding:4px 0}.CodeMirror pre{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor-mark{background-color:rgba(20,255,20,.5);animation:blink 1.06s steps(1) infinite}.cm-animate-fat-cursor{width:auto;border:0;animation:blink 1.06s steps(1) infinite;background-color:#7e7}@keyframes blink{50%{background-color:transparent}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:-20px;overflow:hidden}.CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}.cm-s-default .cm-header{color:blue}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-type,.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-invalidchar,.cm-s-default .cm-error{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:#fff}.CodeMirror-scroll{overflow:scroll!important;margin-bottom:-30px;margin-right:-30px;padding-bottom:30px;height:100%;outline:none;position:relative}.CodeMirror-sizer{position:relative;border-right:30px solid transparent}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{position:absolute;z-index:6;display:none}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-30px}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:none!important;border:none!important}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre{border-radius:0;border-width:0;background:transparent;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:contextual;font-variant-ligatures:contextual}.CodeMirror-wrap pre{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;padding:.1px}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:none}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute;pointer-events:none}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}.CodeMirror-focused div.CodeMirror-cursors,div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:rgba(255,255,0,.4)}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:""}span.CodeMirror-selectedtext{background:none}',""])},1708:function(e,t,r){var n=r(1035)
"string"==typeof n&&(n=[[e.id,n,""]])
r(174)(n,{})
n.locals&&(e.exports=n.locals)}})
