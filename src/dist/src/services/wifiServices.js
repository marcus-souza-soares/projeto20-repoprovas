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
import Cryptr from "cryptr";
import * as wifiRepository from "../repositories/wifiRepository.js";
export function createWifi(userId, wifi) {
    return __awaiter(this, void 0, void 0, function () {
        var title, wifiFromBb;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!userId)
                        throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
                    title = wifi.title;
                    return [4 /*yield*/, wifiRepository.verifyIfExists({
                            title: title,
                            userId: userId
                        })];
                case 1:
                    wifiFromBb = _a.sent();
                    if ((wifiFromBb === null || wifiFromBb === void 0 ? void 0 : wifiFromBb.title.trim()) === title)
                        throw { code: "NotAllowed", message: "Wifi já cadastrado!" };
                    return [4 /*yield*/, wifiRepository.createWifi(__assign(__assign({}, wifi), { password: encriptPassword(wifi.password), userId: userId }))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
export function getWifis(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var wifis, wifi_list;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!userId)
                        throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
                    return [4 /*yield*/, wifiRepository.getwifis(userId)];
                case 1:
                    wifis = _a.sent();
                    wifi_list = wifis === null || wifis === void 0 ? void 0 : wifis.map(function (wifi) {
                        return __assign(__assign({}, wifi), { password: decriptPassword(wifi.password) });
                    });
                    return [2 /*return*/, wifi_list];
            }
        });
    });
}
export function getUniqueWifi(userId, wifiId) {
    return __awaiter(this, void 0, void 0, function () {
        var wifi;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!wifiId)
                        throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
                    return [4 /*yield*/, wifiRepository.getUniqueWifi(wifiId)];
                case 1:
                    wifi = _a.sent();
                    if (!wifi)
                        throw { code: "NotFound", message: "Essa rede não existe..." };
                    if (userId !== wifi.userId)
                        throw {
                            code: "NotAllowed",
                            message: "Você não tem permissão de acesso a esse wifi!"
                        };
                    return [2 /*return*/, __assign(__assign({}, wifi), { password: decriptPassword(wifi.password) })];
            }
        });
    });
}
export function deleteWifi(userId, wifiId) {
    return __awaiter(this, void 0, void 0, function () {
        var wifi;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!wifiId)
                        throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
                    return [4 /*yield*/, wifiRepository.getUniqueWifi(wifiId)];
                case 1:
                    wifi = _a.sent();
                    if (!wifi)
                        throw { code: "NotFound", message: "Essa rede não existe..." };
                    if (userId !== wifi.userId)
                        throw {
                            code: "NotAllowed",
                            message: "Você não tem permissão para deletar essa credencial!"
                        };
                    return [4 /*yield*/, wifiRepository.deleteWifi(wifiId)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function encriptPassword(password) {
    var cryptr = new Cryptr(process.env.SECRET_KEY);
    return cryptr.encrypt(password);
}
function decriptPassword(encripted_password) {
    var cryptr = new Cryptr(process.env.SECRET_KEY);
    return cryptr.decrypt(encripted_password);
}
