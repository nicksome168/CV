(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/profile.598319e1.jpg"},16:function(e,a,t){e.exports=t(27)},21:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(14),s=t.n(i),l=(t(21),t(2)),c=t(3),o=t(5),m=t(4),u=t(6),d=t(15),g=t.n(d),p=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).sidebarData=e.sidebarData,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},r.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},r.a.createElement("span",{className:"d-block d-lg-none"},this.sidebarData.firstName," ",this.sidebarData.lastName),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:g.a,alt:""}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#Projects"},"Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#interests"},"Interests")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#Acknowledgement"},"Acknowledgement")))))}}]),a}(n.Component),h=t(8),b=t(12),E=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).landingData=e.landingData,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h1",{className:"mb-0"},this.landingData.firstName,r.a.createElement("span",{className:"text-primary"},this.landingData.lastName)),r.a.createElement("div",{className:"subheading mb-5"},this.landingData.phoneNumber," \xb7",r.a.createElement("a",{href:"mailto:name@email.com"},this.landingData.email)),r.a.createElement("p",{className:"lead mb-5"},this.landingData.bio),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:this.landingData.linkedin},r.a.createElement(h.a,{icon:b.b})),r.a.createElement("a",{href:this.landingData.github},r.a.createElement(h.a,{icon:b.a})))))}}]),a}(n.Component),f=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).Projects=e.Projects,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"Projects"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Projects"),this.Projects.map((function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},r.a.createElement("a",{href:e.link},e.position," \ud83d\udd17")),r.a.createElement("div",{className:"subheading mb-3"},e.organization),r.a.createElement("li",null,e.aboutWork1),r.a.createElement("li",null,e.aboutWork2),r.a.createElement("li",null,e.aboutWork3)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))}))))}}]),a}(n.Component),k=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).education=e.education,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Education"),this.education.map((function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.university),r.a.createElement("div",{className:"subheading mb-3"},e.degree),r.a.createElement("p",null,e.gpa)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))}))))}}]),a}(n.Component),v=t(10),N=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).skills=e.skills,t.languages=e.languages,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Skills"),r.a.createElement("div",{className:"subheading mb-3"},"Programming & Languages Proficeincy"),r.a.createElement("div",{className:"row"},this.skills.map((function(e,a){return r.a.createElement("div",{key:a,className:"col-6"},r.a.createElement("p",{className:"list-item"},r.a.createElement(h.a,{icon:v.a,color:"green"}),r.a.createElement("span",{className:"ml-3"},e.name)))})))))}}]),a}(n.Component),w=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).interests=e.interests,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Interests"),r.a.createElement("p",null,this.interests.paragraphOne),r.a.createElement("p",{className:"mb-0"},this.interests.paragraphTwo),r.a.createElement("br",null),this.interests.link.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("a",{href:e.link},e.name))}))))}}]),a}(n.Component),j=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).Acknowledgement=e.Acknowledgement,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"Acknowledgement"},r.a.createElement("div",{className:"w-100"},r.a.createElement("br",null),r.a.createElement("h2",{className:"mb-5"},"Acknowledgement"),this.Acknowledgement.map((function(e,a){return r.a.createElement("ul",null,r.a.createElement("div",{key:a},r.a.createElement("li",null,r.a.createElement("a",{href:e.link},e.name))))}))))}}]),a}(n.Component),y=t(7),O=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={landingData:y.landing,Projects:y.Projects,education:y.education,skills:y.skills,interests:y.interests,Acknowledgement:y.Acknowledgement},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{sidebarData:this.state.landingData}),r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement(E,{landingData:this.state.landingData}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(k,{education:this.state.education}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(f,{Projects:this.state.Projects}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(N,{skills:this.state.skills}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(w,{interests:this.state.interests}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(j,{Acknowledgement:this.state.Acknowledgement})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e){e.exports=JSON.parse('{"landing":{"firstName":"Nick","lastName":"CHAO","phoneNumber":"+886-981167765","bio":"I am a collaborative and self-disciplined person with adequate software and interpersonal skills who is always willing to take responsibility to go beyond what is expected.","email":"b05502058@ntu.edu.tw","linkedin":"https://www.linkedin.com/in/nick-chao/","github":"https://github.com/nicksome168/Resume"},"Projects":[{"position":"On-site Search Result Accuracy Evaluation Automation Program","link":"https://drive.google.com/file/d/1vWJ2DKcKFXnS3V0O1Ge-yE3zddzUP45G/view?usp=sharing","organization":"Intern Project, KKDAY.COM","aboutWork1":"Speeded up preliminary accuracy evaluation of results of the top monthly queries","aboutWork2":"Built an RPA from scratch with Python to automatically inspect result accuracy","aboutWork3":"Increased efficiency from examining 600 queries in 1 day to 24k+ queries in 15 minutes","fromDate":"July 2019","toDate":"December 2019"},{"position":"Where2Study and Busy Times Patterns at NTU studyroom","link":"https://github.com/nicksome168/Resume","organization":"Self-Initiated Projects","aboutWork1":"Addressed overcrowding issues in the study room and the Uni library","aboutWork2":"Scraped and preprocessed 12k+ courses data using AWS EC2, ParseHub, and Python","aboutWork3":"Built two programs which can visualize students flow patterns and search for not-in-use classrooms as an alternative studying place","fromDate":"Febuary 2018","toDate":"June 2018"},{"position":"Age Prediction with Blurry Image by DeepLearning","link":"https://drive.google.com/drive/u/0/folders/1m7FJW_iiMLLGMFLgW3Igcpzu2zaftnlx","organization":"Final GROUP Project, Computer Programming (NTU EE1004_03)","aboutWork1":"Tackled low-quality images recognition problem in CCTV","aboutWork2":"Designed 6 different training approaches with a pre-trained CNN model","aboutWork3":"Acquired preliminary results of 2 models with the observation of imbalanced dataset","fromDate":"Oct 2017","toDate":"Jan 2018"}],"education":[{"university":"National Taiwan University","degree":"B.S. in Information Management (minor: Mechanical Engineering)","gpa":"GPA: 3.69/4.3","fromDate":"September 2016","toDate":"Present"},{"university":"Technische Universit\xe4t Berlin","degree":"Summer Program-\u201cQuantitative Decision Making for Business Operation\u201d Module","gpa":"Marks: 91/100","fromDate":"August 2018","toDate":"August 2018"}],"skills":[{"name":"Python (experiencd)"},{"name":"C++ (experienced)"},{"name":"Git (familiar)"},{"name":"R (familiar)"},{"name":"Linux (experienced)"},{"name":"Jupyter notebook (experienced)"},{"name":"English: ITELS (7.5/9.0)"},{"name":"German: Goethe-Zertifikat B2"}],"interests":{"paragraphOne":"Besides programming, I am also interested in Finance and Cloud computing.","paragraphTwo":"Currently, I am taking online courses and trainings, such as Investment, Financial Management, and Cloud Support Associate career pathway on AWS Education.","link":[{"name":"Investment on OpenEdu","link":"https://www.openedu.tw/course.jsp?id=391"},{"name":"Financial Management on NTU OCW","link":"http://ocw.aca.ntu.edu.tw/ntu-ocw/ocw/cou/101S110"},{"name":"Cloud Support Associate career pathway training on AWS Edu","link":"https://aws.amazon.com/blogs/publicsector/aws-educate-gives-students-access-to-cloud-career-pathways-aws-badges-and-the-aws-educate-job-board/"}]},"Acknowledgement":[{"link":"https://github.com/BlackrockDigital/startbootstrap-resume","name":"This CV template is created by Start Bootstrap"},{"link":"https://levelup.gitconnected.com/create-a-portfolio-using-react-and-github-student-developer-pack-955379207855","name":"Tutorial: \'Create a portfolio using React and GitHub Student Developer Pack\' by Anupam Dagar"}]}')}},[[16,1,2]]]);
//# sourceMappingURL=main.2aa934fe.chunk.js.map