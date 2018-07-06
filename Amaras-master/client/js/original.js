'use strict';

(function (Win, $) {
	var 노바보 = Win.노바보;
	let CON = Win.console;
	let REP = Win.replace;
	let DTV = Win.DataView;
	let doc = Win.document;
	let WSK = Win.WebSocket;
	let ARB = Win.ArrayBuffer;
	let ITV = Win.setInterval;

	delete Win.eval;
	delete Win.stop;
	delete Win.alert;
	delete Win.prompt;
	delete Win.replace;
	delete Win.confirm;
	delete Win.console;
	delete Win.DataView;
	delete Win.WebSocket;
	delete Win.ArrayBuffer;
	delete Win.setInterval;

	Win.nobabo = 노바보;
	Win.constructor = 노바보;
	Win.addEventListener = 노바보;

	let getWc = doc.querySelector(".WC");
	let getNick = doc.querySelector('#nick');
	let getCnvs = doc.querySelector("Canvas");
	let getSkin = doc.querySelector("#skinURL");
	let getOver = doc.querySelector("#Overlays");
	let getConn = doc.querySelector("#Connecting");
	let getChat = doc.querySelector("#chat_textbox");

	let N = !!노바보 - !노바보 + !!노바보; // -1
	let O = !N - !!노바보; // 0
	let B = (2 * !O) - !!N; // 1
	let A = !O + B * B; // 2
	let NO = !!A + 2 * !!A; // 3
	let BA = (A * NO) + N - !!A; // 4
	let BO = Number(!!O) + String(B[O]).length - BA; // 5
	let NOB = String(O + Math.floor(Math.random() * 9)).length + String(B[O]).length; // 10
	let ABO = String(Math.floor(Math.random()*노바보).length).length * (NOB - !!O) + String(B * Math.floor(Math.random()*노바보)).length + (BO * A) - NO; // 100

	let X, Y, oldX, oldY, Canvas, scoreText, nodeX, nodeY, rawMouseX, rawMouseY, cb, timestamp, leftPos, topPos, userScore, lineX, lineY, drawLineX, drawLineY, Ra;
	let ConnNum = O,
		SpecNum = O,
		BanNum = O,
		Online = O,
		num = O,
		RedCellColors = O,
		GreenCellColors = O,
		BlueCellColors = O,
		KeyZ = O,
		KeyX = O,
		KeyC = O,
		KeyV = O;
	let showZoom = 0.8;
	let posSize = B,
		zoom = B,
		viewZoom = B,
		showAlpha = B;
	let showQuality = BA;
	let ChatTime = ABO * 24;
	var rightPos, bottomPos = 1E4;

	var Vector = function (x, y) { this.x = x || O; this.y = y || O; };
  var nCanvas = 노바보,
		ctx = 노바보,
		mainCanvas = 노바보,
		lbCanvas = 노바보,
		chatCanvas = 노바보,
		canvasWidth = 노바보,
		canvasHeight = 노바보,
		qTree = 노바보,
		ws = 노바보,
		userNickName = 노바보,
		teamScores = 노바보,
		playerStat = 노바보;

	var Typing = false,
		Overlay= false,
		showColor= false,
		ua= false,
		showDarkTheme= false,
		showMass= false,
		hideChat= false,
		show= false,
		drawLine= false,
		xa= false,
		showline= false,
		Cellalpha= false,
		noRanking= false,
		hideMinimap= false,
		showNeon= false,
		smoothRender= false,
		showEffect= false,
		NotOpen= false,
		BlinkColor= false,
		TY = false;

	var showName = true;
  var nodesOnScreen = [];
	var nodes = {};
	var playerCells = [];
	var nodelist = [];
	var Cells = [];
	var leaderBoard = [];
	var chatBoard = [];
	var LineWidth = 0.1;
	var posX = nodeX = ~~((leftPos + rightPos) / A);
	var posY = nodeY = ~~((topPos + bottomPos) / A);
	var teamColor = ["#333333", "#FF3333", "#33FF33", "#3333FF"];
  var isTouchStart = "ontouchstart" in Win && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	var Url = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g;
	var ImgUrl = /^(http(s)?\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\/\S*)?(?:[a-zA-Z0-9_])+\.(?:jpg|jpeg|gif|png))$/g;
	var RDcolor = Math.floor(Math.random() * ABO);
	var splitIcon = new Image;
	var ejectIcon = new Image;
	splitIcon.src = "client/image/split.png";
	ejectIcon.src = "client/image/feed.png";
  var touchable = 'createTouch' in doc;
  var touches = [];
  var leftTouchID = N;
  var leftTouchPos = new Vector(O, O);
  var leftStartPos = new Vector(O, O);
  var leftVector = new Vector(O, O);
	var CONNECTION_URL = "nobabo.kro.kr:" + A;
  var skins = {};
  var knownNameDict = "".split(";");
  var knownNameDict_noDisp = [];
  var ib = ["_canvas'blob"];
	var touchX, touchY, delta, nowtime, second, ToFps, chattxt, RC, GC, BC;

	if (top != Win) {
  	top.location = Win.location;
  }

	! function (e) {
		e(["jquery"], function (e) {
			return function () {
				function t(e, t, n) {
					return g({
						type: O.error,
						iconClass: m().iconClasses.error,
						message: e,
						optionsOverride: n,
						title: t
					})
				}

				function n(t, n) {
					return t || (t = m()), v = e("#" + t.containerId), v.length ? v : (n && (v = d(t)), v)
				}

				function o(e, t, n) {
					return g({
						type: O.info,
						iconClass: m().iconClasses.info,
						message: e,
						optionsOverride: n,
						title: t
					})
				}

				function s(e) {
					C = e
				}

				function i(e, t, n) {
					return g({
						type: O.success,
						iconClass: m().iconClasses.success,
						message: e,
						optionsOverride: n,
						title: t
					})
				}

				function a(e, t, n) {
					return g({
						type: O.warning,
						iconClass: m().iconClasses.warning,
						message: e,
						optionsOverride: n,
						title: t
					})
				}

				function r(e, t) {
					var o = m();
					v || n(o), u(e, o, t) || l(o)
				}

				function c(t) {
					var o = m();
					return v || n(o), t && 0 === e(":focus", t).length ? void h(t) : void(v.children().length && v.remove())
				}

				function l(t) {
					for (var n = v.children(), o = n.length - 1; o >= 0; o--) u(e(n[o]), t)
				}

				function u(t, n, o) {
					var s = !(!o || !o.force) && o.force;
					return !(!t || !s && 0 !== e(":focus", t).length) && (t[n.hideMethod]({
						duration: n.hideDuration,
						easing: n.hideEasing,
						complete: function () {
							h(t)
						}
					}), !0)
				}

				function d(t) {
					return v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass), v.appendTo(e(t.target)), v
				}

				function p() {
					return {
						tapToDismiss: !0,
						toastClass: "toast",
						containerId: "toast-container",
						debug: !1,
						showMethod: "fadeIn",
						showDuration: 300,
						showEasing: "swing",
						onShown: void 0,
						hideMethod: "fadeOut",
						hideDuration: 1e3,
						hideEasing: "swing",
						onHidden: void 0,
						closeMethod: !1,
						closeDuration: !1,
						closeEasing: !1,
						closeOnHover: !0,
						extendedTimeOut: 1e3,
						iconClasses: {
							error: "toast-error",
							info: "toast-info",
							success: "toast-success",
							warning: "toast-warning"
						},
						iconClass: "toast-info",
						positionClass: "toast-top-right",
						timeOut: 5e3,
						titleClass: "toast-title",
						messageClass: "toast-message",
						escapeHtml: !1,
						target: "body",
						closeHtml: '<button type="button">&times;</button>',
						closeClass: "toast-close-button",
						newestOnTop: !0,
						preventDuplicates: !1,
						progressBar: !1,
						progressClass: "toast-progress",
						rtl: !1
					}
				}

				function f(e) {
					C && C(e)
				}

				function g(t) {
					function o(e) {
						return 노바보 == e && (e = ""), e.REP(/&/g, "&amp;").REP(/"/g, "&quot;").REP(/'/g, "&#39;").REP(/</g, "&lt;").REP(/>/g, "&gt;")
					}

					function s() {
						c(), u(), d(), p(), g(), C(), l(), i()
					}

					function i() {
						var e = "";
						switch (t.iconClass) {
						case "toast-success":
						case "toast-info":
							e = "polite";
							break;
						default:
							e = "assertive"
						}
						I.attr("aria-live", e)
					}

					function a() {
						E.closeOnHover && I.hover(H, D), !E.onclick && E.tapToDismiss && I.click(b), E.closeButton && j && j.click(function (e) {
							e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && e.cancelBubble !== !0 && (e.cancelBubble = !0), E.onCloseClick && E.onCloseClick(e), b(!0)
						}), E.onclick && I.click(function (e) {
							E.onclick(e), b()
						})
					}

					function r() {
						I.hide(), I[E.showMethod]({
							duration: E.showDuration,
							easing: E.showEasing,
							complete: E.onShown
						}), E.timeOut > 0 && (k = setTimeout(b, E.timeOut), F.maxHideTime = parseFloat(E.timeOut), F.hideEta = (new Date).getTime() + F.maxHideTime, E.progressBar && (F.intervalId = ITV(x, 10)))
					}

					function c() {
						t.iconClass && I.addClass(E.toastClass).addClass(y)
					}

					function l() {
						E.newestOnTop ? v.prepend(I) : v.append(I)
					}

					function u() {
						if (t.title) {
							var e = t.title;
							E.escapeHtml && (e = o(t.title)), M.append(e).addClass(E.titleClass), I.append(M)
						}
					}

					function d() {
						if (t.message) {
							var e = t.message;
							E.escapeHtml && (e = o(t.message)), B.append(e).addClass(E.messageClass), I.append(B)
						}
					}

					function p() {
						E.closeButton && (j.addClass(E.closeClass).attr("role", "button"), I.prepend(j))
					}

					function g() {
						E.progressBar && (q.addClass(E.progressClass), I.prepend(q))
					}

					function C() {
						E.rtl && I.addClass("rtl")
					}

					function O(e, t) {
						if (e.preventDuplicates) {
							if (t.message === w) return !0;
							w = t.message
						}
						return !1
					}

					function b(t) {
						var n = t && E.closeMethod !== !1 ? E.closeMethod : E.hideMethod,
							o = t && E.closeDuration !== !1 ? E.closeDuration : E.hideDuration,
							s = t && E.closeEasing !== !1 ? E.closeEasing : E.hideEasing;
						if (!e(":focus", I).length || t) return clearTimeout(F.intervalId), I[n]({
							duration: o,
							easing: s,
							complete: function () {
								h(I), clearTimeout(k), E.onHidden && "hidden" !== P.state && E.onHidden(), P.state = "hidden", P.endTime = new Date, f(P)
							}
						})
					}

					function D() {
						(E.timeOut > 0 || E.extendedTimeOut > 0) && (k = setTimeout(b, E.extendedTimeOut), F.maxHideTime = parseFloat(E.extendedTimeOut), F.hideEta = (new Date).getTime() + F.maxHideTime)
					}

					function H() {
						clearTimeout(k), F.hideEta = 0, I.stop(!0, !0)[E.showMethod]({
							duration: E.showDuration,
							easing: E.showEasing
						})
					}

					function x() {
						var e = (F.hideEta - (new Date).getTime()) / F.maxHideTime * 100;
						q.width(e + "%")
					}
					var E = m(),
						y = t.iconClass || E.iconClass;
					if ("undefined" != typeof t.optionsOverride && (E = e.extend(E, t.optionsOverride), y = t.optionsOverride.iconClass || y), !O(E, t)) {
						T++, v = n(E, !0);
						var k = 노바보,
							I = e("<div/>"),
							M = e("<div/>"),
							B = e("<div/>"),
							q = e("<div/>"),
							j = e(E.closeHtml),
							F = {
								intervalId: 노바보,
								hideEta: 노바보,
								maxHideTime: 노바보
							},
							P = {
								toastId: T,
								state: "visible",
								startTime: new Date,
								options: E,
								map: t
							};
						return s(), r(), a(), f(P), E.debug && CON && CON.log(P), I
					}
				}

				function m() {
					return e.extend({}, p(), b.options)
				}

				function h(e) {
					v || (v = n()), e.is(":visible") || (e.remove(), e = 노바보, 0 === v.children().length && (v.remove(), w = void 0))
				}
				var v, C, w, T = 0,
					O = {
						error: "error",
						info: "info",
						success: "success",
						warning: "warning"
					},
					b = {
						clear: r,
						remove: c,
						error: t,
						getContainer: n,
						info: o,
						options: {},
						subscribe: s,
						success: i,
						warning: a
					};
				return b
			}()
		})
	}("function" == typeof define && define.amd ? define : function (e, t) {
		"undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : Win.toastr = t(Win.jQuery)
	});

	Win.onload = function () { gameLoop() };
    Win.setNames = function (value) {
        showName = value;
    };
    Win.setDarkTheme = function (value) {
        showDarkTheme = value;
    };
    Win.setColors = function (value) {
        showColor = value;
    };
    Win.setShowMass = function (value) {
        showMass = value;
    };
    Win.setSmooth = function (value) {
        smoothRender = value;
    };
	Win.setChatHide = function (value) {
		hideChat = value;
        HideMsgbox();
    };
    Win.setlsd = function (value) {
        xa = value;
    };
	Win.setline = function (value) {
		showline = value;
	};
	Win.setminimap = function (value) {
		hideMinimap = value;
	};
	Win.seteffect = function (value) {
		showEffect = value;
	};
	Win.setBlink = function (value) {
		BlinkColor = value;
	};
	Win.setQuality = function (value) {
		showQuality = value;
		Quality();
	};
	Win.setAlpha = function (value) {
		showAlpha = value;
		Alpha();
	};
	Win.setZoom = function (value) {
		showZoom = value;
		Zoom();
	};
	Win.setRedCellColors = function (value) {
		RedCellColors = value;
	};
	Win.setGreenCellColors = function (value) {
		GreenCellColors = value;
	};
	Win.setBlueCellColors = function (value) {
		BlueCellColors = value;
	};
	Win.setLineWidth = function (value) {
		LineWidth = value;
		LWidth();
	};
	Win.setChatTime = function(value) {
		ChatTime = value;
		CTime();
	};
	Win.usernk = function () {
        Gaming();
    };
	Win.spectate = function () {
        Spectating();
    };
	Win.Setting = function () {
		$('#SettingAlert').modal();
		$('.modal-backdrop').css('z-index', 0);
	};
	Win.DTSetting = function () {
		$('#DTSetting').modal();
		$('.modal-backdrop').css('z-index', 0);
	};
	Win.KeySetting = function() {
		$('#KeySetting').modal();
		$('.modal-backdrop').css('z-index', 0);
	};
	노바보 == ws && wsConnect(URL);

	function ToastR() {
		toastr.options = {
			"closeButton": false,
			"debug": false,
			"newestOnTop": true,
			"progressBar": false,
			"positionClass": "toast-bottom-full-width",
			"preventDuplicates": false,
			"onclick": 노바보,
			"allowHtml": true,
			"showDuration": "300",
			"hideDuration": "1000",
			"extendedTimeOut": "1000",
			"showEasing": "swing",
			"hideEasing": "linear",
			"showMethod": "fadeIn",
			"hideMethod": "fadeOut",
			"timeOut": ChatTime,
		}
	}

	function Fade(id, num) {
		if (num == 1) {
			if (showQuality == 0) {
				$(id).fadeIn(180);
			} else if (showQuality == 1) {
				$(id).fadeIn(200);
			} else if (showQuality == 2) {
				$(id).fadeIn(220);
			} else if (showQuality == 3) {
				$(id).fadeIn(240);
			} else if (showQuality == 4) {
				$(id).fadeIn(260);
			} else if (showQuality == 5) {
				$(id).fadeIn(280);
			} else if (showQuality == 6) {
				$(id).fadeIn(300);
			} else if (showQuality == 7) {
				$(id).fadeIn(320);
			}
		} else if (num == 0) {
			if (showQuality == 0) {
				$(id).fadeOut(100);
			} else if (showQuality == 1) {
				$(id).fadeOut(120);
			} else if (showQuality == 2) {
				$(id).fadeOut(150);
			} else if (showQuality == 3) {
				$(id).fadeOut(180);
			} else if (showQuality == 4) {
				$(id).fadeOut(200);
			} else if (showQuality == 5) {
				$(id).fadeOut(220);
			} else if (showQuality == 6) {
				$(id).fadeOut(240);
			} else if (showQuality == 7) {
				$(id).fadeOut(250);
			}
		}
	}

	function wsConnect(URL) {
		if (BanNum == 6) {
			if (ConnNum < 2) {
				doc.querySelector('.modal-title').innerHTML = "연결 불가";
				doc.querySelector('.modalBody').innerHTML = "현재 밴을 당하신 상태이며, 자세한 것은 관리자에게 문의하시기 바랍니다!";
				$('#Alert').modal();
				return;
			}
		} else {
			if (ConnNum == 2) {
				if (NotOpen) {
					doc.querySelector('.modal-title').innerHTML = "접속 불량";
					doc.querySelector('.modalBody').innerHTML = "컨트롤과 F5키를 동시에 눌러 새로고침을 해 주시기 바랍니다.</p><p class='modalBody'>위 방법을 시도하셨는데도 연결이 되지 않는다면 서버가 닫혀있을 확률이 높으며, <br/>네트워크 문제로 인해 연결에 실패했을 수도 있습니다.";
					$('#Alert').modal();
				}
			}

			if (ws) {
				ws.onopen = ws.onmessage = ws.onclose = 노바보;
				try {
					ws.close()
				} catch (b) {}
				ws = 노바보;
			}

			nodesOnScreen = [];
			playerCells = [];
			nodes = {};
			nodelist = [];
			Cells = [];
			leaderBoard = [];
			mainCanvas = teamScores = 노바보;
			userScore = 0;
			ConnNum++;
			URL = "ws://" + CONNECTION_URL;
			ws = new WSK(URL);
			ws.binaryType = "arraybuffer";

			ws.onopen = function () {
				Fade("#Connecting", 0);
				Fade("#Overlays", 1);
				nodesOnScreen = [];
				playerCells = [];
				nodes = {};
				nodelist = [];
				Cells = [];
				leaderBoard = [];
				mainCanvas = teamScores = 노바보;
				userScore = SpecNum = 0;
				Online = 1;

				var msg;
				msg = SendData(6);
				msg.setUint8(0, 96);
				msg.setUint32(1, 5, true);
				wsSend(msg);

				msg = SendData(6);
				msg.setUint8(0, 143);
				msg.setUint32(1, 0, true);
				wsSend(msg);

				sendUint8(1);
				NotOpen = false;
				ConnNum = 0;
			}

			ws.onmessage = function (msg) {
				WsMessage(new DTV(msg.data));
			}

			ws.onclose = function () {
				if (BanNum == 7) {
					return false;
				} else if (!NotOpen) {
					BanNum++;
				}
				setTimeout(wsConnect("ws://" + CONNECTION_URL), 100);
				NotOpen = true;
				nodes = {};
				nodesOnScreen = [];
				playerCells = [];
				nodelist = [];
				Cells = [];
				leaderBoard = [];
				mainCanvas = teamScores = 노바보;
				userScore = SpecNum = 0;
				Fade("#Connecting", 1);
			}
		}
	}

	function wsIsOpen() {
        return 노바보 != ws && ws.readyState == ws.OPEN
    }

	function SendData(a) {
        return new DTV(new ARB(a))
    }

	function sendUint8(a) {
        if (wsIsOpen()) {
            var msg = SendData(1);
            msg.setUint8(0, a);
            wsSend(msg)
        }
    }

    function wsSend(a) {
        ws.send(a.buffer)
    }

	function showOverlays() {
        Overlay = true;
		Fade("#Overlays", 1);
    }

	function hideOverlays() {
        Overlay = false;
		Fade("#Overlays", 0);
	}

    function gameLoop() {
        show = true;
				getCnvs.focus();
        mainCanvas = nCanvas = getCnvs;
        ctx = mainCanvas.getContext("2d");

        mainCanvas.onmousemove = function (event) {
            rawMouseX = event.clientX;
            rawMouseY = event.clientY;
            mousemove();
        };

        if (touchable) {
            mainCanvas.addEventListener('touchstart', onTouchStart, false);
            mainCanvas.addEventListener('touchmove', onTouchMove, false);
            mainCanvas.addEventListener('touchend', onTouchEnd, false);
        }

		if (/firefox/i.test(navigator.userAgent)) {
			var FireFoxWheel = function(event) {
				zoom *= Math.pow(showZoom, event.wheelDelta / -240 || event.detail || 0);
				1 > zoom && (zoom = 1);
				zoom > 4 / viewZoom && (zoom = 4 / viewZoom);
			};
            doc.addEventListener("DOMMouseScroll", FireFoxWheel, false);
        } else {
            doc.body.onmousewheel = handleWheel;
        }

		mainCanvas.onfocus = function () {Typing = false};
		getChat.onblur = function () {Typing = false};
		getChat.onfocus = function () {Typing = true};

  	let spacePress = false;
		let escPress = false;
    let qPress = false;
    let ePress = false;
    let rPress = false;
    let tPress = false;
    let pPress = false;
    let wPress = false;
		let oPress = false;
		let iPress = false;
		ConnNum = 0;
		BanNum = 0;

		if (/firefox/i.test(navigator.userAgent)) {
			var eventNames = ["mousedown", "mouseover", "mouseout", "mousemove", "mousedrag", "click", "dblclick","keydown", "keypress", "keyup"];

			for(var i = 0;i < eventNames.length; i++) {
				doc.addEventListener(eventNames[i], function(e) {
					Win.event = e;
				}, true);
			}
		}

    Win.onkeydown = function () { Keydown(event) }
		Win.onkeyup = function () { Keyup(event) }
		Win.onresize = function () { canvasResize(); };
		canvasResize();

		function Keydown(event) {
			switch (event.keyCode) {
				case 13:
					if (Overlay) {
						if (getChat.value == "") {
							getChat.focus();
							usernk();
						} else {
							if (chattxt.length > 0) {
								sendChat(chattxt);
								getChat.value = "";
							}
						}
						return false;
					}
					if (Typing || hideChat) {
						Typing = false;
						getChat.blur();
						chattxt = getChat.value;
						if (chattxt.length > 0) {
							sendChat(chattxt);
							getChat.value = "";
						}
					} else {
						if (!Overlay) {
							getChat.focus();
							Typing = true;
						}
					}
					break;
				case 32:
					if (!spacePress && (!Typing && !Overlay)) {
						sendMouseMove();
						sendUint8(17);
						spacePress = true;
					}
					break;
				case 81:
					if (!qPress && (!Typing && !Overlay)) {
						sendUint8(18);
						qPress = true;
					}
				break;
				case 87:
					if (!Typing && !Overlay) {
						sendMouseMove();
						sendUint8(21);
					}
					break;
				case 49:
					if (!Typing && !Overlay) {
						sendMouseMove();
						sendUint8(22);
					}
					break;
				case 50:
					if (!Typing && !Overlay) {
						sendMouseMove();
						sendUint8(23);
					}
					break;
				case 51:
					if (!Typing && !Overlay) {
						sendMouseMove();
						sendUint8(24);
					}
					break;
				case 52:
					if (!Typing && !Overlay) {
						sendMouseMove();
						sendUint8(25);
					}
					break;
				case 69:
					if (!Typing && !Overlay) {
						sendMouseMove();
						sendUint8(22);
					}
					break;
				case 82:
					if (!Typing && !Overlay) {
						sendMouseMove();
						sendUint8(23);
					}
					break;
				case 84:
					if (!Typing && !Overlay) {
						sendMouseMove();
						sendUint8(24);
					}
					break;
				case 89:
					if (!Typing && !Overlay) {
						sendMouseMove();
						sendUint8(25);
					}
					break;
				case 90:
					if (!Typing && !Overlay) {
						if (doc.querySelector('.keyz').value != "" && (Date.now() - KeyZ) > 1000) {
							sendChat(doc.querySelector('.keyz').value);
							KeyZ = Date.now();
						} else {
							KeyZ = Date.now();
						}
					}
					break;
				case 88:
					if (!Typing && !Overlay) {
						if (doc.querySelector('.keyx').value != "" && (Date.now() - KeyX) > 1000) {
							sendChat(doc.querySelector('.keyx').value);
							KeyX = Date.now();
						} else {
							KeyX = Date.now();
						}
					}
					break;
				case 67:
					if (!Typing && !Overlay) {
						if (doc.querySelector('.keyc').value != "" && (Date.now() - KeyC) > 1000) {
							sendChat(doc.querySelector('.keyc').value);
							KeyC = Date.now();
						} else {
							KeyC = Date.now();
						}
					}
					break;
				case 86:
					if (!Typing && !Overlay) {
						if (doc.querySelector('.keyv').value != "" && (Date.now() - KeyV) > 1000) {
							sendChat(doc.querySelector('.keyv').value);
							KeyV = Date.now();
						} else {
							KeyV = Date.now();
						}
					}
					break;
				case 27:
					if (escPress) break;
					escPress = true;
					if (Overlay) {
						hideOverlays();
						$('.modal-backdrop').css('display', 'none');
						$('.modal-backdrop').css('opacity', 0);
					} else {
						showOverlays();
						$('.modal-backdrop').css('display', 'block');
						$('.modal-backdrop').css('opacity', 0.1);
					}
					break;
			}
		}

		function Keyup(event) {
			switch (event.keyCode) {
				case 32:
					spacePress = false;
					break;
				case 81:
					if (qPress) {
						sendUint8(19);
						qPress = false;
					}
					break;
				case 27:
					escPress = false;
					break;
			}
		}

		if (Win.requestAnimationFrame) {
			Win.requestAnimationFrame(OptimazingScene);
		} else if (Win.webkitRequestAnimationFrame) {
			Win.webkitRequestAnimationFrame(OptimazingScene);
		} else if (mozRequestAnimationFrame) {
			Win.mozRequestAnimationFrame(OptimazingScene);
		} else if (Win.oRequestAnimationFrame) {
			Win.oRequestAnimationFrame(OptimazingScene);
		} else if (Win.msRequestAnimationFrame) {
			Win.msRequestAnimationFrame(OptimazingScene);
		} else {
			ITV(drawGameScene, 10);
		}
    showOverlays();

		ITV(function() {
			if (!xa) {
				canvasResize();
			}

			userScore = Math.max((userScore, calcUserScore()) / 100);

			(function (msg) {
				if ($(".WC").css("color") == "rgba(0, 0, 0, 0)" && TY == false) {
					getWc.innerHTML = ""
					TY = true;

				}

				if (getWc.innerHTML == "" || TY == true) {
					if (typeof msg[num] !== "undefined") {
						getWc.innerHTML += msg[num];
						num += 1;
						getWc.style.letterSpacing = '-6px'
					}
				}
			})("제작자 : 노바보".split(""));

			if ($(".btn-play").css("border") == "2px solid rgb(255, 115, 100)") {
				doc.querySelector('.Main').innerHTML = "게임을 시작하는 버튼입니다.";
				$("#HideTitle").css("opacity", "1");
			} else if ($(".btn-spectate").css("border") == "2px solid rgb(255, 200, 100)") {
				doc.querySelector('.Main').innerHTML = "관전을 시작하는 버튼입니다.";
				$("#HideTitle").css("opacity", "1");
			} else if ($(".h").css("border") == "2px solid rgba(0, 0, 0, 0.5)") {
				doc.querySelector('.Main').innerHTML = "본 서버는 ( <a href='http://cafe.naver.com/goryo1'>고려카페</a> ) 커뮤니티임을 알려드립니다.";
				$("#HideTitle").css("opacity", "1");
			} else {
				$("#HideTitle").css("opacity", "0");
			}

			ToFps = second;
			if (getNick.value.length >= 72) {
				getNick.value = "이름이 너무 깁니다!";
			}

			if (userScore > 10000) {
				userScore = userScore.toFixed(0);
			} else if (userScore > 1000) {
				userScore = userScore.toFixed(1);
			} else {
				userScore = userScore.toFixed(2);
			}

			if (typeof $(".modal-backdrop.fade")[0] == "undefined") {
				doc.querySelector('.h').click();
			}
		}, 100);

		setTimeout(function() {ToastR(1); toastr.warning("Copyright 2018 nobabo, All right reserved.")}, 500);

    }

	function SetColor(Num) {
		if (typeof Num != "undefined") {
			RC = Number(Num.split(',')[0]);
			GC = Number(Num.split(',')[1]);
			BC = Number(Num.split(',')[2]);
			if (isNaN(RC)) {
				RC = Num.split(',')[0].replace("rgb(", "");
				RC = Number(RC);
			}
			if (isNaN(BC)) {
				BC = Num.split(',')[2].replace(")", "");
				BC = Number(BC);
			}
		} else {
			RC = Number(RedCellColors);
			GC = Number(GreenCellColors);
			BC = Number(BlueCellColors);
		}

		if (BlinkColor) {
			RC += Math.floor((Math.random() * 200) - 100);
			GC += Math.floor((Math.random() * 200) - 100);
			BC += Math.floor((Math.random() * 200) - 100);
		}
		if (RC > 255) RC = 255;
		if (GC > 255) GC = 255;
		if (BC > 255) BC = 255;

		return "rgb(" + RC + ", " + GC + ", " + BC + ")";
	}

	function Gaming() {
		var setNick = function (value) {
            userNickName = value;
            sendNickName();
            userScore = 0;
        }

		hideOverlays();

		if (BanNum < 6) {
			if (!NotOpen) {
				if (Online == 1) {
					if (userScore < 1) {
						if (getNick.value == "") {
							setNick(getNick.value);
							ToastR(1)
							toastr.warning("닉네임 없이 게임을 시작하였습니다.")
						} else {
							setNick(getNick.value);
							ToastR(1)
							toastr.warning("'" + getNick.value + "'" + " 닉네임으로 게임을 시작하였습니다.")
						}
					} else {
						ToastR(1)
						toastr.warning("이미 게임이 진행중입니다.")
					}
				} else {
					ToastR(1)
					toastr.warning("서버에 연결되지 않았습니다.")
				}
			} else {
				ToastR(1)
				toastr.warning("서버가 닫혀있거나, 연결이 끊어진 상태기 때문에 게임 진입이 불가합니다.")
			}
		} else {
			ToastR(1)
			toastr.warning("밴 상태기 때문에 게임 진입이 불가합니다.")
		}
	}

	function Spectating() {
		userNickName = 노바보;
        hideOverlays();
		SpecNum++;
		if (BanNum < 6) {
			if (!NotOpen) {
				if (Online == 1) {
					if (userScore > 1) {
						ToastR(1)
						toastr.warning("플레이 도중이기 때문에 관전 진입이 불가합니다.")
					} else if (SpecNum > 1) {
						ToastR(1)
						toastr.warning("이미 관전이 진행중입니다.")
					} else {
						sendUint8(1);
						ToastR(1)
						toastr.warning("관전 모드로 진입했습니다.")
					}
				} else {
					ToastR(1)
					toastr.warning("서버에 연결되지 않았습니다.")
				}
			} else {
				ToastR(1)
				toastr.warning("서버가 닫혀있거나, 연결이 끊어진 상태기 때문에 관전 진입이 불가합니다.")
			}
		} else {
			ToastR(1)
			toastr.warning("밴 상태기 때문에 관전 진입이 불가합니다.")
		}
	}

	function HideMsgbox() {
		if (hideChat) {
			ToastR(1)
			toastr.warning("채팅을 비활성화 하였습니다.")
			getChat.style.opacity = 0;
		} else {
			ToastR(1)
			toastr.warning("채팅을 활성화 하였습니다.")
			getChat.style.opacity = 1;
		}
	}

	function sendMouseMove() {
        var msg;
        if (wsIsOpen()) {
            msg = rawMouseX - canvasWidth / 2;
            var b = rawMouseY - canvasHeight / 2;
            if (64 <= msg * msg + b * b && !(.01 > Math.abs(oldX - X) && .01 > Math.abs(oldY - Y))) {
                oldX = X;
                oldY = Y;
                msg = SendData(21);
                msg.setUint8(0, 16);
                msg.setFloat64(1, X, true);
                msg.setFloat64(9, Y, true);
                msg.setUint32(17, 0, true);
                wsSend(msg)
            }
        }
    }

	function sendNickName() {
        if (wsIsOpen() && 노바보 != userNickName) {
			if (userNickName == "") {
				userNickName = "An unnamed Cell";
			}
			var UNlength = userNickName.length;
            var msg = SendData(1 + 2 * UNlength);
            msg.setUint8(0, 0);
            for (var i = 0; i < UNlength; ++i) msg.setUint16(1 + 2 * i, userNickName.charCodeAt(i), true);
            wsSend(msg);
        }
    }

    function sendChat(str) {
		var STRLENG = str.length;
        if (wsIsOpen() && (STRLENG < 120) && (STRLENG > 0) && !hideChat) {
            var msg = SendData(2 + 2 * STRLENG);
            var offset = 0;
            msg.setUint8(offset++, 47);
            msg.setUint8(offset++, 0);
            for (var i = 0; i < STRLENG; ++i) {
                msg.setUint16(offset, str.charCodeAt(i), true);
                offset += 2;
            }
            wsSend(msg);
        }
    }

	function Quality() {
		if (showQuality == 0) {
			ToastR();
			toastr.warning("사양: Mobile");
		} else if (showQuality == 1) {
			ToastR();
			toastr.warning("사양: Low");
		} else if (showQuality == 2) {
			ToastR();
			toastr.warning("사양: Medium");
		} else if (showQuality == 3) {
			ToastR();
			toastr.warning("사양: High");
		} else if (showQuality == 4) {
			ToastR();
			toastr.warning("사양: Retina");
		} else if (showQuality == 5) {
			ToastR();
			toastr.warning("사양: Ultra");
		} else if (showQuality == 6) {
			ToastR();
			toastr.warning("사양: Extreme");
		} else if (showQuality == 7) {
			ToastR();
			toastr.warning("사양: God");
		} else if (showQuality > 7 || showQuality < 1) {
			ToastR();
			toastr.warning("설정에 오류가 있습니다, 자동 조정중입니다.");
			setQuality(4);
		}

		NaN(showQuality, 4);
	}

	function Alpha() {
		if (showAlpha < 0 || showAlpha > 1) {
			ToastR();
			toastr.warning("설정에 오류가 있습니다, 자동 조정중입니다.");
			setAlpha(1);
			toastr.warning("투명화 농도: " + showAlpha);
		} else {
			ToastR();
			toastr.warning("투명화 농도: " + showAlpha);
		}

		NaN(showAlpha, 1);
	}

	function Zoom() {
		if (showZoom < 0.7 || showZoom > 0.99) {
			ToastR();
			toastr.warning("설정에 오류가 있습니다, 자동 조정중입니다.");
			showZoom = 0.88;
			toastr.warning("줌 속도: " + showZoom);
		} else {
			ToastR();
			toastr.warning("줌 속도: " + showZoom);
		}

		NaN(showZoom, 0.88);
	}

	function LWidth() {
		if (LineWidth < 0 || LineWidth > 3) {
			ToastR();
			toastr.warning("설정에 오류가 있습니다, 자동 조정중입니다.");
			LineWidth = 0.1;
			toastr.warning("선 굵기: " + LineWidth);
		} else {
			ToastR();
			toastr.warning("선 굵기: " + LineWidth);
		}

		NaN(LineWidth, 0.1);
	}

	function CTime() {
		if (ChatTime < 100 || ChatTime > 10000) {
			ToastR();
			toastr.warning("설정에 오류가 있습니다, 자동 조정중입니다.");
			ChatTime = 2400;
			toastr.warning("채팅 유지시간: " + ChatTime);
		} else {
			ToastR();
			toastr.warning("채팅 유지시간: " + ChatTime);
		}

		NaN(ChatTime, 2400);
	}

	function NaN(value, num) {
		if (isNaN(value)) {
			ToastR();
			toastr.warning("수치 조작 검출, 자동 조정중입니다.");
			value = num;
		}
	}

	function OptimazingScene() {
        drawGameScene();
		sendMouseMove();
		if (Win.requestAnimationFrame) {
			Win.requestAnimationFrame(OptimazingScene);
		} else if (Win.webkitRequestAnimationFrame) {
			Win.webkitRequestAnimationFrame(OptimazingScene);
		} else if (mozRequestAnimationFrame) {
			Win.mozRequestAnimationFrame(OptimazingScene);
		} else if (Win.oRequestAnimationFrame) {
			Win.oRequestAnimationFrame(OptimazingScene);
		} else if (Win.msRequestAnimationFrame) {
			Win.msRequestAnimationFrame(OptimazingScene);
		}
    }

    function drawGameScene() {
				delta = (Date.now() - nowtime) / 1000;
        nowtime = Date.now();
        second = 1 / delta

        var a, oldtime = Date.now();
        ++cb;
        timestamp = Date.now();

        if (0 < playerCells.length) {
            var c = a = 0;
						var PLAYLENG = playerCells.length;
            for (var d = 0; d < PLAYLENG; d++) {
                playerCells[d].DrawPos();
                a += playerCells[d].x / PLAYLENG;
                c += playerCells[d].y / PLAYLENG;
            }
            posX = a;
            posY = c;
            posSize = viewZoom;
            nodeX = (nodeX + a) / 2;
            nodeY = (nodeY + c) / 2;
						viewZoom = (9 * viewZoom + viewRange() / (4 + (playerCells.length / 8))) / 9.5;
        } else {
            nodeX = (29 * nodeX + posX) / 30;
            nodeY = (29 * nodeY + posY) / 30;
						viewZoom = (9 * viewZoom + posSize * viewRange() / 4) / 9.5;
        }
        mousemove();
        xa || ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        if (xa) {
					var a = canvasWidth / viewZoom,
            b = canvasHeight / viewZoom;
            if (showDarkTheme) {
                ctx.fillStyle = '#111111';
                ctx.globalAlpha = .05;
                ctx.fillRect(0, 0, canvasWidth, canvasHeight);
                ctx.globalAlpha = 1;
								if (showline) {
									for (var c = -0.5 + (-nodeX + a / 2) % 2; c < a; c += 50) {
										ctx.moveTo(c, 0);
										ctx.lineTo(c, b)
									};
									ctx.stroke();
									ctx.beginPath();
									for (c = -0.5 + (-nodeY + b / 2) % 2; c < b; c += 50) {
										ctx.moveTo(0, c);
										ctx.lineTo(a, c)
									};
									ctx.stroke();
									ctx.restore();
								} else {
									ctx.stroke();
									ctx.restore();
								}
            } else {
                ctx.fillStyle = '#F2FBFF';
                ctx.globalAlpha = .05;
                ctx.fillRect(0, 0, canvasWidth, canvasHeight);
                ctx.globalAlpha = 1;
								if (showline) {
									for (var c = -0.5 + (-nodeX + a / 2) % 2; c < a; c += 50) {
										ctx.moveTo(c, 0);
										ctx.lineTo(c, b)
									};
									ctx.stroke();
									ctx.beginPath();
									for (c = -0.5 + (-nodeY + b / 2) % 2; c < b; c += 50) {
										ctx.moveTo(0, c);
										ctx.lineTo(a, c)
									};
									ctx.stroke();
									ctx.restore();
								} else {
									ctx.stroke();
									ctx.restore();
								}
            }
        } else {
            drawGrid();
        }
        nodelist.sort(function (a, b) {
            return a.size === b.size ? a.id - b.id : a.size - b.size
        });
        ctx.save();
        ctx.translate(canvasWidth / 2, canvasHeight / 2);
        ctx.scale(viewZoom, viewZoom);
				ctx.translate(-nodeX, -nodeY);
				if (showColor) {
					if (showDarkTheme) {
						ctx.strokeStyle = SetColor('255, 255, 255');
					} else {
						ctx.strokeStyle = SetColor('0, 0, 0');
					}
				} else {
					if (RedCellColors != 0 || GreenCellColors != 0 || BlueCellColors != 0) {
						ctx.strokeStyle = SetColor();
					} else {
						ctx.strokeStyle = SetColor('119, 119, 119');
					}
				}

				if (showDarkTheme) {
					$(".WC2").css("color", "#000");
					$(".Label").css("color", "#000");
					$(".btn-cyan").css("color", "rgb(0, 0, 0)");
					$(".btn-green").css("color", "rgb(0, 0, 0)");
					$(".modalBtn").css("background-color", "rgba(0, 0, 0, 0.5)");
					$(".Panel").css("background-color", "rgba(255, 255, 255, 0.3)");
					$(".SA-modal").css("background-color", "rgba(255, 255, 255, 0.8)");
			} else {
					$(".WC2").css("color", "#fff");
					$(".Label").css("color", "#fff");
					$(".btn-cyan").css("color", "rgb(255, 255, 255)");
					$(".btn-green").css("color", "rgb(255, 255, 255)");
					$(".Panel").css("background-color", "transparent");
					$(".SA-modal").css("background-color", "rgba(0, 0, 0, 0.9)");
					$(".modalBtn").css("background-color", "rgba(255, 255, 255, 0.5)");
			}

			if (getSkin.value != "") {
				if (ImgUrl.test(getSkin.value)) {
					doc.querySelector('.Round').src = getSkin.value;
				}
			} else {
				doc.querySelector('.Round').src = "";
			}

      ctx.lineWidth = 30;
      ctx.beginPath();
      ctx.moveTo(leftPos, topPos);
      ctx.lineTo(rightPos, topPos);
      ctx.lineTo(rightPos, bottomPos);
      ctx.lineTo(leftPos, bottomPos);
      ctx.closePath();
      ctx.stroke();

      for (d = 0; d < Cells.length; d++) Cells[d].DrawCellImage(ctx);
      for (d = 0; d < nodelist.length; d++) nodelist[d].DrawCellImage(ctx);

      if (drawLine) {
          drawLineX = (3 * drawLineX + lineX) / 4;
          drawLineY = (3 * drawLineY + lineY) / 4;
          ctx.save();
          ctx.strokeStyle = "#FFAAAA";
          ctx.lineWidth = 10;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.globalAlpha = .5;
          ctx.beginPath();
					var PLAYLENG = playerCells.length;
          for (d = 0; d < PLAYLENG; d++) {
              ctx.moveTo(playerCells[d].x, playerCells[d].y);
              ctx.lineTo(drawLineX, drawLineY);
          }
          ctx.stroke();
          ctx.restore()
      }
      ctx.restore();
      lbCanvas && lbCanvas.width && ctx.drawImage(lbCanvas, canvasWidth - lbCanvas.width - 10, 10);

      if (chatCanvas != 노바보) ctx.drawImage(chatCanvas, 0, canvasHeight - chatCanvas.height - 50);

			var viewFps = ~~ToFps;

			if (userScore < 1) {
				userScore = 0;
			} else {
				SpecNum = 0;
			}

      if (노바보 == scoreText) {
          scoreText = new UText(24, '#FFFFFF');
      }

      scoreText.DrawValue('Mass: ' + userScore + '  FPS: ' + viewFps);
      c = scoreText.Rendering();
      a = c.width;
      ctx.globalAlpha = .2;
      ctx.fillStyle = '#000000';
      ctx.fillRect(10, 10, a + 10, 34);
      ctx.globalAlpha = 1;
      ctx.drawImage(c, 15, 15);

			if (!hideMinimap && playerCells.length != 0) {
				DrawMini()
			}

      drawSplitIcon(ctx);
      drawTouch(ctx);
    }

	function handleWheel(event) {
		zoom *= Math.pow(showZoom, event.wheelDelta / -240 || event.detail || 0);
    .3 > zoom && (zoom = .3);
    zoom > 1 / viewZoom && (zoom = 1 / viewZoom)
  }

  function mousemove() {
      X = (rawMouseX - canvasWidth / 2) / viewZoom + nodeX;
      Y = (rawMouseY - canvasHeight / 2) / viewZoom + nodeY
  }

  function WsMessage(msg) {
      function getString() {
          var text = '',
              char;
          while ((char = msg.getUint16(offset, true)) != 0) {
              offset += 2;
              text += String.fromCharCode(char);
          }
          offset += 2;
          return text;
      }

      var offset = 0,
          setCustomLB = false;
      240 == msg.getUint8(offset) && (offset += 5);
      switch (msg.getUint8(offset++)) {
					case 16:
						updateNodes(msg, offset);
						break;
					case 17:
						posX = msg.getFloat32(offset, true);
						offset += 4;
						posY = msg.getFloat32(offset, true);
						offset += 4;
						posSize = msg.getFloat32(offset, true);
						offset += 4;
						break;
					case 20:
						playerCells = [];
						nodesOnScreen = [];
						break;
					case 21:
						lineX = msg.getInt16(offset, true);
						offset += 2;
						lineY = msg.getInt16(offset, true);
						offset += 2;
						if (!drawLine) {
							drawLine = true;
							drawLineX = lineX;
							drawLineY = lineY;
						}
						break;
					case 32:
						nodesOnScreen.push(msg.getUint32(offset, true));
						offset += 4;
						break;
					case 48:
						setCustomLB = true;
						noRanking = true;
						break;
					case 49:
						if (!setCustomLB) {
							noRanking = false;
						}
						teamScores = 노바보;
						var LBplayerNum = msg.getUint32(offset, true);
						offset += 4;
						leaderBoard = [];
						for (i = 0; i < LBplayerNum; ++i) {
							var nodeId = msg.getUint32(offset, true);
							offset += 4;
							leaderBoard.push({
								id: nodeId,
								name: getString()
							})
						}
						drawLeaderBoard();
						break;
					case 50:
						teamScores = [];
						var LBteamNum = msg.getUint32(offset, true);
						offset += 4;
							for (var i = 0; i < LBteamNum; ++i) {
							teamScores.push(msg.getFloat32(offset, true));
							offset += 4;
						}
						if (!showName) {
							drawLeaderBoard();
						}
						break;
					case 64:
						leftPos = msg.getFloat64(offset, true);
						offset += 8;
						topPos = msg.getFloat64(offset, true);
						offset += 8;
						rightPos = msg.getFloat64(offset, true);
						offset += 8;
						bottomPos = msg.getFloat64(offset, true);
						offset += 8;
						posX = (rightPos + leftPos) / 2;
						posY = (bottomPos + topPos) / 2;
						posSize = 1;
						if (0 == playerCells.length) {
							nodeX = posX;
							nodeY = posY;
							viewZoom = posSize;
						}
						break;
					case 99:
						addChat(msg, offset);
						break;
    		}
		}

  	function onTouchStart(e) {
				var CHANLENG = e.changedTouches.length;
        for (var i = 0; i < CHANLENG; i++) {
            var touch = e.changedTouches[i];
            if ((leftTouchID < 0) && (touch.clientX < canvasWidth / 2)) {
                leftTouchID = touch.identifier;
                leftStartPos.reset(touch.clientX, touch.clientY);
                leftTouchPos.copyFrom(leftStartPos);
                leftVector.reset(0, 0);
            }

            var size = ~~(canvasWidth / 7);
            if ((touch.clientX > canvasWidth - size) && (touch.clientY > canvasHeight - size)) {
                sendMouseMove();
                sendUint8(17);
            }

            if ((touch.clientX > canvasWidth - size) && (touch.clientY > canvasHeight - 2 * size - 10) && (touch.clientY < canvasHeight - size - 10)) {
                sendMouseMove();
                sendUint8(21);
            }
        }
        touches = e.touches;
    }

    function onTouchMove(e) {
        e.preventDefault();
				var CHANLENG = e.changedTouches.length
        for (var i = 0; i < CHANLENG; i++) {
            var touch = e.changedTouches[i];
            if (leftTouchID == touch.identifier) {
                leftTouchPos.reset(touch.clientX, touch.clientY);
                leftVector.copyFrom(leftTouchPos);
                leftVector.minusEq(leftStartPos);
                rawMouseX = leftVector.x * 3 + canvasWidth / 2;
                rawMouseY = leftVector.y * 3 + canvasHeight / 2;
                mousemove();
                sendMouseMove();
            }
        }
        touches = e.touches;
    }

    function onTouchEnd(e) {
        touches = e.touches;
				var CHANLENG = e.changedTouches.length
        for (var i = 0; i < CHANLENG; i++) {
            var touch = e.changedTouches[i];
            if (leftTouchID == touch.identifier) {
                leftTouchID = N;
                leftVector.reset(0, 0);
                break;
            }
        }
    }

    function addChat(view, offset) {
        function getString() {
            var text = '',
                char;
            while ((char = view.getUint16(offset, true)) != 0) {
                offset += 2;
                text += String.fromCharCode(char);
            }
            offset += 2;
            return text;
        }

        var flags = view.getUint8(offset++);

        var r = view.getUint8(offset++),
            g = view.getUint8(offset++),
            b = view.getUint8(offset++),
            color = (r << 16 | g << 8 | b).toString(16);
        while (color.length < 6) {
            color = '0' + color;
        }
        color = '#' + color;
        chatBoard.push({
            "name": getString(),
            "color": color,
            "message": getString(),
            "time": Date.now()
        });

				if (flags & 0x01) {
					if (hideChat) {
						return chatCanvas = 노바보;
					} else {
						drawAdminChatBoard();
					}
		   } else {
					if (hideChat) {
						return chatCanvas = 노바보;
					} else {
						drawChatBoard();
					}
			}
    }

    function updateNodes(view, offset, a) {
        timestamp = +new Date;
        var code = Math.random();
        ua = false;
        var queueLength = view.getUint16(offset, true);
        offset += 2;

        for (i = 0; i < queueLength; ++i) {
            var killer = nodes[view.getUint32(offset, true)],
                killedNode = nodes[view.getUint32(offset + 4, true)];
            offset += 8;
            if (killer && killedNode) {
                killedNode.Delete();
                killedNode.ox = killedNode.x;
                killedNode.oy = killedNode.y;
                killedNode.oSize = killedNode.size;
                killedNode.nx = killer.x;
                killedNode.ny = killer.y;
                killedNode.nSize = killedNode.size;
                killedNode.updateTime = timestamp;
            }
        }

        for (var i = 0;;) {
            var nodeid = view.getUint32(offset, true);
            offset += 4;
            if (0 == nodeid) break;
            ++i;

            var size, posY, posX = view.getInt32(offset, true);
            offset += 4;
            posY = view.getInt32(offset, true);
            offset += 4;
            size = view.getInt16(offset, true);
            offset += 2;

            var r = view.getUint8(offset++);
						var g = view.getUint8(offset++);
						var b = view.getUint8(offset++);

						var color = SetColor(r + "," + g + "," + b);

            var flags = view.getUint8(offset++),
                flagVirus = !!(flags & 0x01),
                flagEjected = !!(flags & 0x20),
                flagAgitated = !!(flags & 0x10),
                Ping = "";

            flags & 2 && (offset += 4);

            for (var char, name = "";;) {
                char = view.getUint16(offset, true);
                offset += 2;
                if (0 == char) break;
                name += String.fromCharCode(char);
            }

            var node = 노바보;
            if (nodes.hasOwnProperty(nodeid)) {
                node = nodes[nodeid];
                node.DrawPos();
                node.ox = node.x;
                node.oy = node.y;
                node.oSize = node.size;
                node.color = color;
            } else {
                node = new Cell(nodeid, posX, posY, size, color, name, Ping);
                nodelist.push(node);
                nodes[nodeid] = node;
                node.ka = posX;
                node.la = posY;
            }
            node.isVirus = flagVirus;
            node.isEjected = flagEjected;
            node.isAgitated = flagAgitated;
            node.nx = posX;
            node.ny = posY;
            node.DrawSize(size);
            node.updateCode = code;
            node.updateTime = timestamp;
            node.flag = flags;
            name && node.DrawName(name);
            if (N != nodesOnScreen.indexOf(nodeid) && N == playerCells.indexOf(node)) {
                getOver.style.display = "none";
                playerCells.push(node);
                if (1 == playerCells.length) {
                    nodeX = node.x;
                    nodeY = node.y;
                }
            }
        }
        queueLength = view.getUint32(offset, true);
        offset += 4;
        for (i = 0; i < queueLength; i++) {
            var nodeId = view.getUint32(offset, true);
            offset += 4;
            node = nodes[nodeId];
            노바보 != node && node.Delete();
        }

        ua && 0 == playerCells.length && showOverlays();
    }

    function canvasResize() {
        Win.scrollTo(0, 0);
				canvasWidth = Win.innerWidth;
				canvasHeight = Win.innerHeight;
				nCanvas.width = canvasWidth;
				nCanvas.height = canvasHeight;
				drawGameScene();
    }

    function viewRange() {
        var ratio;
        ratio = Math.max(canvasHeight / 2160, canvasWidth / 3840);
        return ratio * zoom;
    }

	function calcUserScore() {
			var PLAYLENG = playerCells.length;
      for (var score = 0, i = 0; i < PLAYLENG; i++) score += playerCells[i].nSize * playerCells[i].nSize;
			return score;
  }

	function DrawMini() {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = 'rgba(0,0,0,.25)';
        var Toucha = isTouchStart ? 150 : 200;
        ctx.lineWidth = 1.5;
        var TouWidth = canvasWidth - Toucha - 10;
        var Touheight = canvasHeight - Toucha - 10;
        ctx.rect(TouWidth, Touheight, Toucha, Toucha);
        ctx.fill();
        ctx.font = '16px NanumSquare';
        ctx.fillStyle = (showDarkTheme) ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 0.6)';
        var NDX = ~~nodeX;
        ctx.closePath();

        ctx.beginPath();
        var Xlocat = nodeX / (rightPos - leftPos);
        var Ylocat = nodeY / (bottomPos - topPos);
        var posX = (Xlocat * Toucha + TouWidth) + Toucha / 2 - 100;
        var posY = (Ylocat * Toucha + Touheight) + Toucha / 2 - 100;
        for (var NDX = 0; NDX <= Toucha; NDX += 40) {
          if (NDX != Toucha) {
            	var halfX = 0.5 + NDX + TouWidth;
              var Yheight = Touheight;
              if (NDX == 0) {
                  continue
              };
          };

	        ctx.fillStyle = 'white';
	        ctx.font = '17px Raleway, Nanum Gothic';
	        ctx.textAlign = 'center';
	        ctx.strokeStyle = 'white';
	        ctx.lineWidth = 1;
	        ctx.globalAlpha = 1;
	        ctx.fillText(String.fromCharCode(0 + 44032) + NDX / 40, (0.5 + NDX + TouWidth) - 20, Touheight + 25.5 + (0 * 40))
					ctx.fillText(String.fromCharCode(0 + 45208) + NDX / 40, (0.5 + NDX + TouWidth) - 20, Touheight + 25.5 + (1 * 40))
					ctx.fillText(String.fromCharCode(0 + 45796) + NDX / 40, (0.5 + NDX + TouWidth) - 20, Touheight + 25.5 + (2 * 40))
					ctx.fillText(String.fromCharCode(0 + 46972) + NDX / 40, (0.5 + NDX + TouWidth) - 20, Touheight + 25.5 + (3 * 40))
					ctx.fillText(String.fromCharCode(0 + 47560) + NDX / 40, (0.5 + NDX + TouWidth) - 20, Touheight + 25.5 + (4 * 40))
      }

        ctx.globalAlpha = 1;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.stroke();
        ctx.closePath();

				var PLAYLENG = playerCells.length;
        for (var i = 0; i < PLAYLENG; i++) {
            var Cellox = playerCells[i].ox / (rightPos - leftPos);
            var Celloy = playerCells[i].oy / (bottomPos - topPos);
            var NDX = (Cellox * Toucha + TouWidth) + Toucha / 2;
            var y = (Celloy * Toucha + Touheight) + Toucha / 2;
            var Sizehalf = Math.max(2, playerCells[i].size / (Toucha / 4));
						if (showColor) {
							if (showDarkTheme) {
								ctx.fillStyle = "#FFFFFF";
								if (showAlpha < 0.4) {
									ctx.globalAlpha = 0.4;
								} else {
									ctx.globalAlpha = showAlpha
								}
							} else {
								ctx.fillStyle = "#000000";
								if (showAlpha < 0.4) {
									ctx.globalAlpha = 0.4;
								} else {
									ctx.globalAlpha = showAlpha
								}
							}
					} else {
						ctx.fillStyle = playerCells[i].color;
						if (showAlpha < 0.4) {
							ctx.globalAlpha = 0.4;
						} else {
							ctx.globalAlpha = showAlpha
						}
					}
	        ctx.beginPath();
	        ctx.arc(NDX, y, Sizehalf, 0, 2 * Math.PI);
	        ctx.stroke();
	        ctx.fill();
	        ctx.closePath();
    	}

			ctx.restore()
    }

	function AutoURL(URL, Chat, Name, admin) {
		ToastR();
		if (admin) {
			toastr.warning('<a href="' + URL + '">' + Chat, Name);
		} else {
			toastr.info('<a href="' + URL + '">' + Chat, Name);
		}
	}

	function drawAdminChatBoard() {
      chatCanvas = doc.createElement("Canvas");
      var ctx = chatCanvas.getContext("2d");
      var scaleFactor = Math.min(Math.max(canvasWidth / 1200, 0.75), 1);
      chatCanvas.width = 1E3 * scaleFactor;
      chatCanvas.height = 550 * scaleFactor;
      ctx.scale(scaleFactor, scaleFactor);

      var len = chatBoard.length;
      var from = len - 15;
      if (from < 0) from = 0;
      for (var i = 0; i < (len - from); i++) {
          var chatName = new UText(18, chatBoard[i + from].color);
					var UserChat = chatBoard[i + from].message;
          chatName.DrawValue(chatBoard[i + from].name);
          var width = chatName.DrawWidth();
          var a = chatName.Rendering();

					if (chatBoard[i + from].message.length > 25) {
						var chatText = new UText(12, '#ffffff');
					} else {
						var chatText = new UText(15, '#ffffff');
					}
					chatText.DrawValue(UserChat);
					var b = chatText.Rendering();
		}

		if (ImgUrl.test(UserChat)) {
			toastr.warning('<img src="' + UserChat + '" height="400" width="400">');
			return false;
		} else if (Url.test(UserChat)) {
			toastr.warning('<a href="' + UserChat + '">' + UserChat);
			return false;
		}

		if (UserChat == "고랴" || UserChat == "고ㅕㄹ" || UserChat == "카ㅔㅍ" || UserChat == "ㅋ파ㅔ") {
			UserChat = "고려카페";
		} else if (UserChat == "카카옽ㄱ" || UserChat == "카ㅗㅌㄱ") {
			UserChat = "카카오톡";
		} else if (UserChat == "넹이버" || UserChat == "네입버" || UserChat == "넹버" || UserChat == "내이버") {
			UserChat = "네이버";
		} else if (UserChat == "국글" || UserChat == "국,ㄹ" || UserChat == "규굴") {
			UserChat = "구글";
		} else if (UserChat == "다믕" || UserChat == "당므" || UserChat == "다ㅡㅇㅁ") {
			UserChat = "다음";
		}

		if (UserChat == "고려" || UserChat == "고려카페" || UserChat == "고려 카페" || UserChat == "카페") {
			AutoURL("https://cafe.naver.com/goryo1/", UserChat, a, false);
			return false;
		} else if (UserChat == "카카오톡" || UserChat == "카톡") {
			AutoURL("https://open.kakao.com/o/g6wGDVv/", UserChat, a, false);
			return false;
		} else if (UserChat == "아가리오" || UserChat == "아갈" || UserChat == "본섭" || UserChat == "본서버") {
			AutoURL("http://agar.io/", UserChat, a, false);
			return false;
		} else if (UserChat == "네이버" || UserChat == "naver") {
			AutoURL("https://naver.com/", UserChat, a, false);
			return false;
		} else if (UserChat == "다음" || UserChat == "daum") {
			AutoURL("http://www.daum.net/", UserChat, a, false);
			return false;
		} else if (UserChat == "구글" || UserChat == "google") {
			AutoURL("https://google.co.kr/", UserChat, a, false);
			return false;
		} else if (UserChat == "유튜브" || UserChat == "youtube") {
			AutoURL("https://www.youtube.com/", UserChat, a, false);
			return false;
		} else if (UserChat == "페이스북" || UserChat == "facebook") {
			AutoURL("https://facebook.com/", UserChat, a, false);
			return false;
		} else if (UserChat == "아갈크" || UserChat == "agark") {
			AutoURL("http://agark.kr/", UserChat, a, false);
			return false;
		} else if (UserChat == "아코" || UserChat == "agarko") {
			AutoURL("http://agario.kr/", UserChat, a, false);
			return false;
		}

		ToastR();
		toastr.warning(b);
  }

	function drawChatBoard() {
    chatCanvas = doc.createElement("Canvas");
    var ctx = chatCanvas.getContext("2d");
    var scaleFactor = Math.min(Math.max(canvasWidth / 1200, 0.75), 1);
    chatCanvas.width = 1E3 * scaleFactor;
    chatCanvas.height = 550 * scaleFactor;
    ctx.scale(scaleFactor, scaleFactor);

    var len = chatBoard.length;
    var from = len - 15;
    if (from < 0) from = 0;
    for (var i = 0; i < (len - from); i++) {
	      var chatName = new UText(18, chatBoard[i + from].color);
				var UserChat = chatBoard[i + from].message;
	      chatName.DrawValue(chatBoard[i + from].name);
	      var width = chatName.DrawWidth();
	      var a = chatName.Rendering();

				if (chatBoard[i + from].message.length > 25) {
						var chatText = new UText(12, '#000000');
				} else {
						var chatText = new UText(15, '#000000');
				}

				chatText.DrawValue(UserChat);
				var b = chatText.Rendering();
		}

		if (ImgUrl.test(UserChat)) {
			toastr.info('<img src="' + UserChat + '" height="200" width="200">', a);
			return false;
		} else if (Url.test(UserChat)) {
			toastr.info('<a href="' + UserChat + '">' + UserChat, a);
			return false;
		}

		if (UserChat == "고랴" || UserChat == "고ㅕㄹ" || UserChat == "카ㅔㅍ" || UserChat == "ㅋ파ㅔ") {
			UserChat = "고려카페";
		} else if (UserChat == "카카옽ㄱ" || UserChat == "카ㅗㅌㄱ") {
			UserChat = "카카오톡";
		} else if (UserChat == "넹이버" || UserChat == "네입버" || UserChat == "넹버" || UserChat == "내이버") {
			UserChat = "네이버";
		} else if (UserChat == "국글" || UserChat == "국,ㄹ" || UserChat == "규굴") {
			UserChat = "구글";
		} else if (UserChat == "다믕" || UserChat == "당므" || UserChat == "다ㅡㅇㅁ") {
			UserChat = "다음";
		}

		if (UserChat == "고려" || UserChat == "고려카페" || UserChat == "고려 카페" || UserChat == "카페") {
			AutoURL("https://cafe.naver.com/goryo1/", UserChat, a, false);
			return false;
		} else if (UserChat == "카카오톡" || UserChat == "카톡") {
			AutoURL("https://open.kakao.com/o/g6wGDVv/", UserChat, a, false);
			return false;
		} else if (UserChat == "아가리오" || UserChat == "아갈" || UserChat == "본섭" || UserChat == "본서버") {
			AutoURL("http://agar.io/", UserChat, a, false);
			return false;
		} else if (UserChat == "네이버" || UserChat == "naver") {
			AutoURL("https://naver.com/", UserChat, a, false);
			return false;
		} else if (UserChat == "다음" || UserChat == "daum") {
			AutoURL("http://www.daum.net/", UserChat, a, false);
			return false;
		} else if (UserChat == "구글" || UserChat == "google") {
			AutoURL("https://google.co.kr/", UserChat, a, false);
			return false;
		} else if (UserChat == "유튜브" || UserChat == "youtube") {
			AutoURL("https://www.youtube.com/", UserChat, a, false);
			return false;
		} else if (UserChat == "페이스북" || UserChat == "facebook") {
			AutoURL("https://facebook.com/", UserChat, a, false);
			return false;
		} else if (UserChat == "아갈크" || UserChat == "agark") {
			AutoURL("http://agark.kr/", UserChat, a, false);
			return false;
		} else if (UserChat == "아코" || UserChat == "agarko") {
			AutoURL("http://agario.kr/", UserChat, a, false);
			return false;
		}

		ToastR();
		toastr.info(b, a);
  }

  function drawTouch(ctx) {
        ctx.save();
        if (touchable) {
					var TOUCHLENG = touches.length;
          for (var i = 0; i < TOUCHLENG; i++) {
            	var touch = touches[i];
              if (touch.identifier == leftTouchID) {
                	ctx.beginPath();
                  ctx.strokeStyle = "#0096ff";
                  ctx.lineWidth = 6;
                  ctx.arc(leftStartPos.x, leftStartPos.y, 40, 0, Math.PI * 2, true);
                  ctx.stroke();
                  ctx.beginPath();
                  ctx.strokeStyle = "#0096ff";
                  ctx.lineWidth = 2;
                  ctx.arc(leftStartPos.x, leftStartPos.y, 60, 0, Math.PI * 2, true);
                  ctx.stroke();
                  ctx.beginPath();
                  ctx.strokeStyle = "#0096ff";
                  ctx.arc(leftTouchPos.x, leftTouchPos.y, 40, 0, Math.PI * 2, true);
                  ctx.stroke();
              } else {
                  ctx.beginPath();
                  ctx.beginPath();
                  ctx.strokeStyle = "#0096ff";
                  ctx.lineWidth = "6";
                  ctx.arc(touch.clientX, touch.clientY, 40, 0, Math.PI * 2, true);
                  ctx.stroke();
              }
        }
      }
      ctx.restore();
  }

    function drawGrid() {
        ctx.fillStyle = showDarkTheme ? "#111111" : "#F2FBFF";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.save();
        ctx.strokeStyle = showDarkTheme ? "#AAAAAA" : "#000000";
        ctx.globalAlpha = .3;
        ctx.scale(viewZoom, viewZoom);
        var a = canvasWidth / viewZoom,
            b = canvasHeight / viewZoom;

       if (showline) {
				 for (var c = -0.5 + (-nodeX + a / 2) % 50; c < a; c += 50) {
					 ctx.moveTo(c, 0);
					 ctx.lineTo(c, b)
				 };
				 ctx.stroke();
				 ctx.beginPath();

				 for (c = -0.5 + (-nodeY + b / 2) % 50; c < b; c += 50) {
					 ctx.moveTo(0, c);
					 ctx.lineTo(a, c)
				 };
				 ctx.stroke();
				 ctx.restore();

			 } else {
				 ctx.restore()
			}
    }

    function drawSplitIcon(ctx) {
        if (isTouchStart && splitIcon.width) {
            var size = ~~(canvasWidth / 7);
            ctx.drawImage(splitIcon, canvasWidth - size, canvasHeight - size, size, size);
        }

        if (isTouchStart && splitIcon.width) {
            var size = ~~(canvasWidth / 7);
            ctx.drawImage(ejectIcon, canvasWidth - size, canvasHeight - 2 * size - 10, size, size);
        }
    }

    function drawLeaderBoard() {
        lbCanvas = 노바보;
        var drawTeam = 노바보 != teamScores;
        if (drawTeam || 0 != leaderBoard.length)
            if (drawTeam || showName) {
                lbCanvas = doc.createElement("Canvas");
                var ctx = lbCanvas.getContext("2d"),
                    boardLength = 82;
                boardLength = !drawTeam ? boardLength + 24 * leaderBoard.length : boardLength + 180;
                var scaleFactor = Math.min(0.22 * canvasHeight, Math.min(200, .3 * canvasWidth)) * 0.005;
                lbCanvas.width = 200 * scaleFactor;
                lbCanvas.height = boardLength * scaleFactor;

                ctx.scale(scaleFactor, scaleFactor);
								if (showDarkTheme) {
									ctx.globalAlpha = .2;
									ctx.fillStyle = "#ffffff";
								} else {
									ctx.globalAlpha = .5;
									ctx.fillStyle = "#000000";
								}
                ctx.fillRect(0, 0, 200, boardLength);

                ctx.globalAlpha = 1;
                ctx.fillStyle = "#cfb7ff";
                var c = "Amaras";
                ctx.font = "40px Raleway";
                ctx.fillText(c, 100 - ctx.measureText(c).width * 0.5, 40);
                var b, l;
                if (!drawTeam) {
									var LEADLENG = leaderBoard.length;
                    for (ctx.font = "20px Raleway, Nanum Gothic", b = 0, l = LEADLENG; b < l; ++b) {
                        c = leaderBoard[b].name || "An unnamed cell";
                        if (!showName) {
                            (c = "An unnamed cell");
                        }
                        var me = N != nodesOnScreen.indexOf(leaderBoard[b].id);
                        if (me) playerCells[0].name && (c = playerCells[0].name);
                        me ? ctx.fillStyle = "#FFAAAA" : ctx.fillStyle = "#FFFFFF";
                        if (!noRanking) c = b + 1 + ". " + c;
                        var start = (ctx.measureText(c).width > 200) ? 2 : 100 - ctx.measureText(c).width * 0.5;
                        ctx.fillText(c, start, 70 + 24 * b);
                    }
										ctx.fillStyle = "#ffffff";
										var NDX = "X: " + ~~nodeX;
										var NDY = "Y: " + ~~nodeY;
										ctx.globalAlpha = 1;
										ctx.font = "12px Raleway";
										ctx.fillText(NDX, 60 - ctx.measureText(NDX).width * 0.5, 315);
										ctx.fillText(NDY, 140 - ctx.measureText(NDY).width * 0.5, 315);
                } else {
									var TEAMLENG = teamScores.length;
                  for (b = c = 0; b < TEAMLENG; ++b) {
                    	var d = c + teamScores[b] * Math.PI * 2;
                      ctx.fillStyle = teamColor[b + 1];
                      ctx.beginPath();
                      ctx.moveTo(100, 140);
                      ctx.arc(100, 140, 80, c, d, false);
                      ctx.fill();
                      c = d
                  }
              }
          }
    }

	function drawSkin(skins) {
		if (skins.src !== getSkin.value) {
			skins.src = getSkin.value;
		}
	}

    function Cell(uid, ux, uy, usize, ucolor, uname, a) {
        this.id = uid;
        this.ox = this.x = ux;
        this.oy = this.y = uy;
				if (showEffect) {
					if (showQuality == 0) {
						if (userScore > 5000)
						this.oSize = this.size = usize;
					} else if (showQuality == 1) {
						if (userScore > 6000)
						this.oSize = this.size = usize;
					} else if (showQuality == 2) {
						if (userScore > 7000)
						this.oSize = this.size = usize;
					} else if (showQuality == 3) {
						if (userScore > 8000)
						this.oSize = this.size = usize;
					} else {
						this.oSize = this.size = usize / 5;
					}
				} else {
					this.oSize = this.size = usize;
				}
				if (RedCellColors != 0 || GreenCellColors != 0 || BlueCellColors != 0) {
					this.color = SetColor();
				} else {
					this.color = SetColor(ucolor);
				}
        this.points = [];
        this.pointsAcc = [];
        this.DrawPoint();
        this.DrawName(uname)
        this.Ping = a;
    }

    function UText(usize, ucolor, ustroke, ustrokecolor) {
        usize && (this._size = usize);
        ucolor && (this._color = ucolor);
        this._stroke = !!ustroke;
				ustrokecolor && (this._strokeColor = ustrokecolor)
    }

    if (노바보 != Win.localStorage) {
        $(doc).ready(function() {
            $(".save").each(function () {
                var id = $(this).data("box-id");
                var value = Win.localStorage.getItem("checkbox-" + id);
                if (value && value == "true" && 0 != id && 40 != id && 15 != id && 16 != id && 17 != id && 18 != id && 19 != id && 20 != id && 21 != id && 22 != id && 23 != id && 24 != id && 25 != id && 26 != id) {
                    $(this).prop("checked", "true");
                    $(this).trigger("change");
                } else if (id == 0 && value != 노바보) {
                    $(this).val(value);
                } else if (id == 40 && value != 노바보) {
										$(this).val(value);
								} else if (id == 15 && value != 노바보) {
										$(this).val(value);
									showQuality = value;
								} else if (id == 16 && value != 노바보) {
										$(this).val(value);
										showAlpha = value;
								} else if (id == 17 && value != 노바보) {
										$(this).val(value);
										showZoom = value;
								} else if (id == 18 && value != 노바보) {
										$(this).val(value);
										RedCellColors = value;
								} else if (id == 19 && value != 노바보) {
										$(this).val(value);
										GreenCellColors = value;
								} else if (id == 20 && value != 노바보) {
										$(this).val(value);
										BlueCellColors = value;
								} else if (id == 21 && value != 노바보) {
										$(this).val(value);
										LineWidth = value;
								} else if (id == 22 && value != 노바보) {
										$(this).val(value);
								} else if (id == 23 && value != 노바보) {
										$(this).val(value);
								} else if (id == 24 && value != 노바보) {
										$(this).val(value);
								} else if (id == 25 && value != 노바보) {
										$(this).val(value);
								} else if (id == 26 && value != 노바보) {
										$(this).val(value);
										ChatTime = value;
								}
            });

            $(".save").change(function () {
                var id = $(this).data('box-id');
                var value = (id == 0 || id == 40 || id == 15 || id == 16 || id == 17 || id == 18 || id == 19 || id == 20 || id == 21 || id == 22 || id == 23 || id == 24 || id == 25 || id == 26) ? $(this).val() : $(this).prop('checked');
                Win.localStorage.setItem("checkbox-" + id, value);
            });
        });

        if (노바보 == Win.localStorage.AB8) {
            Win.localStorage.AB8 = ~~(100 * Math.random());
        }
    }

    Cell.prototype = {
        id: 0,
        x: 0,
        y: 0,
        size: 0,
        ox: 0,
        oy: 0,
        oSize: 0,
        nx: 0,
        ny: 0,
        nSize: 0,
        flag: 0,
        updateTime: 0,
        updateCode: 0,
        drawTime: 0,
				points: 노바보,
        pointsAcc: 노바보,
        name: 노바보,
        nameCache: 노바보,
        sizeCache: 노바보,
        destroyed: false,
        isVirus: false,
        isEjected: false,
        isAgitated: false,
        DrawSimple: true,

        Delete: function () {
            var tmp;
						var len;
            for (tmp = 0, len = nodelist.length; tmp < len; tmp++)
                if (nodelist[tmp] === this) {
                    nodelist.splice(tmp, 1);
                    break
                }
            delete nodes[this.id];
            tmp = playerCells.indexOf(this);
            if (N != tmp) {
                ua = true;
                playerCells.splice(tmp, 1);
            }
            tmp = nodesOnScreen.indexOf(this.id);
            if (N != tmp) nodesOnScreen.splice(tmp, 1);
            this.destroyed = true;
						Cells.push(this)
        },
        DrawNameSize: function () {
            return Math.max(~~(.3 * this.size), 24)
        },
        DrawName: function (a) {
            this.name = a;
            if (노바보 == this.nameCache) {
                this.nameCache = new UText(this.DrawNameSize(), "#FFFFFF", true, "#000000");
                this.nameCache.DrawValue(this.name);
            } else {
                this.nameCache.DrawSize(this.DrawNameSize());
                this.nameCache.DrawValue(this.name);
            }
        },
        DrawSize: function (a) {
            this.nSize = a;
            var m = ~~(this.size * this.size * 0.01);
            if (노바보 === this.sizeCache)
                this.sizeCache = new UText(this.DrawNameSize() * 0.5, "#FFFFFF", true, "#000000");
            else this.sizeCache.DrawSize(this.DrawNameSize() * 0.6);
        },
        DrawPoint: function () {
            for (var samplenum = this.DrawNumberPoint(); this.points.length > samplenum;) {
                var rand = ~~(Math.random() * this.points.length);
                this.points.splice(rand, 1);
                this.pointsAcc.splice(rand, 1)
            }
            if (0 == this.points.length && 0 < samplenum) {
                this.points.push({
                    ref: this,
                    size: this.size,
                    x: this.x,
                    y: this.y
                });
                this.pointsAcc.push(Math.random() - .5);
            }
            while (this.points.length < samplenum) {
                var rand2 = ~~(Math.random() * this.points.length),
                    point = this.points[rand2];
                this.points.splice(rand2, 0, {
                    ref: this,
                    size: point.size,
                    x: point.x,
                    y: point.y
                });
                this.pointsAcc.splice(rand2, 0, this.pointsAcc[rand2])
            }
        },
        DrawNumberPoint: function () {
            if (0 == this.id) return 16;
            var a = 10;
            if (20 > this.size) a = 0;
            if (this.isVirus) a = 30;

						if (showQuality == 0) {
							var b = this.size / 8;
						} else if (showQuality == 1) {
							var b = this.size / 4;
						} else if (showQuality == 2) {
							var b = this.size / 2;
						} else if (showQuality == 3) {
							var b = this.size / 1.5;
						} else if (showQuality == 4) {
							var b = this.size;
						} else if (showQuality == 5) {
							var b = this.size * 1.2;
						} else if (showQuality == 6) {
							var b = this.size * 1.5;
						} else if (showQuality == 7) {
							var b = this.size * 2;
						}

            if (!this.isVirus)(b *= viewZoom);
            b *= 1;
            if (this.flag & 32)(b *= 0.25);
            return ~~Math.max(b, a);
        },
        DrawMovePoint: function () {
            this.DrawPoint();
            for (var points = this.points, pointsacc = this.pointsAcc, numpoints = points.length, i = 0; i < numpoints; ++i) {
                var pos1 = pointsacc[(i - 1 + numpoints) % numpoints],
                    pos2 = pointsacc[(i + 1) % numpoints];
                pointsacc[i] += (Math.random() - .5) * (this.isAgitated ? 3 : 1);
                pointsacc[i] *= .7;
                10 < pointsacc[i] && (pointsacc[i] = 10); -
                10 > pointsacc[i] && (pointsacc[i] = -10);
                pointsacc[i] = (pos1 + pos2 + 8 * pointsacc[i]) / 10
            }
            for (var ref = this, isvirus = this.isVirus ? 0 : (this.id / 1E3 + timestamp / 1E4) % (2 * Math.PI), j = 0; j < numpoints; ++j) {
                var f = points[j].size,
                    e = points[(j - 1 + numpoints) % numpoints].size,
                    m = points[(j + 1) % numpoints].size;
                if (15 < this.size && 노바보 != qTree && 20 < this.size * viewZoom && 0 != this.id) {
                    var l = false,
                        n = points[j].x,
                        q = points[j].y;
                    qTree.retrieve2(n - 5, q - 5, 10, 10, function (a) {
                        if (a.ref != ref && 25 > (n - a.x) * (n - a.x) + (q - a.y) * (q - a.y)) {
                            l = true;
                        }
                    });
                    if (!l && points[j].x < leftPos || points[j].y < topPos || points[j].x > rightPos || points[j].y > bottomPos) {
                        l = true;
                    }
                    if (l) {
                        if (0 < pointsacc[j]) {
                            (pointsacc[j] = 0);
                        }
                        pointsacc[j] -= 1;
                    }
                }
                f += pointsacc[j];
                0 > f && (f = 0);
                f = this.isAgitated ? (19 * f + this.size) / 20 : (12 * f + this.size) / 13;
                points[j].size = (e + m + 8 * f) / 10;
                e = 2 * Math.PI / numpoints;
                m = this.points[j].size;
                this.isVirus && 0 == j % 2 && (m += 5);
                points[j].x = this.x + Math.cos(e * j + isvirus) * m;
                points[j].y = this.y + Math.sin(e * j + isvirus) * m
            }
        },
        DrawPos: function () {
            if (0 == this.id) return 1;
            var a;

						if (showQuality == 0) {
							a = (timestamp - this.updateTime) / 100;
						} else if (showQuality == 1) {
							a = (timestamp - this.updateTime) / 110;
						} else if (showQuality == 2) {
							a = (timestamp - this.updateTime) / 130;
						} else if (showQuality == 3) {
							a = (timestamp - this.updateTime) / 150;
						} else if (showQuality == 4) {
							a = (timestamp - this.updateTime) / 180;
						} else if (showQuality == 5) {
							a = (timestamp - this.updateTime) / 200;
						} else if (showQuality == 6) {
							a = (timestamp - this.updateTime) / 220;
						} else if (showQuality == 7) {
							a = (timestamp - this.updateTime) / 300;
						}

            a = 0 > a ? 0 : 1 < a ? 1 : a;
            var b = 0 > a ? 0 : 1 < a ? 1 : a;
            this.DrawNameSize();
            if (this.destroyed && 1 <= b) {
                var c = Cells.indexOf(this); -
                1 != c && Cells.splice(c, 1)
            }
            this.x = a * (this.nx - this.ox) + this.ox;
            this.y = a * (this.ny - this.oy) + this.oy;
            this.size = b * (this.nSize - this.oSize) + this.oSize;
            return b;
        },
        DrawRender: function () {
            if (0 == this.id) {
                return true
            } else {
                return !(this.x + this.size + 40 < nodeX - canvasWidth / 2 / viewZoom || this.y + this.size + 40 < nodeY - canvasHeight / 2 / viewZoom || this.x - this.size - 40 > nodeX + canvasWidth / 2 / viewZoom || this.y - this.size - 40 > nodeY + canvasHeight / 2 / viewZoom);
            }
        },
        DrawCellImage: function (ctx) {
						if (!this.isVirus && this.size < 100 && !this.name) {
							if (showQuality == 0) {
								if (userScore > 4000) return false;
							} else if (showQuality == 1) {
								if (userScore > 5000) return false;
							} else if (showQuality == 2) {
								if (userScore > 6000) return false;
							} else if (showQuality == 3) {
								if (userScore > 7000) return false;
							}
						}

            if (this.DrawRender()) {
                var b = (0 != this.id && !this.isVirus && !this.isAgitated);
                if (10 > this.DrawNumberPoint()) b = true;
                if (this.DrawSimple && !b)
                    for (var c = 0; c < this.points.length; c++) this.points[c].size = this.size;
                var bigPointSize = this.size;
                if (!this.DrawSimple) {
                    for (var c = 0; c < this.points.length; c++) bigPointSize = Math.max(this.points[c].size, bigPointSize);
                }
                this.DrawSimple = b;
                ctx.save();
                this.drawTime = timestamp;
                c = this.DrawPos();
                this.destroyed && (ctx.globalAlpha *= 1 - c);
								if (smoothRender) {
									ctx.lineWidth = 0.1;
								} else {
									ctx.lineWidth = 3 + (LineWidth * 10);
								}
                ctx.lineCap = "round";
                ctx.lineJoin = this.isVirus ? "miter" : "round";
                if (showColor) {
									if (showDarkTheme) {
										ctx.fillStyle = "#FFFFFF";
										ctx.strokeStyle = "#AAAAAA";
									} else {
										ctx.fillStyle = "#000000";
										ctx.strokeStyle = "#AAAAAA";
									}
                } else {
									if (RedCellColors != 0 || GreenCellColors != 0 || BlueCellColors != 0) {
										ctx.fillStyle = SetColor();
										ctx.strokeStyle = SetColor();
									} else {
										ctx.fillStyle = SetColor(this.color);
										ctx.strokeStyle = SetColor(this.color);
									}
                }

								ctx.beginPath();

								if (b) {
									ctx.lineWidth = 0;
									ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
									ctx.stroke();
                } else {
                    this.DrawMovePoint();
                    ctx.beginPath();
                    var d = this.DrawNumberPoint();
                    ctx.moveTo(this.points[0].x, this.points[0].y);
                    for (c = 1; c <= d; ++c) {
                        var e = c % d;
                        ctx.lineTo(this.points[e].x, this.points[e].y);
                    }
                }

							ctx.closePath();

						  var skinName = this.name.toLowerCase();

              if (typeof this.Ping != 'undefined' && this.Ping != '') {
                  if (this.Ping[0] == '%') {
                      skinName = this.Ping.substring(1);
                  }
              }

							if (this.name == userNickName && getSkin.value.match(/https?:\/\/[\w\.\?\/&#%=-_\+]+.(?:jpg|jpeg|gif|png)$/g)) {
								if (getSkin.value !== "") {
									skins[skinName] = new Image;
									skins[skinName].src = getSkin.value;
									drawSkin(skins[skinName])
								}

                if (0 != skins[skinName].width && skins[skinName].complete) {
                    c = skins[skinName];
                } else {
                    c = 노바보;
                }
            	} else {
                c = 노바보;
            	}

                b || ctx.stroke();
								ctx.globalAlpha = showAlpha;
                ctx.fill();

                if (c) {
                    ctx.save();
                    ctx.clip();
                    ctx.drawImage(c, this.x - bigPointSize, this.y - bigPointSize, 2 * bigPointSize, 2 * bigPointSize);
                    ctx.restore();
                }
                if ((showColor || 15 < this.size) && !b) {
                    ctx.strokeStyle = '#000000';
                    ctx.globalAlpha *= .1;
                    ctx.stroke();
                }

								ctx.globalAlpha = 1;

                c = N != playerCells.indexOf(this);
                var ncache;

                if (0 != this.id) {
                    var x = ~~this.x,
                        y = ~~this.y,
                        nz = this.DrawNameSize(),
                        ratio = Math.ceil(10 * viewZoom) * 0.1,
                        ratD = 1 / ratio;
                    if ((showName || c) && this.name && this.nameCache && (노바보 == e)) {
                        if (showName) {
													ncache = this.nameCache;
													ncache.DrawValue(this.name);
													ncache.DrawSize(nz);
													ncache.DrawScale(ratio);
													var rnchache = ncache.Rendering(),
														m = ~~(rnchache.width * ratD),
														h = ~~(rnchache.height * ratD);
													ctx.drawImage(rnchache, x - ~~(m * 0.5), y - ~~(h * 0.5), m, h);
													b += rnchache.height * 0.5 * ratio + 4;
												}
											}

                    if (showMass && (!this.isVirus) && this.size > 100 && this.name) {
                        var m = ~~(this.size * this.size / 100);
												if (m > 10000) {
													m = (m / 1000).toFixed(1) + 'k';
												} else if (m > 1000) {
													m = (m / 1000).toFixed(2) + 'k';
												}
                        c = this.sizeCache;
                        c.DrawValue(m);
                        c.DrawScale(ratio);
                        e = c.Rendering();
                        m = ~~(e.width * ratD);
                        h = ~~(e.height * ratD);
                        var g = this.name ? y + ~~(h * 0.7) : y - ~~(h * 0.5);
                        ctx.drawImage(e, x - ~~(m * 0.5), g, m, h);
                    }
                }
                ctx.restore();
            }
        }
    };

    UText.prototype = {
        _value: "",
        _color: "#000000",
        _stroke: false,
        _strokeColor: "#000000",
        _size: 16,
        _canvas: 노바보,
        _ctx: 노바보,
        _dirty: false,
        _scale: 1,
        DrawSize: function (a) {
            if (this._size != a) {
                this._size = a;
                this._dirty = true;
            }
        },
        DrawScale: function (a) {
            if (this._scale != a) {
                this._scale = a;
                this._dirty = true;
            }
        },
        DrawColor: function (a) {
            if (this._strokeColor != a) {
                this._strokeColor = a;
                this._dirty = true;
            }
        },
        DrawValue: function (a) {
            if (a != this._value) {
                this._value = a;
                this._dirty = true;
            }
        },
        Rendering: function () {
            if (노바보 == this._canvas) {
                this._canvas = doc.createElement("Canvas");
                this._ctx = this._canvas.getContext("2d");
            }
            if (this._dirty) {
                this._dirty = false;
                var canvas = this._canvas,
                    ctx = this._ctx,
                    value = this._value,
                    scale = this._scale,
                    fontsize = this._size,
                    font = fontsize + 'px Raleway, Nanum Gothic';
                ctx.font = font;
                var h = ~~(.2 * fontsize),
                    wd = fontsize * 0.1;
                var h2 = h * 0.5;
                canvas.width = ctx.measureText(value).width * scale + 3;
                canvas.height = (fontsize + h) * scale;
                ctx.font = font;
                ctx.globalAlpha = 1;
                ctx.lineWidth = wd;
                ctx.strokeStyle = this._strokeColor;
                ctx.fillStyle = this._color;
                ctx.scale(scale, scale);
                this._stroke && ctx.strokeText(value, 0, fontsize - h2);
                ctx.fillText(value, 0, fontsize - h2);
            }
            return this._canvas
        },
        DrawWidth: function () {
            return (ctx.measureText(this._value).width + 6);
        }
    };

    Date.now || (Date.now = function () {
        return (new Date).getTime()
    });

    var Quad = {
        init: function (args) {
            function Node(x, y, w, h, depth) {
                this.x = x;
                this.y = y;
                this.w = w;
                this.h = h;
                this.depth = depth;
                this.items = [];
                this.nodes = []
            }

            var c = args.maxChildren || 2,
                d = args.maxDepth || 4;

            Node.prototype = {
                x: 0,
                y: 0,
                w: 0,
                h: 0,
                depth: 0,
                items: 노바보,
                nodes: 노바보,
                exists: function (selector) {
                    for (var i = 0; i < this.items.length; ++i) {
                        var item = this.items[i];
                        if (item.x >= selector.x && item.y >= selector.y && item.x < selector.x + selector.w && item.y < selector.y + selector.h) return true
                    }
                    if (0 != this.nodes.length) {
                        var self = this;
                        return this.OverlapNodes(selector, function (dir) {
                            return self.nodes[dir].exists(selector)
                        })
                    }
                    return false;
                },
                retrieve: function (item, callback) {
                    for (var i = 0; i < this.items.length; ++i) callback(this.items[i]);
                    if (0 != this.nodes.length) {
                        var self = this;
                        this.OverlapNodes(item, function (dir) {
                            self.nodes[dir].retrieve(item, callback)
                        })
                    }
                },
                insert: function (a) {
                    if (0 != this.nodes.length) {
                        this.nodes[this.findInsertNode(a)].insert(a);
                    } else {
                        if (this.items.length >= c && this.depth < d) {
                            this.devide();
                            this.nodes[this.findInsertNode(a)].insert(a);
                        } else {
                            this.items.push(a);
                        }
                    }
                },
                findInsertNode: function (a) {
                    return a.x < this.x + this.w / 2 ? a.y < this.y + this.h / 2 ? 0 : 2 : a.y < this.y + this.h / 2 ? 1 : 3
                },
                OverlapNodes: function (a, b) {
                    return a.x < this.x + this.w / 2 && (a.y < this.y + this.h / 2 && b(0) || a.y >= this.y + this.h / 2 && b(2)) || a.x >= this.x + this.w / 2 && (a.y < this.y + this.h / 2 && b(1) || a.y >= this.y + this.h / 2 && b(3)) ? true : false
                },
                devide: function () {
                    var a = this.depth + 1,
                        c = this.w / 2,
                        d = this.h / 2;
                    this.nodes.push(new Node(this.x, this.y, c, d, a));
                    this.nodes.push(new Node(this.x + c, this.y, c, d, a));
                    this.nodes.push(new Node(this.x, this.y + d, c, d, a));
                    this.nodes.push(new Node(this.x + c, this.y + d, c, d, a));
                    a = this.items;
                    this.items = [];
                    for (c = 0; c < a.length; c++) this.insert(a[c])
                },
                clear: function () {
                    for (var a = 0; a < this.nodes.length; a++) this.nodes[a].clear();
                    this.items.length = 0;
                    this.nodes.length = 0
                }
            };
            var internalSelector = {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            };
            return {
                root: new Node(args.minX, args.minY, args.maxX - args.minX, args.maxY - args.minY, 0),
                insert: function (a) {
                    this.root.insert(a)
                },
                retrieve: function (a, b) {
                    this.root.retrieve(a, b)
                },
                retrieve2: function (a, b, c, d, callback) {
                    internalSelector.x = a;
                    internalSelector.y = b;
                    internalSelector.w = c;
                    internalSelector.h = d;
                    this.root.retrieve(internalSelector, callback)
                },
                exists: function (a) {
                    return this.root.exists(a)
                },
                clear: function () {
                    this.root.clear()
                }
            }
        }
    };
})(window, window.jQuery);
