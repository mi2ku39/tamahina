(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{168:function(t,n,e){var content=e(173);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("e71bee56",content,!0,{sourceMap:!1})},169:function(t,n,e){var content=e(177);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("c67ed3c2",content,!0,{sourceMap:!1})},172:function(t,n,e){"use strict";var r=e(168);e.n(r).a},173:function(t,n,e){(n=e(26)(!1)).push([t.i,".profile-name{font-weight:700;font-size:2rem}.profile-socials{font-size:1.5rem}.profile-socials a{transition:color .2s}.profile-socials a:link,.profile-socials a:visited{color:#666}.profile-socials a:hover{color:#000}",""]),t.exports=n},175:function(t,n,e){"use strict";var r={name:"DjProfile"},o=(e(172),e(16)),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"d-flex flex-row flex-wrap"},[n("div",{staticClass:"d-flex align-items-center"},[this._t("icon")],2),this._v(" "),n("div",{staticClass:"flex-grow-1 ml-3 d-flex flex-column justify-content-center"},[n("div",{staticClass:"text-hi profile-name"},[this._t("name")],2),this._v(" "),n("div",{staticClass:"profile-socials"},[this._t("social")],2),this._v(" "),n("div",[this._t("poem")],2)])])}),[],!1,null,null,null);n.a=component.exports},176:function(t,n,e){"use strict";var r=e(169);e.n(r).a},177:function(t,n,e){(n=e(26)(!1)).push([t.i,".title-container{font-weight:700;color:#212121;flex-grow:1;border-bottom:2px solid #212121;font-size:2em}@media (min-width:768px){.title-container{border-bottom:none;margin-bottom:0;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;border-right:2px solid #212121;padding:.25em .25em 0 0;font-size:3em}}.title{vertical-align:top}",""]),t.exports=n},178:function(t,n,e){"use strict";var r={name:"VerticalTitleContainer"},o=(e(176),e(16)),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-2 col-12 mb-3 mb-md-0"},[n("div",{staticClass:"d-flex h-100 align-items-stretch"},[n("div",{staticClass:"title-container font-expletus text-left"},[this._t("title")],2)])]),this._v(" "),n("div",{staticClass:"col-12 col-md-10"},[this._t("body")],2)])])}),[],!1,null,null,null);n.a=component.exports},179:function(t,n,e){var content=e(182);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("4ab2fd34",content,!0,{sourceMap:!1})},181:function(t,n,e){"use strict";var r=e(179);e.n(r).a},182:function(t,n,e){(n=e(26)(!1)).push([t.i,".team-tag-container{font-size:.8rem;border-radius:.75rem;height:1.5rem;line-height:1rem;padding:0 6px;font-weight:700;display:flex;align-items:center;justify-content:center}",""]),t.exports=n},183:function(t,n,e){"use strict";var r={name:"TeamTag",props:{red:{type:Boolean,default:!1},white:{type:Boolean,default:!1},blue:{type:Boolean,default:!1}},computed:{style:function(){return{border:this.border,"background-color":this.bgColor,color:this.color}},bgColor:function(){return this.red?"#f44336":this.white?"#FFFFFF":this.blue?"#03A9F4":"#FFFFFF"},border:function(){return this.red?"2px solid #f44336":this.blue?"2px solid #03A9F4":this.white?"2px solid #212121":void 0},label:function(){return this.red?"RED TEAM":this.blue?"BLUE TEAM":(this.white,"WHITE TEAM")},color:function(){return this.red?"#FFFFFF":this.white?"#212121":this.blue?"#FFFFFF":"#212121"}}},o=(e(181),e(16)),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"team-tag-container",style:this.style},[n("div",[this._v("\n    "+this._s(this.label)+"\n  ")])])}),[],!1,null,null,null);n.a=component.exports},211:function(t,n,e){"use strict";(function(t){e(47),e(22),e(23),e(9),e(35);var r=e(17),o=e(13),c=e(82),l=e(178),f=e(175),m=e(183);function d(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}n.a={name:"tmkr04",components:{TeamTag:m.a,DjProfile:f.a,VerticalTitleContainer:l.a},mounted:function(){this.setBackgroundColor("#E3F2FD")},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},Object(o.b)({setBackgroundColor:"setBackgroundColor"})),computed:{fa:function(){return{twitch:c.c,twitter:c.d,soundCloud:c.b}}},head:function(){return{title:"タマクラ4",meta:[{hid:"title",name:"title",content:"タマクラ4 | ヒナクラ"},{hid:"description",name:"description",content:'── DJのタマゴ、出陣 ─── 「またチームバトルってやつしませんか？」という名目でオタクたちが大暴れ！アニクラってなに？って人にオススメの初心者向けノンレギュイベント！#ヒナクラ に参加するオタクが練習をする配信だよアニクラ初見？大丈夫！DJもほぼ初心者！ただし、熱意とセトリは"本物"'},{hid:"og:url",property:"og:url",content:"".concat(t.env.BASE_URL/this.$route.fullPath)},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:title",property:"og:title",content:"タマクラ4"},{hid:"og:image",property:"og:image",content:"".concat(t.env.BASE_URL,"/img/logos/tmkr4_logo.png")},{hid:"og:description",property:"og:description",content:"── DJのヒナ、出陣 ───"}]}}}}).call(this,e(111))},212:function(t,n,e){var content=e(420);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("62217a16",content,!0,{sourceMap:!1})},392:function(t,n,e){t.exports=e.p+"img/4d11.42b40a0.jpeg"},393:function(t,n,e){t.exports=e.p+"img/4d12.6c0c4d9.JPG"},394:function(t,n,e){t.exports=e.p+"img/4d13.583a993.png"},395:function(t,n,e){t.exports=e.p+"img/4d14.ebade8a.jpg"},396:function(t,n,e){t.exports=e.p+"img/4d15.720a28d.jpg"},397:function(t,n,e){t.exports=e.p+"img/4d16.ce5f045.jpg"},398:function(t,n,e){t.exports=e.p+"img/4d17.07041d4.PNG"},399:function(t,n,e){t.exports=e.p+"img/4d18.e033585.jpg"},400:function(t,n,e){t.exports=e.p+"img/4d19.e904d47.png"},401:function(t,n,e){t.exports=e.p+"img/4d21.747ba4e.png"},402:function(t,n,e){t.exports=e.p+"img/4d22.6ab62ce.jpg"},403:function(t,n,e){t.exports=e.p+"img/4d23.37056b8.jpg"},404:function(t,n,e){t.exports=e.p+"img/4d24.93d4bcf.jpg"},405:function(t,n,e){t.exports=e.p+"img/4d25.5309237.png"},406:function(t,n,e){t.exports=e.p+"img/4d26.8d408c4.png"},407:function(t,n,e){t.exports=e.p+"img/4d27.aed4219.jpg"},408:function(t,n,e){t.exports=e.p+"img/4d28.1a0f1b6.jpg"},409:function(t,n,e){t.exports=e.p+"img/4d29.d934fe7.JPG"},410:function(t,n,e){t.exports=e.p+"img/4d31.4a5dccf.png"},411:function(t,n,e){t.exports=e.p+"img/4d32.b240580.JPG"},412:function(t,n,e){t.exports=e.p+"img/4d33.a9a4d9e.jpeg"},413:function(t,n,e){t.exports=e.p+"img/4d34.5c288d3.jpg"},414:function(t,n,e){t.exports=e.p+"img/4d35.4ca3535.jpg"},415:function(t,n,e){t.exports=e.p+"img/4d36.49b6bcf.png"},416:function(t,n,e){t.exports=e.p+"img/4d37.682f01c.jpeg"},417:function(t,n,e){t.exports=e.p+"img/4d38.1361ae5.jpg"},418:function(t,n,e){t.exports=e.p+"img/4d39.d199040.png"},419:function(t,n,e){"use strict";var r=e(212);e.n(r).a},420:function(t,n,e){(n=e(26)(!1)).push([t.i,".tmkr4-shadow-rb{-webkit-filter:drop-shadow(.5em .5em 0 #26c6da);filter:drop-shadow(.5em .5em 0 #26C6DA)}.tmkr4-shadow-rb-sm{-webkit-filter:drop-shadow(.0625em .0625em 0 #e3f2fd);filter:drop-shadow(.0625em .0625em 0 #E3F2FD)}.tmkr4-shadow-lb{-webkit-filter:drop-shadow(-.5em .5em 0 #26c6da);filter:drop-shadow(-.5em .5em 0 #26C6DA)}.tmkr4-shadow-lb-sm{-webkit-filter:drop-shadow(-.0625em .0625em 0 #e3f2fd);filter:drop-shadow(-.0625em .0625em 0 #E3F2FD)}",""]),t.exports=n},435:function(t,n,e){"use strict";e.r(n);var r=e(211).a,o=(e(419),e(16)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("div",{staticClass:"container bg-white fill-right mt-5 tmkr4-shadow-lb slide-in-from-right"},[r("div",{staticClass:"row"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"col-12 text-center"},[r("h1",{staticClass:"text-strong tmkr4-shadow-lb-sm mb-0"},[t._v("\n          開催日時\n        ")]),t._v(" "),r("h2",{staticClass:"text-hi my-0"},[t._v("\n          DAY 1: 1/15 21:30~\n        ")]),t._v(" "),r("h2",{staticClass:"text-hi my-0"},[t._v("\n          DAY 2: 1/16 21:30~\n        ")]),t._v(" "),r("h2",{staticClass:"text-hi my-0"},[t._v("\n          DAY 3: 1/23 21:30~\n        ")]),t._v(" "),r("h1",{staticClass:"font-expletus text-strong tmkr4-shadow-lb-sm mb-0"},[t._v("\n          会場\n        ")]),t._v(" "),r("h2",{staticClass:"text-hi my-0"},[t._v("\n          DAY 1 / DAY 2 / DAY 3 ともに"),r("br"),t._v(" "),r("a",{attrs:{href:"https://www.twitch.tv/tamakura_hinakura",target:"_blank"}},[t._v("\n            Twitch\n            "),r("fa",{attrs:{icon:t.fa.twitch}})],1)]),t._v(" "),r("h1",{staticClass:"font-expletus text-strong tmkr4-shadow-lb-sm mb-0"},[t._v("\n          詳細\n        ")]),t._v(" "),t._m(2)])])]),t._v(" "),r("div",{staticClass:"container bg-white fill-left mt-5 tmkr4-shadow-rb py-3 slide-in-from-right"},[t._m(3),t._v(" "),r("vertical-title-container",{staticClass:"mb-5",scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        DJs\n      ")]},proxy:!0},{key:"body",fn:function(){return[r("div",[r("h1",{staticClass:"font-expletus text-strong"},[t._v("\n            DAY 1\n          ")]),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(392),alt:"堀川 進"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              堀川 進\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{red:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/susumu_horikawa",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              1/21誕生日なの\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(393),alt:"specia"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              specia\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{blue:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/Revaty0421",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              今更自己紹介をします('ω')ノ\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(394),alt:"たっくん"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              たっくん\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{blue:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/mikuta0407",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              いつのまにかさむくなっていて、"),r("br"),t._v("\n              とてもさむいです。\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(395),alt:"TSURU"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              TSURU\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{red:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/Japan_crane0916",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              🚍や🚙で聴いてくれると嬉しい✌\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(396),alt:"ぴろー"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              ぴろー\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{blue:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/pirawwwwwww",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              推しメン、すきだよ...\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(397),alt:"ガイエン"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              ガイエン\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{blue:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/gaien_daigaku",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              今回は僕のヲタク人生を流します\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(398),alt:"Wizary"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              Wizary\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{red:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/wizary_rnd",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              2020を生き延びた皆へおめでとうございます！\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(399),alt:"Cream Soda"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              Cream Soda\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{red:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/sCream_Sodapop",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              敬語を使ってくれるタイプの女の子キャラって...いいですよね\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(400),alt:"塩パセリ"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              塩パセリ\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{blue:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/siopaseri",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              タマクラファイナルシーズン開幕！"),r("br"),t._v("\n              最後まで盛り上がりましょう！\n            ")]},proxy:!0}])})],1)]},proxy:!0}])}),t._v(" "),r("vertical-title-container",{staticClass:"mb-5",scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        DJs\n      ")]},proxy:!0},{key:"body",fn:function(){return[r("div",[r("h1",{staticClass:"font-expletus text-strong"},[t._v("\n            DAY 2\n          ")]),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(401),alt:"John Smith"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              John Smith\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{blue:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/_krym31",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              Pとある魔術の禁書目録おすすめです\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(402),alt:"ちゃい"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              ちゃい\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{red:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/drag_chai",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              イベントまで生きてるといいね\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(403),alt:"ルリトラ"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              ルリトラ\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{red:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/murabitoA3714",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              ねたぎれ\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(404),alt:"DJ GOKUDO"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              DJ GOKUDO\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{blue:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/maag2nd",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              次回、ボーナス確定\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(405),alt:"TMTMN"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              TMTMN\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{red:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/tomatoman714",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              DDJ-800に機種変更しました♡\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(406),alt:"OKAZ"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              OKAZ\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{red:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/Not_Eat_Okaz",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              何しようか考えてます。ワクワク。\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(407),alt:"甘納豆"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              甘納豆\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{red:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/AmaNato0",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              アゲるプレイングしかしたくないです。\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(408),alt:"DJ SunShine"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              DJ SunShine\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{blue:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/DJ_SS_3015",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              一緒に暴れ狂いましょう\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(409),alt:"DAイチ"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              DAイチ\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{blue:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/ddd_aaa_1",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              お酒\n            ")]},proxy:!0}])})],1)]},proxy:!0}])}),t._v(" "),r("vertical-title-container",{staticClass:"mb-5",scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        DJs\n      ")]},proxy:!0},{key:"body",fn:function(){return[r("div",[r("h1",{staticClass:"font-expletus text-strong"},[t._v("\n            DAY 3\n          ")]),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(410),alt:"さけとば"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              さけとば\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{red:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/s__toba",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              日常系はいいぞ\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(411),alt:"Shock_Pan"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              Shock_Pan\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{red:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/mgn_shock_pan",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v('\n              "でもタマクラってなんだ...?'),r("br"),t._v('\n              タマオフリベンジ、がんばります。"\n            ')]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(412),alt:"こうやん"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              こうやん\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{red:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/Empty_F1fth",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              ギターぎゅいーん\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(413),alt:"じっつ"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              じっつ\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{blue:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/jt__1",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              え、開催される頃には虹終わってるんですか？\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(414),alt:"Web担当"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              Web担当\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{blue:""}})],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              この場を借りてのお願いです。"),r("br"),t._v("\n              強いお酒をロックで啜りながら聴くやつなので対応お願いします。\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(415),alt:"謎のアニソンDJ"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              謎のアニソンDJ\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{red:""}})],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              アニソンDJ...できん...ｗｗ\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(416),alt:"ツカタク"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              ツカタク\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{blue:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/tsukataku_s",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              デカDJ兼神絵師目指してます\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(417),alt:"いとま"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              いとま\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{red:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/itoma425",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              完全にネタが尽きました。\n            ")]},proxy:!0}])}),t._v(" "),r("dj-profile",{staticClass:"mb-3",scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{staticClass:"img-icon img-round",attrs:{src:e(418),alt:"EMURACOOL"}})]},proxy:!0},{key:"name",fn:function(){return[t._v("\n              EMURACOOL\n            ")]},proxy:!0},{key:"social",fn:function(){return[r("div",{staticClass:"d-flex align-items-center"},[r("team-tag",{staticClass:"mr-1",attrs:{blue:""}}),t._v(" "),r("div",[r("a",{attrs:{href:"https://twitter.com/OrijinHeathaze",target:"_blank"}},[r("fa",{attrs:{icon:t.fa.twitter}})],1)])],1)]},proxy:!0},{key:"poem",fn:function(){return[t._v("\n              you may pay 1 life and exile a blue card from your rather pay this spell's mana cost. Counter target\n              spell.\n            ")]},proxy:!0}])})],1)]},proxy:!0}])})],1)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"col-12 text-center mb-3 mt-3"},[n("img",{staticClass:"img-fluid",attrs:{src:"/img/logos/tmkr04_logo.png",alt:"タマクラ4"}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-12 text-center"},[e("p",[t._v("\n          ── DJのタマゴ、出陣 ───\n        ")]),t._v(" "),e("p",[t._v("\n          「またチームバトルってやつしませんか？」"),e("br"),t._v("\n          という名目でオタクたちが大暴れ！"),e("br"),t._v(" "),e("br"),t._v("\n          アニクラってなに？って人にオススメの"),e("br"),t._v("\n          初心者向けノンレギュイベント！"),e("br"),t._v(" "),e("a",{attrs:{href:"https://twipla.jp/events/447454",target:"_blank"}},[t._v("#ヒナクラ")]),t._v(" に参加するオタクが練習をする配信だよ"),e("br"),t._v("\n          アニクラ初見？大丈夫！DJもほぼ初心者！"),e("br"),t._v('\n          ただし、熱意とセトリは"本物"'),e("br")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{staticClass:"text-hi mt-0"},[n("a",{attrs:{href:"https://twipla.jp/events/462973",target:"_blank"}},[this._v("\n            twipla\n          ")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"text-center"},[n("h1",{staticClass:"font-expletus text-strong tmkr4-shadow-rb-sm"},[this._v("\n            Members\n          ")])])])])}],!1,null,null,null);n.default=component.exports}}]);