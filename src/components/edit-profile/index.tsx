import { useRef, useState, type FC } from "react"
import styles from "./index.module.css";
import { Input } from "../input";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../app/hooks";
import { selectCurrent } from "../../features/user/userSlice";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { hasErrorField } from "../../utils/hasErrorField";
import { showMessage } from "../../utils/showMessage";
import { SVG } from "../svg";
import { useLazyCurrentQuery, useUpdateUserMutation } from "../../app/services/userApi";

type EditUser = {
    surname: string
    userName: string
    patronymic: string
    email: string
    tel: string
}

type Props = {
    onCloseModal: () => void
}

const editUserSchema = yup.object({
    surname: yup.string().required("Заполните обязательное поле").matches(/[а-яА-ЯёЁ]+/, "Вводить можно только русские буквы"),
    userName: yup.string().required("Заполните обязательное поле").matches(/[а-яА-ЯёЁ]+/, "Вводить можно только русские буквы"),
    patronymic: yup.string().required("Заполните обязательное поле").matches(/[а-яА-ЯёЁ]+/, "Вводить можно только русские буквы"),
    email: yup.string().required("Заполните обязательное поле").matches(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i, "Введите корректную эл. почту"),
    tel: yup.string().required('Заполните обязательное поле').matches(/^((\+7|7|8)+([0-9]){10})$/, 'Введите корректный номер телефона'),
});

const allowedTypesImage = ["image/jpeg", "image/png", "image/webp"];

export const EditProfile: FC<Props> = ({ onCloseModal }) => {

    const user = useAppSelector(selectCurrent);

    const inputFileRef = useRef<HTMLInputElement>(null!);
    const [userImage, setUserImage] = useState<File | null>(null);
    const [imageURL, setImageURL] = useState<any>();

    const [updateUser] = useUpdateUserMutation();
    const [triggerCurrentQuery] = useLazyCurrentQuery();
    
    const { handleSubmit, register, formState: { errors } } = useForm<EditUser>({
        defaultValues: {
            surname: user?.surname,
            userName: user?.userName,
            patronymic: user?.patronymic,
            email: user?.email,
            tel: user?.tel
        },
        resolver: yupResolver(editUserSchema),
        mode: "onChange"
    });

    const onSubmit = async (data: EditUser) => {
        try {
            const formData = new FormData();
            data.surname !== user?.surname && formData.append("surname", data.surname);
            data.userName !== user?.userName && formData.append("userName", data.userName);
            data.patronymic !== user?.patronymic && formData.append("patronymic", data.patronymic);
            data.email !== user?.email && formData.append("email", data.email);
            data.tel !== user?.tel && formData.append("tel", data.tel);
            userImage && formData.append("userImage", userImage);

            await updateUser({ userData: formData, id: user!.id }).unwrap();
            await triggerCurrentQuery().unwrap();
            onCloseModal();
            showMessage({ message: "Пользователь успешно обновлён", variantMessage: "success" });

        } catch (error) {
            if (hasErrorField(error)) {
                showMessage({ message: error.data.error, variantMessage: "error" })
            }
        }
    }

    const onChoiseFile = () => {
        inputFileRef?.current.click();
    }

    const handleAddFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const reader = new FileReader();

        if (event.target.files && event.target.files.length > 0) {
            if (!allowedTypesImage.includes(event.target.files[0].type) || event.target.files[0].size / (1024 * 1024) > 10) {
                showMessage({ message: "Можно загружать только изображения с типом jpeg, png, webp  и размером не больше 10мб", variantMessage: "warning" });
                return;
            }
            setUserImage(event.target.files[0]);
            reader.onload = (e) => {
                setImageURL(e.target?.result);
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    const removeFile = () => {
        setUserImage(null);
    }

    return (
        <form className={styles.edit__user_form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputs__wrapper}>
                <div className={styles.image__wrapper}>
                    <div className={styles.input__title_wrapper}>
                        <SVG id="avatar-icon" />
                        <p className={styles.user__image_title}>Фото профиля</p>
                    </div>
                    <input ref={inputFileRef} onChange={handleAddFile} type="file" className={styles.inputFile} />
                    <div className={styles.file__wrapper}>
                        <button type="button" onClick={onChoiseFile} className={styles.file__btn}>Выберите фото</button>
                        {userImage ? <img className={styles.image__uploaded} src={imageURL} alt="Загруженное изображение" /> : <p>Изображение не выбрано</p>}
                        {userImage && <button onClick={removeFile} className={styles.delete__file_btn}>
                            <span></span>
                            <span></span>
                        </button>}
                    </div>
                </div>
                <Input
                    type="text"
                    error={!!errors.surname}
                    errorText={errors?.surname?.message}
                    name="surname"
                    id="Surname"
                    title="Фамилия"
                    register={register("surname")}
                    iconID="user-icon"
                    placeholder="Петров"
                />
                <Input
                    type="text"
                    error={!!errors.userName}
                    errorText={errors?.userName?.message}
                    name="userName"
                    id="UserName"
                    title="Имя"
                    register={register("userName")}
                    iconID="user-icon"
                    placeholder="Пётр"
                />
                <Input
                    type="text"
                    error={!!errors.patronymic}
                    errorText={errors?.patronymic?.message}
                    name="patronymic"
                    id="Patronymic"
                    title="Отчество"
                    register={register("patronymic")}
                    iconID="user-icon"
                    placeholder="Петрович"
                />
                <Input
                    type="text"
                    error={!!errors.email}
                    errorText={errors?.email?.message}
                    name="email"
                    id="Email"
                    title="Эл. почта"
                    register={register("email")}
                    iconID="email-icon"
                    placeholder="petrov@yandex.ru"
                />
                <Input
                    type="text"
                    error={!!errors.tel}
                    errorText={errors?.tel?.message}
                    name="tel"
                    id="Tel"
                    title="Номер телефона"
                    register={register("tel")}
                    iconID="tel-icon"
                    placeholder="8 (999) 999-99-99"
                />
            </div>
            <div className={styles.edit__user_btn_wrapper}>
                <button type="submit" className={styles.edit__user_btn}>
                    <SVG id="save-icon" />
                    Сохранить изменения
                </button>
            </div>
        </form>
    )
}