const dogBreeds = {
    afghanHound : {
        name : 'Afghan Hound',
        fact : 'Glamorous, elegant sight hound of the afghan desert.',
        pics : ['1', '2', '3'],
    },
    basenji : {
        name: 'Basenji',
        fact: 'The barkless dog of central africa.',
        pics : ['4', '5', '6'],
    },
    bassetFauveDeBretagne : {
        name: 'Basset Fauve De Bretagne',
        fact: 'Reddish fawn hunting hound from brittany',
        pics : ['7', '8', '9'],
    },
    grandBasssetGriffonVendeen : {
        name: 'Grand Basset Griffon Vendeen',
        fact: "The tallest of the basset breeds, originally used for huntin hare and rabbit.",
        pics : ['10', '11', '12'],
    },
    bassetHound : {
        name: 'Basset Hound',
        fact: 'Athletic pack hunter developed in medieval France.',
        pics: ['13', '14', '15'],
    },
    petitBassetGriffonVendeen : {
        name: 'Petit Basset Griffon Vendeen',
        fact: 'Rustic looking french hound with a smart appearance and appealing charachter.',
        pics: ['16', '17', '18'],
    },
    beagle : {
        name: 'Beagle',
        fact: 'The smallest of british pack hounds.',
        pics: ['19', '20', '21'],
    },
    bloodHound : {
        name: 'Bloodhound',
        fact: 'The most famous sent hound.',
        pics: ['22', '23', '24'],
    },
    borzoi : {
        name: 'Borzoi',
        fact: 'The wolf hound of the emperial russian aristochracy.',
        pics: ['25', '26', '27'],
    },
    dachshund : {
        name: 'Dachshunds',
        fact: 'This german badger and rabbit hunter comes in a variety in sizes and coat type.',
        pics: ['28', '29', '30'],
    },
    deerhound : {
        name: 'Deerhound',
        fact: 'Scotlands ancient wolf hound, elegant and athletic.',
        pics: ['31', '32', '33'],
    },
    elkhound : {
        name: 'Norwigian Elkhound',
        fact: 'Ancient elk hunting dog, athletic and strong, with distinctive grey coat.',
        pics: ['34', '35', '36'],
    },
    finnishSpitz : {
        name: 'Finnish Spitz',
        fact: 'National dog of Finland originally bread to hunt elk.',
        pics: ['37', '38', '39'],
    },
    foxhound : {
        name: 'Foxhound',
        fact: 'Traditional english pack hound.',
        pics: ['40', '41', '42'],
    },
    grandBleuDeGascoigne : {
        name: 'Grand Bleau De Gascoigne',
        fact: 'Long legged aristhocrath of the french sent hounds.',
        pics: ['43', '44', '45'],
    },
    greyhound : {
        name: 'Greyhound',
        fact: 'Ancient sight hound with an athletic streamline body and acute sight.',
        pics: ['46', '47', '48'],
    },
    hamiltonstovare : {
        name: 'Hamiltonstovare',
        fact: 'Swedish solo hunter developed by count Hamilton.',
        pics: ['49', '50', '51'],
    },
    harrier : {
        name: 'Harrier',
        fact: 'A typical hound breed specifically selected to chaise the straight running hare.',
        pics: ['52', '53', '54'],
    },
    ibizanHound : {
        name: 'Ibizan Hound',
        fact: 'Rabbit hunter of Ibiza with roots in ancient Egypt.',
        pics: ['55', '56', '57'],
    },
    segugioItaliano : {
        name: 'Segugio Italiano',
        fact: 'Stylish italian huntpoint retriever breed.',
        pics: ['58', '59', '60'],
    },
    irishWolfhound : {
        name: 'Irish Wolfhound',
        fact: 'A gentle giant, the tallest of all the breeds.',
        pics: ['61', '62', '63'],
    },
    norwigianLundehund : {
        name: 'Norwigian Lundehund',
        fact: 'Scandinavian hound dog with six toes. Excellent puffin hunter.',
        pics: ['64', '65', '66'],
    },
    pharaohHound : {
        name: 'Pharaoh Hound',
        fact: 'This is the rabbit hunter of Malta, with ancient roots.',
        pics: ['67', '68', '69'],
    },
    otterhound : {
        name: 'OtterHound',
        fact: 'Traditional hunter with weatherproof coat and webbed feet.',
        pics: ['70', '71', '72'],
    },
    rhodesianRidgeback : {
        name: 'Rhodesian Ridgeback',
        fact: 'Lion hunter from souther africa, athletic and couragiuos.',
        pics: ['73', '74', '75'],
    },
    saluki : {
        name: 'Saluki',
        fact: 'Elegant and light footed hound of the middle east.',
        pics: ['76', '77', '78'],
    },
    sloughi : {
        name: 'Sloughi',
        fact: 'Lean light framed sight hound of north africa.',
        pics: ['79', '80', '81'],
    },
    whippet : {
        name: 'Whippet',
        fact: 'Small speedy sighthound, traditionally used for racing.',
        pics: ['82', '83', '84'],
    },
    /*insertyourpropertyhere: {   <------- this is your easy copy and paste life
        name: '',
        fact: '',
        pics: ['', '', '']
    },*/
};
const dogBreedList = Object.keys(dogBreeds);
const randomNumber = Math.floor(Math.random() * dogBreedList.length);
const otherRandomNumber = Math.floor(Math.random() * 3);
function displayDogBreed(){
console.log(dogBreeds[dogBreedList[randomNumber]].name)
console.log(dogBreeds[dogBreedList[randomNumber]].pics[otherRandomNumber])
console.log(dogBreeds[dogBreedList[randomNumber]].fact)
}
displayDogBreed();
