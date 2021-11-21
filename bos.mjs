import express from 'express';

import * as http from 'http';
import * as fs from 'fs';

import {degrees, PDFDocument, rgb, StandardFonts, TextAlignment} from 'pdf-lib';

var app  = express();

var listener = app.listen(3001, function(){
});

app.get('/new', function(req,res){
  res.sendFile('/projects/bos/new.html');
});

app.get('/BOS', function(req,res){
  res.sendFile('/projects/bos/BOS.PDF');
});

modifyPdf();



async function modifyPdf() {
    const BOS = await PDFDocument.load(fs.readFileSync('/projects/bos/BOS.PDF'))
    const helveticaFont = await BOS.embedFont(StandardFonts.Helvetica)
    const pages = BOS.getPages()
    const firstPage = pages[0]

    const { width, height } = firstPage.getSize()

    console.log(height);




    firstPage.drawText('11', {
      x: 495,
      y: 708,
      size: 10,
      font: helveticaFont,
    })

    
    firstPage.drawText('11', {
      x: 530,
      y: 708,
      size: 10,
      font: helveticaFont,
    })

    
    firstPage.drawText('1989', {
      x: 565,
      y: 708,
      size: 10,
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

    firstPage.drawText('Farhan Hossein', {
      x: 20,
      y: 676,
      size: 10,
      font: helveticaFont,
    })

    firstPage.drawText('105 Breithaupt St', {
      x: 20,
      y: 656,
      size: 10,
      font: helveticaFont,
    })

    firstPage.drawText('Waterloo', {
      x: 20,
      y: 636,
      size: 10,
      font: helveticaFont,
    })

    firstPage.drawText('Ontario', {
      x: 162,
      y: 636,
      size: 10,
      font: helveticaFont,
    })

    firstPage.drawText('N2H 5G9', {
      x: 236,
      y: 636,
      size: 10,
      font: helveticaFont,
    })



    firstPage.drawText('519 745 7856', {
      x: 20,
      y: 616,
      size: 10,
      font: helveticaFont,
    })

    firstPage.drawText('226 336 7873', {
      x: 162,
      y: 616,
      size: 10,
      font: helveticaFont,
    })

    firstPage.drawText('H6aw8aw7eaw7856', {
      x: 20,
      y: 596,
      size: 10,
      font: helveticaFont,
    })

    firstPage.drawText('2020-01-01', {
      x: 240,
      y: 596,
      size: 10,
      font: helveticaFont,
    })

    firstPage.drawText('info@berlinautosales.ca', {
      x: 20,
      y: 582,
      size: 10,
      font: helveticaFont,
    })


    //VEHICLE INFORMATION
    firstPage.drawText('13', {
      x: 310,
      y: 676,
      size: 10,
      font: helveticaFont,
    })

    firstPage.drawText('Audi', {
      x: 335,
      y: 676,
      size: 10,
      font: helveticaFont,
    })

    firstPage.drawText('S5', {
      x: 400,
      y: 676,
      size: 10,
      font: helveticaFont,
    })

    firstPage.drawText('2DR', {
      x: 462,
      y: 676,
      size: 10,
      font: helveticaFont,
    })

    firstPage.drawText('BLACK', {
      x: 510,
      y: 676,
      size: 10,
      font: helveticaFont,
    })

    firstPage.drawText('0788', {
      x: 550,
      y: 676,
      size: 10,
      font: helveticaFont,
    })

    firstPage.drawText('2    W    G    F    Y    R    7    W    J    F    H    T    J    H    D    6', {
      x: 312,
      y: 656,
      size: 10,
      font: helveticaFont,
    })

//KMS
    firstPage.drawText('x', {
      x: 359,
      y: 642,
      size: 7,
      font: helveticaFont,
    })
//MILES
    firstPage.drawText('x', {
      x: 386,
      y: 642,
      size: 7,
      font: helveticaFont,
    })

//DISTANCE UNKNOWN
firstPage.drawText('x', {
  x: 412,
  y: 642,
  size: 7,
  font: helveticaFont,
})


//DISTANCE UNKNOWN  (last known mileage)
firstPage.drawText('x', {
  x: 412,
  y: 635,
  size: 7,
  font: helveticaFont,
})

//DISTANCE UNKNOWN  (last known mileage) travelled
firstPage.drawText('235000', {
  x: 468,
  y: 635,
  size: 7,
  font: helveticaFont,
})

//DISTANCE UNKNOWN  (last known mileage) as of
firstPage.drawText('235000', {
  x: 530,
  y: 635,
  size: 7,
  font: helveticaFont,
})

//ACTUAL UNKNOWN  (last known mileage)
firstPage.drawText('x', {
  x: 412,
  y: 622,
  size: 7,
  font: helveticaFont,
})



//KILOMETERS
    firstPage.drawText('1 9 1 0 0 0 ', {
      x: 312,
      y: 626,
      size: 10,
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

const form = BOS.getForm()


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




  //const pdfBytes = await BOS.save()
fs.writeFileSync('/projects/bos/Generated_BOS/BOS_NEW.PDF', await BOS.save())
  console.log("here")
}
