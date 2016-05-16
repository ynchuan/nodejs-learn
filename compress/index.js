var fs = require('fs');
var adm_zip = require('adm-zip');
var path=require("path");
var zip = new adm_zip();
zip.addLocalFolder("../zip1");
zip.writeZip('sd-zip.zip');