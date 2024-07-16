import { Room, Client } from "colyseus";
import { Join_User, Uservmt} from "../Database/ConnectDB";
import { connectDB } from "../Database/ConnectDB";
import { RegisterState } from "./schema/RegisterState";
 
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

export class Register extends Room<RegisterState> {
    maxClients: 4;
    LOBBY_CHANNEL = "$registerlobby"


    generateRoomIdSingle(): string {
        let result = '';
        for (var i = 0; i < 6; i++){
            result += LETTERS.charAt(Math.floor(Math.random() * LETTERS.length));
        }
        return result;
    }

    async generateRoomId() : Promise<string> {
        const currentIds = await this.presence.smembers(this.LOBBY_CHANNEL);
        let id;
        do {
            id = this.generateRoomIdSingle();
        } while (currentIds.includes(id));

        await this.presence.sadd(this.LOBBY_CHANNEL, id);
        return id;
    }

    async onCreate (options: any) {
        this.setState (new RegisterState());
        this.roomId = await this.generateRoomId();
    }

    onJoin (client: Client, options: any){
        let prop = 
        {   
            id: client.sessionId,
            id_user: options.id_user,
            name: options.name,
            username: options.username,
            password: options.password,
            id_exercise: options.id_exercise,
            id_unique: options.id_unique,
            scenario: options.scenario,
            progress: options.progress
        }
        this.state.registerUser(options.id_user, prop);
        console.log(client.sessionId, "joinded!");
        
        if(!connectDB.isInitialized){
            connectDB.initialize(); 
        }

        connectDB.synchronize().then(async () =>{
            const userVmt = new Uservmt()
            userVmt.id_user = parseInt(options.id_user),
            userVmt.name = options.name,
            userVmt.username = options.username,
            userVmt.password = options.password,
            userVmt.id_exercise = options.id_exercise,
            userVmt.scenario = options.scenario

            const uservmtRepo = connectDB.getRepository(Uservmt);
            await uservmtRepo.save(userVmt);
            console.log("berhasil menyimpan")
        })
        
    }

    onLeave (client: Client, consented: boolean) {    
        console.log(client.sessionId, "left!");
        this.state.leftPlayer(client.sessionId);
        this.autoDispose = true;
    }
    
    onDispose() {
        this.broadcast('onDispose');
        this.presence.srem(this.LOBBY_CHANNEL, this.roomId);
        this.state.clear();      
        console.log("room", this.roomId, "disposing...");
    }
}