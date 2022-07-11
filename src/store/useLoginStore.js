import { defineStore } from "pinia";
import axios from "axios";

export const useLoginStore = defineStore("LoginStore", {
	actions: {
        async loginRequest(phone, password) {
            try{
			let res = await axios.post("https://api.lokeo.ru/api/users/login", {
				phone,
				password,
            })
            return res.data
            } catch (e) {
                throw new Error(e)
            }
                
		},
		setTokens(tokens) {
			localStorage.accessToken = tokens.token;
			localStorage.refreshToken = tokens.refreshToken;
		},
		removeTokens() {
			localStorage.removeItem("accessToken");
			localStorage.removeItem("refreshToken");
		},
	},
});
