$(function () {


    /*$('#example').DataTable( {
    ordering: false
    } );

    $('#myCreateTournaments').DataTable();
    $('#myJoinTournaments').DataTable();
    $('#finishTournaments').DataTable();
    $('#upcomingTournaments').DataTable();
    $('#ongoingTournaments').DataTable();
    */

//$upcomingTournaments $ongoingTournaments

    var log = function($log) {
        //console.log($log)
    }

    $(".nav-item").on("click", function () {
        $(".scrollable-container").width(580);
        $(".scrollable-content").width(563);
    });


    $(".show-modal").on("click", function () {
        $(".scrollable-container").width(577);
        $(".scrollable-content").width(560);
    });

    $(".post-share").on("click", function () {
        $(".scrollable-container").width(577);
        $(".scrollable-content").width(560);
    });

    $("span.following").click(function () {

        $(this).css("background-color", '#76838f');
        $(this).css("border-color", '#76838f');
        $(this).css("padding", '5px 10px');
        $(this).text('Following');
    });


    function showUrlInput(code) {

        if (code == "y-feed") {
            document.getElementById("video_url").style.display = "inline-block";
            document.getElementById("video_url").disabled = false;

            document.getElementById('twitch_url').value = "";
            document.getElementById("twitch_url").style.display = "none";
            document.getElementById("twitch_url").disabled = true;
        } else if (code == "t-feed") {
            document.getElementById("twitch_url").style.display = "inline-block";
            document.getElementById("twitch_url").disabled = false;

            document.getElementById('video_url').value = "";
            document.getElementById("video_url").style.display = "none";
            document.getElementById("video_url").disabled = true;
        }

        if (code == "y") {
            document.getElementById("video_url_tab_tournament_youtube").style.display = "inline-block";
            document.getElementById("video_url_tab_tournament_youtube").disabled = false;

            document.getElementById('video_url_tab_tournament_twitch').value = "";
            document.getElementById("post-feed-video-tab-tournament").disabled = true;
            document.getElementById("video_url_tab_tournament_twitch").style.display = "none";
            document.getElementById("video_url_tab_tournament_twitch").disabled = true;
        } else if (code == "t") {
            document.getElementById("video_url_tab_tournament_twitch").style.display = "inline-block";
            document.getElementById("video_url_tab_tournament_twitch").disabled = false;

            document.getElementById('video_url_tab_tournament_youtube').value = "";
            document.getElementById("post-feed-video-tab-tournament").disabled = true;
            document.getElementById("video_url_tab_tournament_youtube").style.display = "none";
            document.getElementById("video_url_tab_tournament_youtube").disabled = true;

        }
    }


// document.getElementById('file').onchange = function() {
//     document.getElementById("video").disabled = true;
//     document.getElementById("twitch").disabled = true;
//     isEmpty = 0;
//     document.getElementById("image-file").innerHTML = document.getElementById('file').files.length + " files uploaded ";
//     document.getElementById("image-file").style.display="block";
//     document.getElementById("post-feed").disabled = false;
// };

// =====================================================
// ==           POST YOUTUBE & TWICH FUNCTION         ==
// =====================================================

    function isNotEmpty() {
        var text = document.getElementById("text").value;
        var image = document.getElementById('file').files.length;
        var video = document.getElementById('video_url').value;
        var twitch = document.getElementById("twitch_url").value;

        if (text.length == 0 && isEmpty == 1 && video.length == 0 && twitch.length == 0) document.getElementById("post-feed").disabled = true;
        else document.getElementById("post-feed").disabled = false;

    }

    function isNotEmptyTournament() {
        var text = document.getElementById("text_video_tour").value;
        var video = document.getElementById('video_url_tour').value;
        var twitch = document.getElementById('twitch_url_tour').value;
        if (text.length > 0 && (video.length > 0 || twitch.length > 0)) {
            document.getElementById("post-feed-video-tournament").disabled = false;
        } else {
            document.getElementById("post-feed-video-tournament").disabled = true;
        }
    }

    function isNotEmptyTextTournament() {

        var text = document.getElementById("text_video_tab_tournament").value;
        var youtube = document.getElementById('video_url_tab_tournament_youtube').value;
        var twitch = document.getElementById('video_url_tab_tournament_twitch').value;
        if (text.length > 0 && (youtube.length > 0 || twitch.length > 0)) {
            document.getElementById("post-feed-video-tab-tournament").disabled = false;
        } else {
            document.getElementById("post-feed-video-tab-tournament").disabled = true;
        }
    }

    function changeUnreadStatus(invitNotif) {

        $.ajax({
            url: "/updateUnreadStatus", //the page containing php script
            type: "GET", //request type
            success: function (result) {
                if (invitNotif != 0)
                    $("#count-notif").text(invitNotif);
                else
                    $("#count-notif").hide();
            }
        });

    }

    var arr = new Array();

    function showUpdatePost(id) {
        if (arr[id] == null) {
            document.getElementById("update-post" + id).style.display = "block";
            arr[id] = 1;
        } else {
            if (arr[id] % 2 == 1)

                document.getElementById("update-post" + id).style.display = "block";
            else
                document.getElementById("update-post" + id).style.display = "none";

            arr[id] += 1;
        }
    }

    function isUpdatePostNotEmpty(id) {
        var text = document.getElementById("text" + id).value;
        if (text.length == 0) document.getElementById("update-btn" + id).disabled = true;
        else document.getElementById("update-btn" + id).disabled = false;
    }

    var k = new Array();

    function pinPost(id) {
        document.getElementById('pin-btn' + id).innerHTML = "<i class='yam yam-pin pinned'></i>"
        document.getElementById('pin-btn' + id).setAttribute('onclick', 'unpinPost(' + id + ')');
        document.getElementById('pin-amount' + id).innerHTML++;
        $.ajax({
            url: "/post/pin/" + id,
            type: "GET",
            success: function (result) {


            }
        });
    }

    function unpinPost(id) {
        document.getElementById('pin-btn' + id).innerHTML = "<i class='yam yam-pin'></i>"
        document.getElementById('pin-btn' + id).setAttribute('onclick', 'pinPost(' + id + ')');
        document.getElementById('pin-amount' + id).innerHTML--;

        $.ajax({
            url: "/post/unpin/" + id, //the page containing php script
            type: "GET", //request type
            success: function (result) {
            }
        });
    }


    function likePost(type, id) {
        document.getElementById('like-btn' + id).innerHTML = "<i class='yam yam-like liked'></i>"
        document.getElementById('like-btn' + id).setAttribute('onclick', 'unlikePost(' + type + ',' + id + ')');
        document.getElementById('like-amount' + id).innerHTML++;
//
        $.ajax({
            url: "/like/" + type + "/" + id, //the page containing php script
            type: "GET", //request type
            success: function (result) {
            }
        });
    }

    function unlikePost(type, id) {

        document.getElementById('like-btn' + id).innerHTML = "<i class='yam yam-like'></i>"
        document.getElementById('like-btn' + id).setAttribute('onclick', 'likePost(' + type + ',' + id + ')');
        document.getElementById('like-amount' + id).innerHTML--;

        $.ajax({
            url: "/unlike/" + type + "/" + id, //the page containing php script
            type: "GET", //request type
            success: function (result) {
            }
        });
    }

// =====================================================
// ==                 SHAREPOST FUNCTION              ==
// =====================================================

    function sharePost(id, url) {
        var sharedPost = new Array();
        var modal = $('#sharePost');

        $.ajax({
            url: "/post/get_post_detail/" + id, //the page containing php script
            type: "GET", //request type
            dataType: "json",
            success: function (result) {
                modal.modal('show');
                modal.find('#avatar-modal').attr('src', result['avatar_url']);
                modal.find('#username-modal').text(result['username']);
                modal.find('#content-modal').html(result['content']);
                modal.find('#video-modal').html(result['video_url']);
                modal.find('#img-modal').html(result['img_url']);
                modal.find('#post-modal').attr('action', url + '/post/' + id + '/share');

            }
        });
    }

    function inputChanged(id, position) {
        document.getElementById("update-btn" + id).disabled = false;
    }

    function imgChanged(id, position) {
        var img = document.getElementById('file' + id + position).value;
        document.getElementById('img_url' + id + position).value = img;
    }

    function handleFileSelect(input, type) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            if (type == 1) {
                reader.onload = function (e) {
                    $('#team_avatar_edit').attr('src', e.target.result);

                }
                reader.readAsDataURL(input.files[0]);
            } else if (type == 2) {
                reader.onload = function (e) {
                    $('#team_avatar_edit2').attr('src', e.target.result);

                }
                reader.readAsDataURL(input.files[0]);
            }

        }
    }

    $('#form-search').submit(function () {
        inputString = document.getElementById('string');
        if (inputString.value.length <= 3) return false;
        else window.location.href = document.location.hostname + "/search?string=" + inputString.value;
    });

