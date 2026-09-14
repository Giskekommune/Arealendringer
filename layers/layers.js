var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.414000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ArealinnspelsomikkjegjekkvidareetterFormannskapet2526_1 = new ol.format.GeoJSON();
var features_ArealinnspelsomikkjegjekkvidareetterFormannskapet2526_1 = format_ArealinnspelsomikkjegjekkvidareetterFormannskapet2526_1.readFeatures(json_ArealinnspelsomikkjegjekkvidareetterFormannskapet2526_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArealinnspelsomikkjegjekkvidareetterFormannskapet2526_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArealinnspelsomikkjegjekkvidareetterFormannskapet2526_1.addFeatures(features_ArealinnspelsomikkjegjekkvidareetterFormannskapet2526_1);
var lyr_ArealinnspelsomikkjegjekkvidareetterFormannskapet2526_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArealinnspelsomikkjegjekkvidareetterFormannskapet2526_1, 
                style: style_ArealinnspelsomikkjegjekkvidareetterFormannskapet2526_1,
                popuplayertitle: 'Arealinnspel som ikkje gjekk vidare etter Formannskapet 25/26',
                interactive: true,
                title: '<img src="styles/legend/ArealinnspelsomikkjegjekkvidareetterFormannskapet2526_1.png" /> Arealinnspel som ikkje gjekk vidare etter Formannskapet 25/26'
            });
var format_Eksternearealinnspeloppstartlinjer_2 = new ol.format.GeoJSON();
var features_Eksternearealinnspeloppstartlinjer_2 = format_Eksternearealinnspeloppstartlinjer_2.readFeatures(json_Eksternearealinnspeloppstartlinjer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eksternearealinnspeloppstartlinjer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eksternearealinnspeloppstartlinjer_2.addFeatures(features_Eksternearealinnspeloppstartlinjer_2);
var lyr_Eksternearealinnspeloppstartlinjer_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eksternearealinnspeloppstartlinjer_2, 
                style: style_Eksternearealinnspeloppstartlinjer_2,
                popuplayertitle: 'Eksterne arealinnspel oppstart - linjer',
                interactive: true,
    title: 'Eksterne arealinnspel oppstart - linjer<br />\
    <img src="styles/legend/Eksternearealinnspeloppstartlinjer_2_0.png" /> tilrådast<br />' });
var format_ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3 = new ol.format.GeoJSON();
var features_ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3 = format_ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3.readFeatures(json_ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3.addFeatures(features_ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3);
var lyr_ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3, 
                style: style_ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3,
                popuplayertitle: 'Arealinnspel vidare etter Formannskapet 25/26 - tilråding etter KU og ROS',
                interactive: true,
    title: 'Arealinnspel vidare etter Formannskapet 25/26 - tilråding etter KU og ROS<br />\
    <img src="styles/legend/ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3_0.png" /> Tilrådast<br />\
    <img src="styles/legend/ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3_1.png" /> Tilrådast ikkje<br />\
    <img src="styles/legend/ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3_2.png" /> Tilrådast ikkje utan avklaring<br />\
    <img src="styles/legend/ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3_3.png" /> Tilrådast?<br />\
    <img src="styles/legend/ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3_4.png" /> Utgår<br />' });
var group_Eigedombygningveg = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Eigedom/bygning/veg'});
var group_Samferdsellinjer = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Samferdsellinjer'});
var group_Midlplanforslag = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Midl. planforslag'});
var group_Innspelfr1gangshyring = new ol.layer.Group({
                                layers: [lyr_ArealinnspelsomikkjegjekkvidareetterFormannskapet2526_1,lyr_Eksternearealinnspeloppstartlinjer_2,lyr_ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3,],
                                fold: 'open',
                                title: 'Innspel før 1 gangs høyring'});
