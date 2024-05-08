const axios = require("axios");
const cheerio = require("cheerio");
const xlsx = require("xlsx");
const fs = require("fs");

const url="https://www.timesjobs.com/candidate/job-search.html?searchType=Home_Search&from=submit&asKey=OFF&txtKeywords=&cboPresFuncArea=35";

const headers = {"content-type":"text/html",};

const getPageData = async (url) =>{
    try{
       const response = await axios.get(url, {headers});
       const strData = response.data;
       return strData;
    }
    catch(err){
       console.log("Error_Occured -"+err);
    }
};
console.log(5);

// only run once get data in data txt file to avoid multiple rendering of data and avoid blocking of url by amzon website
getPageData(url).then(data => {
    const $ = cheerio.load(data);

    const jobList = [];

    $(".job-bx").each((index, element) => {
        const jobTitle = $(element).find("h2 a").text().trim();
        const companyName = $(element).find(".joblist-comp-name").text().trim();
        const location = $(element).find(".top-jd-dtl li:nth-child(3)").text().trim();
        const jobType = ""; // You may need to extract this from the HTML
        const postedDate = $(element).find(".sim-posted span").text().trim();
        const jobDescription = $(element).find(".list-job-dtl li:nth-child(1)").text().trim();

        const job = {
            title: jobTitle,
            company: companyName,
            location: location,
            type: jobType,
            posted: postedDate,
            description: jobDescription
        };

        jobList.push(job);
    });

    console.log(jobList);
    const jsonContent = JSON.stringify(jobList, null, 2);
    fs.writeFileSync("jobs.json", jsonContent);

    console.log("Job list has been saved to jobs.json");


    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(jobList);
    
    xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    xlsx.writeFile(workbook, "jobs.xlsx");
    
}).catch(err => console.error(err));


  //excel
