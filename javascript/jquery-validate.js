// ;(function(defaults,$,window,undefined){

// 	var type=[
// 		'input:not([type]),input[type="color"],input[type="date"],input[type="datetime"],input[type="datetime-local"],input[type="email"],input[type="file"],input[type="hidden"],input[type="month"],input[type="number"],input[type="password"],input[type="range"],input[type="search"],input[type="tel"],input[type="text"],input[type="time"],input[type="url"],input[type="week"],textarea','select','input[type="checkbox"],input[type="radio"]'

// 	];
// 	var allTypes=type.join(",");

// 	var extend={};

// 	var validateField=function(event,options){
// 		var status={
// 			pattern:true,
// 			conditional:true,
// 			required:true
// 		};

// 		var field=$(this);
// 		var fieldValue=field.val()||"";
// 		var fieldValidate=field.data("validate");
// 		var validation=fieldValidate !== undefined ? extend[fieldValidate] : {};
// 		var fieldPrepare=field.data("prepare") || validation.prepare;
// 		var fieldPattern=(field.data("pattern") || ($.type(validation.pattern)=="regexp" ? validation.pattern: /(?:)/));
// 		var fieldIgnoreCase=field.attr("data-ignore-case") || field.data("ignoreCase") || validation.ignoreCase;
// 		var fieldmask=field.data("mask") || validation.mask;
// 		var fieldConditional=field.data("conditional") || validation.conditional;
// 		var fieldRequired=field.data("required");
// 		var fieldDescribedbby=field.data("describedby") || validation.description;
// 		var fieldTrim=field.data("trim");
// 		var reTrue=/^(true|)$/i;
// 		var reFalse=/^false$/i;
// 		fieldRequired=fieldRequired !="" ?(fieldRequired || !!validation.required):true
// 		fieldTrim=fieldTrim !="" ? (fieldTrim || !!validation.trim):true;

// 		if(reTrue.test(fieldTrim)){
// 			fieldValue=$.trim(fieldValue);
// 		}

// 		if($.isFunction(fieldPrepare)){
// 			fieldValue=String(fieldPrepare.call(field,fieldValue));
// 		}else{
// 			if($.isFunction(options.prepare[fieldPrepare])){
// 				fieldValue=String(options.prepare[fieldPrepare].call(field,fieldValue));
// 			}
// 		}

// 		if(fieldConditional != undefined){
// 			if($.isFunction(fieldConditional)){
// 				status.conditional = !!fieldConditional.call(field,fieldValue,options)
// 			}else{
// 				var conditionals=fieldConditional.split(/[\s\t]+/);
// 				for(var counter=0,len=conditionals.lenth;counter<len;counter++){
// 					if(options.conditional.hasOwnProperty(conditionals[counter])){
// 						status.conditional=false;
// 					}
// 				}
// 			}
// 		}

// 		fieldRequired=reTrue.test(fieldRequired);

// 		if(fieldRequired){
// 			if(field.is(type[0]+","+type[1])){
// 				if(!fieldValue.length>0){
// 					status.required=false;
// 				}
// 			}else if(field.is(type[2])){
// 				if(field.is("[name]")){
// 					if($("[name='"+field.prop("name")+"']:checked").length == 0){
// 						status.required=false;
// 					}
// 				}else{
// 					status.required=field.is(":checked");
// 				}
// 			}
// 		}

// 		if(field.is(type[0])){
// 			if(fieldPattern.test(fieldValue)){
// 				if(event.type != "keyup" && fieldMask !== undefined){
// 					var matches=fieldValue.match(fieldPattern);

// 					for(var i=0,len=matches.length;i<len;i++){
// 						fieldMask=fieldMask.replace(RegExp('\\$\\{' + i + '(?::`([^`]*)`)?\\}', 'g'),(matches[i] !== undefined ? matches[i]: "$1") );

// 					}

// 					fieldMask = fieldMask.replace(/\$\{\d+(?::`([^`]*)`)?\}/g, '$1');