var group_Snskredaktsemd = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Snøskred aktsemd'});
var group_Jordogflomskredaktsemd = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Jord og flomskred aktsemd'});
var group_Steinsprangaktsemd = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Steinsprang aktsemd'});
var group_Flomaktsemd = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Flom aktsemd'});
var group_Kvikkleireaktsemd = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Kvikkleire aktsemd'});
var group_Stormflo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Stormflo'});
var group_12Skredfare = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '1-2 Skredfare'});
var group_13Stormflo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '1-3 Stormflo'});
var group_Middelhyvann = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Middelhøyvann'});
var group_Stormfloutenklimapslag = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Stormflo uten klimapåslag'});
var group_Stormflomedklimapslag = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Stormflo med klimapåslag'});
var group_NaturmangfoldlovenkapVogVI = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Naturmangfoldloven kap. V og VI'});
var group_14Viktigenaturverdiar = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '1-4 Viktige naturverdiar'});
var group_Verneomrderogutvalgtenaturtyper = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Verneområder og utvalgte naturtyper'});
var group_15DrikkevasskjeldeAlnes = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '1-5 Drikkevasskjelde (Alnes)'});
var group_17Karbonrikeareal = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '1-7 Karbonrike areal'});
var group_16LNFmedhgjordverdijordvernstrategi = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '1-6 LNF med høg jordverdi (jordvernstrategi)'});
var group_18UtvalgteomsynssonerKPA18 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '1-8 Utvalgte omsynssoner KPA18'});
var group_18BandleggingssoneKPA43 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '1-8 Bandleggingssone (KPA 4.3)'});
var group_18GjennomfringssoneKPA44 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '1-8 Gjennomføringssone (KPA 4.4)'});
var group_Hgspentlinjer = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Høgspentlinjer'});
var group_21Tilkomstinfrastruktur = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '2-1 Tilkomst/infrastruktur'});
var group_22Kulturverdier = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '2-2 Kulturverdier'});
var group_WMS = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'WMS'});
var group_23Styogforureining = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '2-3 Støy og forureining'});
var group_Punkt = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Punkt'});
var group_Linje = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Linje'});
var group_25Friluftsinteresser = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '2-5 Friluftsinteresser'});
var group_26NrhettiltenesterinklskuleskyssogPAKT = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '2-6 Nærhet til tenester (inkl. skuleskyss og PAKT)'});
var group_Hotspotraudlistaartar = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Hotspot - raudlista artar'});
var group_KU = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'KU'});
var group_Kulturverdier = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Kulturverdier'});
var group_Verneomrder = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Verneområder'});
var group_Naturtyper = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Naturtyper'});
var group_Arter = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Arter'});
var group_Akvakulturlokaliteter = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Akvakulturlokaliteter'});
var group_Gyteomrder = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Gyteområder'});
var group_Trafikkmengde = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Trafikkmengde'});
var group_Hovedledogbiled = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Hovedled og biled'});
var group_Friluftsinteresser = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Friluftsinteresser'});
var group_Landbruksinteresserjordvern = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Landbruksinteresser / jordvern'});
var group_KPA2018 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'KPA 2018'});
var group_VidarefringavreguleringsplanKPA45 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Vidareføring av reguleringsplan (KPA 4.5)'});
var group_GjennomfringssoneKPA44 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Gjennomføringssone (KPA 4.4)'});
var group_BandleggingssoneKPA43 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Bandleggingssone (KPA 4.3)'});
var group_SonemedsrlegeomsynKPA42 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Sone med særlege omsyn (KPA 4.2)'});
var group_FaresikringsogstysoneKPA41 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Fare-, sikrings- og støysone (KPA 4.1)'});
var group_100metersbeltet = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '100-metersbeltet'});
var group_Reguleringsplan = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Reguleringsplan'});
var group_Planvaskunderarbeidiannetprosjekt = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Planvask (under arbeid i annet prosjekt)'});
var group_Innhald = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Innhald'});
var group_Bakgrunnskart = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Bakgrunnskart'});
var group_Openstreetmap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                fold: 'close',
                                title: 'Open street map'});

