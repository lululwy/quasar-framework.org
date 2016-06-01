module.exports=function(n){function e(i){if(o[i])return o[i].exports;var t=o[i]={exports:{},id:i,loaded:!1};return n[i].call(t.exports,t,t.exports,e),t.loaded=!0,t.exports}var o={};return e.m=n,e.c=o,e.p="",e(0)}({0:function(n,e,o){n.exports=o(31)},31:function(n,e,o){"use strict";function i(){new quasar.Modal({template:'<p v-for="n in 10">This is a basic modal. Scroll down to close.</p><button class="secondary" @click="close()">Close Me</button>'}).css({padding:"50px",minWidth:"50vw"}).show()}function t(){new quasar.Modal({template:'<p v-for="n in 10">This is a basic modal. Scroll down to close.</p><button class="secondary" @click="close()">Close Me</button>'}).onShow(function(){quasar.notify("onShow triggered")}).onClose(function(){quasar.notify("onClose triggered")}).css({padding:"50px",minWidth:"50vw"}).show()}function a(){new quasar.Modal({template:r,data:{number:++c},methods:{openModal:a}}).css({minWidth:"80vw",minHeight:"80vh"}).show()}function s(){new quasar.Modal({template:'<h1>Minimized Modal</h1><p>This one has backdrop on small screens too.</p><button class="tertiary" @click="close()">Close Me</button>'}).set({minimized:!0}).css({padding:"50px"}).show()}function l(){new quasar.Modal({template:'<h1>Maximized Modal</h1><p>This one is maximized on bigger screens too.</p><button class="tertiary" @click="close()">Close Me</button>'}).set({maximized:!0}).css({padding:"50px"}).show()}var d=o(32),r=o(33),c=0;n.exports={template:d,data:{types:[{label:"Basic Modal",handler:i},{label:"Basic Modal with Events",handler:t},{label:"Screen Modal",handler:a},{label:"Always Minimized Modal",handler:s},{label:"Always Maximized Modal",handler:l}]}}},32:function(n,e){n.exports='<div class="screen-bar shadow-1 fixed-top">Quasar Modals</div>\n\n<p>\n  Click/Tap on each type to see it in action.\n</p>\n\n<div class="list item-delimiter highlight">\n  <div\n    class="item cursor-pointer"\n    v-for="modal in types"\n    @click="modal.handler()"\n  >\n    <i class="text-primary">open_in_new</i>\n    <div class="item-content">\n      <div class="item-label">{{modal.label}}</div>\n      <i>keyboard_arrow_right</i>\n    </div>\n  </div>\n</div>\n'},33:function(n,e){n.exports='<screen>\n\n  <div slot="header" class="row items-center">\n    <button @click="close()"><i>keyboard_arrow_left</i></button>\n    <p>Header</p>\n    <button @click="openModal()"><i>open_in_new</i></button>\n  </div>\n  <div slot="footer" class="row items-center">\n    <p>Footer</p>\n  </div>\n\n  <div style="padding: 20px">\n    <h1>Modal {{number}}</h1>\n    <button class="primary" @click="openModal()">Open Another Modal</button>\n    <h5 v-for="n in 15">This is a Modal presenting a Screen.</h5>\n  </div>\n\n</screen>\n'}});