import{n as o}from"./indexhtml-DmAGtWB6.js";function l(r,p){for(var e=0;e<p.length;e++){const t=p[e];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in r)){const a=Object.getOwnPropertyDescriptor(t,n);a&&Object.defineProperty(r,n,a.get?a:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}};(function(r,p){ace.define("ace/snippets/haml.snippets",["require","exports","module"],function(e,t,n){n.exports=`snippet t
	%table
		%tr
			%th
				\${1:headers}
		%tr
			%td
				\${2:headers}
snippet ul
	%ul
		%li
			\${1:item}
		%li
snippet =rp
	= render :partial => '\${1:partial}'
snippet =rpl
	= render :partial => '\${1:partial}', :locals => {}
snippet =rpc
	= render :partial => '\${1:partial}', :collection => @$1

`}),ace.define("ace/snippets/haml",["require","exports","module","ace/snippets/haml.snippets"],function(e,t,n){t.snippetText=e("./haml.snippets"),t.scope="haml"}),function(){ace.require(["ace/snippets/haml"],function(e){r&&(r.exports=e)})}()})(i);var s=i.exports;const c=o(s),f=l({__proto__:null,default:c},[s]);export{f as h};
