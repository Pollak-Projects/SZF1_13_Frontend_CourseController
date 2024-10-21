import {z} from "zod";

export default class AdminTopicDTOs {
    static createTopicDTO = z.object({
        topicName: z.string(),
        subjects: z.string().array().optional(),
    })

    static updateTopicDTO = z.object({
        id: z.string(),
        topicName: z.string(),
        subjects: z.string().array(),
    })
}