const getSleepHours = day => {
    switch(day){
      case 'monday':
        return 8;
      case 'tuesday':
        return 8;
      case 'wednesday':
        return 6;
      case 'thursday':
        return 8;
      case 'friday':
        return 8;
      case 'saturday':
        return 8;
      case 'sunday':
        return 8;  
    }
  };
  
  function getActualSleepHours(){
    let hours = getSleepHours('monday');
    hours += getSleepHours('tuesday');
    hours += getSleepHours('wednesday');
    hours += getSleepHours('thursday');
    hours += getSleepHours('friday');
    hours += getSleepHours('saturday');
    hours += getSleepHours('sunday');
    console.log(hours);
    return hours;
  }
  
  
  const getIdealSleepHours = (hours) => {
    let daysInAWeek = 7;
    console.log(hours * daysInAWeek)
    return hours * daysInAWeek;
  }
  
  function calculateSleepDebt(hours){
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(hours);
    if(actualSleepHours === idealSleepHours){
      console.log('got the perfect amount of sleep');
    } else if(actualSleepHours > idealSleepHours){
      console.log('You got ' + (actualSleepHours - actualSleepHours) + ' hour(s) more sleep than you needed this week. No seas Flojo.');
    } else{
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
       
    }
  }
  console.log(calculateSleepDebt(4));
  