$(document).ready(function(){
    var options = {
        nextButton: true,
        prevButton: true,
        pagination: true,
        animateStartingFrameIn: true,
        autoPlay: true,
        autoPlayDelay: 3000,
        preloader: true,
        preloadTheseFrames: [1],
        preloadTheseImages: [
            "../../Content/img/sequence/tn-model1.png",
            "../../Content/img/sequence/tn-model2.png",
            "../../Content/img/sequence/tn-model3.png"
        ]
    };
    
    var mySequence = $("#sequence").sequence(options).data("sequence");
});