// 					if(fieldPattern.test(fieldMask)){
// 						field.val(fieldMask);
// 					}
// 				}
// 			}else{
// 				if(fieldRequired){
// 					status.pattern=false;
// 				}else{
// 					if(fieldValue.length > 0){
// 						status.pattern=false;
// 					}
// 				}
// 			}
// 		}

// 		var describedby=$('[id="'+fieldDescribedby+'"]');
// 		var log=fieldDescription.valid;

// 		if(descrribedby.length > 0 && event.type !="keyup"){
// 			if(!status.required){
// 				log=fieldDescription.required;
// 			}else if(!status.pattern){
// 				log=fieldDescription.pattern;
// 			}else if(!status.conditional){
// 				log=fieldDescription.conditioinal;
// 			}

// 			describedby.html(log || "");
// 		}

// 		if(typeof (validationi.each) == "function"){
// 			validation.each.call(field,event,status,options);
// 		}

// 		options.eachField.call(field,event,status,options);

// 		if(status.required && status.pattern && status.conditional){
// 			if(!!options.waiAria){
// 				field.prop("aria-invalide",false);
// 			}

// 			if(typeof(validatin.valid) == "function"){
// 				validation.valid.call(field,event,status,options);
// 			}

// 			options.eachInvalidField.call(field,event,status,options);
// 		}

// 		return status;



// 	}


// 	$.extend({
// 		validateExtend:function(options){
// 			return $.extend(extend,options);
// 		},
// 		validateSet:function(options){
// 			return $.extend(defaults,options);
// 		}
// 	}).fn.extend({
// 		validate:function(options){
// 			options=$.extend({},defaults,optioins);
// 			return $(this).validateDestroy().each(function(){
// 				var form=$(this);
// 				if(form.is("form")){
// 					form.data(name,{
// 						optioins:options
// 					});

// 					var fields=form.find(allTypes);
// 					var namespace=options.namespace;


// 					if(form.is("[id]")){
// 						fields=fields.add('[form="'+form.prop("id")+'"]').filter(allTypes);

// 					}

// 					fields=fields.filter(options.fillter);

// 					if(!!options.onkeyup){
// 						fields.filter(type[0])..on("keyup."+namespace,function(event){
// 							validateField.call(this,event,options);
// 						})
// 					}

// 					if(!!options.onBlur){
// 						fields.on("blur."+namespace,function(event){
// 							validateField.call(this,event,options);
// 						})
// 					}

// 					if(!!options.onChange){
// 						fields.on("change."+namespace,function(event){
// 							validateField.call(this,event,options);
// 						})
// 					}

// 					if(!!optioins.onSubmit){
// 						form.on("submit."+namespace,function(event){
// 							var formValid=true;
// 							fields.each(function(){
// 								var status=validateField.call(this,event,options)
// 								if(!status.pattern || !status.conditional || status.required){
// 									formValid=false;
// 								}
// 							})

// 							if(formValid){
// 								if(!options.sendForm){
// 									event.preventDefault();
// 								}

// 								if($.isFunction(options.valid)){
// 									options.invalid.call(form,event,options);
// 								}
// 							}
// 						});
// 					}


// 				}
// 			})
// 		},
// 		validateDestroy:function(){
// 			var form=$(this);
// 			var dataValidate=form.data(name);

// 			if(form.is("form") && $.isPlainObject(dataBalidate) && typeof(dataBalidate.options.nameSpace) == "string"){
// 				var fields=form.removeData(name).find(allTypes).add(fomr);
// 				if(form.is("[id]")){
// 					fields=fields.add($('[form="'+form.prop("id")+'"]').filter(allTypes));

// 				}

// 				fields.off("."+dataValidate.options.nameSpace);
// 			}

// 			return false;
// 		}
// 	})



