exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var re = /\w*\d\d\d/;
    if( str.match(re)){
        return true;
    }else{
        return false;
    }
  },

  containsRepeatingLetter: function(str) {
      var re = /([a-zA-Z])\1/;
      return Boolean(re.exec(str));
  },

  endsWithVowel: function(str) {
      var re = /\w[aeiouAEIOU]\b/;
        return Boolean(re.exec(str));
  },

  captureThreeNumbers: function(str) {
      var re = /\d\d\d/;
      var myArray = str.match(re);
      return myArray? myArray[0]:false;
  },

  matchesPattern: function(str) {
      var re = /\b\d\d\d[-]\d\d\d[-]\d\d\d\d\b/;
      return Boolean(re.exec(str));
  },

  isUSD: function(str) {
      var re = /^\$\d{1,3}([,]\d{3})*([.]\d{2})?$/;
      return Boolean(re.exec(str));
  }
};
