"use strict";(self.webpackChunkdial=self.webpackChunkdial||[]).push([[1543],{6416:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(5893),s=t(1151);const o={},r="How to Set Okta as Identity Provider",a={id:"Auth/Web/IDPs/okta",title:"okta",description:"- Introduction",source:"@site/docs/Auth/2. Web/2.IDPs/okta.md",sourceDirName:"Auth/2. Web/2.IDPs",slug:"/Auth/Web/IDPs/okta",permalink:"/Auth/Web/IDPs/okta",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"CustomSideBar",previous:{title:"keycloak",permalink:"/Auth/Web/IDPs/keycloak"},next:{title:"Overview",permalink:"/Roles and Access Control/overview"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration Guidelines",id:"configuration-guidelines",level:2},{value:"Configure Okta",id:"configure-okta",level:3},{value:"Configure AI DIAL",id:"configure-ai-dial",level:3},{value:"AI DIAL Chat Settings",id:"ai-dial-chat-settings",level:4},{value:"AI DIAL Core Settings",id:"ai-dial-core-settings",level:4},{value:"Assignment of Roles",id:"assignment-of-roles",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"how-to-set-okta-as-identity-provider",children:"How to Set Okta as Identity Provider"}),"\n",(0,i.jsxs)("div",{class:"docusaurus-ignore",children:[(0,i.jsx)(n.h1,{id:"table-of-contents",children:"Table of Contents"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#configuration-guidelines",children:"Configuration Guidelines"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#configure-okta",children:"Configure Okta"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#configure-ai-dial",children:"Configure AI DIAL"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#ai-dial-chat-settings",children:"AI DIAL Chat Settings"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#ai-dial-core-settings",children:"AI DIAL Core Settings"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#assignment-of-roles",children:"Assignment of Roles"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["This basic tutorial demonstrates how to configure an application in ",(0,i.jsx)(n.a,{href:"https://www.okta.com/customer-identity/single-sign-on",children:"Okta"})," and integrate it with AI DIAL for identity and access management."]}),"\n",(0,i.jsx)(n.p,{children:"In AI DIAL, you can assign roles to Models, Applications, Addons, and Assistants to restrict the number of tokens that can be transmitted in a specific time frame. These roles and their limitations can be created in external systems and then assigned in AI DIAL's configuration."}),"\n",(0,i.jsx)(n.h2,{id:"configuration-guidelines",children:"Configuration Guidelines"}),"\n",(0,i.jsx)(n.h3,{id:"configure-okta",children:"Configure Okta"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," Replace ",(0,i.jsx)(n.code,{children:"<chat_url>"})," with the actual address of your AI DIAL Chat application."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Follow these steps to configure Okta:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Create an Application:"})," begin by creating an ",(0,i.jsx)(n.a,{href:"https://help.okta.com/okta_help.htm?type=oie&locale=en&id=csh-apps-main",children:"Application"}),". You can refer to the official Okta documentation for detailed instructions on ",(0,i.jsx)(n.a,{href:"https://help.okta.com/oie/en-us/content/topics/apps/apps_app_integration_wizard_oidc.htm",children:"how to create an OIDC app integration"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Configure Application Settings:"})," under the ",(0,i.jsx)(n.strong,{children:"Applications/Applications"})," section, set the following parameters:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Sign-in redirect URIs: ",(0,i.jsx)(n.code,{children:"https://<chat_url>/api/auth/callback/okta"})]}),"\n",(0,i.jsxs)(n.li,{children:["Sign-out redirect URIs: ",(0,i.jsx)(n.code,{children:"https://<chat_url>"})]}),"\n",(0,i.jsxs)(n.li,{children:["Obtain and save ",(0,i.jsx)(n.strong,{children:"Client ID"})," and ",(0,i.jsx)(n.strong,{children:"Client secrets"})," generated for your application."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Enable API Scopes:"})," under the ",(0,i.jsx)(n.strong,{children:"Applications/Okta API Scopes"})," section, enable the following scopes:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"okta.users.read"}),"\n",(0,i.jsx)(n.li,{children:"okta.users.read.self"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Obtain Issuer URI and JWKS URI:"})," under ",(0,i.jsx)(n.strong,{children:"Security/API"})," section, locate the ",(0,i.jsx)(n.strong,{children:"Issuer URI"}),". You can find the ",(0,i.jsx)(n.strong,{children:"jwks_uri"})," within the Issuer URI. This URI will be used in AI DIAL Core configuration."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Create Users:"})," once the application integration is set up, create the necessary users. Refer to ",(0,i.jsx)(n.a,{href:"https://help.okta.com/oie/en-us/content/topics/users-groups-profiles/usgp-people.htm",children:"People"})," to learn how to do this."]}),"\n",(0,i.jsxs)(n.li,{children:["(Optional) ",(0,i.jsx)(n.strong,{children:"Create Groups:"})," create the necessary ",(0,i.jsx)(n.a,{href:"https://help.okta.com/oie/en-us/content/topics/users-groups-profiles/usgp-groups-main.htm",children:"Groups"})," in Okta."]}),"\n",(0,i.jsxs)(n.li,{children:["(Optional) ",(0,i.jsx)(n.strong,{children:"Assign People:"})," assign users (People) to the relevant Groups."]}),"\n",(0,i.jsxs)(n.li,{children:["(Optional) ",(0,i.jsx)(n.strong,{children:"Assign Application to Group:"})," refer to ",(0,i.jsx)(n.a,{href:"https://help.okta.com/oie/en-us/content/topics/users-groups-profiles/usgp-assign-app-group.htm",children:"Assign the Application to group"})," to learn how to do this."]}),"\n",(0,i.jsxs)(n.li,{children:["(Optional) ",(0,i.jsx)(n.strong,{children:"Configure ID Token:"})," under the ",(0,i.jsx)(n.strong,{children:"Applications/Sign On/OpenID Connect ID Token"})," section, set ",(0,i.jsx)(n.strong,{children:"Groups"})," claim type to ",(0,i.jsx)(n.code,{children:"Filter"})," and ",(0,i.jsx)(n.strong,{children:"Groups claim filter"})," to ",(0,i.jsx)(n.code,{children:"groups; Matches regex: .*"}),". For more information, refer to the ",(0,i.jsx)(n.a,{href:"https://developer.okta.com/docs/guides/customize-tokens-groups-claim/main/",children:"Okta documentation"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-ai-dial",children:"Configure AI DIAL"}),"\n",(0,i.jsx)(n.p,{children:"To enable AI DIAL Chat and AI DIAL Core to work with Okta, configure them with the necessary Okta-specific parameters."}),"\n",(0,i.jsx)(n.h4,{id:"ai-dial-chat-settings",children:"AI DIAL Chat Settings"}),"\n",(0,i.jsxs)(n.p,{children:["Add the following environment variables to AI DIAL Chat configuration. Refer to ",(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial-chat/blob/development/apps/chat/README.md#environment-variables",children:"AI DIAL Chat"})," for more details."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'AUTH_OKTA_CLIENT_ID: "<okta_client_id>"\nAUTH_OKTA_CLIENT_SECRET: "<okta_client_secret>"\nAUTH_OKTA_ISSUER: "<okta_issuer>" \n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"okta_issuer"})," example: ",(0,i.jsx)(n.code,{children:"https://${yourOktaDomain}/oauth2/${authorizationServerId}"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ai-dial-core-settings",children:"AI DIAL Core Settings"}),"\n",(0,i.jsxs)(n.p,{children:["Add the following parameters to AI DIAL Core ",(0,i.jsx)(n.strong,{children:"static"})," settings. Refer to ",(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial-core?tab=readme-ov-file#static-settings",children:"AI DIAL Core"})," for more details."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'aidial.identityProviders.okta.jwksUrl: "<okta_jwks_uri>"\naidial.identityProviders.okta.rolePath: "Groups"\naidial.identityProviders.okta.issuerPattern: \'^https:\\/\\/${yourOktaAccount}\\.okta\\.com.*$\'\naidial.identityProviders.okta.loggingKey: "sub"\naidial.identityProviders.okta.loggingSalt: "loggingSalt"\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"okta_jwks_uri"})," example: ",(0,i.jsx)(n.code,{children:"https://${yourOktaDomain}/oauth2/${authorizationServerId}/v1/keys"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"assignment-of-roles",children:"Assignment of Roles"}),"\n",(0,i.jsxs)(n.p,{children:["Once all the above steps are completed, including the ones marked as ",(0,i.jsx)(n.strong,{children:"Optional"}),", you can assign roles to Models, Applications, Addons, and Assistants."]}),"\n",(0,i.jsx)(n.p,{children:"In AI DIAL Core:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial-core?tab=readme-ov-file#static-settings",children:"Static settings"}),": as value for ",(0,i.jsx)(n.code,{children:"aidial.identityProviders.okta.rolePath"})," provide a claim from Okta."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial-core?tab=readme-ov-file#dynamic-settings",children:"Dynamic settings"}),": for ",(0,i.jsx)(n.code,{children:"userRoles"})," provide a specific claim value."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In this example, ",(0,i.jsx)(n.code,{children:"okta-group-name"})," claim value from the ",(0,i.jsx)(n.code,{children:"Groups"})," Okta claim is configured for ",(0,i.jsx)(n.code,{children:"chat-gpt-35-turbo"})," model:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'# Dynamic settings of AI DIAL Core\n"models": {\n    "chat-gpt-35-turbo": {\n      "type": "chat",\n      "endpoint" : "http://localhost:7001/v1/openai/deployments/gpt-35-turbo/chat/completions",\n      "upstreams": [\n        {"endpoint": "http://localhost:7001", "key": "modelKey1"}\n      ],\n      "userRoles": ["okta-group-name"]\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);