 


 

    function getUrlParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}  

function printObject(o) {
  var out = '';
  for (var p in o) {
    out += p + ': ' + o[p] + '\n';
  }
  return out;
}


function getNeighbourhoods() {

    //var results = ['ALDERSHOT-NORTH.kml','ALDERSHOT-SOUTH.kml','ALTON-RURAL.kml','ALTON.kml','ANDOVER-EAST.kml','ANDOVER-NORTH.kml','ANDOVER-SOUTH.kml','ANDOVER-TOWN.kml','BARGATE.kml','BARNCROFT-AND-BEDHAMPTON.kml','BASINGSTOKE-CENTRE.kml','BASINGSTOKE-EAST.kml','BASINGSTOKE-NORTH.kml','BASINGSTOKE-RURAL-EAST.kml','BASINGSTOKE-RURAL-SOUTH.kml','BASINGSTOKE-RURAL-WEST.kml','BASINGSTOKE-SOUTH.kml','BASINGSTOKE-WEST.kml','BATTINS-AND-WEST-LEIGH.kml','BEVOIS.kml','BISHOPS-WALTHAM-AND-SOBERTON.kml','BITTERNE-NORTH.kml','BORDON.kml','BUTSER-AND-CLANFIELD-AND-ROWLANDS-CASTLE.kml','BUTSER_CLANFIELD_ROWLANDS-CASTLE.kml','CENTRAL-SOUTHSEA-AND-ST-JUDES.kml','CHARLES-DICKENS-AND-NELSON.kml','COSHAM.kml','COWES.kml','COXFORD-AND-REDBRIDGE-AND-MILLBROOK.kml','COXFORD_REDBRIDGE_MILLBROOK.kml','CROFTON-AND-TITCHFIELD.kml','DENMEAD-AND-SOUTHWICK.kml','EAST-COWES-AND-WOOTTON.kml','EASTLEIGH-CENTRAL.kml','EASTLEIGH-EAST.kml','EASTLEIGH-WEST.kml','EASTNEY-AND-MILTON.kml','FAREHAM.kml','FARNBOROUGH-CENTRAL.kml','FARNBOROUGH-NORTH.kml','FARNBOROUGH-SOUTH.kml','FARNBOROUGH-WEST.kml','FLEET.kml','FOUR-MARKS-AND-ROPLEY.kml','FRATTON-AND-BAFFINS.kml','GOSPORT-CENTRAL.kml','GOSPORT-EAST.kml','GOSPORT-WEST.kml','HART-RURAL-NORTH.kml','HART-RURAL-SOUTH.kml','HAVANT-AND-EMSWORTH.kml','HAYLING-ISLAND.kml','HEDGE-END-NORTH.kml','HEDGE-END-SOUTH.kml','HILSEA-AND-COPNOR.kml','HORNDEAN.kml','HYTHE.kml','LEE.kml','LISS.kml','LONGMOOR-RURAL.kml','LYMINGTON.kml','NEW-FOREST-HEART.kml','NEW-MILTON.kml','NEWPORT.kml','OWSLEBURY-AND-CURDRIDGE.kml','PAULSGROVE.kml','PEARTREE-AND-WOOLSTON.kml','PETERSFIELD.kml','PORTCHESTER.kml','PORTSWOOD.kml','RINGWOOD.kml','ROMSEY-EAST.kml','ROMSEY-NORTH.kml','ROMSEY-TOWN.kml','RYDE.kml','SANDOWN-AND-LAKE.kml','SHANKLIN-AND-VENTNOR.kml','SHIRLEY-AND-FREEMANTLE.kml','SHOLING-AND-BITTERNE.kml','ST-THOMAS.kml','TOTTON.kml','WATERLOOVILLE-NORTH.kml','WATERLOOVILLE-SOUTH.kml','WEST-MEON-AND-HAMBLEDON.kml','WESTERN-WARDS.kml','WICKHAM-AND-WHITELEY.kml','WIGHT-RURAL-EAST.kml','WIGHT-RURAL-SOUTH.kml','WIGHT-RURAL-WEST.kml','WINCHESTER-CENTRAL.kml','WINCHESTER-NORTH.kml','WINCHESTER-RURAL-EAST.kml','WINCHESTER-RURAL-NORTH.kml','WINCHESTER-RURAL-WEST.kml','WINCHESTER-SOUTH.kml','YATELEY-AND-BLACKWATER-AND-HAWLEY.kml','YATELEY_BLACKWATER-AND-HAWLEY.kml']
    var results = ['WINCHESTER-CENTRAL.kml','WINCHESTER-NORTH.kml','WINCHESTER-RURAL-EAST.kml','WINCHESTER-RURAL-NORTH.kml','WINCHESTER-RURAL-WEST.kml','WINCHESTER-SOUTH.kml','YATELEY-AND-BLACKWATER-AND-HAWLEY.kml','YATELEY_BLACKWATER-AND-HAWLEY.kml'];
    //var results = ['PEARTREE-AND-WOOLSTON.kml','PETERSFIELD.kml','PORTCHESTER.kml','PORTSWOOD.kml','RINGWOOD.kml','ROMSEY-EAST.kml','ROMSEY-NORTH.kml','ROMSEY-TOWN.kml','RYDE.kml','SANDOWN-AND-LAKE.kml','SHANKLIN-AND-VENTNOR.kml','SHIRLEY-AND-FREEMANTLE.kml','SHOLING-AND-BITTERNE.kml','ST-THOMAS.kml','TOTTON.kml','WATERLOOVILLE-NORTH.kml','WATERLOOVILLE-SOUTH.kml','WEST-MEON-AND-HAMBLEDON.kml','WESTERN-WARDS.kml','WICKHAM-AND-WHITELEY.kml','WIGHT-RURAL-EAST.kml','WIGHT-RURAL-SOUTH.kml','WIGHT-RURAL-WEST.kml','WINCHESTER-CENTRAL.kml','WINCHESTER-NORTH.kml','WINCHESTER-RURAL-EAST.kml','WINCHESTER-RURAL-NORTH.kml','WINCHESTER-RURAL-WEST.kml','WINCHESTER-SOUTH.kml','YATELEY-AND-BLACKWATER-AND-HAWLEY.kml','YATELEY_BLACKWATER-AND-HAWLEY.kml'];
    return results;

};


