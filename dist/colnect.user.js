// ==UserScript==
// @name         collector :: colnect.com
// @namespace    https://colnect.com/
// @version      1.2.9
// @author       danikas2k2
// @license      ISC
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB6UlEQVQ4jdWSTUhUcRTFf/c/b8ZyMUW5qhZF1MaNZF8qge2siGxR29o48wZ1EW1bqGCt2hTWvCGKaNenEFgEIwXiWKK7FhEtMoQKtbSEGN/8T4sUxI82rbqrC+eewzmHC//92NJSn4lqkk7dDk56eD6SDzMAxzqvVX2Lqy46dE5il8Fnj574RKXnTV/HdADQlM3v96anQFow64w0QO2Z+6nvCzMvQJtkPAK9kiw27EKiEpSOdN5uChoz0W5vKoJNWmLh8HBf+0RzV3cCIL11OgO23bBbeI2Wolzxj18NNoaF/jguX3FyugykMcsN93V8BNPLrq54MWGrsHsmzZWisLgsubzZdROnHNACaMfU5qE1Oqp28BPTw1VIRT8E1cFikTZRM1UHjAEcbCvstSDegGdIpuOlfO7qqvadb0U2ZA1h/jFwGmPexLDENoxamZ1PBsmBeKE8DtZf9lwaK2Rn6zNRMmkKzeiVt2ZnKAQ9Q2wUqsPxzokTIzezdxX/ihED4PelnL40hPkPKacZM9pwrmWkkB23ldaW+UV1KqFBRF3sKnsC77xgp2RfX0fh+6W7YG26LOWiO4hDGD2jN9o/LQKTKy/dWvTGMH8U44BhY3NTW3rXc7mugHBNJhUrsWt9++Bs+W8C/zy/AT3Myy3qczVrAAAAAElFTkSuQmCC
// @homepage     https://bitbucket.org/danikas2k2/ucoin.userscripts#readme
// @homepageURL  https://bitbucket.org/danikas2k2/ucoin.userscripts#readme
// @source       https://danikas2k2@bitbucket.org/danikas2k2/ucoin.userscripts.git
// @downloadURL  https://raw.githubusercontent.com/danikas2k2/tampermonkey-colnect/master/dist/colnect.user.js
// @updateURL    https://raw.githubusercontent.com/danikas2k2/tampermonkey-colnect/master/dist/colnect.user.js
// @match        https://*.colnect.com/*/coins/*
// @match        https://*.colnect.com/*/banknotes/*
// @match        https://*.colnect.com/*/stamps/*
// @match        https://*.colnect.com/*/medals/*
// @match        https://*.colnect.com/*/tokens/*
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
var d = new Set();
	var _virtual_monkey_css_side_effects_default = async (e) => {
		d.has(e) || (d.add(e), ((t) => {
			typeof GM_addStyle == "function" ? GM_addStyle(t) : (document.head || document.documentElement).appendChild(document.createElement("style")).append(t);
		})(e));
	};

