module.exports=function(a){function n(l){if(i[l])return i[l].exports;var r=i[l]={exports:{},id:l,loaded:!1};return a[l].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var i={};return n.m=a,n.c=i,n.p="",n(0)}({0:function(a,n,i){a.exports=i(36)},36:function(a,n,i){"use strict";var l=i(37);a.exports={template:l,data:{loremipsum:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}}},37:function(a,n){a.exports='<div class="screen-bar shadow-1 fixed-top">Quasar Parallax</div>\n\n<h5>\n  Scroll down (best using scrollbar instead of mouse scroll\n  if on desktop) to see Parallax in action.\n</h5>\n\n<p v-for="n in 7" class="par-text">{{loremipsum}}</p>\n\n<parallax src="assets/parallax1.jpg" :height="200">\n  <div slot="loading">Loading...</div>\n  <h1>Parallax</h1>\n</parallax>\n\n<p v-for="n in 7" class="par-text">{{loremipsum}}</p>\n\n<parallax src="assets/parallax2.jpg">\n  <div slot="loading">Loading...</div>\n  <h1>Parallax</h1>\n</parallax>\n\n<p v-for="n in 7" class="par-text">{{loremipsum}}</p>\n\n<parallax src="assets/parallax1.jpg">\n  <div slot="loading">Loading...</div>\n  <h1>Parallax</h1>\n</parallax>\n\n<p v-for="n in 7" class="par-text">{{loremipsum}}</p>\n\n<parallax src="assets/mountains.jpg" :height="200">\n  <div slot="loading">Loading...</div>\n  <h1>Parallax</h1>\n</parallax>\n\n<p v-for="n in 7" class="par-text">{{loremipsum}}</p>\n'}});