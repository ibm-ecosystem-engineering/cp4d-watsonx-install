"use strict";(self.webpackChunkcpd_watsonx_guide=self.webpackChunkcpd_watsonx_guide||[]).push([[384],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(a),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5933:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:2},o="Storage Validation Tool for IBM Cloud Paks",s={unversionedId:"k8s-storage-tests",id:"k8s-storage-tests",title:"Storage Validation Tool for IBM Cloud Paks",description:"In this step, we'll use ansible playbooks to validate file and block storage for Cloud Pak for Data and its services: .",source:"@site/docs/k8s-storage-tests.md",sourceDirName:".",slug:"/k8s-storage-tests",permalink:"/cp4d-484-watsonx-install/k8s-storage-tests",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/cp4d-484-watsonx-install/"},next:{title:"Method 1: Use Cloud Pak Deployer to Install Cloud Pak for Data and watsonx",permalink:"/cp4d-484-watsonx-install/install-cpd-watsonx"}},p={},i=[{value:"Running the Tests",id:"running-the-tests",level:2}],c={toc:i},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"storage-validation-tool-for-ibm-cloud-paks"},"Storage Validation Tool for IBM Cloud Paks"),(0,r.kt)("p",null,"In this step, we'll use ansible playbooks to validate file and block storage for Cloud Pak for Data and its services: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IBM/k8s-storage-tests"},"https://github.com/IBM/k8s-storage-tests"),"."),(0,r.kt)("h2",{id:"running-the-tests"},"Running the Tests"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to your OpenShift cluster")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following commands to upgrade your Python (3.6+)"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"If you are not root, prefix the commands with ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yum update -y\nyum install -y python3\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to upgrade pip:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install python3-pip\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are using Python3, create a symlink between Python and Python3:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ln -s -f /usr/bin/python3 /usr/bin/python\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are using pip3, create a symlink between pip adn pip3, then upgrade pip:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ln -s -f /usr/bin/pip3 /usr/bin/pip\npython -m pip install --upgrade pip\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Ansible:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install ansible==2.10.5\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the Python client for OpenShift"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install openshift\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you run into a PyYAML error in the previous step, run the following commands:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rm -rf /usr/lib64/python3.6/site-packages/yaml\nrm -f /usr/lib64/python3.6/site-packages/PyYAML-*\npip install openshift\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Ansible dependencies:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ansible-galaxy collection install operator_sdk.util\nansible-galaxy collection install kubernetes.core\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install git if not already installed and clone the repository with the required storage tests:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install git\ngit clone https://github.com/IBM/k8s-storage-tests.git\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new project for our test:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"oc new-project storage-test\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to your params.yml file within the repo:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd k8s-storage-tests/\nvi params.yml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'The current params.yaml only supports login by token, therefore fill out the "ocp_url" and "ocp_token" fields, and leave the "ocp_username" and "ocp_password" fields as "required"'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ocp_url: https://<YOUR_HOST>:<YOUR_PORT>\nocp_username: <required>\nocp_password: <required>\nocp_token: <YOUR_OCP_TOKEN>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Additionally within the params.yml file, edit the information for your file and block storage class names, as well as the namespace you created in step 11"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"storageClass_ReadWriteOnce: <YOUR_BLOCK_STORAGE_NAME>\nstorageClass_ReadWriteMany: <YOUR_FILE_STORAGE_NAME>\nstorage_validation_namespace: storage-test\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the playbook to start the test:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'ansible-playbook main.yml --extra-vars "@./params.yml" | tee output.log\n')))))}u.isMDXComponent=!0}}]);