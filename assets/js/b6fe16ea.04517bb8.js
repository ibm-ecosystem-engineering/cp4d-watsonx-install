"use strict";(self.webpackChunkcpd_watsonx_guide=self.webpackChunkcpd_watsonx_guide||[]).push([[149],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>_});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=l,_=d["".concat(i,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(_,o(o({ref:t},s),{},{components:a})):n.createElement(_,o({ref:t},s))}));function _(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:l,o[1]=c;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4740:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:4},o="Method 2: Use CPD-CLI to Install IBM Cloud Pak for Data and watsonx",c={unversionedId:"install-cpd-watsonx-manually",id:"install-cpd-watsonx-manually",title:"Method 2: Use CPD-CLI to Install IBM Cloud Pak for Data and watsonx",description:"This method uses the cpd-cli to manually install the IBM Cloud Pak for Data platform (version 4.8.4) and watsonx.ai. The documentation can be found at: .",source:"@site/docs/install-cpd-watsonx-manually.md",sourceDirName:".",slug:"/install-cpd-watsonx-manually",permalink:"/cp4d-watsonx-install/install-cpd-watsonx-manually",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Method 1: Use Cloud Pak Deployer to Install Cloud Pak for Data and watsonx.ai",permalink:"/cp4d-watsonx-install/install-cpd-watsonx"}},i={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2}],s={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"method-2-use-cpd-cli-to-install-ibm-cloud-pak-for-data-and-watsonx"},"Method 2: Use CPD-CLI to Install IBM Cloud Pak for Data and watsonx"),(0,l.kt)("p",null,"This method uses the cpd-cli to manually install the IBM Cloud Pak for Data platform (version 4.8.4) and watsonx.ai. The documentation can be found at: ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=data-installing-cloud-pak"},"https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=data-installing-cloud-pak"),"."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"An existing OpenShift cluster with file and block storage and the compute required for IBM Cloud Pak for Data and watsonx.ai."),(0,l.kt)("li",{parentName:"ol"},"An IBM Entitlement Key: ",(0,l.kt)("a",{parentName:"li",href:"https://myibm.ibm.com/products-services/containerlibrary"},"https://myibm.ibm.com/products-services/containerlibrary"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"this is necessary for access to CPD and its cartridges (watsonx.ai)"))),(0,l.kt)("li",{parentName:"ol"},"A linux VM with the following:",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"podman: ",(0,l.kt)("a",{parentName:"li",href:"https://podman.io/docs/installation"},"https://podman.io/docs/installation")),(0,l.kt)("li",{parentName:"ol"},"OpenShift CLI: ",(0,l.kt)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.14/cli_reference/openshift_cli/getting-started-cli.html"},"https://docs.openshift.com/container-platform/4.14/cli_reference/openshift_cli/getting-started-cli.html")))),(0,l.kt)("li",{parentName:"ol"},"Install the Node Feature Discovery Operator: ",(0,l.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/datacenter/cloud-native/openshift/23.9.1/install-nfd.html"},"https://docs.nvidia.com/datacenter/cloud-native/openshift/23.9.1/install-nfd.html")),(0,l.kt)("li",{parentName:"ol"},"Install the GPU Operator: ",(0,l.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/datacenter/cloud-native/openshift/latest/install-gpu-ocp.html"},"https://docs.nvidia.com/datacenter/cloud-native/openshift/latest/install-gpu-ocp.html"))),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On your Linux VM, create a directory for the cpd-cli and change directories into it"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir cpd\ncd cpd\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install the latest version of the cpd-cli and navigate to the downloaded directory"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -LSo cpd-cli-linux-EE-13.tgz https://github.com/IBM/cpd-cli/releases/download/v13.1.4/cpd-cli-linux-EE-13.1.4.tgz\n\ntar -xf cpd-cli-linux-EE-13.tgz\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Login to the public cloud pak registry"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"podman login cp.icr.io -u cp -p <IBM_PUBLIC_ENTITLEMENT_KEY>\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Spin up the olm-utils container, login to your cluster with cpd-cli, and add your entitlement key to the global pull secret"),(0,l.kt)("p",{parentName:"li"}," ",(0,l.kt)("strong",{parentName:"p"},"Note:"),' When logging into your cluster with cpd-cli, leave out the "oc login" portion of the login command'),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./cpd-cli manage restart-container\n\n./cpd-cli manage login-to-ocp <YOUR_OC_LOGIN_COMMAND>\n\n./cpd-cli manage add-cred-to-global-pull-secret --registry=cp.icr.io --registry_pull_user=cp --registry_pull_password=<YOUR_IBM_PUBLIC_ENTITLEMENT_KEY>\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install the cpd platform"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./cpd-cli manage apply-cluster-components --release=4.8.4 --license_acceptance=true\n\n./cpd-cli manage apply-scheduler \\\n--release=4.8.4 \\\n--license_acceptance=true \\\n--scheduler_ns=ibm-cpd-scheduler\n\n./cpd-cli manage authorize-instance-topology --cpd_operator_ns=cpd-operator --cpd_instance_ns=cpd\n\n./cpd-cli manage setup-instance-topology \\\n--release=4.8.4 \\\n--cpd_operator_ns=cpd-operator \\\n--cpd_instance_ns=cpd \\\n--license_acceptance=true \\\n--block_storage_class=<YOUR_BLOCK_STORAGE_CLASS_NAME>\n\n# cpd platform install\n./cpd-cli manage apply-olm --components=cpd_platform  --release=4.8.4 --cpd_operator_ns=cpd-operator\n\n./cpd-cli manage apply-cr --components=cpd_platform --release=4.8.4 --license_acceptance=true --cpd_operator_ns=cpd-operator --cpd_instance_ns=cpd --block_storage_class=<YOUR_BLOCK_STORAGE_CLASS_NAME> --file_storage_class=<YOUR_FILE_STORAGE_CLASS_NAME> --license_acceptance=true\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install the watsonx.ai cartridge"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./cpd-cli manage apply-olm --components=watsonx_ai  --release=4.8.4 --cpd_operator_ns=cpd-operator\n\n./cpd-cli manage apply-cr --components=watsonx_ai --release=4.8.4 --license_acceptance=true --cpd_instance_ns=cpd --block_storage_class=<YOUR_BLOCK_STORAGE_CLASS_NAME> --file_storage_class=<YOUR_FILE_STORAGE_CLASS_NAME>  --license_acceptance=true\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install the watsonx.data cartridge"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./cpd-cli manage apply-olm \\\n--release=4.8.4 \\\n--cpd_operator_ns=cpd-operator \\\n--components=watsonx_data\n\n./cpd-cli manage apply-cr --components=watsonx_data --release=4.8.4 --cpd_instance_ns=cpd --block_storage_class=<YOUR_BLOCK_STORAGE_CLASS_NAME> --file_storage_class=<YOUR_FILE_STORAGE_CLASS_NAME>  --license_acceptance=true\n\n")))))}m.isMDXComponent=!0}}]);