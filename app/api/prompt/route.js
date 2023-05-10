import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt";

export async function GET(req) {
    try {
        await connectToDB();

        const { searchParams } = new URL(req.url);
        const search = searchParams.get('search');

        const prompts = await Prompt.find().or([{ prompt: { $regex: search || '', $options: 'i' } }, { tag: { $regex: search || '', $options: 'i' } }]).populate('creator')

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response('Failed to fetch all prompts', { status: 500 })
    }
}