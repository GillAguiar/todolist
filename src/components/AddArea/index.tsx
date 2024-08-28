import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

export const AddArea = () => {
    const [inputText, setInputTest] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            console.log('Deu certo');
            
        }
    }

    return (
        <C.Container>
            <div className='image'>➕</div>
            <input
                type="text"
                placeholder='Adicione uma tarefa'
                value={inputText}
                onChange={e=> setInputTest(e.target.value)}
                onKeyUp={handleKeyUp}
                />
        </C.Container>
    )
}