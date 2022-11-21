import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as http from 'http';
import * as fs from 'fs';
import bodyParser from 'body-parser'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import ejs from 'ejs'
import {degrees, PDFDocument, rgb, StandardFonts, TextAlignment} from 'pdf-lib';

var app  = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
)

app.use(
  "/views",
  express.static(path.join(__dirname, "views"))
)

app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
)
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")))


var listener = app.listen(3001, function(){
  console.log("server running on port 3001");
});

app.get('/new', function(req,res){
  res.sendFile('/projects/bos/new.html');
});

//contractDay,contractMonth,contractYear,firstName,middleName,lastName,address,city,province,postalCode,telephone,driversLicenseNo,driversLicenseEx,email,


app.post('/BOS/Submit', function(req,res){
  console.log(req.body);
  console.log("data recieved!");
  modifyPdf(req.body.contractDay,req.body.contractMonth,req.body.contractYear,req.body.firstName,req.body.middleName,
    req.body.lastName,req.body.address,req.body.city,req.body.province,
    req.body.postalCode,req.body.telephone,req.body.driversLicenseNo,
    req.body.driversLicenseEx,req.body.email,
    req.body.vehicleYear,req.body.vehicleMake,req.body.vehicleModel,req.body.vehicleBodyType,
    req.body.vehicleColour,req.body.vehicleStock,req.body.vin,req.body.distanceTravelled)

});

app.get('/BOS', function(req,res){
   
    // Render page using renderFile method
    ejs.renderFile(path.join(__dirname,'/views/bos.ejs'), {}, 
        {}, function (err, template) {
        if (err) {
            throw err;
        } else {
            res.end(template);
        }
    });
});

modifyPdf();

