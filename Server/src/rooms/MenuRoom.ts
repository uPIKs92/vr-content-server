import { Room, Client, ClientArray, ServerError } from "colyseus";
import {MenuState, User, Chat, Status} from "./schema/MenuState";
import { Join_User, Uservmt, connectDB } from "../Database/ConnectDB";
import { IncomingMessage } from "http"; 

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

export class Menu extends Room<MenuState> {
    maxClients: 4;
    LOBBY_CHANNEL = "$menulobby"

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
        this.setState (new MenuState());
        this.roomId = await this.generateRoomId();

        this.onMessage("chat", (client, data) => {            
            this.state.chatMessages(data.sender, data);
        });

        this.onMessage("status", (client, data) => {
            this.state.sendStatus(data.sender, data);
        });

        this.onMessage("waktu", (client, data) => {
            this.state.sendWaktu(data.sender, data);
        });

        this.onMessage("action", (client, data) => {
            this.state.sendAction(data.sender, data)
        })

        this.onMessage("exercise", (client, data) => {
            this.state.sendExercise(data.sender, data)
        })
    }

    valueName = "";

    async onAuth(client: Client, options: any, request: IncomingMessage) {
        const joinUser = await connectDB
                .getRepository(Join_User)
                .createQueryBuilder("join_user")
                .where("join_user.username like :username", { username: options.username })
                .getMany();

        const userVmt = await connectDB
                .getRepository(Uservmt)
                .createQueryBuilder("uservmt")
                .where("uservmt.id_user = :id_user", { id_user: options.id_user })
                .andWhere("uservmt.username like :username", { username:`%${options.username}%` })
                .getOne();

        var valueJoin = joinUser.length;
        var valueUser = userVmt?.username;
        var valuePass = userVmt?.password;
        
        if (valueJoin !== 1 && valueUser === options.username && valuePass === options.password){
            console.log("berhasil");
            this.valueName = userVmt?.name;  
            return joinUser;            
        }else if (valueJoin === 1 && valueUser === options.username && valuePass === options.password){            
            throw new ServerError(400, "gagal user sudah join");
        }else if (valueJoin !== 1 && valueUser !== options.username && valuePass === options.password){
            throw new ServerError(401, "gagal salah username");
        }else if (valueJoin !== 1 && valueUser === options.username && valuePass !== options.password){
            throw new ServerError(402, "gagal salah password");
        }else if (valueJoin !== 1 && valueUser !== options.username && valuePass !== options.password){
            throw new ServerError(403, "user tidak ditemukan");
        } else {
            throw new ServerError(404, "error!");
        }
    }

    async onJoin (client: Client, options: any){      
        let prop = 
        {   
            id: client.sessionId,
            username: options.username,
            password: options.password,
            name: this.valueName,
            id_user : options.id_user
        }
        this.state.joinPlayer(options.jenisUser, prop);
        console.log(client.sessionId, "joinded!");
        
        if (!connectDB.isInitialized){
            connectDB.initialize();
        }
        connectDB.synchronize().then(async () =>{
            const joinUser = new Join_User()
            joinUser.username = options.username
            
            const uservmtRepo = connectDB.getRepository(Join_User);
            await uservmtRepo.save(joinUser);
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