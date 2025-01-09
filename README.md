# Global 30 m Land Productivity Dynamics (LPD) Dataset Generation Code

This document contains the process code for generating the global 30 m land productivity dynamics (LPD) dataset from 2013 to 2022 based on Google Earth Engine (GEE).

## Dataset Description
This dataset is the first global-scale 30 m LPD product covering the period from 2013 to 2022, providing essential data support for the global monitoring and reporting of SDG 15.3.1.

## Method
Leveraging the Google Earth Engine (GEE) platform and utilizing Landsat-8 and MODIS imagery, the dataset was generated using the Gap-filling and Savitzky–Golay filtering (GF-SG) algorithm ([DOI:10.1016/j.isprsjprs.2021.08.015](https://doi.org/10.1016/j.isprsjprs.2021.08.015)), an advanced spatiotemporal filtering method, and the FAO-WOCAT methodology ([DOI:10.5281/zenodo.10849368](https://doi.org/10.5281/zenodo.10849368)).

## File Description

- **`Obtain_the_annual_mean_NDVI.js`**:  
  This file contains the code for obtaining the annual mean NDVI dataset, where the GF-SG algorithm is applied.  
  Users can modify the initial latitude and longitude range and date to generate high-quality 30 m spatiotemporal fusion NDVI datasets for their region of interest.

- **`Advanced_spatiotemporal_filtering.js`**:  
  This file contains the code for further optimization of the NDVI dataset obtained in the first step.  
  Since data gaps and anomalies easily occur in cloudy regions, this step uses the temporally consistent MODIS time series to correct these anomalies and produce a spatiotemporally consistent 30 m NDVI dataset.

- **`LPD_calculation.js`**:  
  This file includes the code for calculating LPD based on the FAO-WOCAT methodology.  
  It primarily involves the computation of three sub-indicators: steadiness, initial biomass, and state.
