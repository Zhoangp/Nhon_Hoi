function changeUrl(e, t, o, a, i, n, s) {
    if (void 0 !== window.history.pushState) {
        var l = document.URL;
        l != e && "" != e && window.history.pushState({
            path: e,
            dataName: i,
            title: t,
            keyword: a,
            description: o,
            titleog: n,
            descriptionog: s
        }, "", e)
    }
    "" != t && ($("#hdtitle").html(t), $('meta[property="og:description"]').remove(), $("#hdtitle").after('<meta property="og:description" content="' + s + '">'), $('meta[property="og:title"]').remove(), $("#hdtitle").after('<meta property="og:title" content="' + n + '">'), $('meta[property="og:url"]').remove(), $("#hdtitle").after('<meta property="og:url" content="' + e + '">'), $("meta[name=keywords]").remove(), $("#hdtitle").after('<meta name="keywords" content="' + a + '">'), $("meta[name=description]").remove(), $("#hdtitle").after('<meta name="description" content="' + o + '">')), $("#changlanguage_redirect").val(e)
}

function RanDom(e, t) {
    return Math.max(Math.random() * (.2 + t - e) + e)
}

function ResizeWindows() {
    var e = ($(window).height() > $(window).width(), $(window).height() <= $(window).width(), $(window).width()),
        t = $(window).height(),
        o = e / 2400,
        a = t / 1200,
        i = e / 1200,
        n = e / 1500;
    1100 >= e ? ($(".scrollA, .scrollB").length && $(".scrollA, .scrollB").getNiceScroll().remove(), $(".news-text img").addClass("zoom-pic"), $(".apartment-bg").scale(n), $(".apartment-bg").css({
        left: e / 2 - 1030,
        top: $(".apartment-map").height() / 2 - 790
    }), 500 >= e ? ($(".apartment-bg").scale(i), $(".apartment-bg").css({
        left: e / 2 - 1100,
        top: $(".apartment-map").height() / 2 - 790
    })) : 600 >= e ? ($(".apartment-bg").scale(i), $(".apartment-bg").css({
        left: e / 2 - 1070,
        top: $(".apartment-map").height() / 2 - 790
    })) : 700 >= e && ($(".apartment-bg").scale(i), $(".apartment-bg").css({
        left: e / 2 - 1030,
        top: $(".apartment-map").height() / 2 - 790
    })), $("#product-page .title-page").css({
        top: $(".apartment-map").height() - 50
    })) : e > 1100 && (t / e > .58 ? ($(".apartment-bg").scale(a), $(".apartment-bg").css({
        left: e / 2 - 1100,
        top: t / 2 - 720
    })) : ($(".apartment-bg").scale(o), $(".apartment-bg").css({
        left: e / 2 - 1200,
        top: t / 2 - 740
    })), $(".news-text img").removeClass("zoom-pic"))
}

function DrawLoad() {
    var e = $(".load-present"),
        t = $(e).find("path");
    $(t).each(function () {
        var e = this.getTotalLength();
        (isIE9 || isIE10 || isIE11) && ($(this).css({
            "stroke-dasharray": e + " " + e
        }), $(this).css({
            "stroke-dashoffset": e,
            "stroke-dasharray": e + " " + e
        }), $(this).stop().animate({
            "stroke-dashoffset": 0
        }, 1500, "linear", function () {
            $(this).stop().animate({
                "stroke-dashoffset": e
            }, 1500, "linear")
        }))
    })
}

function Done() {
    ResizeWindows(), SlidePicture(), $(".box-img img").length && $(".box-img img").clipPath(), $(".go-top").removeClass("show"), $("#contact-page, #location-page, #facilities-page, #product-page, #news-page, #progress-page").length || $(window).width() > 1100 && BoxSlide(), $(".container").stop().animate({
        opacity: 1
    }, 300, "linear", function () {
        $(".mask").addClass("show"), $(".loadicon").addClass("blur"), $(".loadicon").stop().animate({
            scale: 3,
            opacity: 0
        }, 800, "linear", function () {
            ContentLoad(), $(".loadicon").remove()
        })
    }), Loadpic()
}

