function foyer_display_setup_slide_group_classes(){jQuery(foyer_slides_selector).children().addClass("foyer-slide-group-1")}function foyer_display_setup(){jQuery(this).css("cursor","none"),major_refresh_timeout=setTimeout(foyer_display_reload_window,288e5),foyer_loader_intervalObject=window.setInterval(foyer_display_load_data,3e4)}function foyer_display_load_data(){var e,r;jQuery(".foyer-slide-group-1").length?jQuery(".foyer-slide-group-2").length||(r="foyer-slide-group-2",e="foyer-slide-group-1"):(r="foyer-slide-group-1",e="foyer-slide-group-2"),r.length&&jQuery.get(window.location,function(t){if($new_html=jQuery(jQuery.parseHTML(t)),$new_html.find(foyer_channel_selector).attr("class")!==jQuery(foyer_channel_selector).attr("class"))foyer_ticker_shutdown(foyer_display_replace_channel,$new_html.find(foyer_channel_selector));else{var i=$new_html.find(foyer_slides_selector).children().addClass(r);1===jQuery(foyer_slides_selector).children().length&&1===$new_html.find(foyer_slides_selector).children().length?(jQuery(foyer_slides_selector).html(i),foyer_ticker_set_slide_active_next_classes()):(jQuery(foyer_slides_selector).children().last().after(i),jQuery(foyer_slides_selector).find("."+r).first().attrChange(function(t){jQuery(foyer_slides_selector).find("."+r).first().attrChange(function(r){jQuery(foyer_slides_selector).find("."+e).remove()})}))}})}function foyer_display_replace_channel(e){jQuery(foyer_channel_selector).replaceWith(e),foyer_display_setup_slide_group_classes(),setTimeout(foyer_ticker_init,100)}function foyer_display_reload_window(){window.location.reload()}function foyer_ticker_bind_events(){jQuery(foyer_slides_selector).trigger("slides:before-binding-events"),jQuery(foyer_slides_selector).on("slides:next-slide",function(e){var r=jQuery(foyer_slide_selector+".active"),t=jQuery(foyer_slide_selector).length,i=jQuery(foyer_slide_selector).index(r)+1;i>=t&&(i=0);var s=i+1;s>=t&&(s=0),r.trigger("slide:leaving-active"),foyer_ticker_shutdown_status?(foyer_ticker_shutdown_status=!1,setTimeout(function(){foyer_ticker_shutdown_callback(foyer_ticker_shutdown_callback_options)},1e3*foyer_ticker_css_transition_duration_safe)):(jQuery(foyer_slide_selector).eq(i).trigger("slide:becoming-active"),jQuery(foyer_slide_selector).eq(s).trigger("slide:becoming-next"),foyer_ticker_set_active_slide_timeout())}),jQuery(foyer_slide_selector).on("slide:becoming-next",function(e){jQuery(this).addClass("next").trigger("slide:became-next")}),jQuery(foyer_slide_selector).on("slide:becoming-active",function(e){jQuery(this).removeClass("next").addClass("active").trigger("slide:became-active")}),jQuery(foyer_slide_selector).on("slide:leaving-active",function(e){jQuery(this).removeClass("active").trigger("slide:left-active")}),jQuery(foyer_slides_selector).trigger("slides:after-binding-events")}function foyer_ticker_init(){foyer_ticker_bind_events(),foyer_ticker_set_slide_active_next_classes(),foyer_ticker_set_active_slide_timeout()}function foyer_ticker_set_slide_active_next_classes(){jQuery(foyer_slide_selector).first().trigger("slide:becoming-active"),jQuery(foyer_slide_selector).first().next().trigger("slide:becoming-next")}function foyer_ticker_set_active_slide_timeout(){var e=parseFloat(jQuery(foyer_slide_selector+".active").data("foyer-slide-duration"));!e>0&&(e=5),setTimeout(foyer_ticker_next_slide,1e3*e)}function foyer_ticker_next_slide(){jQuery(foyer_slides_selector).trigger("slides:next-slide")}function foyer_ticker_shutdown(e,r){foyer_ticker_shutdown_status=!0,foyer_ticker_shutdown_callback=e,foyer_ticker_shutdown_callback_options=r}var foyer_display_selector=".foyer-display",foyer_channel_selector=".foyer-channel",foyer_slides_selector=".foyer-slides",foyer_slide_selector=".foyer-slide";jQuery(document).ready(function(){jQuery(foyer_display_selector).length&&(foyer_display_setup(),foyer_display_setup_slide_group_classes())}),jQuery(function(){!function(e){var r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;e.fn.attrChange=function(e){if(r){var t={subtree:!1,attributes:!0},i=new r(function(r){r.forEach(function(r){i.disconnect(),e.call(r.target,r.attributeName)})});return this.each(function(){i.observe(this,t)})}}}(jQuery)});var foyer_ticker_shutdown_status=!1,foyer_ticker_shutdown_callback,foyer_ticker_shutdown_callback_options,foyer_ticker_css_transition_duration=1.5,foyer_ticker_css_transition_duration_safe=foyer_ticker_css_transition_duration+.5;jQuery(document).ready(function(){jQuery(foyer_slides_selector).length&&foyer_ticker_init()});