// $( "#searchPlayer" ).autocomplete({
//     source: 'http://yamisok.dev/players/search',
// });


// =====================================================
// ==         COMMENT APEAR & DISAPEAR SCRIPT          =
// =====================================================

// APEAR - DISAPEAR
    $('.comment-area input[type="text"]').blur(function () {
        var $this = $(this);
        if ($this.val())
            $this.addClass('used');
        else
            $this.removeClass('used');
    });

// =====================================================
// ==           SEARCH FILTER FUNCTION                ==
// =====================================================

    $('.filter-input').keyup(function () {
        var valThis = $(this).val().toLowerCase();
        var noresult = 0;

        if (valThis == "") {
            $('.box-select > label').show();
            noresult = 1;
            $('.no-results-found').remove();
        } else {
            $('.box-select > label').each(function () {
                var text = $(this).text().toLowerCase();
                var match = text.indexOf(valThis);

                if (match >= 0) {
                    $(this).show();
                    noresult = 1;
                    $('.no-results-found').remove();
                } else {
                    $(this).hide();
                }
            });
        }
        ;

        // returns something when no results matched
        if (noresult == 0) {
            $(".box-select").append('<h4 class="no-results-found text-center">No results found</h4>');
        }
    });


// =====================================================
// ==       UNIVERSAL SEARCH FILTER FUNCTION          ==
// =====================================================

    $('.filter-input').keyup(function () {
        var valThis = $(this).val().toLowerCase();
        var noresult = 0;

        if (valThis == "") {
            $('.filter-container ~ .filter-item').show();
            noresult = 1;
            $('.no-results-found').remove();
        } else {
            $('.filter-container ~ .filter-item').each(function () {
                var text = $(this).text().toLowerCase();
                var match = text.indexOf(valThis);

                if (match >= 0) {
                    $(this).show();
                    noresult = 1;
                    $('.no-results-found').remove();
                } else {
                    $(this).hide();
                }
            });
        }
        ;

        // returns something when no results matched
        if (noresult == 0) {
            $(".filter-container").append('<h4 class="no-results-found text-center">No results found</h4>');
        }
    });

