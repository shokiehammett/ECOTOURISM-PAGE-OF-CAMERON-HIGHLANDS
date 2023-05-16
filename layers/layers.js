ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TIANGLAMPU_1 = new ol.format.GeoJSON();
var features_TIANGLAMPU_1 = format_TIANGLAMPU_1.readFeatures(json_TIANGLAMPU_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TIANGLAMPU_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIANGLAMPU_1.addFeatures(features_TIANGLAMPU_1);
var lyr_TIANGLAMPU_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TIANGLAMPU_1, 
                style: style_TIANGLAMPU_1,
                interactive: true,
                title: '<img src="styles/legend/TIANGLAMPU_1.png" /> TIANG LAMPU'
            });
var format_PILIBOMBA_2 = new ol.format.GeoJSON();
var features_PILIBOMBA_2 = format_PILIBOMBA_2.readFeatures(json_PILIBOMBA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PILIBOMBA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PILIBOMBA_2.addFeatures(features_PILIBOMBA_2);
var lyr_PILIBOMBA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PILIBOMBA_2, 
                style: style_PILIBOMBA_2,
                interactive: true,
                title: '<img src="styles/legend/PILIBOMBA_2.png" /> PILI BOMBA'
            });
var format_MANHOLE_3 = new ol.format.GeoJSON();
var features_MANHOLE_3 = format_MANHOLE_3.readFeatures(json_MANHOLE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANHOLE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANHOLE_3.addFeatures(features_MANHOLE_3);
var lyr_MANHOLE_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MANHOLE_3, 
                style: style_MANHOLE_3,
                interactive: true,
                title: '<img src="styles/legend/MANHOLE_3.png" /> MANHOLE'
            });
var format_JALAN_4 = new ol.format.GeoJSON();
var features_JALAN_4 = format_JALAN_4.readFeatures(json_JALAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_4.addFeatures(features_JALAN_4);
var lyr_JALAN_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_4, 
                style: style_JALAN_4,
                interactive: true,
                title: '<img src="styles/legend/JALAN_4.png" /> JALAN'
            });
var format_BUILDING_5 = new ol.format.GeoJSON();
var features_BUILDING_5 = format_BUILDING_5.readFeatures(json_BUILDING_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUILDING_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILDING_5.addFeatures(features_BUILDING_5);
var lyr_BUILDING_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BUILDING_5, 
                style: style_BUILDING_5,
                interactive: true,
                title: '<img src="styles/legend/BUILDING_5.png" /> BUILDING'
            });

lyr_OSMStandard_0.setVisible(true);lyr_TIANGLAMPU_1.setVisible(true);lyr_PILIBOMBA_2.setVisible(true);lyr_MANHOLE_3.setVisible(true);lyr_JALAN_4.setVisible(true);lyr_BUILDING_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TIANGLAMPU_1,lyr_PILIBOMBA_2,lyr_MANHOLE_3,lyr_JALAN_4,lyr_BUILDING_5];
lyr_TIANGLAMPU_1.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', 'ALAMAT': 'ALAMAT', 'PHOTO': 'PHOTO', });
lyr_PILIBOMBA_2.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', 'PHOTO': 'PHOTO', 'ALAMAT': 'ALAMAT', });
lyr_MANHOLE_3.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', 'ALAMAT': 'ALAMAT', 'PHOTO': 'PHOTO', });
lyr_JALAN_4.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', 'LEBAR': 'LEBAR', 'PANJANG': 'PANJANG', });
lyr_BUILDING_5.set('fieldAliases', {'id': 'id', });
lyr_TIANGLAMPU_1.set('fieldImages', {'id': '', 'NAMA': '', 'ALAMAT': '', 'PHOTO': '', });
lyr_PILIBOMBA_2.set('fieldImages', {'id': '', 'NAMA': '', 'PHOTO': '', 'ALAMAT': '', });
lyr_MANHOLE_3.set('fieldImages', {'id': '', 'NAMA': '', 'ALAMAT': '', 'PHOTO': '', });
lyr_JALAN_4.set('fieldImages', {'id': '', 'NAMA': '', 'LEBAR': '', 'PANJANG': '', });
lyr_BUILDING_5.set('fieldImages', {'id': '', });
lyr_TIANGLAMPU_1.set('fieldLabels', {'id': 'no label', 'NAMA': 'no label', 'ALAMAT': 'no label', 'PHOTO': 'no label', });
lyr_PILIBOMBA_2.set('fieldLabels', {'id': 'no label', 'NAMA': 'no label', 'PHOTO': 'no label', 'ALAMAT': 'no label', });
lyr_MANHOLE_3.set('fieldLabels', {'id': 'no label', 'NAMA': 'no label', 'ALAMAT': 'no label', 'PHOTO': 'no label', });
lyr_JALAN_4.set('fieldLabels', {'id': 'no label', 'NAMA': 'no label', 'LEBAR': 'no label', 'PANJANG': 'no label', });
lyr_BUILDING_5.set('fieldLabels', {'id': 'no label', });
lyr_BUILDING_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});