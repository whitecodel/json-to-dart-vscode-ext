const _0x5d6645=_0x81da;(function(_0x58f1e9,_0x23edac){const _0x384ff0=_0x81da,_0x4d56aa=_0x58f1e9();while(!![]){try{const _0x28f50f=-parseInt(_0x384ff0(0xf2))/0x1+-parseInt(_0x384ff0(0xfc))/0x2*(parseInt(_0x384ff0(0xf6))/0x3)+parseInt(_0x384ff0(0x102))/0x4*(-parseInt(_0x384ff0(0xe7))/0x5)+-parseInt(_0x384ff0(0xe3))/0x6+parseInt(_0x384ff0(0x122))/0x7+parseInt(_0x384ff0(0x10c))/0x8*(-parseInt(_0x384ff0(0x118))/0x9)+-parseInt(_0x384ff0(0x11a))/0xa*(-parseInt(_0x384ff0(0xed))/0xb);if(_0x28f50f===_0x23edac)break;else _0x4d56aa['push'](_0x4d56aa['shift']());}catch(_0x2a7ede){_0x4d56aa['push'](_0x4d56aa['shift']());}}}(_0x1942,0x88f0f));function sanitizeString(_0x56207f){const _0x428035=_0x81da;return _0x56207f=_0x56207f[_0x428035(0x10e)](/^[^a-zA-Z0-9]+/,''),_0x56207f=_0x56207f[_0x428035(0x10e)](/[^a-zA-Z0-9]+(.)/g,(_0x5525f4,_0x3cae8e)=>_0x3cae8e[_0x428035(0xfe)]()),_0x56207f=_0x56207f[_0x428035(0x10e)](/[^a-zA-Z0-9]+$/,''),_0x56207f;}function _0x81da(_0x326c06,_0x526bfd){const _0x19424b=_0x1942();return _0x81da=function(_0x81dacc,_0xe0cf8b){_0x81dacc=_0x81dacc-0xe2;let _0x288cf1=_0x19424b[_0x81dacc];return _0x288cf1;},_0x81da(_0x326c06,_0x526bfd);}function generateDartClassFromString(_0x294034,_0x305a2d,_0x416fc7=_0x5d6645(0xf1),_0x48724f=new Map()){const _0x1a1a5c=_0x5d6645;let _0x5e4526=JSON['parse'](_0x294034);const _0xc01a39=_0x2676fb=>{const _0x5842c2=_0x81da;return typeof _0x2676fb==='string'||typeof _0x2676fb===_0x5842c2(0x103)||typeof _0x2676fb===_0x5842c2(0xf9)||_0x2676fb===null||_0x2676fb===undefined;},_0x4f5f4f=(_0x27c8b6,_0x85f6c9)=>{const _0x20f582=_0x81da;if(Array['isArray'](_0x85f6c9)){const _0x1283d2=_0x4f5f4f(_0x27c8b6,_0x85f6c9[0x0]);if(_0x1283d2[_0x20f582(0x105)](_0x20f582(0x113))){const _0x1c5288=_0x27c8b6[_0x20f582(0xea)](0x0)[_0x20f582(0xfe)]()+_0x27c8b6['slice'](0x1,-0x1);return generateDartClassFromString(JSON['stringify'](_0x85f6c9[0x0]),_0x305a2d,_0x1c5288,_0x48724f),_0x20f582(0x110)+_0x1c5288+'>';}if(_0x305a2d[_0x20f582(0x10a)]&&!_0x305a2d[_0x20f582(0xec)])return _0x20f582(0x110)+_0x1283d2+'?>';return _0x20f582(0x110)+_0x1283d2+'>';}if(typeof _0x85f6c9===_0x20f582(0xee)&&_0x85f6c9!==null){let _0x295721=_0x27c8b6['charAt'](0x0)[_0x20f582(0xfe)]()+_0x27c8b6['slice'](0x1);return _0x295721=sanitizeString(_0x295721),generateDartClassFromString(JSON[_0x20f582(0x11e)](_0x85f6c9),_0x305a2d,_0x295721,_0x48724f),_0x295721;}switch(typeof _0x85f6c9){case _0x20f582(0xfb):return _0x20f582(0x106);case _0x20f582(0x103):return _0x305a2d['numForNumber']?_0x20f582(0xf7):_0x85f6c9%0x1===0x0?'int':_0x20f582(0x119);case'boolean':return _0x20f582(0x11b);default:return _0x20f582(0x125);}},_0x323f84=(_0x2e4d30,_0x40017e='')=>{const _0x5e81a5=_0x81da;return Object[_0x5e81a5(0x121)](_0x2e4d30)[_0x5e81a5(0xe6)](([_0x19b453,_0x4a1f48])=>{const _0x436c50=_0x5e81a5;let _0xcd9e73=_0x4f5f4f(_0x19b453,_0x4a1f48);if(_0x305a2d[_0x436c50(0x10a)]&&!_0x305a2d[_0x436c50(0xec)]&&_0xcd9e73!=='dynamic')_0xcd9e73+='?';const _0x56478c=_0x305a2d[_0x436c50(0x104)]?_0x436c50(0x112):'';return _0x19b453=sanitizeString(_0x19b453),'\x20\x20'+_0x56478c+_0xcd9e73+'\x20'+_0x40017e+_0x19b453+';';})['join']('\x0a');};let _0x1726ff=_0x1a1a5c(0x109)+_0x416fc7+'\x20{\x0a';_0x1726ff+=_0x323f84(_0x5e4526)+'\x0a\x0a',_0x1726ff+='\x20\x20'+_0x416fc7+_0x1a1a5c(0x101),_0x1726ff+=Object[_0x1a1a5c(0x116)](_0x5e4526)[_0x1a1a5c(0xe6)](_0xcc5c88=>{const _0x1c2a83=_0x1a1a5c,_0x235cd5=_0x305a2d[_0x1c2a83(0xec)]||!_0x305a2d[_0x1c2a83(0x10a)]?'required\x20':'';return _0xcc5c88=sanitizeString(_0xcc5c88),_0x1c2a83(0x124)+_0x235cd5+'this.'+_0xcc5c88+',';})['join']('\x0a'),_0x1726ff+=_0x1a1a5c(0x115);_0x305a2d['putEncoderDecoderInClass']&&(_0x1726ff+='\x20\x20factory\x20'+_0x416fc7+_0x1a1a5c(0xff),_0x1726ff+=_0x1a1a5c(0x107)+_0x416fc7+'(\x0a',_0x1726ff+=Object[_0x1a1a5c(0x121)](_0x5e4526)[_0x1a1a5c(0xe6)](([_0x59ec5e,_0x5dd54c])=>{const _0x507824=_0x1a1a5c,_0x59832e=_0x4f5f4f(_0x59ec5e,_0x5dd54c);let _0x108233=sanitizeString(_0x59ec5e);if(_0x59832e[_0x507824(0x105)]('List<')){const _0x14fbcd=_0x4f5f4f(_0x59ec5e,_0x5dd54c[0x0]);return _0x507824(0xf4)+_0x108233+_0x507824(0x11d)+_0x59ec5e+_0x507824(0xf0)+_0x14fbcd+_0x507824(0xeb);}else{if(_0x59832e===_0x59ec5e['charAt'](0x0)['toUpperCase']()+_0x59ec5e['slice'](0x1))return _0x507824(0xf4)+_0x108233+':\x20'+_0x59832e+_0x507824(0x100)+_0x59ec5e+'\x27]),';}return _0x507824(0xf4)+_0x108233+_0x507824(0xf5)+_0x59ec5e+'\x27],';})[_0x1a1a5c(0xfa)]('\x0a'),_0x1726ff+=_0x1a1a5c(0xe9),_0x1726ff+=_0x1a1a5c(0xe8),_0x1726ff+='\x20\x20\x20\x20return\x20{\x0a',_0x1726ff+=Object[_0x1a1a5c(0x121)](_0x5e4526)[_0x1a1a5c(0xe6)](([_0x53d6cd,_0x4da689])=>{const _0x541d54=_0x1a1a5c,_0x30152e=_0x4f5f4f(_0x53d6cd,_0x4da689);let _0x59fc67=sanitizeString(_0x53d6cd);if(_0x30152e[_0x541d54(0x105)](_0x541d54(0x110))){if(_0x305a2d[_0x541d54(0x10a)]&&!_0x305a2d[_0x541d54(0xec)])return _0x541d54(0x10f)+_0x53d6cd+_0x541d54(0xe2)+_0x59fc67+_0x541d54(0x11f);return _0x541d54(0x10f)+_0x53d6cd+'\x27:\x20'+_0x59fc67+_0x541d54(0x11c);}else{if(_0x30152e===_0x53d6cd[_0x541d54(0xea)](0x0)[_0x541d54(0xfe)]()+_0x53d6cd[_0x541d54(0x10d)](0x1)){if(_0x305a2d[_0x541d54(0x10a)]&&!_0x305a2d[_0x541d54(0xec)])return _0x541d54(0x10f)+_0x53d6cd+'\x27:\x20'+_0x59fc67+_0x541d54(0x108);return _0x541d54(0x10f)+_0x53d6cd+_0x541d54(0xe2)+_0x59fc67+_0x541d54(0xe4);}}return _0x541d54(0x10f)+_0x53d6cd+'\x27:\x20'+_0x59fc67+',';})[_0x1a1a5c(0xfa)]('\x0a'),_0x1726ff+='\x0a\x20\x20\x20\x20};\x0a\x20\x20}\x0a');_0x305a2d['generateCopyWith']&&(_0x1726ff+='\x20\x20'+_0x416fc7+_0x1a1a5c(0x111),_0x1726ff+=Object[_0x1a1a5c(0x121)](_0x5e4526)[_0x1a1a5c(0xe6)](([_0x14b51d,_0x73607c])=>{const _0x21a29b=_0x1a1a5c;let _0x524bb9=_0x4f5f4f(_0x14b51d,_0x73607c);_0x14b51d=sanitizeString(_0x14b51d);if(_0x524bb9===_0x21a29b(0x125))return _0x21a29b(0x124)+_0x524bb9+'\x20'+_0x14b51d+',';return _0x21a29b(0x124)+_0x524bb9+'?\x20'+_0x14b51d+',';})['join']('\x0a'),_0x1726ff+=_0x1a1a5c(0xef)+_0x416fc7+'(\x0a',_0x1726ff+=Object[_0x1a1a5c(0x116)](_0x5e4526)[_0x1a1a5c(0xe6)](_0x265d5a=>{const _0x8a52eb=_0x1a1a5c;return _0x265d5a=sanitizeString(_0x265d5a),_0x8a52eb(0xf4)+_0x265d5a+':\x20'+_0x265d5a+_0x8a52eb(0xf8)+_0x265d5a+',';})[_0x1a1a5c(0xfa)]('\x0a'),_0x1726ff+='\x0a\x20\x20\x20\x20);\x0a\x20\x20}\x0a');_0x1726ff+='}\x0a';if(_0x48724f[_0x1a1a5c(0x114)](_0x416fc7)){let _0x350d03=_0x48724f[_0x1a1a5c(0xfd)](_0x416fc7)[_0x1a1a5c(0x120)];_0x350d03&&(_0x5e4526={..._0x350d03,..._0x5e4526});}else _0x48724f[_0x1a1a5c(0x117)](_0x416fc7,{'dartClass':_0x1726ff,'json':_0x5e4526});const _0x3ddf6d=Array[_0x1a1a5c(0x10b)](_0x48724f[_0x1a1a5c(0x123)]())[_0x1a1a5c(0xe6)](({dartClass:_0x56f5b1})=>_0x56f5b1)[_0x1a1a5c(0xf3)]()[_0x1a1a5c(0xfa)]('\x0a');return _0x3ddf6d;}function _0x1942(){const _0x98e17b=['40xjcGpc','slice','replace','\x20\x20\x20\x20\x20\x20\x27','List<','\x20copyWith({\x0a','final\x20','Map','has','\x0a\x20\x20});\x0a\x0a','keys','set','234063nVLOZk','double','1980IBomqR','bool','.map((item)\x20=>\x20item.toJson()).toList(),',':\x20(json[\x27','stringify','?.map((item)\x20=>\x20item?.toJson()).toList(),','json','entries','7179480cJAwXW','values','\x20\x20\x20\x20','dynamic','\x27:\x20','551976WGLPrq','.toJson(),','exports','map','760VnpJyE','\x20\x20Map<String,\x20dynamic>\x20toJson()\x20{\x0a','\x0a\x20\x20\x20\x20);\x0a\x20\x20}\x0a\x0a','charAt','.fromJson(item)).toList(),','makeAllRequired','92059CLxqzI','object','\x0a\x20\x20})\x20{\x0a\x20\x20\x20\x20return\x20','\x27]\x20as\x20List<dynamic>).map((item)\x20=>\x20','GeneratedModel','281378tPOEni','reverse','\x20\x20\x20\x20\x20\x20',':\x20json[\x27','1186569NztoOv','num','\x20??\x20this.','boolean','join','string','4aMDmGF','get','toUpperCase','.fromJson(Map<String,\x20dynamic>\x20json)\x20{\x0a','.fromJson(json[\x27','({\x0a','21772GWCCkh','number','makeFinal','includes','String','\x20\x20\x20\x20return\x20','?.toJson(),','class\x20','nullSafety','from'];_0x1942=function(){return _0x98e17b;};return _0x1942();}module[_0x5d6645(0xe5)]=generateDartClassFromString;
module.exports = {generateDartClassFromString};