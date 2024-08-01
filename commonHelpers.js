import{a as f,i as p,S as v}from"./assets/vendor-ee72e1a4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const L="https://pixabay.com/api/",b="45110935-91aa782eb5f23a60393d7a38c",w=async(t,s=1,a=15)=>{try{return(await f.get(L,{params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:a}})).data}catch(o){throw new Error(o.response?o.response.data:o.message)}};function c(t){p.error({position:"topRight",message:`${t}`})}function m(t){const s=document.querySelector(".gallery-list"),a=new v(".gallery-list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}),o=t.hits.map(e=>`<div class="image-frame">
  <a href="${e.largeImageURL}">
  <img class="image" src="${e.webformatURL}" alt="${e.tags}" /></a>
  <div class ="text-gallery">
  <div class="text-block">
  <h5>likes</h5>
  <p>${e.likes}</p>
  </div>
  <div class="text-block">
  <h5>views</h5>
  <p>${e.views}</p>
  </div>
  <div class="text-block">
  <h5>comments</h5>
  <p>${e.comments}</p>
  </div>
  <div class="text-block">
  <h5>downloads</h5>
  <p>${e.downloads}</p>
  </div>
  </div>
  </div>`).join("");s.insertAdjacentHTML("beforeend",o),a.refresh()}const S=()=>{document.querySelector(".gallery-list").innerHTML=""},q=document.querySelector(".gallery-form"),y=document.querySelector(".input-for-gallery"),d=document.querySelector(".loading"),i=document.querySelector(".btn-load-more");let n=1;const u=15;let g="";q.addEventListener("submit",async t=>{t.preventDefault(),n=1,g=y.value.trim(),S(),i.classList.add("hidden"),await h()});i.addEventListener("click",()=>{n++,h()});async function h(){if(d.classList.remove("hidden"),g===""){c("Please enter a search query."),d.classList.add("hidden");return}try{const t=await w(g,n,u);if(t.total===0)c("Sorry, there are no images matching your search query. Please try again!");else{if(n>1){const s=document.querySelector(".gallery-list").getBoundingClientRect().height;m(t);const a=document.querySelector(".gallery-list").getBoundingClientRect().height;console.log(document.querySelector(".gallery-list").getBoundingClientRect()),window.scrollBy({top:(a-s)*.6,behavior:"smooth"})}else m(t);if(t.hits.length<u)i.classList.add("hidden");else if(t.totalHits>n*u)i.classList.remove("hidden");else return i.classList.add("hidden"),p.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}}catch(t){c(t.message)}finally{d.classList.add("hidden"),y.value=""}}
//# sourceMappingURL=commonHelpers.js.map
