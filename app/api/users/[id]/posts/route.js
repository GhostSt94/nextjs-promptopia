import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt";
import User from "@models/user";

export async function GET(req, { params }) {
    try {
        await connectToDB();
        const prompts = await Prompt.find({ creator: params.id }).populate('creator')

        let user;
        if (!prompts.length) {
            user = await User.findById(params.id)
        } else {
            user = prompts[0]?.creator
        }

        return new Response(JSON.stringify({ prompts: prompts, user: user }), { status: 200 })
    } catch (error) {
        return new Response('Failed to fetch all prompts', { status: 500 })
    }
}