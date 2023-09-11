"use strict";
(() => {
var exports = {};
exports.id = 63;
exports.ids = [63];
exports.modules = {

/***/ 1567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact_form)
});

;// CONCATENATED MODULE: external "@emailjs/browser"
const browser_namespaceObject = require("@emailjs/browser");
var browser_default = /*#__PURE__*/__webpack_require__.n(browser_namespaceObject);
;// CONCATENATED MODULE: external "react-icons/io5"
const io5_namespaceObject = require("react-icons/io5");
;// CONCATENATED MODULE: external "react-icons/tfi"
const tfi_namespaceObject = require("react-icons/tfi");
;// CONCATENATED MODULE: external "react-icons/sl"
const sl_namespaceObject = require("react-icons/sl");
;// CONCATENATED MODULE: ./theme.config.js
/** *************************************************************
 * Please refer to the Theme Options section in documentation   *
 ****************************************************************/ /**
 * Icons from react-icons: https://react-icons.github.io/react-icons
 */ 


/**
 * Main Menu Items
 */ const menu = [
    {
        name: "Home",
        slug: "/",
        Icon: tfi_namespaceObject.TfiHome,
        number: ""
    },
    {
        name: "Services",
        slug: "/services",
        Icon: sl_namespaceObject.SlBriefcase
    },
    {
        name: "Projects",
        slug: "/projects",
        Icon: sl_namespaceObject.SlTrophy
    },
    // {
    //   name: 'Home (2)',
    //   slug: '/index-2',
    //   Icon: TfiHome,
    //   number: 2,
    // },
    // {
    //   name: 'Home (3)',
    //   slug: '/index-3',
    //   Icon: TfiHome,
    //   number: 3,
    // },
    // {
    //   name: 'Home (4)',
    //   slug: '/index-4',
    //   Icon: TfiHome,
    //   number: 4,
    // },
    {
        name: "About",
        slug: "/about",
        Icon: sl_namespaceObject.SlUser
    },
    {
        name: "Articles",
        slug: "/blog",
        Icon: tfi_namespaceObject.TfiPencilAlt
    },
    {
        name: "Contact",
        slug: "/contact",
        Icon: sl_namespaceObject.SlEnvolope
    }
];
/**
 * Social Links under the Main Menu
 */ const social = [
    {
        name: "Twitter",
        url: "https://www.twitter.com/yulluone",
        Icon: io5_namespaceObject.IoLogoTwitter
    },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/',
    //   Icon: IoLogoInstagram,
    // },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/joshua-yullu-068042192/",
        Icon: io5_namespaceObject.IoLogoLinkedin
    }
];
/**
 * General configurations
 */ const config = {
    dateLocale: "en-US",
    dateOptions: {
        // dateOptions is passed to JavaScript's toLocaleDateString()
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
    },
    convertKit: {
        tipUrl: "https://fantastic-mover-3439.ck.page/products/blog"
    },
    contactForm: {
        inputs: __webpack_require__(1637),
        recipient: "yulluone@outlook.com",
        sender: "muuoyullu@gmail.com",
        subject: "EMAIL NOTIFICATION FROM WEBSITE"
    }
};
/**
 * MDX/Markdown configurations
 */ const mdxConfig = {
    publicDir: "public",
    pagesDir: "content",
    fileExt: ".md",
    collections: [
        "/blog",
        "/projects"
    ],
    remarkPlugins: [],
    rehypePlugins: []
};
/**
 * Global SEO configuration for next-seo plugin
 * https://github.com/garmeeh/next-seo
 */ const siteMetaData = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || "http://localhost:3000",
    authorName: "Joshua Yullu",
    siteName: "Joshua Yullu",
    defaultTitle: "Joshua Yullu Personal Site",
    titleTemplate: "Joshua Yullu | %s",
    description: "A fun site for an serious developer.",
    email: "yulluone@outlook.com",
    locale: "en_US",
    twitter: {
        handle: "@yulluone",
        site: "@yullu.me",
        cardType: "summary_large_image"
    }
};

;// CONCATENATED MODULE: ./pages/api/contact-form.js
/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and *
 * will be treated as an API endpoint instead of a page.        *
 ****************************************************************/ 

