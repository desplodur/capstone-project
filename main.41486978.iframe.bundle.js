(globalThis.webpackChunkreact_app=globalThis.webpackChunkreact_app||[]).push([[179],{"./src/utils/icons/statusClosed.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__.p+"static/media/statusClosed.8149cfe8a261099364aeae246355bd55.svg"},"./src/utils/icons/statusOpen.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__.p+"static/media/statusOpen.4b943bd2488532d002494dd207ba182d.svg"},"./src/components/Dialog/Dialog.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Interactive:()=>Interactive,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Dialog_stories});var react=__webpack_require__("./node_modules/react/index.js");const styled=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.dialog`
	position: absolute;
	z-index: 1;
	top: 40%;
	margin: 0 auto;
	padding: 1em;
	border: 4px solid var(--signal);
	border-radius: 1em;
	color: var(--signal);
	font-size: 1.5rem;
	text-align: center;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Dialog(_ref){let{children,open}=_ref;return(0,jsx_runtime.jsx)(styled,{open,children})}const Default=function Template(args){return(0,jsx_runtime.jsx)(Dialog,{...args})}.bind({});Default.args={children:"Hello World",open:!0};const Interactive=function Interactive(){const[open,setOpen]=(0,react.useState)(!0);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Dialog,{open,onClose:()=>{setOpen(!1)},children:"Hello World 001"}),(0,jsx_runtime.jsx)("button",{onClick:()=>{setOpen(!open)},children:"Toggle"})]})},Dialog_stories={title:"Dialog",component:Dialog};Default.parameters={storySource:{source:"Template.bind({})"},...Default.parameters},Interactive.parameters={storySource:{source:"function Interactive() {\n\tconst [open, setOpen] = useState(true);\n\treturn (\n\t\t<>\n\t\t\t<Dialog\n\t\t\t\topen={open}\n\t\t\t\tonClose={() => {\n\t\t\t\t\tsetOpen(false);\n\t\t\t\t}}\n\t\t\t>\n\t\t\t\tHello World 001\n\t\t\t</Dialog>\n\t\t\t<button\n\t\t\t\tonClick={() => {\n\t\t\t\t\tsetOpen(!open);\n\t\t\t\t}}\n\t\t\t>\n\t\t\t\tToggle\n\t\t\t</button>\n\t\t</>\n\t);\n}"},...Interactive.parameters};const __namedExportsOrder=["Default","Interactive"]},"./src/components/Form/Form.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Form_stories});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const styled=styled_components_browser_esm.ZP.form`
	display: flex;
	width: 100%;
	height: 2em;
	input {
		width: 95em;
		height: 100%;
		border: 2px solid var(--dark);
		border-radius: 5px 0 0 5px;
		background-color: var(--light);
	}
	button {
		width: 5em;
		height: 100%;
		border: 2px solid var(--dark);
		border-radius: 0 5px 5px 0;
		background-color: var(--dark);
		color: var(--light);
	}

	${props=>props.fixedForm&&styled_components_browser_esm.iv`
			width: 100%;
			padding: 0 1em 0 1em;
			position: fixed;
			bottom: 4em;
			right: 0;
		`}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Form(_ref){let{onSubmit,placeholderText,submitButtonText,...props}=_ref;return(0,jsx_runtime.jsxs)(styled,{onSubmit,...props,children:[(0,jsx_runtime.jsx)("input",{type:"text",name:"inputField",placeholder:placeholderText,required:!0}),(0,jsx_runtime.jsx)("button",{type:"submit",value:"Submit the form",children:submitButtonText})]})}const Default=function Default(){return(0,jsx_runtime.jsx)(Form,{})},Form_stories={title:"Formular",component:Form};Default.parameters={storySource:{source:"function Default() {\n\treturn <Form />;\n}"},...Default.parameters};const __namedExportsOrder=["Default"]},"./src/components/NavBar/navbar.stories.js":()=>{},"./src/components/Profile/Profile.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Profile_stories});const useStore=(0,__webpack_require__("./node_modules/zustand/esm/index.js").ZP)((set=>({activeUser:{_id:"62cd8668823139d893144b3c",userName:"Laurenz"}})));const styled=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.section`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ProfileComponent(){const activeUser=useStore((state=>state.activeUser));return(0,jsx_runtime.jsx)(styled,{children:(0,jsx_runtime.jsx)("article",{children:(0,jsx_runtime.jsx)("h1",{children:"Username: "+activeUser.userName})})})}const Default=function Default(){return(0,jsx_runtime.jsx)(ProfileComponent,{})},Profile_stories={title:"Profile",component:ProfileComponent};Default.parameters={storySource:{source:"function Default() {\n\treturn <ProfileComponent />;\n}"},...Default.parameters};const __namedExportsOrder=["Default"]},"./src/components/QuestionCard/QuestionComponent.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>QuestionComponent_stories});var react_router=__webpack_require__("./node_modules/react-router/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const styled=styled_components_browser_esm.ZP.button`
	border: none;
	background-color: transparent;
	color: var(--light);
	font-size: 1em;
	${props=>props.submitButton&&styled_components_browser_esm.iv`
			height: 100%;
			border: 2px solid var(--dark);
			border-radius: 0 5px 5px 0;
			background-color: var(--dark);
		`}
	${props=>props.greyButton&&styled_components_browser_esm.iv`
			width: 100%;
			padding: 0.5em 0 0.5em 0;
			font-size: 1.2rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 0 0 8px 8px;
			background-color: var(--dark);
			:hover {
				background-color: var(--darktHover);
			}
		`}
	
	${props=>props.editButtonSmall&&styled_components_browser_esm.iv`
			font-size: 0.4rem;
		`}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){let{children,type="button",...props}=_ref;return(0,jsx_runtime.jsx)(styled,{type,...props,children})}const StyledQuestionCard=styled_components_browser_esm.ZP.section`
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: space-between;
	width: 85vw;
	min-height: 8em;
	margin: 0.5em 0 0.5em 0;
	border: var(--dark);
	border-radius: 8px;
	background-color: var(--blue);
	color: var(--light);

	img#statusIndicator {
		position: absolute;
		top: 5px;
		right: 5px;
	}

	${props=>props.ownedQuestion&&styled_components_browser_esm.iv`
			background-color: var(--lightblue);
			color: var(--dark);
		`}
`,StyledContent=styled_components_browser_esm.ZP.div`
	padding: 1em 4em 1em 1em;
`,StatusIndicator=styled_components_browser_esm.ZP.img`
	position: absolute;
	top: 5px;
	right: 5px;
`;function QuestionCard(_ref){let{question,...props}=_ref;const navigate=(0,react_router.s0)();return(0,jsx_runtime.jsxs)(StyledQuestionCard,{...props,children:[(0,jsx_runtime.jsxs)(StyledContent,{children:[(0,jsx_runtime.jsx)("h4",{children:question.questionText}),(0,jsx_runtime.jsx)(StatusIndicator,{src:question.answered?__webpack_require__("./src/utils/icons/statusOpen.svg").Z:__webpack_require__("./src/utils/icons/statusClosed.svg").Z,alt:question.answered?"Open":"Closed "})]}),(0,jsx_runtime.jsx)(Button,{greyButton:!0,onClick:()=>{navigate("/"+question._id)},children:"Go to Question"})]})}const Default=function Default(){return(0,jsx_runtime.jsx)(QuestionCard,{children:"QuestionComponent"})},QuestionComponent_stories={title:"QuestionComponent",component:QuestionCard};Default.parameters={storySource:{source:"function Default() {\n\treturn <QuestionComponent>QuestionComponent</QuestionComponent>;\n}"},...Default.parameters};const __namedExportsOrder=["Default"]},"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:()=>__namedExportsOrder,decorators:()=>decorators,parameters:()=>parameters});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js");const GlobalStyle=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").vJ`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	:root{
		--light: #fff;
		--dark: #343434;
		--darktHover: #3D3D3D;
		--lightblue: #85BDBF;
		--blue: #14213d;
		--signal: #f6ae2d;
	}

	html {
		font-size: 16px;
	}

	body {
		margin: 0;
		background-color: var(--light);
		color: var(--dark);
		font-size: 1rem;
	}
	
	main {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
		margin-bottom: 10vh;		
	}

	footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 10vh;
	}
	h1,h2,h3,h4 {
		margin:0;
		padding:0;
	 }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},decorators=[Story=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(GlobalStyle,{}),(0,jsx_runtime.jsx)(Story,{})]})],__namedExportsOrder=["parameters","decorators"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/Dialog/Dialog.stories.js":"./src/components/Dialog/Dialog.stories.js","./components/Form/Form.stories.js":"./src/components/Form/Form.stories.js","./components/NavBar/navbar.stories.js":"./src/components/NavBar/navbar.stories.js","./components/Profile/Profile.stories.js":"./src/components/Profile/Profile.stories.js","./components/QuestionCard/QuestionComponent.stories.js":"./src/components/QuestionCard/QuestionComponent.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[135],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);
//# sourceMappingURL=main.41486978.iframe.bundle.js.map