import{a as E,i as m,S as $}from"./assets/vendor-CJCXbx8_.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const h=document.querySelector(".gallery"),a=document.querySelector(".search-form"),d=document.querySelector(".loader"),i=document.querySelector(".more-btn"),p=document.querySelector(".end-of-search-container"),y=15,q="46273703-9deead499e428c74e7f57dd27",O="https://pixabay.com/api/?",I="q",T="page",f=new URLSearchParams({key:q,orientation:"horizontal",image_type:"photo",safesearch:!0,per_page:y});async function g(t,e=1){f.set(I,t),f.set(T,e);const r=O+f.toString();return(await E.get(r)).data}function R(t){const e=t.split(/\s+/);let r="";for(const n of e){if((r+"+"+n).length>100)break;r+=(r?"+":"")+n}return r.toLowerCase()}const L=3e3,w="topRight";function S(t){m.warning({message:t,timeout:L,position:w,close:!1})}function _(t){m.error({message:t,timeout:L,position:w,close:!1})}function A(t){if(t.length===0){_("Sorry, there are no images matching your search query. Please try again!");return}h.insertAdjacentHTML("beforeend",x(t))}const x=t=>t.map(e=>`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      data-source="${e.largeImageURL}"
      data-likes = "${e.likes}"
      data-views = "${e.views}"
      data-comments = "${e.comments}"
      data-downloads = "${e.downloads}"
      alt="${e.tags}"
    />
  </a>
  <ul class="stats">
  <li class="stats-item">
  <p  class="stats-item-header">Likes</p>
  <p class="stats-item-value">${e.likes}</p>
  </li>
    <li class="stats-item">
  <p  class="stats-item-header">Views</p>
  <p class="stats-item-value">${e.views}</p>
  </li>
    <li class="stats-item">
  <p class="stats-item-header">Comments</p>
  <p class="stats-item-value">${e.comments}</p>
  </li>
    <li class="stats-item">
  <p  class="stats-item-header">Downloads</p>
  <p class="stats-item-value">${e.downloads}</p>
  </li>
  </ul>
</li>
`).join("");let l="",c=1;function M(t){t.preventDefault();const e=a.elements.query.value.trim();if(e==="")return S("Please enter a valid query!");l=R(e),c=1,h.innerHTML="",i.classList.add("is-hidden"),d.classList.remove("is-hidden"),p.classList.add("is-hidden"),g(l).then(r=>{b(r),a.reset(),i.classList.remove("is-hidden")}).catch(r=>v()),a.reset()}function U(t){l!==""&&(t.preventDefault(),d.classList.remove("is-hidden"),c+=1,g(l,c).then(e=>{b(e),B(e.totalHits)}).catch(e=>v()))}function B(t){c*y>=t&&(i.classList.add("is-hidden"),p.classList.remove("is-hidden"))}function v(){d.classList.add("is-hidden"),S("Sorry, something went wrong. Please try again!")}function b(t){A(t.hits),d.classList.add("is-hidden"),galleryLightbox.refresh(),k()}function k(){const t=document.querySelector(".gallery-item");if(!t)return;const e=t.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}a.addEventListener("submit",M);i.addEventListener("click",U);const P=new $(".gallery a",{captionsData:"alt",captionDelay:250});P.on("show.simplelightbox",function(){});P.on("close.simplelightbox",function(){});
//# sourceMappingURL=index.js.map
