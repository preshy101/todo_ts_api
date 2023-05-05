"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Todo_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Todo = Todo_1 = class Todo extends sequelize_typescript_1.Model {
};
Todo.TODO_TABLE_NAME = "todo";
Todo.TODO_ID = "id";
Todo.TODO_NAME = "name";
Todo.TODO_DESCRIPTION = "description";
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: Todo_1.TODO_ID,
    }),
    __metadata("design:type", Number)
], Todo.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        field: Todo_1.TODO_NAME,
    }),
    __metadata("design:type", String)
], Todo.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        field: Todo_1.TODO_DESCRIPTION,
    }),
    __metadata("design:type", String)
], Todo.prototype, "description", void 0);
Todo = Todo_1 = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: Todo_1.TODO_TABLE_NAME
    })
], Todo);
exports.Todo = Todo;
