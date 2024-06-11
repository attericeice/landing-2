(()=>{"use strict";function e(e,C,n){switch(n){case"next":return e===C-1?0:e+1;case"prev":return 0===e?C-1:e-1}}function C(e,C){e.forEach((e=>{e.style.transform=`translateX(-${100*C}%)`}))}const n=document.querySelector(".slider-menu__arrows-prev"),t=document.querySelector(".slider-menu__arrows-next"),r=document.querySelectorAll(".preview-slider__slide img");let l=0;n.addEventListener("click",(()=>{l=e(l,r.length,"prev"),C(r,l)})),t.addEventListener("click",(()=>{l=e(l,r.length,"next"),C(r,l)})),function(e,C){const n=document.querySelector(".header-navigation"),t=document.querySelector(".header-buttons__bar");t.addEventListener("click",(()=>{n.classList.contains("open")?(n.classList.remove("open"),t.querySelector("svg").remove(),t.insertAdjacentHTML("afterbegin",'\n            <svg width="41" height="26" viewBox="0 0 41 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 20C3.79565 20 4.55871 20.3161 5.12132 20.8787C5.68393 21.4413 6 22.2044 6 23C6 23.7956 5.68393 24.5587 5.12132 25.1213C4.55871 25.6839 3.79565 26 3 26C2.20435 26 1.44129 25.6839 0.87868 25.1213C0.316071 24.5587 0 23.7956 0 23C0 22.2044 0.316071 21.4413 0.87868 20.8787C1.44129 20.3161 2.20435 20 3 20ZM38.998 21C40.104 21 41 21.888 41 23C41 24.105 40.11 25 38.998 25H11.002C10.739 25.0008 10.4785 24.9496 10.2354 24.8494C9.99228 24.7492 9.77135 24.6019 9.58532 24.4161C9.39928 24.2303 9.25181 24.0095 9.15136 23.7665C9.05091 23.5234 8.99947 23.263 9 23C9 21.895 9.89 21 11.002 21H38.998ZM3 10C3.79565 10 4.55871 10.3161 5.12132 10.8787C5.68393 11.4413 6 12.2044 6 13C6 13.7956 5.68393 14.5587 5.12132 15.1213C4.55871 15.6839 3.79565 16 3 16C2.20435 16 1.44129 15.6839 0.87868 15.1213C0.316071 14.5587 0 13.7956 0 13C0 12.2044 0.316071 11.4413 0.87868 10.8787C1.44129 10.3161 2.20435 10 3 10ZM38.998 11C40.104 11 41 11.888 41 13C41 14.105 40.11 15 38.998 15H11.002C10.739 15.0008 10.4785 14.9496 10.2354 14.8494C9.99228 14.7492 9.77135 14.6019 9.58532 14.4161C9.39928 14.2303 9.25181 14.0095 9.15136 13.7665C9.05091 13.5234 8.99947 13.263 9 13C9 11.895 9.89 11 11.002 11H38.998ZM3 0C3.79565 0 4.55871 0.31607 5.12132 0.878679C5.68393 1.44129 6 2.20435 6 3C6 3.79565 5.68393 4.55871 5.12132 5.12132C4.55871 5.68393 3.79565 6 3 6C2.20435 6 1.44129 5.68393 0.87868 5.12132C0.316071 4.55871 0 3.79565 0 3C0 2.20435 0.316071 1.44129 0.87868 0.878679C1.44129 0.31607 2.20435 0 3 0ZM38.998 1C40.104 1 41 1.888 41 3C41 4.105 40.11 5 38.998 5H11.002C10.739 5.00079 10.4785 4.94961 10.2354 4.84941C9.99228 4.7492 9.77135 4.60195 9.58532 4.4161C9.39928 4.23025 9.25181 4.00947 9.15136 3.76645C9.05091 3.52343 8.99947 3.26296 9 3C9 1.895 9.89 1 11.002 1H38.998Z" fill="black"/>\n        </svg>\n            ')):(t.querySelector("svg").remove(),t.insertAdjacentHTML("afterbegin",'\n            <svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0.470317 0.470154C0.610942 0.329703 0.801566 0.250814 1.00032 0.250814C1.19907 0.250814 1.38969 0.329703 1.53032 0.470154L5.00032 3.94015L8.47032 0.470154C8.53898 0.396467 8.62178 0.337365 8.71378 0.296373C8.80578 0.255381 8.90509 0.233339 9.00579 0.231562C9.1065 0.229785 9.20653 0.24831 9.29991 0.286031C9.3933 0.323752 9.47814 0.379897 9.54935 0.451115C9.62057 0.522334 9.67672 0.607168 9.71444 0.700556C9.75216 0.793944 9.77069 0.893973 9.76891 0.994676C9.76713 1.09538 9.74509 1.19469 9.7041 1.28669C9.66311 1.37869 9.604 1.46149 9.53032 1.53015L6.06032 5.00015L9.53032 8.47015C9.604 8.53882 9.66311 8.62162 9.7041 8.71362C9.74509 8.80561 9.76713 8.90493 9.76891 9.00563C9.77069 9.10633 9.75216 9.20636 9.71444 9.29975C9.67672 9.39314 9.62057 9.47797 9.54935 9.54919C9.47814 9.62041 9.3933 9.67656 9.29991 9.71428C9.20653 9.752 9.1065 9.77052 9.00579 9.76875C8.90509 9.76697 8.80578 9.74493 8.71378 9.70393C8.62178 9.66294 8.53898 9.60384 8.47032 9.53015L5.00032 6.06015L1.53032 9.53015C1.38814 9.66263 1.2001 9.73476 1.00579 9.73133C0.811493 9.7279 0.626108 9.64919 0.488695 9.51178C0.351282 9.37436 0.27257 9.18898 0.269142 8.99468C0.265713 8.80037 0.337837 8.61233 0.470317 8.47015L3.94032 5.00015L0.470317 1.53015C0.329866 1.38953 0.250977 1.1989 0.250977 1.00015C0.250977 0.801403 0.329866 0.610779 0.470317 0.470154Z" fill="black"/>\n</svg>\n\n            '),n.classList.add("open"))}))}()})();