let now = new Date();
now.setHours(now.getHours() + Math.floor(Math.random() * 2));
now.setMinutes(now.getMinutes() + Math.floor(Math.random() * 60));

export const nextExpiringAuctionDate = now;

export const myAuctions = [
    { quantity: 4, partnumber: 'KJHDFXNGOUSA', total: 200, type: 'imitation' },
    { quantity: 1, partnumber: 'UYXDNGSAKDYSA', total: 30, type: 'imitation' },
    { quantity: 1, partnumber: 'M*JYP*NPGOIUYA', total: 500, type: 'imitation' },
    { quantity: 1, partnumber: 'LKNHBLAHJSD', total: 115, type: 'new' },
    { quantity: 1, partnumber: 'POIJUHGOIUGOP', total: 150, type: 'imitation' },
    { quantity: 1, partnumber: 'SADFMLUSADFDSAF', total: 20, type: 'new' },
    { quantity: 1, partnumber: 'NCLKJHGFLDSIUGDS', total: 5, type: 'imitation' },
    { quantity: 10, partnumber: 'IUGFCLIDSF', total: 6, type: 'imitation' },
    { quantity: 1, partnumber: 'SJMGCMHDSFGDS', total: 123, type: 'new' },
    { quantity: 1, partnumber: 'CPUJGHFDSKGLHDSFG', total: 50, type: 'used' },
    { quantity: 1, partnumber: 'KCSAFNGLDSGHDSG', total: 48, type: 'used' },
];