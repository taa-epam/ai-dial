"use strict";(self.webpackChunkdial=self.webpackChunkdial||[]).push([[6513],{6038:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(5893),r=t(1151);const s={},o="How to Set Microsoft Entra as Identity Provider",a={id:"Auth/Web/IDPs/entraID",title:"entraID",description:"- Introduction",source:"@site/docs/Auth/2. Web/2.IDPs/entraID.md",sourceDirName:"Auth/2. Web/2.IDPs",slug:"/Auth/Web/IDPs/entraID",permalink:"/Auth/Web/IDPs/entraID",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"CustomSideBar",previous:{title:"cognito",permalink:"/Auth/Web/IDPs/cognito"},next:{title:"google",permalink:"/Auth/Web/IDPs/google"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration Guidelines",id:"configuration-guidelines",level:2},{value:"Configure Microsoft Entra ID",id:"configure-microsoft-entra-id",level:3},{value:"Configure AI DIAL",id:"configure-ai-dial",level:3},{value:"AI DIAL Chat Settings",id:"ai-dial-chat-settings",level:4},{value:"AI DIAL Core Settings",id:"ai-dial-core-settings",level:4},{value:"Assignment of Roles",id:"assignment-of-roles",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"how-to-set-microsoft-entra-as-identity-provider",children:"How to Set Microsoft Entra as Identity Provider"}),"\n",(0,i.jsxs)("div",{class:"docusaurus-ignore",children:[(0,i.jsx)(n.h1,{id:"table-of-contents",children:"Table of Contents"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#configuration-guidelines",children:"Configuration Guidelines"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#configure-microsoft-entra-id",children:"Configure Microsoft Entra ID"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#configure-ai-dial",children:"Configure AI DIAL"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#ai-dial-chat-settings",children:"AI DIAL Chat Settings"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#ai-dial-core-settings",children:"AI DIAL Core Settings"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#assignment-of-roles",children:"Assignment of Roles"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["This basic tutorial demonstrates how to configure ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/entra/fundamentals/whatis",children:"Microsoft Entra ID"})," and integrate it with AI DIAL for identity and access management."]}),"\n",(0,i.jsx)(n.p,{children:"In AI DIAL, you can assign roles to Models, Applications, Addons, and Assistants to restrict the number of tokens that can be transmitted in a specific time frame. These roles and their limitations can be created in external systems and then assigned in AI DIAL's configuration."}),"\n",(0,i.jsx)(n.h2,{id:"configuration-guidelines",children:"Configuration Guidelines"}),"\n",(0,i.jsx)(n.h3,{id:"configure-microsoft-entra-id",children:"Configure Microsoft Entra ID"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," Replace ",(0,i.jsx)(n.code,{children:"<chat_url>"})," with the actual address of your AI DIAL Chat application."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Follow these steps to configure Microsoft Entra ID:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Create an Application:"})," refer to ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/healthcare-apis/register-application",children:"Microsoft documentation"})," to learn how to register an application. Set the following parameters:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Name"}),"\n",(0,i.jsx)(n.li,{children:"Supported account types"}),"\n",(0,i.jsxs)(n.li,{children:["Platform: ",(0,i.jsx)(n.code,{children:"Web"})]}),"\n",(0,i.jsxs)(n.li,{children:["Redirect URI: ",(0,i.jsx)(n.code,{children:"https://<chat_url>/api/auth/callback/azure-ad"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["After registering an application, obtain and save ",(0,i.jsx)(n.strong,{children:"Application (client) ID"})," and ",(0,i.jsx)(n.strong,{children:"Directory (tenant) ID"})," - you will need them to configure AI DIAL. Refer to ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/healthcare-apis/register-application#application-id-client-id",children:"Microsoft documentation"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Create and save a Client secret:"})," in the ",(0,i.jsx)(n.strong,{children:"Certificates & secrets/Client secret"})," section, create ",(0,i.jsx)(n.strong,{children:"New client secret"})," and save its value. Refer to ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/healthcare-apis/register-application#certificates--secrets",children:"Microsoft documentation"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["(Optional) ",(0,i.jsx)(n.strong,{children:"Create a Group and add members:"})," once the application integration is set up, create the necessary Group and add members. Refer to ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/entra/fundamentals/groups-view-azure-portal",children:"Microsoft documentation"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["(Optional) ",(0,i.jsx)(n.strong,{children:"Configure ID Token:"})," in the ",(0,i.jsx)(n.strong,{children:"Token Configuration"})," section, ",(0,i.jsx)(n.strong,{children:"Add Groups claim"})," and customize which groups you want to include and where (access, ID token). Refer to ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/how-to-connect-fed-group-claims#important-caveats-for-this-functionality",children:"Microsoft documentation"}),".","\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," ",(0,i.jsx)(n.code,{children:"sAMAccountName"})," and on-premises ",(0,i.jsx)(n.code,{children:"GroupSID"})," attributes are available only on group objects synced from Active Directory. They aren't available on groups created in ",(0,i.jsx)(n.code,{children:"Microsoft Entra ID"})," or ",(0,i.jsx)(n.code,{children:"Office 365"}),". Applications configured in Microsoft Entra ID to get synced on-premises group attributes get them for synced groups only."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-ai-dial",children:"Configure AI DIAL"}),"\n",(0,i.jsx)(n.p,{children:"By configuring both AI DIAL Chat and AI DIAL Core with the necessary Microsoft Entra ID environment variables, you will enable them to work together seamlessly with Microsoft Entra ID for authentication and authorization purposes."}),"\n",(0,i.jsx)(n.p,{children:"To configure AI DIAL Chat and AI DIAL Core to work with Microsoft Entra ID, follow these steps:"}),"\n",(0,i.jsx)(n.h4,{id:"ai-dial-chat-settings",children:"AI DIAL Chat Settings"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," The application ",(0,i.jsx)(n.strong,{children:"scope"})," is required to validate signature of the access token. Refer to ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/answers/questions/318741/graphapi-cannot-validate-access-token-signature",children:"Microsoft Portal"})," to read more about this case."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Add the following environment variables to AI DIAL Chat configuration. Refer to ",(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial-chat/blob/development/apps/chat/README.md#environment-variables",children:"AI DIAL Chat"})," for more details."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'AUTH_AZURE_AD_CLIENT_ID: "<azure_client_id>"\nAUTH_AZURE_AD_TENANT_ID: "<azure_tenant_id>"\nAUTH_AZURE_AD_SECRET: "<azure_client_secret>"\nAUTH_AZURE_AD_SCOPE: "openid profile <azure_client_id>/.default email offline_access"\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ai-dial-core-settings",children:"AI DIAL Core Settings"}),"\n",(0,i.jsxs)(n.p,{children:["Add the following parameters to AI DIAL Core ",(0,i.jsx)(n.strong,{children:"static"})," settings. Refer to ",(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial-core?tab=readme-ov-file#static-settings",children:"AI DIAL Core"})," for more details."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'aidial.identityProviders.azure.jwksUrl: "https://login.microsoftonline.com/<azure_tenant_id>/discovery/v2.0/keys"\naidial.identityProviders.azure.rolePath: "groups"\naidial.identityProviders.azure.issuerPattern: \'^https:\\/\\/sts\\.windows\\.net.+$\'\naidial.identityProviders.azure.loggingKey: "sub"\naidial.identityProviders.azure.loggingSalt: "loggingSalt"\n'})}),"\n",(0,i.jsx)(n.h4,{id:"assignment-of-roles",children:"Assignment of Roles"}),"\n",(0,i.jsxs)(n.p,{children:["Once all the above steps are completed, including the ones marked as ",(0,i.jsx)(n.strong,{children:"Optional"}),", you can assign roles to Models, Applications, Addons, and Assistants."]}),"\n",(0,i.jsx)(n.p,{children:"In AI DIAL Core:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial-core?tab=readme-ov-file#static-settings",children:"Static settings"}),": as value for ",(0,i.jsx)(n.code,{children:"aidial.identityProviders.azure.rolePath"})," provide a claim from Microsoft Entra."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial-core?tab=readme-ov-file#dynamic-settings",children:"Dynamic settings"}),": for ",(0,i.jsx)(n.code,{children:"userRoles"})," provide a specific group name as a claim value."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In this example, ",(0,i.jsx)(n.code,{children:'"azure-group-name"'})," role from the ",(0,i.jsx)(n.code,{children:'"groups"'})," claim is configured for ",(0,i.jsx)(n.code,{children:"chat-gpt-35-turbo"})," model:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'# Dynamic settings of AI DIAL Core\n"models": {\n    "chat-gpt-35-turbo": {\n      "type": "chat",\n      "endpoint" : "http://localhost:7001/v1/openai/deployments/gpt-35-turbo/chat/completions",\n      "upstreams": [\n        {"endpoint": "http://localhost:7001", "key": "modelKey1"}\n      ],\n      "userRoles": ["azure-group-name"]\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(7294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);