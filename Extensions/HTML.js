// Name: HTML.js
// OBhtml Licence: MIT
// Original by https://github.com/otterboing
// https://github.com/otterboing/Turbowarp-Extensions/blob/main/Extensions/HTML.js

// DOMPurify: <https://github.com/cure53/DOMPurify>
// DOMPurify Licence: Apache license 2.0 and Mozilla Public License 2.0 | https://github.com/cure53/DOMPurify/blob/3.4.8/LICENSE

// Added:

//  A new way to add functions to elements then call them when they're clicked!
//   New blocks to use external StyleSheets!
//    A block to check if the text editor is open.
//     New html and css icons without licenses attached.
//      A block to purify strings of any html at all.
//       Ability to just add extra settings at the end of the makeBlock function.
//        A block to get browser info.
//         Blocks to check when a certain selector meets a status.

// Fixed:

//  All blocks now use the makeBlock function.
//   Fixed status block only using hovered option.
//    StyleSheet ids not being consistant.
//     Some buttons.
//      Reliance on getColor function. It's now gone.
//       Many small things.
//        Moved change log to top. 👋

// Planned:

//  Maybe add a way to turn on and off using script attributes. (Idk bout this one though.)


(async function (Scratch) {

if (!Scratch.extensions.unsandboxed) throw new Error("OBhtml Must Be Run Un-Sandboxed! - Requires JS modify the page.");

// You can replace the sanitizer by replacing DOMPuify 👇 and modifying the Purify() function.

// DOMPurify for security reasons, sucks it' like 30kb.
// Start of https://github.com/cure53/DOMPurify/blob/main/dist/purify.min.js

/*! @license DOMPurify 3.4.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.8/LICENSE */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).DOMPurify=t()}(this,function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function t(t,n){return function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,l=[],c=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t);else for(;!(c=(o=i.call(n)).done)&&(l.push(o.value),l.length!==t);c=!0);}catch(e){s=!0,r=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return l}}(t,n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const n=Object.entries,o=Object.setPrototypeOf,r=Object.isFrozen,i=Object.getPrototypeOf,a=Object.getOwnPropertyDescriptor;let l=Object.freeze,c=Object.seal,s=Object.create,u="undefined"!=typeof Reflect&&Reflect,f=u.apply,m=u.construct;l||(l=function(e){return e}),c||(c=function(e){return e}),f||(f=function(e,t){for(var n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];return e.apply(t,o)}),m||(m=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return new e(...n)});const p=L(Array.prototype.forEach),d=L(Array.prototype.lastIndexOf),h=L(Array.prototype.pop),g=L(Array.prototype.push),y=L(Array.prototype.splice),T=Array.isArray,b=L(String.prototype.toLowerCase),A=L(String.prototype.toString),S=L(String.prototype.match),E=L(String.prototype.replace),_=L(String.prototype.indexOf),N=L(String.prototype.trim),O=L(Number.prototype.toString),D=L(Boolean.prototype.toString),R="undefined"==typeof BigInt?null:L(BigInt.prototype.toString),w="undefined"==typeof Symbol?null:L(Symbol.prototype.toString),I=L(Object.prototype.hasOwnProperty),v=L(Object.prototype.toString),C=L(RegExp.prototype.test),x=(k=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return m(k,t)});var k;function L(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return f(e,t,o)}}function M(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b;if(o&&o(e,null),!T(t))return e;let i=t.length;for(;i--;){let o=t[i];if("string"==typeof o){const e=n(o);e!==o&&(r(t)||(t[i]=e),o=e)}e[o]=!0}return e}function P(e){for(let t=0;t<e.length;t++){I(e,t)||(e[t]=null)}return e}function z(e){const o=s(null);for(const i of n(e)){var r=t(i,2);const n=r[0],a=r[1];I(e,n)&&(T(a)?o[n]=P(a):a&&"object"==typeof a&&a.constructor===Object?o[n]=z(a):o[n]=a)}return o}function U(e,t){for(;null!==e;){const n=a(e,t);if(n){if(n.get)return L(n.get);if("function"==typeof n.value)return L(n.value)}e=i(e)}return function(){return null}}const F=l(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),H=l(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),B=l(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),j=l(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),G=l(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),W=l(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Y=l(["#text"]),q=l(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),X=l(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),$=l(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),K=l(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),V=c(/{{[\w\W]*|^[\w\W]*}}/g),Z=c(/<%[\w\W]*|^[\w\W]*%>/g),J=c(/\${[\w\W]*/g),Q=c(/^data-[\-\w.\u00B7-\uFFFF]+$/),ee=c(/^aria-[\-\w]+$/),te=c(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ne=c(/^(?:\w+script|data):/i),oe=c(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),re=c(/^html$/i),ie=c(/^[a-z][.\w]*(-[.\w]+)+$/i),ae=1,le=3,ce=7,se=8,ue=9,fe=11,me=function(){return"undefined"==typeof window?null:window};var pe=function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me();const o=t=>e(t);if(o.version="3.4.8",o.removed=[],!t||!t.document||t.document.nodeType!==ue||!t.Element)return o.isSupported=!1,o;let r=t.document;const i=r,a=i.currentScript;t.DocumentFragment;const c=t.HTMLTemplateElement,u=t.Node,f=t.Element,m=t.NodeFilter,k=t.NamedNodeMap;void 0===k&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;const L=t.DOMParser,P=t.trustedTypes,pe=f.prototype,de=U(pe,"cloneNode"),he=U(pe,"remove"),ge=U(pe,"nextSibling"),ye=U(pe,"childNodes"),Te=U(pe,"parentNode"),be=U(pe,"shadowRoot"),Ae=U(pe,"attributes"),Se=u&&u.prototype?U(u.prototype,"nodeType"):null,Ee=u&&u.prototype?U(u.prototype,"nodeName"):null;if("function"==typeof c){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let _e,Ne="",Oe=0;const De=function(e){if(Oe>0)throw x('The configured TRUSTED_TYPES_POLICY.createHTML must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose createHTML wraps DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');Oe++;try{return _e.createHTML(e)}finally{Oe--}},Re=r,we=Re.implementation,Ie=Re.createNodeIterator,ve=Re.createDocumentFragment,Ce=Re.getElementsByTagName,xe=i.importNode;let ke={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};o.isSupported="function"==typeof n&&"function"==typeof Te&&we&&void 0!==we.createHTMLDocument;const Le=V,Me=Z,Pe=J,ze=Q,Ue=ee,Fe=ne,He=oe,Be=ie;let je=te,Ge=null;const We=M({},[...F,...H,...B,...G,...Y]);let Ye=null;const qe=M({},[...q,...X,...$,...K]);let Xe=Object.seal(s(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),$e=null,Ke=null;const Ve=Object.seal(s(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Ze=!0,Je=!0,Qe=!1,et=!0,tt=!1,nt=!0,ot=!1,rt=!1,it=!1,at=!1,lt=!1,ct=!1,st=!0,ut=!1;const ft="user-content-";let mt=!0,pt=!1,dt={},ht=null;const gt=M({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let yt=null;const Tt=M({},["audio","video","img","source","image","track"]);let bt=null;const At=M({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),St="http://www.w3.org/1998/Math/MathML",Et="http://www.w3.org/2000/svg",_t="http://www.w3.org/1999/xhtml";let Nt=_t,Ot=!1,Dt=null;const Rt=M({},[St,Et,_t],A);let wt=M({},["mi","mo","mn","ms","mtext"]),It=M({},["annotation-xml"]);const vt=M({},["title","style","font","a","script"]);let Ct=null;const xt=["application/xhtml+xml","text/html"];let kt=null,Lt=null;const Mt=r.createElement("form"),Pt=function(e){return e instanceof RegExp||e instanceof Function},zt=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(Lt&&Lt===e)return;e&&"object"==typeof e||(e={}),e=z(e),Ct=-1===xt.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,kt="application/xhtml+xml"===Ct?A:b,Ge=I(e,"ALLOWED_TAGS")&&T(e.ALLOWED_TAGS)?M({},e.ALLOWED_TAGS,kt):We,Ye=I(e,"ALLOWED_ATTR")&&T(e.ALLOWED_ATTR)?M({},e.ALLOWED_ATTR,kt):qe,Dt=I(e,"ALLOWED_NAMESPACES")&&T(e.ALLOWED_NAMESPACES)?M({},e.ALLOWED_NAMESPACES,A):Rt,bt=I(e,"ADD_URI_SAFE_ATTR")&&T(e.ADD_URI_SAFE_ATTR)?M(z(At),e.ADD_URI_SAFE_ATTR,kt):At,yt=I(e,"ADD_DATA_URI_TAGS")&&T(e.ADD_DATA_URI_TAGS)?M(z(Tt),e.ADD_DATA_URI_TAGS,kt):Tt,ht=I(e,"FORBID_CONTENTS")&&T(e.FORBID_CONTENTS)?M({},e.FORBID_CONTENTS,kt):gt,$e=I(e,"FORBID_TAGS")&&T(e.FORBID_TAGS)?M({},e.FORBID_TAGS,kt):z({}),Ke=I(e,"FORBID_ATTR")&&T(e.FORBID_ATTR)?M({},e.FORBID_ATTR,kt):z({}),dt=!!I(e,"USE_PROFILES")&&(e.USE_PROFILES&&"object"==typeof e.USE_PROFILES?z(e.USE_PROFILES):e.USE_PROFILES),Ze=!1!==e.ALLOW_ARIA_ATTR,Je=!1!==e.ALLOW_DATA_ATTR,Qe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,et=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,tt=e.SAFE_FOR_TEMPLATES||!1,nt=!1!==e.SAFE_FOR_XML,ot=e.WHOLE_DOCUMENT||!1,at=e.RETURN_DOM||!1,lt=e.RETURN_DOM_FRAGMENT||!1,ct=e.RETURN_TRUSTED_TYPE||!1,it=e.FORCE_BODY||!1,st=!1!==e.SANITIZE_DOM,ut=e.SANITIZE_NAMED_PROPS||!1,mt=!1!==e.KEEP_CONTENT,pt=e.IN_PLACE||!1,je=function(e){try{return C(e,""),!0}catch(e){return!1}}(e.ALLOWED_URI_REGEXP)?e.ALLOWED_URI_REGEXP:te,Nt="string"==typeof e.NAMESPACE?e.NAMESPACE:_t,wt=I(e,"MATHML_TEXT_INTEGRATION_POINTS")&&e.MATHML_TEXT_INTEGRATION_POINTS&&"object"==typeof e.MATHML_TEXT_INTEGRATION_POINTS?z(e.MATHML_TEXT_INTEGRATION_POINTS):M({},["mi","mo","mn","ms","mtext"]),It=I(e,"HTML_INTEGRATION_POINTS")&&e.HTML_INTEGRATION_POINTS&&"object"==typeof e.HTML_INTEGRATION_POINTS?z(e.HTML_INTEGRATION_POINTS):M({},["annotation-xml"]);const t=I(e,"CUSTOM_ELEMENT_HANDLING")&&e.CUSTOM_ELEMENT_HANDLING&&"object"==typeof e.CUSTOM_ELEMENT_HANDLING?z(e.CUSTOM_ELEMENT_HANDLING):s(null);if(Xe=s(null),I(t,"tagNameCheck")&&Pt(t.tagNameCheck)&&(Xe.tagNameCheck=t.tagNameCheck),I(t,"attributeNameCheck")&&Pt(t.attributeNameCheck)&&(Xe.attributeNameCheck=t.attributeNameCheck),I(t,"allowCustomizedBuiltInElements")&&"boolean"==typeof t.allowCustomizedBuiltInElements&&(Xe.allowCustomizedBuiltInElements=t.allowCustomizedBuiltInElements),tt&&(Je=!1),lt&&(at=!0),dt&&(Ge=M({},Y),Ye=s(null),!0===dt.html&&(M(Ge,F),M(Ye,q)),!0===dt.svg&&(M(Ge,H),M(Ye,X),M(Ye,K)),!0===dt.svgFilters&&(M(Ge,B),M(Ye,X),M(Ye,K)),!0===dt.mathMl&&(M(Ge,G),M(Ye,$),M(Ye,K))),Ve.tagCheck=null,Ve.attributeCheck=null,I(e,"ADD_TAGS")&&("function"==typeof e.ADD_TAGS?Ve.tagCheck=e.ADD_TAGS:T(e.ADD_TAGS)&&(Ge===We&&(Ge=z(Ge)),M(Ge,e.ADD_TAGS,kt))),I(e,"ADD_ATTR")&&("function"==typeof e.ADD_ATTR?Ve.attributeCheck=e.ADD_ATTR:T(e.ADD_ATTR)&&(Ye===qe&&(Ye=z(Ye)),M(Ye,e.ADD_ATTR,kt))),I(e,"ADD_URI_SAFE_ATTR")&&T(e.ADD_URI_SAFE_ATTR)&&M(bt,e.ADD_URI_SAFE_ATTR,kt),I(e,"FORBID_CONTENTS")&&T(e.FORBID_CONTENTS)&&(ht===gt&&(ht=z(ht)),M(ht,e.FORBID_CONTENTS,kt)),I(e,"ADD_FORBID_CONTENTS")&&T(e.ADD_FORBID_CONTENTS)&&(ht===gt&&(ht=z(ht)),M(ht,e.ADD_FORBID_CONTENTS,kt)),mt&&(Ge["#text"]=!0),ot&&M(Ge,["html","head","body"]),Ge.table&&(M(Ge,["tbody"]),delete $e.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw x('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw x('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const t=_e;_e=e.TRUSTED_TYPES_POLICY;try{Ne=De("")}catch(e){throw _e=t,e}}else void 0===_e&&null!==e.TRUSTED_TYPES_POLICY&&(_e=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const o="data-tt-policy-suffix";t&&t.hasAttribute(o)&&(n=t.getAttribute(o));const r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}}(P,a)),_e&&"string"==typeof Ne&&(Ne=De(""));(ke.uponSanitizeElement.length>0||ke.uponSanitizeAttribute.length>0)&&Ge===We&&(Ge=z(Ge)),ke.uponSanitizeAttribute.length>0&&Ye===qe&&(Ye=z(Ye)),l&&l(e),Lt=e},Ut=M({},[...H,...B,...j]),Ft=M({},[...G,...W]),Ht=function(e){g(o.removed,{element:e});try{Te(e).removeChild(e)}catch(t){he(e)}},Bt=function(e,t){try{g(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){g(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(at||lt)try{Ht(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},jt=function(e){let t=null,n=null;if(it)e="<remove></remove>"+e;else{const t=S(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===Ct&&Nt===_t&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const o=_e?De(e):e;if(Nt===_t)try{t=(new L).parseFromString(o,Ct)}catch(e){}if(!t||!t.documentElement){t=we.createDocument(Nt,"template",null);try{t.documentElement.innerHTML=Ot?Ne:o}catch(e){}}const i=t.body||t.documentElement;return e&&n&&i.insertBefore(r.createTextNode(n),i.childNodes[0]||null),Nt===_t?Ce.call(t,ot?"html":"body")[0]:ot?t.documentElement:i},Gt=function(e){return Ie.call(e.ownerDocument||e,e,m.SHOW_ELEMENT|m.SHOW_COMMENT|m.SHOW_TEXT|m.SHOW_PROCESSING_INSTRUCTION|m.SHOW_CDATA_SECTION,null)},Wt=function(e){var t,n;e.normalize();const o=Ie.call(e.ownerDocument||e,e,m.SHOW_TEXT|m.SHOW_COMMENT|m.SHOW_CDATA_SECTION|m.SHOW_PROCESSING_INSTRUCTION,null);let r=o.nextNode();for(;r;){let e=r.data;p([Le,Me,Pe],t=>{e=E(e,t," ")}),r.data=e,r=o.nextNode()}const i=null!==(t=null===(n=e.querySelectorAll)||void 0===n?void 0:n.call(e,"template"))&&void 0!==t?t:[];p(Array.from(i),e=>{qt(e.content)&&Wt(e.content)})},Yt=function(e){const t=Ee?Ee(e):null;return"string"==typeof t&&("form"===kt(t)&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||e.attributes!==Ae(e)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes||e.nodeType!==Se(e)||e.childNodes!==ye(e)))},qt=function(e){if(!Se||"object"!=typeof e||null===e)return!1;try{return Se(e)===fe}catch(e){return!1}},Xt=function(e){if(!Se||"object"!=typeof e||null===e)return!1;try{return"number"==typeof Se(e)}catch(e){return!1}};function $t(e,t,n){p(e,e=>{e.call(o,t,n,Lt)})}const Kt=function(e){let t=null;if($t(ke.beforeSanitizeElements,e,null),Yt(e))return Ht(e),!0;const n=kt(Ee?Ee(e):e.nodeName);if($t(ke.uponSanitizeElement,e,{tagName:n,allowedTags:Ge}),nt&&e.hasChildNodes()&&!Xt(e.firstElementChild)&&C(/<[/\w!]/g,e.innerHTML)&&C(/<[/\w!]/g,e.textContent))return Ht(e),!0;if(nt&&e.namespaceURI===_t&&"style"===n&&Xt(e.firstElementChild))return Ht(e),!0;if(e.nodeType===ce)return Ht(e),!0;if(nt&&e.nodeType===se&&C(/<[/\w]/g,e.data))return Ht(e),!0;if($e[n]||!(Ve.tagCheck instanceof Function&&Ve.tagCheck(n))&&!Ge[n]){if(!$e[n]&&Jt(n)){if(Xe.tagNameCheck instanceof RegExp&&C(Xe.tagNameCheck,n))return!1;if(Xe.tagNameCheck instanceof Function&&Xe.tagNameCheck(n))return!1}if(mt&&!ht[n]){const t=Te(e),n=ye(e);if(n&&t){for(let o=n.length-1;o>=0;--o){const r=de(n[o],!0);t.insertBefore(r,ge(e))}}}return Ht(e),!0}return((Se?Se(e):e.nodeType)!==ae||function(e){let t=Te(e);t&&t.tagName||(t={namespaceURI:Nt,tagName:"template"});const n=b(e.tagName),o=b(t.tagName);return!!Dt[e.namespaceURI]&&(e.namespaceURI===Et?t.namespaceURI===_t?"svg"===n:t.namespaceURI===St?"svg"===n&&("annotation-xml"===o||wt[o]):Boolean(Ut[n]):e.namespaceURI===St?t.namespaceURI===_t?"math"===n:t.namespaceURI===Et?"math"===n&&It[o]:Boolean(Ft[n]):e.namespaceURI===_t?!(t.namespaceURI===Et&&!It[o])&&!(t.namespaceURI===St&&!wt[o])&&!Ft[n]&&(vt[n]||!Ut[n]):!("application/xhtml+xml"!==Ct||!Dt[e.namespaceURI]))}(e))&&("noscript"!==n&&"noembed"!==n&&"noframes"!==n||!C(/<\/no(script|embed|frames)/i,e.innerHTML))?(tt&&e.nodeType===le&&(t=e.textContent,p([Le,Me,Pe],e=>{t=E(t,e," ")}),e.textContent!==t&&(g(o.removed,{element:e.cloneNode()}),e.textContent=t)),$t(ke.afterSanitizeElements,e,null),!1):(Ht(e),!0)},Vt=function(e,t,n){if(Ke[t])return!1;if(st&&("id"===t||"name"===t)&&(n in r||n in Mt))return!1;const o=Ye[t]||Ve.attributeCheck instanceof Function&&Ve.attributeCheck(t,e);if(Je&&!Ke[t]&&C(ze,t));else if(Ze&&C(Ue,t));else if(!o||Ke[t]){if(!(Jt(e)&&(Xe.tagNameCheck instanceof RegExp&&C(Xe.tagNameCheck,e)||Xe.tagNameCheck instanceof Function&&Xe.tagNameCheck(e))&&(Xe.attributeNameCheck instanceof RegExp&&C(Xe.attributeNameCheck,t)||Xe.attributeNameCheck instanceof Function&&Xe.attributeNameCheck(t,e))||"is"===t&&Xe.allowCustomizedBuiltInElements&&(Xe.tagNameCheck instanceof RegExp&&C(Xe.tagNameCheck,n)||Xe.tagNameCheck instanceof Function&&Xe.tagNameCheck(n))))return!1}else if(bt[t]);else if(C(je,E(n,He,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==_(n,"data:")||!yt[e]){if(Qe&&!C(Fe,E(n,He,"")));else if(n)return!1}else;return!0},Zt=M({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Jt=function(e){return!Zt[b(e)]&&C(Be,e)},Qt=function(e){$t(ke.beforeSanitizeAttributes,e,null);const t=e.attributes;if(!t||Yt(e))return;const n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ye,forceKeepAttr:void 0};let r=t.length;for(;r--;){const i=t[r],a=i.name,l=i.namespaceURI,c=i.value,s=kt(a),u=c;let f="value"===a?u:N(u);if(n.attrName=s,n.attrValue=f,n.keepAttr=!0,n.forceKeepAttr=void 0,$t(ke.uponSanitizeAttribute,e,n),f=n.attrValue,!ut||"id"!==s&&"name"!==s||0===_(f,ft)||(Bt(a,e),f=ft+f),nt&&C(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,f)){Bt(a,e);continue}if("attributename"===s&&S(f,"href")){Bt(a,e);continue}if(n.forceKeepAttr)continue;if(!n.keepAttr){Bt(a,e);continue}if(!et&&C(/\/>/i,f)){Bt(a,e);continue}tt&&p([Le,Me,Pe],e=>{f=E(f,e," ")});const m=kt(e.nodeName);if(Vt(m,s,f)){if(_e&&"object"==typeof P&&"function"==typeof P.getAttributeType)if(l);else switch(P.getAttributeType(m,s)){case"TrustedHTML":f=De(f);break;case"TrustedScriptURL":f=_e.createScriptURL(f)}if(f!==u)try{l?e.setAttributeNS(l,a,f):e.setAttribute(a,f),Yt(e)?Ht(e):h(o.removed)}catch(t){Bt(a,e)}}else Bt(a,e)}$t(ke.afterSanitizeAttributes,e,null)},en=function(e){let t=null;const n=Gt(e);for($t(ke.beforeSanitizeShadowDOM,e,null);t=n.nextNode();){$t(ke.uponSanitizeShadowNode,t,null),Kt(t),Qt(t),qt(t.content)&&en(t.content);if((Se?Se(t):t.nodeType)===ae){const e=be?be(t):t.shadowRoot;qt(e)&&(tn(e),en(e))}}$t(ke.afterSanitizeShadowDOM,e,null)},tn=function(e){const t=Se?Se(e):e.nodeType;if(t===ae){const t=be?be(e):e.shadowRoot;qt(t)&&(tn(t),en(t))}const n=ye?ye(e):e.childNodes;if(!n)return;const o=[];p(n,e=>{g(o,e)});for(const e of o)tn(e);if(t===ae){const t=Ee?Ee(e):null;if("string"==typeof t&&"template"===kt(t)){const t=e.content;qt(t)&&tn(t)}}};return o.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null,r=null,a=null,l=null;if(Ot=!e,Ot&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Xt(e)&&"string"!=typeof(e=function(e){switch(typeof e){case"string":return e;case"number":return O(e);case"boolean":return D(e);case"bigint":return R?R(e):"0";case"symbol":return w?w(e):"Symbol()";case"undefined":default:return v(e);case"function":case"object":{if(null===e)return v(e);const t=e,n=U(t,"toString");if("function"==typeof n){const e=n(t);return"string"==typeof e?e:v(e)}return v(e)}}}(e)))throw x("dirty is not a string, aborting");if(!o.isSupported)return e;if(rt||zt(t),o.removed=[],"string"==typeof e&&(pt=!1),pt){const t=Ee?Ee(e):e.nodeName;if("string"==typeof t){const e=kt(t);if(!Ge[e]||$e[e])throw x("root node is forbidden and cannot be sanitized in-place")}if(Yt(e))throw x("root node is clobbered and cannot be sanitized in-place");tn(e)}else if(Xt(e))n=jt("\x3c!----\x3e"),r=n.ownerDocument.importNode(e,!0),r.nodeType===ae&&"BODY"===r.nodeName||"HTML"===r.nodeName?n=r:n.appendChild(r),tn(r);else{if(!at&&!tt&&!ot&&-1===e.indexOf("<"))return _e&&ct?De(e):e;if(n=jt(e),!n)return at?null:ct?Ne:""}n&&it&&Ht(n.firstChild);const c=Gt(pt?e:n);for(;a=c.nextNode();)Kt(a),Qt(a),qt(a.content)&&en(a.content);if(pt)return tt&&Wt(e),e;if(at){if(tt&&Wt(n),lt)for(l=ve.call(n.ownerDocument);n.firstChild;)l.appendChild(n.firstChild);else l=n;return(Ye.shadowroot||Ye.shadowrootmode)&&(l=xe.call(i,l,!0)),l}let s=ot?n.outerHTML:n.innerHTML;return ot&&Ge["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&C(re,n.ownerDocument.doctype.name)&&(s="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+s),tt&&p([Le,Me,Pe],e=>{s=E(s,e," ")}),_e&&ct?De(s):s},o.setConfig=function(){zt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),rt=!0},o.clearConfig=function(){Lt=null,rt=!1},o.isValidAttribute=function(e,t,n){Lt||zt({});const o=kt(e),r=kt(t);return Vt(o,r,n)},o.addHook=function(e,t){"function"==typeof t&&g(ke[e],t)},o.removeHook=function(e,t){if(void 0!==t){const n=d(ke[e],t);return-1===n?void 0:y(ke[e],n,1)[0]}return h(ke[e])},o.removeHooks=function(e){ke[e]=[]},o.removeAllHooks=function(){ke={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},o}();return pe});
//# sourceMappingURL=purify.min.js.map

// End of https://github.com/cure53/DOMPurify/blob/main/dist/purify.min.js

const html_tags = ['a','abbr','acronym','address','area','article','aside','audio','b','bdi','bdo','big','blink','blockquote','body','br','button','canvas','caption','center','cite','code','col','colgroup','content','data','datalist','dd','decorator','del','details','dfn','dialog','dir','div','dl','dt','element','em','fieldset','figcaption','figure','font','footer','form','h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','i','img','input','ins','kbd','label','legend','li','main','map','mark','marquee','menu','menuitem','meter','nav','nobr','ol','optgroup','option','output','p','picture','pre','progress','q','rp','rt','ruby','s','samp','search','section','select','shadow','slot','small','source','spacer','span','strike','strong','style','sub','summary','sup','table','tbody','td','template','textarea','tfoot','th','thead','time','tr','track','tt','u','ul','var','video','wbr'];

const html_attributes = ['accept','action','align','alt','autocapitalize','autocomplete','autopictureinpicture','autoplay','background','bgcolor','border','capture','cellpadding','cellspacing','checked','cite','class','clear','color','cols','colspan','command','commandfor','controls','controlslist','coords','crossorigin','datetime','decoding','default','dir','disabled','disablepictureinpicture','disableremoteplayback','download','draggable','enctype','enterkeyhint','exportparts','face','for','headers','height','hidden','high','href','hreflang','id','inert','inputmode','integrity','ismap','kind','label','lang','list','loading','loop','low','max','maxlength','media','method','min','minlength','multiple','muted','name','nonce','noshade','novalidate','nowrap','open','optimum','part','pattern','placeholder','playsinline','popover','popovertarget','popovertargetaction','poster','preload','pubdate','radiogroup','readonly','rel','required','rev','reversed','role','rows','rowspan','spellcheck','scope','selected','shape','size','sizes','slot','span','srclang','start','src','srcset','step','style','summary','tabindex','title','translate','type','usemap','valign','value','width','wrap','xmlns'];

function purify(html) {
  try {return DOMPurify.sanitize(html,{FORCE_BODY:true,ALLOWED_TAGS:html_tags,ALLOWED_ATTR:html_attributes.concat(['function','args'])});}
  catch (error) {console.error(error); return html;}
}

// Unused for now.
function purifyFunctions(html) {
  try {return DOMPurify.sanitize(html,{FORCE_BODY:true,ALLOWED_TAGS:html_tags,ALLOWED_ATTR:html_attributes.concat(['function','args'])})}
  catch (error) {console.error(error); return html;}
}

function purifyCSS(html) {
  try {return DOMPurify.sanitize(html,{FORCE_BODY:true,ALLOWED_TAGS:['style'],ALLOWED_ATTR:['style','id']});}
  catch (error) {console.error(error); return '';};
}

function purifyText(html) {
  try {return DOMPurify.sanitize(html,{USE_PROFILES:{HTML:false}})}
  catch (error) {console.error(error); return '';};
}
//

const ver = '1.5.1';

// --------------
const icon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48cGF0aCBmaWxsPSIjZTQ0ZDI2IiBzdHJva2U9IiNiODNlMWYiIHN0cm9rZS1kYXNob2Zmc2V0PSIyLjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSI0LjQiIHN0cm9rZS13aWR0aD0iMzAuNiIgZD0iTTk2IDE2aDMyMGEzMiAzMiA0NSAwIDEgMzIgMzJ2Mzg0bC0xOTIgNjQtMTkyLTY0VjQ4YTMyIDMyIDEzNSAwIDEgMzItMzJaIiBwYWludC1vcmRlcj0ic3Ryb2tlIGZpbGwgbWFya2VycyIvPjxwYXRoIGZpbGw9IiNmMTY1MjkiIGQ9Im0yNTYgNDY0IDE2MC02NFY0OEgyNTZaIiBwYWludC1vcmRlcj0ic3Ryb2tlIGZpbGwgbWFya2VycyIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00MTYgNjRIOTZ2MTkyaDI1NnY2OWwtOTYgNDMtOTYtMzJ2LTMySDk2djY0bDE2MCA2NCAxNjAtNjRWMTkySDE2MHYtNjRoMjU2eiIgcGFpbnQtb3JkZXI9InN0cm9rZSBmaWxsIG1hcmtlcnMiLz48L3N2Zz4='
const cssIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48cGF0aCBmaWxsPSIjMjU0YmRmIiBkPSJNOTYgMTZoMzIwYTMyIDMyIDQ1IDAgMSAzMiAzMnYzODRsLTE5MiA2NC0xOTItNjRWNDhhMzIgMzIgMTM1IDAgMSAzMi0zMiIgcGFpbnQtb3JkZXI9InN0cm9rZSBmaWxsIG1hcmtlcnMiLz48cGF0aCBmaWxsPSIjMjk2NWYxIiBkPSJtMjU2IDQ2NCAxNjAtNjRWNDhIMjU2WiIgcGFpbnQtb3JkZXI9InN0cm9rZSBmaWxsIG1hcmtlcnMiLz48cGF0aCBmaWxsPSIjZjFmMWYxIiBkPSJNOTYgNjRoMzIwdjMwNGwtMTYwIDY0LTE2MC02NHYtNDhoODB2MTZsODAgMzIgMTAwLTQzdi02OUgxNzZ2LTY0aDE4MHYtNjRIOTZaIiBwYWludC1vcmRlcj0ic3Ryb2tlIGZpbGwgbWFya2VycyIvPjwvc3ZnPg==';
// Colors
const color1 = '#e44d26';
const color2 = '#f16529';
const color3 = '#e44d26';
//
// Allows for choosing the selector [Scratch="canvas"] to get the correct canvas.
const canvas = Scratch.vm.renderer.canvas;
canvas.setAttribute('Scratch','canvas');
canvas.classList.add('sc-Canvas');
canvas.setAttribute('sc-Canvas','true');

function label(name) {return {blockType: 'label', text: name};}

function MI(text,value) {return {text: text, value: value}}

function makeBlock(opcode,type,text,args,extra) {
  return Object.assign({
    opcode: opcode,
    blockType: type,
    text: text,
    arguments: args,
    allowDropAnywhere: true,
  },extra)
}

function makeButton(text,func) {
  return {
    blockType: Scratch.BlockType.BUTTON,
    text: text,
    func: func
  }
}

  const BT = Scratch.BlockType;
  const AT = Scratch.ArgumentType;
  const bt = BT;
  const at = AT;
  const BR = '---';

  function ARG(type,defaultValue,menu) {return {type: type, defaultValue: defaultValue, menu: menu};};

const ogTitle = document.title;

const mouse = {
  page: {x: 0},
  screen: {y: 0},
  click: null,
  dblClick: null,
  hover: null,
  other: {}
} 

document.querySelectorAll('#OBHTML-scriptEditor').forEach(e => {e.remove();});
function openScriptEditor() {
	const scriptEditor = document.querySelector('#OBHTML-scriptEditor');
	if (!!document.querySelector('#OBHTML-scriptEditor')) {
		scriptEditor.setAttribute('obhidden',!scriptEditor.getAttribute('obhidden'));
		if (scriptEditor.getAttribute('obhidden') != true) {
			document.querySelector('#OBHTML-scriptEditor .OBHTML-editor textarea#OBHTML-editor').focus();
			
		} else {
			document.querySelector('#OBHTML-scriptEditor .OBHTML-editor textarea#OBHTML-editor').blur();
		}
	} else {
	const html = `<div id="OBHTML-scriptEditor" obhidden="false"><style>button.OBHTML-scriptEditor-BTN {transition: filter 0.25s;min-width: 2.5rem;height: 2.5rem;background-color: rgba(0,0,0,0.50);background: linear-gradient(2.5deg,rgba(25,0,0,0.50) 0%, rgba(175.500,0.00,0.00,0.50) 100%);border: 1px solid white;border-top: 1px solid rgba(75,75,75);border-bottom: 1px solid #151515;border-left: 1px solid rgb(50,50,50);border-right: 1px solid rgb(50,50,50);border-radius: 0.350rem;display: flex;flex-direction: row;justify-content: center;align-items: center;filter: saturate(0) brightness(1) drop-shadow(1px 4px 2px rgba(0,0,0,0.25));backdrop-filter: blur(8px);}#OBHTML button:not(:not(:hover,:focus)), button.OBHTML-scriptEditor-BTN:not(:not(:hover,:Focus)) {transition: filter 0.01s;filter: saturate(0) brightness(1.25) drop-shadow(1px 4px 2px rgba(0,0,0,0.25));}#OBHTML button#openScriptEditor {font-size: 1rem;}#OBHTML-scriptEditor {z-index: 9999;position: absolute;width: 100%;height: 100%;background: linear-gradient(0deg,rgba(0,0,0,0.5),rgba(100,100,100,0.5));backdrop-filter: blur(8px);display: flex;flex-direction: column;justify-content: center;align-items: center;}#OBHTML-scriptEditor .OBHTML-editor {width: 95%;height: 89%;padding: 1rem;background-color: rgba(0,0,0,0.25);border: 1px solid rgba(255,255,255,0.25);border-radius: 0.41rem;display: flex;flex-direction: column;justify-content: start;align-items: center;}#OBHTML-scriptEditor .OBHTML-editor textarea#OBHTML-editor {transition: border 0.25s, outline 0.25s; width: 99%;height: 99%;padding: 0.5rem;background-color: black;border: 1px solid rgba(255,255,255,0.25); outline: 0px solid transparent;resize: none;white-space: pre;overflow-wrap: normal;overflow-x: auto;font-family: monospace;}#OBHTML-scriptEditor .OBHTML-editor textarea#OBHTML-editor:focus {border: 1px solid rgba(253, 76, 76,1);outline: 4px solid rgba(253,76,76,0.5);}#OBHTML button, #OBHTML-scriptEditor .OBHTML-editor button#OBHTML-scriptEditor-exitBTN {transition: filter 0.25s;min-width: 2.5rem;height: 2.5rem;background-color: rgba(0,0,0,0.50);background: linear-gradient(2.5deg,rgba(25,0,0,0.50) 0%, rgba(175.500,0.00,0.00,0.50) 100%);border: 1px solid white;border-color: rgba(75,75,75) rgb(50,50,50) #151515 rgb(50,50,50);border-radius: 0.350rem;display: flex;flex-direction: row;justify-content: center;align-items: center;filter: saturate(0) brightness(1) drop-shadow(1px 4px 2px rgba(0,0,0,0.25));backdrop-filter: blur(8px);}#OBHTML button:not(:not(:hover,:focus)), #OBHTML-scriptEditor .OBHTML-editor button#OBHTML-scriptEditor-exitBTN:not(:not(:hover,:focus)) {transition: filter 0.01s;filter: saturate(0) brightness(1.25) drop-shadow(1px 4px 2px rgba(0,0,0,0.25));}#OBHTML button#quickExtension {background: #FF4C4C; opacity: 1;filter: saturate(1) brightness(1) drop-shadow(1px 4px 2px rgba(0,0,0,0.25));font-size: 1rem;}#OBHTML button#quickExtension:not(:not(:hover,:focus)) {transition: filter 0.01s;filter: saturate(1) brightness(1.25) drop-shadow(1px 4px 2px rgba(0,0,0,0.25));}#OBHTML button#openScriptEditor {font-size: 1rem;}#OBHTML-scriptEditor-btnContainer {width: 95%; height: 2rem; padding: 0.5rem; display: flex; gap: 0.25rem;flex-direction: row}#OBHTML-scriptEditor-btnContainer button {min-width: 2rem; height: 2rem;}#OBHTML-scriptEditor-BTN-closeEditor {transition: filter 0.25s, transform 0.25s;background-color: transparent;background: linear-gradient(2.5deg,rgba(100,25,25,1) 0%,rgba(245,100,100,1) 100%);filter: saturate(1) brightness(1) drop-shadow(1px 4px 2px rgba(0,0,0,0.25));}#OBHTML-scriptEditor-BTN-closeEditor:not(:not(:hover,:focus)) {transition: filter 0.01s, transform 0.05s;transform: translateY(-1px);background: linear-gradient(2.5deg,rgba(100,25,25,1) 0%,rgba(245,100,100,1) 100%);border-color: rgba(200,100,100,1) rgba(150,55,55,1) rgba(120,50,50,1) rgba(150,55,55,1)!important;filter: saturate(1) brightness(1.5) drop-shadow(1px 4px 2px rgba(0,0,0,0.25));}[obhidden="true"] {display: none!important; pointer-events: none; user-select: none; -webkit-user-select: none; -moz-user-select: none;}@keyframes OBHTML-popup {0% {scale: 0;opacity: 0;}100% {scale: 1;opacity: 1;}}@keyframes OBHTML-popup-no-scale {0% {opacity: 0;}100% {opacity: 1;}}#OBHTML-scriptEditor:not([obhidded="true"]) .OBHTML-editor,#OBHTML-scriptEditor:not([obhidden="true"]) {animation: OBHTML-popup-no-scale 0.05s forwards ease;}#OBHTML-scriptEditor:not([obhidden="true"]) :not(:not(.OBHTML-scriptEditor-BTN,[title="BingBong"])) {scale: 0;opacity: 0;animation: OBHTML-popup 0.15s forwards ease;animation-delay: 0.05s;}</style><div id="OBHTML-scriptEditor-btnContainer"><button class="OBHTML-scriptEditor-BTN" id="OBHTML-scriptEditor-BTN-closeEditor" title="Close editor [Esc]" onclick="document.querySelector('#OBHTML-scriptEditor').setAttribute('obhidden',true);">X</button><button class="OBHTML-scriptEditor-BTN" title="Copy text" onclick="window.navigator.clipboard.writeText(document.querySelector('#OBHTML-editor').value);">Copy</button><button class="OBHTML-scriptEditor-BTN" title="Clear text" onclick="document.querySelector('#OBHTML-editor').value = '';">Clear</button><img title="BingBong" src="https://c.tenor.com/xzUBceNkooEAAAAC/tenor.gif" style="width: 2rem; height: 2rem; <-- pointer-events: none; user-drag: none; -webkit-user-drag: none; -moz-user-drag: -moz-none; user-select: none; -->"></div><div class="OBHTML-editor"><textarea id="OBHTML-editor" spellcheck="false"></textarea></div></div>`;
	document.body.insertAdjacentHTML('beforeend', html);document.querySelector('#OBHTML-scriptEditor .OBHTML-editor textarea#OBHTML-editor').focus();
  document.addEventListener('keydown', function (event) {
    if (event.key == 'Escape') {
      if (document.querySelector('#OBHTML-scriptEditor').getAttribute('obhidden') != true) {
        document.querySelector('#OBHTML-scriptEditor').setAttribute('obhidden',true);
      }
    }
  });
  }
}

function closeScriptEditor() {
  document.querySelector('#OBHTML-scriptEditor').setAttribute('obhidden',true);
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

function includesArray(string,array) {
  try { 
    if (Array.isArray(array)) {
      let matches = 0;
      for (let i = 0; i < array.length & matches < 1; i++) {
        if (string == array[i]){
          matches++;
        }
      };
      return matches > 0;
    } else {
      return false;
    }
  } catch (error) {console.error(error);}
}

function getSafeId(inId) {
    const id_list = [];
    (``+inId).replaceAll(' ','-').split('').forEach(c => {
      if (includesArray(c,id_allowed_characters) == true) {
        id_list.push(c);
      } else {
        id_list.push((''+c).charCodeAt(0));
      }
    });
    return id_list.join('');
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
  return JSON.stringify(Object.fromEntries(Array.from(e.attributes).map((a) => [a.nodeName, a.value])));
  } else {
  return '{}';
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
  hasReplacedAllAttributes: false,
  hasInsertedExternalStyleSheet: false
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

function showExternalStyleSheetWarning(url) {
  const strUrl = (''+url);
  if (confirm.hasInsertedExternalStyleSheet == false & !strUrl.startsWith('http://localhost:') & !strUrl.startsWith('https://localhost') & !strUrl.startsWith('.') & !strUrl.startsWith('/') & !strUrl.startsWith('data:')) {
    if (window.confirm(`WARNING!\n\nYou are attempting to insert a StyleSheet from an external site.\n\nOn certain browsers, this might allow Cross Site Scripting(XSS) attacks.\n\nI can't find many sources on if this is a real threat or not, but if you wish to proceed. Do so with caution.\n\nThis warning will not show more than once per session, and never while packaged.\n\nThis warning also won't show when connecting to local sources, such as: "./style.css" or "http://localhost:8080/style.css"\n\nDo you wish to proceed?`)) {
      confirm.hasInsertedExternalStyleSheet = true;
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}


//
    
const id_allowed_characters = ['-','_',0,1,2,3,4,5,6,7,8,9,'0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];

const cssBlockExtras = {color1:'#264de4',color2:'#2965f1',color3:'#264de4',blockIconURI:cssIcon};

class OBhtml {

  constructor() {
    if (!this.styleSheets) {
      this.styleSheets = Object.create(null);
    }

    if (!this.functions) {
      this.functions = {};
    }

    if (!this.externalStyleSheets) {
      this.externalStyleSheets = {};
    }

    this.currentFunction = null;
    this.currentFunctionCheck = null

    if (!this.log) {
      this.log = {error:true};
    }

    //Logging when not packaged
    if (!Scratch.vm.runtime.isPackaged) {
    this.log.error = true;
    console.warn('(OBhtml) Logging errors.\nLogging is disabled by default when packaged.')
    } else {
    this.log.error = false;
    }

    document.addEventListener('mousemove', (e) => {
      mouse.page.x = e.pageX;
      mouse.page.y = e.pageY;
    });

    document.addEventListener('mouseover', (e) => {
      mouse.hover = e.target;
    });

    document.addEventListener('click', (e) => {
      mouse.click = e.target;
      if (e.target.matches('[function]')) {
        const getFunction = ''+e.target.getAttribute('function');
        const getArgs = ''+e.target.getAttribute('args');
        this.currentFunction = getFunction;
        this.currentFunctionCheck = getFunction;
        this.functions[getFunction] = getArgs;
      }
    });

    document.addEventListener('dblclick', (e) => {
      mouse.dblClick = e.target;
    });

    document.addEventListener('focus', e => {
      mouse.other.focus = e.target;
    });

    document.addEventListener('blur', e => {
      mouse.other.blur = e.target;
    });
  }

  getInfo() {
    return {
      id: 'OBHTML',
      name: 'HTML5',
      color1: color1,
      color2: color2,
      color3: color3,
      menuIconURI: icon,
      blocks: [
        makeButton('Info','Info'),
        makeButton('Selectors','Selectors'),
        makeButton('Online Warning!','onlineWarning'),
        label('HTML'),
        {
          opcode: 'toggleLog',
          blockType: BT.COMMAND,
          text: 'Turn Logging [onOff]',
          hideFromPalette: true,
          arguments: {
            onOff: {
              type: AT.STRING,
              menu: 'onOff'
            }
          }
        },
        makeBlock('insertHTML', BT.COMMAND, 'Insert html: [html] in [selector] #:[index] at: [position] ', {
            selector: {
              type: AT.STRING,
              defaultValue: '[Scratch="canvas"]'
            },
            position: {
              type: AT.STRING,
              menu: 'positions',
            },
            html: {
              type: AT.STRING,
              defaultValue: '<span id="span1" style="position: absolute;">Hello World!</span>'
            },
            index: {
              type: AT.NUMBER,
              defaultValue: '1'
            }
        }),
        makeBlock('removeHTML', BT.COMMAND, 'Remove selector:[selector] #:[index] from page', {
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          },
          index: {
            type: AT.NUMBER,
            defaultValue: '1'
          }
        }),
        makeBlock('removeAllHTML', BT.COMMAND, 'Remove all matching selector:[selector] from page', {
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          }
        }),
        makeBlock('countSelector',BT.REPORTER,'Count [selector]',{
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          }
        }),
        BR,
        makeBlock('setInnerHTML', BT.COMMAND, 'Set inner html of: [selector] #:[index] to: [html] ', {
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          },
          html: {
            type: AT.STRING,
            defaultValue: 'Hello!'
          },
          index: {
            type: AT.NUMBER,
            defaultValue: '1'
          }
        }),
        makeBlock('setInnerHTMLAll',BT.COMMAND,'Set inner html of all matching selector: [selector] to: [html]',{
          selector: {
              type: AT.STRING,
              defaultValue: '#span1'
            },
            html: {
              type: AT.STRING,
              defaultValue: 'Hello!'
            },
        }),
        makeBlock('getInnerHTML', BT.REPORTER, 'Get inner html from selector: [selector] #:[index]', {
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          },
          index: {
            type: AT.NUMBER,
            defaultValue: '1'
          }
        }),
        BR,
        makeBlock('setOuterHTML',BT.COMMAND,'Set outer html of: [selector] #:[index] to: [html] ',{
            selector: {
              type: AT.STRING,
              defaultValue: '#span1'
            },
            html: {
              type: AT.STRING,
              defaultValue: '<span id="span1" style="position: absolute;">Hello!</span>'
            },
            index: {
              type: AT.NUMBER,
              defaultValue: '1'
            }
        }),
        makeBlock('setOuterHTMLAll',BT.COMMAND,'Set outer html of all matching selector: [selector] to: [html]',{
        selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          },
          html: {
            type: AT.STRING,
            defaultValue: '<span id="span1" style="position: absolute;">Hello!</span>'
          },
        }),
        makeBlock('getOuterHTML',BT.REPORTER,'Get outer html from selector: [selector] #:[index]',{
                selector: {
                    type: AT.STRING,
                    defaultValue: '#span1'
                },
                index: {
                  type: AT.NUMBER,
                  defaultValue: '1'
                }
        }),
        BR,
        makeBlock('setValue',BT.COMMAND,`Set value of selector: [selector] #:[index] to: [value]`,{
          selector: {
            type: AT.STRING,
            defaultValue: '#input1'
          },
          value: {
            type: AT.STRING,
            defaultValue: ''
          },
          index: {
            type: AT.NUMBER,
            defaultValue: '1'
          }
        }),
        makeBlock('setValueAll',BT.COMMAND,'Set value of all matching selector: [selector] to: [value]',{
          selector: {
            type: AT.STRING,
            defaultValue: '#input1'
          },
          value: {
            type: AT.STRING,
            defaultValue: ''
          },
        }),
        makeBlock('getValue',BT.REPORTER,`Get value of selector: [selector] #:[index]`,{
          selector: {
            type: AT.STRING,
            defaultValue: '#input1'
          },
          index: {
            type: AT.NUMBER,
            defaultValue: '1'
          }
        }),
        BR,
        makeBlock('focusBlur',BT.COMMAND,'[type] selector:[selector] #:[index]',{
          type: {
            type: AT.STRING,
            menu: 'focusBlur'
          },
          selector: {
            type: AT.STRING,
            defaultValue: '#input1'
          },
          index: {
            type: AT.NUMBER,
            defaultValue: '1'
          }
        },'','#000000'),
        makeBlock('showHide',BT.COMMAND,'[type] selector:[selector] #:[index]',{
          selector: {
              type: AT.STRING,
              defaultValue: '#span1'
            },
            type: {
              type: AT.STRING,
              menu: 'showHide'
            },
            index: {
              type: AT.NUMBER,
              defaultValue: '1'
            }
        }),
        makeBlock('showHideAll',BT.COMMAND,'[type] all matching selector: [selector]',{
          selector: {
              type: AT.STRING,
              defaultValue: '#span1'
            },
            type: {
              type: AT.STRING,
              menu: 'showHide'
            },
        }),
        // makeBlock('clickElement',BT.COMMAND,'Click selector:[selector] #:[index]',{
        //   selector: {
        //       type: AT.STRING,
        //       defaultValue: '#span1'
        //     },
        //     index: {
        //       type: AT.NUMBER,
        //       defaultValue: '1'
        //     }
        // }),
        BR,
        makeBlock('getStatus',BT.BOOLEAN,'Selecor:[selector] #:[index] [status]?',{
          selector: {
              type: AT.STRING,
              defaultValue: '#span1'
            },
            index: {
              type: AT.NUMBER,
              defaultValue: '1'
            },
            status: {
              type: AT.STRING,
              menu: 'status'
            }
        }),
        makeBlock('getAnyStatus',BT.BOOLEAN,'Any of selecor:[selector] [status]?',{
          selector: {
              type: AT.STRING,
              defaultValue: '#span1'
            },
            status: {
              type: AT.STRING,
              menu: 'status'
            }
        }),
        makeBlock('matches',BT.BOOLEAN,'Selector:[selector] #[index] matches selector:[selectorQuery]?',{
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          },
          selectorQuery: {
            type: AT.STRING,
            defaultValue: ':hover'
          },
          index: {
            type: AT.NUMBER,
            defaultValue: '1'
          }
        }),
        makeBlock('matchesAny',BT.BOOLEAN,'Any matching selector:[selector] matches selector: [selectorQuery]?',{
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          },
          selectorQuery: {
            type: AT.STRING,
            defaultValue: ':hover'
          }
        }),
        makeBlock('getElementInfo',BT.REPORTER,'[info] of selector:[selector] #:[index]',{
          selector: {
              type: AT.STRING,
              defaultValue: '#span1'
            },
            index: {
              type: AT.NUMBER,
              defaultValue: '1'
            },
            info: {
              type: AT.STRING,
              menu: 'info'
            }
        }),
        makeBlock('checkStatus',BT.HAT,'When selector: [selector] #:[index] [status]',{
          selector: {
              type: AT.STRING,
              defaultValue: '#span1'
            },
            index: {
              type: AT.NUMBER,
              defaultValue: '1'
            },
            status: {
              type: AT.STRING,
              menu: 'status'
            }
        }),
        makeBlock('checkStatusAny',BT.HAT,'When any matching selector: [selector] [status]',{
          selector: {
              type: AT.STRING,
              defaultValue: '#span1'
            },
            status: {
              type: AT.STRING,
              menu: 'status'
            }
        }),
        makeBlock('checkMatching',BT.HAT,'When selector: [selector] #:[index] matches: [selectorQuery]',{
          selector: ARG(AT.STRING, '#span1'),
          index: ARG(AT.NUMBER, 1),
          selectorQuery: ARG(AT.STRING, ':hover')
        },{hideFromPalette:true}),
        makeBlock('checkMatchingAny',BT.HAT,'When any matching selector: [selector] matches: [selectorQuery]',{
          selector: ARG(AT.STRING, '#span1'),
          selectorQuery: ARG(AT.STRING, ':hover')
        },{hideFromPalette:true}),
        label('Functions'),
        makeButton('Functions','functionInfo'),
        makeBlock('checkFunction',BT.HAT,'When any element with function: [function] is clicked', {
          function: ARG(AT.STRING,'function1')
        }),
        makeBlock('functionChecked',BT.BOOLEAN,'Any element with function: [function] clicked?', {
          function: ARG(AT.STRING,'function1')
        }),
        makeBlock('getFunctionArgs',BT.REPORTER,'Data from function: [function]',{
          function: ARG(AT.STRING,'function1')
        }),
        BR,
        // mouse
        makeBlock('getMouseDown',BT.BOOLEAN,'Mouse down?'),
        makeBlock('getMouseData',BT.REPORTER,'Mouse [value]',{
          value: {
            type: AT.STRING,
            menu: 'xy'
          }
        }),
        makeBlock('getMouseDataElement',BT.REPORTER,'Mouse [value] in selector: [selector] #:[index]',{
          value: {
            type: AT.STRING,
            menu: 'xy'
          },
          selector: {
            type: AT.STRING,
            defaultValue: '[Scratch="canvas"]'
          },
          index: {
            type: AT.NUMBER,
            defaultValue: '1'
          }
        }),
        makeBlock('elementDBLClickedStatus',BT.REPORTER,'Attribute: [attribute] of last [click] element',{
          attribute: {
            type: AT.STRING,
            defaultValue: 'id'
          },
          click: {
            type: AT.STRING,
            menu: 'click'
          }
        }),
        makeBlock('elementDBLClickedStatusAll',BT.REPORTER,'All attributes of last [click] element',{
          click: {
            type: AT.STRING,
            menu: 'click'
          }
        }),
        BR,
        makeBlock('changeClass',BT.COMMAND,'[change] classes: [class] in selector: [selector] #:[index]',{
          change: {
            type: AT.STRING,
            menu: 'change'
          },
          class: {
            type: AT.STRING,
            defaultValue: 'Cool,cold'
          },
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          },
          index: {
            type: AT.NUMBER,
            defaultValue: '1'
          }
        }),
        // makeBlock('removeClass',BT.COMMAND,'Remove classes: [class] from selector: [selector] #:[index]',{
        //   class: {
        //     type: AT.STRING,
        //     defaultValue: 'Cool,cold'
        //   },
        //   selector: {
        //     type: AT.STRING,
        //     defaultValue: '#span1'
        //   },
        //   index: {
        //     type: AT.NUMBER,
        //     defaultValue: '1'
        //   }
        // }),
        makeBlock('changeClassAll',BT.COMMAND,'[change] classes: [class] in all matching selector: [selector]',{
          change: {
            type: AT.STRING,
            menu: 'change'
          },
          class: {
            type: AT.STRING,
            defaultValue: '["Warm","hot"]'
          },
          selector: {
            type: AT.STRING,
            defaultValue: '#span1,[Scratch="canvas"]'
          }
        }),
        // makeBlock('removeClassAll',BT.COMMAND,'Remove classes: [class] from all matching selector: [selector]',{
        //   class: {
        //     type: AT.STRING,
        //     defaultValue: 'cool,cold'
        //   },
        //   selector: {
        //     type: AT.STRING,
        //     defaultValue: '#span1'
        //   }
        // }),
        makeBlock('getClassList',BT.REPORTER,'Get classes of selector: [selector] #:[index]',{
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          },
          index: {
            type: AT.NUMBER,
            defaultValue: '1'
          }
        }),
        makeBlock('getClassListAll',BT.REPORTER,'Get classes of all matching selector: [selector]',{
          selector: {
            type: AT.STRING,
            defaultValue: '#span1,[Scratch="canvas"]'
          }
        }),
        BR,
        makeBlock('setAttribute', BT.COMMAND, 'Set attribute:[attribute] of: [selector] #:[index] to: [value]', {
          attribute: {
            type: AT.STRING,
            defaultValue: 'title'
          },
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          },
          index: {
            type: AT.NUMBER,
            defaultValue: '1'
          },
          value: {
            type: AT.STRING,
            defaultValue: 'I have a Title now!'
          }
        }),
        makeBlock('setAttributeAll',BT.COMMAND,'Set attribute: [attribute] for all matching selector: [selector] to: [value]',{
                attribute: {
                    type: AT.STRING,
                    defaultValue: 'title'
                },
                selector: {
                    type: AT.STRING,
                    defaultValue: '#span1'
                },
                value: {
                  type: AT.STRING,
                  defaultValue: 'We all have Titles now!'
                }

        }),
        makeBlock('removeAttribute',BT.COMMAND,'Remove attribute: [attribute] from selector: [selector] #:[index]',{
          attribute: {
            type: AT.STRING,
            defaultValue: 'title'
          },
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          },
          index: {
            type: AT.NUMBER,
            defaultValue: '1'
          }
        }),
        makeBlock('removeAttributeAll',BT.COMMAND,'Remove attribute: [attribute] from all matching selector: [selector]',{
          attribute: {
            type: AT.STRING,
            defaultValue: 'title'
          },
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          }
        }),
        // makeBlock('removeAllAttributes',BT.COMMAND,'Remove all attributes from selector: [selector] #[index]',{
        //   selector: {
        //     type: AT.STRING,
        //     defaultValue: '#span1'
        //   },
        //   index: {
        //     type: AT.NUMBER,
        //     defaultValue: '1'
        //   }
        // }),
        // makeBlock('removeAllAttributesAll',BT.COMMAND,'Remove all attributes from all matching selector: [selector]',{
        //   selector: {
        //     type: AT.STRING,
        //     defaultValue: '#span1'
        //   }
        // }),
        BR,
        makeBlock('setAttributeJSON',BT.COMMAND,'Set attributes from JSON:[json] for: [selector] #:[index]',{
            json: {
              type: AT.STRING,
              defaultValue: '{"title":"I have a Title now!"}'
            },
            selector: {
              type: AT.STRING,
              defaultValue: '#span1'
            },
            index: {
              type: AT.NUMBER,
              defaultValue: '1'
            }
        }),
        makeBlock('setAttributeAllJSON',BT.COMMAND,'Set attributes from JSON: [json] for all matching selector: [selector]',{
                json: {
                    type: AT.STRING,
                    defaultValue: '{"title":"We all have Titles now!"}'
                },
                selector: {
                    type: AT.STRING,
                    defaultValue: '#span1,[Scratch="canvas"]'
                }
        
        }),
        makeBlock('removeAttributeARRAY',BT.COMMAND,'Remove attributes in ARRAY: [json] from selector: [selector] #:[index]',{
          json: {
            type: AT.STRING,
            defaultValue: '["title","class"]'
          },
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          },
          index: {
            type: AT.NUMBER,
            defaultValue: '1'
          }
        }),
        makeBlock('removeAttributeAllARRAY',BT.COMMAND,'Remove attributes in ARRAY: [json] from all matching selector: [selector]',{
          json: {
            type: AT.STRING,
            defaultValue: '["class","title"]'
          },
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          }
        }),
        BR,
        makeBlock('getAttribute', BT.REPORTER, 'Get attribute: [attribute] from selector: [selector] #:[index]', {
          attribute: {
            type: AT.STRING,
            defaultValue: 'title'
          },
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          },
          index: {
            type: AT.NUMBER,
            defaultValue: '1'
          }
        }),
        makeBlock('getAttributeAllCertain',BT.REPORTER,'Get attribute:[attribute] from all matching selector:[selector]',{
          attribute: {
            type: AT.STRING,
            defaultValue: 'title'
          },
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          }
        }),
        makeBlock('getAttributeAll',BT.REPORTER,'Get all attributes from selector: [selector] #:[index]',{
          selector: {
                    type: AT.STRING,
                    defaultValue: '#span1'
                },
                index: {
                  type: AT.NUMBER,
                  defaultValue: '1'
                }
        }),
        makeBlock('getAttributeAllAll',BT.REPORTER,'Get all attributes from all matching selector: [selector]',{
          selector: {
            type: AT.STRING,
            defaultValue: '#span1,[Scratch="canvas"]'
          }
        }),
        BR,
        makeBlock('setTitle',BT.COMMAND,'Set page title: [title]',{
          title: {
            type: AT.STRING,
            defaultValue: 'Scratch!'
          }
        }),
        makeBlock('getTitle',BT.REPORTER,'Page title'),
        makeBlock('getOGTitle',BT.REPORTER,'Orginal Title'),
        makeBlock('setIcon',BT.COMMAND,'Set page icon to url:[url]',{
          url: {
            type: AT.STRING,
            defaultValue: 'https://scratch.mit.edu/favicon.ico'
          }
        }),
        makeBlock('getIcon',BT.REPORTER,'Page icon'),
        makeBlock('getBrowserInfo',BT.REPORTER, 'Get browser info'),

        BR,
        makeButton('Note','sanitizeNote'),
        makeBlock('sanitize',BT.REPORTER,'Sanitize: [input]',{
          input: {
            type: AT.STRING,
            defaultValue: '<sus><span>Some Possibly unsafe HTML</span></sus>'
          }
        }),
        makeBlock('sanitizeText',BT.REPORTER,'Sanitize text: [input]',{
          input: {
            type: AT.STRING,
            defaultValue: '<span>I want to be TEXT!</span>'
          }
        }),
        //CSS
        label('CSS'),
        makeButton('Ids','styleSheetsInfo'),
        makeBlock('setStyleSheet',BT.COMMAND,'Set StyleSheet with id:[id] to css:[css]',{
            css: {
              type: AT.STRING,
              defaultValue: '#span1 {color: red;}'
            },
            id: {
              type: AT.STRING,
              defaultValue: 'css-1'
            }
          },cssBlockExtras),
        makeBlock('removeStyleSheet',BT.COMMAND,'Remove StyleSheet with id:[id]',{
          id: {
            type: AT.STRING,
            defaultValue: 'css-1'
          }
        },cssBlockExtras),
        makeBlock('removeAllStyleSheets',BT.COMMAND,'Remove All StyleSheets',{},cssBlockExtras),
        makeBlock('getSpecificStyleSheet',BT.REPORTER,'StyleSheet: [id]',{
          id: {
            type: AT.STRING,
            defaultValue: 'css-1'
          }
        },cssBlockExtras),
        makeBlock('getStyleSheets',BT.REPORTER,'All StyleSheets',{},cssBlockExtras),
        makeBlock('importStyleSheets',BT.COMMAND,'Import StyleSheets from:[input] ',{
          input: {
            type: AT.STRING,
            defaultValue: '{}'
          }
        },cssBlockExtras),
        makeBlock('exportStyleSheets',BT.REPORTER,'Export StyleSheets',{},cssBlockExtras),
        makeBlock('getSafeStyleSheetId',BT.REPORTER,'Get safe StyleSheet id: [id]',{
          id: ARG(AT.STRING,'css 1')
        }, cssBlockExtras),
        BR,
        makeButton('Imported CSS','externalCSSInfo'),
        makeBlock('importStyleSheetFromUrl',BT.COMMAND,'Import StyleSheet with id: [id] from URL: [url]',{
          id: ARG(AT.STRING,'external-css'),
          url: ARG(AT.STRING,'data:text/css;base64,I3NwYW4xIHtjb2xvcjogcmVkO30=')
        },cssBlockExtras),
        makeBlock('removeExternalStyleSheet',BT.COMMAND,'Remove imported StyleSheet with id: [id]',{
          id: ARG(AT.STRING,'external-css')
        },cssBlockExtras),
        makeBlock('removeAllExternalStyleSheets',BT.COMMAND,'Remove all imported StyleSheets',{},cssBlockExtras),
        makeBlock('getExternalStyleSheets',BT.REPORTER,'Imported StyleSheets',{},cssBlockExtras),
        BR,
        makeBlock('setStyle',BT.COMMAND,'Set style:[style] of: [selector] #: [index] to:[value]',{
          style: {
            type: AT.STRING,
            defaultValue: 'color'
          },
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          },
          index: {
            type: AT.NUMBER,
            defaultValue: '1'
          },
          value: {
            type: AT.STRING,
            defaultValue: 'red'
          }
        },cssBlockExtras),
        makeBlock('setStyleAll',BT.COMMAND,'Set style:[style] of all elements matching: [selector] to:[value]',{
          style: {
            type: AT.STRING,
            defaultValue: 'color'
          },
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          },
          value: {
            type: AT.STRING,
            defaultValue: 'red'
          }
        },cssBlockExtras),
        makeBlock('getStyle',BT.REPORTER,'Style: [style] of: [selector] #: [index]',{
          style: {
            type: AT.STRING,
            defaultValue: 'color'
          },
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          },
          index: {
            type: AT.NUMBER,
            defaultValue: 1,
          }
        },cssBlockExtras),
        makeBlock('getStyleAll',BT.REPORTER,'Style: [style] of all matching: [selector]',{
          style: {
            type: AT.STRING,
            defaultValue: 'color'
          },
          selector: {
            type: AT.STRING,
            defaultValue: '#span1'
          }
        },cssBlockExtras),
        // makeBlock('checkImportance',BT.BOOLEAN,'Is style: [style] of [selector] # [index] important?',{
        //   style: {
        //     type: AT.STRING,
        //     defaultValue: 'color'
        //   },
        //   selector: {
        //     type: AT.STRING,
        //     defaultValue: '#span1'
        //   },
        //   index: {
        //     type: AT.NUMBER,
        //     defaultValue: 1,
        //   }
        // },cssBlockExtras),
        label('Text editor'),
        makeBlock('openTextEditor',BT.COMMAND,'Open text editor'),
        makeBlock('closeTextEditor',BT.COMMAND,'Close text editor'),
        makeBlock('textEditorOpen',BT.BOOLEAN,'Text editor open?'),
        makeBlock('setTextEditorValue',BT.COMMAND,'Set text editor value to [value]', {
          value: ARG(AT.STRING,'')
        }),
        makeBlock('getTextEditorValue',BT.REPORTER,'Get text editor value'),
        // licence
        BR,
        makeButton('Apache Licence','ApacheLicence'),
        makeButton('Mozilla Public Licence','MozillaPublicLicence'),
        // End licence
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
    this.log.error = !!(args.onOff == 'On' | args.onOff == true ? true : false);
  }

  openTextEditor() {
    openScriptEditor();
  }

  closeTextEditor() {
    try {
      closeScriptEditor();
    } catch {
      console.warn('(OBHTML) - Could not close the text editor!');
    }
  }

  setTextEditorValue(args) {
    try {
      document.querySelector('#OBHTML-editor').value = (''+args.value);
    } catch (error) {
      console.error(error);
    }
  }

  getTextEditorValue() {
    try {
      return document.querySelector('#OBHTML-editor').value;
    } catch {
      return '';
    }
  }

  textEditorOpen() {
    try {
      const editor = document.querySelector('#OBHTML-scriptEditor');
      if (editor != null) {
        return !!editor.checkVisibility();
      } else {
        return false;
      }
    } catch (error) {if(this.log.error == true) {console.error(error);}; return false;};
  }

  // HTML
  
  insertHTML(args) {
    try {
      document.querySelectorAll(args.selector)[args.index - 1].insertAdjacentHTML(args.position,purify(args.html));
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

  setInnerHTML(args) {
      try {
    if (showRemoveBodyWarning(args.selector))
      document.querySelectorAll(args.selector)[args.index - 1].innerHTML = (purify(args.html));
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

  setInnerHTMLAll(args) {
    try {
    if (showRemoveBodyWarning(args.selector))
    document.querySelectorAll(args.selector).forEach(e => {try {e.innerHTML = purify(args.html);} catch (error) {if(this.log.error == true) console.error(error);}});
    } catch (error) {if(this.log.error == true) console.error(error);}
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
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

  setOuterHTMLAll(args) {
    try {
    if (showRemoveBodyWarning(args.selector))
    document.querySelectorAll(args.selector).forEach(e => {try {e.outerHTML = purify(args.html);} catch (error) {if(this.log.error == true) console.error(error);}});
    } catch (error) {if(this.log.error == true) console.error(error);}
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
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

  setAttributeJSON(args) {
    try {
      const attr = typeof args.json == 'string' ? JSON.parse(args.json) : args.json;
      Object.keys(attr).forEach(a => {
        try {
          document.querySelectorAll(args.selector)[args.index - 1].setAttribute(a,attr[a]);
        } catch (error) {if(this.log.error == true) console.error(error);}
      });
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

  setAttributeAllJSON(args) {
    try {
      const attr = typeof args.json == 'string' ? JSON.parse(args.json) : args.json;
      Object.keys(attr).forEach(a => {
        try {
          document.querySelectorAll(args.selector).forEach(e => {e.setAttribute(a,attr[a])});
        } catch (error) {if(this.log.error == true) console.error(error);}
      });
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

  // set

  removeAttribute(args) {
    try {
      document.querySelectorAll(args.selector)[args.index - 1].removeAttribute(args.attribute)
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

  removeAttributeAll(args) {
    try {
      document.querySelectorAll(args.selector).forEach(e => {
        e.removeAttribute(args.attribute);
      });
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

  // removeAllAttributes(args) {
  //   try {
  //   const element = document.querySelectorAll(args.selector)[args.index - 1];
  //   const attr = getAllAttributes(element);
  //   Object.keys(attr).forEach(a => {
  //     element.removeAttribute(a);
  //   });
  //   } catch (error) {if(this.log.error == true) console.error(error);}
  // }

  // removeAllAttributesAll(args) {
  //   try {
  //   document.querySelectorAll(args.selector).forEach(element => {
  //     const attr = getAllAttributes(element);
  //     Object.keys(attr).forEach(a => {
  //       element.removeAttribute(a);
  //     });
  //   });
  //   } catch (error) {if(this.log.error == true) console.error(error);}
  // }
  
  removeAttributeARRAY(args) {
    try {
      const attr = typeof args.json == 'string' ? JSON.parse(args.json) : args.json;
      attr.forEach(a => {
        try {
          document.querySelectorAll(args.selector)[args.index - 1].removeAttribute(a);
        } catch (error) {if(this.log.error == true) console.error(error);}
      });
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

  removeAttributeAllARRAY(args) {
    try {
      const attr = typeof args.json == 'string' ? JSON.parse(args.json) : args.json;
      attr.forEach(a => {
        try {
          document.querySelectorAll(args.selector).forEach(e => {e.removeAttribute(a)});
        } catch (error) {if(this.log.error == true) console.error(error);}
      });
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

  getAttribute(args) {
    try { return purify(document.querySelectorAll(args.selector)[args.index - 1].getAttribute(args.attribute));}
    catch (error) {
    return ''; if(this.log.error == true) console.error(error);
    }
  }

  getAttributeAll(args) {
    try {
      return getAllAttributes(document.querySelectorAll(args.selector)[args.index - 1]);
    } catch (error) {return '{}'; if(this.log.error == true) console.error(error);}
  }

  getAttributeAllAll(args) {
    try {
    let out = [];
    const elements = document.querySelectorAll(args.selector);
    elements.forEach(e => {
    out.push(getAllAttributes(e));
    });
    return JSON.stringify(out);
    } catch (error) {return '[]'; if(this.log.error == true) console.error(error);}
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
      return JSON.stringify(out);
    } catch (error) {return '[]'; if(this.log.error == true) console.error(error);}
  }

  // classes

  changeClass(args) {
    try {
    // check class if is native array or can be made into array, else split via comma.
    let classes;
    try {classes = Array.isArray(args.class) ? args.class : Array.isArray(JSON.parse(args.class)) ? JSON.parse(args.class) : args.class.split(',')}
    catch {classes = args.class.split(',')};
    const element = document.querySelectorAll(args.selector)[args.index - 1];
    classes.forEach(cl => {
      if (args.change == '0') {
      element.classList.add(cl);
      } else if (args.change == '1') {
      element.classList.remove(cl);
      }
    });
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

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
    });});
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

  getClassList(args) {
    try {
      const element = document.querySelectorAll(args.selector)[args.index - 1]
      let out = []
      element.classList.forEach(cl => {
        out.push(cl);
      });
      return JSON.stringify(out);
    } catch (error) {return '[]';if(this.log.error == true) console.error(error);} 
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
      return JSON.stringify(fullout);
    } catch (error) {return '[]'; if(this.log.error == true) console.error(error);}
  }
  
  countSelector(args) {
    try {
    return document.querySelectorAll(args.selector).length;
    } catch (error) {return 0;if(this.log.error == true) console.error(error);} 
  }

  getValue(args) {
    try {
      return purify(document.querySelectorAll(args.selector)[args.index - 1].value);
    } catch (error) {
      return ''; if(this.log.error == true) console.error(error);
    }
  }

  setValue(args) {
    try {
      if (document.querySelectorAll(args.selector)[args.index - 1]) {
      document.querySelectorAll(args.selector)[args.index - 1].value = args.value;
      } else {if(this.log.error == true) console.error('Selector: "' + args.selector + '" #:' + args.index + ' does not exist.')}
    } catch {
      if(this.log.error == true) console.error(error);
    }
  }

  setValueAll(args) {
    try {
      if (document.querySelectorAll(args.selector)) {
      document.querySelectorAll(args.selector).forEach(e => {try {e.value = args.value;} catch (error) {if(this.log.error == true) console.error(error);}});
      } else {console.error('No elements matching selector: "' + args.selector + '" exist.')}
    } catch (error) {if(this.log.error == true) console.error(error);}
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
      return !!e.checked;
      }
    } catch (error) {return false; if(this.log.error == true) console.error(error);}
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
    } catch (error) {return false; if(this.log.error == true) console.error(error);}
  }

  checkStatus(args) {
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
      return !!e.checked;
      }
    } catch (error) {return false; if(this.log.error == true) console.error(error);}
  }

  checkStatusAny(args) {
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
    } catch (error) {return false; if(this.log.error == true) console.error(error);}
  }

  elementDBLClickedStatus(args) {
    try {
      if (args.click == '0') {
      return JSON.parse(getAllAttributes(mouse.click))[args.attribute] ?? '';
      } else if (args.click == '1') {
      return JSON.parse(getAllAttributes(mouse.dblClick))[args.attribute] ?? '';
      } else if (args.click == '2') {
      return JSON.parse(getAllAttributes(mouse.hover))[args.attribute] ?? ''; 
      }
    } catch (error) {return ''; if(this.log.error == true) console.error(error);}
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
    } catch (error) {return '{}'; if(this.log.error == true) console.error(error);}
  }

  matches(args) {
    try {
      return !!document.querySelectorAll(args.selector)[args.index - 1].matches(args.selectorQuery);
    } catch (error) {return 'false'; if(this.log.error == true) console.error(error);}
  }

  matchesAny(args) {
    try {
      let matches = 0;
      const elements = document.querySelectorAll(args.selector);
      for (let e = 0; e < elements.length & matches < 1;e++) {
        if (elements[e].matches(args.selectorQuery)) {
          matches ++;
        }
      };
      return !!matches > 0;
    } catch (error) { if(this.log.error == true) {console.error(error)};return 'false';}
  }

  checkMatching(args) {
    try {
      if (!!document.querySelectorAll(args.selector).length > 0) {
        return !!document.querySelectorAll(args.selector)[args.index - 1].matches(args.selectorQuery);
      } else {
        return false;
      }
    } catch (error) {if(this.log.error == true) {console.error(error); return false;};};
  }

  checkMatchingAny(args) {
    try {
      let matches = 0;
      const elements = document.querySelectorAll(args.selector);
      for (let e = 0; e < elements.length & matches < 1;e++) {
        if (elements[e].matches(args.selectorQuery)) {
          matches ++;
        }
      };
      return !!matches > 0;
    } catch (error) { if(this.log.error == true) {console.error(error)};return 'false';}
  }

  focusBlur(args) {
    try {
      const e = document.querySelectorAll(args.selector)[args.index - 1];
      if (args.type == 'focus') {
      e.focus();
      } else {
      e.blur();
      }
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

  showHide(args) {
    try {
      const e = document.querySelectorAll(args.selector)[args.index - 1]; 
      e.hidden = args.type == 'hide';
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

  showHideAll(args) {
    try {
      const bool = args.type == 'hide';
      const e = document.querySelectorAll(args.selector);
      e.forEach(e => {e.hidden = bool;});
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

  clickElement(args) {
    try {
      document.querySelectorAll(args.selector)[args.index - 1].click();
    } catch (error) {if(this.log.error == true) console.error(error)}
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
    } catch (error) {return ''; if(this.log.error == true) console.error(error)}
  }

  getMouseDown() {
    try {
      return !!document.querySelector('html').matches(':hover:active');
    } catch (error) {return false; if(this.log.error == true) console.error(error);}
  }

  getMouseData(args) {
    try {
      if (args.value == 0) {
        return mouse.page.x;
      } else {
        return mouse.page.y;
      }
    } catch (error) {return '0'; if(this.log.error == true) console.error(error);}
  }

  getMouseDataElement(args) {
    try {
      const element = document.querySelectorAll(args.selector)[args.index - 1].getBoundingClientRect();
      if (args.value == '0') {
      return clamp(map(mouse.page.x,element.left,element.left + element.width,0,element.width),0,element.width);
      } else {
      return clamp(map(mouse.page.y,element.top,element.top + element.height,0,element.height),0,element.height);
      }
    } catch (error) {return '0'; if(this.log.error == true) console.error(error);}
  }

  sanitize(args) {
    try {
      return purify(args.input);
    } catch (error) {
      if(this.log.error == true) {console.error(error);}
      // TODO 🤔
      // Should this return the input string?
      return '';
    }
  }

  sanitizeText(args) {
    try {
      return purifyText(args.input);
    } catch (error) {if(this.log.error == true) {console.error(error);};
      // TODO
      return '';
    };
  }

  setTitle(args) {
    try {
      document.title = args.title;
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

  getTitle() {
    return ''+document.title;
  }

  getOGTitle() {
    return ogTitle;
  }

  setIcon(args) {
    try {
      changeFavicon(args.url);
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

  getIcon() {
    try {
      const icon = document.head.querySelector('#dynamic-favicon').href;
      return !!icon ? icon : '';
    } catch (error) {return ''; if(this.log.error == true) console.error(error)}
  }

  getBrowserInfo() {
    try {
      const out = {};
      try {out['userAgent'] = window.navigator.userAgent;} catch (error) {if (this.error) {console.error(error);};};
      try {out['brands'] = window.navigator.userAgentData.brands;} catch (error) {if(this.log.error == true) {console.error(error);};};
      return JSON.stringify(out);;
    } catch (error) {if(this.log.error == true) {console.error(error);}; return '';};
  }

  // CSS

  // StyleSheets
  setStyleSheet(args) {
    args.id = getSafeId(args.id);
    const id = `OB-StyleSheets-`+args.id;;
    try {
    document.querySelectorAll(`#`+id+``).forEach((element) => (element).remove());
    } catch (error) {if(this.log.error == true) console.error(error);}
    try {
    const sheet = document.createElement('style');
    sheet.id = id;
    sheet.innerText = purifyText(``+args.css);
    document.head.insertAdjacentElement('beforeend',sheet);
    this.styleSheets[args.id] = purifyText(''+args.css);
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

  removeStyleSheet(args) {
    args.id = getSafeId(args.id);;
    const id = `#OB-StyleSheets-`+args.id;
    try {
      document.querySelectorAll(id).forEach((element) => (element).remove())
      delete this.styleSheets[args.id];
    } catch (error) {}
  }

  removeAllStyleSheets() {
    const ids = Object.keys(this.styleSheets);
    try {
    ids.forEach(id => {
      try {
      document.querySelectorAll(`#OB-StyleSheets-`+getSafeId(id)+``).forEach(obj => obj.remove());
      delete this.styleSheets[id];
    } catch {}
    });
    this.styleSheets = Object.create(null);
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

  getStyleSheets(args) {
    try {
        return JSON.stringify(Object.keys(this.styleSheets)) ?? '[]';
      } catch (error) {if(this.log.error == true) console.error(error); return '';}
  }

  importStyleSheets(args) {
    try {
      //if (args.input == '' | args.input == null | args.input == '{}' & !vm.runtime.isPackaged & !confirm.importStyleSheets ? confirm.importStyleSheets = window.confirm('Importing StyleSheets from an empty string\nwill erase all currently stored styles.\n\nThis warning will not show while packaged.\n\nDo you wish to procced?') : true)
      if (typeof JSON.parse(args.input) == 'object') {
        const sheets = Object.assign(this.styleSheets,JSON.parse(args.input));
        Object.keys(sheets).forEach(sheet => {
          this.setStyleSheet({'id':sheet,'css':sheets[sheet]});
        });
      }
    } catch (error) {console.error(error);}
  }

  exportStyleSheets() {
    try {
      return JSON.stringify(this.styleSheets);
    } catch (error) { if(this.log.error == true) console.error(error);return '{}';}
  }

  getSpecificStyleSheet(args) {
    try {
      args.id = getSafeId(args.id);
      return purifyText(this.styleSheets[args.id]) ?? '';
    } catch (error) { if(this.log.error == true) console.error(error); return '';}
  }

  getSafeStyleSheetId(args) {
    return getSafeId(args.id);
  }
  //

  // External CSS

  importStyleSheetFromUrl(args) {
    try {
      if (showExternalStyleSheetWarning(args.url)) {
        args.id = getSafeId(args.id);
        if (Object.keys(this.externalStyleSheets).includes(args.id)) {
          this.removeExternalStyleSheet({id:args.id});
        }
        const link = document.createElement('link');
        link.id = 'OBHTML-EXTERNAL-CSS-'+args.id;
        link.classList.add('OBHTML-EXTERNAL-CSS');
        link.rel = 'stylesheet';
        link.href = args.url;
        this.externalStyleSheets[args.id] = link;
        document.head.insertAdjacentElement('beforeend',link);
      }
    } catch (error) {if(this.log.error == true) {console.error(error);};};
  }

  removeExternalStyleSheet(args) {
    try {
      args.id = getSafeId(''+args.id);
      if (Object.keys(this.externalStyleSheets).includes(args.id)) {
        this.externalStyleSheets[args.id].remove();
        delete this.externalStyleSheets[args.id];
      }
    } catch (error) {if(this.log.error == true) {console.error(error);};};
  }

  removeAllExternalStyleSheets() {
    try {
      Object.keys(this.externalStyleSheets).forEach(sheet => {
        this.externalStyleSheets[sheet].remove();
        delete this.externalStyleSheets[sheet];
      });
      this.externalStyleSheets = {};
      document.querySelectorAll('.OBHTML-EXTERNAL-CSS').forEach(element => {
        element.remove();
      });
    } catch (error) {if(this.log.error == true) {console.error(error);};};
  }

  getExternalStyleSheets() {
    try {
      return JSON.stringify(Object.keys(this.externalStyleSheets));
    } catch (error) {if(this.log.error == true) {console.error(error);}; return '[]'};
  }

  // Individual Styles
  setStyle(args) {
    try {
      document.querySelectorAll(args.selector)[args.index - 1].style[args.style] = purifyText(args.value);
    } catch (error) {if(this.log.error == true) console.error(error)}
  }

  setStyleAll(args) {
    try {
      document.querySelectorAll(args.selector).forEach((element) => {
        (element).style[args.style] = purifyText(args.value);
      });
    } catch (error) {if(this.log.error == true) console.error(error);}
  }

  getStyle(args) {
    try {
      return purifyText(document.querySelectorAll(args.selector)[args.index - 1].style[args.style]);
    } catch {
      return '';
    }
  }

  getStyleAll(args) {
    try {
      let outStyles = [];
      document.querySelectorAll(''+args.selector).forEach(element => {
        outStyles.push(purifyText(element.style[''+args.style]));
      });
      return JSON.stringify(outStyles);
    } catch (error) {if(this.log.error == true) {console.error(error);}; return '';};
  }

  checkImportance(args) {
    try {
    return !!document.querySelectorAll(args.selector)[args.index - 1].style[args.style].trim().endsWith('!important');
    } catch (error) {
      if(this.log.error == true) {
        console.error(error);
      }
      return 'false';
    }
  }
  //

  // Custom Functions

  checkFunction(args) {
    if (this.currentFunction == args.function & this.currentFunction != null) {
      this.currentFunction = null;
      return true;
    } else {
      return false;
    }
  }

  functionChecked(args) {
    if (this.currentFunctionCheck == args.function & this.currentFunctionCheck != null) {
      this.currentFunctionCheck = null;
      return true;
    } else {
      return false;
    }
  }

  getFunctionArgs(args) {
    const out = ''+this.functions[args.function];
    return out == 'undefined' ? '' : out;
  }



  // Buttons

  Info() {
  alert(` - OBhtml: MIT Licence\n\n - DOMPurify: Apache license 2.0 and Mozilla Public License 2.0\n\n - Due to security concerns: this extension uses DOMPurify to sanitize injected html.`)
  }

  Selectors() {
  alert(`This extension uses selectors to get elements from the page.\n\nIt also adds [Scratch="canvas"] to the app canvas so you can confidentally select it.\n\nIf you are unsure what selectors are, you should probably look it up first.\n\nIf you're offline or lazy you can reference this:\n\n".className" references an element's class\n"#Id" it's id\nand you can also reference it's tag directly: \n"div" = "<div></div>"\n\n You can reference attributes like: [attribute] or [attribute="value"].\n\nPlease use responsibly. (:`)
  }

  onlineWarning() {
  alert(`Warning!\nUsing this extension on projects that have online functionality is highly discouraged!\n\nFor the protection of users, any inputs that are sent or received need to be thouroughly sanitized!\n\nWhile the built in method may do this automatically, the best way to prevent attacks is to not allow connection at all.\n\nI (Otterboing) am definitely not a security expert, so this extension is probably a hazard and should be treated as such.\n\nI am not responsible for any problems that occur. 😊`)
  }

  functionInfo() {
    alert(`Functions can be added to elements with the function attribute.\nYou can give them arguments with the args attribute.\n\nExample:\n\n<button function="doThis" args="button1">Button1</button>`);
  }

  styleSheetsInfo() {
    alert(`StyleSheet ids can not contain spaces or any symbols besides "-" or "_".\n\nSpaces will be replaced with - and all other banned characters will be replaced by their character code.\n\nThis shouldn't cause you any trouble really since it automatically filters these out.\n\nThough if you're using json to set and parse your stylesheets, please use the (Get safe StyleSheet id) block.\n\nAllowed Characters:\n\n`+JSON.stringify(id_allowed_characters));
  }

  externalCSSInfo() {
    alert(`External StyleSheets are added via the <link> element, not by fetching the text content of the url.\n\nDue to this they are not stored with the rest of the stylesheets, nor can we view their text content.\n\nUse the Network/fetch extension to view external files. \n(Also to verify if they exist since this doesn't do that either.) \n\nCss imported from external sources may open up you or your users to XSS attacks if using certain browsers, Please only use sources you own or trust.\n\nNote:\nSome sources may be blocked due to CORS, this extension will not bypass that, you will need to find another way.`)
  }

  sanitizeNote() {
    alert(`All inputs in this extension are already sanitized.\n\nThese blocks exist for other extensions that take or output html that you might want to sanitize.\n\nSuch an example is markedInTurbowarp by me!\n\nhttps://github.com/otterboing/Otterboings-Turbowarp-Extensions/blob/main/Extensions/markedInTurbowarp.js`)
  }

  ApacheLicence() {
  Scratch.openWindow('https://raw.githubusercontent.com/cure53/DOMPurify/refs/heads/main/LICENSE');
  }
  MozillaPublicLicence() {
  Scratch.openWindow('https://raw.githubusercontent.com/cure53/DOMPurify/refs/heads/main/LICENSE-MPL');
  }
  
}
Scratch.extensions.register(new OBhtml());

})(Scratch);