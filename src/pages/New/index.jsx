import { useState } from 'react';
import { Container, Form } from './styles';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

export function New() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState('');

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');

    const navigate = useNavigate();

    function hundleAddLink() {
        setLinks((prevState) => [...prevState, newLink]);
        setNewLink('');
    }

    function hundleRemoveLink(deleted) {
        setLinks((prevState) => prevState.filter((link) => link !== deleted));
    }

    function hundleAddTag() {
        setTags((prevState) => [...prevState, newTag]);
        setNewTag('');
    }

    function hundleRemoveTag(deleted) {
        setTags((prevState) => prevState.filter((tag) => tag !== deleted));
    }

    async function hundleNewNote() {
        await api.post('/notes', {
            title,
            description,
            tags,
            links
        });

        alert('Nota cadastrada com sucesso!');

        navigate('/');
    }
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input
                        placeholder="Título"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Textarea
                        placeholder="Observação"
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <Section title="Links úteis">
                        {links.map((link, index) => (
                            <NoteItem
                                key={String(index)}
                                value={link}
                                onClick={() => {
                                    hundleRemoveLink(link);
                                }}
                            />
                        ))}
                        <NoteItem
                            isNew
                            placeholder="Novo link"
                            value={newLink}
                            onChange={(e) => setNewLink(e.target.value)}
                            onClick={hundleAddLink}
                        />
                    </Section>
                    <Section title="Marcadores">
                        <div className="tags">
                            {tags.map((tag, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => {
                                        hundleRemoveTag(tag);
                                    }}
                                />
                            ))}
                            <NoteItem
                                isNew
                                placeholder="Nova tag"
                                value={newTag}
                                onChange={(e) => setNewTag(e.target.value)}
                                onClick={hundleAddTag}
                            />
                        </div>
                    </Section>

                    <Button title="Salvar" onClick={hundleNewNote} />
                </Form>
            </main>
        </Container>
    );
}