async function modifyPdf(contractDay,contractMonth,contractYear,firstName,middleName,lastName,address,
  city,province,postalCode,telephone,driversLicenseNo,driversLicenseEx,email,
  vehicleYear,vehicleMake,vehicleModel,vehicleBodyType,vehicleColour,vehicleStock,vin,distanceTravelled) {
    const BOS = await PDFDocument.load(fs.readFileSync('/projects/bos/BOS.PDF'))
    const helveticaFont = await BOS.embedFont(StandardFonts.Helvetica)
    const pages = BOS.getPages()
    const firstPage = pages[0]

    const { width, height } = firstPage.getSize()

    console.log(height);

    const form = BOS.getForm()

    const contract_DD = form.createTextField("contract_DD");

    contract_DD.addToPage(firstPage, {
      x: 495,
      y: 706,
      width: 12,
      height: 14,
      textSize: 10,
      textColor: rgb(1, 0, 0),
      borderWidth: 0,
      font: helveticaFont,
    })

    const contract_MM = form.createTextField("contract_MM");

    contract_MM.addToPage(firstPage, {
      x: 530,
      y: 706,
      width: 12,
      height: 14,
      textSize: 10,
      textColor: rgb(1, 0, 0),
      borderWidth: 0,
      font: helveticaFont,
    })

    const contract_YY = form.createTextField("contract_YY");

    contract_YY.addToPage(firstPage, {
      x: 560,
      y: 706,
      width: 24,
      height: 14,
      textSize: 10,
      textColor: rgb(1, 0, 0),
      borderWidth: 0,
      font: helveticaFont,
    })

    firstPage.drawText('Berlin Auto Sales Inc', {
      x: 20,
      y: 780,
      size: 20,
      font: helveticaFont,
    })

    firstPage.drawText('105 Breithaupt St.', {
      x: 20,
      y: 765,
      size: 10,
      font: helveticaFont,
    })

    firstPage.drawText('Kitchener, ON  N2H 5G9', {
      x: 20,
      y: 750,
      size: 10,
      font: helveticaFont,
    })

    firstPage.drawText('T: 226 336 7873 F: 519 745 7856', {
      x: 20,
      y: 735,
      size: 10,
      font: helveticaFont,
    })

    firstPage.drawText('E: info@berlinautosales.ca', {
      x: 20,
      y: 720,
      size: 10,
      font: helveticaFont,
    })

    const first_name = form.createTextField("first_name");

    first_name.addToPage(firstPage, {
      x: 67,
      y: 672,
      width: 70,
      height: 13,
      textSize: 10,
      textColor: rgb(1, 0, 0),
      borderWidth: 0,
      font: helveticaFont,
    })

    const middle_name = form.createTextField("middle_name");

    middle_name.addToPage(firstPage, {
      x: 150,
      y: 672,
      width: 70,
      height: 13,
      textSize: 10,
      textColor: rgb(1, 0, 0),
      borderWidth: 0,
      font: helveticaFont,
    })


    const last_name = form.createTextField("last_name");

    last_name.addToPage(firstPage, {
      x: 230,
      y: 672,
      width: 70,
      height: 13,
      textSize: 10,
      textColor: rgb(1, 0, 0),
      borderWidth: 0,
      font: helveticaFont,
    })

    const purchaser_address = form.createTextField("purchaser_address");

    purchaser_address.addToPage(firstPage, {
      x: 20,
      y: 652,
      width: 200,
      height: 13,
      textSize: 10,
      textColor: rgb(1, 0, 0),
      borderWidth: 0,
      font: helveticaFont,
    })

    const purchaser_city = form.createTextField("purchaser_city");

    purchaser_city.addToPage(firstPage, {
        x: 20,
        y: 632,
      width: 100,
      height: 13,
      textSize: 10,
      textColor: rgb(1, 0, 0),
      borderWidth: 0,
      font: helveticaFont,
    })



    const purchaser_prov = form.createTextField("purchaser_prov");

    purchaser_prov.addToPage(firstPage, {
      x: 162,
        y: 632,
      width: 50,
      height: 13,
      textSize: 10,
      textColor: rgb(1, 0, 0),
      borderWidth: 0,
      font: helveticaFont,
    })



///////////////////////////

const purchaser_pc = form.createTextField("purchaser_pc");

purchaser_pc.addToPage(firstPage, {
  x: 236,
    y: 632,
  width: 50,
  height: 13,
  textSize: 10,
  textColor: rgb(1, 0, 0),
  borderWidth: 0,
  font: helveticaFont,
})



///////////////////////////

const purchaser_tn = form.createTextField("purchaser_tn");

purchaser_tn.addToPage(firstPage, {
  x: 20,
  y: 610,
  width: 80,
  height: 13,
  textSize: 10,
  textColor: rgb(1, 0, 0),
  borderWidth: 0,
  font: helveticaFont,
})




///////////////////////////

const purchaser_bn = form.createTextField("purchaser_bn");

purchaser_bn.addToPage(firstPage, {
  x: 162,
  y: 610,
  width: 80,
  height: 13,
  textSize: 10,
  textColor: rgb(1, 0, 0),
  borderWidth: 0,
  font: helveticaFont,
})

//purchaser_bn.setText('226 336 7873');


///////////////////////////

const driver_license = form.createTextField("driver_license");

driver_license.addToPage(firstPage, {
  x: 20,
  y: 595,
  width: 80,
  height: 9,
  textSize: 12,
  textColor: rgb(1, 0, 0),
  borderWidth: 0,
  font: helveticaFont,
})




///////////////////////////

const dl_expiry = form.createTextField("dl_expiry");

dl_expiry.addToPage(firstPage, {
  x: 240,
  y: 595,
  width: 40,
  height: 9,
  textSize: 10,
  textColor: rgb(1, 0, 0),
  borderWidth: 0,
  font: helveticaFont,
})





///////////////////////////

const purhaser_email = form.createTextField("purhaser_email");

purhaser_email.addToPage(firstPage, {
  x: 20,
  y: 580,
  width: 80,
  height: 9,
  textSize: 10,
  textColor: rgb(1, 0, 0),
  borderWidth: 0,
  font: helveticaFont,
})



    //VEHICLE INFORMATION

    
const vehicle_year = form.createTextField("vehicle_year");

vehicle_year.addToPage(firstPage, {
      x: 308,
      y: 676,
      width: 18,
      height: 9,
      textSize: 10,
      textColor: rgb(1, 0, 0),
      borderWidth: 0,
      font: helveticaFont,
    })

    const vehicle_make = form.createTextField("vehicle_make");

    vehicle_make.addToPage(firstPage, {
      x: 335,
      y: 676,
      width: 50,
      height: 9,
      textSize: 10,
      textColor: rgb(1, 0, 0),
      borderWidth: 0,
      font: helveticaFont,
    })
    
    const vehicle_model = form.createTextField("vehicle_model");

    vehicle_model.addToPage(firstPage, {
      x: 400,
      y: 676,
      width: 50,
      height: 9,
      textSize: 10,
      textColor: rgb(1, 0, 0),
      borderWidth: 0,
      font: helveticaFont,
    })
    
    const vehicle_body_type = form.createTextField("vehicle_body_type");

    vehicle_body_type.addToPage(firstPage, {
      x: 462,
      y: 676,
      width: 40,
      height: 9,
      textSize: 10,
      textColor: rgb(1, 0, 0),
      borderWidth: 0,
      font: helveticaFont,
    })
    
    const vehicle_colour = form.createTextField("vehicle_colour");

    vehicle_colour.addToPage(firstPage, {
      x: 510,
      y: 676,
      width: 30,
      height: 9,
      textSize: 10,
      textColor: rgb(1, 0, 0),
      borderWidth: 0,
      font: helveticaFont,
    })
    

    const vehicle_stock = form.createTextField("vehicle_stock");

    vehicle_stock.addToPage(firstPage, {
      x: 550,
      y: 676,
      width: 40,
      height: 9,
      textSize: 10,
      textColor: rgb(1, 0, 0),
      borderWidth: 0,
      font: helveticaFont,
    })
    

    const vehicle_vin = form.createTextField("vehicle_vin");

    vehicle_vin.addToPage(firstPage, {  x: 312,
      y: 654,
      width: 150,
      height: 10,
      textSize: 12,
      textColor: rgb(1, 0, 0),
      borderWidth: 0,
      font: helveticaFont,
    })
    

/*
//KMS
if (vehicleInKMS == true)
{
    firstPage.drawText('x', {
      x: 359,
      y: 642,
      width: 80,
      height: 9,
      textSize: 10,
      textColor: rgb(1, 0, 0),
      borderWidth: 0,
      font: helveticaFont,
    })
  }

  //MILES
  else if (vehicleInMiles = true)
  {
    firstPage.drawText('x', {
      x: 386,
      y: 642,
      width: 80,
      height: 9,
      textSize: 10,
      textColor: rgb(1, 0, 0),
      borderWidth: 0,
      font: helveticaFont,
    })
  }
    
if (vehileDistanceUnknown == true)
{
//DISTANCE UNKNOWN
firstPage.drawText('x', {
  x: 412,
  y: 642,
  width: 80,
  height: 9,
  textSize: 10,
  textColor: rgb(1, 0, 0),
  borderWidth: 0,
  font: helveticaFont,
})
}

if (vehileLastKnownDistance == true)
{
//DISTANCE UNKNOWN  (last known mileage)
firstPage.drawText('x', {
  x: 412,
  y: 635,
  width: 80,
  height: 9,
  textSize: 10,
  textColor: rgb(1, 0, 0),
  borderWidth: 0,
  font: helveticaFont,
})

//DISTANCE UNKNOWN  (last known mileage) travelled
firstPage.drawText('235000', {
  x: 468,
  y: 635,
  width: 80,
  height: 9,
  textSize: 10,
  textColor: rgb(1, 0, 0),
  borderWidth: 0,
  font: helveticaFont,
})

//DISTANCE UNKNOWN  (last known mileage) as of
firstPage.drawText('235000', {
  x: 530,
  y: 635,
  width: 80,
  height: 9,
  textSize: 10,
  textColor: rgb(1, 0, 0),
  borderWidth: 0,
  font: helveticaFont,
})


}

if (actualDistanceHigher == true)
{
//ACTUAL UNKNOWN  (last known mileage)
firstPage.drawText('x', {
  x: 412,
  y: 622,
  width: 80,
  height: 9,
  textSize: 10,
  textColor: rgb(1, 0, 0),
  borderWidth: 0,
  font: helveticaFont,
})
}


*/

const vehicle_distance_travelled = form.createTextField("vehicle_distance_travelled");

vehicle_distance_travelled.addToPage(firstPage, {  x: 312,
      x: 312,
      y: 626,
      width: 80,
      height: 10,
      textSize: 12,
      textColor: rgb(1, 0, 0),
      borderWidth: 0,
      font: helveticaFont,
    })
    
  //Warranty in servic date
  firstPage.drawText('Oct 12, 2013 ', {
    x: 310,
    y: 602,
    size: 8,
    font: helveticaFont,
})

  //Delivery date in servic date
  firstPage.drawText('Oct 12, 2013 ', {
    x: 359,
    y: 602,
    size: 8,
    font: helveticaFont,
  })

    //Details of delivery
    firstPage.drawText('Delivery to clients residence ', {
      x: 415,
      y: 602,
      size: 8,
      font: helveticaFont,
    })


        //Safety YES
        firstPage.drawText('x', {
          x: 412,
          y: 592,
          size: 8,
          font: helveticaFont,
        })

            //Safety NO
    firstPage.drawText('x', {
      x: 412,
      y: 581,
      size: 8,
      font: helveticaFont,
    })


            //Daily Rental
            firstPage.drawText('x', {
              x: 480,
              y: 592,
              size: 8,
              font: helveticaFont,
            })

                        //MTO BRAND
                        firstPage.drawText('REBUILT', {
                          x: 480,
                          y: 582,
                          size: 8,
                          font: helveticaFont,
                        })
//****INSURANCE INFORMATION**************** */

//Name of insurance company
firstPage.drawText('TD INSURANCE', {
  x: 90,
  y: 550,
  size: 10,
  font: helveticaFont,
})

//Policy NUmber
firstPage.drawText('SC41250-05', {
  x: 50,
  y: 534,
  size: 10,
  font: helveticaFont,
})


//Expiry Date
firstPage.drawText('SC41250-05', {
  x: 165,
  y: 534,
  size: 10,
  font: helveticaFont,
})

//Insurance Agent and Phone Number
firstPage.drawText('Mike 519 745 7856', {
  x: 90,
  y: 518,
  size: 10,
  font: helveticaFont,
})


//Vehicle to be traded in

//year
firstPage.drawText('12', {
  x: 20,
  y: 486,
  size: 10,
  font: helveticaFont,
})
//make
firstPage.drawText('Mazda', {
  x: 44,
  y: 486,
  size: 10,
  font: helveticaFont,
})//model
firstPage.drawText('CX3', {
  x: 110,
  y: 486,
  size: 10,
  font: helveticaFont,
})
//trim
firstPage.drawText('GT', {
  x: 162,
  y: 486,
  size: 10,
  font: helveticaFont,
})
//colour
firstPage.drawText('WHITE', {
  x: 202,
  y: 486,
  size: 8,
  font: helveticaFont,
})

//VIN
firstPage.drawText('VIN', {
  x: 20,
  y: 466,
  size: 10,
  font: helveticaFont,
})

//Distance
firstPage.drawText('145000', {
  x: 22,
  y: 440,
  size: 10,
  font: helveticaFont,
})

//KM
firstPage.drawText('x', {
  x: 134,
  y: 442,
  size: 10,
  font: helveticaFont,
})


//MILES
firstPage.drawText('x', {
  x: 172,
  y: 442,
  size: 10,
  font: helveticaFont,
})

//HST
firstPage.drawText('45454', {
  x: 140,
  y: 425,
  size: 8,
  font: helveticaFont,
})


//Lien yes
firstPage.drawText('x', {
  x: 162,
  y: 414,
  size: 8,
  font: helveticaFont,
})

//Lien no
firstPage.drawText('x', {
  x: 196,
  y: 414,
  size: 8,
  font: helveticaFont,
})

//Lien Holder Name
firstPage.drawText('TD', {
  x: 60,
  y: 402,
  size: 8,
  font: helveticaFont,
})

//Lien Amount
firstPage.drawText('$25,000', {
  x: 200,
  y: 402,
  size: 8,
  font: helveticaFont,
})


//Comments
firstPage.drawText('CARFAX COLLISION CLAIM COLLISION CLAIM COLLISION CLAIM COLLISION CLAIM COLLISION CLAIM COLLISION CLAIM COLLISION CLAIM COLLISION CLAIM CLAIM COLLISION CLAIM CLAIM COLLISION CLAIM CLAIM COLLISION CLAIM CLAIM COLLISION CLAIM CLAIM COLLISION CLAIM', {
  x: 20,
  y: 357,
  size: 8,
  font: helveticaFont,
  lineHeight: 17,
  maxWidth: 200,
})


//CAMVAP


//CAMVAP yes
firstPage.drawText('x', {
  x: 168,
  y: 237,
  size: 8,
  font: helveticaFont,
})

//CAMVAP no
firstPage.drawText('x', {
  x: 199,
  y: 237,
  size: 8,
  font: helveticaFont,
})


//*Sales Person Signature********************************************************/

//Sales Person
firstPage.drawText('Farhan Hossein', {
  x: 20,
  y: 145,
  size: 10,
  font: helveticaFont,
})

//Register number
firstPage.drawText('5469499', {
  x: 180,
  y: 145,
  size: 10,
  font: helveticaFont,
})

//Sales Person Signature
firstPage.drawText('Farhan Hossein', {
  x: 20,
  y: 120,
  size: 10,
  font: helveticaFont,
})


//**Vendor Acceptance ******************************************************** */

//Dealer Registration Number
firstPage.drawText('5469499', {
  x: 20,
  y: 88,
  size: 10,
  font: helveticaFont,
})

//Name of Offical
firstPage.drawText('Farhan Hossein', {
  x: 110,
  y: 86,
  size: 10,
  font: helveticaFont,
})

//Acceptaor Registratio Number
firstPage.drawText('5469499', {
  x: 20,
  y: 66,
  size: 10,
  font: helveticaFont,
})

//Title
firstPage.drawText('Sales Manager', {
  x: 110,
  y: 66,
  size: 10,
  font: helveticaFont,
})


//Date
firstPage.drawText('Dec, 12, 2021', {
  x: 20,
  y: 44,
  size: 10,
  font: helveticaFont,
})

//Acceptor Signature
firstPage.drawText('Farhan Hossein', {
  x: 110,
  y: 44,
  size: 10,
  font: helveticaFont,
})



//TERMS OF SETTLEMENT

const tots = [];
const c_tots = [];

const tots_cents = [];
const c_tots_cents = [];

var inc_y = 551;

for (var i = 0; i < 27 ; i++)
{
    tots[i] = 'd' + (i+1);
    tots_cents[i] = 'd_c' + (i+1);

    c_tots[i] = form.createTextField(tots[i]);
    c_tots_cents[i] = form.createTextField(tots_cents[i]);

}


for (var i = 0; i < 27 ; i++)
{
  c_tots[i].setText('1223');
  c_tots_cents[i].setText('00');

  if (i==8)
  {
    inc_y = 421;
  }

  if (i==17)
  {
    inc_y = 275;
  }


  c_tots[i].addToPage(firstPage, {
    x: 532,
    y: inc_y,
    width: 41,
    height: 13,
    textColor: rgb(1, 0, 0),
    borderWidth: 0,
    font: helveticaFont,
  })

  c_tots_cents[i].addToPage(firstPage, {
    x: 578,
    y: inc_y,
    width: 14,
    height: 13,
    textColor: rgb(1, 0, 0),
    borderWidth: 0,
    font: helveticaFont,
  })


  c_tots[i].setAlignment(TextAlignment.Right);
  c_tots_cents[i].setAlignment(TextAlignment.Left);

  inc_y = inc_y - 16;

}


const tbdue = 'tbdue';
const tbdue_cents = 'tbdue_cents';

const total_balane_due =  form.createTextField(tbdue);
const total_balane_due_cents = form.createTextField(tbdue_cents);


total_balane_due .addToPage(firstPage, {
  x: 522,
  y: 110,
  width: 50,
  height: 13,
  textColor: rgb(1, 0, 0),
  borderWidth: 0,
  font: helveticaFont,
})

total_balane_due_cents.addToPage(firstPage, {
  x: 578,
  y: 110,
  width: 14,
  height: 13,
  textColor: rgb(1, 0, 0),
  borderWidth: 0,
  font: helveticaFont,
})


contract_DD.setText(contractDay);
contract_MM.setText(contractMonth);
contract_YY.setText(contractYear);
first_name.setText(firstName);
middle_name.setText(middleName);
last_name.setText(lastName);
purchaser_address.setText(address);
purchaser_city.setText(city);
purchaser_prov.setText(province);
purchaser_pc.setText(postalCode);
purchaser_tn.setText(telephone);
driver_license.setText(driversLicenseNo);
dl_expiry.setText(driversLicenseEx);
vehicle_year.setText(vehicleYear);
vehicle_make.setText(vehicleMake);
vehicle_model.setText(vehicleModel);

vehicle_body_type.setText(vehicleBodyType);
vehicle_colour.setText(vehicleColour);
vehicle_vin.setText(vin);
vehicle_distance_travelled.setText(distanceTravelled);


total_balane_due.setText('5555');
total_balane_due_cents.setText('00');

total_balane_due.setAlignment(TextAlignment.Right);
total_balane_due_cents.setAlignment(TextAlignment.Left);


  //const pdfBytes = await BOS.save()
fs.writeFileSync('/projects/bos/Generated_BOS/BOS_NEW.PDF', await BOS.save())
  console.log("here")
}
