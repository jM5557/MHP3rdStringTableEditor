(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(11),i=a.n(l),r=(a(17),a(1)),c=a(2),o=a(5),d=a(3),u=a(4),p=a(8),m=a(7);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var f=Object(n.createContext)(),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).addQuest=function(e){var t=Object(m.a)(a.state.quests);t.push(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({id:a.state.ids+1},e)),a.setState({quests:t,ids:a.state.ids+1})},a.setViewMode=function(e){a.setState({viewMode:e})},a.deleteQuest=function(e){var t=Object(m.a)(a.state.quests),n=t.findIndex((function(t){return t.id===e.id}));return t.splice(n,1),t.length>0?(a.setState({quests:t,selectedQuest:t[n]}),t[n]):(a.setState({quests:[],selectedQuest:null}),null)},a.updateQuest=function(e){var t=Object(m.a)(a.state.quests),n=t.findIndex((function(t){return t.id===e.id}));t[n]=e,a.setState({quests:t})},a.updateQuestDetails=function(e,t){t.editable.details=e,a.updateQuest(t)},a.setSelectedQuest=function(e){a.setState({selectedQuest:e,viewMode:"SINGLE"})},a.viewSelectedQuest=function(e){a.setSelectedQuest(e)},a.clearAllQuests=function(){a.setState({quests:[],ids:0,selectedQuest:null})},a.state={quests:[],ids:0,selectedQuest:null,viewMode:"SINGLE",addQuest:a.addQuest,updateQuest:a.updateQuest,updateQuestDetails:a.updateQuestDetails,deleteQuest:a.deleteQuest,clearAllQuests:a.clearAllQuests,setViewMode:a.setViewMode,setSelectedQuest:a.setSelectedQuest,viewSelectedQuest:a.viewSelectedQuest},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(f.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),v=a(6),E=(a(18),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={filesLoaded:[]},a.loadFiles=function(){var e=document.getElementById("file-import").files;Array.from(e).map((function(e,t){var n=new FileReader;n.onload=function(t){var n=t.target.result.split(/\r\n|\n/),s={title:n[0],target:n[1],fail_condition:n[2],details:n[3],monsters:n[4],client:n[5],file_name:e.name},l={editable:s,original:s};a.context.addQuest(l)},n.readAsText(e,"UTF-8")}))},a.updateFileList=function(e){var t=e.target.files;a.setState({filesLoaded:t})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"import-btn-wrapper"},s.a.createElement("label",{htmlFor:"file-import",className:"file-import"},s.a.createElement("input",{type:"file",id:"file-import",onChange:this.updateFileList,multiple:!0}),"Upload Text Files: ",this.state.filesLoaded.length," File(s)"),this.state.filesLoaded.length>0&&s.a.createElement("button",{onClick:this.loadFiles},"Import"))}}]),t}(n.Component));E.contextType=f;var O=E,y=(a(19),function(){var e=Object(n.useContext)(f);return s.a.createElement("div",{className:"top-controls"},e.quests.length>0&&"SINGLE"===e.viewMode&&s.a.createElement("button",{onClick:e.setViewMode.bind(void 0,"MULTI"),className:"view-btn"},"View All Quests"),s.a.createElement("div",{className:"side-controls right"},s.a.createElement(O,null),e.quests.length>0&&s.a.createElement("button",{className:"delete-all-btn",onClick:e.clearAllQuests},"Delete All Quests")))}),j=a(9),w=a.n(j);a(21);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Q=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).addNewLineAtEnd=function(e){e.preventDefault();var t=Object(m.a)(a.state.details);t.push(""),a.setState({details:t})},a.handleAddNewLineAtPos=function(e,t){t.preventDefault(),a.addNewLineAtPos(e)},a.addNewLineAtPos=function(e){if(7!==a.state.details.length){var t=Object(m.a)(a.state.details);t.splice(e+1,0,""),a.setState({details:t})}},a.deleteLine=function(e,t){t.preventDefault();var n=Object(m.a)(a.state.details);n.splice(e,1),a.setState({details:n,detailsAsText:a.convertDetailsToPlainText(n),currentLine:-1})},a.updateDetailValue=function(e,t){if(t.target.value.length>30)a.state.currentLine<7&&""!==a.state.details[a.state.currentLine+1]&&a.addNewLineAtPos(a.state.currentLine);else{var n=Object(m.a)(a.state.details);n[e]=t.target.value,a.setState({details:n,detailsAsText:a.convertDetailsToPlainText(n)}),a.props.updateQuest(a.state.detailsAsText,a.props.data)}},a.handleImportedDetailsTextField=function(e){a.setState({importedDetailsText:e.target.value})},a.loadDetailsText=function(){a.setState({details:a.convertDetailsToArray(a.state.importedDetailsText),detailsAsText:a.state.importedDetailsText})},a.convertDetailsToPlainText=function(e){var t="";return e.filter((function(e){return e.length>0})).map((function(a,n){e.length>0&&n>0&&(t+="<NEWLINE>"),t+=a})),t},a.convertDetailsToArray=function(e){var t=e.split("<NEWLINE>");return t=t.map((function(e){return e.slice(0,30)}))},a.copyToClipboard=function(){var e=a.props.data.editable.title+"\n"+a.props.data.editable.target+"\n"+a.props.data.editable.fail_condition+"\n"+a.state.detailsAsText+"\n"+a.props.data.editable.monsters+"\n"+a.props.data.editable.client+"\n";w()(e)},a.changeViewMode=function(){a.props.viewSelectedQuest(x({},a.props.data,{editable:x({},a.props.data.editable,{details:a.state.detailsAsText})}))},a.renderInputBoxes=function(){return a.state.details.map((function(e,t){return s.a.createElement("label",{key:t},s.a.createElement("input",{type:"text",onClick:function(){a.setState({currentLine:t})},onFocus:function(){a.setState({currentLine:t})},onChange:a.updateDetailValue.bind(Object(v.a)(a),t),value:a.state.details[t]}),s.a.createElement("div",{className:"bottom-controls"},s.a.createElement("span",{className:"character-counter"},a.state.details[t].length+"/30"),s.a.createElement("div",{className:"side-controls"},a.state.details.length<7&&a.state.currentLine===t&&s.a.createElement("button",{onClick:a.handleAddNewLineAtPos.bind(Object(v.a)(a),t),className:"add-line-below"},"Add Line Below"),s.a.createElement("button",{className:"delete-btn",onClick:a.deleteLine.bind(Object(v.a)(a),t)},"Delete"))))}))},a.state={details:a.props.data?a.convertDetailsToArray(a.props.data.editable.details):[],detailsAsText:a.props.data.editable?a.props.data.editable.details:"",importedDetailsText:"",currentLine:-1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.data.id!==e.data.id){var t=this.props.data.editable.details.split("<NEWLINE>");t=t.map((function(e,t){return e.slice(0,30)})),this.props.updateQuest(this.state.detailsAsText,e.data),this.setState({details:t,detailsAsText:this.props.data.editable.details})}}},{key:"render",value:function(){return s.a.createElement("div",{className:"MULTI"===this.props.viewMode?"quest-details-form multi":"quest-details-form"},s.a.createElement("div",{className:"top"},"MULTI"===this.props.viewMode&&s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"title"},this.props.data.editable.title)),s.a.createElement("div",{className:"bottom-details"},s.a.createElement("span",null,this.props.data.editable.file_name),s.a.createElement("div",{className:"side-controls"},"MULTI"===this.props.viewMode&&s.a.createElement(n.Fragment,null,s.a.createElement("button",{onClick:this.changeViewMode},"Edit Quest"),s.a.createElement("button",{className:"delete-btn",onClick:this.props.deleteQuest.bind(this,this.props.data)},"Delete"))))),s.a.createElement("div",{className:"top-controls"},s.a.createElement("div",{className:"line-counter"},this.state.details.length+"/7"),s.a.createElement("div",{className:"buttons-wrapper"},this.state.details.length<7&&s.a.createElement("button",{className:"add-line",onClick:this.addNewLineAtEnd},"Add Line"))),s.a.createElement("form",{className:"details-input-boxes"},this.renderInputBoxes(),this.state.details.length<7&&s.a.createElement("button",{className:"add-line",onClick:this.addNewLineAtEnd},"Add Line")),s.a.createElement("label",{className:"load-quest-details"},s.a.createElement("p",null,"If you want to edit preformatted quest details text instead, simply copy & paste it into the box below:"),s.a.createElement("input",{type:"text",onChange:this.handleImportedDetailsTextField,value:this.state.importedDetailsText}),s.a.createElement("button",{className:"load-new-details",onClick:this.loadDetailsText},"Load Quest Details")),this.state.detailsAsText.length>0&&s.a.createElement("div",{className:"plain-text-wrapper"},s.a.createElement("code",null,this.props.data.editable.title,s.a.createElement("br",null),this.props.data.editable.target,s.a.createElement("br",null),this.props.data.editable.fail_condition,s.a.createElement("br",null),this.state.detailsAsText,s.a.createElement("br",null),this.props.data.editable.monsters,s.a.createElement("br",null),this.props.data.editable.client),s.a.createElement("button",{className:"copy-btn",onClick:this.copyToClipboard},"Copy")))}}]),t}(n.Component);a(22);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var D=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).editInputField=function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.props.quest);n.editable[e]=t.target.value,a.setState({quest:n}),a.context.updateQuest(n)},a.state={quest:a.props.quest},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.quest.id!==this.state.quest.id&&this.setState({quest:this.props.quest})}},{key:"render",value:function(){return s.a.createElement("div",{className:"quest-form"},s.a.createElement("label",null,s.a.createElement("div",{className:"field-name"},"Quest Title"),s.a.createElement("input",{type:"text",onChange:this.editInputField.bind(this,"title"),value:this.state.quest.editable.title})),s.a.createElement("label",null,s.a.createElement("div",{className:"field-name"},"Quest Target"),s.a.createElement("input",{type:"text",onChange:this.editInputField.bind(this,"target"),value:this.state.quest.editable.target})),s.a.createElement("label",null,s.a.createElement("div",{className:"field-name"},"Fail Condition"),s.a.createElement("p",null,this.state.quest.editable.fail_condition)),s.a.createElement("label",null,s.a.createElement("div",{className:"field-name"},"Monsters"),s.a.createElement("p",null,this.state.quest.editable.monsters)),s.a.createElement("label",null,s.a.createElement("div",{className:"field-name"},"Client"),s.a.createElement("input",{type:"text",onChange:this.editInputField.bind(this,"client"),value:this.state.quest.editable.client})),s.a.createElement(Q,{data:this.state.quest,updateQuest:this.context.updateQuestDetails}))}}]),t}(n.Component);D.contextType=f;var S=D,T=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).setSelectedItem=function(e){a.context.setSelectedQuest(e),a.setState({selectedItem:e})},a.copyToClipboard=function(e,t){t.preventDefault(),t.stopPropagation();var a=e.editable.title+"\n"+e.editable.target+"\n"+e.editable.fail_condition+"\n"+e.editable.details+"\n"+e.editable.monsters+"\n"+e.editable.client+"\n";w()(a)},a.deleteQuest=function(e,t){t.preventDefault(),t.stopPropagation();var n=a.context.deleteQuest(e);a.state.selectedItem.id===e.id&&a.setState({selectedItem:n})},a.renderListItems=function(){return a.context.quests.map((function(e){return s.a.createElement("div",{key:e.id,onClick:a.setSelectedItem.bind(Object(v.a)(a),e),className:a.state.selectedItem.id===e.id?"list-item selected":"list-item"},s.a.createElement("div",{className:"flex-between"},s.a.createElement("span",null,e.editable.file_name),s.a.createElement("div",{className:"quick-actions"},s.a.createElement("button",{className:"copy-button",onClick:a.copyToClipboard.bind(Object(v.a)(a),e)},"Copy"),s.a.createElement("button",{className:"delete-btn",onClick:a.deleteQuest.bind(Object(v.a)(a),e)},"Delete"))))}))},a.state={selectedItem:null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({selectedItem:this.context.selectedQuest})}},{key:"componentDidUpdate",value:function(){null===this.context.selectedQuest&&this.context.quests.length>0&&(this.context.setSelectedQuest(this.context.quests[0]),this.setState({selectedItem:this.context.quests[0]}))}},{key:"render",value:function(){return null===this.context.selectedQuest||null===this.state.selectedItem?s.a.createElement("div",{className:"content"},s.a.createElement(y,null),s.a.createElement("div",null,"(0) Quests Loaded")):s.a.createElement("div",{className:"large-view-layout"},s.a.createElement("div",{className:"list-items"},this.renderListItems()),s.a.createElement("div",{className:"content"},s.a.createElement(y,null),s.a.createElement(S,{quest:this.state.selectedItem,deleteQuest:this.context.deleteQuest,updateQuest:this.context.updateQuest})))}}]),t}(n.Component);T.contextType=f;var L=T,C=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).renderQuestDetailsForm=function(){return a.context.quests.map((function(e){return s.a.createElement("div",{className:"quest-details-form-wrapper",key:e.id},s.a.createElement(Q,{data:e,deleteQuest:a.context.deleteQuest,updateQuest:a.context.updateQuest,viewSelectedQuest:a.context.viewSelectedQuest,viewMode:a.context.viewMode}))}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(y,null),this.renderQuestDetailsForm())}}]),t}(n.Component);C.contextType=f;var I=C,q=(a(23),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(h,null,s.a.createElement(k,null))}}]),t}(n.Component)),k=function(){var e=Object(n.useContext)(f);return s.a.createElement(n.Fragment,null,"SINGLE"===e.viewMode&&s.a.createElement(L,null),"MULTI"===e.viewMode&&s.a.createElement(I,null))},A=q;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.ff9f6739.chunk.js.map