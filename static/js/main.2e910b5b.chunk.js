(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{107:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(15),c=t.n(i),o=t(11),d=t(18),m=t(127),p=t(129),l=t(132),s=t(131),x=t(133),u=t(135),b=Object(m.a)((function(e){return{dayOfWeek:{borderBottom:"2px solid #fff",marginBottom:10}}})),g=function(e){var a=e.currentDayInfo,t=b();return n.a.createElement(p.a,{container:!0},n.a.createElement(u.a,{smUp:!0},n.a.createElement(p.a,{xs:12},n.a.createElement(s.a,{variant:"h4",className:t.dayOfWeek},a.dayOfWeek))),n.a.createElement(p.a,{item:!0,xs:8,sm:6,md:3},n.a.createElement(s.a,{variant:"body1"},"Tempurature, \xb0 C:"),n.a.createElement(s.a,{variant:"body1"},"Feels like:"),n.a.createElement(s.a,{variant:"body1"},"Pressure, mm Hg:"),n.a.createElement(s.a,{variant:"body1"},"Humidity, %:"),n.a.createElement(s.a,{variant:"body1"},"Wind speed, m/s:"),n.a.createElement(s.a,{variant:"body1"},"Description:")),n.a.createElement(p.a,{item:!0,xs:4,sm:3,md:6},n.a.createElement(s.a,{variant:"body1"},a.t," \xb0 C"),n.a.createElement(s.a,{variant:"body1"},a.feelsLike," \xb0 C"),n.a.createElement(s.a,{variant:"body1"},a.preasure),n.a.createElement(s.a,{variant:"body1"},a.humidity,"%"),n.a.createElement(s.a,{variant:"body1"},a.windSpeed),n.a.createElement(s.a,{variant:"body1"},a.description)),n.a.createElement(u.a,{xsDown:!0},n.a.createElement(p.a,{item:!0,xs:12,sm:3,md:3},n.a.createElement(s.a,{variant:"h4"},a.dayOfWeek))))},h=t(59),f=t.n(h),y=Object(m.a)((function(e){return{weatherWidgetBody:{backgroundColor:"rgba(30, 139, 195, 0.4)",color:"#fff",boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",padding:e.spacing(2),margin:"20px auto 10px",width:120},media:{display:"block",width:80,height:80,margin:"0 auto"},weatherDescription:{borderBottom:"1px solid #fff",marginBottom:10,paddingBottom:10}}})),E=function(e){var a=e.icon,t=e.t,r=e.description,i=e.dayOfWeek,c=y();return n.a.createElement(l.a,{className:c.weatherWidgetBody},n.a.createElement(s.a,{variant:"body1",align:"center"},i),n.a.createElement(x.a,{className:c.media,image:a,title:"weather"}),n.a.createElement(s.a,{variant:"body2",align:"center",className:c.weatherDescription},r),n.a.createElement(s.a,{variant:"body2",align:"center"},"min \xa0",t.min>0?"+":"-",Math.round(t.min),"\xb0"),n.a.createElement(s.a,{variant:"body2",align:"center"},"max \xa0",t.max>0?"+":"-",Math.round(t.max),"\xb0C"))},w=t(53),v=t.n(w),O=t(58),k=t.n(O),j=t(57),S=t.n(j),W=t(134),N=t(130),C=Object(m.a)((function(e){return{carousel:{width:"100%",margin:"0 auto"},buttonArrows:{color:"#fff",backgroundColor:"rgba(30, 139, 195, 0.8)",boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}})),D=function(e){var a=e.daily,t=e.dayOfWeek,i=C(),c=n.a.useState(0),d=Object(o.a)(c,2),m=d[0],p=d[1],l=n.a.useState(0),s=Object(o.a)(l,2),x=s[0],u=s[1],b=Object(N.a)("(max-width:360px)"),g=Object(N.a)("(max-width:520px)"),h=Object(N.a)("(max-width:700px)"),f=Object(N.a)("(max-width:900px)"),y=Object(N.a)("(max-width:1030px)"),w=Object(N.a)("(max-width:1280px)"),O=Object(N.a)("(max-width:1480px)");return Object(r.useEffect)((function(){console.log(y||w),u(b?1:g?2:h?3:f?4:y||w||O?5:6)}),[g,f,y,b,h,w,O]),n.a.createElement("div",{className:i.carousel},n.a.createElement(v.a,{requestToChangeActive:p,activeItemIndex:m,numberOfCards:x,leftChevron:n.a.createElement(W.a,{"aria-label":"delete",className:i.buttonArrows},n.a.createElement(S.a,null)),rightChevron:n.a.createElement(W.a,{"aria-label":"delete",className:i.buttonArrows},n.a.createElement(k.a,null)),outsideChevron:!1},a.map((function(e,a){return n.a.createElement(E,{icon:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),t:e.temp,description:e.weather[0].main,key:a,dayOfWeek:t()})}))))},B=Object(m.a)((function(e){return{header:{fontFamily:"Georgia"},media:{width:150,height:150},mediaWrapper:{display:"flex",justifyContent:"center"},currentDay:{borderBottom:"2px solid #fff"},weatherWidgetBody:Object(d.a)({backgroundColor:"rgba(30, 139, 195, 0.1)",color:"#fff",boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",padding:e.spacing(2),margin:"-20px 0 -10px -20px"},e.breakpoints.down("xs"),{margin:"-20px -20px 20px"}),additionalInfo:Object(d.a)({padding:e.spacing(2),marginTop:-20},e.breakpoints.down("xs"),{padding:0}),buttonArrows:{color:"#fff",backgroundColor:"rgba(30, 139, 195, 0.8)",boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}})),I=function(e){var a=e.weatherData,t=B(),i=n.a.useState({}),c=Object(o.a)(i,2),d=c[0],m=c[1],u=n.a.useState({}),b=Object(o.a)(u,2),h=b[0],y=b[1],E=n.a.useState([]),w=Object(o.a)(E,2),v=w[0],O=w[1],k=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],j=new Date,S=j.getDay(),W={t:Math.round(h.temp),feelsLike:Math.round(h.feels_like),preasure:Math.round(h.pressure/1.333),humidity:h.humidity,windSpeed:h.wind_speed,description:d.description,dayOfWeek:k[S]};Object(r.useEffect)((function(){a.current&&a&&a.current.weather&&(y(a.current),a.current.weather&&(m(a.current.weather[0]),O(a.daily)))}),[a,h,d,v]);return n.a.createElement(p.a,{container:!0,spacing:3},n.a.createElement(p.a,{item:!0,xs:12,className:t.currentDay},n.a.createElement(p.a,{container:!0},n.a.createElement(p.a,{item:!0,xs:12,sm:3,className:t.currentWeatherIcon},n.a.createElement(l.a,{className:t.weatherWidgetBody},n.a.createElement(s.a,{variant:"h4",className:t.header},n.a.createElement(f.a,null),"Kyiv"),n.a.createElement(s.a,{variant:"h5",className:t.header},function(){var e=String(j.getDate()).padStart(2,"0"),a=String(j.getMonth()+1).padStart(2,"0"),t=j.getFullYear();return"".concat(e,".").concat(a,".").concat(t)}()),n.a.createElement("div",{className:t.mediaWrapper},n.a.createElement(x.a,{className:t.media,image:"http://openweathermap.org/img/wn/".concat(d?d.icon:"","@2x.png"),title:"weather"})),n.a.createElement(s.a,{variant:"body2",align:"center",className:t.weatherDescription},d.main))),n.a.createElement(p.a,{item:!0,xs:12,sm:9,className:t.additionalInfo},n.a.createElement(g,{currentDayInfo:W})))),n.a.createElement(D,{daily:v,dayOfWeek:function(){return(S+=1)>6&&(S=0),k[S]}}))},M=t(60),A=t.n(M),F=t(61),T=t.n(F),z=Object(m.a)((function(e){var a;return{app:{position:"absolute",zIndex:"1",height:"100%",width:"100%",display:"block",top:"0",left:"0",backgroundSize:"cover",backgroundPosition:"center center",backgroundImage:"url(".concat(A.a,")"),fontFamily:"Georgia"},weatherWidgetBody:(a={maxWidth:1e3,backgroundColor:"rgba(44, 62, 80, 0.9)",color:"#fff",boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",margin:"50px 10px 0",padding:e.spacing(3)},Object(d.a)(a,e.breakpoints.down("xs"),{margin:10}),Object(d.a)(a,e.breakpoints.up("md"),{margin:"50px auto 0"}),a)}}));var G=function(){var e=z(),a=n.a.useState({}),t=Object(o.a)(a,2),i=t[0],c=t[1];return Object(r.useEffect)((function(){T.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=50.4333&lon=30.5167&exclude=minutely,hourly&appid=e7c594ddf234f6118da8b7460df04a79&units=metric").then((function(e){c(e.data)}))}),[]),n.a.createElement("div",{className:e.app},n.a.createElement(p.a,{container:!0,justify:"center"},n.a.createElement(p.a,{item:!0,xs:12,sm:12,md:12,lg:8},n.a.createElement(l.a,{className:e.weatherWidgetBody},n.a.createElement(I,{weatherData:i})))))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(G,null)),document.getElementById("root"))},60:function(e,a,t){e.exports=t.p+"static/media/weather-background.96c42b36.jpg"},68:function(e,a,t){e.exports=t(107)}},[[68,1,2]]]);
//# sourceMappingURL=main.2e910b5b.chunk.js.map