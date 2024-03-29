const {Observer, Telephone } =require('./phone');

const contact1 = new Telephone();
const observer1 = new Observer();
const observer2 = new Observer();

contact1.AddObserver(observer1);
contact1.AddObserver(observer2);

contact1.AddPhoneNumber('234 8168710813');
contact1.AddPhoneNumber('234 8064258462');

contact1.DialPhoneNumber('234 8168710813');
contact1.DialPhoneNumber('234 8064258462');
//In case of an error, due to unadded phone number
contact1.DialPhoneNumber('234 8064258462');

console.log(contact1)