function getDistricts(){
   var results = ['EAST-HANTS.kml','BASINGSTOKE.kml','EASTLEIGH.kml','FAREHAM.kml','GOSPORT.kml','HART.kml','HAVANT.kml','ISLE-OF-WIGHT.kml','NEW-FOREST.kml','PORTSMOUTH.kml','RUSHMOOR.kml','SOUTHAMPTON.kml','TEST-VALLEY.kml','WINCHESTER.kml']
   return results;
}


function initialize() {
      //init the histogram.
      //drawHisto()
      // createLongestCascadeGraph();
      var tweetsAll = 0;
      var tweetsSoton = 0;
      var wikiAll = 0;
      var wikiSoton = 0;

      var counters= {};
      counters["tweetaAll"] = tweetsAll;
      counters["tweetsSoton"] = tweetsSoton;
      counters["wikiAll"] = wikiAll;
      counters["wikiSoton"] = wikiSoton;

      $("#tweet-count span").html(tweetsAll);
      $("#tweet-southampton-count span").html(tweetsSoton);
      $("#wikipedia-count span").html(wikiAll);
      $("#wikipedia-southampton-count span").html(wikiSoton);



  var myLatlng = new google.maps.LatLng(22.545633, 114.040831); //hampshire
  
  var light_grey_style = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]}];
  
  var midnight = [ { "featureType": "water", "stylers": [ { "color": "#021019" } ] }, { "featureType": "landscape", "stylers": [ { "color": "#08304b" } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#0c4152" }, { "lightness": 5 } ] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#000000" } ] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#0b434f" }, { "lightness": 25 } ] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [ { "color": "#000000" } ] }, { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [ { "color": "#0b3d51" }, { "lightness": 16 } ] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [ { "color": "#000000" } ] }, { "elementType": "labels.text.fill", "stylers": [ { "color": "#ffffff" } ] }, { "elementType": "labels.text.stroke", "stylers": [ { "color": "#000000" }, { "lightness": 13 } ] }, { "featureType": "transit", "stylers": [ { "color": "#146474" } ] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [ { "color": "#000000" } ] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [ { "color": "#144b53" }, { "lightness": 14 }, { "weight": 1.4 } ] } ];

  var myOptions = {
    zoom: 12,
    scrollwheel: true, 
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    streetViewControl: false,
    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    },
    styles: light_grey_style
  };

  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

  var kmlFiles = getDistricts();

  infowindow = new google.maps.InfoWindow({});
  
  // myParser = new geoXML3.parser({
  //     map: map,
  //      infoWindow: false,
  //      singleInfoWindow: true,
  //      zoom: true,
  //      markerOptions: {optimized: false},
  //      afterParse: useTheData

  // });



  var heatmapPos;

  var liveTweetsPos = new google.maps.MVCArray();
    heatmapPos = new google.maps.visualization.HeatmapLayer({
    data: liveTweetsPos,
    maxIntensity: 100,
    radius: 15
  });
    
  // var gradient = [
  //   'rgba(30,244,248,0)',
  //   'rgba(30,244,248,0.5)',
  //   'rgba(30,244,248,0.5)',
  //   'rgba(32,248,158,0.5)',
  //   'rgba(33,249,152,0.5)',
  //   'rgba(51,255,75,0.5)',
  //   'rgba(51,255,75,0.5)'
  // ]

    var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmapPos.set('gradient', heatmapPos.get('gradient') ? null : gradient);
  heatmapPos.setMap(map);



var highlightOptions = {fillColor: "#FFFF00", strokeColor: "#000000", fillOpacity: 0.30, strokeWidth: 10};

var normalStyle = null;
    var polygonsAndTweets = [];

var polyTitleID = 1;

  //shenzne boundary box location

    var lon1 = 22.445027;
    var lon2 = 22.861748;
    var lat2 = 114.627296;
    var lat1 = 113.756918;


    ///SOCKET WORK


    
    // Storage for WebSocket connections
    var infoWindow;
    //var socket = io.connect('http://socpub.cloudapp.net:9999');

var socket3 = io.connect('http://sotonwo.cloudapp.net:3005');

 var timestamp_dist = {};
 var timeseries = [];

 socket3.emit("load_data","");

 socket3.on('shenzhen_data', function (databaseDump) {

 	//console.log("Shenzhen Historic Data size:", databaseDump.length)


 for(var i=0; i<databaseDump.length; i++) {
    try{
        //console.log(databaseDump[i])
        tweetsAll = tweetsAll + 1;
         
        counters["tweetsAll"] = tweetsAll;
        
        var data = databaseDump[i];

        var tstamp = Date.parse(data.created_at)
        var timestamp = new Date(tstamp).format("%Y-%m-%d %H:00:00");
        // timestamp = timestamp.toISOString().split('T')[0]
        //timestamp = getStringTimestamp(timestamp);
        //timestamp = timestamp.split(":")[0]+":"+timestamp.split(":")[1]+":00";
        //console.log(timestamp)
        $("#wikipedia-southampton-count span").html(new Date(tstamp).format("%Y-%m-%d %H:%M:%S"));


        if(timestamp in timestamp_dist){
        		var cnt = timestamp_dist[timestamp];
        		timestamp_dist[timestamp] =cnt + 1
        }else{
        		timestamp_dist[timestamp] = 1
        }
  		  		
          if(data.geo != undefined){
            // resetAllKML();   

            var lat =   data.geo.coordinates[0];
            var lng =   data.geo.coordinates[1];

              //console.log(lat,lng)
            var tweetLocation = new google.maps.LatLng(lat, lng);

              // if((lat > lat1) && (lat < lat2)){

              //     if((lng > lon1) && (lng < lon2)){

                      liveTweetsPos.push({location: tweetLocation, weight: 15});
                  //       try{
                  //   if(isInfoWindowOpen(infoWindow)){
                  //     infoWindow.close()
                  //   }
                  // }catch(e){

                  // }
                  //add a marker
                  // infoWindow = createInfoWindow(data.geo.lat, data.geo.lng, 3000, data)
                  // infoWindow.open(map); 
                 // }
         //  }

         
          } 


         // addSouthamptonTwitterData(data);
          updateCounters(counters);
      }catch(e){
        console.log(e);
      }
        // updateHTML(kmlLayerTweetCount);
       }

       

       //socket3.emit("load_pollution_data","");

        //finally update the histo
        //updateHistoData(kmlLayerTweetCount);
    });
 //  //set the timer off to clear the KML's after data
 // var interval = setInterval(function(){clear_kml_opacity()}, 2000);
var tweetsPollution = 0;
socket3.on('pollution_data', function (databaseDump) {

  console.log("Pollution Historic Data size:", databaseDump.length)
  var timestamp_dist = {};
  timeseries = [];

 for(var i=0; i<databaseDump.length; i++) {
    try{
        //console.log(databaseDump[i])
        tweetsPollution = tweetsPollution + 1;
         
        $("#tweet-southampton-count span").html(tweetsPollution);
        
        var data = databaseDump[i];

          addHistoricDataOnPollution(data);
          //updateCounters(counters);
      }catch(e){
        console.log(e);
      }
        // updateHTML(kmlLayerTweetCount);
       }


      // console.log(timeseries.length);
       //plotTimeseries(timeseries);
        //finally update the histo
        //updateHistoData(kmlLayerTweetCount);
    });
 //  //set the timer off to clear the KML's after data
 // var interval = setInterval(function(){clear_kml_opacity()}, 2000);


socket3.on('finished_sending_data', function (databaseDump) {

  plotTimeSeries();
  // socket3.emit("load_pollution_data","");

});

function plotTimeSeries(){
  for(var key in timestamp_dist){

          var cnt = timestamp_dist[key];
          var unixtime = new Date(key).getTime()/1000

          var entry = [unixtime,cnt];
          timeseries.push(entry);

       }

       console.log(timeseries.length);
       plotTimeseries(timeseries);
}


function createInfoWindow(tweet_lat, tweet_lng, timeout, data) {


    infoWindow = new google.maps.InfoWindow();
    var windowLatLng = new google.maps.LatLng(tweet_lat,tweet_lng);
    infoWindow.setOptions({
        content: data.text,
        position: windowLatLng,
        maxWidth: 200
    });
    //infoWindow.open(map); 
  
    //setTimeout(function(){infoWindow.close();}, '2000');

    return infoWindow;
 
}


function isInfoWindowOpen(infoWindow){
    var map = infoWindow.getMap();
    return (map !== null && typeof map !== "undefined");
}


    function resetAllKML(){
      try{
          for (var i=0; i<geoXmlDoc.gpolygons.length; i++) {
            if(geoXmlDoc.gpolygons[i].contains(tweetLocation)){
                polygon.setOptions(normalStyle);
            }
          }
      }catch(e){

    }

  }



  function showPolygonTweets(polygon){
    
    try{
      for (var i=0; i<polygonsAndTweets.length; i++) {
        if(polygon.title == polygonsAndTweets[i].title){
          tweets = polygonsAndTweets[i].tweets;
          console.log("Loading tweets: "+tweets.length)
        }
      }
    }catch(ex){
      console.log(ex)
    }   
  }




  // function hideKMLLayers(){
    
  //   try{
  //      for (var i=0; i<myParser.doc[0].gpolygons.length; i++) {
  //       myParser.doc[0].gpolygons[i].map =null;
  //      }

  //   }catch(ex){
  //     console.log(ex)
  //   }   
  // }

    //some JQUery things...
    $('#submit_neighbourhood').on('click', function(event) {
      event.preventDefault();
      console.log("click");
      hideKMLLayers();
    });

}



  function hideKMLLayers(){
    
           try{
             for (var i=0; i<geoXmlDoc.gpolygons.length; i++) {
              geoXmlDoc.gpolygons[i].setMap(null);
             }

          }catch(ex){
            console.log(ex)
          }   
  }



function clear_kml_opacity(docs){
  console.log("Clearing");
  var geoXmlDoc = docs[0];
  for (var i=0; i<geoXmlDoc.gpolygons.length; i++) {

    if(geoXmlDoc.gpolygons[i].fillOpacity == 1){
      geoXmlDoc.gpolygons[i].fillOpacity = 0;
    }else{
      geoXmlDoc.gpolygons[i].fillOpacity = 1;

    }

  }
}





function pop_arrays(){
  try{
    for (i = 0; i < (liveTweetsPos.getLength()-1); i++) { 
      liveTweetsPos.pop();
      //console.log("popping");
    }
    
  }catch(err){}
  

}   



function loadDataOnMap(data){
   for(var i=0; i<data.length; i++) {
    try{

      var tweet = JSON.parse(data[i].status);

      var lat =   tweet.geo.lat;
      var lng =   tweet.geo.lng;

            //console.log(lat,lng)
      var tweetLocation = new google.maps.LatLng(lat, lng);

      liveTweetsPos.push({location: tweetLocation, weight: 15});
      console.log(tweet);



       }catch(e){
        console.log(e)
      }

   }


  }


//var interval = setInterval(function(){pop_arrays()}, 20000);


  
// Flot Charts sample data for SB Admin template

function plotTimeseries(timeseries){
// Flot Line Charts - Multiple Axes - With Data
$(function() {
    

    function euroFormatter(v, axis) {
        return v.toFixed(axis.tickDecimals) + "€";
    }

    function doPlot(position) {
        $.plot($("#flot-multiple-axes-chart"), [{
            data: timeseries,
            label: "Twitte Activity"
        }], {
            xaxes: [{
                mode: 'time'
            }],
            yaxes: [{
                min: 0
            }, {
                // align if we are to the right
                alignTicksWithAxis: position == "right" ? 1 : null,
                position: position,
                tickFormatter: euroFormatter
            }],
            legend: {
                position: 'sw'
            },
            grid: {
                hoverable: true //IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s for %x was %y",
                xDateFormat: "%y-%0m-%0d",

                onHover: function(flotItem, $tooltipEl) {
                    // console.log(flotItem, $tooltipEl);
                }
            }

        });
    }

    doPlot("right");

    $("button").click(function() {
        doPlot($(this).text());
    });
});

}


 function getStringTimestamp(date) {
   var yyyy = date.getFullYear();
   var mm = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1); // getMonth() is zero-based
   var dd  = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
   var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  // var min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
   return "".concat(yyyy).concat(mm).concat(dd).concat(hh);;
  };