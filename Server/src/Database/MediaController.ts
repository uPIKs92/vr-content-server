import { Request, Response, response } from "express";
// import Helper from "../utils/helper";
// import {db} from "../utils/connection";
import helper from "../utils/helper";
import { Archive_Report, Exercise, Scenario_Action, connectDB } from "./ConnectDB";
import multer from 'multer';
import path from 'path';
import fs from "fs";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = file.originalname.split('.').pop();
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + fileExtension);
    },
});

const storage_media = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'media_vmt/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = file.originalname.split('.').pop();
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });
const upload_media = multer({ storage: storage_media });

class MediaController {
    //Upload replay video
    public upload = upload.single('video');
    public handleUpload = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id_unique_report } = req.params;
            const fileNameWithUpload = req.file.filename;
            const fileNameWithoutPath = path.basename(fileNameWithUpload);

            const video = await connectDB.synchronize().then(async () => {

                await connectDB
                    .getRepository(Archive_Report)
                    .createQueryBuilder("archive_report")
                    .update()
                    .set({ path_video: fileNameWithoutPath })
                    .where("archive_report.id_action like :id_action", { id_action: `%${id_unique_report}` })
                    .execute()
                console.log("berhasil menyimpan")
            });
            console.log(req)
            return helper.response(res, 201, "Success Upload Video", video);
        } catch (e: any) {
            console.log(e)
            return helper.responseErr(res, 500, e.message, e.errors);
        }
    }

    //Upload video media vmt actions
    public upload_video_vmt = upload_media.single('video');
    public handleUpload_video_vmt = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const fileNameWithUpload = req.file.filename;
            const fileNameWithoutPath = path.basename(fileNameWithUpload);

            const video = await connectDB.synchronize().then(async () => {

                await connectDB
                    .getRepository(Scenario_Action)
                    .createQueryBuilder("scenario_action")
                    .update()
                    .set({ media_name: fileNameWithoutPath })
                    .where("scenario_action.actions_name = :id_action", { id_action: `${id}` })
                    .execute()
                console.log("berhasil menyimpan")
            });
            console.log(req)
            return helper.response(res, 201, "Success Upload Video", video);
        } catch (e: any) {
            console.log(e)
            return helper.responseErr(res, 500, e.message, e.errors);
        }
    }

    //Upload video media vmt exercise
    public upload_video_vmt_exercise = upload_media.single('video');
    public handleUpload_video_vmt_exercise = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const fileNameWithUpload = req.file.filename;
            const fileNameWithoutPath = path.basename(fileNameWithUpload);

            const video = await connectDB.synchronize().then(async () => {

                await connectDB
                    .getRepository(Exercise)
                    .createQueryBuilder("exercise")
                    .update()
                    .set({ media_name: fileNameWithoutPath })
                    .where("exercise.project_name = :id_action", { id_action: `${id}` })
                    .execute()
                console.log("berhasil menyimpan")
            });
            console.log(req)
            return helper.response(res, 201, "Success Upload Video", video);
        } catch (e: any) {
            console.log(e)
            return helper.responseErr(res, 500, e.message, e.errors);
        }
    }

    //Upload picture media vmt actions
    public upload_picture_vmt = upload_media.single('image');
    public handleUpload_picture_vmt = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const fileNameWithUpload = req.file.filename;
            const fileNameWithoutPath = path.basename(fileNameWithUpload);

            const video = await connectDB.synchronize().then(async () => {

                await connectDB
                    .getRepository(Scenario_Action)
                    .createQueryBuilder("scenario_action")
                    .update()
                    .set({ media_name: fileNameWithoutPath })
                    .where("scenario_action.actions_name = :id_action", { id_action: `${id}` })
                    .execute()
                console.log("berhasil menyimpan")
            });
            console.log(req)
            return helper.response(res, 201, "Success Upload Picture", video);
        } catch (e: any) {
            console.log(e)
            return helper.responseErr(res, 500, e.message, e.errors);
        }
    }

    //Upload picture media vmt exercise
    public upload_picture_vmt_exercise = upload_media.single('image');
    public handleUpload_picture_vmt_exercise = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const fileNameWithUpload = req.file.filename;
            const fileNameWithoutPath = path.basename(fileNameWithUpload);

            const video = await connectDB.synchronize().then(async () => {

                await connectDB
                    .getRepository(Exercise)
                    .createQueryBuilder("exercise")
                    .update()
                    .set({ media_name: fileNameWithoutPath })
                    .where("exercise.project_name = :id_action", { id_action: `${id}` })
                    .execute()
                console.log("berhasil menyimpan")
            });
            console.log(req)
            return helper.response(res, 201, "Success Upload Picture", video);
        } catch (e: any) {
            console.log(e)
            return helper.responseErr(res, 500, e.message, e.errors);
        }
    }

    //Upload file replay Ultimate Replay 3.0
    public upload_file_replay = upload.single('file');
    public handleUpload_file_replay = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id_unique_report } = req.params;
            const fileNameWithUpload_replay_file = req.file.filename;
            const fileNameWithoutPath_replay_file = path.basename(fileNameWithUpload_replay_file);

            const replayFile = await connectDB.synchronize().then(async () => {

                await connectDB
                    .getRepository(Archive_Report)
                    .createQueryBuilder("archive_report")
                    .update()
                    .set({ replay_file: fileNameWithoutPath_replay_file })
                    .where("archive_report.id_action like :id_action", { id_action: `%${id_unique_report}` })
                    .execute()
                console.log("berhasil menyimpan")
            });
            console.log(req)
            return helper.response(res, 201, "Success Upload File Replay", replayFile);
        } catch (e: any) {
            console.log(e)
            return helper.responseErr(res, 500, e.message, e.errors);
        }
    }

    // public retrieve = async (req: Request, res: Response): Promise<Response> => {
    //     try {
    //         const { path } = req.params;
    //         const video = await connectDB
    //             .getRepository(Archive_Report)
    //             .createQueryBuilder("archive_report")
    //             .where("archive_report.path_video :path", { path: path })
    //             .getOne();
    //         if (!video) {
    //             return helper.responseErr(res, 404, 'Video not found', null);
    //         }
    //         return helper.response(res, 200, "Success Retrieve Video", video);
    //     } catch (e: any) {
    //         return helper.responseErr(res, 500, e.message, e.errors);
    //     }
    // }

    //Get video media vmt actions filename
    async getVideoName(object_name: string) {

        const video_vmt = await connectDB

            .getRepository(Scenario_Action)
            .createQueryBuilder("scenario_action")
            .where("scenario_action.actions_name = :name", { name: object_name })
            .andWhere("scenario_action.type = 'Video'")
            .getOne();

        if (video_vmt) {
            return video_vmt.media_name;
        }
    }

    //Get video media vmt exercise filename
    async getVideoExerciseName(object_name: string) {

        const video_vmt_exercise = await connectDB

            .getRepository(Exercise)
            .createQueryBuilder("exercise")
            .where("exercise.project_name = :name", { name: object_name })
            .andWhere("exercise.media_type = 'Video'")
            .getOne();

        if (video_vmt_exercise) {
            return video_vmt_exercise.media_name;
        }
    }

    //Get picture media vmt actions filename
    async getPictureName(object_name: string) {

        const picture_vmt = await connectDB

            .getRepository(Scenario_Action)
            .createQueryBuilder("scenario_action")
            .where("scenario_action.actions_name = :name", { name: object_name })
            .andWhere("scenario_action.type = 'Picture'")
            .getOne();

        if (picture_vmt) {
            return picture_vmt.media_name;
        }
    }

    //Get picture media vmt exercise filename
    async getPictureExerciseName(object_name: string) {

        const picture_vmt_exercise = await connectDB

            .getRepository(Exercise)
            .createQueryBuilder("exercise")
            .where("exercise.project_name = :name", { name: object_name })
            .andWhere("exercise.media_type = 'Picture'")
            .getOne();

        if (picture_vmt_exercise) {
            return picture_vmt_exercise.media_name;
        }
    }

    // public retrieve_video_vmt = async (req: Request, res: Response): Promise<Response> => {
    //     try {
    //         const { name } = req.params;
    //         const video_vmt = await connectDB
    //             .getRepository(Scenario_Action)
    //             .createQueryBuilder("scenario_action")
    //             .where("scenario_action.actions_name = :name", { name: name })
    //             .andWhere("scenario_action.type = 'Video'")
    //             .getOne();      
    //         if (!video_vmt) {
    //             return helper.responseErr(res, 404, 'Video not found', null);
    //         }
    //         return helper.response(res, 200, "Success Retrieve Video", video_vmt.media_name);
    //     } catch (e: any) {
    //         return helper.responseErr(res, 500, e.message, e.errors);
    //     }
    // }

    //Get media youtube link vmt actions
    public retrieve_youtube_link_vmt = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { object_name } = req.params;

            const youtube_vmt = await connectDB

                .getRepository(Scenario_Action)
                .createQueryBuilder("scenario_action")
                .where("scenario_action.actions_name = :name", { name: object_name })
                .andWhere("scenario_action.type = 'YouTube'")
                .getOne();

            if (!youtube_vmt) {
                return helper.responseErr(res, 404, 'Youtube Link not found', null);
            }

            return res.send(youtube_vmt.media_name)
        } catch (e: any) {
            return helper.responseErr(res, 500, e.message, e.errors);
        }
    }

    //Get media youtube link vmt exercise
    public retrieve_youtube_link_vmt_exercise = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { object_name } = req.params;

            const youtube_vmt_exercise = await connectDB

                .getRepository(Exercise)
                .createQueryBuilder("exercise")
                .where("exercise.project_name = :name", { name: object_name })
                .andWhere("exercise.media_type = 'YouTube'")
                .getOne();

            if (!youtube_vmt_exercise) {
                return helper.responseErr(res, 404, 'Youtube Link Exercise not found', null);
            }

            return res.send(youtube_vmt_exercise.media_name)
        } catch (e: any) {
            return helper.responseErr(res, 500, e.message, e.errors);
        }
    }

    //Get media type vmt actions
    public retrieve_media_type_vmt = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { object_name } = req.params;

            const media_type_vmt = await connectDB

                .getRepository(Scenario_Action)
                .createQueryBuilder("scenario_action")
                .where("scenario_action.actions_name = :name", { name: object_name })
                .getOne();

            if (!media_type_vmt) {
                return helper.responseErr(res, 404, 'Video not found', null);
            }

            return res.send(media_type_vmt.type)
        } catch (e: any) {
            return helper.responseErr(res, 500, e.message, e.errors);
        }
    }

    //Get deskripsi vmt exercise
    public get_deskripsi = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { object_name } = req.params;

            const exercise = await connectDB

                .getRepository(Exercise)
                .createQueryBuilder("exercise")
                .where("exercise.project_name = :name", { name: object_name })
                .getOne();

            if (!exercise) {
                return helper.responseErr(res, 404, 'eror get exercise!!', null);
            }

            return res.send(exercise)
        } catch (e: any) {
            return helper.responseErr(res, 500, e.message, e.errors);
        }
    }

    // public retrieve_file_replay = async (req: Request, res: Response): Promise<Response> => {
    //     try {
    //         const { path } = req.params;
    //         const ReplayFile = await connectDB
    //             .getRepository(Archive_Report)
    //             .createQueryBuilder("archive_report")
    //             .where("archive_report.replay_file :path", { path: path })
    //             .getOne();
    //         if (!ReplayFile) {
    //             return helper.responseErr(res, 404, 'File Replay Not Found', null);
    //         }
    //         return helper.response(res, 200, "Success Retrieve File Replay", ReplayFile);
    //     } catch (e: any) {
    //         return helper.responseErr(res, 500, e.message, e.errors);
    //     }
    // }

    // public listVideo = async (req: Request, res: Response): Promise<Response> => {
    //     try {
    //         const videos = await connectDB
    //             .getRepository(Archive_Report)
    //             .createQueryBuilder("archive_report.path_video")
    //             .getMany();
    //         return helper.response(res, 200, "Success Retrieve Video", videos);
    //     } catch (e: any) {
    //         return helper.responseErr(res, 500, e.message, e.errors);
    //     }
    // }

    // public listFileReplay = async (req: Request, res: Response): Promise<Response> => {
    //     try {
    //         const ReplayFile = await connectDB
    //             .getRepository(Archive_Report)
    //             .createQueryBuilder("archive_report.replay_file")
    //             .getMany();
    //         return helper.response(res, 200, "Success Retrieve File Replay", ReplayFile);
    //     } catch (e: any) {
    //         return helper.responseErr(res, 500, e.message, e.errors);
    //     }
    // }
}

export default new MediaController();