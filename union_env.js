delete __dirname;
delete __filename;

function Window() {}

// 删除浏览器中不存在的对象
delete global;
delete GLOBAL;
delete VMError;
delete Buffer;
delete process;
delete root;
delete WindowProperties;
delete globalThis[Symbol.toStringTag];
window = globalThis;
globalThis.__proto__ = Window.prototype
window.__proto__  = new Window();

window.devicePixelRatio = 1;
window.outerWidth = 1940;
window.outerHeight = 1040;
window.XMLHttpRequest = function XMLHttpRequest() {};
window.Window = Window;
window.chrome ={
    "app": {
        "isInstalled": false,
        "InstallState": {
            "DISABLED": "disabled",
            "INSTALLED": "installed",
            "NOT_INSTALLED": "not_installed"
        },
        "RunningState": {
            "CANNOT_RUN": "cannot_run",
            "READY_TO_RUN": "ready_to_run",
            "RUNNING": "running"
        }
    }
}
window.PromiseRejectionEvent = function PromiseRejectionEvent() {};
window.getComputedStyle = function getComputedStyle() {};
// 指纹值 很难找，直接写死
window._extend = {
    "wd": 0,
    "l": 0,
    "ls": 5,
    "wk": 0,
    "bu1": "0.1.5",
    "bu3": 103,
    "bu4": 0,
    "bu5": 0,
    "bu6": 11,
    "bu7": 0,
    "bu8": 0,
    "random": "4jpc2qNffmUeg",
    "bu12": -8,
    "bu10": 11,
    "bu11": 2
};
window.toString = function() {
  return 'function toString() { [native code] }'
};
window.toString.toString.toString = function() {
  return 'function toString() { [native code] }'
};

function Navigator(){};
navigator = {
  appCodeName: "Mozilla",
  appName: "Netscape",
  appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
  deviceMemory: 8,
  language: "zh-CN",
  languages :['zh-CN'],
  webdriver: false,
  platform: 'Win32',
  hardwareConcurrency:16,
  userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
  mimeTypes: {
    "0": {},
    "1": {}
  },
  plugins: {
    "0": {
        "0": {},
        "1": {}
    },
    "1": {
        "0": {},
        "1": {}
    },
    "2": {
        "0": {},
        "1": {}
    },
    "3": {
        "0": {},
        "1": {}
    },
    "4": {
        "0": {},
        "1": {}
    }
  }
};
navigator.__proto__ =  Navigator.prototype;
window.Navigator = Navigator;
window.navigator = navigator;

Node = function Node() {
    throw new TypeError("Illegal constructor");
}

