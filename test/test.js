var assert = require("assert");

describe("DNA to RNA", function() {
    var dtr = require("./../index.js");

    it("converts to dna", function() {
        var dna = "ACTG";
        assert.equal("ACUG", dtr.DNAtoRNA(dna));
    });

    it("converts to rna", function() {
        var rna = "ACUG";
        assert.equal("ACTG", dtr.RNAtoDNA(rna));
    });
});
