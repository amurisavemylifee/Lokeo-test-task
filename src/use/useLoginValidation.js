import { useField, useForm } from "vee-validate";
import { string, object } from "yup";

export const useLoginValidation = () => {
	const validationSchema = object({
		phone: string()
			.matches(
				/^(\+7|8)?[\s\-]?[489][0-9]{2}[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm,
				"Неправильный формат номера телефона"
			)
			.required("Поле телефон обязательное"),

		password: string()
			.min(6, "Минимальная длинна пароля 6 символов")
			.required("Поле пароль обязательное"),
	});
	const { meta, errors, resetForm, validate } = useForm({
		validationSchema,
	});
	validate();
	const { value: phone } = useField("phone");
	const { value: password } = useField("password");
	return {
		phone,
		password,
		errors,
		meta,
		resetForm,
	};
};
