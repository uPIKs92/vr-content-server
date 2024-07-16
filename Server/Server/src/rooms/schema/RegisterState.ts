import { MapSchema, Schema, type } from "@colyseus/schema";


export class Register extends Schema{
    @type("string") id !: string;
    @type("string") id_user !: string;
    @type("string") name !: string;
    @type("string") username !: string;
    @type("string") password !: string;
    @type("string") id_exercise !: string;
    @type("string") id_unique !: string;
    @type("string") scenario !: string;
    @type("string") progress !: string;
}

export class RegisterState extends Schema {
    @type({ map: Register})
    register = new MapSchema<Register>()

    clear(){
        this.register.clear();
    }

    registerUser(id_user: string, option: any){
        this.register.set(id_user, new Register().assign({
            id: option.id,
            name: option.name,
            username: option.username,
            password: option.password,
        }))
    }

    leftPlayer(id: string)
    {
        this.register.forEach((register, key) => 
        {
            if(register.id === id)
            {
                this.register.delete(key);
            }
        })
    }
}