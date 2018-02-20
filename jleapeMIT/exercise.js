var exercise = {};

exercise.salaries = null;
exercise.salary = null;

// load salary and data
exercise.load = function(salary, boston){
    exercise.salaries = boston.data;
    exercise.salary = salary;
};

// get salaries larger than given salary
exercise.findBiggerSalaries = function(){

    // ---------------------------------------------------
    //     Return list of salaries larger than exercise.salary
    // ---------------------------------------------------

    var currentSalary = 0;
    var bigSalaryList = [];
    for (var i = 0; i < exercise.salaries.length; i++)  {
        currentSalary = Number(exercise.salaries[i][18]);
        if (exercise.largerSalary(currentSalary)) {
            bigSalaryList[i] = currentSalary
        }
    }
        
    return bigSalaryList
};

// filter function
exercise.largerSalary = function largerSalary(item){

    // ---------------------------------------------------
    //     Return a boolean (true/false) if item
    //     is larger than exercise.salary
    // ---------------------------------------------------

    return item > exercise.salary;

};