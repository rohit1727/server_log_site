(this.webpackJsonpserver_log=this.webpackJsonpserver_log||[]).push([[0],{157:function(e,t,a){e.exports=a(314)},162:function(e,t,a){},314:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(37),o=a.n(c),l=(a(162),a(14)),s=a(15),i=a(16),u=a(17),m=a(18),h=a(34),b=a(321),p=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleItemClick=function(e,t){var n=t.name;return a.setState({activeItem:n})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.activeItem;return r.a.createElement(b.a,{pointing:!0,secondary:!0,size:"massive"},r.a.createElement(b.a.Item,null,r.a.createElement("img",{src:"https://www.bemlindia.in/images/logo_beml1.png"})),r.a.createElement(b.a.Item,{header:!0,name:"Bharat Earth Movers Limited"}),r.a.createElement(b.a.Menu,{position:"left"},r.a.createElement(b.a.Item,{as:h.b,to:"Hosts",color:"red",name:"Hosts",active:"Hosts"===e}),r.a.createElement(b.a.Item,{as:h.b,to:"Services",color:"green",name:"Services",active:"Services"===e}),r.a.createElement(b.a.Item,{as:h.b,to:"Analytics",color:"blue",name:"Analytics",active:"Analytics"===e})),r.a.createElement(b.a.Menu,{position:"right"},r.a.createElement(b.a.Item,{as:h.b,to:"About",color:"blue",name:"About",active:"About"===e})))}}]),t}(n.Component),E=a(35),v=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page"))}}]),t}(n.Component),j=a(33),O=a(142),f=a.n(O),d=a(320),g=a(147),y=a(322),k=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={hosts:{},isUp:0,error:null},e.getData=e.getData.bind(Object(j.a)(e)),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getData",value:function(){var e=this;f.a.get("".concat("https://rohit1727.github.io/server_log/status.json")).then((function(t){return e.setState({hosts:t.data.hosts})})).catch((function(t){return e.setState({error:t,done:!1})}))}},{key:"componentDidMount",value:function(){this.getData(),setInterval(this.getData,2e3)}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.hosts).map((function(t){return 1==e.state.hosts[t].current_state?r.a.createElement(d.a,{color:"green",href:"/#/Services"},r.a.createElement(d.a.Content,null,r.a.createElement(d.a.Header,null,e.state.hosts[t].host_name),r.a.createElement(d.a.Description,null,e.state.hosts[t].plugin_output)),r.a.createElement(d.a.Content,{extra:!0},r.a.createElement(g.a,{color:"green",floating:!0},"UP"))):r.a.createElement(d.a,{color:"red",href:"/#/Analytics"},r.a.createElement(d.a.Content,null,r.a.createElement(d.a.Header,null,e.state.hosts[t].host_name),r.a.createElement(d.a.Description,null,e.state.hosts[t].plugin_output)),r.a.createElement(d.a.Content,{extra:!0},r.a.createElement(g.a,{color:"red",floating:!0},"DOWN")))})),a=Object.keys(t).map((function(e){return r.a.createElement(y.a.Column,{value:e},t[e])}));return r.a.createElement(y.a,{padded:!0,columns:4},a)}}]),t}(n.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Services Page"))}}]),t}(n.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Analytics Page"))}}]),t}(n.Component),A=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Page"))}}]),t}(n.Component),I=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:v}),r.a.createElement(E.a,{path:"/hosts",component:k}),r.a.createElement(E.a,{path:"/services",component:C}),r.a.createElement(E.a,{path:"/analytics",component:w}),r.a.createElement(E.a,{path:"/about",component:A}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(313);o.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.fb77ae88.chunk.js.map