$(document).ready(function(){console.log("Welcome to A Stranger's Journey!"),setTimeout(function(){$("html, body").animate({scrollLeft:0},50)});var e=!1,s="",a="",n=!1;setTimeout(function(){$(".loader-box").addClass("close"),setTimeout(function(){$("#header").addClass("animIn"),$("#cookies-eu-banner").addClass("show"),setTimeout(function(){$(".loader-box").addClass("hide")},1e3)},700)},200),$(window).scrollTop()>$(window).innerHeight()?setTimeout(function(){$(".asj-nav-bar").removeClass("hidden")},200):setTimeout(function(){$(".asj-nav-bar").removeClass("hidden")},3e3),ScrollOut({threshold:.3,cssProps:{visibleY:!0,viewportY:!0}});var t=["#header","#messages","#explore","#overview","#app-preview-content","#developer","#download","#contact"];$(window).scroll(function(){var e=$(window).scrollTop();e>1600?($("#to-top-btn").addClass("show"),$("#drag-it").addClass("goback"),!1):$("#to-top-btn").removeClass("show"),e<=2*$(window).height()&&$("#header .planet").css("transform","translate("+e/6+"px,"+e/1.5+"px)rotate(-"+e/164+"deg)"),$(window).scrollTop()>$(window).innerHeight()&&$(".asj-nav-bar").removeClass("hidden");var s=$(window).scrollTop();$(t).each(function(e){$(t[e]).offset().top-$(window).height()/3<=s&&($(".asj-nav-bar .nav-item.active").removeClass("active"),$(".asj-nav-bar .nav-item").eq(e).addClass("active"))})}),$("#to-top-btn").click(function(){$("html, body").animate({scrollTop:0},800),$(".asj-nav-bar").removeClass("open"),$(".asj-nav-bar-backlayer").removeClass("menu-is-open")}),$('a[href^="/#"]').click(function(e){var s=$(this).attr("href"),a=0;(s=s.replace("/","")).indexOf("newsletter")>-1&&(a=100);var n=$(s).offset().top-a;$("html, body").animate({scrollTop:n},800),$(window).width()<=480&&($(".asj-nav-bar").removeClass("open"),$(".asj-nav-bar-backlayer").removeClass("menu-is-open")),e.preventDefault()}),$(".nav-btn").click(function(){$(".asj-nav-bar").toggleClass("open"),$(".asj-nav-bar-backlayer").toggleClass("menu-is-open")}),$(".asj-nav-bar-backlayer").click(function(){$(".asj-nav-bar").removeClass("open"),$(this).removeClass("menu-is-open")}),$(".play-button, video#teaser-trailer, #explore .cs-button.play-teaser").click(function(){var e=$("video#teaser-trailer").get(0);e.paused?(e.play(),$("#explore .wave-btn-holder").addClass("hide"),$("#explore .video-container").addClass("is-playing"),a=$("#explore .cs-button.play-teaser span")[0].innerText,$("#explore .cs-button.play-teaser span").text("Trailer anhalten"),$("#explore .cs-button.play-teaser").addClass("inverted"),$("#explore .cs-button.play-teaser .cs-icon").removeClass("play"),$("#explore .cs-button.play-teaser .cs-icon").addClass("pause")):(e.pause(),$("#explore .wave-btn-holder").removeClass("hide"),$("#explore .video-container").removeClass("is-playing"),$("#explore .cs-button.play-teaser span").text(a),$("#explore .cs-button.play-teaser").removeClass("inverted"),$("#explore .cs-button.play-teaser .cs-icon").removeClass("pause"),$("#explore .cs-button.play-teaser .cs-icon").addClass("play"))}),$(".user-message a").each(function(){$(this).click(function(a){if(e)e&&n&&($("#messages .messages-box").removeClass("user-message-income"),$("#messages .messages-box").removeClass("stranger-message-income"),$("#messages .stranger-message-holder").removeClass("stranger-message-income"),$("#messages .btn-box.user-message").removeClass("user-message-income"),$("#messages .btn-box.user-message .cs-btn-holder:nth-child(1) > a .btn-text").text(s),$("#messages .btn-box.user-message .cs-btn-holder:nth-child(1) > a .cs-icon").removeClass("delete-message"),$("#messages .btn-box.user-message .cs-btn-holder:nth-child(1) > a .cs-icon").addClass("message"),$("#messages .messages-info-block").removeClass("no-scroll"),e=!1,n=!1);else if($("#messages .messages-box").addClass("user-message-income"),$("#messages .messages-box .message.from-user p").text(a.target.innerText),$("#messages .btn-box.user-message").addClass("user-message-income"),s=$("#messages .btn-box.user-message .cs-btn-holder:nth-child(1) > a .btn-text")[0].innerText,$("#messages .btn-box.user-message .cs-btn-holder:nth-child(1) > a .btn-text").text("Nachricht löschen"),$("#messages .btn-box.user-message .cs-btn-holder:nth-child(1) > a .cs-icon").removeClass("message"),$("#messages .btn-box.user-message .cs-btn-holder:nth-child(1) > a .cs-icon").addClass("delete-message"),e=!0,a.target.innerText.indexOf("Wer")>-1?$("#messages .stranger-message-holder .stranger-msg").text("Wenn ich das nur wüsste..."):$("#messages .stranger-message-holder .stranger-msg").text("Aber wo bin ICH?"),setTimeout(function(){$("#messages .messages-box").addClass("stranger-message-income"),$("#messages .stranger-message-holder").addClass("stranger-message-income"),n=!0},1e3),$(window).width()<=767){var t=-340,o=$("#messages").offset().top-t;$("html, body").animate({scrollTop:o},600),$("#messages .messages-info-block").addClass("no-scroll")}else{t=464,o=$(".messages-block").offset().top-t;$("html, body").animate({scrollTop:o},600)}})}),$("[data-fancybox]").fancybox({maxWidth:800,loop:!0,transitionDuration:700,transitionEffect:"slide",onInit:function(){$(".fancybox-navigation button").remove(),$.get("snippets/fancybox-nav-button.php",function(e){$(".fancybox-inner .fancybox-navigation").append(e),$(".fancybox-inner .fancybox-navigation").append(e),$(".fancybox-navigation .custom-nav-button:nth-child(1)").click(function(){$.fancybox.getInstance().previous()}),$(".fancybox-navigation .custom-nav-button:nth-child(2)").click(function(){$.fancybox.getInstance().next()})})}}),$(".copyright-bar .year").html((new Date).getFullYear());const o=new Siema({selector:".siema",duration:600,easing:"ease-out",perPage:1,loop:!0,onChange:()=>{$(".app-slider-indicators .indicator").each(function(e){if($(this).removeClass("active"),$(".app-slider-indicators .indicator").length-1==e){var s=o.currentSlide+1;$(".app-slider-indicators .indicator:nth-child("+s+")").addClass("active")}})}});setInterval(()=>o.next(),4500),Siema.prototype.addPagination=function(){for(let e=0;e<this.innerElements.length;e++){const s=document.createElement("div");s.className=0==e?"indicator active":"indicator",s.addEventListener("click",()=>this.goTo(e)),$(s).appendTo(".app-slider-indicators")}},o.addPagination();let r=$("#drag-it"),i=.375*r.height(),l=i/2;let c=$(window).width()-i,d=$(window).height()+(r.height()-i);(r=new PlainDraggable(document.getElementById("drag-it"))).onDrag=function(){$("#drag-it").removeClass("goback"),!0},r.containment={left:l,top:l,width:c,height:d}});