
$("button").on("click", function () {
    var person1 = Math.floor(Math.random() * 3) + 1;
    console.log(person1, "キャラ1の手札");
    var person2 = Math.floor(Math.random() * 3) + 1;
    console.log(person2, "キャラ2の手札");

    // 1はグー、2はパー、3はチョキ

    if (person1 === 1) {
        // person1のclassであるperson1 - imageがグー
        // JQueryを使ってどうやって背景画像を入れ替えるのか？
        $('.person1-image').css('background-image', 'url(img/paper.jpg)');
    } else if (person1 === 2) {
        $('.person1-image').css('background-image', 'url(img/scissor.jpg)');
    } else if (person1 === 3) {
        $('.person1-image').css('background-image', 'url(img/rock.jpg)');
    }

    if (person2 === 1) {
        // person1のclassであるperson1 - imageがグー
        // JQueryを使ってどうやって背景画像を入れ替えるのか？
        $('.person2-image').css('background-image', 'url(img/paper.jpg)');
    } else if (person2 === 2) {
        $('.person2-image').css('background-image', 'url(img/scissor.jpg)');
    } else if (person2 === 3) {
        $('.person2-image').css('background-image', 'url(img/rock.jpg)');
    }

    // 勝敗

    if (person1 === person2) {
        $('.result').text('引き分け')
    } else if (
        (person1 === 1 && person2 === 3) ||
        (person1 === 2 && person2 === 1) ||
        (person1 === 3 && person2 === 2)
    ) {
        $('.result').text('勝ち')
    } else {
        $('.result').text('負け')
    }
})    