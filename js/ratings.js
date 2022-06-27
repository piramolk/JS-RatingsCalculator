function Rating(){
    this.count=0;
    this.sum=0;
    this.average=0;
}


let collect_ratings = function(){
    let ratings = Rating();
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