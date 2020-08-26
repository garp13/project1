function dropdownX(x){
    var drop = document.getElementsByClassName(x)[0];
    drop.style.display == "block" ? (drop.style.display ='none') : (drop.style.display ='block')
    
}
function nav_responsive(){
    var r = document.getElementsByClassName('res')[0];
    if( r.style.display=="block")
    {
        r.style.display = "none";
    }
    else
    {
        r.style.display = "block";
    }
}
function check_contact(){
    var your_name = document.contact_form.your_name.value;
    var your_email = document.contact_form.your_email.value;
    if( your_email == "" || your_name== "")
        {
            document.getElementById("p_contact_form").style.display = "block";
            return false;
        }
        else
        {
            document.getElementById("p_contact_form").style.display = "none";
            return true;
        }
}
function check_account(){
    var your_name = document.account_form.your_name.value;
    var your_pass = document.account_form.your_pass.value;
    if( your_pass == "" || your_name== "")
        {
            document.getElementById("notify_account").style.display = "block";
            return false;
        }
        else
        {
            document.getElementById("notify_account").style.display = "none";
            return true;
        }
}
function check_email(){
    var email = document.register_form.your_email.value;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email=="" || !email.match(emailRegex))
    {
        document.getElementById("notify_account").style.display = "block";
        return false;
    }else
    {   
        document.getElementById("notify_account").style.display = "none";
        return true;
    }

}

function check_Reviews(){
    var cmt = document.reviews_form.comment.value;
    var author = document.reviews_form.author.value;
    var email = document.reviews_form.email.value;
    if (cmt == "" || author == "" || email == "")
    {
        alert("Please select a rating");
        return false;
    }  
    return true;
}
/*Product details */
function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /*create lens:*/
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
        var pos, x, y;
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();
        /*get the cursor's x and y positions:*/
        pos = getCursorPos(e);
        /*calculate the position of the lens:*/
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        /*prevent the lens from being positioned outside the image:*/
        if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
        if (x < 0) {x = 0;}
        if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
        if (y < 0) {y = 0;}
        /*set the position of the lens:*/
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        /*display what the lens "sees":*/
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /*get the x and y positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};
    }
}

/*************************Carousel*************************/

