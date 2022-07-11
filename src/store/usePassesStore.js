import { defineStore } from "pinia";

export const usePassesStore = defineStore("PassesStore", {
	state: () => {
		return {
			passesList: [
				{
					id: "456496",
					person: "Игорь Васильевич Иванов",
					transport: "T 400 TX 71",
					passType: {
						type: "QR",
					},
					checkpoints: ["КПП 8 Меньшино"],
					status: "Активен",
				},
				{
					id: "75576",
					person: "Игорь Васильевич Иванов",
					transport: "T 400 TX 71",
					passType: {
						type: "RFID",
					},
					checkpoints: ["КПП 8 Меньшино", "КПП 6", "КПП Стрельно"],
					status: "Деактивирован",
				},
				{
					id: "785664",
					person: "Игорь Васильевич Иванов",
					transport: "T 400 TX 71",
					passType: {
						type: "Обычный",
					},
					checkpoints: ["КПП 8 Меньшино"],
					status: "Заблокирован",
				},
			],
		};
	},
	actions: {
		setStatus(id, status) {
			this.passesList.find((el) => {
				return el.id == id;
			}).status = status;
		},
		createPass(data) {
			let pass = 				{
				id: data.ID,
				person: data.person,
				transport: data.transport,
				passType: {
					type: data.typeOfPass,
				},
				checkpoints: data.checkpoints,
				status: "Активен",
			}
			this.passesList.push(pass)
		}
	},
});