Element = function Element() {
    throw new TypeError("Illegal constructor");
};
window.Element = Element;
Object.setPrototypeOf(Element.prototype, Node.prototype);
window.Element.prototype[Symbol.unscopables] = {
    after: true,
    append: true,
    before: true,
    prepend: true,
    remove: true,
    replaceChildren: true,
    replaceWith: true,
    slot: true,
};
window.Element.prototype[Symbol.unscopables].__proto__ = null;
const methodNames = [
    "namespaceURI",
    "prefix",
    "localName",
    "tagName",
    "id",
    "className",
    "classList",
    "slot",
    "attributes",
    "shadowRoot",
    "part",
    "assignedSlot",
    "innerHTML",
    "outerHTML",
    "scrollTop",
    "scrollLeft",
    "scrollWidth",
    "scrollHeight",
    "clientTop",
    "clientLeft",
    "clientWidth",
    "clientHeight",
    "onbeforecopy",
    "onbeforecut",
    "onbeforepaste",
    "onsearch",
    "elementTiming",
    "onfullscreenchange",
    "onfullscreenerror",
    "onwebkitfullscreenchange",
    "onwebkitfullscreenerror",
    "role",
    "ariaAtomic",
    "ariaAutoComplete",
    "ariaBusy",
    "ariaBrailleLabel",
    "ariaBrailleRoleDescription",
    "ariaChecked",
    "ariaColCount",
    "ariaColIndex",
    "ariaColSpan",
    "ariaCurrent",
    "ariaDescription",
    "ariaDisabled",
    "ariaExpanded",
    "ariaHasPopup",
    "ariaHidden",
    "ariaInvalid",
    "ariaKeyShortcuts",
    "ariaLabel",
    "ariaLevel",
    "ariaLive",
    "ariaModal",
    "ariaMultiLine",
    "ariaMultiSelectable",
    "ariaOrientation",
    "ariaPlaceholder",
    "ariaPosInSet",
    "ariaPressed",
    "ariaReadOnly",
    "ariaRelevant",
    "ariaRequired",
    "ariaRoleDescription",
    "ariaRowCount",
    "ariaRowIndex",
    "ariaRowSpan",
    "ariaSelected",
    "ariaSetSize",
    "ariaSort",
    "ariaValueMax",
    "ariaValueMin",
    "ariaValueNow",
    "ariaValueText",
    "children",
    "firstElementChild",
    "lastElementChild",
    "childElementCount",
    "previousElementSibling",
    "nextElementSibling",
    "after",
    "animate",
    "append",
    "attachShadow",
    "before",
    "checkVisibility",
    "closest",
    "computedStyleMap",
    "getAnimations",
    "getAttribute",
    "getAttributeNS",
    "getAttributeNames",
    "getAttributeNode",
    "getAttributeNodeNS",
    "getBoundingClientRect",
    "getClientRects",
    "getElementsByClassName",
    "getElementsByTagName",
    "getElementsByTagNameNS",
    "getHTML",
    "hasAttribute",
    "hasAttributeNS",
    "hasAttributes",
    "hasPointerCapture",
    "insertAdjacentElement",
    "insertAdjacentHTML",
    "insertAdjacentText",
    "matches",
    "moveBefore",
    "prepend",
    "querySelector",
    "querySelectorAll",
    "releasePointerCapture",
    "remove",
    "removeAttribute",
    "removeAttributeNS",
    "removeAttributeNode",
    "replaceChildren",
    "replaceWith",
    "requestFullscreen",
    "requestPointerLock",
    "scroll",
    "scrollBy",
    "scrollIntoView",
    "scrollIntoViewIfNeeded",
    "scrollTo",
    "setAttribute",
    "setAttributeNS",
    "setAttributeNode",
    "setAttributeNodeNS",
    "setHTMLUnsafe",
    "setPointerCapture",
    "toggleAttribute",
    "webkitMatchesSelector",
    "webkitRequestFullScreen",
    "webkitRequestFullscreen",
    "currentCSSZoom",
    "ariaColIndexText",
    "ariaRowIndexText",
    "ariaActiveDescendantElement",
    "ariaControlsElements",
    "ariaDescribedByElements",
    "ariaDetailsElements",
    "ariaErrorMessageElements",
    "ariaFlowToElements",
    "ariaLabelledByElements"
];
methodNames.forEach(name => {
  Object.defineProperty(Element.prototype, name, {
    value: function() {},
    writable: true,
    enumerable: true
  });
});

function HTMLAllCollection(){}
_all = {
  length:210
};
_all.__proto__ = HTMLAllCollection.prototype;
window.HTMLAllCollection = HTMLAllCollection;

function HTMLScriptElement(){
  this.tagName = "SCRIPT",
  this.baseURI = "https://union.jd.com/proManager/index?pageNo=1"
};
window.HTMLScriptElement = HTMLScriptElement;

function HTMLHeadElement(){
  this.tagName = "HEAD"
};
window.HTMLHeadElement = HTMLHeadElement;
_body = {
  childElementCount: 11,
  innerHTML: ""
};

_head = {
  0:{},
  appendChild:function(ele){
    console.log('document head:::', ele);
  },
  removeChild:function(ele){
    console.log('document head:::', ele);
  },
  childElementCount: 103
};
script = new HTMLScriptElement();
_script = {
  parentNode:_head
}
_script.__proto__ = HTMLScriptElement.prototype
_documentElement = {
  getAttribute:function(ele){
    console.log('document documentElement getAttribute:::', ele);
    if(ele == 'dianshangji_tabid')
      return null
  }
}

function Location(){};
location = {
  ancestorOrigins: {},
  href: 'https://union.jd.com/proManager/index?pageNo=1',
  origin: 'https://union.jd.com',
  protocol: 'https:',
  host:"union.jd.com",
  hostname: 'union.jd.com',
  port: '',
  pathname:"/proManager/index",
  search: '?pageNo=1',
  hash: ''
};
location.__proto__ =  Location.prototype;
window.Location = Location;

function Document(){};
window.Document = Document;

