(window.webpackJsonpMHP3rdStringTableEditor=window.webpackJsonpMHP3rdStringTableEditor||[]).push([[0],{237:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){},241:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),i=a(86),s=a.n(i),r=(a(93),a(2)),c=a(3),o=a(5),d=a(4),u=a(6),m=a(11),p=a(13);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}var b=Object(l.createContext)(),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).addFile=function(e){var t=Object(p.a)(a.state.files);t.push(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({id:a.state.ids+1},e)),a.setState({files:t,ids:a.state.ids+1})},a.setViewMode=function(e){a.setState({viewMode:e})},a.deleteFile=function(e){var t=Object(p.a)(a.state.files),l=t.findIndex((function(t){return t.id===e.id}));return t.splice(l,1),t.length>0?(console.log(l+"/"+t.length),l===t.length?(a.setState({files:t,selectedFile:t[l-1]}),t[l-1]):(a.setState({files:t,selectedFile:t[l]}),t[l])):(a.setState({files:[],selectedFile:null}),null)},a.updateFile=function(e){var t=Object(p.a)(a.state.files),l=t.findIndex((function(t){return t.id===e.id}));t[l]=e,a.setState({files:t})},a.updateFileDetails=function(e,t){t.editable.details=e,a.updateFile(t)},a.setSelectedFile=function(e){a.setState({selectedFile:e,viewMode:"SINGLE"})},a.viewSelectedFile=function(e){a.setSelectedFile(e)},a.clearAllFiles=function(){a.setState({files:[],ids:0,selectedFile:null})},a.state={files:[],ids:0,selectedFile:null,viewMode:"SINGLE",addFile:a.addFile,updateFile:a.updateFile,updateFileDetails:a.updateFileDetails,deleteFile:a.deleteFile,clearAllFiles:a.clearAllFiles,setViewMode:a.setViewMode,setSelectedFile:a.setSelectedFile,viewSelectedFile:a.viewSelectedFile},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(b.Provider,{value:this.state},this.props.children)}}]),t}(l.Component),E=a(7);a(94),a(95);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g=function(e){function t(){var e,a;Object(r.a)(this,t);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={filesLoaded:[],displayMessage:!1,filesLoadedMessage:"",filesLoadedSuccess:!1},a.displayFilesLoadedMessage=function(e,t){a.props.doNotDisplayMessage||(a.setState({displayMessage:!0,filesLoadedMessage:e,filesLoadedSuccess:t}),window.setTimeout((function(){a.setState({displayMessage:!1,filesLoadedMessage:"",filesLoadedSuccess:!1})}),2e3))},a.loadFiles=function(){var e=document.getElementById("file-import").files;Array.from(e).reduce((function(e,t,l){if("text/plain"===t.type){var n=new FileReader;n.onload=function(e){var n=e.target.result,i=n.split(/\r\n|\n/),s=n,r="DATA";6!==i.length&&7!==i.length||(s={title:i[0],target:i[1],fail_condition:i[2],details:i[3],monsters:i[4],client:i[5]},r="QUEST");var c={editable:s,original:O({},s),file_name:t.name,file_type:r};a.context.addFile(c),l===a.state.filesLoaded.length-1&&a.displayFilesLoadedMessage("Files Loaded!",!0)},n.readAsText(t,"UTF-8")}else l===a.state.filesLoaded.length-1&&a.displayFilesLoadedMessage("Some files failed to load.",!1);return e}),[])},a.updateFileList=function(e){var t=e.target.files;a.setState({filesLoaded:t})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"file-import"},this.state.displayMessage&&n.a.createElement("span",{className:this.state.filesLoadedSuccess?"files-loaded success":"files-loaded failure"},this.state.filesLoadedMessage),n.a.createElement("label",{htmlFor:"file-import",className:"file-import-inner"},n.a.createElement("input",{type:"file",id:"file-import",onChange:this.updateFileList,multiple:!0}),"Upload Text Files: ",this.state.filesLoaded.length," File(s)"),this.state.filesLoaded.length>0&&n.a.createElement("button",{onClick:this.loadFiles},"Import"))}}]),t}(l.Component);g.contextType=b;var y=g,w=(a(96),function(){var e=Object(l.useContext)(b);return n.a.createElement("div",{className:"top-controls"},n.a.createElement("div",null,n.a.createElement("span",{className:"files-loaded"},e.files.length," file(s)"),e.files.length>0&&"SINGLE"===e.viewMode&&n.a.createElement("button",{onClick:e.setViewMode.bind(void 0,"MULTI"),className:"view-btn"},"View All Files")),n.a.createElement("div",{className:"side-controls right"},n.a.createElement(y,null),e.files.length>0&&n.a.createElement("button",{className:"delete-all-btn",onClick:e.clearAllFiles},"Delete All Files")))}),F=(a(97),a(87)),j=a.n(F),N=function(e){var t="";if("string"===typeof e)t=e;else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t+=e[a]+"\n");j()(t)},x=function(e){var t="";return e.filter((function(e){return e.length>0})).map((function(a,l){e.length>0&&l>0&&(t+="<NEWLINE>"),t+=a})),t},S=function(e,t,a){var l=new RegExp(".{1,"+t+"}","g");return(e.match(l)||[]).slice(0,a)},L=function(e,t,a){return e.indexOf("<NEWLINE>")>-1?function(e,t){var a=e.split("<NEWLINE>");return a=a.map((function(e){return e.slice(0,t)}))}(e,t):S(e,t,a)},D=function(e,t,a){if(e.indexOf("<NEWLINE>")>-1)return e;for(var l=S(e,t,a),n="",i=0;i<l.length;i++)i>0&&(n+="<NEWLINE>"),n+=l[i];return n};function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).addNewLineAtEnd=function(e){e.preventDefault();var t=Object(p.a)(a.state.details);t.push(""),a.setState({details:t})},a.handleAddNewLineAtPos=function(e,t){t.preventDefault(),a.addNewLineAtPos(e)},a.addNewLineAtPos=function(e){if(7!==a.state.details.length){var t=Object(p.a)(a.state.details);t.splice(e+1,0,""),a.setState({details:t})}},a.deleteLine=function(e,t){t.preventDefault();var l=Object(p.a)(a.state.details);l.splice(e,1),a.setState({details:l,detailsAsText:x(l),currentLine:-1})},a.updateDetailValue=function(e,t){if(t.target.value.length>30)a.state.currentLine<7&&""!==a.state.details[a.state.currentLine+1]&&a.addNewLineAtPos(a.state.currentLine);else{var l=Object(p.a)(a.state.details);l[e]=t.target.value,a.setState({details:l,detailsAsText:x(l)}),a.props.updateFile(a.state.detailsAsText,a.props.data)}},a.handleImportedDetailsTextField=function(e){a.setState({importedDetailsText:e.target.value})},a.loadDetailsText=function(){a.setState({details:L(a.state.importedDetailsText,30,7),detailsAsText:D(a.state.importedDetailsText,30,7)})},a.copyToClipboard=function(){N(C({},a.props.data.editable,{details:a.state.detailsAsText}))},a.changeViewMode=function(){a.props.viewSelectedFile(C({},a.props.data,{editable:C({},a.props.data.editable,{details:a.state.detailsAsText})}))},a.renderInputBoxes=function(){return a.state.details.map((function(e,t){return n.a.createElement("label",{key:t},n.a.createElement("input",{type:"text",onClick:function(){a.setState({currentLine:t})},onFocus:function(){a.setState({currentLine:t})},onChange:a.updateDetailValue.bind(Object(E.a)(a),t),value:a.state.details[t]}),n.a.createElement("div",{className:"bottom-controls"},n.a.createElement("span",{className:"character-counter"},a.state.details[t].length+"/30"),n.a.createElement("div",{className:"side-controls"},a.state.details.length<7&&a.state.currentLine===t&&n.a.createElement("button",{onClick:a.handleAddNewLineAtPos.bind(Object(E.a)(a),t),className:"add-line-below"},"Add Line Below"),n.a.createElement("button",{className:"delete-btn",onClick:a.deleteLine.bind(Object(E.a)(a),t)},"Delete"))))}))},a.state={details:a.props.data?L(a.props.data.editable.details,30,7):[],detailsAsText:a.props.data.editable?a.props.data.editable.details:"",importedDetailsText:"",currentLine:-1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.data.id!==e.data.id||this.props.data.editable!==e.data.editable){var t=this.props.data.editable.details.split("<NEWLINE>");t=t.map((function(e){return e.slice(0,30)})),this.props.updateFile(this.state.detailsAsText,e.data),this.setState({details:t,detailsAsText:this.props.data.editable.details})}}},{key:"render",value:function(){return n.a.createElement("div",{className:"MULTI"===this.props.viewMode?"quest-details-form multi":"quest-details-form"},"MULTI"===this.props.viewMode&&n.a.createElement("div",{className:"top-bar"},n.a.createElement("div",{className:"title"},this.props.data.editable.title),n.a.createElement("div",{className:"bottom-details"},n.a.createElement("span",{className:"file-name"},this.props.data.file_name),n.a.createElement("div",{className:"side-controls"},n.a.createElement(l.Fragment,null,n.a.createElement("button",{onClick:this.changeViewMode},"Edit File"),n.a.createElement("button",{className:"delete-btn",onClick:this.props.deleteFile.bind(this,this.props.data)},"Delete"))))),n.a.createElement("div",{className:"space-between"},n.a.createElement("div",{className:"line-counter"},this.state.details.length+"/7"," Lines"),n.a.createElement("div",{className:"buttons-wrapper"},this.state.details.length<7&&n.a.createElement("button",{className:"add-line",onClick:this.addNewLineAtEnd},"Add Line"))),n.a.createElement("form",{className:"details-input-boxes"},this.renderInputBoxes(),this.state.details.length<7&&n.a.createElement("button",{className:"add-line",onClick:this.addNewLineAtEnd},"Add Line")),n.a.createElement("label",{className:"load-quest-details"},n.a.createElement("p",null,"To edit existing file details text instead, simply copy & paste it into the box below:"),n.a.createElement("input",{type:"text",onChange:this.handleImportedDetailsTextField,value:this.state.importedDetailsText}),n.a.createElement("button",{className:"load-new-details",onClick:this.loadDetailsText},"Edit File Details")),this.state.detailsAsText.length>0&&n.a.createElement("div",{className:"plain-text-wrapper"},n.a.createElement("code",null,this.props.data.editable.title,n.a.createElement("br",null),this.props.data.editable.target,n.a.createElement("br",null),this.props.data.editable.fail_condition,n.a.createElement("br",null),this.state.detailsAsText,n.a.createElement("br",null),this.props.data.editable.monsters,n.a.createElement("br",null),this.props.data.editable.client),n.a.createElement("button",{className:"copy-btn",onClick:this.copyToClipboard},"Copy")))}}]),t}(l.Component);a(99),a(100);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}var I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).editInputField=function(e,t){var l=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.props.file);l.editable[e]=t.target.value,a.setState({file:l}),a.context.updateFile(l)},a.state={file:a.props.file},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.file.id===this.state.file.id&&this.props.file.editable===this.state.file.editable||this.setState({file:this.props.file})}},{key:"render",value:function(){return n.a.createElement("div",{className:"file-form"},n.a.createElement("h1",{className:"top"},n.a.createElement("span",null,"Edit File"),n.a.createElement("span",{className:"file-name"},this.state.file.file_name)),n.a.createElement("label",null,n.a.createElement("div",{className:"field-name"},"File Title"),n.a.createElement("input",{type:"text",onChange:this.editInputField.bind(this,"title"),value:this.state.file.editable.title})),n.a.createElement("label",null,n.a.createElement("div",{className:"field-name"},"File Target"),n.a.createElement("input",{type:"text",onChange:this.editInputField.bind(this,"target"),value:this.state.file.editable.target})),n.a.createElement("label",null,n.a.createElement("div",{className:"field-name"},"Fail Condition"),n.a.createElement("p",null,this.state.file.editable.fail_condition)),n.a.createElement("label",null,n.a.createElement("div",{className:"field-name"},"Monsters"),n.a.createElement("p",null,this.state.file.editable.monsters)),n.a.createElement("label",null,n.a.createElement("div",{className:"field-name"},"Client"),n.a.createElement("input",{type:"text",onChange:this.editInputField.bind(this,"client"),value:this.state.file.editable.client})),n.a.createElement("div",{className:"field-name"},"Quest Details"),n.a.createElement(k,{data:this.state.file,updateFile:this.context.updateFileDetails}))}}]),t}(l.Component);I.contextType=b;var M=I,A=(a(237),function(e){return n.a.createElement("div",{className:"quest-content"},n.a.createElement("h1",{className:"top"},"Original File"),n.a.createElement("div",{className:"item"},n.a.createElement("h1",null,"Quest Title"),n.a.createElement("p",null,e.quest.title)),n.a.createElement("div",{className:"item"},n.a.createElement("h1",null,"Quest Target"),n.a.createElement("p",null,e.quest.target)),n.a.createElement("div",{className:"item"},n.a.createElement("h1",null,"Fail Condition"),n.a.createElement("p",null,e.quest.fail_condition)),n.a.createElement("div",{className:"item"},n.a.createElement("h1",null,"Quest Details"),n.a.createElement("p",null,e.quest.details)),n.a.createElement("div",{className:"item"},n.a.createElement("h1",null,"Monsters"),n.a.createElement("p",null,e.quest.monsters)),n.a.createElement("div",{className:"item"},n.a.createElement("h1",null,"Client"),n.a.createElement("p",null,e.quest.client)),n.a.createElement("div",{className:"buttons"},n.a.createElement("button",{className:"copy-btn",onClick:N.bind(void 0,e.quest)},"Copy")))}),_=(a(238),function(e){return n.a.createElement("div",{className:"file-content"},n.a.createElement("h1",{className:"top"},n.a.createElement("span",null,"View File"),n.a.createElement("span",{className:"file-name"},e.file_name)),n.a.createElement("code",{className:"file-content-data"},e.content.split(/\r\n|\n/).map((function(e,t){return n.a.createElement("p",{key:t},e)}))),n.a.createElement("button",{className:"copy-btn",onClick:N.bind(void 0,e.content)},"Copy"))});function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var V=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).setSelectedItem=function(e){a.context.setSelectedFile(e),a.setState({selectedItem:e})},a.copyToClipboard=function(e,t){t.preventDefault(),t.stopPropagation(),N(e.editable)},a.deleteFile=function(e,t){t.preventDefault(),t.stopPropagation();var l=a.context.deleteFile(e);a.state.selectedItem.id===e.id&&a.setState({selectedItem:l})},a.resetQuestData=function(){var e=U({},a.context.selectedFile);e.editable=U({},a.context.selectedFile.original),console.log(e.editable.title),a.setSelectedItem(e)},a.renderListItems=function(){return a.context.files.map((function(e){return n.a.createElement("div",{key:e.id,onClick:a.setSelectedItem.bind(Object(E.a)(a),e),className:a.state.selectedItem.id===e.id?"list-item selected":"list-item"},n.a.createElement("div",{className:"flex-between"},n.a.createElement("span",{className:"file-name"},e.file_name),n.a.createElement("div",{className:"quick-actions"},n.a.createElement("button",{className:"copy-button",onClick:a.copyToClipboard.bind(Object(E.a)(a),e)},"Copy"),n.a.createElement("button",{className:"delete-btn",onClick:a.deleteFile.bind(Object(E.a)(a),e)},"Delete"))))}))},a.state={selectedItem:null,viewOriginal:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({selectedItem:this.context.selectedFile})}},{key:"componentDidUpdate",value:function(){null===this.context.selectedFile&&this.context.files.length>0&&(this.context.setSelectedFile(this.context.files[0]),this.setState({selectedItem:this.context.files[0]}))}},{key:"render",value:function(){var e=this;return null===this.context.selectedFile||null===this.state.selectedItem?n.a.createElement("div",{className:"content"},n.a.createElement(w,null),n.a.createElement("div",null,"(0) Files Loaded")):n.a.createElement("div",{className:"large-view-layout"},n.a.createElement("div",{className:"list-items"},this.renderListItems()),n.a.createElement("div",{className:"content"},n.a.createElement(w,null),"QUEST"===this.context.selectedFile.file_type&&n.a.createElement(l.Fragment,null,n.a.createElement("div",{className:"original-file-actions"},n.a.createElement("button",{onClick:this.resetQuestData},"Reset Quest Data"),n.a.createElement("button",{onClick:function(){e.setState({viewOriginal:!e.state.viewOriginal})}},this.state.viewOriginal?"Close":"View Original")),this.state.viewOriginal&&n.a.createElement(A,{quest:this.context.selectedFile.original}),n.a.createElement(M,{file:this.state.selectedItem,deleteFile:this.context.deleteFile,updateFile:this.context.updateFile})),"QUEST"!==this.context.selectedFile.file_type&&n.a.createElement(l.Fragment,null,n.a.createElement(_,{file_name:this.context.selectedFile.file_name,content:this.context.selectedFile.editable}))))}}]),t}(l.Component);V.contextType=b;var Q=V,W=(a(239),function(e){function t(){var e,a;Object(r.a)(this,t);for(var l=arguments.length,i=new Array(l),s=0;s<l;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).renderFilePreviews=function(){return a.context.files.map((function(e){return"QUEST"===e.file_type?n.a.createElement("div",{className:"quest-details-form-wrapper",key:e.id},n.a.createElement(k,{data:e,deleteFile:a.context.deleteFile,updateFile:a.context.updateFile,viewSelectedFile:a.context.viewSelectedFile,viewMode:a.context.viewMode})):n.a.createElement("div",{className:"other-file-preview",key:e.id},n.a.createElement("div",{className:"space-between"},n.a.createElement("span",{className:"file-name"},e.file_name),n.a.createElement("button",{onClick:a.context.viewSelectedFile.bind(Object(E.a)(a),e)},"View File")),n.a.createElement("button",{className:"copy-btn",onClick:N.bind(Object(E.a)(a),e.editable)},"Copy"),n.a.createElement("button",{className:"delete-btn",onClick:a.context.deleteFile.bind(Object(E.a)(a),e)},"Delete"))}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"multi-view"},n.a.createElement(w,null),n.a.createElement("div",{className:"file-previews"},this.renderFilePreviews()))}}]),t}(l.Component));W.contextType=b;var B=W,H=(a(240),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(h,null,n.a.createElement(G,null))}}]),t}(l.Component)),G=function(){var e=Object(l.useContext)(b);return n.a.createElement(l.Fragment,null,e.files.length<1&&n.a.createElement("div",{className:"large-import"},n.a.createElement("div",{className:"about"},n.a.createElement("h1",{className:"top"},"MHP3rd String Table Editor"),n.a.createElement("div",{className:"text-details"},"A simple web editor for working with Monster Hunter Portable 3rd string table text files.",n.a.createElement("br",null),"Use this tool to edit quest string table files or preview other string tables (base, extras, npc dialogue)",n.a.createElement("br",null),n.a.createElement("br",null),"Files Supported: *.txt",n.a.createElement("br",null),n.a.createElement("br",null),"credit: codestation for mhtools | ",n.a.createElement("a",{href:"https://github.com/codestation/mhtools"},"Available Here"))),n.a.createElement(y,{doNotDisplayMessage:!0})),e.files.length>0&&n.a.createElement(l.Fragment,null,"SINGLE"===e.viewMode&&n.a.createElement(Q,null),"MULTI"===e.viewMode&&n.a.createElement(B,null)))},R=H;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},88:function(e,t,a){e.exports=a(241)},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.56ce86e3.chunk.js.map