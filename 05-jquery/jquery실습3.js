// for (let i = 0; i <= 31; i++) {
//     if (i === 0) {
//         $('table').append('tr');
//         console.log(document.querySelector('.table'));
//         console.log($('table'));
//     } else if (i !== 0) {
//         // console.log(i);
//         $('tr').append('td');
//         $('tr').text(i);
//     } else if (i !== 0 && i % 7 === 0) {
//         console.log(i);
//         $('tr').append('table');
//         console.log(document.querySelector('table'));
//     }
// }

function writeSchedule() {
    const date = $('#date').val();
    const content = $('#content').val();
    console.log(date, content);

    for (let i = 0; i <= 35; i++) {
        if (i == date) {
            $('td')[i + 4].append(`${content}`);
        }
    }

    $('#date').val('');
    $('#content').val('');
}