function Loadpic() {
    $(".pic-img, .pic-thumb").each(function (e, t) {
        var o = $(t).find("img").attr("src");
        if (o) {
            var a = o.replace(/(^url\()|(\)$|[\"\'])/g, "");
            $(t).css({
                "background-image": "url(" + a + ")"
            })
        }
    })
}

function StopPlay() {
    ThisVideo.paused && ThisVideo.ended || (ThisVideo.pause(), $(".controls").removeClass("addshow"), $(".pic-video, .slogan").removeClass("hide"), $(".header").removeClass("vid"), $(".player-vid").removeClass("hide"))
}

function StartPlay() {
    (ThisVideo.paused || ThisVideo.ended) && ($(".player-vid").hasClass("show") || (ThisVideo.play(), $(".controls").addClass("addshow"), $(".pic-video, .slogan").addClass("hide"), $(".player-vid").addClass("hide").removeClass("show"), $(".header").addClass("vid")))
}

function VideoFull() {
    function e(e) {
        e || (e = window.event), ThisVideo.pause(), ThisVideo.currentTime = 0, s.value = 0, f("playPause"), $(".player-vid").addClass("show").removeClass("hide"), $(".pic-video").removeClass("hide"), $(".slogan").removeClass("hide"), h() && (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), m(!1))
    }
    if (supportsVideo) {
        var t = document.getElementById("videocontainer"),
            o = document.getElementById("videocontrols");
        ThisVideo.controls = !1, o.setAttribute("data-state", "visible");
        var a = document.getElementById("playpause"),
            i = document.getElementById("stop"),
            n = document.getElementById("mute"),
            s = document.getElementById("progress"),
            l = document.getElementById("progressbar"),
            r = document.getElementById("fullscreen"),
            d = void 0 !== document.createElement("progress").max;
        d || s.setAttribute("data-state", "fake");
        var u = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement("video").webkitRequestFullScreen);
        u || (r.style.display = "none");
        var c = function (e) {
                if (e) {
                    var t = Math.floor(10 * ThisVideo.volume) / 10;
                    "+" === e ? 1 > t && (ThisVideo.volume += .1) : "-" === e && t > 0 && (ThisVideo.volume -= .1), 0 >= t ? ThisVideo.muted = !0 : ThisVideo.muted = !1
                }
                f("mute")
            },
            m = function (e) {
                t.setAttribute("data-fullscreen", !!e), r.setAttribute("data-state", e ? "cancel-fullscreen" : "go-fullscreen"), 1 == e ? $("body").addClass("fullscreen") : $("body").removeClass("fullscreen")
            },
            h = function () {
                return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement)
            },
            p = function () {
                h() ? (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), m(!1)) : (t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullScreen ? ThisVideo.webkitRequestFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen(), m(!0))
            };
        if (document.addEventListener) {
            ThisVideo.addEventListener("loadedmetadata", function () {
                s.setAttribute("max", ThisVideo.duration)
            });
            var f = function (e) {
                "playPause" == e ? ThisVideo.paused || ThisVideo.ended ? a.setAttribute("data-state", "play") : a.setAttribute("data-state", "pause") : "mute" == e && n.setAttribute("data-state", ThisVideo.muted ? "unmute" : "mute")
            };
            ThisVideo.addEventListener("play", function () {
                f("playPause")
            }, !1), ThisVideo.addEventListener("pause", function () {
                f("playPause")
            }, !1), ThisVideo.addEventListener("volumechange", function () {
                c()
            }, !1), a.addEventListener("click", function () {
                ThisVideo.paused || ThisVideo.ended ? (ThisVideo.play(), $(".player-vid").addClass("hide").removeClass("show"), $(".slogan").addClass("hide")) : (ThisVideo.pause(), $(".player-vid").addClass("show").removeClass("hide"), $(".slogan").removeClass("hide"))
            }), i.addEventListener("click", function () {
                ThisVideo.pause(), ThisVideo.currentTime = 0, s.value = 0, f("playPause"), $(".player-vid").addClass("show").removeClass("hide"), $(".pic-video").removeClass("hide"), $(".slogan").removeClass("hide"), h() && (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), m(!1))
            }), n.addEventListener("click", function () {
                ThisVideo.muted = !ThisVideo.muted, f("mute")
            }), r.addEventListener("click", function () {
                p()
            }), ThisVideo.addEventListener("timeupdate", function () {
                s.getAttribute("max") || s.setAttribute("max", ThisVideo.duration), s.value = ThisVideo.currentTime, l.style.width = Math.floor(ThisVideo.currentTime / ThisVideo.duration * 100) + "%"
            }), s.addEventListener("click", function (e) {
                var t = (e.pageX - (this.offsetLeft + this.offsetParent.offsetLeft + this.offsetParent.offsetParent.offsetLeft)) / this.offsetWidth;
                ThisVideo.currentTime = t * ThisVideo.duration
            }), document.addEventListener("fullscreenchange", function () {
                m(!(!document.fullScreen && !document.fullscreenElement))
            }), document.addEventListener("webkitfullscreenchange", function () {
                m(!!document.webkitIsFullScreen)
            }), document.addEventListener("mozfullscreenchange", function () {
                m(!!document.mozFullScreen)
            }), document.addEventListener("msfullscreenchange", function () {
                m(!!document.msFullscreenElement)
            }), ThisVideo.addEventListener("ended", e, !1), $(".player-vid").on("click", function (e) {
                e.preventDefault(), $(".pic-video").addClass("hide"), (ThisVideo.paused || ThisVideo.ended) && (ThisVideo.play(), $(".controls").addClass("addshow"), $(".player-vid").addClass("hide").removeClass("show"), $(".slogan").addClass("hide"))
            }), $(".video-full, .video-cover-inline .overlay").on("click", function () {
                ThisVideo.paused || ThisVideo.ended ? (ThisVideo.play(), $(".player-vid").addClass("hide").removeClass("show"), $(".slogan").addClass("hide")) : (ThisVideo.pause(), $(".player-vid").addClass("show").removeClass("hide"), $(".slogan").removeClass("hide"))
            }), isTouchDevice || null != isMobile.all ? (f("mute"), a.setAttribute("data-state", "pause")) : (f("mute"), a.setAttribute("data-state", "pause"))
        }
    }
}

