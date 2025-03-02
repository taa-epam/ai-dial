"use strict";(self.webpackChunkdial=self.webpackChunkdial||[]).push([[2551],{3188:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=i(5893),r=i(1151);const s={},o="OpenAI Model Deployment",a={id:"Deployment/OpenAI Model Deployment",title:"OpenAI Model Deployment",description:"From this instruction, you will learn how to create an Azure OpenAI model GPT-3.5-turbo/GPT-4 and use it in AI DIAL config.",source:"@site/docs/Deployment/OpenAI Model Deployment.md",sourceDirName:"Deployment",slug:"/Deployment/OpenAI Model Deployment",permalink:"/ai-dial/Deployment/OpenAI Model Deployment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"CustomSideBar",previous:{title:"configuration",permalink:"/ai-dial/Deployment/configuration"},next:{title:"Vertex Model Deployment",permalink:"/ai-dial/Deployment/Vertex Model Deployment"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Configuring the AI Model",id:"step-1-configuring-the-ai-model",level:2},{value:"Request Access to Models",id:"request-access-to-models",level:3},{value:"Create a Model Deployment",id:"create-a-model-deployment",level:3},{value:"Step 2: Get Access to AI Model",id:"step-2-get-access-to-ai-model",level:2},{value:"Configure Azure OpenAI Model and Get API Key",id:"configure-azure-openai-model-and-get-api-key",level:4},{value:"Configure Kubernetes Service Account",id:"configure-kubernetes-service-account",level:4},{value:"Step 3: Add Model to AI DIAL",id:"step-3-add-model-to-ai-dial",level:2},{value:"Add Model to AI DIAL Core Config",id:"add-model-to-ai-dial-core-config",level:3},{value:"Configure AI DIAL Adapter",id:"configure-ai-dial-adapter",level:3},{value:"Use Adapter with Azure OpenAI API Key",id:"use-adapter-with-azure-openai-api-key",level:4},{value:"Use Kubernetes Service Account Assigned to Azure user-assigned Managed Identity",id:"use-kubernetes-service-account-assigned-to-azure-user-assigned-managed-identity",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"openai-model-deployment",children:"OpenAI Model Deployment"}),"\n",(0,t.jsx)(n.p,{children:"From this instruction, you will learn how to create an Azure OpenAI model GPT-3.5-turbo/GPT-4 and use it in AI DIAL config."}),"\n",(0,t.jsxs)("div",{class:"docusaurus-ignore",children:[(0,t.jsx)(n.h1,{id:"table-of-contents",children:"Table of Contents"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#prerequisites",children:"Prerequisites"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#step-1-configuring-the-ai-model",children:"Step 1: Configuring the AI Model"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#request-access-to-models",children:"Request Access to Models"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#create-a-model-deployment",children:"Create a Model Deployment"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#step-2-get-access-to-ai-model",children:"Step 2: Get Access to AI Model"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#configure-azure-openai-model-and-get-api-key",children:"Configure Azure OpenAI Model and Get API Key"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#configure-kubernetes-service-account",children:"Configure Kubernetes Service Account"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#step-3-add-model-to-ai-dial",children:"Step 3: Add Model to AI DIAL"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#add-model-to-ai-dial-core-config",children:"Add Model to AI DIAL Core Config"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#configure-ai-dial-adapter",children:"Configure AI DIAL Adapter"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#use-adapter-with-azure-openai-api-key",children:"Use Adapter with Azure OpenAI API Key"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#use-kubernetes-service-account-assigned-to-azure-user-assigned-managed-identity",children:"Use Kubernetes Service Account Assigned to Azure user-assigned Managed Identity"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Active Azure account"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-1-configuring-the-ai-model",children:"Step 1: Configuring the AI Model"}),"\n",(0,t.jsx)(n.h3,{id:"request-access-to-models",children:"Request Access to Models"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Login to the MS Azure portal (",(0,t.jsx)(n.a,{href:"https://portal.azure.com/",children:"https://portal.azure.com/"}),") with your credentials. Create an account if you do not have one."]}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to Azure OpenAI and click ",(0,t.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Follow ",(0,t.jsx)(n.a,{href:"https://customervoice.microsoft.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR7en2Ais5pxKtso_Pz4b1_xUNTZBNzRKNlVQSFhZMU9aV09EVzYxWFdORCQlQCN0PWcu",children:"this link"})," in the notification message to request access."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(936).Z+"",width:"773",height:"296"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Important"}),": you can proceed with model creation only upon receiving the confirmation email."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-a-model-deployment",children:"Create a Model Deployment"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the search bar to look up ",(0,t.jsx)(n.strong,{children:"Azure OpenAI"})," and click it to navigate to the ",(0,t.jsx)(n.strong,{children:"Azure AI Services|Azure OpenAI"})," page."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(7022).Z+"",width:"1392",height:"404"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You can now find your OpenAI model in the ",(0,t.jsx)(n.strong,{children:"Azure AI services"})," section. Click it to open and then click ",(0,t.jsx)(n.strong,{children:"Go to Azure OpenAI Studio"})," in the top bar."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(6305).Z+"",width:"594",height:"211"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In Azure OpenAI Studio, click ",(0,t.jsx)(n.strong,{children:"Deployment"})," in the navigation menu and click ",(0,t.jsx)(n.strong,{children:"Create new deployment"}),". Fill in the required fields and click ",(0,t.jsx)(n.strong,{children:"Create"})," to create a model."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(6283).Z+"",width:"880",height:"445"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"It is important to note that certain models may not be accessible for deployment in a particular region. If you need a particular model, you will have to submit a separate request or relocate Azure OpenAI to a different region."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-2-get-access-to-ai-model",children:"Step 2: Get Access to AI Model"}),"\n",(0,t.jsx)(n.h4,{id:"configure-azure-openai-model-and-get-api-key",children:"Configure Azure OpenAI Model and Get API Key"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go back to your model page and click ",(0,t.jsx)(n.strong,{children:"Keys and Endpoint"}),". In this section, you can find your key and endpoint that you will need to provide in AI DIAL configuration file."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(9001).Z+"",width:"994",height:"592"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You can restrict access to your accounts based on a specific subset of networks by configuring network rules, only applications that access data through the designated set of networks are permitted to access the account. You can manage default network access rules for Azure AI services resources in ",(0,t.jsx)(n.strong,{children:"Resource Management/Networking"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/ai-services/cognitive-services-virtual-networks?context=%2Fazure%2Fcognitive-services%2Fopenai%2Fcontext%2Fcontext&tabs=portal#manage-default-network-access-rules",children:"Microsoft Documentation"})," to learn more.\nRefer to ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy",children:"Microsoft Data Privacy Policy"})," to learn how data provided by you to the Azure OpenAI service is processed, used, and stored."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(9382).Z+"",width:"1251",height:"382"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"configure-kubernetes-service-account",children:"Configure Kubernetes Service Account"}),"\n",(0,t.jsx)(n.p,{children:"In case your cluster is located at Azure, the best practice for using Azure OpenAI is to assign an Azure user-assigned managed identity to Kubernetes Service Account. You can do this using Microsoft Entra Workload ID with Azure Kubernetes Service."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/aks/workload-identity-overview",children:"Azure Documentation"})," to learn how to configure Microsoft Entra Workload ID with Azure Kubernetes Service."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/aks/open-ai-secure-access-quickstart",children:"Azure Documentation"})," to learn how to configure a secure access to Azure OpenAI from Azure Kubernetes Service."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-3-add-model-to-ai-dial",children:"Step 3: Add Model to AI DIAL"}),"\n",(0,t.jsx)(n.p,{children:"To deploy a model to AI DIAL, it is necessary to add it to config and configure an adapter for it."}),"\n",(0,t.jsx)(n.h3,{id:"add-model-to-ai-dial-core-config",children:"Add Model to AI DIAL Core Config"}),"\n",(0,t.jsxs)(n.p,{children:["Add your model with its parameters in the ",(0,t.jsx)(n.code,{children:"models"})," section."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"https://github.com/epam/ai-dial-core/blob/development/sample/aidial.config.json#L30",children:"AI DIAL Core Configuration"})," to view an example."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"/ai-dial/Deployment/configuration#core-parameters",children:"Configure core config"})," to view the configuration of AI DIAL core parameters in the helm-based installation."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configure-ai-dial-adapter",children:"Configure AI DIAL Adapter"}),"\n",(0,t.jsxs)(n.p,{children:["To work with models, we use applications called Adapters. You can configure OpenAI Adapter via ",(0,t.jsx)(n.a,{href:"https://github.com/epam/ai-dial-adapter-openai#environment-variables",children:"environment variables"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"https://github.com/epam/ai-dial-adapter-openai",children:"Adapter for OpenAI"})," to view documentation for a OpenAI AI DIAL Adapter."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"use-adapter-with-azure-openai-api-key",children:"Use Adapter with Azure OpenAI API Key"}),"\n",(0,t.jsx)(n.p,{children:"In this scenario, it's enough to enable the adapter. Azure Open AI keys are located in the configuration file of AI DIAL Core. Any other configuration of the adapter is not required."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"openai:\n  enabled: true\n\n"})}),"\n",(0,t.jsx)(n.h4,{id:"use-kubernetes-service-account-assigned-to-azure-user-assigned-managed-identity",children:"Use Kubernetes Service Account Assigned to Azure user-assigned Managed Identity"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Before taking this step, configure ",(0,t.jsx)(n.a,{href:"#configure-kubernetes-service-account",children:"Microsoft Entra Workload ID with Azure Kubernetes Service"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In this scenario, the adapter uses Azure user-assigned managed identity. In such a configuration, there's no need to setting the Azure OpenAI API key in the AI DIAL Core configuration file. Authentication takes place on the adapter level."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'openai:\n  enabled: true\n\n  podLabels:\n    azure.workload.identity/use: "true"\n  \nserviceAccount:\n  create: true\n  annotations:\n    azure.workload.identity/client-id: "client-id"\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},9001:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/step13-8f076c41b399277b7c01f06f423867c3.jpg"},7022:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/step2-e83a4f275333f4b35994e49b503388a5.jpg"},936:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/step5-d7bbb290c06c5dcd7539c0ce15e3de5d.jpg"},6305:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/step8-ceeb082b7c380cbaaa31dadc2b70db95.jpg"},6283:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/step9-7be1fbb3bc3da4a5381d72e900d20d8d.jpg"},9382:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/whitelisting-e4d14b12d9feaf40e2b21d654cbaa232.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var t=i(7294);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);