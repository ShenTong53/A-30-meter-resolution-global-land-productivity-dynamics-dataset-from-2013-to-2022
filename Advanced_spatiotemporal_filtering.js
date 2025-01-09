var visParam2 = {"min":0,"max":10000,"palette":["FF0000","FF8800","FFFF00","00FF00","00FFFF","#000000"]},
    d1 = ee.FeatureCollection("projects/ee-ldn-gee4geo/assets/Global_LPDI_ndv/1_dissolve"),
    d2 = ee.FeatureCollection("projects/ee-ldn-gee4geo/assets/Global_LPDI_ndv/2_dissolve");
var geometry_dalu = d1.merge(d2)
var visParam3 = {"min":0,"max":3000,"palette":["FF0000","FF8800","FFFF00","00FF00","00FFFF","#000000"]}
// var global = 
//     /* color: #d63000 */
//     /* displayProperties: [
//       {
//         "type": "rectangle"
//       }
//     ] */
//     ee.Geometry.Polygon(
//         [[[-179, 88],
//           [-179, -88],
//           [180, -88],
//           [180, 88]]], null, false);

var global = ee.Geometry.Polygon([-180, 88, 0, 88, 180, 88, 180, -88, 0, -88, -180, -88], null, false);

var getNDVI = require("users/shentong53/exercise1:LDN_优化/get_global_ndvi_function");

var geometry = global

//var geometry = geometry1//.buffer(100)

var imagelist = getNDVI.do(geometry)
//var origin_img_list=ee.List([image2013_yazhou2.clip(geometry),image2014_yazhou2.clip(geometry),image2015_yazhou2.clip(geometry),image2016_yazhou2.clip(geometry),image2017_yazhou2.clip(geometry),image2018_yazhou2.clip(geometry),image2019_yazhou2.clip(geometry),image2020_yazhou2.clip(geometry),image2021.clip(geometry),image2022.clip(geometry)]);
var land_ndvi_2013 = ee.Image(imagelist.get(0))
var land_ndvi_2014 = ee.Image(imagelist.get(1))
var land_ndvi_2015 = ee.Image(imagelist.get(2))
var land_ndvi_2016 = ee.Image(imagelist.get(3))
var land_ndvi_2017 = ee.Image(imagelist.get(4))
var land_ndvi_2018 = ee.Image(imagelist.get(5))
var land_ndvi_2019 = ee.Image(imagelist.get(6))
var land_ndvi_2020 = ee.Image(imagelist.get(7))
var land_ndvi_2021 = ee.Image(imagelist.get(8))
var land_ndvi_2022 = ee.Image(imagelist.get(9))

//Map.addLayer(land_ndvi_2013,visParam2,'landsat_2013')
//Map.addLayer(land_ndvi_2013.multiply(0.2030).add(1500),visParam2,'2013-2000')
//Map.addLayer(ee.ImageCollection([land_ndvi_2013,land_ndvi_2014,land_ndvi_2015,land_ndvi_2016,land_ndvi_2017,land_ndvi_2018,land_ndvi_2019,land_ndvi_2020,land_ndvi_2021,land_ndvi_2022]),visParam2,'land_ndvi')
// Map.addLayer(ndvi2014,visParam2,'2014')
// Map.addLayer(ndvi2015,visParam2,'2015')
// Map.addLayer(ndvi2016,visParam2,'2016')
// Map.addLayer(ndvi2017,visParam2,'2017')
// Map.addLayer(ndvi2018,visParam2,'2018')
// Map.addLayer(ndvi2019,visParam2,'2019')
// Map.addLayer(ndvi2020,visParam2,'2020')
// Map.addLayer(ndvi2021,visParam2,'2021')
// Map.addLayer(ndvi2022,visParam2,'2022')

//****************************************************************************************************************************
var modis_ndvi_2013 = ee.ImageCollection("MODIS/061/MOD13Q1")
              .filterDate('2013-01-01', '2014-01-01')
              .select('NDVI').mean().clip(global);//.reproject({crs:'EPSG:4326',scale:250});
var modis_ndvi_2014 = ee.ImageCollection("MODIS/061/MOD13Q1")
              .filterDate('2014-01-01', '2015-01-01')
              .select('NDVI').mean().clip(global);//.reproject({crs:'EPSG:4326',scale:250});
var modis_ndvi_2015 = ee.ImageCollection("MODIS/061/MOD13Q1")
              .filterDate('2015-01-01', '2016-01-01')
              .select('NDVI').mean().clip(global);//.reproject({crs:'EPSG:4326',scale:250});
