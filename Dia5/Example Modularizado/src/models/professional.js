//COGO ESTE FICHERO DE MI PROYECTO IMDB QUE HICE CON ANA
class Professional {
    constructor(name,age,genre,weight,height, id,hairColor,eyeColor,race,isRetired,nationality,oscarsNumbers,proffesion){
            this.name = name;
            this.age = age;
            this.genre = genre;
            this.weight = weight;
            this.height = height;
            this.id = id
/*             this.hairColor = hairColor;
            this.eyeColor= eyeColor;
            this.race = race;
            this.isRetired = isRetired;
            this.nationality = nationality;
            this.oscarsNumbers = oscarsNumbers;
            this.proffesion = proffesion; */
}

printAll(){
    return `"\n"
            Name : ${this.name} "\n"
            Age : ${this.age} "\n"
            Genre : ${this.genre} "\n"
            Weight : ${this.weight} "\n"
            Height : ${this.height} "\n"
            Hair color : ${this.hairColor} "\n"
            Eye color : ${this.eyeColor} "\n"
            Race : ${this.race} "\n"
            Is retired : ${this.isRetired} "\n"
            Nacionality : ${this.nationality} "\n"
            Oscars numbers : ${this.oscarsNumbers} "\n"
            Proffesion : ${this.proffesion} "\n"`
            }
            
}
module.exports = {Professional}