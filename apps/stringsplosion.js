class StringSplosion{
	constructor(string){
		this.string = string
	}
	manipulate(){
		let splosivearray = [];

  		for(let i = 0; i <= this.string.length; i++){
    	let sliceout = this.string.substr(0, i);
    	splosivearray.push(sliceout);
  		}
  		this.string = splosivearray.join("");
  		return this.string
	}
}

module.exports.StringSplosion = StringSplosion