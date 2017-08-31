var fs = require('fs');

function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    //replace the hidden cloze with '___'
    this.clozeDeleted = this.text.replace(this.cloze, '___');
    
    this.createCloze = function() {
        var data = {
            text: this.text,
            cloze: this.cloze,
            clozeDeleted: this.clozeDeleted,
            type: 'cloze'
        };
        fs.appendFile('log.txt', JSON.stringify(data) + ';' + 'utf8', function(err) {
            if (err) {
                return console.log(err)
            }
        });
    };
}

module.exports = ClozeCard;