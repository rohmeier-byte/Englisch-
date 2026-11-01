const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:2500,height:900}});
await p.goto('file:///home/user/Englisch-/wachgekuesst/einladung/designs.html');await p.waitForTimeout(2500);
const els=await p.$$('.s');let i=0;for(const e of els){await e.screenshot({path:`design_${'ABCD'[i++]}.png`});}
await b.close()})();
