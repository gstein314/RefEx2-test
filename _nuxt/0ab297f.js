(window.webpackJsonp=window.webpackJsonp||[]).push([[0,12],{322:function(e,t,r){var content=r(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("7b997e36",content,!0,{sourceMap:!1})},323:function(e,t,r){var content=r(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("e3b8b376",content,!0,{sourceMap:!1})},331:function(e,t,r){"use strict";r.r(t);r(39),r(30),r(38),r(14),r(52),r(31),r(53);var n=r(20),o=(r(321),r(40),r(48),r(70));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={props:{tableType:{type:String,default:"project"},pagesNumber:{type:Number,default:1}},computed:l(l({},Object(o.b)({projectPaginationObject:"get_project_pagination",indexPaginationObject:"index_pagination",resultsByName:"results_by_name",activeFilter:"active_filter",projectResults:"get_project_results"})),{},{resultsNum:function(){return this.resultsByName(this.activeFilter.name).results_num},paginationObject:function(){return"index"===this.tableType?this.indexPaginationObject:this.projectPaginationObject},currentLimit:function(){return this.paginationObject.limit},pagesList:function(){for(var e=[],i=1;i<=this.pagesNumber;i++)e.push(i);return e},currentPage:function(){return Math.floor(this.paginationObject.offset/this.paginationObject.limit)+1},pagesNumbersShown:function(){if(this.currentPage<=3)return this.pagesList.slice(0,5);if(this.currentPage>this.pagesNumber-2-1)return this.pagesList.slice(-5);var e=this.currentPage-2-1<1?1:this.currentPage-2-1,t=this.currentPage+2>this.pagesNumber?this.pagesNumber:this.currentPage+2;return this.pagesList.slice(e,t)},isHiddenPagesLeft:function(){return 1!==this.pagesNumbersShown[0]},isHiddenPagesRight:function(){return this.pagesNumbersShown[this.pagesNumbersShown.length-1]!==this.pagesNumber}}),methods:l(l({},Object(o.c)({updatePagination:"set_pagination"})),{},{setOffset:function(e){this.updatePagination(l(l({},this.paginationObject),{},{offset:e,type:this.tableType}))},handleChangePage:function(e){e<1||e>this.pagesNumber||this.setOffset((e-1)*this.paginationObject.limit)},setLimit:function(e){var t=+e.target.value,r=(Math.max(Math.ceil(this.paginationObject.offset/t),1)-1)*t;this.updatePagination({limit:t,offset:r,type:"index"===this.tableType?"index":"project"})}})},f=(r(361),r(35)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.pagesList.length>0?r("div",{staticClass:"pagination_wrapper"},[r("ul",[r("li",{class:{arrows:!0,disabled:1===e.currentPage},on:{click:function(t){return e.handleChangePage(1)}}},[r("font-awesome-icon",{staticClass:"angle-double-left",attrs:{icon:"angle-double-left"}})],1),e._v(" "),r("li",{class:{arrows:!0,disabled:1===e.currentPage},on:{click:function(t){return e.handleChangePage(e.currentPage-1)}}},[r("font-awesome-icon",{staticClass:"angle-left",attrs:{icon:"angle-left"}})],1),e._v(" "),e.isHiddenPagesLeft?r("li",{staticClass:"dots"},[r("span",[e._v("...")])]):e._e(),e._v(" "),e._l(e.pagesNumbersShown,(function(t,i){return r("li",{key:i,class:{pagination_item:!0,active:t===e.currentPage},on:{click:function(r){return e.handleChangePage(t)}}},[r("span",[e._v(" "+e._s(t))])])})),e._v(" "),e.isHiddenPagesRight?r("li",{staticClass:"dots"},[r("span",[e._v("...")])]):e._e(),e._v(" "),r("li",{class:{arrows:!0,disabled:e.currentPage===e.pagesNumber},on:{click:function(t){return e.handleChangePage(e.currentPage+1)}}},[r("font-awesome-icon",{staticClass:"angle-right",attrs:{icon:"angle-right"}})],1),e._v(" "),r("li",{class:{arrows:!0,disabled:e.currentPage===e.pagesNumber},on:{click:function(t){return e.handleChangePage(e.pagesNumber)}}},[r("font-awesome-icon",{staticClass:"chevron-double-right",attrs:{icon:"angle-double-right"}})],1)],2),e._v(" "),r("div",{staticClass:"showing_page"},["index"===e.tableType?r("div",[r("b",[e._v(e._s((1+(e.currentPage-1)*e.currentLimit).toLocaleString()))]),e._v("\n      -\n      "),r("b",[e._v(e._s(e.currentPage*e.currentLimit>e.resultsNum?e.resultsNum.toLocaleString():(e.currentPage*e.currentLimit).toLocaleString()))]),e._v("\n      of\n      "+e._s(e.resultsNum.toLocaleString())+"\n    ")]):"project"===e.tableType?r("div",[r("b",[e._v(e._s((1+(e.currentPage-1)*e.currentLimit).toLocaleString()))]),e._v("\n      -\n      "),r("b",[e._v(e._s(e.currentPage*e.currentLimit>e.projectResults.length?e.projectResults.length.toLocaleString():(e.currentPage*e.currentLimit).toLocaleString()))]),e._v("\n      of\n      "+e._s(e.projectResults.length.toLocaleString())+"\n    ")]):e._e(),e._v(" "),r("div",{staticClass:"display_pagination"},[r("label",{attrs:{for:"pagination"}},[e._v("Show")]),e._v(" "),r("select",{attrs:{id:"pagination",name:"pagination"},on:{change:e.setLimit}},e._l([10,20,50,100],(function(t){return r("option",{key:"pagination-limit-"+t,domProps:{value:t,selected:t===e.currentLimit}},[e._v("\n          "+e._s(t)+"\n        ")])})),0)])])]):e._e()}),[],!1,null,"ef9061fa",null);t.default=component.exports},361:function(e,t,r){"use strict";r(322)},362:function(e,t,r){var n=r(36)(!1);n.push([e.i,".pagination_wrapper[data-v-ef9061fa]{display:flex;align-items:center;width:calc(100vw - 110px)}.pagination_wrapper>.showing_page[data-v-ef9061fa]{font-size:14px;display:flex;grid-gap:10px;gap:10px;right:0;align-items:center}.pagination_wrapper>.display_pagination[data-v-ef9061fa]{margin-top:1rem}.pagination_wrapper>ul[data-v-ef9061fa]{padding:0;display:flex;grid-gap:2px;gap:2px;flex-direction:row;align-items:baseline;justify-content:center;list-style:none;align-items:center;flex-grow:1}.pagination_wrapper>ul li[data-v-ef9061fa]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.pagination_wrapper>ul li>span[data-v-ef9061fa]{display:flex;align-items:center;justify-content:center;width:25px;height:25px}.pagination_wrapper>ul li.pagination_item>span[data-v-ef9061fa]{border:1px solid hsla(0,0%,48.6%,.3);border-radius:3px;box-sizing:border-box;min-width:25px;width:auto}.pagination_wrapper>ul li.arrows[data-v-ef9061fa],.pagination_wrapper>ul li.pagination_item[data-v-ef9061fa]{cursor:pointer;position:relative}.pagination_wrapper>ul li.arrows.active[data-v-ef9061fa],.pagination_wrapper>ul li.pagination_item.active[data-v-ef9061fa]{color:#fff}.pagination_wrapper>ul li.arrows.active>span[data-v-ef9061fa],.pagination_wrapper>ul li.pagination_item.active>span[data-v-ef9061fa]{border:1px solid #488ec4;background-color:#488ec4}.pagination_wrapper>ul li.arrows[data-v-ef9061fa]:hover,.pagination_wrapper>ul li.pagination_item[data-v-ef9061fa]:hover{font-weight:700}.pagination_wrapper>ul li.dots>span[data-v-ef9061fa]{display:block;text-align:center}.pagination_wrapper>ul li.arrows[data-v-ef9061fa]{width:1.5rem;color:#488ec4;text-align:center;font-size:1rem;line-height:normal}.disabled[data-v-ef9061fa]{pointer-events:none;opacity:.3}",""]),e.exports=n},363:function(e,t,r){"use strict";r(323)},364:function(e,t,r){var n=r(36)(!1);n.push([e.i,".comparison_btn[data-v-560c5391]{color:#fff;background:#488ec4;font-size:16px;font-weight:500;padding:6px 22px;border:none;border-radius:.2rem;display:flex;align-items:center;margin-left:20px}.comparison_btn[data-v-560c5391]:focus{outline:none}.comparison_btn[data-v-560c5391]:hover{cursor:pointer;background:#366c96;transition:.6s}.comparison_btn>svg[data-v-560c5391]{font-size:14px;margin-right:4px}.comparison_btn.update[data-v-560c5391]{background:#ff8a17}.comparison_btn.update[data-v-560c5391]:hover{background:#f06a06;transition:.6s}.comparison_btn.disabled[data-v-560c5391]{background:#ccc;color:#fff;cursor:not-allowed}.comparison_btn.disabled[data-v-560c5391]:hover{background:#ccc}",""]),e.exports=n},373:function(e,t,r){"use strict";r.r(t);r(39),r(30),r(38),r(14),r(52),r(31),r(53);var n=r(20),o=(r(40),r(70));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={data:function(){return{isProjectSample:!1}},computed:l({},Object(o.b)({getPageType:"get_page_type",activeFilter:"active_filter"})),mounted:function(){this.checkProjectSample()},methods:l(l({},Object(o.c)({toggleCompareModal:"set_compare_modal"})),{},{checkProjectSample:function(){"project"===this.getPageType&&"sample"===this.activeFilter.name&&(this.isProjectSample=!0)}})},f=(r(363),r(35)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"comparison_btn",style:[e.isProjectSample?{visibility:"hidden"}:""],on:{click:e.toggleCompareModal}},[r("font-awesome-icon",{attrs:{icon:"chart-bar"}}),e._v("\n  Comparison\n")],1)}),[],!1,null,"560c5391",null);t.default=component.exports},405:function(e,t,r){var content=r(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("68cb7724",content,!0,{sourceMap:!1})},414:function(e,t,r){"use strict";r.r(t);r(39),r(30),r(52),r(31),r(53);var n=r(20),o=(r(47),r(26),r(212),r(48),r(38),r(14),r(156),r(223),r(70));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={components:{ResultsPagination:r(331).default},props:{filters:{type:Array,default:function(){return[]}},tableDataIsSameAsScreener:{type:Boolean,default:!0}},data:function(){return{checkedResults:[]}},computed:l(l({},Object(o.b)({paginationObject:"index_pagination",resultsByName:"results_by_name",filterByName:"filter_by_name",activeSpecie:"active_specie",activeDataset:"active_dataset",routeToProjectPage:"route_to_project_page",geneSummarySource:"gene_summary_source",getCheckedResults:"get_checked_results",isOn:"compare_modal"})),{},{examples:function(){return this.activeDataset[this.filterType].item_comparison_example},resultsUniqueKeys:function(){var e=this;return this.results.map((function(t){return t[e.keyForID]}))},keyForID:function(){return"gene"===this.filterType?"geneid":"refexSampleId"},filterType:function(){return this.$vnode.key.split("_")[0]},datasetInfo:function(){return this.activeDataset[this.filterType]},isAllChecked:function(){return this.resultsUniqueKeys.length>0&&this.checkedResults.length===this.resultsUniqueKeys.length},results:function(){return this.resultsByName(this.filterType).results},pageItems:function(){return this.results.slice(this.paginationObject.offset,this.paginationObject.offset+this.paginationObject.limit)},pagesNumber:function(){return Math.ceil(this.results.length/this.paginationObject.limit)}}),watch:{activeDataset:function(){this.checkedResults=[]},isOn:function(){this.isOn||(this.setCheckedResults(this.getCheckedResults.filter(Boolean)),this.checkedResults=this.getCheckedResults)}},created:function(){this.setPageType("index")},methods:l(l({},Object(o.c)({setGeneModal:"set_gene_modal",setPageType:"set_page_type",setCheckedResults:"set_checked_results"})),{},{moveToProjectPage:function(e){this.$nuxt.$loading.start(),this.$router.push(this.routeToProjectPage(e))},isArray:function(e){return null==e?void 0:e.startsWith("[")},hasStringQuotes:function(e){return(null==e?void 0:e.startsWith('"'))&&(null==e?void 0:e.endsWith('"'))},toggleAllCheckbox:function(){this.isAllChecked?this.checkedResults=[]:this.checkedResults=this.resultsUniqueKeys,this.handleChange()},handleChange:function(){this.setCheckedResults(this.checkedResults)}})},f=(r(424),r(35)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"results_wrapper"},[r("div",{staticClass:"results_title_wrapper"},[r("h2",[e._v("Matching "+e._s(e.filterType)+"s")]),e._v(" "),r("ComparisonButton"),e._v(" "),r("span",{staticClass:"example"},[e._v("e.g.")]),e._v(" "),r("span",{staticClass:"sample_value",on:{click:function(t){return e.moveToProjectPage(e.examples[0].route)}}},[e._v(e._s(e.examples[0].label))]),e._v(" "),r("div",{staticClass:"display_settings_wrapper"},[r("a",{staticClass:"display_settings",on:{click:function(t){return e.$emit("toggleDisplaySettings")}}},[r("font-awesome-icon",{attrs:{icon:"eye"}}),e._v("\n        Show/hide columns\n      ")],1)])],1),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticClass:"checkbox"},[r("input",{attrs:{type:"checkbox"},domProps:{checked:e.isAllChecked},on:{click:e.toggleAllCheckbox}})]),e._v(" "),"sample"===e.filterType?r("th",[e._v("Description")]):e._e(),e._v(" "),e._l(e.filters,(function(filter,t){return r("th",{directives:[{name:"show",rawName:"v-show",value:filter.is_displayed,expression:"filter.is_displayed"}],key:t},[e._v("\n          "+e._s(filter.label)+"\n        ")])}))],2)]),e._v(" "),r("tbody",[e.tableDataIsSameAsScreener?e._l(e.pageItems,(function(t,n){return r("tr",{key:"result_"+n},[r("td",{staticClass:"checkbox",on:{click:function(e){return e.stopPropagation()}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedResults,expression:"checkedResults"}],attrs:{type:"checkbox"},domProps:{value:t[e.keyForID],checked:Array.isArray(e.checkedResults)?e._i(e.checkedResults,t[e.keyForID])>-1:e.checkedResults},on:{change:[function(r){var n=e.checkedResults,o=r.target,c=!!o.checked;if(Array.isArray(n)){var l=t[e.keyForID],d=e._i(n,l);o.checked?d<0&&(e.checkedResults=n.concat([l])):d>-1&&(e.checkedResults=n.slice(0,d).concat(n.slice(d+1)))}else e.checkedResults=c},e.handleChange]}})]),e._v(" "),"sample"===e.filterType?r("td",[r("a",{on:{click:function(r){return e.moveToProjectPage(t.refexSampleId)}}},[r("font-awesome-icon",{attrs:{icon:"flask"}}),e._v("\n            "+e._s(t.Description)+"\n          ")],1)]):e._e(),e._v(" "),e._l(e.filters,(function(filter,n){return r("td",{directives:[{name:"show",rawName:"v-show",value:filter.is_displayed,expression:"filter.is_displayed"}],key:n,class:filter.column.replaceAll(" ","_")},["annotation"===filter.column?r("font-awesome-icon",{attrs:{icon:"info-circle"},on:{click:function(r){return r.stopPropagation(),e.setGeneModal(t.geneid)}}}):"gene expression patterns"===filter.column?r("img",{attrs:{src:e.geneSummarySource(t.geneid),alt:t.geneid}}):"symbol"===filter.column?r("a",{on:{click:function(r){return e.moveToProjectPage(t.geneid)}}},[r("font-awesome-icon",{attrs:{icon:"dna"}}),e._v("\n            "+e._s(t[filter.column])+"\n          ")],1):"geneid"===filter.column?r("a",{attrs:{target:"_blank",href:e.datasetInfo.url_prefix+t.geneid}},[r("font-awesome-icon",{attrs:{icon:"external-link-alt"}}),e._v("\n            "+e._s(t[filter.column])+"\n          ")],1):e.isArray(t[filter.column])?e._l(JSON.parse(t[filter.column]),(function(n,o){return r("span",{key:o},[e._v("\n            "+e._s(n)+"\n            "),o<JSON.parse(t[filter.column]).length-1?r("span",[e._v(",")]):e._e()])})):e.hasStringQuotes(t[filter.column])?[e._v("\n            "+e._s(t[filter.column].replaceAll('"',""))+"\n          ")]:[e._v(" "+e._s(t[filter.column]))]],2)}))],2)})):r("td",{staticClass:"warning",attrs:{colspan:e.filters.filter((function(e){return e.is_displayed})).length}},[r("font-awesome-icon",{attrs:{icon:"exclamation-triangle"}}),e._v("\n        Please press the 'Find "+e._s(e.filterType)+"s' button to update the results\n        to the current screener settings.\n      ")],1)],2)]),e._v(" "),r("ResultsPagination",{attrs:{"pages-number":e.pagesNumber,"table-type":"index"}})],1)}),[],!1,null,"77fc27be",null);t.default=component.exports;installComponents(component,{ComparisonButton:r(373).default,ResultsPagination:r(331).default})},424:function(e,t,r){"use strict";r(405)},425:function(e,t,r){var n=r(36)(!1);n.push([e.i,'.results_wrapper[data-v-77fc27be]{min-width:600px;padding:0 20px;margin-bottom:60px}.results_wrapper>.results_title_wrapper[data-v-77fc27be]{display:flex;width:100%;align-items:center}.results_wrapper>.results_title_wrapper .example[data-v-77fc27be]{font-size:12px;margin-left:.5rem;color:#7c7c7c;font-weight:100}.results_wrapper>.results_title_wrapper .sample_value[data-v-77fc27be]{position:relative;color:#488ec4;font-size:14px;font-weight:600;padding:.1rem .4rem}.results_wrapper>.results_title_wrapper .sample_value[data-v-77fc27be]:hover{cursor:pointer;color:#fff;background:#488ec4;border-radius:100px;transition:.6s}.results_wrapper>.results_title_wrapper>.display_settings_wrapper[data-v-77fc27be]{display:flex;justify-content:flex-end;margin-left:auto;top:119px;background-color:#fff;z-index:1;word-break:keep-all}.results_wrapper>.results_title_wrapper>.display_settings_wrapper>.display_settings[data-v-77fc27be]{color:#488ec4;text-decoration:underline;margin:5px 0}.results_wrapper>.results_title_wrapper>.display_settings_wrapper>.display_settings[data-v-77fc27be]:hover{cursor:pointer}.results_wrapper>.results_title_wrapper>button.show_all_btn[data-v-77fc27be]{color:#fff;background:#488ec4;font-size:16px;font-weight:500;padding:6px 22px;border:none;border-radius:.2rem;display:flex;align-items:center;margin-left:18px}.results_wrapper>.results_title_wrapper>button.show_all_btn[data-v-77fc27be]:focus{outline:none}.results_wrapper>.results_title_wrapper>button.show_all_btn[data-v-77fc27be]:hover{cursor:pointer;background:#366c96;transition:.6s}.results_wrapper>.results_title_wrapper>button.show_all_btn>svg[data-v-77fc27be]{font-size:14px;margin-right:4px}.results_wrapper>.results_title_wrapper>button.show_all_btn.update[data-v-77fc27be]{background:#ff8a17}.results_wrapper>.results_title_wrapper>button.show_all_btn.update[data-v-77fc27be]:hover{background:#f06a06;transition:.6s}.results_wrapper>.results_title_wrapper>button.show_all_btn.disabled[data-v-77fc27be]{background:#ccc;color:#fff;cursor:not-allowed}.results_wrapper>.results_title_wrapper>button.show_all_btn.disabled[data-v-77fc27be]:hover{background:#ccc}.results_wrapper>table[data-v-77fc27be]{width:100%;border-collapse:collapse}.results_wrapper>table .checkbox[data-v-77fc27be]{text-align:center}.results_wrapper>table .checkbox>input[type=checkbox][data-v-77fc27be]{cursor:pointer;position:relative;width:15px;height:15px}.results_wrapper>table>thead[data-v-77fc27be]{font-size:14px}.results_wrapper>table>thead>tr[data-v-77fc27be]:hover{background-color:rgba(255,255,0,.1)}.results_wrapper>table>thead>tr>th[data-v-77fc27be]{position:-webkit-sticky;position:sticky;top:0;text-align:left;padding:8px 0 6px 10px;background-color:#fff;z-index:1}.results_wrapper>table>thead>tr>th .small[data-v-77fc27be]{font-weight:400;font-size:12px}.results_wrapper>table>thead>tr>th[data-v-77fc27be]:after,.results_wrapper>table>thead>tr>th[data-v-77fc27be]:before{content:"";width:100%;position:absolute;background-color:#3e4652;left:0}.results_wrapper>table>thead>tr>th[data-v-77fc27be]:before{height:3px;top:0}.results_wrapper>table>thead>tr>th[data-v-77fc27be]:after{height:1px;bottom:0}.results_wrapper>table>thead>tr>th.checkbox[data-v-77fc27be]{text-align:center;min-width:25px}.results_wrapper>table>tbody[data-v-77fc27be]{border-bottom:3px solid #3e4652}.results_wrapper>table>tbody>tr>td[data-v-77fc27be]{font-size:14px;line-height:18px;padding:12px 10px;position:relative}.results_wrapper>table>tbody>tr>td.annotation[data-v-77fc27be]{color:#488ec4}.results_wrapper>table>tbody>tr>td.annotation>svg[data-v-77fc27be]:hover{cursor:pointer;color:#366c96}.results_wrapper>table>tbody>tr>td.gene_expression_patterns[data-v-77fc27be]{min-width:200px;max-width:400px}.results_wrapper>table>tbody>tr>td.gene_expression_patterns img[data-v-77fc27be]{max-width:400px}.results_wrapper>table>tbody>tr[data-v-77fc27be]:nth-of-type(2n){background-color:#f5f7f9}.results_wrapper>table>tbody>tr[data-v-77fc27be]:hover{background-color:rgba(255,255,0,.1)}.results_wrapper>table>tbody>.warning[data-v-77fc27be]{text-align:center;padding:40px}.results_wrapper>table>tbody>.warning>.fa-exclamation-triangle[data-v-77fc27be]{color:#efd512}.results_wrapper>table>tbody>tr>td>a[data-v-77fc27be]{text-decoration:underline;cursor:pointer;color:#488ec4;position:relative;padding-left:1.1rem}.results_wrapper>table>tbody>tr>td>a>svg[data-v-77fc27be]{position:absolute;top:2px;left:0}',""]),e.exports=n}}]);