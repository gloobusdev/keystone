webpackJsonp([10],{263:function(e,t){e.exports=function(){var e=[]
return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t]
r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]])
for(var n={},i=0;i<this.length;i++){var o=this[i][0]
"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var l=t[i]
"number"==typeof l[0]&&n[l[0]]||(r&&!l[2]?l[2]=r:r&&(l[2]="("+l[2]+") and ("+r+")"),e.push(l))}},e}},363:function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],i=h[n.id]
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
return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},694:function(e,t,r){"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(950),l=n(o),s=r(19),a=n(s),u=r(1),c=n(u),f=r(18),d=r(3),h=r(4),p=n(h)
r(1516),e.exports=a.default.create({displayName:"CodeField",statics:{type:"Code"},getInitialState:function(){return{isFocused:!1}},componentDidMount:function(){if(this.refs.codemirror){var e=i({lineNumbers:!0,readOnly:!this.shouldRenderField()},this.props.editor)
this.codeMirror=l.default.fromTextArea((0,f.findDOMNode)(this.refs.codemirror),e),this.codeMirror.setSize(null,this.props.height),this.codeMirror.on("change",this.codemirrorValueChanged),this.codeMirror.on("focus",this.focusChanged.bind(this,!0)),this.codeMirror.on("blur",this.focusChanged.bind(this,!1)),this._currentCodemirrorValue=this.props.value}},componentWillUnmount:function(){this.codeMirror&&this.codeMirror.toTextArea()},componentWillReceiveProps:function(e){this.codeMirror&&this._currentCodemirrorValue!==e.value&&this.codeMirror.setValue(e.value)},focus:function(){this.codeMirror&&this.codeMirror.focus()},focusChanged:function(e){this.setState({isFocused:e})},codemirrorValueChanged:function(e,t){var r=e.getValue()
this._currentCodemirrorValue=r,this.props.onChange({path:this.props.path,value:r})},renderCodemirror:function(){var e=(0,p.default)("CodeMirror-container",{"is-focused":this.state.isFocused&&this.shouldRenderField()})
return c.default.createElement("div",{className:e},c.default.createElement(d.FormInput,{autoComplete:"off",multiline:!0,name:this.getInputName(this.props.path),onChange:this.valueChanged,ref:"codemirror",value:this.props.value}))},renderValue:function(){return this.renderCodemirror()},renderField:function(){return this.renderCodemirror()}})},950:function(e,t,r){!function(t,r){e.exports=r()}(this,function(){"use strict"
function e(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}function t(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild)
return e}function r(e,r){return t(e).appendChild(r)}function n(e,t,r,n){var i=document.createElement(e)
if(r&&(i.className=r),n&&(i.style.cssText=n),"string"==typeof t)i.appendChild(document.createTextNode(t))
else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o])
return i}function i(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t)
do if(11==t.nodeType&&(t=t.host),t==e)return!0
while(t=t.parentNode)}function o(){var e
try{e=document.activeElement}catch(t){e=document.body||null}for(;e&&e.root&&e.root.activeElement;)e=e.root.activeElement
return e}function l(t,r){var n=t.className
e(r).test(n)||(t.className+=(n?" ":"")+r)}function s(t,r){for(var n=t.split(" "),i=0;i<n.length;i++)n[i]&&!e(n[i]).test(r)&&(r+=" "+n[i])
return r}function a(e){var t=Array.prototype.slice.call(arguments,1)
return function(){return e.apply(null,t)}}function u(e,t,r){t||(t={})
for(var n in e)!e.hasOwnProperty(n)||r===!1&&t.hasOwnProperty(n)||(t[n]=e[n])
return t}function c(e,t,r,n,i){null==t&&(t=e.search(/[^\s\u00a0]/),t==-1&&(t=e.length))
for(var o=n||0,l=i||0;;){var s=e.indexOf("\t",o)
if(s<0||s>=t)return l+(t-o)
l+=s-o,l+=r-l%r,o=s+1}}function f(e,t){for(var r=0;r<e.length;++r)if(e[r]==t)return r
return-1}function d(e,t,r){for(var n=0,i=0;;){var o=e.indexOf("\t",n)
o==-1&&(o=e.length)
var l=o-n
if(o==e.length||i+l>=t)return n+Math.min(l,t-i)
if(i+=o-n,i+=r-i%r,n=o+1,i>=t)return n}}function h(e){for(;Ll.length<=e;)Ll.push(p(Ll)+" ")
return Ll[e]}function p(e){return e[e.length-1]}function g(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n)
return r}function v(e,t,r){for(var n=0,i=r(t);n<e.length&&r(e[n])<=i;)n++
e.splice(n,0,t)}function m(){}function y(e,t){var r
return Object.create?r=Object.create(e):(m.prototype=e,r=new m),t&&u(t,r),r}function b(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||Ml.test(e))}function w(e,t){return t?!!(t.source.indexOf("\\w")>-1&&b(e))||t.test(e):b(e)}function x(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1
return!0}function C(e){return e.charCodeAt(0)>=768&&kl.test(e)}function S(e,t,r){for(;(r<0?t>0:t<e.length)&&C(e.charAt(t));)t+=r
return t}function L(e,t,r){for(;;){if(Math.abs(t-r)<=1)return e(t)?t:r
var n=Math.floor((t+r)/2)
e(n)?r=n:t=n}}function M(e,t,r){var i=this
this.input=r,i.scrollbarFiller=n("div",null,"CodeMirror-scrollbar-filler"),i.scrollbarFiller.setAttribute("cm-not-content","true"),i.gutterFiller=n("div",null,"CodeMirror-gutter-filler"),i.gutterFiller.setAttribute("cm-not-content","true"),i.lineDiv=n("div",null,"CodeMirror-code"),i.selectionDiv=n("div",null,null,"position: relative; z-index: 1"),i.cursorDiv=n("div",null,"CodeMirror-cursors"),i.measure=n("div",null,"CodeMirror-measure"),i.lineMeasure=n("div",null,"CodeMirror-measure"),i.lineSpace=n("div",[i.measure,i.lineMeasure,i.selectionDiv,i.cursorDiv,i.lineDiv],null,"position: relative; outline: none"),i.mover=n("div",[n("div",[i.lineSpace],"CodeMirror-lines")],null,"position: relative"),i.sizer=n("div",[i.mover],"CodeMirror-sizer"),i.sizerWidth=null,i.heightForcer=n("div",null,null,"position: absolute; height: "+bl+"px; width: 1px;"),i.gutters=n("div",null,"CodeMirror-gutters"),i.lineGutter=null,i.scroller=n("div",[i.sizer,i.heightForcer,i.gutters],"CodeMirror-scroll"),i.scroller.setAttribute("tabIndex","-1"),i.wrapper=n("div",[i.scrollbarFiller,i.gutterFiller,i.scroller],"CodeMirror"),$o&&Zo<8&&(i.gutters.style.zIndex=-1,i.scroller.style.paddingRight=0),Jo||Xo&&ll||(i.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(i.wrapper):e(i.wrapper)),i.viewFrom=i.viewTo=t.first,i.reportedViewFrom=i.reportedViewTo=t.first,i.view=[],i.renderedView=null,i.externalMeasured=null,i.viewOffset=0,i.lastWrapHeight=i.lastWrapWidth=0,i.updateLineNumbers=null,i.nativeBarWidth=i.barHeight=i.barWidth=0,i.scrollbarsClipped=!1,i.lineNumWidth=i.lineNumInnerWidth=i.lineNumChars=null,i.alignWidgets=!1,i.cachedCharWidth=i.cachedTextHeight=i.cachedPaddingH=null,i.maxLine=null,i.maxLineLength=0,i.maxLineChanged=!1,i.wheelDX=i.wheelDY=i.wheelStartX=i.wheelStartY=null,i.shift=!1,i.selForContextMenu=null,i.activeTouch=null,r.init(i)}function k(e,t){if(t-=e.first,t<0||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.")
for(var r=e;!r.lines;)for(var n=0;;++n){var i=r.children[n],o=i.chunkSize()
if(t<o){r=i
break}t-=o}return r.lines[t]}function T(e,t,r){var n=[],i=t.line
return e.iter(t.line,r.line+1,function(e){var o=e.text
i==r.line&&(o=o.slice(0,r.ch)),i==t.line&&(o=o.slice(t.ch)),n.push(o),++i}),n}function N(e,t,r){var n=[]
return e.iter(t,r,function(e){n.push(e.text)}),n}function O(e,t){var r=t-e.height
if(r)for(var n=e;n;n=n.parent)n.height+=r}function A(e){if(null==e.parent)return null
for(var t=e.parent,r=f(t.lines,e),n=t.parent;n;t=n,n=n.parent)for(var i=0;n.children[i]!=t;++i)r+=n.children[i].chunkSize()
return r+t.first}function W(e,t){var r=e.first
e:do{for(var n=0;n<e.children.length;++n){var i=e.children[n],o=i.height
if(t<o){e=i
continue e}t-=o,r+=i.chunkSize()}return r}while(!e.lines)
for(var l=0;l<e.lines.length;++l){var s=e.lines[l],a=s.height
if(t<a)break
t-=a}return r+l}function D(e,t){return t>=e.first&&t<e.first+e.size}function H(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function z(e,t,r){return void 0===r&&(r=null),this instanceof z?(this.line=e,this.ch=t,void(this.sticky=r)):new z(e,t,r)}function E(e,t){return e.line-t.line||e.ch-t.ch}function P(e,t){return e.sticky==t.sticky&&0==E(e,t)}function F(e){return z(e.line,e.ch)}function I(e,t){return E(e,t)<0?t:e}function R(e,t){return E(e,t)<0?e:t}function B(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function U(e,t){if(t.line<e.first)return z(e.first,0)
var r=e.first+e.size-1
return t.line>r?z(r,k(e,r).text.length):G(t,k(e,t.line).text.length)}function G(e,t){var r=e.ch
return null==r||r>t?z(e.line,t):r<0?z(e.line,0):e}function V(e,t){for(var r=[],n=0;n<t.length;n++)r[n]=U(e,t[n])
return r}function K(){Tl=!0}function j(){Nl=!0}function X(e,t,r){this.marker=e,this.from=t,this.to=r}function _(e,t){if(e)for(var r=0;r<e.length;++r){var n=e[r]
if(n.marker==t)return n}}function Y(e,t){for(var r,n=0;n<e.length;++n)e[n]!=t&&(r||(r=[])).push(e[n])
return r}function q(e,t){e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],t.marker.attachLine(e)}function $(e,t,r){var n
if(e)for(var i=0;i<e.length;++i){var o=e[i],l=o.marker,s=null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t)
if(s||o.from==t&&"bookmark"==l.type&&(!r||!o.marker.insertLeft)){var a=null==o.to||(l.inclusiveRight?o.to>=t:o.to>t);(n||(n=[])).push(new X(l,o.from,a?null:o.to))}}return n}function Z(e,t,r){var n
if(e)for(var i=0;i<e.length;++i){var o=e[i],l=o.marker,s=null==o.to||(l.inclusiveRight?o.to>=t:o.to>t)
if(s||o.from==t&&"bookmark"==l.type&&(!r||o.marker.insertLeft)){var a=null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t);(n||(n=[])).push(new X(l,a?null:o.from-t,null==o.to?null:o.to-t))}}return n}function J(e,t){if(t.full)return null
var r=D(e,t.from.line)&&k(e,t.from.line).markedSpans,n=D(e,t.to.line)&&k(e,t.to.line).markedSpans
if(!r&&!n)return null
var i=t.from.ch,o=t.to.ch,l=0==E(t.from,t.to),s=$(r,i,l),a=Z(n,o,l),u=1==t.text.length,c=p(t.text).length+(u?i:0)
if(s)for(var f=0;f<s.length;++f){var d=s[f]
if(null==d.to){var h=_(a,d.marker)
h?u&&(d.to=null==h.to?null:h.to+c):d.to=i}}if(a)for(var g=0;g<a.length;++g){var v=a[g]
if(null!=v.to&&(v.to+=c),null==v.from){var m=_(s,v.marker)
m||(v.from=c,u&&(s||(s=[])).push(v))}else v.from+=c,u&&(s||(s=[])).push(v)}s&&(s=Q(s)),a&&a!=s&&(a=Q(a))
var y=[s]
if(!u){var b,w=t.text.length-2
if(w>0&&s)for(var x=0;x<s.length;++x)null==s[x].to&&(b||(b=[])).push(new X(s[x].marker,null,null))
for(var C=0;C<w;++C)y.push(b)
y.push(a)}return y}function Q(e){for(var t=0;t<e.length;++t){var r=e[t]
null!=r.from&&r.from==r.to&&r.marker.clearWhenEmpty!==!1&&e.splice(t--,1)}return e.length?e:null}function ee(e,t,r){var n=null
if(e.iter(t.line,r.line+1,function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var r=e.markedSpans[t].marker
!r.readOnly||n&&f(n,r)!=-1||(n||(n=[])).push(r)}}),!n)return null
for(var i=[{from:t,to:r}],o=0;o<n.length;++o)for(var l=n[o],s=l.find(0),a=0;a<i.length;++a){var u=i[a]
if(!(E(u.to,s.from)<0||E(u.from,s.to)>0)){var c=[a,1],d=E(u.from,s.from),h=E(u.to,s.to);(d<0||!l.inclusiveLeft&&!d)&&c.push({from:u.from,to:s.from}),(h>0||!l.inclusiveRight&&!h)&&c.push({from:s.to,to:u.to}),i.splice.apply(i,c),a+=c.length-3}}return i}function te(e){var t=e.markedSpans
if(t){for(var r=0;r<t.length;++r)t[r].marker.detachLine(e)
e.markedSpans=null}}function re(e,t){if(t){for(var r=0;r<t.length;++r)t[r].marker.attachLine(e)
e.markedSpans=t}}function ne(e){return e.inclusiveLeft?-1:0}function ie(e){return e.inclusiveRight?1:0}function oe(e,t){var r=e.lines.length-t.lines.length
if(0!=r)return r
var n=e.find(),i=t.find(),o=E(n.from,i.from)||ne(e)-ne(t)
if(o)return-o
var l=E(n.to,i.to)||ie(e)-ie(t)
return l?l:t.id-e.id}function le(e,t){var r,n=Nl&&e.markedSpans
if(n)for(var i=void 0,o=0;o<n.length;++o)i=n[o],i.marker.collapsed&&null==(t?i.from:i.to)&&(!r||oe(r,i.marker)<0)&&(r=i.marker)
return r}function se(e){return le(e,!0)}function ae(e){return le(e,!1)}function ue(e,t,r,n,i){var o=k(e,t),l=Nl&&o.markedSpans
if(l)for(var s=0;s<l.length;++s){var a=l[s]
if(a.marker.collapsed){var u=a.marker.find(0),c=E(u.from,r)||ne(a.marker)-ne(i),f=E(u.to,n)||ie(a.marker)-ie(i)
if(!(c>=0&&f<=0||c<=0&&f>=0)&&(c<=0&&(a.marker.inclusiveRight&&i.inclusiveLeft?E(u.to,r)>=0:E(u.to,r)>0)||c>=0&&(a.marker.inclusiveRight&&i.inclusiveLeft?E(u.from,n)<=0:E(u.from,n)<0)))return!0}}}function ce(e){for(var t;t=se(e);)e=t.find(-1,!0).line
return e}function fe(e){for(var t;t=ae(e);)e=t.find(1,!0).line
return e}function de(e){for(var t,r;t=ae(e);)e=t.find(1,!0).line,(r||(r=[])).push(e)
return r}function he(e,t){var r=k(e,t),n=ce(r)
return r==n?t:A(n)}function pe(e,t){if(t>e.lastLine())return t
var r,n=k(e,t)
if(!ge(e,n))return t
for(;r=ae(n);)n=r.find(1,!0).line
return A(n)+1}function ge(e,t){var r=Nl&&t.markedSpans
if(r)for(var n=void 0,i=0;i<r.length;++i)if(n=r[i],n.marker.collapsed){if(null==n.from)return!0
if(!n.marker.widgetNode&&0==n.from&&n.marker.inclusiveLeft&&ve(e,t,n))return!0}}function ve(e,t,r){if(null==r.to){var n=r.marker.find(1,!0)
return ve(e,n.line,_(n.line.markedSpans,r.marker))}if(r.marker.inclusiveRight&&r.to==t.text.length)return!0
for(var i=void 0,o=0;o<t.markedSpans.length;++o)if(i=t.markedSpans[o],i.marker.collapsed&&!i.marker.widgetNode&&i.from==r.to&&(null==i.to||i.to!=r.from)&&(i.marker.inclusiveLeft||r.marker.inclusiveRight)&&ve(e,t,i))return!0}function me(e){e=ce(e)
for(var t=0,r=e.parent,n=0;n<r.lines.length;++n){var i=r.lines[n]
if(i==e)break
t+=i.height}for(var o=r.parent;o;r=o,o=r.parent)for(var l=0;l<o.children.length;++l){var s=o.children[l]
if(s==r)break
t+=s.height}return t}function ye(e){if(0==e.height)return 0
for(var t,r=e.text.length,n=e;t=se(n);){var i=t.find(0,!0)
n=i.from.line,r+=i.from.ch-i.to.ch}for(n=e;t=ae(n);){var o=t.find(0,!0)
r-=n.text.length-o.from.ch,n=o.to.line,r+=n.text.length-o.to.ch}return r}function be(e){var t=e.display,r=e.doc
t.maxLine=k(r,r.first),t.maxLineLength=ye(t.maxLine),t.maxLineChanged=!0,r.iter(function(e){var r=ye(e)
r>t.maxLineLength&&(t.maxLineLength=r,t.maxLine=e)})}function we(e,t,r,n){if(!e)return n(t,r,"ltr")
for(var i=!1,o=0;o<e.length;++o){var l=e[o];(l.from<r&&l.to>t||t==r&&l.to==t)&&(n(Math.max(l.from,t),Math.min(l.to,r),1==l.level?"rtl":"ltr"),i=!0)}i||n(t,r,"ltr")}function xe(e,t,r){var n
Ol=null
for(var i=0;i<e.length;++i){var o=e[i]
if(o.from<t&&o.to>t)return i
o.to==t&&(o.from!=o.to&&"before"==r?n=i:Ol=i),o.from==t&&(o.from!=o.to&&"before"!=r?n=i:Ol=i)}return null!=n?n:Ol}function Ce(e){var t=e.order
return null==t&&(t=e.order=Al(e.text)),t}function Se(e,t,r){var n=S(e.text,t+r,r)
return n<0||n>e.text.length?null:n}function Le(e,t,r){var n=Se(e,t.ch,r)
return null==n?null:new z(t.line,n,r<0?"after":"before")}function Me(e,t,r,n,i){if(e){var o=Ce(r)
if(o){var l,s=i<0?p(o):o[0],a=i<0==(1==s.level),u=a?"after":"before"
if(s.level>0){var c=qt(t,r)
l=i<0?r.text.length-1:0
var f=$t(t,c,l).top
l=L(function(e){return $t(t,c,e).top==f},i<0==(1==s.level)?s.from:s.to-1,l),"before"==u&&(l=Se(r,l,1,!0))}else l=i<0?s.to:s.from
return new z(n,l,u)}}return new z(n,i<0?r.text.length:0,i<0?"before":"after")}function ke(e,t,r,n){var i=Ce(t)
if(!i)return Le(t,r,n)
r.ch>=t.text.length?(r.ch=t.text.length,r.sticky="before"):r.ch<=0&&(r.ch=0,r.sticky="after")
var o=xe(i,r.ch,r.sticky),l=i[o]
if(l.level%2==0&&(n>0?l.to>r.ch:l.from<r.ch))return Le(t,r,n)
var s,a=function(e,r){return Se(t,e instanceof z?e.ch:e,r)},u=function(r){return e.options.lineWrapping?(s=s||qt(e,t),pr(e,t,s,r)):{begin:0,end:t.text.length}},c=u("before"==r.sticky?a(r,-1):r.ch)
if(l.level%2==1){var f=a(r,-n)
if(null!=f&&(n>0?f>=l.from&&f>=c.begin:f<=l.to&&f<=c.end)){var d=n<0?"before":"after"
return new z(r.line,f,d)}}var h=function(e,t,n){for(var o=function(e,t){return t?new z(r.line,a(e,1),"before"):new z(r.line,e,"after")};e>=0&&e<i.length;e+=t){var l=i[e],s=t>0==(1!=l.level),u=s?n.begin:a(n.end,-1)
if(l.from<=u&&u<l.to)return o(u,s)
if(u=s?l.from:a(l.to,-1),n.begin<=u&&u<n.end)return o(u,s)}},p=h(o+n,n,c)
if(p)return p
var g=n>0?c.end:a(c.begin,-1)
return null==g||n>0&&g==t.text.length||!(p=h(n>0?0:i.length-1,n,u(g)))?null:p}function Te(e,t){return e._handlers&&e._handlers[t]||Wl}function Ne(e,t,r){if(e.removeEventListener)e.removeEventListener(t,r,!1)
else if(e.detachEvent)e.detachEvent("on"+t,r)
else{var n=e._handlers,i=n&&n[t]
if(i){var o=f(i,r)
o>-1&&(n[t]=i.slice(0,o).concat(i.slice(o+1)))}}}function Oe(e,t){var r=Te(e,t)
if(r.length)for(var n=Array.prototype.slice.call(arguments,2),i=0;i<r.length;++i)r[i].apply(null,n)}function Ae(e,t,r){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),Oe(e,r||t.type,e,t),Pe(t)||t.codemirrorIgnore}function We(e){var t=e._handlers&&e._handlers.cursorActivity
if(t)for(var r=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),n=0;n<t.length;++n)f(r,t[n])==-1&&r.push(t[n])}function De(e,t){return Te(e,t).length>0}function He(e){e.prototype.on=function(e,t){Dl(this,e,t)},e.prototype.off=function(e,t){Ne(this,e,t)}}function ze(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function Ee(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function Pe(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function Fe(e){ze(e),Ee(e)}function Ie(e){return e.target||e.srcElement}function Re(e){var t=e.which
return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),sl&&e.ctrlKey&&1==t&&(t=3),t}function Be(e){if(null==ml){var t=n("span","​")
r(e,n("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(ml=t.offsetWidth<=1&&t.offsetHeight>2&&!($o&&Zo<8))}var i=ml?n("span","​"):n("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px")
return i.setAttribute("cm-text",""),i}function Ue(e){if(null!=yl)return yl
var n=r(e,document.createTextNode("AخA")),i=fl(n,0,1).getBoundingClientRect(),o=fl(n,1,2).getBoundingClientRect()
return t(e),!(!i||i.left==i.right)&&(yl=o.right-i.right<3)}function Ge(e){if(null!=Fl)return Fl
var t=r(e,n("span","x")),i=t.getBoundingClientRect(),o=fl(t,0,1).getBoundingClientRect()
return Fl=Math.abs(i.left-o.left)>1}function Ve(e,t){arguments.length>2&&(t.dependencies=Array.prototype.slice.call(arguments,2)),Il[e]=t}function Ke(e,t){Rl[e]=t}function je(e){if("string"==typeof e&&Rl.hasOwnProperty(e))e=Rl[e]
else if(e&&"string"==typeof e.name&&Rl.hasOwnProperty(e.name)){var t=Rl[e.name]
"string"==typeof t&&(t={name:t}),e=y(t,e),e.name=t.name}else{if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return je("application/xml")
if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return je("application/json")}return"string"==typeof e?{name:e}:e||{name:"null"}}function Xe(e,t){t=je(t)
var r=Il[t.name]
if(!r)return Xe(e,"text/plain")
var n=r(e,t)
if(Bl.hasOwnProperty(t.name)){var i=Bl[t.name]
for(var o in i)i.hasOwnProperty(o)&&(n.hasOwnProperty(o)&&(n["_"+o]=n[o]),n[o]=i[o])}if(n.name=t.name,t.helperType&&(n.helperType=t.helperType),t.modeProps)for(var l in t.modeProps)n[l]=t.modeProps[l]
return n}function _e(e,t){var r=Bl.hasOwnProperty(e)?Bl[e]:Bl[e]={}
u(t,r)}function Ye(e,t){if(t===!0)return t
if(e.copyState)return e.copyState(t)
var r={}
for(var n in t){var i=t[n]
i instanceof Array&&(i=i.concat([])),r[n]=i}return r}function qe(e,t){for(var r;e.innerMode&&(r=e.innerMode(t),r&&r.mode!=e);)t=r.state,e=r.mode
return r||{mode:e,state:t}}function $e(e,t,r){return!e.startState||e.startState(t,r)}function Ze(e,t,r,n){var i=[e.state.modeGen],o={}
ot(e,t.text,e.doc.mode,r,function(e,t){return i.push(e,t)},o,n)
for(var l=function(r){var n=e.state.overlays[r],l=1,s=0
ot(e,t.text,n.mode,!0,function(e,t){for(var r=l;s<e;){var o=i[l]
o>e&&i.splice(l,1,e,i[l+1],o),l+=2,s=Math.min(e,o)}if(t)if(n.opaque)i.splice(r,l-r,e,"overlay "+t),l=r+2
else for(;r<l;r+=2){var a=i[r+1]
i[r+1]=(a?a+" ":"")+"overlay "+t}},o)},s=0;s<e.state.overlays.length;++s)l(s)
return{styles:i,classes:o.bgClass||o.textClass?o:null}}function Je(e,t,r){if(!t.styles||t.styles[0]!=e.state.modeGen){var n=Qe(e,A(t)),i=Ze(e,t,t.text.length>e.options.maxHighlightLength?Ye(e.doc.mode,n):n)
t.stateAfter=n,t.styles=i.styles,i.classes?t.styleClasses=i.classes:t.styleClasses&&(t.styleClasses=null),r===e.doc.frontier&&e.doc.frontier++}return t.styles}function Qe(e,t,r){var n=e.doc,i=e.display
if(!n.mode.startState)return!0
var o=lt(e,t,r),l=o>n.first&&k(n,o-1).stateAfter
return l=l?Ye(n.mode,l):$e(n.mode),n.iter(o,t,function(r){et(e,r.text,l)
var s=o==t-1||o%5==0||o>=i.viewFrom&&o<i.viewTo
r.stateAfter=s?Ye(n.mode,l):null,++o}),r&&(n.frontier=o),l}function et(e,t,r,n){var i=e.doc.mode,o=new Ul(t,e.options.tabSize)
for(o.start=o.pos=n||0,""==t&&tt(i,r);!o.eol();)rt(i,o,r),o.start=o.pos}function tt(e,t){if(e.blankLine)return e.blankLine(t)
if(e.innerMode){var r=qe(e,t)
return r.mode.blankLine?r.mode.blankLine(r.state):void 0}}function rt(e,t,r,n){for(var i=0;i<10;i++){n&&(n[0]=qe(e,r).mode)
var o=e.token(t,r)
if(t.pos>t.start)return o}throw new Error("Mode "+e.name+" failed to advance stream.")}function nt(e,t,r,n){var i,o=function(e){return{start:f.start,end:f.pos,string:f.current(),type:i||null,state:e?Ye(l.mode,c):c}},l=e.doc,s=l.mode
t=U(l,t)
var a,u=k(l,t.line),c=Qe(e,t.line,r),f=new Ul(u.text,e.options.tabSize)
for(n&&(a=[]);(n||f.pos<t.ch)&&!f.eol();)f.start=f.pos,i=rt(s,f,c),n&&a.push(o(!0))
return n?a:o()}function it(e,t){if(e)for(;;){var r=e.match(/(?:^|\s+)line-(background-)?(\S+)/)
if(!r)break
e=e.slice(0,r.index)+e.slice(r.index+r[0].length)
var n=r[1]?"bgClass":"textClass"
null==t[n]?t[n]=r[2]:new RegExp("(?:^|s)"+r[2]+"(?:$|s)").test(t[n])||(t[n]+=" "+r[2])}return e}function ot(e,t,r,n,i,o,l){var s=r.flattenSpans
null==s&&(s=e.options.flattenSpans)
var a,u=0,c=null,f=new Ul(t,e.options.tabSize),d=e.options.addModeClass&&[null]
for(""==t&&it(tt(r,n),o);!f.eol();){if(f.pos>e.options.maxHighlightLength?(s=!1,l&&et(e,t,n,f.pos),f.pos=t.length,a=null):a=it(rt(r,f,n,d),o),d){var h=d[0].name
h&&(a="m-"+(a?h+" "+a:h))}if(!s||c!=a){for(;u<f.start;)u=Math.min(f.start,u+5e3),i(u,c)
c=a}f.start=f.pos}for(;u<f.pos;){var p=Math.min(f.pos,u+5e3)
i(p,c),u=p}}function lt(e,t,r){for(var n,i,o=e.doc,l=r?-1:t-(e.doc.mode.innerMode?1e3:100),s=t;s>l;--s){if(s<=o.first)return o.first
var a=k(o,s-1)
if(a.stateAfter&&(!r||s<=o.frontier))return s
var u=c(a.text,null,e.options.tabSize);(null==i||n>u)&&(i=s-1,n=u)}return i}function st(e,t,r,n){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),te(e),re(e,r)
var i=n?n(e):1
i!=e.height&&O(e,i)}function at(e){e.parent=null,te(e)}function ut(e,t){if(!e||/^\s*$/.test(e))return null
var r=t.addModeClass?jl:Kl
return r[e]||(r[e]=e.replace(/\S+/g,"cm-$&"))}function ct(e,t){var r=n("span",null,null,Jo?"padding-right: .1px":null),i={pre:n("pre",[r],"CodeMirror-line"),content:r,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:($o||Jo)&&e.getOption("lineWrapping")}
r.setAttribute("role","presentation"),i.pre.setAttribute("role","presentation"),t.measure={}
for(var o=0;o<=(t.rest?t.rest.length:0);o++){var l=o?t.rest[o-1]:t.line,a=void 0
i.pos=0,i.addToken=dt,Ue(e.display.measure)&&(a=Ce(l))&&(i.addToken=pt(i.addToken,a)),i.map=[]
var u=t!=e.display.externalMeasured&&A(l)
vt(l,i,Je(e,l,u)),l.styleClasses&&(l.styleClasses.bgClass&&(i.bgClass=s(l.styleClasses.bgClass,i.bgClass||"")),l.styleClasses.textClass&&(i.textClass=s(l.styleClasses.textClass,i.textClass||""))),0==i.map.length&&i.map.push(0,0,i.content.appendChild(Be(e.display.measure))),0==o?(t.measure.map=i.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(i.map),(t.measure.caches||(t.measure.caches=[])).push({}))}if(Jo){var c=i.content.lastChild;(/\bcm-tab\b/.test(c.className)||c.querySelector&&c.querySelector(".cm-tab"))&&(i.content.className="cm-tab-wrap-hack")}return Oe(e,"renderLine",e,t.line,i.pre),i.pre.className&&(i.textClass=s(i.pre.className,i.textClass||"")),i}function ft(e){var t=n("span","•","cm-invalidchar")
return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function dt(e,t,r,i,o,l,s){if(t){var a,u=e.splitSpaces?ht(t,e.trailingSpace):t,c=e.cm.state.specialChars,f=!1
if(c.test(t)){a=document.createDocumentFragment()
for(var d=0;;){c.lastIndex=d
var p=c.exec(t),g=p?p.index-d:t.length-d
if(g){var v=document.createTextNode(u.slice(d,d+g))
$o&&Zo<9?a.appendChild(n("span",[v])):a.appendChild(v),e.map.push(e.pos,e.pos+g,v),e.col+=g,e.pos+=g}if(!p)break
d+=g+1
var m=void 0
if("\t"==p[0]){var y=e.cm.options.tabSize,b=y-e.col%y
m=a.appendChild(n("span",h(b),"cm-tab")),m.setAttribute("role","presentation"),m.setAttribute("cm-text","\t"),e.col+=b}else"\r"==p[0]||"\n"==p[0]?(m=a.appendChild(n("span","\r"==p[0]?"␍":"␤","cm-invalidchar")),m.setAttribute("cm-text",p[0]),e.col+=1):(m=e.cm.options.specialCharPlaceholder(p[0]),m.setAttribute("cm-text",p[0]),$o&&Zo<9?a.appendChild(n("span",[m])):a.appendChild(m),e.col+=1)
e.map.push(e.pos,e.pos+1,m),e.pos++}}else e.col+=t.length,a=document.createTextNode(u),e.map.push(e.pos,e.pos+t.length,a),$o&&Zo<9&&(f=!0),e.pos+=t.length
if(e.trailingSpace=32==u.charCodeAt(t.length-1),r||i||o||f||s){var w=r||""
i&&(w+=i),o&&(w+=o)
var x=n("span",[a],w,s)
return l&&(x.title=l),e.content.appendChild(x)}e.content.appendChild(a)}}function ht(e,t){if(e.length>1&&!/  /.test(e))return e
for(var r=t,n="",i=0;i<e.length;i++){var o=e.charAt(i)
" "!=o||!r||i!=e.length-1&&32!=e.charCodeAt(i+1)||(o=" "),n+=o,r=" "==o}return n}function pt(e,t){return function(r,n,i,o,l,s,a){i=i?i+" cm-force-border":"cm-force-border"
for(var u=r.pos,c=u+n.length;;){for(var f=void 0,d=0;d<t.length&&(f=t[d],!(f.to>u&&f.from<=u));d++);if(f.to>=c)return e(r,n,i,o,l,s,a)
e(r,n.slice(0,f.to-u),i,o,null,s,a),o=null,n=n.slice(f.to-u),u=f.to}}}function gt(e,t,r,n){var i=!n&&r.widgetNode
i&&e.map.push(e.pos,e.pos+t,i),!n&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",r.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t,e.trailingSpace=!1}function vt(e,t,r){var n=e.markedSpans,i=e.text,o=0
if(n)for(var l,s,a,u,c,f,d,h=i.length,p=0,g=1,v="",m=0;;){if(m==p){a=u=c=f=s="",d=null,m=1/0
for(var y=[],b=void 0,w=0;w<n.length;++w){var x=n[w],C=x.marker
"bookmark"==C.type&&x.from==p&&C.widgetNode?y.push(C):x.from<=p&&(null==x.to||x.to>p||C.collapsed&&x.to==p&&x.from==p)?(null!=x.to&&x.to!=p&&m>x.to&&(m=x.to,u=""),C.className&&(a+=" "+C.className),C.css&&(s=(s?s+";":"")+C.css),C.startStyle&&x.from==p&&(c+=" "+C.startStyle),C.endStyle&&x.to==m&&(b||(b=[])).push(C.endStyle,x.to),C.title&&!f&&(f=C.title),C.collapsed&&(!d||oe(d.marker,C)<0)&&(d=x)):x.from>p&&m>x.from&&(m=x.from)}if(b)for(var S=0;S<b.length;S+=2)b[S+1]==m&&(u+=" "+b[S])
if(!d||d.from==p)for(var L=0;L<y.length;++L)gt(t,0,y[L])
if(d&&(d.from||0)==p){if(gt(t,(null==d.to?h+1:d.to)-p,d.marker,null==d.from),null==d.to)return
d.to==p&&(d=!1)}}if(p>=h)break
for(var M=Math.min(h,m);;){if(v){var k=p+v.length
if(!d){var T=k>M?v.slice(0,M-p):v
t.addToken(t,T,l?l+a:a,c,p+T.length==m?u:"",f,s)}if(k>=M){v=v.slice(M-p),p=M
break}p=k,c=""}v=i.slice(o,o=r[g++]),l=ut(r[g++],t.cm.options)}}else for(var N=1;N<r.length;N+=2)t.addToken(t,i.slice(o,o=r[N]),ut(r[N+1],t.cm.options))}function mt(e,t,r){this.line=t,this.rest=de(t),this.size=this.rest?A(p(this.rest))-r+1:1,this.node=this.text=null,this.hidden=ge(e,t)}function yt(e,t,r){for(var n,i=[],o=t;o<r;o=n){var l=new mt(e.doc,k(e.doc,o),o)
n=o+l.size,i.push(l)}return i}function bt(e){Xl?Xl.ops.push(e):e.ownsGroup=Xl={ops:[e],delayedCallbacks:[]}}function wt(e){var t=e.delayedCallbacks,r=0
do{for(;r<t.length;r++)t[r].call(null)
for(var n=0;n<e.ops.length;n++){var i=e.ops[n]
if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm)}}while(r<t.length)}function xt(e,t){var r=e.ownsGroup
if(r)try{wt(r)}finally{Xl=null,t(r)}}function Ct(e,t){var r=Te(e,t)
if(r.length){var n,i=Array.prototype.slice.call(arguments,2)
Xl?n=Xl.delayedCallbacks:_l?n=_l:(n=_l=[],setTimeout(St,0))
for(var o=function(e){n.push(function(){return r[e].apply(null,i)})},l=0;l<r.length;++l)o(l)}}function St(){var e=_l
_l=null
for(var t=0;t<e.length;++t)e[t]()}function Lt(e,t,r,n){for(var i=0;i<t.changes.length;i++){var o=t.changes[i]
"text"==o?Nt(e,t):"gutter"==o?At(e,t,r,n):"class"==o?Ot(t):"widget"==o&&Wt(e,t,n)}t.changes=null}function Mt(e){return e.node==e.text&&(e.node=n("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),$o&&Zo<8&&(e.node.style.zIndex=2)),e.node}function kt(e){var t=e.bgClass?e.bgClass+" "+(e.line.bgClass||""):e.line.bgClass
if(t&&(t+=" CodeMirror-linebackground"),e.background)t?e.background.className=t:(e.background.parentNode.removeChild(e.background),e.background=null)
else if(t){var r=Mt(e)
e.background=r.insertBefore(n("div",null,t),r.firstChild)}}function Tt(e,t){var r=e.display.externalMeasured
return r&&r.line==t.line?(e.display.externalMeasured=null,t.measure=r.measure,r.built):ct(e,t)}function Nt(e,t){var r=t.text.className,n=Tt(e,t)
t.text==t.node&&(t.node=n.pre),t.text.parentNode.replaceChild(n.pre,t.text),t.text=n.pre,n.bgClass!=t.bgClass||n.textClass!=t.textClass?(t.bgClass=n.bgClass,t.textClass=n.textClass,Ot(t)):r&&(t.text.className=r)}function Ot(e){kt(e),e.line.wrapClass?Mt(e).className=e.line.wrapClass:e.node!=e.text&&(e.node.className="")
var t=e.textClass?e.textClass+" "+(e.line.textClass||""):e.line.textClass
e.text.className=t||""}function At(e,t,r,i){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var o=Mt(t)
t.gutterBackground=n("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),o.insertBefore(t.gutterBackground,t.text)}var l=t.line.gutterMarkers
if(e.options.lineNumbers||l){var s=Mt(t),a=t.gutter=n("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px")
if(e.display.input.setUneditable(a),s.insertBefore(a,t.text),t.line.gutterClass&&(a.className+=" "+t.line.gutterClass),!e.options.lineNumbers||l&&l["CodeMirror-linenumbers"]||(t.lineNumber=a.appendChild(n("div",H(e.options,r),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),l)for(var u=0;u<e.options.gutters.length;++u){var c=e.options.gutters[u],f=l.hasOwnProperty(c)&&l[c]
f&&a.appendChild(n("div",[f],"CodeMirror-gutter-elt","left: "+i.gutterLeft[c]+"px; width: "+i.gutterWidth[c]+"px"))}}}function Wt(e,t,r){t.alignable&&(t.alignable=null)
for(var n=t.node.firstChild,i=void 0;n;n=i)i=n.nextSibling,"CodeMirror-linewidget"==n.className&&t.node.removeChild(n)
Ht(e,t,r)}function Dt(e,t,r,n){var i=Tt(e,t)
return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),Ot(t),At(e,t,r,n),Ht(e,t,n),t.node}function Ht(e,t,r){if(zt(e,t.line,t,r,!0),t.rest)for(var n=0;n<t.rest.length;n++)zt(e,t.rest[n],t,r,!1)}function zt(e,t,r,i,o){if(t.widgets)for(var l=Mt(r),s=0,a=t.widgets;s<a.length;++s){var u=a[s],c=n("div",[u.node],"CodeMirror-linewidget")
u.handleMouseEvents||c.setAttribute("cm-ignore-events","true"),Et(u,c,r,i),e.display.input.setUneditable(c),o&&u.above?l.insertBefore(c,r.gutter||r.text):l.appendChild(c),Ct(u,"redraw")}}function Et(e,t,r,n){if(e.noHScroll){(r.alignable||(r.alignable=[])).push(t)
var i=n.wrapperWidth
t.style.left=n.fixedPos+"px",e.coverGutter||(i-=n.gutterTotalWidth,t.style.paddingLeft=n.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-n.gutterTotalWidth+"px"))}function Pt(e){if(null!=e.height)return e.height
var t=e.doc.cm
if(!t)return 0
if(!i(document.body,e.node)){var o="position: relative;"
e.coverGutter&&(o+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(o+="width: "+t.display.wrapper.clientWidth+"px;"),r(t.display.measure,n("div",[e.node],null,o))}return e.height=e.node.parentNode.offsetHeight}function Ft(e,t){for(var r=Ie(t);r!=e.wrapper;r=r.parentNode)if(!r||1==r.nodeType&&"true"==r.getAttribute("cm-ignore-events")||r.parentNode==e.sizer&&r!=e.mover)return!0}function It(e){return e.lineSpace.offsetTop}function Rt(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function Bt(e){if(e.cachedPaddingH)return e.cachedPaddingH
var t=r(e.measure,n("pre","x")),i=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,o={left:parseInt(i.paddingLeft),right:parseInt(i.paddingRight)}
return isNaN(o.left)||isNaN(o.right)||(e.cachedPaddingH=o),o}function Ut(e){return bl-e.display.nativeBarWidth}function Gt(e){return e.display.scroller.clientWidth-Ut(e)-e.display.barWidth}function Vt(e){return e.display.scroller.clientHeight-Ut(e)-e.display.barHeight}function Kt(e,t,r){var n=e.options.lineWrapping,i=n&&Gt(e)
if(!t.measure.heights||n&&t.measure.width!=i){var o=t.measure.heights=[]
if(n){t.measure.width=i
for(var l=t.text.firstChild.getClientRects(),s=0;s<l.length-1;s++){var a=l[s],u=l[s+1]
Math.abs(a.bottom-u.bottom)>2&&o.push((a.bottom+u.top)/2-r.top)}}o.push(r.bottom-r.top)}}function jt(e,t,r){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache}
for(var n=0;n<e.rest.length;n++)if(e.rest[n]==t)return{map:e.measure.maps[n],cache:e.measure.caches[n]}
for(var i=0;i<e.rest.length;i++)if(A(e.rest[i])>r)return{map:e.measure.maps[i],cache:e.measure.caches[i],before:!0}}function Xt(e,t){t=ce(t)
var n=A(t),i=e.display.externalMeasured=new mt(e.doc,t,n)
i.lineN=n
var o=i.built=ct(e,i)
return i.text=o.pre,r(e.display.lineMeasure,o.pre),i}function _t(e,t,r,n){return $t(e,qt(e,t),r,n)}function Yt(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[Sr(e,t)]
var r=e.display.externalMeasured
return r&&t>=r.lineN&&t<r.lineN+r.size?r:void 0}function qt(e,t){var r=A(t),n=Yt(e,r)
n&&!n.text?n=null:n&&n.changes&&(Lt(e,n,r,yr(e)),e.curOp.forceUpdate=!0),n||(n=Xt(e,t))
var i=jt(n,t,r)
return{line:t,view:n,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function $t(e,t,r,n,i){t.before&&(r=-1)
var o,l=r+(n||"")
return t.cache.hasOwnProperty(l)?o=t.cache[l]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(Kt(e,t.view,t.rect),t.hasHeights=!0),o=Qt(e,t,r,n),o.bogus||(t.cache[l]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}function Zt(e,t,r){for(var n,i,o,l,s,a,u=0;u<e.length;u+=3)if(s=e[u],a=e[u+1],t<s?(i=0,o=1,l="left"):t<a?(i=t-s,o=i+1):(u==e.length-3||t==a&&e[u+3]>t)&&(o=a-s,i=o-1,t>=a&&(l="right")),null!=i){if(n=e[u+2],s==a&&r==(n.insertLeft?"left":"right")&&(l=r),"left"==r&&0==i)for(;u&&e[u-2]==e[u-3]&&e[u-1].insertLeft;)n=e[(u-=3)+2],l="left"
if("right"==r&&i==a-s)for(;u<e.length-3&&e[u+3]==e[u+4]&&!e[u+5].insertLeft;)n=e[(u+=3)+2],l="right"
break}return{node:n,start:i,end:o,collapse:l,coverStart:s,coverEnd:a}}function Jt(e,t){var r=Yl
if("left"==t)for(var n=0;n<e.length&&(r=e[n]).left==r.right;n++);else for(var i=e.length-1;i>=0&&(r=e[i]).left==r.right;i--);return r}function Qt(e,t,r,n){var i,o=Zt(t.map,r,n),l=o.node,s=o.start,a=o.end,u=o.collapse
if(3==l.nodeType){for(var c=0;c<4;c++){for(;s&&C(t.line.text.charAt(o.coverStart+s));)--s
for(;o.coverStart+a<o.coverEnd&&C(t.line.text.charAt(o.coverStart+a));)++a
if(i=$o&&Zo<9&&0==s&&a==o.coverEnd-o.coverStart?l.parentNode.getBoundingClientRect():Jt(fl(l,s,a).getClientRects(),n),i.left||i.right||0==s)break
a=s,s-=1,u="right"}$o&&Zo<11&&(i=er(e.display.measure,i))}else{s>0&&(u=n="right")
var f
i=e.options.lineWrapping&&(f=l.getClientRects()).length>1?f["right"==n?f.length-1:0]:l.getBoundingClientRect()}if($o&&Zo<9&&!s&&(!i||!i.left&&!i.right)){var d=l.parentNode.getClientRects()[0]
i=d?{left:d.left,right:d.left+mr(e.display),top:d.top,bottom:d.bottom}:Yl}for(var h=i.top-t.rect.top,p=i.bottom-t.rect.top,g=(h+p)/2,v=t.view.measure.heights,m=0;m<v.length-1&&!(g<v[m]);m++);var y=m?v[m-1]:0,b=v[m],w={left:("right"==u?i.right:i.left)-t.rect.left,right:("left"==u?i.left:i.right)-t.rect.left,top:y,bottom:b}
return i.left||i.right||(w.bogus=!0),e.options.singleCursorHeightPerLine||(w.rtop=h,w.rbottom=p),w}function er(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!Ge(e))return t
var r=screen.logicalXDPI/screen.deviceXDPI,n=screen.logicalYDPI/screen.deviceYDPI
return{left:t.left*r,right:t.right*r,top:t.top*n,bottom:t.bottom*n}}function tr(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function rr(e){e.display.externalMeasure=null,t(e.display.lineMeasure)
for(var r=0;r<e.display.view.length;r++)tr(e.display.view[r])}function nr(e){rr(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function ir(){return window.pageXOffset||(document.documentElement||document.body).scrollLeft}function or(){return window.pageYOffset||(document.documentElement||document.body).scrollTop}function lr(e,t,r,n,i){if(!i&&t.widgets)for(var o=0;o<t.widgets.length;++o)if(t.widgets[o].above){var l=Pt(t.widgets[o])
r.top+=l,r.bottom+=l}if("line"==n)return r
n||(n="local")
var s=me(t)
if("local"==n?s+=It(e.display):s-=e.display.viewOffset,"page"==n||"window"==n){var a=e.display.lineSpace.getBoundingClientRect()
s+=a.top+("window"==n?0:or())
var u=a.left+("window"==n?0:ir())
r.left+=u,r.right+=u}return r.top+=s,r.bottom+=s,r}function sr(e,t,r){if("div"==r)return t
var n=t.left,i=t.top
if("page"==r)n-=ir(),i-=or()
else if("local"==r||!r){var o=e.display.sizer.getBoundingClientRect()
n+=o.left,i+=o.top}var l=e.display.lineSpace.getBoundingClientRect()
return{left:n-l.left,top:i-l.top}}function ar(e,t,r,n,i){return n||(n=k(e.doc,t.line)),lr(e,n,_t(e,n,t.ch,i),r)}function ur(e,t,r,n,i,o){function l(t,l){var s=$t(e,i,t,l?"right":"left",o)
return l?s.left=s.right:s.right=s.left,lr(e,n,s,r)}function s(e,t,r){var n=a[t],i=n.level%2!=0
return l(r?e-1:e,i!=r)}n=n||k(e.doc,t.line),i||(i=qt(e,n))
var a=Ce(n),u=t.ch,c=t.sticky
if(u>=n.text.length?(u=n.text.length,c="before"):u<=0&&(u=0,c="after"),!a)return l("before"==c?u-1:u,"before"==c)
var f=xe(a,u,c),d=Ol,h=s(u,f,"before"==c)
return null!=d&&(h.other=s(u,d,"before"!=c)),h}function cr(e,t){var r=0
t=U(e.doc,t),e.options.lineWrapping||(r=mr(e.display)*t.ch)
var n=k(e.doc,t.line),i=me(n)+It(e.display)
return{left:r,right:r,top:i,bottom:i+n.height}}function fr(e,t,r,n,i){var o=z(e,t,r)
return o.xRel=i,n&&(o.outside=!0),o}function dr(e,t,r){var n=e.doc
if(r+=e.display.viewOffset,r<0)return fr(n.first,0,null,!0,-1)
var i=W(n,r),o=n.first+n.size-1
if(i>o)return fr(n.first+n.size-1,k(n,o).text.length,null,!0,1)
t<0&&(t=0)
for(var l=k(n,i);;){var s=gr(e,l,i,t,r),a=ae(l),u=a&&a.find(0,!0)
if(!a||!(s.ch>u.from.ch||s.ch==u.from.ch&&s.xRel>0))return s
i=A(l=u.to.line)}}function hr(e,t,r,n){var i=function(n){return lr(e,t,$t(e,r,n),"line")},o=t.text.length,l=L(function(e){return i(e-1).bottom<=n},o,0)
return o=L(function(e){return i(e).top>n},l,o),{begin:l,end:o}}function pr(e,t,r,n){var i=lr(e,t,$t(e,r,n),"line").top
return hr(e,t,r,i)}function gr(e,t,r,n,i){i-=me(t)
var o,l=0,s=t.text.length,a=qt(e,t),u=Ce(t)
if(u){if(e.options.lineWrapping){var c
c=hr(e,t,a,i),l=c.begin,s=c.end,c}o=new z(r,l)
var f,d,h=ur(e,o,"line",t,a).left,p=h<n?1:-1,g=h-n
do{if(f=g,d=o,o=ke(e,t,o,p),null==o||o.ch<l||s<=("before"==o.sticky?o.ch-1:o.ch)){o=d
break}g=ur(e,o,"line",t,a).left-n}while(p<0!=g<0&&Math.abs(g)<=Math.abs(f))
if(Math.abs(g)>Math.abs(f)){if(g<0==f<0)throw new Error("Broke out of infinite loop in coordsCharInner")
o=d}}else{var v=L(function(r){var o=lr(e,t,$t(e,a,r),"line")
return o.top>i?(s=Math.min(r,s),!0):!(o.bottom<=i)&&(o.left>n||!(o.right<n)&&n-o.left<o.right-n)},l,s)
v=S(t.text,v,1),o=new z(r,v,v==s?"before":"after")}var m=ur(e,o,"line",t,a)
return(i<m.top||m.bottom<i)&&(o.outside=!0),o.xRel=n<m.left?-1:n>m.right?1:0,o}function vr(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight
if(null==Vl){Vl=n("pre")
for(var i=0;i<49;++i)Vl.appendChild(document.createTextNode("x")),Vl.appendChild(n("br"))
Vl.appendChild(document.createTextNode("x"))}r(e.measure,Vl)
var o=Vl.offsetHeight/50
return o>3&&(e.cachedTextHeight=o),t(e.measure),o||1}function mr(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth
var t=n("span","xxxxxxxxxx"),i=n("pre",[t])
r(e.measure,i)
var o=t.getBoundingClientRect(),l=(o.right-o.left)/10
return l>2&&(e.cachedCharWidth=l),l||10}function yr(e){for(var t=e.display,r={},n={},i=t.gutters.clientLeft,o=t.gutters.firstChild,l=0;o;o=o.nextSibling,++l)r[e.options.gutters[l]]=o.offsetLeft+o.clientLeft+i,n[e.options.gutters[l]]=o.clientWidth
return{fixedPos:br(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:r,gutterWidth:n,wrapperWidth:t.wrapper.clientWidth}}function br(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function wr(e){var t=vr(e.display),r=e.options.lineWrapping,n=r&&Math.max(5,e.display.scroller.clientWidth/mr(e.display)-3)
return function(i){if(ge(e.doc,i))return 0
var o=0
if(i.widgets)for(var l=0;l<i.widgets.length;l++)i.widgets[l].height&&(o+=i.widgets[l].height)
return r?o+(Math.ceil(i.text.length/n)||1)*t:o+t}}function xr(e){var t=e.doc,r=wr(e)
t.iter(function(e){var t=r(e)
t!=e.height&&O(e,t)})}function Cr(e,t,r,n){var i=e.display
if(!r&&"true"==Ie(t).getAttribute("cm-not-content"))return null
var o,l,s=i.lineSpace.getBoundingClientRect()
try{o=t.clientX-s.left,l=t.clientY-s.top}catch(e){return null}var a,u=dr(e,o,l)
if(n&&1==u.xRel&&(a=k(e.doc,u.line).text).length==u.ch){var f=c(a,a.length,e.options.tabSize)-a.length
u=z(u.line,Math.max(0,Math.round((o-Bt(e.display).left)/mr(e.display))-f))}return u}function Sr(e,t){if(t>=e.display.viewTo)return null
if(t-=e.display.viewFrom,t<0)return null
for(var r=e.display.view,n=0;n<r.length;n++)if(t-=r[n].size,t<0)return n}function Lr(e){e.display.input.showSelection(e.display.input.prepareSelection())}function Mr(e,t){for(var r=e.doc,n={},i=n.cursors=document.createDocumentFragment(),o=n.selection=document.createDocumentFragment(),l=0;l<r.sel.ranges.length;l++)if(t!==!1||l!=r.sel.primIndex){var s=r.sel.ranges[l]
if(!(s.from().line>=e.display.viewTo||s.to().line<e.display.viewFrom)){var a=s.empty();(a||e.options.showCursorWhenSelecting)&&kr(e,s.head,i),a||Tr(e,s,o)}}return n}function kr(e,t,r){var i=ur(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),o=r.appendChild(n("div"," ","CodeMirror-cursor"))
if(o.style.left=i.left+"px",o.style.top=i.top+"px",o.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",i.other){var l=r.appendChild(n("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"))
l.style.display="",l.style.left=i.other.left+"px",l.style.top=i.other.top+"px",l.style.height=.85*(i.other.bottom-i.other.top)+"px"}}function Tr(e,t,r){function i(e,t,r,i){t<0&&(t=0),t=Math.round(t),i=Math.round(i),a.appendChild(n("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px;\n                             top: "+t+"px; width: "+(null==r?f-e:r)+"px;\n                             height: "+(i-t)+"px"))}function o(t,r,n){function o(r,n){return ar(e,z(t,r),"div",u,n)}var l,a,u=k(s,t),d=u.text.length
return we(Ce(u),r||0,null==n?d:n,function(e,t,s){var u,h,p,g=o(e,"left")
if(e==t)u=g,h=p=g.left
else{if(u=o(t-1,"right"),"rtl"==s){var v=g
g=u,u=v}h=g.left,p=u.right}null==r&&0==e&&(h=c),u.top-g.top>3&&(i(h,g.top,null,g.bottom),h=c,g.bottom<u.top&&i(h,g.bottom,null,u.top)),null==n&&t==d&&(p=f),(!l||g.top<l.top||g.top==l.top&&g.left<l.left)&&(l=g),(!a||u.bottom>a.bottom||u.bottom==a.bottom&&u.right>a.right)&&(a=u),h<c+1&&(h=c),i(h,u.top,p-h,u.bottom)}),{start:l,end:a}}var l=e.display,s=e.doc,a=document.createDocumentFragment(),u=Bt(e.display),c=u.left,f=Math.max(l.sizerWidth,Gt(e)-l.sizer.offsetLeft)-u.right,d=t.from(),h=t.to()
if(d.line==h.line)o(d.line,d.ch,h.ch)
else{var p=k(s,d.line),g=k(s,h.line),v=ce(p)==ce(g),m=o(d.line,d.ch,v?p.text.length+1:null).end,y=o(h.line,v?0:null,h.ch).start
v&&(m.top<y.top-2?(i(m.right,m.top,null,m.bottom),i(c,y.top,y.left,y.bottom)):i(m.right,m.top,y.left-m.right,m.bottom)),m.bottom<y.top&&i(c,m.bottom,null,y.top)}r.appendChild(a)}function Nr(e){if(e.state.focused){var t=e.display
clearInterval(t.blinker)
var r=!0
t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval(function(){return t.cursorDiv.style.visibility=(r=!r)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function Or(e){e.state.focused||(e.display.input.focus(),Wr(e))}function Ar(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,Dr(e))},100)}function Wr(e,t){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(Oe(e,"focus",e,t),e.state.focused=!0,l(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),Jo&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Nr(e))}function Dr(e,t){e.state.delayingBlurEvent||(e.state.focused&&(Oe(e,"blur",e,t),e.state.focused=!1,pl(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function Hr(e){var t=e.display,r=t.view
if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var n=br(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=n+"px",l=0;l<r.length;l++)if(!r[l].hidden){e.options.fixedGutter&&(r[l].gutter&&(r[l].gutter.style.left=o),r[l].gutterBackground&&(r[l].gutterBackground.style.left=o))
var s=r[l].alignable
if(s)for(var a=0;a<s.length;a++)s[a].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=n+i+"px")}}function zr(e){if(!e.options.lineNumbers)return!1
var t=e.doc,r=H(e.options,t.first+t.size-1),i=e.display
if(r.length!=i.lineNumChars){var o=i.measure.appendChild(n("div",[n("div",r)],"CodeMirror-linenumber CodeMirror-gutter-elt")),l=o.firstChild.offsetWidth,s=o.offsetWidth-l
return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(l,i.lineGutter.offsetWidth-s)+1,i.lineNumWidth=i.lineNumInnerWidth+s,i.lineNumChars=i.lineNumInnerWidth?r.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",kn(e),!0}return!1}function Er(e){for(var t=e.display,r=t.lineDiv.offsetTop,n=0;n<t.view.length;n++){var i=t.view[n],o=void 0
if(!i.hidden){if($o&&Zo<8){var l=i.node.offsetTop+i.node.offsetHeight
o=l-r,r=l}else{var s=i.node.getBoundingClientRect()
o=s.bottom-s.top}var a=i.line.height-o
if(o<2&&(o=vr(t)),(a>.001||a<-.001)&&(O(i.line,o),Pr(i.line),i.rest))for(var u=0;u<i.rest.length;u++)Pr(i.rest[u])}}}function Pr(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t)e.widgets[t].height=e.widgets[t].node.parentNode.offsetHeight}function Fr(e,t,r){var n=r&&null!=r.top?Math.max(0,r.top):e.scroller.scrollTop
n=Math.floor(n-It(e))
var i=r&&null!=r.bottom?r.bottom:n+e.wrapper.clientHeight,o=W(t,n),l=W(t,i)
if(r&&r.ensure){var s=r.ensure.from.line,a=r.ensure.to.line
s<o?(o=s,l=W(t,me(k(t,s))+e.wrapper.clientHeight)):Math.min(a,t.lastLine())>=l&&(o=W(t,me(k(t,a))-e.wrapper.clientHeight),l=a)}return{from:o,to:Math.max(l,o+1)}}function Ir(e,t){Math.abs(e.doc.scrollTop-t)<2||(e.doc.scrollTop=t,Xo||Ln(e,{top:t}),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t),e.display.scrollbars.setScrollTop(t),Xo&&Ln(e),bn(e,100))}function Rr(e,t,r){(r?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)||(t=Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth),e.doc.scrollLeft=t,Hr(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}function Br(e){var t=e.wheelDeltaX,r=e.wheelDeltaY
return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==r&&e.detail&&e.axis==e.VERTICAL_AXIS?r=e.detail:null==r&&(r=e.wheelDelta),{x:t,y:r}}function Ur(e){var t=Br(e)
return t.x*=$l,t.y*=$l,t}function Gr(e,t){var r=Br(t),n=r.x,i=r.y,o=e.display,l=o.scroller,s=l.scrollWidth>l.clientWidth,a=l.scrollHeight>l.clientHeight
if(n&&s||i&&a){if(i&&sl&&Jo)e:for(var u=t.target,c=o.view;u!=l;u=u.parentNode)for(var f=0;f<c.length;f++)if(c[f].node==u){e.display.currentWheelTarget=u
break e}if(n&&!Xo&&!tl&&null!=$l)return i&&a&&Ir(e,Math.max(0,Math.min(l.scrollTop+i*$l,l.scrollHeight-l.clientHeight))),Rr(e,Math.max(0,Math.min(l.scrollLeft+n*$l,l.scrollWidth-l.clientWidth))),(!i||i&&a)&&ze(t),void(o.wheelStartX=null)
if(i&&null!=$l){var d=i*$l,h=e.doc.scrollTop,p=h+o.wrapper.clientHeight
d<0?h=Math.max(0,h+d-50):p=Math.min(e.doc.height,p+d+50),Ln(e,{top:h,bottom:p})}ql<20&&(null==o.wheelStartX?(o.wheelStartX=l.scrollLeft,o.wheelStartY=l.scrollTop,o.wheelDX=n,o.wheelDY=i,setTimeout(function(){if(null!=o.wheelStartX){var e=l.scrollLeft-o.wheelStartX,t=l.scrollTop-o.wheelStartY,r=t&&o.wheelDY&&t/o.wheelDY||e&&o.wheelDX&&e/o.wheelDX
o.wheelStartX=o.wheelStartY=null,r&&($l=($l*ql+r)/(ql+1),++ql)}},200)):(o.wheelDX+=n,o.wheelDY+=i))}}function Vr(e){var t=e.display,r=t.gutters.offsetWidth,n=Math.round(e.doc.height+Rt(e.display))
return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?r:0,docHeight:n,scrollHeight:n+Ut(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:r}}function Kr(e,t){t||(t=Vr(e))
var r=e.display.barWidth,n=e.display.barHeight
jr(e,t)
for(var i=0;i<4&&r!=e.display.barWidth||n!=e.display.barHeight;i++)r!=e.display.barWidth&&e.options.lineWrapping&&Er(e),jr(e,Vr(e)),r=e.display.barWidth,n=e.display.barHeight}function jr(e,t){var r=e.display,n=r.scrollbars.update(t)
r.sizer.style.paddingRight=(r.barWidth=n.right)+"px",r.sizer.style.paddingBottom=(r.barHeight=n.bottom)+"px",r.heightForcer.style.borderBottom=n.bottom+"px solid transparent",n.right&&n.bottom?(r.scrollbarFiller.style.display="block",r.scrollbarFiller.style.height=n.bottom+"px",r.scrollbarFiller.style.width=n.right+"px"):r.scrollbarFiller.style.display="",n.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(r.gutterFiller.style.display="block",r.gutterFiller.style.height=n.bottom+"px",r.gutterFiller.style.width=t.gutterWidth+"px"):r.gutterFiller.style.display=""}function Xr(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&pl(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new Ql[e.options.scrollbarStyle](function(t){e.display.wrapper.insertBefore(t,e.display.scrollbarFiller),Dl(t,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),t.setAttribute("cm-not-content","true")},function(t,r){"horizontal"==r?Rr(e,t):Ir(e,t)},e),e.display.scrollbars.addClass&&l(e.display.wrapper,e.display.scrollbars.addClass)}function _r(e,t){if(!Ae(e,"scrollCursorIntoView")){var r=e.display,i=r.sizer.getBoundingClientRect(),o=null
if(t.top+i.top<0?o=!0:t.bottom+i.top>(window.innerHeight||document.documentElement.clientHeight)&&(o=!1),null!=o&&!il){var l=n("div","​",null,"position: absolute;\n                         top: "+(t.top-r.viewOffset-It(e.display))+"px;\n                         height: "+(t.bottom-t.top+Ut(e)+r.barHeight)+"px;\n                         left: "+t.left+"px; width: 2px;")
e.display.lineSpace.appendChild(l),l.scrollIntoView(o),e.display.lineSpace.removeChild(l)}}}function Yr(e,t,r,n){null==n&&(n=0)
for(var i,o=0;o<5;o++){var l=!1
i=ur(e,t)
var s=r&&r!=t?ur(e,r):i,a=$r(e,Math.min(i.left,s.left),Math.min(i.top,s.top)-n,Math.max(i.left,s.left),Math.max(i.bottom,s.bottom)+n),u=e.doc.scrollTop,c=e.doc.scrollLeft
if(null!=a.scrollTop&&(Ir(e,a.scrollTop),Math.abs(e.doc.scrollTop-u)>1&&(l=!0)),null!=a.scrollLeft&&(Rr(e,a.scrollLeft),Math.abs(e.doc.scrollLeft-c)>1&&(l=!0)),!l)break}return i}function qr(e,t,r,n,i){var o=$r(e,t,r,n,i)
null!=o.scrollTop&&Ir(e,o.scrollTop),null!=o.scrollLeft&&Rr(e,o.scrollLeft)}function $r(e,t,r,n,i){var o=e.display,l=vr(e.display)
r<0&&(r=0)
var s=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:o.scroller.scrollTop,a=Vt(e),u={}
i-r>a&&(i=r+a)
var c=e.doc.height+Rt(o),f=r<l,d=i>c-l
if(r<s)u.scrollTop=f?0:r
else if(i>s+a){var h=Math.min(r,(d?c:i)-a)
h!=s&&(u.scrollTop=h)}var p=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:o.scroller.scrollLeft,g=Gt(e)-(e.options.fixedGutter?o.gutters.offsetWidth:0),v=n-t>g
return v&&(n=t+g),t<10?u.scrollLeft=0:t<p?u.scrollLeft=Math.max(0,t-(v?0:10)):n>g+p-3&&(u.scrollLeft=n+(v?0:10)-g),u}function Zr(e,t,r){null==t&&null==r||Qr(e),null!=t&&(e.curOp.scrollLeft=(null==e.curOp.scrollLeft?e.doc.scrollLeft:e.curOp.scrollLeft)+t),null!=r&&(e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+r)}function Jr(e){Qr(e)
var t=e.getCursor(),r=t,n=t
e.options.lineWrapping||(r=t.ch?z(t.line,t.ch-1):t,n=z(t.line,t.ch+1)),e.curOp.scrollToPos={from:r,to:n,margin:e.options.cursorScrollMargin,isCursor:!0}}function Qr(e){var t=e.curOp.scrollToPos
if(t){e.curOp.scrollToPos=null
var r=cr(e,t.from),n=cr(e,t.to),i=$r(e,Math.min(r.left,n.left),Math.min(r.top,n.top)-t.margin,Math.max(r.right,n.right),Math.max(r.bottom,n.bottom)+t.margin)
e.scrollTo(i.scrollLeft,i.scrollTop)}}function en(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:null,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++es},bt(e.curOp)}function tn(e){var t=e.curOp
xt(t,function(e){for(var t=0;t<e.ops.length;t++)e.ops[t].cm.curOp=null
rn(e)})}function rn(e){for(var t=e.ops,r=0;r<t.length;r++)nn(t[r])
for(var n=0;n<t.length;n++)on(t[n])
for(var i=0;i<t.length;i++)ln(t[i])
for(var o=0;o<t.length;o++)sn(t[o])
for(var l=0;l<t.length;l++)an(t[l])}function nn(e){var t=e.cm,r=t.display
xn(t),e.updateMaxLine&&be(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<r.viewFrom||e.scrollToPos.to.line>=r.viewTo)||r.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new ts(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function on(e){e.updatedDisplay=e.mustUpdate&&Cn(e.cm,e.update)}function ln(e){var t=e.cm,r=t.display
e.updatedDisplay&&Er(t),e.barMeasure=Vr(t),r.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=_t(t,r.maxLine,r.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(r.scroller.clientWidth,r.sizer.offsetLeft+e.adjustWidthTo+Ut(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,r.sizer.offsetLeft+e.adjustWidthTo-Gt(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=r.input.prepareSelection(e.focus))}function sn(e){var t=e.cm
null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&Rr(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1)
var r=e.focus&&e.focus==o()&&(!document.hasFocus||document.hasFocus())
e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,r),(e.updatedDisplay||e.startHeight!=t.doc.height)&&Kr(t,e.barMeasure),e.updatedDisplay&&Tn(t,e.barMeasure),e.selectionChanged&&Nr(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),r&&Or(e.cm)}function an(e){var t=e.cm,r=t.display,n=t.doc
if(e.updatedDisplay&&Sn(t,e.update),null==r.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(r.wheelStartX=r.wheelStartY=null),null==e.scrollTop||r.scroller.scrollTop==e.scrollTop&&!e.forceScroll||(n.scrollTop=Math.max(0,Math.min(r.scroller.scrollHeight-r.scroller.clientHeight,e.scrollTop)),r.scrollbars.setScrollTop(n.scrollTop),r.scroller.scrollTop=n.scrollTop),null==e.scrollLeft||r.scroller.scrollLeft==e.scrollLeft&&!e.forceScroll||(n.scrollLeft=Math.max(0,Math.min(r.scroller.scrollWidth-r.scroller.clientWidth,e.scrollLeft)),r.scrollbars.setScrollLeft(n.scrollLeft),r.scroller.scrollLeft=n.scrollLeft,Hr(t)),e.scrollToPos){var i=Yr(t,U(n,e.scrollToPos.from),U(n,e.scrollToPos.to),e.scrollToPos.margin)
e.scrollToPos.isCursor&&t.state.focused&&_r(t,i)}var o=e.maybeHiddenMarkers,l=e.maybeUnhiddenMarkers
if(o)for(var s=0;s<o.length;++s)o[s].lines.length||Oe(o[s],"hide")
if(l)for(var a=0;a<l.length;++a)l[a].lines.length&&Oe(l[a],"unhide")
r.wrapper.offsetHeight&&(n.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&Oe(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function un(e,t){if(e.curOp)return t()
en(e)
try{return t()}finally{tn(e)}}function cn(e,t){return function(){if(e.curOp)return t.apply(e,arguments)
en(e)
try{return t.apply(e,arguments)}finally{tn(e)}}}function fn(e){return function(){if(this.curOp)return e.apply(this,arguments)
en(this)
try{return e.apply(this,arguments)}finally{tn(this)}}}function dn(e){return function(){var t=this.cm
if(!t||t.curOp)return e.apply(this,arguments)
en(t)
try{return e.apply(this,arguments)}finally{tn(t)}}}function hn(e,t,r,n){null==t&&(t=e.doc.first),null==r&&(r=e.doc.first+e.doc.size),n||(n=0)
var i=e.display
if(n&&r<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)Nl&&he(e.doc,t)<i.viewTo&&gn(e)
else if(r<=i.viewFrom)Nl&&pe(e.doc,r+n)>i.viewFrom?gn(e):(i.viewFrom+=n,i.viewTo+=n)
else if(t<=i.viewFrom&&r>=i.viewTo)gn(e)
else if(t<=i.viewFrom){var o=vn(e,r,r+n,1)
o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=n):gn(e)}else if(r>=i.viewTo){var l=vn(e,t,t,-1)
l?(i.view=i.view.slice(0,l.index),i.viewTo=l.lineN):gn(e)}else{var s=vn(e,t,t,-1),a=vn(e,r,r+n,1)
s&&a?(i.view=i.view.slice(0,s.index).concat(yt(e,s.lineN,a.lineN)).concat(i.view.slice(a.index)),i.viewTo+=n):gn(e)}var u=i.externalMeasured
u&&(r<u.lineN?u.lineN+=n:t<u.lineN+u.size&&(i.externalMeasured=null))}function pn(e,t,r){e.curOp.viewChanged=!0
var n=e.display,i=e.display.externalMeasured
if(i&&t>=i.lineN&&t<i.lineN+i.size&&(n.externalMeasured=null),!(t<n.viewFrom||t>=n.viewTo)){var o=n.view[Sr(e,t)]
if(null!=o.node){var l=o.changes||(o.changes=[])
f(l,r)==-1&&l.push(r)}}}function gn(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function vn(e,t,r,n){var i,o=Sr(e,t),l=e.display.view
if(!Nl||r==e.doc.first+e.doc.size)return{index:o,lineN:r}
for(var s=e.display.viewFrom,a=0;a<o;a++)s+=l[a].size
if(s!=t){if(n>0){if(o==l.length-1)return null
i=s+l[o].size-t,o++}else i=s-t
t+=i,r+=i}for(;he(e.doc,r)!=r;){if(o==(n<0?0:l.length-1))return null
r+=n*l[o-(n<0?1:0)].size,o+=n}return{index:o,lineN:r}}function mn(e,t,r){var n=e.display,i=n.view
0==i.length||t>=n.viewTo||r<=n.viewFrom?(n.view=yt(e,t,r),n.viewFrom=t):(n.viewFrom>t?n.view=yt(e,t,n.viewFrom).concat(n.view):n.viewFrom<t&&(n.view=n.view.slice(Sr(e,t))),n.viewFrom=t,n.viewTo<r?n.view=n.view.concat(yt(e,n.viewTo,r)):n.viewTo>r&&(n.view=n.view.slice(0,Sr(e,r)))),n.viewTo=r}function yn(e){for(var t=e.display.view,r=0,n=0;n<t.length;n++){var i=t[n]
i.hidden||i.node&&!i.changes||++r}return r}function bn(e,t){e.doc.mode.startState&&e.doc.frontier<e.display.viewTo&&e.state.highlight.set(t,a(wn,e))}function wn(e){var t=e.doc
if(t.frontier<t.first&&(t.frontier=t.first),!(t.frontier>=e.display.viewTo)){var r=+new Date+e.options.workTime,n=Ye(t.mode,Qe(e,t.frontier)),i=[]
t.iter(t.frontier,Math.min(t.first+t.size,e.display.viewTo+500),function(o){if(t.frontier>=e.display.viewFrom){var l=o.styles,s=o.text.length>e.options.maxHighlightLength,a=Ze(e,o,s?Ye(t.mode,n):n,!0)
o.styles=a.styles
var u=o.styleClasses,c=a.classes
c?o.styleClasses=c:u&&(o.styleClasses=null)
for(var f=!l||l.length!=o.styles.length||u!=c&&(!u||!c||u.bgClass!=c.bgClass||u.textClass!=c.textClass),d=0;!f&&d<l.length;++d)f=l[d]!=o.styles[d]
f&&i.push(t.frontier),o.stateAfter=s?n:Ye(t.mode,n)}else o.text.length<=e.options.maxHighlightLength&&et(e,o.text,n),o.stateAfter=t.frontier%5==0?Ye(t.mode,n):null
if(++t.frontier,+new Date>r)return bn(e,e.options.workDelay),!0}),i.length&&un(e,function(){for(var t=0;t<i.length;t++)pn(e,i[t],"text")})}}function xn(e){var t=e.display
!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=Ut(e)+"px",t.sizer.style.marginBottom=-t.nativeBarWidth+"px",t.sizer.style.borderRightWidth=Ut(e)+"px",t.scrollbarsClipped=!0)}function Cn(e,r){var n=e.display,i=e.doc
if(r.editorIsHidden)return gn(e),!1
if(!r.force&&r.visible.from>=n.viewFrom&&r.visible.to<=n.viewTo&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo)&&n.renderedView==n.view&&0==yn(e))return!1
zr(e)&&(gn(e),r.dims=yr(e))
var l=i.first+i.size,s=Math.max(r.visible.from-e.options.viewportMargin,i.first),a=Math.min(l,r.visible.to+e.options.viewportMargin)
n.viewFrom<s&&s-n.viewFrom<20&&(s=Math.max(i.first,n.viewFrom)),n.viewTo>a&&n.viewTo-a<20&&(a=Math.min(l,n.viewTo)),Nl&&(s=he(e.doc,s),a=pe(e.doc,a))
var u=s!=n.viewFrom||a!=n.viewTo||n.lastWrapHeight!=r.wrapperHeight||n.lastWrapWidth!=r.wrapperWidth
mn(e,s,a),n.viewOffset=me(k(e.doc,n.viewFrom)),e.display.mover.style.top=n.viewOffset+"px"
var c=yn(e)
if(!u&&0==c&&!r.force&&n.renderedView==n.view&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo))return!1
var f=o()
return c>4&&(n.lineDiv.style.display="none"),Mn(e,n.updateLineNumbers,r.dims),c>4&&(n.lineDiv.style.display=""),n.renderedView=n.view,f&&o()!=f&&f.offsetHeight&&f.focus(),t(n.cursorDiv),t(n.selectionDiv),n.gutters.style.height=n.sizer.style.minHeight=0,u&&(n.lastWrapHeight=r.wrapperHeight,n.lastWrapWidth=r.wrapperWidth,bn(e,400)),n.updateLineNumbers=null,!0}function Sn(e,t){for(var r=t.viewport,n=!0;(n&&e.options.lineWrapping&&t.oldDisplayWidth!=Gt(e)||(r&&null!=r.top&&(r={top:Math.min(e.doc.height+Rt(e.display)-Vt(e),r.top)}),t.visible=Fr(e.display,e.doc,r),!(t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)))&&Cn(e,t);n=!1){Er(e)
var i=Vr(e)
Lr(e),Kr(e,i),Tn(e,i)}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function Ln(e,t){var r=new ts(e,t)
if(Cn(e,r)){Er(e),Sn(e,r)
var n=Vr(e)
Lr(e),Kr(e,n),Tn(e,n),r.finish()}}function Mn(e,r,n){function i(t){var r=t.nextSibling
return Jo&&sl&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),r}for(var o=e.display,l=e.options.lineNumbers,s=o.lineDiv,a=s.firstChild,u=o.view,c=o.viewFrom,d=0;d<u.length;d++){var h=u[d]
if(h.hidden);else if(h.node&&h.node.parentNode==s){for(;a!=h.node;)a=i(a)
var p=l&&null!=r&&r<=c&&h.lineNumber
h.changes&&(f(h.changes,"gutter")>-1&&(p=!1),Lt(e,h,c,n)),p&&(t(h.lineNumber),h.lineNumber.appendChild(document.createTextNode(H(e.options,c)))),a=h.node.nextSibling}else{var g=Dt(e,h,c,n)
s.insertBefore(g,a)}c+=h.size}for(;a;)a=i(a)}function kn(e){var t=e.display.gutters.offsetWidth
e.display.sizer.style.marginLeft=t+"px"}function Tn(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+Ut(e)+"px"}function Nn(e){var r=e.display.gutters,i=e.options.gutters
t(r)
for(var o=0;o<i.length;++o){var l=i[o],s=r.appendChild(n("div",null,"CodeMirror-gutter "+l))
"CodeMirror-linenumbers"==l&&(e.display.lineGutter=s,s.style.width=(e.display.lineNumWidth||1)+"px")}r.style.display=o?"":"none",kn(e)}function On(e){var t=f(e.gutters,"CodeMirror-linenumbers")
t==-1&&e.lineNumbers?e.gutters=e.gutters.concat(["CodeMirror-linenumbers"]):t>-1&&!e.lineNumbers&&(e.gutters=e.gutters.slice(0),e.gutters.splice(t,1))}function An(e,t){var r=e[t]
e.sort(function(e,t){return E(e.from(),t.from())}),t=f(e,r)
for(var n=1;n<e.length;n++){var i=e[n],o=e[n-1]
if(E(o.to(),i.from())>=0){var l=R(o.from(),i.from()),s=I(o.to(),i.to()),a=o.empty()?i.from()==i.head:o.from()==o.head
n<=t&&--t,e.splice(--n,2,new ns(a?s:l,a?l:s))}}return new rs(e,t)}function Wn(e,t){return new rs([new ns(e,t||e)],0)}function Dn(e){return e.text?z(e.from.line+e.text.length-1,p(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}function Hn(e,t){if(E(e,t.from)<0)return e
if(E(e,t.to)<=0)return Dn(t)
var r=e.line+t.text.length-(t.to.line-t.from.line)-1,n=e.ch
return e.line==t.to.line&&(n+=Dn(t).ch-t.to.ch),z(r,n)}function zn(e,t){for(var r=[],n=0;n<e.sel.ranges.length;n++){var i=e.sel.ranges[n]
r.push(new ns(Hn(i.anchor,t),Hn(i.head,t)))}return An(r,e.sel.primIndex)}function En(e,t,r){return e.line==t.line?z(r.line,e.ch-t.ch+r.ch):z(r.line+(e.line-t.line),e.ch)}function Pn(e,t,r){for(var n=[],i=z(e.first,0),o=i,l=0;l<t.length;l++){var s=t[l],a=En(s.from,i,o),u=En(Dn(s),i,o)
if(i=s.to,o=u,"around"==r){var c=e.sel.ranges[l],f=E(c.head,c.anchor)<0
n[l]=new ns(f?u:a,f?a:u)}else n[l]=new ns(a,a)}return new rs(n,e.sel.primIndex)}function Fn(e){e.doc.mode=Xe(e.options,e.doc.modeOption),In(e)}function In(e){e.doc.iter(function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)}),e.doc.frontier=e.doc.first,bn(e,100),e.state.modeGen++,e.curOp&&hn(e)}function Rn(e,t){return 0==t.from.ch&&0==t.to.ch&&""==p(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function Bn(e,t,r,n){function i(e){return r?r[e]:null}function o(e,r,i){st(e,r,i,n),Ct(e,"change",e,t)}function l(e,t){for(var r=[],o=e;o<t;++o)r.push(new Gl(u[o],i(o),n))
return r}var s=t.from,a=t.to,u=t.text,c=k(e,s.line),f=k(e,a.line),d=p(u),h=i(u.length-1),g=a.line-s.line
if(t.full)e.insert(0,l(0,u.length)),e.remove(u.length,e.size-u.length)
else if(Rn(e,t)){var v=l(0,u.length-1)
o(f,f.text,h),g&&e.remove(s.line,g),v.length&&e.insert(s.line,v)}else if(c==f)if(1==u.length)o(c,c.text.slice(0,s.ch)+d+c.text.slice(a.ch),h)
else{var m=l(1,u.length-1)
m.push(new Gl(d+c.text.slice(a.ch),h,n)),o(c,c.text.slice(0,s.ch)+u[0],i(0)),e.insert(s.line+1,m)}else if(1==u.length)o(c,c.text.slice(0,s.ch)+u[0]+f.text.slice(a.ch),i(0)),e.remove(s.line+1,g)
else{o(c,c.text.slice(0,s.ch)+u[0],i(0)),o(f,d+f.text.slice(a.ch),h)
var y=l(1,u.length-1)
g>1&&e.remove(s.line+1,g-1),e.insert(s.line+1,y)}Ct(e,"change",e,t)}function Un(e,t,r){function n(e,i,o){if(e.linked)for(var l=0;l<e.linked.length;++l){var s=e.linked[l]
if(s.doc!=i){var a=o&&s.sharedHist
r&&!a||(t(s.doc,a),n(s.doc,e,a))}}}n(e,null,!0)}function Gn(e,t){if(t.cm)throw new Error("This document is already in use.")
e.doc=t,t.cm=e,xr(e),Fn(e),e.options.lineWrapping||be(e),e.options.mode=t.modeOption,hn(e)}function Vn(e){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1}function Kn(e,t){var r={from:F(t.from),to:Dn(t),text:T(e,t.from,t.to)}
return Zn(e,r,t.from.line,t.to.line+1),Un(e,function(e){return Zn(e,r,t.from.line,t.to.line+1)},!0),r}function jn(e){for(;e.length;){var t=p(e)
if(!t.ranges)break
e.pop()}}function Xn(e,t){return t?(jn(e.done),p(e.done)):e.done.length&&!p(e.done).ranges?p(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),p(e.done)):void 0}function _n(e,t,r,n){var i=e.history
i.undone.length=0
var o,l,s=+new Date
if((i.lastOp==n||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&e.cm&&i.lastModTime>s-e.cm.options.historyEventDelay||"*"==t.origin.charAt(0)))&&(o=Xn(i,i.lastOp==n)))l=p(o.changes),0==E(t.from,t.to)&&0==E(t.from,l.to)?l.to=Dn(t):o.changes.push(Kn(e,t))
else{var a=p(i.done)
for(a&&a.ranges||$n(e.sel,i.done),o={changes:[Kn(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(r),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=s,i.lastOp=i.lastSelOp=n,i.lastOrigin=i.lastSelOrigin=t.origin,l||Oe(e,"historyAdded")}function Yn(e,t,r,n){var i=t.charAt(0)
return"*"==i||"+"==i&&r.ranges.length==n.ranges.length&&r.somethingSelected()==n.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function qn(e,t,r,n){var i=e.history,o=n&&n.origin
r==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||Yn(e,o,p(i.done),t))?i.done[i.done.length-1]=t:$n(t,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=r,n&&n.clearRedo!==!1&&jn(i.undone)}function $n(e,t){var r=p(t)
r&&r.ranges&&r.equals(e)||t.push(e)}function Zn(e,t,r,n){var i=t["spans_"+e.id],o=0
e.iter(Math.max(e.first,r),Math.min(e.first+e.size,n),function(r){r.markedSpans&&((i||(i=t["spans_"+e.id]={}))[o]=r.markedSpans),++o})}function Jn(e){if(!e)return null
for(var t,r=0;r<e.length;++r)e[r].marker.explicitlyCleared?t||(t=e.slice(0,r)):t&&t.push(e[r])
return t?t.length?t:null:e}function Qn(e,t){var r=t["spans_"+e.id]
if(!r)return null
for(var n=[],i=0;i<t.text.length;++i)n.push(Jn(r[i]))
return n}function ei(e,t){var r=Qn(e,t),n=J(e,t)
if(!r)return n
if(!n)return r
for(var i=0;i<r.length;++i){var o=r[i],l=n[i]
if(o&&l)e:for(var s=0;s<l.length;++s){for(var a=l[s],u=0;u<o.length;++u)if(o[u].marker==a.marker)continue e
o.push(a)}else l&&(r[i]=l)}return r}function ti(e,t,r){for(var n=[],i=0;i<e.length;++i){var o=e[i]
if(o.ranges)n.push(r?rs.prototype.deepCopy.call(o):o)
else{var l=o.changes,s=[]
n.push({changes:s})
for(var a=0;a<l.length;++a){var u=l[a],c=void 0
if(s.push({from:u.from,to:u.to,text:u.text}),t)for(var d in u)(c=d.match(/^spans_(\d+)$/))&&f(t,Number(c[1]))>-1&&(p(s)[d]=u[d],delete u[d])}}}return n}function ri(e,t,r,n){if(e.cm&&e.cm.display.shift||e.extend){var i=t.anchor
if(n){var o=E(r,i)<0
o!=E(n,i)<0?(i=r,r=n):o!=E(r,n)<0&&(r=n)}return new ns(i,r)}return new ns(n||r,r)}function ni(e,t,r,n){ui(e,new rs([ri(e,e.sel.primary(),t,r)],0),n)}function ii(e,t,r){for(var n=[],i=0;i<e.sel.ranges.length;i++)n[i]=ri(e,e.sel.ranges[i],t[i],null)
var o=An(n,e.sel.primIndex)
ui(e,o,r)}function oi(e,t,r,n){var i=e.sel.ranges.slice(0)
i[t]=r,ui(e,An(i,e.sel.primIndex),n)}function li(e,t,r,n){ui(e,Wn(t,r),n)}function si(e,t,r){var n={ranges:t.ranges,update:function(t){var r=this
this.ranges=[]
for(var n=0;n<t.length;n++)r.ranges[n]=new ns(U(e,t[n].anchor),U(e,t[n].head))},origin:r&&r.origin}
return Oe(e,"beforeSelectionChange",e,n),e.cm&&Oe(e.cm,"beforeSelectionChange",e.cm,n),n.ranges!=t.ranges?An(n.ranges,n.ranges.length-1):t}function ai(e,t,r){var n=e.history.done,i=p(n)
i&&i.ranges?(n[n.length-1]=t,ci(e,t,r)):ui(e,t,r)}function ui(e,t,r){ci(e,t,r),qn(e,e.sel,e.cm?e.cm.curOp.id:NaN,r)}function ci(e,t,r){(De(e,"beforeSelectionChange")||e.cm&&De(e.cm,"beforeSelectionChange"))&&(t=si(e,t,r))
var n=r&&r.bias||(E(t.primary().head,e.sel.primary().head)<0?-1:1)
fi(e,hi(e,t,n,!0)),r&&r.scroll===!1||!e.cm||Jr(e.cm)}function fi(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=e.cm.curOp.selectionChanged=!0,We(e.cm)),Ct(e,"cursorActivity",e))}function di(e){fi(e,hi(e,e.sel,null,!1),xl)}function hi(e,t,r,n){for(var i,o=0;o<t.ranges.length;o++){var l=t.ranges[o],s=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],a=gi(e,l.anchor,s&&s.anchor,r,n),u=gi(e,l.head,s&&s.head,r,n);(i||a!=l.anchor||u!=l.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new ns(a,u))}return i?An(i,t.primIndex):t}function pi(e,t,r,n,i){var o=k(e,t.line)
if(o.markedSpans)for(var l=0;l<o.markedSpans.length;++l){var s=o.markedSpans[l],a=s.marker
if((null==s.from||(a.inclusiveLeft?s.from<=t.ch:s.from<t.ch))&&(null==s.to||(a.inclusiveRight?s.to>=t.ch:s.to>t.ch))){if(i&&(Oe(a,"beforeCursorEnter"),a.explicitlyCleared)){if(o.markedSpans){--l
continue}break}if(!a.atomic)continue
if(r){var u=a.find(n<0?1:-1),c=void 0
if((n<0?a.inclusiveRight:a.inclusiveLeft)&&(u=vi(e,u,-n,u&&u.line==t.line?o:null)),u&&u.line==t.line&&(c=E(u,r))&&(n<0?c<0:c>0))return pi(e,u,t,n,i)}var f=a.find(n<0?-1:1)
return(n<0?a.inclusiveLeft:a.inclusiveRight)&&(f=vi(e,f,n,f.line==t.line?o:null)),f?pi(e,f,t,n,i):null}}return t}function gi(e,t,r,n,i){var o=n||1,l=pi(e,t,r,o,i)||!i&&pi(e,t,r,o,!0)||pi(e,t,r,-o,i)||!i&&pi(e,t,r,-o,!0)
return l?l:(e.cantEdit=!0,z(e.first,0))}function vi(e,t,r,n){return r<0&&0==t.ch?t.line>e.first?U(e,z(t.line-1)):null:r>0&&t.ch==(n||k(e,t.line)).text.length?t.line<e.first+e.size-1?z(t.line+1,0):null:new z(t.line,t.ch+r)}function mi(e){e.setSelection(z(e.firstLine(),0),z(e.lastLine()),xl)}function yi(e,t,r){var n={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){return n.canceled=!0}}
return r&&(n.update=function(t,r,i,o){t&&(n.from=U(e,t)),r&&(n.to=U(e,r)),i&&(n.text=i),void 0!==o&&(n.origin=o)}),Oe(e,"beforeChange",e,n),e.cm&&Oe(e.cm,"beforeChange",e.cm,n),n.canceled?null:{from:n.from,to:n.to,text:n.text,origin:n.origin}}function bi(e,t,r){if(e.cm){if(!e.cm.curOp)return cn(e.cm,bi)(e,t,r)
if(e.cm.state.suppressEdits)return}if(!(De(e,"beforeChange")||e.cm&&De(e.cm,"beforeChange"))||(t=yi(e,t,!0))){var n=Tl&&!r&&ee(e,t.from,t.to)
if(n)for(var i=n.length-1;i>=0;--i)wi(e,{from:n[i].from,to:n[i].to,text:i?[""]:t.text})
else wi(e,t)}}function wi(e,t){if(1!=t.text.length||""!=t.text[0]||0!=E(t.from,t.to)){var r=zn(e,t)
_n(e,t,r,e.cm?e.cm.curOp.id:NaN),Si(e,t,r,J(e,t))
var n=[]
Un(e,function(e,r){r||f(n,e.history)!=-1||(Ni(e.history,t),n.push(e.history)),Si(e,t,null,J(e,t))})}}function xi(e,t,r){if(!e.cm||!e.cm.state.suppressEdits||r){for(var n,i=e.history,o=e.sel,l="undo"==t?i.done:i.undone,s="undo"==t?i.undone:i.done,a=0;a<l.length&&(n=l[a],r?!n.ranges||n.equals(e.sel):n.ranges);a++);if(a!=l.length){for(i.lastOrigin=i.lastSelOrigin=null;n=l.pop(),n.ranges;){if($n(n,s),r&&!n.equals(e.sel))return void ui(e,n,{clearRedo:!1})
o=n}var u=[]
$n(o,s),s.push({changes:u,generation:i.generation}),i.generation=n.generation||++i.maxGeneration
for(var c=De(e,"beforeChange")||e.cm&&De(e.cm,"beforeChange"),d=function(r){var i=n.changes[r]
if(i.origin=t,c&&!yi(e,i,!1))return l.length=0,{}
u.push(Kn(e,i))
var o=r?zn(e,i):p(l)
Si(e,i,o,ei(e,i)),!r&&e.cm&&e.cm.scrollIntoView({from:i.from,to:Dn(i)})
var s=[]
Un(e,function(e,t){t||f(s,e.history)!=-1||(Ni(e.history,i),s.push(e.history)),Si(e,i,null,ei(e,i))})},h=n.changes.length-1;h>=0;--h){var g=d(h)
if(g)return g.v}}}}function Ci(e,t){if(0!=t&&(e.first+=t,e.sel=new rs(g(e.sel.ranges,function(e){return new ns(z(e.anchor.line+t,e.anchor.ch),z(e.head.line+t,e.head.ch))}),e.sel.primIndex),e.cm)){hn(e.cm,e.first,e.first-t,t)
for(var r=e.cm.display,n=r.viewFrom;n<r.viewTo;n++)pn(e.cm,n,"gutter")}}function Si(e,t,r,n){if(e.cm&&!e.cm.curOp)return cn(e.cm,Si)(e,t,r,n)
if(t.to.line<e.first)return void Ci(e,t.text.length-1-(t.to.line-t.from.line))
if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line)
Ci(e,i),t={from:z(e.first,0),to:z(t.to.line+i,t.to.ch),text:[p(t.text)],origin:t.origin}}var o=e.lastLine()
t.to.line>o&&(t={from:t.from,to:z(o,k(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=T(e,t.from,t.to),r||(r=zn(e,t)),e.cm?Li(e.cm,t,n):Bn(e,t,n),ci(e,r,xl)}}function Li(e,t,r){var n=e.doc,i=e.display,o=t.from,l=t.to,s=!1,a=o.line
e.options.lineWrapping||(a=A(ce(k(n,o.line))),n.iter(a,l.line+1,function(e){if(e==i.maxLine)return s=!0,!0})),n.sel.contains(t.from,t.to)>-1&&We(e),Bn(n,t,r,wr(e)),e.options.lineWrapping||(n.iter(a,o.line+t.text.length,function(e){var t=ye(e)
t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,s=!1)}),s&&(e.curOp.updateMaxLine=!0)),n.frontier=Math.min(n.frontier,o.line),bn(e,400)
var u=t.text.length-(l.line-o.line)-1
t.full?hn(e):o.line!=l.line||1!=t.text.length||Rn(e.doc,t)?hn(e,o.line,l.line+1,u):pn(e,o.line,"text")
var c=De(e,"changes"),f=De(e,"change")
if(f||c){var d={from:o,to:l,text:t.text,removed:t.removed,origin:t.origin}
f&&Ct(e,"change",e,d),c&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(d)}e.display.selForContextMenu=null}function Mi(e,t,r,n,i){if(n||(n=r),E(n,r)<0){var o=n
n=r,r=o}"string"==typeof t&&(t=e.splitLines(t)),bi(e,{from:r,to:n,text:t,origin:i})}function ki(e,t,r,n){r<e.line?e.line+=n:t<e.line&&(e.line=t,e.ch=0)}function Ti(e,t,r,n){for(var i=0;i<e.length;++i){var o=e[i],l=!0
if(o.ranges){o.copied||(o=e[i]=o.deepCopy(),o.copied=!0)
for(var s=0;s<o.ranges.length;s++)ki(o.ranges[s].anchor,t,r,n),ki(o.ranges[s].head,t,r,n)}else{for(var a=0;a<o.changes.length;++a){var u=o.changes[a]
if(r<u.from.line)u.from=z(u.from.line+n,u.from.ch),u.to=z(u.to.line+n,u.to.ch)
else if(t<=u.to.line){l=!1
break}}l||(e.splice(0,i+1),i=0)}}}function Ni(e,t){var r=t.from.line,n=t.to.line,i=t.text.length-(n-r)-1
Ti(e.done,r,n,i),Ti(e.undone,r,n,i)}function Oi(e,t,r,n){var i=t,o=t
return"number"==typeof t?o=k(e,B(e,t)):i=A(t),null==i?null:(n(o,i)&&e.cm&&pn(e.cm,i,r),o)}function Ai(e,t,r){me(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Zr(e,null,r)}function Wi(e,t,r,n){var i=new ls(e,r,n),o=e.cm
return o&&i.noHScroll&&(o.display.alignWidgets=!0),Oi(e,t,"widget",function(t){var r=t.widgets||(t.widgets=[])
if(null==i.insertAt?r.push(i):r.splice(Math.min(r.length-1,Math.max(0,i.insertAt)),0,i),i.line=t,o&&!ge(e,t)){var n=me(t)<e.scrollTop
O(t,t.height+Pt(i)),n&&Zr(o,null,i.height),o.curOp.forceUpdate=!0}return!0}),Ct(o,"lineWidgetAdded",o,i,"number"==typeof t?t:A(t)),i}function Di(e,t,r,i,o){if(i&&i.shared)return Hi(e,t,r,i,o)
if(e.cm&&!e.cm.curOp)return cn(e.cm,Di)(e,t,r,i,o)
var l=new as(e,o),s=E(t,r)
if(i&&u(i,l,!1),s>0||0==s&&l.clearWhenEmpty!==!1)return l
if(l.replacedWith&&(l.collapsed=!0,l.widgetNode=n("span",[l.replacedWith],"CodeMirror-widget"),l.widgetNode.setAttribute("role","presentation"),i.handleMouseEvents||l.widgetNode.setAttribute("cm-ignore-events","true"),i.insertLeft&&(l.widgetNode.insertLeft=!0)),l.collapsed){if(ue(e,t.line,t,r,l)||t.line!=r.line&&ue(e,r.line,t,r,l))throw new Error("Inserting collapsed marker partially overlapping an existing one")
j()}l.addToHistory&&_n(e,{from:t,to:r,origin:"markText"},e.sel,NaN)
var a,c=t.line,f=e.cm
if(e.iter(c,r.line+1,function(e){f&&l.collapsed&&!f.options.lineWrapping&&ce(e)==f.display.maxLine&&(a=!0),l.collapsed&&c!=t.line&&O(e,0),q(e,new X(l,c==t.line?t.ch:null,c==r.line?r.ch:null)),++c}),l.collapsed&&e.iter(t.line,r.line+1,function(t){ge(e,t)&&O(t,0)}),l.clearOnEnter&&Dl(l,"beforeCursorEnter",function(){return l.clear()}),l.readOnly&&(K(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),l.collapsed&&(l.id=++ss,l.atomic=!0),f){if(a&&(f.curOp.updateMaxLine=!0),l.collapsed)hn(f,t.line,r.line+1)
else if(l.className||l.title||l.startStyle||l.endStyle||l.css)for(var d=t.line;d<=r.line;d++)pn(f,d,"text")
l.atomic&&di(f.doc),Ct(f,"markerAdded",f,l)}return l}function Hi(e,t,r,n,i){n=u(n),n.shared=!1
var o=[Di(e,t,r,n,i)],l=o[0],s=n.widgetNode
return Un(e,function(e){s&&(n.widgetNode=s.cloneNode(!0)),o.push(Di(e,U(e,t),U(e,r),n,i))
for(var a=0;a<e.linked.length;++a)if(e.linked[a].isParent)return
l=p(o)}),new us(o,l)}function zi(e){return e.findMarks(z(e.first,0),e.clipPos(z(e.lastLine())),function(e){return e.parent})}function Ei(e,t){for(var r=0;r<t.length;r++){var n=t[r],i=n.find(),o=e.clipPos(i.from),l=e.clipPos(i.to)
if(E(o,l)){var s=Di(e,o,l,n.primary,n.primary.type)
n.markers.push(s),s.parent=n}}}function Pi(e){for(var t=function(t){var r=e[t],n=[r.primary.doc]
Un(r.primary.doc,function(e){return n.push(e)})
for(var i=0;i<r.markers.length;i++){var o=r.markers[i]
f(n,o.doc)==-1&&(o.parent=null,r.markers.splice(i--,1))}},r=0;r<e.length;r++)t(r)}function Fi(e){var t=this
if(Bi(t),!Ae(t,e)&&!Ft(t.display,e)){ze(e),$o&&(ds=+new Date)
var r=Cr(t,e,!0),n=e.dataTransfer.files
if(r&&!t.isReadOnly())if(n&&n.length&&window.FileReader&&window.File)for(var i=n.length,o=Array(i),l=0,s=function(e,n){if(!t.options.allowDropFileTypes||f(t.options.allowDropFileTypes,e.type)!=-1){var s=new FileReader
s.onload=cn(t,function(){var e=s.result
if(/[\x00-\x08\x0e-\x1f]{2}/.test(e)&&(e=""),o[n]=e,++l==i){r=U(t.doc,r)
var a={from:r,to:r,text:t.doc.splitLines(o.join(t.doc.lineSeparator())),origin:"paste"}
bi(t.doc,a),ai(t.doc,Wn(r,Dn(a)))}}),s.readAsText(e)}},a=0;a<i;++a)s(n[a],a)
else{if(t.state.draggingText&&t.doc.sel.contains(r)>-1)return t.state.draggingText(e),void setTimeout(function(){return t.display.input.focus()},20)
try{var u=e.dataTransfer.getData("Text")
if(u){var c
if(t.state.draggingText&&!t.state.draggingText.copy&&(c=t.listSelections()),ci(t.doc,Wn(r,r)),c)for(var d=0;d<c.length;++d)Mi(t.doc,"",c[d].anchor,c[d].head,"drag")
t.replaceSelection(u,"around","paste"),t.display.input.focus()}}catch(e){}}}}function Ii(e,t){if($o&&(!e.state.draggingText||+new Date-ds<100))return void Fe(t)
if(!Ae(e,t)&&!Ft(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!rl)){var r=n("img",null,null,"position: fixed; left: 0; top: 0;")
r.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",tl&&(r.width=r.height=1,e.display.wrapper.appendChild(r),r._top=r.offsetTop),t.dataTransfer.setDragImage(r,0,0),tl&&r.parentNode.removeChild(r)}}function Ri(e,t){var i=Cr(e,t)
if(i){var o=document.createDocumentFragment()
kr(e,i,o),e.display.dragCursor||(e.display.dragCursor=n("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),r(e.display.dragCursor,o)}}function Bi(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Ui(e){if(document.body.getElementsByClassName)for(var t=document.body.getElementsByClassName("CodeMirror"),r=0;r<t.length;r++){var n=t[r].CodeMirror
n&&e(n)}}function Gi(){hs||(Vi(),hs=!0)}function Vi(){var e
Dl(window,"resize",function(){null==e&&(e=setTimeout(function(){e=null,Ui(Ki)},100))}),Dl(window,"blur",function(){return Ui(Dr)})}function Ki(e){var t=e.display
t.lastWrapHeight==t.wrapper.clientHeight&&t.lastWrapWidth==t.wrapper.clientWidth||(t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize())}function ji(e){var t=e.split(/-(?!$)/)
e=t[t.length-1]
for(var r,n,i,o,l=0;l<t.length-1;l++){var s=t[l]
if(/^(cmd|meta|m)$/i.test(s))o=!0
else if(/^a(lt)?$/i.test(s))r=!0
else if(/^(c|ctrl|control)$/i.test(s))n=!0
else{if(!/^s(hift)?$/i.test(s))throw new Error("Unrecognized modifier name: "+s)
i=!0}}return r&&(e="Alt-"+e),n&&(e="Ctrl-"+e),o&&(e="Cmd-"+e),i&&(e="Shift-"+e),e}function Xi(e){var t={}
for(var r in e)if(e.hasOwnProperty(r)){var n=e[r]
if(/^(name|fallthrough|(de|at)tach)$/.test(r))continue
if("..."==n){delete e[r]
continue}for(var i=g(r.split(" "),ji),o=0;o<i.length;o++){var l=void 0,s=void 0
o==i.length-1?(s=i.join(" "),l=n):(s=i.slice(0,o+1).join(" "),l="...")
var a=t[s]
if(a){if(a!=l)throw new Error("Inconsistent bindings for "+s)}else t[s]=l}delete e[r]}for(var u in t)e[u]=t[u]
return e}function _i(e,t,r,n){t=$i(t)
var i=t.call?t.call(e,n):t[e]
if(i===!1)return"nothing"
if("..."===i)return"multi"
if(null!=i&&r(i))return"handled"
if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return _i(e,t.fallthrough,r,n)
for(var o=0;o<t.fallthrough.length;o++){var l=_i(e,t.fallthrough[o],r,n)
if(l)return l}}}function Yi(e){var t="string"==typeof e?e:ps[e.keyCode]
return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t}function qi(e,t){if(tl&&34==e.keyCode&&e.char)return!1
var r=ps[e.keyCode],n=r
return null!=n&&!e.altGraphKey&&(e.altKey&&"Alt"!=r&&(n="Alt-"+n),(dl?e.metaKey:e.ctrlKey)&&"Ctrl"!=r&&(n="Ctrl-"+n),(dl?e.ctrlKey:e.metaKey)&&"Cmd"!=r&&(n="Cmd-"+n),!t&&e.shiftKey&&"Shift"!=r&&(n="Shift-"+n),n)}function $i(e){return"string"==typeof e?ys[e]:e}function Zi(e,t){for(var r=e.doc.sel.ranges,n=[],i=0;i<r.length;i++){for(var o=t(r[i]);n.length&&E(o.from,p(n).to)<=0;){var l=n.pop()
if(E(l.from,o.from)<0){o.from=l.from
break}}n.push(o)}un(e,function(){for(var t=n.length-1;t>=0;t--)Mi(e.doc,"",n[t].from,n[t].to,"+delete")
Jr(e)})}function Ji(e,t){var r=k(e.doc,t),n=ce(r)
return n!=r&&(t=A(n)),Me(!0,e,n,t,1)}function Qi(e,t){var r=k(e.doc,t),n=fe(r)
return n!=r&&(t=A(n)),Me(!0,e,r,t,-1)}function eo(e,t){var r=Ji(e,t.line),n=k(e.doc,r.line),i=Ce(n)
if(!i||0==i[0].level){var o=Math.max(0,n.text.search(/\S/)),l=t.line==r.line&&t.ch<=o&&t.ch
return z(r.line,l?0:o,r.sticky)}return r}function to(e,t,r){if("string"==typeof t&&(t=xs[t],!t))return!1
e.display.input.ensurePolled()
var n=e.display.shift,i=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),r&&(e.display.shift=!1),i=t(e)!=wl}finally{e.display.shift=n,e.state.suppressEdits=!1}return i}function ro(e,t,r){for(var n=0;n<e.state.keyMaps.length;n++){var i=_i(t,e.state.keyMaps[n],r,e)
if(i)return i}return e.options.extraKeys&&_i(t,e.options.extraKeys,r,e)||_i(t,e.options.keyMap,r,e)}function no(e,t,r,n){var i=e.state.keySeq
if(i){if(Yi(t))return"handled"
Cs.set(50,function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset())}),t=i+" "+t}var o=ro(e,t,n)
return"multi"==o&&(e.state.keySeq=t),"handled"==o&&Ct(e,"keyHandled",e,t,r),"handled"!=o&&"multi"!=o||(ze(r),Nr(e)),i&&!o&&/\'$/.test(t)?(ze(r),!0):!!o}function io(e,t){var r=qi(t,!0)
return!!r&&(t.shiftKey&&!e.state.keySeq?no(e,"Shift-"+r,t,function(t){return to(e,t,!0)})||no(e,r,t,function(t){if("string"==typeof t?/^go[A-Z]/.test(t):t.motion)return to(e,t)}):no(e,r,t,function(t){return to(e,t)}))}function oo(e,t,r){return no(e,"'"+r+"'",t,function(t){return to(e,t,!0)})}function lo(e){var t=this
if(t.curOp.focus=o(),!Ae(t,e)){$o&&Zo<11&&27==e.keyCode&&(e.returnValue=!1)
var r=e.keyCode
t.display.shift=16==r||e.shiftKey
var n=io(t,e)
tl&&(Ss=n?r:null,!n&&88==r&&!Pl&&(sl?e.metaKey:e.ctrlKey)&&t.replaceSelection("",null,"cut")),18!=r||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||so(t)}}function so(e){function t(e){18!=e.keyCode&&e.altKey||(pl(r,"CodeMirror-crosshair"),Ne(document,"keyup",t),Ne(document,"mouseover",t))}var r=e.display.lineDiv
l(r,"CodeMirror-crosshair"),Dl(document,"keyup",t),Dl(document,"mouseover",t)}function ao(e){16==e.keyCode&&(this.doc.sel.shift=!1),Ae(this,e)}function uo(e){var t=this
if(!(Ft(t.display,e)||Ae(t,e)||e.ctrlKey&&!e.altKey||sl&&e.metaKey)){var r=e.keyCode,n=e.charCode
if(tl&&r==Ss)return Ss=null,void ze(e)
if(!tl||e.which&&!(e.which<10)||!io(t,e)){var i=String.fromCharCode(null==n?r:n)
"\b"!=i&&(oo(t,e,i)||t.display.input.onKeyPress(e))}}}function co(e){var t=this,r=t.display
if(!(Ae(t,e)||r.activeTouch&&r.input.supportsTouch())){if(r.input.ensurePolled(),r.shift=e.shiftKey,Ft(r,e))return void(Jo||(r.scroller.draggable=!1,setTimeout(function(){return r.scroller.draggable=!0},100)))
if(!vo(t,e)){var n=Cr(t,e)
switch(window.focus(),Re(e)){case 1:t.state.selectingText?t.state.selectingText(e):n?fo(t,e,n):Ie(e)==r.scroller&&ze(e)
break
case 2:Jo&&(t.state.lastMiddleDown=+new Date),n&&ni(t.doc,n),setTimeout(function(){return r.input.focus()},20),ze(e)
break
case 3:hl?mo(t,e):Ar(t)}}}}function fo(e,t,r){$o?setTimeout(a(Or,e),0):e.curOp.focus=o()
var n,i=+new Date
ws&&ws.time>i-400&&0==E(ws.pos,r)?n="triple":bs&&bs.time>i-400&&0==E(bs.pos,r)?(n="double",ws={time:i,pos:r}):(n="single",bs={time:i,pos:r})
var l,s=e.doc.sel,u=sl?t.metaKey:t.ctrlKey
e.options.dragDrop&&Hl&&!e.isReadOnly()&&"single"==n&&(l=s.contains(r))>-1&&(E((l=s.ranges[l]).from(),r)<0||r.xRel>0)&&(E(l.to(),r)>0||r.xRel<0)?ho(e,t,r,u):po(e,t,r,n,u)}function ho(e,t,r,n){var i=e.display,o=+new Date,l=cn(e,function(s){Jo&&(i.scroller.draggable=!1),e.state.draggingText=!1,Ne(document,"mouseup",l),Ne(i.scroller,"drop",l),Math.abs(t.clientX-s.clientX)+Math.abs(t.clientY-s.clientY)<10&&(ze(s),!n&&+new Date-200<o&&ni(e.doc,r),Jo||$o&&9==Zo?setTimeout(function(){document.body.focus(),i.input.focus()},20):i.input.focus())})
Jo&&(i.scroller.draggable=!0),e.state.draggingText=l,l.copy=sl?t.altKey:t.ctrlKey,i.scroller.dragDrop&&i.scroller.dragDrop(),Dl(document,"mouseup",l),Dl(i.scroller,"drop",l)}function po(e,t,r,n,i){function l(t){if(0!=E(b,t))if(b=t,"rect"==n){for(var i=[],o=e.options.tabSize,l=c(k(f,r.line).text,r.ch,o),s=c(k(f,t.line).text,t.ch,o),a=Math.min(l,s),u=Math.max(l,s),v=Math.min(r.line,t.line),m=Math.min(e.lastLine(),Math.max(r.line,t.line));v<=m;v++){var y=k(f,v).text,w=d(y,a,o)
a==u?i.push(new ns(z(v,w),z(v,w))):y.length>w&&i.push(new ns(z(v,w),z(v,d(y,u,o))))}i.length||i.push(new ns(r,r)),ui(f,An(g.ranges.slice(0,p).concat(i),p),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t)}else{var x=h,C=x.anchor,S=t
if("single"!=n){var L
L="double"==n?e.findWordAt(t):new ns(z(t.line,0),U(f,z(t.line+1,0))),E(L.anchor,C)>0?(S=L.head,C=R(x.from(),L.anchor)):(S=L.anchor,C=I(x.to(),L.head))}var M=g.ranges.slice(0)
M[p]=new ns(U(f,C),S),ui(f,An(M,p),Cl)}}function s(t){var r=++x,i=Cr(e,t,!0,"rect"==n)
if(i)if(0!=E(i,b)){e.curOp.focus=o(),l(i)
var a=Fr(u,f);(i.line>=a.to||i.line<a.from)&&setTimeout(cn(e,function(){x==r&&s(t)}),150)}else{var c=t.clientY<w.top?-20:t.clientY>w.bottom?20:0
c&&setTimeout(cn(e,function(){x==r&&(u.scroller.scrollTop+=c,s(t))}),50)}}function a(t){e.state.selectingText=!1,x=1/0,ze(t),u.input.focus(),Ne(document,"mousemove",C),Ne(document,"mouseup",S),f.history.lastSelOrigin=null}var u=e.display,f=e.doc
ze(t)
var h,p,g=f.sel,v=g.ranges
if(i&&!t.shiftKey?(p=f.sel.contains(r),h=p>-1?v[p]:new ns(r,r)):(h=f.sel.primary(),p=f.sel.primIndex),al?t.shiftKey&&t.metaKey:t.altKey)n="rect",i||(h=new ns(r,r)),r=Cr(e,t,!0,!0),p=-1
else if("double"==n){var m=e.findWordAt(r)
h=e.display.shift||f.extend?ri(f,h,m.anchor,m.head):m}else if("triple"==n){var y=new ns(z(r.line,0),U(f,z(r.line+1,0)))
h=e.display.shift||f.extend?ri(f,h,y.anchor,y.head):y}else h=ri(f,h,r)
i?p==-1?(p=v.length,ui(f,An(v.concat([h]),p),{scroll:!1,origin:"*mouse"})):v.length>1&&v[p].empty()&&"single"==n&&!t.shiftKey?(ui(f,An(v.slice(0,p).concat(v.slice(p+1)),0),{scroll:!1,origin:"*mouse"}),g=f.sel):oi(f,p,h,Cl):(p=0,ui(f,new rs([h],0),Cl),g=f.sel)
var b=r,w=u.wrapper.getBoundingClientRect(),x=0,C=cn(e,function(e){Re(e)?s(e):a(e)}),S=cn(e,a)
e.state.selectingText=S,Dl(document,"mousemove",C),Dl(document,"mouseup",S)}function go(e,t,r,n){var i,o
try{i=t.clientX,o=t.clientY}catch(e){return!1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1
n&&ze(t)
var l=e.display,s=l.lineDiv.getBoundingClientRect()
if(o>s.bottom||!De(e,r))return Pe(t)
o-=s.top-l.viewOffset
for(var a=0;a<e.options.gutters.length;++a){var u=l.gutters.childNodes[a]
if(u&&u.getBoundingClientRect().right>=i){var c=W(e.doc,o),f=e.options.gutters[a]
return Oe(e,r,e,c,f,t),Pe(t)}}}function vo(e,t){return go(e,t,"gutterClick",!0)}function mo(e,t){Ft(e.display,t)||yo(e,t)||Ae(e,t,"contextmenu")||e.display.input.onContextMenu(t)}function yo(e,t){return!!De(e,"gutterContextMenu")&&go(e,t,"gutterContextMenu",!1)}function bo(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),nr(e)}function wo(e){function t(t,n,i,o){e.defaults[t]=n,i&&(r[t]=o?function(e,t,r){r!=Ls&&i(e,t,r)}:i)}var r=e.optionHandlers
e.defineOption=t,e.Init=Ls,t("value","",function(e,t){return e.setValue(t)},!0),t("mode",null,function(e,t){e.doc.modeOption=t,Fn(e)},!0),t("indentUnit",2,Fn,!0),t("indentWithTabs",!1),t("smartIndent",!0),t("tabSize",4,function(e){In(e),nr(e),hn(e)},!0),t("lineSeparator",null,function(e,t){if(e.doc.lineSep=t,t){var r=[],n=e.doc.first
e.doc.iter(function(e){for(var i=0;;){var o=e.text.indexOf(t,i)
if(o==-1)break
i=o+t.length,r.push(z(n,o))}n++})
for(var i=r.length-1;i>=0;i--)Mi(e.doc,t,r[i],z(r[i].line,r[i].ch+t.length))}}),t("specialChars",/[\u0000-\u001f\u007f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,function(e,t,r){e.state.specialChars=new RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),r!=Ls&&e.refresh()}),t("specialCharPlaceholder",ft,function(e){return e.refresh()},!0),t("electricChars",!0),t("inputStyle",ll?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),t("spellcheck",!1,function(e,t){return e.getInputField().spellcheck=t},!0),t("rtlMoveVisually",!ul),t("wholeLineUpdateBefore",!0),t("theme","default",function(e){bo(e),xo(e)},!0),t("keyMap","default",function(e,t,r){var n=$i(t),i=r!=Ls&&$i(r)
i&&i.detach&&i.detach(e,n),n.attach&&n.attach(e,i||null)}),t("extraKeys",null),t("lineWrapping",!1,So,!0),t("gutters",[],function(e){On(e.options),xo(e)},!0),t("fixedGutter",!0,function(e,t){e.display.gutters.style.left=t?br(e.display)+"px":"0",e.refresh()},!0),t("coverGutterNextToScrollbar",!1,function(e){return Kr(e)},!0),t("scrollbarStyle","native",function(e){Xr(e),Kr(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)},!0),t("lineNumbers",!1,function(e){On(e.options),xo(e)},!0),t("firstLineNumber",1,xo,!0),t("lineNumberFormatter",function(e){return e},xo,!0),t("showCursorWhenSelecting",!1,Lr,!0),t("resetSelectionOnContextMenu",!0),t("lineWiseCopyCut",!0),t("readOnly",!1,function(e,t){"nocursor"==t?(Dr(e),e.display.input.blur(),e.display.disabled=!0):e.display.disabled=!1,e.display.input.readOnlyChanged(t)}),t("disableInput",!1,function(e,t){t||e.display.input.reset()},!0),t("dragDrop",!0,Co),t("allowDropFileTypes",null),t("cursorBlinkRate",530),t("cursorScrollMargin",0),t("cursorHeight",1,Lr,!0),t("singleCursorHeightPerLine",!0,Lr,!0),t("workTime",100),t("workDelay",100),t("flattenSpans",!0,In,!0),t("addModeClass",!1,In,!0),t("pollInterval",100),t("undoDepth",200,function(e,t){return e.doc.history.undoDepth=t}),t("historyEventDelay",1250),t("viewportMargin",10,function(e){return e.refresh()},!0),t("maxHighlightLength",1e4,In,!0),t("moveInputWithCursor",!0,function(e,t){t||e.display.input.resetPosition()}),t("tabindex",null,function(e,t){return e.display.input.getField().tabIndex=t||""}),t("autofocus",null)}function xo(e){Nn(e),hn(e),Hr(e)}function Co(e,t,r){var n=r&&r!=Ls
if(!t!=!n){var i=e.display.dragFunctions,o=t?Dl:Ne
o(e.display.scroller,"dragstart",i.start),o(e.display.scroller,"dragenter",i.enter),o(e.display.scroller,"dragover",i.over),o(e.display.scroller,"dragleave",i.leave),o(e.display.scroller,"drop",i.drop)}}function So(e){e.options.lineWrapping?(l(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(pl(e.display.wrapper,"CodeMirror-wrap"),be(e)),xr(e),hn(e),nr(e),setTimeout(function(){return Kr(e)},100)}function Lo(e,t){var r=this
if(!(this instanceof Lo))return new Lo(e,t)
this.options=t=t?u(t):{},u(Ms,t,!1),On(t)
var n=t.value
"string"==typeof n&&(n=new fs(n,t.mode,null,t.lineSeparator)),this.doc=n
var i=new Lo.inputStyles[t.inputStyle](this),o=this.display=new M(e,n,i)
o.wrapper.CodeMirror=this,Nn(this),bo(this),t.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),Xr(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,selectingText:!1,draggingText:!1,highlight:new vl,keySeq:null,specialChars:null},t.autofocus&&!ll&&o.input.focus(),$o&&Zo<11&&setTimeout(function(){return r.display.input.reset(!0)},20),Mo(this),Gi(),en(this),this.curOp.forceUpdate=!0,Gn(this,n),t.autofocus&&!ll||this.hasFocus()?setTimeout(a(Wr,this),20):Dr(this)
for(var l in ks)ks.hasOwnProperty(l)&&ks[l](r,t[l],Ls)
zr(this),t.finishInit&&t.finishInit(this)
for(var s=0;s<Ts.length;++s)Ts[s](r)
tn(this),Jo&&t.lineWrapping&&"optimizelegibility"==getComputedStyle(o.lineDiv).textRendering&&(o.lineDiv.style.textRendering="auto")}function Mo(e){function t(){i.activeTouch&&(o=setTimeout(function(){return i.activeTouch=null},1e3),l=i.activeTouch,l.end=+new Date)}function r(e){if(1!=e.touches.length)return!1
var t=e.touches[0]
return t.radiusX<=1&&t.radiusY<=1}function n(e,t){if(null==t.left)return!0
var r=t.left-e.left,n=t.top-e.top
return r*r+n*n>400}var i=e.display
Dl(i.scroller,"mousedown",cn(e,co)),$o&&Zo<11?Dl(i.scroller,"dblclick",cn(e,function(t){if(!Ae(e,t)){var r=Cr(e,t)
if(r&&!vo(e,t)&&!Ft(e.display,t)){ze(t)
var n=e.findWordAt(r)
ni(e.doc,n.anchor,n.head)}}})):Dl(i.scroller,"dblclick",function(t){return Ae(e,t)||ze(t)}),hl||Dl(i.scroller,"contextmenu",function(t){return mo(e,t)})
var o,l={end:0}
Dl(i.scroller,"touchstart",function(t){if(!Ae(e,t)&&!r(t)){i.input.ensurePolled(),clearTimeout(o)
var n=+new Date
i.activeTouch={start:n,moved:!1,prev:n-l.end<=300?l:null},1==t.touches.length&&(i.activeTouch.left=t.touches[0].pageX,i.activeTouch.top=t.touches[0].pageY)}}),Dl(i.scroller,"touchmove",function(){i.activeTouch&&(i.activeTouch.moved=!0)}),Dl(i.scroller,"touchend",function(r){var o=i.activeTouch
if(o&&!Ft(i,r)&&null!=o.left&&!o.moved&&new Date-o.start<300){var l,s=e.coordsChar(i.activeTouch,"page")
l=!o.prev||n(o,o.prev)?new ns(s,s):!o.prev.prev||n(o,o.prev.prev)?e.findWordAt(s):new ns(z(s.line,0),U(e.doc,z(s.line+1,0))),e.setSelection(l.anchor,l.head),e.focus(),ze(r)}t()}),Dl(i.scroller,"touchcancel",t),Dl(i.scroller,"scroll",function(){i.scroller.clientHeight&&(Ir(e,i.scroller.scrollTop),Rr(e,i.scroller.scrollLeft,!0),Oe(e,"scroll",e))}),Dl(i.scroller,"mousewheel",function(t){return Gr(e,t)}),Dl(i.scroller,"DOMMouseScroll",function(t){return Gr(e,t)}),Dl(i.wrapper,"scroll",function(){return i.wrapper.scrollTop=i.wrapper.scrollLeft=0}),i.dragFunctions={enter:function(t){Ae(e,t)||Fe(t)},over:function(t){Ae(e,t)||(Ri(e,t),Fe(t))},start:function(t){return Ii(e,t)},drop:cn(e,Fi),leave:function(t){Ae(e,t)||Bi(e)}}
var s=i.input.getField()
Dl(s,"keyup",function(t){return ao.call(e,t)}),Dl(s,"keydown",cn(e,lo)),Dl(s,"keypress",cn(e,uo)),Dl(s,"focus",function(t){return Wr(e,t)}),Dl(s,"blur",function(t){return Dr(e,t)})}function ko(e,t,r,n){var i,o=e.doc
null==r&&(r="add"),"smart"==r&&(o.mode.indent?i=Qe(e,t):r="prev")
var l=e.options.tabSize,s=k(o,t),a=c(s.text,null,l)
s.stateAfter&&(s.stateAfter=null)
var u,f=s.text.match(/^\s*/)[0]
if(n||/\S/.test(s.text)){if("smart"==r&&(u=o.mode.indent(i,s.text.slice(f.length),s.text),u==wl||u>150)){if(!n)return
r="prev"}}else u=0,r="not"
"prev"==r?u=t>o.first?c(k(o,t-1).text,null,l):0:"add"==r?u=a+e.options.indentUnit:"subtract"==r?u=a-e.options.indentUnit:"number"==typeof r&&(u=a+r),u=Math.max(0,u)
var d="",p=0
if(e.options.indentWithTabs)for(var g=Math.floor(u/l);g;--g)p+=l,d+="\t"
if(p<u&&(d+=h(u-p)),d!=f)return Mi(o,d,z(t,0),z(t,f.length),"+input"),s.stateAfter=null,!0
for(var v=0;v<o.sel.ranges.length;v++){var m=o.sel.ranges[v]
if(m.head.line==t&&m.head.ch<f.length){var y=z(t,f.length)
oi(o,v,new ns(y,y))
break}}}function To(e){Ns=e}function No(e,t,r,n,i){var o=e.doc
e.display.shift=!1,n||(n=o.sel)
var l=e.state.pasteIncoming||"paste"==i,s=zl(t),a=null
if(l&&n.ranges.length>1)if(Ns&&Ns.text.join("\n")==t){if(n.ranges.length%Ns.text.length==0){a=[]
for(var u=0;u<Ns.text.length;u++)a.push(o.splitLines(Ns.text[u]))}}else s.length==n.ranges.length&&(a=g(s,function(e){return[e]}))
for(var c,f=n.ranges.length-1;f>=0;f--){var d=n.ranges[f],h=d.from(),v=d.to()
d.empty()&&(r&&r>0?h=z(h.line,h.ch-r):e.state.overwrite&&!l?v=z(v.line,Math.min(k(o,v.line).text.length,v.ch+p(s).length)):Ns&&Ns.lineWise&&Ns.text.join("\n")==t&&(h=v=z(h.line,0))),c=e.curOp.updateInput
var m={from:h,to:v,text:a?a[f%a.length]:s,origin:i||(l?"paste":e.state.cutIncoming?"cut":"+input")}
bi(e.doc,m),Ct(e,"inputRead",e,m)}t&&!l&&Ao(e,t),Jr(e),e.curOp.updateInput=c,e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=!1}function Oo(e,t){var r=e.clipboardData&&e.clipboardData.getData("Text")
if(r)return e.preventDefault(),t.isReadOnly()||t.options.disableInput||un(t,function(){return No(t,r,0,null,"paste")}),!0}function Ao(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var r=e.doc.sel,n=r.ranges.length-1;n>=0;n--){var i=r.ranges[n]
if(!(i.head.ch>100||n&&r.ranges[n-1].head.line==i.head.line)){var o=e.getModeAt(i.head),l=!1
if(o.electricChars){for(var s=0;s<o.electricChars.length;s++)if(t.indexOf(o.electricChars.charAt(s))>-1){l=ko(e,i.head.line,"smart")
break}}else o.electricInput&&o.electricInput.test(k(e.doc,i.head.line).text.slice(0,i.head.ch))&&(l=ko(e,i.head.line,"smart"))
l&&Ct(e,"electricInput",e,i.head.line)}}}function Wo(e){for(var t=[],r=[],n=0;n<e.doc.sel.ranges.length;n++){var i=e.doc.sel.ranges[n].head.line,o={anchor:z(i,0),head:z(i+1,0)}
r.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:r}}function Do(e,t){e.setAttribute("autocorrect","off"),e.setAttribute("autocapitalize","off"),e.setAttribute("spellcheck",!!t)}function Ho(){var e=n("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),t=n("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;")
return Jo?e.style.width="1000px":e.setAttribute("wrap","off"),ol&&(e.style.border="1px solid black"),Do(e),t}function zo(e){var t=e.optionHandlers,r=e.helpers={}
e.prototype={constructor:e,focus:function(){window.focus(),this.display.input.focus()},setOption:function(e,r){var n=this.options,i=n[e]
n[e]==r&&"mode"!=e||(n[e]=r,t.hasOwnProperty(e)&&cn(this,t[e])(this,r,i),Oe(this,"optionChange",this,e))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"]($i(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,r=0;r<t.length;++r)if(t[r]==e||t[r].name==e)return t.splice(r,1),!0},addOverlay:fn(function(t,r){var n=t.token?t:e.getMode(this.options,t)
if(n.startState)throw new Error("Overlays may not be stateful.")
v(this.state.overlays,{mode:n,modeSpec:t,opaque:r&&r.opaque,priority:r&&r.priority||0},function(e){return e.priority}),this.state.modeGen++,hn(this)}),removeOverlay:fn(function(e){for(var t=this,r=this.state.overlays,n=0;n<r.length;++n){var i=r[n].modeSpec
if(i==e||"string"==typeof e&&i.name==e)return r.splice(n,1),t.state.modeGen++,void hn(t)}}),indentLine:fn(function(e,t,r){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),D(this.doc,e)&&ko(this,e,t,r)}),indentSelection:fn(function(e){for(var t=this,r=this.doc.sel.ranges,n=-1,i=0;i<r.length;i++){var o=r[i]
if(o.empty())o.head.line>n&&(ko(t,o.head.line,e,!0),n=o.head.line,i==t.doc.sel.primIndex&&Jr(t))
else{var l=o.from(),s=o.to(),a=Math.max(n,l.line)
n=Math.min(t.lastLine(),s.line-(s.ch?0:1))+1
for(var u=a;u<n;++u)ko(t,u,e)
var c=t.doc.sel.ranges
0==l.ch&&r.length==c.length&&c[i].from().ch>0&&oi(t.doc,i,new ns(l,c[i].to()),xl)}}}),getTokenAt:function(e,t){return nt(this,e,t)},getLineTokens:function(e,t){return nt(this,z(e),t,!0)},getTokenTypeAt:function(e){e=U(this.doc,e)
var t,r=Je(this,k(this.doc,e.line)),n=0,i=(r.length-1)/2,o=e.ch
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
c.pred(l,n)&&f(i,c.val)==-1&&i.push(c.val)}return i},getStateAfter:function(e,t){var r=this.doc
return e=B(r,null==e?r.first+r.size-1:e),Qe(this,e+1,t)},cursorCoords:function(e,t){var r,n=this.doc.sel.primary()
return r=null==e?n.head:"object"==typeof e?U(this.doc,e):e?n.from():n.to(),ur(this,r,t||"page")},charCoords:function(e,t){return ar(this,U(this.doc,e),t||"page")},coordsChar:function(e,t){return e=sr(this,e,t||"page"),dr(this,e.left,e.top)},lineAtHeight:function(e,t){return e=sr(this,{top:e,left:0},t||"page").top,W(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t,r){var n,i=!1
if("number"==typeof e){var o=this.doc.first+this.doc.size-1
e<this.doc.first?e=this.doc.first:e>o&&(e=o,i=!0),n=k(this.doc,e)}else n=e
return lr(this,n,{top:0,left:0},t||"page",r||i).top+(i?this.doc.height-me(n):0)},defaultTextHeight:function(){return vr(this.display)},defaultCharWidth:function(){return mr(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,r,n,i){var o=this.display
e=ur(this,U(this.doc,e))
var l=e.bottom,s=e.left
if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),o.sizer.appendChild(t),"over"==n)l=e.top
else if("above"==n||"near"==n){var a=Math.max(o.wrapper.clientHeight,this.doc.height),u=Math.max(o.sizer.clientWidth,o.lineSpace.clientWidth);("above"==n||e.bottom+t.offsetHeight>a)&&e.top>t.offsetHeight?l=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=a&&(l=e.bottom),s+t.offsetWidth>u&&(s=u-t.offsetWidth)}t.style.top=l+"px",t.style.left=t.style.right="","right"==i?(s=o.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?s=0:"middle"==i&&(s=(o.sizer.clientWidth-t.offsetWidth)/2),t.style.left=s+"px"),r&&qr(this,s,l,s+t.offsetWidth,l+t.offsetHeight)},triggerOnKeyDown:fn(lo),triggerOnKeyPress:fn(uo),triggerOnKeyUp:ao,execCommand:function(e){if(xs.hasOwnProperty(e))return xs[e].call(null,this)},triggerElectric:fn(function(e){Ao(this,e)}),findPosH:function(e,t,r,n){var i=this,o=1
t<0&&(o=-1,t=-t)
for(var l=U(this.doc,e),s=0;s<t&&(l=Eo(i.doc,l,o,r,n),!l.hitSide);++s);return l},moveH:fn(function(e,t){var r=this
this.extendSelectionsBy(function(n){return r.display.shift||r.doc.extend||n.empty()?Eo(r.doc,n.head,e,t,r.options.rtlMoveVisually):e<0?n.from():n.to()},Sl)}),deleteH:fn(function(e,t){var r=this.doc.sel,n=this.doc
r.somethingSelected()?n.replaceSelection("",null,"+delete"):Zi(this,function(r){var i=Eo(n,r.head,e,t,!1)
return e<0?{from:i,to:r.head}:{from:r.head,to:i}})}),findPosV:function(e,t,r,n){var i=this,o=1,l=n
t<0&&(o=-1,t=-t)
for(var s=U(this.doc,e),a=0;a<t;++a){var u=ur(i,s,"div")
if(null==l?l=u.left:u.left=l,s=Po(i,u,o,r),s.hitSide)break}return s},moveV:fn(function(e,t){var r=this,n=this.doc,i=[],o=!this.display.shift&&!n.extend&&n.sel.somethingSelected()
if(n.extendSelectionsBy(function(l){if(o)return e<0?l.from():l.to()
var s=ur(r,l.head,"div")
null!=l.goalColumn&&(s.left=l.goalColumn),i.push(s.left)
var a=Po(r,s,e,t)
return"page"==t&&l==n.sel.primary()&&Zr(r,null,ar(r,a,"div").top-s.top),a},Sl),i.length)for(var l=0;l<n.sel.ranges.length;l++)n.sel.ranges[l].goalColumn=i[l]}),findWordAt:function(e){var t=this.doc,r=k(t,e.line).text,n=e.ch,i=e.ch
if(r){var o=this.getHelper(e,"wordChars")
"before"!=e.sticky&&i!=r.length||!n?++i:--n
for(var l=r.charAt(n),s=w(l,o)?function(e){return w(e,o)}:/\s/.test(l)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!w(e)};n>0&&s(r.charAt(n-1));)--n
for(;i<r.length&&s(r.charAt(i));)++i}return new ns(z(e.line,n),z(e.line,i))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?l(this.display.cursorDiv,"CodeMirror-overwrite"):pl(this.display.cursorDiv,"CodeMirror-overwrite"),Oe(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==o()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:fn(function(e,t){null==e&&null==t||Qr(this),null!=e&&(this.curOp.scrollLeft=e),null!=t&&(this.curOp.scrollTop=t)}),getScrollInfo:function(){var e=this.display.scroller
return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-Ut(this)-this.display.barHeight,width:e.scrollWidth-Ut(this)-this.display.barWidth,clientHeight:Vt(this),clientWidth:Gt(this)}},scrollIntoView:fn(function(e,t){if(null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:z(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line)Qr(this),this.curOp.scrollToPos=e
else{var r=$r(this,Math.min(e.from.left,e.to.left),Math.min(e.from.top,e.to.top)-e.margin,Math.max(e.from.right,e.to.right),Math.max(e.from.bottom,e.to.bottom)+e.margin)
this.scrollTo(r.scrollLeft,r.scrollTop)}}),setSize:fn(function(e,t){var r=this,n=function(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e}
null!=e&&(this.display.wrapper.style.width=n(e)),null!=t&&(this.display.wrapper.style.height=n(t)),this.options.lineWrapping&&rr(this)
var i=this.display.viewFrom
this.doc.iter(i,this.display.viewTo,function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){pn(r,i,"widget")
break}++i}),this.curOp.forceUpdate=!0,Oe(this,"refresh",this)}),operation:function(e){return un(this,e)},refresh:fn(function(){var e=this.display.cachedTextHeight
hn(this),this.curOp.forceUpdate=!0,nr(this),this.scrollTo(this.doc.scrollLeft,this.doc.scrollTop),kn(this),(null==e||Math.abs(e-vr(this.display))>.5)&&xr(this),Oe(this,"refresh",this)}),swapDoc:fn(function(e){var t=this.doc
return t.cm=null,Gn(this,e),nr(this),this.display.input.reset(),this.scrollTo(e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,Ct(this,"swapDoc",this,t),t}),getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},He(e),e.registerHelper=function(t,n,i){r.hasOwnProperty(t)||(r[t]=e[t]={_global:[]}),r[t][n]=i},e.registerGlobalHelper=function(t,n,i,o){e.registerHelper(t,n,o),r[t]._global.push({pred:i,val:o})}}function Eo(e,t,r,n,i){function o(){var n=t.line+r
return!(n<e.first||n>=e.first+e.size)&&(t=new z(n,t.ch,t.sticky),u=k(e,n))}function l(n){var l
if(l=i?ke(e.cm,u,t,r):Le(u,t,r),null==l){if(n||!o())return!1
t=Me(i,e.cm,u,t.line,r)}else t=l
return!0}var s=t,a=r,u=k(e,t.line)
if("char"==n)l()
else if("column"==n)l(!0)
else if("word"==n||"group"==n)for(var c=null,f="group"==n,d=e.cm&&e.cm.getHelper(t,"wordChars"),h=!0;!(r<0)||l(!h);h=!1){var p=u.text.charAt(t.ch)||"\n",g=w(p,d)?"w":f&&"\n"==p?"n":!f||/\s/.test(p)?null:"p"
if(!f||h||g||(g="s"),c&&c!=g){r<0&&(r=1,l(),t.sticky="after")
break}if(g&&(c=g),r>0&&!l(!h))break}var v=gi(e,t,s,a,!0)
return P(s,v)&&(v.hitSide=!0),v}function Po(e,t,r,n){var i,o=e.doc,l=t.left
if("page"==n){var s=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight),a=Math.max(s-.5*vr(e.display),3)
i=(r>0?t.bottom:t.top)+r*a}else"line"==n&&(i=r>0?t.bottom+3:t.top-3)
for(var u;u=dr(e,l,i),u.outside;){if(r<0?i<=0:i>=o.height){u.hitSide=!0
break}i+=5*r}return u}function Fo(e,t){var r=Yt(e,t.line)
if(!r||r.hidden)return null
var n=k(e.doc,t.line),i=jt(r,n,t.line),o=Ce(n),l="left"
if(o){var s=xe(o,t.ch)
l=s%2?"right":"left"}var a=Zt(i.map,t.ch,l)
return a.offset="right"==a.collapse?a.end:a.start,a}function Io(e,t){return t&&(e.bad=!0),e}function Ro(e,t,r,n,i){function o(e){return function(t){return t.id==e}}function l(t){if(1==t.nodeType){var r=t.getAttribute("cm-text")
if(null!=r)return void(s+=""==r?t.textContent.replace(/\u200b/g,""):r)
var c,f=t.getAttribute("cm-marker")
if(f){var d=e.findMarks(z(n,0),z(i+1,0),o(+f))
return void(d.length&&(c=d[0].find())&&(s+=T(e.doc,c.from,c.to).join(u)))}if("false"==t.getAttribute("contenteditable"))return
for(var h=0;h<t.childNodes.length;h++)l(t.childNodes[h]);/^(pre|div|p)$/i.test(t.nodeName)&&(a=!0)}else if(3==t.nodeType){var p=t.nodeValue
if(!p)return
a&&(s+=u,a=!1),s+=p}}for(var s="",a=!1,u=e.doc.lineSeparator();l(t),t!=r;)t=t.nextSibling
return s}function Bo(e,t,r){var n
if(t==e.display.lineDiv){if(n=e.display.lineDiv.childNodes[r],!n)return Io(e.clipPos(z(e.display.viewTo-1)),!0)
t=null,r=0}else for(n=t;;n=n.parentNode){if(!n||n==e.display.lineDiv)return null
if(n.parentNode&&n.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i]
if(o.node==n)return Uo(o,t,r)}}function Uo(e,t,r){function n(t,r,n){for(var i=-1;i<(f?f.length:0);i++)for(var o=i<0?c.map:f[i],l=0;l<o.length;l+=3){var s=o[l+2]
if(s==t||s==r){var a=A(i<0?e.line:e.rest[i]),u=o[l]+n
return(n<0||s!=t)&&(u=o[l+(n?1:0)]),z(a,u)}}}var o=e.text.firstChild,l=!1
if(!t||!i(o,t))return Io(z(A(e.line),0),!0)
if(t==o&&(l=!0,t=o.childNodes[r],r=0,!t)){var s=e.rest?p(e.rest):e.line
return Io(z(A(s),s.text.length),l)}var a=3==t.nodeType?t:null,u=t
for(a||1!=t.childNodes.length||3!=t.firstChild.nodeType||(a=t.firstChild,r&&(r=a.nodeValue.length));u.parentNode!=o;)u=u.parentNode
var c=e.measure,f=c.maps,d=n(a,u,r)
if(d)return Io(d,l)
for(var h=u.nextSibling,g=a?a.nodeValue.length-r:0;h;h=h.nextSibling){if(d=n(h,h.firstChild,0))return Io(z(d.line,d.ch-g),l)
g+=h.textContent.length}for(var v=u.previousSibling,m=r;v;v=v.previousSibling){if(d=n(v,v.firstChild,-1))return Io(z(d.line,d.ch+m),l)
m+=v.textContent.length}}function Go(e,t){function r(){e.value=a.getValue()}if(t=t?u(t):{},t.value=e.value,!t.tabindex&&e.tabIndex&&(t.tabindex=e.tabIndex),!t.placeholder&&e.placeholder&&(t.placeholder=e.placeholder),null==t.autofocus){var n=o()
t.autofocus=n==e||null!=e.getAttribute("autofocus")&&n==document.body}var i
if(e.form&&(Dl(e.form,"submit",r),!t.leaveSubmitMethodAlone)){var l=e.form
i=l.submit
try{var s=l.submit=function(){r(),l.submit=i,l.submit(),l.submit=s}}catch(e){}}t.finishInit=function(t){t.save=r,t.getTextArea=function(){return e},t.toTextArea=function(){t.toTextArea=isNaN,r(),e.parentNode.removeChild(t.getWrapperElement()),e.style.display="",e.form&&(Ne(e.form,"submit",r),"function"==typeof e.form.submit&&(e.form.submit=i))}},e.style.display="none"
var a=Lo(function(t){return e.parentNode.insertBefore(t,e.nextSibling)},t)
return a}function Vo(e){e.off=Ne,e.on=Dl,e.wheelEventPixels=Ur,e.Doc=fs,e.splitLines=zl,e.countColumn=c,e.findColumn=d,e.isWordChar=b,e.Pass=wl,e.signal=Oe,e.Line=Gl,e.changeEnd=Dn,e.scrollbarModel=Ql,e.Pos=z,e.cmpPos=E,e.modes=Il,e.mimeModes=Rl,e.resolveMode=je,e.getMode=Xe,e.modeExtensions=Bl,e.extendMode=_e,e.copyState=Ye,e.startState=$e,e.innerMode=qe,e.commands=xs,e.keyMap=ys,e.keyName=qi,e.isModifierKey=Yi,e.lookupKey=_i,e.normalizeKeyMap=Xi,e.StringStream=Ul,e.SharedTextMarker=us,e.TextMarker=as,e.LineWidget=ls,e.e_preventDefault=ze,e.e_stopPropagation=Ee,e.e_stop=Fe,e.addClass=l,e.contains=i,e.rmClass=pl,e.keyNames=ps}var Ko=navigator.userAgent,jo=navigator.platform,Xo=/gecko\/\d/i.test(Ko),_o=/MSIE \d/.test(Ko),Yo=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ko),qo=/Edge\/(\d+)/.exec(Ko),$o=_o||Yo||qo,Zo=$o&&(_o?document.documentMode||6:+(qo||Yo)[1]),Jo=!qo&&/WebKit\//.test(Ko),Qo=Jo&&/Qt\/\d+\.\d+/.test(Ko),el=!qo&&/Chrome\//.test(Ko),tl=/Opera\//.test(Ko),rl=/Apple Computer/.test(navigator.vendor),nl=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(Ko),il=/PhantomJS/.test(Ko),ol=!qo&&/AppleWebKit/.test(Ko)&&/Mobile\/\w+/.test(Ko),ll=ol||/Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(Ko),sl=ol||/Mac/.test(jo),al=/\bCrOS\b/.test(Ko),ul=/win/i.test(jo),cl=tl&&Ko.match(/Version\/(\d*\.\d*)/)
cl&&(cl=Number(cl[1])),cl&&cl>=15&&(tl=!1,Jo=!0)
var fl,dl=sl&&(Qo||tl&&(null==cl||cl<12.11)),hl=Xo||$o&&Zo>=9,pl=function(t,r){var n=t.className,i=e(r).exec(n)
if(i){var o=n.slice(i.index+i[0].length)
t.className=n.slice(0,i.index)+(o?i[1]+o:"")}}
fl=document.createRange?function(e,t,r,n){var i=document.createRange()
return i.setEnd(n||e,r),i.setStart(e,t),i}:function(e,t,r){var n=document.body.createTextRange()
try{n.moveToElementText(e.parentNode)}catch(e){return n}return n.collapse(!0),n.moveEnd("character",r),n.moveStart("character",t),n}
var gl=function(e){e.select()}
ol?gl=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:$o&&(gl=function(e){try{e.select()}catch(e){}})
var vl=function(){this.id=null}
vl.prototype.set=function(e,t){clearTimeout(this.id),this.id=setTimeout(t,e)}
var ml,yl,bl=30,wl={toString:function(){return"CodeMirror.Pass"}},xl={scroll:!1},Cl={origin:"*mouse"},Sl={origin:"+move"},Ll=[""],Ml=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,kl=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,Tl=!1,Nl=!1,Ol=null,Al=function(){function e(e){return e<=247?r.charAt(e):1424<=e&&e<=1524?"R":1536<=e&&e<=1785?n.charAt(e-1536):1774<=e&&e<=2220?"r":8192<=e&&e<=8203?"w":8204==e?"b":"L"}function t(e,t,r){this.level=e,this.from=t,this.to=r}var r="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111",i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,o=/[stwN]/,l=/[LRr]/,s=/[Lb1n]/,a=/[1n]/,u="L"
return function(r){if(!i.test(r))return!1
for(var n=r.length,c=[],f=0;f<n;++f)c.push(e(r.charCodeAt(f)))
for(var d=0,h=u;d<n;++d){var g=c[d]
"m"==g?c[d]=h:h=g}for(var v=0,m=u;v<n;++v){var y=c[v]
"1"==y&&"r"==m?c[v]="n":l.test(y)&&(m=y,"r"==y&&(c[v]="R"))}for(var b=1,w=c[0];b<n-1;++b){var x=c[b]
"+"==x&&"1"==w&&"1"==c[b+1]?c[b]="1":","!=x||w!=c[b+1]||"1"!=w&&"n"!=w||(c[b]=w),w=x}for(var C=0;C<n;++C){var S=c[C]
if(","==S)c[C]="N"
else if("%"==S){var L=void 0
for(L=C+1;L<n&&"%"==c[L];++L);for(var M=C&&"!"==c[C-1]||L<n&&"1"==c[L]?"1":"N",k=C;k<L;++k)c[k]=M
C=L-1}}for(var T=0,N=u;T<n;++T){var O=c[T]
"L"==N&&"1"==O?c[T]="L":l.test(O)&&(N=O)}for(var A=0;A<n;++A)if(o.test(c[A])){var W=void 0
for(W=A+1;W<n&&o.test(c[W]);++W);for(var D="L"==(A?c[A-1]:u),H="L"==(W<n?c[W]:u),z=D||H?"L":"R",E=A;E<W;++E)c[E]=z
A=W-1}for(var P,F=[],I=0;I<n;)if(s.test(c[I])){var R=I
for(++I;I<n&&s.test(c[I]);++I);F.push(new t(0,R,I))}else{var B=I,U=F.length
for(++I;I<n&&"L"!=c[I];++I);for(var G=B;G<I;)if(a.test(c[G])){B<G&&F.splice(U,0,new t(1,B,G))
var V=G
for(++G;G<I&&a.test(c[G]);++G);F.splice(U,0,new t(2,V,G)),B=G}else++G
B<I&&F.splice(U,0,new t(1,B,I))}return 1==F[0].level&&(P=r.match(/^\s+/))&&(F[0].from=P[0].length,F.unshift(new t(0,0,P[0].length))),1==p(F).level&&(P=r.match(/\s+$/))&&(p(F).to-=P[0].length,F.push(new t(0,n-P[0].length,n))),F}}(),Wl=[],Dl=function(e,t,r){if(e.addEventListener)e.addEventListener(t,r,!1)
else if(e.attachEvent)e.attachEvent("on"+t,r)
else{var n=e._handlers||(e._handlers={})
n[t]=(n[t]||Wl).concat(r)}},Hl=function(){if($o&&Zo<9)return!1
var e=n("div")
return"draggable"in e||"dragDrop"in e}(),zl=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,r=[],n=e.length;t<=n;){var i=e.indexOf("\n",t)
i==-1&&(i=e.length)
var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),l=o.indexOf("\r")
l!=-1?(r.push(o.slice(0,l)),t+=l+1):(r.push(o),t=i+1)}return r}:function(e){return e.split(/\r\n?|\n/)},El=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(e){return!1}}:function(e){var t
try{t=e.ownerDocument.selection.createRange()}catch(e){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},Pl=function(){var e=n("div")
return"oncopy"in e||(e.setAttribute("oncopy","return;"),"function"==typeof e.oncopy)}(),Fl=null,Il={},Rl={},Bl={},Ul=function(e,t){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0}
Ul.prototype.eol=function(){return this.pos>=this.string.length},Ul.prototype.sol=function(){return this.pos==this.lineStart},Ul.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Ul.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Ul.prototype.eat=function(e){var t,r=this.string.charAt(this.pos)
if(t="string"==typeof e?r==e:r&&(e.test?e.test(r):e(r)))return++this.pos,r},Ul.prototype.eatWhile=function(e){for(var t=this.pos;this.eat(e););return this.pos>t},Ul.prototype.eatSpace=function(){for(var e=this,t=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++e.pos
return this.pos>t},Ul.prototype.skipToEnd=function(){this.pos=this.string.length},Ul.prototype.skipTo=function(e){var t=this.string.indexOf(e,this.pos)
if(t>-1)return this.pos=t,!0},Ul.prototype.backUp=function(e){this.pos-=e},Ul.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=c(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?c(this.string,this.lineStart,this.tabSize):0)},Ul.prototype.indentation=function(){return c(this.string,null,this.tabSize)-(this.lineStart?c(this.string,this.lineStart,this.tabSize):0)},Ul.prototype.match=function(e,t,r){if("string"!=typeof e){var n=this.string.slice(this.pos).match(e)
return n&&n.index>0?null:(n&&t!==!1&&(this.pos+=n[0].length),n)}var i=function(e){return r?e.toLowerCase():e},o=this.string.substr(this.pos,e.length)
if(i(o)==i(e))return t!==!1&&(this.pos+=e.length),!0},Ul.prototype.current=function(){return this.string.slice(this.start,this.pos)},Ul.prototype.hideFirstChars=function(e,t){this.lineStart+=e
try{return t()}finally{this.lineStart-=e}}
var Gl=function(e,t,r){this.text=e,re(this,t),this.height=r?r(this):1}
Gl.prototype.lineNo=function(){return A(this)},He(Gl)
var Vl,Kl={},jl={},Xl=null,_l=null,Yl={left:0,right:0,top:0,bottom:0},ql=0,$l=null
$o?$l=-.53:Xo?$l=15:el?$l=-.7:rl&&($l=-1/3)
var Zl=function(e,t,r){this.cm=r
var i=this.vert=n("div",[n("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),o=this.horiz=n("div",[n("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar")
e(i),e(o),Dl(i,"scroll",function(){i.clientHeight&&t(i.scrollTop,"vertical")}),Dl(o,"scroll",function(){o.clientWidth&&t(o.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,$o&&Zo<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")}
Zl.prototype.update=function(e){var t=e.scrollWidth>e.clientWidth+1,r=e.scrollHeight>e.clientHeight+1,n=e.nativeBarWidth
if(r){this.vert.style.display="block",this.vert.style.bottom=t?n+"px":"0"
var i=e.viewHeight-(t?n:0)
this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0"
if(t){this.horiz.style.display="block",this.horiz.style.right=r?n+"px":"0",this.horiz.style.left=e.barLeft+"px"
var o=e.viewWidth-e.barLeft-(r?n:0)
this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+o)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0"
return!this.checkedZeroWidth&&e.clientHeight>0&&(0==n&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:r?n:0,bottom:t?n:0}},Zl.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz)},Zl.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert)},Zl.prototype.zeroWidthHack=function(){var e=sl&&!nl?"12px":"18px"
this.horiz.style.height=this.vert.style.width=e,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new vl,this.disableVert=new vl},Zl.prototype.enableZeroWidthBar=function(e,t){function r(){var n=e.getBoundingClientRect(),i=document.elementFromPoint(n.left+1,n.bottom-1)
i!=e?e.style.pointerEvents="none":t.set(1e3,r)}e.style.pointerEvents="auto",t.set(1e3,r)},Zl.prototype.clear=function(){var e=this.horiz.parentNode
e.removeChild(this.horiz),e.removeChild(this.vert)}
var Jl=function(){}
Jl.prototype.update=function(){return{bottom:0,right:0}},Jl.prototype.setScrollLeft=function(){},Jl.prototype.setScrollTop=function(){},Jl.prototype.clear=function(){}
var Ql={native:Zl,null:Jl},es=0,ts=function(e,t,r){var n=e.display
this.viewport=t,this.visible=Fr(n,e.doc,t),this.editorIsHidden=!n.wrapper.offsetWidth,this.wrapperHeight=n.wrapper.clientHeight,this.wrapperWidth=n.wrapper.clientWidth,this.oldDisplayWidth=Gt(e),this.force=r,this.dims=yr(e),this.events=[]}
ts.prototype.signal=function(e,t){De(e,t)&&this.events.push(arguments)},ts.prototype.finish=function(){for(var e=this,t=0;t<this.events.length;t++)Oe.apply(null,e.events[t])}
var rs=function(e,t){this.ranges=e,this.primIndex=t}
rs.prototype.primary=function(){return this.ranges[this.primIndex]},rs.prototype.equals=function(e){var t=this
if(e==this)return!0
if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1
for(var r=0;r<this.ranges.length;r++){var n=t.ranges[r],i=e.ranges[r]
if(!P(n.anchor,i.anchor)||!P(n.head,i.head))return!1}return!0},rs.prototype.deepCopy=function(){for(var e=this,t=[],r=0;r<this.ranges.length;r++)t[r]=new ns(F(e.ranges[r].anchor),F(e.ranges[r].head))
return new rs(t,this.primIndex)},rs.prototype.somethingSelected=function(){for(var e=this,t=0;t<this.ranges.length;t++)if(!e.ranges[t].empty())return!0
return!1},rs.prototype.contains=function(e,t){var r=this
t||(t=e)
for(var n=0;n<this.ranges.length;n++){var i=r.ranges[n]
if(E(t,i.from())>=0&&E(e,i.to())<=0)return n}return-1}
var ns=function(e,t){this.anchor=e,this.head=t}
ns.prototype.from=function(){return R(this.anchor,this.head)},ns.prototype.to=function(){return I(this.anchor,this.head)},ns.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch}
var is=function(e){var t=this
this.lines=e,this.parent=null
for(var r=0,n=0;n<e.length;++n)e[n].parent=t,r+=e[n].height
this.height=r}
is.prototype.chunkSize=function(){return this.lines.length},is.prototype.removeInner=function(e,t){for(var r=this,n=e,i=e+t;n<i;++n){var o=r.lines[n]
r.height-=o.height,at(o),Ct(o,"delete")}this.lines.splice(e,t)},is.prototype.collapse=function(e){e.push.apply(e,this.lines)},is.prototype.insertInner=function(e,t,r){var n=this
this.height+=r,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e))
for(var i=0;i<t.length;++i)t[i].parent=n},is.prototype.iterN=function(e,t,r){for(var n=this,i=e+t;e<i;++e)if(r(n.lines[e]))return!0}
var os=function(e){var t=this
this.children=e
for(var r=0,n=0,i=0;i<e.length;++i){var o=e[i]
r+=o.chunkSize(),n+=o.height,o.parent=t}this.size=r,this.height=n,this.parent=null}
os.prototype.chunkSize=function(){return this.size},os.prototype.removeInner=function(e,t){var r=this
this.size-=t
for(var n=0;n<this.children.length;++n){var i=r.children[n],o=i.chunkSize()
if(e<o){var l=Math.min(t,o-e),s=i.height
if(i.removeInner(e,l),r.height-=s-i.height,o==l&&(r.children.splice(n--,1),i.parent=null),0==(t-=l))break
e=0}else e-=o}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof is))){var a=[]
this.collapse(a),this.children=[new is(a)],this.children[0].parent=this}},os.prototype.collapse=function(e){for(var t=this,r=0;r<this.children.length;++r)t.children[r].collapse(e)},os.prototype.insertInner=function(e,t,r){var n=this
this.size+=t.length,this.height+=r
for(var i=0;i<this.children.length;++i){var o=n.children[i],l=o.chunkSize()
if(e<=l){if(o.insertInner(e,t,r),o.lines&&o.lines.length>50){for(var s=o.lines.length%25+25,a=s;a<o.lines.length;){var u=new is(o.lines.slice(a,a+=25))
o.height-=u.height,n.children.splice(++i,0,u),u.parent=n}o.lines=o.lines.slice(0,s),n.maybeSpill()}break}e-=l}},os.prototype.maybeSpill=function(){if(!(this.children.length<=10)){var e=this
do{var t=e.children.splice(e.children.length-5,5),r=new os(t)
if(e.parent){e.size-=r.size,e.height-=r.height
var n=f(e.parent.children,e)
e.parent.children.splice(n+1,0,r)}else{var i=new os(e.children)
i.parent=e,e.children=[i,r],e=i}r.parent=e.parent}while(e.children.length>10)
e.parent.maybeSpill()}},os.prototype.iterN=function(e,t,r){for(var n=this,i=0;i<this.children.length;++i){var o=n.children[i],l=o.chunkSize()
if(e<l){var s=Math.min(t,l-e)
if(o.iterN(e,s,r))return!0
if(0==(t-=s))break
e=0}else e-=l}}
var ls=function(e,t,r){var n=this
if(r)for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])
this.doc=e,this.node=t}
ls.prototype.clear=function(){var e=this,t=this.doc.cm,r=this.line.widgets,n=this.line,i=A(n)
if(null!=i&&r){for(var o=0;o<r.length;++o)r[o]==e&&r.splice(o--,1)
r.length||(n.widgets=null)
var l=Pt(this)
O(n,Math.max(0,n.height-l)),t&&(un(t,function(){Ai(t,n,-l),pn(t,i,"widget")}),Ct(t,"lineWidgetCleared",t,this,i))}},ls.prototype.changed=function(){var e=this,t=this.height,r=this.doc.cm,n=this.line
this.height=null
var i=Pt(this)-t
i&&(O(n,n.height+i),r&&un(r,function(){r.curOp.forceUpdate=!0,Ai(r,n,i),Ct(r,"lineWidgetChanged",r,e,A(n))}))},He(ls)
var ss=0,as=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++ss}
as.prototype.clear=function(){var e=this
if(!this.explicitlyCleared){var t=this.doc.cm,r=t&&!t.curOp
if(r&&en(t),De(this,"clear")){var n=this.find()
n&&Ct(this,"clear",n.from,n.to)}for(var i=null,o=null,l=0;l<this.lines.length;++l){var s=e.lines[l],a=_(s.markedSpans,e)
t&&!e.collapsed?pn(t,A(s),"text"):t&&(null!=a.to&&(o=A(s)),null!=a.from&&(i=A(s))),s.markedSpans=Y(s.markedSpans,a),null==a.from&&e.collapsed&&!ge(e.doc,s)&&t&&O(s,vr(t.display))}if(t&&this.collapsed&&!t.options.lineWrapping)for(var u=0;u<this.lines.length;++u){var c=ce(e.lines[u]),f=ye(c)
f>t.display.maxLineLength&&(t.display.maxLine=c,t.display.maxLineLength=f,t.display.maxLineChanged=!0)}null!=i&&t&&this.collapsed&&hn(t,i,o+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,t&&di(t.doc)),t&&Ct(t,"markerCleared",t,this,i,o),r&&tn(t),this.parent&&this.parent.clear()}},as.prototype.find=function(e,t){var r=this
null==e&&"bookmark"==this.type&&(e=1)
for(var n,i,o=0;o<this.lines.length;++o){var l=r.lines[o],s=_(l.markedSpans,r)
if(null!=s.from&&(n=z(t?l:A(l),s.from),e==-1))return n
if(null!=s.to&&(i=z(t?l:A(l),s.to),1==e))return i}return n&&{from:n,to:i}},as.prototype.changed=function(){var e=this,t=this.find(-1,!0),r=this,n=this.doc.cm
t&&n&&un(n,function(){var i=t.line,o=A(t.line),l=Yt(n,o)
if(l&&(tr(l),n.curOp.selectionChanged=n.curOp.forceUpdate=!0),n.curOp.updateMaxLine=!0,!ge(r.doc,i)&&null!=r.height){var s=r.height
r.height=null
var a=Pt(r)-s
a&&O(i,i.height+a)}Ct(n,"markerChanged",n,e)})},as.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp
t.maybeHiddenMarkers&&f(t.maybeHiddenMarkers,this)!=-1||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},as.prototype.detachLine=function(e){if(this.lines.splice(f(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}},He(as)
var us=function(e,t){var r=this
this.markers=e,this.primary=t
for(var n=0;n<e.length;++n)e[n].parent=r}
us.prototype.clear=function(){var e=this
if(!this.explicitlyCleared){this.explicitlyCleared=!0
for(var t=0;t<this.markers.length;++t)e.markers[t].clear()
Ct(this,"clear")}},us.prototype.find=function(e,t){return this.primary.find(e,t)},He(us)
var cs=0,fs=function(e,t,r,n){if(!(this instanceof fs))return new fs(e,t,r,n)
null==r&&(r=0),os.call(this,[new is([new Gl("",null)])]),this.first=r,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.frontier=r
var i=z(r,0)
this.sel=Wn(i),this.history=new Vn(null),this.id=++cs,this.modeOption=t,this.lineSep=n,this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),Bn(this,{from:i,to:i,text:e}),ui(this,Wn(i),xl)}
fs.prototype=y(os.prototype,{constructor:fs,iter:function(e,t,r){r?this.iterN(e-this.first,t-e,r):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var r=0,n=0;n<t.length;++n)r+=t[n].height
this.insertInner(e-this.first,t,r)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=N(this,this.first,this.first+this.size)
return e===!1?t:t.join(e||this.lineSeparator())},setValue:dn(function(e){var t=z(this.first,0),r=this.first+this.size-1
bi(this,{from:t,to:z(r,k(this,r).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),ui(this,Wn(t))}),replaceRange:function(e,t,r,n){t=U(this,t),r=r?U(this,r):t,Mi(this,e,t,r,n)},getRange:function(e,t,r){var n=T(this,U(this,e),U(this,t))
return r===!1?n:n.join(r||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e)
return t&&t.text},getLineHandle:function(e){if(D(this,e))return k(this,e)},getLineNumber:function(e){return A(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=k(this,e)),ce(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return U(this,e)},getCursor:function(e){var t,r=this.sel.primary()
return t=null==e||"head"==e?r.head:"anchor"==e?r.anchor:"end"==e||"to"==e||e===!1?r.to():r.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:dn(function(e,t,r){li(this,U(this,"number"==typeof e?z(e,t||0):e),null,r)}),setSelection:dn(function(e,t,r){li(this,U(this,e),U(this,t||e),r)}),extendSelection:dn(function(e,t,r){ni(this,U(this,e),t&&U(this,t),r)}),extendSelections:dn(function(e,t){ii(this,V(this,e),t)}),extendSelectionsBy:dn(function(e,t){var r=g(this.sel.ranges,e)
ii(this,V(this,r),t)}),setSelections:dn(function(e,t,r){var n=this
if(e.length){for(var i=[],o=0;o<e.length;o++)i[o]=new ns(U(n,e[o].anchor),U(n,e[o].head))
null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),ui(this,An(i,t),r)}}),addSelection:dn(function(e,t,r){var n=this.sel.ranges.slice(0)
n.push(new ns(U(this,e),U(this,t||e))),ui(this,An(n,n.length-1),r)}),getSelection:function(e){for(var t,r=this,n=this.sel.ranges,i=0;i<n.length;i++){var o=T(r,n[i].from(),n[i].to())
t=t?t.concat(o):o}return e===!1?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=this,r=[],n=this.sel.ranges,i=0;i<n.length;i++){var o=T(t,n[i].from(),n[i].to())
e!==!1&&(o=o.join(e||t.lineSeparator())),r[i]=o}return r},replaceSelection:function(e,t,r){for(var n=[],i=0;i<this.sel.ranges.length;i++)n[i]=e
this.replaceSelections(n,t,r||"+input")},replaceSelections:dn(function(e,t,r){for(var n=this,i=[],o=this.sel,l=0;l<o.ranges.length;l++){var s=o.ranges[l]
i[l]={from:s.from(),to:s.to(),text:n.splitLines(e[l]),origin:r}}for(var a=t&&"end"!=t&&Pn(this,i,t),u=i.length-1;u>=0;u--)bi(n,i[u])
a?ai(this,a):this.cm&&Jr(this.cm)}),undo:dn(function(){xi(this,"undo")}),redo:dn(function(){xi(this,"redo")}),undoSelection:dn(function(){xi(this,"undo",!0)}),redoSelection:dn(function(){xi(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,r=0,n=0;n<e.done.length;n++)e.done[n].ranges||++t
for(var i=0;i<e.undone.length;i++)e.undone[i].ranges||++r
return{undo:t,redo:r}},clearHistory:function(){this.history=new Vn(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:ti(this.history.done),undone:ti(this.history.undone)}},setHistory:function(e){var t=this.history=new Vn(this.history.maxGeneration)
t.done=ti(e.done.slice(0),null,!0),t.undone=ti(e.undone.slice(0),null,!0)},setGutterMarker:dn(function(e,t,r){return Oi(this,e,"gutter",function(e){var n=e.gutterMarkers||(e.gutterMarkers={})
return n[t]=r,!r&&x(n)&&(e.gutterMarkers=null),!0})}),clearGutter:dn(function(e){var t=this
this.iter(function(r){r.gutterMarkers&&r.gutterMarkers[e]&&Oi(t,r,"gutter",function(){return r.gutterMarkers[e]=null,x(r.gutterMarkers)&&(r.gutterMarkers=null),!0})})}),lineInfo:function(e){var t
if("number"==typeof e){if(!D(this,e))return null
if(t=e,e=k(this,e),!e)return null}else if(t=A(e),null==t)return null
return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:dn(function(t,r,n){return Oi(this,t,"gutter"==r?"gutter":"class",function(t){var i="text"==r?"textClass":"background"==r?"bgClass":"gutter"==r?"gutterClass":"wrapClass"
if(t[i]){if(e(n).test(t[i]))return!1
t[i]+=" "+n}else t[i]=n
return!0})}),removeLineClass:dn(function(t,r,n){return Oi(this,t,"gutter"==r?"gutter":"class",function(t){var i="text"==r?"textClass":"background"==r?"bgClass":"gutter"==r?"gutterClass":"wrapClass",o=t[i]
if(!o)return!1
if(null==n)t[i]=null
else{var l=o.match(e(n))
if(!l)return!1
var s=l.index+l[0].length
t[i]=o.slice(0,l.index)+(l.index&&s!=o.length?" ":"")+o.slice(s)||null}return!0})}),addLineWidget:dn(function(e,t,r){return Wi(this,e,t,r)}),removeLineWidget:function(e){e.clear()},markText:function(e,t,r){return Di(this,U(this,e),U(this,t),r,r&&r.type||"range")},setBookmark:function(e,t){var r={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents}
return e=U(this,e),Di(this,e,e,r,"bookmark")},findMarksAt:function(e){e=U(this,e)
var t=[],r=k(this,e.line).markedSpans
if(r)for(var n=0;n<r.length;++n){var i=r[n];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(e,t,r){e=U(this,e),t=U(this,t)
var n=[],i=e.line
return this.iter(e.line,t.line+1,function(o){var l=o.markedSpans
if(l)for(var s=0;s<l.length;s++){var a=l[s]
null!=a.to&&i==e.line&&e.ch>=a.to||null==a.from&&i!=e.line||null!=a.from&&i==t.line&&a.from>=t.ch||r&&!r(a.marker)||n.push(a.marker.parent||a.marker)}++i}),n},getAllMarks:function(){var e=[]
return this.iter(function(t){var r=t.markedSpans
if(r)for(var n=0;n<r.length;++n)null!=r[n].from&&e.push(r[n].marker)}),e},posFromIndex:function(e){var t,r=this.first,n=this.lineSeparator().length
return this.iter(function(i){var o=i.text.length+n
return o>e?(t=e,!0):(e-=o,void++r)}),U(this,z(r,t))},indexFromPos:function(e){e=U(this,e)
var t=e.ch
if(e.line<this.first||e.ch<0)return 0
var r=this.lineSeparator().length
return this.iter(this.first,e.line,function(e){t+=e.text.length+r}),t},copy:function(e){var t=new fs(N(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep)
return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={})
var t=this.first,r=this.first+this.size
null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<r&&(r=e.to)
var n=new fs(N(this,t,r),e.mode||this.modeOption,t,this.lineSep)
return e.sharedHist&&(n.history=this.history),(this.linked||(this.linked=[])).push({doc:n,sharedHist:e.sharedHist}),n.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],Ei(n,zi(this)),n},unlinkDoc:function(e){var t=this
if(e instanceof Lo&&(e=e.doc),this.linked)for(var r=0;r<this.linked.length;++r){var n=t.linked[r]
if(n.doc==e){t.linked.splice(r,1),e.unlinkDoc(t),Pi(zi(t))
break}}if(e.history==this.history){var i=[e.id]
Un(e,function(e){return i.push(e.id)},!0),e.history=new Vn(null),e.history.done=ti(this.history.done,i),e.history.undone=ti(this.history.undone,i)}},iterLinkedDocs:function(e){Un(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):zl(e)},lineSeparator:function(){return this.lineSep||"\n"}}),fs.prototype.eachLine=fs.prototype.iter
for(var ds=0,hs=!1,ps={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},gs=0;gs<10;gs++)ps[gs+48]=ps[gs+96]=String(gs)
for(var vs=65;vs<=90;vs++)ps[vs]=String.fromCharCode(vs)
for(var ms=1;ms<=12;ms++)ps[ms+111]=ps[ms+63235]="F"+ms
var ys={}
ys.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},ys.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},ys.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},ys.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},ys.default=sl?ys.macDefault:ys.pcDefault
var bs,ws,xs={selectAll:mi,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),xl)},killLine:function(e){return Zi(e,function(t){if(t.empty()){var r=k(e.doc,t.head.line).text.length
return t.head.ch==r&&t.head.line<e.lastLine()?{from:t.head,to:z(t.head.line+1,0)}:{from:t.head,to:z(t.head.line,r)}}return{from:t.from(),to:t.to()}})},deleteLine:function(e){return Zi(e,function(t){return{from:z(t.from().line,0),to:U(e.doc,z(t.to().line+1,0))}})},delLineLeft:function(e){return Zi(e,function(e){return{from:z(e.from().line,0),to:e.from()}})},delWrappedLineLeft:function(e){return Zi(e,function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:0,top:r},"div")
return{from:n,to:t.from()}})},delWrappedLineRight:function(e){return Zi(e,function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")
return{from:t.from(),to:n}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(z(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(z(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(t){return Ji(e,t.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(t){return eo(e,t.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(t){return Qi(e,t.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(t){var r=e.charCoords(t.head,"div").top+5
return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")},Sl)},goLineLeft:function(e){return e.extendSelectionsBy(function(t){var r=e.charCoords(t.head,"div").top+5
return e.coordsChar({left:0,top:r},"div")},Sl)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:0,top:r},"div")
return n.ch<e.getLine(n.line).search(/\S/)?eo(e,t.head):n},Sl)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"char")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],r=e.listSelections(),n=e.options.tabSize,i=0;i<r.length;i++){var o=r[i].from(),l=c(e.getLine(o.line),o.ch,n)
t.push(h(n-l%n))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return un(e,function(){for(var t=e.listSelections(),r=[],n=0;n<t.length;n++)if(t[n].empty()){var i=t[n].head,o=k(e.doc,i.line).text
if(o)if(i.ch==o.length&&(i=new z(i.line,i.ch-1)),i.ch>0)i=new z(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),z(i.line,i.ch-2),i,"+transpose")
else if(i.line>e.doc.first){var l=k(e.doc,i.line-1).text
l&&(i=new z(i.line,1),e.replaceRange(o.charAt(0)+e.doc.lineSeparator()+l.charAt(l.length-1),z(i.line-1,l.length-1),i,"+transpose"))}r.push(new ns(i,i))}e.setSelections(r)})},newlineAndIndent:function(e){return un(e,function(){for(var t=e.listSelections(),r=t.length-1;r>=0;r--)e.replaceRange(e.doc.lineSeparator(),t[r].anchor,t[r].head,"+input")
t=e.listSelections()
for(var n=0;n<t.length;n++)e.indentLine(t[n].from().line,null,!0)
Jr(e)})},openLine:function(e){return e.replaceSelection("\n","start")},toggleOverwrite:function(e){return e.toggleOverwrite()}},Cs=new vl,Ss=null,Ls={toString:function(){return"CodeMirror.Init"}},Ms={},ks={}
Lo.defaults=Ms,Lo.optionHandlers=ks
var Ts=[]
Lo.defineInitHook=function(e){return Ts.push(e)}
var Ns=null,Os=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new vl,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null}
Os.prototype.init=function(e){function t(e){if(!Ae(i,e)){if(i.somethingSelected())To({lineWise:!1,text:i.getSelections()}),"cut"==e.type&&i.replaceSelection("",null,"cut")
else{if(!i.options.lineWiseCopyCut)return
var t=Wo(i)
To({lineWise:!0,text:t.text}),"cut"==e.type&&i.operation(function(){i.setSelections(t.ranges,0,xl),i.replaceSelection("",null,"cut")})}if(e.clipboardData){e.clipboardData.clearData()
var r=Ns.text.join("\n")
if(e.clipboardData.setData("Text",r),e.clipboardData.getData("Text")==r)return void e.preventDefault()}var l=Ho(),s=l.firstChild
i.display.lineSpace.insertBefore(l,i.display.lineSpace.firstChild),s.value=Ns.text.join("\n")
var a=document.activeElement
gl(s),setTimeout(function(){i.display.lineSpace.removeChild(l),a.focus(),a==o&&n.showPrimarySelection()},50)}}var r=this,n=this,i=n.cm,o=n.div=e.lineDiv
Do(o,i.options.spellcheck),Dl(o,"paste",function(e){Ae(i,e)||Oo(e,i)||Zo<=11&&setTimeout(cn(i,function(){n.pollContent()||hn(i)}),20)}),Dl(o,"compositionstart",function(e){r.composing={data:e.data,done:!1}}),Dl(o,"compositionupdate",function(e){r.composing||(r.composing={data:e.data,done:!1})}),Dl(o,"compositionend",function(e){r.composing&&(e.data!=r.composing.data&&r.readFromDOMSoon(),r.composing.done=!0)}),Dl(o,"touchstart",function(){return n.forceCompositionEnd()}),Dl(o,"input",function(){r.composing||r.readFromDOMSoon()}),Dl(o,"copy",t),Dl(o,"cut",t)},Os.prototype.prepareSelection=function(){var e=Mr(this.cm,!1)
return e.focus=this.cm.state.focused,e},Os.prototype.showSelection=function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Os.prototype.showPrimarySelection=function(){var e=window.getSelection(),t=this.cm.doc.sel.primary(),r=Bo(this.cm,e.anchorNode,e.anchorOffset),n=Bo(this.cm,e.focusNode,e.focusOffset)
if(!r||r.bad||!n||n.bad||0!=E(R(r,n),t.from())||0!=E(I(r,n),t.to())){var i=Fo(this.cm,t.from()),o=Fo(this.cm,t.to())
if(i||o){var l=this.cm.display.view,s=e.rangeCount&&e.getRangeAt(0)
if(i){if(!o){var a=l[l.length-1].measure,u=a.maps?a.maps[a.maps.length-1]:a.map
o={node:u[u.length-1],offset:u[u.length-2]-u[u.length-3]}}}else i={node:l[0].measure.map[2],offset:0}
var c
try{c=fl(i.node,i.offset,o.offset,o.node)}catch(e){}c&&(!Xo&&this.cm.state.focused?(e.collapse(i.node,i.offset),c.collapsed||(e.removeAllRanges(),e.addRange(c))):(e.removeAllRanges(),e.addRange(c)),s&&null==e.anchorNode?e.addRange(s):Xo&&this.startGracePeriod()),this.rememberSelection()}}},Os.prototype.startGracePeriod=function(){var e=this
clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Os.prototype.showMultipleSelections=function(e){r(this.cm.display.cursorDiv,e.cursors),r(this.cm.display.selectionDiv,e.selection)},Os.prototype.rememberSelection=function(){var e=window.getSelection()
this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Os.prototype.selectionInEditor=function(){var e=window.getSelection()
if(!e.rangeCount)return!1
var t=e.getRangeAt(0).commonAncestorContainer
return i(this.div,t)},Os.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()||this.showSelection(this.prepareSelection(),!0),this.div.focus())},Os.prototype.blur=function(){this.div.blur()},Os.prototype.getField=function(){return this.div},Os.prototype.supportsTouch=function(){return!0},Os.prototype.receivedFocus=function(){function e(){t.cm.state.focused&&(t.pollSelection(),t.polling.set(t.cm.options.pollInterval,e))}var t=this
this.selectionInEditor()?this.pollSelection():un(this.cm,function(){return t.cm.curOp.selectionChanged=!0}),this.polling.set(this.cm.options.pollInterval,e)},Os.prototype.selectionChanged=function(){var e=window.getSelection()
return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Os.prototype.pollSelection=function(){if(!this.composing&&null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var e=window.getSelection(),t=this.cm
this.rememberSelection()
var r=Bo(t,e.anchorNode,e.anchorOffset),n=Bo(t,e.focusNode,e.focusOffset)
r&&n&&un(t,function(){ui(t.doc,Wn(r,n),xl),(r.bad||n.bad)&&(t.curOp.selectionChanged=!0)})}},Os.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null)
var e=this.cm,t=e.display,r=e.doc.sel.primary(),n=r.from(),i=r.to()
if(0==n.ch&&n.line>e.firstLine()&&(n=z(n.line-1,k(e.doc,n.line-1).length)),i.ch==k(e.doc,i.line).text.length&&i.line<e.lastLine()&&(i=z(i.line+1,0)),n.line<t.viewFrom||i.line>t.viewTo-1)return!1
var o,l,s
n.line==t.viewFrom||0==(o=Sr(e,n.line))?(l=A(t.view[0].line),s=t.view[0].node):(l=A(t.view[o].line),s=t.view[o-1].node.nextSibling)
var a,u,c=Sr(e,i.line)
if(c==t.view.length-1?(a=t.viewTo-1,u=t.lineDiv.lastChild):(a=A(t.view[c+1].line)-1,u=t.view[c+1].node.previousSibling),!s)return!1
for(var f=e.doc.splitLines(Ro(e,s,u,l,a)),d=T(e.doc,z(l,0),z(a,k(e.doc,a).text.length));f.length>1&&d.length>1;)if(p(f)==p(d))f.pop(),d.pop(),a--
else{if(f[0]!=d[0])break
f.shift(),d.shift(),l++}for(var h=0,g=0,v=f[0],m=d[0],y=Math.min(v.length,m.length);h<y&&v.charCodeAt(h)==m.charCodeAt(h);)++h
for(var b=p(f),w=p(d),x=Math.min(b.length-(1==f.length?h:0),w.length-(1==d.length?h:0));g<x&&b.charCodeAt(b.length-g-1)==w.charCodeAt(w.length-g-1);)++g
f[f.length-1]=b.slice(0,b.length-g).replace(/^\u200b+/,""),f[0]=f[0].slice(h).replace(/\u200b+$/,"")
var C=z(l,h),S=z(a,d.length?p(d).length-g:0)
return f.length>1||f[0]||E(C,S)?(Mi(e.doc,f,C,S,"+input"),!0):void 0},Os.prototype.ensurePolled=function(){this.forceCompositionEnd()},Os.prototype.reset=function(){this.forceCompositionEnd()},Os.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.pollContent()||hn(this.cm),this.div.blur(),this.div.focus())},Os.prototype.readFromDOMSoon=function(){var e=this
null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing){if(!e.composing.done)return
e.composing=null}!e.cm.isReadOnly()&&e.pollContent()||un(e.cm,function(){return hn(e.cm)})},80))},Os.prototype.setUneditable=function(e){e.contentEditable="false"},Os.prototype.onKeyPress=function(e){0!=e.charCode&&(e.preventDefault(),this.cm.isReadOnly()||cn(this.cm,No)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0))},Os.prototype.readOnlyChanged=function(e){this.div.contentEditable=String("nocursor"!=e)},Os.prototype.onContextMenu=function(){},Os.prototype.resetPosition=function(){},Os.prototype.needsContentAttribute=!0
var As=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new vl,this.inaccurateSelection=!1,this.hasSelection=!1,this.composing=null}
As.prototype.init=function(e){function t(e){if(!Ae(i,e)){if(i.somethingSelected())To({lineWise:!1,text:i.getSelections()}),n.inaccurateSelection&&(n.prevInput="",n.inaccurateSelection=!1,l.value=Ns.text.join("\n"),gl(l))
else{if(!i.options.lineWiseCopyCut)return
var t=Wo(i)
To({lineWise:!0,text:t.text}),"cut"==e.type?i.setSelections(t.ranges,null,xl):(n.prevInput="",l.value=t.text.join("\n"),gl(l))}"cut"==e.type&&(i.state.cutIncoming=!0)}}var r=this,n=this,i=this.cm,o=this.wrapper=Ho(),l=this.textarea=o.firstChild
e.wrapper.insertBefore(o,e.wrapper.firstChild),ol&&(l.style.width="0px"),Dl(l,"input",function(){$o&&Zo>=9&&r.hasSelection&&(r.hasSelection=null),n.poll()}),Dl(l,"paste",function(e){Ae(i,e)||Oo(e,i)||(i.state.pasteIncoming=!0,n.fastPoll())}),Dl(l,"cut",t),Dl(l,"copy",t),Dl(e.scroller,"paste",function(t){Ft(e,t)||Ae(i,t)||(i.state.pasteIncoming=!0,n.focus())}),Dl(e.lineSpace,"selectstart",function(t){Ft(e,t)||ze(t)}),Dl(l,"compositionstart",function(){var e=i.getCursor("from")
n.composing&&n.composing.range.clear(),n.composing={start:e,range:i.markText(e,i.getCursor("to"),{className:"CodeMirror-composing"})}}),Dl(l,"compositionend",function(){n.composing&&(n.poll(),n.composing.range.clear(),n.composing=null)})},As.prototype.prepareSelection=function(){var e=this.cm,t=e.display,r=e.doc,n=Mr(e)
if(e.options.moveInputWithCursor){var i=ur(e,r.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),l=t.lineDiv.getBoundingClientRect()
n.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+l.top-o.top)),n.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+l.left-o.left))}return n},As.prototype.showSelection=function(e){var t=this.cm,n=t.display
r(n.cursorDiv,e.cursors),r(n.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},As.prototype.reset=function(e){if(!this.contextMenuPending){var t,r,n=this.cm,i=n.doc
if(n.somethingSelected()){this.prevInput=""
var o=i.sel.primary()
t=Pl&&(o.to().line-o.from().line>100||(r=n.getSelection()).length>1e3)
var l=t?"-":r||n.getSelection()
this.textarea.value=l,n.state.focused&&gl(this.textarea),$o&&Zo>=9&&(this.hasSelection=l)}else e||(this.prevInput=this.textarea.value="",$o&&Zo>=9&&(this.hasSelection=null))
this.inaccurateSelection=t}},As.prototype.getField=function(){return this.textarea},As.prototype.supportsTouch=function(){return!1},As.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!ll||o()!=this.textarea))try{this.textarea.focus()}catch(e){}},As.prototype.blur=function(){this.textarea.blur()},As.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},As.prototype.receivedFocus=function(){this.slowPoll()},As.prototype.slowPoll=function(){var e=this
this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},As.prototype.fastPoll=function(){function e(){var n=r.poll()
n||t?(r.pollingFast=!1,r.slowPoll()):(t=!0,r.polling.set(60,e))}var t=!1,r=this
r.pollingFast=!0,r.polling.set(20,e)},As.prototype.poll=function(){var e=this,t=this.cm,r=this.textarea,n=this.prevInput
if(this.contextMenuPending||!t.state.focused||El(r)&&!n&&!this.composing||t.isReadOnly()||t.options.disableInput||t.state.keySeq)return!1
var i=r.value
if(i==n&&!t.somethingSelected())return!1
if($o&&Zo>=9&&this.hasSelection===i||sl&&/[\uf700-\uf7ff]/.test(i))return t.display.input.reset(),!1
if(t.doc.sel==t.display.selForContextMenu){var o=i.charCodeAt(0)
if(8203!=o||n||(n="​"),8666==o)return this.reset(),this.cm.execCommand("undo")}for(var l=0,s=Math.min(n.length,i.length);l<s&&n.charCodeAt(l)==i.charCodeAt(l);)++l
return un(t,function(){No(t,i.slice(l),n.length-l,null,e.composing?"*compose":null),i.length>1e3||i.indexOf("\n")>-1?r.value=e.prevInput="":e.prevInput=i,e.composing&&(e.composing.range.clear(),e.composing.range=t.markText(e.composing.start,t.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},As.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},As.prototype.onKeyPress=function(){$o&&Zo>=9&&(this.hasSelection=null),this.fastPoll()},As.prototype.onContextMenu=function(e){function t(){if(null!=l.selectionStart){var e=i.somethingSelected(),t="​"+(e?l.value:"")
l.value="⇚",l.value=t,n.prevInput=e?"":"​",l.selectionStart=1,l.selectionEnd=t.length,o.selForContextMenu=i.doc.sel}}function r(){if(n.contextMenuPending=!1,n.wrapper.style.cssText=f,l.style.cssText=c,$o&&Zo<9&&o.scrollbars.setScrollTop(o.scroller.scrollTop=a),null!=l.selectionStart){(!$o||$o&&Zo<9)&&t()
var e=0,r=function(){o.selForContextMenu==i.doc.sel&&0==l.selectionStart&&l.selectionEnd>0&&"​"==n.prevInput?cn(i,mi)(i):e++<10?o.detectingSelectAll=setTimeout(r,500):(o.selForContextMenu=null,o.input.reset())}
o.detectingSelectAll=setTimeout(r,200)}}var n=this,i=n.cm,o=i.display,l=n.textarea,s=Cr(i,e),a=o.scroller.scrollTop
if(s&&!tl){var u=i.options.resetSelectionOnContextMenu
u&&i.doc.sel.contains(s)==-1&&cn(i,ui)(i.doc,Wn(s),xl)
var c=l.style.cssText,f=n.wrapper.style.cssText
n.wrapper.style.cssText="position: absolute"
var d=n.wrapper.getBoundingClientRect()
l.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-d.top-5)+"px; left: "+(e.clientX-d.left-5)+"px;\n      z-index: 1000; background: "+($o?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"
var h
if(Jo&&(h=window.scrollY),o.input.focus(),Jo&&window.scrollTo(null,h),o.input.reset(),i.somethingSelected()||(l.value=n.prevInput=" "),n.contextMenuPending=!0,o.selForContextMenu=i.doc.sel,clearTimeout(o.detectingSelectAll),$o&&Zo>=9&&t(),hl){Fe(e)
var p=function(){Ne(window,"mouseup",p),setTimeout(r,20)}
Dl(window,"mouseup",p)}else setTimeout(r,50)}},As.prototype.readOnlyChanged=function(e){e||this.reset()},As.prototype.setUneditable=function(){},As.prototype.needsContentAttribute=!1,wo(Lo),zo(Lo)
var Ws="iter insert remove copy getEditor constructor".split(" ")
for(var Ds in fs.prototype)fs.prototype.hasOwnProperty(Ds)&&f(Ws,Ds)<0&&(Lo.prototype[Ds]=function(e){return function(){return e.apply(this.doc,arguments)}}(fs.prototype[Ds]))
return He(fs),Lo.inputStyles={textarea:As,contenteditable:Os},Lo.defineMode=function(e){Lo.defaults.mode||"null"==e||(Lo.defaults.mode=e),Ve.apply(this,arguments)},Lo.defineMIME=Ke,Lo.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),Lo.defineMIME("text/plain","null"),Lo.defineExtension=function(e,t){Lo.prototype[e]=t},Lo.defineDocExtension=function(e,t){fs.prototype[e]=t},Lo.fromTextArea=Go,Vo(Lo),Lo.version="5.24.2",Lo})},951:function(e,t,r){t=e.exports=r(263)(),t.push([e.id,'.CodeMirror{font-family:monospace;height:300px;color:#000}.CodeMirror-lines{padding:4px 0}.CodeMirror pre{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-animate-fat-cursor{width:auto;border:0;-webkit-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite;background-color:#7e7}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:-20px;overflow:hidden}.CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}.cm-s-default .cm-header{color:blue}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-invalidchar,.cm-s-default .cm-error{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0f0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#f22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:#fff}.CodeMirror-scroll{overflow:scroll!important;margin-bottom:-30px;margin-right:-30px;padding-bottom:30px;height:100%;outline:none;position:relative}.CodeMirror-sizer{position:relative;border-right:30px solid transparent}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{position:absolute;z-index:6;display:none}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-30px}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:none!important;border:none!important}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-gutter-wrapper{-webkit-user-select:none;-moz-user-select:none;user-select:none}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre{border-radius:0;border-width:0;background:transparent;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:contextual;font-variant-ligatures:contextual}.CodeMirror-wrap pre{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;overflow:auto}.CodeMirror-code{outline:none}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute;pointer-events:none}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}.CodeMirror-focused div.CodeMirror-cursors,div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background:#ffa;background:rgba(255,255,0,.4)}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:""}span.CodeMirror-selectedtext{background:none}',""])},1516:function(e,t,r){var n=r(951)
"string"==typeof n&&(n=[[e.id,n,""]])
r(363)(n,{})
n.locals&&(e.exports=n.locals)}})