function onYouTubePlayerAPIReady() {
    player = new YT.Player("VYT", {
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    })
}

function onPlayerStateChange(e) {
    switch (e.data) {
        case YT.PlayerState.PLAYING:
            0 != TouchLenght && isTouchDevice || $(".control").removeClass("show"), $(".bg-video").addClass("hide"), $(".play-button").removeClass("show"), $("#playpause").attr("data-state", "pause");
            break;
        case YT.PlayerState.PAUSED:
            0 != TouchLenght && isTouchDevice || $(".control").addClass("show"), $(".bg-video").removeClass("hide"), $(".play-button").addClass("show"), $("#playpause").attr("data-state", "play");
            break;
        case YT.PlayerState.ENDED:
    }
}

function cleanTime() {
    return Math.round(player.getCurrentTime())
}

function onPlayerReady(e) {
    e.target.mute(), $("#mutetoggle").attr("data-state", "unmute"), updateTimerDisplay(), updateProgressBar(), player.pauseVideo(), $(".play-button").addClass("show"), $("#playpause").attr("data-state", "pause")
}

function updateTimerDisplay() {
    $("#current-time").text(formatTime(player.getCurrentTime())), $("#duration").text(formatTime(player.getDuration()))
}

function formatTime(e) {
    e = Math.round(e);
    var t = Math.floor(e / 60),
        o = e - 60 * t;
    return o = 10 > o ? "0" + o : o, t + ":" + o
}

function updateProgressBar() {
    $("#progress-bar").val(player.getCurrentTime() / player.getDuration() * 100)
}