function WebGLRenderingContextMock() {
  this.canvas = watch(_canvas,'canvas'),
  this.drawingBufferColorSpace = "srgb",
  this.drawingBufferFormat = 32856,
  this.drawingBufferHeight = 150,
  this.drawingBufferWidth = 300,
  this.unpackColorSpace = "srgb",
  this.ARRAY_BUFFER = 34962,
  this.STATIC_DRAW = 35044
}
WebGLRenderingContextMock.prototype.createBuffer = function createBuffer() { return null; };
WebGLRenderingContextMock.prototype.bindBuffer = function bindBuffer() { return null; };
WebGLRenderingContextMock.prototype.bufferData = function bufferData() { return null; };
window.WebGLRenderingContext = WebGLRenderingContextMock;

function CanvasRenderingContext2D() {
  this.textBaseline = 'alphabetic';
};
CanvasRenderingContext2D.prototype.fillRect =function fillRect(ele){
    console.log('getContext fillRect:::', ele);
    return 'function fillRect () { [native code] }'
}
CanvasRenderingContext2D.prototype.arc =function arc(ele){
    console.log('getContext arc:::', ele);
    return 'function arc() { [native code] }'
}
CanvasRenderingContext2D.prototype.stroke =function stroke(ele){
    console.log('getContext stroke:::', ele);
}
CanvasRenderingContext2D.prototype.fillText =function fillText(ele){
    console.log('getContext fillText:::', ele);
    return 'function fillText() { [native code] }'
}
window.CanvasRenderingContext2D = CanvasRenderingContext2D;

_canvas = {
  getContext:function(ele){
    console.log('canvas getContext:::', ele);
    if(ele == '2d'){
      return watch(new CanvasRenderingContext2D(), 'CanvasRenderingContext2D');
    }
    if(ele = 'webgl'){
      return watch(new WebGLRenderingContextMock(), 'WebGLRenderingContextMock');
    }
    if(ele = 'experimental-webgl'){
      return watch({}, 'experimental-webgl');
    }
  },
  toDataURL:function(ele){
    console.log('canvas toDataURL:::', ele);
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAABGJJREFUeF7t1AEJAAAMAsHZv/RyPNwSyDncOQIECEQEFskpJgECBM5geQICBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAgQdWMQCX4yW9owAAAABJRU5ErkJggg=='
  }
}

document = {
  all:watch(_all, 'all'),
  body:watch(_body, 'body'),
  head:watch(_head, 'head'),
  location:location,
  documentElement: watch(_documentElement,'documentElement'),
  referrer:"",
  cookie:'__jda=209449046.17481345209091334985603.1748134521.1748134521.1748134521.1; __jdc=209449046; __jdv=209449046|direct|-|none|-|1748134520910; __jdu=17481345209091334985603; 3AB9D23F7A4B3CSS=jdd035GAOFUFEBJZBP65GJFFPNFOHRPL2GW3FFTM3KWMIX2OMGD6O6B6XMXQ4N5UC576OVVJNEV4ZFGCH4AJSIZXPWBFGFIAAAAMXATX6JZIAAAAAD5Q6ESUALUZI4MX; 3AB9D23F7A4B3C9B=5GAOFUFEBJZBP65GJFFPNFOHRPL2GW3FFTM3KWMIX2OMGD6O6B6XMXQ4N5UC576OVVJNEV4ZFGCH4AJSIZXPWBFGFI; shshshfpa=35cebf0c-43e1-45c6-cf1e-bbaccabb14e7-1748134521; shshshfpx=35cebf0c-43e1-45c6-cf1e-bbaccabb14e7-1748134521; sidebarStatus=0; shshshfpb=BApXSgNT4B_JAOBEcsaarcn3X0ttxfaU9BgpSQg5o9xJ1MsJRL462',
  createElement: function (ele) {
    console.log('document createElement:::', ele);
    if(ele == 'canvas'){
      return watch(_canvas, 'canvas');
    }
    if(ele == 'script'){
      return watch(_script, 'script');
    }
    return {};
  },
  querySelector: function (ele) {
    console.log('document querySelector:::', ele);
    return null;
  },
  getElementsByTagName: function (ele) {
    console.log('document getElementsByTagName:::', ele);
      if(ele == 'head'){
        return [_head];
    }
  },
  createEvent: function (ele) {
    console.log('document createEvent:::', ele);
  }
}
document.__proto__ =  Document.prototype;
Document.prototype.querySelector = function (){};

