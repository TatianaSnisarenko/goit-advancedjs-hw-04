import{a as E,i as h,S as q}from"./assets/vendor-CJCXbx8_.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const p=document.querySelector(".gallery"),a=document.querySelector(".search-form"),d=document.querySelector(".loader"),i=document.querySelector(".more-btn"),y=document.querySelector(".end-of-search-container"),g=15,O="46273703-9deead499e428c74e7f57dd27",$="https://pixabay.com/api/?",I="q",T="page",f=new URLSearchParams({key:O,orientation:"horizontal",image_type:"photo",safesearch:!0,per_page:g});async function L(t,e=1){f.set(I,t),f.set(T,e);const r=$+f.toString();return(await E.get(r)).data}function R(t){const e=t.split(/\s+/);let r="";for(const n of e){if((r+"+"+n).length>100)break;r+=(r?"+":"")+n}return r.toLowerCase()}const w=3e3,S="topRight";function v(t){h.warning({message:t,timeout:w,position:S,close:!1})}function _(t){h.error({message:t,timeout:w,position:S,close:!1})}function A(t){if(t.length===0){_("Sorry, there are no images matching your search query. Please try again!");return}p.insertAdjacentHTML("beforeend",M(t))}const M=t=>t.map(e=>`<li class="gallery-item">
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
`).join("");let l="",c=1;function U(t){t.preventDefault();const e=a.elements.query.value.trim();if(e==="")return v("Please enter a valid query!");l=R(e),c=1,p.innerHTML="",i.classList.add("is-hidden"),d.classList.remove("is-hidden"),y.classList.add("is-hidden"),L(l).then(r=>{P(r),a.reset(),i.classList.remove("is-hidden")}).catch(r=>b()),a.reset()}function x(t){l!==""&&(t.preventDefault(),d.classList.remove("is-hidden"),c+=1,L(l,c).then(e=>{P(e),B(e.totalHits)}).catch(e=>b()))}function B(t){c*g>=t&&(i.classList.add("is-hidden"),y.classList.remove("is-hidden"))}function b(){d.classList.add("is-hidden"),v("Sorry, something went wrong. Please try again!")}function P(t){A(t.hits),d.classList.add("is-hidden"),m.refresh(),k()}function k(){const t=document.querySelector(".gallery-item");if(!t)return;const e=t.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}const m=new q(".gallery a",{captionsData:"alt",captionDelay:250});m.on("show.simplelightbox",function(){});m.on("close.simplelightbox",function(){});a.addEventListener("submit",U);i.addEventListener("click",x);
//# sourceMappingURL=index.js.map
