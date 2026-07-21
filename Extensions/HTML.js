// Name: HTML.js
// OBhtml Licence: MIT
// Original by https://github.com/otterboing
// https://github.com/otterboing/Turbowarp-Extensions/blob/main/Extensions/HTML.js

// DOMPurify: <https://github.com/cure53/DOMPurify>
// DOMPurify Licence: Apache license 2.0 and Mozilla Public License 2.0 | https://github.com/cure53/DOMPurify/blob/3.4.8/LICENSE

(async function (Scratch) {

if (!Scratch.extensions.unsandboxed) throw new Error("OBhtml Must Be Run Un-Sandboxed! - Requires JS modify the page.");


// If you don't like all the extra licences you can just remove the icons and DOMPurify. Fair Warning removing DOMPurify will open up users of your project to XML and XSS attacks.
// NEVER DO THIS WITHOUT REPLACING IT IN A MULTIPLAYER GAME!

// You can replace the sanitizer by replacing DOMPuify 👇 and modifying the Purify() function.

// DOMPurify for security reasons, sucks it' like 30kb.
// Start of https://github.com/cure53/DOMPurify/blob/main/dist/purify.min.js

/*! @license DOMPurify 3.4.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.8/LICENSE */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).DOMPurify=t()}(this,function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function t(t,n){return function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,l=[],c=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t);else for(;!(c=(o=i.call(n)).done)&&(l.push(o.value),l.length!==t);c=!0);}catch(e){s=!0,r=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return l}}(t,n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const n=Object.entries,o=Object.setPrototypeOf,r=Object.isFrozen,i=Object.getPrototypeOf,a=Object.getOwnPropertyDescriptor;let l=Object.freeze,c=Object.seal,s=Object.create,u="undefined"!=typeof Reflect&&Reflect,f=u.apply,m=u.construct;l||(l=function(e){return e}),c||(c=function(e){return e}),f||(f=function(e,t){for(var n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];return e.apply(t,o)}),m||(m=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return new e(...n)});const p=L(Array.prototype.forEach),d=L(Array.prototype.lastIndexOf),h=L(Array.prototype.pop),g=L(Array.prototype.push),y=L(Array.prototype.splice),T=Array.isArray,b=L(String.prototype.toLowerCase),A=L(String.prototype.toString),S=L(String.prototype.match),E=L(String.prototype.replace),_=L(String.prototype.indexOf),N=L(String.prototype.trim),O=L(Number.prototype.toString),D=L(Boolean.prototype.toString),R="undefined"==typeof BigInt?null:L(BigInt.prototype.toString),w="undefined"==typeof Symbol?null:L(Symbol.prototype.toString),I=L(Object.prototype.hasOwnProperty),v=L(Object.prototype.toString),C=L(RegExp.prototype.test),x=(k=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return m(k,t)});var k;function L(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return f(e,t,o)}}function M(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b;if(o&&o(e,null),!T(t))return e;let i=t.length;for(;i--;){let o=t[i];if("string"==typeof o){const e=n(o);e!==o&&(r(t)||(t[i]=e),o=e)}e[o]=!0}return e}function P(e){for(let t=0;t<e.length;t++){I(e,t)||(e[t]=null)}return e}function z(e){const o=s(null);for(const i of n(e)){var r=t(i,2);const n=r[0],a=r[1];I(e,n)&&(T(a)?o[n]=P(a):a&&"object"==typeof a&&a.constructor===Object?o[n]=z(a):o[n]=a)}return o}function U(e,t){for(;null!==e;){const n=a(e,t);if(n){if(n.get)return L(n.get);if("function"==typeof n.value)return L(n.value)}e=i(e)}return function(){return null}}const F=l(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),H=l(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),B=l(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),j=l(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),G=l(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),W=l(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Y=l(["#text"]),q=l(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),X=l(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),$=l(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),K=l(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),V=c(/{{[\w\W]*|^[\w\W]*}}/g),Z=c(/<%[\w\W]*|^[\w\W]*%>/g),J=c(/\${[\w\W]*/g),Q=c(/^data-[\-\w.\u00B7-\uFFFF]+$/),ee=c(/^aria-[\-\w]+$/),te=c(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ne=c(/^(?:\w+script|data):/i),oe=c(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),re=c(/^html$/i),ie=c(/^[a-z][.\w]*(-[.\w]+)+$/i),ae=1,le=3,ce=7,se=8,ue=9,fe=11,me=function(){return"undefined"==typeof window?null:window};var pe=function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me();const o=t=>e(t);if(o.version="3.4.8",o.removed=[],!t||!t.document||t.document.nodeType!==ue||!t.Element)return o.isSupported=!1,o;let r=t.document;const i=r,a=i.currentScript;t.DocumentFragment;const c=t.HTMLTemplateElement,u=t.Node,f=t.Element,m=t.NodeFilter,k=t.NamedNodeMap;void 0===k&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;const L=t.DOMParser,P=t.trustedTypes,pe=f.prototype,de=U(pe,"cloneNode"),he=U(pe,"remove"),ge=U(pe,"nextSibling"),ye=U(pe,"childNodes"),Te=U(pe,"parentNode"),be=U(pe,"shadowRoot"),Ae=U(pe,"attributes"),Se=u&&u.prototype?U(u.prototype,"nodeType"):null,Ee=u&&u.prototype?U(u.prototype,"nodeName"):null;if("function"==typeof c){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let _e,Ne="",Oe=0;const De=function(e){if(Oe>0)throw x('The configured TRUSTED_TYPES_POLICY.createHTML must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose createHTML wraps DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');Oe++;try{return _e.createHTML(e)}finally{Oe--}},Re=r,we=Re.implementation,Ie=Re.createNodeIterator,ve=Re.createDocumentFragment,Ce=Re.getElementsByTagName,xe=i.importNode;let ke={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};o.isSupported="function"==typeof n&&"function"==typeof Te&&we&&void 0!==we.createHTMLDocument;const Le=V,Me=Z,Pe=J,ze=Q,Ue=ee,Fe=ne,He=oe,Be=ie;let je=te,Ge=null;const We=M({},[...F,...H,...B,...G,...Y]);let Ye=null;const qe=M({},[...q,...X,...$,...K]);let Xe=Object.seal(s(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),$e=null,Ke=null;const Ve=Object.seal(s(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Ze=!0,Je=!0,Qe=!1,et=!0,tt=!1,nt=!0,ot=!1,rt=!1,it=!1,at=!1,lt=!1,ct=!1,st=!0,ut=!1;const ft="user-content-";let mt=!0,pt=!1,dt={},ht=null;const gt=M({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let yt=null;const Tt=M({},["audio","video","img","source","image","track"]);let bt=null;const At=M({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),St="http://www.w3.org/1998/Math/MathML",Et="http://www.w3.org/2000/svg",_t="http://www.w3.org/1999/xhtml";let Nt=_t,Ot=!1,Dt=null;const Rt=M({},[St,Et,_t],A);let wt=M({},["mi","mo","mn","ms","mtext"]),It=M({},["annotation-xml"]);const vt=M({},["title","style","font","a","script"]);let Ct=null;const xt=["application/xhtml+xml","text/html"];let kt=null,Lt=null;const Mt=r.createElement("form"),Pt=function(e){return e instanceof RegExp||e instanceof Function},zt=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(Lt&&Lt===e)return;e&&"object"==typeof e||(e={}),e=z(e),Ct=-1===xt.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,kt="application/xhtml+xml"===Ct?A:b,Ge=I(e,"ALLOWED_TAGS")&&T(e.ALLOWED_TAGS)?M({},e.ALLOWED_TAGS,kt):We,Ye=I(e,"ALLOWED_ATTR")&&T(e.ALLOWED_ATTR)?M({},e.ALLOWED_ATTR,kt):qe,Dt=I(e,"ALLOWED_NAMESPACES")&&T(e.ALLOWED_NAMESPACES)?M({},e.ALLOWED_NAMESPACES,A):Rt,bt=I(e,"ADD_URI_SAFE_ATTR")&&T(e.ADD_URI_SAFE_ATTR)?M(z(At),e.ADD_URI_SAFE_ATTR,kt):At,yt=I(e,"ADD_DATA_URI_TAGS")&&T(e.ADD_DATA_URI_TAGS)?M(z(Tt),e.ADD_DATA_URI_TAGS,kt):Tt,ht=I(e,"FORBID_CONTENTS")&&T(e.FORBID_CONTENTS)?M({},e.FORBID_CONTENTS,kt):gt,$e=I(e,"FORBID_TAGS")&&T(e.FORBID_TAGS)?M({},e.FORBID_TAGS,kt):z({}),Ke=I(e,"FORBID_ATTR")&&T(e.FORBID_ATTR)?M({},e.FORBID_ATTR,kt):z({}),dt=!!I(e,"USE_PROFILES")&&(e.USE_PROFILES&&"object"==typeof e.USE_PROFILES?z(e.USE_PROFILES):e.USE_PROFILES),Ze=!1!==e.ALLOW_ARIA_ATTR,Je=!1!==e.ALLOW_DATA_ATTR,Qe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,et=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,tt=e.SAFE_FOR_TEMPLATES||!1,nt=!1!==e.SAFE_FOR_XML,ot=e.WHOLE_DOCUMENT||!1,at=e.RETURN_DOM||!1,lt=e.RETURN_DOM_FRAGMENT||!1,ct=e.RETURN_TRUSTED_TYPE||!1,it=e.FORCE_BODY||!1,st=!1!==e.SANITIZE_DOM,ut=e.SANITIZE_NAMED_PROPS||!1,mt=!1!==e.KEEP_CONTENT,pt=e.IN_PLACE||!1,je=function(e){try{return C(e,""),!0}catch(e){return!1}}(e.ALLOWED_URI_REGEXP)?e.ALLOWED_URI_REGEXP:te,Nt="string"==typeof e.NAMESPACE?e.NAMESPACE:_t,wt=I(e,"MATHML_TEXT_INTEGRATION_POINTS")&&e.MATHML_TEXT_INTEGRATION_POINTS&&"object"==typeof e.MATHML_TEXT_INTEGRATION_POINTS?z(e.MATHML_TEXT_INTEGRATION_POINTS):M({},["mi","mo","mn","ms","mtext"]),It=I(e,"HTML_INTEGRATION_POINTS")&&e.HTML_INTEGRATION_POINTS&&"object"==typeof e.HTML_INTEGRATION_POINTS?z(e.HTML_INTEGRATION_POINTS):M({},["annotation-xml"]);const t=I(e,"CUSTOM_ELEMENT_HANDLING")&&e.CUSTOM_ELEMENT_HANDLING&&"object"==typeof e.CUSTOM_ELEMENT_HANDLING?z(e.CUSTOM_ELEMENT_HANDLING):s(null);if(Xe=s(null),I(t,"tagNameCheck")&&Pt(t.tagNameCheck)&&(Xe.tagNameCheck=t.tagNameCheck),I(t,"attributeNameCheck")&&Pt(t.attributeNameCheck)&&(Xe.attributeNameCheck=t.attributeNameCheck),I(t,"allowCustomizedBuiltInElements")&&"boolean"==typeof t.allowCustomizedBuiltInElements&&(Xe.allowCustomizedBuiltInElements=t.allowCustomizedBuiltInElements),tt&&(Je=!1),lt&&(at=!0),dt&&(Ge=M({},Y),Ye=s(null),!0===dt.html&&(M(Ge,F),M(Ye,q)),!0===dt.svg&&(M(Ge,H),M(Ye,X),M(Ye,K)),!0===dt.svgFilters&&(M(Ge,B),M(Ye,X),M(Ye,K)),!0===dt.mathMl&&(M(Ge,G),M(Ye,$),M(Ye,K))),Ve.tagCheck=null,Ve.attributeCheck=null,I(e,"ADD_TAGS")&&("function"==typeof e.ADD_TAGS?Ve.tagCheck=e.ADD_TAGS:T(e.ADD_TAGS)&&(Ge===We&&(Ge=z(Ge)),M(Ge,e.ADD_TAGS,kt))),I(e,"ADD_ATTR")&&("function"==typeof e.ADD_ATTR?Ve.attributeCheck=e.ADD_ATTR:T(e.ADD_ATTR)&&(Ye===qe&&(Ye=z(Ye)),M(Ye,e.ADD_ATTR,kt))),I(e,"ADD_URI_SAFE_ATTR")&&T(e.ADD_URI_SAFE_ATTR)&&M(bt,e.ADD_URI_SAFE_ATTR,kt),I(e,"FORBID_CONTENTS")&&T(e.FORBID_CONTENTS)&&(ht===gt&&(ht=z(ht)),M(ht,e.FORBID_CONTENTS,kt)),I(e,"ADD_FORBID_CONTENTS")&&T(e.ADD_FORBID_CONTENTS)&&(ht===gt&&(ht=z(ht)),M(ht,e.ADD_FORBID_CONTENTS,kt)),mt&&(Ge["#text"]=!0),ot&&M(Ge,["html","head","body"]),Ge.table&&(M(Ge,["tbody"]),delete $e.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw x('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw x('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const t=_e;_e=e.TRUSTED_TYPES_POLICY;try{Ne=De("")}catch(e){throw _e=t,e}}else void 0===_e&&null!==e.TRUSTED_TYPES_POLICY&&(_e=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const o="data-tt-policy-suffix";t&&t.hasAttribute(o)&&(n=t.getAttribute(o));const r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}}(P,a)),_e&&"string"==typeof Ne&&(Ne=De(""));(ke.uponSanitizeElement.length>0||ke.uponSanitizeAttribute.length>0)&&Ge===We&&(Ge=z(Ge)),ke.uponSanitizeAttribute.length>0&&Ye===qe&&(Ye=z(Ye)),l&&l(e),Lt=e},Ut=M({},[...H,...B,...j]),Ft=M({},[...G,...W]),Ht=function(e){g(o.removed,{element:e});try{Te(e).removeChild(e)}catch(t){he(e)}},Bt=function(e,t){try{g(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){g(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(at||lt)try{Ht(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},jt=function(e){let t=null,n=null;if(it)e="<remove></remove>"+e;else{const t=S(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===Ct&&Nt===_t&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const o=_e?De(e):e;if(Nt===_t)try{t=(new L).parseFromString(o,Ct)}catch(e){}if(!t||!t.documentElement){t=we.createDocument(Nt,"template",null);try{t.documentElement.innerHTML=Ot?Ne:o}catch(e){}}const i=t.body||t.documentElement;return e&&n&&i.insertBefore(r.createTextNode(n),i.childNodes[0]||null),Nt===_t?Ce.call(t,ot?"html":"body")[0]:ot?t.documentElement:i},Gt=function(e){return Ie.call(e.ownerDocument||e,e,m.SHOW_ELEMENT|m.SHOW_COMMENT|m.SHOW_TEXT|m.SHOW_PROCESSING_INSTRUCTION|m.SHOW_CDATA_SECTION,null)},Wt=function(e){var t,n;e.normalize();const o=Ie.call(e.ownerDocument||e,e,m.SHOW_TEXT|m.SHOW_COMMENT|m.SHOW_CDATA_SECTION|m.SHOW_PROCESSING_INSTRUCTION,null);let r=o.nextNode();for(;r;){let e=r.data;p([Le,Me,Pe],t=>{e=E(e,t," ")}),r.data=e,r=o.nextNode()}const i=null!==(t=null===(n=e.querySelectorAll)||void 0===n?void 0:n.call(e,"template"))&&void 0!==t?t:[];p(Array.from(i),e=>{qt(e.content)&&Wt(e.content)})},Yt=function(e){const t=Ee?Ee(e):null;return"string"==typeof t&&("form"===kt(t)&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||e.attributes!==Ae(e)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes||e.nodeType!==Se(e)||e.childNodes!==ye(e)))},qt=function(e){if(!Se||"object"!=typeof e||null===e)return!1;try{return Se(e)===fe}catch(e){return!1}},Xt=function(e){if(!Se||"object"!=typeof e||null===e)return!1;try{return"number"==typeof Se(e)}catch(e){return!1}};function $t(e,t,n){p(e,e=>{e.call(o,t,n,Lt)})}const Kt=function(e){let t=null;if($t(ke.beforeSanitizeElements,e,null),Yt(e))return Ht(e),!0;const n=kt(Ee?Ee(e):e.nodeName);if($t(ke.uponSanitizeElement,e,{tagName:n,allowedTags:Ge}),nt&&e.hasChildNodes()&&!Xt(e.firstElementChild)&&C(/<[/\w!]/g,e.innerHTML)&&C(/<[/\w!]/g,e.textContent))return Ht(e),!0;if(nt&&e.namespaceURI===_t&&"style"===n&&Xt(e.firstElementChild))return Ht(e),!0;if(e.nodeType===ce)return Ht(e),!0;if(nt&&e.nodeType===se&&C(/<[/\w]/g,e.data))return Ht(e),!0;if($e[n]||!(Ve.tagCheck instanceof Function&&Ve.tagCheck(n))&&!Ge[n]){if(!$e[n]&&Jt(n)){if(Xe.tagNameCheck instanceof RegExp&&C(Xe.tagNameCheck,n))return!1;if(Xe.tagNameCheck instanceof Function&&Xe.tagNameCheck(n))return!1}if(mt&&!ht[n]){const t=Te(e),n=ye(e);if(n&&t){for(let o=n.length-1;o>=0;--o){const r=de(n[o],!0);t.insertBefore(r,ge(e))}}}return Ht(e),!0}return((Se?Se(e):e.nodeType)!==ae||function(e){let t=Te(e);t&&t.tagName||(t={namespaceURI:Nt,tagName:"template"});const n=b(e.tagName),o=b(t.tagName);return!!Dt[e.namespaceURI]&&(e.namespaceURI===Et?t.namespaceURI===_t?"svg"===n:t.namespaceURI===St?"svg"===n&&("annotation-xml"===o||wt[o]):Boolean(Ut[n]):e.namespaceURI===St?t.namespaceURI===_t?"math"===n:t.namespaceURI===Et?"math"===n&&It[o]:Boolean(Ft[n]):e.namespaceURI===_t?!(t.namespaceURI===Et&&!It[o])&&!(t.namespaceURI===St&&!wt[o])&&!Ft[n]&&(vt[n]||!Ut[n]):!("application/xhtml+xml"!==Ct||!Dt[e.namespaceURI]))}(e))&&("noscript"!==n&&"noembed"!==n&&"noframes"!==n||!C(/<\/no(script|embed|frames)/i,e.innerHTML))?(tt&&e.nodeType===le&&(t=e.textContent,p([Le,Me,Pe],e=>{t=E(t,e," ")}),e.textContent!==t&&(g(o.removed,{element:e.cloneNode()}),e.textContent=t)),$t(ke.afterSanitizeElements,e,null),!1):(Ht(e),!0)},Vt=function(e,t,n){if(Ke[t])return!1;if(st&&("id"===t||"name"===t)&&(n in r||n in Mt))return!1;const o=Ye[t]||Ve.attributeCheck instanceof Function&&Ve.attributeCheck(t,e);if(Je&&!Ke[t]&&C(ze,t));else if(Ze&&C(Ue,t));else if(!o||Ke[t]){if(!(Jt(e)&&(Xe.tagNameCheck instanceof RegExp&&C(Xe.tagNameCheck,e)||Xe.tagNameCheck instanceof Function&&Xe.tagNameCheck(e))&&(Xe.attributeNameCheck instanceof RegExp&&C(Xe.attributeNameCheck,t)||Xe.attributeNameCheck instanceof Function&&Xe.attributeNameCheck(t,e))||"is"===t&&Xe.allowCustomizedBuiltInElements&&(Xe.tagNameCheck instanceof RegExp&&C(Xe.tagNameCheck,n)||Xe.tagNameCheck instanceof Function&&Xe.tagNameCheck(n))))return!1}else if(bt[t]);else if(C(je,E(n,He,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==_(n,"data:")||!yt[e]){if(Qe&&!C(Fe,E(n,He,"")));else if(n)return!1}else;return!0},Zt=M({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Jt=function(e){return!Zt[b(e)]&&C(Be,e)},Qt=function(e){$t(ke.beforeSanitizeAttributes,e,null);const t=e.attributes;if(!t||Yt(e))return;const n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ye,forceKeepAttr:void 0};let r=t.length;for(;r--;){const i=t[r],a=i.name,l=i.namespaceURI,c=i.value,s=kt(a),u=c;let f="value"===a?u:N(u);if(n.attrName=s,n.attrValue=f,n.keepAttr=!0,n.forceKeepAttr=void 0,$t(ke.uponSanitizeAttribute,e,n),f=n.attrValue,!ut||"id"!==s&&"name"!==s||0===_(f,ft)||(Bt(a,e),f=ft+f),nt&&C(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,f)){Bt(a,e);continue}if("attributename"===s&&S(f,"href")){Bt(a,e);continue}if(n.forceKeepAttr)continue;if(!n.keepAttr){Bt(a,e);continue}if(!et&&C(/\/>/i,f)){Bt(a,e);continue}tt&&p([Le,Me,Pe],e=>{f=E(f,e," ")});const m=kt(e.nodeName);if(Vt(m,s,f)){if(_e&&"object"==typeof P&&"function"==typeof P.getAttributeType)if(l);else switch(P.getAttributeType(m,s)){case"TrustedHTML":f=De(f);break;case"TrustedScriptURL":f=_e.createScriptURL(f)}if(f!==u)try{l?e.setAttributeNS(l,a,f):e.setAttribute(a,f),Yt(e)?Ht(e):h(o.removed)}catch(t){Bt(a,e)}}else Bt(a,e)}$t(ke.afterSanitizeAttributes,e,null)},en=function(e){let t=null;const n=Gt(e);for($t(ke.beforeSanitizeShadowDOM,e,null);t=n.nextNode();){$t(ke.uponSanitizeShadowNode,t,null),Kt(t),Qt(t),qt(t.content)&&en(t.content);if((Se?Se(t):t.nodeType)===ae){const e=be?be(t):t.shadowRoot;qt(e)&&(tn(e),en(e))}}$t(ke.afterSanitizeShadowDOM,e,null)},tn=function(e){const t=Se?Se(e):e.nodeType;if(t===ae){const t=be?be(e):e.shadowRoot;qt(t)&&(tn(t),en(t))}const n=ye?ye(e):e.childNodes;if(!n)return;const o=[];p(n,e=>{g(o,e)});for(const e of o)tn(e);if(t===ae){const t=Ee?Ee(e):null;if("string"==typeof t&&"template"===kt(t)){const t=e.content;qt(t)&&tn(t)}}};return o.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null,r=null,a=null,l=null;if(Ot=!e,Ot&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Xt(e)&&"string"!=typeof(e=function(e){switch(typeof e){case"string":return e;case"number":return O(e);case"boolean":return D(e);case"bigint":return R?R(e):"0";case"symbol":return w?w(e):"Symbol()";case"undefined":default:return v(e);case"function":case"object":{if(null===e)return v(e);const t=e,n=U(t,"toString");if("function"==typeof n){const e=n(t);return"string"==typeof e?e:v(e)}return v(e)}}}(e)))throw x("dirty is not a string, aborting");if(!o.isSupported)return e;if(rt||zt(t),o.removed=[],"string"==typeof e&&(pt=!1),pt){const t=Ee?Ee(e):e.nodeName;if("string"==typeof t){const e=kt(t);if(!Ge[e]||$e[e])throw x("root node is forbidden and cannot be sanitized in-place")}if(Yt(e))throw x("root node is clobbered and cannot be sanitized in-place");tn(e)}else if(Xt(e))n=jt("\x3c!----\x3e"),r=n.ownerDocument.importNode(e,!0),r.nodeType===ae&&"BODY"===r.nodeName||"HTML"===r.nodeName?n=r:n.appendChild(r),tn(r);else{if(!at&&!tt&&!ot&&-1===e.indexOf("<"))return _e&&ct?De(e):e;if(n=jt(e),!n)return at?null:ct?Ne:""}n&&it&&Ht(n.firstChild);const c=Gt(pt?e:n);for(;a=c.nextNode();)Kt(a),Qt(a),qt(a.content)&&en(a.content);if(pt)return tt&&Wt(e),e;if(at){if(tt&&Wt(n),lt)for(l=ve.call(n.ownerDocument);n.firstChild;)l.appendChild(n.firstChild);else l=n;return(Ye.shadowroot||Ye.shadowrootmode)&&(l=xe.call(i,l,!0)),l}let s=ot?n.outerHTML:n.innerHTML;return ot&&Ge["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&C(re,n.ownerDocument.doctype.name)&&(s="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+s),tt&&p([Le,Me,Pe],e=>{s=E(s,e," ")}),_e&&ct?De(s):s},o.setConfig=function(){zt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),rt=!0},o.clearConfig=function(){Lt=null,rt=!1},o.isValidAttribute=function(e,t,n){Lt||zt({});const o=kt(e),r=kt(t);return Vt(o,r,n)},o.addHook=function(e,t){"function"==typeof t&&g(ke[e],t)},o.removeHook=function(e,t){if(void 0!==t){const n=d(ke[e],t);return-1===n?void 0:y(ke[e],n,1)[0]}return h(ke[e])},o.removeHooks=function(e){ke[e]=[]},o.removeAllHooks=function(){ke={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},o}();return pe});
//# sourceMappingURL=purify.min.js.map

// End of https://github.com/cure53/DOMPurify/blob/main/dist/purify.min.js

function purify(html) {
  try {return DOMPurify.sanitize(html);}
  catch {return html;}
}
//

const ver = '1.3.0';
// > Added blocks to get and set outer html of one or all elements matching a selector.
// > Added blocks to get the mouse position on the page and in certain elements (based on the element's dimentions).
// > Added blocks to check if one or any elements matching a selector match another selector (like ":hover" or ":active").
// >> Added a block to get all the attributes of a certain element matching a selector as JSON!
// >> Added blocks to set one or all matching a selector via JSON!
// >> Added blocks to remove attributes from one or all matching a selector via ARRAY!
// >> Added a Block to get all the attributes of all elements matching a selector as an array containing JSONs (using the order of the DOM).
// >> Added blocks to remove a certain attribute from one or all matching a selector.
// >> Moved mouseDown to a new Mouse section with the mouse position blocks.
// >> Added blocks to add/remove classes in one or all matching a selector via text separated by commas or an array.
// >> Added blocks to get all classes of one or all elements matching a selector.

// Licence of HTML5 and CSS3 logos: Creative Commons Attribution 3.0 Unported <https://creativecommons.org/licenses/by/3.0/>
// icon and cssIcon attributed to the W3C. <https://www.w3.org/>
const icon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMzYyLjggNDExLjQiPjxnIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTMzIDM3MC40IDAgMGgzNjIuOGwtMzMgMzcwLjItMTQ4LjcgNDEuMiIgZmlsbD0iI2U0NGQyNiIvPjxwYXRoIGQ9Ik0xODEuNCAzNzkuOVYzMC40aDE0OC4zbC0yOC4zIDMxNiIgZmlsbD0iI2YxNjUyOSIvPjxwYXRoIGQ9Ik02Ny40IDc1LjdoMTE0djQ1LjRoLTY0LjJsNC4yIDQ2LjVoNjB2NDUuM0g3OS44bTIgMjIuOGg0NS42bDMuMiAzNi4zIDUwLjggMTMuNlYzMzNsLTkzLjItMjYiIGZpbGw9IiNlYmViZWIiLz48cGF0aCBkPSJNMjkwLjggMTIxLjFIMTgxLjJWNzUuN0gyOTVNMjc0LjIgMzA3bC05MyAyNS44di00Ny4ybDUwLjctMTMuNiA1LjMtNTloLTU2di00NS40aDEwNS41IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg=='
const cssIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iIzI2NGRlNCIgZD0iTTcxLjM1NyA0NjAuODE5IDMwLjI3MiAwaDQ1MS40NTZsLTQxLjEyOSA0NjAuNzQ2TDI1NS43MjQgNTEyeiIvPjxwYXRoIGZpbGw9IiMyOTY1ZjEiIGQ9Im00MDUuMzg4IDQzMS40MDggMzUuMTQ4LTM5My43M0gyNTZ2NDM1LjE0NnoiLz48cGF0aCBmaWxsPSIjZWJlYmViIiBkPSJtMTI0LjQ2IDIwOC41OSA1LjA2NSA1Ni41MTdIMjU2VjIwOC41OXptLTUuMDQxLTU3Ljg3NUgyNTZWOTQuMTk3SDExNC4yODF6TTI1NiAzNTUuMzcybC0uMjQ4LjA2Ni02Mi45NDQtMTYuOTk2LTQuMDIzLTQ1LjA3NmgtNTYuNzM2bDcuOTE5IDg4Ljc0MSAxMTUuNzcyIDMyLjE0LjI2LS4wNzN6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI1NS44MDUgMjA4LjU5djU2LjUxN0gzMjUuNGwtNi41NiA3My4yOTktNjMuMDM1IDE3LjAxM3Y1OC44bDExNS44NjQtMzIuMTEyLjg1LTkuNTQ5IDEzLjI4LTE0OC43OTIgMS4zOC0xNS4xNzYgMTAuMjAzLTExNC4zOTNIMjU1LjgwNXY1Ni41MThoNzkuNjM5TDMzMC4zIDIwOC41OXoiLz48L3N2Zz4=';
// Colors
const color1Def = '#e44d26';
const color2Def = '#f16529';
const color3Def = '#e44d26';
//
// Allows for choosing the selector [Scratch="canvas"] to get the correct canvas.
const canvas = Scratch.vm.renderer.canvas;
canvas.setAttribute('Scratch','canvas')
canvas.classList.add('sc-Canvas');
canvas.setAttribute('sc-Canvas','true');

function getColor(color,num = 1) {
  if (color == null | color == '') {return eval(`color`+num+`Def`);} else {return color;}
}

function label(name) {return {blockType: 'label', text: name};}

function MI(text,value) {return {text: text, value: value}}

// I should've' done this earlier 
function makeBlock(opcode,type,text,args,color1,color2,color3,icon,hide) {
  return {
    opcode: opcode,
    blockType: type,
    text: text,
    color1: getColor(color1,1),
    color2: getColor(color2,2),
    color3: getColor(color3,3),
    allowDropAnywhere: true,
    blockIconURI: icon,
    arguments: args,
    hidefromPalette: hide
  }
}

function makeButton(text,func) {
  return {
    blockType: Scratch.BlockType.BUTTON,
    text: text,
    func: func
  }
}

function ARG(name,type,defaultValue) {return ``+name+`: {type: `+type+`, defaultValue: `+defaultValue+`}`}

const ogTitle = document.title;

const mouse = {
  page: {x: 0},
  screen: {y: 0},
  click: null,
  dblClick: null,
  hover: null,
  other: {}
} 

// Some utils.
function getGreater(input1,input2) {
const out = {}
if (input1 > input2) {const g = input1;const l = input2} else {const g = input2; const l = input1;};
out[lesser] = l;
out[greater] = g;
return out;
}

function within(x,y,x1,y1,x2,y2) {
const boundsX = OBgetGreater(x1,x2);
const boundsY = OBgetGreater(y1,y2);
  return !!x > boundsX[lesser] && x < boundsX[greater] && y > boundsY[lesser] && y < boundsY[greater];
}

// Thanks! https://henry.codes/writing/how-to-map-a-number-between-two-ranges/
function map(value, oldMin, oldMax, newMin, newMax) {
  return ((value - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin;
}

function clamp(value,min,max) {
let out = value;
if (value < min) {
  out = min;
} else if (value >  max) {
  out = max;
};
return out;
}

function equalsAny(string,array) {
  try { 
    if (Array.isArray(array)) {
      let matches = 0;
      for (let i = 0; i < array.length | matches < 1; i++) {
        string == array[i];
      };
      return matches > 0;
    } else {
      return false;
    }
  } catch (error) {console.error(error);}
}

function getElementFootprint(e) {
  const nodeName = e.nodeName;
  const attributes = Object.fromEntries(Array.from(e.attributes).map((a) => [a.nodeName, a.value]));
  const att = ""+Object.keys(attributes).join()+""+Object.values(attributes).join()+""
  const rect = e.getBoundingClientRect();
  return btoa([nodeName,att,rect.left,rect.top,rect.right,rect.bottom,rect.width,rect.height].join());
}

function getAllAttributes(e) {
  if (typeof e == "object") {
  // Source - https://stackoverflow.com/a/57640258
  // Posted by Djaouad, modified by community. See post 'Timeline' for change history
  // Retrieved 2026-07-01, License - CC BY-SA 4.0
  return makeString(Object.fromEntries(Array.from(e.attributes).map((a) => [a.nodeName, a.value])));
  } else {
  return '{}';
  }
}

function makeString(json) {
  if (typeof json == 'object') {
  return JSON.stringify(json)
  } else {
  return json;
  }
}

// ⬇ Thank you! ⬇

// Source - https://stackoverflow.com/a/2995536
// Posted by Mathias Bynens, modified by community. See post 'Timeline' for change history
// Retrieved 2026-06-29, License - CC BY-SA 4.0

/*!
 * Dynamically changing favicons with JavaScript
 * Works in all A-grade browsers except Safari and Internet Explorer
 * Demo: http://mathiasbynens.be/demo/dynamic-favicons
 */

// HTML5™, baby! http://mathiasbynens.be/notes/document-head
document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
 var link = document.createElement('link'),
     oldLink = document.getElementById('dynamic-favicon');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 if (oldLink) {
  document.head.removeChild(oldLink);
 }
 document.head.appendChild(link);
}
//
//
//

// Warnings


const confirm = {
  importStyleSheets: false,
  replaceBody: false,
  hasReplacedAllAttributes: false
}

function showRemoveBodyWarning(selector) {
    if (selector.toLowerCase() == 'body' | selector.toLowerCase() == '#app' & !vm.runtime.isPackaged & !confirm.replaceBody) {
      if (window.confirm(`Are you sure you wan't to Delete the element using the selector `+selector.toLowerCase()+`? (Whole page)\n\nThis will break mostly everything and you'll Have to reload.\n -- You will lose unsaved work!\n\nThis warning will not show when packaged`)) {
        confirm.replaceBody = true;
      } else {
        confirm.replaceBody = false;
      }
    return confirm.replaceBody;
    } else {
    return true;
    }
    }


//

class OBhtml {

  constructor() {
    if (!this.styleSheets) {
      this.styleSheets = Object.create(null);
    }

    //Logging when not packaged
    if (!Scratch.vm.runtime.isPackaged) {
    this.log = true;
    console.warn('(OBhtml) Logging errors.\nLogging is disabled by default when packaged.')
    } else {
    this.log = false;
    }

    addEventListener('mousemove', (e) => {
      mouse.page.x = e.pageX;
      mouse.page.y = e.pageY;
    });

    addEventListener('mouseover', (e) => {
      mouse.hover = e.target;
    });

    addEventListener('click', (e) => {
      mouse.click = e.target;
    });

    addEventListener('dblclick', (e) => {
      mouse.dblClick = e.target;
    });

    addEventListener('focus', e => {
      mouse.other.focus = e.target;
    });

    addEventListener('blur', e => {
      mouse.other.blur = e.target;
    });
  }

  getInfo() {
    return {
      id: 'OBHTML',
      name: 'HTML5',
      color1: color1Def,
      color2: color2Def,
      color3: color3Def,
      menuIconURI: icon,
      blocks: [
        {
          blockType: Scratch.BlockType.BUTTON,
          text: 'Info',
          func: 'Info'
        },
        {
          blockType: Scratch.BlockType.BUTTON,
          text: 'Selectors',
          func: 'Selectors'
        },
        // licence
        '---',
        {
          blockType: Scratch.BlockType.BUTTON,
          text: 'Apache Licence',
          func: 'ApacheLicence'
        },
        {
          blockType: Scratch.BlockType.BUTTON,
          text: 'Mozilla Public Licence',
          func: 'MozillaPublicLicence'
        },
        {
          blockType: Scratch.BlockType.BUTTON,
          text: 'CC Attribution 3.0 Unported',
          func: 'CC3AU'
        },
        // End licence
        label('HTML'),
        {
          opcode: 'toggleLog',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Turn Logging [onOff]',
          hideFromPalette: true,
          arguments: {
            onOff: {
              type: Scratch.ArgumentType.STRING,
              menu: 'onOff'
            }
          }
        },
        {
          opcode: 'insertHTML',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Insert html: [html] in [selector] #:[index] at: [position] ',
          arguments: {
            selector: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '[Scratch="canvas"]'
            },
            position: {
              type: Scratch.ArgumentType.STRING,
              menu: 'positions',
            },
            html: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '<span id="span1" style="position: absolute;">Hello World!</span>'
            },
            index: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            }
          }
        },
        {
          opcode: 'removeHTML',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Remove selector:[selector] #:[index] from page',
          arguments: {
            selector: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '#span1'
            },
            index: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            }
          } 
        },
        {
          opcode: 'removeAllHTML',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Remove all matching selector:[selector] from page',
          hideFromPalette: false,
          arguments: {
            selector: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '#span1'
            }
          } 
        },
        makeBlock('countSelector',Scratch.BlockType.REPORTER,'Count [selector]',{
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#span1'
          }
        }),
        '---',
        {
          opcode: 'setInnerHTML',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Set inner html of: [selector] #:[index] to: [html] ',
          arguments: {
            selector: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '#span1'
            },
            html: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello!'
            },
            index: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            }
          }
        },
        makeBlock('setInnerHTMLAll',Scratch.BlockType.COMMAND,'Set inner html of all matching selector: [selector] to: [html]',{
          selector: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '#span1'
            },
            html: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello!'
            },
        }),
        {
            opcode: 'getInnerHTML',
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: true,
            text: 'Get inner html from selector: [selector] #:[index]',
            arguments: {
                selector: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '#span1'
                },
                index: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '1'
                }
            }
        },
        '---',
        makeBlock('setOuterHTML',Scratch.BlockType.COMMAND,'Set outer html of: [selector] #:[index] to: [html] ',{
            selector: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '#span1'
            },
            html: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello!'
            },
            index: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            }
          }),
          makeBlock('setOuterHTMLAll',Scratch.BlockType.COMMAND,'Set outer html of all matching selector: [selector] to: [html]',{
          selector: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '#span1'
            },
            html: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello!'
            },
        }),
        makeBlock('getOuterHTML',Scratch.BlockType.REPORTER,'Get outer html from selector: [selector] #:[index]',{
                selector: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '#span1'
                },
                index: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '1'
                }
            }),
            '---',
        makeBlock('setValue',Scratch.BlockType.COMMAND,`Set value of selector: [selector] #:[index] to: [value]`,{
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#input1'
          },
          value: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: ''
          },
          index: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: '1'
          }
        }),
        makeBlock('setValueAll',Scratch.BlockType.COMMAND,'Set value of all matching selector: [selector] to: [value]',{
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#input1'
          },
          value: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: ''
          },
        }),
        makeBlock('getValue',Scratch.BlockType.REPORTER,`Get value of selector: [selector] #:[index]`,{
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#input1'
          },
          index: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: '1'
          }
        }),
        '---',
        makeBlock('focusBlur',Scratch.BlockType.COMMAND,'[type] selector:[selector] #:[index]',{
          type: {
            type: Scratch.ArgumentType.STRING,
            menu: 'focusBlur'
          },
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#input1'
          },
          index: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: '1'
          }
        },'','#000000'),
        makeBlock('showHide',Scratch.BlockType.COMMAND,'[type] selector:[selector] #:[index]',{
          selector: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '#span1'
            },
            type: {
              type: Scratch.ArgumentType.STRING,
              menu: 'showHide'
            },
            index: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            }
        }),
        makeBlock('showHideAll',Scratch.BlockType.COMMAND,'[type] all matching selector: [selector]',{
          selector: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '#span1'
            },
            type: {
              type: Scratch.ArgumentType.STRING,
              menu: 'showHide'
            },
        }),
        // makeBlock('clickElement',Scratch.BlockType.COMMAND,'Click selector:[selector] #:[index]',{
        //   selector: {
        //       type: Scratch.ArgumentType.STRING,
        //       defaultValue: '#span1'
        //     },
        //     index: {
        //       type: Scratch.ArgumentType.NUMBER,
        //       defaultValue: '1'
        //     }
        // }),
        '---',
        makeBlock('getStatus',Scratch.BlockType.BOOLEAN,'Selecor:[selector] #:[index] [status]?',{
          selector: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '#span1'
            },
            index: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            },
            status: {
              type: Scratch.ArgumentType.STRING,
              menu: 'status'
            }
        }),
        makeBlock('getAnyStatus',Scratch.BlockType.BOOLEAN,'Any of selecor:[selector] [status]?',{
          selector: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '#span1'
            },
            status: {
              type: Scratch.ArgumentType.STRING,
              menu: 'status'
            }
        }),
        makeBlock('matches',Scratch.BlockType.BOOLEAN,'Selector:[selector] #[index] matches selector:[selectorQuery]?',{
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#span1'
          },
          selectorQuery: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: ':hover'
          },
          index: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: '1'
          }
        }),
        makeBlock('matchesAny',Scratch.BlockType.BOOLEAN,'Any matching selector:[selector] matches selector: [selectorQuery]?',{
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#span1'
          },
          selectorQuery: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: ':hover'
          }
        }),
        makeBlock('getElementInfo',Scratch.BlockType.REPORTER,'[info] of selector:[selector] #:[index]',{
          selector: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '#span1'
            },
            index: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            },
            info: {
              type: Scratch.ArgumentType.STRING,
              menu: 'info'
            }
        }),
        '---',
        // mouse
        makeBlock('getMouseDown',Scratch.BlockType.BOOLEAN,'Mouse down?'),
        makeBlock('getMouseData',Scratch.BlockType.REPORTER,'Mouse [value]',{
          value: {
            type: Scratch.ArgumentType.STRING,
            menu: 'xy'
          }
        }),
        makeBlock('getMouseDataElement',Scratch.BlockType.REPORTER,'Mouse [value] in selector: [selector] #:[index]',{
          value: {
            type: Scratch.ArgumentType.STRING,
            menu: 'xy'
          },
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '[Scratch="canvas"]'
          },
          index: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: '1'
          }
        }),
        makeBlock('elementDBLClickedStatus',Scratch.BlockType.REPORTER,'Attribute: [attribute] of last [click] element',{
          attribute: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'id'
          },
          click: {
            type: Scratch.ArgumentType.STRING,
            menu: 'click'
          }
        }),
        makeBlock('elementDBLClickedStatusAll',Scratch.BlockType.REPORTER,'All attributes of last [click] element',{
          click: {
            type: Scratch.ArgumentType.STRING,
            menu: 'click'
          }
        }),
        '---',
        makeBlock('changeClass',Scratch.BlockType.COMMAND,'[change] classes: [class] in selector: [selector] #:[index]',{
          change: {
            type: Scratch.ArgumentType.STRING,
            menu: 'change'
          },
          class: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'Cool,cold'
          },
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#span1'
          },
          index: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: '1'
          }
        }),
        // makeBlock('removeClass',Scratch.BlockType.COMMAND,'Remove classes: [class] from selector: [selector] #:[index]',{
        //   class: {
        //     type: Scratch.ArgumentType.STRING,
        //     defaultValue: 'Cool,cold'
        //   },
        //   selector: {
        //     type: Scratch.ArgumentType.STRING,
        //     defaultValue: '#span1'
        //   },
        //   index: {
        //     type: Scratch.ArgumentType.NUMBER,
        //     defaultValue: '1'
        //   }
        // }),
        makeBlock('changeClassAll',Scratch.BlockType.COMMAND,'[change] classes: [class] in all matching selector: [selector]',{
          change: {
            type: Scratch.ArgumentType.STRING,
            menu: 'change'
          },
          class: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '["Warm","hot"]'
          },
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#span1,[Scratch="canvas"]'
          }
        }),
        // makeBlock('removeClassAll',Scratch.BlockType.COMMAND,'Remove classes: [class] from all matching selector: [selector]',{
        //   class: {
        //     type: Scratch.ArgumentType.STRING,
        //     defaultValue: 'cool,cold'
        //   },
        //   selector: {
        //     type: Scratch.ArgumentType.STRING,
        //     defaultValue: '#span1'
        //   }
        // }),
        makeBlock('getClassList',Scratch.BlockType.REPORTER,'Get classes of selector: [selector] #:[index]',{
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#span1'
          },
          index: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: '1'
          }
        }),
        makeBlock('getClassListAll',Scratch.BlockType.REPORTER,'Get classes of all matching selector: [selector]',{
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#span1,[Scratch="canvas"]'
          }
        }),
        '---',
        {
          opcode: 'setAttribute',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Set attribute:[attribute] of: [selector] #:[index] to: [value]',
          arguments: {
            attribute: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'title'
            },
            selector: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '#span1'
            },
            index: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            },
            value: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'I have a Title now!'
            }
          }
        },
        makeBlock('setAttributeAll',Scratch.BlockType.COMMAND,'Set attribute: [attribute] for all matching selector: [selector] to: [value]',{
                attribute: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'title'
                },
                selector: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '#span1'
                },
                value: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'We all have Titles now!'
                }

        }),
        makeBlock('removeAttribute',Scratch.BlockType.COMMAND,'Remove attribute: [attribute] from selector: [selector] #:[index]',{
          attribute: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'title'
          },
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#span1'
          },
          index: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: '1'
          }
        }),
        makeBlock('removeAttributeAll',Scratch.BlockType.COMMAND,'Remove attribute: [attribute] from all matching selector: [selector]',{
          attribute: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'title'
          },
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#span1'
          }
        }),
        // makeBlock('removeAllAttributes',Scratch.BlockType.COMMAND,'Remove all attributes from selector: [selector] #[index]',{
        //   selector: {
        //     type: Scratch.ArgumentType.STRING,
        //     defaultValue: '#span1'
        //   },
        //   index: {
        //     type: Scratch.ArgumentType.NUMBER,
        //     defaultValue: '1'
        //   }
        // }),
        // makeBlock('removeAllAttributesAll',Scratch.BlockType.COMMAND,'Remove all attributes from all matching selector: [selector]',{
        //   selector: {
        //     type: Scratch.ArgumentType.STRING,
        //     defaultValue: '#span1'
        //   }
        // }),
        '---',
        makeBlock('setAttributeJSON',Scratch.BlockType.COMMAND,'Set attributes from JSON:[json] for: [selector] #:[index]',{
            json: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"title":"I have a Title now!"}'
            },
            selector: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '#span1'
            },
            index: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            }
          }),
        makeBlock('setAttributeAllJSON',Scratch.BlockType.COMMAND,'Set attributes from JSON: [json] for all matching selector: [selector]',{
                json: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '{"title":"We all have Titles now!"}'
                },
                selector: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '#span1,[Scratch="canvas"]'
                }
        
        }),
        makeBlock('removeAttributeARRAY',Scratch.BlockType.COMMAND,'Remove attributes in ARRAY: [json] from selector: [selector] #:[index]',{
          json: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '["title","class"]'
          },
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#span1'
          },
          index: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: '1'
          }
        }),
        makeBlock('removeAttributeAllARRAY',Scratch.BlockType.COMMAND,'Remove attributes in ARRAY: [json] from all matching selector: [selector]',{
          json: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '["class","title"]'
          },
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#span1'
          }
        }),
        '---',
        {
            opcode: 'getAttribute',
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: true,
            text: 'Get attribute: [attribute] from selector: [selector] #:[index]',
            arguments: {
                attribute: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'title'
                },
                selector: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '#span1'
                },
                index: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '1'
                }
            }
        },
        makeBlock('getAttributeAllCertain',Scratch.BlockType.REPORTER,'Get attribute:[attribute] from all matching selector:[selector]',{
          attribute: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'title'
          },
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#span1'
          }
        }),
        makeBlock('getAttributeAll',Scratch.BlockType.REPORTER,'Get all attributes from selector: [selector] #:[index]',{
          selector: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: '#span1'
                },
                index: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '1'
                }
        }),
        makeBlock('getAttributeAllAll',Scratch.BlockType.REPORTER,'Get all attributes from all matching selector: [selector]',{
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#span1,[Scratch="canvas"]'
          }
        }),
        '---',
        makeBlock('setTitle',Scratch.BlockType.COMMAND,'Set page title: [title]',{
          title: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'Scratch!'
          }
        }),
        makeBlock('getTitle',Scratch.BlockType.REPORTER,'Page title'),
        makeBlock('getOGTitle',Scratch.BlockType.REPORTER,'Orginal Title'),
        makeBlock('setIcon',Scratch.BlockType.COMMAND,'Set page icon to url:[url]',{
          url: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'https://scratch.mit.edu/favicon.ico'
          }
        }),
        makeBlock('getIcon',Scratch.BlockType.REPORTER,'Page icon'),

        '---',
        makeButton('Note','SanitizeNote'),
        makeBlock('sanitize',Scratch.BlockType.REPORTER,'Sanitize: [input]',{
          input: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'Some Possibly unsafe HTML'
          }
        }),
        //CSS
        label('CSS'),
        // this is nice
        makeBlock('setStyleSheet',Scratch.BlockType.COMMAND,'Set StyleSheet with id:[id] to css:[css]',{
            css: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '#span1 {color: red;}'
            },
            id: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'css-1'
            }
          },'#264de4','#2965f1','#264de4',cssIcon),
        makeBlock('removeStyleSheet',Scratch.BlockType.COMMAND,'Remove StyleSheet with id:[id]',{
          id: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'css-1'
          }
        },'#264de4','#2965f1','#264de4',cssIcon),
        makeBlock('removeAllStyleSheets',Scratch.BlockType.COMMAND,'Remove All StyleSheets',{},'#264de4','#2965f1','#264de4',cssIcon),
        makeBlock('getSpecificStyleSheet',Scratch.BlockType.REPORTER,'StyleSheet: [id]',{
          id: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'css-1'
          }
        },'#264de4','#2965f1','#264de4',cssIcon),
        makeBlock('getStyleSheets',Scratch.BlockType.REPORTER,'All StyleSheets',{},'#264de4','#2965f1','#264de4',cssIcon),
        makeBlock('importStyleSheets',Scratch.BlockType.COMMAND,'Import StyleSheets from:[input] ',{
          input: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '{}'
          }
        },'#264de4','#2965f1','#264de4',cssIcon),
        makeBlock('exportStyleSheets',Scratch.BlockType.REPORTER,'Export StyleSheets',{},'#264de4','#2965f1','#264de4',cssIcon),
        '---',
        makeBlock('setStyle',Scratch.BlockType.COMMAND,'Set style:[style] of: [selector] #: [index] to:[value]',{
          style: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'background-color'
          },
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#span1'
          },
          index: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: '1'
          },
          value: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'red'
          }
        },'#264de4','#2965f1','#264de4',cssIcon),
        makeBlock('setStyleAll',Scratch.BlockType.COMMAND,'Set style:[style] of all elements matching: [selector] to:[value]',{
          style: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'color'
          },
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#span1'
          },
          value: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'red'
          }
        },'#264de4','#2965f1','#264de4',cssIcon),
        makeBlock('getStyle',Scratch.BlockType.REPORTER,'Style: [style] of: [selector] #: [index]',{
          style: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'color'
          },
          selector: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '#span1'
          },
          index: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: 1,
          }
        },'#264de4','#2965f1','#264de4',cssIcon),
        // makeBlock('checkImportance',Scratch.BlockType.BOOLEAN,'Is style: [style] of [selector] # [index] important?',{
        //   style: {
        //     type: Scratch.ArgumentType.STRING,
        //     defaultValue: 'color'
        //   },
        //   selector: {
        //     type: Scratch.ArgumentType.STRING,
        //     defaultValue: '#span1'
        //   },
        //   index: {
        //     type: Scratch.ArgumentType.NUMBER,
        //     defaultValue: 1,
        //   }
        // },'#264de4','#2965f1','#264de4',cssIcon),
        label('Ver: '+ver+'')
      ],
      menus: {
        positions: {
            acceptReporters: true,
            items: [
                {text: 'Before', value: 'beforebegin'},
                {text: 'At start', value: 'afterbegin'},
                {text: 'At end', value: 'beforeend'},
                {text: 'After', value: 'afterend'}
            ]
        },
        onOff: {
          acceptReporters: true,
          items: [
            {text: 'On', value: 'true'},
            {text: 'Off', value: 'false'}
          ]
        },
        getSet: {
          acceptReporters: true,
          items: [
            {text: 'get', value: 'get'},
            {text: 'set', value: 'set'}
          ]
        },
        status: {
          acceptReporters: true,
          items: [
            MI('Hovered','hovered'),
            MI('Clicked','clicked'),
            // MI('Mouse Down','mouseDown'),
            MI('Focused','focused'),
            MI('Visible','visible'),
            MI('Exists','exists'),
            MI('Checked','checked')
          ]
        },
        focusBlur: {
          acceptReporters: true,
          items: [
            MI('Focus','focus'),
            MI('Blur','blur')
          ]
        },
        showHide: {
          acceptReporters: true,
          items: [
            MI('Hide','hide'),
            MI('Show','show')
          ]
        },
        info: {
          acceptReporters: true,
          items: [
            MI('Width','width'),
            MI('Height','height'),
            MI('Top','top'),
            MI('Left','left'),
            MI('Bottom','bottom'),
            MI('Right','right')
          ]
        },
        xy: {
          acceptReporters: true,
          items: [
            MI('x','0'),
            MI('y','1')
          ]
        },
        view: {
          acceptReporters: true,
          items: [
            MI('page','0'),
            MI('screen','1')
          ]
        },
        click: {
          acceptReporters: true,
          items: [
            MI('clicked','0'),
            MI('double clicked','1'),
            MI('hovered','2')
          ]
        },
        change: {
          acceptReporters: true,
          items: [
            MI('Add','0'),
            MI('Remove','1'),
            // MI('replace','2')
          ]
        }
      }
    };
  }