function MoveSVG(e) {
    var t = function (e, t, o, a, i) {
            var n = (e - t) / (o - a),
                s = t - n * a;
            return n * i + s
        },
        o = function (e) {
            var t = 0,
                o = 0;
            if (!e) {
                window.event
            }
            return e.pageX || e.pageY ? (t = e.pageX, o = e.pageY) : (e.clientX || e.clientY) && (t = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, o = e.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
                x: t,
                y: o
            }
        },
        a = {
            width: window.innerWidth,
            height: window.innerHeight
        },
        i = {
            tx: a.width / 8,
            ty: a.height / 4,
            rz: 45,
            sx: [.8, 2],
            sy: [.8, 2]
        },
        n = function (n) {
            requestAnimationFrame(function () {
                el = $(".in-play[data-id='" + e + "']");
                var s = o(n),
                    l = 2 * i.rz / a.height * s.y - i.rz,
                    r = s.x < a.width / 2 ? t(i.sx[0], i.sx[1], a.width / 2, 0, s.x) : t(i.sx[1], i.sx[0], a.width, a.width / 2, s.x),
                    d = s.y < a.height / 2 ? t(i.sy[0], i.sy[1], a.height / 2, 0, s.y) : t(i.sy[1], i.sy[0], a.height, a.height / 2, s.y),
                    u = 2 * i.tx / a.width * s.x - i.tx,
                    c = 2 * i.ty / a.height * s.y - i.ty,
                    m = "translate3d(".concat(u, "px, ").concat(c, "px,0) rotate3d(0,0,1,").concat(l, "deg) scale3d(").concat(r, ",").concat(d, ",1)");
                $(el).css({
                    transform: m
                })
            })
        };
    document.addEventListener("mousemove", n)
}

function initialize() {
    function e(e) {
        l = new google.maps.Marker({
            map: h,
            animation: google.maps.Animation.DROP,
            position: e,
            icon: g,
            info: b,
            draggable: !1
        }), d.push(l), google.maps.event.addListener(l, "click", function () {
            v.setContent(this.info), v.open(h, this), h.setCenter(l.getPosition()), h.setZoom(18), i(), n(h)
        })
    }

    function t(e) {
        for (var t = 0; t < d.length; t++) d[t].setMap(e)
    }

    function o() {
        t(null)
    }

    function a() {
        o(), d = []
    }

    function i() {
        null !== l.getAnimation() ? l.setAnimation(null) : l.setAnimation(google.maps.Animation.BOUNCE)
    }

    function n(e) {
        $("#map-canvas").on("click", ".close-box-map", function () {
            v.close(e, this), l.setAnimation(null)
        })
    }
    var s = ($(".httpserver").text(), $(".httptemplate").text());
    $(".infobox-text-email").text(), $(".infobox-text-tel").text(), $(".infobox-text-fax").text(), $(".infobox-text-website").text(), $(".infobox-text-address").text();
    infoboxaddress_distribution = $(".infobox-address").text(), infoboxlocationlat_distribution = $(".infobox-location-lat").text(), infoboxlocationlng_distribution = $(".infobox-location-lng").text(), infoboximage_distribution = $(".infobox-image").text(), infoboximageicon_distribution = $(".infobox-image-icon").text(), infoboxgooglemap_distribution = $(".infobox-googlemap").text(), infoboxtitle_distribution = $(".infobox-name").text(), infoboxphone_distribution = $(".infobox-phone").text(), infoboxfax_distribution = $(".infobox-fax").text(), infoboxphonetel_distribution = $(".infobox-phone-tel").text(), infoboxemail_distribution = $(".infobox-email").text(), infoboxwebsite_distribution = $(".infobox-website").text();
    var l, r = new google.maps.LatLng(infoboxlocationlat_distribution, infoboxlocationlng_distribution),
        d = [],
        u = [{
            stylers: [{
                hue: "#929292"
            }, {
                saturation: -100
            }]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                lightness: -5
            }, {
                visibility: "simplified"
            }]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [{
                visibility: "on"
            }]
        }],
        c = new google.maps.StyledMapType(u, {
            name: "Styled Map"
        }),
        m = {
            center: r,
            zoom: 14,
            disableDefaultUI: !0,
            clickableIcons: !1,
            scrollwheel: !1,
            draggable: !1,
            fullscreenControl: !0,
            gestureHandling: "cooperative",
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"],
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        },
        h = new google.maps.Map(document.getElementById("map-canvas"), m);
    h.mapTypes.set("map_style", c), h.setMapTypeId("map_style"), google.maps.event.addDomListener(window, "resize", function () {
        window.innerWidth <= 1100 && h.setOptions({
            scrollwheel: !1
        }), google.maps.event.trigger(h, "resize"), h.setCenter(r), h.setZoom(14)
    });
    var p = "";
    "" != infoboxaddress_distribution && (p = p + "" + infoboxaddress_distribution + "<br>"), "" != infoboxphone_distribution && (p = p + "<strong>T:</strong> " + infoboxphone_distribution + "<br>"), "" != infoboxemail_distribution && (p = p + "<strong>E:</strong> " + infoboxemail_distribution + "<br>");
    var f = "<h3>" + infoboxtitle_distribution + "</h3><p>" + p + "</p>",
        g = ({
            name: infoboxtitle_distribution
        }, s + "default/images/marker.svg"),
        v = new google.maps.InfoWindow,
        b = "<div class='infobox'><div class='infobox-inner'>" + f + "</div><span class='close-box-map'></span></div>";
    e(r), $(".put-show").on("click", function () {
        e(r), $(".content-map-box").removeClass("empty")
    }), $(".put-hide").on("click", function () {
        a(), $(".content-map-box").addClass("empty")
    }), $(".full-map").on("click", function () {
        $(".map-box").hasClass("show") ? ($("body").removeClass("fullscreen"), $("html, body").removeClass("no-scroll"), $(".header, .footer, .go-top, .wheel, .box-nav, .title-page").removeClass("headermap"), $(".container, .content-main").removeClass("mapshow"), $(".map-box").removeClass("show"), setTimeout(function () {
            $(".group-central").addClass("show-text"), $(".box-contact-main").removeClass("headermap")
        }, 800), h.setOptions({
            scrollwheel: !1,
            draggable: !1
        }), h.setCenter(r), h.setZoom(11)) : ($("body").addClass("fullscreen"), $("html, body").addClass("no-scroll"), $(".header, .footer, .go-top, .wheel, .box-nav, .title-page, .box-contact-main").addClass("headermap"), $(".container, .content-main").addClass("mapshow"), $(".group-central").removeClass("show-text"), $(".map-box").addClass("show"), h.setOptions({
            scrollwheel: !0,
            draggable: !0
        }))
    }), screenfull.enabled && screenfull.on("change", function () {
        screenfull.isFullscreen ? ($(".map-box").addClass("full-screen"), h.setOptions({
            scrollwheel: !0,
            draggable: !0
        })) : ($(".map-box").removeClass("full-screen"), h.setOptions({
            scrollwheel: !1,
            draggable: !1
        }), h.setCenter(r))
    }), ZoomControl(h)
}

