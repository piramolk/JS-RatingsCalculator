let collect_ratings = function(){
    const ratings = {'count':0, 'sum':0, 'average':0 };
    let rating = 0;
    const elements = document.querySelectorAll(".ratings");
    
    elements.forEach(function(element){
        rating = parseInt(element.id.replace("star",""));
        ratings.count += parseInt(element.value);
        ratings.sum += parseInt(element.value)*rating;
    })
    if(ratings.count!=0){
        ratings.average = sum/count;
    }
}