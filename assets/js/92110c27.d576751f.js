"use strict";(self.webpackChunkdial=self.webpackChunkdial||[]).push([[9397],{5846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(5893),a=n(1151);const i={},o="Analytics",l={id:"tutorials/realtime-analytics",title:"Analytics",description:"Introduction",source:"@site/docs/tutorials/realtime-analytics.md",sourceDirName:"tutorials",slug:"/tutorials/realtime-analytics",permalink:"/tutorials/realtime-analytics",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"CustomSideBar",previous:{title:"Notifications",permalink:"/tutorials/collaboration/notifications"},next:{title:"Custom Buttons in Apps",permalink:"/tutorials/custom-buttons"}},r={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Disable Logging of User Information",id:"disable-logging-of-user-information",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Step 1: AI DIAL Core",id:"step-1-ai-dial-core",level:3},{value:"Step 2: Influx DB",id:"step-2-influx-db",level:3},{value:"Step 3: AI DIAL Analytics Realtime",id:"step-3-ai-dial-analytics-realtime",level:3},{value:"Step 4: Log Collector",id:"step-4-log-collector",level:3},{value:"Step 5: Grafana",id:"step-5-grafana",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"analytics",children:"Analytics"}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/epam/ai-dial-core",children:"DIAL Core"})," collects ",(0,s.jsx)(t.strong,{children:"system logs"})," and ",(0,s.jsx)(t.strong,{children:"chat completion logs"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["System logs do not include any user data and contain logs of all requests from system components to AI DIAL Core (using the ELK stack (Elasticsearch, Logstash, Kibana) or other log collection system). Refer to ",(0,s.jsx)(t.a,{href:"/Observability/",children:"Observability"})," to learn about logs, metrics and traces supported in AI DIAL."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://epam-rail.com/dial_api#/paths/~1openai~1deployments~1%7BDeployment%20Name%7D~1chat~1completions/post",children:"Chat completion requests"})," logs include information that users send in their requests to LLMs and the information they get in responses."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/architecture#full-platform-landscape",children:"AI DIAL setup"})," can include a special service called DIAL Analytics Realtime, which uses diverse techniques such as embedding algorithms, clustering algorithms, frameworks, light-weight self-hosted language models, to analyze ",(0,s.jsx)(t.strong,{children:"chat completion logs"})," and extract the needed information, which can be presented in tools such as Grafana for visualization and analytics."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Refer to ",(0,s.jsx)(t.a,{href:"https://github.com/epam/ai-dial-analytics-realtime",children:"Analytics Realtime"})," repository to learn more and view the project source code."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Analytics Realtime does not retain any private information, such as user prompts or conversations, beyond the system. Instead, only the computed artifacts are collected and stored in time-series databases like InfluxDB or any scalable database capable of handling voluminous, constantly changing information."}),"\n",(0,s.jsx)(t.p,{children:"Examples of the computed artifacts:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Information about user(user hash, title, and never personal data such as names)."}),"\n",(0,s.jsx)(t.li,{children:"What areas have people asked questions about?"}),"\n",(0,s.jsx)(t.li,{children:"Are there any recurring patterns?"}),"\n",(0,s.jsx)(t.li,{children:"Topics of conversations."}),"\n",(0,s.jsx)(t.li,{children:"Unique users."}),"\n",(0,s.jsx)(t.li,{children:"Sentiments."}),"\n",(0,s.jsx)(t.li,{children:"Cost analysis of the communication."}),"\n",(0,s.jsx)(t.li,{children:"Language of conversations."}),"\n",(0,s.jsx)(t.li,{children:"Any other calculated statistics based on conversations."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"disable-logging-of-user-information",children:"Disable Logging of User Information"}),"\n",(0,s.jsxs)(t.p,{children:["AI DIAL Core ",(0,s.jsx)(t.strong,{children:"will log"})," all user requests and deployment responses authorized with an access token (like JWT) or ",(0,s.jsx)(t.strong,{children:"unsecured"})," API keys. To avoid this, create and use a ",(0,s.jsx)(t.strong,{children:"secured"})," API key - in this case the system will not collect logs of user requests and related responses from applications, assistants and models."]}),"\n",(0,s.jsxs)(t.p,{children:["Refer to ",(0,s.jsx)(t.a,{href:"https://github.com/epam/ai-dial-core?tab=readme-ov-file#dynamic-settings",children:"DIAL Core configuration"})," to learn how to create secured and other types of API keys."]}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(t.p,{children:"This section outlines the required steps for configuring Analytics Realtime service and other necessary components:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Step 1: Configure ",(0,s.jsx)(t.a,{href:"https://github.com/epam/ai-dial-core",children:"DIAL Core"})]}),"\n",(0,s.jsxs)(t.li,{children:["Step 2: Install ",(0,s.jsx)(t.a,{href:"https://github.com/influxdata/influxdb",children:"Influx DB"})]}),"\n",(0,s.jsxs)(t.li,{children:["Step 3: Configure ",(0,s.jsx)(t.a,{href:"https://github.com/epam/ai-dial-analytics-realtime",children:"DIAL Analytics Realtime"})]}),"\n",(0,s.jsxs)(t.li,{children:["Step 4: Configure ",(0,s.jsx)(t.a,{href:"https://github.com/vectordotdev/vector",children:"Log Collector"})]}),"\n",(0,s.jsxs)(t.li,{children:["Step 5: Configure ",(0,s.jsx)(t.a,{href:"https://github.com/grafana/grafana",children:"Grafana"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Flow:"})}),"\n",(0,s.jsxs)(t.p,{children:["AI DIAL Core generates a ",(0,s.jsx)(t.code,{children:".log"})," file containing chat completion logs. A log collector tool then transfers this file to AI DIAL Analytics Realtime for analysis. The insights derived from the analysis are stored in InfluxDB and can subsequently be visualized using Grafana."]}),"\n",(0,s.jsx)(t.h3,{id:"step-1-ai-dial-core",children:"Step 1: AI DIAL Core"}),"\n",(0,s.jsxs)(t.p,{children:["AI DIAL Core can be configured to write chat completion logs into a specific ",(0,s.jsx)(t.code,{children:".log"})," file."]}),"\n",(0,s.jsxs)(t.p,{children:["Use the default AI DIAL Core ",(0,s.jsx)(t.a,{href:"https://github.com/epam/ai-dial-core/blob/development/src/main/resources/gflog.xml",children:"Configuration"})," as reference. Refer to ",(0,s.jsx)(t.a,{href:"https://github.com/epam/gflog/blob/main/README.md",children:"GFLog"})," to learn more about the logging framework used in DIAL Core."]}),"\n",(0,s.jsx)(t.h3,{id:"step-2-influx-db",children:"Step 2: Influx DB"}),"\n",(0,s.jsxs)(t.p,{children:["Analytics Realtime uses InfluxDB to store the analytics of chat completion logs. Refer to InfluxDB documentation to learn how to ",(0,s.jsx)(t.a,{href:"https://docs.influxdata.com/influxdb/v2/install/",children:"install"})," it and how to ",(0,s.jsx)(t.a,{href:"https://docs.influxdata.com/influxdb/v2/admin/tokens/create-token/",children:"create tokens"})," to read from a bucket."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Refer to ",(0,s.jsx)(t.a,{href:"https://github.com/epam/ai-dial-analytics-realtime?tab=readme-ov-file#configuration",children:"Configuration"})," to view how to configure InfluxDB for Analytics Realtime service."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"step-3-ai-dial-analytics-realtime",children:"Step 3: AI DIAL Analytics Realtime"}),"\n",(0,s.jsxs)(t.p,{children:["Follow the ",(0,s.jsx)(t.a,{href:"https://github.com/epam/ai-dial-analytics-realtime/blob/development/README.md",children:"instructions"})," to setup AI DIAL Analytics Realtime service."]}),"\n",(0,s.jsx)(t.h3,{id:"step-4-log-collector",children:"Step 4: Log Collector"}),"\n",(0,s.jsxs)(t.p,{children:["AI DIAL uses the external open-source solution ",(0,s.jsx)(t.a,{href:"https://github.com/vectordotdev/vector",children:"Vector"})," as a log collector to transfer a ",(0,s.jsx)(t.code,{children:".log"})," file with ",(0,s.jsx)(t.strong,{children:"chat completion logs"}),' to AI DIAL Analytics Realtime service via HTTP. Analytics Realtime functions as a "sink" for Vector, providing an endpoint designed to receive logs from it. To connect, you only need to know the hostname and port, such as ',(0,s.jsx)(t.a,{href:"http://localhost:5001/data",children:"http://localhost:5001/data"})," - see the example below."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["You can find an additional information on delivering observability data to an HTTP server in the Vector ",(0,s.jsx)(t.a,{href:"https://vector.dev/docs/reference/configuration/sinks/http",children:"documentation"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This is an example of Vector configuration:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'sources:\n  aidial_logs:\n    type: "file"\n    max_line_bytes: 100000000\n    oldest_first: true\n    include:\n      - /app/log/*.log # file with chat completion logs\n  http_analytics_opensource:\n    inputs:\n      - aidial_logs\n    type: http\n    uri: http://dial-analytics.dial:80/data # Analytics Realtime URI\n    request:\n      timeout_secs: 300\n    batch:\n      max_bytes: 1049000\n      timeout_secs: 60\n    encoding:\n      codec: "json"\n'})}),"\n",(0,s.jsx)(t.h3,{id:"step-5-grafana",children:"Step 5: Grafana"}),"\n",(0,s.jsxs)(t.p,{children:["Grafana can be ",(0,s.jsx)(t.a,{href:"https://grafana.com/docs/grafana/latest/datasources/influxdb/#influxdb-data-source",children:"configured"})," to use InfluxDB with analytics of DIAL logs as a data source. You can use pre-configured samples of ",(0,s.jsx)(t.a,{href:"https://github.com/epam/ai-dial-analytics-realtime/blob/development/dashboards/README.md",children:"dashboards"})," to visualize data in Grafana."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Refer to Grafana documentation to learn how to ",(0,s.jsx)(t.a,{href:"https://grafana.com/docs/grafana/latest/setup-grafana/installation/",children:"install"})," it and ",(0,s.jsx)(t.a,{href:"https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/import-dashboards/",children:"import dashboards"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(5927).Z+"",width:"1907",height:"917"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5927:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/grafana-4e3ed25f26820201a2552695164a7eeb.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var s=n(7294);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);