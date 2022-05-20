import React, { useEffect, useState } from 'react';
import LogoTT from '../../assets/img/tt.png'
import CardTask from '../../components/CardTask';
import { GetTasks } from '../../services/getTasks';
import { Container, ContainerImage, Image } from './styled';
import addTask from '../../services/postTasks'
import deleteTask from '../../services/deleteTask';
import PutTask from '../../services/putTasks';

function Home() {
    const [task, setTask] = useState('');
    const [listTask, setListTask] = useState([]);

    const handlePostTask = async (event) => {
        event.preventDefault();
        const data = {
            task: task,
            done: false,
            createdAt: new Date(),
        }
        await addTask(data);
        // para zerar o input 'task':
        setTask('');
        // faz chamada para obter as tasks novamente.
        handleGetTasks();

    }
    const handleGetTasks = async () => {
        const response = await GetTasks();
        if (response) setListTask(response);

    }
    const deleteItem = async (id) => {
        await deleteTask(id);
        handleGetTasks();
    }

    const handleUpdateTastk = async (item) => {
        const data = {
            done: !item.done
        }
        await PutTask(item.id, data);
        handleGetTasks();
    }

    useEffect(() => {
        handleGetTasks();
    }, []);

    return (
        <Container>
            <ContainerImage>
                <Image
                    src={LogoTT}
                    alt='Logo Target' />
            </ContainerImage>

            <form>
                <input
                    type='text'
                    id='task'
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                />
                <button onClick={(e) => handlePostTask(e)}>Adicionar</button>
            </form>

            {
                listTask.map((item) => {
                    const taskStatus = item.done ? 'Concluída' : 'Não concluída';
                    return <CardTask
                        data={item}
                        key={item.id}
                        fazer={item.task}
                        status={taskStatus}
                        onClick={() => deleteItem(item.id)}
                        onDone={() => handleUpdateTastk(item)}
                    />
                })
            }
        </Container>
    );
}

export default Home;