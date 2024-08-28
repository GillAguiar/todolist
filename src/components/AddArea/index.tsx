import { useState } from 'react';
import * as C from './styles';

export const AddArea = () => {
    const [inputText, setInputTest] = useState('');

    return (
        <C.Container>
            <div className='image'>➕</div>
            <input
                type="text"
                placeholder='Adicione uma tarefa'
                value={inputText}
                onChange={e=> setInputTest(e.target.value)}

                />
        </C.Container>
    )
}