// =====================================================
// ==              UPLOAD AVATAR PREVIEW               ==
// =====================================================

    $('#avatar-upload').change(function () {
        var reader = new FileReader();


        reader.onload = function (e) {
            // get loaded data and render thumbnail.
            $('#avatar-upload + label img').attr("src", e.target.result);
        };

        // read the image file as a data URL.
        reader.readAsDataURL(this.files[0]);
    });

// =====================================================
// ==         SUBMIT FORM REGIST YANG ABNORMAL        ==
// =====================================================


    $("#form-regist-submit").click(function () {
        $("#form-regist").submit();
    });

// =====================================================
// ==     UNIVERSAL UPLOAD IMAGE PREVIEW              ==
// =====================================================

    $('.image-upload').change(function () {
        var reader = new FileReader();


        reader.onload = function (e) {
            // get loaded data and render thumbnail.
            $('.image-upload + label img').attr("src", e.target.result);
        };

        // read the image file as a data URL.
        reader.readAsDataURL(this.files[0]);
    });

// =====================================================
// ==     DISABLE SUBMIT FORM                         ==
// =====================================================

    $('form').submit(function () {
        $(':input[type=submit]').prop('disabled', true);
        $(':button[type=submit]').prop('disabled', true);
    });

// =====================================================
// ==          TINYMCE FULL TEXT EDITOR               ==
// =====================================================

