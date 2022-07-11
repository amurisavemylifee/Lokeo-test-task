import { defineStore } from "pinia";

export const useModalStore = defineStore("ModalStore", {
	state: () => {
		return {
			message: "",
			isHidden: true,
			timer: null,
		};
	},
	actions: {
		setMessage(message) {
			this.message = message;
		},
		showModal() {
			this.isHidden = false;
		},
		hideModal() {
			this.isHidden = true;
			this.clearTimer();
		},
		setTimer(func) {
			this.timer = setTimeout(() => {
				func();
				this.timer = null;
			}, 4000);
		},
		clearTimer() {
			clearTimeout(this.timer);
			this.timer = null;
		},
		createModal(message) {
			this.setMessage(message);
			if (this.timer) {
				this.clearTimer();
			} else {
				this.showModal();
			}
			this.setTimer(this.hideModal);
		},
	},
});
