ace.define("ace/ext/whitespace",["require","exports","module","ace/lib/lang"],function(e,t,i){"use strict";var o=e("../lib/lang");t.$detectIndentation=function(e,t){function i(e){for(var t=0,i=e;i<o.length;i+=e)t+=o[i]||0;return t}for(var o=[],n=[],r=0,a=0,s=Math.min(e.length,1e3),c=0;s>c;c++){var l=e[c];if(/^\s*[^*+\-\s]/.test(l)){if(""==l[0])r++,a=-Number.MAX_VALUE;else{var h=l.match(/^ */)[0].length;if(h&&""!=l[h]){var d=h-a;!(d>0)||a%d||h%d||(n[d]=(n[d]||0)+1),o[h]=(o[h]||0)+1}a=h}for(;s>c&&"\\"==l[l.length-1];)l=e[c++]}}for(var p=n.reduce(function(e,t){return e+t},0),u={score:0,length:0},m=0,c=1;12>c;c++){var f=i(c);1==c?(m=f,f=o[1]?.9:.8,o.length||(f=0)):f/=m,n[c]&&(f+=n[c]/p),f>u.score&&(u={score:f,length:c})}if(u.score&&u.score>1.4)var g=u.length;return r>m+1?((1==g||r/4>m||u.score<1.8)&&(g=void 0),{ch:"",length:g}):m>r+1?{ch:" ",length:g}:void 0},t.detectIndentation=function(e){var i=e.getLines(0,1e3),o=t.$detectIndentation(i)||{};return o.ch&&e.setUseSoftTabs(" "==o.ch),o.length&&e.setTabSize(o.length),o},t.trimTrailingSpace=function(e,t){var i=e.getDocument(),o=i.getAllLines(),n=t&&t.trimEmpty?-1:0,r=[],a=-1;t&&t.keepCursorPosition&&(e.selection.rangeCount?e.selection.rangeList.ranges.forEach(function(e,t,i){var o=i[t+1];o&&o.cursor.row==e.cursor.row||r.push(e.cursor)}):r.push(e.selection.getCursor()),a=0);for(var s=r[a]&&r[a].row,c=0,l=o.length;l>c;c++){var h=o[c],d=h.search(/\s+$/);c==s&&(d<r[a].column&&d>n&&(d=r[a].column),a++,s=r[a]?r[a].row:-1),d>n&&i.removeInLine(c,d,h.length)}},t.convertIndentation=function(e,t,i){var n=e.getTabString()[0],r=e.getTabSize();i||(i=r),t||(t=n);for(var a=""==t?t:o.stringRepeat(t,i),s=e.doc,c=s.getAllLines(),l={},h={},d=0,p=c.length;p>d;d++){var u=c[d],m=u.match(/^\s*/)[0];if(m){var f=e.$getStringScreenWidth(m)[0],g=Math.floor(f/r),b=f%r,v=l[g]||(l[g]=o.stringRepeat(a,g));v+=h[b]||(h[b]=o.stringRepeat(" ",b)),v!=m&&(s.removeInLine(d,0,m.length),s.insertInLine({row:d,column:0},v))}}e.setTabSize(i),e.setUseSoftTabs(" "==t)},t.$parseStringArg=function(e){var t={};/t/.test(e)?t.ch="":/s/.test(e)&&(t.ch=" ");var i=e.match(/\d+/);return i&&(t.length=parseInt(i[0],10)),t},t.$parseArg=function(e){return e?"string"==typeof e?t.$parseStringArg(e):"string"==typeof e.text?t.$parseStringArg(e.text):e:{}},t.commands=[{name:"detectIndentation",description:"Detect indentation from content",exec:function(e){t.detectIndentation(e.session)}},{name:"trimTrailingSpace",description:"Trim trailing whitespace",exec:function(e,i){t.trimTrailingSpace(e.session,i)}},{name:"convertIndentation",description:"Convert indentation to ...",exec:function(e,i){var o=t.$parseArg(i);t.convertIndentation(e.session,o.ch,o.length)}},{name:"setIndentation",description:"Set indentation",exec:function(e,i){var o=t.$parseArg(i);o.length&&e.session.setTabSize(o.length),o.ch&&e.session.setUseSoftTabs(" "==o.ch)}}]}),function(){ace.require(["ace/ext/whitespace"],function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)})}();