var modis_ndvi_2016 = ee.ImageCollection("MODIS/061/MOD13Q1")
              .filterDate('2016-01-01', '2017-01-01')
              .select('NDVI').mean().clip(global);//.reproject({crs:'EPSG:4326',scale:250});
var modis_ndvi_2017 = ee.ImageCollection("MODIS/061/MOD13Q1")
              .filterDate('2017-01-01', '2018-01-01')
              .select('NDVI').mean().clip(global);//.reproject({crs:'EPSG:4326',scale:250});
var modis_ndvi_2018 = ee.ImageCollection("MODIS/061/MOD13Q1")
              .filterDate('2018-01-01', '2019-01-01')
              .select('NDVI').mean().clip(global);//.reproject({crs:'EPSG:4326',scale:250});
var modis_ndvi_2019 = ee.ImageCollection("MODIS/061/MOD13Q1")
              .filterDate('2019-01-01', '2020-01-01')
              .select('NDVI').mean().clip(global);//.reproject({crs:'EPSG:4326',scale:250});
var modis_ndvi_2020 = ee.ImageCollection("MODIS/061/MOD13Q1")
              .filterDate('2020-01-01', '2021-01-01')
              .select('NDVI').mean().clip(global);//.reproject({crs:'EPSG:4326',scale:250});
var modis_ndvi_2021 = ee.ImageCollection("MODIS/061/MOD13Q1")
              .filterDate('2021-01-01', '2022-01-01')
              .select('NDVI').mean().clip(global);//.reproject({crs:'EPSG:4326',scale:250});
var modis_ndvi_2022 = ee.ImageCollection("MODIS/061/MOD13Q1")
              .filterDate('2022-01-01', '2023-01-01')
              .select('NDVI').mean().clip(global);//.reproject({crs:'EPSG:4326',scale:250});//

//Map.addLayer(modis_ndvi_2013,visParam2,'modis_2013')
//Map.addLayer(ee.ImageCollection([modis_ndvi_2013,modis_ndvi_2014,modis_ndvi_2015,modis_ndvi_2016,modis_ndvi_2017,modis_ndvi_2018,modis_ndvi_2019,modis_ndvi_2020,modis_ndvi_2021,modis_ndvi_2022]),visParam2,'modis_ndvi')
//****************************************************************************************************
//var chazhi_2013 = modis_ndvi_2013.subtract(land_ndvi_2013).abs()
var yuzhi1 = 800
var right_2013_mask = modis_ndvi_2013.subtract(land_ndvi_2013).abs().lte(yuzhi1).selfMask() //
var right_2014_mask = modis_ndvi_2014.subtract(land_ndvi_2014).abs().lte(yuzhi1).selfMask()
var right_2015_mask = modis_ndvi_2015.subtract(land_ndvi_2015).abs().lte(yuzhi1).selfMask()
var right_2016_mask = modis_ndvi_2016.subtract(land_ndvi_2016).abs().lte(yuzhi1).selfMask()
var right_2017_mask = modis_ndvi_2017.subtract(land_ndvi_2017).abs().lte(yuzhi1).selfMask()
var right_2018_mask = modis_ndvi_2018.subtract(land_ndvi_2018).abs().lte(yuzhi1).selfMask()
var right_2019_mask = modis_ndvi_2019.subtract(land_ndvi_2019).abs().lte(yuzhi1).selfMask()
var right_2020_mask = modis_ndvi_2020.subtract(land_ndvi_2020).abs().lte(yuzhi1).selfMask()
var right_2021_mask = modis_ndvi_2021.subtract(land_ndvi_2021).abs().lte(yuzhi1).selfMask()
var right_2022_mask = modis_ndvi_2022.subtract(land_ndvi_2022).abs().lte(yuzhi1).selfMask()

var all_mask = ee.ImageCollection([right_2013_mask,right_2014_mask,right_2015_mask,right_2016_mask,right_2017_mask,
                                   right_2018_mask,right_2019_mask,right_2020_mask,right_2021_mask,right_2022_mask]).sum().unmask(0).eq(0).selfMask()
//Map.addLayer(ee.ImageCollection([right_2013_mask,right_2014_mask,right_2015_mask,right_2016_mask,right_2017_mask,right_2018_mask,right_2019_mask,right_2020_mask,right_2021_mask,right_2022_mask]),visParam2,'right_mask')
//Map.addLayer(all_mask,null,'right_mask_sum')

