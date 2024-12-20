/** @type {import('next').NextConfig} */
const nextConfig = {

    productionBrowserSourceMaps: false,
    env: {

        NEXT_APP_API_URL: 'https://api.brahmikalp.com/api/',
        // NEXT_APP_API_URL: 'http://localhost:5001/api/',

        //main env

        NEXT_APP_URL: 'https://horsefirecapsules.com',
        NEXT_APP_API_KEY: 'pcsYsadxvQYLTPLQKZFNnDUhPjtYjKVCOPbigtVZOkWrragVRN',

        // HFO Blog
        NEXT_APP_URL_HFO: 'https://horsefirecapsules.com/hfo',
        NEXT_APP_API_KEY_HFO: 'heZVuNkPJbdHWyEXbvUhabbcxsMwLqDxkIrqUgorhYJoEYQXoe',

        // HFU Blog
        NEXT_APP_URL_HFU: 'https://horsefirecapsules.com/hfu',
        NEXT_APP_API_KEY_HFU: 'QXXGUjggeWEajqnvEMjlSieeNckeXfjOodmtXlDVNWkbjTtsHb',

        // HFV Blog
        NEXT_APP_URL_HFV: 'https://horsefirecapsules.com/hfv',
        NEXT_APP_API_KEY_HFV: 'QqesHvYkoqIfWNLKTfEDqSlhXokKydNgFfhBoCdPklZOGUrEEv',

        // HXT Blog
        NEXT_APP_URL_HXT: 'https://horsefirecapsules.com/hxt',
        NEXT_APP_API_KEY_HXT: 'zQxtMHayMyyEbiqmLbWbPncxCdQdxeiXPSzwNEeeMkGHWxlpYC',

        // HFT Blog
        NEXT_APP_URL_HFT: 'https://horsefirecapsules.com/hft',
        NEXT_APP_API_KEY_HFT: 'FRaCFgPWjXocODxKoSajMmhoMMLzHgwmuAFppQKWloAWYneOIi',

        // HFH Blog
        NEXT_APP_URL_HFH: 'https://horsefirecapsules.com/hfh',
        NEXT_APP_API_KEY_HFH: 'rztnhXiBEFSuUrCsgXFJqyWFNpDotBGkoIrrsnisPRKFycAwOo',

        // HFB Blog
        NEXT_APP_URL_HFB: 'https://horsefirecapsules.com/hfb',
        NEXT_APP_API_KEY_HFB: 'lEIEjFsczmbuTIoesqeAhWngHxHoBzUtsWpVFPfdVqiNzXgaei',


        // HFH Blog
        NEXT_APP_URL_HFLIP: 'https://horsefirecapsules.com/hflip',
        NEXT_APP_API_KEY_HFLIP: 'VkoKTtDOijWFIxNDtwaAiruolIgIHLdmzsyXVJTsILgFAYvFDf',

        NEXT_APP_URL_HFD: 'https://horsefirecapsules.com/hfd',
        NEXT_APP_API_KEY_HFD: 'uUaSNnaLAhgqdwsHDPlHGOqMnAGoQmwGJuxDMjyssDKBzrIKQo',

        NEXT_APP_URL_HFQ: 'https://horsefirecapsules.com/hfq',
        NEXT_APP_API_KEY_HFQ: 'DniBaDpvHAGpNwBwTXSnpZiOWAwydbVBNqrbaWVjqZtECTfKzQ',

        NEXT_APP_URL_HFKRT: 'https://horsefirecapsules.com/hfkrt',
        NEXT_APP_API_KEY_HFKRT: 'huFkdwiAokYgNyHkYGpqKGXMsQLDEsxDGMUgWkiBcqgxfdFNib',

        NEXT_APP_URL_HFKT: 'https://horsefirecapsules.com/hfkt',
        NEXT_APP_API_KEY_HFKT: 'KGQAnZVfJgbQfujsoIljzgqvNmILqnbisFIHSnmFQLtTrLSeLW',


        NEXT_APP_URL_HFKART: 'https://horsefirecapsules.com/hfkart',
        NEXT_APP_API_KEY_HFKART: 'CiuwscGKqqQmxGLEhjGeFzAOndKItsmacVmbHZPTGtHWNuOKNX',


        VITE_APP_URL_HKART: 'https://horsefirecapsules.com/hkart',
        VITE_APP_API_KEY_HKART: 'pwmEpJULGxMCcfhKxeJWhSkfvywLnroMLBvxfeloaYaEtzkJiZ',

        NEXT_APP_URL_HFP: 'https://horsefirecapsules.com/hfp',
        NEXT_APP_API_KEY_HFP: 'kkWOIDsGDFeyrGqwmjJMQhegGmcdNlBEjDVUOZbCJXtrAxgFgd',

        NEXT_APP_URL_BHF: 'https://horsefirecapsules.com/bhf',
        NEXT_APP_API_KEY_BHF: 'asCseYWptcOXIbKNSvdAETNaHrRsEtgUqrarqtQLhgfUwnKufp',

        NEXT_APP_URL_BHFKT: 'https://horsefirecapsules.com/bhfkt',
        NEXT_APP_API_KEY_BHFKT: 'swdOVeKMFfpoyAuAAohbnhkMzYRKDTryecyxqquFOaystdRutw',

        NEXT_APP_URL_HFS: 'https://horsefirecapsules.com/hfs',
        NEXT_APP_API_KEY_HFS: 'gQTDQICnqMGqwTxZancSWaMMaZbqiYOOUbbBieOBuWJJqkOmYi',

        NEXT_APP_URL_AHF: 'https://horsefirecapsules.com/ahf',
        NEXT_APP_API_KEY_AHF: 'PMyVvAraTgmbhebHdfqMswegEiFuuoYbohwmmMViWwivvtgVtm',

        NEXT_APP_URL_AHFKT: 'https://horsefirecapsules.com/ahfkt',
        NEXT_APP_API_KEY_AHFKT: 'oqHLNQOMXlZxIYbiGLYoAQUaisxrpxXCUsiWrZMdrYtGTdkplb',

        NEXT_APP_URL_HFE: 'https://horsefirecapsules.com/hfe',
        NEXT_APP_API_KEY_HFE: 'WCIfjCCPIVJHtxYOUMxbVHMfjEKKYiYyOSyYTVGByAUKxzMJqC',

        NEXT_APP_URL_HFK: 'https://horsefirecapsules.com/hfk',
        NEXT_APP_API_KEY_HFK: 'WdcIjRBvaINwqYCsPaCTpUYDPpXzORdskfEQHnKrmAgQeTDePJ',

        NEXT_APP_URL_HFM: 'https://horsefirecapsules.com/hfm',
        NEXT_APP_API_KEY_HFM: 'UivDZbwkEFQHflaCcvkIveOkkTxeqZXnzedZZBnmmOORGEyXWR',

        NEXT_APP_URL_CJHF: 'https://horsefirecapsules.com/cjhf',
        NEXT_APP_API_KEY_CJHF: 'yKQZQWibYTnkggRbyUWlbQmcvUkXkQLLqVheMXMJRZddLrRVCG',

        NEXT_APP_URL_HF01A: 'https://horsefirecapsules.com/hf01a',
        NEXT_APP_API_KEY_HF01A: 'jEzskacHOmFiZlVWaWIPqvMUWxPTJvULPOhShBaTEJIvWAjXPW',

        NEXT_APP_URL_HF069X: 'https://horsefirecapsules.com/hf069x',
        NEXT_APP_API_KEY_HF069X: 'WWXHeNSKDSpzObNXexWHyfIpyzqZqAsEFUGheChenALGDVJLiR',

        NEXT_APP_URL_HFCFLIP: 'https://horsefirecapsules.com/hfcflip',
        NEXT_APP_API_KEY_HFCFLIP: 'pzilnBvecHTpLOQawDsuigkjCGAMTrlSTIvjzYjIszqXZHIzas',

        // https://horsefirecapsules.com/hfc999x


        NEXT_APP_URL_HFCALPHA: 'https://horsefirecapsules.com/hfcalpha',
        NEXT_APP_API_KEY_HFCALPHA: 'qrYwbhUniKKCSWSamMhCamYetIOkvKmEhFHegtSYBmIHKBjTMp',

        NEXT_APP_URL_HFCBETA: 'https://horsefirecapsules.com/hfcbeta',
        NEXT_APP_API_KEY_HFCBETA: 'dltZLhdlnZHPSdGBeSjfWKRufuDVtBElVIHKyeEGtDRNMYWKqJ',




        NEXT_APP_URL_HF71C: 'https://horsefirecapsules.com/hf71c',
        NEXT_APP_API_KEY_HF71C: 'jNpOgHUdjmViXtRHvoLeDZgrKHuyyddqcOMMiSDjjcIrwnYkrX',

        NEXT_APP_URL_HF99C: 'https://horsefirecapsules.com/hf99c',
        NEXT_APP_API_KEY_HF99C: 'CDenwQzBQCRbiuRViXSdnGfQtSukUiqUxamfqyHyXjJJZIpZoS',

        NEXT_APP_URL_HFCVT: 'https://horsefirecapsules.com/hfcvt',
        NEXT_APP_API_KEY_HFCVT: 'FIUGGQGSBCeAPeftEuZcugikZmuubgBIwgkrdbJQpLPzAOSqHN',

        NEXT_APP_URL_HFCSO: 'https://horsefirecapsules.com/hfcso',
        NEXT_APP_API_KEY_HFCSO: 'hQYnlOKSPKkmpBWqTCVbjoJDKWgaXBCiXLpFZTqRlwvYiWoxbQ',

        NEXT_APP_URL_HFCSP: 'https://horsefirecapsules.com/hfcsp',
        NEXT_APP_API_KEY_HFCSP: 'xqeQjXxHJjWmsEWDYUHtPFBOGCPUDHHUKdJOzOUPZwESaidrWw',

        NEXT_APP_URL_HFCOPT: 'https://horsefirecapsules.com/hfcopt',
        NEXT_APP_API_KEY_HFCOPT: 'cbAyqdEJQaSHsWcgnwuTVwsXtKazfXDPyiqBkSvMWmLkQsPjGp',

        NEXT_APP_URL_HF99N: 'https://horsefirecapsules.com/hf99n',
        NEXT_APP_API_KEY_HF99N: 'zBXViMFiCvwUHeSfoeycVklOaduMynymFjpYkcBdgoWbMPyLRi',

        NEXT_APP_URL_HF69H: 'https://horsefirecapsules.com/hf69h',
        NEXT_APP_API_KEY_HF69H: 'WfpezUtdKEnVkGstcAqEvOMaCOdRaxlrzOehbfIisDzIeSMsbt',

        NEXT_APP_URL_HFC69F: 'https://horsefirecapsules.com/hfc69f',
        NEXT_APP_API_KEY_HFC69F: 'weOJlWPrQPqCOffwQChRxRyEMWZLcQbVZTvsKUEMgOcfsxdvvF',

        NEXT_APP_URL_HFC01FDOC: 'https://horsefirecapsules.com/hfc01fdoc',
        NEXT_APP_API_KEY_HFC01FDOC: 'GMjwlfIFPWnLnTwLfPFFQjLveToCzperhNEtuoRQRQrqySmjyo',

        NEXT_APP_URL_HFCHCP: 'https://horsefirecapsules.com/hfchcp',
        NEXT_APP_API_KEY_HFCHCP: 'RZVyEWAuGAcjSJOnEAzkCXlLuwYofGCzzXzQHAFzltvMZZGOfk',

        NEXT_APP_URL_HFCCAT: 'https://horsefirecapsules.com/hfccat',
        NEXT_APP_API_KEY_HFCCAT: 'DUUmJapVClXyQcDCdtOuLcSQPSdlMoJTsTXpogUFYrKiBHsgxl',

        NEXT_APP_URL_HFCWB: 'https://horsefirecapsules.com/hfcwb',
        NEXT_APP_API_KEY_HFCWB: 'gpoOrfzxDDroTvKUuyFWYYEdUzrfAhVbcrpbirKJLfzENqyhEg',

        NEXT_APP_URL_HFCPILE: 'https://horsefirecapsules.com/hfcpile',
        NEXT_APP_API_KEY_HFCPILE: 'MWSMqbBrFYOqslsmMKHlkLuwhhUrSBgyNOupayWqFyVSXPHrvY',

        NEXT_APP_URL_HFCLUM: 'https://horsefirecapsules.com/hfclum',
        NEXT_APP_API_KEY_HFCLUM: 'osHXtniHdwnJBVGpTOyMBCmqJWrXqPRlkkUFNDYXqtcyGhKmcD',

        NEXT_APP_URL_HFCOPSM: 'https://horsefirecapsules.com/hfcopsm',
        NEXT_APP_API_KEY_HFCOPSM: 'bLTpNfEGENcsYCaayZXmwoShuBXqyjzHDPkzavHtQdeRMLGMmA',

        NEXT_APP_URL_HFCGWHIZ: 'https://horsefirecapsules.com/hfcgwhiz',
        NEXT_APP_API_KEY_HFCGWHIZ: 'pmJYFgZNFleZkQimGmcNCNZOdynHDUasqHrQlbgrFHsxHXcJsu',

        NEXT_APP_URL_HFCNWHIZ: 'https://horsefirecapsules.com/hfcnwhiz',
        NEXT_APP_API_KEY_HFCNWHIZ: 'JEYLReGkUTRwCsoFBWVsjrvvkciJmlIWTIcvmuyVWmZDtUnorW',

        // https://horsefirecapsules.com/hfncw

        NEXT_APP_URL_HFNCW: 'https://horsefirecapsules.com/hfncw',
        NEXT_APP_API_KEY_HFNCW: 'kZDjxhPFgZXjxTWUSPdxggQREmgVatiSNdDiaFJFrluuwgHCaG',

        //https://horsefirecapsules.com/hfncf


        NEXT_APP_URL_HFNCF: 'https://horsefirecapsules.com/hfncf',
        NEXT_APP_API_KEY_HFNCF: 'PlwPWMkLgXMsjbYhEbQHapBULxMKsEoxUZiJFrCpnDpvAVJdPi',

        NEXT_APP_URL_HFC99FLIP: 'https://horsefirecapsules.com/hfc99flip',
        NEXT_APP_API_KEY_HFC99FLIP: 'ovneubQmlzxMIKtixIjxmYEzeZHuRMIjYrvtXIvFFiWdzxwaXZ',

        NEXT_APP_URL_HFCSTORY1: 'https://horsefirecapsules.com/hfcstory1',
        NEXT_APP_API_KEY_HFCSTORY1: 'ZgRbjzAEolMsWLujyOwXctVejYBJUgsmWzfiPtHhQicssxOJcc',


        NEXT_APP_URL_HFCX1F: 'https://horsefirecapsules.com/hfcx1f',
        NEXT_APP_API_KEY_HFCX1F: 'CBImQPRDGPihicRJQtmyCMPovlYMygKxZlssmqWTkCPwOwODEC',

        NEXT_APP_URL_HFC1BEST: 'https://horsefirecapsules.com/hfc1best',
        NEXT_APP_API_KEY_HFC1BEST: 'rJvntNWPbnDSDXdCzkJryuBiHUcgcjfllVpMMSmMDpOovwBrft',

        
        NEXT_APP_URL_HFCWELL: 'https://horsefirecapsules.com/hfcwell',
        NEXT_APP_API_KEY_HFCWELL: 'uvglrcPWMAqcNEPsWIewWRtrHxXZxfCbhpuIiOloFmPJoAeaiK',

        NEXT_APP_URL_HFCJD69: 'https://horsefirecapsules.com/hfcjd69',
        NEXT_APP_API_KEY_HFCJD69: 'iYLfhPTKCjUSAuMEBtYwsLMVqAVChaoVGKaEULqkChacRUCRFc',

        NEXT_APP_URL_HFCRAZF: 'https://horsefirecapsules.com/hfcrazf',
        NEXT_APP_API_KEY_HFCJD69: 'pVdjElXMPmsnCwGwlYsWOInYRcSpkrhmPQuJduBgkyvxKnqnmR',


    },
    experimental: {
        webVitalsAttribution: ['CLS', 'LCP'],
        optimizeCss: true

    },


    //--------------------------------------------------------------------------------------------------

    webpack(config, { dev, isServer }) {

        // Code splitting
        config.optimization.splitChunks.cacheGroups = {
            default: false,
            vendors: false,
        };

        config.optimization.splitChunks.chunks = 'async';
        config.optimization.splitChunks.minSize = 20000;
        config.optimization.splitChunks.maxAsyncRequests = 5;
        config.optimization.splitChunks.maxInitialRequests = 3;

        //Only minimize the bundle in production
        if (!dev && !isServer) {
            config.optimization.minimize = true;
            config.optimization.concatenateModules = true;
            config.optimization.usedExports = true;
        }


        if (!dev) {
            config.devtool = false;
          }
        return config;
    },

    //--------------------------------------------------------------------------------------------------
    images: {
        unoptimized: true,
        minimumCacheTTL: 60
    },
    trailingSlash: true,

    output: "export",
    reactStrictMode: false

}

module.exports = nextConfig;
