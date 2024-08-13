import config from "@colyseus/tools";

import { WebSocketTransport } from "@colyseus/ws-transport";
import { monitor } from "@colyseus/monitor";
import path from "path";
import Express from "express";
import fs from "fs";

// import { RedisDriver } from "@colyseus/redis-driver";
// import { RedisPresence } from "@colyseus/redis-presence";

/**
 * Import your Room files
 */
import { Menu, MenuRoom } from "./rooms/MenuRoom";
import { Register } from "./rooms/RegisterRoom";
import { Room, Client, ClientArray, ServerError } from "colyseus";
// import { DataSource } from "typeorm";
// import { Join_User, Register_User } from "./Database/ConnectDB";
import { Exercise, Exercise_Environtment, Join_User, Uservmt, connectDB } from "./Database/ConnectDB";
import MediaController from "./Database/MediaController";
import DatabaseProperty from "./Database/DatabaseProperty";
import { MenuState } from "./rooms/schema/MenuState";

export default config({
    getId: () => "Your Colyseus App",

    options: {
        // devMode: true,
        // driver: new RedisDriver(),
        // presence: new RedisPresence(),
    },

    initializeTransport: (options) => new WebSocketTransport(options),

    initializeGameServer: (gameServer) => {
        /**
         * Define your room handlers:
         */
        gameServer.define('Menu', Menu).enableRealtimeListing();
        gameServer.define('Register', Register).enableRealtimeListing();
    },

    initializeExpress: (app) => {
        /**
         * Bind your custom express routes here:
         */
        app.get("/", (req, res) => {
            res.send(`Instance ID => ${process.env.NODE_APP_INSTANCE ?? "NONE"}`);
        });

        /**
         * Bind @colyseus/monitor
         * It is recommended to protect this route with a password.
         * Read more: https://docs.colyseus.io/tools/monitor/
         */
        app.use("/colyseus", monitor());

        app.get("/hello_world", (req, res) => {
            res.send("It's time to kick ass and chew bubblegum!");
        });

        app.get('/upload', (req, res) => {
            console.log(path.join(__dirname, 'upload.html'))
            res.sendFile(path.join(__dirname, '../upload.html'));
        });

        // Upload Video
        app.post("/api/video/:id_unique_report", MediaController.upload, MediaController.handleUpload);

        //Upload video VMT
        app.post("/api/video_vmt/:id", MediaController.upload_video_vmt, MediaController.handleUpload_video_vmt);

        //Upload video VMT Exercise
        app.post("/api/video_vmt_exercise/:id", MediaController.upload_video_vmt_exercise, MediaController.handleUpload_video_vmt_exercise);

        //Upload picture VMT
        app.post("/api/picture_vmt/:id", MediaController.upload_picture_vmt, MediaController.handleUpload_picture_vmt);

        //Upload picture VMT Exercise
        app.post("/api/picture_vmt_exercise/:id", MediaController.upload_picture_vmt_exercise, MediaController.handleUpload_picture_vmt_exercise);

        // Upload File Replay
        app.post("/api/replayfile/:id_unique_report", MediaController.upload_file_replay, MediaController.handleUpload_file_replay);

        // Stream Video
        app.use('/api/video/stream', Express.static(path.join(__dirname, '../uploads')));

        // Stream Video
        app.get('/api/video/stream/:filename', (req, res) => {
            const filename = req.params.filename;
            const filePath = path.join(__dirname, '../uploads', filename);

            if (fs.existsSync(filePath)) {
                res.setHeader('Content-Type', 'video/mp4');
                res.setHeader('Content-Disposition', `attachment; filename=${filename}`);

                const fileStream = fs.createReadStream(filePath);
                fileStream.pipe(res);
            } else {
                res.status(404).json({ error: 'Video not found' });
            }
        });

        // Stream Video VMT
        app.get('/api/video_vmt/stream/:object_name', async (req, res) => {
            const request = req.params.object_name;

            const filename = await MediaController.getVideoName(request)

            console.log(filename)

            const filePath = path.join(__dirname, '../media_vmt', filename);

            if (fs.existsSync(filePath)) {
                res.setHeader('Content-Type', 'video/mp4');
                res.setHeader('Content-Disposition', `attachment; filename=${filename}`);

                const fileStream = fs.createReadStream(filePath);
                fileStream.pipe(res);
            } else {
                res.status(404).json({ error: 'Video not found' });
            }
        });

        // Stream Video VMT Exercise
        app.get('/api/video_vmt_exercise/stream/:object_name', async (req, res) => {
            const request = req.params.object_name;

            const filename = await MediaController.getVideoExerciseName(request)

            console.log(filename)

            const filePath = path.join(__dirname, '../media_vmt', filename);

            if (fs.existsSync(filePath)) {
                res.setHeader('Content-Type', 'video/mp4');
                res.setHeader('Content-Disposition', `attachment; filename=${filename}`);

                const fileStream = fs.createReadStream(filePath);
                fileStream.pipe(res);
            } else {
                res.status(404).json({ error: 'Video not found' });
            }
        });

        // Stream Picture VMT
        app.get('/api/picture_vmt/stream/:object_name', async (req, res) => {
            const request = req.params.object_name;

            const filename = await MediaController.getPictureName(request)

            console.log(filename)

            const filePath = path.join(__dirname, '../media_vmt', filename);

            if (fs.existsSync(filePath)) {
                res.setHeader('Content-Type', 'image/png/jpg');
                res.setHeader('Content-Disposition', `attachment; filename=${filename}`);

                const fileStream = fs.createReadStream(filePath);
                fileStream.pipe(res);
            } else {
                res.status(404).json({ error: 'Video not found' });
            }
        });

        // Stream Picture VMT Exercise
        app.get('/api/picture_vmt_exercise/stream/:object_name', async (req, res) => {
            const request = req.params.object_name;

            const filename = await MediaController.getPictureExerciseName(request)

            console.log(filename)

            const filePath = path.join(__dirname, '../media_vmt', filename);

            if (fs.existsSync(filePath)) {
                res.setHeader('Content-Type', 'image/png/jpg');
                res.setHeader('Content-Disposition', `attachment; filename=${filename}`);

                const fileStream = fs.createReadStream(filePath);
                fileStream.pipe(res);
            } else {
                res.status(404).json({ error: 'Video not found' });
            }
        });

        // Stream File Replay
        app.get('/api/replayfile/stream/:filename', (req, res) => {
            const filename = req.params.filename;
            const filePath = path.join(__dirname, '../uploads', filename);

            if (fs.existsSync(filePath)) {
                res.setHeader('Content-Type', 'Replay');
                res.setHeader('Content-Disposition', `attachment; filename=${filename}`);

                const fileStream = fs.createReadStream(filePath);
                fileStream.pipe(res);
            } else {
                res.status(404).json({ error: 'File Replay not found' });
            }
        });

        //Retrieve Addresables Bundle
        app.get('/api/addresables/stream/StandaloneWindows64/:dirname', (req, res) => {
            const dirname = req.params.dirname;
            const addresables_path = path.join(__dirname, '../addresables/StandaloneWindows64', dirname);

            if (fs.existsSync(addresables_path)) {
                res.setHeader('Content-Type', 'bundle/json/hash');
                res.setHeader('Content-Disposition', `attachment; filename=${dirname}`);

                const fileStream = fs.createReadStream(addresables_path);
                fileStream.pipe(res);

                // let fileEnts: fs.Dirent[] = await fs.promises.readdir(addresables_path, { withFileTypes: true });
                // let fileNames: string[] = fileEnts
                //     .filter(fileEnt => fileEnt.isFile())
                //     .map(fileEnt => fileEnt.name);
                // const Files = fileNames.map(path => ({
                //     readStream: fs.createReadStream(path)
                // }))
                // Files.forEach(src => 
                //     src.readStream.pipe(res));

            } else {
                res.status(404).json({ error: 'Addresable Bundle not found' });
            }
        });

        // Retrieve Video
        // app.get("/api/video/:path", VideoController.retrieve);

        // Retrieve Video VMT
        // app.get("/api/video_vmt/byObject/:name", VideoController.retrieve_video_vmt);

        // Retrieve File Replay
        // app.get("/api/replayfile/:path", VideoController.retrieve_file_replay)

        // List Video
        // app.get("/api/video/", VideoController.listVideo);

        // List File Replay
        // app.get("/api/replayfile/", VideoController.listFileReplay);

        //Retrieve Youtube Link
        app.get("/api/youtube_link_vmt/:object_name", MediaController.retrieve_youtube_link_vmt);

        //Retrieve Media Type
        app.get("/api/media_type/:object_name", MediaController.retrieve_media_type_vmt);

        //Retrieve Deskripsi Exercise
        app.get("/api/exercise_deskripsi/:object_name", MediaController.get_deskripsi);

        //Retrieve Youtube Link Exercise
        app.get("/api/youtube_link_vmt_exercise/:object_name", MediaController.retrieve_youtube_link_vmt_exercise);

        // Delete Video
        app.get('/api/video/delete/:filename', (req, res) => {
            const filename = req.params.filename;
            const filePath = path.join(__dirname, '../uploads', filename);

            if (fs.existsSync(filePath)) {
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
                console.log('Video deleted');
            } else {
                res.status(404).json({ error: 'Delete error!, Video not found' });
            }
        });

        // Delete File Replay
        app.get('/api/replayfile/delete/:filename', (req, res) => {
            const filename = req.params.filename;
            const filePath = path.join(__dirname, '../uploads', filename);

            if (fs.existsSync(filePath)) {
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
                console.log('File Replay deleted');
            } else {
                res.status(404).json({ error: 'Delete error!, File Replay not found' });
            }
        });

        app.get('/api/database/serverdb', (req, res) => {
            res.send(DatabaseProperty);
        });

        app.get('/api/environtment/:exercise_name', async (req, res) => {
            const exercise_name = req.params.exercise_name;

            const exercise = await connectDB

                .getRepository(Exercise)
                .createQueryBuilder("exercise")
                .where("exercise.project_name = :name", { name: exercise_name })
                .getOne();

            if (exercise) {
                const exercise_env = await connectDB

                    .getRepository(Exercise_Environtment)
                    .createQueryBuilder("exercise_environtment")
                    .where("exercise_environtment.id_environtment = :id", { id: exercise.selected_id_env })
                    .getOne();

                if (exercise_env) {
                    res.send(exercise_env.nama_environtment)
                } else {
                    res.status(404).json({ error: 'Exercise Environtment Selected Not Found' });
                }
            } else {
                res.status(404).json({ error: 'Exercise For Environtment Not Found' });
            }
        })

        app.get('/api/active_room_id', async (req, res) => {
            res.send(MenuRoom.getListRoomID());
        });

        app.get('/api/active_room_data', async (req, res) => {
            res.send(MenuRoom.getListRoomID_());
        });
    },

    beforeListen: async () => {
        /**
         * Before before gameServer.listen() is called.
         */
        try {
            connectDB.initialize().then(async () => {
                console.log("DB status", connectDB.isInitialized);
                if (connectDB.isInitialized == true) {
                    await connectDB
                        .getRepository(Join_User)
                        .createQueryBuilder("join_user")
                        .delete()
                        .execute()
                    console.log("join_user has been Clear");

                    const queryRunner = connectDB.createQueryRunner()
                    await queryRunner.connect()
                    const users = await queryRunner.query("ALTER SEQUENCE join_user_id_seq RESTART WITH 1")
                    await queryRunner.release()
                    console.log("join_user sequence has been reset to 1");

                    await connectDB
                        .getRepository(Uservmt)
                        .createQueryBuilder("uservmt")
                        .update()
                        .set({ id_exercise: 0, scenario: " " })
                        .where("uservmt.id_exercise != :id", { id: 0 })
                        .execute()
                    console.log("user vmt state exercise has been reset");
                }
            });
        } catch {
            console.log("gagal connect");
        }
    }
});