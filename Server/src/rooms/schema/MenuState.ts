import { MapSchema, Schema, type, ArraySchema } from "@colyseus/schema";
import { Join_User, Uservmt, connectDB } from "../../Database/ConnectDB";
import { Client, ClientState } from "colyseus";

export class Waktu extends Schema {
    @type("string") time: string;
}

export class Status extends Schema {
    @type("string") recipient: string;
    @type("boolean") enable: boolean;
    @type("boolean") disable: boolean;
}

export class Chat extends Schema {
    @type("string") sender: string;
    @type("string") message: string;
}

export class User extends Schema {
    @type("string") id !: string;
    @type("string") username !: string;
    @type("string") password !: string;
    @type("string") name !: string;
    @type('int32') id_user !: string;
}

export class Action extends Schema {
    @type("string") action !: string;
    @type("string") status !: string;
    @type("string") username !: string;
    @type("string") error_level !: string;
    @type("boolean") finished !: boolean;
    @type("string") instructor !: string;
    @type("boolean") highlight !: boolean;
    @type("string") name !: string;
    @type("string") progress !: string;
    @type("boolean") is_sub_action !: boolean;
}

export class Exercise extends Schema {
    @type("string") student !: string;
    @type("string") instructor !: string;
    @type("string") scenario !: string;
    @type("string") id_exercise !: string;
    @type("string") training_mode !: string;
    @type("string") exercise_mode !: string;
    @type("boolean") is_vr !: boolean;
    @type("boolean") is_interupt !: boolean;
    @type(["string"]) action_list = new ArraySchema<string>();
    @type("string") id_unique_report !: string;
    @type("string") exercise_name !: string;
    @type("string") index_scenario !: string;
}

export class MenuState extends Schema {
    @type({ map: User })
    users = new MapSchema<User>()
    @type({ map: Chat })
    chat = new MapSchema<Chat>()
    @type({ map: Status })
    status = new MapSchema<Status>()
    @type({ map: Waktu })
    waktu = new MapSchema<Waktu>()
    @type({ map: Action })
    actions = new MapSchema<Action>()
    @type({ map: Exercise })
    exercise = new MapSchema<Exercise>()

    clear() {
        this.users.clear();
        this.chat.clear();
        this.status.clear();
        this.waktu.clear();
        this.actions.clear();
        this.exercise.clear();
    }

    joinPlayer(jenisUser: string, options: any) {
        this.users.set(jenisUser, new User().assign
            ({
                id: options.id,
                username: options.username,
                password: options.password,
                name: options.name,
                id_user: options.id_user
            }))
    }

    leftPlayer(id: string) {
        this.users.forEach(async (user, key) => {
            if (user.id === id) {
                this.deleteExercise(user.username);
                this.deleteActions(user.username);
                this.users.delete(key);

                await connectDB
                    .getRepository(Join_User)
                    .createQueryBuilder("join_user")
                    .delete()
                    .where("join_user.username = :username", { username: user.username })
                    .execute()
                await connectDB
                    .getRepository(Uservmt)
                    .createQueryBuilder("uservmt")
                    .update()
                    .set({ id_exercise: 0, scenario: " " })
                    .where("uservmt.username = :username", { username: user.username })
                    .execute()
            }
        })
    }

    deleteExercise(username: string) {
        this.exercise.forEach(async (exercise, key) => {
            if (exercise.student === username || exercise.instructor == username) {
                this.exercise.delete(key);
            }
        })
    }

    deleteActions(username: string) {
        this.actions.forEach(async (actions, key) => {
            if (actions.instructor == username || actions.username == username) {

                this.actions.delete(key);
            }
        })
    }

    leftExercise(student: string) {
        this.exercise.forEach(async (exercises, key) => {
            if (exercises.student === student) {
                this.users.delete(key);
            }
        })
    }

    chatMessages(sender: string, option: any) {
        this.chat.set(sender, new Chat().assign({
            sender: option.sender,
            message: option.message
        }));
    }

    sendStatus(sender: string, option: any) {
        this.status.set(sender, new Status().assign({
            recipient: option.recipient,
            enable: option.enable,
            disable: option.disable
        }));
    }

    sendWaktu(sender: string, option: any) {
        this.waktu.set(sender, new Waktu().assign({
            time: option.time
        }));
    }

    sendAction(sender: string, option: any) {
        this.actions.set(sender, new Action().assign({
            action: option.action,
            status: option.status,
            username: option.username,
            error_level: option.error_level,
            finished: option.finished,
            instructor: option.instructor,
            name: option.name,
            highlight: option.highlight,
            progress: option.progress,
            is_sub_action: option.is_sub_action
        }))
    }

    sendExercise(sender: string, option: any) {
        this.exercise.set(sender, new Exercise().assign({
            student: option.student,
            instructor: option.instructor,
            scenario: option.scenario,
            id_exercise: option.id_exercise,
            training_mode: option.training_mode,
            exercise_mode: option.exercise_mode,
            is_vr: option.is_vr,
            action_list: option.action_list,
            is_interupt: option.is_interupt,
            id_unique_report: option.id_unique_report,
            exercise_name: option.exercise_name,
            index_scenario: option.index_scenario
        }))
    }
}