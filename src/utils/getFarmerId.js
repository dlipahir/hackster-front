const mapObj={
    stateOBJ:{
        gujrat:"GJ",
        maharastra:"MH"
    },
    districtOBJ:{
        ahmedabad:"AH",
        rajkot:"RJ",
        dwarka:"DW",
        amreli:"AM"
    }
 }

export const generateID=async(state="gujrat",district="rajkot")=>{
    console.log(state,district);
  let farmerRegno=1;
    try {
        const nooffarmers = await fetch(`https://hack-roso.onrender.com/getregno/${state}/${district}`);
         farmerRegno = await nooffarmers.json();
        console.log(farmerRegno);
      } catch (err) {
        console.log("error", err);
      }
   let farmer_id="";
    for(let j = 0 ; j<8-String(farmerRegno).length ; j++){

                    farmer_id+="0";
        }
        farmer_id+=farmerRegno+1
    // return `${mapObj.stateOBJ[state]}${mapObj.districtOBJ[district]}${farmer_id}`
     return `${mapObj.stateOBJ[state]}${farmer_id}`
}

//console.log(generateID("gujrat","dwarka",34));