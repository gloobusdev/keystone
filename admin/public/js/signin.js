webpackJsonp([14],{0:function(e,t,a){"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}var s=a(1),r=n(s),i=a(16),o=n(i),l=a(736),u=n(l)
o.default.render(r.default.createElement(u.default,{brand:Keystone.brand,from:Keystone.from,logo:Keystone.logo,user:Keystone.user,userCanAccessKeystone:Keystone.userCanAccessKeystone}),document.getElementById("signin-view"))},736:function(e,t,a){"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}var s=a(6),r=n(s),i=a(4),o=n(i),l=a(1),u=n(l),d=a(176),c=n(d),m=a(737),p=n(m),h=a(738),f=n(h),g=a(740),y=n(g),v=a(739),b=n(v),E=u.default.createClass({displayName:"SigninView",getInitialState:function(){return{email:"",password:"",isAnimating:!1,isInvalid:!1,invalidMessage:"",signedOut:"?signedout"===window.location.search}},componentDidMount:function(){this.refs.email&&this.refs.email.select()},handleInputChange:function(e){var t={}
t[e.target.name]=e.target.value,this.setState(t)},handleSubmit:function(e){var t=this
return e.preventDefault(),this.state.email&&this.state.password?void(0,c.default)({url:Keystone.adminPath+"/api/session/signin",method:"post",json:{email:this.state.email,password:this.state.password},headers:(0,r.default)({},Keystone.csrf.header)},function(e,a,n){return e||n&&n.error?"invalid csrf"===n.error?t.displayError("Something went wrong; please refresh your browser and try again."):t.displayError("The email and password you entered are not valid."):void(Keystone.redirect?top.location.href=Keystone.redirect:top.location.href=t.props.from?t.props.from:Keystone.adminPath)}):this.displayError("Please enter an email address and password to sign in.")},displayError:function(e){this.setState({isAnimating:!0,isInvalid:!0,invalidMessage:e}),setTimeout(this.finishAnimation,750)},finishAnimation:function(){this.isMounted()&&(this.refs.email&&this.refs.email.select(),this.setState({isAnimating:!1}))},render:function(){var e=(0,o.default)("auth-box",{"auth-box--has-errors":this.state.isAnimating})
return u.default.createElement("div",{className:"auth-wrapper"},u.default.createElement(p.default,{isInvalid:this.state.isInvalid,signedOut:this.state.signedOut,invalidMessage:this.state.invalidMessage}),u.default.createElement("div",{className:e},u.default.createElement("h1",{className:"u-hidden-visually"},this.props.brand?this.props.brand:"Keystone"," Sign In "),u.default.createElement("div",{className:"auth-box__inner"},u.default.createElement(f.default,{logo:this.props.logo,brand:this.props.brand}),this.props.user?u.default.createElement(y.default,{adminPath:this.props.from?this.props.from:Keystone.adminPath,signoutPath:Keystone.adminPath+"/signout",userCanAccessKeystone:this.props.userCanAccessKeystone,userName:this.props.user.name}):u.default.createElement(b.default,{email:this.state.email,handleInputChange:this.handleInputChange,handleSubmit:this.handleSubmit,isAnimating:this.state.isAnimating,password:this.state.password}))),u.default.createElement("div",{className:"auth-footer"},u.default.createElement("span",null,"Powered by "),u.default.createElement("a",{href:"http://keystonejs.com",target:"_blank",title:"The Node.js CMS and web application platform (new window)"},"KeystoneJS")))}})
e.exports=E},737:function(e,t,a){"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}var s=a(1),r=n(s),i=a(3),o=function(e){return e.isInvalid?r.default.createElement(i.Alert,{key:"error",type:"danger",style:{textAlign:"center"}},e.invalidMessage):e.signedOut?r.default.createElement(i.Alert,{key:"signed-out",type:"info",style:{textAlign:"center"}},"You have been signed out."):r.default.createElement("span",null)}
o.propTypes={invalidMessage:r.default.PropTypes.string,isInvalid:r.default.PropTypes.bool,signedOut:r.default.PropTypes.bool},e.exports=o},738:function(e,t,a){"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}var s=a(1),r=n(s),i=function(e){var t={src:Keystone.adminPath+"/images/logo.png",width:205,height:68}
return e.logo&&(t="string"==typeof e.logo?{src:e.logo}:e.logo,Array.isArray(t)&&(t={src:t[0],width:t[1],height:t[2]})),r.default.createElement("div",{className:"auth-box__col"},r.default.createElement("div",{className:"auth-box__brand"},r.default.createElement("a",{href:"/",className:"auth-box__brand__logo"},r.default.createElement("img",{src:t.src,width:t.width?t.width:null,height:t.height?t.height:null,alt:e.brand}))))}
e.exports=i},739:function(e,t,a){"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}var s=a(1),r=n(s),i=a(36),o=function(e){var t=e.email,a=e.handleInputChange,n=e.handleSubmit,s=e.isAnimating,o=e.password
return r.default.createElement("div",{className:"auth-box__col"},r.default.createElement(i.Form,{onSubmit:n,noValidate:!0},r.default.createElement(i.FormField,{label:"Email",htmlFor:"email"},r.default.createElement(i.FormInput,{autoFocus:!0,type:"email",name:"email",onChange:a,value:t})),r.default.createElement(i.FormField,{label:"Password",htmlFor:"password"},r.default.createElement(i.FormInput,{type:"password",name:"password",onChange:a,value:o})),r.default.createElement(i.Button,{disabled:s,color:"primary",type:"submit"},"Sign In")))}
o.propTypes={email:s.PropTypes.string,handleInputChange:s.PropTypes.func.isRequired,handleSubmit:s.PropTypes.func.isRequired,isAnimating:s.PropTypes.bool,password:s.PropTypes.string},e.exports=o},740:function(e,t,a){"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}var s=a(1),r=n(s),i=a(36),o=function(e){var t=e.adminPath,a=e.signoutPath,n=e.userCanAccessKeystone,s=e.userName,o=n?r.default.createElement(i.Button,{href:t,color:"primary"},"Open Keystone"):null
return r.default.createElement("div",{className:"auth-box__col"},r.default.createElement("p",null,"Hi ",s,","),r.default.createElement("p",null,"You're already signed in."),o,r.default.createElement(i.Button,{href:a,variant:"link",color:"cancel"},"Sign Out"))}
o.propTypes={adminPath:s.PropTypes.string.isRequired,signoutPath:s.PropTypes.string.isRequired,userCanAccessKeystone:s.PropTypes.bool,userName:s.PropTypes.string.isRequired},e.exports=o}})
