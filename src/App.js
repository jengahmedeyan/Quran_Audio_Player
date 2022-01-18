import React,{ useState} from 'react';
import AudioMp from './AudioMp';

const App = () => {
    const [data, setData] = useState([]);
    fetch('http://api.alquran.cloud/v1/surah/1/ar.abdulsamad')
    .then(res => res.json())
    .then(res =>{
        setData(res);
    })

    return (
        <div>
            <AudioMp />
            <div>
            {data.map(data => {
                <p key={data.number}>{data.englishName}</p>
            })}
            </div>
        </div>
    )
}

export default App
