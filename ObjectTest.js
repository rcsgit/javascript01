var course = new Object();

course.title = "How to make friends";
course.instructor = "Ricardo";
course.level = 0;
course.publised = true;
course.views = 0;
course.updateViews = function(){
    return ++course.views;
}

console.log(course.views);
course.updateViews();
console.log(course.views);


var car = { 
    engine: "V8",
    type: "Pickp-Up",
    vendor: "Ford",
    year: 2010,
    mileage: 100000,
    updatedMileage: function(mileage){
        return mileage > 0 ? car.mileage += mileage :  ++car.mileage;
    }
}

//console.log(course);

console.log(car.vendor);
console.log(car.mileage);
car.updatedMileage();
console.log(car.mileage);