"use strict";(self.webpackChunkdial=self.webpackChunkdial||[]).push([[6712],{6495:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=i(5893),o=i(1151);const s={},l="How to Set Google Identity as Identity Provider",r={id:"Auth/Web/IDPs/google",title:"google",description:"- Introduction",source:"@site/docs/Auth/2. Web/2.IDPs/google.md",sourceDirName:"Auth/2. Web/2.IDPs",slug:"/Auth/Web/IDPs/google",permalink:"/ai-dial/Auth/Web/IDPs/google",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"CustomSideBar",previous:{title:"entraID",permalink:"/ai-dial/Auth/Web/IDPs/entraID"},next:{title:"keycloak",permalink:"/ai-dial/Auth/Web/IDPs/keycloak"}},a={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration Guidelines",id:"configuration-guidelines",level:2},{value:"Configure Google Identity",id:"configure-google-identity",level:3},{value:"Configure AI DIAL",id:"configure-ai-dial",level:3},{value:"AI DIAL Chat Settings",id:"ai-dial-chat-settings",level:4},{value:"AI DIAL Core Settings",id:"ai-dial-core-settings",level:4},{value:"Assignment of Roles",id:"assignment-of-roles",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-set-google-identity-as-identity-provider",children:"How to Set Google Identity as Identity Provider"}),"\n",(0,t.jsxs)("div",{class:"docusaurus-ignore",children:[(0,t.jsx)(n.h1,{id:"table-of-contents",children:"Table of Contents"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#configuration-guidelines",children:"Configuration Guidelines"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#configure-google-oauth2",children:"Configure Google Identity"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#configure-ai-dial",children:"Configure AI DIAL"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#ai-dial-chat-settings",children:"AI DIAL Chat Settings"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#ai-dial-core-settings",children:"AI DIAL Core Settings"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#assignment-of-roles",children:"Assignment of Roles"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["This basic tutorial demonstrates how to configure ",(0,t.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2",children:"Google Identity"})," and integrate it with AI DIAL for identity and access management."]}),"\n",(0,t.jsx)(n.p,{children:"In AI DIAL, you can assign roles to Models, Applications, Addons, and Assistants to restrict the number of tokens that can be transmitted in a specific time frame. These roles and their limitations can be created in external systems and then assigned in AI DIAL's configuration."}),"\n",(0,t.jsx)(n.h2,{id:"configuration-guidelines",children:"Configuration Guidelines"}),"\n",(0,t.jsx)(n.h3,{id:"configure-google-identity",children:"Configure Google Identity"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," Replace ",(0,t.jsx)(n.code,{children:"<chat_url>"})," with the actual address of your AI DIAL Chat application."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Follow these steps to configure Google Identity:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Create an OAuth consent screen:"})," refer ",(0,t.jsx)(n.a,{href:"https://developers.google.com/workspace/guides/configure-oauth-consent",children:"Google documentation"})," to learn how to do this."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Create Client ID and Secret:"})," click ",(0,t.jsx)(n.strong,{children:"Create Credentials > OAuth Client ID"})," and fill it with:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Name"}),"\n",(0,t.jsxs)(n.li,{children:["Application Type: ",(0,t.jsx)(n.code,{children:"Web Application"})]}),"\n",(0,t.jsxs)(n.li,{children:["Authorized JavaScript Origins: ",(0,t.jsx)(n.code,{children:"https://<chat_url>"})]}),"\n",(0,t.jsxs)(n.li,{children:["Authorized Redirect URLs: ",(0,t.jsx)(n.code,{children:"https://<chat_url>/api/auth/callback/google"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Obtain and save ",(0,t.jsx)(n.strong,{children:"Client ID"})," and ",(0,t.jsx)(n.strong,{children:"Client Secret"})," from the ",(0,t.jsx)(n.strong,{children:"OAuth Client"})," modal."]}),"\n",(0,t.jsxs)(n.li,{children:["(Optional) ",(0,t.jsx)(n.strong,{children:"Create a Group and add members:"})," Once the application integration is set up, ",(0,t.jsx)(n.a,{href:"https://support.google.com/a/answer/9400082?hl=en#zippy=%2Cstep-create-a-group",children:"create the necessary Group and add members in Google Group"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["(Optional) ",(0,t.jsx)(n.strong,{children:"Enable the Google Cloud Identity API:"})," click ",(0,t.jsx)(n.code,{children:"ENABLE"})," in ",(0,t.jsx)(n.a,{href:"https://console.cloud.google.com/apis/api/cloudidentity.googleapis.com/",children:"your organization\u2019s dashboard"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configure-ai-dial",children:"Configure AI DIAL"}),"\n",(0,t.jsx)(n.p,{children:"To enable AI DIAL Chat and AI DIAL Core to work with Google Identity, configure them with the necessary specific parameters."}),"\n",(0,t.jsx)(n.h4,{id:"ai-dial-chat-settings",children:"AI DIAL Chat Settings"}),"\n",(0,t.jsxs)(n.p,{children:["Add the following environment variables to AI DIAL Chat configuration. Refer to ",(0,t.jsx)(n.a,{href:"https://github.com/epam/ai-dial-chat/blob/development/apps/chat/README.md#environment-variables",children:"AI DIAL Chat"})," for more details."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'AUTH_GOOGLE_CLIENT_ID: "<google_client_id>"\nAUTH_GOOGLE_SECRET: "<google_tenant_id>"\nAUTH_GOOGLE_SCOPE: "openid email profile https://www.googleapis.com/auth/cloud-identity.groups.readonly" # Optional\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ai-dial-core-settings",children:"AI DIAL Core Settings"}),"\n",(0,t.jsxs)(n.p,{children:["Add the following parameters to AI DIAL Core ",(0,t.jsx)(n.strong,{children:"static"})," settings. Refer to ",(0,t.jsx)(n.a,{href:"https://github.com/epam/ai-dial-core?tab=readme-ov-file#static-settings",children:"AI DIAL Core"})," for more details."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'aidial.identityProviders.google.userInfoEndpoint: "https://openidconnect.googleapis.com/v1/userinfo"\naidial.identityProviders.google.rolePath: "fn:getGoogleWorkspaceGroups"\naidial.identityProviders.google.loggingKey: "sub"\naidial.identityProviders.google.loggingSalt: "loggingSalt"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"assignment-of-roles",children:"Assignment of Roles"}),"\n",(0,t.jsxs)(n.p,{children:["Once all the above steps are completed, including the ones marked as ",(0,t.jsx)(n.strong,{children:"Optional"}),", you can assign roles to Models, Applications, Addons, and Assistants."]}),"\n",(0,t.jsx)(n.p,{children:"In AI DIAL Core:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/epam/ai-dial-core?tab=readme-ov-file#static-settings",children:"Static settings"}),": as value for ",(0,t.jsx)(n.code,{children:"aidial.identityProviders.google.rolePath"})," provide an API endpoint from Google Identity."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/epam/ai-dial-core?tab=readme-ov-file#dynamic-settings",children:"Dynamic settings"}),": for ",(0,t.jsx)(n.code,{children:"userRoles"})," provide a specific group name."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In this example, ",(0,t.jsx)(n.code,{children:'"google-group-name"'})," role from the ",(0,t.jsx)(n.code,{children:'"fn:getGoogleWorkspaceGroups"'})," API endpoint is configured for ",(0,t.jsx)(n.code,{children:"chat-gpt-35-turbo"})," model:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'"models": {\n    "chat-gpt-35-turbo": {\n      "type": "chat",\n      "endpoint" : "http://localhost:7001/v1/openai/deployments/gpt-35-turbo/chat/completions",\n      "upstreams": [\n        {"endpoint": "http://localhost:7001", "key": "modelKey1"}\n      ],\n      "userRoles": ["google-group-name"]\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>l});var t=i(7294);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);