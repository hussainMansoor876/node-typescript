"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schemaTypes_1 = __importDefault(require("./schemaTypes"));
const { STRING_REQUIRED, NUMBER_REQUIRED, CREATED_DATE } = schemaTypes_1.default;
const userSchema = new mongoose_1.default.Schema({
    firstName: STRING_REQUIRED,
    lastName: STRING_REQUIRED,
    email: STRING_REQUIRED,
    phoneNumber: NUMBER_REQUIRED,
    password: STRING_REQUIRED,
    Created: CREATED_DATE
});
const User = mongoose_1.default.model('user', userSchema);
exports.default = User;