const templateId = process.env.EMAILJS_TEMPLATE_ID;
const publicKey = process.env.EMAILJS_PUBLIC_KEY;
const serviceId = process.env.EMAILJS_SERVICE_ID;
const contact = async (req, res)=>{
    const { email  } = req.body;
    const { recipient , sender , subject  } = config.contactForm || {};
    if (!recipient) {
        return res.status(400).json({
            error: "Missing [config.contactForm.recipient] property in theme options."
        });
    }
    if (!sender) {
        return res.status(400).json({
            error: "Missing [config.contactForm.sender] property in theme options."
        });
    }
    if (!email) {
        return res.status(400).json({
            error: "Missing email address. Please provide a correct email address."
        });
    }
    if (req.method !== "POST") {
        return res.status(405).send({
            error: "Request method is not allowed."
        });
    }
    const getHtmlBody = (body)=>{
        return Object.entries(body).map(([key, value])=>{
            if (typeof value === "string") {
                return `<b>${key}</b>: ${value}`;
            }
            if (typeof value === "boolean") {
                return value === true ? key : false;
            }
            if (typeof value === "object") {
                return `<b>${key}</b>: ${getHtmlBody(value)?.filter(Boolean).join(", ")}`;
            }
            return html;
        });
    };
    let html = getHtmlBody(req.body);
    if (Array.isArray(html)) {
        html = html.join("<br />");
    }
    let templateParams = {
        from: email,
        to: recipient,
        subject: subject,
        message_html: html
    };
    try {
        await browser_default().send("service_rjw3vcl", "template_401mfhj", templateParams, "b0kPS9olcVw_AvKtI");
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            error: error.message
        });
    }
    return res.status(200).json({
        error: ""
    });
};
/* harmony default export */ const contact_form = (contact);


/***/ }),

