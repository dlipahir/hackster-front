const {generateID} = require('./getFarmerId');



export const postData = async (data) => {
  console.log(data);
  const {
    bankdetails,
    communicationDetails,
    farmlocationDetails,
    personalInfo,
    yeildInfo,credit,InsuranceInfo,QualificationDetails
  } = data;
  const generatedId = await generateID("gujrat",personalInfo.distict);

const myfarms= farmlocationDetails.map((farm)=>{
return(
  {
    title: farm.landTitle,
    shape: farm.shape,
    surveyNum: farm.newSurveyNumber,
    upin: farm.UPIN
  })
})
console.log(myfarms);




  const body = {
    farmId:generatedId,
    profilePic: "https://i.ibb.co/9vSkJnM/farmer-villager-india.jpg",
    userId: communicationDetails.mobileNumber,
    creditinfo:{
      LoanType:credit.LoanType,
      accountNumber:credit.accountNumber,
      bankName:credit.bankName,
      ifsc:credit.ifsc,
      landTitle:credit.landTitle,
      loanSize:credit.loanSize,
      perpose:credit.perpose,
      upin:credit.upin,
    },
    insuranceInfo:{
applieddate:InsuranceInfo.applieddate,
area:InsuranceInfo.area,
certificateNumber:InsuranceInfo.certificateNumber,
companyName:InsuranceInfo.companyName,
cropName:InsuranceInfo.cropName,
cropSeason:InsuranceInfo.cropSeason,
fieldName:InsuranceInfo.fieldName,
insuranceType:InsuranceInfo.insuranceType,
receiptNumber:InsuranceInfo.receiptNumber,
upin:InsuranceInfo.upin
    },
    perinfo: {
      firstName: personalInfo.firstName,
      middleName: personalInfo.middleName,
      lastName: personalInfo.lastName,
      adhar: personalInfo.adhar,
      gender: personalInfo.gender,
      district: personalInfo.distict,
      taluko: personalInfo.taluko,
      village: personalInfo.village,
      homeAddrs: personalInfo.homeAddrs,
      dob: personalInfo.dob,
    },
    comminfo: {
      mobileNumber: communicationDetails.mobileNumber,
      email: communicationDetails.email || "testin@test.com",
    },
    farmInfo: myfarms,
    yeildInfo: {
      landTitle: yeildInfo.landTitle,
      year: yeildInfo.year,
      cropName: yeildInfo.cropName,
      quintity: yeildInfo.quintity,
      unit: yeildInfo.unit,
      totalPrice: yeildInfo.totalPrice,
      cropType: yeildInfo.cropType,
      harvestTech: yeildInfo.harvestTech,
    },
    bankInfo: {
      bankName: bankdetails.bankName,
      branchName: bankdetails.branchName,
      taluka: bankdetails.taluko,
      accountNumber: bankdetails.accountNumber,
      ifsc: bankdetails.ifsc,
    },
  };
//   const body = {
//     profilePic:"https://i.ibb.co/9vSkJnM/farmer-villager-india.jpg",
//     userId:"1234567",
//     farmId:generatedId,
// perinfo:{
//   firstName:"guautam",
//   middleName:"ahir",
//   lastName:"mesniya",
//   adhar:"669179941308",
//   gender:"male",
//   district:"dwarka",
//   taluko:"khambalia",
//   village:"kuvadiya",
//   homeAddrs:"kuvadiya gam 361305",
//   dob:"13/01/2002"
//   },
//   comminfo:{
//       mobileNumber:"9313903585",
//     email:"ahirdilp@gmail.com"
//  },
//  farmInfo:[{
//    title:"navi vadi",
//     shape:"https://i.ibb.co/GdKRHGT/asf2.png",
//     surveyNum:"76",
//     upin:"12702033000760000"
// },{
//     title:"juni vadi",
//     shape:"https://i.ibb.co/R7nh28N/asd.png",
//     surveyNum:"110",
//     upin:"12702033001100000"
// }],
//   yeildInfo:{
//   landTitle:"vadi",
//     year:"2021",
//     cropName:"grountnut",
//     quintity:"200",
//     unit:"20kg",
//     totalPrice:"1000",
//     cropType:"rabi",
//     harvestTech:"harvesting"
//   },
//   bankInfo:{
//     bankName:"Union Bank of India",
//     branchName:"dwarka",
//     taluka:"dwarka",
//     accountNumber:"756302010002027",
//     ifsc:"UBIN0575631"
//   }

// }
  
  try {
    const response = await fetch("https://hack-roso.onrender.com/postfarmer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    
    const res = await response.json();
    console.log(res);
  } catch (err) {
    console.log("error", err);
  }
};

// export const sendFarmerId=async(data)=>{
//   // const vonage = new Vonage({
//   //   apiKey: "cc5fcbaa",
//   //   apiSecret: "6D2uufw4RkcVHO1y"
//   // })  
//   const generatedId = await generateID("gujrat",data.personalInfo.distict);

//   const from = "Vonage APIs"
// const to = `91${data.communicationDetails.mobileNumber}`
// const text = `your farmerId is ${generatedId}`

// // vonage.message.sendSms(from, to, text, (err, responseData) => {
// //   if (err) {
// //       console.log(err);
// //   } else {
// //       if(responseData.messages[0]['status'] === "0") {
// //           console.log("Message sent successfully.");
// //       } else {
// //           console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
// //       }
// //   }
// // })


// }

// const body = {
//     profilePic:"https://i.ibb.co/9vSkJnM/farmer-villager-india.jpg",
//     userId:"8155977453",
//     farmId:"GJ10DWK123",
// perinfo:{
//   firstName:"guautam",
//   middleName:"ahir",
//   lastName:"mesniya",
//   adhar:"669179941308",
//   gender:"male",
//   district:"dwarka",
//   taluko:"khambalia",
//   village:"kuvadiya",
//   homeAddrs:"kuvadiya gam 361305",
//   dob:"13/01/2002"
//   },
//   comminfo:{
//       mobileNumber:"9313903585",
//     email:"ahirdilp@gmail.com"
//  },
//  farmInfo:[{
//    title:"navi vadi",
//     shape:"https://i.ibb.co/GdKRHGT/asf2.png",
//     surveyNum:"76",
//     upin:"12702033000760000"
// },{
//     title:"juni vadi",
//     shape:"https://i.ibb.co/R7nh28N/asd.png",
//     surveyNum:"110",
//     upin:"12702033001100000"
// }],
//   yeildInfo:{
//   landTitle:"vadi",
//     year:"2021",
//     cropName:"grountnut",
//     quintity:"200",
//     unit:"20kg",
//     totalPrice:"1000",
//     cropType:"rabi",
//     harvestTech:"harvesting"
//   },
//   bankInfo:{
//     bankName:"Union Bank of India",
//     branchName:"dwarka",
//     taluka:"dwarka",
//     accountNumber:"756302010002027",
//     ifsc:"UBIN0575631"
//   }

// }

