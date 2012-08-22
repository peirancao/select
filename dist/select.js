define("#select/0.8.0/select",["#overlay/0.9.9/overlay","$","#position/1.0.0/position","#iframe-shim/1.0.0/iframe-shim","#widget/1.0.0/widget","#base/1.0.0/base","#class/1.0.0/class","#events/1.0.0/events","#widget/1.0.0/templatable","#handlebars/1.0.0/handlebars"],function(e,t,n){function a(e,t){var n,r=[],i=e.options,s=i.length,o=!1;for(n=0;n<s;n++){var u,a={},f=i[n],l=["text","value","defaultSelected","selected"];for(u in l){var c=l[u];a[c]=f[c]}a.defaultSelected=f.defaultSelected?"true":"false",f.selected?(a.selected="true",o=!0):a.selected="false",r.push(a)}return o||(newModel[0].selected="true"),{select:r,prefix:t}}function f(e,t){var n,r,i=[],s=[];for(n=0,l=e.length;n<l;n++){var o=e[n];o.selected?(o.selected=o.defaultSelected="true",s.push(n)):o.selected=o.defaultSelected="false",i.push(o)}if(s.length>0){s.pop();for(r=0,ll=s.length;r<ll;r++)i[r].selected="false"}else i[0].selected="true";return{select:i,prefix:t}}function c(e,t){var n;return i.isNumeric(e)?n=e:typeof e=="string"?n=t.index(t.parent().find(e)):n=t.index(e),n}var r=e("#overlay/0.9.9/overlay"),i=e("$"),s=e("#widget/1.0.0/templatable"),o='<div class="{{prefix}}"><ul class="{{prefix}}-content" data-role="content">{{#each select}}<li data-role="item" class="{{../prefix}}-item" data-value="{{value}}" data-defaultSelected="{{defaultSelected}}" data-selected="{{selected}}">{{text}}</li>{{/each}}</ul></div>',u=r.extend({Implements:s,attrs:{trigger:{value:null,getter:function(e){return i(e).eq(0)}},prefix:"ui-select",template:o,align:{baseXY:[0,"100%"]},value:"",length:0,selectedIndex:-1,multiple:!1,disabled:!1,selectSource:null},events:{"click [data-role=item]":function(e){var t=i(e.currentTarget);this.select(t)},"mouseenter [data-role=item]":function(e){i(e.currentTarget).addClass(this.get("prefix")+"-hover")},"mouseleave [data-role=item]":function(e){i(e.currentTarget).removeClass(this.get("prefix")+"-hover")}},initAttrs:function(e,t){u.superclass.initAttrs.call(this,e,t);var n=this.get("trigger");if(n[0].tagName.toLowerCase()=="select"){this.set("selectSource",n);var r='<a href="#" class="'+this.get("prefix")+'-trigger"></a>',s=i(r);this.set("trigger",s),n.after(s).hide(),this.model=a(n[0],this.get("prefix"))}else this.model=f(this.model,this.get("prefix"))},setup:function(){var e=this,t=this.get("trigger").on("click",function(t){t.preventDefault(),e.get("disabled")||e.show()}),n=this.options=this.$("[data-role=content]").children();this.select("[data-selected=true]"),this.set("length",n.length),this._tweakAlignDefaultValue(),this._blurHide(t),u.superclass.setup.call(this)},show:function(){u.superclass.show.call(this),this._setPosition()},_tweakAlignDefaultValue:function(){var e=this.get("align");e.baseElement._id==="VIEWPORT"&&(e.baseElement=this.get("trigger")),this.set("align",e)},destroy:function(){this.element.remove();var e=this.get("selectSource");e&&(this.get("trigger").remove(),e.show())},select:function(e){var t=c(e,this.options);this.set("selectedIndex",t);if(this.get("selectedIndex")!==t){var n=this.options.eq(t);this.trigger("change",n)}return this.hide(),this},syncModel:function(e){this.model=f(e,this.get("prefix")),this.renderPartial("[data-role=content]"),this.set("selectedIndex",-1),this.set("value","");var t=this.options=this.$("[data-role=content]").children();return this.set("length",t.length),this.select("[data-selected=true]"),this},getOption:function(){},addOption:function(e){return this},removeOption:function(e){return this},_onRenderSelectedIndex:function(e){if(e==-1)return;var t=this.options.eq(e);this.currentItem&&this.currentItem.attr("data-selected","false").removeClass(this.get("prefix")+"-selected"),t.attr("data-selected","true").addClass(this.get("prefix")+"-selected"),this.set("value",t.attr("data-value")),this.get("trigger").html(t.html()),this.currentItem=t},_onRenderDisabled:function(e){var t=this.get("prefix")+"-disabled",n=this.get("trigger");n[e?"addClass":"removeClass"](t)}});n.exports=u});