/***/ 1637:
/***/ ((module) => {

module.exports = JSON.parse('[{"legend":"Your contact information","columns":3,"fields":[{"type":"text","name":"first-name","placeholder":"First name","autoComplete":"given-name","required":true},{"type":"text","name":"last-name","placeholder":"Last name","autoComplete":"family-name","required":true},{"type":"text","name":"email","placeholder":"Email address","autoComplete":"email","inputType":"email","required":true},{"type":"text","name":"company","placeholder":"Company Name","autoComplete":"company"},{"type":"text","name":"phone","placeholder":"Phone Number","autoComplete":"phone"},{"type":"select","name":"country","autoComplete":"country-name","defaultValue":"Select Country","options":[{"label":"Afghanistan","value":"Afghanistan"},{"label":"Albania","value":"Albania"},{"label":"Algeria","value":"Algeria"},{"label":"Andorra","value":"Andorra"},{"label":"Angola","value":"Angola"},{"label":"Antigua and Barbuda","value":"Antigua and Barbuda"},{"label":"Argentina","value":"Argentina"},{"label":"Armenia","value":"Armenia"},{"label":"Australia","value":"Australia"},{"label":"Austria","value":"Austria"},{"label":"Azerbaijan","value":"Azerbaijan"},{"label":"Bahamas","value":"Bahamas"},{"label":"Bahrain","value":"Bahrain"},{"label":"Bangladesh","value":"Bangladesh"},{"label":"Barbados","value":"Barbados"},{"label":"Belarus","value":"Belarus"},{"label":"Belgium","value":"Belgium"},{"label":"Belize","value":"Belize"},{"label":"Benin","value":"Benin"},{"label":"Bhutan","value":"Bhutan"},{"label":"Bolivia","value":"Bolivia"},{"label":"Bosnia and Herzegovina","value":"Bosnia and Herzegovina"},{"label":"Botswana","value":"Botswana"},{"label":"Brazil","value":"Brazil"},{"label":"Brunei","value":"Brunei"},{"label":"Bulgaria","value":"Bulgaria"},{"label":"Burkina Faso","value":"Burkina Faso"},{"label":"Burundi","value":"Burundi"},{"label":"Cabo Verde","value":"Cabo Verde"},{"label":"Cambodia","value":"Cambodia"},{"label":"Cameroon","value":"Cameroon"},{"label":"Canada","value":"Canada"},{"label":"Central African Republic","value":"Central African Republic"},{"label":"Chad","value":"Chad"},{"label":"Chile","value":"Chile"},{"label":"China","value":"China"},{"label":"Colombia","value":"Colombia"},{"label":"Comoros","value":"Comoros"},{"label":"Congo","value":"Congo"},{"label":"Costa Rica","value":"Costa Rica"},{"label":"Cote d\'Ivoire","value":"Cote d\'Ivoire"},{"label":"Croatia","value":"Croatia"},{"label":"Cuba","value":"Cuba"},{"label":"Cyprus","value":"Cyprus"},{"label":"Czech Republic","value":"Czech Republic"},{"label":"Democratic Republic of the Congo","value":"Democratic Republic of the Congo"},{"label":"Denmark","value":"Denmark"},{"label":"Djibouti","value":"Djibouti"},{"label":"Dominica","value":"Dominica"},{"label":"Dominican Republic","value":"Dominican Republic"},{"label":"Ecuador","value":"Ecuador"},{"label":"Egypt","value":"Egypt"},{"label":"El Salvador","value":"El Salvador"},{"label":"Equatorial Guinea","value":"Equatorial Guinea"},{"label":"Eritrea","value":"Eritrea"},{"label":"Estonia","value":"Estonia"},{"label":"Eswatini","value":"Eswatini"},{"label":"Ethiopia","value":"Ethiopia"},{"label":"Fiji","value":"Fiji"},{"label":"Finland","value":"Finland"},{"label":"France","value":"France"},{"label":"Gabon","value":"Gabon"},{"label":"Gambia","value":"Gambia"},{"label":"Georgia","value":"Georgia"},{"label":"Germany","value":"Germany"},{"label":"Ghana","value":"Ghana"},{"label":"Greece","value":"Greece"},{"label":"Grenada","value":"Grenada"},{"label":"Guatemala","value":"Guatemala"},{"label":"Guinea","value":"Guinea"},{"label":"Guinea-Bissau","value":"Guinea-Bissau"},{"label":"Guyana","value":"Guyana"},{"label":"Haiti","value":"Haiti"},{"label":"Honduras","value":"Honduras"},{"label":"Hungary","value":"Hungary"},{"label":"Iceland","value":"Iceland"},{"label":"India","value":"India"},{"label":"Indonesia","value":"Indonesia"},{"label":"Iran","value":"Iran"},{"label":"Iraq","value":"Iraq"},{"label":"Ireland","value":"Ireland"},{"label":"Israel","value":"Israel"},{"label":"Italy","value":"Italy"},{"label":"Jamaica","value":"Jamaica"},{"label":"Japan","value":"Japan"},{"label":"Jordan","value":"Jordan"},{"label":"Kazakhstan","value":"Kazakhstan"},{"label":"Kenya","value":"Kenya"},{"label":"Kiribati","value":"Kiribati"},{"label":"Kuwait","value":"Kuwait"},{"label":"Kyrgyzstan","value":"Kyrgyzstan"},{"label":"Laos","value":"Laos"},{"label":"Latvia","value":"Latvia"},{"label":"Lebanon","value":"Lebanon"},{"label":"Lesotho","value":"Lesotho"},{"label":"Liberia","value":"Liberia"},{"label":"Libya","value":"Libya"},{"label":"Liechtenstein","value":"Liechtenstein"},{"label":"Lithuania","value":"Lithuania"},{"label":"Luxembourg","value":"Luxembourg"},{"label":"Madagascar","value":"Madagascar"},{"label":"Malawi","value":"Malawi"},{"label":"Malaysia","value":"Malaysia"},{"label":"Maldives","value":"Maldives"},{"label":"Mali","value":"Mali"},{"label":"Malta","value":"Malta"},{"label":"Marshall Islands","value":"Marshall Islands"},{"label":"Mauritania","value":"Mauritania"},{"label":"Mauritius","value":"Mauritius"},{"label":"Mexico","value":"Mexico"},{"label":"Micronesia","value":"Micronesia"},{"label":"Moldova","value":"Moldova"},{"label":"Monaco","value":"Monaco"},{"label":"Mongolia","value":"Mongolia"},{"label":"Montenegro","value":"Montenegro"},{"label":"Morocco","value":"Morocco"},{"label":"Mozambique","value":"Mozambique"},{"label":"Myanmar","value":"Myanmar"},{"label":"Namibia","value":"Namibia"},{"label":"Nauru","value":"Nauru"},{"label":"Nepal","value":"Nepal"},{"label":"Netherlands","value":"Netherlands"},{"label":"New Zealand","value":"New Zealand"},{"label":"Nicaragua","value":"Nicaragua"},{"label":"Niger","value":"Niger"},{"label":"Nigeria","value":"Nigeria"},{"label":"North Korea","value":"North Korea"},{"label":"North Macedonia","value":"North Macedonia"},{"label":"Norway","value":"Norway"},{"label":"Oman","value":"Oman"},{"label":"Pakistan","value":"Pakistan"},{"label":"Palau","value":"Palau"},{"label":"Palestine","value":"Palestine"},{"label":"Panama","value":"Panama"},{"label":"Papua New Guinea","value":"Papua New Guinea"},{"label":"Paraguay","value":"Paraguay"},{"label":"Peru","value":"Peru"},{"label":"Philippines","value":"Philippines"},{"label":"Poland","value":"Poland"},{"label":"Portugal","value":"Portugal"},{"label":"Qatar","value":"Qatar"},{"label":"Romania","value":"Romania"},{"label":"Russia","value":"Russia"},{"label":"Rwanda","value":"Rwanda"},{"label":"Saint Kitts and Nevis","value":"Saint Kitts and Nevis"},{"label":"Saint Lucia","value":"Saint Lucia"},{"label":"Saint Vincent and the Grenadines","value":"Saint Vincent and the Grenadines"},{"label":"Samoa","value":"Samoa"},{"label":"San Marino","value":"San Marino"},{"label":"Sao Tome and Principe","value":"Sao Tome and Principe"},{"label":"Saudi Arabia","value":"Saudi Arabia"},{"label":"Senegal","value":"Senegal"},{"label":"Serbia","value":"Serbia"},{"label":"Seychelles","value":"Seychelles"},{"label":"Sierra Leone","value":"Sierra Leone"},{"label":"Singapore","value":"Singapore"},{"label":"Slovakia","value":"Slovakia"},{"label":"Slovenia","value":"Slovenia"},{"label":"Solomon Islands","value":"Solomon Islands"},{"label":"Somalia","value":"Somalia"},{"label":"South Africa","value":"South Africa"},{"label":"South Korea","value":"South Korea"},{"label":"South Sudan","value":"South Sudan"},{"label":"Spain","value":"Spain"},{"label":"Sri Lanka","value":"Sri Lanka"},{"label":"Sudan","value":"Sudan"},{"label":"Suriname","value":"Suriname"},{"label":"Sweden","value":"Sweden"},{"label":"Switzerland","value":"Switzerland"},{"label":"Syria","value":"Syria"},{"label":"Tajikistan","value":"Tajikistan"},{"label":"Tanzania","value":"Tanzania"},{"label":"Thailand","value":"Thailand"},{"label":"Timor-Leste","value":"Timor-Leste"},{"label":"Togo","value":"Togo"},{"label":"Tonga","value":"Tonga"},{"label":"Trinidad and Tobago","value":"Trinidad and Tobago"},{"label":"Tunisia","value":"Tunisia"},{"label":"Turkey","value":"Turkey"},{"label":"Turkmenistan","value":"Turkmenistan"},{"label":"Tuvalu","value":"Tuvalu"},{"label":"Uganda","value":"Uganda"},{"label":"Ukraine","value":"Ukraine"},{"label":"United Arab Emirates","value":"United Arab Emirates"},{"label":"United Kingdom","value":"United Kingdom"},{"label":"United States","value":"United States"},{"label":"Uruguay","value":"Uruguay"},{"label":"Uzbekistan","value":"Uzbekistan"},{"label":"Vanuatu","value":"Vanuatu"},{"label":"Vatican City","value":"Vatican City"},{"label":"Venezuela","value":"Venezuela"},{"label":"Vietnam","value":"Vietnam"},{"label":"Yemen","value":"Yemen"},{"label":"Zambia","value":"Zambia"},{"label":"Zimbabwe","value":"Zimbabwe"}]}]},{"required":true,"legend":"What services do you need for your project?","columns":3,"fields":[{"type":"checkbox","name":"project-type[Website Development]","label":"Website Development"},{"type":"checkbox","name":"project-type[Marketing Strategy]","label":"B Evaluation"},{"type":"checkbox","name":"project-type[Branding Strategy]","label":"Branding"},{"type":"checkbox","name":"project-type[UI Design]","label":"UI Design"},{"type":"checkbox","name":"project-type[Website Migration]","label":"Website Migration"},{"type":"checkbox","name":"project-type[E-commerce Site]","label":"E-commerce Site"}]},{"legend":"How much is the anticipated budget?","columns":3,"fields":[{"type":"radio","name":"budget","value":"Less than $1,000","label":"Less than $1,000"},{"type":"radio","name":"budget","value":"$1,000 - $10,000","label":"$1,000 - $10,000"},{"type":"radio","name":"budget","value":"More than $10,000","label":"More than $10,000"}]},{"legend":"Tell me about your project","columns":1,"fields":[{"type":"textarea","name":"message","placeholder":"Project description","rows":3}]}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1567));
module.exports = __webpack_exports__;

})();