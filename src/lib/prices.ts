// import {err} from './notify';
//
// interface PriceConfig {
//     prices: Map<string, Map<string, number>>,
//     cheap: Set<string>,
//     veryCheap: Set<string>,
//     rules: {
//         regular: Map<string, Map<string, string>>,
//         commemorative: Map<string, Map<string, string>>,
//         fallback: Map<string, string>
//     }
// }
//
//
// export function getPrice(config: PriceConfig, country: string, name: string, subject: string, year: string, q: string, comment: string, price: string) {
//     const {prices, cheap, veryCheap, rules: {regular, commemorative, fallback}} = config;
//
//     if (comment.includes('NP')) {
//         return false;
//     }
//
//     if (comment.includes('aUNC')) {
//         q = 'AU';
//     } else if (comment.includes('XF++')) {
//         q = 'XF2';
//     } else if (comment.includes('XF+')) {
//         q = 'XF1';
//     } else if (comment.includes('VF+')) {
//         q = 'VF1';
//     }
//     if (q === 'PRF') {
//         q = 'BU';
//     }
//
//     let alias;
//     if (subject) {
//         let flag;
//
//         if (veryCheap.has(country)) {
//             flag = commemorative.veryCheap;
//         } else if (cheap.has(country)) {
//             flag = commemorative.cheap;
//         } else {
//             flag = commemorative.common;
//         }
//
//         if (flag) {
//             alias = `${name} ${flag}`.trim();
//         }
//         name = `${name} *`;
//     } else {
//         let mapping;
//
//         if (veryCheap.has(country)) {
//             mapping = regular.veryCheap || regular['very-cheap'];
//         } else if (cheap.has(country)) {
//             mapping = regular.cheap;
//         } else {
//             mapping = regular.common || regular[''];
//         }
//
//         if (mapping && mapping.has(q)) {
//             q = mapping.get(q);
//         }
//     }
//
//     const nameVariants = [];
//     if (subject) {
//         if (alias && alias !== name) {
//             nameVariants.unshift(
//                 `${country} ${alias} ${subject} ${year}`,
//                 `${country} ${name} ${subject} ${year}`,
//                 `${country} ${alias} ${subject}`,
//                 `${country} ${name} ${subject}`,
//                 `${country} ${alias} ${year}`,
//                 `${country} ${name} ${year}`,
//                 `${country} ${alias}`,
//                 `${country} ${name}`,
//                 `${alias} ${subject} ${year}`,
//                 `${name} ${subject} ${year}`,
//                 `${alias} ${subject}`,
//                 `${name} ${subject}`,
//                 `${alias} ${year}`,
//                 `${name} ${year}`,
//                 alias,
//                 name);
//         } else {
//             nameVariants.unshift(
//                 `${country} ${name} ${subject} ${year}`,
//                 `${country} ${name} ${subject}`,
//                 `${country} ${name} ${year}`,
//                 `${country} ${name}`,
//                 `${name} ${subject} ${year}`,
//                 `${name} ${subject}`,
//                 `${name} ${year}`,
//                 name);
//         }
//     } else {
//         nameVariants.unshift(
//             `${country} ${name} ${year}`,
//             `${country} ${name}`,
//             `${name} ${year}`,
//             name);
//     }
//
//     for (; fallback && q;) {
//         for (let nameVariant of nameVariants) {
//             const pp = getQPrice(nameVariant);
//             if (pp !== false) {
//                 return pp;
//             }
//         }
//
//         if (!fallback.has(q)) {
//             return false;
//         }
//
//         q = fallback.get(q);
//     }
//
//     return false;
//
//     function getQPrice(name: string) {
//         if (!prices.has(name)) {
//             return false;
//         }
//
//         const pn = prices.get(name);
//         if (!pn.has(q)) {
//             return false;
//         }
//
//         const pp = +pn.get(q);
//         return (pp < +price) ? price : pp.toFixed(2);
//     }
// }
//
// export function getPriceConfig(): PriceConfig {
//     const config = JSON.parse(localStorage.ucoinSwapPrices);
//     if (!config) {
//         err('config not found');
//         return null;
//     }
//
//     if (!config.prices) {
//         err('prices not found');
//         return null;
//     }
//
//     const map: Map<string, Map<string, number>> = new Map(Object.entries(config.prices));
//     for (const [name, prices] of map.entries()) {
//         map.set(name, new Map(Object.entries(prices)));
//     }
//
//     return {
//         prices: map,
//         cheap: new Set(config.cheap || []),
//         veryCheap: new Set(config.veryCheap || config['very-cheap'] || []),
//         rules: {
//             regular: new Map(config.rules && config.rules.regular ? Object.entries(config.rules.regular) : []),
//             commemorative: new Map(config.rules && config.rules.commemorative ? Object.entries(config.rules.commemorative) : []),
//             fallback: new Map(config.rules && config.rules.fallback ? Object.entries(config.rules.fallback) : []),
//         },
//     };
// }