import { useEffect, useState } from 'react';
import { Container, Links, Content } from './styles';

import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
    const navigate = useNavigate();

    const [data, setData] = useState('');
    const params = useParams();

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`);
            setData(response.data);
        }
        fetchNote();
    }, []);

    function hundleBack() {
        navigate(-1);
    }

    async function hundleRemove() {
        const confirm = window.confirm('Deseja realmente remover está nota?');

        if (confirm) {
            await api.delete(`/notes/${params.id}`);
            alert('Nota removida');
            hundleBack();
        }
    }

    return (
        <Container>
            <Header />

            <main>
                <Content>
                    <ButtonText
                        title="Excluir nota"
                        isActive
                        onClick={hundleRemove}
                    />

                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    {data.links && (
                        <Section title="Links úteis">
                            <Links>
                                {data.links.map((link) => (
                                    <li key={String(link.id)}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {link.url}
                                        </a>
                                    </li>
                                ))}
                            </Links>
                        </Section>
                    )}

                    {data.tags && (
                        <Section title="Marcadores">
                            {data.tags.map((tag) => (
                                <Tag key={String(tag.id)} title={tag.name} />
                            ))}
                        </Section>
                    )}

                    <Button title="Voltar" onClick={hundleBack} />
                </Content>
            </main>
        </Container>
    );
}
