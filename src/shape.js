function luasPersegi(a, b){
    return a * b;
}

function kelilingPersegi(a, b){
    return (a*2) + (b*2);
}

function luasSegitiga(a, b){
    return 0.5 * a * b;
}

function kelilingSegitiga(a, b, c){
    return a + b + c;
}

function luasLingkaran(a){
    return 3.14 * (a**2);
}

function kelilingLingkaran(a){
    return 2 * 3.14 * a;
}

module.exports = {
    luasPersegi : luasPersegi,
    kelilingPersegi : kelilingPersegi,
    luasSegitiga : luasSegitiga,
    kelilingSegitiga : kelilingSegitiga,
    luasLingkaran : luasLingkaran,
    kelilingLingkaran : kelilingLingkaran,
}