function ZoomControl(e) {
    $(".zoom-control a").on("click", function () {
        var t = e.getZoom();
        switch ($(this).attr("id")) {
            case "zoom-in":
                e.setZoom(++t);
                break;
            case "zoom-out":
                e.setZoom(--t)
        }
        return !1
    })
}
var ua = navigator.userAgent,
    match = ua.match("MSIE (.)"),
    versions = match && match.length > 1 ? match[1] : "unknown",
    isTouchDevice = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints > 0,
    isDesktop = 0 != $(window).width() && !isTouchDevice,
    IEMobile = ua.match(/IEMobile/i),
    isIE9 = /MSIE 9/i.test(ua),
    isIE10 = /MSIE 10/i.test(ua),
    isIE11 = !(!/rv:11.0/i.test(ua) || IEMobile),
    isEge = /Edge\/12./i.test(navigator.userAgent),
    isOpera = !!window.opr && !!opr.addons || !!window.opera || ua.indexOf(" OPR/") >= 0,
    isFirefox = "undefined" != typeof InstallTrigger,
    isIE = !!document.documentMode,
    isEdge = !isIE && !!window.StyleMedia && !isIE11,
    isChrome = ua.indexOf("Chrome") > -1 || !!window.chrome && !!window.chrome.webstore,
    isBlink = (isChrome || isOpera) && !!window.CSS,
    isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 || !isChrome && !isOpera && void 0 !== window.webkitAudioContext,
    AndroidVersion = parseFloat(ua.slice(ua.indexOf("Android") + 8)),
    Version = ua.match(/Android\s([0-9\.]*)/i),
    ios, android, blackBerry, UCBrowser, Operamini, firefox, windows, smartphone, tablet, touchscreen, all, isMobile = {
        ios: function () {
            return ua.match(/iPhone|iPad|iPod/i)
        }(),
        android: function () {
            return ua.match(/Android/i)
        }(),
        blackBerry: function () {
            return ua.match(/BB10|Tablet|Mobile/i)
        }(),
        UCBrowser: function () {
            return ua.match(/UCBrowser/i)
        }(),
        Operamini: function () {
            return ua.match(/Opera Mini/i)
        }(),
        windows: function () {
            return ua.match(/IEMobile/i)
        }(),
        smartphone: function () {
            return ua.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i) && window.innerWidth <= 440 && window.innerHeight <= 740
        }(),
        tablet: function () {
            return ua.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i) && window.innerWidth <= 1366 && window.innerHeight <= 800
        }(),
        all: function () {
            return ua.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i)
        }()
    };