var landsat_median = ee.ImageCollection(imagelist).median()
var modis_median = ee.ImageCollection([modis_ndvi_2013,modis_ndvi_2014,modis_ndvi_2015,modis_ndvi_2016,modis_ndvi_2017,modis_ndvi_2018,modis_ndvi_2019,modis_ndvi_2020,modis_ndvi_2021,modis_ndvi_2022]).median()
var difference_landsat_modis = landsat_median.subtract(modis_median)

var constant_correction_land_ndvi_2013 = ee.ImageCollection([land_ndvi_2013.subtract(difference_landsat_modis).updateMask(all_mask),land_ndvi_2013.updateMask(right_2013_mask)]).mosaic()
var constant_correction_land_ndvi_2014 = ee.ImageCollection([land_ndvi_2014.subtract(difference_landsat_modis).updateMask(all_mask),land_ndvi_2014.updateMask(right_2014_mask)]).mosaic()
var constant_correction_land_ndvi_2015 = ee.ImageCollection([land_ndvi_2015.subtract(difference_landsat_modis).updateMask(all_mask),land_ndvi_2015.updateMask(right_2015_mask)]).mosaic()
var constant_correction_land_ndvi_2016 = ee.ImageCollection([land_ndvi_2016.subtract(difference_landsat_modis).updateMask(all_mask),land_ndvi_2016.updateMask(right_2016_mask)]).mosaic()
var constant_correction_land_ndvi_2017 = ee.ImageCollection([land_ndvi_2017.subtract(difference_landsat_modis).updateMask(all_mask),land_ndvi_2017.updateMask(right_2017_mask)]).mosaic()
var constant_correction_land_ndvi_2018 = ee.ImageCollection([land_ndvi_2018.subtract(difference_landsat_modis).updateMask(all_mask),land_ndvi_2018.updateMask(right_2018_mask)]).mosaic()
var constant_correction_land_ndvi_2019 = ee.ImageCollection([land_ndvi_2019.subtract(difference_landsat_modis).updateMask(all_mask),land_ndvi_2019.updateMask(right_2019_mask)]).mosaic()
var constant_correction_land_ndvi_2020 = ee.ImageCollection([land_ndvi_2020.subtract(difference_landsat_modis).updateMask(all_mask),land_ndvi_2020.updateMask(right_2020_mask)]).mosaic()
var constant_correction_land_ndvi_2021 = ee.ImageCollection([land_ndvi_2021.subtract(difference_landsat_modis).updateMask(all_mask),land_ndvi_2021.updateMask(right_2021_mask)]).mosaic()
var constant_correction_land_ndvi_2022 = ee.ImageCollection([land_ndvi_2022.subtract(difference_landsat_modis).updateMask(all_mask),land_ndvi_2022.updateMask(right_2022_mask)]).mosaic()

//Map.addLayer(constant_correction_land_ndvi_2013,visParam2,'constant_correction')
//Map.addLayer(ee.ImageCollection([constant_correction_land_ndvi_2013,constant_correction_land_ndvi_2014,constant_correction_land_ndvi_2015,constant_correction_land_ndvi_2016,constant_correction_land_ndvi_2017,
//                                 constant_correction_land_ndvi_2018,constant_correction_land_ndvi_2019,constant_correction_land_ndvi_2020,constant_correction_land_ndvi_2021,constant_correction_land_ndvi_2022]),visParam2,'constant_correction')

var bili_2013 = constant_correction_land_ndvi_2013.divide(modis_ndvi_2013)//Landsat/MODIS
var bili_2014 = constant_correction_land_ndvi_2014.divide(modis_ndvi_2014)
var bili_2015 = constant_correction_land_ndvi_2015.divide(modis_ndvi_2015)
var bili_2016 = constant_correction_land_ndvi_2016.divide(modis_ndvi_2016)
var bili_2017 = constant_correction_land_ndvi_2017.divide(modis_ndvi_2017)
var bili_2018 = constant_correction_land_ndvi_2018.divide(modis_ndvi_2018)
var bili_2019 = constant_correction_land_ndvi_2019.divide(modis_ndvi_2019)
var bili_2020 = constant_correction_land_ndvi_2020.divide(modis_ndvi_2020)
var bili_2021 = constant_correction_land_ndvi_2021.divide(modis_ndvi_2021)
var bili_2022 = constant_correction_land_ndvi_2022.divide(modis_ndvi_2022)

//Map.addLayer(ee.ImageCollection([bili_2013,bili_2014,bili_2015,bili_2016,bili_2017,bili_2018,bili_2019,bili_2020,bili_2021,bili_2022]),visParam2,'bili')

