(this['webpackJsonpreact-blog'] = this['webpackJsonpreact-blog'] || []).push([
    [0],
    {
        39: function (e, t, s) {},
        68: function (e, t, s) {},
        69: function (e, t, s) {},
        70: function (e, t, s) {},
        71: function (e, t, s) {},
        72: function (e, t, s) {},
        73: function (e, t, s) {},
        74: function (e, t, s) {},
        75: function (e, t, s) {},
        76: function (e, t, s) {},
        77: function (e, t, s) {},
        78: function (e, t, s) {},
        79: function (e, t, s) {},
        80: function (e, t, s) {},
        81: function (e, t, s) {},
        82: function (e, t, s) {
            'use strict';
            s.r(t);
            var a = s(1),
                c = s.n(a),
                n = s(32),
                r = s.n(n),
                i = s(6),
                o = s(4),
                l = s(5),
                u = s(7),
                j = function (e, t) {
                    switch (t.type) {
                        case 'LOGIN_START':
                            return { user: null, isFetching: !0, error: !1 };
                        case 'LOGIN_SUCCESS':
                            return {
                                user: t.payload,
                                isFetching: !1,
                                error: !1,
                            };
                        case 'LOGIN_FAILURE':
                            return { user: null, isFetching: !1, error: !0 };
                        case 'UPDATE_START':
                            return Object(u.a)(
                                Object(u.a)({}, e),
                                {},
                                { isFetching: !0 }
                            );
                        case 'UPDATE_SUCCESS':
                            return {
                                user: t.payload,
                                isFetching: !1,
                                error: !1,
                            };
                        case 'UPDATE_FAILURE':
                            return { user: e.user, isFetching: !1, error: !0 };
                        case 'LOGOUT':
                            return { user: null, isFetching: !1, error: !1 };
                        default:
                            return e;
                    }
                },
                b = s(0),
                p = {
                    user: JSON.parse(localStorage.getItem('user')) || null,
                    isFetching: !1,
                    error: !1,
                },
                d = Object(a.createContext)(p),
                O = function (e) {
                    var t = e.children,
                        s = Object(a.useReducer)(j, p),
                        c = Object(l.a)(s, 2),
                        n = c[0],
                        r = c[1];
                    return (
                        Object(a.useEffect)(
                            function () {
                                localStorage.setItem(
                                    'user',
                                    JSON.stringify(n.user)
                                );
                            },
                            [n.user]
                        ),
                        Object(b.jsx)(d.Provider, {
                            value: {
                                user: n.user,
                                isFetching: n.isFetching,
                                error: n.error,
                                dispatch: r,
                            },
                            children: t,
                        })
                    );
                };
            s(39);
            function h() {
                var e = Object(a.useContext)(d),
                    t = e.user,
                    s = e.dispatch;
                return Object(b.jsxs)('div', {
                    className: 'top',
                    children: [
                        Object(b.jsx)('a', {
                            href: 'https://www.facebook.com/mika.kaakinen.7?ref=br_rs',
                            children: Object(b.jsx)('i', {
                                className: 'topIcon fab fa-facebook-square',
                            }),
                        }),
                        Object(b.jsx)('a', {
                            href: 'https://twitter.com/MikaKaakinen',
                            children: Object(b.jsx)('i', {
                                className: 'topIcon fab fa-twitter-square',
                            }),
                        }),
                        Object(b.jsx)('i', {
                            className: 'topIcon fab fa-pinterest-square',
                        }),
                        Object(b.jsx)('i', {
                            className: 'topIcon fab fa-instagram-square',
                        }),
                        Object(b.jsxs)('ul', {
                            className: 'topList',
                            children: [
                                Object(b.jsx)('li', {
                                    className: 'topListItem',
                                    children: Object(b.jsx)(i.b, {
                                        className: 'link',
                                        to: '/',
                                        children: 'HOME',
                                    }),
                                }),
                                Object(b.jsx)('li', {
                                    className: 'topListItem',
                                    children: Object(b.jsx)(i.b, {
                                        className: 'link',
                                        to: '/',
                                        children: 'ABOUT',
                                    }),
                                }),
                                Object(b.jsx)('li', {
                                    className: 'topListItem',
                                    children: Object(b.jsx)(i.b, {
                                        className: 'link',
                                        to: '/',
                                        children: 'CONTACT',
                                    }),
                                }),
                                Object(b.jsx)('li', {
                                    className: 'topListItem',
                                    children: Object(b.jsx)(i.b, {
                                        className: 'link',
                                        to: '/write',
                                        children: 'WRITE',
                                    }),
                                }),
                                t &&
                                    Object(b.jsx)('li', {
                                        className: 'topListItem',
                                        children: Object(b.jsx)(i.b, {
                                            className: 'link',
                                            to: '/category',
                                            children: 'ADD CATEGORY',
                                        }),
                                    }),
                                Object(b.jsx)('li', {
                                    className: 'topListItem',
                                    onClick: function () {
                                        s({ type: 'LOGOUT' });
                                    },
                                    children: t && 'LOGOUT',
                                }),
                            ],
                        }),
                        t
                            ? Object(b.jsx)(i.b, {
                                  to: '/settings',
                                  children: Object(b.jsx)('img', {
                                      className: 'topImg',
                                      src: t.profilePic,
                                      alt: 'profilePic',
                                      style: { display: 'inline' },
                                  }),
                              })
                            : Object(b.jsxs)('ul', {
                                  className: 'topList',
                                  style: { display: 'inline' },
                                  children: [
                                      Object(b.jsx)('li', {
                                          className: 'topListItem',
                                          children: Object(b.jsx)(i.b, {
                                              className: 'link',
                                              to: '/login',
                                              children: 'LOGIN',
                                          }),
                                      }),
                                      Object(b.jsx)('li', {
                                          className: 'topListItem',
                                          children: Object(b.jsx)(i.b, {
                                              className: 'link',
                                              to: '/register',
                                              children: 'REGISTER',
                                          }),
                                      }),
                                  ],
                              }),
                    ],
                });
            }
            var m = s(2),
                x = s.n(m),
                f = s(9),
                g = s(10),
                v = s.n(g),
                N = s(3);
            s(68);
            function y() {
                var e = Object(a.useState)({ name: '' }),
                    t = Object(l.a)(e, 2),
                    s = t[0],
                    c = t[1],
                    n = (function () {
                        var e = Object(f.a)(
                            x.a.mark(function e(t) {
                                return x.a.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        t.preventDefault(),
                                                        console.log(
                                                            'postData is=',
                                                            s
                                                        ),
                                                        (e.prev = 2),
                                                        (e.next = 5),
                                                        v.a.post(
                                                            '/api/categories',
                                                            s
                                                        )
                                                    );
                                                case 5:
                                                    (function () {
                                                        return N.b.success(
                                                            'Category added!'
                                                        );
                                                    })(),
                                                        (e.next = 13);
                                                    break;
                                                case 9:
                                                    (e.prev = 9),
                                                        (e.t0 = e.catch(2)),
                                                        (function () {
                                                            return Object(N.b)(
                                                                'An error occurrred!',
                                                                {
                                                                    icon: '\ud83d\udcde',
                                                                }
                                                            );
                                                        })();
                                                case 13:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[2, 9]]
                                );
                            })
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })();
                return Object(b.jsxs)('div', {
                    className: 'row',
                    css: { marginBottom: '25px' },
                    children: [
                        Object(b.jsx)(N.a, {}),
                        Object(b.jsx)('span', {
                            className: 'loginTitle',
                            children: 'Add category',
                        }),
                        Object(b.jsxs)('form', {
                            onSubmit: n,
                            children: [
                                Object(b.jsx)('input', {
                                    type: 'text',
                                    placeholder: 'Category',
                                    autoFocus: !0,
                                    value: s.name,
                                    onChange: function (e) {
                                        return c({ name: e.target.value });
                                    },
                                }),
                                Object(b.jsx)('button', {
                                    className: 'button',
                                    type: 'submit',
                                    children: 'Send',
                                }),
                            ],
                        }),
                    ],
                });
            }
            s(69);
            var k = function () {
                    return Object(b.jsx)('div', {
                        className: 'footer',
                        children: Object(b.jsxs)('h3', {
                            className: 'h3',
                            children: [
                                'Made with',
                                Object(b.jsx)('span', {
                                    className: 'span',
                                    children: ' \u2665',
                                }),
                                ' in Riihim\xe4ki, Finland',
                                Object(b.jsx)('br', {}),
                                'According to tutorial by Lama Dev',
                            ],
                        }),
                    });
                },
                w = (s(70), s.p + 'static/media/stockholm.d92b2cbe.jpg');
            function I() {
                return Object(b.jsxs)('div', {
                    className: 'header',
                    children: [
                        Object(b.jsx)('div', {
                            className: 'headerTitles',
                            children: Object(b.jsx)('span', {
                                className: 'headerTitleSm',
                                children: 'MERN Stack Blog',
                            }),
                        }),
                        Object(b.jsx)('img', {
                            className: 'headerImg',
                            src: w,
                            alt: '',
                        }),
                    ],
                });
            }
            s(71);
            function S(e) {
                var t = e.post;
                return Object(b.jsxs)('div', {
                    className: 'post',
                    children: [
                        t.image &&
                            Object(b.jsx)('img', {
                                className: 'postImg',
                                src: t.image,
                                alt: '',
                            }),
                        Object(b.jsxs)('div', {
                            className: 'postInfo',
                            children: [
                                Object(b.jsx)('div', {
                                    className: 'postCats',
                                    children: Object(b.jsx)('span', {
                                        className: 'postCat',
                                        children: t.category,
                                    }),
                                }),
                                Object(b.jsx)(i.b, {
                                    to: '/post/'.concat(t._id),
                                    className: 'link',
                                    children: Object(b.jsx)('span', {
                                        className: 'postTitle',
                                        children: t.title,
                                    }),
                                }),
                                Object(b.jsx)('hr', {}),
                                Object(b.jsx)('span', {
                                    className: 'postDate',
                                    children: new Date(
                                        t.createdAt
                                    ).toDateString(),
                                }),
                            ],
                        }),
                        Object(b.jsx)('p', {
                            className: 'postDesc',
                            children: t.desc,
                        }),
                    ],
                });
            }
            s(72);
            function T(e) {
                var t = e.posts;
                return Object(b.jsx)('div', {
                    className: 'posts',
                    children: t.map(function (e) {
                        return Object(b.jsx)(S, { post: e });
                    }),
                });
            }
            var C = s.p + 'static/media/koli.ceae08f1.jpg';
            s(73);
            function E() {
                var e = Object(a.useState)([]),
                    t = Object(l.a)(e, 2),
                    s = t[0],
                    c = t[1];
                return (
                    Object(a.useEffect)(function () {
                        (function () {
                            var e = Object(f.a)(
                                x.a.mark(function e() {
                                    var t;
                                    return x.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.next = 2),
                                                        v.a.get(
                                                            '/api/categories'
                                                        )
                                                    );
                                                case 2:
                                                    (t = e.sent), c(t.data);
                                                case 4:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function () {
                                return e.apply(this, arguments);
                            };
                        })()();
                    }, []),
                    Object(b.jsxs)('div', {
                        className: 'sidebar',
                        children: [
                            Object(b.jsxs)('div', {
                                className: 'sidebarItem',
                                children: [
                                    Object(b.jsx)('span', {
                                        className: 'sidebarTitle',
                                        children: 'ABOUT ME',
                                    }),
                                    Object(b.jsx)('img', {
                                        src: C,
                                        className: 'sidebarImg',
                                        alt: 'Koli',
                                        width: '250px',
                                        height: 'auto',
                                    }),
                                    Object(b.jsx)('p', {
                                        className: 'sidebarText',
                                        children:
                                            'I am a curious person who has a wide array of interest, for example traveling mostly domestically. Here I am seen at Koli hill in Eastern Finland. Koli is the most iconic Finnish landscape.',
                                    }),
                                ],
                            }),
                            Object(b.jsxs)('div', {
                                className: 'sidebarItem',
                                children: [
                                    Object(b.jsx)('span', {
                                        className: 'sidebarTitle',
                                        children: 'CATEGORIES',
                                    }),
                                    Object(b.jsx)('ul', {
                                        className: 'sidebarList',
                                        children: s.map(function (e) {
                                            return Object(b.jsx)(i.b, {
                                                to: '/?cat='.concat(e.name),
                                                className: 'link',
                                                children: Object(b.jsx)('li', {
                                                    className:
                                                        'sidebarListItem',
                                                    children: e.name,
                                                }),
                                            });
                                        }),
                                    }),
                                ],
                            }),
                            Object(b.jsxs)('div', {
                                className: 'sidebarItem',
                                children: [
                                    Object(b.jsx)('span', {
                                        className: 'sidebarTitle',
                                        children: 'FOLLOW US',
                                    }),
                                    Object(b.jsxs)('div', {
                                        className: 'sidebarSocial',
                                        children: [
                                            Object(b.jsx)('a', {
                                                href: 'https://www.facebook.com/mika.kaakinen.7?ref=br_rs',
                                                children: Object(b.jsx)('i', {
                                                    className:
                                                        'sidebarIcon fab fa-facebook-square',
                                                }),
                                            }),
                                            Object(b.jsx)('a', {
                                                href: 'https://twitter.com/MikaKaakinen',
                                                children: Object(b.jsx)('i', {
                                                    className:
                                                        'sidebarIcon fab fa-twitter-square',
                                                }),
                                            }),
                                            Object(b.jsx)('i', {
                                                className:
                                                    'sidebarIcon fab fa-pinterest-square',
                                            }),
                                            Object(b.jsx)('i', {
                                                className:
                                                    'sidebarIcon fab fa-instagram-square',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            }
            s(74);
            function P() {
                var e = Object(a.useState)([]),
                    t = Object(l.a)(e, 2),
                    s = t[0],
                    c = t[1],
                    n = Object(o.f)().search;
                return (
                    Object(a.useEffect)(
                        function () {
                            (function () {
                                var e = Object(f.a)(
                                    x.a.mark(function e() {
                                        var t;
                                        return x.a.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (e.next = 2),
                                                            v.a.get(
                                                                '/api/posts' + n
                                                            )
                                                        );
                                                    case 2:
                                                        (t = e.sent), c(t.data);
                                                    case 4:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                );
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            })()();
                        },
                        [n]
                    ),
                    Object(b.jsxs)(b.Fragment, {
                        children: [
                            Object(b.jsx)(I, {}),
                            Object(b.jsxs)('div', {
                                className: 'home',
                                children: [
                                    Object(b.jsx)(T, { posts: s }),
                                    Object(b.jsx)(E, {}),
                                ],
                            }),
                        ],
                    })
                );
            }
            s(75);
            function L() {
                var e = Object(a.useRef)(),
                    t = Object(a.useRef)(),
                    s = Object(a.useContext)(d),
                    c = s.dispatch,
                    n = s.isFetching,
                    r = (function () {
                        var s = Object(f.a)(
                            x.a.mark(function s(a) {
                                var n;
                                return x.a.wrap(
                                    function (s) {
                                        for (;;)
                                            switch ((s.prev = s.next)) {
                                                case 0:
                                                    return (
                                                        a.preventDefault(),
                                                        c({
                                                            type: 'LOGIN_START',
                                                        }),
                                                        (s.prev = 2),
                                                        (s.next = 5),
                                                        v.a.post(
                                                            '/api/auth/login',
                                                            {
                                                                username:
                                                                    e.current
                                                                        .value,
                                                                password:
                                                                    t.current
                                                                        .value,
                                                            }
                                                        )
                                                    );
                                                case 5:
                                                    (n = s.sent),
                                                        (function () {
                                                            return N.b.success(
                                                                'Login success!'
                                                            );
                                                        })(),
                                                        c({
                                                            type: 'LOGIN_SUCCESS',
                                                            payload: n.data,
                                                        }),
                                                        (s.next = 17);
                                                    break;
                                                case 11:
                                                    (s.prev = 11),
                                                        (s.t0 = s.catch(2)),
                                                        (function () {
                                                            return Object(N.b)(
                                                                'Wrong credentials!',
                                                                {
                                                                    icon: '\ud83d\udcde',
                                                                }
                                                            );
                                                        })(),
                                                        console.log(
                                                            'Error occurred',
                                                            s.t0.message
                                                        ),
                                                        c({
                                                            type: 'LOGIN_FAILURE',
                                                        });
                                                case 17:
                                                case 'end':
                                                    return s.stop();
                                            }
                                    },
                                    s,
                                    null,
                                    [[2, 11]]
                                );
                            })
                        );
                        return function (e) {
                            return s.apply(this, arguments);
                        };
                    })();
                return Object(b.jsxs)('div', {
                    className: 'login',
                    children: [
                        Object(b.jsx)(N.a, {}),
                        Object(b.jsx)('span', {
                            className: 'loginTitle',
                            children: 'Login',
                        }),
                        Object(b.jsxs)('form', {
                            className: 'loginForm',
                            onSubmit: r,
                            children: [
                                Object(b.jsx)('input', {
                                    type: 'text',
                                    className: 'loginInput',
                                    placeholder: 'Enter your username...',
                                    ref: e,
                                }),
                                Object(b.jsx)('input', {
                                    type: 'password',
                                    className: 'loginInput',
                                    placeholder: 'Enter your password...',
                                    ref: t,
                                }),
                                Object(b.jsx)('button', {
                                    className: 'loginButton',
                                    type: 'submit',
                                    disabled: n,
                                    children: 'Login',
                                }),
                            ],
                        }),
                        Object(b.jsx)('button', {
                            className: 'loginRegisterButton',
                            children: Object(b.jsx)(i.b, {
                                className: 'link',
                                to: '/register',
                                children: 'Register',
                            }),
                        }),
                    ],
                });
            }
            s(76);
            function D() {
                var e = Object(a.useState)(''),
                    t = Object(l.a)(e, 2),
                    s = t[0],
                    c = t[1],
                    n = Object(a.useState)(''),
                    r = Object(l.a)(n, 2),
                    o = r[0],
                    u = r[1],
                    j = Object(a.useState)(''),
                    p = Object(l.a)(j, 2),
                    d = p[0],
                    O = p[1],
                    h = (function () {
                        var e = Object(f.a)(
                            x.a.mark(function e(t) {
                                var a;
                                return x.a.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        t.preventDefault(),
                                                        (e.prev = 1),
                                                        (e.next = 4),
                                                        v.a.post(
                                                            '/api/auth/register',
                                                            {
                                                                username: s,
                                                                email: o,
                                                                password: d,
                                                            }
                                                        )
                                                    );
                                                case 4:
                                                    (a = e.sent),
                                                        (function () {
                                                            return N.b.success(
                                                                'Register success!'
                                                            );
                                                        })(),
                                                        a.data &&
                                                            window.location.replace(
                                                                '/login'
                                                            ),
                                                        (e.next = 15);
                                                    break;
                                                case 10:
                                                    (e.prev = 10),
                                                        (e.t0 = e.catch(1)),
                                                        (function () {
                                                            return Object(N.b)(
                                                                'Register failed!',
                                                                {
                                                                    icon: '\ud83d\udcde',
                                                                }
                                                            );
                                                        })(),
                                                        console.log(
                                                            'Error occurred',
                                                            e.t0.message
                                                        );
                                                case 15:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[1, 10]]
                                );
                            })
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })();
                return Object(b.jsxs)('div', {
                    className: 'register',
                    children: [
                        Object(b.jsx)(N.a, {}),
                        Object(b.jsx)('span', {
                            className: 'registerTitle',
                            children: 'Register',
                        }),
                        Object(b.jsxs)('form', {
                            className: 'registerForm',
                            onSubmit: h,
                            children: [
                                Object(b.jsx)('input', {
                                    type: 'text',
                                    className: 'registerInput',
                                    placeholder: 'Enter your username...',
                                    onChange: function (e) {
                                        return c(e.target.value);
                                    },
                                }),
                                Object(b.jsx)('input', {
                                    type: 'text',
                                    className: 'registerInput',
                                    placeholder: 'Enter your email...',
                                    onChange: function (e) {
                                        return u(e.target.value);
                                    },
                                }),
                                Object(b.jsx)('input', {
                                    type: 'password',
                                    className: 'registerInput',
                                    placeholder: 'Enter your password...',
                                    onChange: function (e) {
                                        return O(e.target.value);
                                    },
                                }),
                                Object(b.jsx)('button', {
                                    className: 'registerButton',
                                    type: 'submit',
                                    children: 'Register',
                                }),
                            ],
                        }),
                        Object(b.jsx)('button', {
                            className: 'registerLoginButton',
                            children: Object(b.jsx)(i.b, {
                                className: 'link',
                                to: '/login',
                                children: 'Login',
                            }),
                        }),
                    ],
                });
            }
            var A = s(18),
                F = s.n(A);
            s(77);
            function U() {
                var e = Object(a.useContext)(d),
                    t = e.user,
                    s = e.dispatch,
                    c = Object(a.useState)({
                        userId: t._id,
                        username: '',
                        email: '',
                        password: '',
                        profilePic: '',
                    }),
                    n = Object(l.a)(c, 2),
                    r = n[0],
                    i = n[1],
                    o = (function () {
                        var e = Object(f.a)(
                            x.a.mark(function e(a) {
                                var c;
                                return x.a.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        console.log(
                                                            'user_id is=',
                                                            t._id
                                                        ),
                                                        console.log(
                                                            'userData is=',
                                                            r
                                                        ),
                                                        a.preventDefault(),
                                                        s({
                                                            type: 'UPDATE_START',
                                                        }),
                                                        (e.prev = 4),
                                                        (e.next = 7),
                                                        v.a.put(
                                                            '/api/users/' +
                                                                t._id,
                                                            r
                                                        )
                                                    );
                                                case 7:
                                                    (c = e.sent),
                                                        (function () {
                                                            return N.b.success(
                                                                'Profile updated!'
                                                            );
                                                        })(),
                                                        s({
                                                            type: 'UPDATE_SUCCESS',
                                                            payload: c.data,
                                                        }),
                                                        (e.next = 19);
                                                    break;
                                                case 13:
                                                    (e.prev = 13),
                                                        (e.t0 = e.catch(4)),
                                                        (function () {
                                                            return Object(N.b)(
                                                                'Profile update failed!',
                                                                {
                                                                    icon: '\ud83d\udcde',
                                                                }
                                                            );
                                                        })(),
                                                        console.log(
                                                            'Error occurred',
                                                            e.t0.message
                                                        ),
                                                        s({
                                                            type: 'UPDATE_FAILURE',
                                                        });
                                                case 19:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[4, 13]]
                                );
                            })
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })();
                return Object(b.jsxs)('div', {
                    className: 'settings',
                    children: [
                        Object(b.jsx)(N.a, {}),
                        Object(b.jsxs)('div', {
                            className: 'settingsWrapper',
                            children: [
                                Object(b.jsxs)('div', {
                                    className: 'settingsTitle',
                                    children: [
                                        Object(b.jsx)('span', {
                                            className: 'settingsUpdateTitle',
                                            children: 'Update Your Account',
                                        }),
                                        Object(b.jsx)('span', {
                                            className: 'settingsDeleteTitle',
                                            children: 'Delete Account',
                                        }),
                                    ],
                                }),
                                Object(b.jsxs)('form', {
                                    className: 'settingsForm',
                                    onSubmit: o,
                                    children: [
                                        Object(b.jsx)('label', {
                                            children: 'Profile Picture',
                                        }),
                                        Object(b.jsx)('label', {
                                            children: 'Username',
                                        }),
                                        Object(b.jsx)('input', {
                                            type: 'text',
                                            placeholder: t.username,
                                            value: r.username,
                                            onChange: function (e) {
                                                return i(
                                                    Object(u.a)(
                                                        Object(u.a)({}, r),
                                                        {},
                                                        {
                                                            username:
                                                                e.target.value,
                                                        }
                                                    )
                                                );
                                            },
                                        }),
                                        Object(b.jsx)('label', {
                                            children: 'Email',
                                        }),
                                        Object(b.jsx)('input', {
                                            type: 'email',
                                            placeholder: t.email,
                                            value: r.email,
                                            onChange: function (e) {
                                                return i(
                                                    Object(u.a)(
                                                        Object(u.a)({}, r),
                                                        {},
                                                        {
                                                            email: e.target
                                                                .value,
                                                        }
                                                    )
                                                );
                                            },
                                        }),
                                        Object(b.jsx)('label', {
                                            children: 'Password',
                                        }),
                                        Object(b.jsx)('input', {
                                            type: 'password',
                                            placeholder: t.password,
                                            value: r.password,
                                            onChange: function (e) {
                                                return i(
                                                    Object(u.a)(
                                                        Object(u.a)({}, r),
                                                        {},
                                                        {
                                                            password:
                                                                e.target.value,
                                                        }
                                                    )
                                                );
                                            },
                                        }),
                                        Object(b.jsx)(F.a, {
                                            type: 'file',
                                            multiple: !1,
                                            onDone: function (e) {
                                                var t = e.base64;
                                                return i(
                                                    Object(u.a)(
                                                        Object(u.a)({}, r),
                                                        {},
                                                        { profilePic: t }
                                                    )
                                                );
                                            },
                                        }),
                                        Object(b.jsx)('button', {
                                            className: 'settingsSubmit',
                                            type: 'submit',
                                            children: 'Update',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        Object(b.jsx)(E, {}),
                    ],
                });
            }
            s(78), s(79);
            function R() {
                var e = Object(o.f)().pathname.split('/')[2];
                console.log('Path is', e);
                var t = Object(a.useState)({}),
                    s = Object(l.a)(t, 2),
                    c = s[0],
                    n = s[1],
                    r = Object(a.useContext)(d).user,
                    u = Object(a.useState)(''),
                    j = Object(l.a)(u, 2),
                    p = j[0],
                    O = j[1],
                    h = Object(a.useState)(''),
                    m = Object(l.a)(h, 2),
                    g = m[0],
                    y = m[1],
                    k = Object(a.useState)(!1),
                    w = Object(l.a)(k, 2),
                    I = w[0],
                    S = w[1];
                Object(a.useEffect)(
                    function () {
                        (function () {
                            var t = Object(f.a)(
                                x.a.mark(function t() {
                                    var s;
                                    return x.a.wrap(function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        (t.next = 2),
                                                        v.a.get(
                                                            '/api/posts/' + e
                                                        )
                                                    );
                                                case 2:
                                                    (s = t.sent),
                                                        n(s.data),
                                                        O(s.data.title),
                                                        y(s.data.desc);
                                                case 6:
                                                case 'end':
                                                    return t.stop();
                                            }
                                    }, t);
                                })
                            );
                            return function () {
                                return t.apply(this, arguments);
                            };
                        })()();
                    },
                    [e]
                );
                var T = (function () {
                        var e = Object(f.a)(
                            x.a.mark(function e() {
                                return x.a.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.prev = 0),
                                                        (e.next = 3),
                                                        v.a.delete(
                                                            '/api/posts/'.concat(
                                                                c._id
                                                            ),
                                                            {
                                                                data: {
                                                                    username:
                                                                        r.username,
                                                                },
                                                            }
                                                        )
                                                    );
                                                case 3:
                                                    (function () {
                                                        return N.b.success(
                                                            'Post deleted'
                                                        );
                                                    })(),
                                                        window.location.replace(
                                                            '/'
                                                        ),
                                                        (e.next = 12);
                                                    break;
                                                case 8:
                                                    (e.prev = 8),
                                                        (e.t0 = e.catch(0)),
                                                        (function () {
                                                            return Object(N.b)(
                                                                'Could not delete post!',
                                                                {
                                                                    icon: '\ud83d\udcde',
                                                                }
                                                            );
                                                        })();
                                                case 12:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[0, 8]]
                                );
                            })
                        );
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = (function () {
                        var e = Object(f.a)(
                            x.a.mark(function e() {
                                return x.a.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.prev = 0),
                                                        (e.next = 3),
                                                        v.a.put(
                                                            '/api/posts/'.concat(
                                                                c._id
                                                            ),
                                                            {
                                                                username:
                                                                    r.username,
                                                                title: p,
                                                                desc: g,
                                                            }
                                                        )
                                                    );
                                                case 3:
                                                    (function () {
                                                        return N.b.success(
                                                            'Post updated'
                                                        );
                                                    })(),
                                                        S(!1),
                                                        (e.next = 13);
                                                    break;
                                                case 8:
                                                    (e.prev = 8),
                                                        (e.t0 = e.catch(0)),
                                                        (function () {
                                                            return Object(N.b)(
                                                                'Could not update post!',
                                                                {
                                                                    icon: '\ud83d\udcde',
                                                                }
                                                            );
                                                        })(),
                                                        console.log(
                                                            'Error occurred',
                                                            e.t0.message
                                                        );
                                                case 13:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[0, 8]]
                                );
                            })
                        );
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })();
                return Object(b.jsxs)('div', {
                    className: 'singlePost',
                    children: [
                        Object(b.jsx)(N.a, {}),
                        Object(b.jsxs)('div', {
                            className: 'singlePostWrapper',
                            children: [
                                c.image &&
                                    Object(b.jsx)('img', {
                                        src: c.image,
                                        alt: '',
                                        className: 'singlePostImg',
                                    }),
                                I
                                    ? Object(b.jsx)('input', {
                                          type: 'text',
                                          value: p,
                                          className: 'singlePostTitleInput',
                                          autoFocus: !0,
                                          onChange: function (e) {
                                              return O(e.target.value);
                                          },
                                      })
                                    : Object(b.jsxs)('h1', {
                                          className: 'singlePostTitle',
                                          children: [
                                              p,
                                              c.username ===
                                                  (null === r || void 0 === r
                                                      ? void 0
                                                      : r.username) &&
                                                  Object(b.jsxs)('div', {
                                                      className:
                                                          'singlePostEdit',
                                                      children: [
                                                          Object(b.jsx)('i', {
                                                              className:
                                                                  'singlePostIcon far fa-edit',
                                                              onClick:
                                                                  function () {
                                                                      return S(
                                                                          !0
                                                                      );
                                                                  },
                                                          }),
                                                          Object(b.jsx)('i', {
                                                              className:
                                                                  'singlePostIcon far fa-trash-alt',
                                                              onClick: T,
                                                          }),
                                                      ],
                                                  }),
                                          ],
                                      }),
                                Object(b.jsxs)('div', {
                                    className: 'singlePostInfo',
                                    children: [
                                        Object(b.jsxs)('span', {
                                            className: 'singlePostAuthor',
                                            children: [
                                                'Author:',
                                                Object(b.jsx)(i.b, {
                                                    to: '/?user='.concat(
                                                        c.username
                                                    ),
                                                    className: 'link',
                                                    children: Object(b.jsxs)(
                                                        'b',
                                                        {
                                                            children: [
                                                                ' ',
                                                                c.username,
                                                            ],
                                                        }
                                                    ),
                                                }),
                                            ],
                                        }),
                                        Object(b.jsx)('span', {
                                            className: 'singlePostDate',
                                            children: new Date(
                                                c.createdAt
                                            ).toDateString(),
                                        }),
                                    ],
                                }),
                                I
                                    ? Object(b.jsx)('textarea', {
                                          className: 'singlePostDescInput',
                                          value: g,
                                          onChange: function (e) {
                                              return y(e.target.value);
                                          },
                                      })
                                    : Object(b.jsx)('p', {
                                          className: 'singlePostDesc',
                                          children: g,
                                      }),
                                I &&
                                    Object(b.jsx)('button', {
                                        className: 'singlePostButton',
                                        onClick: C,
                                        children: 'Update',
                                    }),
                            ],
                        }),
                    ],
                });
            }
            function _() {
                return Object(b.jsxs)('div', {
                    className: 'single',
                    children: [Object(b.jsx)(R, {}), Object(b.jsx)(E, {})],
                });
            }
            s(80);
            function G() {
                var e = Object(a.useContext)(d).user;
                console.log('User is', e.username);
                var t = Object(a.useState)({
                        title: '',
                        desc: '',
                        category: '',
                        image: '',
                        username: e.username,
                    }),
                    s = Object(l.a)(t, 2),
                    c = s[0],
                    n = s[1],
                    r = (function () {
                        var e = Object(f.a)(
                            x.a.mark(function e(t) {
                                var s;
                                return x.a.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        t.preventDefault(),
                                                        console.log(
                                                            'postData is=',
                                                            c
                                                        ),
                                                        (e.prev = 2),
                                                        (e.next = 5),
                                                        v.a.post(
                                                            '/api/posts',
                                                            c
                                                        )
                                                    );
                                                case 5:
                                                    (s = e.sent),
                                                        (function () {
                                                            return N.b.success(
                                                                'Post added'
                                                            );
                                                        })(),
                                                        window.location.replace(
                                                            '/post/' +
                                                                s.data._id
                                                        ),
                                                        (e.next = 16);
                                                    break;
                                                case 11:
                                                    (e.prev = 11),
                                                        (e.t0 = e.catch(2)),
                                                        (function () {
                                                            return Object(N.b)(
                                                                'Could not add post!',
                                                                {
                                                                    icon: '\ud83d\udcde',
                                                                }
                                                            );
                                                        })(),
                                                        console.log(
                                                            'Error occurred',
                                                            e.t0.message
                                                        );
                                                case 16:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[2, 11]]
                                );
                            })
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })();
                return Object(b.jsxs)('div', {
                    className: 'row',
                    css: { marginBottom: '25px' },
                    children: [
                        Object(b.jsx)(N.a, {}),
                        Object(b.jsx)('span', {
                            className: 'writeTitle',
                            children: 'Write',
                        }),
                        Object(b.jsxs)('form', {
                            onSubmit: r,
                            children: [
                                Object(b.jsx)('input', {
                                    type: 'text',
                                    placeholder: 'Title',
                                    autoFocus: !0,
                                    value: c.title,
                                    onChange: function (e) {
                                        return n(
                                            Object(u.a)(
                                                Object(u.a)({}, c),
                                                {},
                                                { title: e.target.value }
                                            )
                                        );
                                    },
                                }),
                                Object(b.jsx)('textarea', {
                                    placeholder: 'Tell your story...',
                                    type: 'text',
                                    value: c.desc,
                                    onChange: function (e) {
                                        return n(
                                            Object(u.a)(
                                                Object(u.a)({}, c),
                                                {},
                                                { desc: e.target.value }
                                            )
                                        );
                                    },
                                }),
                                Object(b.jsx)('input', {
                                    type: 'text',
                                    placeholder: 'Category',
                                    autoFocus: !0,
                                    value: c.category,
                                    onChange: function (e) {
                                        return n(
                                            Object(u.a)(
                                                Object(u.a)({}, c),
                                                {},
                                                { category: e.target.value }
                                            )
                                        );
                                    },
                                }),
                                Object(b.jsx)(F.a, {
                                    type: 'file',
                                    multiple: !1,
                                    onDone: function (e) {
                                        var t = e.base64;
                                        return n(
                                            Object(u.a)(
                                                Object(u.a)({}, c),
                                                {},
                                                { image: t }
                                            )
                                        );
                                    },
                                }),
                                Object(b.jsx)('h5', {
                                    className: 'h5',
                                    children: 'The image must be under 8 MB',
                                }),
                                Object(b.jsx)('button', {
                                    className: 'button',
                                    type: 'submit',
                                    children: 'Publish',
                                }),
                            ],
                        }),
                    ],
                });
            }
            var B = function () {
                var e = Object(a.useContext)(d).user;
                return Object(b.jsxs)(i.a, {
                    children: [
                        Object(b.jsx)(h, {}),
                        Object(b.jsxs)(o.c, {
                            children: [
                                Object(b.jsx)(o.a, {
                                    exact: !0,
                                    path: '/',
                                    children: Object(b.jsx)(P, {}),
                                }),
                                Object(b.jsx)(o.a, {
                                    path: '/register',
                                    children: e
                                        ? Object(b.jsx)(P, {})
                                        : Object(b.jsx)(D, {}),
                                }),
                                Object(b.jsx)(o.a, {
                                    path: '/login',
                                    children: e
                                        ? Object(b.jsx)(P, {})
                                        : Object(b.jsx)(L, {}),
                                }),
                                Object(b.jsx)(o.a, {
                                    path: '/write',
                                    children: e
                                        ? Object(b.jsx)(G, {})
                                        : Object(b.jsx)(D, {}),
                                }),
                                Object(b.jsx)(o.a, {
                                    path: '/category',
                                    children: Object(b.jsx)(y, {}),
                                }),
                                Object(b.jsx)(o.a, {
                                    path: '/settings',
                                    children: e
                                        ? Object(b.jsx)(U, {})
                                        : Object(b.jsx)(D, {}),
                                }),
                                Object(b.jsx)(o.a, {
                                    path: '/post/:postId',
                                    children: Object(b.jsx)(_, {}),
                                }),
                            ],
                        }),
                        Object(b.jsx)(k, {}),
                    ],
                });
            };
            s(81);
            r.a.render(
                Object(b.jsx)(c.a.StrictMode, {
                    children: Object(b.jsx)(O, {
                        children: Object(b.jsx)(B, {}),
                    }),
                }),
                document.getElementById('root')
            );
        },
    },
    [[82, 1, 2]],
]);
//# sourceMappingURL=main.60d3e262.chunk.js.map
