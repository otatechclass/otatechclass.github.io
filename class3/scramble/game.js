const _0x3b7c1e=_0x4426;(function(_0x24324e,_0x187b9e){const _0x2c431e=_0x4426,_0xbd25da=_0x24324e();while(!![]){try{const _0x3f7edb=-parseInt(_0x2c431e(0x1ad))/0x1*(parseInt(_0x2c431e(0x1ae))/0x2)+parseInt(_0x2c431e(0x1af))/0x3*(-parseInt(_0x2c431e(0x1b0))/0x4)+-parseInt(_0x2c431e(0x1b1))/0x5+-parseInt(_0x2c431e(0x1b2))/0x6*(-parseInt(_0x2c431e(0x1b3))/0x7)+-parseInt(_0x2c431e(0x1b4))/0x8+parseInt(_0x2c431e(0x1b5))/0x9*(-parseInt(_0x2c431e(0x1b6))/0xa)+parseInt(_0x2c431e(0x1b7))/0xb;if(_0x3f7edb===_0x187b9e)break;else _0xbd25da['push'](_0xbd25da['shift']());}catch(_0x4af604){_0xbd25da['push'](_0xbd25da['shift']());}}}(_0x280c,0xbbfcc));function _0x280c(){const _0x39651a=['54cryWES','2133370ceJcjZ','34198065HDRfsL','Monster','Disguise','Witch','Pumpkin','Zombie','Frankenstein','October','Scarecrow','Pirate','Broomstick','Vampire','Princess','Candy','Werewolf','Mask','Spell','Ghoul','Spooky','Creepy','Slimy','Fangs','Blood','Skeleton','Graveyard','Screaming','Bats','Skull','Wicked','Scary','random','length','getElementById','scrambledWord','innerHTML','split','sort','Sorry\x20the\x20game\x20is\x20over.\x20Refresh\x20to\x20play\x20again.','myWord','value','toLowerCase','YES!','unscrambled','<div>','</div>','WRONG!','Game\x20Over!\x20You\x20unscrambled\x20','\x20words','16fpdDKY','24356LAZUdW','155589DmQcci','44KsotOr','2895270CdLemr','54IkvCxv','1051932tjFQRY','8535888CkykWP'];_0x280c=function(){return _0x39651a;};return _0x280c();}const allWords=['Costumes',_0x3b7c1e(0x1b8),_0x3b7c1e(0x1b9),'Ghost',_0x3b7c1e(0x1ba),_0x3b7c1e(0x1bb),'Candle',_0x3b7c1e(0x1bc),_0x3b7c1e(0x1bd),_0x3b7c1e(0x1be),_0x3b7c1e(0x1bf),_0x3b7c1e(0x1c0),'Crow','Cat',_0x3b7c1e(0x1c1),_0x3b7c1e(0x1c2),'Prince',_0x3b7c1e(0x1c3),_0x3b7c1e(0x1c4),_0x3b7c1e(0x1c5),_0x3b7c1e(0x1c6),_0x3b7c1e(0x1c7),'Goblin',_0x3b7c1e(0x1c8),'Alien','Mummy',_0x3b7c1e(0x1c9),_0x3b7c1e(0x1ca),_0x3b7c1e(0x1cb),_0x3b7c1e(0x1cc),_0x3b7c1e(0x1cd),_0x3b7c1e(0x1ce),_0x3b7c1e(0x1cf),'Party',_0x3b7c1e(0x1d0),_0x3b7c1e(0x1d1),_0x3b7c1e(0x1d2),_0x3b7c1e(0x1d3),_0x3b7c1e(0x1d4)];function _0x4426(_0xdf166d,_0xb50aef){const _0x280ca6=_0x280c();return _0x4426=function(_0x4426df,_0x2af243){_0x4426df=_0x4426df-0x1ad;let _0x56a1bd=_0x280ca6[_0x4426df];return _0x56a1bd;},_0x4426(_0xdf166d,_0xb50aef);}let selectedWord='',gameOver=![],cnt=0x0;function nextWord(){const _0x551b21=_0x3b7c1e;selectedWord=allWords[Math['floor'](Math[_0x551b21(0x1d5)]()*(allWords[_0x551b21(0x1d6)]-0x1))]['toLowerCase'](),document[_0x551b21(0x1d7)](_0x551b21(0x1d8))[_0x551b21(0x1d9)]=selectedWord[_0x551b21(0x1da)]('')[_0x551b21(0x1db)](()=>Math[_0x551b21(0x1d5)]()-0.5)['join']('');}function check(){const _0x4ec814=_0x3b7c1e;if(gameOver)return alert(_0x4ec814(0x1dc)),![];selectedWord===document[_0x4ec814(0x1d7)](_0x4ec814(0x1dd))[_0x4ec814(0x1de)][_0x4ec814(0x1df)]()?(alert(_0x4ec814(0x1e0)),document[_0x4ec814(0x1d7)](_0x4ec814(0x1e1))[_0x4ec814(0x1d9)]+=_0x4ec814(0x1e2)+selectedWord+_0x4ec814(0x1e3),document[_0x4ec814(0x1d7)](_0x4ec814(0x1dd))[_0x4ec814(0x1de)]='',cnt++,nextWord()):(alert(_0x4ec814(0x1e4)),giveUp());}function giveUp(){const _0x2d65a0=_0x3b7c1e;document[_0x2d65a0(0x1d7)](_0x2d65a0(0x1dd))['value']=selectedWord,gameOver=!![],alert(_0x2d65a0(0x1e5)+cnt+_0x2d65a0(0x1e6));}nextWord();