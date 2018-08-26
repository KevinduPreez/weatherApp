$(document).ready(function(){
    $('#weather_container').delay(7000).fadeIn('slow');

//alert("YES");
//Function to find the user location
var coord = function() {
    //navigator uses geolocation to get users coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        //takes coordinates and stores them to variables lat and long
        var lat = position.coords.latitude //54.23067  
        var long = position.coords.longitude //-8.302623
        //key is the api key used to access googles api for map references
        LocaKey = "AIzaSyCf1l07FQSOZ-mEUwknMd6dIOdZGvnEDsg";
        //url takes the google api address and uses the lat and long of the user plus the key to get a full address
        LocaUrl =
            "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            lat +
            "," +
            long +
            "8&key=" +
            LocaKey;
        //jQuery api call function to access google data
        $.get(LocaUrl, function(data) {
            //suburb accessed via googles object
            burb = data.results[0].address_components[2].long_name;
            //Municipality accessed via googles object
            mun = data.results[0].address_components[3].short_name;
            //State/Territory accessed via googles object
            state = data.results[0].address_components[4].short_name;
            //print location to the document
            document.getElementById("location").innerHTML =
                burb + ", " + mun + ", " + state;
        });
    });
};

var weather = function() {
    //navigator uses geolocation to get users coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        //takes coordinates and stores them to variables lat and long
        var lat = position.coords.latitude // 54.23067
        var long = position.coords.longitude //-8.302623
        WeathKey = "b356dae9a82fa75e59ab9bb9fa8508fc";
        WeathUrl =
            "https://api.openweathermap.org/data/2.5/weather?lat=" +
            lat +
            "&lon=" +
            long +
            "&units=metric&APPID=" +
            WeathKey;
        //console.log(WeathUrl)
        $.get(WeathUrl, function(data) {

            var fuckthis = document.getElementById("temp").innerHTML = data.main.temp;

            if (fuckthis == null) {
                document.getElementById("temp").innerHTML = data.main.temp
            }

            var tempSelection = function() {
                //button selection to display the temp in F or C

                document.getElementById("myBtn").onclick = function() {
                    document.getElementById("temp").innerHTML = data.main.temp;
                };

                document.getElementById("myBtn2").onclick = function() {
                    document.getElementById("temp").innerHTML =
                        data.main.temp * 9 / 5 + 32;
                };
            };

            var fuckthis = tempSelection();

            //document.getElementById("temp").innerHTML = //data.main.temp;
            document.getElementById("condition").innerHTML =
                "Forcast: " + data.weather[0].main;
            conditions = data.weather[0].id;

            if (conditions >= 200 && conditions <= 232) {
                document.body.style.backgroundImage =
                    "url('http://cdn.video.nationalgeographic.com/45/af/7613e67c456588dedde7d7da0fae/nw-dly-ds1702001-238-tornado-storm-chasing-vin-spd-op-p170629.jpg')";
                $("#icon").addClass("fas fa-bolt"); //icon selection through font awesome cnd
                //console.log('Storm')
            } else if (conditions >= 300 && conditions <= 321) {
                document.body.style.backgroundImage =
                    "url('https://bloximages.chicago2.vip.townnews.com/hanfordsentinel.com/content/tncms/assets/v3/editorial/b/fe/bfea393f-7c66-5559-b533-b51ff6331a53/586ae24021c4b.image.jpg')";
                $("#icon").addClass("fas fa-tint"); //icon selection through font awesome cnd
                //console.log('Drizzle')
            } else if (conditions >= 500 && conditions <= 531) {
                document.body.style.backgroundImage =
                    "url('https://www.oddee.com/wp-content/uploads/2018/03/rain-umbrella.jpg')";
                $("#icon").addClass("fas fa-tint"); //icon selection through font awesome cnd
                //console.log('Rain')
            } else if (conditions >= 600 && conditions <= 622) {
                document.body.style.backgroundImage =
                    "url('https://duncan.co/wp-content/uploads/2017/02/Duncan-Rawlinson-Photo-328954-Christmas-2016-1000-Islands-Ontario-Canada-20161219-DSC05070-Snowing-In-The-Forest-960x640.jpg')";
                $("#icon").addClass("fas fa-snowflake"); //icon selection through font awesome cnd
                //console.log('Snow')
            } else if (conditions >= 701 && conditions <= 781) {
                document.body.style.backgroundImage =
                    "url('http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/arroyo%20burro%20beach%20santa%20barbara%20damian%20gadal%201280x642.jpg')";
                $("#icon").addClass("none"); //icon selection through font awesome cnd
                //console.log('Default')
            } else if (conditions == 800) {
                document.body.style.backgroundImage =
                    "url('https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/3/fb/3fb92eca-31bd-11e6-92d5-c3dd26bc749c/575f3fa80552e.image.jpg?resize=1200%2C878')";
                $("#icon").addClass("fas fa-sun"); //icon selection through font awesome cnd 
                //console.log('Clear')
            } else if (conditions >= 801 && conditions <= 804) {
                document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/b4/a7/a7/b4a7a710c23e1188df815af83247004f.jpg')";
                $("#icon").addClass("fas fa-cloud"); //icon selection through font awesome cnd
                //console.log('Cloudy')
            } else if (conditions >= 900 && conditions <= 906) {
                document.body.style.backgroundImage =
                    "url('http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/arroyo%20burro%20beach%20santa%20barbara%20damian%20gadal%201280x642.jpg')";
                $("#icon").addClass("none"); //icon selection through font awesome cnd
                //console.log('Default')
            } else if (conditions >= 951 && conditions <= 955) {
                document.body.style.backgroundImage =
                    "url('https://c1.staticflickr.com/1/74/181969923_bb9acfc2fe_b.jpg')";
                $("#icon").addClass("fas fa-bolt"); //icon selection through font awesome cnd
                //console.log('Light Bree
            } else if (conditions >= 956 && conditions <= 962) {
                document.body.style.backgroundImage =
                    "url('http://ak7.picdn.net/shutterstock/videos/11669147/thumb/1.jpg')";
                $("#icon").addClass("fas fa-angle-double-right"); //icon selection through font awesome cnd
                //console.log('Windy')
            } else {
                document.body.style.backgroundImage =
                    "url('https://bjornsphoto.files.wordpress.com/2012/10/beo1102-2s.jpg')";
                $("#icon").addClass("none"); //icon selection through font awesome cnd
                //console.log('HELP, I\'M A CHICKEN!')
            }
        });
    });
};
coord();
weather();
});



//calling user location & weather