if (isTouchDevice && null !== isMobile.all) var TouchLenght = !0;
else if (isMobile.tablet && isFirefox || isMobile.smartphone && isFirefox) var TouchLenght = !0;
else var TouchLenght = !1;
isMobile.Operamini && alert("Please disable Data Savings Mode");
var iOS = isMobile.ios,
    Loadx = 0;
! function (e) {
    e.fn.clipPath = function () {
        return this.filter("[data-mask]").each(function (t) {
            var o = e(this).attr("data-mask"),
                a = e(this).attr("src"),
                i = e(this).attr("data-width"),
                n = e(this).attr("data-height"),
                s = parseFloat(i, 10),
                l = parseFloat(n, 10),
                r = t,
                d = e('<svg xmlns="http://www.w3.org/2000/svg" class="svgMask" x="0px" y="0px" width="' + i + '" height="' + n + '" viewBox="0 0 ' + s + " " + l + '"><defs><clipPath id="maskID' + r + '"><path d="' + o + '"/></clipPath></defs><image clip-path="url(#maskID' + r + ')" width="' + i + '" height="' + n + '" xlink:href="' + a + '" /></svg>');
            e(this).parent().replaceWith(d), delete o, d
        }), this
    }
}(jQuery);
var SvgExpand = function () {
        function e() {
            t.pause(), $(".bg-house").addClass("show")
        }
        if ($(window).width() > 1100) {
            var t = new TimelineLite({
                paused: !1,
                onComplete: e
            });
            $(".box-svg path").each(function (e, o) {
                var a = $(o).attr("datashow");
                t.to($(o), 1.6, {
                    attr: {
                        d: a
                    },
                    opacity: 1,
                    ease: Power4.easeInOut
                }, RanDom(.6, .95))
            })
        }
    },
    SvgCollapse = function () {
        function e() {
            t.pause(), $(".bg-house").removeClass("show")
        }
        if ($(window).width() > 1100) {
            var t = new TimelineLite({
                paused: !1,
                onComplete: e
            });
            $(".box-svg path").each(function (e, o) {
                var a = $(o).attr("datahide");
                t.to($(o), .6, {
                    attr: {
                        d: a
                    },
                    opacity: 0,
                    ease: Power4.easeInOut
                }, .1, .15)
            })
        }
    };
$(document).ready(function () {
    ResizeWindows(), $(".loadicon").hasClass("loader") || ($(".loadicon").show(), $(".loadicon").addClass("loader"), DrawLoad()), isIE10 || isIE11 ? $("body").addClass("is-IE") : isEdge ? $("body").addClass("is-Edge") : iOS ? $("body").addClass("is-IOS") : isSafari ? $("body").addClass("is-Safari") : isChrome && $("body").addClass("is-Chrome"), $("#video-full").length && VideoFull()
}), $(window).on("beforeunload", function () {
    $(window).scrollTop(0)
});
var supportsVideo = !!document.createElement("video").canPlayType,
    ThisVideo = document.getElementById("video-full");
