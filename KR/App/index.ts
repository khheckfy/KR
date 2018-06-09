//import 'poper';
import * as $ from "jquery";
import 'bootstrap';

$(function () {
    $('#btnShowCards').click(function () {
        $('#img1,#img2,#img3,#img4,#btnShowCards').remove();
        let data: string = '';
        for (let i = 1; i <= 51; i++) {
            data += '<div class="col-md-3 col-sm-4 col-xs-6 order-2">';
            data += '   <img class="img-fluid" src="/img/cards/' + i + '.jpg">';
            data += '</div>';
        }
        $('#cards').append(data);
    });
})