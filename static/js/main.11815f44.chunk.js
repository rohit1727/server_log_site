(this.webpackJsonpserver_log=this.webpackJsonpserver_log||[]).push([[0],{158:function(e,t,a){e.exports=a(315)},163:function(e,t,a){},315:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(38),l=a.n(c),o=(a(163),a(14)),s=a(15),i=a(16),u=a(17),m=a(18),h=a(32),p=a(323),d=a(89),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleItemClick=function(e,t){var n=t.name;return a.setState({activeItem:n})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.activeItem;return r.a.createElement(p.a,{pointing:!0,secondary:!0,size:"massive"},r.a.createElement(p.a.Item,null,r.a.createElement("img",{src:"https://www.bemlindia.in/images/logo_beml1.png"})),r.a.createElement(p.a.Item,{header:!0,name:"Bharat Earth Movers Limited"}),r.a.createElement(p.a.Menu,{position:"left"},r.a.createElement(p.a.Item,{as:h.c,to:"Hosts",color:"red",name:"Hosts",active:"Hosts"===e},r.a.createElement(d.a,{name:"server"}),"Hosts"),r.a.createElement(p.a.Item,{as:h.c,to:"Services",color:"green",name:"Services",active:"Services"===e}),r.a.createElement(p.a.Item,{as:h.c,to:"Analytics",color:"blue",name:"Analytics",active:"Analytics"===e})),r.a.createElement(p.a.Menu,{position:"right"},r.a.createElement(p.a.Item,{as:h.c,to:"About",color:"blue",name:"About",active:"About"===e})))}}]),t}(n.Component),b=a(36),v=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"This is Home Page"))}}]),t}(n.Component),f=a(35),j=a(144),O=a.n(j),g=a(324),y=a(322),_=a(321),C=a(149),k=function(e){return r.a.createElement(h.b,{to:{pathname:"/ServerDetails",state:{host_data:e.host_data,services_data:e.services_data}}},r.a.createElement(_.a,{color:e.color,href:!0},r.a.createElement(_.a.Content,null,r.a.createElement(_.a.Header,null,e.hostname),r.a.createElement(_.a.Description,null,e.plugin_output)),r.a.createElement(_.a.Content,{extra:!0},r.a.createElement(C.a,{color:e.color,circular:!0,floating:!0},e.state))))},w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={hosts:{},services:{},loading:!0,failed:!1,error:null},e.getData=e.getData.bind(Object(f.a)(e)),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getData",value:function(){var e=this;O.a.get("".concat("https://rohit1727.github.io/server_log/status.json")).then((function(t){return e.setState({hosts:t.data.hosts,services:t.data.services,loading:!1,failed:!1})})).catch((function(t){return e.setState({error:t,loading:!1,failed:!0})}))}},{key:"componentDidMount",value:function(){this.getData(),setInterval(this.getData,2e3)}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.hosts).map((function(t){return 1==e.state.hosts[t].current_state?r.a.createElement(k,{color:"green",host_data:e.state.hosts[t],services_data:e.state.services[t],hostname:e.state.hosts[t].host_name,plugin_output:e.state.hosts[t].plugin_output,state:"UP"}):r.a.createElement(k,{color:"red",host_data:e.state.hosts[t],services_data:e.state.services[t],hostname:e.state.hosts[t].host_name,plugin_output:e.state.hosts[t].plugin_output,state:"DOWN"})})),a=Object.keys(t).map((function(e){return r.a.createElement(g.a.Column,{value:e},t[e])}));return this.state.failed?r.a.createElement(g.a,{padded:!0,columns:"equal"},r.a.createElement(g.a.Column,null),r.a.createElement(g.a.Column,null,r.a.createElement(y.a,{negative:!0},r.a.createElement(y.a.Header,null,r.a.createElement(d.a,{name:"warning"})," Sorry unable to fetch data"))),r.a.createElement(g.a.Column,null)):this.state.loading?r.a.createElement(y.a,{icon:!0},r.a.createElement(d.a,{name:"circle notched",loading:!0}),r.a.createElement(y.a.Content,null,r.a.createElement(y.a.Header,null,"Just one second"),"We are fetching that content for you.")):r.a.createElement(g.a,{padded:!0,columns:3},a)}}]),t}(n.Component),I=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Services Page"))}}]),t}(n.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Analytics Page"))}}]),t}(n.Component),A=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Page"))}}]),t}(n.Component),H=a(320),D=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.location.state.services_data,t=Object.keys(e).map((function(t){return r.a.createElement(H.a.Row,null,r.a.createElement(H.a.Cell,null,t),r.a.createElement(H.a.Cell,null,e[t].plugin_output))}));return r.a.createElement(g.a,{padded:!0,columns:"equal"},r.a.createElement(g.a.Column,null),r.a.createElement(g.a.Column,{width:8},r.a.createElement(H.a,{celled:!0,striped:!0},r.a.createElement(H.a.Header,null,r.a.createElement(H.a.Row,null,r.a.createElement(H.a.HeaderCell,{colSpan:"3"},this.props.location.state.host_data.host_name," Services")),t),r.a.createElement(H.a.Body,null))),r.a.createElement(g.a.Column,null))}}]),t}(n.Component),P=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:v}),r.a.createElement(b.a,{path:"/hosts",component:w}),r.a.createElement(b.a,{path:"/services",component:I}),r.a.createElement(b.a,{path:"/analytics",component:S}),r.a.createElement(b.a,{path:"/about",component:A}),r.a.createElement(b.a,{path:"/serverdetails",component:D}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(314);l.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.11815f44.chunk.js.map