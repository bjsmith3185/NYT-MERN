
console.log("hello")

var axios = require('axios');

var APIKey = 'fc95978666c547148b6c203afe174c81';

// module.exports = function runQuery(search, start, end, qty) {
module.exports = function nytAPI(data) {
    console.log("this is the data passed into api()")
    console.log(data);
    var search = data.search;
    var start = data.start;
    var end = data.end;
    var numberOfArticles = parseInt(data.qty);


    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {

        params: {
            'api-key': APIKey,
            'q': search,
            'begin_date': start,
            'end_date': end,
        }
    })

        .then(function (results) {
            var baseResponse = results.data.response.docs;
            var returnData = [];

            for (var i = 0; i < numberOfArticles; i++) {

                var article = {
                    headline: baseResponse[i].headline.main,
                    snippet: baseResponse[i].snippet,
                    url: baseResponse[i].web_url,
                    pub_date: baseResponse[i].pub_date,
                    source: baseResponse[i].source,
                    articleId: baseResponse[i]._id,
                    image: baseResponse[i].multimedia[0].url,
                }

                returnData.push(article);

                // console.log(baseResponse[i].web_url);
                // console.log(baseResponse[i].snippet);
                // console.log(baseResponse[i].source);
                // console.log(baseResponse[i].headline.main);
                // console.log(baseResponse[i].pub_date);
                // console.log(baseResponse[i]._id);
                // console.log(baseResponse[i].multimedia[0].url);
                // console.log("--------------------------")
            }
            return returnData;
        });
};