var right_2013_mask_tianbuhou = modis_ndvi_2013.subtract(constant_correction_land_ndvi_2013).abs().lte(yuzhi1).selfMask()
var right_2014_mask_tianbuhou = modis_ndvi_2014.subtract(constant_correction_land_ndvi_2014).abs().lte(yuzhi1).selfMask()
var right_2015_mask_tianbuhou = modis_ndvi_2015.subtract(constant_correction_land_ndvi_2015).abs().lte(yuzhi1).selfMask()
var right_2016_mask_tianbuhou = modis_ndvi_2016.subtract(constant_correction_land_ndvi_2016).abs().lte(yuzhi1).selfMask()
var right_2017_mask_tianbuhou = modis_ndvi_2017.subtract(constant_correction_land_ndvi_2017).abs().lte(yuzhi1).selfMask()
var right_2018_mask_tianbuhou = modis_ndvi_2018.subtract(constant_correction_land_ndvi_2018).abs().lte(yuzhi1).selfMask()
var right_2019_mask_tianbuhou = modis_ndvi_2019.subtract(constant_correction_land_ndvi_2019).abs().lte(yuzhi1).selfMask()
var right_2020_mask_tianbuhou = modis_ndvi_2020.subtract(constant_correction_land_ndvi_2020).abs().lte(yuzhi1).selfMask()
var right_2021_mask_tianbuhou = modis_ndvi_2021.subtract(constant_correction_land_ndvi_2021).abs().lte(yuzhi1).selfMask()
var right_2022_mask_tianbuhou = modis_ndvi_2022.subtract(constant_correction_land_ndvi_2022).abs().lte(yuzhi1).selfMask()

var right_2013 = bili_2013.updateMask(right_2013_mask_tianbuhou)//gt 800 mask
var right_2014 = bili_2014.updateMask(right_2014_mask_tianbuhou)
var right_2015 = bili_2015.updateMask(right_2015_mask_tianbuhou)
var right_2016 = bili_2016.updateMask(right_2016_mask_tianbuhou)
var right_2017 = bili_2017.updateMask(right_2017_mask_tianbuhou)
var right_2018 = bili_2018.updateMask(right_2018_mask_tianbuhou)
var right_2019 = bili_2019.updateMask(right_2019_mask_tianbuhou)
var right_2020 = bili_2020.updateMask(right_2020_mask_tianbuhou)
var right_2021 = bili_2021.updateMask(right_2021_mask_tianbuhou)
var right_2022 = bili_2022.updateMask(right_2022_mask_tianbuhou)

//Map.addLayer(right_2013,visParam2,'right_2013')

//Map.addLayer(ee.ImageCollection([right_2013,right_2014,right_2015,right_2016,right_2017,right_2018,right_2019,right_2020,right_2021,right_2022]),visParam2,'right')

var tianbu_2013 = ee.ImageCollection([right_2022,right_2021,right_2020,right_2019,right_2018,right_2017,right_2016,right_2015,right_2014,right_2013]).mosaic()
var tianbu_2014 = ee.ImageCollection([right_2022,right_2021,right_2020,right_2019,right_2018,right_2017,right_2016,ee.ImageCollection([right_2013,right_2015]).mean(),right_2014]).mosaic()
var tianbu_2015 = ee.ImageCollection([right_2022,right_2021,right_2020,right_2019,right_2018,ee.ImageCollection([right_2013,right_2017]).mean(),ee.ImageCollection([right_2014,right_2016]).mean(),right_2015]).mosaic()
var tianbu_2016 = ee.ImageCollection([right_2022,right_2021,right_2020,ee.ImageCollection([right_2013,right_2019]).mean(),ee.ImageCollection([right_2014,right_2018]).mean(),ee.ImageCollection([right_2015,right_2017]).mean(),right_2016]).mosaic()
var tianbu_2017 = ee.ImageCollection([right_2022,ee.ImageCollection([right_2013,right_2021]).mean(),ee.ImageCollection([right_2014,right_2020]).mean(),ee.ImageCollection([right_2015,right_2019]).mean(),ee.ImageCollection([right_2016,right_2018]).mean(),right_2017]).mosaic()
var tianbu_2018 = ee.ImageCollection([right_2013,ee.ImageCollection([right_2014,right_2022]).mean(),ee.ImageCollection([right_2015,right_2021]).mean(),ee.ImageCollection([right_2016,right_2020]).mean(),ee.ImageCollection([right_2017,right_2019]).mean(),right_2018]).mosaic()
var tianbu_2019 = ee.ImageCollection([right_2013,right_2014,right_2015,ee.ImageCollection([right_2016,right_2022]).mean(),ee.ImageCollection([right_2017,right_2021]).mean(),ee.ImageCollection([right_2018,right_2020]).mean(),right_2019]).mosaic()
var tianbu_2020 = ee.ImageCollection([right_2013,right_2014,right_2015,right_2016,right_2017,ee.ImageCollection([right_2018,right_2022]).mean(),ee.ImageCollection([right_2019,right_2021]).mean(),right_2020]).mosaic()
var tianbu_2021 = ee.ImageCollection([right_2013,right_2014,right_2015,right_2016,right_2017,right_2018,right_2019,ee.ImageCollection([right_2020,right_2022]).mean(),right_2021]).mosaic()
var tianbu_2022 = ee.ImageCollection([right_2013,right_2014,right_2015,right_2016,right_2017,right_2018,right_2019,right_2020,right_2021,right_2022]).mosaic()

