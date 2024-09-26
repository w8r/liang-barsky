(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();/**
 * @preserve
 * Fast, destructive implemetation of Liang-Barsky line clipping algorithm.
 * It clips a 2D segment by a rectangle.
 * @author Alexander Milevski <info@w8r.name>
 * @license MIT
 */const M=1e-6,O=1,C=0;function P(a,n,o){const i=o[0],e=o[1];if(Math.abs(n)<M)return a<0;const t=a/n;if(n>0){if(t>e)return 0;t>i&&(o[0]=t)}else{if(t<i)return 0;t<e&&(o[1]=t)}return 1}function D(a,n,o,i,e){const t=a[0],c=a[1],W=n[0],x=n[1],y=W-t,g=x-c;if(i===void 0||e===void 0?(i=a,e=n):(i[0]=a[0],i[1]=a[1],e[0]=n[0],e[1]=n[1]),Math.abs(y)<M&&Math.abs(g)<M&&t>=o[0]&&t<=o[2]&&c>=o[1]&&c<=o[3])return O;const h=[0,1];if(P(o[0]-t,y,h)&&P(t-o[2],-y,h)&&P(o[1]-c,g,h)&&P(c-o[3],-g,h)){const E=h[0],L=h[1];return L<1&&(e[0]=t+L*y,e[1]=c+L*g),E>0&&(i[0]+=E*y,i[1]+=E*g),O}return C}var S=document.documentElement.clientHeight,T=document.documentElement.clientWidth,v=document.createElement("canvas"),r=v.getContext("2d");document.body.appendChild(v);var w=window.devicePixelRatio,m=T*w,p=S*w;v.width=m;v.height=p;v.style.width=T+"px";v.style.height=S+"px";r.translate(m/2,p/2);var s=[-m/2,-p/2,m/2,p/2],l=[-m/5,-p/5,m/5,p/5],I=[],N=[],f,u,d;r.strokeStyle="#aaaaaa";r.lineWidth=1;r.beginPath();for(f=0;f<200;f++)u=[s[0]+(s[2]-s[0])*Math.random(),s[1]+(s[3]-s[1])*Math.random()],d=[s[0]+(s[2]-s[0])*Math.random(),s[1]+(s[3]-s[1])*Math.random()],r.moveTo(u[0],u[1]),r.lineTo(d[0],d[1]),r.stroke(),I.push(u),N.push(d);r.closePath();r.lineWidth=2;r.strokeStyle="#ff0055";r.beginPath();for(f=0;f<200;f++)u=I[f],d=N[f],D(u,d,l)&&(r.moveTo(u[0],u[1]),r.lineTo(d[0],d[1]),r.stroke());r.beginPath();r.lineWidth=2;r.strokeStyle="#000000";r.moveTo(l[0],l[1]);r.rect(l[0],l[1],l[2]-l[0],l[3]-l[1]);r.stroke();