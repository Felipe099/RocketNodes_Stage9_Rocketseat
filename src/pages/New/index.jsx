import { useState } from 'react';
import { Container, Form } from './styles';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

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

    function hundleBack() {
        navigate(-1);
    }

    async function hundleNewNote() {
        if (!title) {
            return alert('Adcione um titulo a nota para salvar.');
        }

        if (newLink) {
            return alert(
                'Você deixou um link no campo adicionar, mas não clicou em adicionar, retire o link ou clique em adicionar para salvar.'
            );
        }
        if (newTag) {
            return alert(
                'Você deixou uma tag no campo adicionar, mas não clicou em adicionar, retire a tag ou clique em adicionar para salvar.'
            );
        }
        if (links.length === 0) {
            return alert('Adicione pelo menos um Link');
        }
        if (tags.length === 0) {
            return alert('Adicione pelo menos uma tag');
        }

        await api.post('/notes', {
            title,
            description,
            tags,
            links,
        });

        alert('Nota cadastrada com sucesso!');

        navigate(-1);
    }
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <ButtonText onClick={hundleBack} title={'Voltar'} />
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
