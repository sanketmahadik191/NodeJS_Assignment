const axios = require("axios");
const cheerio = require("cheerio");
const xlsx = require("xlsx");
const fs = require("fs");

const url="https://www.amazon.in/s?k=mobile&crid=1O4WNNGXTP4X1&sprefix=mobile%2Caps%2C225&ref=nb_sb_noss_1";

const headers = {"content-type":"text/html",};

// const getPageData = async (url) =>{
//     try{
//        const response = await axios.get(url, {headers});

//        const strData = response.data;
//        fs.writeFileSync('data.txt',strData);
//     }
//     catch(err){
//        console.log("Error_Occured -"+err);
//     }
// };

// only run once get data in data txt file to avoid multiple rendering of data and avoid blocking of url by amzon website
// getPageData(url);


const readFile =()=>{
    return fs.readFileSync("data.txt",{encoding:"utf-8"});
};

const $ = cheerio.load(readFile());

const productList = [];

$(".s-result-item").each((index, element) => {
    const productName = $(element).find(".s-line-clamp-2 .a-size-medium").text().trim().slice(0,25);
    const productPrice = $(element).find("div[data-cy='price-recipe'] .a-price .a-offscreen").text().trim();
    const availability = $(element).find(".a-row.a-size-base.a-color-secondary > span").text().trim();
    const ratingElement = $(element).find(".a-icon-alt").text().trim();
    
    const product = {
      name: productName,
      price: productPrice,
      availability: availability,
      reviews: ratingElement
    };

    productList.push(product);
  });

  console.log(productList)

  //file
  const jsonContent = JSON.stringify(productList, null, 2);
  fs.writeFileSync("product.json", jsonContent);

  //excel

  const workbook = xlsx.utils.book_new();
  const worksheet = xlsx.utils.json_to_sheet(productList);
  
  xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  xlsx.writeFile(workbook, "products.xlsx");
// 