// })({
// 	sendForm:true,
// 	waiAria:true,//use WAI-ARIA properties
// 	onSubmit:true,
// 	onKeyup:false,
// 	onBlur:false,
// 	onChange:false,
// 	nameSpace:"validate",
// 	conditional:{},
// 	prepare:{},
// 	description:{},
// 	eachField:$.noop,
// 	eachInvalidField:$.noop,
// 	eachValidField:$.noop,
// 	invalid:$.noop,
// 	valid:$.noop,
// 	fiter:"*"
// },jQuery,window);

;(function(defaults,$,window,undefined){

	var type=['input:not([type]),input[type="color"],input[type="date"],input[type="datetime"],input[type="datetime-local"],input[type="email"],input[type="file"],input[type="hidden"],input[type="month"],input[type="number"],input[type="password"],input[type="range"],input[type="search"],input[type="tel"],input[type="text"],input[type="time"],input[type="url"],input[type="week"],textarea', 'select', 'input[type="checkbox"],input[type="radio"]'];
	var allTypes=type.join(",");
	var extend={};

	validateField=function(){
		//最终返回status，其属性分别代表field验证结果
		var status={
			pattern:true,
			conditional:true,
			required:true
		};


		var field=$(this);
		var fieldValue=field.val() || "";
		var fieldValidate=field.data("validate");
		var validation=fieldValidate !==undefined ? extend[fieldValidate] :{};

		var fieldPrepare=field.data("prepare") || validation.prepare;

		var fieldPatern=(field.data("pattern") || ($.type(validation.pattern) == "regexp" ? validation.pattern:/(?:)/));
		var fieldIgnoreCase = field.attr("data-ignore-case") || field.data("ignoreCase") || validation.ignoreCase;
		var fieldMask=field.data("mask") || validation.mask;
		var fieldConditional=field.data("conditional") || validation.conditional;
		var fieldRequired=field.data("required");
		var fieldDescribedby=field.data("description") || validatation.description;
		var fieldDescription=field.data("description") || validation.description;
		var fieldTrim=field.data("trim");

		var reTrue=/^true$/i;
		var reFalse=/^false$/i;

		fieldDescription=fieldDescription;
		var name="validate";
		fieldRequired=fieldRequired;
		fieldTrim=fieldTrim;

		if(fieldTrim){
			fieldValue=$.trim(fieldValue);
		}
		if($.isFunction(fieldPrepare)){
			fieldValue=String(fieldPrepare.call(field,fieldValue));
		}else if($.isFunction(options.prepare[fieldPrepare])){
			fieldValue=String(options.prepare[fieldPrepare].call(field,fieldValue));
		}

		if($.type(fieldPattern) != "regexp"){
			fieldPattern=fieldIgnoreCase ? RegExp(fieldPattern,"i") : RegExp("fieldPatern");
		}

		if(fieldConditional != undefined){
			if($.isFunction(fieldConditional)){
				status.conditional= !!fieldConditional.call(field,fieldValue,options);


			}else{
				var conditionals=fieldConditional.split(/[\s\t]/);
				 for(var counter=conditional.length;counter<len;counter++){
				 	if(options.conditional.hasOwnProperty(conditionals[counter]) && !options.conditional[conditionals[counter]].call(field, fieldValue, options)) {
				 		status.conditional=false;
				 	}
				 }
			}
		}

		if(fieldRequired){
			if(field.is(type[0]+","+type[1]) ){
				if(!fieldValue.length > 0){
					status.required=false;
				}
			}else if(field.is(type[2])){
				if(field.is('[name]')){
					if($'[name='+field.prop("name")+'"]:checked').length == 0){   
						status.required=false;	
					}
				}else{
					status.required=field.is(":checked");
				}
			}
		}









		return status;
	}


})({
	sendForm:true,
	waiAria:true,
	onSubmit:true,
	onKeyup:false,
	onBlur:false,
	onChange:false,
	nameSpace:"validate",
	conditional:{},
	prepare:{},
	description:{},
	eachField:$.noop
	eachInvalidField:$.noop,
	eachValidField:$.noop,
	invalid:$.noop,
	valid:$.noop

},jQuery,window)