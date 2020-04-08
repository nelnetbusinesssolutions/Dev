CKEDITOR.editorConfig = function( config )
{
	config.toolbar =
		[
			['MindTouchSave','MindTouchCancel'],
			['ViewMenu'],
			['WhoIsEditing'],
			['Cut','Copy','Paste','PasteText','PasteFromWord'],
			['Transformations'],
			['Undo','Redo','-','Find','Replace','-','SelectAll'],
			['HorizontalRule','SpecialChar','PageBreak','Transclusion','LearningPath'],
			'/',
			['Font','FontSize'],
			['TextColor','BGColor'],
			['Bold','Italic','Underline','Strike','-','Subscript','Superscript','Code','PlainText','RemoveFormat'],
			['NumberedList','BulletedList','DefinitionList','-','Outdent','Indent'],
			['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
			'/',
			['Normal','H3','H4','H5','StylesMenu'],
			['MindTouchLink','Unlink','Anchor','MindTouchTable','MindTouchImage','Video','MindTouchTemplates']
		];
}

CKEDITOR.editorConfig = function( config ){
config.stylesSet.push({ name : 'Internal Users', element : 'div', wrap:true, attributes : { 'class' : 'mt-style-conditional', 'if' : 'user.groups["NBS Viewer"] || user.groups["PRO Author"] || user.groups["PRO Editor"] || user.groups["PRO Admin"]'} });
config.stylesSet.push({ name : 'HE and K12 School Users', element : 'div', wrap:true, attributes : { 'class' : 'mt-style-conditional', 'if' : 'user.groups["Nelnet Campus Commerce Schools"] || user.groups["K12 FACTS Schools"] || user.groups["FACTS Giving"] || user.groups["PRO Admin"]'} });
config.stylesSet.push({name: 'Gray Header Table', element: 'table', attributes: { 'class': 'blue-rows' }});
config.stylesSet.push({name: 'SIS Page Info Table', element: 'table', attributes: { 'class': 'page-info' }});
config.stylesSet.push({name: 'Lightbox', element: 'img', attributes: { 'class': 'lightbox', title: 'Click to enlarge' }});
}

CKEDITOR.config.colorButton_colors = '021319,052532,1B2710,2C0F1A,FFC70E,C16187,' +
'C4D7B2,89AF65,FFFBEC,4D4D4D,333,1A1A1A,' +
'F9F9F9,F3F3F3,FFFBEC,E8EFE0,EEF3E8,E2E9EC';

CKEDITOR.config.colorButton_enableMore = false;
CKEDITOR.config.colorButton_enableAutomatic = false;
