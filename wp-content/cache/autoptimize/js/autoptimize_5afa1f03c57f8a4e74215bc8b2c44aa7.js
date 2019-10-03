/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b, c) {
        function d(c) {
            var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
        }

        function e(b, c, e, f) {
            if (Object.defineProperty) try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(f), e
                    },
                    set: function(a) {
                        d(f), e = a
                    }
                })
            } catch (g) {}
            a._definePropertyBroken = !0, b[c] = e
        }
        a.migrateVersion = "1.4.1";
        var f = {};
        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
            f = {}, a.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
        var g = a("<input/>", {
                size: 1
            }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function() {
                return null
            },
            j = a.attrHooks.value && a.attrHooks.value.set || function() {
                return c
            },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
            var j = e.toLowerCase(),
                o = b && b.nodeType;
            return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                get: function(b, d) {
                    var e, f = a.prop(b, d);
                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                },
                set: function(b, c, d) {
                    var e;
                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                }
            }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
        }, a.attrHooks.value = {
            get: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
            },
            set: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
            }
        };
        var o, p, q = a.fn.init,
            r = a.find,
            s = a.parseJSON,
            t = /^\s*</,
            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function(b, e, f) {
            var g, h;
            return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
        }, a.fn.init.prototype = a.fn, a.find = function(a) {
            var b = Array.prototype.slice.call(arguments);
            if ("string" == typeof a && u.test(a)) try {
                document.querySelector(a)
            } catch (c) {
                a = a.replace(v, function(a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
                } catch (e) {
                    d("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
            return r.apply(this, b)
        };
        var x;
        for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
        a.parseJSON = function(a) {
            return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
        }, a.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
            function b(a, c) {
                return new b.fn.init(a, c)
            }
            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
                var f = a.fn.init.call(this, d, e, c);
                return f instanceof b ? f : b(f)
            }, b.fn.init.prototype = b.fn;
            var c = b(document);
            return d("jQuery.sub() is deprecated"), b
        }, a.fn.size = function() {
            return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
        };
        var y = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
            var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function() {
                var a;
                return y = !0, a = d.apply(this, arguments), y = !1, a
            })
        }), a.swap = function(a, b, c, e) {
            var f, g, h = {};
            y || d("jQuery.swap() is undocumented and deprecated");
            for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = c.apply(a, e || []);
            for (g in b) a.style[g] = h[g];
            return f
        }, a.ajaxSetup({
            converters: {
                "text json": a.parseJSON
            }
        });
        var z = a.fn.data;
        a.fn.data = function(b) {
            var e, f, g = this[0];
            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
        };
        var A = /\/(java|ecma)script/i;
        a.clean || (a.clean = function(b, c, e, f) {
            c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
            var g, h, i, j, k = [];
            if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                for (i = function(a) {
                        return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
                    }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
            return k
        });
        var B = a.event.add,
            C = a.event.remove,
            D = a.event.trigger,
            E = a.fn.toggle,
            F = a.fn.live,
            G = a.fn.die,
            H = a.fn.load,
            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            J = new RegExp("\\b(?:" + I + ")\\b"),
            K = /(?:^|\s)hover(\.\S+|)\b/,
            L = function(b) {
                return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
            };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
            a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
        }, a.event.remove = function(a, b, c, d, e) {
            C.call(this, a, L(b) || "", c, d, e)
        }, a.each(["load", "unload", "error"], function(b, c) {
            a.fn[c] = function() {
                var a = Array.prototype.slice.call(arguments, 0);
                return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
            }
        }), a.fn.toggle = function(b, c) {
            if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated");
            var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function(c) {
                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                };
            for (h.guid = f; g < e.length;) e[g++].guid = f;
            return this.click(h)
        }, a.fn.live = function(b, c, e) {
            return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
        }, a.fn.die = function(b, c) {
            return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
        }, a.event.trigger = function(a, b, c, e) {
            return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
        }, a.each(I.split("|"), function(b, c) {
            a.event.special[c] = {
                setup: function() {
                    var b = this;
                    return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                        a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                    }), a._data(this, c, a.guid++)), !1
                },
                teardown: function() {
                    return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                }
            }
        }), a.event.special.ready = {
            setup: function() {
                this === document && d("'ready' event is deprecated")
            }
        };
        var M = a.fn.andSelf || a.fn.addBack,
            N = a.fn.find;
        if (a.fn.andSelf = function() {
                return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
            }, a.fn.find = function(a) {
                var b = N.apply(this, arguments);
                return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
            }, a.Callbacks) {
            var O = a.Deferred,
                P = [
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                ];
            a.Deferred = function(b) {
                var c = O(),
                    e = c.promise();
                return c.pipe = e.pipe = function() {
                    var b = arguments;
                    return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                        a.each(P, function(f, g) {
                            var h = a.isFunction(b[f]) && b[f];
                            c[g[1]](function() {
                                var b = h && h.apply(this, arguments);
                                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                            })
                        }), b = null
                    }).promise()
                }, c.isResolved = function() {
                    return d("deferred.isResolved is deprecated"), "resolved" === c.state()
                }, c.isRejected = function() {
                    return d("deferred.isRejected is deprecated"), "rejected" === c.state()
                }, b && b.call(c, c), c
            }
        }
    }(jQuery, window);;
(function($) {
    'use strict';
    if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
        return;
    }
    wpcf7 = $.extend({
        cached: 0,
        inputs: []
    }, wpcf7);
    $(function() {
        wpcf7.supportHtml5 = (function() {
            var features = {};
            var input = document.createElement('input');
            features.placeholder = 'placeholder' in input;
            var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
            $.each(inputTypes, function(index, value) {
                input.setAttribute('type', value);
                features[value] = input.type !== 'text';
            });
            return features;
        })();
        $('div.wpcf7 > form').each(function() {
            var $form = $(this);
            wpcf7.initForm($form);
            if (wpcf7.cached) {
                wpcf7.refill($form);
            }
        });
    });
    wpcf7.getId = function(form) {
        return parseInt($('input[name="_wpcf7"]', form).val(), 10);
    };
    wpcf7.initForm = function(form) {
        var $form = $(form);
        $form.submit(function(event) {
            if (!wpcf7.supportHtml5.placeholder) {
                $('[placeholder].placeheld', $form).each(function(i, n) {
                    $(n).val('').removeClass('placeheld');
                });
            }
            if (typeof window.FormData === 'function') {
                wpcf7.submit($form);
                event.preventDefault();
            }
        });
        $('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
        wpcf7.toggleSubmit($form);
        $form.on('click', '.wpcf7-acceptance', function() {
            wpcf7.toggleSubmit($form);
        });
        $('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function() {
            var name = $(this).attr('name');
            $form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });
        $('.wpcf7-list-item.has-free-text', $form).each(function() {
            var $freetext = $(':input.wpcf7-free-text', this);
            var $wrap = $(this).closest('.wpcf7-form-control');
            if ($(':checkbox, :radio', this).is(':checked')) {
                $freetext.prop('disabled', false);
            } else {
                $freetext.prop('disabled', true);
            }
            $wrap.on('change', ':checkbox, :radio', function() {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });
        if (!wpcf7.supportHtml5.placeholder) {
            $('[placeholder]', $form).each(function() {
                $(this).val($(this).attr('placeholder'));
                $(this).addClass('placeheld');
                $(this).focus(function() {
                    if ($(this).hasClass('placeheld')) {
                        $(this).val('').removeClass('placeheld');
                    }
                });
                $(this).blur(function() {
                    if ('' === $(this).val()) {
                        $(this).val($(this).attr('placeholder'));
                        $(this).addClass('placeheld');
                    }
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
            $form.find('input.wpcf7-date[type="date"]').each(function() {
                $(this).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date($(this).attr('min')),
                    maxDate: new Date($(this).attr('max'))
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
            $form.find('input.wpcf7-number[type="number"]').each(function() {
                $(this).spinner({
                    min: $(this).attr('min'),
                    max: $(this).attr('max'),
                    step: $(this).attr('step')
                });
            });
        }
        $('.wpcf7-character-count', $form).each(function() {
            var $count = $(this);
            var name = $count.attr('data-target-name');
            var down = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum = parseInt($count.attr('data-maximum-value'), 10);
            var minimum = parseInt($count.attr('data-minimum-value'), 10);
            var updateCount = function(target) {
                var $target = $(target);
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);
                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }
                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };
            $(':input[name="' + name + '"]', $form).each(function() {
                updateCount(this);
                $(this).keyup(function() {
                    updateCount(this);
                });
            });
        });
        $form.on('change', '.wpcf7-validates-as-url', function() {
            var val = $.trim($(this).val());
            if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== val.indexOf('.')) {
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }
            $(this).val(val);
        });
    };
    wpcf7.submit = function(form) {
        if (typeof window.FormData !== 'function') {
            return;
        }
        var $form = $(form);
        $('.ajax-loader', $form).addClass('is-active');
        wpcf7.clearResponse($form);
        var formData = new FormData($form.get(0));
        var detail = {
            id: $form.closest('div.wpcf7').attr('id'),
            status: 'init',
            inputs: [],
            formData: formData
        };
        $.each($form.serializeArray(), function(i, field) {
            if ('_wpcf7' == field.name) {
                detail.contactFormId = field.value;
            } else if ('_wpcf7_version' == field.name) {
                detail.pluginVersion = field.value;
            } else if ('_wpcf7_locale' == field.name) {
                detail.contactFormLocale = field.value;
            } else if ('_wpcf7_unit_tag' == field.name) {
                detail.unitTag = field.value;
            } else if ('_wpcf7_container_post' == field.name) {
                detail.containerPostId = field.value;
            } else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
                var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, '');
                detail.inputs.push({
                    name: owner + '-free-text',
                    value: field.value
                });
            } else if (field.name.match(/^_/)) {} else {
                detail.inputs.push(field);
            }
        });
        wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);
        var ajaxSuccess = function(data, status, xhr, $form) {
            detail.id = $(data.into).attr('id');
            detail.status = data.status;
            detail.apiResponse = data;
            var $message = $('.wpcf7-response-output', $form);
            switch (data.status) {
                case 'validation_failed':
                    $.each(data.invalidFields, function(i, n) {
                        $(n.into, $form).each(function() {
                            wpcf7.notValidTip(this, n.message);
                            $('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
                            $('[aria-invalid]', this).attr('aria-invalid', 'true');
                        });
                    });
                    $message.addClass('wpcf7-validation-errors');
                    $form.addClass('invalid');
                    wpcf7.triggerEvent(data.into, 'invalid', detail);
                    break;
                case 'acceptance_missing':
                    $message.addClass('wpcf7-acceptance-missing');
                    $form.addClass('unaccepted');
                    wpcf7.triggerEvent(data.into, 'unaccepted', detail);
                    break;
                case 'spam':
                    $message.addClass('wpcf7-spam-blocked');
                    $form.addClass('spam');
                    wpcf7.triggerEvent(data.into, 'spam', detail);
                    break;
                case 'aborted':
                    $message.addClass('wpcf7-aborted');
                    $form.addClass('aborted');
                    wpcf7.triggerEvent(data.into, 'aborted', detail);
                    break;
                case 'mail_sent':
                    $message.addClass('wpcf7-mail-sent-ok');
                    $form.addClass('sent');
                    wpcf7.triggerEvent(data.into, 'mailsent', detail);
                    break;
                case 'mail_failed':
                    $message.addClass('wpcf7-mail-sent-ng');
                    $form.addClass('failed');
                    wpcf7.triggerEvent(data.into, 'mailfailed', detail);
                    break;
                default:
                    var customStatusClass = 'custom-' + data.status.replace(/[^0-9a-z]+/i, '-');
                    $message.addClass('wpcf7-' + customStatusClass);
                    $form.addClass(customStatusClass);
            }
            wpcf7.refill($form, data);
            wpcf7.triggerEvent(data.into, 'submit', detail);
            if ('mail_sent' == data.status) {
                $form.each(function() {
                    this.reset();
                });
                wpcf7.toggleSubmit($form);
            }
            if (!wpcf7.supportHtml5.placeholder) {
                $form.find('[placeholder].placeheld').each(function(i, n) {
                    $(n).val($(n).attr('placeholder'));
                });
            }
            $message.html('').append(data.message).slideDown('fast');
            $message.attr('role', 'alert');
            $('.screen-reader-response', $form.closest('.wpcf7')).each(function() {
                var $response = $(this);
                $response.html('').attr('role', '').append(data.message);
                if (data.invalidFields) {
                    var $invalids = $('<ul></ul>');
                    $.each(data.invalidFields, function(i, n) {
                        if (n.idref) {
                            var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                        } else {
                            var $li = $('<li></li>').append(n.message);
                        }
                        $invalids.append($li);
                    });
                    $response.append($invalids);
                }
                $response.attr('role', 'alert').focus();
            });
        };
        $.ajax({
            type: 'POST',
            url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false
        }).done(function(data, status, xhr) {
            ajaxSuccess(data, status, xhr, $form);
            $('.ajax-loader', $form).removeClass('is-active');
        }).fail(function(xhr, status, error) {
            var $e = $('<div class="ajax-error"></div>').text(error.message);
            $form.after($e);
        });
    };
    wpcf7.triggerEvent = function(target, name, detail) {
        var $target = $(target);
        var event = new CustomEvent('wpcf7' + name, {
            bubbles: true,
            detail: detail
        });
        $target.get(0).dispatchEvent(event);
        $target.trigger('wpcf7:' + name, detail);
        $target.trigger(name + '.wpcf7', detail);
    };
    wpcf7.toggleSubmit = function(form, state) {
        var $form = $(form);
        var $submit = $('input:submit', $form);
        if (typeof state !== 'undefined') {
            $submit.prop('disabled', !state);
            return;
        }
        if ($form.hasClass('wpcf7-acceptance-as-validation')) {
            return;
        }
        $submit.prop('disabled', false);
        $('.wpcf7-acceptance', $form).each(function() {
            var $span = $(this);
            var $input = $('input:checkbox', $span);
            if (!$span.hasClass('optional')) {
                if ($span.hasClass('invert') && $input.is(':checked') || !$span.hasClass('invert') && !$input.is(':checked')) {
                    $submit.prop('disabled', true);
                    return false;
                }
            }
        });
    };
    wpcf7.notValidTip = function(target, message) {
        var $target = $(target);
        $('.wpcf7-not-valid-tip', $target).remove();
        $('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);
        if ($target.is('.use-floating-validation-tip *')) {
            var fadeOut = function(target) {
                $(target).not(':hidden').animate({
                    opacity: 0
                }, 'fast', function() {
                    $(this).css({
                        'z-index': -100
                    });
                });
            };
            $target.on('mouseover', '.wpcf7-not-valid-tip', function() {
                fadeOut(this);
            });
            $target.on('focus', ':input', function() {
                fadeOut($('.wpcf7-not-valid-tip', $target));
            });
        }
    };
    wpcf7.refill = function(form, data) {
        var $form = $(form);
        var refillCaptcha = function($form, items) {
            $.each(items, function(i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                $form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        };
        var refillQuiz = function($form, items) {
            $.each(items, function(i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                $form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        };
        if (typeof data === 'undefined') {
            $.ajax({
                type: 'GET',
                url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
                beforeSend: function(xhr) {
                    var nonce = $form.find(':input[name="_wpnonce"]').val();
                    if (nonce) {
                        xhr.setRequestHeader('X-WP-Nonce', nonce);
                    }
                },
                dataType: 'json'
            }).done(function(data, status, xhr) {
                if (data.captcha) {
                    refillCaptcha($form, data.captcha);
                }
                if (data.quiz) {
                    refillQuiz($form, data.quiz);
                }
            });
        } else {
            if (data.captcha) {
                refillCaptcha($form, data.captcha);
            }
            if (data.quiz) {
                refillQuiz($form, data.quiz);
            }
        }
    };
    wpcf7.clearResponse = function(form) {
        var $form = $(form);
        $form.removeClass('invalid spam sent failed');
        $form.siblings('.screen-reader-response').html('').attr('role', '');
        $('.wpcf7-not-valid-tip', $form).remove();
        $('[aria-invalid]', $form).attr('aria-invalid', 'false');
        $('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
        $('.wpcf7-response-output', $form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');
    };
    wpcf7.apiSettings.getRoute = function(path) {
        var url = wpcf7.apiSettings.root;
        url = url.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + path);
        return url;
    };
})(jQuery);
(function() {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();
(function($) {
    "use strict";

    function gdlr_result_ajax(result_holder, ajax_info, category, paged) {
        var args = new Object();
        args['year-filter'] = ajax_info.attr('data-year-filter');
        args['button-link'] = ajax_info.attr('data-button-link');
        args['button-text'] = ajax_info.attr('data-button-text');
        args['style'] = ajax_info.attr('data-style');
        args['pagination'] = ajax_info.attr('data-pagination');
        args['num-fetch'] = ajax_info.attr('data-num-fetch');
        args['order'] = ajax_info.attr('data-order');
        args['category'] = (category) ? category : ajax_info.attr('data-category');
        args['paged'] = (paged) ? paged : 1;
        var animate_complete = false;
        result_holder.slideUp(500, function() {
            animate_complete = true;
        });
        result_holder.siblings('.gdlr-pagination').slideUp(500, function() {
            $(this).remove();
        });
        var now_loading = $('<div class="gdlr-now-loading"></div>');
        now_loading.insertBefore(result_holder);
        now_loading.slideDown();
        var filter_year = result_holder.siblings('.fixture-result-item-filter').find('.gdlr-soccer-fixture-result-year-filter');
        $.ajax({
            type: 'POST',
            url: ajax_info.attr('data-ajax'),
            data: {
                'action': 'gdlr_get_result_ajax',
                'args': args
            },
            error: function(a, b, c) {
                console.log(a, b, c);
            },
            success: function(data) {
                now_loading.css('background-image', 'none').slideUp(function() {
                    $(this).remove();
                });
                var result_item = $(data).hide();
                if (filter_year.length) {
                    filter_year.children().not(':first-child').remove();
                    result_item.children('.gdlr-result-by-month-wrapper').children().each(function() {
                        var year = $(this).attr('data-year');
                        if (year) {
                            filter_year.append('<option value="' + year + '" >' + year + '</option>');
                        }
                    });
                }
                if (animate_complete) {
                    result_holder.replaceWith(result_item);
                    result_item.slideDown(function() {
                        $(window).trigger('resize');
                    });
                } else {
                    setTimeout(function() {
                        result_holder.replaceWith(result_item);
                        result_item.slideDown(function() {
                            $(window).trigger('resize');
                        });
                    }, 500);
                }
            }
        });
    }

    function gdlr_player_ajax(player_holder, ajax_info, category, paged) {
        var args = new Object();
        args['pagination'] = ajax_info.attr('data-pagination');
        args['num-fetch'] = ajax_info.attr('data-num-fetch');
        args['num-excerpt'] = ajax_info.attr('data-num-excerpt');
        args['order'] = ajax_info.attr('data-order');
        args['orderby'] = ajax_info.attr('data-orderby');
        args['thumbnail-size'] = ajax_info.attr('data-thumbnail-size');
        args['player-style'] = ajax_info.attr('data-player-style');
        args['player-size'] = ajax_info.attr('data-player-size');
        args['player-layout'] = ajax_info.attr('data-player-layout');
        args['category'] = (category) ? category : ajax_info.attr('data-category');
        args['paged'] = (paged) ? paged : 1;
        var animate_complete = false;
        player_holder.slideUp(500, function() {
            animate_complete = true;
        });
        player_holder.siblings('.gdlr-pagination').slideUp(500, function() {
            $(this).remove();
        });
        var now_loading = $('<div class="gdlr-now-loading"></div>');
        now_loading.insertBefore(player_holder);
        now_loading.slideDown();
        $.ajax({
            type: 'POST',
            url: ajax_info.attr('data-ajax'),
            data: {
                'action': 'gdlr_get_player_ajax',
                'args': args
            },
            error: function(a, b, c) {
                console.log(a, b, c);
            },
            success: function(data) {
                now_loading.css('background-image', 'none').slideUp(function() {
                    $(this).remove();
                });
                var player_item = $(data).hide();
                if (animate_complete) {
                    player_holder.replaceWith(player_item);
                    player_item.slideDown(function() {
                        $(window).trigger('resize');
                    });
                } else {
                    setTimeout(function() {
                        player_holder.replaceWith(player_item);
                        player_item.slideDown(function() {
                            $(window).trigger('resize');
                        });
                    }, 500);
                }
            }
        });
    }
    $(document).ready(function() {
        $('body.single-player').find('.gdlr-soccer-tab').click(function() {
            if (!$(this).hasClass('active')) {
                $(this).addClass('active').siblings().removeClass('active');
                $('.gdlr-soccer-tab-content[data-tab="' + $(this).attr('data-tab') + '"]').addClass('active').siblings().removeClass('active');
            }
            return false;
        });

        function gdlr_resize_modern_player() {
            $('.gdlr-modern-player').each(function() {
                $(this).find('.gdlr-modern-player-item-content-inner').each(function() {
                    $(this).css('margin-top', -$(this).height() / 2);
                });
            });
        }
        gdlr_resize_modern_player();
        $(window).resize(function() {
            gdlr_resize_modern_player();
        });
        $('.player-item-filter a').click(function() {
            if ($(this).hasClass('active')) return false;
            $(this).addClass('active').siblings().removeClass('active');
            var player_holder = $(this).parent('.player-item-filter').siblings('.player-item-holder');
            var ajax_info = $(this).parent('.player-item-filter').siblings('.gdlr-ajax-info');
            gdlr_player_ajax(player_holder, ajax_info, $(this).attr('data-category'));
            return false;
        });
        $('.player-item-wrapper').on('click', '.gdlr-pagination.gdlr-ajax a', function() {
            if ($(this).hasClass('current')) return;
            var player_holder = $(this).parent('.gdlr-pagination').siblings('.player-item-holder');
            var ajax_info = $(this).parent('.gdlr-pagination').siblings('.gdlr-ajax-info');
            var category = $(this).parent('.gdlr-pagination').siblings('.player-item-filter');
            if (category) {
                category = category.children('.active').attr('data-category');
            }
            gdlr_player_ajax(player_holder, ajax_info, category, $(this).attr('data-paged'));
            return false;
        });
        $('.gdlr-soccer-fixture-result-year-filter').change(function() {
            var year = $(this).val();
            var item_holder = $(this).closest('.fixture-result-item-filter').siblings('.fixture-result-item-holder');
            item_holder.children('.gdlr-result-by-month-wrapper').children().each(function() {
                if ($(this).attr('data-year') == year || year == 'all') {
                    $(this).fadeIn(200);
                } else {
                    $(this).hide();
                }
            });
        });
        $('.fixture-result-item-filter a').click(function() {
            if ($(this).hasClass('active')) return false;
            $(this).addClass('active').siblings().removeClass('active');
            var result_holder = $(this).parent('.fixture-result-item-filter').siblings('.fixture-result-item-holder');
            var ajax_info = $(this).parent('.fixture-result-item-filter').siblings('.gdlr-ajax-info');
            gdlr_result_ajax(result_holder, ajax_info, $(this).attr('data-category'));
            return false;
        });
        $('.fixture-result-item-wrapper').on('click', '.gdlr-pagination.gdlr-ajax a', function() {
            if ($(this).hasClass('current')) return;
            var result_holder = $(this).parent('.gdlr-pagination').siblings('.fixture-result-item-holder');
            var ajax_info = $(this).parent('.gdlr-pagination').siblings('.gdlr-ajax-info');
            var category = $(this).parent('.gdlr-pagination').siblings('.fixture-result-item-filter');
            if (category) {
                category = category.children('.active').attr('data-category');
            }
            gdlr_result_ajax(result_holder, ajax_info, category, $(this).attr('data-paged'));
            return false;
        });
    });
})(jQuery);
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
! function() {
    "use strict";

    function e(e) {
        function t(t, n) {
            var s, h, k = t == window,
                y = n && n.message !== undefined ? n.message : undefined;
            if (!(n = e.extend({}, e.blockUI.defaults, n || {})).ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
                if (n.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, n.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, n.css || {}), n.onOverlayClick && (n.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, n.themedCSS || {}), y = y === undefined ? n.message : y, k && p && o(window, {
                        fadeOut: 0
                    }), y && "string" != typeof y && (y.parentNode || y.jquery)) {
                    var m = y.jquery ? y[0] : y,
                        g = {};
                    e(t).data("blockUI.history", g), g.el = m, g.parent = m.parentNode, g.display = m.style.display, g.position = m.style.position, g.parent && g.parent.removeChild(m)
                }
                e(t).data("blockUI.onUnblock", n.onUnblock);
                var v, I, w, U, x = n.baseZ;
                v = e(r || n.forceIframe ? '<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + n.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), I = e(n.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), n.theme && k ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : n.theme ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : U = k ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + n.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(U), y && (n.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)), n.theme || I.css(n.overlayCSS), I.css("position", k ? "fixed" : "absolute"), (r || n.forceIframe) && v.css("opacity", 0);
                var C = [v, I, w],
                    S = e(k ? "body" : t);
                e.each(C, function() {
                    this.appendTo(S)
                }), n.theme && n.draggable && e.fn.draggable && w.draggable({
                    handle: ".ui-dialog-titlebar",
                    cancel: "li"
                });
                var O = f && (!e.support.boxModel || e("object,embed", k ? null : t).length > 0);
                if (u || O) {
                    if (k && n.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k) var E = a(t, "borderTopWidth"),
                        T = a(t, "borderLeftWidth"),
                        M = E ? "(0 - " + E + ")" : 0,
                        B = T ? "(0 - " + T + ")" : 0;
                    e.each(C, function(e, t) {
                        var o = t[0].style;
                        if (o.position = "absolute", e < 2) k ? o.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + n.quirksmodeOffsetHack + ') + "px"') : o.setExpression("height", 'this.parentNode.offsetHeight + "px"'), k ? o.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : o.setExpression("width", 'this.parentNode.offsetWidth + "px"'), B && o.setExpression("left", B), M && o.setExpression("top", M);
                        else if (n.centerY) k && o.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), o.marginTop = 0;
                        else if (!n.centerY && k) {
                            var i = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + (n.css && n.css.top ? parseInt(n.css.top, 10) : 0) + ') + "px"';
                            o.setExpression("top", i)
                        }
                    })
                }
                if (y && (n.theme ? w.find(".ui-widget-content").append(y) : w.append(y), (y.jquery || y.nodeType) && e(y).show()), (r || n.forceIframe) && n.showOverlay && v.show(), n.fadeIn) {
                    var j = n.onBlock ? n.onBlock : c,
                        H = n.showOverlay && !y ? j : c,
                        z = y ? j : c;
                    n.showOverlay && I._fadeIn(n.fadeIn, H), y && w._fadeIn(n.fadeIn, z)
                } else n.showOverlay && I.show(), y && w.show(), n.onBlock && n.onBlock.bind(w)();
                if (i(1, t, n), k ? (p = w[0], b = e(n.focusableElements, p), n.focusInput && setTimeout(l, 20)) : d(w[0], n.centerX, n.centerY), n.timeout) {
                    var W = setTimeout(function() {
                        k ? e.unblockUI(n) : e(t).unblock(n)
                    }, n.timeout);
                    e(t).data("blockUI.timeout", W)
                }
            }
        }

        function o(t, o) {
            var s, l = t == window,
                d = e(t),
                a = d.data("blockUI.history"),
                c = d.data("blockUI.timeout");
            c && (clearTimeout(c), d.removeData("blockUI.timeout")), o = e.extend({}, e.blockUI.defaults, o || {}), i(0, t, o), null === o.onUnblock && (o.onUnblock = d.data("blockUI.onUnblock"), d.removeData("blockUI.onUnblock"));
            var r;
            r = l ? e(document.body).children().filter(".blockUI").add("body > .blockUI") : d.find(">.blockUI"), o.cursorReset && (r.length > 1 && (r[1].style.cursor = o.cursorReset), r.length > 2 && (r[2].style.cursor = o.cursorReset)), l && (p = b = null), o.fadeOut ? (s = r.length, r.stop().fadeOut(o.fadeOut, function() {
                0 == --s && n(r, a, o, t)
            })) : n(r, a, o, t)
        }

        function n(t, o, n, i) {
            var s = e(i);
            if (!s.data("blockUI.isBlocked")) {
                t.each(function(e, t) {
                    this.parentNode && this.parentNode.removeChild(this)
                }), o && o.el && (o.el.style.display = o.display, o.el.style.position = o.position, o.el.style.cursor = "default", o.parent && o.parent.appendChild(o.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), "function" == typeof n.onUnblock && n.onUnblock(i, n);
                var l = e(document.body),
                    d = l.width(),
                    a = l[0].style.width;
                l.width(d - 1).width(d), l[0].style.width = a
            }
        }

        function i(t, o, n) {
            var i = o == window,
                l = e(o);
            if ((t || (!i || p) && (i || l.data("blockUI.isBlocked"))) && (l.data("blockUI.isBlocked", t), i && n.bindEvents && (!t || n.showOverlay))) {
                var d = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                t ? e(document).bind(d, n, s) : e(document).unbind(d, s)
            }
        }

        function s(t) {
            if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) {
                var o = b,
                    n = !t.shiftKey && t.target === o[o.length - 1],
                    i = t.shiftKey && t.target === o[0];
                if (n || i) return setTimeout(function() {
                    l(i)
                }, 10), !1
            }
            var s = t.data,
                d = e(t.target);
            return d.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t), d.parents("div." + s.blockMsgClass).length > 0 || 0 === d.parents().children().filter("div.blockUI").length
        }

        function l(e) {
            if (b) {
                var t = b[!0 === e ? b.length - 1 : 0];
                t && t.focus()
            }
        }

        function d(e, t, o) {
            var n = e.parentNode,
                i = e.style,
                s = (n.offsetWidth - e.offsetWidth) / 2 - a(n, "borderLeftWidth"),
                l = (n.offsetHeight - e.offsetHeight) / 2 - a(n, "borderTopWidth");
            t && (i.left = s > 0 ? s + "px" : "0"), o && (i.top = l > 0 ? l + "px" : "0")
        }

        function a(t, o) {
            return parseInt(e.css(t, o), 10) || 0
        }
        e.fn._fadeIn = e.fn.fadeIn;
        var c = e.noop || function() {},
            r = /MSIE/.test(navigator.userAgent),
            u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            f = (document.documentMode, e.isFunction(document.createElement("div").style.setExpression));
        e.blockUI = function(e) {
            t(window, e)
        }, e.unblockUI = function(e) {
            o(window, e)
        }, e.growlUI = function(t, o, n, i) {
            var s = e('<div class="growlUI"></div>');
            t && s.append("<h1>" + t + "</h1>"), o && s.append("<h2>" + o + "</h2>"), n === undefined && (n = 3e3);
            var l = function(t) {
                t = t || {}, e.blockUI({
                    message: s,
                    fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
                    fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
                    timeout: "undefined" != typeof t.timeout ? t.timeout : n,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: i,
                    css: e.blockUI.defaults.growlCSS
                })
            };
            l();
            s.css("opacity");
            s.mouseover(function() {
                l({
                    fadeIn: 0,
                    timeout: 3e4
                });
                var t = e(".blockMsg");
                t.stop(), t.fadeTo(300, 1)
            }).mouseout(function() {
                e(".blockMsg").fadeOut(1e3)
            })
        }, e.fn.block = function(o) {
            if (this[0] === window) return e.blockUI(o), this;
            var n = e.extend({}, e.blockUI.defaults, o || {});
            return this.each(function() {
                var t = e(this);
                n.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
                    fadeOut: 0
                })
            }), this.each(function() {
                "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, o)
            })
        }, e.fn.unblock = function(t) {
            return this[0] === window ? (e.unblockUI(t), this) : this.each(function() {
                o(this, t)
            })
        }, e.blockUI.version = 2.7, e.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {
                width: "30%",
                top: "40%",
                left: "35%"
            },
            overlayCSS: {
                backgroundColor: "#000",
                opacity: .6,
                cursor: "wait"
            },
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        };
        var p = null,
            b = []
    }
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}();
jQuery(function(e) {
    if ("undefined" == typeof wc_add_to_cart_params) return !1;

    function t() {
        e(document.body).on("click", ".add_to_cart_button", this.onAddToCart).on("click", ".remove_from_cart_button", this.onRemoveFromCart).on("added_to_cart", this.updateButton).on("added_to_cart", this.updateCartPage).on("added_to_cart removed_from_cart", this.updateFragments)
    }
    t.prototype.onAddToCart = function(t) {
        var a = e(this);
        if (a.is(".ajax_add_to_cart")) {
            if (!a.attr("data-product_id")) return !0;
            t.preventDefault(), a.removeClass("added"), a.addClass("loading");
            var r = {};
            e.each(a.data(), function(t, a) {
                r[t] = a
            }), e(document.body).trigger("adding_to_cart", [a, r]), e.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "add_to_cart"), r, function(t) {
                t && (t.error && t.product_url ? window.location = t.product_url : "yes" !== wc_add_to_cart_params.cart_redirect_after_add ? e(document.body).trigger("added_to_cart", [t.fragments, t.cart_hash, a]) : window.location = wc_add_to_cart_params.cart_url)
            })
        }
    }, t.prototype.onRemoveFromCart = function(t) {
        var a = e(this),
            r = a.closest(".woocommerce-mini-cart-item");
        t.preventDefault(), r.block({
            message: null,
            overlayCSS: {
                opacity: .6
            }
        }), e.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "remove_from_cart"), {
            cart_item_key: a.data("cart_item_key")
        }, function(t) {
            t && t.fragments ? e(document.body).trigger("removed_from_cart", [t.fragments, t.cart_hash, a]) : window.location = a.attr("href")
        }).fail(function() {
            window.location = a.attr("href")
        })
    }, t.prototype.updateButton = function(t, a, r, o) {
        (o = void 0 !== o && o) && (o.removeClass("loading"), o.addClass("added"), wc_add_to_cart_params.is_cart || 0 !== o.parent().find(".added_to_cart").length || o.after(' <a href="' + wc_add_to_cart_params.cart_url + '" class="added_to_cart wc-forward" title="' + wc_add_to_cart_params.i18n_view_cart + '">' + wc_add_to_cart_params.i18n_view_cart + "</a>"), e(document.body).trigger("wc_cart_button_updated", [o]))
    }, t.prototype.updateCartPage = function() {
        var t = window.location.toString().replace("add-to-cart", "added-to-cart");
        e.get(t, function(t) {
            e(".shop_table.cart:eq(0)").replaceWith(e(t).find(".shop_table.cart:eq(0)")), e(".cart_totals:eq(0)").replaceWith(e(t).find(".cart_totals:eq(0)")), e(".cart_totals, .shop_table.cart").stop(!0).css("opacity", "1").unblock(), e(document.body).trigger("cart_page_refreshed"), e(document.body).trigger("cart_totals_refreshed")
        })
    }, t.prototype.updateFragments = function(t, a) {
        a && (e.each(a, function(t) {
            e(t).addClass("updating").fadeTo("400", "0.6").block({
                message: null,
                overlayCSS: {
                    opacity: .6
                }
            })
        }), e.each(a, function(t, a) {
            e(t).replaceWith(a), e(t).stop(!0).css("opacity", "1").unblock()
        }), e(document.body).trigger("wc_fragments_loaded"))
    }, new t
});
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
! function(e) {
    var n = !1;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var o = window.Cookies,
            t = window.Cookies = e();
        t.noConflict = function() {
            return window.Cookies = o, t
        }
    }
}(function() {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o) n[t] = o[t]
        }
        return n
    }

    function n(o) {
        function t(n, r, i) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof(i = e({
                            path: "/"
                        }, t.defaults, i)).expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                    }
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                    } catch (m) {}
                    r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var f = "";
                    for (var s in i) i[s] && (f += "; " + s, !0 !== i[s] && (f += "=" + i[s]));
                    return document.cookie = n + "=" + r + f
                }
                n || (c = {});
                for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
                    var l = p[u].split("="),
                        C = l.slice(1).join("=");
                    '"' === C.charAt(0) && (C = C.slice(1, -1));
                    try {
                        var g = l[0].replace(d, decodeURIComponent);
                        if (C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent), this.json) try {
                            C = JSON.parse(C)
                        } catch (m) {}
                        if (n === g) {
                            c = C;
                            break
                        }
                        n || (c[g] = C)
                    } catch (m) {}
                }
                return c
            }
        }
        return t.set = t, t.get = function(e) {
            return t.call(t, e)
        }, t.getJSON = function() {
            return t.apply({
                json: !0
            }, [].slice.call(arguments))
        }, t.defaults = {}, t.remove = function(n, o) {
            t(n, "", e(o, {
                expires: -1
            }))
        }, t.withConverter = n, t
    }
    return n(function() {})
});
jQuery(function(i) {
    i(".woocommerce-ordering").on("change", "select.orderby", function() {
        i(this).closest("form").submit()
    }), i("input.qty:not(.product-quantity input.qty)").each(function() {
        var e = parseFloat(i(this).attr("min"));
        0 <= e && parseFloat(i(this).val()) < e && i(this).val(e)
    });
    var o = "store_notice" + (i(".woocommerce-store-notice").data("notice-id") || "");
    "hidden" === Cookies.get(o) ? i(".woocommerce-store-notice").hide() : i(".woocommerce-store-notice").show(), i(".woocommerce-store-notice__dismiss-link").click(function(e) {
        Cookies.set(o, "hidden", {
            path: "/"
        }), i(".woocommerce-store-notice").hide(), e.preventDefault()
    }), i(document.body).on("click", function() {
        i(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden", !0).slideUp(250)
    }), i(".woocommerce-input-wrapper").on("click", function(e) {
        e.stopPropagation()
    }), i(".woocommerce-input-wrapper :input").on("keydown", function(e) {
        var o = i(this).parent().find("span.description");
        if (27 === e.which && o.length && o.is(":visible")) return o.prop("aria-hidden", !0).slideUp(250), e.preventDefault(), !1
    }).on("click focus", function() {
        var e = i(this).parent(),
            o = e.find("span.description");
        e.addClass("currentTarget"), i(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden", !0).slideUp(250), o.length && o.is(":hidden") && o.prop("aria-hidden", !1).slideDown(250), e.removeClass("currentTarget")
    }), i.scroll_to_notices = function(e) {
        e.length && i("html, body").animate({
            scrollTop: e.offset().top - 100
        }, 1e3)
    }
});
jQuery(function(r) {
    if ("undefined" == typeof wc_cart_fragments_params) return !1;
    var t = !0,
        o = wc_cart_fragments_params.cart_hash_key;
    try {
        t = "sessionStorage" in window && null !== window.sessionStorage, window.sessionStorage.setItem("wc", "test"), window.sessionStorage.removeItem("wc"), window.localStorage.setItem("wc", "test"), window.localStorage.removeItem("wc")
    } catch (f) {
        t = !1
    }

    function a() {
        t && sessionStorage.setItem("wc_cart_created", (new Date).getTime())
    }

    function s(e) {
        t && (localStorage.setItem(o, e), sessionStorage.setItem(o, e))
    }
    var e = {
        url: wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%", "get_refreshed_fragments"),
        type: "POST",
        data: {
            time: (new Date).getTime()
        },
        timeout: wc_cart_fragments_params.request_timeout,
        success: function(e) {
            e && e.fragments && (r.each(e.fragments, function(e, t) {
                r(e).replaceWith(t)
            }), t && (sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(e.fragments)), s(e.cart_hash), e.cart_hash && a()), r(document.body).trigger("wc_fragments_refreshed"))
        },
        error: function() {
            r(document.body).trigger("wc_fragments_ajax_error")
        }
    };

    function n() {
        r.ajax(e)
    }
    if (t) {
        var i = null;
        r(document.body).on("wc_fragment_refresh updated_wc_div", function() {
            n()
        }), r(document.body).on("added_to_cart removed_from_cart", function(e, t, r) {
            var n = sessionStorage.getItem(o);
            null !== n && n !== undefined && "" !== n || a(), sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(t)), s(r)
        }), r(document.body).on("wc_fragments_refreshed", function() {
            clearTimeout(i), i = setTimeout(n, 864e5)
        }), r(window).on("storage onstorage", function(e) {
            o === e.originalEvent.key && localStorage.getItem(o) !== sessionStorage.getItem(o) && n()
        }), r(window).on("pageshow", function(e) {
            e.originalEvent.persisted && (r(".widget_shopping_cart_content").empty(), r(document.body).trigger("wc_fragment_refresh"))
        });
        try {
            var c = r.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),
                _ = sessionStorage.getItem(o),
                g = Cookies.get("woocommerce_cart_hash"),
                m = sessionStorage.getItem("wc_cart_created");
            if (null !== _ && _ !== undefined && "" !== _ || (_ = ""), null !== g && g !== undefined && "" !== g || (g = ""), _ && (null === m || m === undefined || "" === m)) throw "No cart_created";
            if (m) {
                var d = 1 * m + 864e5,
                    w = (new Date).getTime();
                if (d < w) throw "Fragment expired";
                i = setTimeout(n, d - w)
            }
            if (!c || !c["div.widget_shopping_cart_content"] || _ !== g) throw "No fragment";
            r.each(c, function(e, t) {
                r(e).replaceWith(t)
            }), r(document.body).trigger("wc_fragments_loaded")
        } catch (f) {
            n()
        }
    } else n();
    0 < Cookies.get("woocommerce_items_in_cart") ? r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show() : r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(), r(document.body).on("adding_to_cart", function() {
        r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()
    }), "undefined" != typeof wp && wp.customize && wp.customize.selectiveRefresh && wp.customize.widgetsPreview && wp.customize.widgetsPreview.WidgetPartial && wp.customize.selectiveRefresh.bind("partial-content-rendered", function() {
        n()
    })
});
(function($) {
    "use strict";
    var methods = (function() {
        var c = {
                bcClass: 'sf-breadcrumb',
                menuClass: 'sf-js-enabled',
                anchorClass: 'sf-with-ul',
                menuArrowClass: 'sf-arrows'
            },
            ios = (function() {
                var ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                if (ios) {
                    $(window).load(function() {
                        $('body').children().on('click', $.noop);
                    });
                }
                return ios;
            })(),
            wp7 = (function() {
                var style = document.documentElement.style;
                return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent));
            })(),
            toggleMenuClasses = function($menu, o) {
                var classes = c.menuClass;
                if (o.cssArrows) {
                    classes += ' ' + c.menuArrowClass;
                }
                $menu.toggleClass(classes);
            },
            setPathToCurrent = function($menu, o) {
                return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels).addClass(o.hoverClass + ' ' + c.bcClass).filter(function() {
                    return ($(this).children(o.popUpSelector).hide().show().length);
                }).removeClass(o.pathClass);
            },
            toggleAnchorClass = function($li) {
                $li.children('a').toggleClass(c.anchorClass);
            },
            toggleTouchAction = function($menu) {
                var touchAction = $menu.css('ms-touch-action');
                touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
                $menu.css('ms-touch-action', touchAction);
            },
            applyHandlers = function($menu, o) {
                var targets = 'li:has(' + o.popUpSelector + ')';
                if ($.fn.hoverIntent && !o.disableHI) {
                    $menu.hoverIntent(over, out, targets);
                } else {
                    $menu.on('mouseenter.superfish', targets, over).on('mouseleave.superfish', targets, out);
                }
                var touchevent = 'MSPointerDown.superfish';
                if (!ios) {
                    touchevent += ' touchend.superfish';
                }
                if (wp7) {
                    touchevent += ' mousedown.superfish';
                }
                $menu.on('focusin.superfish', 'li', over).on('focusout.superfish', 'li', out).on(touchevent, 'a', o, touchHandler);
            },
            touchHandler = function(e) {
                var $this = $(this),
                    $ul = $this.siblings(e.data.popUpSelector);
                if ($ul.length > 0 && $ul.is(':hidden')) {
                    $this.one('click.superfish', false);
                    if (e.type === 'MSPointerDown') {
                        $this.trigger('focus');
                    } else {
                        $.proxy(over, $this.parent('li'))();
                    }
                }
            },
            over = function() {
                var $this = $(this),
                    o = getOptions($this);
                clearTimeout(o.sfTimer);
                $this.siblings().superfish('hide').end().superfish('show');
            },
            out = function() {
                var $this = $(this),
                    o = getOptions($this);
                if (ios) {
                    $.proxy(close, $this, o)();
                } else {
                    clearTimeout(o.sfTimer);
                    o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
                }
            },
            close = function(o) {
                o.retainPath = ($.inArray(this[0], o.$path) > -1);
                this.superfish('hide');
                if (!this.parents('.' + o.hoverClass).length) {
                    o.onIdle.call(getMenu(this));
                    if (o.$path.length) {
                        $.proxy(over, o.$path)();
                    }
                }
            },
            getMenu = function($el) {
                return $el.closest('.' + c.menuClass);
            },
            getOptions = function($el) {
                return getMenu($el).data('sf-options');
            };
        return {
            hide: function(instant) {
                if (this.length) {
                    var $this = this,
                        o = getOptions($this);
                    if (!o) {
                        return this;
                    }
                    var not = (o.retainPath === true) ? o.$path : '',
                        $ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
                        speed = o.speedOut;
                    if (instant) {
                        $ul.show();
                        speed = 0;
                    }
                    o.retainPath = false;
                    o.onBeforeHide.call($ul);
                    var gdlr_input = false;
                    $(this).find('input:focus').each(function() {
                        gdlr_input = true;
                    });
                    if (gdlr_input) return $(this);
                    $ul.stop(true, true).animate(o.animationOut, speed, function() {
                        var $this = $(this);
                        o.onHide.call($this);
                    });
                }
                return this;
            },
            show: function() {
                var o = getOptions(this);
                if (!o) {
                    return this;
                }
                var $this = this.addClass(o.hoverClass),
                    $ul = $this.children(o.popUpSelector);
                o.onBeforeShow.call($ul);
                $ul.stop(true, true).animate(o.animation, o.speed, function() {
                    o.onShow.call($ul);
                });
                return this;
            },
            destroy: function() {
                return this.each(function() {
                    var $this = $(this),
                        o = $this.data('sf-options'),
                        $hasPopUp;
                    if (!o) {
                        return false;
                    }
                    $hasPopUp = $this.find(o.popUpSelector).parent('li');
                    clearTimeout(o.sfTimer);
                    toggleMenuClasses($this, o);
                    toggleAnchorClass($hasPopUp);
                    toggleTouchAction($this);
                    $this.off('.superfish').off('.hoverIntent');
                    $hasPopUp.children(o.popUpSelector).attr('style', function(i, style) {
                        return style.replace(/display[^;]+;?/g, '');
                    });
                    o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
                    $this.find('.' + o.hoverClass).removeClass(o.hoverClass);
                    o.onDestroy.call($this);
                    $this.removeData('sf-options');
                });
            },
            init: function(op) {
                return this.each(function() {
                    var $this = $(this);
                    if ($this.data('sf-options')) {
                        return false;
                    }
                    var o = $.extend({}, $.fn.superfish.defaults, op),
                        $hasPopUp = $this.find(o.popUpSelector).parent('li');
                    o.$path = setPathToCurrent($this, o);
                    $this.data('sf-options', o);
                    toggleMenuClasses($this, o);
                    toggleAnchorClass($hasPopUp);
                    toggleTouchAction($this);
                    applyHandlers($this, o);
                    $hasPopUp.not('.' + c.bcClass).superfish('hide', true);
                    o.onInit.call(this);
                });
            }
        };
    })();
    $.fn.superfish = function(method, args) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            return $.error('Method ' + method + ' does not exist on jQuery.fn.superfish');
        }
    };
    $.fn.superfish.defaults = {
        popUpSelector: 'ul,.sf-mega',
        hoverClass: 'sfHover',
        pathClass: 'overrideThisToUse',
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: 'show'
        },
        animationOut: {
            opacity: 'hide'
        },
        speed: 'normal',
        speedOut: 'fast',
        cssArrows: true,
        disableHI: false,
        onInit: $.noop,
        onBeforeShow: $.noop,
        onShow: $.noop,
        onBeforeHide: $.noop,
        onHide: $.noop,
        onIdle: $.noop,
        onDestroy: $.noop
    };
    $.fn.extend({
        hideSuperfishUl: methods.hide,
        showSuperfishUl: methods.show
    });
})(jQuery);
! function(a) {
    a.fn.hoverIntent = function(b, c, d) {
        var e = {
            interval: 100,
            sensitivity: 6,
            timeout: 0
        };
        e = "object" == typeof b ? a.extend(e, b) : a.isFunction(c) ? a.extend(e, {
            over: b,
            out: c,
            selector: d
        }) : a.extend(e, {
            over: b,
            out: b,
            selector: c
        });
        var f, g, h, i, j = function(a) {
                f = a.pageX, g = a.pageY
            },
            k = function(b, c) {
                return c.hoverIntent_t = clearTimeout(c.hoverIntent_t), Math.sqrt((h - f) * (h - f) + (i - g) * (i - g)) < e.sensitivity ? (a(c).off("mousemove.hoverIntent", j), c.hoverIntent_s = !0, e.over.apply(c, [b])) : (h = f, i = g, c.hoverIntent_t = setTimeout(function() {
                    k(b, c)
                }, e.interval), void 0)
            },
            l = function(a, b) {
                return b.hoverIntent_t = clearTimeout(b.hoverIntent_t), b.hoverIntent_s = !1, e.out.apply(b, [a])
            },
            m = function(b) {
                var c = a.extend({}, b),
                    d = this;
                d.hoverIntent_t && (d.hoverIntent_t = clearTimeout(d.hoverIntent_t)), "mouseenter" === b.type ? (h = c.pageX, i = c.pageY, a(d).on("mousemove.hoverIntent", j), d.hoverIntent_s || (d.hoverIntent_t = setTimeout(function() {
                    k(c, d)
                }, e.interval))) : (a(d).off("mousemove.hoverIntent", j), d.hoverIntent_s && (d.hoverIntent_t = setTimeout(function() {
                    l(c, d)
                }, e.timeout)))
            };
        return this.on({
            "mouseenter.hoverIntent": m,
            "mouseleave.hoverIntent": m
        }, e.selector)
    }
}(jQuery);;
window.Modernizr = function(a, b, c) {
        function z(a) {
            j.cssText = a
        }

        function A(a, b) {
            return z(m.join(a + ";") + (b || ""))
        }

        function B(a, b) {
            return typeof a === b
        }

        function C(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function D(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function E(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function F(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + o.join(d + " ") + d).split(" ");
            return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
        }
        var d = "2.6.2",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = " -webkit- -moz- -o- -ms- ".split(" "),
            n = "Webkit Moz O ms",
            o = n.split(" "),
            p = n.toLowerCase().split(" "),
            q = {},
            r = {},
            s = {},
            t = [],
            u = t.slice,
            v, w = function(a, c, d, e) {
                var f, i, j, k, l = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body");
                if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
                return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
            },
            x = {}.hasOwnProperty,
            y;
        !B(x, "undefined") && !B(x.call, "undefined") ? y = function(a, b) {
            return x.call(a, b)
        } : y = function(a, b) {
            return b in a && B(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = u.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(u.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(u.call(arguments)))
                };
            return e
        }), q.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : w(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = a.offsetTop === 9
            }), c
        }, q.cssanimations = function() {
            return F("animationName")
        }, q.csstransitions = function() {
            return F("transition")
        };
        for (var G in q) y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));
        return e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) y(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, z(""), i = k = null,
            function(a, b) {
                function k(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function l() {
                    var a = r.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function m(a) {
                    var b = i[a[g]];
                    return b || (b = {}, h++, a[g] = h, i[h] = b), b
                }

                function n(a, c, f) {
                    c || (c = b);
                    if (j) return c.createElement(a);
                    f || (f = m(c));
                    var g;
                    return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
                }

                function o(a, c) {
                    a || (a = b);
                    if (j) return a.createDocumentFragment();
                    c = c || m(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = l(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function p(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return r.shivMethods ? n(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(r, b.frag)
                }

                function q(a) {
                    a || (a = b);
                    var c = m(a);
                    return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
                }
                var c = a.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f, g = "_html5shiv",
                    h = 0,
                    i = {},
                    j;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        f = !0, j = !0
                    }
                })();
                var r = {
                    elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: c.shivCSS !== !1,
                    supportsUnknownElements: j,
                    shivMethods: c.shivMethods !== !1,
                    type: "default",
                    shivDocument: q,
                    createElement: n,
                    createDocumentFragment: o
                };
                a.html5 = r, q(b)
            }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function(a) {
                return D([a])
            }, e.testAllProps = F, e.testStyles = w, e.prefixed = function(a, b, c) {
                return b ? F(a, b, c) : F(a, "pfx")
            }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };;
(function($, window, undefined) {
    'use strict';
    var Modernizr = window.Modernizr,
        $body = $('body');
    $.DLMenu = function(options, element) {
        this.$el = $(element);
        this._init(options);
    };
    $.DLMenu.defaults = {
        animationClasses: {
            classin: 'dl-animate-in-1',
            classout: 'dl-animate-out-1'
        },
        onLevelClick: function(el, name) {
            return false;
        },
        onLinkClick: function(el, ev) {
            return false;
        }
    };
    $.DLMenu.prototype = {
        _init: function(options) {
            this.options = $.extend(true, {}, $.DLMenu.defaults, options);
            this._config();
            var animEndEventNames = {
                    'WebkitAnimation': 'webkitAnimationEnd',
                    'OAnimation': 'oAnimationEnd',
                    'msAnimation': 'MSAnimationEnd',
                    'animation': 'animationend'
                },
                transEndEventNames = {
                    'WebkitTransition': 'webkitTransitionEnd',
                    'MozTransition': 'transitionend',
                    'OTransition': 'oTransitionEnd',
                    'msTransition': 'MSTransitionEnd',
                    'transition': 'transitionend'
                };
            this.animEndEventName = animEndEventNames[Modernizr.prefixed('animation')] + '.dlmenu';
            this.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')] + '.dlmenu', this.supportAnimations = Modernizr.cssanimations, this.supportTransitions = Modernizr.csstransitions;
            this._initEvents();
        },
        _config: function() {
            this.open = false;
            this.$trigger = this.$el.children('.dl-trigger');
            this.$menu = this.$el.children('ul.dl-menu');
            this.$menuitems = this.$menu.find('li:not(.dl-back)');
            this.$el.find('ul.dl-submenu').prepend('<li class="dl-back"><a href="#">back</a></li>');
            this.$back = this.$menu.find('li.dl-back');
        },
        _initEvents: function() {
            var self = this;
            this.$trigger.on('click.dlmenu', function() {
                if (self.open) {
                    self._closeMenu();
                } else {
                    self._openMenu();
                }
                return false;
            });
            this.$menuitems.on('click.dlmenu', function(event) {
                event.stopPropagation();
                var $item = $(this),
                    $submenu = $item.children('ul.dl-submenu');
                if ($submenu.length > 0) {
                    var $flyin = $submenu.clone().css('opacity', 0).insertAfter(self.$menu),
                        onAnimationEndFn = function() {
                            self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classout).addClass('dl-subview');
                            $item.addClass('dl-subviewopen').parents('.dl-subviewopen:first').removeClass('dl-subviewopen').addClass('dl-subview');
                            $flyin.remove();
                        };
                    setTimeout(function() {
                        $flyin.addClass(self.options.animationClasses.classin);
                        self.$menu.addClass(self.options.animationClasses.classout);
                        if (self.supportAnimations) {
                            self.$menu.on(self.animEndEventName, onAnimationEndFn);
                        } else {
                            onAnimationEndFn.call();
                        }
                        self.options.onLevelClick($item, $item.children('a:first').text());
                    });
                    return false;
                } else {
                    self.options.onLinkClick($item, event);
                }
            });
            this.$back.on('click.dlmenu', function(event) {
                var $this = $(this),
                    $submenu = $this.parents('ul.dl-submenu:first'),
                    $item = $submenu.parent(),
                    $flyin = $submenu.clone().insertAfter(self.$menu);
                var onAnimationEndFn = function() {
                    self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classin);
                    $flyin.remove();
                };
                setTimeout(function() {
                    $flyin.addClass(self.options.animationClasses.classout);
                    self.$menu.addClass(self.options.animationClasses.classin);
                    if (self.supportAnimations) {
                        self.$menu.on(self.animEndEventName, onAnimationEndFn);
                    } else {
                        onAnimationEndFn.call();
                    }
                    $item.removeClass('dl-subviewopen');
                    var $subview = $this.parents('.dl-subview:first');
                    if ($subview.is('li')) {
                        $subview.addClass('dl-subviewopen');
                    }
                    $subview.removeClass('dl-subview');
                });
                return false;
            });
        },
        closeMenu: function() {
            if (this.open) {
                this._closeMenu();
            }
        },
        _closeMenu: function() {
            var self = this,
                onTransitionEndFn = function() {
                    self.$menu.off(self.transEndEventName);
                    self._resetMenu();
                };
            this.$menu.removeClass('dl-menuopen');
            this.$menu.addClass('dl-menu-toggle');
            this.$trigger.removeClass('dl-active');
            if (this.supportTransitions) {
                this.$menu.on(this.transEndEventName, onTransitionEndFn);
            } else {
                onTransitionEndFn.call();
            }
            this.open = false;
        },
        openMenu: function() {
            if (!this.open) {
                this._openMenu();
            }
        },
        _openMenu: function() {
            var self = this;
            $body.off('click').on('click.dlmenu', function() {
                self._closeMenu();
            });
            this.$menu.addClass('dl-menuopen dl-menu-toggle').on(this.transEndEventName, function() {
                $(this).removeClass('dl-menu-toggle');
            });
            this.$trigger.addClass('dl-active');
            this.open = true;
        },
        _resetMenu: function() {
            this.$menu.removeClass('dl-subview');
            this.$menuitems.removeClass('dl-subview dl-subviewopen');
        }
    };
    var logError = function(message) {
        if (window.console) {
            window.console.error(message);
        }
    };
    $.fn.dlmenu = function(options) {
        if (typeof options === 'string') {
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var instance = $.data(this, 'dlmenu');
                if (!instance) {
                    logError("cannot call methods on dlmenu prior to initialization; " + "attempted to call method '" + options + "'");
                    return;
                }
                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                    logError("no such method '" + options + "' for dlmenu instance");
                    return;
                }
                instance[options].apply(instance, args);
            });
        } else {
            this.each(function() {
                var instance = $.data(this, 'dlmenu');
                if (instance) {
                    instance._init();
                } else {
                    instance = $.data(this, 'dlmenu', new $.DLMenu(options, this));
                }
            });
        }
        return this;
    };
})(jQuery, window);
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});;
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r, G, f, v) {
    var J = f("html"),
        n = f(r),
        p = f(G),
        b = f.fancybox = function() {
            b.open.apply(this, arguments)
        },
        I = navigator.userAgent.match(/msie/i),
        B = null,
        s = G.createTouch !== v,
        t = function(a) {
            return a && a.hasOwnProperty && a instanceof f
        },
        q = function(a) {
            return a && "string" === f.type(a)
        },
        E = function(a) {
            return q(a) && 0 < a.indexOf("%")
        },
        l = function(a, d) {
            var e = parseInt(a, 10) || 0;
            d && E(a) && (e *= b.getViewport()[d] / 100);
            return Math.ceil(e)
        },
        w = function(a, b) {
            return l(a, b) + "px"
        };
    f.extend(b, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !s,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3E3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                    (I ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: f.noop,
            beforeLoad: f.noop,
            afterLoad: f.noop,
            beforeShow: f.noop,
            afterShow: f.noop,
            beforeChange: f.noop,
            beforeClose: f.noop,
            afterClose: f.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(a, d) {
            if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function(e, c) {
                var k = {},
                    g, h, j, m, l;
                "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = {
                    href: c.data("fancybox-href") || c.attr("href"),
                    title: c.data("fancybox-title") || c.attr("title"),
                    isDom: !0,
                    element: c
                }, f.metadata && f.extend(!0, k, c.metadata())) : k = c);
                g = d.href || k.href || (q(c) ? c : null);
                h = d.title !== v ? d.title : k.title || "";
                m = (j = d.content || k.content) ? "html" : d.type || k.type;
                !m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
                q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
                j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g && k.isDom) && (m = "inline", j = c));
                f.extend(k, {
                    href: g,
                    type: m,
                    content: j,
                    title: h,
                    selector: l
                });
                a[e] = k
            }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
        },
        cancel: function() {
            var a = b.coming;
            a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a))
        },
        close: function(a) {
            b.cancel();
            !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())))
        },
        play: function(a) {
            var d = function() {
                    clearTimeout(b.player.timer)
                },
                e = function() {
                    d();
                    b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed))
                },
                c = function() {
                    d();
                    p.unbind(".player");
                    b.player.isActive = !1;
                    b.trigger("onPlayEnd")
                };
            if (!0 === a || !b.player.isActive && !1 !== a) {
                if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, p.bind({
                    "onCancel.player beforeClose.player": c,
                    "onUpdate.player": e,
                    "beforeLoad.player": d
                }), e(), b.trigger("onPlayStart")
            } else c()
        },
        next: function(a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
        },
        prev: function(a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
        },
        jumpto: function(a, d, e) {
            var c = b.current;
            c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a)))
        },
        reposition: function(a, d) {
            var e = b.current,
                c = e ? e.wrap : null,
                k;
            c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k)))
        },
        update: function(a) {
            var d = a && a.type,
                e = !d || "orientationchange" === d;
            e && (clearTimeout(B), B = null);
            b.isOpen && !B && (B = setTimeout(function() {
                var c = b.current;
                c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null)
            }, e && !s ? 0 : 300))
        },
        toggle: function(a) {
            b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update())
        },
        hideLoading: function() {
            p.unbind(".loading");
            f("#fancybox-loading").remove()
        },
        showLoading: function() {
            var a, d;
            b.hideLoading();
            a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
            p.bind("keydown.loading", function(a) {
                if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel()
            });
            b.defaults.fixed || (d = b.getViewport(), a.css({
                position: "absolute",
                top: 0.5 * d.h + d.y,
                left: 0.5 * d.w + d.x
            }))
        },
        getViewport: function() {
            var a = b.current && b.current.locked || !1,
                d = {
                    x: n.scrollLeft(),
                    y: n.scrollTop()
                };
            a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height());
            return d
        },
        unbindEvents: function() {
            b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
            p.unbind(".fb");
            n.unbind(".fb")
        },
        bindEvents: function() {
            var a = b.current,
                d;
            a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function(e) {
                var c = e.which || e.keyCode,
                    k = e.target || e.srcElement;
                if (27 === c && b.coming) return !1;
                !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function(d, k) {
                    if (1 < a.group.length && k[c] !== v) return b[d](k[c]), e.preventDefault(), !1;
                    if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1
                })
            }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function(d, c, k, g) {
                for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
                if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
                    if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");
                    else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right");
                    d.preventDefault()
                }
            }))
        },
        trigger: function(a, d) {
            var e, c = d || b.coming || b.current;
            if (c) {
                f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
                if (!1 === e) return !1;
                c.helpers && f.each(c.helpers, function(d, e) {
                    if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
                });
                p.trigger(a)
            }
        },
        isImage: function(a) {
            return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(a) {
            return q(a) && a.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(a) {
            var d = {},
                e, c;
            a = l(a);
            e = b.group[a] || null;
            if (!e) return !1;
            d = f.extend(!0, {}, b.opts, e);
            e = d.margin;
            c = d.padding;
            "number" === f.type(e) && (d.margin = [e, e, e, e]);
            "number" === f.type(c) && (d.padding = [c, c, c, c]);
            d.modal && f.extend(!0, d, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            });
            d.autoSize && (d.autoWidth = d.autoHeight = !0);
            "auto" === d.width && (d.autoWidth = !0);
            "auto" === d.height && (d.autoHeight = !0);
            d.group = b.group;
            d.index = a;
            b.coming = d;
            if (!1 === b.trigger("beforeLoad")) b.coming = null;
            else {
                c = d.type;
                e = d.href;
                if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
                b.isActive = !0;
                if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
                "image" === c && (d.aspectRatio = !0);
                "iframe" === c && s && (d.scrolling = "scroll");
                d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
                f.extend(d, {
                    skin: f(".fancybox-skin", d.wrap),
                    outer: f(".fancybox-outer", d.wrap),
                    inner: f(".fancybox-inner", d.wrap)
                });
                f.each(["Top", "Right", "Bottom", "Left"], function(a, b) {
                    d.skin.css("padding" + b, w(d.padding[a]))
                });
                b.trigger("onReady");
                if ("inline" === c || "html" === c) {
                    if (!d.content || !d.content.length) return b._error("content")
                } else if (!e) return b._error("href");
                "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
            }
        },
        _error: function(a) {
            f.extend(b.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: b.coming.tpl.error
            });
            b._afterLoad()
        },
        _loadImage: function() {
            var a = b.imgPreload = new Image;
            a.onload = function() {
                this.onload = this.onerror = null;
                b.coming.width = this.width / b.opts.pixelRatio;
                b.coming.height = this.height / b.opts.pixelRatio;
                b._afterLoad()
            };
            a.onerror = function() {
                this.onload = this.onerror = null;
                b._error("image")
            };
            a.src = b.coming.href;
            !0 !== a.complete && b.showLoading()
        },
        _loadAjax: function() {
            var a = b.coming;
            b.showLoading();
            b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
                url: a.href,
                error: function(a, e) {
                    b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
                },
                success: function(d, e) {
                    "success" === e && (a.content = d, b._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var a = b.coming,
                d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function() {
                try {
                    f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (a) {}
            });
            a.iframe.preload && (b.showLoading(), d.one("load", function() {
                f(this).data("ready", 1);
                s || f(this).bind("load.fb", b.update);
                f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                b._afterLoad()
            }));
            a.content = d.appendTo(a.inner);
            a.iframe.preload || b._afterLoad()
        },
        _preloadImages: function() {
            var a = b.group,
                d = b.current,
                e = a.length,
                c = d.preload ? Math.min(d.preload, e - 1) : 0,
                f, g;
            for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
        },
        _afterLoad: function() {
            var a = b.coming,
                d = b.current,
                e, c, k, g, h;
            b.hideLoading();
            if (a && !1 !== b.isActive)
                if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
                else {
                    d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                    b.unbindEvents();
                    e = a.content;
                    c = a.type;
                    k = a.scrolling;
                    f.extend(b, {
                        wrap: a.wrap,
                        skin: a.skin,
                        outer: a.outer,
                        inner: a.inner,
                        current: a,
                        previous: d
                    });
                    g = a.href;
                    switch (c) {
                        case "inline":
                        case "ajax":
                        case "html":
                            a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function() {
                                f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                            }));
                            break;
                        case "image":
                            e = a.tpl.image.replace("{href}", g);
                            break;
                        case "swf":
                            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function(a, b) {
                                e += '<param name="' + a + '" value="' + b + '"></param>';
                                h += " " + a + '="' + b + '"'
                            }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
                    }(!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
                    b.trigger("beforeShow");
                    a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);
                    b._setDimension();
                    b.reposition();
                    b.isOpen = !1;
                    b.coming = null;
                    b.bindEvents();
                    if (b.isOpened) {
                        if (d.prevMethod) b.transitions[d.prevMethod]()
                    } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
                    b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                    b._preloadImages()
                }
        },
        _setDimension: function() {
            var a = b.getViewport(),
                d = 0,
                e = !1,
                c = !1,
                e = b.wrap,
                k = b.skin,
                g = b.inner,
                h = b.current,
                c = h.width,
                j = h.height,
                m = h.minWidth,
                u = h.minHeight,
                n = h.maxWidth,
                p = h.maxHeight,
                s = h.scrolling,
                q = h.scrollOutside ? h.scrollbarWidth : 0,
                x = h.margin,
                y = l(x[1] + x[3]),
                r = l(x[0] + x[2]),
                v, z, t, C, A, F, B, D, H;
            e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
            x = l(k.outerWidth(!0) - k.width());
            v = l(k.outerHeight(!0) - k.height());
            z = y + x;
            t = r + v;
            C = E(c) ? (a.w - z) * l(c) / 100 : c;
            A = E(j) ? (a.h - t) * l(j) / 100 : j;
            if ("iframe" === h.type) {
                if (H = h.content, h.autoHeight && 1 === H.data("ready")) try {
                    H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0))
                } catch (G) {}
            } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");
            c = l(C);
            j = l(A);
            D = C / A;
            m = l(E(m) ? l(m, "w") - z : m);
            n = l(E(n) ? l(n, "w") - z : n);
            u = l(E(u) ? l(u, "h") - t : u);
            p = l(E(p) ? l(p, "h") - t : p);
            F = n;
            B = p;
            h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p));
            z = a.w - y;
            r = a.h - r;
            h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight && "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p)));
            if (h.fitToView)
                if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio)
                    for (;
                        (a > z || y > r) && (c > m && j > u) && !(19 < d++);) j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height();
                else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));
            q && ("auto" === s && j < A && c + x + q < z) && (c += q);
            g.width(c).height(j);
            e.width(c + x);
            a = e.width();
            y = e.height();
            e = (a > z || y > r) && c > m && j > u;
            c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);
            f.extend(h, {
                dim: {
                    width: w(a),
                    height: w(y)
                },
                origWidth: C,
                origHeight: A,
                canShrink: e,
                canExpand: c,
                wPadding: x,
                hPadding: v,
                wrapSpace: y - k.outerHeight(!0),
                skinSpace: k.height() - j
            });
            !H && (h.autoHeight && j > u && j < p && !c) && g.height("auto")
        },
        _getPosition: function(a) {
            var d = b.current,
                e = b.getViewport(),
                c = d.margin,
                f = b.wrap.width() + c[1] + c[3],
                g = b.wrap.height() + c[0] + c[2],
                c = {
                    position: "absolute",
                    top: c[0],
                    left: c[3]
                };
            d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
            c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
            c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
            return c
        },
        _afterZoomIn: function() {
            var a = b.current;
            a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function(d) {
                !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function(a) {
                a.preventDefault();
                b.close()
            }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
        },
        _afterZoomOut: function(a) {
            a = a || b.current;
            f(".fancybox-wrap").trigger("onReset").remove();
            f.extend(b, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            b.trigger("afterClose", a)
        }
    });
    b.transitions = {
        getOrigPosition: function() {
            var a = b.current,
                d = a.element,
                e = a.orig,
                c = {},
                f = 50,
                g = 50,
                h = a.hPadding,
                j = a.wPadding,
                m = b.getViewport();
            !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
            t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);
            if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x;
            return c = {
                top: w(c.top - h * a.topRatio),
                left: w(c.left - j * a.leftRatio),
                width: w(f + j),
                height: w(g + h)
            }
        },
        step: function(a, d) {
            var e, c, f = d.prop;
            c = b.current;
            var g = c.wrapSpace,
                h = c.skinSpace;
            if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" === f ? c : c - g * e - h * e))
        },
        zoomIn: function() {
            var a = b.current,
                d = a.pos,
                e = a.openEffect,
                c = "elastic" === e,
                k = f.extend({
                    opacity: 1
                }, d);
            delete k.position;
            c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
            b.wrap.css(d).animate(k, {
                duration: "none" === e ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: c ? this.step : null,
                complete: b._afterZoomIn
            })
        },
        zoomOut: function() {
            var a = b.current,
                d = a.closeEffect,
                e = "elastic" === d,
                c = {
                    opacity: 0.1
                };
            e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
            b.wrap.animate(c, {
                duration: "none" === d ? 0 : a.closeSpeed,
                easing: a.closeEasing,
                step: e ? this.step : null,
                complete: b._afterZoomOut
            })
        },
        changeIn: function() {
            var a = b.current,
                d = a.nextEffect,
                e = a.pos,
                c = {
                    opacity: 1
                },
                f = b.direction,
                g;
            e.opacity = 0.1;
            "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px"));
            "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
                duration: a.nextSpeed,
                easing: a.nextEasing,
                complete: b._afterZoomIn
            })
        },
        changeOut: function() {
            var a = b.previous,
                d = a.prevEffect,
                e = {
                    opacity: 0.1
                },
                c = b.direction;
            "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
            a.wrap.animate(e, {
                duration: "none" === d ? 0 : a.prevSpeed,
                easing: a.prevEasing,
                complete: function() {
                    f(this).trigger("onReset").remove()
                }
            })
        }
    };
    b.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !s,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: f("html"),
        create: function(a) {
            a = f.extend({}, this.defaults, a);
            this.overlay && this.close();
            this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
            this.fixed = !1;
            a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function(a) {
            var d = this;
            a = f.extend({}, this.defaults, a);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
            this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
            a.closeClick && this.overlay.bind("click.overlay", function(a) {
                if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : d.close(), !1
            });
            this.overlay.css(a.css).show()
        },
        close: function() {
            var a, b;
            n.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));
            f(".fancybox-overlay").remove().hide();
            f.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function() {
            var a = "100%",
                b;
            this.overlay.width(a).height("100%");
            I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());
            this.overlay.width(a).height(p.height())
        },
        onReady: function(a, b) {
            var e = this.overlay;
            f(".fancybox-overlay").stop(!0, !0);
            e || this.create(a);
            a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);
            !0 === a.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(a, b) {
            var e, c;
            b.locked && (!1 !== this.margin && (f("*").filter(function() {
                return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));
            this.open(a)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(a) {
            this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
        }
    };
    b.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(a) {
            var d = b.current,
                e = d.title,
                c = a.type;
            f.isFunction(e) && (e = e.call(d.element, d));
            if (q(e) && "" !== f.trim(e)) {
                d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
                switch (c) {
                    case "inside":
                        c = b.skin;
                        break;
                    case "outside":
                        c = b.wrap;
                        break;
                    case "over":
                        c = b.inner;
                        break;
                    default:
                        c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
                }
                d["top" === a.position ? "prependTo" : "appendTo"](c)
            }
        }
    };
    f.fn.fancybox = function(a) {
        var d, e = f(this),
            c = this.selector || "",
            k = function(g) {
                var h = f(this).blur(),
                    j = d,
                    k, l;
                !g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault())
            };
        a = a || {};
        d = a.index || 0;
        !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    p.ready(function() {
        var a, d;
        f.scrollbarWidth === v && (f.scrollbarWidth = function() {
            var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                b = a.children(),
                b = b.innerWidth() - b.height(99).innerWidth();
            a.remove();
            return b
        });
        if (f.support.fixedPosition === v) {
            a = f.support;
            d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
            d.remove();
            a.fixedPosition = e
        }
        f.extend(b.defaults, {
            scrollbarWidth: f.scrollbarWidth(),
            fixed: f.support.fixedPosition,
            parent: f("body")
        });
        a = f(r).width();
        J.addClass("fancybox-lock-test");
        d = f(r).width();
        J.removeClass("fancybox-lock-test");
        f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
    })
})(window, document, jQuery);
(function($, F) {
    F.transitions.resizeIn = function() {
        var previous = F.previous,
            current = F.current,
            startPos = previous.wrap.stop(true).position(),
            endPos = $.extend({
                opacity: 1
            }, current.pos);
        startPos.width = previous.wrap.width();
        startPos.height = previous.wrap.height();
        previous.wrap.stop(true).trigger('onReset').remove();
        delete endPos.position;
        current.inner.hide();
        current.wrap.css(startPos).animate(endPos, {
            duration: current.nextSpeed,
            easing: current.nextEasing,
            step: F.transitions.step,
            complete: function() {
                F._afterZoomIn();
                current.inner.fadeIn("fast");
            }
        });
    };
}(jQuery, jQuery.fancybox));
/*!
 * Media helper for fancyBox
 * version: 1.0.6 (Fri, 14 Jun 2013)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: true
 *         }
 *     });
 *
 * Set custom URL parameters:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: {
 *                 youtube : {
 *                     params : {
 *                         autoplay : 0
 *                     }
 *                 }
 *             }
 *         }
 *     });
 *
 * Or:
 *     $(".fancybox").fancybox({,
 *         helpers : {
 *             media: true
 *         },
 *         youtube : {
 *             autoplay: 0
 *         }
 *     });
 *
 *  Supports:
 *
 *      Youtube
 *          http://www.youtube.com/watch?v=opj24KnzrWo
 *          http://www.youtube.com/embed/opj24KnzrWo
 *          http://youtu.be/opj24KnzrWo
 *   http://www.youtube-nocookie.com/embed/opj24KnzrWo
 *      Vimeo
 *          http://vimeo.com/40648169
 *          http://vimeo.com/channels/staffpicks/38843628
 *          http://vimeo.com/groups/surrealism/videos/36516384
 *          http://player.vimeo.com/video/45074303
 *      Metacafe
 *          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
 *          http://www.metacafe.com/watch/7635964/
 *      Dailymotion
 *          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
 *      Twitvid
 *          http://twitvid.com/QY7MD
 *      Twitpic
 *          http://twitpic.com/7p93st
 *      Instagram
 *          http://instagr.am/p/IejkuUGxQn/
 *          http://instagram.com/p/IejkuUGxQn/
 *      Google maps
 *          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
 *          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
 *          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
 */
(function($) {
    "use strict";
    var F = $.fancybox,
        format = function(url, rez, params) {
            params = params || '';
            if ($.type(params) === "object") {
                params = $.param(params, true);
            }
            $.each(rez, function(key, value) {
                url = url.replace('$' + key, value || '');
            });
            if (params.length) {
                url += (url.indexOf('?') > 0 ? '&' : '?') + params;
            }
            return url;
        };
    F.helpers.media = {
        defaults: {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: 'opaque',
                    enablejsapi: 1
                },
                type: 'iframe',
                url: '//www.youtube.com/embed/$3'
            },
            vimeo: {
                matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                type: 'iframe',
                url: '//player.vimeo.com/video/$1'
            },
            metacafe: {
                matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
                params: {
                    autoPlay: 'yes'
                },
                type: 'swf',
                url: function(rez, params, obj) {
                    obj.swf.flashVars = 'playerVars=' + $.param(params, true);
                    return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf';
                }
            },
            dailymotion: {
                matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                params: {
                    additionalInfos: 0,
                    autoStart: 1
                },
                type: 'swf',
                url: '//www.dailymotion.com/swf/video/$1'
            },
            twitvid: {
                matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
                params: {
                    autoplay: 0
                },
                type: 'iframe',
                url: '//www.twitvid.com/embed.php?guid=$1'
            },
            twitpic: {
                matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
                type: 'image',
                url: '//twitpic.com/show/full/$1/'
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: 'image',
                url: '//$1/p/$2/media/?size=l'
            },
            google_maps: {
                matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
                type: 'iframe',
                url: function(rez) {
                    return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
                }
            }
        },
        beforeLoad: function(opts, obj) {
            var url = obj.href || '',
                type = false,
                what, item, rez, params;
            for (what in opts) {
                if (opts.hasOwnProperty(what)) {
                    item = opts[what];
                    rez = url.match(item.matcher);
                    if (rez) {
                        type = item.type;
                        params = $.extend(true, {}, item.params, obj[what] || ($.isPlainObject(opts[what]) ? opts[what].params : null));
                        url = $.type(item.url) === "function" ? item.url.call(this, rez, params, obj) : format(item.url, rez, params);
                        break;
                    }
                }
            }
            if (type) {
                obj.href = url;
                obj.type = type;
                obj.autoHeight = false;
            }
        }
    };
}(jQuery));
/*!
 * Thumbnail helper for fancyBox
 * version: 1.0.7 (Mon, 01 Oct 2012)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             thumbs: {
 *                 width  : 50,
 *                 height : 50
 *             }
 *         }
 *     });
 *
 */
(function($) {
    var F = $.fancybox;
    F.helpers.thumbs = {
        defaults: {
            width: 50,
            height: 50,
            position: 'bottom',
            source: function(item) {
                var href;
                if (item.element) {
                    href = $(item.element).find('img').attr('src');
                }
                if (!href && item.type === 'image' && item.href) {
                    href = item.href;
                }
                return href;
            }
        },
        wrap: null,
        list: null,
        width: 0,
        init: function(opts, obj) {
            var that = this,
                list, thumbWidth = opts.width,
                thumbHeight = opts.height,
                thumbSource = opts.source;
            list = '';
            for (var n = 0; n < obj.group.length; n++) {
                list += '<li><a style="width:' + thumbWidth + 'px;height:' + thumbHeight + 'px;" href="javascript:jQuery.fancybox.jumpto(' + n + ');"></a></li>';
            }
            this.wrap = $('<div id="fancybox-thumbs"></div>').addClass(opts.position).appendTo('body');
            this.list = $('<ul>' + list + '</ul>').appendTo(this.wrap);
            $.each(obj.group, function(i) {
                var href = thumbSource(obj.group[i]);
                if (!href) {
                    return;
                }
                $("<img />").load(function() {
                    var width = this.width,
                        height = this.height,
                        widthRatio, heightRatio, parent;
                    if (!that.list || !width || !height) {
                        return;
                    }
                    widthRatio = width / thumbWidth;
                    heightRatio = height / thumbHeight;
                    parent = that.list.children().eq(i).find('a');
                    if (widthRatio >= 1 && heightRatio >= 1) {
                        if (widthRatio > heightRatio) {
                            width = Math.floor(width / heightRatio);
                            height = thumbHeight;
                        } else {
                            width = thumbWidth;
                            height = Math.floor(height / widthRatio);
                        }
                    }
                    $(this).css({
                        width: width,
                        height: height,
                        top: Math.floor(thumbHeight / 2 - height / 2),
                        left: Math.floor(thumbWidth / 2 - width / 2)
                    });
                    parent.width(thumbWidth).height(thumbHeight);
                    $(this).hide().appendTo(parent).fadeIn(300);
                }).attr('src', href);
            });
            this.width = this.list.children().eq(0).outerWidth(true);
            this.list.width(this.width * (obj.group.length + 1)).css('left', Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5)));
        },
        beforeLoad: function(opts, obj) {
            if (obj.group.length < 2) {
                obj.helpers.thumbs = false;
                return;
            }
            obj.margin[opts.position === 'top' ? 0 : 2] += ((opts.height) + 15);
        },
        afterShow: function(opts, obj) {
            if (this.list) {
                this.onUpdate(opts, obj);
            } else {
                this.init(opts, obj);
            }
            this.list.children().removeClass('active').eq(obj.index).addClass('active');
        },
        onUpdate: function(opts, obj) {
            if (this.list) {
                this.list.stop(true).animate({
                    'left': Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5))
                }, 150);
            }
        },
        beforeClose: function() {
            if (this.wrap) {
                this.wrap.remove();
            }
            this.wrap = null;
            this.list = null;
            this.width = 0;
        }
    }
}(jQuery));;
(function($) {
    $.realsoccer_flexslider = function(el, options) {
        var slider = $(el);
        slider.vars = $.extend({}, $.realsoccer_flexslider.defaults, options);
        var namespace = slider.vars.namespace,
            msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            touch = (("ontouchstart" in window) || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
            eventType = "click touchend MSPointerUp",
            watchedEvent = "",
            watchedEventClearTimer, vertical = slider.vars.direction === "vertical",
            reverse = slider.vars.reverse,
            carousel = (slider.vars.itemWidth > 0),
            fade = slider.vars.animation === "fade",
            asNav = slider.vars.asNavFor !== "",
            methods = {},
            focused = true;
        $.data(el, "realsoccer_flexslider", slider);
        methods = {
            init: function() {
                slider.animating = false;
                slider.currentSlide = parseInt((slider.vars.startAt ? slider.vars.startAt : 0));
                if (isNaN(slider.currentSlide)) slider.currentSlide = 0;
                slider.animatingTo = slider.currentSlide;
                slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
                slider.containerSelector = slider.vars.selector.substr(0, slider.vars.selector.search(' '));
                slider.slides = $(slider.vars.selector, slider);
                slider.container = $(slider.containerSelector, slider);
                slider.count = slider.slides.length;
                slider.syncExists = $(slider.vars.sync).length > 0;
                if (slider.vars.animation === "slide") slider.vars.animation = "swing";
                slider.prop = (vertical) ? "top" : "marginLeft";
                slider.args = {};
                slider.manualPause = false;
                slider.stopped = false;
                slider.started = false;
                slider.startTimeout = null;
                slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function() {
                    var obj = document.createElement('div'),
                        props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
                    for (var i in props) {
                        if (obj.style[props[i]] !== undefined) {
                            slider.pfx = props[i].replace('Perspective', '').toLowerCase();
                            slider.prop = "-" + slider.pfx + "-transform";
                            return true;
                        }
                    }
                    return false;
                }());
                if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
                if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);
                if (slider.vars.randomize) {
                    slider.slides.sort(function() {
                        return (Math.round(Math.random()) - 0.5);
                    });
                    slider.container.empty().append(slider.slides);
                }
                slider.doMath();
                slider.setup("init");
                if (slider.vars.controlNav) methods.controlNav.setup();
                if (slider.vars.directionNav) methods.directionNav.setup();
                if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
                    $(document).bind('keyup', function(event) {
                        var keycode = event.keyCode;
                        if (!slider.animating && (keycode === 39 || keycode === 37)) {
                            var target = (keycode === 39) ? slider.getTarget('next') : (keycode === 37) ? slider.getTarget('prev') : false;
                            slider.flexAnimate(target, slider.vars.pauseOnAction);
                        }
                    });
                }
                if (slider.vars.mousewheel) {
                    slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
                        event.preventDefault();
                        var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    });
                }
                if (slider.vars.pausePlay) methods.pausePlay.setup();
                if (slider.vars.slideshow && slider.vars.pauseInvisible) methods.pauseInvisible.init();
                if (slider.vars.slideshow) {
                    if (slider.vars.pauseOnHover) {
                        slider.hover(function() {
                            if (!slider.manualPlay && !slider.manualPause) slider.pause();
                        }, function() {
                            if (!slider.manualPause && !slider.manualPlay && !slider.stopped) slider.play();
                        });
                    }
                    if (!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
                        (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay): slider.play();
                    }
                }
                if (asNav) methods.asNav.setup();
                if (touch && slider.vars.touch) methods.touch();
                if (!fade || (fade && slider.vars.smoothHeight)) $(window).bind("resize orientationchange focus", methods.resize);
                slider.find("img").attr("draggable", "false");
                setTimeout(function() {
                    slider.vars.start(slider);
                }, 200);
            },
            asNav: {
                setup: function() {
                    slider.asNav = true;
                    slider.animatingTo = Math.floor(slider.currentSlide / slider.move);
                    slider.currentItem = slider.currentSlide;
                    slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
                    if (!msGesture) {
                        slider.slides.click(function(e) {
                            e.preventDefault();
                            var $slide = $(this),
                                target = $slide.index();
                            var posFromLeft = $slide.offset().left - $(slider).scrollLeft();
                            if (posFromLeft <= 0 && $slide.hasClass(namespace + 'active-slide')) {
                                slider.flexAnimate(slider.getTarget("prev"), true);
                            } else if (!$(slider.vars.asNavFor).data('realsoccer_flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
                                slider.direction = (slider.currentItem < target) ? "next" : "prev";
                                slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                            }
                        });
                    } else {
                        el._slider = slider;
                        slider.slides.each(function() {
                            var that = this;
                            that._gesture = new MSGesture();
                            that._gesture.target = that;
                            that.addEventListener("MSPointerDown", function(e) {
                                e.preventDefault();
                                if (e.currentTarget._gesture)
                                    e.currentTarget._gesture.addPointer(e.pointerId);
                            }, false);
                            that.addEventListener("MSGestureTap", function(e) {
                                e.preventDefault();
                                var $slide = $(this),
                                    target = $slide.index();
                                if (!$(slider.vars.asNavFor).data('realsoccer_flexslider').animating && !$slide.hasClass('active')) {
                                    slider.direction = (slider.currentItem < target) ? "next" : "prev";
                                    slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                                }
                            });
                        });
                    }
                }
            },
            controlNav: {
                setup: function() {
                    if (!slider.manualControls) {
                        methods.controlNav.setupPaging();
                    } else {
                        methods.controlNav.setupManual();
                    }
                },
                setupPaging: function() {
                    var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
                        j = 1,
                        item, slide;
                    slider.controlNavScaffold = $('<ol class="' + namespace + 'control-nav ' + namespace + type + '"></ol>');
                    if (slider.pagingCount > 1) {
                        for (var i = 0; i < slider.pagingCount; i++) {
                            slide = slider.slides.eq(i);
                            item = (slider.vars.controlNav === "thumbnails") ? '<img src="' + slide.attr('data-thumb') + '"/>' : '<a>' + j + '</a>';
                            if ('thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions) {
                                var captn = slide.attr('data-thumbcaption');
                                if ('' != captn && undefined != captn) item += '<span class="' + namespace + 'caption">' + captn + '</span>';
                            }
                            slider.controlNavScaffold.append('<li>' + item + '</li>');
                            j++;
                        }
                    }
                    (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold): slider.append($('<div />').addClass('flex-control-nav-wrapper').append(slider.controlNavScaffold));
                    methods.controlNav.set();
                    methods.controlNav.active();
                    slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
                        event.preventDefault();
                        if (watchedEvent === "" || watchedEvent === event.type) {
                            var $this = $(this),
                                target = slider.controlNav.index($this);
                            if (!$this.hasClass(namespace + 'active')) {
                                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                                slider.flexAnimate(target, slider.vars.pauseOnAction);
                            }
                        }
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();
                    });
                },
                setupManual: function() {
                    slider.controlNav = slider.manualControls;
                    methods.controlNav.active();
                    slider.controlNav.bind(eventType, function(event) {
                        event.preventDefault();
                        if (watchedEvent === "" || watchedEvent === event.type) {
                            var $this = $(this),
                                target = slider.controlNav.index($this);
                            if (!$this.hasClass(namespace + 'active')) {
                                (target > slider.currentSlide) ? slider.direction = "next": slider.direction = "prev";
                                slider.flexAnimate(target, slider.vars.pauseOnAction);
                            }
                        }
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();
                    });
                },
                set: function() {
                    var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
                    slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
                },
                active: function() {
                    slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
                },
                update: function(action, pos) {
                    if (slider.pagingCount > 1 && action === "add") {
                        slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
                    } else if (slider.pagingCount === 1) {
                        slider.controlNavScaffold.find('li').remove();
                    } else {
                        slider.controlNav.eq(pos).closest('li').remove();
                    }
                    methods.controlNav.set();
                    (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action): methods.controlNav.active();
                }
            },
            directionNav: {
                setup: function() {
                    var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');
                    if (slider.controlsContainer) {
                        $(slider.controlsContainer).append(directionNavScaffold);
                        slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
                    } else {
                        slider.append(directionNavScaffold);
                        slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
                    }
                    methods.directionNav.update();
                    slider.directionNav.bind(eventType, function(event) {
                        event.preventDefault();
                        var target;
                        if (watchedEvent === "" || watchedEvent === event.type) {
                            target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
                            slider.flexAnimate(target, slider.vars.pauseOnAction);
                        }
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();
                    });
                },
                update: function() {
                    var disabledClass = namespace + 'disabled';
                    if (slider.pagingCount === 1) {
                        slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
                    } else if (!slider.vars.animationLoop) {
                        if (slider.animatingTo === 0) {
                            slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
                        } else if (slider.animatingTo === slider.last) {
                            slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
                        } else {
                            slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
                        }
                    } else {
                        slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
                    }
                }
            },
            pausePlay: {
                setup: function() {
                    var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');
                    if (slider.controlsContainer) {
                        slider.controlsContainer.append(pausePlayScaffold);
                        slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
                    } else {
                        slider.append(pausePlayScaffold);
                        slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
                    }
                    methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');
                    slider.pausePlay.bind(eventType, function(event) {
                        event.preventDefault();
                        if (watchedEvent === "" || watchedEvent === event.type) {
                            if ($(this).hasClass(namespace + 'pause')) {
                                slider.manualPause = true;
                                slider.manualPlay = false;
                                slider.pause();
                            } else {
                                slider.manualPause = false;
                                slider.manualPlay = true;
                                slider.play();
                            }
                        }
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();
                    });
                },
                update: function(state) {
                    (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText): slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
                }
            },
            touch: function() {
                var startX, startY, offset, cwidth, dx, startT, scrolling = false,
                    localX = 0,
                    localY = 0,
                    accDx = 0;
                if (!msGesture) {
                    el.addEventListener('touchstart', onTouchStart, false);

                    function onTouchStart(e) {
                        if (slider.animating) {
                            e.preventDefault();
                        } else if ((window.navigator.msPointerEnabled) || e.touches.length === 1) {
                            slider.pause();
                            cwidth = (vertical) ? slider.h : slider.w;
                            startT = Number(new Date());
                            localX = e.touches[0].pageX;
                            localY = e.touches[0].pageY;
                            offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 : (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) : (carousel && slider.currentSlide === slider.last) ? slider.limit : (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide : (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                            startX = (vertical) ? localY : localX;
                            startY = (vertical) ? localX : localY;
                            el.addEventListener('touchmove', onTouchMove, false);
                            el.addEventListener('touchend', onTouchEnd, false);
                        }
                    }

                    function onTouchMove(e) {
                        localX = e.touches[0].pageX;
                        localY = e.touches[0].pageY;
                        dx = (vertical) ? startX - localY : startX - localX;
                        scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));
                        var fxms = 500;
                        if (!scrolling || Number(new Date()) - startT > fxms) {
                            e.preventDefault();
                            if (!fade && slider.transitions) {
                                if (!slider.vars.animationLoop) {
                                    dx = dx / ((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx) / cwidth + 2) : 1);
                                }
                                slider.setProps(offset + dx, "setTouch");
                            }
                        }
                    }

                    function onTouchEnd(e) {
                        el.removeEventListener('touchmove', onTouchMove, false);
                        if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                            var updateDx = (reverse) ? -dx : dx,
                                target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');
                            if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
                                slider.flexAnimate(target, slider.vars.pauseOnAction);
                            } else {
                                if (!fade) slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                            }
                        }
                        el.removeEventListener('touchend', onTouchEnd, false);
                        startX = null;
                        startY = null;
                        dx = null;
                        offset = null;
                    }
                } else {
                    el.style.msTouchAction = "none";
                    el._gesture = new MSGesture();
                    el._gesture.target = el;
                    el.addEventListener("MSPointerDown", onMSPointerDown, false);
                    el._slider = slider;
                    el.addEventListener("MSGestureChange", onMSGestureChange, false);
                    el.addEventListener("MSGestureEnd", onMSGestureEnd, false);

                    function onMSPointerDown(e) {
                        e.stopPropagation();
                        if (slider.animating) {
                            e.preventDefault();
                        } else {
                            slider.pause();
                            el._gesture.addPointer(e.pointerId);
                            accDx = 0;
                            cwidth = (vertical) ? slider.h : slider.w;
                            startT = Number(new Date());
                            offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 : (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) : (carousel && slider.currentSlide === slider.last) ? slider.limit : (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide : (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                        }
                    }

                    function onMSGestureChange(e) {
                        e.stopPropagation();
                        var slider = e.target._slider;
                        if (!slider) {
                            return;
                        }
                        var transX = -e.translationX,
                            transY = -e.translationY;
                        accDx = accDx + ((vertical) ? transY : transX);
                        dx = accDx;
                        scrolling = (vertical) ? (Math.abs(accDx) < Math.abs(-transX)) : (Math.abs(accDx) < Math.abs(-transY));
                        if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
                            setImmediate(function() {
                                el._gesture.stop();
                            });
                            return;
                        }
                        if (!scrolling || Number(new Date()) - startT > 500) {
                            e.preventDefault();
                            if (!fade && slider.transitions) {
                                if (!slider.vars.animationLoop) {
                                    dx = accDx / ((slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0) ? (Math.abs(accDx) / cwidth + 2) : 1);
                                }
                                slider.setProps(offset + dx, "setTouch");
                            }
                        }
                    }

                    function onMSGestureEnd(e) {
                        e.stopPropagation();
                        var slider = e.target._slider;
                        if (!slider) {
                            return;
                        }
                        if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                            var updateDx = (reverse) ? -dx : dx,
                                target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');
                            if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
                                slider.flexAnimate(target, slider.vars.pauseOnAction);
                            } else {
                                if (!fade) slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                            }
                        }
                        startX = null;
                        startY = null;
                        dx = null;
                        offset = null;
                        accDx = 0;
                    }
                }
            },
            resize: function() {
                if (!slider.animating && slider.is(':visible')) {
                    if (!carousel) slider.doMath();
                    if (fade) {
                        methods.smoothHeight();
                    } else if (carousel) {
                        slider.slides.width(slider.computedW);
                        slider.update(slider.pagingCount);
                        slider.setProps();
                    } else if (vertical) {
                        slider.viewport.height(slider.h);
                        slider.setProps(slider.h, "setTotal");
                    } else {
                        if (slider.vars.smoothHeight) methods.smoothHeight();
                        slider.newSlides.width(slider.computedW);
                        slider.setProps(slider.computedW, "setTotal");
                    }
                }
            },
            smoothHeight: function(dur) {
                if (!vertical || fade) {
                    var $obj = (fade) ? slider : slider.viewport;
                    (dur) ? $obj.animate({
                        "height": slider.slides.eq(slider.animatingTo).outerHeight()
                    }, dur): $obj.height(slider.slides.eq(slider.animatingTo).outerHeight());
                }
            },
            sync: function(action) {
                var $obj = $(slider.vars.sync).data("realsoccer_flexslider"),
                    target = slider.animatingTo;
                switch (action) {
                    case "animate":
                        $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true);
                        break;
                    case "play":
                        if (!$obj.playing && !$obj.asNav) {
                            $obj.play();
                        }
                        break;
                    case "pause":
                        $obj.pause();
                        break;
                }
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var prefixes = ['webkit', 'moz', 'ms', 'o'];
                    if ('hidden' in document) return 'hidden';
                    for (var i = 0; i < prefixes.length; i++) {
                        if ((prefixes[i] + 'Hidden') in document)
                            methods.pauseInvisible.visProp = prefixes[i] + 'Hidden';
                    }
                    if (methods.pauseInvisible.visProp) {
                        var evtname = methods.pauseInvisible.visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
                        document.addEventListener(evtname, function() {
                            if (methods.pauseInvisible.isHidden()) {
                                if (slider.startTimeout) clearTimeout(slider.startTimeout);
                                else slider.pause();
                            } else {
                                if (slider.started) slider.play();
                                else(slider.vars.initDelay > 0) ? setTimeout(slider.play, slider.vars.initDelay) : slider.play();
                            }
                        });
                    }
                },
                isHidden: function() {
                    return document[methods.pauseInvisible.visProp] || false;
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(watchedEventClearTimer);
                watchedEventClearTimer = setTimeout(function() {
                    watchedEvent = "";
                }, 3000);
            }
        }
        slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
            if (!slider.vars.animationLoop && target !== slider.currentSlide) {
                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
            }
            if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";
            if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
                if (asNav && withSync) {
                    var master = $(slider.vars.asNavFor).data('realsoccer_flexslider');
                    slider.atEnd = target === 0 || target === slider.count - 1;
                    master.flexAnimate(target, true, false, true, fromNav);
                    slider.direction = (slider.currentItem < target) ? "next" : "prev";
                    master.direction = slider.direction;
                    if (Math.ceil((target + 1) / slider.visible) - 1 !== slider.currentSlide && target !== 0) {
                        slider.currentItem = target;
                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
                        target = Math.floor(target / slider.visible);
                    } else {
                        slider.currentItem = target;
                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
                        return false;
                    }
                }
                slider.animating = true;
                slider.animatingTo = target;
                if (pause) slider.pause();
                slider.vars.before(slider);
                if (slider.syncExists && !fromNav) methods.sync("animate");
                if (slider.vars.controlNav) methods.controlNav.active();
                if (!carousel) slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');
                slider.atEnd = target === 0 || target === slider.last;
                if (slider.vars.directionNav) methods.directionNav.update();
                if (target === slider.last) {
                    slider.vars.end(slider);
                    if (!slider.vars.animationLoop) slider.pause();
                }
                if (!fade) {
                    var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
                        margin, slideString, calcNext;
                    if (carousel) {
                        margin = slider.vars.itemMargin;
                        calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
                        slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
                    } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
                        slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
                    } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
                        slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
                    } else {
                        slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
                    }
                    slider.setProps(slideString, "", slider.vars.animationSpeed);
                    if (slider.transitions) {
                        if (!slider.vars.animationLoop || !slider.atEnd) {
                            slider.animating = false;
                            slider.currentSlide = slider.animatingTo;
                        }
                        slider.container.unbind("webkitTransitionEnd transitionend");
                        slider.container.bind("webkitTransitionEnd transitionend", function() {
                            slider.wrapup(dimension);
                        });
                    } else {
                        slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function() {
                            slider.wrapup(dimension);
                        });
                    }
                } else {
                    if (!touch) {
                        slider.slides.eq(slider.currentSlide).css({
                            "zIndex": 1
                        }).animate({
                            "opacity": 0
                        }, slider.vars.animationSpeed, slider.vars.easing);
                        slider.slides.eq(target).css({
                            "zIndex": 2
                        }).animate({
                            "opacity": 1
                        }, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);
                    } else {
                        slider.slides.eq(slider.currentSlide).css({
                            "opacity": 0,
                            "zIndex": 1
                        });
                        slider.slides.eq(target).css({
                            "opacity": 1,
                            "zIndex": 2
                        });
                        slider.wrapup(dimension);
                    }
                }
                if (slider.vars.smoothHeight) methods.smoothHeight(slider.vars.animationSpeed);
            }
        }
        slider.wrapup = function(dimension) {
            if (!fade && !carousel) {
                if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
                    slider.setProps(dimension, "jumpEnd");
                } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
                    slider.setProps(dimension, "jumpStart");
                }
            }
            slider.animating = false;
            slider.currentSlide = slider.animatingTo;
            slider.vars.after(slider);
        }
        slider.animateSlides = function() {
            if (!slider.animating && focused) slider.flexAnimate(slider.getTarget("next"));
        }
        slider.pause = function() {
            clearInterval(slider.animatedSlides);
            slider.animatedSlides = null;
            slider.playing = false;
            if (slider.vars.pausePlay) methods.pausePlay.update("play");
            if (slider.syncExists) methods.sync("pause");
        }
        slider.play = function() {
            if (slider.playing) clearInterval(slider.animatedSlides);
            slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
            slider.started = slider.playing = true;
            if (slider.vars.pausePlay) methods.pausePlay.update("pause");
            if (slider.syncExists) methods.sync("play");
        }
        slider.stop = function() {
            slider.pause();
            slider.stopped = true;
        }
        slider.canAdvance = function(target, fromNav) {
            var last = (asNav) ? slider.pagingCount - 1 : slider.last;
            return (fromNav) ? true : (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true : (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false : (target === slider.currentSlide && !asNav) ? false : (slider.vars.animationLoop) ? true : (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false : (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false : true;
        }
        slider.getTarget = function(dir) {
            slider.direction = dir;
            if (dir === "next") {
                return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
            } else {
                return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
            }
        }
        slider.setProps = function(pos, special, dur) {
            var target = (function() {
                var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,
                    posCalc = (function() {
                        if (carousel) {
                            return (special === "setTouch") ? pos : (reverse && slider.animatingTo === slider.last) ? 0 : (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) : (slider.animatingTo === slider.last) ? slider.limit : posCheck;
                        } else {
                            switch (special) {
                                case "setTotal":
                                    return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                                case "setTouch":
                                    return (reverse) ? pos : pos;
                                case "jumpEnd":
                                    return (reverse) ? pos : slider.count * pos;
                                case "jumpStart":
                                    return (reverse) ? slider.count * pos : pos;
                                default:
                                    return pos;
                            }
                        }
                    }());
                return (posCalc * -1) + "px";
            }());
            if (slider.transitions) {
                target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
                dur = (dur !== undefined) ? (dur / 1000) + "s" : "0s";
                slider.container.css("-" + slider.pfx + "-transition-duration", dur);
            }
            slider.args[slider.prop] = target;
            if (slider.transitions || dur === undefined) slider.container.css(slider.args);
        }
        slider.setup = function(type) {
            if (!fade) {
                var sliderOffset, arr;
                if (type === "init") {
                    slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({
                        "overflow": "hidden",
                        "position": "relative"
                    }).appendTo(slider).append(slider.container);
                    slider.cloneCount = 0;
                    slider.cloneOffset = 0;
                    if (reverse) {
                        arr = $.makeArray(slider.slides).reverse();
                        slider.slides = $(arr);
                        slider.container.empty().append(slider.slides);
                    }
                }
                if (slider.vars.animationLoop && !carousel) {
                    slider.cloneCount = 2;
                    slider.cloneOffset = 1;
                    if (type !== "init") slider.container.find('.clone').remove();
                    slider.container.append(slider.slides.first().clone().addClass('clone').attr('aria-hidden', 'true')).prepend(slider.slides.last().clone().addClass('clone').attr('aria-hidden', 'true'));
                }
                slider.newSlides = $(slider.vars.selector, slider);
                sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
                if (vertical && !carousel) {
                    slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                    setTimeout(function() {
                        slider.newSlides.css({
                            "display": "block"
                        });
                        slider.doMath();
                        slider.viewport.height(slider.h);
                        slider.setProps(sliderOffset * slider.h, "init");
                    }, (type === "init") ? 100 : 0);
                } else {
                    slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
                    slider.setProps(sliderOffset * slider.computedW, "init");
                    setTimeout(function() {
                        slider.doMath();
                        slider.newSlides.css({
                            "width": slider.computedW,
                            "float": "left",
                            "display": "block"
                        });
                        if (slider.vars.smoothHeight) methods.smoothHeight();
                    }, (type === "init") ? 100 : 0);
                }
            } else {
                slider.slides.css({
                    "width": "100%",
                    "float": "left",
                    "marginRight": "-100%",
                    "position": "relative"
                });
                if (type === "init") {
                    if (!touch) {
                        slider.slides.css({
                            "opacity": 0,
                            "display": "block",
                            "zIndex": 1
                        }).eq(slider.currentSlide).css({
                            "zIndex": 2
                        }).animate({
                            "opacity": 1
                        }, slider.vars.animationSpeed, slider.vars.easing);
                    } else {
                        slider.slides.css({
                            "opacity": 0,
                            "display": "block",
                            "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease",
                            "zIndex": 1
                        }).eq(slider.currentSlide).css({
                            "opacity": 1,
                            "zIndex": 2
                        });
                    }
                }
                if (slider.vars.smoothHeight) methods.smoothHeight();
            }
            if (!carousel) slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
        }
        slider.doMath = function() {
            var slide = slider.slides.first(),
                slideMargin = slider.vars.itemMargin,
                minItems = slider.vars.minItems,
                maxItems = slider.vars.maxItems;
            if ($(window).width() < 767) {
                minItems = 1;
                maxItems = 1;
            }
            if ($(window).width() < 419) {
                minItems = 1;
                maxItems = 1;
            }
            slider.w = (slider.viewport === undefined) ? slider.width() : slider.viewport.width();
            slider.h = slide.height();
            slider.boxPadding = slide.outerWidth() - slide.width();
            if (carousel) {
                slider.itemT = slider.vars.itemWidth + slideMargin;
                slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
                slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
                slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1))) / minItems : (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1))) / maxItems : (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;
                slider.visible = Math.floor((slider.w + slideMargin) / (slider.itemW + slideMargin - 1));
                slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible) ? slider.vars.move : slider.visible;
                slider.pagingCount = Math.ceil(((slider.count - slider.visible) / slider.move) + 1);
                slider.last = slider.pagingCount - 1;
                slider.limit = (slider.pagingCount === 1) ? 0 : (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
            } else {
                slider.itemW = slider.w;
                slider.pagingCount = slider.count;
                slider.last = slider.count - 1;
            }
            slider.computedW = slider.itemW - slider.boxPadding;
        }
        slider.update = function(pos, action) {
            slider.doMath();
            if (!carousel) {
                if (pos < slider.currentSlide) {
                    slider.currentSlide += 1;
                } else if (pos <= slider.currentSlide && pos !== 0) {
                    slider.currentSlide -= 1;
                }
                slider.animatingTo = slider.currentSlide;
            }
            if (slider.vars.controlNav && !slider.manualControls) {
                if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
                    methods.controlNav.update("add");
                } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
                    if (carousel && slider.currentSlide > slider.last) {
                        slider.currentSlide -= 1;
                        slider.animatingTo -= 1;
                    }
                    methods.controlNav.update("remove", slider.last);
                }
            }
            if (slider.vars.directionNav) methods.directionNav.update();
        }
        slider.addSlide = function(obj, pos) {
            var $obj = $(obj);
            slider.count += 1;
            slider.last = slider.count - 1;
            if (vertical && reverse) {
                (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj): slider.container.prepend($obj);
            } else {
                (pos !== undefined) ? slider.slides.eq(pos).before($obj): slider.container.append($obj);
            }
            slider.update(pos, "add");
            slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
            slider.setup();
            slider.vars.added(slider);
        }
        slider.removeSlide = function(obj) {
            var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;
            slider.count -= 1;
            slider.last = slider.count - 1;
            if (isNaN(obj)) {
                $(obj, slider.slides).remove();
            } else {
                (vertical && reverse) ? slider.slides.eq(slider.last).remove(): slider.slides.eq(obj).remove();
            }
            slider.doMath();
            slider.update(pos, "remove");
            slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
            slider.setup();
            slider.vars.removed(slider);
        }
        methods.init();
    }
    $(window).blur(function(e) {
        focused = false;
    }).focus(function(e) {
        focused = true;
    });
    $.realsoccer_flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides:first > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: false,
        animationLoop: true,
        smoothHeight: false,
        startAt: 0,
        slideshow: true,
        slideshowSpeed: 7000,
        animationSpeed: 600,
        initDelay: 0,
        randomize: false,
        thumbCaptions: false,
        pauseOnAction: true,
        pauseOnHover: false,
        pauseInvisible: true,
        useCSS: true,
        touch: true,
        video: false,
        controlNav: true,
        directionNav: true,
        prevText: "Previous",
        nextText: "Next",
        keyboard: true,
        multipleKeyboard: false,
        mousewheel: false,
        pausePlay: false,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: true,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {}
    }
    $.fn.realsoccer_flexslider = function(options) {
        if (options === undefined) options = {};
        if (typeof options === "object") {
            return this.each(function() {
                var $this = $(this),
                    selector = (options.selector) ? options.selector : ".slides > li",
                    $slides = $this.find(selector);
                if (($slides.length === 1 && options.allowOneSlide === true) || $slides.length === 0) {
                    $slides.fadeIn(400);
                    if (options.start) options.start($this);
                } else if ($this.data('realsoccer_flexslider') === undefined) {
                    new $.realsoccer_flexslider(this, options);
                }
            });
        } else {
            var $slider = $(this).data('realsoccer_flexslider');
            switch (options) {
                case "play":
                    $slider.play();
                    break;
                case "pause":
                    $slider.pause();
                    break;
                case "stop":
                    $slider.stop();
                    break;
                case "next":
                    $slider.flexAnimate($slider.getTarget("next"), true);
                    break;
                case "prev":
                case "previous":
                    $slider.flexAnimate($slider.getTarget("prev"), true);
                    break;
                default:
                    if (typeof options === "number") $slider.flexAnimate(options, true);
            }
        }
    }
})(jQuery);

(function(a, b, c) {
    "use strict";
    var d = a.document,
        e = a.Modernizr,
        f = function(a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        },
        g = "Moz Webkit O Ms".split(" "),
        h = function(a) {
            var b = d.documentElement.style,
                c;
            if (typeof b[a] == "string") return a;
            a = f(a);
            for (var e = 0, h = g.length; e < h; e++) {
                c = g[e] + a;
                if (typeof b[c] == "string") return c
            }
        },
        i = h("transform"),
        j = h("transitionProperty"),
        k = {
            csstransforms: function() {
                return !!i
            },
            csstransforms3d: function() {
                var a = !!h("perspective");
                if (a) {
                    var c = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
                        d = "@media (" + c.join("transform-3d),(") + "modernizr)",
                        e = b("<style>" + d + "{#modernizr{height:3px}}" + "</style>").appendTo("head"),
                        f = b('<div id="modernizr" />').appendTo("html");
                    a = f.height() === 3, f.remove(), e.remove()
                }
                return a
            },
            csstransitions: function() {
                return !!j
            }
        },
        l;
    if (e)
        for (l in k) e.hasOwnProperty(l) || e.addTest(l, k[l]);
    else {
        e = a.Modernizr = {
            _version: "1.6ish: miniModernizr for Isotope"
        };
        var m = " ",
            n;
        for (l in k) n = k[l](), e[l] = n, m += " " + (n ? "" : "no-") + l;
        b("html").addClass(m)
    }
    if (e.csstransforms) {
        var o = e.csstransforms3d ? {
                translate: function(a) {
                    return "translate3d(" + a[0] + "px, " + a[1] + "px, 0) "
                },
                scale: function(a) {
                    return "scale3d(" + a + ", " + a + ", 1) "
                }
            } : {
                translate: function(a) {
                    return "translate(" + a[0] + "px, " + a[1] + "px) "
                },
                scale: function(a) {
                    return "scale(" + a + ") "
                }
            },
            p = function(a, c, d) {
                var e = b.data(a, "isoTransform") || {},
                    f = {},
                    g, h = {},
                    j;
                f[c] = d, b.extend(e, f);
                for (g in e) j = e[g], h[g] = o[g](j);
                var k = h.translate || "",
                    l = h.scale || "",
                    m = k + l;
                b.data(a, "isoTransform", e), a.style[i] = m
            };
        b.cssNumber.scale = !0, b.cssHooks.scale = {
            set: function(a, b) {
                p(a, "scale", b)
            },
            get: function(a, c) {
                var d = b.data(a, "isoTransform");
                return d && d.scale ? d.scale : 1
            }
        }, b.fx.step.scale = function(a) {
            b.cssHooks.scale.set(a.elem, a.now + a.unit)
        }, b.cssNumber.translate = !0, b.cssHooks.translate = {
            set: function(a, b) {
                p(a, "translate", b)
            },
            get: function(a, c) {
                var d = b.data(a, "isoTransform");
                return d && d.translate ? d.translate : [0, 0]
            }
        }
    }
    var q, r;
    e.csstransitions && (q = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd otransitionend",
        transitionProperty: "transitionend"
    }[j], r = h("transitionDuration"));
    var s = b.event,
        t = b.event.handle ? "handle" : "dispatch",
        u;
    s.special.smartresize = {
        setup: function() {
            b(this).bind("resize", s.special.smartresize.handler)
        },
        teardown: function() {
            b(this).unbind("resize", s.special.smartresize.handler)
        },
        handler: function(a, b) {
            var c = this,
                d = arguments;
            a.type = "smartresize", u && clearTimeout(u), u = setTimeout(function() {
                s[t].apply(c, d)
            }, b === "execAsap" ? 0 : 100)
        }
    }, b.fn.smartresize = function(a) {
        return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
    }, b.Isotope = function(a, c, d) {
        this.element = b(c), this._create(a), this._init(d)
    };
    var v = ["width", "height"],
        w = b(a);
    b.Isotope.settings = {
        resizable: !0,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: {
            opacity: 0,
            scale: .001
        },
        visibleStyle: {
            opacity: 1,
            scale: 1
        },
        containerStyle: {
            position: "relative",
            overflow: "hidden"
        },
        animationEngine: "best-available",
        animationOptions: {
            queue: !1,
            duration: 800
        },
        sortBy: "original-order",
        sortAscending: !0,
        resizesContainer: !0,
        transformsEnabled: !0,
        itemPositionDataEnabled: !1
    }, b.Isotope.prototype = {
        _create: function(a) {
            this.options = b.extend({}, b.Isotope.settings, a), this.styleQueue = [], this.elemCount = 0;
            var c = this.element[0].style;
            this.originalStyle = {};
            var d = v.slice(0);
            for (var e in this.options.containerStyle) d.push(e);
            for (var f = 0, g = d.length; f < g; f++) e = d[f], this.originalStyle[e] = c[e] || "";
            this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
            var h = {
                "original-order": function(a, b) {
                    return b.elemCount++, b.elemCount
                },
                random: function() {
                    return Math.random()
                }
            };
            this.options.getSortData = b.extend(this.options.getSortData, h), this.reloadItems(), this.offset = {
                left: parseInt(this.element.css("padding-left") || 0, 10),
                top: parseInt(this.element.css("padding-top") || 0, 10)
            };
            var i = this;
            setTimeout(function() {
                i.element.addClass(i.options.containerClass)
            }, 0), this.options.resizable && w.bind("smartresize.isotope", function() {
                i.resize()
            }), this.element.delegate("." + this.options.hiddenClass, "click", function() {
                return !1
            })
        },
        _getAtoms: function(a) {
            var b = this.options.itemSelector,
                c = b ? a.filter(b).add(a.find(b)) : a,
                d = {
                    position: "absolute"
                };
            return c = c.filter(function(a, b) {
                return b.nodeType === 1
            }), this.usingTransforms && (d.left = 0, d.top = 0), c.css(d).addClass(this.options.itemClass), this.updateSortData(c, !0), c
        },
        _init: function(a) {
            this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(a)
        },
        option: function(a) {
            if (b.isPlainObject(a)) {
                this.options = b.extend(!0, this.options, a);
                var c;
                for (var d in a) c = "_update" + f(d), this[c] && this[c]()
            }
        },
        _updateAnimationEngine: function() {
            var a = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, ""),
                b;
            switch (a) {
                case "css":
                case "none":
                    b = !1;
                    break;
                case "jquery":
                    b = !0;
                    break;
                default:
                    b = !e.csstransitions
            }
            this.isUsingJQueryAnimation = b, this._updateUsingTransforms()
        },
        _updateTransformsEnabled: function() {
            this._updateUsingTransforms()
        },
        _updateUsingTransforms: function() {
            var a = this.usingTransforms = this.options.transformsEnabled && e.csstransforms && e.csstransitions && !this.isUsingJQueryAnimation;
            a || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = a ? this._translate : this._positionAbs
        },
        _filter: function(a) {
            var b = this.options.filter === "" ? "*" : this.options.filter;
            if (!b) return a;
            var c = this.options.hiddenClass,
                d = "." + c,
                e = a.filter(d),
                f = e;
            if (b !== "*") {
                f = e.filter(b);
                var g = a.not(d).not(b).addClass(c);
                this.styleQueue.push({
                    $el: g,
                    style: this.options.hiddenStyle
                })
            }
            return this.styleQueue.push({
                $el: f,
                style: this.options.visibleStyle
            }), f.removeClass(c), a.filter(b)
        },
        updateSortData: function(a, c) {
            var d = this,
                e = this.options.getSortData,
                f, g;
            a.each(function() {
                f = b(this), g = {};
                for (var a in e) !c && a === "original-order" ? g[a] = b.data(this, "isotope-sort-data")[a] : g[a] = e[a](f, d);
                b.data(this, "isotope-sort-data", g)
            })
        },
        _sort: function() {
            var a = this.options.sortBy,
                b = this._getSorter,
                c = this.options.sortAscending ? 1 : -1,
                d = function(d, e) {
                    var f = b(d, a),
                        g = b(e, a);
                    return f === g && a !== "original-order" && (f = b(d, "original-order"), g = b(e, "original-order")), (f > g ? 1 : f < g ? -1 : 0) * c
                };
            this.$filteredAtoms.sort(d)
        },
        _getSorter: function(a, c) {
            return b.data(a, "isotope-sort-data")[c]
        },
        _translate: function(a, b) {
            return {
                translate: [a, b]
            }
        },
        _positionAbs: function(a, b) {
            return {
                left: a,
                top: b
            }
        },
        _pushPosition: function(a, b, c) {
            b = Math.round(b + this.offset.left), c = Math.round(c + this.offset.top);
            var d = this.getPositionStyles(b, c);
            this.styleQueue.push({
                $el: a,
                style: d
            }), this.options.itemPositionDataEnabled && a.data("isotope-item-position", {
                x: b,
                y: c
            })
        },
        layout: function(a, b) {
            var c = this.options.layoutMode;
            this["_" + c + "Layout"](a);
            if (this.options.resizesContainer) {
                var d = this["_" + c + "GetContainerSize"]();
                this.styleQueue.push({
                    $el: this.element,
                    style: d
                })
            }
            this._processStyleQueue(a, b), this.isLaidOut = !0
        },
        _processStyleQueue: function(a, c) {
            var d = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate" : "css" : "css",
                f = this.options.animationOptions,
                g = this.options.onLayout,
                h, i, j, k;
            i = function(a, b) {
                b.$el[d](b.style, f)
            };
            if (this._isInserting && this.isUsingJQueryAnimation) i = function(a, b) {
                h = b.$el.hasClass("no-transition") ? "css" : d, b.$el[h](b.style, f)
            };
            else if (c || g || f.complete) {
                var l = !1,
                    m = [c, g, f.complete],
                    n = this;
                j = !0, k = function() {
                    if (l) return;
                    var b;
                    for (var c = 0, d = m.length; c < d; c++) b = m[c], typeof b == "function" && b.call(n.element, a, n);
                    l = !0
                };
                if (this.isUsingJQueryAnimation && d === "animate") f.complete = k, j = !1;
                else if (e.csstransitions) {
                    var o = 0,
                        p = this.styleQueue[0],
                        s = p && p.$el,
                        t;
                    while (!s || !s.length) {
                        t = this.styleQueue[o++];
                        if (!t) return;
                        s = t.$el
                    }
                    var u = parseFloat(getComputedStyle(s[0])[r]);
                    u > 0 && (i = function(a, b) {
                        b.$el[d](b.style, f).one(q, k)
                    }, j = !1)
                }
            }
            b.each(this.styleQueue, i), j && k(), this.styleQueue = []
        },
        resize: function() {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        },
        reLayout: function(a) {
            this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, a)
        },
        addItems: function(a, b) {
            var c = this._getAtoms(a);
            this.$allAtoms = this.$allAtoms.add(c), b && b(c)
        },
        insert: function(a, b) {
            this.element.append(a);
            var c = this;
            this.addItems(a, function(a) {
                var d = c._filter(a);
                c._addHideAppended(d), c._sort(), c.reLayout(), c._revealAppended(d, b)
            })
        },
        appended: function(a, b) {
            var c = this;
            this.addItems(a, function(a) {
                c._addHideAppended(a), c.layout(a), c._revealAppended(a, b)
            })
        },
        _addHideAppended: function(a) {
            this.$filteredAtoms = this.$filteredAtoms.add(a), a.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                $el: a,
                style: this.options.hiddenStyle
            })
        },
        _revealAppended: function(a, b) {
            var c = this;
            setTimeout(function() {
                a.removeClass("no-transition"), c.styleQueue.push({
                    $el: a,
                    style: c.options.visibleStyle
                }), c._isInserting = !1, c._processStyleQueue(a, b)
            }, 10)
        },
        reloadItems: function() {
            this.$allAtoms = this._getAtoms(this.element.children())
        },
        remove: function(a, b) {
            this.$allAtoms = this.$allAtoms.not(a), this.$filteredAtoms = this.$filteredAtoms.not(a);
            var c = this,
                d = function() {
                    a.remove(), b && b.call(c.element)
                };
            a.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                $el: a,
                style: this.options.hiddenStyle
            }), this._sort(), this.reLayout(d)) : d()
        },
        shuffle: function(a) {
            this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(a)
        },
        destroy: function() {
            var a = this.usingTransforms,
                b = this.options;
            this.$allAtoms.removeClass(b.hiddenClass + " " + b.itemClass).each(function() {
                var b = this.style;
                b.position = "", b.top = "", b.left = "", b.opacity = "", a && (b[i] = "")
            });
            var c = this.element[0].style;
            for (var d in this.originalStyle) c[d] = this.originalStyle[d];
            this.element.unbind(".isotope").undelegate("." + b.hiddenClass, "click").removeClass(b.containerClass).removeData("isotope"), w.unbind(".isotope")
        },
        _getSegments: function(a) {
            var b = this.options.layoutMode,
                c = a ? "rowHeight" : "columnWidth",
                d = a ? "height" : "width",
                e = a ? "rows" : "cols",
                g = this.element[d](),
                h, i = this.options[b] && this.options[b][c] || this.$filteredAtoms["outer" + f(d)](!0) || g;
            h = Math.floor(g / i), h = Math.max(h, 1), this[b][e] = h, this[b][c] = i
        },
        _checkIfSegmentsChanged: function(a) {
            var b = this.options.layoutMode,
                c = a ? "rows" : "cols",
                d = this[b][c];
            return this._getSegments(a), this[b][c] !== d
        },
        _masonryReset: function() {
            this.masonry = {}, this._getSegments();
            var a = this.masonry.cols;
            this.masonry.colYs = [];
            while (a--) this.masonry.colYs.push(0)
        },
        _masonryLayout: function(a) {
            var c = this,
                d = c.masonry;
            a.each(function() {
                var a = b(this),
                    e = Math.ceil(a.outerWidth(!0) / d.columnWidth);
                e = Math.min(e, d.cols);
                if (e === 1) c._masonryPlaceBrick(a, d.colYs);
                else {
                    var f = d.cols + 1 - e,
                        g = [],
                        h, i;
                    for (i = 0; i < f; i++) h = d.colYs.slice(i, i + e), g[i] = Math.max.apply(Math, h);
                    c._masonryPlaceBrick(a, g)
                }
            })
        },
        _masonryPlaceBrick: function(a, b) {
            var c = Math.min.apply(Math, b),
                d = 0;
            for (var e = 0, f = b.length; e < f; e++)
                if (b[e] === c) {
                    d = e;
                    break
                }
            var g = this.masonry.columnWidth * d,
                h = c;
            this._pushPosition(a, g, h);
            var i = c + a.outerHeight(!0),
                j = this.masonry.cols + 1 - f;
            for (e = 0; e < j; e++) this.masonry.colYs[d + e] = i
        },
        _masonryGetContainerSize: function() {
            var a = Math.max.apply(Math, this.masonry.colYs);
            return {
                height: a
            }
        },
        _masonryResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _fitRowsReset: function() {
            this.fitRows = {
                x: 0,
                y: 0,
                height: 0
            }
        },
        _fitRowsLayout: function(a) {
            var c = this,
                d = this.element.width(),
                e = this.fitRows;
            a.each(function() {
                var a = b(this),
                    f = a.outerWidth(!0),
                    g = a.outerHeight(!0);
                e.x !== 0 && f + e.x > d && (e.x = 0, e.y = e.height), c._pushPosition(a, e.x, e.y), e.height = Math.max(e.y + g, e.height), e.x += f
            })
        },
        _fitRowsGetContainerSize: function() {
            return {
                height: this.fitRows.height
            }
        },
        _fitRowsResizeChanged: function() {
            return !0
        },
        _cellsByRowReset: function() {
            this.cellsByRow = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByRowLayout: function(a) {
            var c = this,
                d = this.cellsByRow;
            a.each(function() {
                var a = b(this),
                    e = d.index % d.cols,
                    f = Math.floor(d.index / d.cols),
                    g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
                    h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                c._pushPosition(a, g, h), d.index++
            })
        },
        _cellsByRowGetContainerSize: function() {
            return {
                height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
            }
        },
        _cellsByRowResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _straightDownReset: function() {
            this.straightDown = {
                y: 0
            }
        },
        _straightDownLayout: function(a) {
            var c = this;
            a.each(function(a) {
                var d = b(this);
                c._pushPosition(d, 0, c.straightDown.y), c.straightDown.y += d.outerHeight(!0)
            })
        },
        _straightDownGetContainerSize: function() {
            return {
                height: this.straightDown.y
            }
        },
        _straightDownResizeChanged: function() {
            return !0
        },
        _masonryHorizontalReset: function() {
            this.masonryHorizontal = {}, this._getSegments(!0);
            var a = this.masonryHorizontal.rows;
            this.masonryHorizontal.rowXs = [];
            while (a--) this.masonryHorizontal.rowXs.push(0)
        },
        _masonryHorizontalLayout: function(a) {
            var c = this,
                d = c.masonryHorizontal;
            a.each(function() {
                var a = b(this),
                    e = Math.ceil(a.outerHeight(!0) / d.rowHeight);
                e = Math.min(e, d.rows);
                if (e === 1) c._masonryHorizontalPlaceBrick(a, d.rowXs);
                else {
                    var f = d.rows + 1 - e,
                        g = [],
                        h, i;
                    for (i = 0; i < f; i++) h = d.rowXs.slice(i, i + e), g[i] = Math.max.apply(Math, h);
                    c._masonryHorizontalPlaceBrick(a, g)
                }
            })
        },
        _masonryHorizontalPlaceBrick: function(a, b) {
            var c = Math.min.apply(Math, b),
                d = 0;
            for (var e = 0, f = b.length; e < f; e++)
                if (b[e] === c) {
                    d = e;
                    break
                }
            var g = c,
                h = this.masonryHorizontal.rowHeight * d;
            this._pushPosition(a, g, h);
            var i = c + a.outerWidth(!0),
                j = this.masonryHorizontal.rows + 1 - f;
            for (e = 0; e < j; e++) this.masonryHorizontal.rowXs[d + e] = i
        },
        _masonryHorizontalGetContainerSize: function() {
            var a = Math.max.apply(Math, this.masonryHorizontal.rowXs);
            return {
                width: a
            }
        },
        _masonryHorizontalResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _fitColumnsReset: function() {
            this.fitColumns = {
                x: 0,
                y: 0,
                width: 0
            }
        },
        _fitColumnsLayout: function(a) {
            var c = this,
                d = this.element.height(),
                e = this.fitColumns;
            a.each(function() {
                var a = b(this),
                    f = a.outerWidth(!0),
                    g = a.outerHeight(!0);
                e.y !== 0 && g + e.y > d && (e.x = e.width, e.y = 0), c._pushPosition(a, e.x, e.y), e.width = Math.max(e.x + f, e.width), e.y += g
            })
        },
        _fitColumnsGetContainerSize: function() {
            return {
                width: this.fitColumns.width
            }
        },
        _fitColumnsResizeChanged: function() {
            return !0
        },
        _cellsByColumnReset: function() {
            this.cellsByColumn = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByColumnLayout: function(a) {
            var c = this,
                d = this.cellsByColumn;
            a.each(function() {
                var a = b(this),
                    e = Math.floor(d.index / d.rows),
                    f = d.index % d.rows,
                    g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
                    h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                c._pushPosition(a, g, h), d.index++
            })
        },
        _cellsByColumnGetContainerSize: function() {
            return {
                width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
            }
        },
        _cellsByColumnResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _straightAcrossReset: function() {
            this.straightAcross = {
                x: 0
            }
        },
        _straightAcrossLayout: function(a) {
            var c = this;
            a.each(function(a) {
                var d = b(this);
                c._pushPosition(d, c.straightAcross.x, 0), c.straightAcross.x += d.outerWidth(!0)
            })
        },
        _straightAcrossGetContainerSize: function() {
            return {
                width: this.straightAcross.x
            }
        },
        _straightAcrossResizeChanged: function() {
            return !0
        }
    }, b.fn.imagesLoaded = function(a) {
        function h() {
            a.call(c, d)
        }

        function i(a) {
            var c = a.target;
            c.src !== f && b.inArray(c, g) === -1 && (g.push(c), --e <= 0 && (setTimeout(h), d.unbind(".imagesLoaded", i)))
        }
        var c = this,
            d = c.find("img").add(c.filter("img")),
            e = d.length,
            f = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
            g = [];
        return e || h(), d.bind("load.imagesLoaded error.imagesLoaded", i).each(function() {
            var a = this.src;
            this.src = f, this.src = a
        }), c
    };
    var x = function(b) {
        a.console && a.console.error(b)
    };
    b.fn.isotope = function(a, c) {
        if (typeof a == "string") {
            var d = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var c = b.data(this, "isotope");
                if (!c) {
                    x("cannot call methods on isotope prior to initialization; attempted to call method '" + a + "'");
                    return
                }
                if (!b.isFunction(c[a]) || a.charAt(0) === "_") {
                    x("no such method '" + a + "' for isotope instance");
                    return
                }
                c[a].apply(c, d)
            })
        } else this.each(function() {
            var d = b.data(this, "isotope");
            d ? (d.option(a), d._init(c)) : b.data(this, "isotope", new b.Isotope(a, this, c))
        });
        return this
    }
})(window, jQuery);
(function($) {
    "use strict";
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        var gdlr_touch_device = true;
    } else {
        var gdlr_touch_device = false;
    }
    $.extend({
        getUrlVars: function() {
            var vars = [],
                hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        },
        getUrlVar: function(name) {
            return $.getUrlVars()[name];
        }
    });

    function gdlr_set_item_outer_nav() {
        $('.blog-item-wrapper > .gdlr-nav-container').each(function() {
            var container = $(this).siblings('.blog-item-holder');
            var child = $(this).children();
            child.css({
                'top': container.position().top,
                'bottom': 'auto',
                height: container.height() - 50
            });
        });
        $('.portfolio-item-wrapper > .gdlr-nav-container').each(function() {
            var container = $(this).siblings('.portfolio-item-holder');
            var child = $(this).children();
            child.css({
                'top': container.position().top,
                'bottom': 'auto',
                height: container.height() - 40
            });
        });
    }
    $.fn.gdlr_flexslider = function() {
        if (typeof($.fn.realsoccer_flexslider) == 'function') {
            $(this).each(function() {
                var flex_attr = {
                    animation: 'fade',
                    animationLoop: true,
                    prevText: '<i class="icon-angle-left fa fa-angle-left" ></i>',
                    nextText: '<i class="icon-angle-right fa fa-angle-right" ></i>',
                    useCSS: false
                };
                if ($(this).attr('data-pausetime')) {
                    flex_attr.slideshowSpeed = parseInt($(this).attr('data-pausetime'));
                }
                if ($(this).attr('data-slidespeed')) {
                    flex_attr.animationSpeed = parseInt($(this).attr('data-slidespeed'));
                }
                if ($(this).attr('data-type') == 'carousel') {
                    flex_attr.move = 1;
                    flex_attr.animation = 'slide';
                    if ($(this).closest('.gdlr-item-no-space').length > 0) {
                        flex_attr.itemWidth = $(this).width() / parseInt($(this).attr('data-columns'));
                        flex_attr.itemMargin = 0;
                    } else {
                        flex_attr.itemWidth = (($(this).width() + 30) / parseInt($(this).attr('data-columns'))) - 30;
                        flex_attr.itemMargin = 30;
                    }
                } else {
                    if ($(this).attr('data-effect')) {
                        flex_attr.animation = $(this).attr('data-effect');
                    }
                }
                if ($(this).attr('data-columns')) {
                    flex_attr.minItems = parseInt($(this).attr('data-columns'));
                    flex_attr.maxItems = parseInt($(this).attr('data-columns'));
                }
                if ($(this).attr('data-nav-container')) {
                    var flex_parent = $(this).parents('.' + $(this).attr('data-nav-container')).prev('.gdlr-nav-container');
                    if (flex_parent.find('.gdlr-flex-prev').length > 0 || flex_parent.find('.gdlr-flex-next').length > 0) {
                        flex_attr.controlNav = false;
                        flex_attr.directionNav = false;
                        flex_attr.start = function(slider) {
                            flex_parent.find('.gdlr-flex-next').click(function() {
                                slider.flexAnimate(slider.getTarget("next"), true);
                            });
                            flex_parent.find('.gdlr-flex-prev').click(function() {
                                slider.flexAnimate(slider.getTarget("prev"), true);
                            });
                            gdlr_set_item_outer_nav();
                            $(window).resize(function() {
                                gdlr_set_item_outer_nav();
                            });
                        }
                    } else {
                        flex_attr.controlNav = false;
                        flex_attr.controlsContainer = flex_parent.find('.nav-container');
                    }
                }
                $(this).realsoccer_flexslider(flex_attr);
            });
        }
    }
    $.fn.gdlr_nivoslider = function() {
        if (typeof($.fn.nivoSlider) == 'function') {
            $(this).each(function() {
                var nivo_attr = {};
                if ($(this).attr('data-pausetime')) {
                    nivo_attr.pauseTime = parseInt($(this).attr('data-pausetime'));
                }
                if ($(this).attr('data-slidespeed')) {
                    nivo_attr.animSpeed = parseInt($(this).attr('data-slidespeed'));
                }
                if ($(this).attr('data-effect')) {
                    nivo_attr.effect = $(this).attr('data-effect');
                }
                $(this).nivoSlider(nivo_attr);
            });
        }
    }
    $.fn.gdlr_isotope = function() {
        if (typeof($.fn.isotope) == 'function') {
            $(this).each(function() {
                var layout = ($(this).attr('data-layout')) ? $(this).attr('data-layout') : 'fitRows';
                if (layout == 'fitRows') return;
                var isotope_element = $(this);
                isotope_element.children('.clear').remove();
                isotope_element.isotope({
                    layoutMode: layout
                });
                $(window).resize(function() {
                    isotope_element.isotope();
                });
            });
        }
    }
    $.fn.gdlr_fancybox = function() {
        if (typeof($.fn.fancybox) == 'function') {
            var fancybox_attr = {
                nextMethod: 'resizeIn',
                nextSpeed: 250,
                prevMethod: false,
                prevSpeed: 250,
                helpers: {
                    media: {}
                }
            };
            if (typeof($.fancybox.helpers.thumbs) == 'object') {
                fancybox_attr.helpers.thumbs = {
                    width: 50,
                    height: 50
                };
            }
            $(this).fancybox(fancybox_attr);
        }
    }
    $.fn.gdlr_fluid_video = function() {
        $(this).find('iframe[src*="youtube"], iframe[src*="vimeo"]').each(function() {
            if (($(this).is('embed') && $(this).parent('object').length) || $(this).parent('.fluid-width-video-wrapper').length) {
                return;
            }
            if (!$(this).attr('id')) {
                $(this).attr('id', 'gdlr-video-' + Math.floor(Math.random() * 999999));
            }
            if ($(this).closest('.ls-container').length <= 0) {
                var ratio = $(this).height() / $(this).width();
                $(this).removeAttr('height').removeAttr('width');
                $(this).wrap('<div class="gdlr-fluid-video-wrapper"></div>').parent().css('padding-top', (ratio * 100) + "%");
            }
        });
    }
    $.fn.gdlr_pie_chart = function() {
        if (typeof($.fn.easyPieChart) == 'function') {
            $(this).each(function() {
                var gdlr_chart = $(this);
                $(this).easyPieChart({
                    animate: 1200,
                    lineWidth: gdlr_chart.attr('data-linewidth') ? parseInt(gdlr_chart.attr('data-linewidth')) : 8,
                    size: gdlr_chart.attr('data-size') ? parseInt(gdlr_chart.attr('data-size')) : 155,
                    barColor: gdlr_chart.attr('data-color') ? gdlr_chart.attr('data-color') : '#a9e16e',
                    trackColor: gdlr_chart.attr('data-bg-color') ? gdlr_chart.attr('data-bg-color') : '#f2f2f2',
                    backgroundColor: gdlr_chart.attr('data-background'),
                    scaleColor: false,
                    lineCap: 'square'
                });
                if ($.browser.msie && (parseInt($.browser.version) <= 8)) return;

                function limit_gdlr_chart_size() {
                    if (gdlr_chart.parent().width() < parseInt(gdlr_chart.attr('data-size'))) {
                        var max_width = gdlr_chart.parent().width() + 'px';
                        gdlr_chart.css({
                            'max-width': max_width,
                            'max-height': max_width
                        });
                    }
                }
                limit_gdlr_chart_size();
                $(window).resize(function() {
                    limit_gdlr_chart_size();
                });
            });
        }
    }
    $(document).ready(function() {
        $('.gdlr-top-woocommerce-wrapper').hover(function() {
            $(this).children('.gdlr-top-woocommerce').fadeIn(200);
        }, function() {
            $(this).children('.gdlr-top-woocommerce').fadeOut(200);
        });
        $('.gdlr-accordion-item').each(function() {
            var multiple_tab = $(this).hasClass('gdlr-multiple-tab');
            $(this).children('.accordion-tab').children('.accordion-title').click(function() {
                var current_tab = $(this).parent();
                if (current_tab.hasClass('active')) {
                    current_tab.removeClass('pre-active');
                    $(this).children('i').removeClass('icon-minus fa-minus').addClass('icon-plus fa-plus');
                    $(this).siblings('.accordion-content').slideUp(function() {
                        current_tab.removeClass('active');
                    });
                } else {
                    current_tab.addClass('pre-active');
                    $(this).children('i').removeClass('icon-plus fa-plus').addClass('icon-minus fa-minus');
                    $(this).siblings('.accordion-content').slideDown(function() {
                        current_tab.addClass('active');
                    });
                }
                if (!multiple_tab) {
                    current_tab.siblings().removeClass('pre-active');
                    current_tab.siblings().children('.accordion-title').children('i').removeClass('icon-minus fa-minus').addClass('icon-plus fa-plus');
                    current_tab.siblings().children('.accordion-content').slideUp(function() {
                        $(this).parent().removeClass('active');
                    });
                }
            });
        });
        $('.tab-title-wrapper').children().click(function() {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            var selected_index = $(this).index() + 1;
            $(this).parent().siblings('.tab-content-wrapper').children(':nth-child(' + selected_index + ')').each(function() {
                $(this).siblings().removeClass('active').hide();
                $(this).fadeIn(function() {
                    $(this).addClass('active');
                });
            })
        });
        var inital_tab = $.getUrlVar('tab');
        if (inital_tab) {
            $('#' + inital_tab.replace(',', ', #')).each(function() {
                $(this).trigger('click');
            });
        }
        $('.gdlr-code-item .gdlr-code-title').click(function() {
            var parent = $(this).parent();
            if (parent.hasClass('active')) {
                $(this).children('i').removeClass('icon-minus fa-minus').addClass('icon-plus fa-plus');
                $(this).siblings('.gdlr-code-content').slideUp(function() {
                    parent.removeClass('active');
                });
            } else {
                $(this).children('i').removeClass('icon-plus fa-plus').addClass('icon-minus fa-minus');
                $(this).siblings('.gdlr-code-content').slideDown(function() {
                    parent.addClass('active');
                });
            }
        });
        $('.gdlr-parallax-wrapper').each(function() {
            if ($(this).hasClass('gdlr-background-image')) {
                var parallax_section = $(this);
                var parallax_speed = parseFloat(parallax_section.attr('data-bgspeed'));
                if (parallax_speed == 0 || gdlr_touch_device) return;
                if (parallax_speed == -1) {
                    parallax_section.css('background-attachment', 'fixed');
                    parallax_section.css('background-position', 'center center');
                    return;
                }
                $(window).scroll(function() {
                    if (($(window).scrollTop() + $(window).height() > parallax_section.offset().top) && ($(window).scrollTop() < parallax_section.offset().top + parallax_section.outerHeight())) {
                        var scroll_pos = 0;
                        if ($(window).height() > parallax_section.offset().top) {
                            scroll_pos = $(window).scrollTop();
                        } else {
                            scroll_pos = $(window).scrollTop() + $(window).height() - parallax_section.offset().top;
                        }
                        parallax_section.css('background-position', 'center ' + (-scroll_pos * parallax_speed) + 'px');
                    }
                });
            } else if ($(this).hasClass('gdlr-background-video')) {
                if (typeof($.fn.mb_YTPlayer) == 'function') {
                    $(this).children('.gdlr-bg-player').mb_YTPlayer();
                }
            } else {
                return;
            }
        });
        $('body').gdlr_fluid_video();
        if (typeof($.fn.superfish) == 'function') {
            $('#gdlr-main-navigation .sf-mega > ul').each(function() {
                $(this).children('li').each(function() {
                    var current_item = $(this);
                    current_item.replaceWith($('<div />').addClass('sf-mega-section').addClass(current_item.attr('data-column')).attr('data-size', current_item.attr('data-size')).html($('<div />').addClass('sf-mega-section-inner').addClass(current_item.attr('class')).attr('id', current_item.attr('id')).html(current_item.html())));
                });
                $(this).replaceWith(this.innerHTML);
            });
            $('#gdlr-main-navigation .sf-mega').each(function() {
                var sf_mega = $(this);
                $(this).show();
                var row = 0;
                var column = 0;
                var max_height = 0;
                sf_mega.children('.sf-mega-section').each(function() {
                    if (column % 60 == 0) {
                        if (row != 0) {
                            sf_mega.children('[data-row="' + row + '"]').children('.sf-mega-section-inner').height(max_height - 50);
                            max_height = 0;
                        }
                        row++;
                        $(this).addClass('first-column');
                    }
                    $(this).attr('data-row', row);
                    column += eval('60*' + $(this).attr('data-size'));
                    if ($(this).height() > max_height) {
                        max_height = $(this).height();
                    }
                });
                sf_mega.children('[data-row="' + row + '"]').children('.sf-mega-section-inner').height(max_height - 50);
            });
            $('#gdlr-main-navigation').superfish({
                speed: 'fast'
            });
        }
        if (typeof($.fn.dlmenu) == 'function') {
            $('#gdlr-responsive-navigation').each(function() {
                $(this).find('.dl-submenu').each(function() {
                    if ($(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#') {
                        var parent_nav = $('<li class="menu-item gdlr-parent-menu"></li>');
                        parent_nav.append($(this).siblings('a').clone());
                        $(this).prepend(parent_nav);
                    }
                });
                $(this).dlmenu();
            });
        }
        $('.gdlr-gallery-thumbnail').each(function() {
            var thumbnail_container = $(this).children('.gdlr-gallery-thumbnail-container');
            $(this).find('.gallery-item').click(function() {
                var selected_slide = thumbnail_container.children('[data-id="' + $(this).attr('data-id') + '"]');
                if (selected_slide.css('display') == 'block') return false;
                var image_width = selected_slide.children('img').attr('width');
                var image_ratio = selected_slide.children('img').attr('height') / image_width;
                var temp_height = image_ratio * Math.min(thumbnail_container.width(), image_width);
                thumbnail_container.animate({
                    'height': temp_height
                });
                selected_slide.fadeIn().siblings().hide();
                return false;
            });
            $(window).resize(function() {
                thumbnail_container.css('height', 'auto')
            });
        });
        $('a[href$=".jpg"], a[href$=".png"], a[href$=".gif"]').not('[data-rel="fancybox"]').attr('data-rel', 'fancybox');
        $('[data-rel="fancybox"]').gdlr_fancybox();
        $('.gdlr-image-link-shortcode').hover(function() {
            $(this).find('.gdlr-image-link-overlay-wrapper').children('.gdlr-image-link-overlay').animate({
                opacity: 0.6
            }, 150);
            $(this).find('.gdlr-image-link-overlay-wrapper').children('.gdlr-image-link-icon, i').animate({
                opacity: 1
            }, 150);
        }, function() {
            $(this).find('.gdlr-image-link-overlay-wrapper').children('.gdlr-image-link-overlay').animate({
                opacity: 0
            }, 150);
            $(this).find('.gdlr-image-link-overlay-wrapper').children('.gdlr-image-link-icon, i').animate({
                opacity: 0
            }, 150);
        });
        $('.gdlr-personnel-item.round-style .personnel-item').each(function() {
            var current_item = $(this);

            function gdlr_set_round_personnel_height() {
                current_item.find('.personnel-item-inner').each(function() {
                    $(this).css('margin-top', -($(this).height() / 2));
                });
            }
            gdlr_set_round_personnel_height();
            $(window).resize(function() {
                gdlr_set_round_personnel_height();
            });
        });
        $('.gdlr-personnel-item.round-style .personnel-item').hover(function() {
            $(this).find('.personnel-author-image').animate({
                'opacity': 0.05
            }, 200);
            $(this).find('.personnel-item-inner').animate({
                'opacity': 1
            }, 200);
        }, function() {
            $(this).find('.personnel-author-image').animate({
                'opacity': 1
            }, 200);
            $(this).find('.personnel-item-inner').animate({
                'opacity': 0
            }, 200);
        });
        $('.gdlr-price-table-item').each(function() {
            var price_table = $(this);

            function set_price_table_height() {
                var max_height = 0;
                var price_content = price_table.find('.price-content');
                price_content.css('height', 'auto');
                price_content.each(function() {
                    if (max_height < $(this).height()) {
                        max_height = $(this).height();
                    }
                });
                price_content.css('height', max_height);
            }
            set_price_table_height()
            $(window).resize(function() {
                set_price_table_height();
            });
        });
        $('form').submit(function() {
            var has_default = false;
            $(this).find('input[data-default]').each(function() {
                if ($(this).is('#url')) {
                    if ($(this).val() == $(this).attr('data-default')) $(this).val('');
                } else {
                    if ($(this).val() == $(this).attr('data-default')) has_default = true;
                }
            });
            if (has_default) return false;
        });
        $('#gdlr-menu-search-button').click(function() {
            $(this).siblings('#gdlr-menu-search').slideToggle(200);
        });
        $('.search-text input[data-default], .gdlr-comments-area input[data-default]').each(function() {
            var default_value = $(this).attr("data-default");
            $(this).val(default_value);
            $(this).live("blur", function() {
                if ($(this).val() == "") {
                    $(this).val(default_value);
                }
            }).live("focus", function() {
                if ($(this).val() == default_value) {
                    $(this).val("");
                }
            });
        });
        if (window.location.hash) {
            $('html, body').animate({
                scrollTop: $(window.location.hash).offset().top - 68
            }, 500);
        }
        $('.gdlr-navigation a[href^="#"], .gdlr-responsive-navigation a[href^="#"]').click(function() {
            if ($(this).attr('href').length > 1) {
                var item_id = $($(this).attr('href'));
                if ($('body').hasClass('home')) {
                    if (item_id.length > 0) {
                        $('html, body').animate({
                            scrollTop: item_id.offset().top - 68
                        }, 500);
                        return false;
                    }
                } else {
                    window.location.replace($('.body-wrapper').attr('data-home') + '/' + $(this).attr('href'));
                }
            }
        });
        var main_logo = $('.header-style-transparent .gdlr-logo img');

        function gdlr_mobile_logo() {
            if (main_logo && $(window).width() < 767) {
                if (main_logo.attr('data-normal') && main_logo.attr('src') != main_logo.attr('data-normal')) {
                    main_logo.attr('data-trans', main_logo.attr('src'));
                    main_logo.attr('src', main_logo.attr('data-normal'));
                }
            } else {
                if (main_logo.attr('data-trans') && main_logo.attr('src') != main_logo.attr('data-trans')) {
                    main_logo.attr('src', main_logo.attr('data-trans'));
                }
            }
        }
        gdlr_mobile_logo();
        $(window).resize(function() {
            gdlr_mobile_logo();
        });
        if (!gdlr_touch_device && (!$.browser.msie || (parseInt($.browser.version) > 8))) {
            $('.content-wrapper img').each(function() {
                if ($(this).closest('.gdlr-ux, .ls-wp-container, .product, .flexslider, .nivoSlider, .gdlr-soccer-tab-content').length) return;
                var ux_item = $(this);
                if (ux_item.offset().top > $(window).scrollTop() + $(window).height()) {
                    ux_item.css({
                        'opacity': 0
                    });
                } else {
                    return;
                }
                $(window).scroll(function() {
                    if ($(window).scrollTop() + $(window).height() > ux_item.offset().top + 100) {
                        ux_item.animate({
                            'opacity': 1
                        }, 1200);
                    }
                });
            });
            $('.gdlr-ux').each(function() {
                var ux_item = $(this);
                if (ux_item.hasClass('gdlr-chart') || ux_item.hasClass('gdlr-skill-bar')) {
                    if (ux_item.offset().top < $(window).scrollTop() + $(window).height()) {
                        if (ux_item.hasClass('gdlr-chart') && (!$.browser.msie || (parseInt($.browser.version) > 8))) {
                            ux_item.gdlr_pie_chart();
                        } else if (ux_item.hasClass('gdlr-skill-bar')) {
                            ux_item.children('.gdlr-skill-bar-progress').each(function() {
                                if ($(this).attr('data-percent')) {
                                    $(this).animate({
                                        width: $(this).attr('data-percent') + '%'
                                    }, 1200, 'easeOutQuart');
                                }
                            });
                        }
                        return;
                    }
                } else if (ux_item.offset().top > $(window).scrollTop() + $(window).height()) {
                    ux_item.css({
                        'opacity': 0,
                        'padding-top': 20,
                        'margin-bottom': -20
                    });
                } else {
                    return;
                }
                $(window).scroll(function() {
                    if ($(window).scrollTop() + $(window).height() > ux_item.offset().top + 100) {
                        if (ux_item.hasClass('gdlr-chart') && (!$.browser.msie || (parseInt($.browser.version) > 8))) {
                            ux_item.gdlr_pie_chart();
                        } else if (ux_item.hasClass('gdlr-skill-bar')) {
                            ux_item.children('.gdlr-skill-bar-progress').each(function() {
                                if ($(this).attr('data-percent')) {
                                    $(this).animate({
                                        width: $(this).attr('data-percent') + '%'
                                    }, 1200, 'easeOutQuart');
                                }
                            });
                        } else {
                            ux_item.animate({
                                'opacity': 1,
                                'padding-top': 0,
                                'margin-bottom': 0
                            }, 1200);
                        }
                    }
                });
            });
        } else {
            if (!$.browser.msie || (parseInt($.browser.version) > 8)) {
                $('.gdlr-chart').gdlr_pie_chart();
            }
            $('.gdlr-skill-bar-progress').each(function() {
                if ($(this).attr('data-percent')) {
                    $(this).animate({
                        width: $(this).attr('data-percent') + '%'
                    }, 1200, 'easeOutQuart');
                }
            });
        }
        $('.nivoSlider').gdlr_nivoslider();
        $('.flexslider').gdlr_flexslider();
    });
    $(window).load(function() {
        $('.gdlr-isotope').gdlr_isotope();
        if ($.browser.msie && (parseInt($.browser.version) <= 8)) {
            $('.gdlr-chart').gdlr_pie_chart();
        }
        if (!gdlr_touch_device) {
            $('.body-wrapper.float-menu').each(function() {
                var sub_area = $('#gdlr-header-substitute');
                var navigation = sub_area.siblings('.gdlr-navigation-wrapper');
                if (navigation.length > 0) {
                    $(window).scroll(function() {
                        if (navigation.hasClass('gdlr-fixed-nav')) {
                            if ($(this).width() < 959 || ($(this).scrollTop() < sub_area.offset().top - parseInt($('html').css('margin-top')))) {
                                sub_area.height(0);
                                navigation.removeClass('gdlr-fixed-nav');
                                navigation.insertBefore(sub_area);
                            }
                        } else {
                            if ($(this).width() > 959 && ($(this).scrollTop() > navigation.offset().top - parseInt($('html').css('margin-top')))) {
                                sub_area.height(navigation.height());
                                navigation.addClass('gdlr-fixed-nav');
                                $('body').prepend(navigation);
                            }
                        }
                    });
                }
            });
        }
        $('body.single article.joomsport_team').each(function() {
            var jsPageTitle = ('.gdlr-page-title-wrapper .gdlr-page-title-container');
            var jsTeamEmbl = $(this).find('.gdlr-blog-thumbnail');
            $(jsTeamEmbl).addClass('js-team-embl').detach().prependTo(jsPageTitle);
            $(jsPageTitle).parents('.gdlr-page-title-wrapper').addClass('js-title-page');
        });
        $('.gdlr-background-image #joomsport-container > .jsmainscroll').each(function() {
            $(this).parents('.gdlr-background-image').addClass('js-match-bgc');
            $(this).find('.jsview2 td.jstdawayteam').each(function() {
                $(this).children('.js_div_particName').detach().prependTo(this);
            });
        });
        $('#joomsport-container .namePlayerCart .PlayerCardPlNumber').each(function() {
            if ($.trim($(this).text()) == "") {
                $(this).remove();
            }
        });
        $(window).trigger('resize');
        $(window).trigger('scroll');
    });
})(jQuery);
! function(a, b) {
    "use strict";

    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++) {
                if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
                if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
            }
        }
    }
    var d = !1,
        e = !1;
    if (b.querySelector)
        if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
        if (a.wp.receiveEmbedMessage = function(c) {
                var d = c.data;
                if (d)
                    if (d.secret || d.message || d.value)
                        if (!/[^a-zA-Z0-9]/.test(d.secret)) {
                            var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                                k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
                            for (e = 0; e < k.length; e++) k[e].style.display = "none";
                            for (e = 0; e < j.length; e++)
                                if (f = j[e], c.source === f.contentWindow) {
                                    if (f.removeAttribute("style"), "height" === d.message) {
                                        if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                                        else if (~~g < 200) g = 200;
                                        f.height = g
                                    }
                                    if ("link" === d.message)
                                        if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                                            if (b.activeElement === f) a.top.location.href = d.value
                                } else;
                        }
            }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);
/*! 
 * Master Slider – Responsive Touch Swipe Slider
 * Copyright © 2018 All Rights Reserved. 
 *
 * @author Averta [www.averta.net]
 * @version 2.61.2
 * @date Jul 2018
 */
window.averta = {},
    function($) {
        function getVendorPrefix() {
            if ("result" in arguments.callee) return arguments.callee.result;
            var regex = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                someScript = document.getElementsByTagName("script")[0];
            for (var prop in someScript.style)
                if (regex.test(prop)) return arguments.callee.result = prop.match(regex)[0];
            return arguments.callee.result = "WebkitOpacity" in someScript.style ? "Webkit" : "KhtmlOpacity" in someScript.style ? "Khtml" : ""
        }

        function checkStyleValue(prop) {
            var b = document.body || document.documentElement,
                s = b.style,
                p = prop;
            if ("string" == typeof s[p]) return !0;
            v = ["Moz", "Webkit", "Khtml", "O", "ms"], p = p.charAt(0).toUpperCase() + p.substr(1);
            for (var i = 0; i < v.length; i++)
                if ("string" == typeof s[v[i] + p]) return !0;
            return !1
        }

        function supportsTransitions() {
            return checkStyleValue("transition")
        }

        function supportsTransforms() {
            return checkStyleValue("transform")
        }

        function supports3DTransforms() {
            if (!supportsTransforms()) return !1;
            var has3d, el = document.createElement("i"),
                transforms = {
                    WebkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    MSTransform: "-ms-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    Transform: "transform",
                    transform: "transform"
                };
            el.style.display = "block", document.body.insertBefore(el, null);
            for (var t in transforms) void 0 !== el.style[t] && (el.style[t] = "translate3d(1px,1px,1px)", has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]));
            return document.body.removeChild(el), null != has3d && has3d.length > 0 && "none" !== has3d
        }
        window["package"] = function(name) {
            window[name] || (window[name] = {})
        };
        var extend = function(target, object) {
            for (var key in object) target[key] = object[key]
        };
        Function.prototype.extend = function(superclass) {
            "function" == typeof superclass.prototype.constructor ? (extend(this.prototype, superclass.prototype), this.prototype.constructor = this) : (this.prototype.extend(superclass), this.prototype.constructor = this)
        };
        var trans = {
            Moz: "-moz-",
            Webkit: "-webkit-",
            Khtml: "-khtml-",
            O: "-o-",
            ms: "-ms-",
            Icab: "-icab-"
        };
        window._mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), window._touch = "ontouchstart" in document, $(document).ready(function() {
            window._jcsspfx = getVendorPrefix(), window._csspfx = trans[window._jcsspfx], window._cssanim = supportsTransitions(), window._css3d = supports3DTransforms(), window._css2d = supportsTransforms()
        }), window.parseQueryString = function(url) {
            var queryString = {};
            return url.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function($0, $1, $2, $3) {
                queryString[$1] = $3
            }), queryString
        };
        var fps60 = 50 / 3;
        if (window.requestAnimationFrame || (window.requestAnimationFrame = function() {
                return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
                    window.setTimeout(callback, fps60)
                }
            }()), window.getComputedStyle || (window.getComputedStyle = function(el) {
                return this.el = el, this.getPropertyValue = function(prop) {
                    var re = /(\-([a-z]){1})/g;
                    return "float" == prop && (prop = "styleFloat"), re.test(prop) && (prop = prop.replace(re, function() {
                        return arguments[2].toUpperCase()
                    })), el.currentStyle[prop] ? el.currentStyle[prop] : null
                }, el.currentStyle
            }), Array.prototype.indexOf || (Array.prototype.indexOf = function(elt) {
                var len = this.length >>> 0,
                    from = Number(arguments[1]) || 0;
                for (from = 0 > from ? Math.ceil(from) : Math.floor(from), 0 > from && (from += len); len > from; from++)
                    if (from in this && this[from] === elt) return from;
                return -1
            }), window.isMSIE = function(version) {
                if (!$.browser.msie) return !1;
                if (!version) return !0;
                var ieVer = $.browser.version.slice(0, $.browser.version.indexOf("."));
                return "string" == typeof version ? eval(-1 !== version.indexOf("<") || -1 !== version.indexOf(">") ? ieVer + version : version + "==" + ieVer) : version == ieVer
            }, $.removeDataAttrs = function($target, exclude) {
                var i, attrName, dataAttrsToDelete = [],
                    dataAttrs = $target[0].attributes,
                    dataAttrsLen = dataAttrs.length;
                for (exclude = exclude || [], i = 0; dataAttrsLen > i; i++) attrName = dataAttrs[i].name, "data-" === attrName.substring(0, 5) && -1 === exclude.indexOf(attrName) && dataAttrsToDelete.push(dataAttrs[i].name);
                $.each(dataAttrsToDelete, function(index, attrName) {
                    $target.removeAttr(attrName)
                })
            }, jQuery) {
            $.jqLoadFix = function() {
                if (this.complete) {
                    var that = this;
                    setTimeout(function() {
                        $(that).trigger("load")
                    }, 1)
                }
            }, jQuery.uaMatch = jQuery.uaMatch || function(ua) {
                ua = ua.toLowerCase();
                var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
                return {
                    browser: match[1] || "",
                    version: match[2] || "0"
                }
            }, matched = jQuery.uaMatch(navigator.userAgent), browser = {}, matched.browser && (browser[matched.browser] = !0, browser.version = matched.version), browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0);
            var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
            isIE11 && (browser.msie = "true", delete browser.mozilla), jQuery.browser = browser, $.fn.preloadImg = function(src, _event) {
                return this.each(function() {
                    var $this = $(this),
                        self = this,
                        img = new Image;
                    img.onload = function(event) {
                        null == event && (event = {}), $this.attr("src", src), event.width = img.width, event.height = img.height, $this.data("width", img.width), $this.data("height", img.height), setTimeout(function() {
                            _event.call(self, event)
                        }, 50), img = null
                    }, img.src = src
                }), this
            }
        }
    }(jQuery),
    function() {
        "use strict";
        averta.EventDispatcher = function() {
            this.listeners = {}
        }, averta.EventDispatcher.extend = function(_proto) {
            var instance = new averta.EventDispatcher;
            for (var key in instance) "constructor" != key && (_proto[key] = averta.EventDispatcher.prototype[key])
        }, averta.EventDispatcher.prototype = {
            constructor: averta.EventDispatcher,
            addEventListener: function(event, listener, ref) {
                this.listeners[event] || (this.listeners[event] = []), this.listeners[event].push({
                    listener: listener,
                    ref: ref
                })
            },
            removeEventListener: function(event, listener, ref) {
                if (this.listeners[event]) {
                    for (var i = 0; i < this.listeners[event].length; ++i) listener === this.listeners[event][i].listener && ref === this.listeners[event][i].ref && this.listeners[event].splice(i--, 1);
                    0 === this.listeners[event].length && (this.listeners[event] = null)
                }
            },
            dispatchEvent: function(event) {
                if (event.target = this, this.listeners[event.type])
                    for (var i = 0, l = this.listeners[event.type].length; l > i; ++i) this.listeners[event.type][i].listener.call(this.listeners[event.type][i].ref, event)
            }
        }
    }(),
    function($) {
        "use strict";
        var isTouch = "ontouchstart" in document,
            isPointer = window.navigator.pointerEnabled,
            isMSPoiner = !isPointer && window.navigator.msPointerEnabled,
            usePointer = isPointer || isMSPoiner,
            ev_start = (isPointer ? "pointerdown " : "") + (isMSPoiner ? "MSPointerDown " : "") + (isTouch ? "touchstart " : "") + "mousedown",
            ev_move = (isPointer ? "pointermove " : "") + (isMSPoiner ? "MSPointerMove " : "") + (isTouch ? "touchmove " : "") + "mousemove",
            ev_end = (isPointer ? "pointerup " : "") + (isMSPoiner ? "MSPointerUp " : "") + (isTouch ? "touchend " : "") + "mouseup",
            ev_cancel = (isPointer ? "pointercancel " : "") + (isMSPoiner ? "MSPointerCancel " : "") + "touchcancel";
        averta.TouchSwipe = function($element) {
            this.$element = $element, this.enabled = !0, $element.bind(ev_start, {
                target: this
            }, this.__touchStart), $element[0].swipe = this, this.onSwipe = null, this.swipeType = "horizontal", this.noSwipeSelector = "input, textarea, button, .no-swipe, .ms-no-swipe", this.lastStatus = {}
        };
        var p = averta.TouchSwipe.prototype;
        p.getDirection = function(new_x, new_y) {
            switch (this.swipeType) {
                case "horizontal":
                    return new_x <= this.start_x ? "left" : "right";
                case "vertical":
                    return new_y <= this.start_y ? "up" : "down";
                case "all":
                    return Math.abs(new_x - this.start_x) > Math.abs(new_y - this.start_y) ? new_x <= this.start_x ? "left" : "right" : new_y <= this.start_y ? "up" : "down"
            }
        }, p.priventDefultEvent = function(new_x, new_y) {
            var dx = Math.abs(new_x - this.start_x),
                dy = Math.abs(new_y - this.start_y),
                horiz = dx > dy;
            return "horizontal" === this.swipeType && horiz || "vertical" === this.swipeType && !horiz
        }, p.createStatusObject = function(evt) {
            var temp_x, temp_y, status_data = {};
            return temp_x = this.lastStatus.distanceX || 0, temp_y = this.lastStatus.distanceY || 0, status_data.distanceX = evt.pageX - this.start_x, status_data.distanceY = evt.pageY - this.start_y, status_data.moveX = status_data.distanceX - temp_x, status_data.moveY = status_data.distanceY - temp_y, status_data.distance = parseInt(Math.sqrt(Math.pow(status_data.distanceX, 2) + Math.pow(status_data.distanceY, 2))), status_data.duration = (new Date).getTime() - this.start_time, status_data.direction = this.getDirection(evt.pageX, evt.pageY), status_data
        }, p.__reset = function(event, jqevt) {
            this.reset = !1, this.lastStatus = {}, this.start_time = (new Date).getTime();
            var point = this.__getPoint(event, jqevt);
            this.start_x = point.pageX, this.start_y = point.pageY
        }, p.__touchStart = function(event) {
            var swipe = event.data.target,
                jqevt = event;
            if (swipe.enabled && !($(event.target).closest(swipe.noSwipeSelector, swipe.$element).length > 0)) {
                if (event = event.originalEvent, usePointer && $(this).css("-ms-touch-action", "horizontal" === swipe.swipeType ? "pan-y" : "pan-x"), !swipe.onSwipe) return void $.error("Swipe listener is undefined");
                if (!(swipe.touchStarted || isTouch && swipe.start_time && "mousedown" === event.type && (new Date).getTime() - swipe.start_time < 600)) {
                    var point = swipe.__getPoint(event, jqevt);
                    swipe.start_x = point.pageX, swipe.start_y = point.pageY, swipe.start_time = (new Date).getTime(), $(document).bind(ev_end, {
                        target: swipe
                    }, swipe.__touchEnd).bind(ev_move, {
                        target: swipe
                    }, swipe.__touchMove).bind(ev_cancel, {
                        target: swipe
                    }, swipe.__touchCancel);
                    var status = swipe.createStatusObject(point);
                    status.phase = "start", swipe.onSwipe.call(null, status), isTouch || jqevt.preventDefault(), swipe.lastStatus = status, swipe.touchStarted = !0
                }
            }
        }, p.__touchMove = function(event) {
            var swipe = event.data.target,
                jqevt = event;
            if (event = event.originalEvent, swipe.touchStarted) {
                clearTimeout(swipe.timo), swipe.timo = setTimeout(function() {
                    swipe.__reset(event, jqevt)
                }, 60);
                var point = swipe.__getPoint(event, jqevt),
                    status = swipe.createStatusObject(point);
                swipe.priventDefultEvent(point.pageX, point.pageY) && jqevt.preventDefault(), status.phase = "move", swipe.lastStatus = status, swipe.onSwipe.call(null, status)
            }
        }, p.__touchEnd = function(event) {
            var swipe = event.data.target,
                jqevt = event;
            event = event.originalEvent, clearTimeout(swipe.timo);
            var status = swipe.lastStatus;
            isTouch || jqevt.preventDefault(), status.phase = "end", swipe.touchStarted = !1, swipe.priventEvt = null, $(document).unbind(ev_end, swipe.__touchEnd).unbind(ev_move, swipe.__touchMove).unbind(ev_cancel, swipe.__touchCancel), status.speed = status.distance / status.duration, swipe.onSwipe.call(null, status)
        }, p.__touchCancel = function(event) {
            var swipe = event.data.target;
            swipe.__touchEnd(event)
        }, p.__getPoint = function(event, jqEvent) {
            return isTouch && -1 === event.type.indexOf("mouse") ? event.touches[0] : usePointer ? event : jqEvent
        }, p.enable = function() {
            this.enabled || (this.enabled = !0)
        }, p.disable = function() {
            this.enabled && (this.enabled = !1)
        }
    }(jQuery),
    function() {
        "use strict";
        averta.Ticker = function() {};
        var st = averta.Ticker,
            list = [],
            len = 0,
            __stopped = !0;
        st.add = function(listener, ref) {
            return list.push([listener, ref]), 1 === list.length && st.start(), len = list.length
        }, st.remove = function(listener, ref) {
            for (var i = 0, l = list.length; l > i; ++i) list[i] && list[i][0] === listener && list[i][1] === ref && list.splice(i, 1);
            len = list.length, 0 === len && st.stop()
        }, st.start = function() {
            __stopped && (__stopped = !1, __tick())
        }, st.stop = function() {
            __stopped = !0
        };
        var __tick = function() {
            if (!st.__stopped) {
                for (var item, i = 0; i !== len; i++) item = list[i], item[0].call(item[1]);
                requestAnimationFrame(__tick)
            }
        }
    }(),
    function() {
        "use strict";
        Date.now || (Date.now = function() {
            return (new Date).getTime()
        }), averta.Timer = function(delay, autoStart) {
            this.delay = delay, this.currentCount = 0, this.paused = !1, this.onTimer = null, this.refrence = null, autoStart && this.start()
        }, averta.Timer.prototype = {
            constructor: averta.Timer,
            start: function() {
                this.paused = !1, this.lastTime = Date.now(), averta.Ticker.add(this.update, this)
            },
            stop: function() {
                this.paused = !0, averta.Ticker.remove(this.update, this)
            },
            reset: function() {
                this.currentCount = 0, this.paused = !0, this.lastTime = Date.now()
            },
            update: function() {
                this.paused || Date.now() - this.lastTime < this.delay || (this.currentCount++, this.lastTime = Date.now(), this.onTimer && this.onTimer.call(this.refrence, this.getTime()))
            },
            getTime: function() {
                return this.delay * this.currentCount
            }
        }
    }(),
    function() {
        "use strict";
        window.CSSTween = function(element, duration, delay, ease) {
            this.$element = element, this.duration = duration || 1e3, this.delay = delay || 0, this.ease = ease || "linear"
        };
        var p = CSSTween.prototype;
        p.to = function(callback, target) {
            return this.to_cb = callback, this.to_cb_target = target, this
        }, p.from = function(callback, target) {
            return this.fr_cb = callback, this.fr_cb_target = target, this
        }, p.onComplete = function(callback, target) {
            return this.oc_fb = callback, this.oc_fb_target = target, this
        }, p.chain = function(csstween) {
            return this.chained_tween = csstween, this
        }, p.reset = function() {
            clearTimeout(this.start_to), clearTimeout(this.end_to)
        }, p.start = function() {
            var element = this.$element[0];
            clearTimeout(this.start_to), clearTimeout(this.end_to), this.fresh = !0, this.fr_cb && (element.style[window._jcsspfx + "TransitionDuration"] = "0ms", this.fr_cb.call(this.fr_cb_target));
            var that = this;
            return this.onTransComplete = function() {
                that.fresh && (that.reset(), element.style[window._jcsspfx + "TransitionDuration"] = "", element.style[window._jcsspfx + "TransitionProperty"] = "", element.style[window._jcsspfx + "TransitionTimingFunction"] = "", element.style[window._jcsspfx + "TransitionDelay"] = "", that.fresh = !1, that.chained_tween && that.chained_tween.start(), that.oc_fb && that.oc_fb.call(that.oc_fb_target))
            }, this.start_to = setTimeout(function() {
                that.$element && (element.style[window._jcsspfx + "TransitionDuration"] = that.duration + "ms", element.style[window._jcsspfx + "TransitionProperty"] = that.transProperty || "all", element.style[window._jcsspfx + "TransitionDelay"] = that.delay > 0 ? that.delay + "ms" : "", element.style[window._jcsspfx + "TransitionTimingFunction"] = that.ease, that.to_cb && that.to_cb.call(that.to_cb_target), that.end_to = setTimeout(function() {
                    that.onTransComplete()
                }, that.duration + (that.delay || 0)))
            }, 1), this
        }
    }(),
    function() {
        "use strict";

        function transPos(element, properties) {
            if (void 0 !== properties.x || void 0 !== properties.y)
                if (_cssanim) {
                    var trans = window._jcsspfx + "Transform";
                    void 0 !== properties.x && (properties[trans] = (properties[trans] || "") + " translateX(" + properties.x + "px)", delete properties.x), void 0 !== properties.y && (properties[trans] = (properties[trans] || "") + " translateY(" + properties.y + "px)", delete properties.y)
                } else {
                    if (void 0 !== properties.x) {
                        var posx = "auto" !== element.css("right") ? "right" : "left";
                        properties[posx] = properties.x + "px", delete properties.x
                    }
                    if (void 0 !== properties.y) {
                        var posy = "auto" !== element.css("bottom") ? "bottom" : "top";
                        properties[posy] = properties.y + "px", delete properties.y
                    }
                }
            return properties
        }
        var _cssanim = null;
        window.CTween = {}, CTween.setPos = function(element, pos) {
            element.css(transPos(element, pos))
        }, CTween.animate = function(element, duration, properties, options) {
            if (null == _cssanim && (_cssanim = window._cssanim), options = options || {}, transPos(element, properties), _cssanim) {
                var tween = new CSSTween(element, duration, options.delay, EaseDic[options.ease]);
                return options.transProperty && (tween.transProperty = options.transProperty), tween.to(function() {
                    element.css(properties)
                }), options.complete && tween.onComplete(options.complete, options.target), tween.start(), tween.stop = tween.reset, tween
            }
            var onCl;
            return options.delay && element.delay(options.delay), options.complete && (onCl = function() {
                options.complete.call(options.target)
            }), element.stop(!0).animate(properties, duration, options.ease || "linear", onCl), element
        }, CTween.fadeOut = function(target, duration, remove) {
            var options = {};
            remove === !0 ? options.complete = function() {
                target.remove()
            } : 2 === remove && (options.complete = function() {
                target.css("display", "none")
            }), CTween.animate(target, duration || 1e3, {
                opacity: 0
            }, options)
        }, CTween.fadeIn = function(target, duration, reset) {
            reset !== !1 && target.css("opacity", 0).css("display", ""), CTween.animate(target, duration || 1e3, {
                opacity: 1
            })
        }
    }(),
    function() {
        window.EaseDic = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            easeInCubic: "cubic-bezier(.55,.055,.675,.19)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
        }
    }(),
    function() {
        "use strict";
        window.MSAligner = function(type, $container, $img) {
            this.$container = $container, this.$img = $img, this.type = type || "stretch", this.widthOnly = !1, this.heightOnly = !1
        };
        var p = MSAligner.prototype;
        p.init = function(w, h) {
            switch (this.baseWidth = w, this.baseHeight = h, this.imgRatio = w / h, this.imgRatio2 = h / w, this.type) {
                case "tile":
                    this.$container.css("background-image", "url(" + this.$img.attr("src") + ")"), this.$img.remove();
                    break;
                case "center":
                    this.$container.css("background-image", "url(" + this.$img.attr("src") + ")"), this.$container.css({
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat"
                    }), this.$img.remove();
                    break;
                case "stretch":
                    this.$img.css({
                        width: "100%",
                        height: "100%"
                    });
                    break;
                case "fill":
                case "fit":
                    this.needAlign = !0, this.align()
            }
        }, p.align = function() {
            if (this.needAlign) {
                var cont_w = this.$container[0].offsetWidth,
                    cont_h = this.$container[0].offsetHeight,
                    contRatio = cont_w / cont_h;
                "fill" == this.type ? this.imgRatio < contRatio ? (this.$img.width(cont_w), this.$img.height(cont_w * this.imgRatio2)) : (this.$img.height(cont_h), this.$img.width(cont_h * this.imgRatio)) : "fit" == this.type && (this.imgRatio < contRatio ? (this.$img.height(cont_h), this.$img.width(cont_h * this.imgRatio)) : (this.$img.width(cont_w), this.$img.height(cont_w * this.imgRatio2))), this.setMargin()
            }
        }, p.setMargin = function() {
            var cont_w = this.$container[0].offsetWidth,
                cont_h = this.$container[0].offsetHeight;
                //kk
            this.$img.css("margin-top1", (cont_h - this.$img[0].offsetHeight) / 2 + "px"), this.$img.css("margin-left", (cont_w - this.$img[0].offsetWidth) / 2 + "px")
        }
    }(),
    /**
     * CSS pointer-events polyfill
     * Adds support for `pointer-events: none;` for browsers not supporting this property
     * Requires jQuery@~1.9
     *
     * @copyright Sebastian Langer 2016
     * @license MIT
     * @author Sebastian Langer <sl@scn.cx>
     */
    function($) {
        var Polyfill = function(userOptions) {
            this.options = $.extend({}, Polyfill.defaultOptions, userOptions), this.isEnabled = !1, (this.options.forcePolyfill || !this.supportsPointerEvents()) && (this.registerEvents(), this.isEnabled = !0)
        };
        Polyfill.defaultOptions = {
            forcePolyfill: !1,
            selector: "*",
            listenOn: ["click", "dblclick", "mousedown", "mouseup"],
            pointerEventsNoneClass: null,
            pointerEventsAllClass: null,
            eventNamespace: "pointer-events-polyfill"
        }, Polyfill.prototype.registerEvents = function() {
            $(document).on(this.getEventNames(), this.options.selector, $.proxy(this.onElementClick, this))
        }, Polyfill.prototype.getEventNames = function() {
            var eventNamespace = this.options.eventNamespace ? "." + this.options.eventNamespace : "";
            return this.options.listenOn.join(eventNamespace + " ") + eventNamespace
        }, Polyfill.prototype.supportsPointerEvents = function() {
            var style = document.createElement("a").style;
            return style.cssText = "pointer-events:auto", "auto" === style.pointerEvents
        }, Polyfill.prototype.isClickThrough = function($el) {
            var elPointerEventsCss = $el.css("pointer-events");
            return 0 === $el.length || "all" === elPointerEventsCss || $el.is(":root") || $el.hasClass(this.options.pointerEventsAllClass) ? !1 : "none" === elPointerEventsCss || $el.hasClass(this.options.pointerEventsNoneClass) || this.isClickThrough($el.parent()) ? !0 : !1
        }, Polyfill.prototype.onElementClick = function(e) {
            var $elOrg = $(e.target);
            if (!this.isClickThrough($elOrg)) return !0;
            $elOrg.hide();
            var elBelow = document.elementFromPoint(e.clientX, e.clientY);
            return e.target = elBelow, $(elBelow).trigger(e), "A" === elBelow.tagName && (2 === e.which ? window.open(elBelow.getAttribute("href"), "_blank") : elBelow.click()), $elOrg.show(), !1
        }, Polyfill.prototype.destroy = function() {
            $(document).off(this.getEventNames()), this.isEnabled = !1
        }, window.pointerEventsPolyfill = function(userOptions) {
            return new Polyfill(userOptions)
        }
    }(jQuery),
    function() {
        "use strict";
        var _options = {
                bouncing: !0,
                snapping: !1,
                snapsize: null,
                friction: .05,
                outFriction: .05,
                outAcceleration: .09,
                minValidDist: .3,
                snappingMinSpeed: 2,
                paging: !1,
                endless: !1,
                maxSpeed: 160
            },
            Controller = function(min, max, options) {
                if (null === max || null === min) throw new Error("Max and Min values are required.");
                this.options = options || {};
                for (var key in _options) key in this.options || (this.options[key] = _options[key]);
                this._max_value = max, this._min_value = min, this.value = min, this.end_loc = min, this.current_snap = this.getSnapNum(min), this.__extrStep = 0, this.__extraMove = 0, this.__animID = -1
            },
            p = Controller.prototype;
        p.changeTo = function(value, animate, speed, snap_num, dispatch) {
            if (this.stopped = !1, this._internalStop(), value = this._checkLimits(value), speed = Math.abs(speed || 0), this.options.snapping && (snap_num = snap_num || this.getSnapNum(value), dispatch !== !1 && this._callsnapChange(snap_num), this.current_snap = snap_num), animate) {
                this.animating = !0;
                var self = this,
                    active_id = ++self.__animID,
                    amplitude = value - self.value,
                    timeStep = 0,
                    targetPosition = value,
                    animFrict = 1 - self.options.friction,
                    timeconst = animFrict + (speed - 20) * animFrict * 1.3 / self.options.maxSpeed,
                    tick = function() {
                        if (active_id === self.__animID) {
                            var dis = value - self.value;
                            if (!(Math.abs(dis) > self.options.minValidDist && self.animating)) return self.animating && (self.value = value, self._callrenderer()), self.animating = !1, active_id !== self.__animID && (self.__animID = -1), void self._callonComplete("anim");
                            window.requestAnimationFrame(tick), self.value = targetPosition - amplitude * Math.exp(- ++timeStep * timeconst), self._callrenderer()
                        }
                    };
                return void tick()
            }
            this.value = value, this._callrenderer()
        }, p.drag = function(move) {
            this.start_drag && (this.drag_start_loc = this.value, this.start_drag = !1), this.animating = !1, this._deceleration = !1, this.value -= move, !this.options.endless && (this.value > this._max_value || this.value < 0) ? this.options.bouncing ? (this.__isout = !0, this.value += .6 * move) : this.value = this.value > this._max_value ? this._max_value : 0 : !this.options.endless && this.options.bouncing && (this.__isout = !1), this._callrenderer()
        }, p.push = function(speed) {
            if (this.stopped = !1, this.options.snapping && Math.abs(speed) <= this.options.snappingMinSpeed) return void this.cancel();
            if (this.__speed = speed, this.__startSpeed = speed, this.end_loc = this._calculateEnd(), this.options.snapping) {
                var snap_loc = this.getSnapNum(this.value),
                    end_snap = this.getSnapNum(this.end_loc);
                if (this.options.paging) return snap_loc = this.getSnapNum(this.drag_start_loc), this.__isout = !1, void(speed > 0 ? this.gotoSnap(snap_loc + 1, !0, speed) : this.gotoSnap(snap_loc - 1, !0, speed));
                if (snap_loc === end_snap) return void this.cancel();
                this._callsnapChange(end_snap), this.current_snap = end_snap
            }
            this.animating = !1, this.__needsSnap = this.options.endless || this.end_loc > this._min_value && this.end_loc < this._max_value, this.options.snapping && this.__needsSnap && (this.__extraMove = this._calculateExtraMove(this.end_loc)), this._startDecelaration()
        }, p.bounce = function(speed) {
            this.animating || (this.stopped = !1, this.animating = !1, this.__speed = speed, this.__startSpeed = speed, this.end_loc = this._calculateEnd(), this._startDecelaration())
        }, p.stop = function() {
            this.stopped = !0, this._internalStop()
        }, p.cancel = function() {
            this.start_drag = !0, this.__isout ? (this.__speed = 4e-4, this._startDecelaration()) : this.options.snapping && this.gotoSnap(this.getSnapNum(this.value), !0)
        }, p.renderCallback = function(listener, ref) {
            this.__renderHook = {
                fun: listener,
                ref: ref
            }
        }, p.snappingCallback = function(listener, ref) {
            this.__snapHook = {
                fun: listener,
                ref: ref
            }
        }, p.snapCompleteCallback = function(listener, ref) {
            this.__compHook = {
                fun: listener,
                ref: ref
            }
        }, p.getSnapNum = function(value) {
            return Math.floor((value + this.options.snapsize / 2) / this.options.snapsize)
        }, p.nextSnap = function() {
            this._internalStop();
            var curr_snap = this.getSnapNum(this.value);
            !this.options.endless && (curr_snap + 1) * this.options.snapsize > this._max_value ? (this.__speed = 8, this.__needsSnap = !1, this._startDecelaration()) : this.gotoSnap(curr_snap + 1, !0)
        }, p.prevSnap = function() {
            this._internalStop();
            var curr_snap = this.getSnapNum(this.value);
            !this.options.endless && (curr_snap - 1) * this.options.snapsize < this._min_value ? (this.__speed = -8, this.__needsSnap = !1, this._startDecelaration()) : this.gotoSnap(curr_snap - 1, !0)
        }, p.gotoSnap = function(snap_num, animate, speed) {
            this.changeTo(snap_num * this.options.snapsize, animate, speed, snap_num)
        }, p.destroy = function() {
            this._internalStop(), this.__renderHook = null, this.__snapHook = null, this.__compHook = null
        }, p._internalStop = function() {
            this.start_drag = !0, this.animating = !1, this._deceleration = !1, this.__extrStep = 0
        }, p._calculateExtraMove = function(value) {
            var m = value % this.options.snapsize;
            return m < this.options.snapsize / 2 ? -m : this.options.snapsize - m
        }, p._calculateEnd = function(step) {
            for (var temp_speed = this.__speed, temp_value = this.value, i = 0; Math.abs(temp_speed) > this.options.minValidDist;) temp_value += temp_speed, temp_speed *= this.options.friction, i++;
            return step ? i : temp_value
        }, p._checkLimits = function(value) {
            return this.options.endless ? value : value < this._min_value ? this._min_value : value > this._max_value ? this._max_value : value
        }, p._callrenderer = function() {
            this.__renderHook && this.__renderHook.fun.call(this.__renderHook.ref, this, this.value)
        }, p._callsnapChange = function(targetSnap) {
            this.__snapHook && targetSnap !== this.current_snap && this.__snapHook.fun.call(this.__snapHook.ref, this, targetSnap, targetSnap - this.current_snap)
        }, p._callonComplete = function(type) {
            this.__compHook && !this.stopped && this.__compHook.fun.call(this.__compHook.ref, this, this.current_snap, type)
        }, p._computeDeceleration = function() {
            if (this.options.snapping && this.__needsSnap) {
                var xtr_move = (this.__startSpeed - this.__speed) / this.__startSpeed * this.__extraMove;
                this.value += this.__speed + xtr_move - this.__extrStep, this.__extrStep = xtr_move
            } else this.value += this.__speed;
            if (this.__speed *= this.options.friction, this.options.endless || this.options.bouncing || (this.value <= this._min_value ? (this.value = this._min_value, this.__speed = 0) : this.value >= this._max_value && (this.value = this._max_value, this.__speed = 0)), this._callrenderer(), !this.options.endless && this.options.bouncing) {
                var out_value = 0;
                this.value < this._min_value ? out_value = this._min_value - this.value : this.value > this._max_value && (out_value = this._max_value - this.value), this.__isout = Math.abs(out_value) >= this.options.minValidDist, this.__isout && (this.__speed * out_value <= 0 ? this.__speed += out_value * this.options.outFriction : this.__speed = out_value * this.options.outAcceleration)
            }
        }, p._startDecelaration = function() {
            if (!this._deceleration) {
                this._deceleration = !0;
                var self = this,
                    tick = function() {
                        self._deceleration && (self._computeDeceleration(), Math.abs(self.__speed) > self.options.minValidDist || self.__isout ? window.requestAnimationFrame(tick) : (self._deceleration = !1, self.__isout = !1, self.value = self.__needsSnap && self.options.snapping && !self.options.paging ? self._checkLimits(self.end_loc + self.__extraMove) : Math.round(self.value), self._callrenderer(), self._callonComplete("decel")))
                    };
                tick()
            }
        }, window.Controller = Controller
    }(),
    function(window, document, $) {
        window.MSLayerController = function(slide) {
            this.slide = slide, this.slider = slide.slider, this.layers = [], this.layersCount = 0, this.preloadCount = 0, this.$layers = $("<div></div>").addClass("ms-slide-layers"), this.$staticLayers = $("<div></div>").addClass("ms-static-layers"), this.$fixedLayers = $("<div></div>").addClass("ms-fixed-layers"), this.$animLayers = $("<div></div>").addClass("ms-anim-layers")
        };
        var p = MSLayerController.prototype;
        p.addLayer = function(layer) {
            switch (layer.slide = this.slide, layer.controller = this, layer.$element.data("position")) {
                case "static":
                    this.hasStaticLayer = !0, layer.$element.appendTo(this.$staticLayers);
                    break;
                case "fixed":
                    this.hasFixedLayer = !0, layer.$element.appendTo(this.$fixedLayers);
                    break;
                default:
                    layer.$element.appendTo(this.$animLayers)
            }
            layer.create(), this.layers.push(layer), this.layersCount++, layer.parallax && (this.hasParallaxLayer = !0), layer.needPreload && this.preloadCount++
        }, p.create = function() {
            this.slide.$element.append(this.$layers), this.$layers.append(this.$animLayers), this.hasStaticLayer && this.$layers.append(this.$staticLayers), "center" == this.slider.options.layersMode && (this.$layers.css("max-width", this.slider.options.width + "px"), this.hasFixedLayer && this.$fixedLayers.css("max-width", this.slider.options.width + "px"))
        }, p.loadLayers = function(callback) {
            if (this._onReadyCallback = callback, 0 === this.preloadCount) return void this._onlayersReady();
            for (var i = 0; i !== this.layersCount; ++i) this.layers[i].needPreload && this.layers[i].loadImage()
        }, p.prepareToShow = function() {
            this.hasParallaxLayer && this._enableParallaxEffect(), this.hasFixedLayer && this.$fixedLayers.prependTo(this.slide.view.$element)
        }, p.showLayers = function() {
            this.layersHideTween && this.layersHideTween.stop(!0), this.fixedLayersHideTween && this.fixedLayersHideTween.stop(!0), this._resetLayers(), this.$animLayers.css("opacity", "").css("display", ""), this.hasFixedLayer && this.$fixedLayers.css("opacity", "").css("display", ""), this.ready && (this._initLayers(), this._locateLayers(), this._startLayers())
        }, p.hideLayers = function() {
            if (this.slide.selected || this.slider.options.instantStartLayers) {
                var that = this;
                that.layersHideTween = CTween.animate(this.$animLayers, 500, {
                    opacity: 0
                }, {
                    complete: function() {
                        that._resetLayers()
                    }
                }), this.hasFixedLayer && (this.fixedLayersHideTween = CTween.animate(this.$fixedLayers, 500, {
                    opacity: 0
                }, {
                    complete: function() {
                        that.$fixedLayers.detach()
                    }
                })), this.hasParallaxLayer && this._disableParallaxEffect()
            }
        }, p.animHideLayers = function() {
            if (this.ready)
                for (var i = 0; i !== this.layersCount; ++i) this.layers[i].hide()
        }, p.setSize = function(width, height, hard) {
            if (this.ready && (this.slide.selected || this.hasStaticLayer) && (hard && this._initLayers(!0), this._locateLayers(!this.slide.selected)), this.slider.options.autoHeight && this.updateHeight(), "center" == this.slider.options.layersMode) {
                var left = Math.max(0, (width - this.slider.options.width) / 2) + "px";
                this.$layers[0].style.left = left, this.$fixedLayers[0].style.left = left
            }
        }, p.updateHeight = function() {}, p._onlayersReady = function() {
            this.ready = !0, this.hasStaticLayer && !this.slide.isSleeping && this._initLayers(!1, !0), this._onReadyCallback.call(this.slide)
        }, p.onSlideSleep = function() {}, p.onSlideWakeup = function() {
            this.hasStaticLayer && this.ready && this._initLayers(!1, !0)
        }, p.getLayerById = function(layerId) {
            if (!layerId) return null;
            for (var i = 0; i < this.layersCount; ++i)
                if (this.layers[i].id === layerId) return this.layers[i];
            return null
        }, p.destroy = function() {
            this.slide.selected && this.hasParallaxLayer && this._disableParallaxEffect();
            for (var i = 0; i < this.layersCount; ++i) this.layers[i].$element.stop(!0).remove();
            this.$layers.remove(), this.$staticLayers.remove(), this.$fixedLayers.remove(), this.$animLayers.remove()
        }, p._startLayers = function() {
            for (var i = 0; i !== this.layersCount; ++i) {
                var layer = this.layers[i];
                layer.waitForAction || layer.start()
            }
        }, p._initLayers = function(force, onlyStatics) {
            if (!(this.init && !force || this.slider.init_safemode)) {
                this.init = onlyStatics !== !0;
                var i = 0;
                if (onlyStatics && !this.staticsInit)
                    for (this.staticsInit = !0; i !== this.layersCount; ++i) this.layers[i].staticLayer && this.layers[i].init();
                else if (this.staticsInit && !force)
                    for (; i !== this.layersCount; ++i) this.layers[i].staticLayer || this.layers[i].init();
                else
                    for (; i !== this.layersCount; ++i) this.layers[i].init()
            }
        }, p._locateLayers = function(onlyStatics) {
            var i = 0;
            if (onlyStatics)
                for (; i !== this.layersCount; ++i) this.layers[i].staticLayer && this.layers[i].locate();
            else
                for (; i !== this.layersCount; ++i) this.layers[i].locate()
        }, p._resetLayers = function() {
            this.$animLayers.css("display", "none").css("opacity", 1);
            for (var i = 0; i !== this.layersCount; ++i) this.layers[i].reset()
        }, p._applyParallax = function(x, y, fast) {
            for (var i = 0; i !== this.layersCount; ++i) null != this.layers[i].parallax && this.layers[i].moveParallax(x, y, fast)
        }, p._enableParallaxEffect = function() {
            "swipe" === this.slider.options.parallaxMode ? this.slide.view.addEventListener(MSViewEvents.SCROLL, this._swipeParallaxMove, this) : this.slide.$element.on("mousemove", {
                that: this
            }, this._mouseParallaxMove).on("mouseleave", {
                that: this
            }, this._resetParalax)
        }, p._disableParallaxEffect = function() {
            "swipe" === this.slider.options.parallaxMode ? this.slide.view.removeEventListener(MSViewEvents.SCROLL, this._swipeParallaxMove, this) : this.slide.$element.off("mousemove", this._mouseParallaxMove).off("mouseleave", this._resetParalax)
        }, p._resetParalax = function(e) {
            var that = e.data.that;
            that._applyParallax(0, 0)
        }, p._mouseParallaxMove = function(e) {
            var that = e.data.that,
                os = that.slide.$element.offset(),
                slider = that.slider;
            if ("mouse:y-only" !== slider.options.parallaxMode) var x = e.pageX - os.left - that.slide.__width / 2;
            else var x = 0;
            if ("mouse:x-only" !== slider.options.parallaxMode) var y = e.pageY - os.top - that.slide.__height / 2;
            else var y = 0;
            that._applyParallax(-x, -y)
        }, p._swipeParallaxMove = function() {
            var value = this.slide.position - this.slide.view.__contPos;
            "v" === this.slider.options.dir ? this._applyParallax(0, value, !0) : this._applyParallax(value, 0, !0)
        }
    }(window, document, jQuery),
    function($, window) {
        "use strict";
        window.MSOverlayLayerController = function() {
            MSLayerController.apply(this, arguments)
        }, MSOverlayLayerController.extend(MSLayerController);
        var p = MSOverlayLayerController.prototype,
            _super = MSLayerController.prototype;
        p.addLayer = function(layer) {
            var showOnSlides = layer.$element.data("show-on"),
                hideOnSlides = layer.$element.data("hide-on");
            hideOnSlides && (layer.hideOnSlides = hideOnSlides.replace(/\s+/g, "").split(",")), showOnSlides && (layer.showOnSlides = showOnSlides.replace(/\s+/g, "").split(",")), _super.addLayer.apply(this, arguments)
        }, p.create = function() {
            _super.create.apply(this, arguments), this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.checkLayers.bind(this))
        }, p.checkLayers = function() {
            if (this.ready)
                for (var i = 0; i !== this.layersCount; ++i) {
                    var layer = this.layers[i];
                    layer.waitForAction || (this._checkForShow(layer) ? layer.start() : layer.hide())
                }
        }, p._enableParallaxEffect = function() {
            this.slider.view.$element.on("mousemove", {
                that: this
            }, this._mouseParallaxMove).on("mouseleave", {
                that: this
            }, this._resetParalax)
        }, p._disableParallaxEffect = function() {
            this.slider.view.$element.off("mousemove", this._mouseParallaxMove).off("mouseleave", this._resetParalax)
        }, p._startLayers = function() {
            for (var i = 0; i !== this.layersCount; ++i) {
                var layer = this.layers[i];
                this._checkForShow(layer) && !layer.waitForAction && layer.start()
            }
        }, p._checkForShow = function(layer) {
            var slideId = this.slider.api.currentSlide.id,
                layerHideOn = layer.hideOnSlides,
                layerShowOn = layer.showOnSlides;
            return layerShowOn ? !!slideId && -1 !== layerShowOn.indexOf(slideId) : !slideId || !layerHideOn || layerHideOn.length && -1 === layerHideOn.indexOf(slideId)
        }
    }(jQuery, window, document),
    function($, window) {
        "use strict";
        window.MSOverlayLayers = function(slider) {
            this.slider = slider
        };
        var p = MSOverlayLayers.prototype;
        p.setupLayerController = function() {
            this.layerController = new MSOverlayLayerController(this), this.slider.api.addEventListener(MSSliderEvent.RESIZE, this.setSize.bind(this)), this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.setSize.bind(this)), this.setSize()
        }, p.setSize = function() {
            this.__width = this.$element.width(), this.__height = this.$element.height(), this.layerController.setSize(this.__width, this.__height)
        }, p.create = function() {
            this.layerController.create(), this.layerController.loadLayers(this._onLayersLoad), this.layerController.prepareToShow(), window.pointerEventsPolyfill && window.pointerEventsPolyfill({
                selector: "#" + this.slider.$element.attr("id") + " .ms-overlay-layers",
                forcePolyfill: !1
            })
        }, p.getHeight = function() {
            return this.slider.api.currentSlide.getHeight()
        }, p.destroy = function() {
            this.layerController.destroy()
        }, p._onLayersLoad = function() {
            this.ready = !0, this.selected = !0, this.layersLoaded = !0, this.setSize(), this.layerController.showLayers()
        }
    }(jQuery, window, document),
    function($) {
        window.MSLayerEffects = {};
        var installed, _fade = {
            opacity: 0
        };
        MSLayerEffects.setup = function() {
            if (!installed) {
                installed = !0;
                var st = MSLayerEffects,
                    transform_css = window._jcsspfx + "Transform",
                    transform_orig_css = window._jcsspfx + "TransformOrigin",
                    o = $.browser.opera;
                _2d = window._css2d && window._cssanim && !o, st.defaultValues = {
                    left: 0,
                    top: 0,
                    opacity: isMSIE("<=9") ? 1 : "",
                    right: 0,
                    bottom: 0
                }, st.defaultValues[transform_css] = "", st.rf = 1, st.presetEffParams = {
                    random: "30|300",
                    "long": 300,
                    "short": 30,
                    "false": !1,
                    "true": !0,
                    tl: "top left",
                    bl: "bottom left",
                    tr: "top right",
                    br: "bottom right",
                    rt: "top right",
                    lb: "bottom left",
                    lt: "top left",
                    rb: "bottom right",
                    t: "top",
                    b: "bottom",
                    r: "right",
                    l: "left",
                    c: "center"
                }, st.fade = function() {
                    return _fade
                }, st.left = _2d ? function(dist, fade) {
                    var r = fade === !1 ? {} : {
                        opacity: 0
                    };
                    return r[transform_css] = "translateX(" + -dist * st.rf + "px)", r
                } : function(dist, fade) {
                    var r = fade === !1 ? {} : {
                        opacity: 0
                    };
                    return r.left = -dist * st.rf + "px", r
                }, st.right = _2d ? function(dist, fade) {
                    var r = fade === !1 ? {} : {
                        opacity: 0
                    };
                    return r[transform_css] = "translateX(" + dist * st.rf + "px)", r
                } : function(dist, fade) {
                    var r = fade === !1 ? {} : {
                        opacity: 0
                    };
                    return r.left = dist * st.rf + "px", r
                }, st.top = _2d ? function(dist, fade) {
                    var r = fade === !1 ? {} : {
                        opacity: 0
                    };
                    return r[transform_css] = "translateY(" + -dist * st.rf + "px)", r
                } : function(dist, fade) {
                    var r = fade === !1 ? {} : {
                        opacity: 0
                    };
                    return r.top = -dist * st.rf + "px", r
                }, st.bottom = _2d ? function(dist, fade) {
                    var r = fade === !1 ? {} : {
                        opacity: 0
                    };
                    return r[transform_css] = "translateY(" + dist * st.rf + "px)", r
                } : function(dist, fade) {
                    var r = fade === !1 ? {} : {
                        opacity: 0
                    };
                    return r.top = dist * st.rf + "px", r
                }, st.from = _2d ? function(leftdis, topdis, fade) {
                    var r = fade === !1 ? {} : {
                        opacity: 0
                    };
                    return r[transform_css] = "translateX(" + leftdis * st.rf + "px) translateY(" + topdis * st.rf + "px)", r
                } : function(leftdis, topdis, fade) {
                    var r = fade === !1 ? {} : {
                        opacity: 0
                    };
                    return r.top = topdis * st.rf + "px", r.left = leftdis * st.rf + "px", r
                }, st.rotate = _2d ? function(deg, orig) {
                    var r = {
                        opacity: 0
                    };
                    return r[transform_css] = " rotate(" + deg + "deg)", orig && (r[transform_orig_css] = orig), r
                } : function() {
                    return _fade
                }, st.rotateleft = _2d ? function(deg, dist, orig, fade) {
                    var r = st.left(dist, fade);
                    return r[transform_css] += " rotate(" + deg + "deg)", orig && (r[transform_orig_css] = orig), r
                } : function(deg, dist, orig, fade) {
                    return st.left(dist, fade)
                }, st.rotateright = _2d ? function(deg, dist, orig, fade) {
                    var r = st.right(dist, fade);
                    return r[transform_css] += " rotate(" + deg + "deg)", orig && (r[transform_orig_css] = orig), r
                } : function(deg, dist, orig, fade) {
                    return st.right(dist, fade)
                }, st.rotatetop = _2d ? function(deg, dist, orig, fade) {
                    var r = st.top(dist, fade);
                    return r[transform_css] += " rotate(" + deg + "deg)", orig && (r[transform_orig_css] = orig), r
                } : function(deg, dist, orig, fade) {
                    return st.top(dist, fade)
                }, st.rotatebottom = _2d ? function(deg, dist, orig, fade) {
                    var r = st.bottom(dist, fade);
                    return r[transform_css] += " rotate(" + deg + "deg)", orig && (r[transform_orig_css] = orig), r
                } : function(deg, dist, orig, fade) {
                    return st.bottom(dist, fade)
                }, st.rotatefrom = _2d ? function(deg, leftdis, topdis, orig, fade) {
                    var r = st.from(leftdis, topdis, fade);
                    return r[transform_css] += " rotate(" + deg + "deg)", orig && (r[transform_orig_css] = orig), r
                } : function(deg, leftdis, topdis, orig, fade) {
                    return st.from(leftdis, topdis, fade)
                }, st.skewleft = _2d ? function(deg, dist, fade) {
                    var r = st.left(dist, fade);
                    return r[transform_css] += " skewX(" + deg + "deg)", r
                } : function(deg, dist, fade) {
                    return st.left(dist, fade)
                }, st.skewright = _2d ? function(deg, dist, fade) {
                    var r = st.right(dist, fade);
                    return r[transform_css] += " skewX(" + -deg + "deg)", r
                } : function(deg, dist, fade) {
                    return st.right(dist, fade)
                }, st.skewtop = _2d ? function(deg, dist, fade) {
                    var r = st.top(dist, fade);
                    return r[transform_css] += " skewY(" + deg + "deg)", r
                } : function(deg, dist, fade) {
                    return st.top(dist, fade)
                }, st.skewbottom = _2d ? function(deg, dist, fade) {
                    var r = st.bottom(dist, fade);
                    return r[transform_css] += " skewY(" + -deg + "deg)", r
                } : function(deg, dist, fade) {
                    return st.bottom(dist, fade)
                }, st.scale = _2d ? function(x, y, orig, fade) {
                    var r = fade === !1 ? {} : {
                        opacity: 0
                    };
                    return r[transform_css] = " scaleX(" + x + ") scaleY(" + y + ")", orig && (r[transform_orig_css] = orig), r
                } : function(x, y, orig, fade) {
                    return fade === !1 ? {} : {
                        opacity: 0
                    }
                }, st.scaleleft = _2d ? function(x, y, dist, orig, fade) {
                    var r = st.left(dist, fade);
                    return r[transform_css] = " scaleX(" + x + ") scaleY(" + y + ")", orig && (r[transform_orig_css] = orig), r
                } : function(x, y, dist, orig, fade) {
                    return st.left(dist, fade)
                }, st.scaleright = _2d ? function(x, y, dist, orig, fade) {
                    var r = st.right(dist, fade);
                    return r[transform_css] = " scaleX(" + x + ") scaleY(" + y + ")", orig && (r[transform_orig_css] = orig), r
                } : function(x, y, dist, orig, fade) {
                    return st.right(dist, fade)
                }, st.scaletop = _2d ? function(x, y, dist, orig, fade) {
                    var r = st.top(dist, fade);
                    return r[transform_css] = " scaleX(" + x + ") scaleY(" + y + ")", orig && (r[transform_orig_css] = orig), r
                } : function(x, y, dist, orig, fade) {
                    return st.top(dist, fade)
                }, st.scalebottom = _2d ? function(x, y, dist, orig, fade) {
                    var r = st.bottom(dist, fade);
                    return r[transform_css] = " scaleX(" + x + ") scaleY(" + y + ")", orig && (r[transform_orig_css] = orig), r
                } : function(x, y, dist, orig, fade) {
                    return st.bottom(dist, fade)
                }, st.scalefrom = _2d ? function(x, y, leftdis, topdis, orig, fade) {
                    var r = st.from(leftdis, topdis, fade);
                    return r[transform_css] += " scaleX(" + x + ") scaleY(" + y + ")", orig && (r[transform_orig_css] = orig), r
                } : function(x, y, leftdis, topdis, orig, fade) {
                    return st.from(leftdis, topdis, fade)
                }, st.rotatescale = _2d ? function(deg, x, y, orig, fade) {
                    var r = st.scale(x, y, orig, fade);
                    return r[transform_css] += " rotate(" + deg + "deg)", orig && (r[transform_orig_css] = orig), r
                } : function(deg, x, y, orig, fade) {
                    return st.scale(x, y, orig, fade)
                }, st.front = window._css3d ? function(dist, fade) {
                    var r = fade === !1 ? {} : {
                        opacity: 0
                    };
                    return r[transform_css] = "perspective(2000px) translate3d(0 , 0 ," + dist + "px ) rotate(0.001deg)", r
                } : function() {
                    return _fade
                }, st.back = window._css3d ? function(dist, fade) {
                    var r = fade === !1 ? {} : {
                        opacity: 0
                    };
                    return r[transform_css] = "perspective(2000px) translate3d(0 , 0 ," + -dist + "px ) rotate(0.001deg)", r
                } : function() {
                    return _fade
                }, st.rotatefront = window._css3d ? function(deg, dist, orig, fade) {
                    var r = fade === !1 ? {} : {
                        opacity: 0
                    };
                    return r[transform_css] = "perspective(2000px) translate3d(0 , 0 ," + dist + "px ) rotate(" + (deg || .001) + "deg)", orig && (r[transform_orig_css] = orig), r
                } : function() {
                    return _fade
                }, st.rotateback = window._css3d ? function(deg, dist, orig, fade) {
                    var r = fade === !1 ? {} : {
                        opacity: 0
                    };
                    return r[transform_css] = "perspective(2000px) translate3d(0 , 0 ," + -dist + "px ) rotate(" + (deg || .001) + "deg)", orig && (r[transform_orig_css] = orig), r
                } : function() {
                    return _fade
                }, st.rotate3dleft = window._css3d ? function(x, y, z, dist, orig, fade) {
                    var r = st.left(dist, fade);
                    return r[transform_css] += (x ? " rotateX(" + x + "deg)" : " ") + (y ? " rotateY(" + y + "deg)" : "") + (z ? " rotateZ(" + z + "deg)" : ""), orig && (r[transform_orig_css] = orig), r
                } : function(x, y, z, dist, orig, fade) {
                    return st.left(dist, fade)
                }, st.rotate3dright = window._css3d ? function(x, y, z, dist, orig, fade) {
                    var r = st.right(dist, fade);
                    return r[transform_css] += (x ? " rotateX(" + x + "deg)" : " ") + (y ? " rotateY(" + y + "deg)" : "") + (z ? " rotateZ(" + z + "deg)" : ""), orig && (r[transform_orig_css] = orig), r
                } : function(x, y, z, dist, orig, fade) {
                    return st.right(dist, fade)
                }, st.rotate3dtop = window._css3d ? function(x, y, z, dist, orig, fade) {
                    var r = st.top(dist, fade);
                    return r[transform_css] += (x ? " rotateX(" + x + "deg)" : " ") + (y ? " rotateY(" + y + "deg)" : "") + (z ? " rotateZ(" + z + "deg)" : ""), orig && (r[transform_orig_css] = orig), r
                } : function(x, y, z, dist, orig, fade) {
                    return st.top(dist, fade)
                }, st.rotate3dbottom = window._css3d ? function(x, y, z, dist, orig, fade) {
                    var r = st.bottom(dist, fade);
                    return r[transform_css] += (x ? " rotateX(" + x + "deg)" : " ") + (y ? " rotateY(" + y + "deg)" : "") + (z ? " rotateZ(" + z + "deg)" : ""), orig && (r[transform_orig_css] = orig), r
                } : function(x, y, z, dist, orig, fade) {
                    return st.bottom(dist, fade)
                }, st.rotate3dfront = window._css3d ? function(x, y, z, dist, orig, fade) {
                    var r = st.front(dist, fade);
                    return r[transform_css] += (x ? " rotateX(" + x + "deg)" : " ") + (y ? " rotateY(" + y + "deg)" : "") + (z ? " rotateZ(" + z + "deg)" : ""), orig && (r[transform_orig_css] = orig), r
                } : function(x, y, z, dist, orig, fade) {
                    return st.front(dist, fade)
                }, st.rotate3dback = window._css3d ? function(x, y, z, dist, orig, fade) {
                    var r = st.back(dist, fade);
                    return r[transform_css] += (x ? " rotateX(" + x + "deg)" : " ") + (y ? " rotateY(" + y + "deg)" : "") + (z ? " rotateZ(" + z + "deg)" : ""), orig && (r[transform_orig_css] = orig), r
                } : function(x, y, z, dist, orig, fade) {
                    return st.back(dist, fade)
                }, st.t = window._css3d ? function(fade, tx, ty, tz, r, rx, ry, rz, scx, scy, skx, sky, ox, oy, oz) {
                    var _r = fade === !1 ? {} : {
                            opacity: 0
                        },
                        transform = "perspective(2000px) ";
                    "n" !== tx && (transform += "translateX(" + tx * st.rf + "px) "), "n" !== ty && (transform += "translateY(" + ty * st.rf + "px) "), "n" !== tz && (transform += "translateZ(" + tz * st.rf + "px) "), "n" !== r && (transform += "rotate(" + r + "deg) "), "n" !== rx && (transform += "rotateX(" + rx + "deg) "), "n" !== ry && (transform += "rotateY(" + ry + "deg) "), "n" !== rz && (transform += "rotateZ(" + rz + "deg) "), "n" !== skx && (transform += "skewX(" + skx + "deg) "), "n" !== sky && (transform += "skewY(" + sky + "deg) "), "n" !== scx && (transform += "scaleX(" + scx + ") "), "n" !== scy && (transform += "scaleY(" + scy + ")"), _r[transform_css] = transform;
                    var trans_origin = "";
                    return trans_origin += "n" !== ox ? ox + "% " : "50% ", trans_origin += "n" !== oy ? oy + "% " : "50% ", trans_origin += "n" !== oz ? oz + "px" : "", _r[transform_orig_css] = trans_origin, _r
                } : function(fade, tx, ty, tz, r) {
                    var r = fade === !1 ? {} : {
                        opacity: 0
                    };
                    return "n" !== tx && (r.left = tx * st.rf + "px"), "n" !== ty && (r.top = ty * st.rf + "px"), r
                }
            }
        }
    }(jQuery),
    function($) {
        window.MSLayerElement = function() {
            this.start_anim = {
                name: "fade",
                duration: 1e3,
                ease: "linear",
                delay: 0
            }, this.end_anim = {
                duration: 1e3,
                ease: "linear"
            }, this.type = "text", this.resizable = !0, this.minWidth = -1, this.isVisible = !0, this.__cssConfig = ["margin-top", "padding-top", "margin-bottom", "padding-left", "margin-right", "padding-right", "margin-left", "padding-bottom", "font-size", "line-height", "width", "left", "right", "top", "bottom"], this.baseStyle = {}
        };
        var p = MSLayerElement.prototype;
        p.setStartAnim = function(anim) {
            $.extend(this.start_anim, anim), $.extend(this.start_anim, this._parseEff(this.start_anim.name)), this.$element.css("visibility", "hidden")
        }, p.setEndAnim = function(anim) {
            $.extend(this.end_anim, anim)
        }, p.create = function() {
            if (this.$element.css("display", "none"), this.resizable = this.$element.data("resize") !== !1, this.fixed = this.$element.data("fixed") === !0, void 0 !== this.$element.data("widthlimit") && (this.minWidth = this.$element.data("widthlimit")), this.end_anim.name || (this.end_anim.name = this.start_anim.name), this.end_anim.time && (this.autoHide = !0), this.staticLayer = "static" === this.$element.data("position"), this.fixedLayer = "fixed" === this.$element.data("position"), this.layersCont = this.controller.$layers, this.staticLayer && this.$element.css("display", "").css("visibility", ""), void 0 !== this.$element.data("action")) {
                var slideController = this.slide.slider.slideController;
                this.$element.on(this.$element.data("action-event") || "click", function(event) {
                    slideController.runAction($(this).data("action")), event.preventDefault()
                }).addClass("ms-action-layer")
            }
            $.extend(this.end_anim, this._parseEff(this.end_anim.name)), this.slider = this.slide.slider, this.masked && (this.$mask = $("<div></div>").addClass("ms-layer-mask"), this.link ? (this.link.wrap(this.$mask), this.$mask = this.link.parent()) : (this.$element.wrap(this.$mask), this.$mask = this.$element.parent()), this.maskWidth && this.$mask.width(this.maskWidth), this.maskHeight && (this.$mask.height(this.maskHeight), -1 === this.__cssConfig.indexOf("height") && this.__cssConfig.push("height")));
            var layerOrigin = this.layerOrigin = this.$element.data("origin");
            if (layerOrigin) {
                var vOrigin = layerOrigin.charAt(0),
                    hOrigin = layerOrigin.charAt(1),
                    offsetX = this.$element.data("offset-x"),
                    offsetY = this.$element.data("offset-y"),
                    layerEle = this.masked ? this.$mask[0] : this.$element[0];
                switch (void 0 === offsetY && (offsetY = 0), vOrigin) {
                    case "t":
                        layerEle.style.top = offsetY + "px";
                        break;
                    case "b":
                        layerEle.style.bottom = offsetY + "px";
                        break;
                    case "m":
                        layerEle.style.top = offsetY + "px", this.middleAlign = !0
                }
                switch (void 0 === offsetX && (offsetX = 0), hOrigin) {
                    case "l":
                        layerEle.style.left = offsetX + "px";
                        break;
                    case "r":
                        layerEle.style.right = offsetX + "px";
                        break;
                    case "c":
                        layerEle.style.left = offsetX + "px", this.centerAlign = !0
                }
            }
            this.parallax = this.$element.data("parallax"), null != this.parallax && (this.parallax /= 100, this.$parallaxElement = $("<div></div>").addClass("ms-parallax-layer"), this.masked ? (this.$mask.wrap(this.$parallaxElement), this.$parallaxElement = this.$mask.parent()) : this.link ? (this.link.wrap(this.$parallaxElement), this.$parallaxElement = this.link.parent()) : (this.$element.wrap(this.$parallaxElement), this.$parallaxElement = this.$element.parent()), this._lastParaX = 0, this._lastParaY = 0, this._paraX = 0, this._paraY = 0, this.alignedToBot = this.layerOrigin && -1 !== this.layerOrigin.indexOf("b"), this.alignedToBot && this.$parallaxElement.css("bottom", 0), this.parallaxRender = window._css3d ? this._parallaxCSS3DRenderer : window._css2d ? this._parallaxCSS2DRenderer : this._parallax2DRenderer, "swipe" !== this.slider.options.parallaxMode && averta.Ticker.add(this.parallaxRender, this)), $.removeDataAttrs(this.$element, ["data-src"])
        }, p.init = function() {
            this.initialized = !0;
            var value;
            this.$element.css("visibility", "");
            for (var i = 0, l = this.__cssConfig.length; l > i; i++) {
                var key = this.__cssConfig[i];
                if (this._isPosition(key) && this.masked) value = this.$mask.css(key);
                else if ("text" !== this.type || "width" !== key || this.masked || this.maskWidth) {
                    value = this.$element.css(key);
                    var isSize = "width" === key || "height" === key;
                    isSize && this.masked && (this.maskWidth && "width" === key ? value = this.maskWidth + "px" : this.maskHeight && "height" === key && (value = this.maskHeight + "px")), isSize && "0px" === value && (value = this.$element.data(key) + "px")
                } else value = this.$element[0].style.width;
                this.layerOrigin && ("top" === key && -1 === this.layerOrigin.indexOf("t") && -1 === this.layerOrigin.indexOf("m") || "bottom" === key && -1 === this.layerOrigin.indexOf("b") || "left" === key && -1 === this.layerOrigin.indexOf("l") && -1 === this.layerOrigin.indexOf("c") || "right" === key && -1 === this.layerOrigin.indexOf("r")) || "auto" != value && "" != value && "normal" != value && (this.baseStyle[key] = parseInt(value))
            }
            this.middleAlign && (this.baseHeight = this.$element.outerHeight(!1)), this.centerAlign && (this.baseWidth = this.$element.outerWidth(!1))
        }, p.locate = function() {
            if (this.slide.ready) {
                var factor, isPosition, isSize, width = parseFloat(this.layersCont.css("width")),
                    height = parseFloat(this.layersCont.css("height"));
                !this.staticLayer && "none" === this.$element.css("display") && this.isVisible && this.$element.css("display", "").css("visibility", "hidden"), this.staticLayer && this.$element.addClass("ms-hover-active"), factor = this.resizeFactor = width / this.slide.slider.options.width;
                var $layerEle = this.masked ? this.$mask : this.$element;
                for (var key in this.baseStyle) isPosition = this._isPosition(key), isSize = "width" === key || "height" === key, factor = this.fixed && isPosition ? 1 : this.resizeFactor, (this.resizable || isPosition) && ("top" === key && this.middleAlign ? ($layerEle[0].style.top = "0px", this.baseHeight = $layerEle.outerHeight(!1), $layerEle[0].style.top = this.baseStyle.top * factor + (height - this.baseHeight) / 2 + "px") : "left" === key && this.centerAlign ? ($layerEle[0].style.left = "0px", this.baseWidth = $layerEle.outerWidth(!1), $layerEle[0].style.left = this.baseStyle.left * factor + (width - this.baseWidth) / 2 + "px") : isPosition && this.masked ? $layerEle[0].style[key] = this.baseStyle[key] * factor + "px" : isSize && ("width" === key && this.maskWidth || "height" === key && this.maskHeight) ? $layerEle[0].style[key] = this.baseStyle[key] * factor + "px" : this.$element.css(key, this.baseStyle[key] * factor + "px"));
                this.visible(this.minWidth < width)
            }
        }, p.start = function() {
            if (!this.isShowing && !this.staticLayer) {
                this.isShowing = !0, this.$element.removeClass("ms-hover-active");
                var key, base;
                MSLayerEffects.rf = this.resizeFactor;
                var effect_css = MSLayerEffects[this.start_anim.eff_name].apply(null, this._parseEffParams(this.start_anim.eff_params)),
                    start_css_eff = {};
                for (key in effect_css) this._checkPosKey(key, effect_css) || (null != MSLayerEffects.defaultValues[key] && (start_css_eff[key] = MSLayerEffects.defaultValues[key]), key in this.baseStyle && (base = this.baseStyle[key], this.middleAlign && "top" === key && (base += (parseInt(this.layersCont.height()) - this.$element.outerHeight(!1)) / 2), this.centerAlign && "left" === key && (base += (parseInt(this.layersCont.width()) - this.$element.outerWidth(!1)) / 2), effect_css[key] = base + parseFloat(effect_css[key]) + "px", start_css_eff[key] = base + "px"), this.$element.css(key, effect_css[key]));
                var that = this;
                clearTimeout(this.to), clearTimeout(this.clHide), this.to = setTimeout(function() {
                    that.$element.css("visibility", ""), that._playAnimation(that.start_anim, start_css_eff)
                }, that.start_anim.delay || .01), this.clTo = setTimeout(function() {
                    that.show_cl = !0, that.$element.addClass("ms-hover-active")
                }, (this.start_anim.delay || .01) + this.start_anim.duration + 1), this.autoHide && (clearTimeout(this.hto), this.hto = setTimeout(function() {
                    that.hide()
                }, that.end_anim.time))
            }
        }, p.hide = function() {
            if (!this.staticLayer) {
                this.$element.removeClass("ms-hover-active"), this.isShowing = !1;
                var effect_css = MSLayerEffects[this.end_anim.eff_name].apply(null, this._parseEffParams(this.end_anim.eff_params));
                for (key in effect_css) this._checkPosKey(key, effect_css) || (key === window._jcsspfx + "TransformOrigin" && this.$element.css(key, effect_css[key]), key in this.baseStyle && (effect_css[key] = this.baseStyle[key] + parseFloat(effect_css[key]) + "px"));
                this._playAnimation(this.end_anim, effect_css), clearTimeout(this.clHide), 0 === effect_css.opacity && (this.clHide = setTimeout(function() {
                    this.$element.css("visibility", "hidden")
                }.bind(this), this.end_anim.duration + 1)), clearTimeout(this.to), clearTimeout(this.hto), clearTimeout(this.clTo)
            }
        }, p.reset = function() {
            this.staticLayer || (this.isShowing = !1, this.$element[0].style.display = "none", this.$element.css("opacity", ""), this.$element[0].style.transitionDuration = "", this.show_tween && this.show_tween.stop(!0), clearTimeout(this.to), clearTimeout(this.hto))
        }, p.destroy = function() {
            this.reset(), this.$element.remove()
        }, p.visible = function(value) {
            this.isVisible != value && (this.isVisible = value, this.$element.css("display", value ? "" : "none"))
        }, p.moveParallax = function(x, y, fast) {
            this._paraX = x, this._paraY = y, fast && (this._lastParaX = x, this._lastParaY = y, this.parallaxRender())
        }, p._playAnimation = function(animation, css) {
            var options = {};
            animation.ease && (options.ease = animation.ease), options.transProperty = window._csspfx + "transform,opacity", this.show_tween && this.show_tween.stop(!0), this.show_tween = CTween.animate(this.$element, animation.duration, css, options)
        }, p._randomParam = function(value) {
            var min = Number(value.slice(0, value.indexOf("|"))),
                max = Number(value.slice(value.indexOf("|") + 1));
            return min + Math.random() * (max - min)
        }, p._parseEff = function(eff_name) {
            var eff_params = [];
            if (-1 !== eff_name.indexOf("(")) {
                var value, temp = eff_name.slice(0, eff_name.indexOf("(")).toLowerCase();
                eff_params = eff_name.slice(eff_name.indexOf("(") + 1, -1).replace(/\"|\'|\s/g, "").split(","), eff_name = temp;
                for (var i = 0, l = eff_params.length; l > i; ++i) value = eff_params[i], value in MSLayerEffects.presetEffParams && (value = MSLayerEffects.presetEffParams[value]), eff_params[i] = value
            }
            return {
                eff_name: eff_name,
                eff_params: eff_params
            }
        }, p._parseEffParams = function(params) {
            for (var eff_params = [], i = 0, l = params.length; l > i; ++i) {
                var value = params[i];
                "string" == typeof value && -1 !== value.indexOf("|") && (value = this._randomParam(value)), eff_params[i] = value
            }
            return eff_params
        }, p._checkPosKey = function(key, style) {
            return "left" === key && !(key in this.baseStyle) && "right" in this.baseStyle ? (style.right = -parseInt(style.left) + "px", delete style.left, !0) : "top" === key && !(key in this.baseStyle) && "bottom" in this.baseStyle ? (style.bottom = -parseInt(style.top) + "px", delete style.top, !0) : !1
        }, p._isPosition = function(key) {
            return "top" === key || "left" === key || "bottom" === key || "right" === key
        }, p._parallaxCalc = function() {
            var x_def = this._paraX - this._lastParaX,
                y_def = this._paraY - this._lastParaY;
            this._lastParaX += x_def / 12, this._lastParaY += y_def / 12, Math.abs(x_def) < .019 && (this._lastParaX = this._paraX), Math.abs(y_def) < .019 && (this._lastParaY = this._paraY)
        }, p._parallaxCSS3DRenderer = function() {
            this._parallaxCalc(), this.$parallaxElement[0].style[window._jcsspfx + "Transform"] = "translateX(" + this._lastParaX * this.parallax + "px) translateY(" + this._lastParaY * this.parallax + "px) translateZ(0)"
        }, p._parallaxCSS2DRenderer = function() {
            this._parallaxCalc(), this.$parallaxElement[0].style[window._jcsspfx + "Transform"] = "translateX(" + this._lastParaX * this.parallax + "px) translateY(" + this._lastParaY * this.parallax + "px)"
        }, p._parallax2DRenderer = function() {
            this._parallaxCalc(), this.alignedToBot ? this.$parallaxElement[0].style.bottom = this._lastParaY * this.parallax + "px" : this.$parallaxElement[0].style.top = this._lastParaY * this.parallax + "px", this.$parallaxElement[0].style.left = this._lastParaX * this.parallax + "px"
        }
    }(jQuery),
    function($) {
        window.MSImageLayerElement = function() {
            MSLayerElement.call(this), this.needPreload = !0, this.__cssConfig = ["width", "height", "margin-top", "padding-top", "margin-bottom", "padding-left", "margin-right", "padding-right", "margin-left", "padding-bottom", "left", "right", "top", "bottom"], this.type = "image"
        }, MSImageLayerElement.extend(MSLayerElement);
        var p = MSImageLayerElement.prototype,
            _super = MSLayerElement.prototype;
        p.create = function() {
            if (this.link) {
                var p = this.$element.parent();
                p.append(this.link), this.link.append(this.$element), this.link.removeClass("ms-layer"), this.$element.addClass("ms-layer"), p = null
            }
            if (_super.create.call(this), void 0 != this.$element.data("src")) this.img_src = this.$element.data("src"), this.$element.removeAttr("data-src");
            else {
                var that = this;
                this.$element.on("load", function() {
                    that.controller.preloadCount--, 0 === that.controller.preloadCount && that.controller._onlayersReady()
                }).each($.jqLoadFix)
            }
            $.browser.msie && this.$element.on("dragstart", function(event) {
                event.preventDefault()
            })
        }, p.loadImage = function() {
            var that = this;
            this.$element.preloadImg(this.img_src, function() {
                that.controller.preloadCount--, 0 === that.controller.preloadCount && that.controller._onlayersReady()
            })
        }
    }(jQuery),
    function($) {
        window.MSVideoLayerElement = function() {
            MSLayerElement.call(this), this.__cssConfig.push("height"), this.type = "video"
        }, MSVideoLayerElement.extend(MSLayerElement);
        var p = MSVideoLayerElement.prototype,
            _super = MSLayerElement.prototype;
        p.__playVideo = function() {
            this.img && CTween.fadeOut(this.img, 500, 2), CTween.fadeOut(this.video_btn, 500, 2), this.video_frame.attr("src", "about:blank").css("display", "block"), -1 == this.video_url.indexOf("?") && (this.video_url += "?"), this.video_frame.attr("src", this.video_url + "&autoplay=1")
        }, p.start = function() {
            _super.start.call(this), this.$element.data("autoplay") && this.__playVideo()
        }, p.reset = function() {
            return _super.reset.call(this), (this.needPreload || this.$element.data("btn")) && (this.video_btn.css("opacity", 1).css("display", "block"), this.video_frame.attr("src", "about:blank").css("display", "none")), this.needPreload ? void this.img.css("opacity", 1).css("display", "block") : void this.video_frame.attr("src", this.video_url)
        }, p.create = function() {
            _super.create.call(this), this.video_frame = this.$element.find("iframe").css({
                width: "100%",
                height: "100%"
            }), this.video_url = this.video_frame.attr("src");
            var has_img = 0 != this.$element.has("img").length;
            if (has_img || this.$element.data("btn")) {
                this.video_frame.attr("src", "about:blank").css("display", "none");
                var that = this;
                if (this.video_btn = $("<div></div>").appendTo(this.$element).addClass("ms-video-btn").click(function() {
                        that.__playVideo()
                    }), has_img) {
                    if (this.needPreload = !0, this.img = this.$element.find("img:first").addClass("ms-video-img"), void 0 !== this.img.data("src")) this.img_src = this.img.data("src"), this.img.removeAttr("data-src");
                    else {
                        var that = this;
                        this.img.attr("src", this.img_src).on("load", function() {
                            that.controller.preloadCount--, 0 === that.controller.preloadCount && that.controller._onlayersReady()
                        }).each($.jqLoadFix)
                    }
                    $.browser.msie && this.img.on("dragstart", function(event) {
                        event.preventDefault()
                    })
                }
            }
        }, p.loadImage = function() {
            var that = this;
            this.img.preloadImg(this.img_src, function() {
                that.controller.preloadCount--, 0 === that.controller.preloadCount && that.controller._onlayersReady()
            })
        }
    }(jQuery),
    function($) {
        "use strict";
        window.MSHotspotLayer = function() {
            MSLayerElement.call(this), this.__cssConfig = ["margin-top", "padding-top", "margin-bottom", "padding-left", "margin-right", "padding-right", "margin-left", "padding-bottom", "left", "right", "top", "bottom"], this.ease = "Expo", this.hide_start = !0, this.type = "hotspot"
        }, MSHotspotLayer.extend(MSLayerElement);
        var p = MSHotspotLayer.prototype,
            _super = MSLayerElement.prototype;
        p._showTT = function() {
            this.show_cl && (clearTimeout(this.hto), this._tween && this._tween.stop(!0), this.hide_start && (this.align = this._orgAlign, this._locateTT(), this.tt.css({
                display: "block"
            }), this._tween = CTween.animate(this.tt, 900, this.to, {
                ease: "easeOut" + this.ease
            }), this.hide_start = !1))
        }, p._hideTT = function() {
            if (this.show_cl) {
                this._tween && this._tween.stop(!0);
                var that = this;
                clearTimeout(this.hto), this.hto = setTimeout(function() {
                    that.hide_start = !0, that._tween = CTween.animate(that.tt, 900, that.from, {
                        ease: "easeOut" + that.ease,
                        complete: function() {
                            that.tt.css("display", "none")
                        }
                    })
                }, 200)
            }
        }, p._updateClassName = function(name) {
            this._lastClass && this.tt.removeClass(this._lastClass), this.tt.addClass(name), this._lastClass = name
        }, p._alignPolicy = function() {
            {
                var w = (this.tt.outerHeight(!1), Math.max(this.tt.outerWidth(!1), parseInt(this.tt.css("max-width")))),
                    ww = window.innerWidth;
                window.innerHeight
            }
            switch (this.align) {
                case "top":
                    if (this.base_t < 0) return "bottom";
                    break;
                case "right":
                    if (this.base_l + w > ww || this.base_t < 0) return "bottom";
                    break;
                case "left":
                    if (this.base_l < 0 || this.base_t < 0) return "bottom"
            }
            return null
        }, p._locateTT = function() {
            var os = this.$element.offset(),
                os2 = this.slide.slider.$element.offset(),
                dist = 50,
                space = 15;
            this.pos_x = os.left - os2.left - this.slide.slider.$element.scrollLeft(), this.pos_y = os.top - os2.top - this.slide.slider.$element.scrollTop(), this.from = {
                opacity: 0
            }, this.to = {
                opacity: 1
            }, this._updateClassName("ms-tooltip-" + this.align), this.tt_arrow.css("margin-left", "");
            var arrow_w = 15,
                arrow_h = 15;
            switch (this.align) {
                case "top":
                    var w = Math.min(this.tt.outerWidth(!1), parseInt(this.tt.css("max-width")));
                    this.base_t = this.pos_y - this.tt.outerHeight(!1) - arrow_h - space, this.base_l = this.pos_x - w / 2, this.base_l + w > window.innerWidth && (this.tt_arrow.css("margin-left", -arrow_w / 2 + this.base_l + w - window.innerWidth + "px"), this.base_l = window.innerWidth - w), this.base_l < 0 && (this.base_l = 0, this.tt_arrow.css("margin-left", -arrow_w / 2 + this.pos_x - this.tt.outerWidth(!1) / 2 + "px")), window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateY(-" + dist + "px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.top = this.base_t - dist + "px", this.to.top = this.base_t + "px");
                    break;
                case "bottom":
                    var w = Math.min(this.tt.outerWidth(!1), parseInt(this.tt.css("max-width")));
                    this.base_t = this.pos_y + arrow_h + space, this.base_l = this.pos_x - w / 2, this.base_l + w > window.innerWidth && (this.tt_arrow.css("margin-left", -arrow_w / 2 + this.base_l + w - window.innerWidth + "px"), this.base_l = window.innerWidth - w), this.base_l < 0 && (this.base_l = 0, this.tt_arrow.css("margin-left", -arrow_w / 2 + this.pos_x - this.tt.outerWidth(!1) / 2 + "px")), window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateY(" + dist + "px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.top = this.base_t + dist + "px", this.to.top = this.base_t + "px");
                    break;
                case "right":
                    this.base_l = this.pos_x + arrow_w + space, this.base_t = this.pos_y - this.tt.outerHeight(!1) / 2, window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateX(" + dist + "px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.left = this.base_l + dist + "px", this.to.left = this.base_l + "px");
                    break;
                case "left":
                    this.base_l = this.pos_x - arrow_w - this.tt.outerWidth(!1) - space, this.base_t = this.pos_y - this.tt.outerHeight(!1) / 2, window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateX(-" + dist + "px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.left = this.base_l - dist + "px", this.to.left = this.base_l + "px")
            }
            var policyAlign = this._alignPolicy();
            return null !== policyAlign ? (this.align = policyAlign, void this._locateTT()) : (this.tt.css("top", parseInt(this.base_t) + "px").css("left", parseInt(this.base_l) + "px"), void this.tt.css(this.from))
        }, p.start = function() {
            _super.start.call(this), this.tt.appendTo(this.slide.slider.$element), this.tt.css("display", "none")
        }, p.reset = function() {
            _super.reset.call(this), this.tt.detach()
        }, p.create = function() {
            var that = this;
            this._orgAlign = this.align = void 0 !== this.$element.data("align") ? this.$element.data("align") : "top", this.data = this.$element.html(), this.$element.html("").on("mouseenter", function() {
                that._showTT()
            }).on("mouseleave", function() {
                that._hideTT()
            }), this.point = $('<div><div class="ms-point-center"></div><div class="ms-point-border"></div></div>').addClass("ms-tooltip-point").appendTo(this.$element);
            var link = this.$element.data("link"),
                target = this.$element.data("target");
            link && this.point.on("click", function() {
                window.open(link, target || "_self")
            }), this.tt = $("<div></div>").addClass("ms-tooltip").css("display", "hidden").css("opacity", 0), void 0 !== this.$element.data("width") && this.tt.css("width", this.$element.data("width")).css("max-width", this.$element.data("width")), this.tt_arrow = $("<div></div>").addClass("ms-tooltip-arrow").appendTo(this.tt), this._updateClassName("ms-tooltip-" + this.align), this.ttcont = $("<div></div>").addClass("ms-tooltip-cont").html(this.data).appendTo(this.tt), this.$element.data("stay-hover") === !0 && this.tt.on("mouseenter", function() {
                that.hide_start || (clearTimeout(that.hto), that._tween.stop(!0), that._showTT())
            }).on("mouseleave", function() {
                that._hideTT()
            }), _super.create.call(this)
        }
    }(jQuery),
    function() {
        window.MSButtonLayer = function() {
            MSLayerElement.call(this), this.type = "button"
        }, MSButtonLayer.extend(MSLayerElement);
        var p = MSButtonLayer.prototype,
            _super = MSLayerElement.prototype,
            positionKies = ["top", "left", "bottom", "right"];
        p.create = function() {
            _super.create.call(this), this.$element.wrap('<div class="ms-btn-container"></div>').css("position", "relative"), this.$container = this.$element.parent()
        }, p.locate = function() {
            _super.locate.call(this);
            for (var key, tempValue, i = 0; 4 > i; i++) key = positionKies[i], key in this.baseStyle && (tempValue = this.$element.css(key), this.$element.css(key, ""), this.$container.css(key, tempValue));
            this.$container.width(this.$element.outerWidth(!0)).height(this.$element.outerHeight(!0))
        }
    }(jQuery), window.MSSliderEvent = function(type) {
        this.type = type
    }, MSSliderEvent.CHANGE_START = "ms_changestart", MSSliderEvent.CHANGE_END = "ms_changeend", MSSliderEvent.WAITING = "ms_waiting", MSSliderEvent.AUTOPLAY_CHANGE = "ms_autoplaychange", MSSliderEvent.VIDEO_PLAY = "ms_videoPlay", MSSliderEvent.VIDEO_CLOSE = "ms_videoclose", MSSliderEvent.INIT = "ms_init", MSSliderEvent.HARD_UPDATE = "ms_hard_update", MSSliderEvent.RESIZE = "ms_resize", MSSliderEvent.RESERVED_SPACE_CHANGE = "ms_rsc", MSSliderEvent.DESTROY = "ms_destroy",
    function(window, document, $) {
        "use strict";
        window.MSSlide = function() {
            this.$element = null, this.$loading = $("<div></div>").addClass("ms-slide-loading"), this.view = null, this.index = -1, this.__width = 0, this.__height = 0, this.fillMode = "fill", this.selected = !1, this.pselected = !1, this.autoAppend = !0, this.isSleeping = !0, this.moz = $.browser.mozilla
        };
        var p = MSSlide.prototype;
        p.onSwipeStart = function() {
            this.link && (this.linkdis = !0), this.video && (this.videodis = !0)
        }, p.onSwipeMove = function(e) {
            var move = Math.max(Math.abs(e.data.distanceX), Math.abs(e.data.distanceY));
            this.swipeMoved = move > 4
        }, p.onSwipeCancel = function() {
            return this.swipeMoved ? void(this.swipeMoved = !1) : (this.link && (this.linkdis = !1), void(this.video && (this.videodis = !1)))
        }, p.setupLayerController = function() {
            this.hasLayers = !0, this.layerController = new MSLayerController(this)
        }, p.assetsLoaded = function() {
            this.ready = !0, this.slider.api._startTimer(), (this.selected || this.pselected && this.slider.options.instantStartLayers) && (this.hasLayers && this.layerController.showLayers(), this.vinit && (this.bgvideo.play(), this.autoPauseBgVid || (this.bgvideo.currentTime = 0))), this.isSleeping || this.setupBG(), CTween.fadeOut(this.$loading, 300, !0), (0 === this.slider.options.preload || "all" === this.slider.options.preload) && this.index < this.view.slideList.length - 1 ? this.view.slideList[this.index + 1].loadImages() : "all" === this.slider.options.preload && this.index === this.view.slideList.length - 1 && this.slider._removeLoading()
        }, p.setBG = function(img) {
            this.hasBG = !0;
            var that = this;
            this.$imgcont = $("<div></div>").addClass("ms-slide-bgcont"), this.$element.append(this.$loading).append(this.$imgcont), this.$bg_img = $(img).css("visibility", "hidden"), this.$imgcont.append(this.$bg_img), this.bgAligner = new MSAligner(that.fillMode, that.$imgcont, that.$bg_img), this.bgAligner.widthOnly = this.slider.options.autoHeight, that.slider.options.autoHeight && (that.pselected || that.selected) && that.slider.setHeight(that.slider.options.height), void 0 !== this.$bg_img.data("src") ? (this.bg_src = this.$bg_img.data("src"), this.$bg_img.removeAttr("data-src")) : this.$bg_img.one("load", function(event) {
                that._onBGLoad(event)
            }).each($.jqLoadFix)
        }, p.setupBG = function() {
            !this.initBG && this.bgLoaded && (this.initBG = !0, this.$bg_img.css("visibility", ""), this.bgWidth = this.bgNatrualWidth || this.$bg_img.width(), this.bgHeight = this.bgNatrualHeight || this.$bg_img.height(), CTween.fadeIn(this.$imgcont, 300), this.slider.options.autoHeight && this.$imgcont.height(this.bgHeight * this.ratio), this.bgAligner.init(this.bgWidth, this.bgHeight), this.setSize(this.__width, this.__height), this.slider.options.autoHeight && (this.pselected || this.selected) && this.slider.setHeight(this.getHeight()))
        }, p.loadImages = function() {
            if (!this.ls) {
                if (this.ls = !0, this.bgvideo && this.bgvideo.load(), this.hasBG && this.bg_src) {
                    var that = this;
                    this.$bg_img.preloadImg(this.bg_src, function(event) {
                        that._onBGLoad(event)
                    })
                }
                this.hasLayers && this.layerController.loadLayers(this._onLayersLoad), this.hasBG || this.hasLayers || this.assetsLoaded()
            }
        }, p._onLayersLoad = function() {
            this.layersLoaded = !0, (!this.hasBG || this.bgLoaded) && this.assetsLoaded()
        }, p._onBGLoad = function(event) {
            this.bgNatrualWidth = event.width, this.bgNatrualHeight = event.height, this.bgLoaded = !0, $.browser.msie && this.$bg_img.on("dragstart", function(event) {
                event.preventDefault()
            }), (!this.hasLayers || this.layerController.ready) && this.assetsLoaded()
        }, p.setBGVideo = function($video) {
            if ($video[0].play) {
                if (window._mobile && !this.slider.options.mobileBGVideo) return void $video.remove();
                this.bgvideo = $video[0];
                var that = this;
                $video.addClass("ms-slide-bgvideo"), $video.data("loop") !== !1 && (this.bgvideo.loop = !0), $video.data("mute") !== !1 && (this.bgvideo.muted = !0), $video.data("autopause") === !0 && (this.autoPauseBgVid = !0), this.bgvideo.setAttribute("playsinline", ""), this.bgvideo_fillmode = $video.data("fill-mode") || "fill", "none" !== this.bgvideo_fillmode && (this.bgVideoAligner = new MSAligner(this.bgvideo_fillmode, this.$element, $video), this.bgvideo.addEventListener("loadedmetadata", function() {
                    that.vinit || (that.vinit = !0, that.video_aspect = that.bgVideoAligner.baseHeight / that.bgVideoAligner.baseWidth, that.bgVideoAligner.init(that.bgvideo.videoWidth, that.bgvideo.videoHeight), that._alignBGVideo(), CTween.fadeIn($(that.bgvideo), 200), that.selected && that.bgvideo.play())
                })), $video.css("opacity", 0), this.$bgvideocont = $("<div></div>").addClass("ms-slide-bgvideocont").append($video), this.hasBG ? this.$imgcont.before(this.$bgvideocont) : this.$bgvideocont.appendTo(this.$element)
            }
        }, p._alignBGVideo = function() {
            this.bgvideo_fillmode && "none" !== this.bgvideo_fillmode && this.bgVideoAligner.align()
        }, p.setSize = function(width, height, hard) {
            this.__width = width, this.slider.options.autoHeight && (this.bgLoaded ? (this.ratio = this.__width / this.bgWidth, height = Math.floor(this.ratio * this.bgHeight), this.$imgcont.height(height)) : (this.ratio = width / this.slider.options.width, height = this.slider.options.height * this.ratio)), this.__height = height, this.$element.width(width).height(height), this.hasBG && this.bgLoaded && this.bgAligner.align(), this._alignBGVideo(), this.hasLayers && this.layerController.setSize(width, height, hard)
        }, p.getHeight = function() {
            return this.hasBG && this.bgLoaded ? this.bgHeight * this.ratio : Math.max(this.$element[0].clientHeight, this.slider.options.height * this.ratio)
        }, p.__playVideo = function() {
            this.vplayed || this.videodis || (this.vplayed = !0, this.slider.api.paused || (this.slider.api.pause(), this.roc = !0), this.vcbtn.css("display", ""), CTween.fadeOut(this.vpbtn, 500, !1), CTween.fadeIn(this.vcbtn, 500), CTween.fadeIn(this.vframe, 500), this.vframe.css("display", "block").attr("src", this.video + "&autoplay=1"), this.view.$element.addClass("ms-def-cursor"), this.moz && this.view.$element.css("perspective", "none"), this.view.swipeControl && this.view.swipeControl.disable(), this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_PLAY)))
        }, p.__closeVideo = function() {
            if (this.vplayed) {
                this.vplayed = !1, this.roc && this.slider.api.resume();
                var that = this;
                CTween.fadeIn(this.vpbtn, 500), CTween.animate(this.vcbtn, 500, {
                    opacity: 0
                }, {
                    complete: function() {
                        that.vcbtn.css("display", "none")
                    }
                }), CTween.animate(this.vframe, 500, {
                    opacity: 0
                }, {
                    complete: function() {
                        that.vframe.attr("src", "about:blank").css("display", "none")
                    }
                }), this.moz && this.view.$element.css("perspective", ""), this.view.swipeControl && this.view.swipeControl.enable(), this.view.$element.removeClass("ms-def-cursor"), this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_CLOSE))
            }
        }, p.create = function() {
            var that = this;
            this.hasLayers && this.layerController.create(), this.link && this.link.addClass("ms-slide-link").html("").click(function(e) {
                that.linkdis && e.preventDefault()
            }), this.video && (-1 === this.video.indexOf("?") && (this.video += "?"), this.vframe = $("<iframe></iframe>").addClass("ms-slide-video").css({
                width: "100%",
                height: "100%",
                display: "none"
            }).attr("src", "about:blank").attr("allowfullscreen", "true").appendTo(this.$element), this.vpbtn = $("<div></div>").addClass("ms-slide-vpbtn").click(function() {
                that.__playVideo()
            }).appendTo(this.$element), this.vcbtn = $("<div></div>").addClass("ms-slide-vcbtn").click(function() {
                that.__closeVideo()
            }).appendTo(this.$element).css("display", "none"), window._touch && this.vcbtn.removeClass("ms-slide-vcbtn").addClass("ms-slide-vcbtn-mobile").append('<div class="ms-vcbtn-txt">Close video</div>').appendTo(this.view.$element.parent())), !this.slider.options.autoHeight && this.hasBG && (this.$imgcont.css("height", "100%"), ("center" === this.fillMode || "stretch" === this.fillMode) && (this.fillMode = "fill")), this.slider.options.autoHeight && this.$element.addClass("ms-slide-auto-height"), this.sleep(!0)
        }, p.destroy = function() {
            this.hasLayers && (this.layerController.destroy(), this.layerController = null), this.$element.remove(), this.$element = null
        }, p.prepareToSelect = function() {
            this.pselected || this.selected || (this.pselected = !0, (this.link || this.video) && (this.view.addEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this), this.view.addEventListener(MSViewEvents.SWIPE_MOVE, this.onSwipeMove, this), this.view.addEventListener(MSViewEvents.SWIPE_CANCEL, this.onSwipeCancel, this), this.linkdis = !1, this.swipeMoved = !1), this.loadImages(), this.hasLayers && this.layerController.prepareToShow(), this.ready && (this.bgvideo && this.bgvideo.play(), this.hasLayers && this.slider.options.instantStartLayers && this.layerController.showLayers()), this.moz && this.$element.css("margin-top", ""))
        }, p.select = function() {
            this.selected || (this.selected = !0, this.pselected = !1, this.$element.addClass("ms-sl-selected"), this.hasLayers && (this.slider.options.autoHeight && this.layerController.updateHeight(), this.slider.options.instantStartLayers || this.layerController.showLayers()), this.ready && this.bgvideo && this.bgvideo.play(), this.videoAutoPlay && (this.videodis = !1, this.vpbtn.trigger("click")))
        }, p.unselect = function() {
            this.pselected = !1, this.moz && this.$element.css("margin-top", "0.1px"), (this.link || this.video) && (this.view.removeEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this), this.view.removeEventListener(MSViewEvents.SWIPE_MOVE, this.onSwipeMove, this), this.view.removeEventListener(MSViewEvents.SWIPE_CANCEL, this.onSwipeCancel, this)), this.bgvideo && (this.bgvideo.pause(), !this.autoPauseBgVid && this.vinit && (this.bgvideo.currentTime = 0)), this.hasLayers && this.layerController.hideLayers(), this.selected && (this.selected = !1, this.$element.removeClass("ms-sl-selected"), this.video && this.vplayed && (this.__closeVideo(), this.roc = !1))
        }, p.sleep = function(force) {
            (!this.isSleeping || force) && (this.isSleeping = !0, this.autoAppend && this.$element.detach(), this.hasLayers && this.layerController.onSlideSleep())
        }, p.wakeup = function() {
            this.isSleeping && (this.isSleeping = !1, this.autoAppend && this.view.$slideCont.append(this.$element), this.moz && this.$element.css("margin-top", "0.1px"), this.setupBG(), this.hasBG && this.bgAligner.align(), this.hasLayers && this.layerController.onSlideWakeup())
        }
    }(window, document, jQuery),
    function($) {
        "use strict";
        var SliderViewList = {};
        window.MSSlideController = function(slider) {
            this._delayProgress = 0, this._timer = new averta.Timer(100), this._timer.onTimer = this.onTimer, this._timer.refrence = this, this.currentSlide = null, this.slider = slider, this.so = slider.options, averta.EventDispatcher.call(this)
        }, MSSlideController.registerView = function(name, _class) {
            if (name in SliderViewList) throw new Error(name + ", is already registered.");
            SliderViewList[name] = _class
        }, MSSlideController.SliderControlList = {}, MSSlideController.registerControl = function(name, _class) {
            if (name in MSSlideController.SliderControlList) throw new Error(name + ", is already registered.");
            MSSlideController.SliderControlList[name] = _class
        };
        var p = MSSlideController.prototype;
        p.setupView = function() {
            var that = this;
            this.resize_listener = function() {
                that.__resize()
            };
            var viewOptions = {
                spacing: this.so.space,
                mouseSwipe: this.so.mouse,
                loop: this.so.loop,
                autoHeight: this.so.autoHeight,
                swipe: this.so.swipe,
                speed: this.so.speed,
                dir: this.so.dir,
                viewNum: this.so.inView,
                critMargin: this.so.critMargin
            };
            this.so.viewOptions && $.extend(viewOptions, this.so.viewOptions), this.so.autoHeight && (this.so.heightLimit = !1);
            var viewClass = SliderViewList[this.slider.options.view] || MSBasicView;
            if (!viewClass._3dreq || window._css3d && !$.browser.msie || (viewClass = viewClass._fallback || MSBasicView), this.view = new viewClass(viewOptions), this.so.overPause) {
                var that = this;
                this.slider.$element.mouseenter(function() {
                    that.is_over = !0, that._stopTimer()
                }).mouseleave(function() {
                    that.is_over = !1, that._startTimer()
                })
            }
        }, p.onChangeStart = function() {
            this.change_started = !0, this.currentSlide && this.currentSlide.unselect(), this.currentSlide = this.view.currentSlide, this.currentSlide.prepareToSelect(), this.so.endPause && this.currentSlide.index === this.slider.slides.length - 1 && (this.pause(), this.skipTimer()), this.so.autoHeight && this.slider.setHeight(this.currentSlide.getHeight()), this.so.deepLink && this.__updateWindowHash(), this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_START))
        }, p.onChangeEnd = function() {
            if (this.change_started = !1, this._startTimer(), this.currentSlide.select(), this.so.preload > 1) {
                var loc, i, slide, l = this.so.preload - 1;
                for (i = 1; l >= i; ++i) {
                    if (loc = this.view.index + i, loc >= this.view.slideList.length) {
                        if (!this.so.loop) {
                            i = l;
                            continue
                        }
                        loc -= this.view.slideList.length
                    }
                    slide = this.view.slideList[loc], slide && slide.loadImages()
                }
                for (l > this.view.slideList.length / 2 && (l = Math.floor(this.view.slideList.length / 2)), i = 1; l >= i; ++i) {
                    if (loc = this.view.index - i, 0 > loc) {
                        if (!this.so.loop) {
                            i = l;
                            continue
                        }
                        loc = this.view.slideList.length + loc
                    }
                    slide = this.view.slideList[loc], slide && slide.loadImages()
                }
            }
            this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_END))
        }, p.onSwipeStart = function() {
            this.skipTimer()
        }, p.skipTimer = function() {
            this._timer.reset(), this._delayProgress = 0, this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING))
        }, p.onTimer = function() {
            if (this._timer.getTime() >= 1e3 * this.view.currentSlide.delay && (this.skipTimer(), this.view.next(), this.hideCalled = !1), this._delayProgress = this._timer.getTime() / (10 * this.view.currentSlide.delay), this.so.hideLayers && !this.hideCalled && 1e3 * this.view.currentSlide.delay - this._timer.getTime() <= 300) {
                var currentSlide = this.view.currentSlide;
                currentSlide.hasLayers && currentSlide.layerController.animHideLayers(), this.hideCalled = !0
            }
            this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING))
        }, p._stopTimer = function() {
            this._timer && this._timer.stop()
        }, p._startTimer = function() {
            this.paused || this.is_over || !this.currentSlide || !this.currentSlide.ready || this.change_started || this._timer.start()
        }, p.__appendSlides = function() {
            var slide, loc, i = 0,
                l = this.view.slideList.length - 1;
            for (i; l > i; ++i) slide = this.view.slideList[i], slide.detached || (slide.$element.detach(), slide.detached = !0);
            for (this.view.appendSlide(this.view.slideList[this.view.index]), l = 3, i = 1; l >= i; ++i) {
                if (loc = this.view.index + i, loc >= this.view.slideList.length) {
                    if (!this.so.loop) {
                        i = l;
                        continue
                    }
                    loc -= this.view.slideList.length
                }
                slide = this.view.slideList[loc], slide.detached = !1, this.view.appendSlide(slide)
            }
            for (l > this.view.slideList.length / 2 && (l = Math.floor(this.view.slideList.length / 2)), i = 1; l >= i; ++i) {
                if (loc = this.view.index - i, 0 > loc) {
                    if (!this.so.loop) {
                        i = l;
                        continue
                    }
                    loc = this.view.slideList.length + loc
                }
                slide = this.view.slideList[loc], slide.detached = !1, this.view.appendSlide(slide)
            }
        }, p.__resize = function(hard) {
            this.created && (this.width = this.slider.$element[0].clientWidth || this.so.width, this.so.fullwidth || (this.width = Math.min(this.width, this.so.width)), this.so.fullheight ? (this.so.heightLimit = !1, this.so.autoHeight = !1, this.height = this.slider.$element[0].clientHeight) : this.height = this.width / this.slider.aspect, this.so.autoHeight ? (this.currentSlide.setSize(this.width, null, hard), this.view.setSize(this.width, this.currentSlide.getHeight(), hard)) : this.view.setSize(this.width, Math.max(this.so.minHeight, this.so.heightLimit ? Math.min(this.height, this.so.height) : this.height), hard), this.slider.$controlsCont && this.so.centerControls && this.so.fullwidth && this.view.$element.css("left", Math.min(0, -(this.slider.$element[0].clientWidth - this.so.width) / 2) + "px"), this.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESIZE)))
        }, p.__dispatchInit = function() {
            this.dispatchEvent(new MSSliderEvent(MSSliderEvent.INIT))
        }, p.__updateWindowHash = function() {
            var hash = window.location.hash,
                dl = this.so.deepLink,
                dlt = this.so.deepLinkType,
                eq = "path" === dlt ? "/" : "=",
                sep = "path" === dlt ? "/" : "&",
                sliderHash = dl + eq + (this.view.index + 1),
                regTest = new RegExp(dl + eq + "[0-9]+", "g");
            window.location.hash = "" === hash ? sep + sliderHash : regTest.test(hash) ? hash.replace(regTest, sliderHash) : hash + sep + sliderHash
        }, p.__curentSlideInHash = function() {
            var hash = window.location.hash,
                dl = this.so.deepLink,
                dlt = this.so.deepLinkType,
                eq = "path" === dlt ? "/" : "=",
                regTest = new RegExp(dl + eq + "[0-9]+", "g");
            if (regTest.test(hash)) {
                var index = Number(hash.match(regTest)[0].match(/[0-9]+/g).pop());
                if (!isNaN(index)) return index - 1
            }
            return -1
        }, p.__onHashChanged = function() {
            var index = this.__curentSlideInHash(); - 1 !== index && this.gotoSlide(index)
        }, p.__findLayerById = function(layerId) {
            if (!this.currentSlide) return null;
            var layer;
            return this.currentSlide.layerController && (layer = this.currentSlide.layerController.getLayerById(layerId)), !layer && this.slider.overlayLayers ? this.slider.overlayLayers.layerController.getLayerById(layerId) : layer
        }, p.setup = function() {
            this.created = !0, this.paused = !this.so.autoplay, this.view.addEventListener(MSViewEvents.CHANGE_START, this.onChangeStart, this), this.view.addEventListener(MSViewEvents.CHANGE_END, this.onChangeEnd, this), this.view.addEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this), this.currentSlide = this.view.slideList[this.so.start - 1], this.__resize();
            var slideInHash = this.__curentSlideInHash(),
                startSlide = -1 !== slideInHash ? slideInHash : this.so.start - 1;
            if (this.view.create(startSlide), 0 === this.so.preload && this.view.slideList[0].loadImages(), this.scroller = this.view.controller, this.so.wheel) {
                var that = this,
                    last_time = (new Date).getTime();
                this.wheellistener = function(event) {
                    var e = window.event || event.orginalEvent || event;
                    e.preventDefault();
                    var current_time = (new Date).getTime();
                    if (!(400 > current_time - last_time)) {
                        last_time = current_time;
                        var delta = Math.abs(e.detail || e.wheelDelta);
                        $.browser.mozilla && (delta *= 100);
                        var scrollThreshold = 15;
                        return e.detail < 0 || e.wheelDelta > 0 ? delta >= scrollThreshold && that.previous(!0) : delta >= scrollThreshold && that.next(!0), !1
                    }
                }, $.browser.mozilla ? this.slider.$element[0].addEventListener("DOMMouseScroll", this.wheellistener) : this.slider.$element.bind("mousewheel", this.wheellistener)
            }
            0 === this.slider.$element[0].clientWidth && (this.slider.init_safemode = !0), this.__resize();
            var that = this;
            this.so.deepLink && $(window).on("hashchange", function() {
                that.__onHashChanged()
            })
        }, p.index = function() {
            return this.view.index
        }, p.count = function() {
            return this.view.slidesCount
        }, p.next = function(checkLoop) {
            this.skipTimer(), this.view.next(checkLoop)
        }, p.previous = function(checkLoop) {
            this.skipTimer(), this.view.previous(checkLoop)
        }, p.gotoSlide = function(index) {
            index = Math.min(index, this.count() - 1), this.skipTimer(), this.view.gotoSlide(index)
        }, p.destroy = function(reset) {
            this.dispatchEvent(new MSSliderEvent(MSSliderEvent.DESTROY)), this.slider.destroy(reset)
        }, p._destroy = function() {
            this._timer.reset(), this._timer = null, $(window).unbind("resize", this.resize_listener), this.view.destroy(), this.view = null, this.so.wheel && ($.browser.mozilla ? this.slider.$element[0].removeEventListener("DOMMouseScroll", this.wheellistener) : this.slider.$element.unbind("mousewheel", this.wheellistener), this.wheellistener = null), this.so = null
        }, p.runAction = function(action) {
            var actionParams = [];
            if (-1 !== action.indexOf("(")) {
                var temp = action.slice(0, action.indexOf("("));
                actionParams = action.slice(action.indexOf("(") + 1, -1).replace(/\"|\'|\s/g, "").split(","), action = temp
            }
            action in this ? this[action].apply(this, actionParams) : console
        }, p.update = function(hard) {
            this.slider.init_safemode && hard && (this.slider.init_safemode = !1), this.__resize(hard), hard && this.dispatchEvent(new MSSliderEvent(MSSliderEvent.HARD_UPDATE))
        }, p.locate = function() {
            this.__resize()
        }, p.resume = function() {
            this.paused && (this.paused = !1, this._startTimer())
        }, p.pause = function() {
            this.paused || (this.paused = !0, this._stopTimer())
        }, p.currentTime = function() {
            return this._delayProgress
        }, p.showLayer = function(layerId, delay) {
            var layer = this.__findLayerById(layerId);
            layer && (delay ? (clearTimeout(layer.actionTimeout), layer.actionTimeout = setTimeout(this.showLayer, delay, layerId, 0)) : layer.start())
        }, p.hideLayer = function(layerId, delay) {
            var layer = this.__findLayerById(layerId);
            layer && (delay ? (clearTimeout(layer.actionTimeout), layer.actionTimeout = setTimeout(this.hideLayer, delay, layerId, 0)) : layer.hide())
        }, p.toggleLayer = function(layerId, delay) {
            var layer = this.__findLayerById(layerId);
            layer && (delay ? (clearTimeout(layer.actionTimeout), layer.actionTimeout = setTimeout(this.toggleLayer, delay, layerId, 0)) : layer.isShowing ? layer.hide() : layer.start())
        }, p.showLayers = function(layerIds, delay) {
            var self = this;
            $.each(layerIds.replace(/\s+/g, "").split("|"), function(index, layerId) {
                self.showLayer(layerId, delay)
            })
        }, p.hideLayers = function(layerIds, delay) {
            var self = this;
            $.each(layerIds.replace(/\s+/g, "").split("|"), function(index, layerId) {
                self.hideLayer(layerId, delay)
            })
        }, p.toggleLayers = function(layerIds, delay) {
            var self = this;
            $.each(layerIds.replace(/\s+/g, "").split("|"), function(index, layerId) {
                self.toggleLayer(layerId, delay)
            })
        }, averta.EventDispatcher.extend(p)
    }(jQuery),
    function($) {
        "use strict";
        var LayerTypes = {
            image: MSImageLayerElement,
            text: MSLayerElement,
            video: MSVideoLayerElement,
            hotspot: MSHotspotLayer,
            button: MSButtonLayer
        };
        window.MasterSlider = function() {
            this.options = {
                forceInit: !0,
                autoplay: !1,
                loop: !1,
                mouse: !0,
                swipe: !0,
                grabCursor: !0,
                space: 0,
                fillMode: "fill",
                start: 1,
                view: "basic",
                width: 300,
                height: 150,
                inView: 15,
                critMargin: 1,
                mobileBGVideo: !1,
                heightLimit: !0,
                smoothHeight: !0,
                autoHeight: !1,
                minHeight: -1,
                fullwidth: !1,
                fullheight: !1,
                autofill: !1,
                layersMode: "center",
                hideLayers: !1,
                endPause: !1,
                centerControls: !0,
                overPause: !0,
                shuffle: !1,
                speed: 17,
                dir: "h",
                preload: 0,
                wheel: !1,
                layout: "boxed",
                autofillTarget: null,
                fullscreenMargin: 0,
                instantStartLayers: !1,
                parallaxMode: "mouse",
                rtl: !1,
                deepLink: null,
                deepLinkType: "path",
                disablePlugins: []
            }, this.slides = [], this.activePlugins = [], this.$element = null, this.lastMargin = 0, this.leftSpace = 0, this.topSpace = 0, this.rightSpace = 0, this.bottomSpace = 0, this._holdOn = 0;
            var that = this;
            this.resize_listener = function() {
                that._resize()
            }, $(window).bind("resize", this.resize_listener)
        }, MasterSlider.author = "Averta Ltd. (www.averta.net)", MasterSlider.version = "2.61.2", MasterSlider.releaseDate = "Jul 2018", MasterSlider._plugins = [];
        var MS = MasterSlider;
        MS.registerPlugin = function(plugin) {
            -1 === MS._plugins.indexOf(plugin) && MS._plugins.push(plugin)
        };
        var p = MasterSlider.prototype;
        p.__setupSlides = function() {
            var new_slide, that = this,
                ind = 0;
            this.$element.children(".ms-slide").each(function() {
                var $slide_ele = $(this);
                new_slide = new MSSlide, new_slide.$element = $slide_ele, new_slide.slider = that, new_slide.delay = void 0 !== $slide_ele.data("delay") ? $slide_ele.data("delay") : 3, new_slide.fillMode = void 0 !== $slide_ele.data("fill-mode") ? $slide_ele.data("fill-mode") : that.options.fillMode, new_slide.index = ind++, new_slide.id = $slide_ele.data("id");
                var slide_img = $slide_ele.children("img:not(.ms-layer)");
                slide_img.length > 0 && new_slide.setBG(slide_img[0]);
                var slide_video = $slide_ele.children("video");
                if (slide_video.length > 0 && new_slide.setBGVideo(slide_video), that.controls)
                    for (var i = 0, l = that.controls.length; l > i; ++i) that.controls[i].slideAction(new_slide);
                $slide_ele.children("a").each(function() {
                    var $this = $(this);
                    "video" === this.getAttribute("data-type") ? (new_slide.video = this.getAttribute("href"), new_slide.videoAutoPlay = $this.data("autoplay"), $this.remove()) : $this.hasClass("ms-layer") || (new_slide.link = $(this))
                });
                that.__createSlideLayers(new_slide, $slide_ele.find(".ms-layer")), that.slides.push(new_slide), that.slideController.view.addSlide(new_slide)
            })
        }, p._setupOverlayLayers = function() {
            var self = this,
                $ollayers = this.$element.children(".ms-overlay-layers").eq(0);
            if ($ollayers.length) {
                var overlayLayers = new MSOverlayLayers(this);
                overlayLayers.$element = $ollayers, self.__createSlideLayers(overlayLayers, $ollayers.find(".ms-layer")), this.view.$element.prepend($ollayers), this.overlayLayers = overlayLayers, overlayLayers.create()
            }
        }, p.__createSlideLayers = function(slide, layers) {
            0 != layers.length && (slide.setupLayerController(), layers.each(function(index, domEle) {
                var $parent_ele, $layer_element = $(this);
                "A" === domEle.nodeName && "image" === $layer_element.find(">img").data("type") && ($parent_ele = $(this), $layer_element = $parent_ele.find("img"));
                var layer = new(LayerTypes[$layer_element.data("type") || "text"]);
                layer.$element = $layer_element, layer.link = $parent_ele, layer.id = layer.$element.data("id"), layer.waitForAction = layer.$element.data("wait"), layer.masked = layer.$element.data("masked"), layer.maskWidth = layer.$element.data("mask-width"), layer.maskHeight = layer.$element.data("mask-height");
                var eff_parameters = {},
                    end_eff_parameters = {};
                void 0 !== $layer_element.data("effect") && (eff_parameters.name = $layer_element.data("effect")), void 0 !== $layer_element.data("ease") && (eff_parameters.ease = $layer_element.data("ease")), void 0 !== $layer_element.data("duration") && (eff_parameters.duration = $layer_element.data("duration")), void 0 !== $layer_element.data("delay") && (eff_parameters.delay = $layer_element.data("delay")), $layer_element.data("hide-effect") && (end_eff_parameters.name = $layer_element.data("hide-effect")), $layer_element.data("hide-ease") && (end_eff_parameters.ease = $layer_element.data("hide-ease")), void 0 !== $layer_element.data("hide-duration") && (end_eff_parameters.duration = $layer_element.data("hide-duration")), void 0 !== $layer_element.data("hide-time") && (end_eff_parameters.time = $layer_element.data("hide-time")), layer.setStartAnim(eff_parameters), layer.setEndAnim(end_eff_parameters), slide.layerController.addLayer(layer)
            }))
        }, p._removeLoading = function() {
            $(window).unbind("resize", this.resize_listener), this.$element.removeClass("before-init").css("visibility", "visible").css("height", "").css("opacity", 0), CTween.fadeIn(this.$element), this.$loading.remove(), this.slideController && this.slideController.__resize()
        }, p._resize = function() {
            if (this.$loading) {
                var h = this.$loading[0].clientWidth / this.aspect;
                h = this.options.heightLimit ? Math.min(h, this.options.height) : h, this.$loading.height(h), this.$element.height(h)
            }
        }, p._shuffleSlides = function() {
            for (var r, slides = this.$element.children(".ms-slide"), i = 0, l = slides.length; l > i; ++i) r = Math.floor(Math.random() * (l - 1)), i != r && (this.$element[0].insertBefore(slides[i], slides[r]), slides = this.$element.children(".ms-slide"))
        }, p._setupSliderLayout = function() {
            this._updateSideMargins(), this.lastMargin = this.leftSpace;
            var lo = this.options.layout;
            "boxed" !== lo && "partialview" !== lo && (this.options.fullwidth = !0), ("fullscreen" === lo || "autofill" === lo) && (this.options.fullheight = !0, "autofill" === lo && (this.$autofillTarget = $(this.options.autofillTarget), 0 === this.$autofillTarget.length && (this.$autofillTarget = this.$element.parent()))), "partialview" === lo && this.$element.addClass("ms-layout-partialview"), ("fullscreen" === lo || "fullwidth" === lo || "autofill" === lo) && ($(window).bind("resize", {
                that: this
            }, this._updateLayout), this._updateLayout()), $(window).bind("resize", this.slideController.resize_listener)
        }, p._updateLayout = function(event) {
            var that = event ? event.data.that : this,
                lo = that.options.layout,
                $element = that.$element,
                $win = $(window);
            if ("fullscreen" === lo) document.body.style.overflow = "hidden", $element.height($win.height() - that.options.fullscreenMargin - that.topSpace - that.bottomSpace), document.body.style.overflow = "";
            else if ("autofill" === lo) return void $element.height(that.$autofillTarget.height() - that.options.fullscreenMargin - that.topSpace - that.bottomSpace).width(that.$autofillTarget.width() - that.leftSpace - that.rightSpace);
            $element.width($win.width() - that.leftSpace - that.rightSpace);
            var margin = -$element.offset().left + that.leftSpace + that.lastMargin;
            $element.css("margin-left", margin), that.lastMargin = margin
        }, p._init = function() {
            if (!(this._holdOn > 0) && this._docReady) {
                if (this.initialized = !0, "all" !== this.options.preload && this._removeLoading(), this.options.shuffle && this._shuffleSlides(), MSLayerEffects.setup(), this.slideController.setupView(), this.view = this.slideController.view, this.$controlsCont = $("<div></div>").addClass("ms-inner-controls-cont"), this.options.centerControls && this.$controlsCont.css("max-width", this.options.width + "px"), this.$controlsCont.prepend(this.view.$element), this.$msContainer = $("<div></div>").addClass("ms-container").prependTo(this.$element).append(this.$controlsCont), this.controls)
                    for (var i = 0, l = this.controls.length; l > i; ++i) this.controls[i].setup();
                if (this._setupSliderLayout(), this.__setupSlides(), this.slideController.setup(), this._setupOverlayLayers(), this.controls)
                    for (i = 0, l = this.controls.length; l > i; ++i) this.controls[i].create();
                if (this.options.autoHeight && this.slideController.view.$element.height(this.slideController.currentSlide.getHeight()), this.options.swipe && !window._touch && this.options.grabCursor && this.options.mouse) {
                    var $view = this.view.$element;
                    $view.mousedown(function() {
                        $view.removeClass("ms-grab-cursor"), $view.addClass("ms-grabbing-cursor"), $.browser.msie && window.ms_grabbing_curosr && ($view[0].style.cursor = "url(" + window.ms_grabbing_curosr + "), move")
                    }).addClass("ms-grab-cursor"), $(document).mouseup(function() {
                        $view.removeClass("ms-grabbing-cursor"), $view.addClass("ms-grab-cursor"), $.browser.msie && window.ms_grab_curosr && ($view[0].style.cursor = "url(" + window.ms_grab_curosr + "), move")
                    })
                }
                this.slideController.__dispatchInit()
            }
        }, p.setHeight = function(value) {
            this.options.smoothHeight ? (this.htween && (this.htween.reset ? this.htween.reset() : this.htween.stop(!0)), this.htween = CTween.animate(this.slideController.view.$element, 500, {
                height: value
            }, {
                ease: "easeOutQuart"
            })) : this.slideController.view.$element.height(value)
        }, p.reserveSpace = function(side, space) {
            var sideSpace = side + "Space",
                pos = this[sideSpace];
            return this[sideSpace] += space, this._updateSideMargins(), pos
        }, p._updateSideMargins = function() {
            this.$element.css("margin", this.topSpace + "px " + this.rightSpace + "px " + this.bottomSpace + "px " + this.leftSpace + "px")
        }, p._realignControls = function() {
            this.rightSpace = this.leftSpace = this.topSpace = this.bottomSpace = 0, this._updateSideMargins(), this.api.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESERVED_SPACE_CHANGE))
        }, p.control = function(control, options) {
            if (control in MSSlideController.SliderControlList) {
                this.controls || (this.controls = []);
                var ins = new MSSlideController.SliderControlList[control](options);
                return ins.slider = this, this.controls.push(ins), this
            }
        }, p.holdOn = function() {
            this._holdOn++
        }, p.release = function() {
            this._holdOn--, this._init()
        }, p.setup = function(target, options) {
            if (this.$element = "string" == typeof target ? $("#" + target) : target.eq(0), this.setupMarkup = this.$element.html(), 0 !== this.$element.length) {
                this.$element.addClass("master-slider").addClass("before-init"), $.browser.msie ? this.$element.addClass("ms-ie").addClass("ms-ie" + $.browser.version.slice(0, $.browser.version.indexOf("."))) : $.browser.webkit ? this.$element.addClass("ms-wk") : $.browser.mozilla && this.$element.addClass("ms-moz");
                var ua = navigator.userAgent.toLowerCase(),
                    isAndroid = ua.indexOf("android") > -1;
                isAndroid && this.$element.addClass("ms-android");
                var that = this;
                $.extend(this.options, options), this.aspect = this.options.width / this.options.height, this.$loading = $("<div></div>").addClass("ms-loading-container").insertBefore(this.$element).append($("<div></div>").addClass("ms-loading")), this.$loading.parent().css("position", "relative"), this.options.autofill && (this.options.fullwidth = !0, this.options.fullheight = !0), this.options.fullheight && this.$element.addClass("ms-fullheight"), this._resize(), this.slideController = new MSSlideController(this), this.api = this.slideController;
                for (var i = 0, l = MS._plugins.length; i !== l; i++) {
                    var plugin = MS._plugins[i]; - 1 === this.options.disablePlugins.indexOf(plugin.name) && this.activePlugins.push(new plugin(this))
                }
                return this.options.forceInit && MasterSlider.addJQReadyErrorCheck(this), $(document).ready(function() {
                    that.initialized || (that._docReady = !0, that._init())
                }), this
            }
        }, p.destroy = function(insertMarkup) {
            for (var i = 0, l = this.activePlugins.length; i !== l; i++) this.activePlugins[i].destroy();
            if (this.controls)
                for (i = 0, l = this.controls.length; i !== l; i++) this.controls[i].destroy();
            this.slideController && this.slideController._destroy(), this.$loading && this.$loading.remove(), insertMarkup ? this.$element.html(this.setupMarkup).css("visibility", "hidden") : this.$element.remove();
            var lo = this.options.layout;
            ("fullscreen" === lo || "fullwidth" === lo) && $(window).unbind("resize", this._updateLayout), this.view = null, this.slides = null, this.options = null, this.slideController = null, this.api = null, this.resize_listener = null, this.activePlugins = null
        }
    }(jQuery),
    function($, window, document, undefined) {
        function MasterSliderPlugin(element, options) {
            this.element = element, this.$element = $(element), this.settings = $.extend({}, defaults, options), this._defaults = defaults, this._name = pluginName, this.init()
        }
        var pluginName = "masterslider",
            defaults = {
                controls: {}
            };
        $.extend(MasterSliderPlugin.prototype, {
            init: function() {
                var self = this;
                this._slider = new MasterSlider;
                for (var control in this.settings.controls) this._slider.control(control, this.settings.controls[control]);
                this._slider.setup(this.$element, this.settings);
                var _superDispatch = this._slider.api.dispatchEvent;
                this._slider.api.dispatchEvent = function(event) {
                    self.$element.trigger(event.type), _superDispatch.call(this, event)
                }
            },
            api: function() {
                return this._slider.api
            },
            slider: function() {
                return this._slider
            }
        }), $.fn[pluginName] = function(options) {
            var args = arguments,
                plugin = "plugin_" + pluginName;
            if (options === undefined || "object" == typeof options) return this.each(function() {
                $.data(this, plugin) || $.data(this, plugin, new MasterSliderPlugin(this, options))
            });
            if ("string" == typeof options && "_" !== options[0] && "init" !== options) {
                var returns;
                return this.each(function() {
                    var instance = $.data(this, plugin);
                    instance instanceof MasterSliderPlugin && "function" == typeof instance[options] && (returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1))), instance instanceof MasterSliderPlugin && "function" == typeof instance._slider.api[options] && (returns = instance._slider.api[options].apply(instance._slider.api, Array.prototype.slice.call(args, 1))), "destroy" === options && $.data(this, plugin, null)
                }), returns !== undefined ? returns : this
            }
        }
    }(jQuery, window, document),
    function($, window) {
        "use strict";
        var sliderInstances = [];
        MasterSlider.addJQReadyErrorCheck = function(slider) {
            sliderInstances.push(slider)
        };
        var _ready = $.fn.ready,
            _onerror = window.onerror;
        $.fn.ready = function() {
            return window.onerror = function() {
                if (0 !== sliderInstances.length)
                    for (var i = 0, l = sliderInstances.length; i !== l; i++) {
                        var slider = sliderInstances[i];
                        slider.initialized || (slider._docReady = !0, slider._init())
                    }
                return _onerror ? _onerror.apply(this, arguments) : !1
            }, _ready.apply(this, arguments)
        }
    }(jQuery, window, document), window.MSViewEvents = function(type, data) {
        this.type = type, this.data = data
    }, MSViewEvents.SWIPE_START = "swipeStart", MSViewEvents.SWIPE_END = "swipeEnd", MSViewEvents.SWIPE_MOVE = "swipeMove", MSViewEvents.SWIPE_CANCEL = "swipeCancel", MSViewEvents.SCROLL = "scroll", MSViewEvents.CHANGE_START = "slideChangeStart", MSViewEvents.CHANGE_END = "slideChangeEnd",
    function($) {
        "use strict";
        window.MSBasicView = function(options) {
            this.options = {
                loop: !1,
                dir: "h",
                autoHeight: !1,
                spacing: 5,
                mouseSwipe: !0,
                swipe: !0,
                speed: 17,
                minSlideSpeed: 2,
                viewNum: 20,
                critMargin: 1
            }, $.extend(this.options, options), this.dir = this.options.dir, this.loop = this.options.loop, this.spacing = this.options.spacing, this.__width = 0, this.__height = 0, this.__cssProb = "h" === this.dir ? "left" : "top", this.__offset = "h" === this.dir ? "offsetLeft" : "offsetTop", this.__dimension = "h" === this.dir ? "__width" : "__height", this.__translate_end = window._css3d ? " translateZ(0px)" : "", this.$slideCont = $("<div></div>").addClass("ms-slide-container"), this.$element = $("<div></div>").addClass("ms-view").addClass("ms-basic-view").append(this.$slideCont), this.currentSlide = null, this.index = -1, this.slidesCount = 0, this.slides = [], this.slideList = [], this.viewSlidesList = [], this.css3 = window._cssanim, this.start_buffer = 0, this.firstslide_snap = 0, this.slideChanged = !1, this.controller = new Controller(0, 0, {
                snapping: !0,
                snapsize: 100,
                paging: !0,
                snappingMinSpeed: this.options.minSlideSpeed,
                friction: (100 - .5 * this.options.speed) / 100,
                endless: this.loop
            }), this.controller.renderCallback("h" === this.dir ? this._horizUpdate : this._vertiUpdate, this), this.controller.snappingCallback(this.__snapUpdate, this), this.controller.snapCompleteCallback(this.__snapCompelet, this), averta.EventDispatcher.call(this)
        };
        var p = MSBasicView.prototype;
        p.__snapCompelet = function() {
            this.slideChanged && (this.slideChanged = !1, this.__locateSlides(), this.start_buffer = 0, this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END)))
        }, p.__snapUpdate = function(controller, snap, change) {
            if (this.loop) {
                var target_index = this.index + change;
                this.updateLoop(target_index), target_index >= this.slidesCount && (target_index -= this.slidesCount), 0 > target_index && (target_index = this.slidesCount + target_index), this.index = target_index
            } else {
                if (0 > snap || snap >= this.slidesCount) return;
                this.index = snap
            }
            this._checkCritMargins(), $.browser.mozilla && (this.slideList[this.index].$element[0].style.marginTop = "0.1px", this.currentSlide && (this.currentSlide.$element[0].style.marginTop = ""));
            var new_slide = this.slideList[this.index];
            new_slide !== this.currentSlide && (this.currentSlide = new_slide, this.autoUpdateZIndex && this.__updateSlidesZindex(), this.slideChanged = !0, this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START)))
        }, p._checkCritMargins = function() {
            if (!this.normalMode) {
                var hlf = Math.floor(this.options.viewNum / 2),
                    inView = this.viewSlidesList.indexOf(this.slideList[this.index]),
                    size = this[this.__dimension] + this.spacing,
                    cm = this.options.critMargin;
                return this.loop ? void((cm >= inView || inView >= this.viewSlidesList.length - cm) && (size *= inView - hlf, this.__locateSlides(!1, size + this.start_buffer), this.start_buffer += size)) : void((cm > inView && this.index >= cm || inView >= this.viewSlidesList.length - cm && this.index < this.slidesCount - cm) && this.__locateSlides(!1))
            }
        }, p._vertiUpdate = function(controller, value) {
            return this.__contPos = value, this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL)), this.css3 ? void(this.$slideCont[0].style[window._jcsspfx + "Transform"] = "translateY(" + -value + "px)" + this.__translate_end) : void(this.$slideCont[0].style.top = -value + "px")
        }, p._horizUpdate = function(controller, value) {
            return this.__contPos = value, this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL)), this.css3 ? void(this.$slideCont[0].style[window._jcsspfx + "Transform"] = "translateX(" + -value + "px)" + this.__translate_end) : void(this.$slideCont[0].style.left = -value + "px")
        }, p.__updateViewList = function() {
            if (this.normalMode) return void(this.viewSlidesList = this.slides);
            var temp = this.viewSlidesList.slice();
            this.viewSlidesList = [];
            var l, i = 0,
                hlf = Math.floor(this.options.viewNum / 2);
            if (this.loop)
                for (; i !== this.options.viewNum; i++) this.viewSlidesList.push(this.slides[this.currentSlideLoc - hlf + i]);
            else {
                for (i = 0; i !== hlf && this.index - i !== -1; i++) this.viewSlidesList.unshift(this.slideList[this.index - i]);
                for (i = 1; i !== hlf && this.index + i !== this.slidesCount; i++) this.viewSlidesList.push(this.slideList[this.index + i])
            }
            for (i = 0, l = temp.length; i !== l; i++) - 1 === this.viewSlidesList.indexOf(temp[i]) && temp[i].sleep();
            temp = null, this.currentSlide && this.__updateSlidesZindex()
        }, p.__locateSlides = function(move, start) {
            this.__updateViewList(), start = this.loop ? start || 0 : this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing);
            for (var slide, l = this.viewSlidesList.length, i = 0; i !== l; i++) {
                var pos = start + i * (this[this.__dimension] + this.spacing);
                slide = this.viewSlidesList[i], slide.wakeup(), slide.position = pos, slide.$element[0].style[this.__cssProb] = pos + "px"
            }
            move !== !1 && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
        }, p.__createLoopList = function() {
            var return_arr = [],
                i = 0,
                count = this.slidesCount / 2,
                before_count = this.slidesCount % 2 === 0 ? count - 1 : Math.floor(count),
                after_count = this.slidesCount % 2 === 0 ? count : Math.floor(count);
            for (this.currentSlideLoc = before_count, i = 1; before_count >= i; ++i) return_arr.unshift(this.slideList[this.index - i < 0 ? this.slidesCount - i + this.index : this.index - i]);
            for (return_arr.push(this.slideList[this.index]), i = 1; after_count >= i; ++i) return_arr.push(this.slideList[this.index + i >= this.slidesCount ? this.index + i - this.slidesCount : this.index + i]);
            return return_arr
        }, p.__getSteps = function(index, target) {
            var right = index > target ? this.slidesCount - index + target : target - index,
                left = Math.abs(this.slidesCount - right);
            return left > right ? right : -left
        }, p.__pushEnd = function() {
            var first_slide = this.slides.shift(),
                last_slide = this.slides[this.slidesCount - 2];
            if (this.slides.push(first_slide), this.normalMode) {
                var pos = last_slide.$element[0][this.__offset] + this.spacing + this[this.__dimension];
                first_slide.$element[0].style[this.__cssProb] = pos + "px", first_slide.position = pos
            }
        }, p.__pushStart = function() {
            var last_slide = this.slides.pop(),
                first_slide = this.slides[0];
            if (this.slides.unshift(last_slide), this.normalMode) {
                var pos = first_slide.$element[0][this.__offset] - this.spacing - this[this.__dimension];
                last_slide.$element[0].style[this.__cssProb] = pos + "px", last_slide.position = pos
            }
        }, p.__updateSlidesZindex = function() {
            {
                var slide, l = this.viewSlidesList.length;
                Math.floor(l / 2)
            }
            if (this.loop)
                for (var loc = this.viewSlidesList.indexOf(this.currentSlide), i = 0; i !== l; i++) slide = this.viewSlidesList[i], this.viewSlidesList[i].$element.css("z-index", loc >= i ? i + 1 : l - i);
            else {
                for (var beforeNum = this.currentSlide.index - this.viewSlidesList[0].index, i = 0; i !== l; i++) this.viewSlidesList[i].$element.css("z-index", beforeNum >= i ? i + 1 : l - i);
                this.currentSlide.$element.css("z-index", l)
            }
        }, p.addSlide = function(slide) {
            slide.view = this, this.slides.push(slide), this.slideList.push(slide), this.slidesCount++
        }, p.appendSlide = function(slide) {
            this.$slideCont.append(slide.$element)
        }, p.updateLoop = function(index) {
            if (this.loop)
                for (var steps = this.__getSteps(this.index, index), i = 0, l = Math.abs(steps); l > i; ++i) 0 > steps ? this.__pushStart() : this.__pushEnd()
        }, p.gotoSlide = function(index, fast) {
            this.updateLoop(index), this.index = index;
            var target_slide = this.slideList[index];
            this._checkCritMargins(), this.controller.changeTo(target_slide.position, !fast, null, null, !1), target_slide !== this.currentSlide && (this.slideChanged = !0, this.currentSlide = target_slide, this.autoUpdateZIndex && this.__updateSlidesZindex(), this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START)), fast && this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END)))
        }, p.next = function(checkLoop) {
            return checkLoop && !this.loop && this.index + 1 >= this.slidesCount ? void this.controller.bounce(10) : void this.gotoSlide(this.index + 1 >= this.slidesCount ? 0 : this.index + 1)
        }, p.previous = function(checkLoop) {
            return checkLoop && !this.loop && this.index - 1 < 0 ? void this.controller.bounce(-10) : void this.gotoSlide(this.index - 1 < 0 ? this.slidesCount - 1 : this.index - 1)
        }, p.setupSwipe = function() {
            this.swipeControl = new averta.TouchSwipe(this.$element), this.swipeControl.swipeType = "h" === this.dir ? "horizontal" : "vertical";
            var that = this;
            this.swipeControl.onSwipe = "h" === this.dir ? function(status) {
                that.horizSwipeMove(status)
            } : function(status) {
                that.vertSwipeMove(status)
            }
        }, p.vertSwipeMove = function(status) {
            var phase = status.phase;
            if ("start" === phase) this.controller.stop(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START, status));
            else if ("move" === phase && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + status.moveY) < this.cont_size / 2)) this.controller.drag(status.moveY), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_MOVE, status));
            else if ("end" === phase || "cancel" === phase) {
                var speed = status.distanceY / status.duration * 50 / 3,
                    speedh = Math.abs(status.distanceY / status.duration * 50 / 3);
                Math.abs(speed) > .1 && Math.abs(speed) >= speedh ? (this.controller.push(-speed), speed > this.controller.options.snappingMinSpeed && this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END, status))) : (this.controller.cancel(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL, status)))
            }
        }, p.horizSwipeMove = function(status) {
            var phase = status.phase;
            if ("start" === phase) this.controller.stop(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START, status));
            else if ("move" === phase && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + status.moveX) < this.cont_size / 2)) this.controller.drag(status.moveX), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_MOVE, status));
            else if ("end" === phase || "cancel" === phase) {
                var speed = status.distanceX / status.duration * 50 / 3,
                    speedv = Math.abs(status.distanceY / status.duration * 50 / 3);
                Math.abs(speed) > .1 && Math.abs(speed) >= speedv ? (this.controller.push(-speed), speed > this.controller.options.snappingMinSpeed && this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END, status))) : (this.controller.cancel(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL, status)))
            }
        }, p.setSize = function(width, height, hard) {
            if (this.lastWidth !== width || height !== this.lastHeight || hard) {
                this.$element.width(width).height(height);
                for (var i = 0; i < this.slidesCount; ++i) this.slides[i].setSize(width, height, hard);
                this.__width = width, this.__height = height, this.__created && (this.__locateSlides(), this.cont_size = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing), this.loop || (this.controller._max_value = this.cont_size), this.controller.options.snapsize = this[this.__dimension] + this.spacing, this.controller.changeTo(this.currentSlide.position, !1, null, null, !1), this.controller.cancel(), this.lastWidth = width, this.lastHeight = height)
            }
        }, p.create = function(index) {
            this.__created = !0, this.index = Math.min(index || 0, this.slidesCount - 1), this.lastSnap = this.index, this.loop && (this.slides = this.__createLoopList()), this.normalMode = this.slidesCount <= this.options.viewNum;
            for (var i = 0; i < this.slidesCount; ++i) this.slides[i].create();
            this.__locateSlides(), this.controller.options.snapsize = this[this.__dimension] + this.spacing, this.loop || (this.controller._max_value = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing)), this.gotoSlide(this.index, !0), this.options.swipe && (window._touch || this.options.mouseSwipe) && this.setupSwipe()
        }, p.destroy = function() {
            if (this.__created) {
                for (var i = 0; i < this.slidesCount; ++i) this.slides[i].destroy();
                this.slides = null, this.slideList = null, this.$element.remove(), this.controller.destroy(), this.controller = null
            }
        }, averta.EventDispatcher.extend(p), MSSlideController.registerView("basic", MSBasicView)
    }(jQuery),
    function() {
        "use strict";
        window.MSWaveView = function(options) {
            MSBasicView.call(this, options), this.$element.removeClass("ms-basic-view").addClass("ms-wave-view"), this.$slideCont.css(window._csspfx + "transform-style", "preserve-3d"), this.autoUpdateZIndex = !0
        }, MSWaveView.extend(MSBasicView), MSWaveView._3dreq = !0, MSWaveView._fallback = MSBasicView;
        var p = MSWaveView.prototype,
            _super = MSBasicView.prototype;
        p._horizUpdate = function(controller, value) {
            _super._horizUpdate.call(this, controller, value);
            for (var slide, distance, cont_scroll = -value, i = 0; i < this.slidesCount; ++i) slide = this.slideList[i], distance = -cont_scroll - slide.position, this.__updateSlidesHoriz(slide, distance)
        }, p._vertiUpdate = function(controller, value) {
            _super._vertiUpdate.call(this, controller, value);
            for (var slide, distance, cont_scroll = -value, i = 0; i < this.slidesCount; ++i) slide = this.slideList[i], distance = -cont_scroll - slide.position, this.__updateSlidesVertic(slide, distance)
        }, p.__updateSlidesHoriz = function(slide, distance) {
            var value = Math.abs(100 * distance / this.__width);
            slide.$element[0].style[window._csspfx + "transform"] = "translateZ(" + 3 * -value + "px) rotateY(0.01deg)"
        }, p.__updateSlidesVertic = function(slide, distance) {
            this.__updateSlidesHoriz(slide, distance)
        }, MSSlideController.registerView("wave", MSWaveView)
    }(jQuery),
    function() {
        window.MSFadeBasicView = function(options) {
            MSWaveView.call(this, options), this.$element.removeClass("ms-wave-view").addClass("ms-fade-basic-view")
        }, MSFadeBasicView.extend(MSWaveView); {
            var p = MSFadeBasicView.prototype;
            MSFadeBasicView.prototype
        }
        p.__updateSlidesHoriz = function(slide, distance) {
            var value = Math.abs(.6 * distance / this.__width);
            value = 1 - Math.min(value, .6), slide.$element.css("opacity", value)
        }, p.__updateSlidesVertic = function(slide, distance) {
            this.__updateSlidesHoriz(slide, distance)
        }, MSSlideController.registerView("fadeBasic", MSFadeBasicView), MSWaveView._fallback = MSFadeBasicView
    }(),
    function() {
        window.MSFadeWaveView = function(options) {
            MSWaveView.call(this, options), this.$element.removeClass("ms-wave-view").addClass("ms-fade-wave-view")
        }, MSFadeWaveView.extend(MSWaveView), MSFadeWaveView._3dreq = !0, MSFadeWaveView._fallback = MSFadeBasicView; {
            var p = MSFadeWaveView.prototype;
            MSWaveView.prototype
        }
        p.__updateSlidesHoriz = function(slide, distance) {
            var value = Math.abs(100 * distance / this.__width);
            value = Math.min(value, 100), slide.$element.css("opacity", 1 - value / 300), slide.$element[0].style[window._jcsspfx + "Transform"] = "scale(" + (1 - value / 800) + ") rotateY(0.01deg) "
        }, p.__updateSlidesVertic = function(slide, distance) {
            this.__updateSlidesHoriz(slide, distance)
        }, MSSlideController.registerView("fadeWave", MSFadeWaveView)
    }(),
    function() {
        "use strict";
        window.MSFlowView = function(options) {
            MSWaveView.call(this, options), this.$element.removeClass("ms-wave-view").addClass("ms-flow-view")
        }, MSFlowView.extend(MSWaveView), MSFlowView._3dreq = !0, MSFlowView._fallback = MSFadeBasicView; {
            var p = MSFlowView.prototype;
            MSWaveView.prototype
        }
        p.__updateSlidesHoriz = function(slide, distance) {
            var value = Math.abs(100 * distance / this.__width),
                rvalue = Math.min(.3 * value, 30) * (0 > distance ? -1 : 1),
                zvalue = 1.2 * value;
            slide.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + 5 * -zvalue + "px) rotateY(" + rvalue + "deg) "
        }, p.__updateSlidesVertic = function(slide, distance) {
            var value = Math.abs(100 * distance / this.__width),
                rvalue = Math.min(.3 * value, 30) * (0 > distance ? -1 : 1),
                zvalue = 1.2 * value;
            slide.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + 5 * -zvalue + "px) rotateX(" + -rvalue + "deg) "
        }, MSSlideController.registerView("flow", MSFlowView)
    }(jQuery),
    function() {
        window.MSFadeFlowView = function(options) {
            MSWaveView.call(this, options), this.$element.removeClass("ms-wave-view").addClass("ms-fade-flow-view")
        }, MSFadeFlowView.extend(MSWaveView), MSFadeFlowView._3dreq = !0; {
            var p = MSFadeFlowView.prototype;
            MSWaveView.prototype
        }
        p.__calculate = function(distance) {
            var value = Math.min(Math.abs(100 * distance / this.__width), 100),
                rvalue = Math.min(.5 * value, 50) * (0 > distance ? -1 : 1);
            return {
                value: value,
                rvalue: rvalue
            }
        }, p.__updateSlidesHoriz = function(slide, distance) {
            var clc = this.__calculate(distance);
            slide.$element.css("opacity", 1 - clc.value / 300), slide.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + -clc.value + "px) rotateY(" + clc.rvalue + "deg) "
        }, p.__updateSlidesVertic = function(slide, distance) {
            var clc = this.__calculate(distance);
            slide.$element.css("opacity", 1 - clc.value / 300), slide.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + -clc.value + "px) rotateX(" + -clc.rvalue + "deg) "
        }, MSSlideController.registerView("fadeFlow", MSFadeFlowView)
    }(),
    function($) {
        "use strict";
        window.MSMaskView = function(options) {
            MSBasicView.call(this, options), this.$element.removeClass("ms-basic-view").addClass("ms-mask-view")
        }, MSMaskView.extend(MSBasicView);
        var p = MSMaskView.prototype,
            _super = MSBasicView.prototype;
        p.addSlide = function(slide) {
            slide.view = this, slide.$frame = $("<div></div>").addClass("ms-mask-frame").append(slide.$element), slide.$element[0].style.position = "relative", slide.autoAppend = !1, this.slides.push(slide), this.slideList.push(slide), this.slidesCount++
        }, p.setSize = function(width, height) {
            for (var slider = this.slides[0].slider, i = 0; i < this.slidesCount; ++i) this.slides[i].$frame[0].style.width = width + "px", slider.options.autoHeight || (this.slides[i].$frame[0].style.height = height + "px");
            _super.setSize.call(this, width, height)
        }, p._horizUpdate = function(controller, value) {
            _super._horizUpdate.call(this, controller, value);
            var i = 0;
            if (this.css3)
                for (i = 0; i < this.slidesCount; ++i) this.slideList[i].$element[0].style[window._jcsspfx + "Transform"] = "translateX(" + (value - this.slideList[i].position) + "px)" + this.__translate_end;
            else
                for (i = 0; i < this.slidesCount; ++i) this.slideList[i].$element[0].style.left = value - this.slideList[i].position + "px"
        }, p._vertiUpdate = function(controller, value) {
            _super._vertiUpdate.call(this, controller, value);
            var i = 0;
            if (this.css3)
                for (i = 0; i < this.slidesCount; ++i) this.slideList[i].$element[0].style[window._jcsspfx + "Transform"] = "translateY(" + (value - this.slideList[i].position) + "px)" + this.__translate_end;
            else
                for (i = 0; i < this.slidesCount; ++i) this.slideList[i].$element[0].style.top = value - this.slideList[i].position + "px"
        }, p.__pushEnd = function() {
            var first_slide = this.slides.shift(),
                last_slide = this.slides[this.slidesCount - 2];
            if (this.slides.push(first_slide), this.normalMode) {
                var pos = last_slide.$frame[0][this.__offset] + this.spacing + this[this.__dimension];
                first_slide.$frame[0].style[this.__cssProb] = pos + "px", first_slide.position = pos
            }
        }, p.__pushStart = function() {
            var last_slide = this.slides.pop(),
                first_slide = this.slides[0];
            if (this.slides.unshift(last_slide), this.normalMode) {
                var pos = first_slide.$frame[0][this.__offset] - this.spacing - this[this.__dimension];
                last_slide.$frame[0].style[this.__cssProb] = pos + "px", last_slide.position = pos
            }
        }, p.__updateViewList = function() {
            if (this.normalMode) return void(this.viewSlidesList = this.slides);
            var temp = this.viewSlidesList.slice();
            this.viewSlidesList = [];
            var l, i = 0,
                hlf = Math.floor(this.options.viewNum / 2);
            if (this.loop)
                for (; i !== this.options.viewNum; i++) this.viewSlidesList.push(this.slides[this.currentSlideLoc - hlf + i]);
            else {
                for (i = 0; i !== hlf && this.index - i !== -1; i++) this.viewSlidesList.unshift(this.slideList[this.index - i]);
                for (i = 1; i !== hlf && this.index + i !== this.slidesCount; i++) this.viewSlidesList.push(this.slideList[this.index + i])
            }
            for (i = 0, l = temp.length; i !== l; i++) - 1 === this.viewSlidesList.indexOf(temp[i]) && (temp[i].sleep(), temp[i].$frame.detach());
            temp = null
        }, p.__locateSlides = function(move, start) {
            this.__updateViewList(), start = this.loop ? start || 0 : this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing);
            for (var slide, l = this.viewSlidesList.length, i = 0; i !== l; i++) {
                var pos = start + i * (this[this.__dimension] + this.spacing);
                if (slide = this.viewSlidesList[i], this.$slideCont.append(slide.$frame), slide.wakeup(!1), slide.position = pos, slide.selected && slide.bgvideo) try {
                    slide.bgvideo.play()
                } catch (e) {}
                slide.$frame[0].style[this.__cssProb] = pos + "px"
            }
            move !== !1 && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
        }, MSSlideController.registerView("mask", MSMaskView)
    }(jQuery),
    function() {
        "use strict";
        window.MSParallaxMaskView = function(options) {
            MSMaskView.call(this, options), this.$element.removeClass("ms-basic-view").addClass("ms-parallax-mask-view")
        }, MSParallaxMaskView.extend(MSMaskView), MSParallaxMaskView.parallaxAmount = .5;
        var p = MSParallaxMaskView.prototype,
            _super = MSBasicView.prototype;
        p._horizUpdate = function(controller, value) {
            _super._horizUpdate.call(this, controller, value);
            var i = 0;
            if (this.css3)
                for (i = 0; i < this.slidesCount; ++i) this.slideList[i].$element[0].style[window._jcsspfx + "Transform"] = "translateX(" + (value - this.slideList[i].position) * MSParallaxMaskView.parallaxAmount + "px)" + this.__translate_end;
            else
                for (i = 0; i < this.slidesCount; ++i) this.slideList[i].$element[0].style.left = (value - this.slideList[i].position) * MSParallaxMaskView.parallaxAmount + "px"
        }, p._vertiUpdate = function(controller, value) {
            _super._vertiUpdate.call(this, controller, value);
            var i = 0;
            if (this.css3)
                for (i = 0; i < this.slidesCount; ++i) this.slideList[i].$element[0].style[window._jcsspfx + "Transform"] = "translateY(" + (value - this.slideList[i].position) * MSParallaxMaskView.parallaxAmount + "px)" + this.__translate_end;
            else
                for (i = 0; i < this.slidesCount; ++i) this.slideList[i].$element[0].style.top = (value - this.slideList[i].position) * MSParallaxMaskView.parallaxAmount + "px"
        }, MSSlideController.registerView("parallaxMask", MSParallaxMaskView)
    }(jQuery),
    function() {
        "use strict";
        window.MSFadeView = function(options) {
            MSBasicView.call(this, options), this.$element.removeClass("ms-basic-view").addClass("ms-fade-view"), this.controller.renderCallback(this.__update, this)
        }, MSFadeView.extend(MSBasicView);
        var p = MSFadeView.prototype,
            _super = MSBasicView.prototype;
        p.__update = function(controller, value) {
            for (var slide, distance, cont_scroll = -value, i = 0; i < this.slidesCount; ++i) slide = this.slideList[i], distance = -cont_scroll - slide.position, this.__updateSlides(slide, distance)
        }, p.__updateSlides = function(slide, distance) {
            var value = Math.abs(distance / this[this.__dimension]);
            0 >= 1 - value ? slide.$element.fadeTo(0, 0).css("visibility", "hidden") : slide.$element.fadeTo(0, 1 - value).css("visibility", "")
        }, p.__locateSlides = function(move, start) {
            this.__updateViewList(), start = this.loop ? start || 0 : this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing);
            for (var slide, l = this.viewSlidesList.length, i = 0; i !== l; i++) {
                var pos = start + i * this[this.__dimension];
                slide = this.viewSlidesList[i], slide.wakeup(), slide.position = pos
            }
            move !== !1 && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
        }, p.__pushEnd = function() {
            var first_slide = this.slides.shift(),
                last_slide = this.slides[this.slidesCount - 2];
            this.slides.push(first_slide), first_slide.position = last_slide.position + this[this.__dimension]
        }, p.__pushStart = function() {
            var last_slide = this.slides.pop(),
                first_slide = this.slides[0];
            this.slides.unshift(last_slide), last_slide.position = first_slide.position - this[this.__dimension]
        }, p.create = function(index) {
            _super.create.call(this, index), this.spacing = 0, this.controller.options.minValidDist = 10
        }, MSSlideController.registerView("fade", MSFadeView)
    }(jQuery),
    function() {
        "use strict";
        window.MSScaleView = function(options) {
            MSBasicView.call(this, options), this.$element.removeClass("ms-basic-view").addClass("ms-scale-view"), this.controller.renderCallback(this.__update, this)
        }, MSScaleView.extend(MSFadeView);
        var p = MSScaleView.prototype,
            _super = MSFadeView.prototype;
        p.__updateSlides = function(slide, distance) {
            var value = Math.abs(distance / this[this.__dimension]),
                element = slide.$element[0];
            0 >= 1 - value ? (element.style.opacity = 0, element.style.visibility = "hidden", element.style[window._jcsspfx + "Transform"] = "") : (element.style.opacity = 1 - value, element.style.visibility = "", element.style[window._jcsspfx + "Transform"] = "perspective(2000px) translateZ(" + value * (0 > distance ? -.5 : .5) * 300 + "px)")
        }, p.create = function(index) {
            _super.create.call(this, index), this.controller.options.minValidDist = .03
        }, MSSlideController.registerView("scale", MSScaleView)
    }(jQuery),
    function() {
        "use strict";
        window.MSStackView = function(options) {
            MSBasicView.call(this, options), this.$element.removeClass("ms-basic-view").addClass("ms-stack-view"), this.controller.renderCallback(this.__update, this), this.autoUpdateZIndex = !0
        }, MSStackView.extend(MSFadeView), MSStackView._3dreq = !0, MSStackView._fallback = MSFadeView;
        var p = MSStackView.prototype,
            _super = MSFadeView.prototype;
        p.__updateSlidesZindex = function() {
            for (var slide, l = this.viewSlidesList.length, i = 0; i !== l; i++) slide = this.viewSlidesList[i], this.viewSlidesList[i].$element.css("z-index", l - i)
        }, p.__updateSlides = function(slide, distance) {
            var value = Math.abs(distance / this[this.__dimension]),
                element = slide.$element[0];
            0 >= 1 - value ? (element.style.opacity = 1, element.style.visibility = "hidden", element.style[window._jcsspfx + "Transform"] = "") : (element.style.visibility = "", element.style[window._jcsspfx + "Transform"] = 0 > distance ? "perspective(2000px) translateZ(" + -300 * value + "px)" : this.__translate + "(" + -value * this[this.__dimension] + "px)")
        }, p.create = function(index) {
            _super.create.call(this, index), this.controller.options.minValidDist = .03, this.__translate = "h" === this.dir ? "translateX" : "translateY"
        }, MSSlideController.registerView("stack", MSStackView)
    }(jQuery),
    function() {
        "use strict";
        var perspective = 2e3;
        window.MSFocusView = function(options) {
            MSWaveView.call(this, options), this.$element.removeClass("ms-wave-view").addClass("ms-focus-view"), this.options.centerSpace = this.options.centerSpace || 1
        }, MSFocusView.extend(MSWaveView), MSFocusView._3dreq = !0, MSFocusView._fallback = MSFadeBasicView; {
            var p = MSFocusView.prototype;
            MSWaveView.prototype
        }
        p.__calcview = function(z, w) {
            var a = w / 2 * z / (z + perspective);
            return a * (z + perspective) / perspective
        }, p.__updateSlidesHoriz = function(slide, distance) {
            var value = Math.abs(100 * distance / this.__width);
            value = 15 * -Math.min(value, 100), slide.$element.css(window._csspfx + "transform", "translateZ(" + (value + 1) + "px) rotateY(0.01deg) translateX(" + (0 > distance ? 1 : -1) * -this.__calcview(value, this.__width) * this.options.centerSpace + "px)")
        }, p.__updateSlidesVertic = function(slide, distance) {
            var value = Math.abs(100 * distance / this.__width);
            value = 15 * -Math.min(value, 100), slide.$element.css(window._csspfx + "transform", "translateZ(" + (value + 1) + "px) rotateY(0.01deg) translateY(" + (0 > distance ? 1 : -1) * -this.__calcview(value, this.__width) * this.options.centerSpace + "px)")
        }, MSSlideController.registerView("focus", MSFocusView)
    }(),
    function() {
        window.MSPartialWaveView = function(options) {
            MSWaveView.call(this, options), this.$element.removeClass("ms-wave-view").addClass("ms-partial-wave-view")
        }, MSPartialWaveView.extend(MSWaveView), MSPartialWaveView._3dreq = !0, MSPartialWaveView._fallback = MSFadeBasicView; {
            var p = MSPartialWaveView.prototype;
            MSWaveView.prototype
        }
        p.__updateSlidesHoriz = function(slide, distance) {
            var value = Math.abs(100 * distance / this.__width);
            slide.hasBG && slide.$bg_img.css("opacity", (100 - Math.abs(120 * distance / this.__width / 3)) / 100), slide.$element.css(window._csspfx + "transform", "translateZ(" + 3 * -value + "px) rotateY(0.01deg) translateX(" + .75 * distance + "px)")
        }, p.__updateSlidesVertic = function(slide, distance) {
            var value = Math.abs(100 * distance / this.__width);
            slide.hasBG && slide.$bg_img.css("opacity", (100 - Math.abs(120 * distance / this.__width / 3)) / 100), slide.$element.css(window._csspfx + "transform", "translateZ(" + 3 * -value + "px) rotateY(0.01deg) translateY(" + .75 * distance + "px)")
        }, MSSlideController.registerView("partialWave", MSPartialWaveView)
    }(),
    function() {
        "use strict";
        window.MSBoxView = function(options) {
            MSBasicView.call(this, options), this.$element.removeClass("ms-basic-view").addClass("ms-box-view"), this.controller.renderCallback(this.__update, this)
        }, MSBoxView.extend(MSFadeView), MSBoxView._3dreq = !0;
        var p = MSBoxView.prototype,
            _super = MSFadeView.prototype;
        p.__updateSlides = function(slide, distance) {
            var value = Math.abs(distance / this[this.__dimension]),
                element = slide.$element[0];
            0 >= 1 - value ? (element.style.visibility = "hidden", element.style[window._jcsspfx + "Transform"] = "") : (element.style.visibility = "", element.style[window._jcsspfx + "Transform"] = "rotate" + this._rotateDir + "(" + value * (0 > distance ? 1 : -1) * 90 * this._calcFactor + "deg)", element.style[window._jcsspfx + "TransformOrigin"] = "50% 50% -" + slide[this.__dimension] / 2 + "px", element.style.zIndex = Math.ceil(2 * (1 - value)))
        }, p.create = function(index) {
            _super.create.call(this, index), this.controller.options.minValidDist = .03, this._rotateDir = "h" === this.options.dir ? "Y" : "X", this._calcFactor = "h" === this.options.dir ? 1 : -1
        }, MSSlideController.registerView("box", MSBoxView)
    }(jQuery),
    function($) {
        "use strict";
        var BaseControl = function() {
                this.options = {
                    prefix: "ms-",
                    autohide: !0,
                    overVideo: !0,
                    customClass: null
                }
            },
            p = BaseControl.prototype;
        p.slideAction = function() {}, p.setup = function() {
            this.cont = this.options.insertTo ? $(this.options.insertTo) : this.slider.$controlsCont, this.options.overVideo || this._hideOnvideoStarts()
        }, p.checkHideUnder = function() {
            this.options.hideUnder && (this.needsRealign = !this.options.insetTo && ("left" === this.options.align || "right" === this.options.align) && this.options.inset === !1, $(window).bind("resize", {
                that: this
            }, this.onResize), this.onResize())
        }, p.onResize = function(event) {
            var that = event && event.data.that || this,
                w = window.innerWidth;
            w <= that.options.hideUnder && !that.detached ? (that.hide(!0), that.detached = !0, that.onDetach()) : w >= that.options.hideUnder && that.detached && (that.detached = !1, that.visible(), that.onAppend())
        }, p.create = function() {
            this.options.autohide && (this.hide(!0), this.slider.$controlsCont.mouseenter($.proxy(this._onMouseEnter, this)).mouseleave($.proxy(this._onMouseLeave, this)).mousedown($.proxy(this._onMouseDown, this)), this.$element && this.$element.mouseenter($.proxy(this._onMouseEnter, this)).mouseleave($.proxy(this._onMouseLeave, this)).mousedown($.proxy(this._onMouseDown, this)), $(document).mouseup($.proxy(this._onMouseUp, this))), this.options.align && this.$element.addClass("ms-align-" + this.options.align), this.options.customClass && this.$element && this.$element.addClass(this.options.customClass)
        }, p._onMouseEnter = function() {
            this._disableAH || this.mdown || this.visible(), this.mleave = !1
        }, p._onMouseLeave = function() {
            this.mdown || this.hide(), this.mleave = !0
        }, p._onMouseDown = function() {
            this.mdown = !0
        }, p._onMouseUp = function() {
            this.mdown && this.mleave && this.hide(), this.mdown = !1
        }, p.onAppend = function() {
            this.needsRealign && this.slider._realignControls()
        }, p.onDetach = function() {
            this.needsRealign && this.slider._realignControls()
        }, p._hideOnvideoStarts = function() {
            var that = this;
            this.slider.api.addEventListener(MSSliderEvent.VIDEO_PLAY, function() {
                that._disableAH = !0, that.hide()
            }), this.slider.api.addEventListener(MSSliderEvent.VIDEO_CLOSE, function() {
                that._disableAH = !1, that.visible()
            })
        }, p.hide = function(fast) {
            if (fast) this.$element.css("opacity", 0), this.$element.css("display", "none");
            else {
                clearTimeout(this.hideTo);
                var $element = this.$element;
                this.hideTo = setTimeout(function() {
                    CTween.fadeOut($element, 400, !1)
                }, 20)
            }
            this.$element.addClass("ms-ctrl-hide")
        }, p.visible = function() {
            this.detached || (clearTimeout(this.hideTo), this.$element.css("display", ""), CTween.fadeIn(this.$element, 400, !1), this.$element.removeClass("ms-ctrl-hide"))
        }, p.destroy = function() {
            this.options && this.options.hideUnder && $(window).unbind("resize", this.onResize)
        }, window.BaseControl = BaseControl
    }(jQuery),
    function($) {
        "use strict";
        var MSArrows = function(options) {
            BaseControl.call(this), $.extend(this.options, options)
        };
        MSArrows.extend(BaseControl);
        var p = MSArrows.prototype,
            _super = BaseControl.prototype;
        p.setup = function() {
            var that = this;
            this.$next = $("<div></div>").addClass(this.options.prefix + "nav-next").bind("click", function() {
                that.slider.api.next(!0)
            }), this.$prev = $("<div></div>").addClass(this.options.prefix + "nav-prev").bind("click", function() {
                that.slider.api.previous(!0)
            }), _super.setup.call(this), this.cont.append(this.$next), this.cont.append(this.$prev), this.checkHideUnder()
        }, p.hide = function(fast) {
            return fast ? (this.$prev.css("opacity", 0).css("display", "none"), void this.$next.css("opacity", 0).css("display", "none")) : (CTween.fadeOut(this.$prev, 400, !1), CTween.fadeOut(this.$next, 400, !1), this.$prev.addClass("ms-ctrl-hide"), void this.$next.addClass("ms-ctrl-hide"))
        }, p.visible = function() {
            this.detached || (CTween.fadeIn(this.$prev, 400), CTween.fadeIn(this.$next, 400), this.$prev.removeClass("ms-ctrl-hide").css("display", ""), this.$next.removeClass("ms-ctrl-hide").css("display", ""))
        }, p.destroy = function() {
            _super.destroy(), this.$next.remove(), this.$prev.remove()
        }, window.MSArrows = MSArrows, MSSlideController.registerControl("arrows", MSArrows)
    }(jQuery),
    function($) {
        "use strict";
        var MSThumblist = function(options) {
            BaseControl.call(this), this.options.dir = "h", this.options.wheel = "v" === options.dir, this.options.arrows = !1, this.options.speed = 17, this.options.align = null, this.options.inset = !1, this.options.margin = 10, this.options.space = 10, this.options.width = 100, this.options.height = 100, this.options.type = "thumbs", this.options.hover = !1, $.extend(this.options, options), this.thumbs = [], this.index_count = 0, this.__dimen = "h" === this.options.dir ? "width" : "height", this.__alignsize = "h" === this.options.dir ? "height" : "width", this.__jdimen = "h" === this.options.dir ? "outerWidth" : "outerHeight", this.__pos = "h" === this.options.dir ? "left" : "top", this.click_enable = !0
        };
        MSThumblist.extend(BaseControl);
        var p = MSThumblist.prototype,
            _super = BaseControl.prototype;
        p.setup = function() {
            if (this.$element = $("<div></div>").addClass(this.options.prefix + "thumb-list"), "tabs" === this.options.type && this.$element.addClass(this.options.prefix + "tabs"), this.$element.addClass("ms-dir-" + this.options.dir), _super.setup.call(this), this.$element.appendTo(this.slider.$controlsCont === this.cont ? this.slider.$element : this.cont), this.$thumbscont = $("<div></div>").addClass("ms-thumbs-cont").appendTo(this.$element), this.options.arrows) {
                var that = this;
                this.$fwd = $("<div></div>").addClass("ms-thumblist-fwd").appendTo(this.$element).click(function() {
                    that.controller.push(-15)
                }), this.$bwd = $("<div></div>").addClass("ms-thumblist-bwd").appendTo(this.$element).click(function() {
                    that.controller.push(15)
                })
            }
            if (!this.options.insetTo && this.options.align) {
                var align = this.options.align;
                this.options.inset ? this.$element.css(align, this.options.margin) : "top" === align ? this.$element.detach().prependTo(this.slider.$element).css({
                    "margin-bottom": this.options.margin,
                    position: "relative"
                }) : "bottom" === align ? this.$element.css({
                    "margin-top": this.options.margin,
                    position: "relative"
                }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align()), "v" === this.options.dir ? this.$element.width(this.options.width) : this.$element.height(this.options.height)
            }
            this.checkHideUnder()
        }, p.align = function() {
            if (!this.detached) {
                var align = this.options.align,
                    pos = this.slider.reserveSpace(align, this.options[this.__alignsize] + 2 * this.options.margin);
                this.$element.css(align, -pos - this.options[this.__alignsize] - this.options.margin)
            }
        }, p.slideAction = function(slide) {
            var thumb_ele = slide.$element.find(".ms-thumb"),
                that = this,
                thumb_frame = $("<div></div>").addClass("ms-thumb-frame").append(thumb_ele).append($('<div class="ms-thumb-ol"></div>')).bind(this.options.hover ? "hover" : "click", function() {
                    that.changeSlide(thumb_frame)
                });
            if (this.options.align && thumb_frame.width(this.options.width - ("v" === this.options.dir && "tabs" === this.options.type ? 12 : 0)).height(this.options.height).css("margin-" + ("v" === this.options.dir ? "bottom" : "right"), this.options.space), thumb_frame[0].index = this.index_count++, this.$thumbscont.append(thumb_frame), this.options.fillMode && thumb_ele.is("img")) {
                var aligner = new window.MSAligner(this.options.fillMode, thumb_frame, thumb_ele);
                thumb_ele[0].aligner = aligner, thumb_ele.one("load", function() {
                    var $this = $(this);
                    $this[0].aligner.init($this.width(), $this.height()), $this[0].aligner.align()
                }).each($.jqLoadFix)
            }
            $.browser.msie && thumb_ele.on("dragstart", function(event) {
                event.preventDefault()
            }), this.thumbs.push(thumb_frame)
        }, p.create = function() {
            _super.create.call(this), this.__translate_end = window._css3d ? " translateZ(0px)" : "", this.controller = new Controller(0, 0, {
                snappingMinSpeed: 2,
                friction: (100 - .5 * this.options.speed) / 100
            }), this.controller.renderCallback("h" === this.options.dir ? this._hMove : this._vMove, this);
            var that = this;
            this.resize_listener = function() {
                that.__resize()
            }, $(window).bind("resize", this.resize_listener), this.thumbSize = this.thumbs[0][this.__jdimen](!0), this.setupSwipe(), this.__resize();
            var that = this;
            this.options.wheel && (this.wheellistener = function(event) {
                var e = window.event || event.orginalEvent || event,
                    delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
                return that.controller.push(10 * -delta), !1
            }, $.browser.mozilla ? this.$element[0].addEventListener("DOMMouseScroll", this.wheellistener) : this.$element.bind("mousewheel", this.wheellistener)), this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.slider.api.addEventListener(MSSliderEvent.HARD_UPDATE, this.realignThumbs, this), this.cindex = this.slider.api.index(), this.select(this.thumbs[this.cindex])
        }, p._hMove = function(controller, value) {
            return this.__contPos = value, window._cssanim ? void(this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "translateX(" + -value + "px)" + this.__translate_end) : void(this.$thumbscont[0].style.left = -value + "px")
        }, p._vMove = function(controller, value) {
            return this.__contPos = value, window._cssanim ? void(this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "translateY(" + -value + "px)" + this.__translate_end) : void(this.$thumbscont[0].style.top = -value + "px")
        }, p.setupSwipe = function() {
            this.swipeControl = new averta.TouchSwipe(this.$element), this.swipeControl.swipeType = "h" === this.options.dir ? "horizontal" : "vertical";
            var that = this;
            this.swipeControl.onSwipe = "h" === this.options.dir ? function(status) {
                that.horizSwipeMove(status)
            } : function(status) {
                that.vertSwipeMove(status)
            }
        }, p.vertSwipeMove = function(status) {
            if (!this.dTouch) {
                var phase = status.phase;
                if ("start" === phase) this.controller.stop();
                else if ("move" === phase) this.controller.drag(status.moveY);
                else if ("end" === phase || "cancel" === phase) {
                    var speed = Math.abs(status.distanceY / status.duration * 50 / 3);
                    speed > .1 ? this.controller.push(-status.distanceY / status.duration * 50 / 3) : (this.click_enable = !0, this.controller.cancel())
                }
            }
        }, p.horizSwipeMove = function(status) {
            if (!this.dTouch) {
                var phase = status.phase;
                if ("start" === phase) this.controller.stop(), this.click_enable = !1;
                else if ("move" === phase) this.controller.drag(status.moveX);
                else if ("end" === phase || "cancel" === phase) {
                    var speed = Math.abs(status.distanceX / status.duration * 50 / 3);
                    speed > .1 ? this.controller.push(-status.distanceX / status.duration * 50 / 3) : (this.click_enable = !0, this.controller.cancel())
                }
            }
        }, p.update = function() {
            var nindex = this.slider.api.index();
            this.cindex !== nindex && (null != this.cindex && this.unselect(this.thumbs[this.cindex]), this.cindex = nindex, this.select(this.thumbs[this.cindex]), this.dTouch || this.updateThumbscroll())
        }, p.realignThumbs = function() {
            this.$element.find(".ms-thumb").each(function(index, thumb) {
                thumb.aligner && thumb.aligner.align()
            })
        }, p.updateThumbscroll = function() {
            var pos = this.thumbSize * this.cindex;
            if (0 / 0 == this.controller.value && (this.controller.value = 0), pos - this.controller.value < 0) return void this.controller.gotoSnap(this.cindex, !0);
            if (pos + this.thumbSize - this.controller.value > this.$element[this.__dimen]()) {
                var first_snap = this.cindex - Math.floor(this.$element[this.__dimen]() / this.thumbSize) + 1;
                return void this.controller.gotoSnap(first_snap, !0)
            }
        }, p.changeSlide = function(thumb) {
            this.click_enable && this.cindex !== thumb[0].index && this.slider.api.gotoSlide(thumb[0].index)
        }, p.unselect = function(ele) {
            ele.removeClass("ms-thumb-frame-selected")
        }, p.select = function(ele) {
            ele.addClass("ms-thumb-frame-selected")
        }, p.__resize = function() {
            var size = this.$element[this.__dimen]();
            if (this.ls !== size) {
                this.ls = size, this.thumbSize = this.thumbs[0][this.__jdimen](!0);
                var len = this.slider.api.count() * this.thumbSize;
                this.$thumbscont[0].style[this.__dimen] = len + "px", size >= len ? (this.dTouch = !0, this.controller.stop(), this.$thumbscont[0].style[this.__pos] = .5 * (size - len) + "px", this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "") : (this.dTouch = !1, this.click_enable = !0, this.$thumbscont[0].style[this.__pos] = "", this.controller._max_value = len - size, this.controller.options.snapsize = this.thumbSize, this.updateThumbscroll())
            }
        }, p.destroy = function() {
            _super.destroy(), this.options.wheel && ($.browser.mozilla ? this.$element[0].removeEventListener("DOMMouseScroll", this.wheellistener) : this.$element.unbind("mousewheel", this.wheellistener), this.wheellistener = null), $(window).unbind("resize", this.resize_listener), this.$element.remove(), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.update, this)
        }, window.MSThumblist = MSThumblist, MSSlideController.registerControl("thumblist", MSThumblist)
    }(jQuery),
    function($) {
        "use strict";
        var MSBulltes = function(options) {
            BaseControl.call(this), this.options.dir = "h", this.options.inset = !0, this.options.margin = 10, this.options.space = 10, $.extend(this.options, options), this.bullets = []
        };
        MSBulltes.extend(BaseControl);
        var p = MSBulltes.prototype,
            _super = BaseControl.prototype;
        p.setup = function() {
            if (_super.setup.call(this), this.$element = $("<div></div>").addClass(this.options.prefix + "bullets").addClass("ms-dir-" + this.options.dir).appendTo(this.cont), this.$bullet_cont = $("<div></div>").addClass("ms-bullets-count").appendTo(this.$element), !this.options.insetTo && this.options.align) {
                var align = this.options.align;
                this.options.inset && this.$element.css(align, this.options.margin)
            }
            this.checkHideUnder()
        }, p.create = function() {
            _super.create.call(this);
            var that = this;
            this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.cindex = this.slider.api.index();
            for (var i = 0; i < this.slider.api.count(); ++i) {
                var bullet = $("<div></div>").addClass("ms-bullet");
                bullet[0].index = i, bullet.on("click", function() {
                    that.changeSlide(this.index)
                }), this.$bullet_cont.append(bullet), this.bullets.push(bullet), "h" === this.options.dir ? bullet.css("margin", this.options.space / 2) : bullet.css("margin", this.options.space)
            }
            "h" === this.options.dir ? this.$element.width(bullet.outerWidth(!0) * this.slider.api.count()) : this.$element.css("margin-top", -this.$element.outerHeight(!0) / 2), this.select(this.bullets[this.cindex])
        }, p.update = function() {
            var nindex = this.slider.api.index();
            this.cindex !== nindex && (null != this.cindex && this.unselect(this.bullets[this.cindex]), this.cindex = nindex, this.select(this.bullets[this.cindex]))
        }, p.changeSlide = function(index) {
            this.cindex !== index && this.slider.api.gotoSlide(index)
        }, p.unselect = function(ele) {
            ele.removeClass("ms-bullet-selected")
        }, p.select = function(ele) {
            ele.addClass("ms-bullet-selected")
        }, p.destroy = function() {
            _super.destroy(), this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.$element.remove()
        }, window.MSBulltes = MSBulltes, MSSlideController.registerControl("bullets", MSBulltes)
    }(jQuery),
    function($) {
        "use strict";
        var MSScrollbar = function(options) {
            BaseControl.call(this), this.options.dir = "h", this.options.autohide = !0, this.options.width = 4, this.options.color = "#3D3D3D", this.options.margin = 10, $.extend(this.options, options), this.__dimen = "h" === this.options.dir ? "width" : "height", this.__jdimen = "h" === this.options.dir ? "outerWidth" : "outerHeight", this.__pos = "h" === this.options.dir ? "left" : "top", this.__translate_end = window._css3d ? " translateZ(0px)" : "", this.__translate_start = "h" === this.options.dir ? " translateX(" : "translateY("
        };
        MSScrollbar.extend(BaseControl);
        var p = MSScrollbar.prototype,
            _super = BaseControl.prototype;
        p.setup = function() {
            if (this.$element = $("<div></div>").addClass(this.options.prefix + "sbar").addClass("ms-dir-" + this.options.dir), _super.setup.call(this), this.$element.appendTo(this.slider.$controlsCont === this.cont ? this.slider.$element : this.cont), this.$bar = $("<div></div>").addClass(this.options.prefix + "bar").appendTo(this.$element), this.slider.options.loop && (this.disable = !0, this.$element.remove()), "v" === this.options.dir ? this.$bar.width(this.options.width) : this.$bar.height(this.options.width), this.$bar.css("background-color", this.options.color), !this.options.insetTo && this.options.align) {
                this.$element.css("v" === this.options.dir ? {
                    right: "auto",
                    left: "auto"
                } : {
                    top: "auto",
                    bottom: "auto"
                });
                var align = this.options.align;
                this.options.inset ? this.$element.css(align, this.options.margin) : "top" === align ? this.$element.prependTo(this.slider.$element).css({
                    "margin-bottom": this.options.margin,
                    position: "relative"
                }) : "bottom" === align ? this.$element.css({
                    "margin-top": this.options.margin,
                    position: "relative"
                }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align())
            }
            this.checkHideUnder()
        }, p.align = function() {
            if (!this.detached) {
                var align = this.options.align,
                    pos = this.slider.reserveSpace(align, 2 * this.options.margin + this.options.width);
                this.$element.css(align, -pos - this.options.margin - this.options.width)
            }
        }, p.create = function() {
            if (!this.disable) {
                this.scroller = this.slider.api.scroller, this.slider.api.view.addEventListener(MSViewEvents.SCROLL, this._update, this), this.slider.api.addEventListener(MSSliderEvent.RESIZE, this._resize, this), this._resize(), this.options.autohide && this.$bar.css("opacity", "0")
            }
        }, p._resize = function() {
            this.vdimen = this.$element[this.__dimen](), this.bar_dimen = this.slider.api.view["__" + this.__dimen] * this.vdimen / this.scroller._max_value, this.$bar[this.__dimen](this.bar_dimen)
        }, p._update = function() {
            var value = this.scroller.value * (this.vdimen - this.bar_dimen) / this.scroller._max_value;
            if (this.lvalue !== value) {
                if (this.lvalue = value, this.options.autohide) {
                    clearTimeout(this.hto), this.$bar.css("opacity", "1");
                    var that = this;
                    this.hto = setTimeout(function() {
                        that.$bar.css("opacity", "0")
                    }, 150)
                }
                return 0 > value ? void(this.$bar[0].style[this.__dimen] = this.bar_dimen + value + "px") : (value > this.vdimen - this.bar_dimen && (this.$bar[0].style[this.__dimen] = this.vdimen - value + "px"), window._cssanim ? void(this.$bar[0].style[window._jcsspfx + "Transform"] = this.__translate_start + value + "px)" + this.__translate_end) : void(this.$bar[0].style[this.__pos] = value + "px"))
            }
        }, p.destroy = function() {
            _super.destroy(), this.slider.api.view.removeEventListener(MSViewEvents.SCROLL, this._update, this), this.slider.api.removeEventListener(MSSliderEvent.RESIZE, this._resize, this), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.$element.remove()
        }, window.MSScrollbar = MSScrollbar, MSSlideController.registerControl("scrollbar", MSScrollbar)
    }(jQuery),
    function($) {
        "use strict";
        var MSTimerbar = function(options) {
            BaseControl.call(this), this.options.autohide = !1, this.options.width = 4, this.options.color = "#FFFFFF", this.options.inset = !0, this.options.margin = 0, $.extend(this.options, options)
        };
        MSTimerbar.extend(BaseControl);
        var p = MSTimerbar.prototype,
            _super = BaseControl.prototype;
        p.setup = function() {
            if (_super.setup.call(this), this.$element = $("<div></div>").addClass(this.options.prefix + "timerbar"), _super.setup.call(this), this.$element.appendTo(this.slider.$controlsCont === this.cont ? this.slider.$element : this.cont), this.$bar = $("<div></div>").addClass("ms-time-bar").appendTo(this.$element), "v" === this.options.dir ? (this.$bar.width(this.options.width), this.$element.width(this.options.width)) : (this.$bar.height(this.options.width), this.$element.height(this.options.width)), this.$bar.css("background-color", this.options.color), !this.options.insetTo && this.options.align) {
                this.$element.css({
                    top: "auto",
                    bottom: "auto"
                });
                var align = this.options.align;
                this.options.inset ? this.$element.css(align, this.options.margin) : "top" === align ? this.$element.prependTo(this.slider.$element).css({
                    "margin-bottom": this.options.margin,
                    position: "relative"
                }) : "bottom" === align ? this.$element.css({
                    "margin-top": this.options.margin,
                    position: "relative"
                }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align())
            }
            this.checkHideUnder()
        }, p.align = function() {
            if (!this.detached) {
                var align = this.options.align,
                    pos = this.slider.reserveSpace(align, 2 * this.options.margin + this.options.width);
                this.$element.css(align, -pos - this.options.margin - this.options.width)
            }
        }, p.create = function() {
            _super.create.call(this), this.slider.api.addEventListener(MSSliderEvent.WAITING, this._update, this), this._update()
        }, p._update = function() {
            this.$bar[0].style.width = this.slider.api._delayProgress + "%"
        }, p.destroy = function() {
            _super.destroy(), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.slider.api.removeEventListener(MSSliderEvent.WAITING, this._update, this), this.$element.remove()
        }, window.MSTimerbar = MSTimerbar, MSSlideController.registerControl("timebar", MSTimerbar)
    }(jQuery),
    function($) {
        "use strict";
        var MSCircleTimer = function(options) {
            BaseControl.call(this), this.options.color = "#A2A2A2", this.options.stroke = 10, this.options.radius = 4, this.options.autohide = !1, $.extend(this.options, options)
        };
        MSCircleTimer.extend(BaseControl);
        var p = MSCircleTimer.prototype,
            _super = BaseControl.prototype;
        p.setup = function() {
            return _super.setup.call(this), this.$element = $("<div></div>").addClass(this.options.prefix + "ctimer").appendTo(this.cont), this.$canvas = $("<canvas></canvas>").addClass("ms-ctimer-canvas").appendTo(this.$element), this.$bar = $("<div></div>").addClass("ms-ctimer-bullet").appendTo(this.$element), this.$canvas[0].getContext ? (this.ctx = this.$canvas[0].getContext("2d"), this.prog = 0, this.__w = 2 * (this.options.radius + this.options.stroke / 2), this.$canvas[0].width = this.__w, this.$canvas[0].height = this.__w, void this.checkHideUnder()) : (this.destroy(), void(this.disable = !0))
        }, p.create = function() {
            if (!this.disable) {
                _super.create.call(this), this.slider.api.addEventListener(MSSliderEvent.WAITING, this._update, this);
                var that = this;
                this.$element.click(function() {
                    that.slider.api.paused ? that.slider.api.resume() : that.slider.api.pause()
                }), this._update()
            }
        }, p._update = function() {
            var that = this;
            $(this).stop(!0).animate({
                prog: .01 * this.slider.api._delayProgress
            }, {
                duration: 200,
                step: function() {
                    that._draw()
                }
            })
        }, p._draw = function() {
            this.ctx.clearRect(0, 0, this.__w, this.__w), this.ctx.beginPath(), this.ctx.arc(.5 * this.__w, .5 * this.__w, this.options.radius, 1.5 * Math.PI, 1.5 * Math.PI + 2 * Math.PI * this.prog, !1), this.ctx.strokeStyle = this.options.color, this.ctx.lineWidth = this.options.stroke, this.ctx.stroke()
        }, p.destroy = function() {
            _super.destroy(), this.disable || ($(this).stop(!0), this.slider.api.removeEventListener(MSSliderEvent.WAITING, this._update, this), this.$element.remove())
        }, window.MSCircleTimer = MSCircleTimer, MSSlideController.registerControl("circletimer", MSCircleTimer)
    }(jQuery),
    function($) {
        "use strict";
        window.MSLightbox = function(options) {
            BaseControl.call(this, options), this.options.autohide = !1, $.extend(this.options, options), this.data_list = []
        }, MSLightbox.fadeDuratation = 400, MSLightbox.extend(BaseControl);
        var p = MSLightbox.prototype,
            _super = BaseControl.prototype;
        p.setup = function() {
            _super.setup.call(this), this.$element = $("<div></div>").addClass(this.options.prefix + "lightbox-btn").appendTo(this.cont), this.checkHideUnder()
        }, p.slideAction = function(slide) {
            $("<div></div>").addClass(this.options.prefix + "lightbox-btn").appendTo(slide.$element).append($(slide.$element.find(".ms-lightbox")))
        }, p.create = function() {
            _super.create.call(this)
        }, MSSlideController.registerControl("lightbox", MSLightbox)
    }(jQuery),
    function($) {
        "use strict";
        window.MSSlideInfo = function(options) {
            BaseControl.call(this, options), this.options.autohide = !1, this.options.align = null, this.options.inset = !1, this.options.margin = 10, this.options.size = 100, this.options.dir = "h", $.extend(this.options, options), this.data_list = []
        }, MSSlideInfo.fadeDuratation = 400, MSSlideInfo.extend(BaseControl);
        var p = MSSlideInfo.prototype,
            _super = BaseControl.prototype;
        p.setup = function() {
            if (this.$element = $("<div></div>").addClass(this.options.prefix + "slide-info").addClass("ms-dir-" + this.options.dir), _super.setup.call(this), this.$element.appendTo(this.slider.$controlsCont === this.cont ? this.slider.$element : this.cont), !this.options.insetTo && this.options.align) {
                var align = this.options.align;
                this.options.inset ? this.$element.css(align, this.options.margin) : "top" === align ? this.$element.prependTo(this.slider.$element).css({
                    "margin-bottom": this.options.margin,
                    position: "relative"
                }) : "bottom" === align ? this.$element.css({
                    "margin-top": this.options.margin,
                    position: "relative"
                }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align()), "v" === this.options.dir ? this.$element.width(this.options.size) : this.$element.css("min-height", this.options.size)
            }
            this.checkHideUnder()
        }, p.align = function() {
            if (!this.detached) {
                var align = this.options.align,
                    pos = this.slider.reserveSpace(align, this.options.size + 2 * this.options.margin);
                this.$element.css(align, -pos - this.options.size - this.options.margin)
            }
        }, p.slideAction = function(slide) {
            var info_ele = $(slide.$element.find(".ms-info"));
            info_ele.detach(), this.data_list[slide.index] = info_ele
        }, p.create = function() {
            _super.create.call(this), this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.cindex = this.slider.api.index(), this.switchEle(this.data_list[this.cindex])
        }, p.update = function() {
            var nindex = this.slider.api.index();
            this.switchEle(this.data_list[nindex]), this.cindex = nindex
        }, p.switchEle = function(ele) {
            if (this.current_ele) {
                this.current_ele[0].tween && this.current_ele[0].tween.stop(!0), this.current_ele[0].tween = CTween.animate(this.current_ele, MSSlideInfo.fadeDuratation, {
                    opacity: 0
                }, {
                    complete: function() {
                        this.detach(), this[0].tween = null, ele.css("position", "relative")
                    },
                    target: this.current_ele
                }), ele.css("position", "absolute")
            }
            this.__show(ele)
        }, p.__show = function(ele) {
            ele.appendTo(this.$element).css("opacity", "0"), this.current_ele && ele.height(Math.max(ele.height(), this.current_ele.height())), clearTimeout(this.tou), this.tou = setTimeout(function() {
                CTween.fadeIn(ele, MSSlideInfo.fadeDuratation), ele.css("height", "")
            }, MSSlideInfo.fadeDuratation), ele[0].tween && ele[0].tween.stop(!0), this.current_ele = ele
        }, p.destroy = function() {
            _super.destroy(), clearTimeout(this.tou), this.current_ele && this.current_ele[0].tween && this.current_ele[0].tween.stop("true"), this.$element.remove(), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.update, this)
        }, MSSlideController.registerControl("slideinfo", MSSlideInfo)
    }(jQuery),
    function($) {
        window.MSGallery = function(id, slider) {
            this.id = id, this.slider = slider, this.telement = $("#" + id), this.botcont = $("<div></div>").addClass("ms-gallery-botcont").appendTo(this.telement), this.thumbcont = $("<div></div>").addClass("ms-gal-thumbcont hide-thumbs").appendTo(this.botcont), this.playbtn = $("<div></div>").addClass("ms-gal-playbtn").appendTo(this.botcont), this.thumbtoggle = $("<div></div>").addClass("ms-gal-thumbtoggle").appendTo(this.botcont), slider.control("thumblist", {
                insertTo: this.thumbcont,
                autohide: !1,
                dir: "h"
            }), slider.control("slidenum", {
                insertTo: this.botcont,
                autohide: !1
            }), slider.control("slideinfo", {
                insertTo: this.botcont,
                autohide: !1
            }), slider.control("timebar", {
                insertTo: this.botcont,
                autohide: !1
            }), slider.control("bullets", {
                insertTo: this.botcont,
                autohide: !1
            })
        };
        var p = MSGallery.prototype;
        p._init = function() {
            var that = this;
            this.slider.api.paused || this.playbtn.addClass("btn-pause"), this.playbtn.click(function() {
                that.slider.api.paused ? (that.slider.api.resume(), that.playbtn.addClass("btn-pause")) : (that.slider.api.pause(), that.playbtn.removeClass("btn-pause"))
            }), this.thumbtoggle.click(function() {
                that.vthumbs ? (that.thumbtoggle.removeClass("btn-hide"), that.vthumbs = !1, that.thumbcont.addClass("hide-thumbs")) : (that.thumbtoggle.addClass("btn-hide"), that.thumbcont.removeClass("hide-thumbs"), that.vthumbs = !0)
            })
        }, p.setup = function() {
            var that = this;
            $(document).ready(function() {
                that._init()
            })
        }
    }(jQuery),
    function($) {
        var getPhotosetURL = function(key, id, count) {
                return "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" + key + "&photoset_id=" + id + "&per_page=" + count + "&extras=url_o,description,date_taken,owner_name,views&format=json&jsoncallback=?"
            },
            getUserPublicURL = function(key, id, count) {
                return "https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=" + key + "&user_id=" + id + "&per_page=" + count + "&extras=url_o,description,date_taken,owner_name,views&format=json&jsoncallback=?"
            },
            getImageSource = function(fid, server, id, secret, size, data) {
                return "_o" === size && data ? data.url_o : "https://farm" + fid + ".staticflickr.com/" + server + "/" + id + "_" + secret + size + ".jpg"
            };
        window.MSFlickrV2 = function(slider, options) {
            var _options = {
                count: 10,
                type: "photoset",
                thumbSize: "q",
                imgSize: "c"
            };
            if (this.slider = slider, this.slider.holdOn(), !options.key) return void this.errMsg("Flickr API Key required. Please add it in settings.");
            $.extend(_options, options), this.options = _options;
            var that = this;
            "photoset" === this.options.type ? $.getJSON(getPhotosetURL(this.options.key, this.options.id, this.options.count), function(data) {
                that._photosData(data)
            }) : $.getJSON(getUserPublicURL(this.options.key, this.options.id, this.options.count), function(data) {
                that.options.type = "photos", that._photosData(data)
            }), "" !== this.options.imgSize && "-" !== this.options.imgSize && (this.options.imgSize = "_" + this.options.imgSize), this.options.thumbSize = "_" + this.options.thumbSize, this.slideTemplate = this.slider.$element.find(".ms-slide")[0].outerHTML, this.slider.$element.find(".ms-slide").remove()
        };
        var p = MSFlickrV2.prototype;
        p._photosData = function(data) {
            if ("fail" === data.stat) return void this.errMsg("Flickr API ERROR#" + data.code + ": " + data.message); {
                var that = this;
                this.options.author || this.options.desc
            }
            $.each(data[this.options.type].photo, function(i, item) {
                var slide_cont = that.slideTemplate.replace(/{{[\w-]+}}/g, function(match) {
                    return match = match.replace(/{{|}}/g, ""), shortCodes[match] ? shortCodes[match](item, that) : "{{" + match + "}}"
                });
                $(slide_cont).appendTo(that.slider.$element)
            }), that._initSlider()
        }, p.errMsg = function(msg) {
            this.slider.$element.css("display", "block"), this.errEle || (this.errEle = $('<div style="font-family:Arial; color:red; font-size:12px; position:absolute; top:10px; left:10px"></div>').appendTo(this.slider.$loading)), this.errEle.html(msg)
        }, p._initSlider = function() {
            this.slider.release()
        };
        var shortCodes = {
            image: function(data, that) {
                return getImageSource(data.farm, data.server, data.id, data.secret, that.options.imgSize, data)
            },
            thumb: function(data, that) {
                return getImageSource(data.farm, data.server, data.id, data.secret, that.options.thumbSize)
            },
            title: function(data) {
                return data.title
            },
            "owner-name": function(data) {
                return data.ownername
            },
            "date-taken": function(data) {
                return data.datetaken
            },
            views: function(data) {
                return data.views
            },
            description: function(data) {
                return data.description._content
            }
        }
    }(jQuery),
    function($) {
        window.MSFacebookGallery = function(slider, options) {
            var _options = {
                count: 10,
                type: "photostream",
                thumbSize: "320",
                imgSize: "orginal",
                https: !1,
                token: ""
            };
            this.slider = slider, this.slider.holdOn(), $.extend(_options, options), this.options = _options, this.graph = "https://graph.facebook.com";
            var that = this;
            "photostream" === this.options.type ? $.getJSON(this.graph + "/" + this.options.username + "/photos/uploaded/?fields=source,name,link,images,from&limit=" + this.options.count + "&access_token=" + this.options.token, function(data) {
                that._photosData(data)
            }) : $.getJSON(this.graph + "/" + this.options.albumId + "/photos?fields=source,name,link,images,from&limit=" + this.options.count + "&access_token=" + this.options.token, function(data) {
                that._photosData(data)
            }), this.slideTemplate = this.slider.$element.find(".ms-slide")[0].outerHTML, this.slider.$element.find(".ms-slide").remove()
        };
        var p = MSFacebookGallery.prototype;
        p._photosData = function(content) {
            if (content.error) return void this.errMsg("Facebook API ERROR#" + content.error.code + "(" + content.error.type + "): " + content.error.message);
            for (var that = this, i = (this.options.author || this.options.desc, 0), l = content.data.length; i !== l; i++) {
                var slide_cont = that.slideTemplate.replace(/{{[\w-]+}}/g, function(match) {
                    return match = match.replace(/{{|}}/g, ""), shortCodes[match] ? shortCodes[match](content.data[i], that) : "{{" + match + "}}"
                });
                $(slide_cont).appendTo(that.slider.$element)
            }
            that._initSlider()
        }, p.errMsg = function(msg) {
            this.slider.$element.css("display", "block"), this.errEle || (this.errEle = $('<div style="font-family:Arial; color:red; font-size:12px; position:absolute; top:10px; left:10px"></div>').appendTo(this.slider.$loading)), this.errEle.html(msg)
        }, p._initSlider = function() {
            this.slider.release()
        };
        var getImageSource = function(images, size) {
                if ("orginal" === size) return images[0].source;
                for (var i = 0, l = images.length; i !== l; i++)
                    if (-1 !== images[i].source.indexOf(size + "x" + size)) return images[i].source;
                return images[0].source
            },
            shortCodes = {
                image: function(data, that) {
                    return getImageSource(data.images, that.options.imgSize)
                },
                thumb: function(data, that) {
                    return getImageSource(data.images, that.options.thumbSize)
                },
                name: function(data) {
                    return data.name
                },
                "owner-name": function(data) {
                    return data.from.name
                },
                link: function(data) {
                    return data.link
                }
            }
    }(jQuery),
    function($) {
        "use strict";
        window.MSScrollParallax = function(slider, parallax, bgparallax, fade) {
            this.fade = fade, this.slider = slider, this.parallax = parallax / 100, this.bgparallax = bgparallax / 100, slider.api.addEventListener(MSSliderEvent.INIT, this.init, this), slider.api.addEventListener(MSSliderEvent.DESTROY, this.destory, this), slider.api.addEventListener(MSSliderEvent.CHANGE_END, this.resetLayers, this), slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.updateCurrentSlide, this)
        }, window.MSScrollParallax.setup = function(slider, parallax, bgparallax, fade) {
            return window._mobile ? void 0 : (null == parallax && (parallax = 50), null == bgparallax && (bgparallax = 40), new MSScrollParallax(slider, parallax, bgparallax, fade))
        };
        var p = window.MSScrollParallax.prototype;
        p.init = function() {
            this.slider.$element.addClass("ms-scroll-parallax"), this.sliderOffset = this.slider.$element.offset().top, this.updateCurrentSlide();
            for (var slide, slides = this.slider.api.view.slideList, i = 0, l = slides.length; i !== l; i++) slide = slides[i], slide.hasLayers && (slide.layerController.$layers.wrap('<div class="ms-scroll-parallax-cont"></div>'), slide.$scrollParallaxCont = slide.layerController.$layers.parent());
            $(window).on("scroll", {
                that: this
            }, this.moveParallax).trigger("scroll")
        }, p.resetLayers = function() {
            if (this.lastSlide) {
                var layers = this.lastSlide.$scrollParallaxCont;
                window._css2d ? (layers && (layers[0].style[window._jcsspfx + "Transform"] = ""), this.lastSlide.hasBG && (this.lastSlide.$imgcont[0].style[window._jcsspfx + "Transform"] = "")) : (layers && (layers[0].style.top = ""), this.lastSlide.hasBG && (this.lastSlide.$imgcont[0].style.top = "0px"))
            }
        }, p.updateCurrentSlide = function() {
            this.lastSlide = this.currentSlide, this.currentSlide = this.slider.api.currentSlide, this.moveParallax({
                data: {
                    that: this
                }
            })
        }, p.moveParallax = function(e) {
            var that = e.data.that,
                slider = that.slider,
                offset = that.sliderOffset,
                scrollTop = $(window).scrollTop(),
                layers = that.currentSlide.$scrollParallaxCont,
                out = offset - scrollTop;
            0 >= out ? (layers && (window._css3d ? layers[0].style[window._jcsspfx + "Transform"] = "translateY(" + -out * that.parallax + "px) translateZ(0.4px)" : window._css2d ? layers[0].style[window._jcsspfx + "Transform"] = "translateY(" + -out * that.parallax + "px)" : layers[0].style.top = -out * that.parallax + "px"), that.updateSlidesBG(-out * that.bgparallax + "px", !0), layers && that.fade && layers.css("opacity", 1 - Math.min(1, -out / slider.api.height))) : (layers && (window._css2d ? layers[0].style[window._jcsspfx + "Transform"] = "" : layers[0].style.top = ""), that.updateSlidesBG("0px", !1), layers && that.fade && layers.css("opacity", 1))
        }, p.updateSlidesBG = function(pos, fixed) {
            for (var slides = this.slider.api.view.slideList, position = !fixed || $.browser.msie || $.browser.opera ? "" : "fixed", i = 0, l = slides.length; i !== l; i++) slides[i].hasBG && (slides[i].$imgcont[0].style.position = position, slides[i].$imgcont[0].style.top = pos), slides[i].$bgvideocont && (slides[i].$bgvideocont[0].style.position = position, slides[i].$bgvideocont[0].style.top = pos)
        }, p.destory = function() {
            slider.api.removeEventListener(MSSliderEvent.INIT, this.init, this), slider.api.removeEventListener(MSSliderEvent.DESTROY, this.destory, this), slider.api.removeEventListener(MSSliderEvent.CHANGE_END, this.resetLayers, this), slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.updateCurrentSlide, this), $(window).off("scroll", this.moveParallax)
        }
    }(jQuery),
    function($, document, window) {
        var PId = 0;
        if (window.MasterSlider) {
            var KeyboardNav = function(slider) {
                this.slider = slider, this.PId = PId++, this.slider.options.keyboard && slider.api.addEventListener(MSSliderEvent.INIT, this.init, this)
            };
            KeyboardNav.name = "MSKeyboardNav";
            var p = KeyboardNav.prototype;
            p.init = function() {
                var api = this.slider.api;
                $(document).on("keydown.kbnav" + this.PId, function(event) {
                    var which = event.which;
                    37 === which || 40 === which ? api.previous(!0) : (38 === which || 39 === which) && api.next(!0)
                })
            }, p.destroy = function() {
                $(document).off("keydown.kbnav" + this.PId), this.slider.api.removeEventListener(MSSliderEvent.INIT, this.init, this)
            }, MasterSlider.registerPlugin(KeyboardNav)
        }
    }(jQuery, document, window),
    function($, document, window) {
        var PId = 0,
            $window = $(window),
            $doc = $(document);
        if (window.MasterSlider) {
            var StartOnAppear = function(slider) {
                this.PId = PId++, this.slider = slider, this.$slider = slider.$element, this.slider.options.startOnAppear && (slider.holdOn(), $doc.ready($.proxy(this.init, this)))
            };
            StartOnAppear.name = "MSStartOnAppear";
            var p = StartOnAppear.prototype;
            p.init = function() {
                this.slider.api;
                $window.on("scroll.soa" + this.PId, $.proxy(this._onScroll, this)).trigger("scroll")
            }, p._onScroll = function() {
                var vpBottom = $window.scrollTop() + $window.height(),
                    top = this.$slider.offset().top;
                vpBottom > top && ($window.off("scroll.soa" + this.PId), this.slider.release())
            }, p.destroy = function() {}, MasterSlider.registerPlugin(StartOnAppear)
        }
    }(jQuery, document, window),
    function(document, window) {
        var filterUnits = {
                "hue-rotate": "deg",
                blur: "px"
            },
            initialValues = {
                opacity: 1,
                contrast: 1,
                brightness: 1,
                saturate: 1,
                "hue-rotate": 0,
                invert: 0,
                sepia: 0,
                blur: 0,
                grayscale: 0
            };
        if (window.MasterSlider) {
            var Filters = function(slider) {
                this.slider = slider, this.slider.options.filters && slider.api.addEventListener(MSSliderEvent.INIT, this.init, this)
            };
            Filters.name = "MSFilters";
            var p = Filters.prototype;
            p.init = function() {
                var api = this.slider.api,
                    view = api.view;
                this.filters = this.slider.options.filters, this.slideList = view.slideList, this.slidesCount = view.slidesCount, this.dimension = view[view.__dimension], this.target = "slide" === this.slider.options.filterTarget ? "$element" : "$bg_img", this.filterName = $.browser.webkit ? "WebkitFilter" : "filter";
                var superFun = view.controller.__renderHook.fun,
                    superRef = view.controller.__renderHook.ref;
                view.controller.renderCallback(function(controller, value) {
                    superFun.call(superRef, controller, value), this.applyEffect(value)
                }, this), this.applyEffect(view.controller.value)
            }, p.applyEffect = function(value) {
                for (var factor, slide, i = 0; i < this.slidesCount; ++i) slide = this.slideList[i], factor = Math.min(1, Math.abs(value - slide.position) / this.dimension), slide[this.target] && ($.browser.msie ? null != this.filters.opacity && slide[this.target].opacity(1 - this.filters.opacity * factor) : slide[this.target][0].style[this.filterName] = this.generateStyle(factor))
            }, p.generateStyle = function(factor) {
                var unit, style = "";
                for (var filter in this.filters) unit = filterUnits[filter] || "", style += filter + "(" + (initialValues[filter] + (this.filters[filter] - initialValues[filter]) * factor) + ") ";
                return style
            }, p.destroy = function() {
                this.slider.api.removeEventListener(MSSliderEvent.INIT, this.init, this)
            }, MasterSlider.registerPlugin(Filters)
        }
    }(document, window, jQuery),
    function($, document, window) {
        if (window.MasterSlider) {
            var ScrollToAction = function(slider) {
                this.slider = slider, slider.api.addEventListener(MSSliderEvent.INIT, this.init, this)
            };
            ScrollToAction.name = "MSScrollToAction";
            var p = ScrollToAction.prototype;
            p.init = function() {
                var api = this.slider.api;
                api.scrollToEnd = _scrollToEnd, api.scrollTo = _scrollTo
            }, p.destroy = function() {};
            var _scrollTo = function(target, duration) {
                    var target = (this.slider.$element, $(target).eq(0));
                    0 !== target.length && (null == duration && (duration = 1.4), $("html, body").animate({
                        scrollTop: target.offset().top
                    }, 1e3 * duration, "easeInOutQuad"))
                },
                _scrollToEnd = function(duration) {
                    var sliderEle = this.slider.$element;
                    null == duration && (duration = 1.4), $("html, body").animate({
                        scrollTop: sliderEle.offset().top + sliderEle.outerHeight(!1)
                    }, 1e3 * duration, "easeInOutQuad")
                };
            MasterSlider.registerPlugin(ScrollToAction)
        }
    }(jQuery, document, window),
    function($, window) {
        "use strict";
        if (window.MSReady)
            for (var i = 0, l = MSReady.length; i !== l; i++) MSReady[i].call(null, $)
    }(jQuery, window, document);;
! function(t) {
    function e() {
        var t = location.href;
        return hashtag = -1 !== t.indexOf("#prettyPhoto") && decodeURI(t.substring(t.indexOf("#prettyPhoto") + 1, t.length)), hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
    }

    function i() {
        "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
    }

    function p() {
        -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
    }

    function o(t, e) {
        var i = "[\\?&]" + (t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")) + "=([^&#]*)",
            p = new RegExp(i).exec(e);
        return null == p ? "" : p[1]
    }
    t.prettyPhoto = {
        version: "3.1.6"
    }, t.fn.prettyPhoto = function(a) {
        function s() {
            t(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (I / 2 - u.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                height: u.contentHeight,
                width: u.contentWidth
            }, settings.animation_speed), $pp_pic_holder.animate({
                top: projectedTop,
                left: j / 2 - u.containerWidth / 2 < 0 ? 0 : j / 2 - u.containerWidth / 2,
                width: u.containerWidth
            }, settings.animation_speed, function() {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(u.height).width(u.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == h(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (u.resized ? t("a.pp_expand,a.pp_contract").show() : t("a.pp_expand").hide()), !settings.autoplay_slideshow || P || v || t.prettyPhoto.startSlideshow(), settings.changepicturecallback(), v = !0
            }), m(), a.ajaxcallback()
        }

        function n(e) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                t(".pp_loaderIcon").show(), e()
            })
        }

        function l(e) {
            e > 1 ? t(".pp_nav").show() : t(".pp_nav").hide()
        }

        function r(t, e) {
            if (resized = !1, d(t, e), imageWidth = t, imageHeight = e, (k > j || b > I) && doresize && settings.allow_resize && !$) {
                for (resized = !0, fitting = !1; !fitting;) k > j ? (imageWidth = j - 200, imageHeight = e / t * imageWidth) : b > I ? (imageHeight = I - 200, imageWidth = t / e * imageHeight) : fitting = !0, b = imageHeight, k = imageWidth;
                (k > j || b > I) && r(k, b), d(imageWidth, imageHeight)
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(b),
                containerWidth: Math.floor(k) + 2 * settings.horizontal_padding,
                contentHeight: Math.floor(y),
                contentWidth: Math.floor(w),
                resized: resized
            }
        }

        function d(e, i) {
            e = parseFloat(e), i = parseFloat(i), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(e), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(e).appendTo(t("body")).css({
                position: "absolute",
                top: -1e4
            }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(e), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(t("body")).css({
                position: "absolute",
                top: -1e4
            }), titleHeight += $pp_title.height(), $pp_title.remove(), y = i + detailsHeight, w = e, b = y + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), k = e
        }

        function h(t) {
            return t.match(/youtube\.com\/watch/i) || t.match(/youtu\.be/i) ? "youtube" : t.match(/vimeo\.com/i) ? "vimeo" : t.match(/\b.mov\b/i) ? "quicktime" : t.match(/\b.swf\b/i) ? "flash" : t.match(/\biframe=true\b/i) ? "iframe" : t.match(/\bajax=true\b/i) ? "ajax" : t.match(/\bcustom=true\b/i) ? "custom" : "#" == t.substr(0, 1) ? "inline" : "image"
        }

        function c() {
            if (doresize && "undefined" != typeof $pp_pic_holder) {
                if (scroll_pos = _(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = I / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > I) return;
                $pp_pic_holder.css({
                    top: projectedTop,
                    left: j / 2 + scroll_pos.scrollLeft - contentwidth / 2
                })
            }
        }

        function _() {
            return self.pageYOffset ? {
                scrollTop: self.pageYOffset,
                scrollLeft: self.pageXOffset
            } : document.documentElement && document.documentElement.scrollTop ? {
                scrollTop: document.documentElement.scrollTop,
                scrollLeft: document.documentElement.scrollLeft
            } : document.body ? {
                scrollTop: document.body.scrollTop,
                scrollLeft: document.body.scrollLeft
            } : void 0
        }

        function g() {
            I = t(window).height(), j = t(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(t(document).height()).width(j)
        }

        function m() {
            isSet && settings.overlay_gallery && "image" == h(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((u.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, t.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
        }

        function f(e) {
            if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), t("body").append(settings.markup), $pp_pic_holder = t(".pp_pic_holder"), $ppt = t(".ppt"), $pp_overlay = t("div.pp_overlay"), isSet && settings.overlay_gallery) {
                currentGalleryPage = 0, toInject = "";
                for (var i = 0; i < pp_images.length; i++) pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[i]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = t(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function() {
                    return t.prettyPhoto.changeGalleryPage("next"), t.prettyPhoto.stopSlideshow(), !1
                }), $pp_gallery.find(".pp_arrow_previous").click(function() {
                    return t.prettyPhoto.changeGalleryPage("previous"), t.prettyPhoto.stopSlideshow(), !1
                }), $pp_pic_holder.find(".pp_content").hover(function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                }, function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                }), itemWidth = 57, $pp_gallery_li.each(function(e) {
                    t(this).find("a").click(function() {
                        return t.prettyPhoto.changePage(e), t.prettyPhoto.stopSlideshow(), !1
                    })
                })
            }
            settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                return t.prettyPhoto.startSlideshow(), !1
            })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                opacity: 0,
                height: t(document).height(),
                width: t(window).width()
            }).bind("click", function() {
                settings.modal || t.prettyPhoto.close()
            }), t("a.pp_close").bind("click", function() {
                return t.prettyPhoto.close(), !1
            }), settings.allow_expand && t("a.pp_expand").bind("click", function(e) {
                return t(this).hasClass("pp_expand") ? (t(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (t(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), n(function() {
                    t.prettyPhoto.open()
                }), !1
            }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                return t.prettyPhoto.changePage("previous"), t.prettyPhoto.stopSlideshow(), !1
            }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                return t.prettyPhoto.changePage("next"), t.prettyPhoto.stopSlideshow(), !1
            }), c()
        }
        a = jQuery.extend({
            hook: "rel",
            animation_speed: "fast",
            ajaxcallback: function() {},
            slideshow: 5e3,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            allow_expand: !0,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "pp_default",
            horizontal_padding: 20,
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            deeplinking: !0,
            overlay_gallery: !0,
            overlay_gallery_max: 30,
            keyboard_shortcuts: !0,
            changepicturecallback: function() {},
            callback: function() {},
            ie6_fallback: !0,
            markup: '<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',
            image_markup: '<img id="fullResImage" src="{path}" />',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="https://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="https://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: "",
            social_tools: '<div class="twitter"><a href="//twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="//platform.twitter.com/widgets.js"><\/script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
        }, a);
        var u, v, y, w, b, k, P, x = this,
            $ = !1,
            I = t(window).height(),
            j = t(window).width();
        return doresize = !0, scroll_pos = _(), t(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
            c(), g()
        }), a.keyboard_shortcuts && t(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(e) {
            if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (e.keyCode) {
                case 37:
                    t.prettyPhoto.changePage("previous"), e.preventDefault();
                    break;
                case 39:
                    t.prettyPhoto.changePage("next"), e.preventDefault();
                    break;
                case 27:
                    settings.modal || t.prettyPhoto.close(), e.preventDefault()
            }
        }), t.prettyPhoto.initialize = function() {
            return settings = a, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = t(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = !!galleryRegExp.exec(theRel), pp_images = isSet ? jQuery.map(x, function(e, i) {
                if (-1 != t(e).attr(settings.hook).indexOf(theRel)) return t(e).attr("href")
            }) : t.makeArray(t(this).attr("href")), pp_titles = isSet ? jQuery.map(x, function(e, i) {
                if (-1 != t(e).attr(settings.hook).indexOf(theRel)) return t(e).find("img").attr("alt") ? t(e).find("img").attr("alt") : ""
            }) : t.makeArray(t(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(x, function(e, i) {
                if (-1 != t(e).attr(settings.hook).indexOf(theRel)) return t(e).attr("title") ? t(e).attr("title") : ""
            }) : t.makeArray(t(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(t(this).attr("href"), pp_images), rel_index = isSet ? set_position : t("a[" + settings.hook + "^='" + theRel + "']").index(t(this)), f(), settings.allow_resize && t(window).bind("scroll.prettyphoto", function() {
                c()
            }), t.prettyPhoto.open(), !1
        }, t.prettyPhoto.open = function(e) {
            return "undefined" == typeof settings && (settings = a, pp_images = t.makeArray(arguments[0]), pp_titles = arguments[1] ? t.makeArray(arguments[1]) : t.makeArray(""), pp_descriptions = arguments[2] ? t.makeArray(arguments[2]) : t.makeArray(""), isSet = pp_images.length > 1, set_position = arguments[3] ? arguments[3] : 0, f(e.target)), settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), l(t(pp_images).length), t(".pp_loaderIcon").show(), settings.deeplinking && i(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + t(pp_images).length), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(o("width", pp_images[set_position])) ? o("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(o("height", pp_images[set_position])) ? o("height", pp_images[set_position]) : settings.default_height.toString(), $ = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(t(window).height() * parseFloat(movie_height) / 100 - 150), $ = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(t(window).width() * parseFloat(movie_width) / 100 - 150), $ = !0), $pp_pic_holder.fadeIn(function() {
                switch (settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html("&nbsp;"), imgPreloader = "", skipInjection = !1, h(pp_images[set_position])) {
                    case "image":
                        imgPreloader = new Image, nextImage = new Image, isSet && set_position < t(pp_images).length - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function() {
                            u = r(imgPreloader.width, imgPreloader.height), s()
                        }, imgPreloader.onerror = function() {
                            alert("Image cannot be loaded. Make sure the path is correct and image exist."), t.prettyPhoto.close()
                        }, imgPreloader.src = pp_images[set_position];
                        break;
                    case "youtube":
                        u = r(movie_width, movie_height), movie_id = o("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "//www.youtube.com/embed/" + movie_id, o("rel", pp_images[set_position]) ? movie += "?rel=" + o("rel", pp_images[set_position]) : movie += "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                        break;
                    case "vimeo":
                        u = r(movie_width, movie_height), movie_id = pp_images[set_position];
                        var e = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
                            i = movie_id.match(e);
                        movie = "//player.vimeo.com/video/" + i[3] + "?title=0&amp;byline=0&amp;portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = u.width + "/embed/?moog_width=" + u.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, u.height).replace(/{path}/g, movie);
                        break;
                    case "quicktime":
                        (u = r(movie_width, movie_height)).height += 15, u.contentHeight += 15, u.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                        break;
                    case "flash":
                        u = r(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                        break;
                    case "iframe":
                        u = r(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{path}/g, frame_url);
                        break;
                    case "ajax":
                        doresize = !1, u = r(movie_width, movie_height), doresize = !0, skipInjection = !0, t.get(pp_images[set_position], function(t) {
                            toInject = settings.inline_markup.replace(/{content}/g, t), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s()
                        });
                        break;
                    case "custom":
                        u = r(movie_width, movie_height), toInject = settings.custom_markup;
                        break;
                    case "inline":
                        myClone = t(pp_images[set_position]).clone().append('<br clear="all" />').css({
                            width: settings.default_width
                        }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(t("body")).show(), doresize = !1, u = r(t(myClone).width(), t(myClone).height()), doresize = !0, t(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, t(pp_images[set_position]).html())
                }
                imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s())
            }), !1
        }, t.prettyPhoto.changePage = function(e) {
            currentGalleryPage = 0, "previous" == e ? --set_position < 0 && (set_position = t(pp_images).length - 1) : "next" == e ? ++set_position > t(pp_images).length - 1 && (set_position = 0) : set_position = e, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && t(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), n(function() {
                t.prettyPhoto.open()
            })
        }, t.prettyPhoto.changeGalleryPage = function(t) {
            "next" == t ? ++currentGalleryPage > totalPage && (currentGalleryPage = 0) : "previous" == t ? --currentGalleryPage < 0 && (currentGalleryPage = totalPage) : currentGalleryPage = t, slide_speed = "next" == t || "previous" == t ? settings.animation_speed : 0, slide_to = currentGalleryPage * (itemsPerPage * itemWidth), $pp_gallery.find("ul").animate({
                left: -slide_to
            }, slide_speed)
        }, t.prettyPhoto.startSlideshow = function() {
            void 0 === P ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                return t.prettyPhoto.stopSlideshow(), !1
            }), P = setInterval(t.prettyPhoto.startSlideshow, settings.slideshow)) : t.prettyPhoto.changePage("next")
        }, t.prettyPhoto.stopSlideshow = function() {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                return t.prettyPhoto.startSlideshow(), !1
            }), clearInterval(P), P = undefined
        }, t.prettyPhoto.close = function() {
            $pp_overlay.is(":animated") || (t.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), t("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                t(this).remove()
            }), $pp_overlay.fadeOut(settings.animation_speed, function() {
                settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), t(this).remove(), t(window).unbind("scroll.prettyphoto"), p(), settings.callback(), doresize = !0, v = !1, delete settings
            }))
        }, !pp_alreadyInitialized && e() && (pp_alreadyInitialized = !0, hashIndex = e(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
            t("a[" + a.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
        }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", t.prettyPhoto.initialize)
    }
}(jQuery);
var pp_alreadyInitialized = !1;
/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(k) {
    k.transit = {
        version: "0.9.9",
        propertyMap: {
            marginLeft: "margin",
            marginRight: "margin",
            marginBottom: "margin",
            marginTop: "margin",
            paddingLeft: "padding",
            paddingRight: "padding",
            paddingBottom: "padding",
            paddingTop: "padding"
        },
        enabled: true,
        useTransitionEnd: false
    };
    var d = document.createElement("div");
    var q = {};

    function b(v) {
        if (v in d.style) {
            return v
        }
        var u = ["Moz", "Webkit", "O", "ms"];
        var r = v.charAt(0).toUpperCase() + v.substr(1);
        if (v in d.style) {
            return v
        }
        for (var t = 0; t < u.length; ++t) {
            var s = u[t] + r;
            if (s in d.style) {
                return s
            }
        }
    }

    function e() {
        d.style[q.transform] = "";
        d.style[q.transform] = "rotateY(90deg)";
        return d.style[q.transform] !== ""
    }
    var a = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    q.transition = b("transition");
    q.transitionDelay = b("transitionDelay");
    q.transform = b("transform");
    q.transformOrigin = b("transformOrigin");
    q.transform3d = e();
    var i = {
        transition: "transitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        WebkitTransition: "webkitTransitionEnd",
        msTransition: "MSTransitionEnd"
    };
    var f = q.transitionEnd = i[q.transition] || null;
    for (var p in q) {
        if (q.hasOwnProperty(p) && typeof k.support[p] === "undefined") {
            k.support[p] = q[p]
        }
    }
    d = null;
    k.cssEase = {
        _default: "ease",
        "in": "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
        snap: "cubic-bezier(0,1,.5,1)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    };
    k.cssHooks["transit:transform"] = {
        get: function(r) {
            return k(r).data("transform") || new j()
        },
        set: function(s, r) {
            var t = r;
            if (!(t instanceof j)) {
                t = new j(t)
            }
            if (q.transform === "WebkitTransform" && !a) {
                s.style[q.transform] = t.toString(true)
            } else {
                s.style[q.transform] = t.toString()
            }
            k(s).data("transform", t)
        }
    };
    k.cssHooks.transform = {
        set: k.cssHooks["transit:transform"].set
    };
    if (k.fn.jquery < "1.8") {
        k.cssHooks.transformOrigin = {
            get: function(r) {
                return r.style[q.transformOrigin]
            },
            set: function(r, s) {
                r.style[q.transformOrigin] = s
            }
        };
        k.cssHooks.transition = {
            get: function(r) {
                return r.style[q.transition]
            },
            set: function(r, s) {
                r.style[q.transition] = s
            }
        }
    }
    n("scale");
    n("translate");
    n("rotate");
    n("rotateX");
    n("rotateY");
    n("rotate3d");
    n("perspective");
    n("skewX");
    n("skewY");
    n("x", true);
    n("y", true);

    function j(r) {
        if (typeof r === "string") {
            this.parse(r)
        }
        return this
    }
    j.prototype = {
        setFromString: function(t, s) {
            var r = (typeof s === "string") ? s.split(",") : (s.constructor === Array) ? s : [s];
            r.unshift(t);
            j.prototype.set.apply(this, r)
        },
        set: function(s) {
            var r = Array.prototype.slice.apply(arguments, [1]);
            if (this.setter[s]) {
                this.setter[s].apply(this, r)
            } else {
                this[s] = r.join(",")
            }
        },
        get: function(r) {
            if (this.getter[r]) {
                return this.getter[r].apply(this)
            } else {
                return this[r] || 0
            }
        },
        setter: {
            rotate: function(r) {
                this.rotate = o(r, "deg")
            },
            rotateX: function(r) {
                this.rotateX = o(r, "deg")
            },
            rotateY: function(r) {
                this.rotateY = o(r, "deg")
            },
            scale: function(r, s) {
                if (s === undefined) {
                    s = r
                }
                this.scale = r + "," + s
            },
            skewX: function(r) {
                this.skewX = o(r, "deg")
            },
            skewY: function(r) {
                this.skewY = o(r, "deg")
            },
            perspective: function(r) {
                this.perspective = o(r, "px")
            },
            x: function(r) {
                this.set("translate", r, null)
            },
            y: function(r) {
                this.set("translate", null, r)
            },
            translate: function(r, s) {
                if (this._translateX === undefined) {
                    this._translateX = 0
                }
                if (this._translateY === undefined) {
                    this._translateY = 0
                }
                if (r !== null && r !== undefined) {
                    this._translateX = o(r, "px")
                }
                if (s !== null && s !== undefined) {
                    this._translateY = o(s, "px")
                }
                this.translate = this._translateX + "," + this._translateY
            }
        },
        getter: {
            x: function() {
                return this._translateX || 0
            },
            y: function() {
                return this._translateY || 0
            },
            scale: function() {
                var r = (this.scale || "1,1").split(",");
                if (r[0]) {
                    r[0] = parseFloat(r[0])
                }
                if (r[1]) {
                    r[1] = parseFloat(r[1])
                }
                return (r[0] === r[1]) ? r[0] : r
            },
            rotate3d: function() {
                var t = (this.rotate3d || "0,0,0,0deg").split(",");
                for (var r = 0; r <= 3; ++r) {
                    if (t[r]) {
                        t[r] = parseFloat(t[r])
                    }
                }
                if (t[3]) {
                    t[3] = o(t[3], "deg")
                }
                return t
            }
        },
        parse: function(s) {
            var r = this;
            s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(t, v, u) {
                r.setFromString(v, u)
            })
        },
        toString: function(t) {
            var s = [];
            for (var r in this) {
                if (this.hasOwnProperty(r)) {
                    if ((!q.transform3d) && ((r === "rotateX") || (r === "rotateY") || (r === "perspective") || (r === "transformOrigin"))) {
                        continue
                    }
                    if (r[0] !== "_") {
                        if (t && (r === "scale")) {
                            s.push(r + "3d(" + this[r] + ",1)")
                        } else {
                            if (t && (r === "translate")) {
                                s.push(r + "3d(" + this[r] + ",0)")
                            } else {
                                s.push(r + "(" + this[r] + ")")
                            }
                        }
                    }
                }
            }
            return s.join(" ")
        }
    };

    function m(s, r, t) {
        if (r === true) {
            s.queue(t)
        } else {
            if (r) {
                s.queue(r, t)
            } else {
                t()
            }
        }
    }

    function h(s) {
        var r = [];
        k.each(s, function(t) {
            t = k.camelCase(t);
            t = k.transit.propertyMap[t] || k.cssProps[t] || t;
            t = c(t);
            if (k.inArray(t, r) === -1) {
                r.push(t)
            }
        });
        return r
    }

    function g(s, v, x, r) {
        var t = h(s);
        if (k.cssEase[x]) {
            x = k.cssEase[x]
        }
        var w = "" + l(v) + " " + x;
        if (parseInt(r, 10) > 0) {
            w += " " + l(r)
        }
        var u = [];
        k.each(t, function(z, y) {
            u.push(y + " " + w)
        });
        return u.join(", ")
    }
    k.fn.transition = k.fn.transit = function(z, s, y, C) {
        var D = this;
        var u = 0;
        var w = true;
        if (typeof s === "function") {
            C = s;
            s = undefined
        }
        if (typeof y === "function") {
            C = y;
            y = undefined
        }
        if (typeof z.easing !== "undefined") {
            y = z.easing;
            delete z.easing
        }
        if (typeof z.duration !== "undefined") {
            s = z.duration;
            delete z.duration
        }
        if (typeof z.complete !== "undefined") {
            C = z.complete;
            delete z.complete
        }
        if (typeof z.queue !== "undefined") {
            w = z.queue;
            delete z.queue
        }
        if (typeof z.delay !== "undefined") {
            u = z.delay;
            delete z.delay
        }
        if (typeof s === "undefined") {
            s = k.fx.speeds._default
        }
        if (typeof y === "undefined") {
            y = k.cssEase._default
        }
        s = l(s);
        var E = g(z, s, y, u);
        var B = k.transit.enabled && q.transition;
        var t = B ? (parseInt(s, 10) + parseInt(u, 10)) : 0;
        if (t === 0) {
            var A = function(F) {
                D.css(z);
                if (C) {
                    C.apply(D)
                }
                if (F) {
                    F()
                }
            };
            m(D, w, A);
            return D
        }
        var x = {};
        var r = function(H) {
            var G = false;
            var F = function() {
                if (G) {
                    D.unbind(f, F)
                }
                if (t > 0) {
                    D.each(function() {
                        this.style[q.transition] = (x[this] || null)
                    })
                }
                if (typeof C === "function") {
                    C.apply(D)
                }
                if (typeof H === "function") {
                    H()
                }
            };
            if ((t > 0) && (f) && (k.transit.useTransitionEnd)) {
                G = true;
                D.bind(f, F)
            } else {
                window.setTimeout(F, t)
            }
            D.each(function() {
                if (t > 0) {
                    this.style[q.transition] = E
                }
                k(this).css(z)
            })
        };
        var v = function(F) {
            this.offsetWidth;
            r(F)
        };
        m(D, w, v);
        return this
    };

    function n(s, r) {
        if (!r) {
            k.cssNumber[s] = true
        }
        k.transit.propertyMap[s] = q.transform;
        k.cssHooks[s] = {
            get: function(v) {
                var u = k(v).css("transit:transform");
                return u.get(s)
            },
            set: function(v, w) {
                var u = k(v).css("transit:transform");
                u.setFromString(s, w);
                k(v).css({
                    "transit:transform": u
                })
            }
        }
    }

    function c(r) {
        return r.replace(/([A-Z])/g, function(s) {
            return "-" + s.toLowerCase()
        })
    }

    function o(s, r) {
        if ((typeof s === "string") && (!s.match(/^[\-0-9\.]+$/))) {
            return s
        } else {
            return "" + s + r
        }
    }

    function l(s) {
        var r = s;
        if (k.fx.speeds[r]) {
            r = k.fx.speeds[r]
        }
        return o(r, "ms")
    }
    k.transit.getTransitionValue = g
})(jQuery);
(function($) {
    function gdlr_portfolio_ajax(port_holder, ajax_info, category, paged) {
        var args = new Object();
        args['num-fetch'] = ajax_info.attr('data-num-fetch');
        args['num-excerpt'] = ajax_info.attr('data-num-excerpt');
        args['order'] = ajax_info.attr('data-order');
        args['orderby'] = ajax_info.attr('data-orderby');
        args['thumbnail-size'] = ajax_info.attr('data-thumbnail-size');
        args['portfolio-style'] = ajax_info.attr('data-port-style');
        args['portfolio-size'] = ajax_info.attr('data-port-size');
        args['portfolio-layout'] = ajax_info.attr('data-port-layout');
        args['category'] = (category) ? category : ajax_info.attr('data-category');
        args['paged'] = (paged) ? paged : 1;
        var animate_complete = false;
        port_holder.slideUp(500, function() {
            animate_complete = true;
        });
        port_holder.siblings('.gdlr-pagination').slideUp(500, function() {
            $(this).remove();
        });
        var now_loading = $('<div class="gdlr-now-loading"></div>');
        now_loading.insertBefore(port_holder);
        now_loading.slideDown();
        $.ajax({
            type: 'POST',
            url: ajax_info.attr('data-ajax'),
            data: {
                'action': 'gdlr_get_portfolio_ajax',
                'args': args
            },
            error: function(a, b, c) {
                console.log(a, b, c);
            },
            success: function(data) {
                now_loading.css('background-image', 'none').slideUp(function() {
                    $(this).remove();
                });
                var port_item = $(data).hide();
                if (animate_complete) {
                    gdlr_bind_portfolio_item(port_holder, port_item);
                } else {
                    setTimeout(function() {
                        gdlr_bind_portfolio_item(port_holder, port_item);
                    }, 500);
                }
            }
        });
    }

    function gdlr_bind_portfolio_item(port_holder, port_item) {
        if (port_holder) {
            port_holder.replaceWith(port_item);
        }
        port_item.slideDown();
        port_item.each(function() {
            if ($(this).hasClass('gdlr-pagination')) {
                $(this).children().gdlr_bind_portfolio_pagination();
            }
        });
        port_item.gdlr_fluid_video();
        port_item.find('.gdlr-portfolio-item').gdlr_portfolio_hover();
        port_item.find('.flexslider').gdlr_flexslider();
        port_item.find('.gdlr-isotope').gdlr_isotope();
        port_item.find('[data-rel="fancybox"]').gdlr_fancybox();
        if (port_item.closest('.gdlr-portfolio-link-lightbox').length > 0) {
            port_item.find('a[data-lightbox]').click(function() {
                $(this).gdlr_portfolio_lightbox();
                return false;
            });
        }
        port_item.find('img').load(function() {
            $(window).trigger('resize');
        });
    }
    $.fn.gdlr_bind_portfolio_pagination = function() {
        $(this).click(function() {
            if ($(this).hasClass('current')) return;
            var port_holder = $(this).parent('.gdlr-pagination').siblings('.portfolio-item-holder');
            var ajax_info = $(this).parent('.gdlr-pagination').siblings('.gdlr-ajax-info');
            var category = $(this).parent('.gdlr-pagination').siblings('.portfolio-item-filter');
            if (category) {
                category = category.children('.active').attr('data-category');
            }
            gdlr_portfolio_ajax(port_holder, ajax_info, category, $(this).attr('data-paged'));
            return false;
        });
    }
    $.fn.gdlr_portfolio_hover = function() {
        $(this).each(function() {
            var port_item = $(this);
            $(this).find('.portfolio-thumbnail').hover(function() {
                $(this).children('img').transition({
                    scale: 1.1,
                    duration: 200
                });
                $(this).find('.portfolio-overlay-wrapper').children('.portfolio-overlay').animate({
                    opacity: 0.6
                }, 200);
                $(this).find('.portfolio-overlay-wrapper').children('.portfolio-icon, i').animate({
                    opacity: 1
                }, 200);
            }, function() {
                $(this).children('img').transition({
                    scale: 1,
                    duration: 200
                });
                $(this).find('.portfolio-overlay-wrapper').children('.portfolio-overlay').animate({
                    opacity: 0
                }, 200);
                $(this).find('.portfolio-overlay-wrapper').children('.portfolio-icon, i').animate({
                    opacity: 0
                }, 200);
            });
        });
    }
    $(document).ready(function() {
        $('.gdlr-portfolio-item').gdlr_portfolio_hover();
        $('.portfolio-item-filter a').click(function() {
            if ($(this).hasClass('active')) return false;
            $(this).addClass('active').siblings().removeClass('active');
            var port_holder = $(this).parent('.portfolio-item-filter').siblings('.portfolio-item-holder');
            var ajax_info = $(this).parent('.portfolio-item-filter').siblings('.gdlr-ajax-info');
            gdlr_portfolio_ajax(port_holder, ajax_info, $(this).attr('data-category'));
            return false;
        });
        $('.gdlr-pagination.gdlr-ajax .page-numbers').gdlr_bind_portfolio_pagination();
    });
})(jQuery);