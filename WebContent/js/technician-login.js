$(document).ready(function() {
	$(function()
  {
 $('.scroll-pane').jScrollPane();
  });
 $(function()
  {
    $('.scroll-pane').jScrollPane({
      autoReinitialise: true
    });

  });
  $('.inlineRadio1').click(function(){
    if (this.checked) {
        $('.inlineRadio').show();
    }
});
$('.inlineRadio2').click(function(){
    if (this.checked) {
        $('.inlineRadio').hide();
    }
});
  $('.inlineRadio1').click(function(){
    if (this.checked) {
        $('.addressInput').show();
    }
});
$('.inlineRadio2').click(function(){
    if (this.checked) {
        $('.addressInput').hide();
    }
});
$('.techmobilemenu button').click(function(){
    
        $('.leftMenuPane').toggleClass('open');
    
});


});

 /* validation ends */ 


/* Validation code for registration page */
$(function() {
  $("form[name='registrationForm']").validate({
	  
    rules: {
      fname: "required",
      lname: "required",
	 
	  email: {
        required: true,
        email: true
      },
	  password: {
        required: true,
        minlength: 5
      },
	  reenterpassword: {
        required: true,
        minlength: 5
      },
	   phonenumber: {
        required: true,
        minlength: 10,
		number: true ,
      }
	 
    },
    // Specify validation error messages
    messages: {
      fname: "Please enter your firstname",
	  lname: "please enetre your lastname",
	  selectfield: {
        required: "Please select  the option from the list."
      },
	   password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
	   reenterpassword: "Password do not match",
	  email: "Please enter a valid email address",
	  phonenumber:{
        required: "Please enter a valid phonenumber",
        minlength: "Your phonenumber must be at least 10 digits long",
		number:"phone number must be digits"
      }, 
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});


$(function() {
  $("form[name='companyRegistrationForm']").validate({
	  
    rules: {
      companyname: "required",
      Address: "required",
	  city: "required",
	  Country: "required",
	  Language: "required",
	  zipcode: "required",
	  website: "required",
	  email: {
      required: true,
      email: true
      },
	   Phone: {
        required: true,
        minlength: 10,
		number: true ,
      }
	  },
    // Specify validation error messages
    messages: {
      companyname: "Please enter your company name",
	  Address: "please fill the address",
	  city: "please fill the City",
	  Country: "please enetre your country",
	  Language: "please enetre the language",	  
	  email: "Please enter a valid email address",
	  Phone:{
        required: "Please enter a valid phonenumber",
        minlength: "Your phonenumber must be at least 10 digits long",
		number:"phone number must be digits"
      }, 
	  zipcode: "Please enter a valid zipcode",
	  website: "Please enter a valid website"
	  
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
	
  });
});


$(function() {
  $("form[name='profileForm']").validate({
	  
    rules: {
      firstName: "required",
      lastName: "required",
	  city: "required",
	  locationState: "required",
	  company: "required",
	  experience: "required",
	  specality: "required",
	  bays: "required",
	  brakejobs: "required",
	  email: {
      required: true,
      email: true
      },
	  password:{
		required: true,
        minlength: 5
	  },
	   phonenumber: {
        required: true,
        minlength: 10,
		number: true ,
      }
	  },
    // Specify validation error messages
    messages: {
      firstName: "Please enter your first name",
	  lastName: "Please enter your last name",
	  city: "please fill the City",
	  locationState: "please enter your location",	  
	  company: "please enter your company",	  
	  experience: "please enter your experience",	  
	  specality: "please enter your specality",	 
	  bays: "please enter your bays",	  	  
	  brakejobs: "please enter your jobs",
	  email: "Please enter a valid email address",
	   password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
	  phonenumber:{
        required: "Please enter a valid phonenumber",
        minlength: "Your phonenumber must be at least 10 digits long",
		number:"phone number must be digits"
      }, 
	  
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
	
  });
});


$(document).ready(function() {
  
  $(".login").click(function(e){
      $(".loginContentPane").toggle();
       e.stopPropagation();
  });

  $(".loginContentPane").click(function(e){
      e.stopPropagation();
  });

  $(document).click(function(){
      $(".loginContentPane").hide();
  });
  
  $('.bpiOnlineinlineRadio1').click(function(){
    if (this.checked) {
        $('.inlineRadio').show();
    }
});
});

 $(document).ready(function(){
        $(function () {
            $('#datetimepicker12').datetimepicker({
                inline: true,
                sideBySide: true
            });
        });
  
  });
  
$(function() {
  $("form[name='recoveraccount']").validate({
	  
    rules: {
  
	  password: {
        required: true,
        minlength: 5
      },
	  
	 confirmpassword: {
        required: true,
        minlength: 5
      }
    },
    // Specify validation error messages
    messages: {
	   password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
	  confirmpassword: {
        required: "Please re-enter the password",
        minlength: "password do not match"
      }
	   
	
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});
 
$(function() {
  $("form[name='forgotaccount']").validate({
	  
    rules: {
  
	  email: true
    },
    // Specify validation error messages
    messages: {
	   email:{
        required: "Please provide a password"
      }
},
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});

$(function() {
  $("form[name='shareidea']").validate({
	  
    rules: {
  
	  share: {
            required:true,
           
        },
		shareexp:{
            required:true,
            
        },
		shardetail:{
            required:true,
            
        },
		shareTrick :{
            required:true,
           
        }
    },
    // Specify validation error messages
    messages: {
	   share:{
        required: "Please share your idea to get rewards"
      },
	  shareexp:{
        required: "Please share your experience to get rewards"
      },
	  shardetail:{
        required: "Please share your details to get rewards"
      },
	  shareTrick:{
        required: "Please share your tricks to get rewards"
      }
},
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});
 
$(function() {
  $("form[name='loginform']").validate({
	  
    rules: {
  
	  password: {
        required: true,
        minlength: 5
      },
	  
	 uname: {
        required: true
      }
    },
    // Specify validation error messages
    messages: {
	   password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
	  uname: {
        required: "Please enter the user name"
      }
	   
	
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});
 
 $(document).ready(function() {
$('#easyPaginate').easyPaginate({
		paginateElement: '.testDiv',
		elementsPerPage: 1,
		effect: 'climb'
	});
	
	  

});

 
$(document).ready(function(){
	
$('.tricks tr').click(function(){
		$(".techUserTableList tr").removeClass('activeTr');
		$(this).addClass('activeTr');
	$(".desc").remove();
	
     $(this).append('<div class="desc"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p><p>deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate ?</p><p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p><div class="bottompane"><div class="select"><label>Action :</label><select><option value="SelectAwardStatus">Select Award Status</option><option value="reason">Rejected - Reason 1</option><option value="reason">Rejected - Reason 1</option><option value="pending">Pending Technical Review</option><option value="pendingpost">Awarded - Pending Post</option><option value="notpost">Awarded - NOT Posting</option><option value="posted">Awarded - Posted</option></select></div></div></div>');
 
	});
	
	});
	
  /*$(document).ready(function(){
	
$('.activeuser tr').click(function(){
		$(".activeuser tr").removeClass('activeTr');
		$(this).addClass('activeTr');
	$(".desc").remove();
	
     $(this).append('<div class="desc user"><img src="images/user.jpg"><span class="profile"><ul><li><h6>Mr. Jon Doe</h6></li><li>Auto Technician</li><li><i class="fa fa-envelope-o" aria-hidden="true"></i><p>jon.doe@garylangauto.com</p></li> </ul></span><span class="contact"><ul><li></li><li></li><li><i class="fa fa-phone" aria-hidden="true"></i><p>444-555-7546</p></li></ul></span><span class="points"><ul><li>Lifetime Points</li><li>Current Points</li><li>Pending Point</li></ul></span><span class="scores"><ul><li>5,000</li><li>2,500</li><li>1,000</li></ul></span></div>');
 


	});
	
	});*/




function rateAlert(id, rating)
{
    alert( 'Rating for '+id+' is '+rating+' stars!' );
}

$(function() {
    $( '.ratebox' ).raterater( { 
        submitFunction: 'rateAlert', 
        allowChange: true,
        starWidth: 15,
        spaceWidth: 5,
        numStars: 5,
    } );
}); 







$(document).ready(function(){
$('.eventCalendarBlock').yacal({
nearMonths: 1,
});
});


$(document).ready(function() {  
	  
	  $('.favouriteStart').on('change',function() {
          if( $(this).is(':checked') ) {
              $(this).closest('span').find('.fa-star').addClass('yellowIcon');
              
          }
		  else
			  {
				  $(this).siblings().removeClass('yellowIcon'); 
			  }
      });
	  
	  
});