$(document).ready(function(){
    /*Produc details */
    $('.star-1').hover(function(){
        $('.star-1').addClass("checked_rating");
    },function(){
        $('.star-1').removeClass("checked_rating");
    })
    $('.star-2').hover(function(){
         
        $('.star-1').addClass("checked_rating");
        $('.star-2').addClass("checked_rating");
    },function(){
        $('.star-1').removeClass("checked_rating");
        $('.star-2').removeClass("checked_rating");
    })
    $('.star-3').hover(function(){
         
        $('.star-1').addClass("checked_rating");
        $('.star-3').addClass("checked_rating");
        $('.star-2').addClass("checked_rating");
    },function(){
        $('.star-1').removeClass("checked_rating");
        $('.star-3').removeClass("checked_rating");
        $('.star-2').removeClass("checked_rating");
    })
    $('.star-4').hover(function(){
         
        $('.star-1').addClass("checked_rating");
        $('.star-2').addClass("checked_rating");
        $('.star-3').addClass("checked_rating");
        $('.star-4').addClass("checked_rating");
       
    },function(){
        $('.star-1').removeClass("checked_rating");
        $('.star-2').removeClass("checked_rating");
        $('.star-3').removeClass("checked_rating");
        $('.star-4').removeClass("checked_rating");
    })
    $('.star-5').hover(function(){
        $('.star-1').addClass("checked_rating");
        $('.star-2').addClass("checked_rating");
        $('.star-3').addClass("checked_rating");
        $('.star-4').addClass("checked_rating");
        $('.star-5').addClass("checked_rating");
    },function(){
        $('.star-1').removeClass("checked_rating");
        $('.star-2').removeClass("checked_rating");
        $('.star-3').removeClass("checked_rating");
        $('.star-4').removeClass("checked_rating");
        $('.star-5').removeClass("checked_rating");
    })
    $('#description').click(function(){
        $('.text_des_re').css('display','block');
        $('.row_reviews').css('display','none');
        $('#description a').css('color',' #323232');
        $('#reviews a').css('color','#ababab');
    })
    $('#reviews').click(function(){
        $('.row_reviews').css('display','block');
        $('.text_des_re').css('display','none');
        $('#reviews a').css('color',' #323232');
        $('#description a').css('color','#ababab');
    })
    $('#description').hover(function(){
        $('#description a').css('color',' #323232');
    })
    $('#reviews').hover(function(){
        $('#reviews a').css('color',' #323232');
    })
    /*change image zoom */
    $('#item_img0').click(function(){
        $('#myimage').attr('src','http://demo.roadthemes.com/debaco/wp-content/uploads/2019/01/3products.jpg');
    })
    $('#item_img1').click(function(){
        $('#myimage').attr('src','http://demo.roadthemes.com/debaco/wp-content/uploads/2019/01/3-1products-150x150.jpg');
    })
    $('#item_img2').click(function(){
        $('#myimage').attr('src','http://demo.roadthemes.com/debaco/wp-content/uploads/2019/01/3products-150x150.jpg');
    })
    $('#item_img3').click(function(){
        $('#myimage').attr('src','http://demo.roadthemes.com/debaco/wp-content/uploads/2019/01/4-1products-150x150.jpg');
    })
    $('#item_img4').click(function(){
        $('#myimage').attr('src','http://demo.roadthemes.com/debaco/wp-content/uploads/2019/01/2products-150x150.jpg');
    })
    $('#item_img5').click(function(){
        $('#myimage').attr('src','http://demo.roadthemes.com/debaco/wp-content/uploads/2019/01/3products-150x150.jpg');
    })
    /* end Produc details */
    /**click menu reponsive */
    $('#search').click(function(){
        if($('#search input').css('display')=='none')
        {
            $('#search input').css('display','block');
            $('#search button').css('display','block');
            $('.res_ion').css('display','none');
            $('.mini_cart_inner').css('display','none');
        }
        else
        {
            $('#search input').css('display','none');
            $('#search button').css('display','none');
        }
    })
    $('#setting').click(function(){
        if($('.res_ion').css('display')=='none')
        {
            $('.res_ion').css('display','block');
            $('#search input').css('display','none');
            $('#search button').css('display','none');
            $('.mini_cart_inner').css('display','none');
        }
        else
        {
            $('.res_ion').css('display','none');
        }
    })
    $('#cart').click(function(){
        if($('.mini_cart_inner').css('display')=='none')
        {
            $('.mini_cart_inner').css('display','block');
            $('#search input').css('display','none');
            $('#search button').css('display','none');
            $('.res_ion').css('display','none');
        }
        else
        {
            $('.mini_cart_inner').css('display','none');
        }
    })
    /*Carousel */
    $('.new_trend_products').owlCarousel({
        loop:true,
        margin:33,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    });
    /*blog carousel */
    /**Blog carousel */
    $('.blog_carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.table_about1').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.product_details_carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        
        responsive:{
            0:{
                items:4

            },
            600:{
                items:4
            },
            1000:{
                items:4
                
            }
        }
    });

    $('.new_trend_products').hover(function(){
        $('.owl-carousel .owl-nav button').css('color','#999999');
    },function(){
        $('.owl-carousel .owl-nav button').css('color','#fff');
    });
    /**windows scroll */
    $(window).on("scroll",function(){
        if($(window).scrollTop()>150 && $(window).width()>768){
            $('nav').addClass('nav_scroll');
            $('#navbar_img_scroll').css({"margin-left":"158px","margin-top":"3px"});
            $('.navbar-right').css({"display":"none"});
            $('#nav_home #nav_mid').css({"margin-left":"496px","margin-top":"3px"})
        }
        else{
            $('nav').removeClass('nav_scroll');
            $('.navbar-right').css({"display":"inline-block"});
            $('#nav_home #nav_mid').css({"margin-left":"67px","margin-top":"27px"})
            if($(window).width()>768)
            {
                $('#navbar_img_scroll').css({"margin-left":"158px","margin-top":"27px"});
            }
            else
            {
                $('#navbar_img_scroll').css({'margin-top':'15px','margin-bottom':0,'margin-right':0,'margin-left':'118px'});
            }
        }
       
    });
    /**change icon */
    $('.res i').click(function(){
        if($(this).hasClass('fa-angle-right'))
        {
            $(this).addClass('fa-angle-down').removeClass('fa-angle-right');
        }else
        {
            $(this).addClass('fa-angle-right').removeClass('fa-angle-down');
        }
        
    })
    /*onclick cat */
    $('.cat_parent').click(function(){
        if($('.cat_children').css('visibility') == "hidden"){
            $('.cat_children').css({'visibility':'visible','height':'50px'});
            
        }else
        {
            $('.cat_children').css({'visibility':'hidden','height':'0'});
        }
    })
    /*dropdown about us */
    $('#table_span0').click(function(){
        $('#p_span0').css('display','block');
        $('#p_span1').css('display','none');
        $('#p_span2').css('display','none');
        $('#p_span3').css('display','none');
        $('#table_span0').addClass('table_span_active');
        $('#table_span1').removeClass('table_span_active');
        $('#table_span2').removeClass('table_span_active');
        $('#table_span3').removeClass('table_span_active');
    })
    $('#table_span1').click(function(){
        $('#p_span0').css('display','none');
        $('#p_span1').css('display','block');
        $('#p_span2').css('display','none');
        $('#p_span3').css('display','none');
        $('#table_span0').removeClass('table_span_active');
        $('#table_span1').addClass('table_span_active');
        $('#table_span2').removeClass('table_span_active');
        $('#table_span3').removeClass('table_span_active');
    })
    $('#table_span2').click(function(){
        $('#p_span0').css('display','none');
        $('#p_span1').css('display','none');
        $('#p_span2').css('display','block');
        $('#p_span3').css('display','none');
        $('#table_span0').removeClass('table_span_active');
        $('#table_span1').removeClass('table_span_active');
        $('#table_span2').addClass('table_span_active');
        $('#table_span3').removeClass('table_span_active');
    })
    $('#table_span3').click(function(){
        $('#p_span0').css('display','none');
        $('#p_span1').css('display','none');
        $('#p_span2').css('display','none');
        $('#p_span3').css('display','block');
        $('#table_span0').removeClass('table_span_active');
        $('#table_span1').removeClass('table_span_active');
        $('#table_span2').removeClass('table_span_active');
        $('#table_span3').addClass('table_span_active');
    })
    /*click dropdown shop */
    $('.dropdown_first').click(function(){
        if  ($('.dropdown_list').css('display') == 'none')
        {
            $('.dropdown_list').css('display','block');
        }
        else{
            $('.dropdown_list').css('display','none');
        }
    })
    /* end click dropdown shop */
    $('.img-zoom-lens').hover(function(){
        
        $('.img-zoom-result').css('display','block');
        

    },function(){
        $('.img-zoom-result').css('display','none');
    });
     /*resize */
    $(window).resize(function(){
        
        $('.res_ion').css({'display':'none'});
    
        if ($('body').width() < 769)
        {
            $('#navbar_img_scroll').css({'margin-top':'15px','margin-bottom':0,'margin-right':0,'margin-left':'118px'});
        }
    
    });
});

/*************************nav responsive*************************/
