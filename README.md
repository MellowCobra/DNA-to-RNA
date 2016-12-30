# DNA-to-RNA
Very lightweight Node.js module for converting strings representing DNA strands into RNA and vice versa.
Meant to be used as a node.js package. Install using:
``` npm install dna-to-rna ```

## Usage

```javascript

var dtr = require("dna-to-rna");

var dna = "ACTG";
var rna = "ACUG";

var convertedRNA = dtr.DNAtoRNA(dna);
var convertedDNA = dtr.RNAtoDNA(rna);

```
