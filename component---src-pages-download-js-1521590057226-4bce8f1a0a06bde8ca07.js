webpackJsonp([52357358931610],{91:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){return n.raw=e,n}e.__esModule=!0;var a=r([""],[""]),i=r(["\n  text-align: center;\n  font-size: 34px;\n  font-weight: bold;\n"],["\n  text-align: center;\n  font-size: 34px;\n  font-weight: bold;\n"]),l=r(["\n  margin-top: 130px;\n  min-height: 200px;\n\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n\n  justify-content: space-around;\n"],["\n  margin-top: 130px;\n  min-height: 200px;\n\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n\n  justify-content: space-around;\n"]),d=r(["\n  flex-basis: 200px;\n  text-align: center;\n  text-decoration: none;\n  transition: all 0.3s;\n\n  &:hover {\n    border-radius: 12px;\n    transform: scale(1.05);\n    background: rgba(225, 241, 255, 0.3);\n  }\n"],["\n  flex-basis: 200px;\n  text-align: center;\n  text-decoration: none;\n  transition: all 0.3s;\n\n  &:hover {\n    border-radius: 12px;\n    transform: scale(1.05);\n    background: rgba(225, 241, 255, 0.3);\n  }\n"]),u=r(["\n  height: 150px;\n  width: 100%;\n\n  background: url(",") no-repeat center center;\n\n  "," "," "," "," ",";\n"],["\n  height: 150px;\n  width: 100%;\n\n  background: url(",") no-repeat center center;\n\n  "," "," "," "," ",";\n"]),p=r(["\n  height: 72px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  height: 72px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]),c=r(["\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  outline: none\n  cursor: pointer;\n  \n  padding: 9px 35px 15px 30px;\n  color: #fff;\n  font-weight: bold;\n\n  "," "," "," ",";\n"],["\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  outline: none\n  cursor: pointer;\n  \n  padding: 9px 35px 15px 30px;\n  color: #fff;\n  font-weight: bold;\n\n  "," "," "," ",";\n"]),x=r(["\n  margin: 0px;\n  padding: 0px;\n  color: #bfc6ce;\n  font-weight: bold;\n"],["\n  margin: 0px;\n  padding: 0px;\n  color: #bfc6ce;\n  font-weight: bold;\n"]),f=t(1),s=o(f),g=t(5),b=o(g),m="win",w="osx",h="linux_rpm",k="linux",y="pip",v=function(){},E=function(n){var e=n.id,t=n.link,o=n.icon,r=n.renderDownload,a=n.text;n.onClick;return s.default.createElement(C,{href:t,target:"_blank",onClick:function(n){return"#"===t&&n.preventDefault()}},s.default.createElement(P,{src:"/icons/"+o+".png",type:e}),s.default.createElement(j,null,r?r():s.default.createElement(z,{type:e},a)))};e.default=function(n){var e=n.downloadOSX,t=n.downloadLinux,o=n.downloadLinuxRPM,r=n.downloadWin;return s.default.createElement(_,null,s.default.createElement(M,null,"Please select your operating system"),s.default.createElement(L,null,s.default.createElement(E,{onClick:v,id:w,link:e,icon:"osx",text:"OS X"}),s.default.createElement(E,{onClick:v,id:k,link:t,icon:"linux",text:"Linux DEB"}),s.default.createElement(E,{onClick:v,id:h,link:o,icon:"linux_rpm",text:"Linux RPM"}),s.default.createElement(E,{onClick:v,id:m,link:r,icon:"windows",text:"Windows"}),s.default.createElement(E,{onClick:v,id:y,link:"#",icon:"pip",renderDownload:function(){return s.default.createElement(D,null,"$ pip install dvc")}})))};var _=b.default.div(a),M=b.default.h3(i),L=b.default.section(l),C=b.default.a(d),P=b.default.div(u,function(n){return n.src},function(n){return n.type===m&&"background-position-x: 40px;"},function(n){return n.type===w&&" background-position-x: 50px;"},function(n){return n.type===k&&"background-position-x: 50px;"},function(n){return n.type===h&&"background-position-x: 50px;"},function(n){return n.type===y&&"background-position-x: 40px;"}),j=b.default.div(p),z=b.default.button(c,function(n){return n.type===m&&"\n    text-shadow: 0px -1px 0px #008abf;\n    background-image: url('/buttons/windows_button.png');\n  "},function(n){return n.type===w&&"\n    text-shadow: 0px -1px 0px #054086;\n    background-image: url('/buttons/windows_button.png');\n  "},function(n){return n.type===k&&"\n    color: #323232;\n    text-shadow: 0px -1px 0px #ffffff;\n    background-image: url('/buttons/linux_button.png');\n  "},function(n){return n.type===h&&"\n    text-shadow: 0px -1px 0px #607a8b;\n    background-image: url('/buttons/linux_rpm_button.png');\n  "}),D=b.default.p(x);n.exports=e.default},452:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){return n.raw=e,n}e.__esModule=!0,e.query=void 0;var a=r([""],[""]),i=r(["\n  ",";\n  margin-top: 40px;\n  margin-bottom: 20px;\n"],["\n  ",";\n  margin-top: 40px;\n  margin-bottom: 20px;\n"]),l=r(["\n  margin-top: -72px;\n  padding-top: 132px;\n  padding-bottom: 50px;\n  background: url(/hills.png) top center no-repeat;\n\n  @media (max-width: 768px) {\n    background-size: cover;\n  }\n"],["\n  margin-top: -72px;\n  padding-top: 132px;\n  padding-bottom: 50px;\n  background: url(/hills.png) top center no-repeat;\n\n  @media (max-width: 768px) {\n    background-size: cover;\n  }\n"]),d=t(1),u=o(d),p=t(5),c=o(p),x=t(16),f=t(91),s=o(f),g=t(66),b=o(g),m=t(65),w=o(m);e.default=function(n){var e=n.data.site.siteMetadata,t=e.downloadOSX,o=e.downloadLinux,r=e.downloadLinuxRPM,a=e.downloadWin,i=e.twitter,l=e.linkedin,d=e.facebook;return u.default.createElement(h,null,u.default.createElement(k,null,u.default.createElement(s.default,{downloadOSX:t,downloadLinux:o,downloadLinuxRPM:r,downloadWin:a})),u.default.createElement(y,null,u.default.createElement(b.default,null),u.default.createElement(w.default,{twitter:i,linkedin:l,facebook:d})))};var h=(e.query="** extracted graphql fragment **",c.default.div(a)),k=c.default.div(i,x.container),y=c.default.div(l)}});
//# sourceMappingURL=component---src-pages-download-js-1521590057226-4bce8f1a0a06bde8ca07.js.map