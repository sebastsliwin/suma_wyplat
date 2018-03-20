'use strict';

$(document).ready(function () {
    $('#count-sum').click(function () {
        var sumSalary = $('.salary');
        var wynik = 0;
        for (var i = 0; i < sumSalary.length; i++) {
            var changeStr = sumSalary[i].innerHTML;
            var valInt = parseInt(changeStr);
            var wynik = wynik += valInt;
        }
        $('#sum').text(wynik);
    });
});
