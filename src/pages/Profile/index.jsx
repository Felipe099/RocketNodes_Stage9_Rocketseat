import { Container, Form, Avatar } from './styles';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

import { api } from '../../services/api';
import avatarPlaceHolder from '../../assets/placeHolderImg.svg';

import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile({ ...rest }) {
    const navigate = useNavigate();

    const { user, updatedProfile } = useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : avatarPlaceHolder;
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function hundleUpdate() {
        const updated = {
            name,
            email,
            old_password: passwordOld,
            password: passwordNew,
        };

        const userUpdated = Object.assign(user, updated);

        await updatedProfile({ user: userUpdated, avatarFile });
    }

    async function hundleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    function hundleBack() {
        navigate(-1);
    }

    return (
        <Container {...rest}>
            <header>
                <button type="button" onClick={hundleBack}>
                    <FiArrowLeft size={24} />
                </button>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt="Foto do Perfil do usuario" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input
                            id="avatar"
                            type="file"
                            onChange={hundleChangeAvatar}
                        />
                    </label>
                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                    onChange={(e) => setPasswordOld(e.target.value)}
                />
                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={(e) => setPasswordNew(e.target.value)}
                />
                <Button title="Salvar" onClick={hundleUpdate} />
            </Form>
        </Container>
    );
}
