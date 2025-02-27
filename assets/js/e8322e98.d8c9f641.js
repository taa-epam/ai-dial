"use strict";(self.webpackChunkdial=self.webpackChunkdial||[]).push([[7739],{8467:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=l(5893),o=l(1151);const i={},s="Launch AI DIAL Chat with a Self-Hosted Model",d={id:"tutorials/quick-start-with-self-hosted-model",title:"Launch AI DIAL Chat with a Self-Hosted Model",description:"Introduction",source:"@site/docs/tutorials/quick-start-with-self-hosted-model.md",sourceDirName:"tutorials",slug:"/tutorials/quick-start-with-self-hosted-model",permalink:"/tutorials/quick-start-with-self-hosted-model",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"CustomSideBar",previous:{title:"Launch AI DIAL Chat with Azure Model",permalink:"/tutorials/quick-start-model"},next:{title:"Launch AI DIAL Chat with a Sample Addon",permalink:"/tutorials/quick-start-with-addon"}},r={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Get AI DIAL",id:"step-1-get-ai-dial",level:2},{value:"Step 2: Choose a model to run",id:"step-2-choose-a-model-to-run",level:2},{value:"Chat models",id:"chat-models",level:3},{value:"Vision models",id:"vision-models",level:3},{value:"Embedding models",id:"embedding-models",level:3},{value:"Step 3: Launch AI DIAL Chat",id:"step-3-launch-ai-dial-chat",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"launch-ai-dial-chat-with-a-self-hosted-model",children:"Launch AI DIAL Chat with a Self-Hosted Model"}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["In this tutorial, you will learn how to quickly launch AI DIAL Chat with a self-hosted model powered by ",(0,t.jsx)(n.a,{href:"https://ollama.com/",children:"Ollama"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Watch a ",(0,t.jsx)(n.a,{href:"/video%20demos/demos-for-developers/deploy-ollama",children:"demo video"})," to see it in action."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Docker engine installed on your machine (Docker Compose Version 2.20.0 +)."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/desktop/",children:"Docker"})," documentation."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-1-get-ai-dial",children:"Step 1: Get AI DIAL"}),"\n",(0,t.jsxs)(n.p,{children:["Clone ",(0,t.jsx)(n.a,{href:"https://github.com/epam/ai-dial/",children:"the repository"})," with the tutorials and change directory to the following folder:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"cd dial-docker-compose/ollama\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-2-choose-a-model-to-run",children:"Step 2: Choose a model to run"}),"\n",(0,t.jsx)(n.p,{children:"Ollama supports a wide range of popular open-source models."}),"\n",(0,t.jsx)(n.p,{children:"Consider first the modality your are interested in - is it a regular text-to-text chat model, a multi-modal vision model or an embedding model?"}),"\n",(0,t.jsxs)(n.p,{children:["Follow the feature tags ",(0,t.jsxs)(n.em,{children:["(",(0,t.jsx)(n.code,{children:"Embeddings"}),", ",(0,t.jsx)(n.code,{children:"Code"}),", ",(0,t.jsx)(n.code,{children:"Tools"}),", ",(0,t.jsx)(n.code,{children:"Vision"}),")"]})," at ",(0,t.jsx)(n.a,{href:"https://ollama.com/search",children:"Ollama Search"})," to find the appropriate model."]}),"\n",(0,t.jsx)(n.p,{children:"We recommend choosing one of the following models which have been tested."}),"\n",(0,t.jsx)(n.h3,{id:"chat-models",children:"Chat models"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Model"}),(0,t.jsx)(n.th,{children:"Tools"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://ollama.com/library/llama3.1:8b-instruct-q4_0",children:"llama3.1:8b-instruct-q4_0"})}),(0,t.jsxs)(n.td,{children:["\u2705 ",(0,t.jsx)(n.em,{children:"(only in non-streaming mode)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://ollama.com/library/mistral:7b-instruct-q4_0",children:"mistral:7b-instruct-q4_0"})}),(0,t.jsx)(n.td,{children:"\u274c"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://ollama.com/library/phi3.5:3.8b-mini-instruct-q4_0",children:"phi3.5:3.8b-mini-instruct-q4_0"})}),(0,t.jsx)(n.td,{children:"\u274c"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://ollama.com/library/gemma2:2b-instruct-q4_0",children:"gemma2:2b-instruct-q4_0"})}),(0,t.jsx)(n.td,{children:"\u274c"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"All the models support streaming."}),"\n",(0,t.jsx)(n.h3,{id:"vision-models",children:"Vision models"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://ollama.com/library/llava:7b-v1.6-mistral-q4_0",children:"llava:7b-v1.6-mistral-q4_0"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://ollama.com/library/llava-phi3:3.8b-mini-q4_0",children:"llava-phi3:3.8b-mini-q4_0"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"embedding-models",children:"Embedding models"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://ollama.com/library/nomic-embed-text:137m-v1.5-fp16",children:"nomic-embed-text:137m-v1.5-fp16"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://ollama.com/library/bge-m3:567m-fp16",children:"bge-m3:567m-fp16"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-3-launch-ai-dial-chat",children:"Step 3: Launch AI DIAL Chat"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure ",(0,t.jsx)(n.code,{children:".env"})," file in the current directory according to the type of model you've chosen:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.code,{children:"OLLAMA_CHAT_MODEL"})," for the name of a text model."]}),"\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.code,{children:"OLLAMA_VISION_MODEL"})," for the name of a vision model."]}),"\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.code,{children:"OLLAMA_EMBEDDING_MODEL"})," for the name of an embedding model."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": It's not necessary to configure all the models. If a model isn't set, then it won't be downloaded."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Then run the following command to pull and load into the memory of the Ollama server the specified models:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"docker compose up --abort-on-container-exit\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Keep in mind that a typical size of a lightweight Ollama model is around a few gigabytes. So it may take a few minutes ",(0,t.jsx)(n.em,{children:"(or more)"})," to download it on the first run, depending on your internet bandwidth and the size of the model you choose."]}),"\n",(0,t.jsxs)(n.p,{children:["The models are fully loaded once ",(0,t.jsx)(n.code,{children:"ollama-setup"})," service prints ",(0,t.jsx)(n.code,{children:"The Ollama server is up and running."})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Finally, open ",(0,t.jsx)(n.a,{href:"http://localhost:3000/",children:"http://localhost:3000/"})," in your browser to launch the AI DIAL Chat application and select an appropriate AI DIAL deployments to converse with:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Self-hosted chat model"})," deployment for the ",(0,t.jsx)(n.code,{children:"OLLAMA_CHAT_MODEL"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Self-hosted vision model"})," deployment for the ",(0,t.jsx)(n.code,{children:"OLLAMA_VISION_MODEL"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Note, that the vision models we tested, do not support streaming of response. Moreover, they are typically more computationally expensive than the chat models. So it may take minutes for a vision model to respond."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The embedding model will become available in AI DIAL under the deployment name ",(0,t.jsx)(n.code,{children:"embedding-model"})," and could be called via the endpoint: ",(0,t.jsx)(n.code,{children:"localhost:8080/openai/deployments/embedding-model/embeddings"}),"."]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>d,a:()=>s});var t=l(7294);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);