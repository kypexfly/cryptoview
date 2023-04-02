"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const validator_1 = __importDefault(require("validator"));
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});
// static signup method
userSchema.statics.signup = function (email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        // validation
        if (!email || !password) {
            throw Error('All fields must be filled');
        }
        if (!validator_1.default.isEmail(email)) {
            throw Error('Email not valid');
        }
        if (!validator_1.default.isStrongPassword(password)) {
            throw Error('Password not strong enough');
        }
        const exists = yield this.findOne({ email });
        if (exists) {
            throw Error('Email already in use');
        }
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(password, salt);
        const user = yield this.create({ email, password: hash });
        return user;
    });
};
// static login method
userSchema.statics.login = function (email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!email || !password) {
            throw Error('All fields must be filled');
        }
        const user = yield this.findOne({ email });
        if (!user) {
            throw Error('Incorrect email');
        }
        const match = yield bcrypt_1.default.compare(password, user.password);
        if (!match) {
            throw Error('Incorrect password');
        }
        return user;
    });
};
const User = mongoose_1.default.model('User', userSchema);
exports.User = User;
//# sourceMappingURL=userModel.js.map