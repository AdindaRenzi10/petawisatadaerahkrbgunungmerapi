// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"dijit/_editor/nls/commands":{bold:"\u7c97\u9ad4",copy:"\u8907\u88fd",cut:"\u526a\u4e0b","delete":"\u522a\u9664",indent:"\u7e2e\u6392",insertHorizontalRule:"\u6c34\u5e73\u5c3a\u898f",insertOrderedList:"\u7de8\u865f\u6e05\u55ae",insertUnorderedList:"\u9805\u76ee\u7b26\u865f\u6e05\u55ae",italic:"\u659c\u9ad4",justifyCenter:"\u7f6e\u4e2d\u5c0d\u9f4a",justifyFull:"\u5c0d\u9f4a",justifyLeft:"\u9760\u5de6\u5c0d\u9f4a",justifyRight:"\u9760\u53f3\u5c0d\u9f4a",outdent:"\u51f8\u6392",paste:"\u8cbc\u4e0a",
redo:"\u91cd\u505a",removeFormat:"\u79fb\u9664\u683c\u5f0f",selectAll:"\u5168\u9078",strikethrough:"\u522a\u9664\u7dda",subscript:"\u4e0b\u6a19",superscript:"\u4e0a\u6a19",underline:"\u5e95\u7dda",undo:"\u5fa9\u539f",unlink:"\u79fb\u9664\u93c8\u7d50",createLink:"\u5efa\u7acb\u93c8\u7d50",toggleDir:"\u5207\u63db\u65b9\u5411",insertImage:"\u63d2\u5165\u5f71\u50cf",insertTable:"\u63d2\u5165/\u7de8\u8f2f\u8868\u683c",toggleTableBorder:"\u5207\u63db\u8868\u683c\u908a\u6846",deleteTable:"\u522a\u9664\u8868\u683c",
tableProp:"\u8868\u683c\u5167\u5bb9",htmlToggle:"HTML \u539f\u59cb\u6a94",foreColor:"\u524d\u666f\u984f\u8272",hiliteColor:"\u80cc\u666f\u984f\u8272",plainFormatBlock:"\u6bb5\u843d\u6a23\u5f0f",formatBlock:"\u6bb5\u843d\u6a23\u5f0f",fontSize:"\u5b57\u578b\u5927\u5c0f",fontName:"\u5b57\u578b\u540d\u7a31",tabIndent:"\u6a19\u7c64\u7e2e\u6392",fullScreen:"\u5207\u63db\u5168\u87a2\u5e55",viewSource:"\u6aa2\u8996 HTML \u539f\u59cb\u6a94",print:"\u5217\u5370",newPage:"\u65b0\u9801\u9762",systemShortcut:'"${0}" \u52d5\u4f5c\u5728\u60a8\u7684\u700f\u89bd\u5668\u4e2d\uff0c\u53ea\u80fd\u4f7f\u7528\u9375\u76e4\u5feb\u901f\u9375\u3002\u8acb\u4f7f\u7528 ${1}\u3002',
ctrlKey:"ctrl+${0}",appleKey:"\u2318${0}",_localized:{}},"dijit/_editor/nls/FontChoice":{fontSize:"\u5927\u5c0f",fontName:"\u5b57\u578b",formatBlock:"\u683c\u5f0f",serif:"\u65b0\u7d30\u660e\u9ad4","sans-serif":"\u65b0\u7d30\u660e\u9ad4",monospace:"\u7b49\u5bec",cursive:"Cursive",fantasy:"Fantasy",noFormat:"\u7121",p:"\u6bb5\u843d",h1:"\u6a19\u984c",h2:"\u5b50\u6a19\u984c",h3:"\u6b21\u5b50\u6a19\u984c",pre:"\u9810\u5148\u683c\u5f0f\u5316",1:"\u6700\u5c0f",2:"\u8f03\u5c0f",3:"\u5c0f",4:"\u4e2d",5:"\u5927",
6:"\u8f03\u5927",7:"\u6700\u5927",_localized:{}},"dojox/editor/plugins/nls/Preview":{preview:"\u9810\u89bd",_localized:{}},"dojox/editor/plugins/nls/FindReplace":{findLabel:"\u5c0b\u627e\uff1a",findTooltip:"\u8f38\u5165\u8981\u5c0b\u627e\u7684\u6587\u5b57",replaceLabel:"\u53d6\u4ee3\u70ba\uff1a",replaceTooltip:"\u8f38\u5165\u8981\u53d6\u4ee3\u7684\u6587\u5b57",findReplace:"\u5c0b\u627e/\u53d6\u4ee3",matchCase:"\u5927\u5c0f\u5beb\u76f8\u7b26",matchCaseTooltip:"\u5927\u5c0f\u5beb\u76f8\u7b26",backwards:"\u5411\u5f8c",
backwardsTooltip:"\u5f80\u56de\u641c\u5c0b\u6587\u5b57",replaceAllButton:"\u5168\u90e8\u53d6\u4ee3",replaceAllButtonTooltip:"\u53d6\u4ee3\u6240\u6709\u6587\u5b57",findButton:"\u5c0b\u627e",findButtonTooltip:"\u5c0b\u627e\u6587\u5b57",replaceButton:"\u53d6\u4ee3",replaceButtonTooltip:"\u53d6\u4ee3\u6587\u5b57",replaceDialogText:"\u53d6\u4ee3\u4e86 ${0} \u9805\u3002",eofDialogText:"\u524d\u6b21\u51fa\u73fe ${0}",eofDialogTextFind:"\u627e\u5230",eofDialogTextReplace:"\u5df2\u53d6\u4ee3",_localized:{}},
"dojox/editor/plugins/nls/PasteFromWord":{pasteFromWord:"\u5f9e Word \u8cbc\u4e0a",instructions:"\u5c07 Word \u4e2d\u7684\u5167\u5bb9\u8cbc\u5165\u4e0b\u65b9\u7684\u6587\u5b57\u6846\u3002\u5728\u6eff\u610f\u8981\u63d2\u5165\u7684\u5167\u5bb9\u4e4b\u5f8c\uff0c\u8acb\u6309\u8cbc\u4e0a\u6309\u9215\u3002\u82e5\u8981\u4e2d\u65b7\u63d2\u5165\u6587\u5b57\uff0c\u8acb\u6309\u53d6\u6d88\u6309\u9215\u3002",_localized:{}},"dojox/editor/plugins/nls/InsertAnchor":{insertAnchor:"\u63d2\u5165\u9328\u9ede",title:"\u9328\u9ede\u5167\u5bb9",
anchor:"\u540d\u7a31\uff1a",text:"\u8aaa\u660e\uff1a",set:"\u8a2d\u5b9a",cancel:"\u53d6\u6d88",_localized:{}},"dojox/editor/plugins/nls/Blockquote":{blockquote:"\u5340\u584a\u5f15\u6587",_localized:{}},"widgets/Screening/setting/nls/strings":{units:{areaSquareFeetUnit:"\u5e73\u65b9\u82f1\u544e",areaAcresUnit:"\u82f1\u755d",areaSquareMetersUnit:"\u5e73\u65b9\u516c\u5c3a",areaSquareKilometersUnit:"\u5e73\u65b9\u516c\u91cc",areaHectaresUnit:"\u516c\u9803",areaSquareMilesUnit:"\u5e73\u65b9\u82f1\u54e9",
lengthFeetUnit:"\u82f1\u544e",lengthMilesUnit:"\u82f1\u54e9",lengthMetersUnit:"\u516c\u5c3a",lengthKilometersUnit:"\u516c\u91cc"},analysisTab:{analysisTabLabel:"\u5206\u6790",selectAnalysisLayerLabel:"\u5206\u6790\u5716\u5c64",addLayerLabel:"\u65b0\u589e\u5716\u5c64",noValidLayersForAnalysis:"\u5728\u9078\u64c7\u7684 Web \u5730\u5716\u4e2d\u627e\u4e0d\u5230\u6709\u6548\u7684\u5716\u5c64\u3002",noValidFieldsForAnalysis:"\u5728\u9078\u64c7\u7684 Web \u5730\u5716\u4e2d\u627e\u4e0d\u5230\u6709\u6548\u7684\u6b04\u4f4d\u3002 \u8acb\u79fb\u9664\u6240\u9078\u5716\u5c64\u3002",
allowGroupingLabel:"\u6309\u5177\u6709\u76f8\u540c\u503c\u7684\u6b04\u4f4d\u5206\u7d44\u5716\u5fb5",groupingHintDescription:"\u63d0\u793a: \u4f9d\u9810\u8a2d\uff0c\u5c07\u5206\u7d44\u5177\u6709\u9078\u5b9a\u6b04\u4f4d\u4e4b\u76f8\u540c\u503c\u7684\u6240\u6709\u5716\u5fb5\uff0c\u5c07\u5176\u5728\u5831\u544a\u4e2d\u986f\u793a\u70ba\u55ae\u4e00\u9805\u76ee\u3002 \u505c\u7528\u6309\u985e\u4f3c\u5c6c\u6027\u5206\u7d44\uff0c\u6539\u70ba\u91dd\u5c0d\u6bcf\u500b\u5716\u5fb5\u986f\u793a\u4e00\u500b\u9805\u76ee\u3002",
addLayersHintText:"\u63d0\u793a: \u9078\u64c7\u5206\u6790\u548c\u5831\u544a\u4e2d\u8981\u5305\u542b\u7684\u5716\u5c64\u548c\u6b04\u4f4d",queryCapabilityHintText:"\u53ea\u6703\u5217\u51fa\u5177\u6709\u67e5\u8a62\u529f\u80fd\u7684\u5716\u5c64",addLayerNameTitle:"\u5716\u5c64\u540d\u7a31",addFieldsLabel:"\u589e\u52a0\u6b04\u4f4d",addFieldsPopupTitle:"\u9078\u64c7\u6b04\u4f4d",addFieldsNameTitle:"\u6b04\u4f4d\u540d\u7a31",aoiToolsLegendLabel:"\u611f\u8208\u8da3\u5340\u57df\u5de5\u5177",aoiToolsDescriptionLabel:"\u9078\u64c7\u548c\u6a19\u793a\u53ef\u7528\u65bc\u5efa\u7acb\u611f\u8208\u8da3\u5340\u57df\u7684\u5de5\u5177\u3002",
placenameLabel:"\u5730\u9ede\u540d\u7a31",drawToolsLabel:"\u9078\u64c7\u7e6a\u88fd\u5de5\u5177",uploadShapeFileLabel:"\u4e0a\u50b3 shapefile",coordinatesLabel:"\u5ea7\u6a19",coordinatesDrpDwnHintText:"\u63d0\u793a: \u9078\u64c7\u55ae\u4f4d\u4ee5\u986f\u793a\u8f38\u5165\u7684\u884c\u7a0b",coordinatesBearingDrpDwnHintText:"\u63d0\u793a: \u9078\u64c7\u65b9\u4f4d\u4ee5\u986f\u793a\u8f38\u5165\u7684\u884c\u7a0b",allowShapefilesUploadLabel:"\u5141\u8a31\u4f7f\u7528\u8005\u4e0a\u50b3\u5206\u6790\u4e2d\u8981\u52a0\u5165\u7684 shapefile",
allowShapefilesUploadLabelHintText:"\u63d0\u793a: \u5c07\u9078\u9805\u65b0\u589e\u81f3\u300c\u5831\u544a\u300d\u9801\u7c64\uff0c\u4f9b\u4f7f\u7528\u8005\u4e0a\u50b3\u5176\u81ea\u5df1\u7684\u8cc7\u6599\u4ee5\u4f5c\u70ba shapefile\uff0c\u5f9e\u800c\u5728\u5206\u6790\u5831\u544a\u4e2d\u52a0\u5165\u4ed6\u5011",allowVisibleLayerAnalysisLabel:"\u8acb\u52ff\u5206\u6790\u6216\u5831\u544a\u4e0d\u53ef\u898b\u5716\u5c64\u7684\u7d50\u679c\u3002",allowVisibleLayerAnalysisHintText:"\u63d0\u793a: \u4e0d\u6703\u5728\u5217\u5370\u6216\u4e0b\u8f09\u7684\u7d50\u679c\u4e2d\uff0c\u5206\u6790\u6216\u52a0\u5165\u56e0\u6bd4\u4f8b\u7bc4\u570d\u8a2d\u5b9a\u800c\u5df2\u95dc\u9589\u6216\u4e0d\u53ef\u898b\u7684\u5716\u5c64\u3002",
areaUnitsLabel:"\u7528\u65bc\u5206\u6790\u7d50\u679c\u7684\u55ae\u4f4d(\u9762\u7a4d)",lengthUnitsLabel:"\u7528\u65bc\u5206\u6790\u7d50\u679c\u7684\u55ae\u4f4d(\u9577\u5ea6)",maxFeatureForAnalysisLabel:"\u8981\u5206\u6790\u7684\u5716\u5fb5\u91cf\u4e0a\u9650",maxFeatureForAnalysisHintText:"\u63d0\u793a: \u8a2d\u5b9a\u5206\u6790\u5c07\u5305\u542b\u7684\u5716\u5fb5\u6578\u4e0a\u9650",searchToleranceLabelText:"\u641c\u5c0b\u5bb9\u5dee",searchToleranceHint:"\u63d0\u793a: \u5206\u6790\u9ede\u548c\u7dda\u689d\u8f38\u5165\u6642\u53ef\u4f7f\u7528\u641c\u5c0b\u5bb9\u5dee",
placenameButtonText:"\u5730\u9ede\u540d\u7a31",drawToolsButtonText:"\u7e6a\u88fd",shapefileButtonText:"Shapefile",coordinatesButtonText:"\u5ea7\u6a19",invalidLayerErrorMsg:"\u8acb\u914d\u7f6e\u6b04\u4f4d",drawToolSelectableLayersLabel:"\u9078\u64c7\u53ef\u9078\u64c7\u7684\u5716\u5c64",drawToolSelectableLayersHint:"\u63d0\u793a: \u9078\u64c7\u5305\u542b\u5716\u5fb5\u7684\u5716\u5c64\uff0c\u53ef\u4f7f\u7528\u300c\u9078\u64c7\u7e6a\u88fd\u5de5\u5177\u300d\u4f86\u9078\u64c7\u9019\u4e9b\u5716\u5fb5",drawToolsSettingsFieldsetLabel:"\u7e6a\u88fd\u5de5\u5177",
drawToolPointLabel:"\u9ede",drawToolPolylineLabel:"\u6298\u7dda",drawToolExtentLabel:"\u7bc4\u570d",drawToolPolygonLabel:"\u9762",drawToolCircleLabel:"\u5713\u5f62",selectDrawToolsText:"\u9078\u64c7\u53ef\u7528\u65bc\u5efa\u7acb\u611f\u8208\u8da3\u5340\u57df\u7684\u7e6a\u88fd\u5de5\u5177",selectingDrawToolErrorMessage:"\u81f3\u5c11\u9078\u64c7\u4e00\u500b\u7e6a\u88fd\u5de5\u5177\u6216\u9078\u64c7\u5716\u5c64\uff0c\u4ee5\u91dd\u5c0d AOI \u5de5\u5177\u4f7f\u7528\u7e6a\u88fd\u5de5\u5177\u3002",sortingSettingsLegend:"\u6392\u5e8f\u8a2d\u5b9a",
ascendingLabel:"\u905e\u589e",descendingLabel:"\u964d\u51aa",sortFieldSelectLabel:"\u9078\u64c7\u6392\u5e8f\u6b04\u4f4d",statisticsCountLabel:"\u7d71\u8a08\u8cc7\u6599: \u8a08\u6578",statisticsTotalLengthLabel:"\u7d71\u8a08\u8cc7\u6599: \u7e3d\u9577\u5ea6",statisticsTotalAreaLabel:"\u7d71\u8a08\u8cc7\u6599: \u7e3d\u9762\u7a4d"},downloadTab:{downloadLegend:"\u4e0b\u8f09\u8a2d\u5b9a",reportLegend:"\u5831\u544a\u8a2d\u5b9a",downloadTabLabel:"\u4e0b\u8f09",syncEnableOptionLabel:"\u5716\u5fb5\u5716\u5c64",
syncEnableOptionHint:"\u63d0\u793a: \u9078\u64c7\u53ef\u4e0b\u8f09\u7684\u5716\u5c64\uff0c\u4e26\u6307\u5b9a\u6bcf\u500b\u5716\u5c64\u7684\u53ef\u7528\u683c\u5f0f\u3002 \u4e0b\u8f09\u7684\u8cc7\u6599\u96c6\u5c07\u5305\u542b\u8207\u611f\u8208\u8da3\u5340\u57df\u76f8\u4ea4\u7684\u5716\u5fb5\u3002",syncEnableOptionNote:"\u9644\u8a3b: \u6a94\u6848\u5730\u7406\u8cc7\u6599\u5eab\u548c shapefile \u4e0b\u8f09\u9700\u8981\u5177\u5099\u540c\u6b65\u529f\u80fd\u7684\u5716\u5fb5\u5716\u5c64\u3002 shapefile \u683c\u5f0f\u50c5\u652f\u63f4 ArcGIS Online \u8a17\u7ba1\u5716\u5fb5\u5716\u5c64\u3002",
extractDataTaskOptionLabel:"\u64f7\u53d6\u8cc7\u6599\u4efb\u52d9\u5730\u7406\u8655\u7406\u670d\u52d9",extractDataTaskOptionHint:"\u63d0\u793a: \u4f7f\u7528\u767c\u4f48\u7684\u300c\u64f7\u53d6\u8cc7\u6599\u4efb\u52d9\u300d\u5730\u7406\u8655\u7406\u670d\u52d9\uff0c\u4e0b\u8f09\u8207\u6a94\u6848\u5730\u7406\u8cc7\u6599\u5eab\u6216 Shapefile \u683c\u5f0f\u7684\u611f\u8208\u8da3\u5340\u57df\u76f8\u4ea4\u7684\u5716\u5fb5\u3002",cannotDownloadOptionLabel:"\u505c\u7528\u4e0b\u8f09",syncEnableTableHeaderTitle:{layerNameLabel:"\u5716\u5c64\u540d\u7a31",
csvFileFormatLabel:"CSV",fileGDBFormatLabel:"\u6a94\u6848\u5730\u7406\u8cc7\u6599\u5eab",ShapefileFormatLabel:"Shapefile",allowDownloadLabel:"\u5141\u8a31\u4e0b\u8f09"},setButtonLabel:"\u8a2d\u5b9a",GPTaskLabel:"\u6307\u5b9a\u5730\u7406\u8655\u7406\u670d\u52d9\u7684 url",printGPServiceLabel:"\u5217\u5370\u670d\u52d9 URL",setGPTaskTitle:"\u6307\u5b9a\u5fc5\u8981\u7684\u5730\u7406\u8655\u7406\u670d\u52d9 URL",logoLabel:"\u6a19\u8a8c",logoChooserHint:"\u63d0\u793a: \u6309\u4e00\u4e0b\u5716\u7247\u5716\u793a\u4ee5\u8b8a\u66f4\u5831\u544a\u5de6\u4e0a\u89d2\u6240\u986f\u793a\u7684\u6a19\u8a8c\u3002",
footnoteLabel:"\u8a3b\u8173",columnTitleColorPickerLabel:"\u5831\u544a\u6b04\u6a19\u984c\u984f\u8272",reportTitleLabel:"\u5831\u544a\u6a19\u984c",displaySummaryLabel:"\u986f\u793a\u6458\u8981",hideZeroValueRowLabel:"\u91dd\u5c0d\u6240\u6709\u5206\u6790\u6b04\u4f4d\u96b1\u85cf\u542b 0 \u503c\u7684\u5217",hideNullValueRowLabel:"\u91dd\u5c0d\u6240\u6709\u5206\u6790\u6b04\u4f4d\u96b1\u85cf\u7121\u8cc7\u6599\u503c (null \u6216\u7a7a\u767d) \u7684\u5217",errorMessages:{invalidGPTaskURL:"\u5730\u7406\u8655\u7406\u670d\u52d9\u7121\u6548\u3002 \u8acb\u9078\u64c7\u5305\u542b\u64f7\u53d6\u8cc7\u6599\u4efb\u52d9\u7684\u5730\u7406\u8655\u7406\u670d\u52d9\u3002",
noExtractDataTaskURL:"\u8acb\u9078\u64c7\u5305\u542b\u64f7\u53d6\u8cc7\u6599\u4efb\u52d9\u7684\u5730\u7406\u8655\u7406\u670d\u52d9\u3002",duplicateCustomOption:"\u5b58\u5728 ${duplicateValueSizeName} \u7684\u91cd\u8907\u9805\u76ee\u3002",invalidLayoutWidth:"\u70ba ${customLayoutOptionValue} \u8f38\u5165\u7684\u5bec\u5ea6\u7121\u6548\u3002",invalidLayoutHeight:"\u70ba ${customLayoutOptionValue} \u8f38\u5165\u7684\u9ad8\u5ea6\u7121\u6548\u3002",invalidLayoutPageUnits:"\u70ba ${customLayoutOptionValue} \u9078\u64c7\u7684\u9801\u9762\u55ae\u4f4d\u7121\u6548\u3002",
failtofetchbuddyTaskDimension:"\u64f7\u53d6\u597d\u53cb\u4efb\u52d9\u7dad\u5ea6\u8cc7\u8a0a\u6642\u51fa\u932f\u3002\u8acb\u518d\u8a66\u4e00\u6b21\u3002",failtofetchbuddyTaskName:"\u64f7\u53d6\u597d\u53cb\u4efb\u52d9\u540d\u7a31\u6642\u51fa\u932f\u3002\u8acb\u518d\u8a66\u4e00\u6b21\u3002",failtofetchChoiceList:"\u5f9e\u5217\u5370\u670d\u52d9\u64f7\u53d6\u9078\u9805\u6e05\u55ae\u6642\u51fa\u932f\u3002\u8acb\u518d\u8a66\u4e00\u6b21\u3002",invalidWidth:"\u5bec\u5ea6\u7121\u6548\u3002",invalidHeight:"\u9ad8\u5ea6\u7121\u6548\u3002"},
addCustomLayoutTitle:"\u65b0\u589e\u81ea\u8a02\u7248\u9762\u914d\u7f6e",customLayoutOptionHint:"\u63d0\u793a: \u5c07\u7248\u9762\u914d\u7f6e\u5f9e\u60a8\u7684\u5217\u5370\u670d\u52d9\u65b0\u589e\u5230\u5217\u5370\u9078\u9805\u6e05\u55ae\u3002",reportDefaultOptionLabel:"\u9810\u8a2d\u7248\u9762\u914d\u7f6e",pageSizeUnits:{millimeters:"\u516c\u91d0",points:"\u9ede"},noDataTextRepresentation:"\u7121\u8cc7\u6599\u503c",naTextRepresentation:"\u4e0d\u9069\u7528\u7684\u503c",noDataDefaultText:"\u7121\u8cc7\u6599",
notApplicableDefaultText:"\u7121"},generalTab:{generalTabLabel:"\u4e00\u822c",tabLabelsLegend:"\u9762\u677f\u6a19\u7c64",tabLabelsHint:"\u63d0\u793a: \u6307\u5b9a\u6a19\u7c64",AOITabLabel:"\u611f\u8208\u8da3\u5340\u57df\u9762\u677f",ReportTabLabel:"\u5831\u544a\u9762\u677f",bufferSettingsLegend:"\u7de9\u885d\u5340\u8a2d\u5b9a",defaultBufferDistanceLabel:"\u9810\u8a2d\u7de9\u885d\u5340\u8ddd\u96e2",defaultBufferUnitsLabel:"\u7de9\u885d\u5340\u55ae\u4f4d",generalBufferSymbologyHint:"\u63d0\u793a: \u7528\u4f86\u8868\u793a\u5b9a\u7fa9\u7684\u611f\u8208\u8da3\u5340\u57df\u5468\u570d\u4e4b\u7de9\u885d\u5340\u57df\u7684\u7b26\u865f\u7cfb\u7d71\u3002",
aoiGraphicsSymbologyLegend:"\u611f\u8208\u8da3\u5340\u57df\u7b26\u865f\u7cfb\u7d71",aoiGraphicsSymbologyHint:"\u63d0\u793a: \u7528\u4f86\u8868\u793a\u9ede\u3001\u7dda\u548c\u591a\u908a\u5f62\u7684\u611f\u8208\u8da3\u5340\u57df\u7684\u7b26\u865f\u7cfb\u7d71",pointSymbologyLabel:"\u9ede",previewLabel:"\u9810\u89bd",lineSymbologyLabel:"\u7dda",polygonSymbologyLabel:"\u9762",aoiBufferSymbologyLabel:"\u7de9\u885d\u5340\u7b26\u865f\u7cfb\u7d71",pointSymbolChooserPopupTitle:"\u5730\u5740\u6216\u9ede\u4f4d\u7f6e\u7b26\u865f",
polygonSymbolChooserPopupTitle:"\u9762\u7b26\u865f",lineSymbolChooserPopupTitle:"\u7dda\u7b26\u865f",aoiSymbolChooserPopupTitle:"\u7de9\u885d\u5340\u7b26\u865f",aoiTabText:"AOI",reportTabText:"\u5831\u544a",invalidSymbolValue:"\u7b26\u865f\u503c\u7121\u6548\u3002"},searchSourceSetting:{searchSourceSettingTabTitle:"\u641c\u5c0b\u4f86\u6e90\u8a2d\u5b9a",searchSourceSettingTitle:"\u641c\u5c0b\u4f86\u6e90\u8a2d\u5b9a",searchSourceSettingTitleHintText:"\u65b0\u589e\u4e26\u914d\u7f6e\u5730\u7406\u7de8\u78bc\u670d\u52d9\u6216\u5716\u5fb5\u5716\u5c64\u70ba\u641c\u5c0b\u4f86\u6e90\u3002\u9019\u4e9b\u6307\u5b9a\u7684\u4f86\u6e90\u6c7a\u5b9a\u4e86\u641c\u5c0b\u65b9\u584a\u4e2d\u7684\u53ef\u641c\u5c0b\u5167\u5bb9",
addSearchSourceLabel:"\u65b0\u589e\u641c\u5c0b\u4f86\u6e90",featureLayerLabel:"\u5716\u5fb5\u5716\u5c64",geocoderLabel:"\u5730\u7406\u7de8\u78bc\u5668",generalSettingLabel:"\u4e00\u822c\u8a2d\u5b9a",allPlaceholderLabel:"\u7528\u65bc\u5168\u90e8\u641c\u5c0b\u7684\u5360\u4f4d\u7b26\u6587\u5b57:",allPlaceholderHintText:"\u63d0\u793a: \u8f38\u5165\u5728\u641c\u5c0b\u6240\u6709\u5716\u5c64\u548c\u5730\u7406\u7de8\u78bc\u5668\u6642\uff0c\u8981\u986f\u793a\u6210\u4f54\u4f4d\u7b26\u7684\u6587\u5b57",generalSettingCheckboxLabel:"\u986f\u793a\u767c\u73fe\u7684\u5716\u5fb5\u6216\u4f4d\u7f6e\u7684\u5feb\u986f\u8996\u7a97",
countryCode:"\u570b\u78bc\u6216\u5730\u5340\u4ee3\u78bc",countryCodeEg:"\u4f8b\u5982 ",countryCodeHint:"\u7559\u7a7a\u6b64\u503c\u6703\u641c\u5c0b\u6240\u6709\u570b\u5bb6\u548c\u5730\u5340",questionMark:"?",searchInCurrentMapExtent:"\u50c5\u5728\u76ee\u524d\u7684\u5730\u5716\u7bc4\u570d\u4e2d\u641c\u5c0b",locatorUrl:"\u5730\u7406\u7de8\u78bc\u5668 URL",locatorName:"\u5730\u7406\u7de8\u78bc\u5668\u540d\u7a31",locatorExample:"\u7bc4\u4f8b",locatorWarning:"\u4e0d\u652f\u63f4\u6b64\u7248\u672c\u7684\u5730\u7406\u7de8\u78bc\u670d\u52d9\u3002\u8a72 widget\u652f\u63f4 10.0 \u53ca\u66f4\u9ad8\u7248\u672c\u7684\u5730\u7406\u7de8\u78bc\u670d\u52d9\u3002",
locatorTips:"\u7531\u65bc\u5730\u7406\u7de8\u78bc\u670d\u52d9\u4e0d\u652f\u63f4\u5efa\u8b70\u529f\u80fd\uff0c\u56e0\u6b64\u5efa\u8b70\u7121\u6cd5\u4f7f\u7528\u3002",layerSource:"\u5716\u5c64\u4f86\u6e90",setLayerSource:"\u8a2d\u5b9a\u5716\u5c64\u4f86\u6e90",setGeocoderURL:"\u8a2d\u5b9a\u5730\u7406\u7de8\u78bc\u5668 URL",searchLayerTips:"\u7531\u65bc\u5716\u5fb5\u670d\u52d9\u4e0d\u652f\u63f4\u5206\u9801\u529f\u80fd\uff0c\u56e0\u6b64\u5efa\u8b70\u7121\u6cd5\u4f7f\u7528\u3002",placeholder:"\u4f54\u4f4d\u7b26\u6587\u5b57",
searchFields:"\u641c\u5c0b\u6b04\u4f4d",displayField:"\u986f\u793a\u6b04\u4f4d",exactMatch:"\u5b8c\u5168\u76f8\u7b26",maxSuggestions:"\u6700\u5927\u5efa\u8b70\u6578",maxResults:"\u6700\u5927\u7d50\u679c\u6578",enableLocalSearch:"\u555f\u7528\u672c\u6a5f\u641c\u5c0b",minScale:"\u6700\u5c0f\u6bd4\u4f8b",minScaleHint:"\u7576\u5730\u5716\u6bd4\u4f8b\u5927\u65bc\u6b64\u6bd4\u4f8b\u6642\uff0c\u5c07\u5957\u7528\u672c\u6a5f\u641c\u5c0b",radius:"\u534a\u5f91",radiusHint:"\u6307\u5b9a\u76ee\u524d\u5730\u5716\u4e2d\u5fc3\u5468\u570d\u7684\u5340\u57df\u534a\u5f91\uff0c\u53ef\u7528\u4f86\u63d0\u5347\u5730\u7406\u7de8\u78bc\u5019\u9078\u8005\u7684\u7b49\u7d1a\uff0c\u4ee5\u512a\u5148\u50b3\u56de\u96e2\u4f4d\u7f6e\u6700\u8fd1\u7684\u5019\u9078\u8005",
setSearchFields:"\u8a2d\u5b9a\u641c\u5c0b\u6b04\u4f4d",set:"\u8a2d\u5b9a",invalidUrlTip:"URL ${URL} \u7121\u6548\u6216\u4e0d\u53ef\u5b58\u53d6\u3002",invalidSearchSources:"\u641c\u5c0b\u4f86\u6e90\u8a2d\u5b9a\u7121\u6548"},errorMsg:{textboxFieldsEmptyErrorMsg:"\u8acb\u586b\u5beb\u5fc5\u8981\u6b04\u4f4d",bufferDistanceFieldsErrorMsg:"\u8acb\u8f38\u5165\u6709\u6548\u503c",invalidSearchToleranceErrorMsg:"\u8acb\u8f38\u5165\u641c\u5c0b\u5bb9\u5dee\u7684\u6709\u6548\u503c",atLeastOneCheckboxCheckedErrorMsg:"\u914d\u7f6e\u7121\u6548: \u81f3\u5c11\u9700\u8981\u4e00\u500b\u611f\u8208\u8da3\u5340\u57df\u5de5\u5177\u3002",
noLayerAvailableErrorMsg:"\u6c92\u6709\u53ef\u7528\u7684\u5716\u5c64",layerNotSupportedErrorMsg:"\u4e0d\u652f\u63f4 ",noFieldSelected:"\u8acb\u4f7f\u7528\u7de8\u8f2f\u52d5\u4f5c\u4ee5\u9078\u64c7\u6b04\u4f4d\u9032\u884c\u5206\u6790\u3002",duplicateFieldsLabels:'\u5df2\u7d93\u70ba "${itemNames}" \u65b0\u589e\u91cd\u8907\u7684\u6a19\u7c64 "${labelText}"',noLayerSelected:"\u8acb\u81f3\u5c11\u9078\u64c7\u4e00\u500b\u5716\u5c64\u9032\u884c\u5206\u6790\u3002",errorInSelectingLayer:"\u7121\u6cd5\u9078\u64c7\u5716\u5c64\u3002 \u8acb\u518d\u8a66\u4e00\u6b21\u3002",
errorInMaxFeatureCount:"\u8acb\u8f38\u5165\u7528\u65bc\u5206\u6790\u7684\u6709\u6548\u5716\u5fb5\u8a08\u6578\u4e0a\u9650\u3002"},_localized:{}}});