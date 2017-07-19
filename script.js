
$(function(){
// rotate code ======================================================================================
    var sectionIndex = ['home','projects','about','connect','home','projects','about','connect'];
    var links = {
        link02: 1,
        link03: 2,
        link04: 3
    }

    //adds class to show section
    $('#home').addClass('viewClass');

    //makes section shrink and fade away
    function disappear(sectionId){
        $('.row').css('visibility', 'hidden');
        $(sectionId).animate({
            width:'250px',
            height: '250px',
            left:'0',
            right: '0',
            top: '35%',
            margin: '0 auto'
        }).fadeOut(1000)
        $('.container').fadeOut(500);
        $('#box').fadeIn(500);
    }
    
    //makes new scetion appear
    function appear(sectionId){
        $(sectionId).fadeIn(1000).animate({
            width:'100%',
            height: '100vh',
            left:'0',
            right: '0',
            top: '0',
            margin: '0 auto'
        })
        $('#box').fadeOut(500);
        $('.container').fadeIn(500);
        setTimeout(function(){$('.row').css('visibility', 'visible'); }, 1500);
    }

    // roates the section box by adding rotate class
    function rotate(deg){
        setTimeout(function(){
            $('#box').addClass('rotate' + deg);
        }, 500)
    }

    // removes roate class
    function removeRotate(deg){
        setTimeout(function(){
            $('#box').removeClass('rotate' + deg);
        }, 2000)
    }

    //the function that runs everything when a link is clicked
    $('.link02, .link03, .link04').on('click', function(){
        var section = $(this).parent().attr('id');
        var nextIndex = sectionIndex.indexOf(section) + links[this.name];
        var nextSection = sectionIndex[nextIndex]
        disappear('#' + section);
        rotate(this.dataset.degrees);
        setTimeout(function(){ appear('#' + nextSection); }, 1000);
        removeRotate(this.dataset.degrees);
    });

// projects parallax code ======================================================================================
    var project = document.querySelector('.projects-row');

    var projectScroll = [
        {name: ".project01", value: 0},
        {name: ".project02", value: 200},
        {name: ".project03", value: 400},
        {name: ".project04", value: 600},
        {name: ".project05", value: 800},
        {name: ".project06", value: 1000},
    ]

    

    $(project).scroll(function(){
        for (var i = 0; i < projectScroll.length; i++){
            var nameValue = projectScroll[i].name;
            var scrollValue = projectScroll[i].value;
            if(project.scrollTop > scrollValue) {
                $(nameValue).addClass('viewElement');
            }
        }
    });    
});