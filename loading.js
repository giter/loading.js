/**
 * loading.js - 1.0
 *   - giter(nubix@qq.com) 
 */

$.extend({ loading: function(url,opts){

		opts = $.extend({
			method: "get",
			cache: false,
			data: {} ,
			dataType: "json"
		},opts);

		$.ajax({

			url:url,
			type:opts.method,
			data:(opts.data),

			success:function(sections){

				for(var i in sections){

					sec = sections[i];

					if($("#"+sec.position).size() > 0) {

						var h = "#"+sec.position + " .section-"+sec.section;

						if($(h).size()>0){
							$(h).first().each(function(){
								this.innerHTML = (sec.data);
							});
						}else{
							var o = $("<div class='section section-"+sec.section+"'>"+"</div>");
							o[0].innerHTML = (sec.data);
							$("#"+sec.position).prepend(o);
						}

						call(sec.position,sec.section,$(h));
					}
				}

				opts.success && opts.success();
				var hash = url.match(/#[a-zA-Z0-9\-]+/);
				if(hash = hash && hash[0]){
					hash = hash.replace(/\?.*$/,"");
					if($(hash).length > 0){
						$("html,body").animate({ scrollTop: $(hash).offset().top},"fast");
					}
				}
			},
			error:function(xhr, status, err){
				opts.error && opts.error();
			}
		});
	}
});

__loading_callbacks = {};

function bind(pos,id,func){
	if(!__loading_callbacks[pos]){
		__loading_callbacks[pos] = {};
	}
	__loading_callbacks[pos][id] = func;
}

function call(pos,id,target){
	if(pos && id && __loading_callbacks[pos] && __loading_callbacks[pos][id]){
		__loading_callbacks[pos][id](target);
	}
}

$(function(){

	$("body").delegate(".loading" ,"click",function(){

		if($(this).is("form")) return true;
		
		if(!!!$(this).attr("uri")) $(this).attr("uri",$(this).attr("href"));

		$(this).attr("uri") && $.loading($(this).attr("uri"),{method:$(this).attr("method")});
		return false;
	});

	$("body").delegate("form.loading" ,"submit",function(e){

		var p = ($(this).attr("action")||"").match(/([^#]*)?(#.*)?$/)
		$.loading((p[1]||"") + (p[2]||""),{method:$(this).attr("method"),data:$(this).serialize()});
		return false;
	});
});
