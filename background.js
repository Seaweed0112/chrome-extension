
$(document).ready(function(){
    var images=['chrome-extension://jpdfodmefjiaknbojfahbfkhhbbmnhpf/001.jpg','chrome-extension://jpdfodmefjiaknbojfahbfkhhbbmnhpf/002.jpg','chrome-extension://jpdfodmefjiaknbojfahbfkhhbbmnhpf/003.jpg','chrome-extension://jpdfodmefjiaknbojfahbfkhhbbmnhpf/004.jpg','chrome-extension://jpdfodmefjiaknbojfahbfkhhbbmnhpf/005.jpg','chrome-extension://jpdfodmefjiaknbojfahbfkhhbbmnhpf/006.jpg','chrome-extension://jpdfodmefjiaknbojfahbfkhhbbmnhpf/007.jpg'];
    var randomNumber = Math.floor(Math.random() * images.length);
    var bgImg =images[randomNumber]
    //console.log(bgImg)
    $('#fill_screen_image').attr('src', bgImg)
});

