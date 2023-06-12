// import axios from 'axios'

// const cycleApi = axios.create({
//     baseURL: 'https://www.cyclestreets.net/api/v2/'
// })
// function fetchTest() {
//     return cycleApi
//     .get
// }

function fetchTest() {
    const apiKey = '3c43e5d9434284f2'
    const url = `https://www.cyclestreets.net/api/journey.json?key=${apiKey}&reporterrors=1&itinerarypoints=0.11795,52.20530,City+Centre%7C0.13140,52.22105,Mulberry+Close%7C0.14732,52.19965,Thoday+Street&plan=quietest`;
    const url2 = 'https://www.cyclestreets.net/api/journey.json?key=3c43e5d9434284f2&reporterrors=1&itinerarypoints=0.11795,52.20530,City+Centre%7C0.13140,52.22105,Mulberry+Close%7C0.14732,52.19965,Thoday+Street&plan=quietest'
    return fetch(url)
        .then((response) => {
    
            JSON.stringify(response)
            // console.log('here is the response: ' + JSON.stringify(response))
    })
}

export default fetchTest