// functions

  toggleLog(args) {
  this.log = args.onOff;
  }

  // HTML
  
  insertHTML(args) {
    try {
      document.querySelectorAll(args.selector)[args.index - 1].insertAdjacentHTML(args.position,purify(args.html));
    } catch (error) {if(this.log) console.error(error);}
  }

  setInnerHTML(args) {
      try {
    if (showRemoveBodyWarning(args.selector))
      document.querySelectorAll(args.selector)[args.index - 1].innerHTML = (purify(args.html));
    } catch (error) {if(this.log) console.error(error);}
  }

  setInnerHTMLAll(args) {
    try {
    if (showRemoveBodyWarning(args.selector))
    document.querySelectorAll(args.selector).forEach(e => {try {e.innerHTML = purify(args.html);} catch (error) {if(this.log) console.error(error);}});
    } catch (error) {if(this.log) console.error(error);}
  }

  getInnerHTML(args) {
    try { return purify(document.querySelectorAll(args.selector)[args.index - 1].innerHTML);}
    catch {
    return '';
    }
  }

  setOuterHTML(args) {
      try {
    if (showRemoveBodyWarning(args.selector))
      document.querySelectorAll(args.selector)[args.index - 1].outerHTML = (purify(args.html));
    } catch (error) {if(this.log) console.error(error);}
  }

  setOuterHTMLAll(args) {
    try {
    if (showRemoveBodyWarning(args.selector))
    document.querySelectorAll(args.selector).forEach(e => {try {e.outerHTML = purify(args.html);} catch (error) {if(this.log) console.error(error);}});
    } catch (error) {if(this.log) console.error(error);}
  }

  getOuterHTML(args) {
    try { return purify(document.querySelectorAll(args.selector)[args.index - 1].outerHTML);}
    catch {
    return '';
    }
  }

  removeHTML (args) {
    try {
    if (showRemoveBodyWarning(args.selector))
      document.querySelectorAll(args.selector)[args.index - 1].remove();
    } catch (error) {
      console.error(error);
    }
  }

  removeAllHTML (args) {
    try {
    if (showRemoveBodyWarning(args.selector))
    document.querySelectorAll(args.selector).forEach((element) => (element).remove());
    } catch (error) {
      console.error(error);
    }
  }

  setAttribute(args) {
    try {
      document.querySelectorAll(args.selector)[args.index - 1].setAttribute(args.attribute,args.value);
    } catch (error) {
      console.error(error);
    }
  }

  setAttributeAll(args) {
    try {
      document.querySelectorAll(args.selector).forEach((element) => (element).setAttribute(args.attribute,args.value));
    } catch (error) {if(this.log) console.error(error);}
  }

  setAttributeJSON(args) {
    try {
      const attr = typeof args.json == 'string' ? JSON.parse(args.json) : args.json;
      Object.keys(attr).forEach(a => {
        try {
          document.querySelectorAll(args.selector)[args.index - 1].setAttribute(a,attr[a]);
        } catch (error) {if(this.log) console.error(error);}
      });
    } catch (error) {if(this.log) console.error(error);}
  }

  setAttributeAllJSON(args) {
    try {
      const attr = typeof args.json == 'string' ? JSON.parse(args.json) : args.json;
      Object.keys(attr).forEach(a => {
        try {
          document.querySelectorAll(args.selector).forEach(e => {e.setAttribute(a,attr[a])});
        } catch (error) {if(this.log) console.error(error);}
      });
    } catch (error) {if(this.log) console.error(error);}
  }

  // set

  removeAttribute(args) {
    try {
      document.querySelectorAll(args.selector)[args.index - 1].removeAttribute(args.attribute)
    } catch (error) {if(this.log) console.error(error);}
  }

  removeAttributeAll(args) {
    try {
      document.querySelectorAll(args.selector).forEach(e => {
        e.removeAttribute(args.attribute);
      });
    } catch (error) {if(this.log) console.error(error);}
  }

  // removeAllAttributes(args) {
  //   try {
  //   const element = document.querySelectorAll(args.selector)[args.index - 1];
  //   const attr = getAllAttributes(element);
  //   Object.keys(attr).forEach(a => {
  //     element.removeAttribute(a);
  //   });
  //   } catch (error) {if(this.log) console.error(error);}
  // }

  // removeAllAttributesAll(args) {
  //   try {
  //   document.querySelectorAll(args.selector).forEach(element => {
  //     const attr = getAllAttributes(element);
  //     Object.keys(attr).forEach(a => {
  //       element.removeAttribute(a);
  //     });
  //   });
  //   } catch (error) {if(this.log) console.error(error);}
  // }
  
  removeAttributeARRAY(args) {
    try {
      const attr = typeof args.json == 'string' ? JSON.parse(args.json) : args.json;
      attr.forEach(a => {
        try {
          document.querySelectorAll(args.selector)[args.index - 1].removeAttribute(a);
        } catch (error) {if(this.log) console.error(error);}
      });
    } catch (error) {if(this.log) console.error(error);}
  }

  removeAttributeAllARRAY(args) {
    try {
      const attr = typeof args.json == 'string' ? JSON.parse(args.json) : args.json;
      attr.forEach(a => {
        try {
          document.querySelectorAll(args.selector).forEach(e => {e.removeAttribute(a)});
        } catch (error) {if(this.log) console.error(error);}
      });
    } catch (error) {if(this.log) console.error(error);}
  }

  getAttribute(args) {
    try { return purify(document.querySelectorAll(args.selector)[args.index - 1].getAttribute(args.attribute));}
    catch (error) {
    return ''; if(this.log) console.error(error);
    }
  }

  getAttributeAll(args) {
    try {
      return getAllAttributes(document.querySelectorAll(args.selector)[args.index - 1]);
    } catch (error) {return '{}'; if(this.log) console.error(error);}
  }

  getAttributeAllAll(args) {
    try {
    let out = [];
    const elements = document.querySelectorAll(args.selector);
    elements.forEach(e => {
    out.push(getAllAttributes(e));
    });
    return makeString(out);
    } catch (error) {return '[]'; if(this.log) console.error(error);}
  }

  getAttributeAllCertain(args) {
    try {
      let out = [];
      const elements = document.querySelectorAll(args.selector);
      elements.forEach(e => {
      const attributes = JSON.parse(getAllAttributes(e));
        if (attributes.hasOwnProperty(args.attribute)) {
          out.push(attributes[args.attribute]);
        }
      });
      return makeString(out);
    } catch (error) {return '[]'; if (this.log) console.error(error);}
  }

  // classes

  changeClass(args) {
    try {
    // check class if is native array or can be made into array, else split via comma.
    const classes = !Array.isArray(JSON.parse(args.class)) ? typeof args.class == 'string' ? args.class.split(',') : args.class : Array.isArray(args.class) ? args.class : JSON.parse(args.class);
    const element = document.querySelectorAll(args.selector)[args.index - 1];
    console.log(classes)
    classes.forEach(cl => {
      if (args.change == '0') {
      element.classList.add(cl);
      } else if (args.change == '1') {
      element.classList.remove(cl);
      }
      console.log(cl)
      // else if (args.change == '2') {
      // element.classList.replace()
      // }
    });
    } catch (error) {if(this.log) console.error(error);}
  }
  
  // 👆 same as above ☝
  changeClassAll(args) {
    try {
    const classes = !Array.isArray(JSON.parse(args.class)) ? typeof args.class == 'string' ? args.class.split(',') : args.class : Array.isArray(args.class) ? args.class : JSON.parse(args.class);
    document.querySelectorAll(args.selector).forEach(element => {
    classes.forEach(cl => {
      if (args.change == '0') {
      element.classList.add(cl);
      } else if (args.change == '1') {
      element.classList.remove(cl);
      }
      // else if (args.change == '2') {
      // element.classList.replace()
      // }
    });});
    } catch (error) {if(this.log) console.error(error);}
  }

  getClassList(args) {
    try {
      const element = document.querySelectorAll(args.selector)[args.index - 1]
      let out = []
      element.classList.forEach(cl => {
        out.push(cl);
      });
      return out;
    } catch (error) {return [];if(this.log) console.error(error);} 
  }

  getClassListAll(args) {
    try {
      let fullout = [];
      document.querySelectorAll(args.selector).forEach(element => {
      let out = []
      element.classList.forEach(cl => {
        out.push(cl);
        });
      fullout.push(out);
      });
      return fullout;
    } catch (error) {return []; if(this.log) console.error(error);}
  }
  
  countSelector(args) {
    try {
    return document.querySelectorAll(args.selector).length;
    } catch (error) {return 0;if(this.log) console.error(error);} 
  }

  getValue(args) {
    try {
      return purify(document.querySelectorAll(args.selector)[args.index - 1].value);
    } catch (error) {
      return ''; if(this.log) console.error(error);
    }
  }

  setValue(args) {
    try {
      if (document.querySelectorAll(args.selector)[args.index - 1]) {
      document.querySelectorAll(args.selector)[args.index - 1].value = args.value;
      } else {if(this.log) console.error('Selector: "' + args.selector + '" #:' + args.index + ' does not exist.')}
    } catch {
      if(this.log) console.error(error);
    }
  }

  setValueAll(args) {
    try {
      if (document.querySelectorAll(args.selector)) {
      document.querySelectorAll(args.selector).forEach(e => {try {e.value = args.value;} catch (error) {if(this.log) console.error(error);}});
      } else {console.error('No elements matching selector: "' + args.selector + '" exist.')}
    } catch (error) {if(this.log) console.error(error);}
  }

  getStatus(args) {
    try {
      const e = document.querySelectorAll(args.selector)[args.index - 1];
      if (args.status == 'hovered') {
      return !!e.matches(':hover');
      } else
      if (args.status == 'clicked' | args.status == 'mouseDown') {
      return !!e.matches(':hover:active');
      } else
      if (args.status == 'focused') {
      return !!e.matches(':focus');
      } else
      if (args.status == 'visible') {
      return !!e.checkVisibility();
      } else
      if (args.status == 'exists') {
      return !!document.querySelectorAll(args.selector)[args.index - 1];
      }
      if (args.status == 'checked') {
      return e.checked;
      }
    } catch (error) {return false; if(this.log) console.error(error);}
  }

  getAnyStatus(args) {
    try {
      const e = document.querySelectorAll(args.selector);
      const length = e.length;
      if (length > 0) {
      let check = 0;
      e.forEach((element) => {
      if (args.status == 'hovered') {
      if(!!(element).matches(':hover')) {check++};
      } else
      if (args.status == 'clicked' | args.status == 'mouseDown') {
      if(!!(element).matches(':hover:active')) {check++};
      } else
      if (args.status == 'focused') {
      if(!!(element).matches(':focus')) {check++};
      } else
      if (args.status == 'visible') {
      if(!!(element).checkVisibility()) {check++};
      } else
      if (args.status == 'exists') {
      if(!!(element)) {check++};
      }
      if (args.status == 'checked') {
      if ((element).checked) {check++};
      }
      });
      return !!check > 0;
      } else {
      return false;
      }
    } catch (error) {return false; if(this.log) console.error(error);}
  }

  elementDBLClickedStatus(args) {
    try {
      let out = null;
      if (args.click == '0') {
      out = mouse.click;
      } else if (args.click == '1') {
      out = mouse.dblClick;
      } else if (args.click == '2'); {
      out = mouse.hover;
      }
      out = out.getAttribute(args.attribute);
      return out == null ? '' : out;
    } catch (error) {return ''; if(this.log) console.error(error);};
  }
  
  elementDBLClickedStatusAll(args) {
    try {
      if (args.click == '0') {
      return getAllAttributes(mouse.click);
      } else if (args.click == '1') {
      return getAllAttributes(mouse.dblClick);
      } else if (args.click == '2') {
      return getAllAttributes(mouse.hover); 
      }
    } catch (error) {return {}; if (this.log) console.error(error);}
  }

  matches(args) {
    try {
      return !!document.querySelectorAll(args.selector)[args.index - 1].matches(args.selectorQuery);
    } catch (error) {return 'false'; if(this.log) console.error(error);}
  }

  // TODO
  // This should use for instead, I just don't feel like it rn...
  matchesAny(args) {
    try {
      let matches = 0;
      document.querySelectorAll(args.selector).forEach(e => {if (e.matches(args.selectorQuery)) matches ++});
      return !!matches > 0;
    } catch (error) {return 'false'; if(this.log) console.error(error);}
  }

  focusBlur(args) {
    try {
      const e = document.querySelectorAll(args.selector)[args.index - 1];
      if (args.type == 'focus') {
      e.focus();
      } else {
      e.blur();
      }
    } catch (error) {if(this.log) console.error(error);}
  }

  showHide(args) {
    try {
      const e = document.querySelectorAll(args.selector)[args.index - 1]; 
      e.hidden = args.type == 'hide';
    } catch (error) {if(this.log) console.error(error);}
  }

  showHideAll(args) {
    try {
      const bool = args.type == 'hide';
      const e = document.querySelectorAll(args.selector);
      e.forEach(e => {e.hidden = bool;});
    } catch (error) {if(this.log) console.error(error);}
  }

  clickElement(args) {
    try {
      document.querySelectorAll(args.selector)[args.index - 1].click();
    } catch (error) {if(this.log) console.error(error)}
  }

  getElementInfo(args) {
    try {
      if (document.querySelectorAll(args.selector)[args.index - 1]) {
      const e = document.querySelectorAll(args.selector)[args.index - 1];
      const eb = e.getBoundingClientRect();
      if (args.info == 'width') {return eb.width;} else
      if (args.info == 'height') {return eb.height;} else
      if (args.info == 'top') {return eb.top;} else
      if (args.info == 'left') {return eb.left;} else
      if (args.info == 'bottom') {return eb.bottom;} else
      if (args.info == 'right') {return eb.right;}
      } else {return '0';}
    } catch (error) {return ''; if(this.log) console.error(error)}
  }

  getMouseDown() {
    try {
      return !!document.querySelector('html').matches(':hover:active');
    } catch (error) {return false; if(this.log) console.error(error);}
  }

  getMouseData(args) {
    try {
      if (args.value == 0) {
        return mouse.page.x;
      } else {
        return mouse.page.y;
      }
    } catch (error) {return '0'; if(this.log) console.error(error);}
  }

  getMouseDataElement(args) {
    try {
      const element = document.querySelectorAll(args.selector)[args.index - 1].getBoundingClientRect();
      if (args.value == '0') {
      return clamp(map(mouse.page.x,element.left,element.left + element.width,0,element.width),0,element.width);
      } else {
      return clamp(map(mouse.page.y,element.top,element.top + element.height,0,element.height),0,element.height);
      }
    } catch (error) {return '0'; if (this.log) console.error(error);}
  }

  sanitize(args) {
    return purify(args.input);
  }

  setTitle(args) {
    try {
      document.title = args.title;
    } catch (error) {if(this.log) console.error(error);}
  }

  getTitle() {
    return document.title;
  }

  getOGTitle() {
    return ogTitle;
  }

  setIcon(args) {
    try {
      changeFavicon(args.url);
    } catch (error) {if(this.log) console.error(error);}
  }

  getIcon() {
    try {
      const icon = document.head.querySelector('#dynamic-favicon').href;
      return !!icon ? icon : '';
    } catch (error) {return ''; if(this.log) console.error(error)}
  }

  // CSS

  setStyleSheet(args) {
    const id = `OB-StyleSheets-`+args.id+``;
    try {
    document.querySelectorAll(`#`+id+``).forEach((element) => (element).remove());
    } catch (error) {if(this.log) console.error(error);}
    try {
    document.head.insertAdjacentHTML('beforeend',`<style id="`+id+`">`+args.css+`</style>`);
    this.styleSheets[args.id] = args.css;
    } catch (error) {if(this.log) console.error(error);}
  }

  removeStyleSheet(args) {
    const id = `#OB-StyleSheets-`+args.id+``;
    try {
      document.querySelectorAll(id).forEach((element) => (element).remove())
      delete this.styleSheets[args.id];
    } catch (error) {}
  }

  removeAllStyleSheets(args) {
    const ids = Object.keys(this.styleSheets);
    try {
    ids.forEach(id => {
      try {
      document.querySelectorAll(`#OB-StyleSheets-`+id+``).forEach(obj => obj.remove());
      delete this.styleSheets[id];
    } catch {}
    });
    this.styleSheets = Object.create(null);
    } catch (error) {if(this.log) console.error(error);}
  }

  getStyleSheets(args) {
    try {
       return makeString(Object.keys(this.styleSheets)) ?? '[]';
      } catch (error) {return '';if(this.log) console.error(error);}
  }

  importStyleSheets(args) {
    try {
      if (args.input == '' | args.input == null | args.input == '{}' & !vm.runtime.isPackaged & !confirm.importStyleSheets ? confirm.importStyleSheets = window.confirm('Importing StyleSheets from an empty string\nwill erase all currently stored styles.\n\nThis warning will not show while packaged.\n\nDo you wish to procced?') : true)
      this.styleSheets = JSON.parse(args.input);
    } catch (error) {if (this.log) console.error(error);}
  }

  exportStyleSheets() {
    try {
      return makeString(this.styleSheets);
    } catch (error) {return '{}'; if (this.log) console.error(error);}
  }

  getSpecificStyleSheet(args) {
    try {
      return purify(this.styleSheets[args.id]) ?? '';
    } catch (error) {return ''; if(this.log) console.error(error);}
  }

  setStyle(args) {
    try {
      document.querySelectorAll(args.selector)[args.index - 1].style[args.style] = args.value;
    } catch (error) {if(this.log) console.error(error)}
  }

  setStyleAll(args) {
    try {
      document.querySelectorAll(args.selector).forEach((element) => {
      (element).style[args.style] = args.value;
    });
    } catch (error) {if(this.log) console.error(error);}
  }

  getStyle(args) {
    try {
    return document.querySelectorAll(args.selector)[args.index - 1].style[args.style];
    } catch {
      return '';
    }
  }

  checkImportance(args) {
    try {
    return !!document.querySelectorAll(args.selector)[args.index - 1].style[args.style].trim().endsWith('!important');
    } catch (error) {
      return 'false';
      if(this.log) 
        console.error(error);
    }
  }



  // Buttons

  Info() {
  alert(` - OBhtml: MIT Licence\n\n - DOMPurify: Apache license 2.0 and Mozilla Public License 2.0\n\n - HTML5 and CSS3 Logos: CC Attribution 3.0 Unported\n - HTML5 and CSS3 icons attributed to the W3C. <https://www.w3.org/>\n\n - Due to security concerns: this extension uses DOMPurify to sanitize injected html.`)
  }

  Selectors() {
  alert(`This extension uses selectors to get elements from the page.\n\nIt also adds [Scratch="canvas"] to the app canvas so you can confidentally select it.\n\nIf you are unsure what selectors are, you should probably look it up first.\n\nIf you're offline or lazy you can reference this:\n\n".className" references an element's class\n"#Id" it's id\nand you can also reference it's tag directly: \n"div" = "<div></div>"\n\n You can reference attributes like: [attribute] or [attribute="value"].\n\nPlease use responsibly. (:`)
  }

  SanitizeNote() {
  alert(`Note - All blocks that insert html are already sanitized.\nThe sanitize block is meant to clean html for other extensions that may use it.\n\nSuch as the marked.js extension: "markedInTurbowarp.js"\nUsing marked.js it takes markdown and outpus html.\n\nhttps://github.com/otterboing/Otterboings-Turbowarp-Extensions/blob/main/Extensions/markedInTurbowarp.js`)
  }

  ApacheLicence() {
  Scratch.openWindow('https://raw.githubusercontent.com/cure53/DOMPurify/refs/heads/main/LICENSE');
  }
  MozillaPublicLicence() {
  Scratch.openWindow('https://raw.githubusercontent.com/cure53/DOMPurify/refs/heads/main/LICENSE-MPL');
  }
  // CC Attribution 3.0 Unported
  CC3AU() {
  try {
    if (window.confirm(`CC Attribution 3.0 Unported\n\nPress ok to go to: CC Attribution 3.0 Unported\nhttps://creativecommons.org/licenses/by/3.0\n\nPress Cancel to go to: Plain Text\nhttps://creativecommons.org/licenses/by/3.0/legalcode.txt`)) {
    Scratch.openWindow('https://creativecommons.org/licenses/by/3.0');
    } else {
    Scratch.openWindow('https://creativecommons.org/licenses/by/3.0/legalcode.txt')
    }
    } catch {}
  } 
  
}
Scratch.extensions.register(new OBhtml());

})(Scratch);