_ts = Date.now()

function Storage() {};
localStorage = {
  getItem:function(k,v){
    console.log('localStorage getItem:::',k)
    if(k == 'WQ_gather_cv1'){
      return this['WQ_gather_cv1']
    }
    if(k == 'WQ_gather_wgl1'){
      return this['WQ_gather_wgl1']
    }
    if(k == 'WQ_dy1_vk'){
      return this['WQ_dy1_vk']
    }
    if(k == 'WQ_dy1_tk_algo'){
      return this['WQ_dy1_tk_algo']
    }
    return this[k] ? this[k]: null;
  },
  setItem:function(k,v){
    console.log('localStorage setItem:::',k, v)
    this[k] = "" + v;  // 将数字转为字符串
  },
  removeItem: function (k) {
        delete this[k]
    },
}
const loalData = {
    "dra_union_device": "b1c24523-05b8-4dc5-959d-1f6bd76c3a3e",
    "__we_m_cv__": "Y2FudmFzJTIwd2luZGluZyUzQXllc35jYW52YXMlMjBmcCUzQWJiMmQ4ZjdjMWU1OGIyNDI4YjBlYzViY2Q3ZjkyYTZj",
    "JDst_rac_nfd": `{\"v\":10,\"t\":${_ts},\"e\":31536000}`,
    "__we_m_ftk__": "OGJiNWE5YzkzYWI3Yzk3NzI0ZTlmMWM1MDEyOTVhMDQ=",
    "hf_time": "1748152527846",
    "__we_m_cf__": `{\"t\":${_ts},\"v\":\"qKovBzs7S_6Nb6Q1_7yBvz1SvAGxT4VbvsA5JDQiHM25uUlrbWKZFFiXachCpsqJgOQPJA_xoxpjA0h2dZlP-RYH2cKwYaYNyT5UvukWeNbC7wRqMZ0enaUIzY-GbhocQUSVdteFAxN9AeIPzfXXe4hgrbtQWyMIewkdpqVSh9sktViU-97geBWVNrbDYePVvyEd6hhzbkXA7MY_gs8sF22zS4fmVdk7GULtRvfzW2rjutfP55SD4WfIBRC6ua-c6yWMT-Up5jz6VGx4ZkraBuSpIFB-jQVsYS098FLKkgqNgQxjcaIVFVdjqd-6eRnW49iCeFU2VRq4ZQHnmsdNU8JC0Zf5Mg837XlfRDheV-IIPSlQS2EA7syxeRmt-RFJSnY7Pe-tKmYARvfYveXXtGHRmQ4Poi6xXSIgdVpgtMG9dgheo2sAL7UUo2vfKqPEAwqvPWgTldaC2Jpqg9mVS-FS2EyJEhDRDKwi9nMXxUMCkvSltsLwEzCSrNiGO6musB62VALesQWPFWqqYaxLlFmTwsEbriTklNhRWOxZQMWNouYXqwCre5G8Cq7eiX6WURmH45cVe0cjnADUdGfb7OO93PZcye-7cgD8-r0rcg1Zx_BH2tu_AYa-1jI1IbIf8-DETBR-KmEFxpXnbbKk_uaT4WWrkQ4VbyW09Pq7LT4D73FxuOOcew3LcNHUOOMT2fX1-rM5fuel1LavmrjtFNcYScmiN_koUJ79hb96IpjVFg5gnhgL2eJY_u5JUMLzP1xZ1RjDiCqWHaINyc2gCK2PhlD01qj4Anw6d0ZQ5B2PVGwXMLwKw3XwLOkE5FjzrcKR76fyKbnX4XtKl29aIdSVv9h1ioB3cnbG21_LRogma_gmkA5YTpC2g8hwFfHBqhs6Ydj-RsIi8E7JhxG6EZ7I_yZjyrBavC9njRucymMtPXn5Fnw2r2i_knG3lFNF8FSxmDMocwi-NAl9fxAEHbpP2s8RmJfrqIk98HkUuMZ0eBRU0Ds48uSov0fymnmCNZbDLKW2iPjkhMsZbs6l3w2Pmu_PsDgW5r9TYR-qZs4YMVtnXBQzNqi5mHq6P_sWdPWsfTCK1fG-ce-v3ZK_5cKwRo8BQSMZPF5WK3cmf47-f7RL2lqWZcLbs_IHsaHL5hl8kmUjn0vIZNzF3OKjU1W_VuuJlwKiJ8tvI2fwHgZJhfoLtUebbe9p1yLELJQxhdTtNah0W4hLX_DGD5aFaw6DIHaW6NHNsVVHSswasP8FdYI6XxNo77PGsk7tsyAH9-27oq63l0XCO5Snvx1HDn60WE4pnOzaL_xZoNchD9W7A0PJAm2O-hsic7sMC2Is5gcKNmOROyCN09zicz5g6M7cGHoaKAiLBkL66D1gcAOU5nWxzeTMR6jz5PxcrY6k5zDWuQN0LpTURynJNxM5XtXLIccdMY0B-4dp7grci8x7eVkBVc5Ai7TpGlYcBJ6qkYaAAoTYVOEVic6nG7ZXjPItJrqRwUH4g7hraYUUt7v0cg-JkBezgyZjEL0tgnc5wMJkryAAYBFl2Kn_FlexrWZ5h6GOhs2b847EtEuK_qMD5le2V0evgTkz2LgiWYQEtnpzf2HO83mc_ND1g-aoBpne5MuIsXOZ_yNIP3Zqlu9oUH_uMN1ZOts_6qr8hAoocm_j5I-rDyezTdz8E_x0m8SRDN5Hx97hByqixfZsFzuk2H3502gHMCMIUqxLRGPMggdLLfMz0EPdUOO2jMdl7VJM4ZOlKV2A5YsNjpYJG0UfiyNTA8i011h3JpcPGMPVT-7Kg7pEkqUeTmZVL6poQFF7fJDmWtLUGH-tvz0b87Z34JHIwz0mUJ80hj4CvCMgl92qUbAHT5x7uLsfhaBiWBRcPXXFZgn5DIQfBMCmkNIfQlZiPobsRzsxaCRCAl4sFOWgO60OzpL04bfb3n6GiW5CZYT3GqP1r9UvaKsstwfG871-16w-17awAGUulLOiDww1xeeN0NFHIAo10QuD8mKvRLd-XezwmKVZ8PNmsIulR9SRLUi1z8TOzv5kfS2Q9K0pAXS1cM16OzXRt2Qs0ewlBh6M1fAWPjgYgKLqScxdYHpybVqNIZ1jXolYozKDMcv7yIe6f2Xe1Vu67C90dbdOwtrS9SKDgseZxqv9ulDbm51wBnyuM1eSLySt5qA-3O76jdR7gOjceoUwJJEVby48WnH0Z5_tD2mygjaQw8k0HUTTLoAsN-f6BtqxaO1_THHIsDduxzIeIFRUy4F8v_XcmzkaLNvF8qyxTj92xSZoL3ZPUfUZ0QTgfPfWo9psf6ESBYx1o7aKxkTzz4P4yY17pKYplHWLvjkpQ8aX0jurr8cYfa37vIFfx1s48kO-SafJ1PErlBX8E2KfX8SY8l21Ro_ndrqzp-79QKY6aV6yB8YpoddA-4n89R80fuTpNJfGxfQ8qWdIFyoNbRPH_dkuu_SltpEWaiRGAyvgODnGnqV964qJvV2LnY-_cN9Cdu6D1_NdpDqWz0-5Lfr72rZK_aUO9aMR75ZnOvj9nU_Jh2mutVTEOaQlYnZLxIEJylMCWLqojSdCMlUy8PqGJSfpawnSqFHy6flDvy0upbtYcBJEgnH1mEg9nWFr_nqer4xle-3OyHa5YD9XcOAVBZgHqH9G7jCHpgg5C0oNojm81EMBIWOMii3OhQwfFOaoblau5WniNrOyfkYzLuolBEnAYjo2JTU4lH6aDIvITrhu2PnscyfA_Y6RmbjCHOkbQMeK7039WTNqQA9thD32qIqBPNYuhC92tw8IPqtrqzvzdsWvWWqMPXEq2VQQvEgeoZNhqQ-Ce2BahMvRmA5_j6-q3uaIZ3F3cpabarPBsum1bo384oIc_ry9DMiny-dnZk03gRu5OGXqEsLvu4mybDDE29gq_YNlPLFW_dS2NEObZm1eVgseyz-gixmlmN6-7RIIvlEhm027UkChZP3gH2ngJUNvux-f6X_ABO3urNp440Y2DH5Jwrijahsb4gmCpH8nCiE_SJrcyQvmvlzCK0pI_5TST-iLnZVcAzeJgBTyn7yJfNqsZJ93Z2QJt8B35ffEKFmyzS-rpp0cP487xiPYhwOSfASOiXsxu9peMls=\"}`,
    "__we_m_gl__": "ZnAlM0E4MzY2YzA4YmVmYTI4ODcxYWM2NWQ1ZjMzNmEwMzA1MX52ZW5kb3IlM0FXZWJLaXR+dmVyc2lvbiUzQVdlYkdMJTIwMS4wJTIwKE9wZW5HTCUyMEVTJTIwMi4wJTIwQ2hyb21pdW0pfnVubWFza2VkJTIwdmVuZG9yJTNBR29vZ2xlJTIwSW5jLiUyMChOVklESUEpfnVubWFza2VkJTIwcmVuZGVyZXIlM0FBTkdMRSUyMChOVklESUElMkMlMjBOVklESUElMjBHZUZvcmNlJTIwUlRYJTIwMzA3MCUyMCgweDAwMDAyNDg0KSUyMERpcmVjdDNEMTElMjB2c181XzAlMjBwc181XzAlMkMlMjBEM0QxMSk=",
    "WQ_gather_cv1": `{\"v\":\"644398c07e839d59c28568990bfe583c\",\"t\":${_ts},\"e\":31536000}`,
    "3AB9D23F7A4B3CSS": "jdd035GAOFUFEBJZBP65GJFFPNFOHRPL2GW3FFTM3KWMIX2OMGD6O6B6XMXQ4N5UC576OVVJNEV4ZFGCH4AJSIZXPWBFGFIAAAAMXAXAZNTIAAAAADFYAPSDKJ7UZK4X",
    "3AB9D23F7A4B3C9B": "5GAOFUFEBJZBP65GJFFPNFOHRPL2GW3FFTM3KWMIX2OMGD6O6B6XMXQ4N5UC576OVVJNEV4ZFGCH4AJSIZXPWBFGFI",
    "PCA9D23F7A4B3CSS": "8c96a0af2605a6a114db9ac1bb0143ba",
    "shshshfpb": "BApXS3n-1BvJAOBEcsaarcn3X0ttxfaU9BgpSQg5o9xJ1MsJRL462",
    "CA1AN5BV0CA8DS2EPC": "af8d95bf976d394b6483c58b81727e8b",
    "WQ_dy1_vk": `{\"5.1\":{\"73806\":{\"e\":31536000,\"v\":\"xxg3idwddamqq204\",\"t\":${_ts}},\"586ae\":{\"e\":31536000,\"v\":\"aazpx9aawpwpj3p3\",\"t\":1748134521210}}}`,
    "shshshfpx": "35cebf0c-43e1-45c6-cf1e-bbaccabb14e7-1748134521",
    "JDst_rac_last_update": `{\"v\":1748147878938,\"t\":${_ts},\"e\":31536000}`,
    "WQ_gather_wgl1": `{\"v\":\"cf90bb49a9dc20eba15910dcd34c0645\",\"t\":${_ts},\"e\":31536000}`,
    "shshshfpa": "35cebf0c-43e1-45c6-cf1e-bbaccabb14e7-1748134521",
    "PCTSD23F7A4B3CSS": "1748148478592",
    "__we_m_ft__": "QXJpYWwlMkNBcmlhbCUyMEJsYWNrJTJDQXJpYWwlMjBOYXJyb3clMkNBcmlhbCUyMFVuaWNvZGUlMjBNUyUyQ0Jvb2slMjBBbnRpcXVhJTJDQm9va21hbiUyME9sZCUyMFN0eWxlJTJDQ2FsaWJyaSUyQ0NhbWJyaWElMkNDYW1icmlhJTIwTWF0aCUyQ0NlbnR1cnklMkNDZW50dXJ5JTIwR290aGljJTJDQ2VudHVyeSUyMFNjaG9vbGJvb2slMkNDb21pYyUyMFNhbnMlMjBNUyUyQ0NvbnNvbGFzJTJDQ291cmllciUyQ0NvdXJpZXIlMjBOZXclMkNHYXJhbW9uZCUyQ0dlb3JnaWElMkNIZWx2ZXRpY2ElMkNJbXBhY3QlMkNMdWNpZGElMjBCcmlnaHQlMkNMdWNpZGElMjBDYWxsaWdyYXBoeSUyQ0x1Y2lkYSUyMENvbnNvbGUlMkNMdWNpZGElMjBGYXglMkNMdWNpZGElMjBIYW5kd3JpdGluZyUyQ0x1Y2lkYSUyMFNhbnMlMkNMdWNpZGElMjBTYW5zJTIwVHlwZXdyaXRlciUyQ0x1Y2lkYSUyMFNhbnMlMjBVbmljb2RlJTJDTWljcm9zb2Z0JTIwU2FucyUyMFNlcmlmJTJDTW9ub3R5cGUlMjBDb3JzaXZhJTJDTVMlMjBHb3RoaWMlMkNNUyUyMFBHb3RoaWMlMkNNUyUyMFNhbnMlMjBTZXJpZiUyQ01TJTIwU2VyaWYlMkNQYWxhdGlubyUyMExpbm90eXBlJTJDU2Vnb2UlMjBQcmludCUyQ1NlZ29lJTIwU2NyaXB0JTJDU2Vnb2UlMjBVSSUyQ1NlZ29lJTIwVUklMjBMaWdodCUyQ1NlZ29lJTIwVUklMjBTZW1pYm9sZCUyQ1NlZ29lJTIwVUklMjBTeW1ib2wlMkNUYWhvbWElMkNUaW1lcyUyQ1RpbWVzJTIwTmV3JTIwUm9tYW4lMkNUcmVidWNoZXQlMjBNUyUyQ1ZlcmRhbmElMkNXaW5nZGluZ3MlMkNXaW5nZGluZ3MlMjAyJTJDV2luZ2RpbmdzJTIwMw==",
    "WQ_dy1_tk_algo": `{\"aazpx9aawpwpj3p3\":{\"586ae\":{\"v\":\"eyJ0ayI6InRrMDN3YzgyYTFkM2UxOG5UMUlmeFo0b2x1ZXZRRnpHU2QzZ0FPSWZjUHluaXFNSmNRc2dXUC1POWFYdTVsTGdPXzJtMjZTWTFLa2Zqa0Z6Y3c0YndfckRLc3R4IiwiYWxnbyI6ImZ1bmN0aW9uIHRlc3QodGssZnAsdHMsYWksYWxnbyl7dmFyIHJkPSc2SjEwT3ZJUzF0WU0nO3ZhciBzdHI9XCJcIi5jb25jYXQodGspLmNvbmNhdChmcCkuY29uY2F0KHRzKS5jb25jYXQoYWkpLmNvbmNhdChyZCk7cmV0dXJuIGFsZ28uTUQ1KHN0cik7fSJ9\",\"e\":86400,\"t\":1748134521553}},\"xxg3idwddamqq204\":{\"73806\":{\"v\":\"eyJ0ayI6InRrMDN3YjE2MzFjNTcxOG5KNlFUbmppYmpia2o5ZWRkeU05TDFkeGRWOTZNZHgxMVVMY2ZmZWFOMzNLLVJOUHdseEtwQ0RoZGJPbkQwVUZGcUhTWG9Ka1NzaHQyIiwiYWxnbyI6ImZ1bmN0aW9uIHRlc3QodGssZnAsdHMsYWksYWxnbyl7dmFyIHJkPSdKNTcwWUJyeGp4Z00nO3ZhciBzdHI9XCJcIi5jb25jYXQodGspLmNvbmNhdChmcCkuY29uY2F0KHRzKS5jb25jYXQoYWkpLmNvbmNhdChyZCk7cmV0dXJuIGFsZ28uTUQ1KHN0cik7fSJ9\",\"e\":86400,\"t\":${_ts}}}}`
}

for(var key in loalData){
  localStorage.setItem(key, loalData[key]);
}
localStorage.__proto__ = Storage.prototype;
window.Storage = Storage;

function Screen() {};
screen = {
  width:1920,
  height:1080,
  colorDepth:24
}
window.Screen = Screen;
screen.__proto__ = Screen.prototype;

History = function(){};
history = new History();
window.History = History;


// Array.prototype.remove = function(e, t) {
//   console.log('Array.prototype remove:::', ele);
//   var n = e(this).call(this, (t || e) + 1 || this.length);
//   return this.length = e < 0 ? this.length + e : e,this.push.apply(this, n)
// }