if ($(".youtube-video").length) {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var youTubeUrl = $(".youtube-video").attr("data-embed"),
        youTubeId, regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
        match = youTubeUrl.match(regExp);
    youTubeId = match && 11 == match[2].length ? match[2] : "no video found";
    var youTube = $(".youtube-video"),
        Source = "https://img.youtube.com/vi/" + youTubeId + "/sddefault.jpg";
    if (iOS) var SRC = '<iframe id="VYT" src="https://www.youtube.com/embed/' + youTubeId + "?autoplay=1&enablejsapi=1&controls=1&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" + youTubeId + '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
    else var SRC = '<iframe id="VYT" src="https://www.youtube.com/embed/' + youTubeId + "?autoplay=1&enablejsapi=1&controls=0&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" + youTubeId + '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
    $(youTube).append(SRC);
    var player, time_update = 0,
        timer;
    $("#progress-bar").on("mouseup touchend", function (e) {
        var t = player.getDuration() * (e.target.value / 100);
        player.seekTo(t), $(".bg-video").hasClass("hide") || $(".bg-video").addClass("hide")
    }), $("#playpause").bind("click", function () {
        var e = $(this).attr("data-state");
        "play" == e ? (player.playVideo(), $(this).attr("data-state", "pause"), $(".bg-video").addClass("hide"), $(".play-button").removeClass("show")) : (player.pauseVideo(), $(this).attr("data-state", "play"), $(".play-button").addClass("show"), $(".bg-video").removeClass("hide"))
    }), $("#mutetoggle").bind("click", function () {
        var e = $(this).attr("data-state");
        "unmute" == e ? (player.unMute(), $(this).attr("data-state", "mute")) : (player.mute(), $(this).attr("data-state", "unmute"))
    }), $("#fullscreen").bind("click", function () {
        var e = $(this).attr("data-state");
        "go-fullscreen" == e ? ($(this).attr("data-state", "cancel-fullscreen"), $(".video-youtube-full").addClass("full-frame"), $("html, body").addClass("no-scroll fullscreen"), iOS ? ($('.group-central[data-name="video-home"]').addClass("fullmode"), $(".header, .go-top, .footer").addClass("level-index-out")) : screenfull.request($(".video-youtube-full")[0])) : ($(this).attr("data-state", "go-fullscreen"), $(".video-youtube-full").removeClass("full-frame"), $("html, body").removeClass("no-scroll fullscreen"), iOS ? ($('.group-central[data-name="video-home"]').removeClass("fullmode"), $(".header, .go-top, .footer").removeClass("level-index-out")) : screenfull.exit())
    }), $(".play-button").on("click", function (e) {
        e.preventDefault(), player.playVideo(), $(this).removeClass("show"), $("#playpause").attr("data-state", "pause"), $(".bg-video").addClass("hide"), $(".control").addClass("show"), $(".video-youtube-full").addClass("playing"), clearInterval(time_update), time_update = setInterval(function () {
            updateTimerDisplay(), updateProgressBar()
        }, 500), clearInterval(timer), timer = setInterval(function () {
            0 != TouchLenght && isTouchDevice || $(".control").removeClass("show")
        }, 5e3)
    }), $(".pause-button").on("click", function (e) {
        e.preventDefault(), $(".play-button").addClass("show"), $("#playpause").attr("data-state", "play"), $(".bg-video, .slogan").removeClass("hide"), clearInterval(timer), 0 != TouchLenght && isTouchDevice || $(".control").addClass("show"), player.pauseVideo()
    }), $(".youtube-video").on("click", function (e) {
        e.preventDefault(), $("#playpause").trigger("click")
    }), $(".youtube-video, .control").on("mouseenter mousemove", function (e) {
        e.preventDefault(), 0 != TouchLenght && isTouchDevice || $(".control").hasClass("show") || $(".control").addClass("show")
    })
}
if ($(".wave-ani").length) {
    var AniBG = function (e) {
        var t = new TimelineLite({
            paused: !1
        });
        Paths = $(".in-play[data-id='" + e + "'] path"), $(Paths).each(function (e, o) {
            var a = $(o).attr("pathdata");
            t.to($(o), RanDom(1.5, 2.8), {
                attr: {
                    d: a
                },
                ease: Power1.easeInOut,
                repeat: -1,
                yoyo: !0
            })
        }), $(".stop-svg").on("click", function (e) {
            e.preventDefault(), t.pause(), t.progress(0), $(".wave-ani").removeClass("in-play")
        })
    };
    $(".play-svg").on("click", function (e) {
        e.preventDefault(), $(".show-text .wave-ani").addClass("in-play");
        var t = $(".show-text .wave-ani").attr("data-id");
        requestAnimationFrame(function () {
            AniBG(t), MoveSVG(t)
        })
    })
}