import { defineStore } from "pinia";

export const usePassesStore = defineStore("PassesStore", {
	state: () => {
		return {
			passesList: [
				{
					id: "456496",
					person: "Игорь Васильевич Иванов",
					typeOfPassing: "Житель",
					product: "Обслуживание участков",
					transport: "T 400 TX 71",
					urgency: { type: "Постоянный" },
					region: "-",
					passType: {
						type: "QR",
						value: "456496",
					},
					checkpoints: ["КПП 8 Меньшино"],
					status: "Активен",
				},
				{
					id: "75576",
					person: "Игорь Васильевич Иванов",
					typeOfPassing: "Житель",
					product: "Обслуживание участков",
					transport: "T 400 TX 71",
					urgency: { type: "Постоянный" },
					region: "-",
					passType: {
						type: "RFID",
						value: "E28011052000745AFC160A59",
					},
					checkpoints: ["КПП 8 Меньшино", "КПП 6", "КПП Стрельно"],
					status: "Деактивирован",
				},
				{
					id: "785664",
					person: "Игорь Васильевич Иванов",
					typeOfPassing: "Житель",
					product: "Обслуживание участков",
					transport: "T 400 TX 71",
					urgency: { type: "Постоянный" },
					region: "-",
					passType: {
						type: "Обычный",
						value: "785664",
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
			let pass = {
				id: data.ID,
				person: data.person,
				typeOfPassing: data.typeOfPassing,
				product: data.product,
				transport: data.transport,
				urgency: { type: data.urgencyType },
				region: data.region,
				passType: {
					type: data.typeOfPass,
					value: data.passValue,
				},
				checkpoints: data.checkpoints,
				status: "Активен",
			};
			this.passesList.push(pass);
		},
	},
});
