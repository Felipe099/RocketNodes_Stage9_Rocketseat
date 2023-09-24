import { useEffect, useState } from 'react';
import { Container, Links, Content } from './styles';

import { useParams, Link } from 'react-router-dom';
import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
    const [data, setData] = useState('');
    const params = useParams();

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`);
            setData(response.data);
        }
        fetchNote();
    }, []);

    return (
        <Container>
            <Header />

            <main>
                <Content>
                    <ButtonText title="Excluir nota" isActive />

                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    {data.links && (
                        <Section title="Links úteis">
                            <Links>
                                {data.links.map((link) => (
                                    <li key={String(link.id)}>
                                        <a href={link.url} target="_blank" rel="noreferrer">
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

                    <Link to="/">
                        <Button title="Voltar" />
                    </Link>
                </Content>
            </main>
        </Container>
    );
}
