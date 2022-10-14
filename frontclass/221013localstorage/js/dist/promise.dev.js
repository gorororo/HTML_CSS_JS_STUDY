"use strict";

var addPrint = function addPrint(n, callback) {
  setTimeout(function () {
    var value = n + 1;
    console.log(value);
  }, 1);
};

addPrint(0, function (n) {
  addPrint(n, function (n) {
    addPrint(n, function (n) {
      addPrint(n, function (n) {
        addPrint(n, function (n) {
          addPrint(n, function (n) {
            console.log('작업 끝');
          });
        });
      });
    });
  });
});