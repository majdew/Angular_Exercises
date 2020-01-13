export class Student {
    private id:Number;
    private name:String;
    private major:String;
    private color:String;
    private materialIdArray : number [];
    private static COUNT=1;

    constructor(name:String , major:String , color:String , materialIdArray: number[]){
        this.setId();
        this.name = name;
        this.major = major;
        this.color = color;
        this.materialIdArray = materialIdArray ;
    }

    private setId() : void {
        this.id = Student.COUNT++;
    }

    setName(name:String) : void {
        this.name = name; 
    }

    setMajor(major:String) : void {
        this.major= major; 
    }

    setColor(color:String) : void {
        this.color = color; 
    }

    getId() : Number {
         return this.id;
    }

    getName() : String  {
        return this.name; 
    }

    getMajor() : String {
        return this.major; 
    }

    getColor() : String  {
        return this.color ; 
    }
    getMaterialIdArray() : number []  {
        return this.materialIdArray ; 
    }

    checkStudentlById(id:Number) : boolean{
        if(this.id == id )
            return true ;
        else
            return false;
    }
}