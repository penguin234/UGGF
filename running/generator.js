function randrange(a, b) {
    let seed = Math.random();
    seed *= (b - a);
    seed += a;
    seed -= seed % 1;
    return seed;
}


function RandomGenerate(modifier) {
    let index = randrange(0, modifier.content.length);
    return modifier.content[index];
}

function FixedGenerate(modifier) {
    return modifier.content;
}

function Generate(modifier) {
    if (modifier.type=="random") {
        return RandomGenerate(modifier);
    }
    if (modifier.type=="fixed") {
        return FixedGenerate(modifier);
    }
}