//Map.addLayer(tianbu_2013,visParam2,'tianbu_2013')
var result_2013_after_time = tianbu_2013.multiply(modis_ndvi_2013)
var result_2014_after_time = tianbu_2014.multiply(modis_ndvi_2014)
var result_2015_after_time = tianbu_2015.multiply(modis_ndvi_2015)
var result_2016_after_time = tianbu_2016.multiply(modis_ndvi_2016)
var result_2017_after_time = tianbu_2017.multiply(modis_ndvi_2017)
var result_2018_after_time = tianbu_2018.multiply(modis_ndvi_2018)
var result_2019_after_time = tianbu_2019.multiply(modis_ndvi_2019)
var result_2020_after_time = tianbu_2020.multiply(modis_ndvi_2020)
var result_2021_after_time = tianbu_2021.multiply(modis_ndvi_2021)
var result_2022_after_time = tianbu_2022.multiply(modis_ndvi_2022)

// Map.addLayer(result_2013_after_time,visParam2,'result_2013_after_time')
// Map.addLayer(ee.ImageCollection([result_2013_after_time,result_2014_after_time,result_2015_after_time,result_2016_after_time,result_2017_after_time,result_2018_after_time,
//                                 result_2019_after_time,result_2020_after_time,result_2021_after_time,result_2022_after_time]),visParam2,'result_after_time')



var result_2013_after_mean = result_2013_after_time.reduceNeighborhood({
    'reducer':ee.Reducer.mean(),
    'kernel':ee.Kernel.square(3),
    'inputWeight':'mask'
}
)
Map.addLayer(result_2013_after_mean,visParam2,'result_2013_after_mean_window3')

// var result_2013_after_mean = result_2013.reduceNeighborhood({
//     'reducer':ee.Reducer.mean(),
//     'kernel':ee.Kernel.square(2),
//     'inputWeight':'mask'
// }
// )
// Map.addLayer(result_2013_after_mean,visParam2,'result_2013_after_mean_window2')
//var clip_1 = ee.Geometry.Polygon([-180, 88, 0, 88, 180, 88, 180, -88, 0, -88, -180, -88], null, false);
//45

var clip_1 = ee.Geometry.Polygon([-180, 88, -157, 88, -134, 88, -134, -88, -157, -88, -180, -88], null, false);//45
var clip_2 = ee.Geometry.Polygon([-135, 88, -112, 88, -89, 88, -89, -88, -112, -88, -135, -88], null, false);
var clip_3 = ee.Geometry.Polygon([-90, 88, -67, 88, -44, 88, -44, -88, -67, -88, -90, -88], null, false);
var clip_4 = ee.Geometry.Polygon([-45, 88, -22, 88, 1, 88, 1, -88, -22, -88, -45, -88], null, false);
var clip_5 = ee.Geometry.Polygon([0, 88, 23, 88, 46, 88, 46, -88, 23, -88, 0, -88], null, false);
var clip_6 = ee.Geometry.Polygon([45, 88, 68, 88, 91, 88, 91, -88, 68, -88, 45, -88], null, false);
var clip_7 = ee.Geometry.Polygon([90, 88, 113, 88, 136, 88, 136, -88, 113, -88, 90, -88], null, false);
var clip_8 = ee.Geometry.Polygon([135, 88, 158, 88, 180, 88, 180, -88, 158, -88, 135, -88], null, false);

var clip_geo = clip_8
Export.image.toAsset({
  image: result_2013_after_mean.clip(clip_geo).toInt(),
  description: 'ndvi_result_2013_after_mean_clip_8',
  assetId:'Global_ndvi_after_youhua6/ndvi_result_2013_after_mean_clip_8',
  scale: 30,
  region: clip_geo,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});



