import{a5 as a,a6 as i,an as C,ao as w,a7 as e,af as z,a4 as k,ap as B,t as p,ac as S,ad as x,ai as X,ag as u,a8 as t,a9 as j,ab as v,al as P,aq as Y,ar as Z,w as ee,o as ae,j as oe,as as se,ae as h,at as te,au as ie,av as re,am as $,aj as f,aw as H,ax as Q,ay as E,az as R,V as G,aA as U,aB as ne,aC as le,aD as de,aE as ce,a as pe}from"./index.a3dee532.js";const J=s=>(C("data-v-2e49a396"),s=s(),w(),s),ue=J(()=>e("h2",null,[z("Desenvolvedor "),e("br"),z(" Front-End")],-1)),me=J(()=>e("h3",null,"simples e r\xE1pido.",-1)),fe=[ue,me];function ve(s,l){return a(),i("div",null,fe)}const ge={};var _e=k(ge,[["render",ve],["__scopeId","data-v-2e49a396"]]);const he=["onClick"],be={__name:"Menu",setup(s){const l=B(),r=p([{titulo:"Sobre",isAtivo:!0,id:1},{titulo:"Projetos",isAtivo:!1,id:2},{titulo:"Experi\xEAncia",isAtivo:!1,id:3},{titulo:"Forma\xE7\xE3o",isAtivo:!1,id:4}]),g=o=>{r.value.forEach(d=>{d.titulo!==o.titulo?d.isAtivo=!1:d.isAtivo=!0,l.setMenuAtual(o.id)})};return(o,d)=>(a(),i("ul",null,[(a(!0),i(S,null,x(r.value,c=>(a(),i("li",{key:c.titulo,class:X({ativo:c.isAtivo}),onClick:_=>g(c)},[e("span",null,u(c.titulo),1)],10,he))),128))]))}};var Se=k(be,[["__scopeId","data-v-2b3f72e4"]]);const xe={class:"flex"},ke=["href"],qe={__name:"Sociais",setup(s){const l=p([{name:"fa-brands fa-github",link:"https://github.com/caiocosta22"},{name:"fa-brands fa-linkedin",link:"https://www.linkedin.com/in/caiocosta22/"}]);return(r,g)=>(a(),i("div",xe,[(a(!0),i(S,null,x(l.value,o=>(a(),i("a",{key:o,href:o.link,target:"_blank"},[t(j,{class:"icons",name:o.name,color:"info",size:"md"},null,8,["name"])],8,ke))),128))]))}};var je=k(qe,[["__scopeId","data-v-790f0547"]]);const ye=s=>(C("data-v-73c929ec"),s=s(),w(),s),ze=Y('<div id="mobile" data-v-73c929ec><p data-v-73c929ec>Como em uma cl\xE1ssica hist\xF3ria de desenvolvedor de software, minha paix\xE3o nasceu ainda na inf\xE2ncia, repleta de novas tecnologias, despertando a aspira\xE7\xE3o de, um dia, poder trabalhar com isso. Sempre fui encantado por <b data-v-73c929ec>interfaces limpas e interativas </b>, suas constru\xE7\xF5es e as sensa\xE7\xF5es que provocam no usu\xE1rio. Assim, meu principal objetivo \xE9 transmitir essa experi\xEAncia nos meus produtos.</p></div><p data-v-73c929ec>J\xE1 trabalhei em projetos de pequeno e grande porte, como <b data-v-73c929ec>landing pages, hotsites e e-commerce</b>, para uma ampla gama de empresas, como <b data-v-73c929ec>distribuidoras, lojistas, incorporadoras e construtoras</b>. Nesses projetos, utilizei a tecnologia <b data-v-73c929ec>Vue 3</b>, junto com o <b data-v-73c929ec>Quasar Framework</b>, <b data-v-73c929ec>Figma Design</b> para cria\xE7\xE3o de prot\xF3tipos e o m\xE9todo <b data-v-73c929ec>KANBAN</b> como workflow.</p><p data-v-73c929ec>Tenho 22 anos, estou cursando <b data-v-73c929ec>An\xE1lise e Desenvolvimento de Sistemas</b>, estudo <b data-v-73c929ec>React com Typescript</b> pela plataforma Origamid e participo do programa <b data-v-73c929ec>Santander Coders 2024</b>, na trilha de Front-End, para ampliar meus conhecimentos em Angular.</p>',3),Ae=["href"],$e=ye(()=>e("span",null,"Download CV",-1)),Ce={__name:"Sobre",setup(s){const l=p("https://drive.google.com/file/d/103eyPu_UzIym3jMrR73-DmYe7TZtzyMQ/view?usp=sharing");return(r,g)=>(a(),i("div",null,[ze,e("a",{download:"CurriculoCaioCosta.pdf",href:l.value,target:"_blank",alt:"Curr\xEDculo"},[t(P,{color:"info",style:{"border-radius":"20px",border:"1px solid   #141414","box-shadow":"none"}},{default:v(()=>[$e]),_:1})],8,Ae)]))}};var N=k(Ce,[["__scopeId","data-v-73c929ec"]]);const W=Z({__name:"PerfectScrollbar",props:{tag:{default:"div"},options:{default:()=>({})}},emits:["scroll","ps-scroll-y","ps-scroll-x","ps-scroll-up","ps-scroll-down","ps-scroll-left","ps-scroll-right","ps-y-reach-start","ps-y-reach-end","ps-x-reach-start","ps-x-reach-end"],setup(s,{expose:l,emit:r}){const g=s,o=r,d=p(null),c=p(null);ee(()=>g.options,()=>{m(),_()},{deep:!0}),ae(()=>{d.value&&_()}),oe(()=>{m()});function _(){d.value&&(c.value=new se(d.value,g.options),q())}function m(){c.value&&(q(!1),c.value.destroy(),c.value=null)}const b={scroll:n("scroll"),"ps-scroll-y":n("ps-scroll-y"),"ps-scroll-x":n("ps-scroll-x"),"ps-scroll-up":n("ps-scroll-up"),"ps-scroll-down":n("ps-scroll-down"),"ps-scroll-left":n("ps-scroll-left"),"ps-scroll-right":n("ps-scroll-right"),"ps-y-reach-start":n("ps-y-reach-start"),"ps-y-reach-end":n("ps-y-reach-end"),"ps-x-reach-start":n("ps-x-reach-start"),"ps-x-reach-end":n("ps-x-reach-end")};function n(y){return function(A){o(y,A)}}function q(y=!0){var A;(A=c.value)!=null&&A.element&&Object.entries(b).forEach(([T,F])=>{var V,M;y?(V=c.value)==null||V.element.addEventListener(T,F):(M=c.value)==null||M.element.removeEventListener(T,F)})}return l({ps:c}),(y,A)=>(a(),h(ie(y.tag),{ref_key:"scrollbar",ref:d,class:"ps"},{default:v(()=>[te(y.$slots,"default")]),_:3},512))}}),D=s=>(C("data-v-df5b5bf2"),s=s(),w(),s),we={class:"container-box"},Ee={class:"grid"},Pe={class:"textos"},De=["innerHTML"],Ie={class:"cargo"},Te={class:"flex column"},Fe={class:"titulo-cargo"},Ve=D(()=>e("br",null,null,-1)),Me={key:0,class:"titulo-cargo"},Ne={class:"icones"},Le=D(()=>e("br",null,null,-1)),Oe=D(()=>e("span",null,null,-1)),Be={__name:"Experiencia",setup(s){const l=p([{empresa:"Ag\xEAncia Alastrar",titulo:"Desenvolvedor Fullstack",descricao:"Utilizando Vue 3 junto ao Quasar Framework para desenvolver landing pages e hotsites para empresas, criando e manipulando interfaces com o Figma Design, utilizando NODE para criar microsservi\xE7os que comuniquem-se ao front. Deploys para servidores FTP via GitHub Actions.",icons:[{name:"fa-brands fa-vuejs"},{name:"fa-brands fa-figma"},{name:"fa-brands fa-sass"},{name:"fa-brands fa-node-js"}],tempo:"10/2023 - Atuando"},{empresa:"G2 Sistemas",titulo:"Desenvolvedor Back-End",descricao:"Atuei refatorando c\xF3digos de microsservi\xE7os JAVA 8 para NODE, criando API REST para comunica\xE7\xE3o entre banco de dados e aplica\xE7\xF5es mobile voltada para entregas e vendas. Assim, tamb\xE9m executando manuten\xE7\xE3o e otimiza\xE7\xE3o de Bancos de dados relacionais.",icons:[{name:"fa-brands fa-node-js"},{name:"fa-brands fa-java"},{name:"fa-solid fa-database"},{name:"fa-brands fa-git-alt"}],tempo:"07/2023 - 10/2023"},{empresa:"G2 Sistemas",titulo:"Estagi\xE1rio de Suporte",subtitulo:"Analista de Suporte",descricao:"<b>Est\xE1gio</b>: Prestei suporte helpdesk a sistemas ERP, CRM e PDV. Trabalhando com consultas e atualiza\xE7\xF5es em bancos de dados relacionais (SQL SERVER e POSTGRES). <br> <b>Analista</b>: Trabalhei com bancos de dados relacionais em conjunto com power b.i para produzir relat\xF3rios para clientes. Al\xE9m de ser respons\xE1vel por testes de microsservi\xE7os em JAVA 8.",icons:[{name:"fa-solid fa-phone"},{name:"fa-solid fa-user"},{name:"fa-solid fa-database"},{name:"fa-solid fa-cloud"}],tempo:"11/2021 - 07/2023"},{empresa:"Instituto Federal do Cear\xE1",titulo:"Bolsista",descricao:"Atua\xE7\xE3o como t\xE9cnico, respons\xE1vel pela manuten\xE7\xE3o de computadores e vistoria  de sistemas do Campus desenvolvidos em PHP.",icons:[{name:"fa-solid fa-computer"},{name:"fa-solid fa-microchip"}],tempo:"04/2019 - 08/2019"}]);return(r,g)=>(a(),h(f(W),null,{default:v(()=>[e("div",we,[(a(!0),i(S,null,x(l.value,o=>(a(),i("div",{class:"box",key:o},[e("h6",null,u(o.empresa),1),e("div",Ee,[e("div",Pe,[e("p",{innerHTML:o.descricao},null,8,De)]),e("div",Ie,[t(re,{class:"separator",vertical:"",color:"warning"}),e("div",Te,[e("h6",Fe,[z(u(o.titulo)+" ",1),Ve]),o.subtitulo?(a(),i("h6",Me,u(o.subtitulo),1)):$("",!0),e("div",Ne,[(a(!0),i(S,null,x(o.icons,d=>(a(),h(j,{key:d,name:d.name,size:"sm",color:"info"},null,8,["name"]))),128))])])])]),e("span",null,[z(u(o.tempo)+" ",1),Le]),Oe]))),128))])]),_:1}))}};var L=k(Be,[["__scopeId","data-v-df5b5bf2"]]);const He={class:"grid"},Qe={class:"menu"},Re={class:"imagem"},Ge=["src"],Ue={class:"icones"},Je=["href"],We=["innerHTML"],Ke={__name:"Projetos",setup(s){const l=p([{id:1,titulo:"Portf\xF3lio",descricao:"Projeto pessoal com foco em apresentar minha identidade visual de forma simples.",imagem:"/images/projetos/portfolio.png",icons:["fa-brands fa-vuejs","fa-brands fa-sass","fa-brands fa-figma"],link:"https://github.com/caiocosta22/portfolio"},{id:2,titulo:"Sistema Cat\xE1logo",descricao:"Sendo desevenvolvido para automatizar artes de cat\xE1logos de produtos para Ag\xEAncia Alastrar.",imagem:"/images/projetos/sistemacatalogo.png",icons:["fa-brands fa-vuejs","fa-brands fa-node-js","fa-solid fa-database"],link:""},{id:3,titulo:"Super Academy",descricao:"Landing Page promocional de eventos da empresa Super Supply com foco na venda de ingressos.",imagem:"/images/projetos/superacademy.png",icons:["fa-brands fa-vuejs","fa-brands fa-sass","fa-brands fa-figma"],link:"https://superacademy.supersupply.com.br"},{id:4,titulo:"Galeam Incorporadora",descricao:"Site institucional da incorporadora, com foco em apresentar a empresa e seus principais projetos.",imagem:"/images/projetos/galeam.png",icons:["fa-brands fa-vuejs","fa-brands fa-sass"],link:"http://galeamgroup.com"},{id:5,titulo:"Super Supply",descricao:"Landing page institucional da distribuidora Super Supply, com foco em apresentar suas solu\xE7\xF5es e servi\xE7os para B2B.",imagem:"/images/projetos/supersupply.png",icons:["fa-brands fa-vuejs"],link:"https://supersupply.com.br"},{id:6,titulo:"Web Form",descricao:"Pequeno prot\xF3tipo de estudo de HTML e CSS proposto pelo programa Santander Coders 2024.",imagem:"/images/projetos/weform.png",icons:["fa-brands fa-html5","fa-brands fa-css3-alt"],link:"https://github.com/caiocosta22/webform-frontend"}]),r=p(!1),g=p([{id:1,titulo:"Portf\xF3lio",texto:"<p> Em termos de Design, meu principal objetivo foi mostrar pro usu\xE1rio minha identidade visual como nunca pude trabalhar em outros projetos antes. Por conta disso, utilizei tantas bordas pretas ao redor dos elementos de forma arrendoda, pra trazer uma sensa\xE7\xE3o l\xFAdica e confort\xE1vel, amo ilustra\xE7\xF5es, e cartoons dos anos 30, eles carregam esse tra\xE7o preto em volta dos personagens bem forte que quis adaptar para o projeto de alguma forma. </p> <img src='/images/projetos/cartoons.png' /> <p> <br> Outro grande desafio, com certeza foram as cores, passei horas no figma prototipando cores, principalmente, quando se trata de modo escuro, o modo claro sempre foi f\xE1cil de visualizar, por conta da minha paix\xE3o por tons past\xE9is, mas o escuro, foi um grande desafio que com certeza me levou muitas horas.</p> <img src='/images/projetos/cores.png' /> <br> <p> Quando chegamos no desenvolvimento, quis utilizar a componentiza\xE7\xE3o que o Vue me permite pra mostrar um pouco das minhas skills al\xE9m da estiliza\xE7\xE3o, como os dialogos abertos ao clicar nos cards, o menu lateral reativo para gerar uma renderiza\xE7\xE3o din\xE2mica dos conte\xFAdos, a utiliza\xE7\xE3o de um componente de scroll area para permitir o usu\xE1rio explorar o conte\xFAdo sem sair do foco do site, assim explorando um pouquinho do que aprendi nesse meu tempo como desenvolvedor front-end. </p>"},{id:2,titulo:"Sistema Cat\xE1logo",texto:"<p>Esse projeto tem um intuito de resolver uma problem\xE1tica constante dentro da ag\xEAncia, que \xE9 a produ\xE7\xE3o massiva de cat\xE1logos ser feito de forma manual.</p> <p>Cat\xE1logos de produtos s\xE3o essenciais para nossos clientes, e fazer p\xE1gina por p\xE1gina de um cat\xE1logo, de centenas de p\xE1ginas \xE9 um trabalho sobrehumano. </p> <p>Pra isso, decidi criar um sistema do zero com backend em NODE que ser\xE1 respons\xE1vel, por capturar os produtos no banco de dados do cliente, e enviar em formato JSON para o front-end ler, e produzir uma lista estilizada da maneira que o cliente precisa, assim otimizando completamente o processo de cria\xE7\xE3o dessas artes.</p>"},{id:3,titulo:"Super Academy",texto:"<p>Aqui foi criada uma landing page para capturar clientes para um evento que vai acontecer em julho de 2024.</p><p> Fui respons\xE1vel pela idealiza\xE7\xE3o, design e desenvolvimento completo da landing page, al\xE9m de ter exercitado um conhecimento em rela\xE7\xF5es a dominios e DNS. Pois, tive de criar um subdom\xEDnio no portal de hospedagem do cliente, e associar ao deploy da aplica\xE7\xE3o.</p><p>Trafego pago \xE9 extremamente eficiente para capturar pessoas para esses eventos, por\xE9m, uma landing page bem constru\xEDda com um design s\xF3lido passa uma sensa\xE7\xE3o de profissionalismo e permite apresentar o que ser\xE1 mostrado no evento para o visitante, assim funcionando de maneira mais efetiva para esse objetivo.</p>"},{id:4,titulo:"Galeam Incorporadora",texto:"<p>Ironicamente, foi um dos projetos mais desafiadores que trabalhei, por conta da quantidade massiva de fotos e v\xEDdeos que foram enviadas pelo time de Design do cliente.</p> <p>Ter que aliar o desempenho da aplica\xE7\xE3o, com fotos e v\xEDdeos pesados foi um grande desafio de otimiza\xE7\xE3o que tive de passar para construir esse site, j\xE1 que todo o Design foi projetado pelo time do cliente.</p> <p>Aqui aprendi muito sobre como funciona o Web Design Europeu, pois tive a oportunidade de trabalhar com um time que se localizava na Espanha, me comunicando em ingl\xEAs com eles.</p>"},{id:5,titulo:"Super Supply",texto:"<p>O primeiro projeto que desenvolvi para a Ag\xEAncia Alastrar, definitivamente, foi um divisor de \xE1guas pra mim.</p> <p>Por os estudos em pr\xE1tica foi bem mais dif\xEDcil do que parece, apesar de ser uma simples landing page, tenho bastante carinho por esse projeto, j\xE1 que foi minha primeira vez trabalhando aliado com um time de Design.</p>"},{id:6,titulo:"Web Form",texto:"<p>Um simples projeto de estudo de HTML e CSS pra exercitar um pouco do que aprendi no programa. Gosto bastante dessa ilustra\xE7\xE3o utilizada, e das cores que decidimos por na p\xE1gina, d\xE3o um toque muito confort\xE1vel.</p> <p>N\xE3o apliquei javascript no projeto, j\xE1 que n\xE3o era necess\xE1rio para finaliza\xE7\xE3o da task.</p>"}]),o=c=>{d.value=g.value.filter(_=>_.id===c)},d=p();return(c,_)=>(a(),h(f(W),null,{default:v(()=>[e("div",He,[(a(!0),i(S,null,x(l.value,m=>(a(),i("div",{class:"box",key:m},[e("div",Qe,[e("h6",null,u(m.titulo),1),t(j,{class:"botao",name:"fa-solid fa-expand",onClick:b=>(r.value=!r.value,o(m.id))},null,8,["onClick"])]),e("p",null,u(m.descricao),1),e("div",Re,[e("img",{src:m.imagem},null,8,Ge)]),e("div",Ue,[(a(!0),i(S,null,x(m.icons,b=>(a(),h(j,{key:b,name:b,color:"info",size:"sm"},null,8,["name"]))),128))]),e("a",{class:"link",href:m.link,target:"_blank"},u(m.link),9,Je)]))),128))]),t(H,{modelValue:r.value,"onUpdate:modelValue":_[0]||(_[0]=m=>r.value=m),"backdrop-filter":"blur(4px) saturate(150%)"},{default:v(()=>[t(Q,{class:"dialog"},{default:v(()=>[t(E,{class:"row items-center"},{default:v(()=>[e("h3",null,u(d.value[0].titulo),1),t(R),G(t(P,{icon:"close",flat:"",round:"",dense:""},null,512),[[U]])]),_:1}),t(E,null,{default:v(()=>[e("p",{innerHTML:d.value[0].texto},null,8,We)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};var Xe=k(Ke,[["__scopeId","data-v-5630c586"]]);const K=s=>(C("data-v-ec2fac14"),s=s(),w(),s),Ye={class:"grid"},Ze={class:"text-info"},ea={class:"lista"},aa={class:"flex row"},oa=K(()=>e("p",null,[e("b",null," Idiomas ")],-1)),sa=K(()=>e("div",{class:"flex column"},[e("p",null,[e("b",null," Ingl\xEAs "),z(" - Intermedi\xE1rio")]),e("p",null,[e("b",null," Portugu\xEAs "),z(" - Nativo")])],-1)),ta={__name:"Formacao",setup(s){const l=p([{tipo:"Gradua\xE7\xE3o",titulo:"Ci\xEAncia da Computa\xE7\xE3o",local:"IFCE",tempo:"2019 - 2022 Cursado at\xE9 o 5 semestre."},{tipo:"Tecn\xF3logo",titulo:"An\xE1lise e Desenvolvimento de Sistemas",local:"Est\xE1cio",tempo:"2022 - Cursando"}]);return(r,g)=>(a(),i(S,null,[e("div",Ye,[(a(!0),i(S,null,x(l.value,o=>(a(),i("div",{class:"box",key:o},[e("p",null,u(o.tipo),1),e("p",null,[e("b",null,u(o.titulo),1)]),e("p",null,[e("b",null,u(o.local),1)]),e("p",Ze,[e("b",null,u(o.tempo),1)])]))),128))]),e("div",ea,[e("div",aa,[t(j,{name:"fa-solid fa-language",color:"info"}),oa]),sa])],64))}};var O=k(ta,[["__scopeId","data-v-ec2fac14"]]);const ia={class:"container"},ra={class:"container-box"},na={class:"box"},la={class:"menu"},da={class:"imagem"},ca=["src"],pa={class:"icones"},ua=["href"],ma=["innerHTML"],fa={__name:"Slider",setup(s){const l=p({itemsToShow:2,snapAlign:"start",wrapAround:!0,autoplay:2e3}),r=p({268:{itemsToShow:1,snapAlign:"start"},768:{itemsToShow:2,snapAlign:"start"},1080:{itemsToShow:2,snapAlign:"start"}}),g=p([{id:1,titulo:"Portf\xF3lio",descricao:"Projeto pessoal com foco em apresentar minha identidade visual de forma simples.",imagem:"/images/projetos/portfolio.png",icons:["fa-brands fa-vuejs","fa-brands fa-sass","fa-brands fa-figma"],link:"https://github.com/caiocosta22/portfolio"},{id:2,titulo:"Sistema Cat\xE1logo",descricao:"Sendo desevenvolvido para automatizar artes de cat\xE1logos de produtos para Ag\xEAncia Alastrar.",imagem:"/images/projetos/sistemacatalogo.png",icons:["fa-brands fa-vuejs","fa-brands fa-node-js","fa-solid fa-database"],link:""},{id:3,titulo:"Super Academy",descricao:"Landing Page promocional de eventos da empresa Super Supply com foco na venda de ingressos.",imagem:"/images/projetos/superacademy.png",icons:["fa-brands fa-vuejs","fa-brands fa-sass","fa-brands fa-figma"],link:"https://superacademy.supersupply.com.br"},{id:4,titulo:"Galeam Incorporadora",descricao:"Site institucional da incorporadora, com foco em apresentar a empresa e seus principais projetos.",imagem:"/images/projetos/galeam.png",icons:["fa-brands fa-vuejs","fa-brands fa-sass"],link:"http://galeamgroup.com"},{id:5,titulo:"Super Supply",descricao:"Landing page institucional da distribuidora Super Supply, com foco em apresentar suas solu\xE7\xF5es e servi\xE7os para B2B.",imagem:"/images/projetos/supersupply.png",icons:["fa-brands fa-vuejs"],link:"https://supersupply.com.br"},{id:6,titulo:"Web Form",descricao:"Pequeno prot\xF3tipo de estudo de HTML e CSS proposto pelo programa Santander Coders 2024.",imagem:"/images/projetos/weform.png",icons:["fa-brands fa-html5","fa-brands fa-css3-alt"],link:"https://github.com/caiocosta22/webform-frontend"}]),o=p(!1),d=p([{id:1,titulo:"Portf\xF3lio",texto:"<p> Em termos de Design, meu principal objetivo foi mostrar pro usu\xE1rio minha identidade visual como nunca pude trabalhar em outros projetos antes. Por conta disso, utilizei tantas bordas pretas ao redor dos elementos de forma arrendoda, pra trazer uma sensa\xE7\xE3o l\xFAdica e confort\xE1vel, amo ilustra\xE7\xF5es, e cartoons dos anos 30, eles carregam esse tra\xE7o preto em volta dos personagens bem forte que quis adaptar para o projeto de alguma forma. </p> <img src='/images/projetos/cartoons.png' /> <p> <br> Outro grande desafio, com certeza foram as cores, passei horas no figma prototipando cores, principalmente, quando se trata de modo escuro, o modo claro sempre foi f\xE1cil de visualizar, por conta da minha paix\xE3o por tons past\xE9is, mas o escuro, foi um grande desafio que com certeza me levou muitas horas.</p> <img src='/images/projetos/cores.png' /> <br> <p> Quando chegamos no desenvolvimento, quis utilizar a componentiza\xE7\xE3o que o Vue me permite pra mostrar um pouco das minhas skills al\xE9m da estiliza\xE7\xE3o, como os dialogos abertos ao clicar nos cards, o menu lateral reativo para gerar uma renderiza\xE7\xE3o din\xE2mica dos conte\xFAdos, a utiliza\xE7\xE3o de um componente de scroll area para permitir o usu\xE1rio explorar o conte\xFAdo sem sair do foco do site, assim explorando um pouquinho do que aprendi nesse meu tempo como desenvolvedor front-end. </p>"},{id:2,titulo:"Sistema Cat\xE1logo",texto:"<p>Esse projeto tem um intuito de resolver uma problem\xE1tica constante dentro da ag\xEAncia, que \xE9 a produ\xE7\xE3o massiva de cat\xE1logos ser feito de forma manual.</p> <p>Cat\xE1logos de produtos s\xE3o essenciais para nossos clientes, e fazer p\xE1gina por p\xE1gina de um cat\xE1logo, de centenas de p\xE1ginas \xE9 um trabalho sobrehumano. </p> <p>Pra isso, decidi criar um sistema do zero com backend em NODE que ser\xE1 respons\xE1vel, por capturar os produtos no banco de dados do cliente, e enviar em formato JSON para o front-end ler, e produzir uma lista estilizada da maneira que o cliente precisa, assim otimizando completamente o processo de cria\xE7\xE3o dessas artes.</p>"},{id:3,titulo:"Super Academy",texto:"<p>Aqui foi criada uma landing page para capturar clientes para um evento que vai acontecer em julho de 2024.</p><p> Fui respons\xE1vel pela idealiza\xE7\xE3o, design e desenvolvimento completo da landing page, al\xE9m de ter exercitado um conhecimento em rela\xE7\xF5es a dominios e DNS. Pois, tive de criar um subdom\xEDnio no portal de hospedagem do cliente, e associar ao deploy da aplica\xE7\xE3o.</p><p>Trafego pago \xE9 extremamente eficiente para capturar pessoas para esses eventos, por\xE9m, uma landing page bem constru\xEDda com um design s\xF3lido passa uma sensa\xE7\xE3o de profissionalismo e permite apresentar o que ser\xE1 mostrado no evento para o visitante, assim funcionando de maneira mais efetiva para esse objetivo.</p>"},{id:4,titulo:"Galeam Incorporadora",texto:"<p>Ironicamente, foi um dos projetos mais desafiadores que trabalhei, por conta da quantidade massiva de fotos e v\xEDdeos que foram enviadas pelo time de Design do cliente.</p> <p>Ter que aliar o desempenho da aplica\xE7\xE3o, com fotos e v\xEDdeos pesados foi um grande desafio de otimiza\xE7\xE3o que tive de passar para construir esse site, j\xE1 que todo o Design foi projetado pelo time do cliente.</p> <p>Aqui aprendi muito sobre como funciona o Web Design Europeu, pois tive a oportunidade de trabalhar com um time que se localizava na Espanha, me comunicando em ingl\xEAs com eles.</p>"},{id:5,titulo:"Super Supply",texto:"<p>O primeiro projeto que desenvolvi para a Ag\xEAncia Alastrar, definitivamente, foi um divisor de \xE1guas pra mim.</p> <p>Por os estudos em pr\xE1tica foi bem mais dif\xEDcil do que parece, apesar de ser uma simples landing page, tenho bastante carinho por esse projeto, j\xE1 que foi minha primeira vez trabalhando aliado com um time de Design.</p>"},{id:6,titulo:"Web Form",texto:"<p>Um simples projeto de estudo de HTML e CSS pra exercitar um pouco do que aprendi no programa. Gosto bastante dessa ilustra\xE7\xE3o utilizada, e das cores que decidimos por na p\xE1gina, d\xE3o um toque muito confort\xE1vel.</p> <p>N\xE3o apliquei javascript no projeto, j\xE1 que n\xE3o era necess\xE1rio para finaliza\xE7\xE3o da task.</p>"}]),c=m=>{_.value=d.value.filter(b=>b.id===m)},_=p();return(m,b)=>(a(),i("div",ia,[t(f(ce),de(l.value,{breakpoints:r.value}),{addons:v(()=>[t(f(ne))]),default:v(()=>[(a(!0),i(S,null,x(g.value,n=>(a(),h(f(le),{key:n},{default:v(()=>[e("div",ra,[e("div",na,[e("div",la,[e("h6",null,u(n.titulo),1),t(j,{class:"botao",name:"fa-solid fa-expand",onClick:q=>(o.value=!o.value,c(n.id))},null,8,["onClick"])]),e("p",null,u(n.descricao),1),e("div",da,[e("img",{src:n.imagem},null,8,ca)]),e("div",pa,[(a(!0),i(S,null,x(n.icons,q=>(a(),h(j,{key:q,name:q,color:"info",size:"sm"},null,8,["name"]))),128))]),e("a",{class:"link",href:n.link,target:"_blank"},u(n.link),9,ua)])]),t(H,{modelValue:o.value,"onUpdate:modelValue":b[0]||(b[0]=q=>o.value=q),"backdrop-filter":"blur(4px) saturate(150%)"},{default:v(()=>[t(Q,{class:"dialog"},{default:v(()=>[t(E,{class:"row items-center"},{default:v(()=>[e("h3",null,u(_.value[0].titulo),1),t(R),G(t(P,{icon:"close",flat:"",round:"",dense:""},null,512),[[U]])]),_:1}),t(E,null,{default:v(()=>[e("p",{innerHTML:_.value[0].texto},null,8,ma)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:2},1024))),128))]),_:1},16,["breakpoints"])]))}};var va=k(fa,[["__scopeId","data-v-f33abfae"]]);const I=s=>(C("data-v-0a1a0514"),s=s(),w(),s),ga={class:"principal"},_a={class:"lateral"},ha={class:"conteudo desktop"},ba={class:"mobile"},Sa={id:"SOBRE"},xa={id:"PROJETOS"},ka=I(()=>e("h2",{class:"area"},"Projetos",-1)),qa={id:"EXPERIENCIA"},ja=I(()=>e("h2",{class:"area"},"Experi\xEAncia",-1)),ya={id:"FORMACAO"},za=I(()=>e("h2",{class:"area"},"Forma\xE7\xE3o",-1)),Aa={__name:"Home",setup(s){const l=B(),r=pe(()=>l.menuAtual);return(g,o)=>(a(),i("section",ga,[e("section",_a,[t(f(_e)),t(f(Se),{class:"desktop"}),t(f(je))]),e("section",ha,[r.value===1?(a(),h(f(N),{key:0})):$("",!0),r.value===2?(a(),h(f(Xe),{key:1})):$("",!0),r.value===3?(a(),h(f(L),{key:2})):$("",!0),r.value===4?(a(),h(f(O),{key:3})):$("",!0)]),e("section",ba,[e("article",Sa,[t(f(N))]),e("article",xa,[ka,t(f(va))]),e("article",qa,[ja,t(f(L))]),e("article",ya,[za,t(f(O))])])]))}};var Ca=k(Aa,[["__scopeId","data-v-0a1a0514"]]);export{Ca as default};
