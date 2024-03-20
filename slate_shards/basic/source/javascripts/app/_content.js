$(document).ready(function() {
    // adding anchor links for each heading
    var htypes = ['h1', 'h2']
    for (var i = 0; i < htypes.length; i++) {
        var headers = $('.content ' + htypes[i])
        for (var k = 0; k < headers.length; k++) {
            $('#'+headers[k].id).prepend('<a class="anchor" href="#' + headers[k].id + '"></a>')
        }
    }

    // adding .external class to each external link
    $('.content a').each(function() {
        if ($(this).attr('href').slice(0, 4) == "http") {
            $(this).addClass('external')
        }

    })
});