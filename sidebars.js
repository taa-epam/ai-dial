/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  CustomSideBar: [
    {
      type: 'doc',
      id: 'README', // document ID
      label: 'Home', // sidebar label
    },
    'quick-start',
    'privacy',
    'architecture',
    'supported-models',
    {
      type: 'category',
      label: 'Auth',
      items: [
        {
          type:'doc',
          id: 'Auth/overview',
          label: 'Overview'
        },
        {
          type:'doc',
          id: 'Auth/programmatic-auth',
          label: 'Programmatic Auth'
        },
        {
          type: 'category',
          label: 'Web Auth',
          items: [
            {
              type:'doc',
              id: 'Auth/Web/overview',
              label: 'Overview'
            },
            {
              type:'doc',
              id: 'Auth/Web/IDPs/auth0',
              label: 'Auth0'
            },
            {
              type:'doc',
              id: 'Auth/Web/IDPs/cognito',
              label: 'AWS Cognito'
            },
            {
              type:'doc',
              id: 'Auth/Web/IDPs/entraID',
              label: 'Microsoft Entra'
            },
            {
              type:'doc',
              id: 'Auth/Web/IDPs/google',
              label: 'Google Identity'
            },
            {
              type:'doc',
              id: 'Auth/Web/IDPs/keycloak',
              label: 'Keycloak'
            },
            {
              type:'doc',
              id: 'Auth/Web/IDPs/okta',
              label: 'Okta'
            }
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Roles & Access Control',
      items: [
        {
          type:'doc',
          id: 'Roles and Access Control/overview',
          label: 'Overview'
        },
        {
          type:'doc',
          id: 'Roles and Access Control/API Keys',
          label: 'API Keys'
        },
        ,
        {
          type:'doc',
          id: 'Roles and Access Control/chat-users',
          label: 'Chat Users'
        }
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'doc',
          id: 'tutorials/quick-start-with-application',
          label: 'Chat with Application',
        },
        {
          type: 'doc',
          id: 'tutorials/quick-start-model',
          label: 'Chat with OpenAI Model',
        },
        {
          type: 'doc',
          id: 'tutorials/quick-start-with-self-hosted-model',
          label: 'Chat with a Self-Hosted Model',
        },
        {
          type: 'doc',
          id: 'tutorials/quick-start-with-addon',
          label: 'Chat with Addon',
        },
        {
          type: 'doc',
          id: 'tutorials/high-load-performance',
          label: 'Handling High Loads',
        },
        {
          type: 'doc',
          id: 'tutorials/localization',
          label: 'Chat Localization',
        },
        {
          type: 'doc',
          id: 'tutorials/load-balancer',
          label: 'Load Balancer',
        },
        {
          type: 'doc',
          id: 'tutorials/multimodality',
          label: 'Multimodality',
        },
        {
          type: 'doc',
          id: 'tutorials/interceptors',
          label: 'Interceptors',
        },
        {
          type: 'doc',
          id: 'tutorials/chat-objects',
          label: 'Custom Content in Chat',
        },
        {
          type: 'doc',
          id: 'tutorials/adapter-dial',
          label: 'DIAL-to-DIAL Adapter',
        },
        {
          type: 'doc',
          id: 'tutorials/data-visualization',
          label: 'Data Visualization',
        },
        {
          type: 'doc',
          id: 'tutorials/copilot-to-dial',
          label: 'MS Copilot to DIAL',
        },
        {
          type: 'category',
          label: 'Collaboration',
          items: [
            {
              type:'doc',
              id: 'tutorials/collaboration/overview',
              label: 'Overview'
            },
            {
              type: 'doc',
              id: 'tutorials/collaboration/enable-publications',
              label: 'Publications',
            },
            {
              type:'doc',
              id: 'tutorials/collaboration/sharing',
              label: 'Sharing'
            },
            {
              type:'doc',
              id: 'tutorials/collaboration/notifications',
              label: 'Notifications'
            }
          ]
        },
        {
          type: 'doc',
          id: 'tutorials/realtime-analytics',
          label: 'Analytics Realtime',
        },
        {
          type: 'doc',
          id: 'tutorials/custom-buttons',
          label: 'Custom Buttons in Apps',
        },
        {
          type: 'doc',
          id: 'tutorials/use-databricks-model',
          label: 'Using Databricks Models in AI DIAL',
        }
      ],
    },
    'user-guide',
    'marketplace',
    'chat-design',
    {
      type: 'category',
      label: 'Deployment',
      items: [
        {
          type: 'link',
          label: 'Helm Deployment',
          href: 'https://github.com/epam/ai-dial-helm/tree/main/charts/dial/examples/generic/simple',
        },
        {
          type:'doc',
          id: 'Deployment/custom_apps_deployment',
          label: 'Custom Apps Deployment'
        },
        {
          type:'doc',
          id: 'Deployment/azure-secrets',
          label: 'Azure Secrets Deployment'
        },
        {
          type:'doc',
          id: 'Deployment/configuration',
          label: 'Configuration'
        },
        'Deployment/OpenAI Model Deployment',
        'Deployment/Vertex Model Deployment',
        'Deployment/Bedrock Model Deployment',
      ],
    },
    {
      type: 'category',
      label: 'Cookbook',
      items: [
        "Cookbook/dial-cookbook/examples/how_to_call_text_to_text_applications",
        "Cookbook/dial-cookbook/examples/how_to_call_text_to_image_applications",
        "Cookbook/dial-cookbook/examples/how_to_call_image_to_text_applications",
      ],
    },
    {
      type: 'doc',
      id: 'Observability/Observability',
      label: 'Observability',
    },
    {
      type: 'link',
      label: 'API Reference',
      href: 'https://epam-rail.com/dial_api'
    },
    {
      type: 'category',
      label: 'Video Demos',
      items: [
        {
          Demos: [
            {
              type: 'autogenerated',
              dirName: 'video demos/demos',
            },
          ],
          'Demos For Developers': [
            {
              type: 'autogenerated',
              dirName: 'video demos/demos-for-developers',
            },
          ],
        },
      ]
    }
  ],
};

export default sidebars;
