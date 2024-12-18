import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    id: {type: String,
        required: true},
        
    email: {type: String,
           required: true}
});

const User = mongoose.model('user', UserSchema);
export { User };