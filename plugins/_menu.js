const {
    cmd,
    commands,
    isPublic
} = require("../lib/plugins.js");
const plugins = require("../lib/plugins.js");
const {
    OWNER_NAME,
    BOT_NAME,
    HANDLERS
} = require("../config.js");
const font = require("@viper-x/fancytext");
const fs = require("fs");
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

function _0x12e7(){const _0x229cce=['commands','4589168cGTupQ','desc','10443408NFSNbF','7EYCIhN','test','dontAddCommandList','match','9eMQxXG','toLowerCase','35mswCJc','22kJEhFA','tiny','\x20\x20➪\x20','toString','hey\x20:\x20','misc','en-IN','╔════════╗\x0a\x0a\x20\x20\x20\x20*ʜɪʟᴜx*\x0a╚════════╝\x0a\x0a','766861opkgZu','jid','forEach','push','toLocaleString','reply','*\x0a*description\x20:\x20','category','error','571898LCUcPR','split','819TkidNL','sort','35920LmXllV','name','315628jRsjWo','Show\x20All\x20commands','filter','*command\x20:\x20','\x0a\x20🍁\x20*','111966ejXjwF'];_0x12e7=function(){return _0x229cce;};return _0x12e7();}const _0x4ee774=_0x3b06;function _0x3b06(_0x2ebec8,_0x6671b1){const _0x12e7b4=_0x12e7();return _0x3b06=function(_0x3b0637,_0x199e0c){_0x3b0637=_0x3b0637-0x19e;let _0x2efe23=_0x12e7b4[_0x3b0637];return _0x2efe23;},_0x3b06(_0x2ebec8,_0x6671b1);}(function(_0x3f439e,_0x137a0b){const _0x1ccd43=_0x3b06,_0x4c623f=_0x3f439e();while(!![]){try{const _0x53b944=parseInt(_0x1ccd43(0x1b9))/0x1+parseInt(_0x1ccd43(0x1c2))/0x2+parseInt(_0x1ccd43(0x1ae))/0x3*(parseInt(_0x1ccd43(0x1a0))/0x4)+-parseInt(_0x1ccd43(0x1b0))/0x5*(-parseInt(_0x1ccd43(0x1a5))/0x6)+-parseInt(_0x1ccd43(0x1aa))/0x7*(-parseInt(_0x1ccd43(0x1a7))/0x8)+-parseInt(_0x1ccd43(0x1c4))/0x9*(-parseInt(_0x1ccd43(0x19e))/0xa)+-parseInt(_0x1ccd43(0x1b1))/0xb*(parseInt(_0x1ccd43(0x1a9))/0xc);if(_0x53b944===_0x137a0b)break;else _0x4c623f['push'](_0x4c623f['shift']());}catch(_0x2f9fa6){_0x4c623f['push'](_0x4c623f['shift']());}}}(_0x12e7,0x8da0c),cmd({'name':'menu','category':_0x4ee774(0x1b6),'fromMe':isPublic,'desc':_0x4ee774(0x1a1)},async({client:_0x2220b5,m:_0x345899,args:_0x5cba6c})=>{const _0x459d2f=_0x4ee774;try{if(_0x5cba6c){for(let _0x4a67b5 of plugins[_0x459d2f(0x1a6)]){if(_0x4a67b5['name'][_0x459d2f(0x1ab)](_0x5cba6c))return _0x345899[_0x459d2f(0x1be)](_0x459d2f(0x1a3)+_0x5cba6c['trim']()+_0x459d2f(0x1bf)+_0x4a67b5[_0x459d2f(0x1a8)][_0x459d2f(0x1af)]()+'*');}return _0x345899[_0x459d2f(0x1be)](font[_0x459d2f(0x1b2)]('_oops\x20command\x20not\x20found_'));}else{let [_0x573bd,_0x420c47]=new Date()[_0x459d2f(0x1bd)](_0x459d2f(0x1b7),{'timeZone':'Asia/Kolkata'})[_0x459d2f(0x1c3)](','),_0x15ffbc=_0x459d2f(0x1b8)+readMore,_0xa1114c=[],_0x1b07da,_0xe0a10=[];commands['map']((_0x3b13f9,_0x37538c)=>{const _0x20c65c=_0x459d2f;_0x3b13f9[_0x20c65c(0x19f)]&&(_0x1b07da=_0x3b13f9[_0x20c65c(0x19f)][_0x20c65c(0x1b4)]()[_0x20c65c(0x1ad)](/(\W*)([A-Za-züşiğ öç1234567890]*)/)[0x2]);if(_0x3b13f9['dontAddCommandList']||_0x1b07da===undefined)return;if(!_0x3b13f9[_0x20c65c(0x1ac)]&&_0x1b07da!==undefined){let _0x24a340;!_0x3b13f9[_0x20c65c(0x1c0)]?_0x24a340=_0x20c65c(0x1b6):_0x24a340=_0x3b13f9[_0x20c65c(0x1c0)]['toLowerCase']();_0xa1114c[_0x20c65c(0x1bc)]({'cmd':_0x1b07da,'category':_0x24a340});if(!_0xe0a10['includes'](_0x24a340))_0xe0a10['push'](_0x24a340);}}),_0xa1114c['sort'](),_0xe0a10[_0x459d2f(0x1c5)]()[_0x459d2f(0x1bb)](_0x172607=>{const _0x441bc5=_0x459d2f;_0x15ffbc+=_0x441bc5(0x1a4)+_0x172607+'*\x0a\x0a';let _0x11d058=_0xa1114c[_0x441bc5(0x1a2)](({category:_0x440745})=>_0x440745==_0x172607);_0x11d058['sort'](),_0x11d058[_0x441bc5(0x1bb)](({cmd:_0x2bc541},_0x87dd6c)=>{const _0x1c7458=_0x441bc5;_0x15ffbc+=_0x1c7458(0x1b3)+_0x2bc541['trim']()+'\x0a';});}),_0x345899['send'](_0x345899[_0x459d2f(0x1ba)],font[_0x459d2f(0x1b2)](_0x15ffbc));}}catch(_0x487822){_0x345899[_0x459d2f(0x1c1)](_0x459d2f(0x1b5)+_0x487822);}}));
