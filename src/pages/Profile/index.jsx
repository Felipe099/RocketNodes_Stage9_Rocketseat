import { Container, Form, Avatar } from './styles';

import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile({ ...rest }) {
    return (
        <Container {...rest}>
            <header>
                <a href="/">
                    <FiArrowLeft />
                </a>
            </header>

            <Form>
                <Avatar>
                    <img
                        src="https://www.github.com/Felipe099.png"
                        alt="Foto do Perfil do usuario"
                    />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id="avatar" type="file" />
                    </label>
                </Avatar>
                <Input placeholder="Nome" type="text" icon={FiUser} />
                <Input placeholder="E-mail" type="text" icon={FiMail} />
                <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                />
                <Input placeholder="Nova senha" type="password" icon={FiLock} />

                <Button title="Salvar" />
            </Form>
        </Container>
    );
}
