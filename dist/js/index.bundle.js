(()=>{"use strict";var t={p:"/"};t.p,t.p,t.p;const e=document.getElementById("typeEffect"),n=["Innovator","Software Engineer","Computer Scientist","Mathematician","Problem-Solver","Creative Thinker","Technologist"];let o=0,i=0;function r(){i<n[o].length?(e.textContent+=n[o][i],i++,setTimeout(r,100)):setTimeout(s,100)}function s(){i>0?(e.textContent=n[o].substring(0,i-1),i--,setTimeout(s,100)):(o=(o+1)%n.length,setTimeout(r,100))}r()})();