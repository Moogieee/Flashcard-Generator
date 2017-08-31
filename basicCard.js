var fs = require('fs');

function BasicCard(front, back) {
    this.front = front;
    this.back = back;

    this.createBasic = function() {
        var data = {
            front: this.front,
            back: this.back,
            type: 'basic'
        };

        fs.appendFile('log.txt', JSON.stringify(data) + ';', 'utf8', function(error) {
            if (err) {
                return console.log(err)
            }
        });
    };
}


module.exports = BasicCard;
