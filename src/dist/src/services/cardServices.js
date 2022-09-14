var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as cardRepository from "../repositories/cardsRepository.js";
import Cryptr from "cryptr";
import dotenv from "dotenv";
dotenv.config();
export function createCard(card, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var title, cardFromDB;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    title = card.title;
                    return [4 /*yield*/, cardRepository.verifyIfExists({ userId: userId, title: title })];
                case 1:
                    cardFromDB = _a.sent();
                    if ((cardFromDB === null || cardFromDB === void 0 ? void 0 : cardFromDB.title) === title)
                        throw { code: "NotAllowed", message: "Cartão já cadastrado!" };
                    return [4 /*yield*/, cardRepository.createCard(__assign(__assign(__assign({}, card), encriptData(card.password, card.cvc)), { userId: userId }))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
export function getCards(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var cards, card_list;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!userId)
                        throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
                    return [4 /*yield*/, cardRepository.getCards(userId)];
                case 1:
                    cards = _a.sent();
                    card_list = cards.map(function (card) {
                        return __assign(__assign({}, card), decriptData(card.password, card.cvc));
                    });
                    return [2 /*return*/, card_list];
            }
        });
    });
}
export function getUniqueCard(userId, cardId) {
    return __awaiter(this, void 0, void 0, function () {
        var card;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!cardId)
                        throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
                    return [4 /*yield*/, cardRepository.getUniqueCard(cardId)];
                case 1:
                    card = _a.sent();
                    if (!card)
                        throw { code: "NotFound", message: "Essa credencial não existe..." };
                    if (userId !== card.userId)
                        throw {
                            code: "NotAllowed",
                            message: "Você não tem permissão de acesso a essa credencial!"
                        };
                    return [2 /*return*/, __assign(__assign({}, card), decriptData(card.password, card.cvc))];
            }
        });
    });
}
export function deleteCard(userId, cardId) {
    return __awaiter(this, void 0, void 0, function () {
        var card;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!cardId)
                        throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
                    return [4 /*yield*/, cardRepository.getUniqueCard(cardId)];
                case 1:
                    card = _a.sent();
                    console.log(card);
                    if (!card)
                        throw { code: "NotFound", message: "Esse cartão não existe..." };
                    if (userId !== card.userId)
                        throw {
                            code: "NotAllowed",
                            message: "Você não tem permissão para deletar esse cartão!"
                        };
                    return [4 /*yield*/, cardRepository.deleteCard(cardId)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function encriptData(password, cvc) {
    var cryptr = new Cryptr(process.env.SECRET_KEY);
    var cPassword = cryptr.encrypt(password);
    var cCvc = cryptr.encrypt(cvc);
    return {
        password: cPassword,
        cvc: cCvc
    };
}
function decriptData(cPassword, cCvc) {
    var cryptr = new Cryptr(process.env.SECRET_KEY);
    var password = cryptr.decrypt(cPassword);
    var cvc = cryptr.decrypt(cCvc);
    return {
        password: password,
        cvc: cvc
    };
}
