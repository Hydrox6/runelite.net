(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{110:function(e,t,i){"use strict";var n=i(3),a=i(107),s=i(0),r=i(23),o=function(){return Object(s.h)("section",null,Object(s.h)("div",{class:"content-section"},Object(s.h)("footer",null,Object(s.h)("hr",null),"Developed with ",Object(s.h)("i",{class:"fas fa-heart"})," and"," ",Object(s.h)("i",{class:"fas fa-coffee"})," using"," ",Object(s.h)("a",{href:"https://getbootstrap.com/"},"Bootstrap"),","," ",Object(s.h)("a",{href:"https://reactjs.org/"},"React")," and"," ",Object(s.h)("a",{href:"https://fontawesome.com/"},"Font Awesome"),Object(s.h)("a",{href:"".concat(Object(r.b)(),"/atom.xml"),class:"float-right"},Object(s.h)("i",{class:"fas fa-rss"})," Subscribe via RSS"))))};t.a=function(e){var t=e.children,i=e.fullWidth,r=Object(a.a)(e,["children","fullWidth"]);return r.class=r.class?"container "+r.class:"container",r.style=Object(n.a)({},r.style||{},{maxWidth:i?"100%":""}),Object(s.h)("div",Object.assign({},r,{id:"layout"}),t,Object(s.h)(o,null))}},117:function(e,t,i){"use strict";var n=i(36),a=i(37),s=i(39),r=i(38),o=i(40),l=i(0);t.a=function(e){return function(t){return function(i){function c(){return Object(n.a)(this,c),Object(s.a)(this,Object(r.a)(c).apply(this,arguments))}return Object(o.a)(c,i),Object(a.a)(c,[{key:"componentDidMount",value:function(){e(this.props)}},{key:"render",value:function(e){return Object(l.h)(t,e)}}]),c}(l.a)}}},128:function(e,t,i){},130:function(e,t,i){"use strict";i.d(t,"b",function(){return u}),i.d(t,"c",function(){return m});var n=i(2),a=i.n(n),s=i(5),r=i(3),o=i(131),l=i.n(o),c=i(132).keys().sort().reverse().reduce(function(e,t){var n=l()(t);return e.set(n.id.toLowerCase(),function(){return i(224)("./".concat(n.file,".md")).then(function(e){return Object(r.a)({id:n.id,date:n.date,body:e.__content},e)})})},new Map),u=function(e){var t=c.get(e.toLowerCase());return t?t():Promise.resolve({})},m=function(){var e=Object(s.a)(a.a.mark(function e(){var t,i,n,s,r,o,l,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=c.values(),i=!0,n=!1,s=void 0,e.prev=4,r=t[Symbol.iterator]();case 6:if(i=(o=r.next()).done){e.next=17;break}return l=o.value,e.next=10,l();case 10:if(!(u=e.sent).hasOwnProperty("skip")||!u.skip){e.next=13;break}return e.abrupt("continue",14);case 13:return e.abrupt("return",u);case 14:i=!0,e.next=6;break;case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(4),n=!0,s=e.t0;case 23:e.prev=23,e.prev=24,i||null==r.return||r.return();case 26:if(e.prev=26,!n){e.next=29;break}throw s;case 29:return e.finish(26);case 30:return e.finish(23);case 31:return e.abrupt("return",{});case 32:case"end":return e.stop()}},e,null,[[4,19,23,31],[24,,26,30]])}));return function(){return e.apply(this,arguments)}}();t.a=c},131:function(e,t){e.exports=function(e){var t=(e=e.match(/([\w\d-.]+)\.md/)[1]).match(/^(\d{4}-\d{2}-\d{2})-(\d{2}-\d{2})(.*)/);if(!t&&!t[1]&&!t[2]&&!t[3])throw new Error("no ^YYYY-MM-DD-HH-mm date in blog filename");var i=t[1],n=t[2],a=i+t[3],s=(i+"-"+n).split("-");return{date:new Date(Date.UTC(parseInt(s[0],10),parseInt(s[1],10)-1,parseInt(s[2],10),parseInt(s[3],10),parseInt(s[4],10))),id:a,file:e}}},132:function(e,t,i){var n={"./2017-12-13-00-00-New-Site.md":133,"./2017-12-21-00-00-1.2.10-Release.md":134,"./2018-01-12-00-00-1.2.11-Release.md":135,"./2018-01-18-00-00-1.2.12-Release.md":136,"./2018-01-25-00-00-1.2.13-Release.md":137,"./2018-02-01-00-00-1.2.14-Release.md":138,"./2018-02-08-00-00-1.2.15-Release.md":139,"./2018-02-15-00-00-1.2.16-Release.md":140,"./2018-02-22-00-00-1.2.17-Release.md":141,"./2018-03-01-00-00-1.2.18-Release.md":142,"./2018-03-08-00-00-1.2.19-Release.md":143,"./2018-03-15-00-00-1.3.0-Release.md":144,"./2018-03-22-00-00-1.3.1-Release.md":145,"./2018-03-29-00-00-1.3.2-Release.md":146,"./2018-04-05-00-00-1.3.3-Release.md":147,"./2018-04-12-00-00-1.3.4-Release.md":148,"./2018-04-19-00-00-1.3.5-Release.md":149,"./2018-04-26-00-00-1.3.6-Release.md":150,"./2018-05-03-00-00-1.3.7-Release.md":151,"./2018-05-10-00-00-1.3.8-Release.md":152,"./2018-05-15-00-00-RuneLite-threatened-to-shutdown.md":153,"./2018-05-16-00-00-Update-RuneLite-threatened-to-shutdown.md":154,"./2018-05-16-03-00-Update-2-RuneLite-threatened-to-shutdown.md":155,"./2018-05-18-00-00-1.3.9-Release.md":156,"./2018-05-24-00-00-1.4.0-Release.md":157,"./2018-05-25-23-00-Phishing-Attempts.md":158,"./2018-05-31-07-00-1.4.1-Release.md":159,"./2018-06-07-07-00-1.4.2-Release.md":160,"./2018-06-14-07-00-1.4.3-Release.md":161,"./2018-06-21-07-00-1.4.4-Release.md":162,"./2018-06-28-07-00-1.4.5-Release.md":163,"./2018-07-05-07-00-1.4.6-Release.md":164,"./2018-07-12-07-00-1.4.7-Release.md":165,"./2018-07-19-07-00-1.4.8-Release.md":166,"./2018-07-26-07-00-1.4.9-Release.md":167,"./2018-08-02-10-00-1.4.10-Release.md":168,"./2018-08-09-10-00-1.4.11-Release.md":169,"./2018-08-16-10-00-1.4.12-Release.md":170,"./2018-08-23-10-00-1.4.13-Release.md":171,"./2018-08-30-10-00-1.4.15-Release.md":172,"./2018-09-06-10-00-1.4.16-Release.md":173,"./2018-09-13-10-00-1.4.17-Release.md":174,"./2018-09-18-21-00-Worldhopper-disabled.md":175,"./2018-09-20-10-00-1.4.18-Release.md":176,"./2018-09-27-10-00-1.4.19-Release.md":177,"./2018-10-04-10-00-1.4.20-Release.md":178,"./2018-10-11-10-00-1.4.21-Release.md":179,"./2018-10-18-10-00-1.4.22-Release.md":180,"./2018-10-25-10-00-1.4.23-Release.md":181,"./2018-11-01-10-00-1.4.24-Release.md":182,"./2018-11-08-10-00-1.4.25-Release.md":183,"./2018-11-15-10-00-1.4.26-Release.md":184,"./2018-11-16-12-00-1.5.0-Release.md":185,"./2018-11-22-10-00-1.5.1-Release.md":186,"./2018-11-29-10-00-1.5.2-Release.md":187,"./2018-12-06-10-00-1.5.3-Release.md":188,"./2018-12-13-10-00-1.5.4-Release.md":189,"./2018-12-20-10-00-1.5.5-Release.md":190,"./2019-01-03-10-00-1.5.6-Release.md":191,"./2019-01-10-10-00-1.5.7-Release.md":192,"./2019-01-17-10-00-1.5.8-Release.md":193,"./2019-01-24-10-00-1.5.9-Release.md":194,"./2019-01-31-10-00-1.5.10-Release.md":195,"./2019-02-07-10-00-1.5.11-Release.md":196,"./2019-02-14-10-00-1.5.12-Release.md":197,"./2019-02-16-16-00-Launcher-1.6.2-Release.md":198,"./2019-02-21-10-00-1.5.13-Release.md":199,"./2019-02-28-10-00-1.5.14-Release.md":200,"./2019-03-07-10-00-1.5.15-Release.md":201,"./2019-03-14-10-00-1.5.16-Release.md":202,"./2019-03-21-12-00-1.5.17-Release.md":203,"./2019-03-28-10-00-1.5.18-Release.md":204,"./2019-04-11-10-00-1.5.19-Release.md":205,"./2019-04-18-10-00-1.5.20-Release.md":206,"./2019-04-25-10-00-1.5.21-Release.md":207,"./2019-05-03-10-00-1.5.22-Release.md":208,"./2019-05-16-10-00-1.5.23-Release.md":209,"./2019-05-30-10-00-1.5.25-Release.md":210,"./2019-06-06-10-00-1.5.26-Release.md":211,"./2019-06-20-10-00-1.5.27-Release.md":212,"./2019-07-04-10-00-1.5.28-Release.md":213,"./2019-07-18-10-00-1.5.29-Release.md":214,"./2019-08-01-10-00-1.5.30-Release.md":215,"./2019-08-15-10-00-1.5.31-Release.md":216,"./2019-08-16-10-00-Launcher-Release-2.0.0.md":217,"./2019-08-29-10-00-1.5.32-Release.md":218,"./2019-09-12-10-00-1.5.33-Release.md":219,"./2019-09-26-10-00-1.5.34-Release.md":220,"./2019-10-02-10-00-1.5.35-Release.md":221,"./2019-10-17-10-00-1.5.36-Release.md":222,"./2019-10-30-10-00-1.5.37-Release.md":223};function a(e){var t=s(e);return i(t)}function s(e){var t=n[e];if(!(t+1)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return t}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id=132},133:function(e,t){},134:function(e,t){},135:function(e,t){},136:function(e,t){},137:function(e,t){},138:function(e,t){},139:function(e,t){},140:function(e,t){},141:function(e,t){},142:function(e,t){},143:function(e,t){},144:function(e,t){},145:function(e,t){},146:function(e,t){},147:function(e,t){},148:function(e,t){},149:function(e,t){},150:function(e,t){},151:function(e,t){},152:function(e,t){},153:function(e,t){},154:function(e,t){},155:function(e,t){},156:function(e,t){},157:function(e,t){},158:function(e,t){},159:function(e,t){},160:function(e,t){},161:function(e,t){},162:function(e,t){},163:function(e,t){},164:function(e,t){},165:function(e,t){},166:function(e,t){},167:function(e,t){},168:function(e,t){},169:function(e,t){},170:function(e,t){},171:function(e,t){},172:function(e,t){},173:function(e,t){},174:function(e,t){},175:function(e,t){},176:function(e,t){},177:function(e,t){},178:function(e,t){},179:function(e,t){},180:function(e,t){},181:function(e,t){},182:function(e,t){},183:function(e,t){},184:function(e,t){},185:function(e,t){},186:function(e,t){},187:function(e,t){},188:function(e,t){},189:function(e,t){},190:function(e,t){},191:function(e,t){},192:function(e,t){},193:function(e,t){},194:function(e,t){},195:function(e,t){},196:function(e,t){},197:function(e,t){},198:function(e,t){},199:function(e,t){},200:function(e,t){},201:function(e,t){},202:function(e,t){},203:function(e,t){},204:function(e,t){},205:function(e,t){},206:function(e,t){},207:function(e,t){},208:function(e,t){},209:function(e,t){},210:function(e,t){},211:function(e,t){},212:function(e,t){},213:function(e,t){},214:function(e,t){},215:function(e,t){},216:function(e,t){},217:function(e,t){},218:function(e,t){},219:function(e,t){},220:function(e,t){},221:function(e,t){},222:function(e,t){},223:function(e,t){},224:function(e,t,i){var n={"./2017-12-13-00-00-New-Site.md":[268,12],"./2017-12-21-00-00-1.2.10-Release.md":[269,13],"./2018-01-12-00-00-1.2.11-Release.md":[270,14],"./2018-01-18-00-00-1.2.12-Release.md":[271,15],"./2018-01-25-00-00-1.2.13-Release.md":[272,16],"./2018-02-01-00-00-1.2.14-Release.md":[273,17],"./2018-02-08-00-00-1.2.15-Release.md":[274,18],"./2018-02-15-00-00-1.2.16-Release.md":[275,19],"./2018-02-22-00-00-1.2.17-Release.md":[276,20],"./2018-03-01-00-00-1.2.18-Release.md":[277,21],"./2018-03-08-00-00-1.2.19-Release.md":[278,22],"./2018-03-15-00-00-1.3.0-Release.md":[279,23],"./2018-03-22-00-00-1.3.1-Release.md":[280,24],"./2018-03-29-00-00-1.3.2-Release.md":[281,25],"./2018-04-05-00-00-1.3.3-Release.md":[282,26],"./2018-04-12-00-00-1.3.4-Release.md":[283,27],"./2018-04-19-00-00-1.3.5-Release.md":[284,28],"./2018-04-26-00-00-1.3.6-Release.md":[285,29],"./2018-05-03-00-00-1.3.7-Release.md":[286,30],"./2018-05-10-00-00-1.3.8-Release.md":[287,31],"./2018-05-15-00-00-RuneLite-threatened-to-shutdown.md":[288,32],"./2018-05-16-00-00-Update-RuneLite-threatened-to-shutdown.md":[289,33],"./2018-05-16-03-00-Update-2-RuneLite-threatened-to-shutdown.md":[290,34],"./2018-05-18-00-00-1.3.9-Release.md":[291,35],"./2018-05-24-00-00-1.4.0-Release.md":[292,36],"./2018-05-25-23-00-Phishing-Attempts.md":[293,37],"./2018-05-31-07-00-1.4.1-Release.md":[294,38],"./2018-06-07-07-00-1.4.2-Release.md":[295,39],"./2018-06-14-07-00-1.4.3-Release.md":[296,40],"./2018-06-21-07-00-1.4.4-Release.md":[297,41],"./2018-06-28-07-00-1.4.5-Release.md":[298,42],"./2018-07-05-07-00-1.4.6-Release.md":[299,43],"./2018-07-12-07-00-1.4.7-Release.md":[300,44],"./2018-07-19-07-00-1.4.8-Release.md":[301,45],"./2018-07-26-07-00-1.4.9-Release.md":[302,46],"./2018-08-02-10-00-1.4.10-Release.md":[303,47],"./2018-08-09-10-00-1.4.11-Release.md":[304,48],"./2018-08-16-10-00-1.4.12-Release.md":[305,49],"./2018-08-23-10-00-1.4.13-Release.md":[306,50],"./2018-08-30-10-00-1.4.15-Release.md":[307,51],"./2018-09-06-10-00-1.4.16-Release.md":[308,52],"./2018-09-13-10-00-1.4.17-Release.md":[309,53],"./2018-09-18-21-00-Worldhopper-disabled.md":[310,54],"./2018-09-20-10-00-1.4.18-Release.md":[311,55],"./2018-09-27-10-00-1.4.19-Release.md":[312,56],"./2018-10-04-10-00-1.4.20-Release.md":[313,57],"./2018-10-11-10-00-1.4.21-Release.md":[314,58],"./2018-10-18-10-00-1.4.22-Release.md":[315,59],"./2018-10-25-10-00-1.4.23-Release.md":[316,60],"./2018-11-01-10-00-1.4.24-Release.md":[317,61],"./2018-11-08-10-00-1.4.25-Release.md":[318,62],"./2018-11-15-10-00-1.4.26-Release.md":[319,63],"./2018-11-16-12-00-1.5.0-Release.md":[320,64],"./2018-11-22-10-00-1.5.1-Release.md":[321,65],"./2018-11-29-10-00-1.5.2-Release.md":[322,66],"./2018-12-06-10-00-1.5.3-Release.md":[323,67],"./2018-12-13-10-00-1.5.4-Release.md":[324,68],"./2018-12-20-10-00-1.5.5-Release.md":[325,69],"./2019-01-03-10-00-1.5.6-Release.md":[326,70],"./2019-01-10-10-00-1.5.7-Release.md":[327,71],"./2019-01-17-10-00-1.5.8-Release.md":[328,72],"./2019-01-24-10-00-1.5.9-Release.md":[329,73],"./2019-01-31-10-00-1.5.10-Release.md":[330,74],"./2019-02-07-10-00-1.5.11-Release.md":[331,75],"./2019-02-14-10-00-1.5.12-Release.md":[332,76],"./2019-02-16-16-00-Launcher-1.6.2-Release.md":[333,77],"./2019-02-21-10-00-1.5.13-Release.md":[334,78],"./2019-02-28-10-00-1.5.14-Release.md":[335,79],"./2019-03-07-10-00-1.5.15-Release.md":[336,80],"./2019-03-14-10-00-1.5.16-Release.md":[337,81],"./2019-03-21-12-00-1.5.17-Release.md":[338,82],"./2019-03-28-10-00-1.5.18-Release.md":[339,83],"./2019-04-11-10-00-1.5.19-Release.md":[340,84],"./2019-04-18-10-00-1.5.20-Release.md":[341,85],"./2019-04-25-10-00-1.5.21-Release.md":[342,86],"./2019-05-03-10-00-1.5.22-Release.md":[343,87],"./2019-05-16-10-00-1.5.23-Release.md":[344,88],"./2019-05-30-10-00-1.5.25-Release.md":[345,89],"./2019-06-06-10-00-1.5.26-Release.md":[346,90],"./2019-06-20-10-00-1.5.27-Release.md":[347,91],"./2019-07-04-10-00-1.5.28-Release.md":[348,92],"./2019-07-18-10-00-1.5.29-Release.md":[349,93],"./2019-08-01-10-00-1.5.30-Release.md":[350,94],"./2019-08-15-10-00-1.5.31-Release.md":[351,95],"./2019-08-16-10-00-Launcher-Release-2.0.0.md":[352,96],"./2019-08-29-10-00-1.5.32-Release.md":[353,97],"./2019-09-12-10-00-1.5.33-Release.md":[354,98],"./2019-09-26-10-00-1.5.34-Release.md":[355,99],"./2019-10-02-10-00-1.5.35-Release.md":[356,100],"./2019-10-17-10-00-1.5.36-Release.md":[357,101],"./2019-10-30-10-00-1.5.37-Release.md":[358,102]};function a(e){var t=n[e];return t?i.e(t[1]).then(function(){var e=t[0];return i.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}a.keys=function(){return Object.keys(n)},a.id=224,e.exports=a},241:function(e,t,i){"use strict";var n=i(0);i(242);t.a=function(e){var t=e.image,i=e.title,a=e.description,s=e.link;return Object(n.h)("div",{class:"col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2"},Object(n.h)("div",{class:"card"},Object(n.h)("img",{class:"card-img-top",alt:i,src:t}),Object(n.h)("div",{class:"card-body"},Object(n.h)("h5",{class:"card-title"},s?Object(n.h)("a",{href:s,alt:"View on Wiki"},i):i),Object(n.h)("p",{class:"card-text"},a))))}},242:function(e,t,i){},244:function(e,t,i){"use strict";t.a=[{image:"/img/features/mousehighlight.png",title:"Action tooltips",description:"Displays tooltips for actions under your mouse cursor.",link:"https://github.com/runelite/runelite/wiki/Mouse-Tooltips"},{image:"/img/features/agility.png",title:"Agility",description:"Displays clickboxes for agility courses, and counts the number of laps you have done.",link:"https://github.com/runelite/runelite/wiki/Agility"},{image:"/img/features/kourend.png",title:"Arceuus Library",description:"Shows you where books are in the Arceuus Library.",link:"https://github.com/runelite/runelite/wiki/Kourend-Library"},{image:"/img/features/attackstyles.png",title:"Attack style",description:"Indicates your attack style and hides unwanted styles.",link:"https://github.com/runelite/runelite/wiki/Attack-Styles"},{image:"/img/features/bankeval.png",title:"Bank evaluator",description:"Displays your bank's total value based on GE and alch prices.",link:"https://github.com/runelite/runelite/wiki/Bank-Value"},{image:"/img/features/banktags.png",title:"Bank tags",description:"Allows you to set searchable tags on items for your bank.",link:"https://github.com/runelite/runelite/wiki/Bank-Tags"},{image:"/img/features/tagtabs.png",title:"Bank Tag Tabs",description:"A tab on the left side of the bank to auto search the assigned tag when clicked.",link:"https://github.com/runelite/runelite/wiki/Bank-Tags"},{image:"/img/features/barbassault.png",title:"Barbarian Assault",description:"Displays a timer for the next change of horn commands.",link:"https://github.com/runelite/runelite/wiki/Barbarian-Assault"},{image:"/img/features/barrows.png",title:"Barrows",description:"Displays minimap information for the tunnel and marks the location of brothers.",link:"https://github.com/runelite/runelite/wiki/Barrows-Brothers"},{image:"/img/features/blastfurnace.png",title:"Blast Furnace",description:"Shows your current bars/ores and marks the clickbox of the conveyor belt.",link:"https://github.com/runelite/runelite/wiki/Blast-Furnace"},{image:"/img/features/birdhouses.png",title:"Birdhouse Timers",description:"Displays birdhouses and approximate completion.",link:"https://github.com/runelite/runelite/wiki/Farming-Tracker"},{image:"/img/features/cannontiles.png",title:"Cannon double hit spots",description:"Shows you where to position enemies for double cannonball hits.",link:"https://github.com/runelite/runelite/wiki/Cannon"},{image:"/img/features/chatcolor.png",title:"Chat Color",description:"Configures chat colors for each type of message in transparent and non transparent chat.",link:"https://github.com/runelite/runelite/wiki/Chat-Color"},{image:"/img/features/chatcommands.png",title:"Chat commands",description:"Allows easy lookup of !level(s), !price(s), !kc(s), and !pb(s) from the chat box.",link:"https://github.com/runelite/runelite/wiki/Chat-Commands"},{image:"/img/features/clanchat.png",title:"Clan chat",description:"Adds the sender's rank to clan chat messages.",link:"https://github.com/runelite/runelite/wiki/Clan-Chat"},{image:"/img/features/cluescroll.png",title:"Clue scroll helper",description:"Gives answers to clue scroll riddles/anagrams/ciphers/cryptic clues.",link:"https://github.com/runelite/runelite/wiki/Clue-Scrolls"},{image:"/img/features/moveableoverlay.png",title:"Custom overlay position",description:"Allows you to move RuneLite overlays to any position on the screen."},{image:"/img/features/daily.png",title:"Daily task indicators",description:"Notifies you on login what daily tasks you are able to complete.",link:"https://github.com/runelite/runelite/wiki/Daily-Task-Indicator"},{image:"/img/features/deathlocation.png",title:"Death Indicator",description:"Displays your last death location and on which world.",link:"https://github.com/runelite/runelite/wiki/Death-Indicator"},{image:"/img/features/discord.png",title:"Discord integration",description:"Integrates with Discord's Rich Presence to display what you're doing in the game and allows to form in-game parties",link:"https://github.com/runelite/runelite/wiki/Discord",home:!0},{image:"/img/features/cannon.png",title:"Dwarf multicannon",description:"Displays the number of cannonballs left in your cannon, along with common cannon spots.",link:"https://github.com/runelite/runelite/wiki/Cannon"},{image:"/img/features/fairyringsearch.png",title:"Fairy Ring Filter",description:"Allows you to filter the fairy ring destination menu.",link:"https://github.com/runelite/runelite/wiki/Fairy-Rings"},{image:"/img/features/farmingtracker.png",title:"Farming Tracker",description:"Displays current farming patches and approximate completion.",link:"https://github.com/runelite/runelite/wiki/Farming-Tracker"},{image:"/img/features/fishing.png",title:"Fishing",description:"Highlights fishing spots and tracks fishing stats.",link:"https://github.com/runelite/runelite/wiki/Fishing"},{image:"/img/features/gpu.png",title:"GPU",description:"Renders game using your GPU, which provides better FPS, increased draw distance, enhanced scaling and anti-aliasing.",link:"https://github.com/runelite/runelite/wiki/GPU",home:!0},{image:"/img/features/gesearch.png",title:"Grand Exchange lookup",description:"Quickly price-check any item on the Grand Exchange.",link:"https://github.com/runelite/runelite/wiki/Grand-Exchange"},{image:"/img/features/ge.png",title:"Grand Exchange offers",description:"Lists your current Grand Exchange offers.",link:"https://github.com/runelite/runelite/wiki/Grand-Exchange"},{image:"/img/features/grounditems.png",title:"Ground items",description:"Hides, highlights, and adds filterable price colors to dropped items.",link:"https://github.com/runelite/runelite/wiki/Ground-Items"},{image:"/img/features/herbiboar.png",title:"Herbiboar",description:"Highlights the path and objects to search at the end of the trail.",link:"https://github.com/runelite/runelite/wiki/Herbiboar"},{image:"/img/features/hunter.png",title:"Hunter",description:"Adds timers to hunter traps.",link:"https://github.com/runelite/runelite/wiki/Hunter"},{image:"/img/features/idle.png",title:"Idle notifications",description:"Sends system tray alerts when idle or about to be logged out.",link:"https://github.com/runelite/runelite/wiki/Idle-Notifier"},{image:"/img/features/imp.png",title:"Impling finder",description:"Highlights nearby implings on the minimap and on-screen.",link:"https://github.com/runelite/runelite/wiki/Implings"},{image:"/img/features/inventorytags.png",title:"Inventory Tags",description:"Allows you to assign group tags to inventory items.",link:"https://github.com/runelite/runelite/wiki/Inventory-Tags"},{image:"/img/features/inventoryviewer.png",title:"Inventory Viewer",description:"Displays an overlay of your current inventory.",link:"https://github.com/runelite/runelite/wiki/Inventory-Viewer"},{image:"/img/features/itemstats.png",title:"Item stats",description:"Displays information about food and potion effects.",link:"https://github.com/runelite/runelite/wiki/Item-Stats"},{image:"/img/features/jewellerycount.png",title:"Jewellery charges",description:"Displays the number of charges that your jewellery has.",link:"https://github.com/runelite/runelite/wiki/Jewellery-Count"},{image:"/img/features/lightboxsolver.png",title:"Light Box Puzzle Solver",description:"Solves light box puzzles during clue scrolls.",link:"https://github.com/runelite/runelite/wiki/Puzzle-Solver"},{image:"/img/features/loottracker.png",title:"Loot Tracker",description:"Shows kill count and drops with prices from monsters you kill.",link:"https://github.com/runelite/runelite/wiki/Loot-Tracker",home:!0},{image:"/img/features/lowdetail.png",title:"Low detail mode",description:"Enables low detail mode, removing some of the game's eye candy.",link:"https://github.com/runelite/runelite/wiki/Low-Detail"},{image:"/img/features/mta.png",title:"Mage Training Arena",description:"Overlays to assist in each of the MTA rooms.",link:"https://github.com/runelite/runelite/wiki/Mage-Training-Arena"},{image:"/img/features/menuswap.png",title:"Menu entry swapping",description:"Swaps the left-click actions of certain objects.",link:"https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper"},{image:"/img/features/minimapdots.png",title:"Minimap dot customizer",description:"Customizes the color of minimap dots.",link:"https://github.com/runelite/runelite/wiki/Minimap"},{image:"/img/features/favor.png",title:"Miscellania favor",description:"Displays your current favor and treasury in the Kingdom of Miscellania.",link:"https://github.com/runelite/runelite/wiki/Kingdom-of-Miscellania"},{image:"/img/features/mlm.png",title:"Motherlode Mine",description:"Marks veins and rock obstacles in the Motherlode Mine.",link:"https://github.com/runelite/runelite/wiki/Motherload-Mine"},{image:"/img/features/newsfeed.png",title:"News feed",description:"Displays the latest RuneLite blog posts, OldSchool RuneScape news, and a Twitter feed of JMods.",link:"https://github.com/runelite/runelite/wiki/News-Feed"},{image:"/img/features/nmz.png",title:"Nightmare Zone",description:"Displays NMZ points/absorption and notifies you about expiring potions.",link:"https://github.com/runelite/runelite/wiki/Nightmare-Zone"},{image:"/img/features/npctag.png",title:"NPC tagging",description:"Tags and keeps track of an NPC.",link:"https://github.com/runelite/runelite/wiki/NPC-Indicators"},{image:"/img/features/discordparty.png",title:"Party",description:"Integrates with Discord's party feature to display party members discord name, hp, prayer points, and map location",link:"https://github.com/runelite/runelite/wiki/Party"},{image:"/img/features/playerindicators.png",title:"Player indicators",description:"Draws the names of friends, clan mates and yourself overhead.",link:"https://github.com/runelite/runelite/wiki/Player-Indicators"},{image:"/img/features/poh.png",title:"Player-owned houses",description:"Displays minimap icons and marks unlit/lit burners.",link:"https://github.com/runelite/runelite/wiki/Player-owned-House"},{image:"/img/features/prayerbar.png",title:"Prayer Bar",description:"Displays a prayer bar underneath your hitpoints bar.",link:"https://github.com/runelite/runelite/wiki/Prayer"},{image:"/img/features/prayerorder.png",title:"Prayer reordering",description:"Allows you to drag-and-drop prayers in your prayer book.",link:"https://github.com/runelite/runelite/wiki/Reorder-Prayers"},{image:"/img/features/puzzlebox.png",title:"Puzzle box solver",description:"Shows you where to click to solve puzzle boxes.",link:"https://github.com/runelite/runelite/wiki/Puzzle-Solver"},{image:"/img/features/raids.png",title:"Raid scouter",description:"Displays the current layout of raids and tracks the raid duration.",link:"https://github.com/runelite/runelite/wiki/Chambers-of-Xeric"},{image:"/img/features/regen.png",title:"Regen timers",description:"Tracks and displays the hitpoints & special attack regen timers.",link:"https://github.com/runelite/runelite/wiki/Regeneration-Meter"},{image:"/img/features/roguesden.png",title:"Rogues' Den",description:"Marks tiles and clickboxes to help you traverse the maze.",link:"https://github.com/runelite/runelite/wiki/Rogues%27-Den"},{image:"/img/features/abyss.png",title:"Runecraft",description:"Displays minimap icons and clickboxes for abyssal rifts.",link:"https://github.com/runelite/runelite/wiki/Runecraft"},{image:"/img/features/runepouch.png",title:"Rune pouch",description:"Shows what runes are currently in your rune pouch.",link:"https://github.com/runelite/runelite/wiki/Rune-Pouch"},{image:"/img/features/shiftclick.png",title:"Shift click configuration",description:"Allows you to change/set shift click actions on items.",link:"https://github.com/runelite/runelite/wiki/Shift-Click-Configuration"},{image:"/img/features/statusbars.png",title:"Status Bars",description:"Shows health and prayer bars next to the inventory.",link:"https://github.com/runelite/runelite/wiki/Status-Bars"},{image:"/img/features/boosts.png",title:"Status widgets",description:"Shows boost timers, enemy HP, and other useful overlays.",home:!0},{image:"/img/features/stretchedfixed.png",title:"Stretched mode",description:"Stretches the game to the size of your window.",link:"https://github.com/runelite/runelite/wiki/Stretched-Mode"},{image:"/img/features/teamcapes.png",title:"Team cape overlay",description:"Displays team cape wearer counts.",link:"https://github.com/runelite/runelite/wiki/Team-Capes"},{image:"/img/features/tearsofguthix.png",title:"Tears of Guthix",description:"Displays the remaining time for streams of tears.",link:"https://github.com/runelite/runelite/wiki/Tears-Of-Guthix"},{image:"/img/features/tileindicators.png",title:"Tile indicator",description:"Marks the tile you last clicked on.",link:"https://github.com/runelite/runelite/wiki/Tile-Indicators"},{image:"/img/features/tithefarm.png",title:"Tithe Farm",description:"Displays timers for the farming patches within the Tithe farm minigame.",link:"https://github.com/runelite/runelite/wiki/Tithe-Farm"},{image:"/img/features/wcing.png",title:"Woodcutting",description:"Displays information about the logs you are cutting.",link:"https://github.com/runelite/runelite/wiki/Woodcutting"},{image:"/img/features/xpglobes.png",title:"XP globes",description:"Displays skill globes when you gain XP, with more detailed stats on hover.",link:"https://github.com/runelite/runelite/wiki/XP-Globes"},{image:"/img/features/xptracker.png",title:"XP Tracker",description:"Side panel displaying xp data for each skill you have trained.",link:"https://github.com/runelite/runelite/wiki/XP-Tracker"},{image:"/img/features/zoom.png",title:"Zoom unlimiter",description:"Allows you to zoom past the default camera distance limits.",link:"https://github.com/runelite/runelite/wiki/Camera-Zoom"}]},406:function(e,t,i){},594:function(e,t,i){"use strict";i.r(t);var n=i(2),a=i.n(n),s=i(5),r=i(0),o=(i(406),i(128),i(35)),l=i(241),c=i(110),u=i(36),m=i(37),d=i(39),h=i(38),g=i(40),p=i(64),f=i(408),b=i.n(f),k=i(575),w=i(576),R=i(12),y=i(63),v=i(27),O=i(32),j=i(120),x=i.n(j),S=function(e){var t=e.url,i=e.message,n=e.author,a=e.date;return t&&Object(r.h)(r.b,null,Object(r.h)("h6",null,"Latest commit:"),Object(r.h)("a",{href:t},i)," ",Object(r.h)("span",{class:"text-muted"},"by ",Object(r.h)("a",{href:n.url?n.url:t},n.name,",")," ",x()(a)))};var D=function(e){function t(e){var i;return Object(u.a)(this,t),(i=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleScroll=i.handleScroll.bind(Object(p.a)(Object(p.a)(i))),i.state={interval:0},i}return Object(g.a)(t,e),Object(m.a)(t,[{key:"handleScroll",value:function(){var e=document.getElementById("jumbo"),t=e.offsetTop+e.offsetHeight-document.getElementsByClassName("navbar")[0].offsetHeight,i=window.scrollY||window.pageYOffset||document.body.scrollTop;this.props.navbarDark?i>t&&this.props.makeNavbarDefault():i<=t&&this.props.makeNavbarDark()}},{key:"componentDidMount",value:function(){var e=this;this.setState({interval:setInterval(function(){var t=e.props,i=t.images,n=t.heroImage,a=t.nextHeroImage,s=i.length,r=(n+1)%s,o=new Image;o.src=Object(y.a)(i[r]),o.onload=function(){return a(s)},e.setState({loadingHeroImg:o})},8e3)}),this.handleScroll(),document.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.interval,i=e.loadingHeroImg;clearInterval(t),i&&delete i.onload,this.props.makeNavbarDefault(),document.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(e){e.title;var t=e.description,i=e.buttons,n=e.release,a=e.commit,s=e.playing,o=e.heroImage,l=Object(k.a)(function(e){return e.dropdown})(i),c=Object(w.a)(function(e){return"all"===e.os})(l),u=Object(w.a)(function(e){return function(e){if(!b.a.os.family)return!1;var t=b.a.os.architecture,i=b.a.os.family.toLowerCase();return-1!==i.indexOf("os x")||-1!==i.indexOf("mac")?"macOS"===e:-1!==i.indexOf("win")?"Windows32"===e:-1!==i.indexOf("linux")?e===(64===t?"Linux64":"Linux32"):e===i}(e.os)})(l)||c;return Object(r.h)("div",{class:"jumbotron jumbotron-fluid",style:{backgroundImage:"url(".concat(Object(y.a)(this.props.images[o]),")")},id:"jumbo"},Object(r.h)("div",{class:"jumbotron-cell"},Object(r.h)("div",{class:"jumbotron-body"},Object(r.h)("div",{class:"jumbotron-header"},Object(r.h)("h1",null,"RUNELITE",Object(r.h)("span",null,".NET")),Object(r.h)("p",null,t),Object(r.h)("a",{id:"contribute",class:"btn",href:O.a.github},"Contribute"),Object(r.h)("div",{id:"download"},Object(r.h)("div",{class:"btn-group dropdown"},Object(r.h)("a",{id:"direct-download-btn",class:"btn btn-"+u.color,href:u.link},"Download"),Object(r.h)("button",{class:"btn dropdown-toggle dropdown-toggle-split btn-"+u.color},Object(r.h)("span",{class:"sr-only"},"Toggle Dropdown")),Object(r.h)("div",{class:"dropdown-menu",style:{textShadow:"none"}},l.map(function(e){var t=e.link,i=e.icon,n=e.text;return Object(r.h)("a",{class:"dropdown-item",href:t,native:!0},Object(r.h)("i",{class:i})," ",n)}))))),Object(r.h)("div",{class:"small"},Object(r.h)("h6",null,"Players online:"),s||"unknown",Object(r.h)("h6",null,"Latest release:"),Object(r.h)("a",{href:"#news"},n||"unknown"),Object(r.h)(S,a)))))}}]),t}(r.a),T=Object(o.b)(function(e){return{navbarDark:e.app.navbarDark,heroImage:e.app.heroImage}},function(e){return Object(R.b)({makeNavbarDark:v.b,makeNavbarDefault:v.c,nextHeroImage:v.d},e)})(D),C=i(130),I=i(72),L=i(34),P=i.n(L),M=i(244),A=i(66),E=i(56),N=i(15),z=i(13),B=i(117),H=i(7),F=function(){var e=Object(s.a)(a.a.mark(function e(t){var i,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.fetchCommits,n=t.fetchSessionCount,i(),e.next=4,n();case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();t.default=Object(o.b)(function(e,t){return{commit:Object(I.c)(e,t),release:Object(H.c)(e,t),sessionCount:Object(A.c)(e,t)}},function(e){return Object(R.b)({fetchCommits:I.b,fetchSessionCount:A.b},e)})(Object(B.a)(F)(function(e){var t=e.commit,i=e.release,n=e.sessionCount;return Object(r.h)(c.a,null,Object(r.h)(E.a,{title:"".concat(P.a.title," - Open Source Old School RuneScape Client"),description:P.a.description}),Object(r.h)("section",{id:"intro"},Object(r.h)(T,Object.assign({},P.a,{release:i,commit:t,playing:n}))),Object(r.h)("section",{id:"features"},Object(r.h)("div",{class:"content-section homepage"},Object(r.h)("h1",null,"FEATURES"),Object(r.h)(N.a,{href:"/features",style:{color:"inherit"}},Object(r.h)("h4",null,"SHOW ALL FEATURES")),Object(r.h)("div",{class:"row"},M.a.filter(function(e){return e.home}).map(function(e){return Object(r.h)(l.a,Object.assign({key:e.title},e))})))),Object(r.h)("section",{id:"news"},Object(r.h)("div",{class:"content-section homepage"},Object(r.h)("h1",{id:"news"},"LATEST NEWS"),Object(r.h)(N.a,{href:"/blog",style:{color:"inherit"}},Object(r.h)("h4",null,"SHOW ALL NEWS")),Object(r.h)(z.a,{getComponent:function(){return Object(C.c)().then(function(e){var t=e.body;return Object(r.h)("div",{class:"markdown-body news-page",dangerouslySetInnerHTML:{__html:t}})})}}))))}))}}]);
//# sourceMappingURL=1.f7d7460a.chunk.js.map