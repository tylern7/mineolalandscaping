(function(){
  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  function close(){m.classList.remove('open');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Open menu');}
  b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
  m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  var t=document.querySelector('textarea[data-max-words]'),wc=document.getElementById('wc');
  if(t){var max=+t.dataset.maxWords;t.addEventListener('input',function(){
    var n=(t.value.trim().match(/\S+/g)||[]).length;wc.textContent=n+' of '+max+' max words.';
    wc.classList.toggle('over',n>max);t.setCustomValidity(n>max?'Please keep the description to '+max+' words or fewer.':'');});}
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();
