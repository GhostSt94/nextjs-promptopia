import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is Required!']
    },
    first_name: {
        type: String,
        required: [true, 'first_name is required!'],
        match: [/^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._ ]+(?<![_.])$/, "first_name invalid, it should contain 6-20 alphanumeric letters and be unique!"]
    },
    last_name: {
        type: String,
        required: [true, 'last_name is required!'],
        match: [/^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "last_name invalid, it should contain 6-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    }
})

const User = models.User || model("User", UserSchema);

export default User;