(function(e){function t(t){for(var a,s,o=t[0],u=t[1],p=t[2],c=0,l=[];c<o.length;c++)s=o[c],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&l.push(i[s][0]),i[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(l.length)l.shift()();return r.push.apply(r,p||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var p=0;p<o.length;p++)t(o[p]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},"11aa":function(e,t,n){"use strict";n("671d")},2:function(e,t){},"21bb":function(e,t,n){"use strict";n("2dad")},"2dad":function(e,t,n){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("8bbf"),i=n.n(a),r=n("f23d"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],u=(n("5c0b"),n("2877")),p={},d=Object(u["a"])(p,s,o,!1,null,null,null),c=d.exports,l=n("6389"),y=n.n(l),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("github-link"),n("a-layout",[n("a-layout-header",[n("a-row",{staticClass:"project-name"},[e._v("NFT-Parser-0x01")]),n("a-row",{staticClass:"project-description"},[e._v("基本款")])],1),n("a-layout-content",[n("a-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[n("a-col",{attrs:{span:16,offset:4}},[n("a-input-search",{attrs:{size:"large","allow-clear":""},on:{search:e.fetchNFT},model:{value:e.addr,callback:function(t){e.addr=t},expression:"addr"}},[n("a-button",{attrs:{slot:"enterButton",type:"primary",disabled:!e.searchEnabled},slot:"enterButton"},[e._v(" 获取 NFT! ")])],1)],1)],1),e.showSlides?n("a-row",{staticClass:"token-list",attrs:{type:"flex",justify:"space-between",align:"middle"}},[n("a-col",{attrs:{span:16,offset:4}},[n("a-carousel",{attrs:{arrows:""}},[n("div",{staticClass:"custom-slick-arrow",staticStyle:{left:"10px",zIndex:"1"},attrs:{slot:"prevArrow"},slot:"prevArrow"},[n("a-icon",{attrs:{type:"left-circle"}})],1),n("div",{staticClass:"custom-slick-arrow",staticStyle:{right:"10px"},attrs:{slot:"nextArrow"},slot:"nextArrow"},[n("a-icon",{attrs:{type:"right-circle"}})],1),e._l(e.pageCount,(function(t){return n("div",{key:t},[n("a-row",e._l(e.pagedTokens[t-1],(function(a,i){return n("a-col",{key:(t-1)*e.eachPageSlide+i,staticClass:"token-card",attrs:{span:24/e.eachPageSlide}},[n("token-card",{attrs:{token:e.pagedTokens[t-1][i]}})],1)})),1)],1)}))],2)],1)],1):e._e()],1),n("a-layout-footer")],1)],1)},m=[],b=n("1da1"),v=(n("96cf"),n("fb6a"),n("b64b"),n("99af"),n("d3b7"),n("99e5")),h="https://elixir.leeduckgo.com/moonbeam",g=new v(h),T=g,w=[{inputs:[{internalType:"string",name:"name_",type:"string"},{internalType:"string",name:"symbol_",type:"string"},{internalType:"address",name:"governance_",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"governance",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"receiver",type:"address"},{internalType:"string",name:"tokenURI",type:"string"}],name:"mintNft",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"ownedTokens",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],k="0x962c0940d72E7Db6c9a5F81f1cA87D8DB2B82A23",x=1281,C="0xB84DF36e58a31f98d6294420569c365e8e1acaCd",_=[{constant:!0,inputs:[{name:"key",type:"string"}],name:"getEvidenceByKey",outputs:[{name:"",type:"string"},{name:"",type:"address[]"},{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"}],name:"addSignatures",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"index",type:"uint256"}],name:"getSigner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"getEvidence",outputs:[{name:"",type:"string"},{name:"",type:"address[]"},{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"verify",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getSigners",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"evi",type:"string"}],name:"newEvidence",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"key",type:"string"},{name:"evi",type:"string"}],name:"newEvidenceByKey",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getSignersSize",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"evidenceSigners",type:"address[]"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"addr",type:"address"}],name:"newEvidenceEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"addr",type:"address"},{indexed:!1,name:"key",type:"string"}],name:"newEvidenceEventWithKey",type:"event"}],M="0xB942FA2273C7Bce69833e891BDdFd7212d2dA415",O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"token-card"},[n("a-card",{attrs:{title:e.evidenceKey}},[n("div",{staticClass:"nft-img"},[n("img",{attrs:{src:e.tokenUri}})]),n("div",{staticClass:"nft-extra"},[n("span",[e._v("名称：")]),n("span",[e._v(e._s(e.extra.name))])]),n("div",{staticClass:"nft-extra"},[n("span",[e._v("描述：")]),n("span",[e._v(e._s(e.extra.description))])]),n("div",{staticClass:"nft-extra"},[n("span",[e._v("链接：")]),"暂无"!==e.extra.url?n("a",{attrs:{href:e.extra.url}},[e._v(e._s(e.extra.url))]):n("span",[e._v("暂无")])]),n("div",{staticClass:"nft-extra"},[n("span",[e._v("生效时间：")]),n("span",[e._v(e._s(e.extra.effective_date))])]),n("div",{staticClass:"nft-extra"},[n("span",[e._v("过期时间：")]),n("span",[e._v(e._s(e.extra.expiration_date))])])])],1)},S=[],I=(n("b0c0"),n("a4d3"),n("e01a"),n("5a0c")),P={name:"TokenCard",props:{token:Object},data:function(){return{evidenceKey:null,tokenUri:null,extra:{name:null,description:null,url:null,effective_date:null,expiration_date:null,gene:null}}},mounted:function(){this.normalize()},methods:{normalize:function(){if(this.evidenceKey=this.token.evidenceKey,this.tokenUri=this.token.tokenUri,this.token.evidence[0]){var e=JSON.parse(this.token.evidence[0].replaceAll("'",'"'));this.extra={name:this.formatString(e.name),description:this.formatString(e.description),url:this.formatString(e.url),effective_date:this.formatTime(e.effective_date),expiration_date:this.formatTime(e.expiration_date),gene:this.formatString(e.gene)}}else this.extra={name:"暂无",description:"暂无",url:"暂无",effective_date:"暂无",expiration_date:"暂无",gene:"暂无"}},formatString:function(e){return e||"暂无"},formatTime:function(e){return e?"forever"===e?"永久有效":I(e).isValid()?I(1e3*e).format("YYYY-MM-DD HH:mm:ss"):"时间格式错误":"暂无"}}},F=P,j=(n("11aa"),Object(u["a"])(F,O,S,!1,null,null,null)),B=j.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"github-corner",attrs:{href:"https://github.com/WeLightProject/NFT-Parser-0x01","aria-label":"View source on Github"}},[n("svg",{staticStyle:{fill:"#000000",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[n("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),n("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),n("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},E=[],N={name:"GithubLink"},U=N,K=(n("ba13"),Object(u["a"])(U,A,E,!1,null,"1a734000",null)),L=K.exports,$={name:"Home",components:{GithubLink:L,TokenCard:B},data:function(){return{defaultParams:{erc721_addr:k,addr:C,chain_id:x,evidence_addr:M},erc721_addr:null,addr:null,chain_id:null,evidence_addr:null,erc721Contract:null,evidenceContract:null,tokens:[],eachPageSlide:3,showSlides:!1}},computed:{tokenCount:function(){return this.tokens.length},pageCount:function(){return Math.ceil(this.tokenCount/this.eachPageSlide)},pagedTokens:function(){for(var e=[],t=0;t<this.pageCount;t++)e.push(this.tokens.slice(t*this.eachPageSlide,(t+1)*this.eachPageSlide));return e},searchEnabled:function(){return this.addr.length>0}},created:function(){this.checkQueryInUrl(),this.initContracts(),this.fetchNFT()},watch:{$route:function(e,t){(t.query.addr||t.query.erc721_addr||e.query.addr||e.query.erc721_addr)&&(this.tokens=[],this.checkQueryInUrl(),this.fetchNFT())}},methods:{checkQueryInUrl:function(){for(var e=Object.keys(this.defaultParams),t=0;t<e.length;t++)this.$route.query[e[t]]?this[e[[t]]]=this.$route.query[e[t]]:this[e[t]]=this.defaultParams[e[t]];this.chain_id=+this.chain_id},initContracts:function(){this.erc721Contract=new T.eth.Contract(w,this.erc721_addr),this.evidenceContract=new T.eth.Contract(_,this.evidence_addr)},fetchNFT:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,a,i,r,s,o,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.searchEnabled){t.next=2;break}return t.abrupt("return");case 2:return e.showSlides=!1,e.tokens=[],t.prev=4,t.next=7,e.asyncBalanceOf(e.addr);case 7:if(n=t.sent,0!==+n){t.next=11;break}return e.infoOnZeroTokens(),t.abrupt("return");case 11:a=0;case 12:if(!(a<n)){t.next=20;break}return t.next=15,e.asyncTokenOfOwnerByIndex(e.addr,a);case 15:i=t.sent,e.tokens.push({tokenId:parseInt(i)});case 17:a++,t.next=12;break;case 20:r=0;case 21:if(!(r<e.tokens.length)){t.next=35;break}return t.next=24,e.asyncTokenURI(e.tokens[r].tokenId);case 24:return s=t.sent,e.tokens[r].tokenUri=s,o="".concat(x,":").concat(e.erc721_addr,":").concat(e.tokens[r].tokenId),e.tokens[r].evidenceKey=o,t.next=30,e.asyncGetEvidenceByKey(o);case 30:u=t.sent,e.tokens[r].evidence=u;case 32:r++,t.next=21;break;case 35:e.showSlides=!0,t.next=41;break;case 38:t.prev=38,t.t0=t["catch"](4),t.t0.message.indexOf("invalid address")>-1?e.errorOnInvalidNFTAddress():console.log(t.t0);case 41:case"end":return t.stop()}}),t,null,[[4,38]])})))()},asyncBalanceOf:function(e){var t=this;return new Promise((function(n,a){t.erc721Contract.methods.balanceOf(e).call((function(e,t){e&&a(e),n(t)}))}))},asyncTokenOfOwnerByIndex:function(e,t){var n=this;return new Promise((function(a,i){n.erc721Contract.methods.tokenOfOwnerByIndex(e,t).call((function(e,t){e&&i(e),a(t)}))}))},asyncTokenURI:function(e){var t=this;return new Promise((function(n,a){t.erc721Contract.methods.tokenURI(e).call((function(e,t){e&&a(e),n(t)}))}))},asyncGetEvidenceByKey:function(e){var t=this;return new Promise((function(n,a){t.evidenceContract.methods.getEvidenceByKey(e).call((function(e,t){e&&a(e),n(t)}))}))},infoOnZeroTokens:function(){this.$notification.info({message:"注意！",description:"该地址下没有 NFT 资源"})},errorOnInvalidNFTAddress:function(){this.$notification.error({message:"注意！",description:"NFT 地址无效，请检查后重新查询"})}}},R=$,D=(n("21bb"),Object(u["a"])(R,f,m,!1,null,null,null)),q=D.exports;i.a.use(y.a);var z=[{path:"/",name:"Home",component:q}],G=new y.a({routes:z}),V=G,H=n("5880"),Y=n.n(H);i.a.use(Y.a);var Z=new Y.a.Store({state:{},mutations:{},actions:{},modules:{}});n("202f");i.a.config.productionTip=!1,i.a.use(r["a"]),new i.a({router:V,store:Z,render:function(e){return e(c)}}).$mount("#app")},5880:function(e,t){e.exports=Vuex},"5c0b":function(e,t,n){"use strict";n("9c0c")},6:function(e,t){},6389:function(e,t){e.exports=VueRouter},"671d":function(e,t,n){},7:function(e,t){},7624:function(e,t,n){"use strict";n.r(t);var a=n("f942"),i=n.n(a);n.d(t,"CloseCircleFill",(function(){return i.a}));var r=n("44b9"),s=n.n(r);n.d(t,"LeftCircleOutline",(function(){return s.a}));var o=n("e150"),u=n.n(o);n.d(t,"RightCircleOutline",(function(){return u.a}))},8:function(e,t){},"8bbf":function(e,t){e.exports=Vue},9:function(e,t){},"9c0c":function(e,t,n){},ba13:function(e,t,n){"use strict";n("d826")},c32d:function(e,t){e.exports=moment},d826:function(e,t,n){}});