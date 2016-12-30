exports.DNAtoRNA = function(dna) {
    return dna.toUpperCase().replace('T', 'U');
};

exports.RNAtoDNA = function(rna) {
    return rna.toUpperCase().replace('U', 'T');
};