lyr_OSMStandard_0.setVisible(true);lyr_ArealinnspelsomikkjegjekkvidareetterFormannskapet2526_1.setVisible(false);lyr_Eksternearealinnspeloppstartlinjer_2.setVisible(true);lyr_ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3.setVisible(true);
var layersList = [group_Openstreetmap,group_Innspelfr1gangshyring];
lyr_ArealinnspelsomikkjegjekkvidareetterFormannskapet2526_1.set('fieldAliases', {'Område': 'Område', 'Type innsp': 'Type innsp', 'Ønske': 'Ønske', 'Journalnr': 'Journalnr', 'Endring': 'Endring', 'Konklusjon': 'Konklusjon', 'Bakgrunn': 'Bakgrunn', 'Kategori': 'Kategori', 'Bebygd': 'Bebygd', 'Regulert': 'Regulert', 'Øy': 'Øy', 'Eks formå': 'Eks formå', 'Ny formål': 'Ny formål', 'Vurdering/': 'Vurdering/', 'ObjektID': 'ObjektID', 'gnr.bnr.': 'gnr.bnr.', 'Resultat f': 'Resultat f', 'info forma': 'info forma', 'layer': 'layer', 'path': 'path', });
lyr_Eksternearealinnspeloppstartlinjer_2.set('fieldAliases', {'id': 'id', 'Gbnr': 'Gbnr', 'Område': 'Område', 'Type innsp': 'Type innsp', 'Ønsker': 'Ønsker', 'Journalnr': 'Journalnr', 'Vurdering': 'Vurdering', 'Konklusjon': 'Konklusjon', 'ResultatKU': 'ResultatKU', });
lyr_ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3.set('fieldAliases', {'Område': 'Område', 'Type innsp': 'Type innsp', 'Ønske': 'Ønske', 'Journalnr': 'Journalnr', 'Endring': 'Endring', 'Konklusjon': 'Konklusjon', 'Bakgrunn': 'Bakgrunn', 'Kategori': 'Kategori', 'Bebygd': 'Bebygd', 'Regulert': 'Regulert', 'Øy': 'Øy', 'Eks formå': 'Eks formå', 'Ny formål': 'Ny formål', 'Vurdering/': 'Vurdering/', 'ObjektID': 'ObjektID', 'gnr.bnr.': 'gnr.bnr.', 'Resultat f': 'Resultat f', 'info forma': 'info forma', 'Kommentar': 'Kommentar', 'areal': 'areal', 'ROS': 'ROS', 'KU': 'KU', 'Sjekk opp': 'Sjekk opp', });
lyr_ArealinnspelsomikkjegjekkvidareetterFormannskapet2526_1.set('fieldImages', {'Område': 'TextEdit', 'Type innsp': 'TextEdit', 'Ønske': 'TextEdit', 'Journalnr': 'TextEdit', 'Endring': 'TextEdit', 'Konklusjon': 'TextEdit', 'Bakgrunn': 'TextEdit', 'Kategori': 'TextEdit', 'Bebygd': 'TextEdit', 'Regulert': 'TextEdit', 'Øy': 'TextEdit', 'Eks formå': 'TextEdit', 'Ny formål': 'TextEdit', 'Vurdering/': 'TextEdit', 'ObjektID': 'TextEdit', 'gnr.bnr.': 'TextEdit', 'Resultat f': 'TextEdit', 'info forma': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Eksternearealinnspeloppstartlinjer_2.set('fieldImages', {'id': 'TextEdit', 'Gbnr': 'TextEdit', 'Område': 'TextEdit', 'Type innsp': 'TextEdit', 'Ønsker': 'TextEdit', 'Journalnr': 'TextEdit', 'Vurdering': 'TextEdit', 'Konklusjon': 'TextEdit', 'ResultatKU': 'TextEdit', });
lyr_ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3.set('fieldImages', {'Område': 'TextEdit', 'Type innsp': 'TextEdit', 'Ønske': 'TextEdit', 'Journalnr': 'TextEdit', 'Endring': 'TextEdit', 'Konklusjon': 'TextEdit', 'Bakgrunn': 'TextEdit', 'Kategori': 'TextEdit', 'Bebygd': 'TextEdit', 'Regulert': 'TextEdit', 'Øy': 'TextEdit', 'Eks formå': 'TextEdit', 'Ny formål': 'TextEdit', 'Vurdering/': 'TextEdit', 'ObjektID': 'TextEdit', 'gnr.bnr.': 'TextEdit', 'Resultat f': 'TextEdit', 'info forma': 'TextEdit', 'Kommentar': 'TextEdit', 'areal': 'TextEdit', 'ROS': 'TextEdit', 'KU': 'TextEdit', 'Sjekk opp': 'TextEdit', });
lyr_ArealinnspelsomikkjegjekkvidareetterFormannskapet2526_1.set('fieldLabels', {'Område': 'header label - visible with data', 'Type innsp': 'header label - visible with data', 'Ønske': 'header label - visible with data', 'Journalnr': 'header label - visible with data', 'Endring': 'header label - visible with data', 'Konklusjon': 'header label - visible with data', 'Bakgrunn': 'header label - visible with data', 'Kategori': 'header label - visible with data', 'Bebygd': 'header label - visible with data', 'Regulert': 'header label - visible with data', 'Øy': 'header label - visible with data', 'Eks formå': 'header label - visible with data', 'Ny formål': 'header label - visible with data', 'Vurdering/': 'header label - visible with data', 'ObjektID': 'header label - visible with data', 'gnr.bnr.': 'header label - visible with data', 'Resultat f': 'header label - visible with data', 'info forma': 'header label - visible with data', 'layer': 'header label - visible with data', 'path': 'header label - visible with data', });
lyr_Eksternearealinnspeloppstartlinjer_2.set('fieldLabels', {'id': 'header label - visible with data', 'Gbnr': 'header label - visible with data', 'Område': 'header label - visible with data', 'Type innsp': 'header label - visible with data', 'Ønsker': 'header label - visible with data', 'Journalnr': 'header label - visible with data', 'Vurdering': 'header label - visible with data', 'Konklusjon': 'header label - visible with data', 'ResultatKU': 'no label', });
lyr_ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3.set('fieldLabels', {'Område': 'header label - visible with data', 'Type innsp': 'header label - visible with data', 'Ønske': 'header label - visible with data', 'Journalnr': 'header label - visible with data', 'Endring': 'header label - visible with data', 'Konklusjon': 'header label - visible with data', 'Bakgrunn': 'header label - visible with data', 'Kategori': 'header label - visible with data', 'Bebygd': 'header label - visible with data', 'Regulert': 'header label - visible with data', 'Øy': 'header label - visible with data', 'Eks formå': 'header label - visible with data', 'Ny formål': 'header label - visible with data', 'Vurdering/': 'header label - visible with data', 'ObjektID': 'header label - visible with data', 'gnr.bnr.': 'header label - visible with data', 'Resultat f': 'header label - visible with data', 'info forma': 'header label - visible with data', 'Kommentar': 'header label - visible with data', 'areal': 'header label - visible with data', 'ROS': 'no label', 'KU': 'no label', 'Sjekk opp': 'no label', });
lyr_ArealinnspelvidareetterFormannskapet2526tilrdingetterKUogROS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});