// tinymce.init({
//     selector: '.tinymce',
//     branding: false,
//     menubar: false,
//     color_picker_callback: function(callback, value) {
//         callback('#ffc700');
//     },
//     statusbar: false,
//     plugins: [
//         'advlist autolink lists link image charmap print preview anchor autoresize',
//         'searchreplace visualblocks code fullscreen',
//         'insertdatetime media table contextmenu paste code'
//         ],
//     toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image'
// });

// =====================================================
// ==                DATE TIME PICKER                 ==
// =====================================================

    $(function () {
        $('.datetimepicker').datetimepicker({
            sideBySide: true
        });

        $('.datetimepicker-forward').datetimepicker({
            sideBySide: true,
            locale: 'id',
            minDate: moment()
        });

        $('.datetimepicker-backward').datetimepicker({
            sideBySide: true,
            locale: 'id',
            maxDate: moment()
        });

        // Yang gak pake waktu

        $('.datepicker').datetimepicker({
            format: 'YYYY-MM-DD',
        });

        $('.datepicker-forward').datetimepicker({
            format: 'YYYY-MM-DD',
            locale: 'id',
            minDate: moment()
        });

        $('.datepicker-backward').datetimepicker({
            format: 'YYYY-MM-DD',
            locale: 'id',
            maxDate: moment()
        });

        // Untuk tanggal lahir

        $('.datepicker-birth').datetimepicker({
            format: 'YYYY-MM-DD',
            viewMode: 'years',
            locale: 'id',
            maxDate: moment()
        });
    });

//Date Only

    $(function () {

    });

// =====================================================
// ==                WATERFALL GRID                   ==
// =====================================================

    $('.grid-card').NewWaterfall({

        // width of grid item
        width: 200,

        // refresh delay
        delay: 60,

        // By default, the plugin will add the class 'show' to grid item when in viewport
        // setting the options to true will remove the class when out of the viewport
        repeatShow: false

    });

// =====================================================
// ==                   ALERT                         ==
// =====================================================

// $('.alert').ready(function(){
//     if(!$(this).hasClass('stay')) {
//         setTimeout(function(){ $('.alert').addClass('show');}, 500);
//         setTimeout(function(){ $('.alert').removeClass('show');}, 15000);
//     }
//     else{
//         setTimeout(function(){ $('.alert').addClass('show');}, 500);
//     }
// });


// =====================================================
// ==              IOS 11 Modal BUG                  ==
// =====================================================

// Detect ios 11_0_x affected
// NEED TO BE UPDATED if new versions are affected
    var ua = navigator.userAgent,
        iOS = /iPad|iPhone|iPod/.test(ua),
        iOS11 = /OS 11_0_1|OS 11_0_2|OS 11_0_3/.test(ua);
    var savedScrollPosition;

// ios 11 bug caret position
    if (iOS && iOS11) {

        // Add CSS class to body
        $("body").addClass("iosBugFixCaret");

        $(document).on('show.bs.modal', '.modal', function () {
            savedScrollPosition = $(window).scrollTop();
        });

        $(document).on('hidden.bs.modal', '.modal', function () {
            window.scrollTo(0, savedScrollPosition);
        });

    }
    ;

// =====================================================
// ==               Countdown Clock                  ==
// =====================================================

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        if(clock == null) return false;

        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    };

    var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    initializeClock('clockdiv', deadline);



// Handlers for buttons.
    function onOnSiteNotificationClick() {
        log('Sending on-site push notification...');
        fetch(`/push?token=${fcmToken}`);
    }

    function onOffSiteNotificationClick() {
        log('Sending off-site push notification...');
        log('The page will be redirected for demo purposes');
        setTimeout(() => {
            fetch(`/push?token=${fcmToken}&sleep=2`);
            window.location = 'http://google.com';
        }, 3000);
    }


})