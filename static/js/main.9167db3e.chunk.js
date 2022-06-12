(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{12:function(t,e,a){t.exports={pagination:"PagesNavigator_pagination__TNgZ4",pagination__title:"PagesNavigator_pagination__title__1AHGw",pagination__etc:"PagesNavigator_pagination__etc__2Mfwg",pagination__btnWrap:"PagesNavigator_pagination__btnWrap__2kz94",pagination__centerBtnsContainer:"PagesNavigator_pagination__centerBtnsContainer__3BZfZ",pagination__btn:"PagesNavigator_pagination__btn__1TLq4",pagination__btn_selected:"PagesNavigator_pagination__btn_selected__1giDP"}},14:function(t,e,a){t.exports={characterList:"CharactersList_characterList__2yhOA",characterList__contentContainer:"CharactersList_characterList__contentContainer__3BHYp",characterList__image:"CharactersList_characterList__image__350X7",characterList__aliveStatus__dead:"CharactersList_characterList__aliveStatus__dead__2Ilp5",characterList__aliveStatus__alive:"CharactersList_characterList__aliveStatus__alive__3muIi",characterList__aliveStatus__unknown:"CharactersList_characterList__aliveStatus__unknown__9w2D9"}},53:function(t,e,a){},54:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),s=a(16),r=a.n(s),i=a(18),o=a(9),l=a(2),u=a(6),_=a(4),h=a(10),d=a.n(h),j=a(25),p=a.n(j),b=function(){return Object(i.b)()},O=i.c,v=a(7),g=a.n(v),m=a(13),f=a(11),x="https://rickandmortyapi.com/api",L=function(){var t=Object(m.a)(g.a.mark((function t(e){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(x,"/character/?page=").concat(e));case 2:return a=t.sent,t.abrupt("return",a.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(m.a)(g.a.mark((function t(e){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(x,"/character/").concat(e));case 2:return a=t.sent,t.abrupt("return",a.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=Object(f.b)("characterDetails/fetchUserPostsById",function(){var t=Object(m.a)(g.a.mark((function t(e,a){var n,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=a.dispatch)(y(!0)),t.next=4,C(e);case 4:return c=t.sent,n(y(!1)),t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),D=Object(f.c)({name:"listOfPosts",initialState:{selectedCharacter:null,isDetailsLoading:!0},reducers:{setSelectedCharacter:function(t,e){t.selectedCharacter=e.payload},setIsDetailsLoading:function(t,e){t.isDetailsLoading=e.payload}},extraReducers:function(t){t.addCase(N.fulfilled,(function(t,e){t.selectedCharacter=e.payload}))}}),S=D.actions,y=(S.setSelectedCharacter,S.setIsDetailsLoading),k=function(t){return t.characterDetails.selectedCharacter},w=function(t){return t.characterDetails.isDetailsLoading},P=D.reducer,I=a(8),E=a.n(I),B=a(1),T=c.a.memo((function(t){var e=t.charId,a=b(),c=O(w),s=O(k),r=Object(l.g)();return Object(n.useEffect)((function(){a(N(e))}),[]),Object(B.jsx)(B.Fragment,{children:c&&s?Object(B.jsx)("div",{className:"d-flex justify-content-center",children:Object(B.jsx)("div",{className:"spinner-border",role:"status",children:Object(B.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(B.jsxs)("div",{children:[Object(B.jsxs)("div",{className:E.a.charDescription,children:[Object(B.jsx)("h1",{className:E.a.charDescription__title,children:null===s||void 0===s?void 0:s.name}),Object(B.jsxs)("div",{className:E.a.charDescription__content,children:[Object(B.jsx)("img",{src:null===s||void 0===s?void 0:s.image,alt:"Character",className:E.a.charDescription__image}),Object(B.jsxs)("p",{children:[Object(B.jsx)("strong",{children:"Species:"}),"\xa0",null===s||void 0===s?void 0:s.species]}),Object(B.jsxs)("p",{children:[Object(B.jsx)("strong",{children:"Gender:"}),"\xa0",null===s||void 0===s?void 0:s.gender]}),Object(B.jsxs)("p",{children:[Object(B.jsx)("strong",{children:"Location:"}),"\xa0",null===s||void 0===s?void 0:s.location.name]}),Object(B.jsxs)("p",{children:[Object(B.jsx)("strong",{children:"Episodes:"}),"\xa0"]}),Object(B.jsx)("div",{className:d()(E.a.charDescription__listEpisodes),children:null===s||void 0===s?void 0:s.episode.map((function(t){return Object(B.jsx)("div",{className:E.a.charDescription__listEpisodes_item,children:t.split("/")[5]},t)}))}),Object(B.jsxs)("p",{children:[Object(B.jsx)("strong",{children:"Status:"}),"\xa0",Object(B.jsx)("span",{className:d()("characterList__aliveStatus",Object(u.a)({},E.a.characterList__aliveStatus__alive,"Alive"===(null===s||void 0===s?void 0:s.status)),Object(u.a)({},E.a.characterList__aliveStatus__dead,"Dead"===(null===s||void 0===s?void 0:s.status)),Object(u.a)({},E.a.characterList__aliveStatus__unknown,"unknown"===(null===s||void 0===s?void 0:s.status))),children:null===s||void 0===s?void 0:s.status})]}),Object(B.jsxs)("p",{children:[Object(B.jsx)("strong",{children:"Created:"}),"\xa0",null===s||void 0===s?void 0:s.created]})]})]}),Object(B.jsx)("button",{type:"button",className:d()("btn-close btn-close-red",E.a.closeBtn),onClick:function(){r(-1)},"aria-label":"Close"})]})})})),A=Object(f.b)("listOfChars/loadCharactersPage",function(){var t=Object(m.a)(g.a.mark((function t(e,a){var n,c,s,r,i,o,l;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,t.next=3,L(e);case 3:return c=t.sent,s=c.info,r=s.count,i=s.next,o=s.prev,l=s.pages,n(W(l)),n(U(r)),n(F(i)),n(G(o)),n(R(!1)),t.abrupt("return",c.results);case 11:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),H=Object(f.c)({name:"listOfPosts",initialState:{charactersPage:[],isListLoading:!0,pagesTotal:0,count:0,next:null,prev:null},reducers:{setCharacters:function(t,e){t.charactersPage=e.payload},setIsListLoading:function(t,e){t.isListLoading=e.payload},setPagesTotal:function(t,e){t.pagesTotal=e.payload},setNext:function(t,e){t.next=e.payload},setPrev:function(t,e){t.prev=e.payload},setCount:function(t,e){t.count=e.payload}},extraReducers:function(t){t.addCase(A.fulfilled,(function(t,e){t.charactersPage=e.payload}))}}),M=H.actions,R=(M.setCharacters,M.setIsListLoading),W=M.setPagesTotal,F=M.setNext,G=M.setPrev,U=M.setCount,z=function(t){return t.listOfChars.charactersPage},K=function(t){return t.listOfChars.isListLoading},Z=function(t){return t.listOfChars.pagesTotal},J=H.reducer,Q=a(26),X=a.n(Q),q=a(12),V=a.n(q),Y=Object(n.memo)((function(){var t=Object(l.g)(),e=O(Z),a=new URLSearchParams(Object(l.f)().search),c=parseInt(a.get("page")||"1"),s=Object(n.useState)(!1),r=Object(_.a)(s,2),i=r[0],o=r[1],h=Object(n.useState)(!1),j=Object(_.a)(h,2),p=j[0],b=j[1],v=Object(n.useMemo)((function(){return function(t,e){for(var a=[],n=Math.max(2,t-1),c=Math.min(e-1,t+1),s=n;s<=c;s+=1)a.push(s);return t-1>2&&a.unshift("..."),t+1<e-1&&a.push("..."),1!==e&&a.push(e),a.unshift(1),a.map((function(t){return{value:t,key:X.a.generate()}}))}(c,e)}),[e,c]);Object(n.useEffect)((function(){b(!(c>1)),o(c===e)}),[c]);var g=Object(n.useCallback)((function(e){var n=(e-1).toString();a.set("page",n),t("?page=".concat(n))}),[t]),m=Object(n.useCallback)((function(e){var n=(e+1).toString();a.set("page",n),t("?page=".concat(n))}),[]),f=Object(n.useCallback)((function(e){var n=e.toString();a.set("page",n),t("?page=".concat(n))}),[]);return Object(B.jsx)("div",{className:V.a.pagination,children:Object(B.jsxs)("div",{className:V.a.pagination__btnWrap,children:[Object(B.jsx)("button",{className:V.a.pagination__btn,disabled:p,type:"button",onClick:function(){g(c)},children:"\xab"}),Object(B.jsx)("div",{className:V.a.pagination__centerBtnsContainer,children:v.map((function(t){return"..."===t.value?Object(B.jsx)("p",{className:"pagination__etc",children:t.value},t.key):Object(B.jsx)("button",{className:d()(V.a.pagination__btn,Object(u.a)({},V.a.pagination__btn_selected,t.value===c)),type:"button",onClick:function(){f(t.value)},children:t.value},t.key)}))}),Object(B.jsx)("button",{className:V.a.pagination__btn,disabled:i,type:"button",onClick:function(){m(c)},children:"\xbb"})]})})})),$=a(14),tt=a.n($),et=c.a.memo((function(){var t=Object(l.h)().charId,e=new URLSearchParams(Object(l.f)().search).get("page")||"1",a=Object(l.g)(),c=b(),s=O(K),r=O(z),i=Object(n.useState)(""),o=Object(_.a)(i,2),h=o[0],j=o[1],v=Object(n.useCallback)((function(t){a("/list/".concat(t))}),[]);return Object(n.useEffect)((function(){c(A(e))}),[e]),t?Object(B.jsx)(T,{charId:t}):Object(B.jsx)("div",{className:"container-xl",children:s?Object(B.jsx)("div",{className:"d-flex justify-content-center",children:Object(B.jsx)("div",{className:"spinner-border",role:"status",children:Object(B.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h1",{className:"d-flex justify-content-center",children:"Characters List"}),Object(B.jsx)("div",{className:"pb-4",children:Object(B.jsx)(p.a,{getItemValue:function(t){return t.name},items:r,renderItem:function(t,e){return Object(B.jsx)("div",{style:{background:e?"lightgray":"white"},children:t.name},t.id)},value:h,onChange:function(t){return j(t.target.value)},shouldItemRender:function(t){return t.name.toLowerCase().includes(h.toLocaleLowerCase())},onSelect:function(t,e){j(""),v(e.id.toString())}})}),Object(B.jsx)("ul",{className:tt.a.characterList,children:r.map((function(t){return Object(B.jsx)("li",{children:Object(B.jsxs)("div",{className:tt.a.characterList__contentContainer,onClick:function(){return v(t.id.toString())},children:[Object(B.jsx)("img",{className:tt.a.characterList__image,src:t.image,alt:"Character"}),Object(B.jsx)("h3",{children:t.name}),Object(B.jsx)("p",{className:d()("characterList__aliveStatus",Object(u.a)({},tt.a.characterList__aliveStatus__alive,"Alive"===t.status),Object(u.a)({},tt.a.characterList__aliveStatus__dead,"Dead"===t.status),Object(u.a)({},tt.a.characterList__aliveStatus__unknown,"unknown"===t.status)),children:t.status})]})},t.id)}))}),Object(B.jsx)(Y,{})]})})})),at=c.a.memo((function(){return Object(B.jsx)(et,{})})),nt=c.a.memo((function(){return Object(B.jsxs)("div",{className:"container text-center home-page",children:[Object(B.jsx)("h1",{className:"p-b-4",children:"Home Page"}),Object(B.jsx)("h2",{children:"Created by Misha Kravtsov"})]})})),ct=c.a.memo((function(){return Object(B.jsx)("div",{className:"container text-center",children:Object(B.jsx)("h1",{children:"NOT FOUND PAGE"})})})),st=c.a.memo((function(){return Object(B.jsx)("nav",{children:Object(B.jsxs)("ul",{className:"nav nav-pills justify-content-center navbar-inverse",children:[Object(B.jsx)("li",{className:"nav-item",children:Object(B.jsx)(o.b,{to:"/home",className:"nav-link",children:"Home page"})}),Object(B.jsx)("li",{className:"nav-item",children:Object(B.jsx)(o.b,{to:"/list",className:"nav-link",children:"List of characters"})})]})})})),rt=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(st,{}),Object(B.jsxs)(l.d,{children:[Object(B.jsx)(l.b,{path:"/",element:Object(B.jsx)(l.a,{to:"/home",replace:!0})}),Object(B.jsx)(l.b,{path:"/home",element:Object(B.jsx)(nt,{})}),Object(B.jsx)(l.b,{path:"/list/*",element:Object(B.jsx)(at,{}),children:Object(B.jsx)(l.b,{path:":charId",element:Object(B.jsx)(at,{})})}),Object(B.jsx)(l.b,{path:"*",element:Object(B.jsx)(ct,{})})]})]})},it=Object(f.a)({reducer:{listOfChars:J,characterDetails:P}});a(53);r.a.render(Object(B.jsx)(o.a,{children:Object(B.jsx)(i.a,{store:it,children:Object(B.jsx)(n.StrictMode,{children:Object(B.jsx)(rt,{})})})}),document.getElementById("root"))},8:function(t,e,a){t.exports={characterList:"CharDescription_characterList__32S5z",characterList__contentContainer:"CharDescription_characterList__contentContainer__2ahnS",characterList__image:"CharDescription_characterList__image__1gEk6",characterList__aliveStatus__dead:"CharDescription_characterList__aliveStatus__dead__3jWWd",characterList__aliveStatus__alive:"CharDescription_characterList__aliveStatus__alive__1uHks",characterList__aliveStatus__unknown:"CharDescription_characterList__aliveStatus__unknown__g2g-_",charDescription:"CharDescription_charDescription__1jKH5",charDescription__content:"CharDescription_charDescription__content__3IQKW",charDescription__image:"CharDescription_charDescription__image__1DP6R",charDescription__listEpisodes:"CharDescription_charDescription__listEpisodes__3yQI4",charDescription__listEpisodes_item:"CharDescription_charDescription__listEpisodes_item__1-zxX",closeBtn:"CharDescription_closeBtn__3G5Av"}}},[[54,1,2]]]);
//# sourceMappingURL=main.9167db3e.chunk.js.map