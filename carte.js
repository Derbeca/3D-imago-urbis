var map = Gp.Map.load(
  "map", // html div
  {
    // Geoportal access key obtained here : http://professionnels.ign.fr/ign/contrats
    apiKey: "sofsp2lao1jm3eckorpc37el",
    // map center
    center: {
      location: "395 Chemin de la Fontaine Gilouse, 13430 Eyguières"
    },
    // map zoom level
    zoom: 15,
    // layers to display
    layersOptions: {
      "GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN-EXPRESS.STANDARD": {
      }
    },
    // additional tools to display on the map
    controlsOptions: {
      "search": {
        maximised: true
      }

    },
    // markers to put in the map
    markersOptions: [{
      content: "<h1>Fontaine de Gilouse</h1><br/><p>395 Chemin de la Fontaine Gilouse, 13430 Eyguières</p><br/><p><a href='http://www.pôle-géosciences.fr/index.htm' target='_blank'>Site Web</a></p>"
    }]
  }
);


var infoDiv = document.getElementById("info");
infoDiv.innerHTML = "<p> SDK version " + Gp.sdkVersion + " (" + Gp.sdkDate + ")</p>";