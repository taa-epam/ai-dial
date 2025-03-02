"use strict";(self.webpackChunkdial=self.webpackChunkdial||[]).push([[4122],{692:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=t(5893),i=t(1151);const o={},s="Interceptors",c={id:"tutorials/interceptors",title:"Interceptors",description:"Introduction",source:"@site/docs/tutorials/interceptors.md",sourceDirName:"tutorials",slug:"/tutorials/interceptors",permalink:"/tutorials/interceptors",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"CustomSideBar",previous:{title:"Multimodality",permalink:"/tutorials/multimodality"},next:{title:"Custom Content in Chat",permalink:"/tutorials/chat-objects"}},l={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Interceptors SDK",id:"interceptors-sdk",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Add",id:"add",level:3},{value:"Assign",id:"assign",level:3},{value:"Flow",id:"flow",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"interceptors",children:"Interceptors"}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"Interceptors can be seen as a middleware that modifies incoming or outgoing requests according to a specific logic. In AI DIAL, we use interceptors to facilitate the implementation of a so-called Responsible AI approach and enforce compliance with internal and external privacy regulations and policies."}),"\n",(0,r.jsx)(n.p,{children:"For example, interceptors can block requests that violate specific regulations, related to restricted domains, or potentially lead to data leaks or biased responses. Another use case is when interceptors allow applications or models to respond solely to specific subjects and anonymize Personally Identifiable Information (PII) from user requests, or cache LLM responses."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Watch a ",(0,r.jsx)(n.a,{href:"/video%20demos/demos/interceptors",children:"demo video"})," to learn more about interceptors."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Technically speaking, interceptors in AI DIAL are components inserted into deployments (applications or model adapters) that can be called before or after ",(0,r.jsx)(n.a,{href:"https://epam-rail.com/dial_api#/paths/~1openai~1deployments~1%7BDeployment%20Name%7D~1chat~1completions/post",children:"chat completion requests"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Interceptors in AI DIAL could be classified into the following categories:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Pre-interceptors"})," that only modify the incoming request from the client (e.g. rejecting requests following certain criteria)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Post-interceptors"})," that only modify the response received from the upstream (e.g. censoring the response)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Generic interceptors"})," that modify both the incoming request and the response from the upstream (e.g. caching the responses)"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For example, to implement PII (Personally Identifiable Information) anonymization for all data sent to models through AI DIAL, you can use a ",(0,r.jsx)(n.strong,{children:"generic"})," interceptor which can employ specific locally deployed NLP models to obfuscate (replace with token) PII in requests (pre-interceptor) and decode it in responses (post-interceptor), effectively ensuring the anonymization of all personal data."]}),"\n",(0,r.jsx)(n.p,{children:"For illustration, the below diagram shows the flow of requests if two interceptors are configured. Every request/response goes through AI DIAL Core (this is hidden from the diagram for brevity):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"Client -> (original request) ->\n  Interceptor 1 -> (modified request #1) ->\n    Interceptor 2 -> (modified request #2) ->\n      Upstream -> (original response) ->\n    Interceptor 2 -> (modified response #1) ->\n  Interceptor 1 -> (modified response #2) ->\nClient\n"})}),"\n",(0,r.jsxs)(n.p,{children:["AI DIAL Core manages chat completion requests from interceptors through the endpoint: ",(0,r.jsx)(n.code,{children:"/openai/deployments/interceptor/chat/completions"}),". It uses the reserved deployment name ",(0,r.jsx)(n.code,{children:"interceptor"})," to handle requests from all interceptors. Upon receiving a request, it identifies the next interceptor based on its ",(0,r.jsx)(n.a,{href:"/Roles%20and%20Access%20Control/API%20Keys#per-request-keys",children:"per-request API key"}),". The final interceptor in the sequence is always the target deployment (application, model)."]}),"\n",(0,r.jsx)(n.h2,{id:"interceptors-sdk",children:"Interceptors SDK"}),"\n",(0,r.jsxs)(n.p,{children:["You can use ",(0,r.jsx)(n.a,{href:"https://github.com/epam/ai-dial-interceptors-sdk",children:"AI DIAL Interceptors Python SDK"})," to create your custom interceptors. Refer to ",(0,r.jsx)(n.a,{href:"https://github.com/epam/ai-dial-interceptors-sdk/tree/development/aidial_interceptors_sdk/examples",children:"Examples"})," for your reference."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Interceptors can be defined and assigned in AI DIAL Core ",(0,r.jsx)(n.a,{href:"https://github.com/epam/ai-dial-core?tab=readme-ov-file#dynamic-settings",children:"dynamic settings"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"add",children:"Add"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"interceptors"})," section to ",(0,r.jsx)(n.a,{href:"https://github.com/epam/ai-dial-core/blob/development/sample/aidial.config.json#L3",children:"AI DIAL Core dynamic settings"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Define a list of interceptors that will be available for your deployments:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'    "interceptors": {\n        "gpt-cache": {\n            "endpoint": "${INTERCEPTOR_SERVICE_URL}/openai/deployments/gpt-cache/chat/completions",\n            "description": "description"\n        },\n        "pii-anonymizer": {\n            "endpoint": "${INTERCEPTOR_SERVICE_URL}/openai/deployments/pii-anonymizer/chat/completions",\n            "description": "description"\n        }\n    }\n    ...\n'})}),"\n",(0,r.jsx)(n.h3,{id:"assign",children:"Assign"}),"\n",(0,r.jsxs)(n.p,{children:["To assign ",(0,r.jsx)(n.code,{children:"interceptors"})," to ",(0,r.jsx)(n.code,{children:"applications"})," and ",(0,r.jsx)(n.code,{children:"models"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["In our example, we add ",(0,r.jsx)(n.code,{children:"interceptors"})," array to a chat-gpt-4 model."]}),"\n",(0,r.jsx)(n.li,{children:"Define interceptors from the available list:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'    { \n    "models": {\n        "chat-gpt-4": {\n            "interceptors": ["gpt-cache", "pii-anonymizer"]            \n        },\n        ...\n    },\n    ...\n    }\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": make sure that chat completion interceptors are only used in chat models or application, embeddings interceptors are only used in embeddings models."]}),"\n",(0,r.jsx)(n.h2,{id:"flow",children:"Flow"}),"\n",(0,r.jsxs)(n.p,{children:["To demonstrate the flow, lets take two interceptors ",(0,r.jsx)(n.strong,{children:"gpt-cache"})," and ",(0,r.jsx)(n.strong,{children:"pii-anonymizer"})," configured for the ",(0,r.jsx)(n.strong,{children:"GPT-4"})," model:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"AI DIAL Core receives a request from AI DIAL Chat to query the GPT-4 model."}),"\n",(0,r.jsxs)(n.li,{children:["The first interceptor, ",(0,r.jsx)(n.strong,{children:"gpt-cache"}),", checks the cache for the request. If found, the response is returned to AI DIAL Core; if not, the request is forwarded to ",(0,r.jsx)(n.strong,{children:"pii-anonymizer"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"pii-anonymizer"})," interceptor anonymizes any personally identifiable information (PII) in the request and forwards it to ",(0,r.jsx)(n.strong,{children:"GPT-4"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"After all interceptors have processed the request, AI DIAL Core sends it directly to the GPT-4 model."}),"\n",(0,r.jsxs)(n.li,{children:["AI DIAL Core retrieves the response from ",(0,r.jsx)(n.strong,{children:"GPT-4"})," and forwards it to ",(0,r.jsx)(n.strong,{children:"pii-anonymizer"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"pii-anonymizer"})," interceptor restores the original PII in the response and passes it to ",(0,r.jsx)(n.strong,{children:"gpt-cache"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"gpt-cache"})," interceptor stores the response in the cache and returns it to AI DIAL Core."]}),"\n",(0,r.jsx)(n.li,{children:"AI DIAL Core sends the final response back to AI DIAL Chat."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var r=t(7294);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);