jQuery(function() {
    var element = $('#container-model');
    var config = { defaultcolors: $3Dmol.rasmolElementColors, backgroundColor: 'white' };
    var viewer = $3Dmol.createViewer( element, config );
    console.log("loading");
    var pdbUri = '1ycr.pdb';
    jQuery.ajax( pdbUri, {
        success: function(data) {
            var v = viewer;
            v.addModel( data, "pdb" );                       /* load data */
            v.setStyle({}, {cartoon: {color: 'spectrum'}});  /* style all atoms */
            v.zoomTo();                                      /* set camera */
            v.render();                                      /* render scene */
            v.zoom(1.2, 1000);                               /* slight zoom */
        },
        error: function(hdr, status, err) {
            console.error( "Failed to load PDB " + pdbUri + ": " + err );
        }
    })
});