_virtual_monkey_css_side_effects_default("#quality_list{visibility:visible;opacity:1;width:auto;padding:0 1px;display:flex}#quality_list li{flex:0 0 32px;width:32px;overflow:hidden}#quality_list li+li{margin-left:1px}#quality_list li:first-child a:before{content:\"- \"}#quality_list li a{white-space:normal;text-align:center;width:16px;height:32px;margin:0;padding:0 8px;line-height:32px}#quality_list li a.pop_selected,#quality_list li a:hover{border-top:1px solid #fff;border-bottom:1px solid #fff;width:20px;padding:0 6px;font-size:14px}#quality_list li a[data-value=\"-1\"]{color:#dee5f2;background:#5a6986}#quality_list li a[data-value=\"-2\"]{color:#fde9f4;background:#854f61}#quality_list li a[data-value=\"0\"]{color:#242633;background:#eee}.coins #quality_list li a[data-value=\"1\"],.tokens #quality_list li a[data-value=\"1\"]{color:#ffe3e3;background:#c00}.coins #quality_list li a[data-value=\"2\"],.tokens #quality_list li a[data-value=\"2\"]{color:#fff0e1;background:#ec7000}.coins #quality_list li a[data-value=\"3\"],.tokens #quality_list li a[data-value=\"3\"]{color:#fadcb3;background:#b36d00}.coins #quality_list li a[data-value=\"4\"],.tokens #quality_list li a[data-value=\"4\"]{color:#f3e7b3;background:#ab8b00}.coins #quality_list li a[data-value=\"5\"],.tokens #quality_list li a[data-value=\"5\"]{color:#ffffd4;background:#636330}.coins #quality_list li a[data-value=\"6\"],.tokens #quality_list li a[data-value=\"6\"]{color:#f9ffef;background:#64992c}.coins #quality_list li a[data-value=\"7\"],.tokens #quality_list li a[data-value=\"7\"]{color:#f1f5ec;background:#063}.coins #quality_list li a[data-value=\"8\"],.tokens #quality_list li a[data-value=\"8\"]{color:#e0ecff;background:#206cff}.coins #quality_list li a[data-value=\"9\"],.tokens #quality_list li a[data-value=\"9\"]{color:#dfe2ff;background:#00c}.coins #quality_list li a[data-value=\"10\"],.tokens #quality_list li a[data-value=\"10\"]{color:#e0d5f9;background:#5229a3}.coins #quality_list li:last-child a,.tokens #quality_list li:last-child a,.coins #quality_list li:nth-last-child(3) a,.tokens #quality_list li:nth-last-child(3) a,.coins #quality_list li:last-child a.pop_selected,.tokens #quality_list li:last-child a.pop_selected,.coins #quality_list li:nth-last-child(3) a.pop_selected,.tokens #quality_list li:nth-last-child(3) a.pop_selected,.coins #quality_list li:last-child a:hover,.tokens #quality_list li:last-child a:hover,.coins #quality_list li:nth-last-child(3) a:hover,.tokens #quality_list li:nth-last-child(3) a:hover{width:32px;padding:0}.medals #quality_list li a[data-value=\"1\"]{color:#ffe3e3;background:#c00}.medals #quality_list li a[data-value=\"2\"]{color:#f3e7b3;background:#ab8b00}.medals #quality_list li a[data-value=\"3\"]{color:#f9ffef;background:#64992c}.medals #quality_list li a[data-value=\"4\"]{color:#f1f5ec;background:#063}.medals #quality_list li a[data-value=\"5\"]{color:#dfe2ff;background:#00c}.banknotes #quality_list li a[data-value=\"1\"]{color:#ffe3e3;background:#c00}.banknotes #quality_list li a[data-value=\"2\"]{color:#fff0e1;background:#ec7000}.banknotes #quality_list li a[data-value=\"3\"]{color:#fadcb3;background:#b36d00}.banknotes #quality_list li a[data-value=\"4\"]{color:#f3e7b3;background:#ab8b00}.banknotes #quality_list li a[data-value=\"5\"]{color:#ffffd4;background:#636330}.banknotes #quality_list li a[data-value=\"6\"]{color:#f9ffef;background:#64992c}.banknotes #quality_list li a[data-value=\"7\"]{color:#f1f5ec;background:#063}.banknotes #quality_list li a[data-value=\"8\"]{color:#e0ecff;background:#206cff}.banknotes #quality_list li a[data-value=\"9\"]{color:#dfe2ff;background:#00c}.banknotes #quality_list li:last-child a,.banknotes #quality_list li:last-child a.pop_selected,.banknotes #quality_list li:last-child a:hover{width:32px;padding:0}.banknotes #quality_list li:nth-last-child(2) a:before{content:\"AU \"}.stamps #quality_list li a[data-value=\"1\"]{color:#f1f5ec;background:#063}.stamps #quality_list li a[data-value=\"2\"]{color:#f9ffef;background:#64992c}.stamps #quality_list li a[data-value=\"3\"]{color:#ffffd4;background:#636330}.stamps #quality_list li a[data-value=\"4\"]{color:#f3e7b3;background:#ab8b00}.stamps #quality_list li:nth-last-child(2) a,.stamps #quality_list li:nth-last-child(5) a,.stamps #quality_list li:nth-last-child(2) a.pop_selected,.stamps #quality_list li:nth-last-child(5) a.pop_selected,.stamps #quality_list li:nth-last-child(2) a:hover,.stamps #quality_list li:nth-last-child(5) a:hover{width:32px;padding:0}.stamps #quality_list li:nth-last-child(3) a{width:28px;padding:0 2px}.stamps #quality_list li:nth-last-child(3) a.pop_selected,.stamps #quality_list li:nth-last-child(3) a:hover{width:32px;padding:0}");
	var loc = document.location.href;
	var type = ((loc) => {
		if (loc.includes("/coins/")) return "coins";
		if (loc.includes("/banknotes/")) return "banknotes";
		if (loc.includes("/stamps/")) return "stamps";
		if (loc.includes("/medals/")) return "medals";
		if (loc.includes("/tokens/")) return "tokens";
		return "other";
	})(loc);
	$("body").addClass(type);
	var itemFullDetails = $("#item_full_details");
	var itemCondition = $(`> .ibox > .ibox_list[data-lt="2"] .pop.condition`, itemFullDetails);
	var { updateQC: _updateQC, spanCBup: _spanCBup } = Inventory;
	if (type === "coins" && loc.includes("/coin/")) {
		const itemYearVariants = $(`> .year_variants > ul > li[data-id]`, itemFullDetails);
		let currentPopCondition;
		const mouseOverCondition = (li) => {
			const popCondition = $(".ibox_list[data-lt=\"2\"] > .pop.condition", li);
			if (popCondition) popCondition.trigger("mouseover");
			return popCondition;
		};
		itemYearVariants.each((i, itemYearVariant) => {
			$(itemYearVariant).on("click", (e) => {
				currentPopCondition = mouseOverCondition($(e.currentTarget));
			});
		});
		const _q = {
			P: 1,
			FA: 2,
			G: 3,
			VG: 4,
			FI: 5,
			VF: 6,
			XF: 7,
			UNC: 8,
			BU: 9,
			FDC: 10
		};
		const q = (s) => s && s in _q ? _q[s] : 0;
		const qualityList = $("#quality_list");
		const updateOverallCondition = (e, current) => {
			const variants = [];
			itemYearVariants.each((i, n) => {
				const qn = ($("ul.oth_inv", n).text().split(":", 2).pop() ?? "").trim();
				variants.push(n.classList.contains("open") ? current : q(qn));
			});
			const best = Math.max(...variants);
			if (best && best !== q(itemCondition.text())) {
				itemCondition.trigger("mouseover");
				_updateQC(e, $(`#quality_list a[data-value="${best}"]`, itemCondition)[0]);
				if (currentPopCondition && currentPopCondition.length) currentPopCondition.trigger("mouseover");
				else itemCondition.trigger("mouseout");
			}
		};
		Inventory.updateQC = (e, n) => {
			const _r = _updateQC(e, n);
			updateOverallCondition(e, +$("a[data-value]", n).data("value"));
			return _r;
		};
		Inventory.spanCBup = (n) => {
			const _r = _spanCBup(n);
			if (n.classList.contains("cb_checked")) updateOverallCondition(event, 0, null);
			else itemCondition.trigger("mouseover");
			return _r;
		};
		$("li", qualityList).off("click").on("click", (e) => Inventory.updateQC(e, e.currentTarget));
	} else Inventory.spanCBup = (n) => {
		const _r = _spanCBup(n);
		if (!n.classList.contains("cb_checked")) itemCondition.trigger("mouseover");
		return _r;
	};
})();