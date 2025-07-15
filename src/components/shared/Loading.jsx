
import { FadeLoader } from 'react-spinners';

const Loading = () => {

    
    return (
        <div className='flex justify-center items-center h-[calc(100vh-350px)]'>
            <FadeLoader
                height={20}
                radius={5}
                width={8}
            />
        </div>
    );
};

export default Loading;