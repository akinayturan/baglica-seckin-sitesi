const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Menüyü aç');}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Menüyü kapat':'Menüyü aç');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
window.addEventListener('resize',()=>{if(window.innerWidth>760)closeMenu();});
const info=document.querySelector('#info-dialog');
function showInfo(title,body){document.querySelector('#dialog-title').textContent=title;document.querySelector('#dialog-body').textContent=body;info.showModal();}
document.querySelector('#management-button').addEventListener('click',()=>showInfo('Yönetim iletişimi','Site yönetim birimi, A Blok’un en alt katında yer alıyor. Telefon, e-posta ve çalışma saatleri henüz eklenmedi.'));
document.querySelector('#image-info').addEventListener('click',()=>showInfo('Görseller hakkında','Bu sayfada Bağlıca Seçkin Sitesi’ne ait, kullanıcı tarafından paylaşılan görüntüler kullanılmıştır. Sokak görüntüleri Google kaynaklıdır; görüntülerdeki kaynak işaretleri korunmuştur. Çekim tarihlerinden bu yana site görünümünde değişiklikler olabilir. Blok ve kapalı otopark girişi fotoğrafı da kullanıcı tarafından paylaşılmıştır.'));
document.querySelectorAll('dialog').forEach(d=>{d.querySelector('.dialog-close').addEventListener('click',()=>d.close());d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});});
document.querySelector('.dialog-ok').addEventListener('click',()=>info.close());
const gallery=[...document.querySelectorAll('.gallery-item')];const lightbox=document.querySelector('#lightbox');let current=0;
function displayPhoto(index){current=(index+gallery.length)%gallery.length;const el=gallery[current];document.querySelector('#lightbox-image').src=el.dataset.image;document.querySelector('#lightbox-image').alt=el.dataset.caption;document.querySelector('#lightbox-caption').textContent=el.dataset.caption;document.querySelector('#photo-counter').textContent=`${current+1} / ${gallery.length}`;}
gallery.forEach((el,i)=>el.addEventListener('click',()=>{displayPhoto(i);lightbox.showModal();}));
document.querySelector('#previous-photo').addEventListener('click',()=>displayPhoto(current-1));document.querySelector('#next-photo').addEventListener('click',()=>displayPhoto(current+1));
lightbox.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')displayPhoto(current-1);if(e.key==='ArrowRight')displayPhoto(current+1);});
let toastTimeout;function toast(message){const el=document.querySelector('.toast');el.textContent=message;el.classList.add('visible');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.classList.remove('visible'),3500);}
document.querySelector('.copy-address').addEventListener('click',async()=>{const address='Bağlıca Seçkin Sitesi, Bağlıca, Çambayırı Cd. No:134, 06790 Etimesgut/Ankara';try{await navigator.clipboard.writeText(address);toast('Adres panoya kopyalandı.');}catch{showInfo('Adres bilgisi',address);}});
document.querySelector('#year').textContent=new Date().getFullYear();
