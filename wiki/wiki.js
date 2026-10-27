window.WIKI_KNOWN_START=["rajomon","suzaku","suzakuRoad","suzakuGateApron","eastMarket","westMarket"];
window.WIKI_INIT=function(){'use strict';
// ゲームで行った所の印。ゲームと同じ場所（ino0190.github.io）で開いたときだけ、ゲームが残した記録 heian-known-places を読む（書き換えない）
var known={};try{known=JSON.parse(localStorage.getItem('heian-known-places')||'{}')||{};}catch(e){known={};}
var played=Object.keys(known).length>0,start=window.WIKI_KNOWN_START||[];
document.querySelectorAll('[data-known]').forEach(function(el){
 var id=el.getAttribute('data-known'),v=known[id],s=document.createElement('span');
 if(v==='visit'){s.className='badge';s.textContent='歩いて見つけた';}
 else if(played&&(v||start.indexOf(id)>=0)){s.className='badge heard';s.textContent='聞いたことがある';}
 else return;
 el.appendChild(s);});
// 取った実績の印（実績のページ）。ゲームが残した記録 heian-ach の got を読むだけ（書き換えない）
var ach={};try{ach=(JSON.parse(localStorage.getItem('heian-ach')||'{}')||{}).got||{};}catch(e){ach={};}
document.querySelectorAll('[data-ach]').forEach(function(el){if(ach[el.getAttribute('data-ach')]==null)return;var s=document.createElement('span');s.className='badge';s.textContent='取った';el.appendChild(s);});
var achn=document.getElementById('achn'),achc=Object.keys(ach).length;if(achn&&achc){achn.textContent='このブラウザで取った実績：'+achc+'件';achn.hidden=false;}
// 写真を押すと大きく見る（入口ページと同じ動き。閉じるボタン・画面のどこかを押す・Esc で閉じる）
// 番号の印を重ねた画面の写真（遊び方の svg.ui）と盤双六の盤の図（svg.board）は、絵ごと写して大きく見る
var zimgs=document.querySelectorAll('figure.photo img,figure.photo svg.ui,figure.photo svg.board'),zd=document.createElement('dialog');
if(zimgs.length&&typeof zd.showModal==='function'){
 var zb=document.createElement('button'),zf=document.createElement('figure'),zi=document.createElement('img'),zc=document.createElement('figcaption');
 zd.className='zoom';zd.setAttribute('aria-label','写真を大きく見る');zb.type='button';zb.textContent='閉じる';
 zf.appendChild(zi);zf.appendChild(zc);zd.appendChild(zb);zd.appendChild(zf);document.body.appendChild(zd);
 var zclear=function(){zi.removeAttribute('src');var s=zf.querySelector('svg');if(s)s.parentNode.removeChild(s);};
 zimgs.forEach(function(img){img.addEventListener('click',function(){
  var fc=img.closest('figure').querySelector('figcaption'),b=fc&&fc.querySelector('b'),svg=img.tagName.toLowerCase()==='svg';
  zclear();
  if(svg){zi.style.display='none';zf.insertBefore(img.cloneNode(true),zc);}else{zi.style.display='';zi.src=img.currentSrc||img.src;zi.alt=img.alt;}
  var label=svg?img.getAttribute('aria-label'):img.alt;
  zc.textContent=fc?(b?b.textContent+'　'+fc.textContent.slice(b.textContent.length):fc.textContent):label;zd.showModal();});});
 zd.addEventListener('click',function(){zd.close();});zd.addEventListener('close',zclear);}
// 動画は見える所まで来たら読み込む（入口ページと同じ。動きを減らす設定のときは止めたまま操作ボタンを出す）
var vs=document.querySelectorAll('video[data-src]');
if(vs.length){
 var calm=!!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
 var load=function(v){if(!v.getAttribute('src'))v.src=v.getAttribute('data-src');if(calm){v.controls=true;return;}var pr=v.play();if(pr&&pr.catch)pr.catch(function(){v.controls=true;});};
 if(!('IntersectionObserver' in window))vs.forEach(load);
 else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)load(e.target);else if(!e.target.paused&&!calm)e.target.pause();});},{rootMargin:'200px'});
  vs.forEach(function(v){io.observe(v);});}}
// 探す（search.html だけ）
var out=document.getElementById('results'),box=document.getElementById('q'),msg=document.getElementById('found');
var q=((window.WIKI_Q!=null?window.WIKI_Q:new URLSearchParams(location.search).get('q'))||'').trim();if(box&&q)box.value=q;
if(!out||!msg||!window.WIKI_INDEX)return;
if(!q){msg.textContent='上の「探す」に、人・場所・ことばを入れてください。';return;}
var words=q.toLowerCase().split(/\s+/).filter(Boolean);
var hits=window.WIKI_INDEX.filter(function(e){var s=(e.t+' '+e.s).toLowerCase();return words.every(function(w){return s.indexOf(w)>=0;});});
msg.textContent='「'+q+'」で '+hits.length+'件';
hits.slice(0,200).forEach(function(e){var li=document.createElement('li'),k=document.createElement('span'),a=document.createElement('a');
 k.className='tag';k.textContent=e.k;a.href=e.u;a.textContent=e.t;li.appendChild(k);li.appendChild(a);
 if(e.s){var p=document.createElement('span');p.className='meta';p.textContent='　'+e.s;li.appendChild(p);}
 out.appendChild(li);});
};

(function(){var main=document.getElementById('main'),P=window.WIKI_PAGES||{},T=window.WIKI_THUMBS||{};
 function show(){var h=decodeURIComponent((location.hash||'').replace(/^#\/?/,'')),q=null,a=null,i=h.indexOf('?');
  if(i>=0){q=new URLSearchParams(h.slice(i+1)).get('q');h=h.slice(0,i);}i=h.indexOf('~');if(i>=0){a=h.slice(i+1);h=h.slice(0,i);}
  var k=P[h]?h:'index',pg=P[k];document.title=pg.t;main.innerHTML=pg.m;
  main.querySelectorAll('img[data-th]').forEach(function(im){var s=T[im.getAttribute('data-th')];if(s)im.src=s;});
  document.querySelectorAll('header.site nav a').forEach(function(x){if(x.getAttribute('href')==='#/'+k)x.setAttribute('aria-current','page');else x.removeAttribute('aria-current');});
  document.querySelectorAll('dialog.zoom').forEach(function(d){d.remove();});window.WIKI_Q=k==='search'?(q||''):null;
  var box=document.getElementById('q');if(box&&k!=='search')box.value='';if(window.WIKI_INIT)window.WIKI_INIT();
  var el=a&&document.getElementById(a);if(el)el.scrollIntoView();else window.scrollTo(0,0);}
 var f=document.querySelector('form.find');if(f)f.addEventListener('submit',function(e){e.preventDefault();var v=(document.getElementById('q').value||'').trim();location.hash='#/search?q='+encodeURIComponent(v);});
 window.addEventListener('hashchange',show);show();})();