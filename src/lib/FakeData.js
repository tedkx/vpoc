let now = new Date();
now.setHours(now.getHours() + Math.floor(Math.random() * 2));
now.setMinutes(now.getMinutes() + Math.floor(Math.random() * 60));

export const nextExpiringAuctionDate = now;

const insuranceCompanies = ['AnyTime', 'NN', 'Εθνική', 'Mondial'];
const types = ['imitation', 'new', 'used'];
const fuelTypes = ['gas', 'diesel', 'lpg'];
const codeLength = 20;
export const brands = ['Audi','Bmw','Citroen','Fiat','Ford','Hyundai','Mercedes-Benz','Nissan','Opel','Peugeot','Renault','Smart','Suzuki','Toyota','Volkswagen'];//'AC','Abarth','Acura','Aixam','Alfa Romeo','Alpina','Ariel','Asia Motors','Aston Martin','Audi','Austin Healey','Austin Morris','Austin Rover','Autobianchi','Bentley','Bmw','Brilliance','Bugatti','Buick','Cadillac','Casalini','Caterham','Chatenet','Chery','Chevrolet','China-Motors','Chrysler','Citroen','Club Car','Cobra','Corvette','DS','Dacia','Daewoo','Daihatsu','DeTomaso','Dodge','Ferrari','Fiat','Fisker','Ford','GAC Gonow','Gemballa','Gmc','Goupil','Grecav','Hamann','Honda','Hummer','Hyundai','Infiniti','Innocenti','Isuzu','Iveco','Jaguar','Jeep','Jensen Healey','Jiangling','KTM','Kia','Königsegg','Lada','Lamborghini','Lancia','Land Rover','Landwind','Lexus','Lifan','Ligier','Lincoln','Lotus','Mahindra','Maserati','Maybach','Mazda','McLaren','Mercedes-Benz','Mg','Microcar','Mini','Mitsubishi','Moretti','Morgan','Neptun','Nissan','Nsu','Opel','Panther','Peugeot','Piaggio','Plymouth','Pontiac','Porsche','Proton','Renault','Rolls Royce','Rover','Saab','Santana','Seat','Shuanghuan','Skoda','Smart','Spyker','SsangYong','Subaru','Suzuki','TVR','Talbot','Tata','Tazzari','Techart','Tesla','Toyota','Trabant','Triumph','Uaz','Ueec','Vauxhall','Volkswagen','Volvo','Wartburg','Westfield','Wiesmann','Zotye' ];

let generateAuctions = (count) => {
    let chars = [];
    for(var i = 48; i <= 57; i++)
        chars.push(String.fromCharCode(i));
    for(var i = 65; i <= 90; i++)
        chars.push(String.fromCharCode(i));

    if(typeof count !== 'number' || count <= 0)
        count = 100;

    var auctions = [];
    for(var i = 0; i < count; i++) {
        var code = '';
        for(var j = 0; j < codeLength; j++) {
            let idx = Math.floor(Math.random() * chars.length);
            if(idx >= chars.length)
                idx = chars.length - 1;
            code += chars[idx];
        }
        auctions.push(code);
    }

    return auctions.map(a => {
        let initialRoll = Math.floor(Math.random() * 100);
        let typeRoll = Math.floor(Math.random() * 5);
        let brandRoll = Math.floor(Math.random() * brands.length);
        let fuelRoll = Math.floor(Math.random() * fuelTypes.length);
        let insRoll = Math.floor(Math.random() * insuranceCompanies.length);

        let hoursRoll = Math.floor(Math.random() * 5),
            minsRoll = Math.floor(Math.random() * 60),
            daysRoll = Math.floor(Math.random() * 2);
        var expires = new Date();
        expires.setHours(expires.getHours() + hoursRoll);
        expires.setMinutes(expires.getMinutes() + minsRoll);
        expires.setDate(expires.getDate() + daysRoll);

        return {
            brand: brandRoll >= brands.length ? brands[brands.length - 1] : brands[brandRoll],
            expires,
            fuel: fuelRoll >= fuelTypes.length ? fuelTypes[fuelTypes.length - 1] : fuelTypes[fuelRoll],
            insuranceCompany: insRoll >= insuranceCompanies.length ? insuranceCompanies[insuranceCompanies.length - 1] : insuranceCompanies[insRoll],
            quantity: initialRoll % 3 == 0 ? Math.floor(Math.random() * 10) : 1, 
            partnumber: a, 
            total: Math.floor(Math.random() * 20) * 10, 
            type: typeRoll < 3 ? 'imitation'
                : typeRoll < 4 ? 'used'
                : 'new'
        }
    });
}

export const myAuctions = generateAuctions(12);
export const auctions = generateAuctions();